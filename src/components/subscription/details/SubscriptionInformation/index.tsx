import { formatDate } from '@utils/date-helper';
import { formatProductPrice } from '@utils/use-price';
import React from 'react'
import { GetSubscriptionQuery, UpdateSubscriptionFrequencyMutation, UpdateSubscriptionFrequencyMutationVariables } from 'src/API';
import SelectInput from "@components/ui/select-input";
import { useForm } from "react-hook-form";
import Button from '@components/ui/button';
import { SelectDeliveryDateForActivationModal } from '../SubscriptionAddressInformation/elements/modals/SelectDeliveryDateForActivation';
import { gql, useMutation } from '@apollo/client';
import { updateSubscriptionFrequency } from '@graphql/mutations';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

interface IProps {
  data: GetSubscriptionQuery | undefined;
  handleRefetch: any;
}

type FormValues = {
  frequency: any;
};

const FREQUENCY_OPTIONS = {
  true: { name: 'Every Week', id: 'every_week', serial: 0 },
  false: { name: 'Every 2 Weeks', id: 'every_2_weeks', serial: 1 },
}

export function SubscriptionInformation({ data, handleRefetch }: IProps) {
  const [modalOpen, setModalOpen] = React.useState(false)
  const { query } = useRouter()
  const [updateFrequency, { data: frequency_data, error, loading }] = useMutation<UpdateSubscriptionFrequencyMutation, UpdateSubscriptionFrequencyMutationVariables>(gql(updateSubscriptionFrequency))

  React.useEffect(() => {
    if (frequency_data) {
      handleRefetch();
      toast.success('Subscription frequency updated');
    }
  }, [frequency_data])

  React.useEffect(() => {
    if (error) {
      toast.error(error.message);
    }
  }, [error])

  const handleChangeFrequency = () => {
    setModalOpen(true)
  }

  const handleSelect = (date: string) => {
    const switching_frequency = FREQUENCY_OPTIONS[`${data?.getSubscription?.subscription_frequency != 'every_week'}`];
    updateFrequency({
      variables: {
        input: {
          delivery_date: date,
          subscription_frequency: switching_frequency.id,
          ...query
        }
      }
    })
    setModalOpen(false);
  }
  return <div className="flex">
    <div className="flex-col">

      <div className="flex flex-col items-start pb-2 mb-3">
        <div className="pt-2 pb-2">
          <span className="text-heading font-medium">Next Delivery Date - </span>
          <span className="text-sm text-gray-500">{formatDate(data?.getSubscription?.next_delivery_date ?? '')}</span>
        </div>
      </div>
      <div className="flex flex-col items-start pb-2 mb-3">
        <div className="pt-2 pb-2">
          <span className="text-heading font-medium">Next Payment Date - </span>
          <span className="text-sm text-gray-500">{formatDate(data?.getSubscription?.next_payment_date ?? '')}</span>
        </div>
      </div>
      <div className="flex flex-col items-start pb-2 mb-3">
        <div className="pt-2 pb-2">
          <span className="text-heading font-medium">Subscription Frequency - </span>
          <span className="text-sm text-gray-500 capitalize">{data?.getSubscription?.subscription_frequency?.replaceAll('_', ' ')}</span>
        </div>
      </div>
      <div className='flex gap-2'>
        <Button size='small' disabled={loading} onClick={handleChangeFrequency}>Switch to {FREQUENCY_OPTIONS[`${data?.getSubscription?.subscription_frequency != 'every_week'}`].name}</Button>

        <SelectDeliveryDateForActivationModal cluster_id={data?.getSubscription?.shipping_address?.cluster_id}
          onClose={() => setModalOpen(false)} open={modalOpen} shipping_postcode={data?.getSubscription?.shipping_address?.shipping_postcode}
          handleSelect={handleSelect} />

      </div>
    </div>
    <div className="border-t-4 border-double border-gray-200 flex flex-col w-full sm:w-1/2 md:w-1/3 ml-auto px-4 py-4 space-y-2">
      <div className="flex items-center justify-between text-sm text-body">
        <span>Sub total</span>
        <span>{formatProductPrice(data?.getSubscription?.pricing_details?.total_amount ?? 0)}</span>
      </div>

      <div className="flex items-center justify-between text-sm text-body">
        <span>Delivery Fee</span>
        <span>{formatProductPrice(data?.getSubscription?.pricing_details?.onetime_delivery_charge ?? 0)}</span>
      </div>
      <div className="flex items-center justify-between text-sm text-body">
        <span>Discount</span>
        <span>{formatProductPrice(data?.getSubscription?.pricing_details?.discount ?? 0)}</span>
      </div>
      <div className="flex items-center justify-between text-base text-heading font-semibold">
        <span>Total</span>
        <span>{formatProductPrice(data?.getSubscription?.pricing_details?.payable_amount ?? 0)}</span>
      </div>
    </div>
  </div>;
}
