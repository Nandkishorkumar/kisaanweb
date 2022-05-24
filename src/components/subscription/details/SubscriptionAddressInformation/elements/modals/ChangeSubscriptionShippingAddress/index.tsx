import React from "react";
import styles from "./styles.module.css";
import CloseIcon from "@mui/icons-material/Close";
import Radio from "@mui/material/Radio";
import { gql, useQuery } from '@apollo/client';
import Button from '@components/ui/button';
import Loading from "@components/ui/loader/loader";
import { useMutation } from "@apollo/client";
import dynamic from "next/dynamic";
import styless from './mobile.module.css';
import { listAllAddresses } from "@graphql/queries";
import { address, GetSubscriptionQuery, ListAllAddressesQuery, ListAllAddressesQueryVariables, UpdateSubscriptionBillingAddressMutation, UpdateSubscriptionBillingAddressMutationVariables, UpdateSubscriptionShippingAddressMutation, UpdateSubscriptionShippingAddressMutationVariables } from "src/API";
import { updateSubscriptionBillingAddress, updateSubscriptionShippingAddress } from "@graphql/mutations";
import Modal from "@components/common/modal/modal";
// import { AddBilling } from "../AddBilling";
import { formatPhoneNumberIntl } from "react-phone-number-input";
import { toast } from "react-toastify";

// const MediaQuery = dynamic(() => import('react-responsive'));

interface Props {
  func?: any;
  handelRefetch: any;
  subscription_data: GetSubscriptionQuery | undefined;
  handleSuccess?: any;
  heading?: any;
  user_id: string;
  address_type: 'billing' | 'shipping';
  open: boolean;
  onClose: any;
}

export const ChangeSubscriptionAddress = ({ open, onClose, address_type, func = () => { }, subscription_data: main_data, handleSuccess = null, heading = "Change Billing Address", handelRefetch = () => { }, user_id: userAuthID }: Props) => {
  const [selectedValue, setSelectedValue] = React.useState(0);

  const [filterData, setFilterData] = React.useState<address | null>(null);
  // const name = userDetails?.attributes?.name
  const { data, loading, error, refetch } = useQuery<ListAllAddressesQuery, ListAllAddressesQueryVariables>(gql(listAllAddresses), { variables: { input: { user_id: `${userAuthID}` }, limit: 15 } });
  const handleExecute = () => {
    refetch({ input: { user_id: `${userAuthID}` } })
  }
  const [updateAddressShipping, { data: update_data_shipping, loading: update_loading_shipping, error: update_error_shipping }] = useMutation<UpdateSubscriptionShippingAddressMutation, UpdateSubscriptionShippingAddressMutationVariables>(gql(updateSubscriptionShippingAddress));
  const [updateAddressBilling, { data: update_data_billing, loading: update_loading_billing, error: update_error_billing }] = useMutation<UpdateSubscriptionBillingAddressMutation, UpdateSubscriptionBillingAddressMutationVariables>(gql(updateSubscriptionBillingAddress));

  React.useEffect(() => {
    if (data) {
      // handelRefetch();
      setFilterData(data?.listAllAddresses?.addresses[0] ?? null);
    }
  }, [data]);

  React.useEffect(() => {
    if (update_data_shipping) {
      func();
      handelRefetch();
    }
  }, [update_data_shipping])

  React.useEffect(() => {
    if (update_data_billing) {
      func();
      handelRefetch();
    }
  }, [update_data_billing])

  React.useEffect(() => {
    if (update_error_billing) {
      toast.error(update_error_billing.message)
    }

    if (update_error_shipping) {
      toast.error(update_error_shipping.message)
    }
  }, [update_error_billing, update_error_shipping])



  const handleChange = (event: any, value: any, i: any) => {
    if (value?.address_id == event) {
      setFilterData(value)
    }
    setSelectedValue(i)
  };

  function updateUserAddress() {
    const type = filterData?.type?.replace('_address', '') as 'billing' | 'shipping';
    if (address_type === 'shipping') {
      updateAddressShipping({
        variables: {
          input: {
            subscription_id: main_data?.getSubscription?.subscription_id as string,
            user_id: `${userAuthID}`,
            shipping_address_line_1: filterData[`${type}_address_line_1`],
            shipping_city: filterData[`${type}_city`],
            shipping_primary_phone: filterData[`${type}_primary_phone`],
            shipping_postcode: filterData[`${type}_postcode`],
            shipping_state: filterData[`${type}_state`],
            shipping_country: filterData[`${type}_country`],
            shipping_name: filterData[`${type}_name`],
            shipping_email: filterData[`${type}_email`],
            shipping_secondary_phone: filterData[`${type}_secondary_phone`],
          }
        }
      });
    } else if (address_type === 'billing') {
      updateAddressBilling({
        variables: {
          input: {
            subscription_id: main_data?.getSubscription?.subscription_id as string,
            user_id: `${userAuthID}`,
            billing_address_line_1: filterData[`${type}_address_line_1`],
            billing_city: filterData[`${type}_city`],
            billing_primary_phone: filterData[`${type}_primary_phone`],
            billing_postcode: filterData[`${type}_postcode`],
            billing_state: filterData[`${type}_state`],
            billing_country: filterData[`${type}_country`],
            billing_name: filterData[`${type}_name`],
            billing_email: filterData[`${type}_email`],
            billing_secondary_phone: filterData[`${type}_secondary_phone`],
          }
        }
      });
    }
  }
  
  return (
    <>
      <Modal open={open} onClose={onClose} >
        {/* <AddBilling func={handelClose} handelRefetch={handleExecute} value={main_data} /> */}
        {/* <MediaQuery minDeviceWidth={1224}> */}
        {loading || update_loading_billing || update_loading_shipping ? <Loading /> :
          <div className={styles.container}>
            <div className={styles.heading}>
              <p className={styles.heading_p}> {heading} </p>
              <button style={{ color: "white", marginRight: "1.125rem" }} onClick={onClose}>
                <CloseIcon />
              </button>
            </div>
            <div className={styles.main}>
              {data?.listAllAddresses?.addresses?.map((value, i: number) => (
                <div className={styles.box_div} key={i}  >
                  <div className={value?.default_flag == "Y" ? styles.box : styles.box_nodefault} onClick={() => handleChange(value?.address_id, value, i)}>
                    <Radio
                      checked={selectedValue == i}
                      onChange={(e) => handleChange(e.target.value, value, i)}
                      value={value?.address_id}
                      color="success"
                      name="radio-buttons"
                      inputProps={{ "aria-label": "A" }}
                    />
                    <div style={{ display: 'flex', marginLeft: '0.75rem' }}>
                      <div className={styles.left}>
                        <div className={styles.left_heading}>{value?.type == "shipping_address" ? value?.shipping_name : value?.billing_name}</div>
                        <div className={styles.left_data}>{value?.type == "shipping_address" ? value?.shipping_address_line_1 : value?.billing_address_line_1}, {value?.type == "shipping_address" ? value?.shipping_city : value?.billing_city}, {value?.type == "shipping_address" ? value?.shipping_state : value?.billing_state} , {value?.type == "shipping_address" ? value?.shipping_postcode : value?.billing_postcode}, {value?.type == "shipping_address" ? value?.shipping_country : value?.billing_country}</div>
                      </div>
                      <div className={styles.right} style={{ marginLeft: '10.625rem' }}>
                        <div className={value?.default_flag == "Y" ? styles.right_heading : styles.right_heading_nodefault}>Contact Number</div>
                        <div className={styles.right_data}>{formatPhoneNumberIntl(`${value?.type == "shipping_address" ? value?.shipping_primary_phone : value?.billing_primary_phone}`)}</div>
                      </div>
                    </div>
                  </div>
                </div>

              ))}
            </div>
            <div className={styles.button} >
              <div style={{ marginRight: "12px" }} onClick={() => handelOpen()}>
                <Button
                >Add an Address</Button>
              </div>
              <div
              >
                <Button
                  onClick={() => {
                    if (handleSuccess) {
                      return handleSuccess(filterData);
                    }
                    updateUserAddress()
                  }}
                >Use this Address</Button>
              </div>
            </div>
          </div>}
      </Modal>

      {/* </MediaQuery> */}
      {/* <MediaQuery maxDeviceWidth={1223}>
        <div className={styless.container}>
          <div className={styless.heading}>
            <p className={styless.heading_p}>Change Address</p>
            <button style={{ color: "white" }} onClick={func}>
              <CloseIcon />
            </button>
          </div>
          <div className={styless.main}>
            {data?.listAllAddresses?.addresses?.map((value: any, i: number) => (

              <div className={styless.box_div} key={i} onClick={() => handleChange(value?.address_id, value, i)}>
                <div className={value?.default_flag == "Y" ? styless.box : styless.box_nodefault}>
                  <Radio
                    checked={selectedValue == i}
                    value={value?.address_id}
                    color="success"
                    name="radio-buttons"
                    inputProps={{ "aria-label": "A" }}
                    onChange={(e) => handleChange(e.target.value, value, i)}
                  />
                  <div style={{ display: 'flex', marginLeft: '0.75rem', flexDirection: "column", gap: "9px" }}>
                    <div className={styless.left}>
                      <div className={styless.left_heading}>{value?.type == "shipping_address" ? value?.shipping_name : value?.billing_name}</div>
                      <div className={styless.left_data}>{value?.type == "shipping_address" ? value?.shipping_address_line_1 : value?.billing_address_line_1}, {value?.type == "shipping_address" ? value?.shipping_city : value?.billing_city}, {value?.type == "shipping_address" ? value?.shipping_state : value?.billing_state} , {value?.type == "shipping_address" ? value?.shipping_postcode : value?.billing_postcode}, {value?.type == "shipping_address" ? value?.shipping_country : value?.billing_country}</div>
                    </div>
                    <div className={styless.right} style={{ display: "flex", gap: "11px" }}>
                      <div className={value?.default_flag == "Y" ? styless.right_heading : styless.right_heading_nodefault}>Contact Number</div>
                      <div className={styless.right_data}>{formatPhoneNumberIntl(value?.type == "shipping_address" ? value?.shipping_primary_phone : value?.billing_primary_phone)}</div>
                    </div>
                  </div>
                </div>
              </div>

            ))}
          </div>
          <div className={styless.button} >
            <div onClick={handelOpen} style={{ marginRight: "12px" }} >
              <Button>Add an Address</Button>
            </div>
            <div onClick={() => {
              if (handleSuccess) {
                return handleSuccess(filterData);
              }
              updateUserAddress()
            }}>
              <Button>Use this Address</Button>
            </div>
          </div>
        </div>
      </MediaQuery> */}
    </>
  );
};

