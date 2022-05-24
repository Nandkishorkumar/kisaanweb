import { gql, useQuery } from "@apollo/client";
import Card from "@components/common/card";
import Layout from "@components/common/layout";
import ChangeAddressModal from "@components/order/details/ChangeAddressModal";
import { SelectDeliveryDateModal } from "@components/order/details/ChangeDeliveryDate/SelectDeliveryDate";
import OrderProductList from "@components/order/order-products";
import OrderTransactionList from "@components/order/order-transactions";
// import { useOrderStatusesQuery } from "@graphql/order_status.graphql";
import Button from "@components/ui/button";
import ErrorMessage from "@components/ui/error-message";
import ValidationError from "@components/ui/form-validation-error";
import Loader from "@components/ui/loader/loader";
import ProgressBox from "@components/ui/progress-box/progress-box";
import SelectInput from "@components/ui/select-input";
import { getOrder, listOrderItems, listOrderTransactions } from "@graphql/queries";
import { getCardUrl } from "@utils/card-helper";
import { formatDate } from "@utils/date-helper";
import { formatAddress } from "@utils/format-address";
import { formatProductPrice } from "@utils/use-price";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import { GetOrderQuery, GetOrderQueryVariables, ListOrderItemsQuery, ListOrderItemsQueryVariables, ListOrderTransactionsQuery, ListOrderTransactionsQueryVariables } from "src/API";


type FormValues = {
  order_status: any;
};
const columns = [
  // {
  //   dataIndex: "image",
  //   key: "image",
  //   width: 70,
  //   render: (image: Attachment) => (
  //     <Image
  //       src={image?.thumbnail ?? siteSettings.product.placeholder}
  //       alt="alt text"
  //       layout="fixed"
  //       width={50}
  //       height={50}
  //     />
  //   ),
  // },
  {
    title: "Products",
    dataIndex: "products",
    key: "products",
    align: "left",
    render: (name: string, item: any) => (
      <div>
        <span>{name}</span>
        <span className="mx-2">x</span>
        <span className="font-semibold text-heading">
          {item.pivot.order_quantity}
        </span>
      </div>
    ),
  },
  {
    title: "Total",
    dataIndex: "price",
    key: "price",
    align: "right",
    render: (_: any, item: any) => {
      // const { price } = usePrice({
      //   amount: item.pivot.subtotal,
      // });
      return <span>{item.pivot.subtotal}</span>;
    },
  },
];

const delivery_statuses = [
  { name: 'Order Placed', serial: 0, id: "order_placed" },
  { name: 'In Progress', serial: 1, id: "in_progress" },
  { name: 'Out Of Delivery', serial: 2, id: "out_for_delivery" },
  { name: 'Delivered', serial: 3, id: "delivered" },
];

// ["order_placed", 'in_pogress', 'out_for_delivery', 'delivered']

const order_statuses = [
  { name: 'Pending', id: 'pending', serial: 0 },
  { name: 'Processing', id: 'processing', serial: 1 },
  { name: 'Completed', id: 'completed', serial: 2 },
  { name: 'Failed', id: 'failed', serial: 3 },
]

export default function OrderDetailsPage() {
  const { query }: { query: { user_id: string; order_id: string; } } = useRouter();
  const [openChangeDate, setOpenChangeDate] = React.useState(false);
  const [openChangeAddress, setOpenChangeAddress] = React.useState(false)
  const { data, loading, error, refetch } = useQuery<GetOrderQuery, GetOrderQueryVariables>(gql(getOrder), {
    variables: {
      input: {
        ...query
      }
    },
  });
  const { data: transactionsData, loading: transactionsLoading, error: transactionsError } = useQuery<ListOrderTransactionsQuery, ListOrderTransactionsQueryVariables>(gql(listOrderTransactions), { variables: { input: { order_id: query.order_id } } })
  const { data: orderItemsData, loading: orderItemsLoading, error: orderItemsError } = useQuery<ListOrderItemsQuery, ListOrderItemsQueryVariables>(gql(listOrderItems),
    { variables: { input: { order_id: query.order_id as string } } }
  )

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: { order_status: data?.getOrder?.order_status ?? "" },
  });

  const ChangeStatus = ({ order_status }: FormValues) => {
    // updateOrder({
    //   variables: {
    //     input: {
    //       id: data?.getOrder?.order_id as string,
    //       status: { connect: order_status?.id as string },
    //     },
    //   },
    // });
  };
  const handleRefetch = () => {
    refetch({
      input: {
        ...query
      }

    })
  }
  const handleChangeDate = (date) => {

  }

  if (loading || orderItemsLoading || transactionsLoading) return <Loader />;
  if (error) return <ErrorMessage message={error.message} />;


  const transactions = transactionsData?.listOrderTransactions?.transactions;
  return (
    <Card>

      {/* Popups */}
      {openChangeDate &&
        <SelectDeliveryDateModal cluster_id={data?.getOrder?.shipping_address?.cluster_id} onClose={() => setOpenChangeDate(false)}
          open={openChangeDate} order_id={data?.getOrder?.order_id} setChangeDate={handleChangeDate} shipping_postcode={data?.getOrder?.shipping_address?.shipping_postcode}
          user_id={query.user_id} handelRefetch={handleRefetch} />
      }
      <ChangeAddressModal onClose={() => setOpenChangeAddress(false)} open={openChangeAddress} {...query} />

      {/* End Popups */}

      <div className="flex flex-col lg:flex-row items-center">
        <h3 className="text-2xl font-semibold text-heading text-center lg:text-left w-full lg:w-1/3 mb-8 lg:mb-0 whitespace-nowrap">
          Order ID - {data?.getOrder?.order_id}
        </h3>

        <form
          onSubmit={handleSubmit(ChangeStatus)}
          className="flex items-start ml-auto w-full lg:w-2/4"
        >
          <div className="w-full mr-5 z-20">

            <SelectInput
              name="order_status"
              control={control}
              getOptionLabel={(option: any) => option.name}
              getOptionValue={(option: any) => option.id}
              options={order_statuses}
              placeholder="Order status"
              rules={{
                required: "Status is required",
              }}
            />

            <ValidationError message={errors?.order_status?.message} />
          </div>
          <Button>
            <span className="hidden sm:block">Change Status</span>
            <span className="block sm:hidden">Change</span>
          </Button>
        </form>
      </div>

      <div className="my-5 lg:my-10 flex flex-col justify-center ">
        <p className="text-sm text-body">Order Status -</p>
        <ProgressBox
          data={order_statuses}
          status={order_statuses.find((val) => val.id == data?.getOrder?.order_status)?.serial}
        />
      </div>
      <div className="border-t-4 border-single border-gray-200 my-5 lg:my-10 flex flex-col justify-center ">
        <p className="mt-5 text-sm text-body">Delivery Status -</p>
        <ProgressBox
          data={delivery_statuses}
          status={delivery_statuses.find((val) => val.id == data?.getOrder?.delivery_status)?.serial}
        />
      </div>

      <div className="mb-10">
        {data?.getOrder ? (
          <OrderProductList products={orderItemsData?.listOrderItems?.orderItems} />
        ) : (
          <span>No Order Found</span>
        )}
        <div className="flex">
          <div className="flex flex-col items-start pb-2 mb-3">
            <div className="pt-2 pb-2">
              <span className="text-heading font-medium">Delivery Date - </span>
              <span className="text-sm text-gray-500">{formatDate(data?.getOrder?.delivery_date)}</span>
            </div>
            <Button size="small" disabled={openChangeDate} onClick={() => setOpenChangeDate(true)}>Change Delivery Date</Button>
          </div>
          <div className="border-t-4 border-double border-gray-200 flex flex-col w-full sm:w-1/2 md:w-1/3 ml-auto px-4 py-4 space-y-2">
            <div className="flex items-center justify-between text-sm text-body">
              <span>Sub total</span>
              <span>{formatProductPrice(data?.getOrder?.pricing_details?.total_amount)}</span>
            </div>
            {/* <div className="flex items-center justify-between text-sm text-body">
            <span>Tax</span>
            <span>{sales_tax}</span>
          </div> */}
            <div className="flex items-center justify-between text-sm text-body">
              <span>Delivery Fee</span>
              <span>{formatProductPrice(data?.getOrder?.pricing_details?.onetime_delivery_charge)}</span>
            </div>
            <div className="flex items-center justify-between text-sm text-body">
              <span>Discount</span>
              <span>{formatProductPrice(data?.getOrder?.pricing_details?.discount)}</span>
            </div>
            <div className="flex items-center justify-between text-base text-heading font-semibold">
              <span>Total</span>
              <span>{formatProductPrice(data?.getOrder?.pricing_details?.payable_amount)}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
        <div className="w-full sm:w-1/2 sm:pr-8 mb-10 sm:mb-0">
          <h3 className="text-heading font-medium mb-3 pb-2 border-b border-gray-200">
            Billing details
          </h3>
          <div className="text-sm text-gray-500 flex flex-col items-start space-y-1">
            {transactions?.length > 0 && <>
              <span>{transactions[0]?.payment_method_details?.cardholder_name}</span>
              <span>{formatAddress(transactions[0]?.payment_method_details, 'billing')}</span>
              <span>{transactions[0]?.payment_method_details?.billing_primary_phone}</span>
              <span className="flex gap-2 items-center">
                <Image src={getCardUrl(transactions[0]?.payment_method_details?.card_brand)} height={9} width={32} />
                <span>ending with {transactions[0]?.payment_method_details?.last_4}</span>
              </span>
              <OrderTransactionList transactions={transactions} />
            </>}
          </div>
        </div>

        <div className="w-full sm:w-1/2 sm:pl-8">
          <h3 className="text-heading text-left font-medium sm:text-right mb-3 pb-2 border-b border-gray-200">
            Shipping address
          </h3>

          <div className="text-sm text-gray-500 text-left sm:text-right flex flex-col items-start sm:items-end space-y-1">
            <span>{data?.getOrder?.shipping_address?.shipping_name}</span>
            {data?.getOrder?.shipping_address && (
              <span>{formatAddress(data.getOrder.shipping_address)}</span>
            )}
            {data?.getOrder?.shipping_address && (
              <span>{data?.getOrder?.shipping_address.shipping_primary_phone}</span>
            )}
            <Button size="small" disabled={openChangeAddress} onClick={() => setOpenChangeAddress(true)}>Change Address</Button>
          </div>
        </div>
      </div>
    </Card>
  );
}

// export default function OrderDetailsPage() {
//   return <div></div>
// }
OrderDetailsPage.Layout = Layout; 
