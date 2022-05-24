import React from 'react'
import Modal from '@components/common/modal/modal'
import Card from '@components/common/card';
import { gql, useQuery } from '@apollo/client';
import { listAllShippingAddresses } from '@graphql/queries';
import { ListAllShippingAddressesQuery, ListAllShippingAddressesQueryVariables } from 'src/API';
import { formatAddress } from '@utils/format-address';
import Radio from '@components/ui/radio/radio';
import Button from '@components/ui/button';

interface IProps {
  open: boolean;
  onClose: any;
  order_id: string;
  user_id: string;
}

const ChangeAddressModal = ({ open, onClose, order_id, user_id }: IProps) => {

  const { data, loading, error } = useQuery<ListAllShippingAddressesQuery, ListAllShippingAddressesQueryVariables>(gql(listAllShippingAddresses), {
    variables: {
      input: {
        user_id
      }
    }
  })

  return <>
    <Modal open={open} onClose={onClose} >
      <div className='bg-white rounded-md '>
        <div className='text-lg p-4 bg-primary text-white ++521 '>Select an address</div>
        <div className='p-4'>
          <div className='flex flex-col gap-2'>
            {data?.listAllShippingAddresses?.addresses?.map((address) => (
              <div className='flex bg-primary text-white p-2 rounded-md items-start'>
                <Radio id={address?.address_id} /> {formatAddress(address)}
              </div>
            ))}
            <div className='flex justify-end border-t border-gray-200 mt-2 pt-2'>
              <Button size='medium' >Select Address</Button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  </>
}

export default ChangeAddressModal