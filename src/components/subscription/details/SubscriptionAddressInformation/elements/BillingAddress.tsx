import { gql, useQuery } from '@apollo/client';
import Modal from '@components/common/modal/modal';
import Button from '@components/ui/button';
import { getSubscriptionPaymentMethod } from '@graphql/queries';
import { getCardUrl } from '@utils/card-helper';
import { formatAddress } from '@utils/format-address';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { toast } from 'react-toastify';
import { GetSubscriptionPaymentMethodQuery, GetSubscriptionPaymentMethodQueryVariables, GetSubscriptionQuery } from 'src/API';
import ChangeCard from './modals/ChangeCard';
import { ChangeSubscriptionAddress } from './modals/ChangeSubscriptionShippingAddress';

interface IProps {
  isDisabled: boolean;
  data: GetSubscriptionQuery | undefined;
}

export function BillingAddress({ isDisabled, data }: IProps) {
  const [modalOpen, setModalOpen] = React.useState({
    billingAddress: false,
    changeCard: false
  })
  const { query } = useRouter();
  const { data: transactionsData, refetch: refetchTransaction } = useQuery<GetSubscriptionPaymentMethodQuery, GetSubscriptionPaymentMethodQueryVariables>(gql(getSubscriptionPaymentMethod), { variables: { input: { subscription_id: query.subscription_id as string } } })


  const transactions = transactionsData?.getSubscriptionPaymentMethod?.paymentMethods ?? [];
  return (
    <div className="w-full sm:w-1/2 sm:pr-8 mb-10 sm:mb-0">
      <h3 className="text-heading font-medium mb-3 pb-2 border-b border-gray-200">
        Billing details
      </h3>
      <div className="text-sm text-gray-500 flex flex-col items-start space-y-1">
        {transactions?.length > 0 && <>
          <span>{transactions[0]?.cardholder_name}</span>
          <span>{formatAddress(transactions[0], 'billing')}</span>
          <span>{transactions[0]?.billing_primary_phone}</span>
          <span className="flex gap-2 items-center">
            <Image src={getCardUrl(transactions[0]?.card_brand ?? '')} height={9} width={32} />
            <span>ending with {transactions[0]?.last_4}</span>
          </span>
        </>}
      </div>
      <div className='flex gap-2 mt-2'>
        <Button disabled={isDisabled || modalOpen.billingAddress}
          onClick={() => setModalOpen({ ...modalOpen, billingAddress: true })} size="small">
          Change Address
        </Button>
        <Button disabled={isDisabled || modalOpen.changeCard}
          onClick={() => setModalOpen({ ...modalOpen, changeCard: true })} size="small">
          Change Card
        </Button>
      </div>

      {/* Billing Address Modal */}
      <ChangeSubscriptionAddress open={modalOpen.billingAddress}
        onClose={() =>
          setModalOpen({ ...modalOpen, billingAddress: false })
        } user_id={query.user_id as string} address_type='billing'
        subscription_data={data} handelRefetch={() => refetchTransaction()}
        func={() => {
          toast.success('Billing address changed');
          setModalOpen({ ...modalOpen, billingAddress: false })
        }} />
      {/* END Billing Address Modal */}

      {/* Change Card Modal */}
      <ChangeCard open={modalOpen.changeCard} onClose={() => setModalOpen({ ...modalOpen, changeCard: false })} user_id={query.user_id as string}
        subscription_data={data} handelRefetch={() => refetchTransaction()}
        func={() => {
          toast.success('Payment card changed');
          setModalOpen({ ...modalOpen, changeCard: false })
        }} />
      {/* END Change Card Modal */}

    </div >
  )
}
