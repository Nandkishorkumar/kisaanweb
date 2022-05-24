import { gql, useQuery } from "@apollo/client";
import Modal from "@components/common/modal/modal";
import { getDeliveryDateByCluster } from "@graphql/queries";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import React from "react";
import { toast } from "react-toastify";
import { GetDeliveryDateByClusterQuery, GetDeliveryDateByClusterQueryVariables } from "src/API";
import { ShowDate } from "./elements/ShowDate";
import styles from "./styles.module.css";
import Loading from '@components/ui/loader/loader'

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
  cluster_id: any;
  shipping_postcode: any;
  handleSelect?: any;
}

export function SelectDeliveryDateForActivationModal({
  handleSelect = (date: string) => {
    console.log({ date });
  },
  onClose,
  open = true,
  cluster_id,
  shipping_postcode
}: Props) {
  const [selected, setSelected] = React.useState<number>(0);
  const { data, error, loading, } = useQuery<GetDeliveryDateByClusterQuery, GetDeliveryDateByClusterQueryVariables>(gql(getDeliveryDateByCluster), {
    variables: { input: { cluster_id, shipping_postcode } },
  });
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
          data?.getDeliveryDateByCluster.available_delivery_date || []
        ).slice(items.start, items.start + items.gap),
        start: items.gap,
      });
    }
  }, [data]);

  const handleDateChange = (index: number) => {
    setSelected(index);
  };

  const handleShowNext = () => {
    if (
      data?.getDeliveryDateByCluster.available_delivery_date.length >
      items.start
    ) {
      const result: State = {
        ...items,
        isNextEnabled:
          data?.getDeliveryDateByCluster.available_delivery_date.length >
          items.start + items.gap,

        isPreviousEnabled: true,

        dates: (
          data?.getDeliveryDateByCluster.available_delivery_date || []
        ).slice(items.start, items.start + items.gap),

        start: items.start + items.gap <
          data?.getDeliveryDateByCluster.available_delivery_date?.length
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
          data?.getDeliveryDateByCluster.available_delivery_date.length >
          items.start + items.gap,

        dates: (
          data?.getDeliveryDateByCluster.available_delivery_date || []
        ).slice(items.start - items.gap, items.start),

        start: items.start - items.gap > 0 ? items.start - items.gap : items.start,

        isPreviousEnabled: items.start - items.gap > 0,
      };
      setItems(result);
    }
  };


  const checkSelectedDate = (date: string) => {
    if (!date) {
      toast.error('Please select delivery date');
      return;
    }
    handleSelect(
      date
    )
  }
  return (
    <Modal open={open} onClose={onClose}>
      {loading ? <Loading /> :
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
                <button
                  className={styles.doneBtn}
                  onClick={() =>
                    checkSelectedDate(items.dates[selected])
                  }
                >
                  Done
                </button>
              </div>
            </div>
          </>
        </div>
      }
    </Modal>
  );
}
