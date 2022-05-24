import { gql, useMutation } from '@apollo/client';
import { generateInvoiceUrl } from '@graphql/mutations';
import React from 'react';
import { toast } from 'react-toastify';
import { GenerateInvoiceUrlMutation, GenerateInvoiceUrlMutationVariables } from 'src/API';

interface Props {
  order_id: string;
  user_id: string;
  title?: string;
  children?: React.ReactNode;
}

export function InvoiceLink({ order_id, user_id, children, title }: Props) {
  const [genrateInvoiceMutation, { data, loading }] = useMutation<GenerateInvoiceUrlMutation, GenerateInvoiceUrlMutationVariables>(
    gql(generateInvoiceUrl)
  )

  React.useEffect(() => {
    if (data) {
      if (!data.generateInvoiceUrl?.invoice_url) {
        toast.error('Invoice not found')
        return;
      }
      window.open(
        `${data?.generateInvoiceUrl?.invoice_url}`,
        '_blank' // <- This is what makes it open in a new window.
      );
    }
  }, [data])
  return (
    <div onClick={() => !loading && genrateInvoiceMutation({
      variables: {
        input: { order_id, user_id }
      }
    })}
      style={{
        cursor: loading ? 'not-allowed' : 'pointer'
      }}
    >
      {loading ? 'Loading...' : (title ?? '')}
    </div >
  )
}

export default InvoiceLink