import { gql, useMutation, useQuery } from "@apollo/client";
import Card from "@components/common/card";
import Layout from "@components/common/layout";
import OrderList from "@components/order/order-list";
import OrderProductList from "@components/order/order-products";
import { SubscriptionAddressInformation, SubscriptionInformation } from "@components/subscription/details";
import Button from "@components/ui/button";
import ErrorMessage from "@components/ui/error-message";
import ValidationError from "@components/ui/form-validation-error";
import Loader from "@components/ui/loader/loader";
import SelectInput from "@components/ui/select-input";
import { holdOrCancelUserSubscription } from "@graphql/mutations";
import { getSubscription, listAllRelatedOrdersFromSubscription, listSubscriptionItems } from "@graphql/queries";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { GetSubscriptionQuery, GetSubscriptionQueryVariables, HoldOrCancelUserSubscriptionMutation, HoldOrCancelUserSubscriptionMutationVariables, ListAllRelatedOrdersFromSubscriptionQuery, ListAllRelatedOrdersFromSubscriptionQueryVariables, ListSubscriptionItemsQuery, ListSubscriptionItemsQueryVariables } from "src/API";


type FormValues = {
  order_status: any;
};

const order_statuses = [
  { name: 'Hold', id: 'hold', serial: 0 },
  { name: 'Active', id: 'active', serial: 1 },
  { name: 'Cancelled', id: 'cancelled', serial: 2 },
]

const STATUS_COLORS = {
  hold: 'bg-yellow-400',
  active: 'bg-primary',
  cancelled: 'bg-red-400'
}

export default function OrderDetailsPage() {
  const { query } = useRouter();


  const { data, loading, error, refetch } = useQuery<GetSubscriptionQuery, GetSubscriptionQueryVariables>(gql(getSubscription), {
    variables: {
      input: {
        ...query
      }
    },
  });
  const { data: orderItemsData, loading: orderItemsLoading, error: orderItemsError } = useQuery<ListSubscriptionItemsQuery, ListSubscriptionItemsQueryVariables>(gql(listSubscriptionItems),
    { variables: { input: { subscription_id: query.subscription_id as string } } }
  )
  const { data: relatedOrdersData } = useQuery<ListAllRelatedOrdersFromSubscriptionQuery, ListAllRelatedOrdersFromSubscriptionQueryVariables>(gql(listAllRelatedOrdersFromSubscription),
    {
      variables: {
        input: {
          parent_subscription_id: query.subscription_id as string,
          user_id: query.user_id as string
        }
      }
    })
  const [updateStatus, { data: statusData, error: statusError }] = useMutation<HoldOrCancelUserSubscriptionMutation, HoldOrCancelUserSubscriptionMutationVariables>(gql(holdOrCancelUserSubscription))

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: { order_status: data?.getSubscription?.subscription_status || "" },
  });


  React.useEffect(() => {
    if (statusData) {
      toast.success('Status updated');
      refetch();
    }
  }, [statusData])

  React.useEffect(() => {
    if (statusError) {
      toast.error(statusError.message)
    }
  }, [statusError])

  const ChangeStatus = ({ order_status: status }: FormValues) => {
    updateStatus({
      variables: {
        input: {
          ...query,
          subscription_status: status.id
        }
      }
    })
  };

  if (loading || orderItemsLoading) return <Loader />;
  if (error) return <ErrorMessage message={error.message} />;


  const isDisabled = data?.getSubscription?.subscription_status === 'cancelled'

  return (
    <Card>
      <div className="flex flex-col lg:flex-row items-center">
        <h3 className="text-2xl flex items-center font-semibold text-heading text-center lg:text-left w-full lg:w-1/3 mb-8 lg:mb-0 whitespace-nowrap">
          Subscription ID - {data?.getSubscription?.subscription_id} <span className={`ml-2 px-3 py-1 rounded-full text-xs whitespace-nowrap uppercase relative text-white ${STATUS_COLORS[data?.getSubscription?.subscription_status ?? 'active']}`}>{data?.getSubscription?.subscription_status}</span>
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
          <Button disabled={isDisabled}>
            <span className="hidden sm:block">Change Status</span>
            <span className="block sm:hidden">Change</span>
          </Button>
        </form>
      </div>

      <div className="mb-10 mt-5">
        {data?.getSubscription ? (
          <OrderProductList products={orderItemsData?.listSubscriptionItems?.subscriptionItems} />
        ) : (
          <span>No Order Found</span>
        )}
        <SubscriptionInformation data={data} handleRefetch={refetch} />
      </div>

      <SubscriptionAddressInformation data={data} refetch={refetch} />
      <hr className="mt-5 mb-5" />
      <div className="flex flex-col gap-5 ">
        <h1 className="text-2xl flex items-center font-semibold text-heading text-center lg:text-left w-full lg:w-1/3 mb-8 lg:mb-0 whitespace-nowrap">
          Orders generated from subscription -
        </h1>
        <OrderList orders={relatedOrdersData?.listAllRelatedOrdersFromSubscription?.orders} handleFetchMore={() => { }} nextToken={relatedOrdersData?.listAllRelatedOrdersFromSubscription?.nextToken} />
      </div>


    </Card>
  );
}

// export default function OrderDetailsPage() {
//   return <div></div>
// }
OrderDetailsPage.Layout = Layout;



