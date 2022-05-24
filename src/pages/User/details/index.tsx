import Card from "@components/common/card";
import Layout from "@components/common/layout";
import Image from "next/image";
import { Table } from "@components/ui/table";
import ProgressBox from "@components/ui/progress-box/progress-box";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

// import { useOrderStatusesQuery } from "@graphql/order_status.graphql";
import Button from "@components/ui/button";
import ErrorMessage from "@components/ui/error-message";
import { siteSettings } from "@settings/site.settings";
import usePrice, { formatPrice, formatProductPrice } from "@utils/use-price";
import { formatAddress } from "@utils/format-address";
import Loader from "@components/ui/loader/loader";
import ValidationError from "@components/ui/form-validation-error";
import SelectInput from "@components/ui/select-input";
import { gql, useMutation, useQuery } from "@apollo/client";
import { getOrder, listAllOrdersAdmin, listOrderItems, listOrderTransactions } from "@graphql/queries";
import { GetOrderQuery, GetOrderQueryVariables, ListAllOrdersAdminQuery, ListAllOrdersAdminQueryVariables, ListOrderItemsQuery, ListOrderItemsQueryVariables, ListOrderTransactionsQuery, ListOrderTransactionsQueryVariables } from "src/API";
import ProductList from "@components/product/product-list";
import OrderProductList from "@components/order/order-products";
import { formatDate } from "@utils/date-helper";
import { getCardUrl } from "@utils/card-helper";
import OrderTransactionList from "@components/order/order-transactions";
import OrderList from "@components/order/order-list";
import { listAllUserProfileQuery, listAllUserProfileQueryVariables } from "src/API";

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
    { name: 'Active', id: 'Active', serial: 0 },
    { name: 'Deactivate', id: 'Deactivate', serial: 1 },
]

export default function UsersDetailsPage() {
    const { query } = useRouter();
    const { data: order, loading: orderLoading, error: orderError, fetchMore: fetchMoreOrder } = useQuery<ListAllOrdersAdminQuery, ListAllOrdersAdminQueryVariables>(gql(listAllOrdersAdmin), { variables: { limit: 10, } })
    const { data, loading, error } = useQuery<GetOrderQuery, GetOrderQueryVariables>(gql(getOrder), {
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
    const loadMore = () => {
        fetchMoreOrder({
          variables: { nextToken: order?.listAllOrdersAdmin?.nextToken, limit: 10 }, updateQuery: (previousResult, fetchMoreResult) => {
            const moreOrders = fetchMoreResult.fetchMoreResult?.listAllOrdersAdmin?.orders ?? [];
            const previousOrders = previousResult?.listAllOrdersAdmin?.orders ?? [];
            const nextToken = fetchMoreResult.fetchMoreResult?.listAllOrdersAdmin?.nextToken ?? null;
            return {
              ...previousResult,
              listAllOrdersAdmin: {
                ...previousResult.listAllOrdersAdmin,
                orders: [...previousOrders, ...moreOrders],
                nextToken,
              }
            }
          }
        })
      }

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

    if (loading || orderItemsLoading || transactionsLoading) return <Loader />;
    if (error) return <ErrorMessage message={error.message} />;

    const transactions = transactionsData?.listOrderTransactions?.transactions;
    return (
        <Card>
            <div className="flex flex-col lg:flex-row items-center">
                <h3 className="text-2xl font-semibold text-heading text-center lg:text-left w-full lg:w-1/3 mb-8 lg:mb-0 whitespace-nowrap">
                    User ID - {data?.getOrder?.order_id}
                </h3>

                <form
                    onSubmit={handleSubmit(ChangeStatus)}
                    className="flex items-start ml-auto w-full lg:w-2/4"
                >
                    <div className="w-full mr-5 z-20">

                        <SelectInput
                            name="User_status"
                            control={control}
                            getOptionLabel={(option: any) => option.name}
                            getOptionValue={(option: any) => option.id}
                            options={order_statuses}
                            placeholder="User status"
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
                {/* <p className="text-sm text-body">Order Status -</p> */}
                {/* <ProgressBox
          data={order_statuses}
          status={order_statuses.find((val) => val.id == data?.getOrder?.order_status)?.serial}
        /> */}
            </div>
            <div className="border-t-4 border-single border-gray-200 my-5 lg:my-10 flex flex-col justify-center ">
                {/* <p className="mt-5 text-sm text-body">Delivery Status -</p> */}
                {/* <ProgressBox
          data={delivery_statuses}
          status={delivery_statuses.find((val) => val.id == data?.getOrder?.delivery_status)?.serial}
        /> */}
            </div>

            <div className="mb-10">
                {data?.getOrder ? (
                    <OrderProductList products={orderItemsData?.listOrderItems?.orderItems} />
                ) : (
                    <span>No Order Found</span>
                )}
               
                    <OrderList handleFetchMore={loadMore} nextToken={order?.listAllOrdersAdmin?.nextToken} orders={order?.listAllOrdersAdmin?.orders} />

               
                <div className="flex">
                    <div className="flex flex-col items-start pb-2 mb-3">
                        <div className="pt-2 pb-2">
                            <span className="text-heading font-medium">Delivery Date - </span>
                            <span className="text-sm text-gray-500">{formatDate(data?.getOrder?.delivery_date)}</span>
                        </div>
                        <Button size="small">Change Delivery Date</Button>
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
                        <Button size="small">Change Address</Button>
                    </div>
                </div>
            </div>
        </Card>
    );
}

// export default function UsersDetailsPage() {
//   return <div></div>
// }
UsersDetailsPage.Layout = Layout; 
