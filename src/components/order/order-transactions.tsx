import { Table } from "@components/ui/table";
import { siteSettings } from "@settings/site.settings";
import { formatProductPrice } from "@utils/use-price";
import Image from "next/image";
import { orderItem, snapshot_media_type, transaction } from "src/API";

const statuses = {
  completed: { color: 'green', name: 'Success', sign: '+', detail: "Recieved Money" },
  failed: { color: 'red', name: "Failed", sign: '', detail: 'Failed' },
  refund: { color: 'green', name: "Success", sign: '-', detail: "Refunded Money" }
}

const columns = [
  {
    title: "Amount",
    dataIndex: "payment_amount",
    key: "payment_amount",
    align: "center",
    width: 130,
    render: (value: number, transaction: transaction) => {
      return (
        <span className="whitespace-nowrap" title={`${value}`}>
          {statuses[transaction.transaction_status].sign}{formatProductPrice(
            value
          )}
        </span>
      );
      // }
    },
  },
  {
    title: "Status",
    dataIndex: "transaction_status",
    key: "transaction_status",
    align: "center",
    // width: 100,
    render: (value: string) => {
      return (
        <span className={`whitespace-nowrap text-${statuses[value].color}`} title="">
          {statuses[value].name}
        </span>
      )
    }
  },
  {
    title: "Detail",
    dataIndex: "transaction_status",
    key: "transaction_status",
    align: "center",
    // width: 100,
    render: (value: string) => {
      return (
        <span className={`whitespace-nowrap text-${statuses[value].color}`} title="">
          {statuses[value].detail}
        </span>
      )
    }
  },

];

export type IProps = {
  transactions: transaction[] | null | undefined;
};

const OrderTransactionList = ({ transactions }: IProps) => {
  return (
    <div className="pt-2 flex flex-col">
      <h3 className="text-heading font-medium mb-3 pb-2 border-b border-gray-200">
        Transactions
      </h3>
      <div className="rounded overflow-hidden shadow mb-6">
        {/* @ts-ignore */}
        <Table columns={columns} data={transactions} rowKey="transaction_id" scroll={{ x: 100 }} />
      </div>

    </div>
  );
};

export default OrderTransactionList;
