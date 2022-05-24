import { ApolloQueryResult } from '@apollo/client';
import Modal from '@components/common/modal/modal';
import Button from '@components/ui/button';
import { formatAddress } from '@utils/format-address';
import { useRouter } from 'next/router';
import React from 'react'
import { toast } from 'react-toastify';
import { GetSubscriptionQuery, GetSubscriptionQueryVariables } from 'src/API';
import { ChangeSubscriptionAddress } from './modals/ChangeSubscriptionShippingAddress';

interface IProps {
  data: GetSubscriptionQuery | undefined;
  isDisabled: boolean;
  refetch: (variables?: Partial<GetSubscriptionQueryVariables> | undefined) =>
    Promise<ApolloQueryResult<GetSubscriptionQuery>>;
}

export function ShippingAddress({ data, isDisabled, refetch }: IProps) {
  const [modalOpen, setModalOpen] = React.useState(false)
  const { query } = useRouter();

  return (
    <div className="w-full sm:w-1/2 sm:pl-8">
      <h3 className="text-heading text-left font-medium sm:text-right mb-3 pb-2 border-b border-gray-200">
        Shipping address
      </h3>

      <div className="text-sm text-gray-500 text-left sm:text-right flex flex-col items-start sm:items-end space-y-1">
        <span>{data?.getSubscription?.shipping_address?.shipping_name}</span>
        {data?.getSubscription?.shipping_address && (
          <span>{formatAddress(data.getSubscription.shipping_address ?? '')}</span>
        )}
        {data?.getSubscription?.shipping_address && (
          <span>{data?.getSubscription?.shipping_address.shipping_primary_phone}</span>
        )}
        <Button disabled={isDisabled || modalOpen} onClick={() => setModalOpen(true)} size="small">Change Address</Button>
      </div>
      {/* Shipping Address Modal */}
      <ChangeSubscriptionAddress open={modalOpen}
        onClose={() =>
          setModalOpen(true)
        } user_id={query.user_id as string} address_type='shipping'
        subscription_data={data} handelRefetch={() => refetch()} heading="Change Shipping Address"
        func={() => {
          toast.success('Shipping address changed');
          setModalOpen(false)
        }} />
      {/* END Billing Address Modal */}
    </div>
  )
}
