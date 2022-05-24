import { ApolloQueryResult } from '@apollo/client';
import React from 'react';
import { GetSubscriptionQuery, GetSubscriptionQueryVariables, paymentMethod } from 'src/API';
import { BillingAddress } from './elements/BillingAddress';
import { ShippingAddress } from './elements/ShippingAddress';

interface IProps {
  data: GetSubscriptionQuery | undefined;
  refetch: (variables?: Partial<GetSubscriptionQueryVariables> | undefined) => Promise<ApolloQueryResult<GetSubscriptionQuery>>;
}

export function SubscriptionAddressInformation({ data, refetch }: IProps) {

  const isDisabled = data?.getSubscription?.subscription_status === 'cancelled'

  return <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
    <BillingAddress isDisabled={isDisabled} data={data} />
    <ShippingAddress data={data} isDisabled={isDisabled} refetch={refetch} />
  </div>;
}
