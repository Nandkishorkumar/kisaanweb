import { gql, useQuery } from "@apollo/client";
import Modal from "@components/common/modal/modal";
import { getAvailableDeliveryDateInOrder } from '@graphql/queries';
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import React from "react";
import { GetAvailableDeliveryDateInOrderQuery, GetAvailableDeliveryDateInOrderQueryVariables, UpdateOrderDeliveryDateMutation, UpdateOrderDeliveryDateMutationVariables } from 'src/API';
import { ShowDate } from "./elements/ShowDate";
import styles from "./styles.module.css";
import { useMutation } from "@apollo/client";
import { updateOrderDeliveryDate } from "@graphql/mutations";
import Button from "@components/ui/button";

interface State {
  dates: any[];
  start: number;
  isNextEnabled: boolean;
  isPreviousEnabled: boolean;
  gap: number;
}

interface Props {
  onClose: any;
  open: boolean;
  cluster_id: string;
  shipping_postcode: string;
  handleSelect?: any;
  order_id: any;
  setChangeDate: any;
  handelRefetch?: any
  user_id: string;
}

export function SelectDeliveryDateModal({
  onClose,
  open = true,
  order_id,
  cluster_id,
  shipping_postcode,
  setChangeDate,
  handelRefetch,
  user_id
}: Props) {
  const [selected, setSelected] = React.useState<number>(0);
  const [updateDate, { data: delivery_data, loading: delivery_loading, error: delivery_error }] = useMutation<UpdateOrderDeliveryDateMutation, UpdateOrderDeliveryDateMutationVariables>(gql(updateOrderDeliveryDate))
  const { data, loading, error } = useQuery<GetAvailableDeliveryDateInOrderQuery, GetAvailableDeliveryDateInOrderQueryVariables>(gql(getAvailableDeliveryDateInOrder),
    { variables: { input: { cluster_id: cluster_id, order_id: order_id, shipping_postcode: shipping_postcode } } })
  const [items, setItems] = React.useState<State>({
    dates: [],
    start: 0,
    isNextEnabled: true,
    isPreviousEnabled: false,
    gap: 3,
  });
  React.useEffect(() => {
    if (data) {
      setItems({
        ...items,
        dates: (
          data?.getAvailableDeliveryDateInOrder?.available_delivery_date || []
        ).slice(items.start, items.start + items.gap),
        start: items.gap,
      });
    }
  }, [data]);

  React.useEffect(() => {
    if (delivery_data) {
      // dispatch(actions.openSnackbar({ message: `Delivery Date Changed Successfully`, serverity: "success" }))
      handelRefetch()
      setChangeDate(false)
    }
  }, [delivery_data])

  function handleSelect(Date: any) {
    updateDate({
      variables: {
        input: {
          user_id,
          order_id,
          delivery_date: Date
        }
      }
    })

  }

  const handleDateChange = (index: number) => {
    setSelected(index);
  };
  const handleShowNext = () => {
    if (
      data?.getAvailableDeliveryDateInOrder.available_delivery_date?.length >
      items.start
    ) {
      const result: State = {
        ...items,
        isNextEnabled:
          data?.getAvailableDeliveryDateInOrder.available_delivery_date.length >
          items.start + items.gap,

        isPreviousEnabled: true,

        dates: (
          data?.getAvailableDeliveryDateInOrder.available_delivery_date || []
        ).slice(items.start, items.start + items.gap),

        start: items.start + items.gap <
          data?.getAvailableDeliveryDateInOrder.available_delivery_date?.length
          ? items.start + items.gap
          : items.start,
      };
      setItems(result);
    }
  };
  const handleShowPrevious = () => {
    if (items.start > 0) {
      const result: State = {
        ...items,

        isNextEnabled:
          data?.getAvailableDeliveryDateInOrder.available_delivery_date.length >
          items.start + items.gap,

        dates: (
          data?.getAvailableDeliveryDateInOrder.available_delivery_date || []
        ).slice(items.start - items.gap, items.start),

        start: items.start - items.gap > 0 ? items.start - items.gap : items.start,

        isPreviousEnabled: items.start - items.gap > 0,
      };
      setItems(result);
    }
  };


  const checkSelectedDate = (date: string) => {
    if (!date) {
      // dispatch(actions.openSnackbar({ message: "Please select delivery date", serverity: "error" }))
      return;
    }
    handleSelect(date)
  }
  return (
    <Modal open={open} onClose={onClose}>
      <div className={styles.container}>
        <>
          <div className={styles.header}>
            <p>Select Delivery Date</p>
            <IconButton onClick={() => onClose()}>
              <CloseIcon color="warning" />
            </IconButton>
          </div>
          <div className={styles.contentContainer}>
            <div className={styles.carousalContainer}>
              <IconButton
                onClick={() => handleShowPrevious()}
                disabled={!items.isPreviousEnabled}
              >
                <ChevronLeftRoundedIcon />
              </IconButton>
              <div className={styles.datesContainer}>
                {data &&
                  items.dates.map((date, index: number) => (
                    <ShowDate
                      key={index}
                      date={date || ""}
                      selected={index === selected}
                      handleDateChange={() => handleDateChange(index)}
                      index={index}
                    />
                  ))}
              </div>
              <IconButton
                onClick={() => handleShowNext()}
                disabled={!items.isNextEnabled}
              >
                <ChevronRightRoundedIcon />
              </IconButton>
            </div>
            <div className={styles.btnContainer}>
              <Button
                size="small"
                onClick={() =>
                  checkSelectedDate(items.dates[selected])
                }
              >
                Done
              </Button>
            </div>
          </div>
        </>
      </div>
    </Modal>
  );
}
