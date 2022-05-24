import { gql, useMutation, useQuery } from "@apollo/client";
import Modal from "@components/common/modal/modal";
import Button from '@components/ui/button';
import Loading from '@components/ui/loader/loader';
import { updateSubscriptionPaymentMethod } from '@graphql/mutations';
import { listAllPaymentMethods } from '@graphql/queries';
import CloseIcon from '@mui/icons-material/Close';
import { getCardUrl } from "@utils/card-helper";
import Image from "next/image";
import React from 'react';
import { GetSubscriptionQuery, ListAllPaymentMethodsQuery, ListAllPaymentMethodsQueryVariables, paymentMethod, UpdateSubscriptionPaymentMethodMutation, UpdateSubscriptionPaymentMethodMutationVariables } from "src/API";
import styles from './styles.module.css';

interface Props {
  func?: any,
  subscription_data?: GetSubscriptionQuery,
  handelRefetch?: any,
  handleSetCard?: any,
  user_id: string;
  open: boolean;
  onClose: any;
}

const ChangeCard = ({ func, subscription_data: main_data, handelRefetch, open, onClose, handleSetCard, user_id: userAuthID }: Props) => {
  const [selected, setSelected] = React.useState(0);

  const { data, loading, error } =
    useQuery<ListAllPaymentMethodsQuery, ListAllPaymentMethodsQueryVariables>(gql(listAllPaymentMethods), {
      variables: { input: { user_id: userAuthID } },
    });
  const [updatePayment, { data: data_payment, loading: loading_payment, error: error_payment }] =
    useMutation<UpdateSubscriptionPaymentMethodMutation, UpdateSubscriptionPaymentMethodMutationVariables>(gql(updateSubscriptionPaymentMethod));
  const [filterData, setFilterData] = React.useState<paymentMethod | null>(null);

  React.useEffect(() => {
    if (data) {
      // handelRefetch();
      setFilterData(data?.listAllPaymentMethods?.paymentMethods[0])
    }
  }, [loading_payment, data]);

  React.useEffect(() => {
    if (data_payment) {
      handelRefetch();
      func();
    }
  }, [data_payment])

 
  const handelChangeCard = (event: any, val: any, ind: number) => {
    // console.log({e: event});
    if (event == val.payment_method_id) {
      setFilterData(val);
    }
    setSelected(ind)
  }


  const UpdateCard = () => {
    updatePayment({
      variables: {
        input: {
          user_id: userAuthID,
          subscription_id: `${main_data?.getSubscription?.subscription_id}`,
          payment_method_id: filterData?.payment_method_id,
          default_flag: filterData?.default_flag
        }
      }
    })
  }




  return (
    <>
      <Modal open={open} onClose={onClose}>
        {/* <MediaQuery minDeviceWidth={1224} > */}
        {loading || loading_payment ? <Loading /> :
          <div className={styles.main}>
            <div className={styles.heading}>
              <p className={styles.heading_p}>Change Card</p>
              <button style={{ color: 'white' }} onClick={onClose}><CloseIcon /></button>
            </div>
            <div className={styles.data}>
              {
                data?.listAllPaymentMethods?.paymentMethods?.map((val, ind) =>

                  <div className={styles.data_main} onClick={() => handelChangeCard(val?.payment_method_id, val, ind)} key={ind} style={val?.default_flag == "Y" ? { backgroundColor: "#F8FFF5", border: "1px solid #A2CF96" } : { backgroundColor: "#FFFAF1", border: "1px solid #EED1AF" }}>
                    <div className={styles.left} >
                      <input type="radio"
                        value={val?.payment_method_id}
                        checked={selected == ind}
                        onChange={(e) => handelChangeCard(e.target.value, val, ind)} />
                      <div className={styles.left_main}>
                        <img src={getCardUrl(val?.card_brand?.toLowerCase())} alt="" width={'45px'} height={'45px'} />
                        <p className={styles.left_p}>Ending in {val?.last_4} </p>
                        <p className={styles.left_p2}> This card is recommended for you <span style={{ color: "#2776AF" }}>Why?</span></p>
                      </div>
                    </div>
                    <div className={styles.right_main}>
                      <div className={styles.right1}>
                        <p className={styles.right_heading} style={val?.default_flag == "Y" ? { color: "#98CF89" } : { color: "#F8B76B" }} >Name on Card</p>
                        <p className={styles.right_text}>{val?.cardholder_name} </p>
                      </div>
                      <div className={styles.right1}>
                        <p className={styles.right_heading} style={val?.default_flag == "Y" ? { color: "#98CF89" } : { color: "#F8B76B" }}>Expire on</p>
                        <p className={styles.right_text}>{val?.exp_month}/{val?.exp_year} </p>
                      </div>
                    </div>
                  </div>
                )
              }
            </div>
            <div className={styles.button} onClick={() => {
              if (handleSetCard) {
                func();
                return handleSetCard(filterData)
              }
              UpdateCard()
            }
            } >
              <Button>Use this Card</Button>
            </div>
          </div>}
      </Modal>
      {/* </MediaQuery> */}
      {/* <MediaQuery maxDeviceWidth={1223} >
        <div className={styless.main}>
          <div className={styless.heading}>
            <p className={styles.heading_p}>Change Card</p>
            <button style={{ color: 'white' }} onClick={func}><CloseIcon /></button>
          </div>
          <div className={styless.data}>
            {
              data?.listAllPaymentMethods?.paymentMethods?.map((val, ind) =>

                <div className={styless.data_main} onClick={() => handelChangeCard(val?.payment_method_id, val, ind)} key={ind} style={val?.default_flag == "Y" ? { backgroundColor: "#F8FFF5", border: "1px solid #A2CF96" } : { backgroundColor: "#FFFAF1", border: "1px solid #EED1AF" }}>
                  <div className={styless.left}>
                    <input type="radio"
                      value={val?.payment_method_id}
                      checked={selected == ind}
                      onChange={(e) => handelChangeCard(e.target.value, val, ind)} />
                    <div className={styless.left_main}>
                      <Image src={getCardUrl(val?.card_brand?.toLowerCase())} alt="" width={"45px"} height={"14px"} />
                      <p className={styles.left_p}>Ending in {val?.last_4} </p>
                    </div>
                  </div>
                  <div className={styless.right_main}>
                    <div className={styless.right1}>
                      <p className={styless.right_heading} style={val?.default_flag == "Y" ? { color: "#98CF89" } : { color: "#F8B76B" }} >Name on Card</p>
                      <p className={styless.right_text}>{val?.cardholder_name} </p>
                    </div>
                    <div className={styless.right1}>
                      <p className={styless.right_heading} style={val?.default_flag == "Y" ? { color: "#98CF89" } : { color: "#F8B76B" }}>Expire on</p>
                      <p className={styless.right_text}>{val?.exp_month}/{val?.exp_year} </p>
                    </div>
                  </div>
                  <p className={styles.left_p2}> This card is recommended for you <span style={{ color: "#2776AF" }}>Why?</span></p>
                </div>
              )
            }
          </div>
          <div className={styless.button} onClick={() => {
            if (handleSetCard) {
              func();
              return handleSetCard(filterData)
            }
            UpdateCard()
          }} >
            <Button
              name={"Use this Card"}
              bgcolor={"#70A42F"}
              color={"#FFFFFF"}
              fontsize={"16px"}
              fontweight={"600"}
              width={"100%"}
              height={"38px"}
              radius={"10px"}
            />
          </div>
        </div>
      </MediaQuery> */}
    </>
  );
};

export default ChangeCard;
