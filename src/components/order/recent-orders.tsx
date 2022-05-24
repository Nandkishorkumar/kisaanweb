import dayjs from "dayjs";
import { Table } from "@components/ui/table";
import { OrderPaginator, OrderStatus } from "@graphql/order_status.graphql";
import usePrice from "@utils/use-price";
import relativeTime from "dayjs/plugin/relativeTime";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

const columns = [
  {
    title: "Tracking Number",
    dataIndex: "tracking_number",
    key: "tracking_number",
    align: "center",
    width: 150,
  },
  {
    title: "Total",
    dataIndex: "total",
    key: "total",
    align: "center",
    width: 120,
    render: (value: any) => {
      // const { price } = usePrice({
      //   amount: value,
      // });
      return <span className="whitespace-nowrap">{value}</span>;
    },
  },
  {
    title: "Order Date",
    dataIndex: "created_at",
    key: "created_at",
    align: "center",
    width: 150,
    render: (date: string) => {
      dayjs.extend(relativeTime);
      dayjs.extend(utc);
      dayjs.extend(timezone);
      return (
        <span className="whitespace-nowrap">
          {dayjs.utc(date).tz(dayjs.tz.guess()).fromNow()}
        </span>
      );
    },
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    align: "center",
    width: 200,
    render: (status: OrderStatus) => (
      <span
        className="whitespace-nowrap font-semibold"
        style={{ color: status?.color! }}
      >
        {status?.name}
      </span>
    ),
  },
];

type IProps = {
  orders: OrderPaginator | null | undefined;
  title?: string;
};

const RecentOrders = ({ orders, title }: IProps) => {
  const { data } = orders!;
  return (
    <>
      <div className="rounded overflow-hidden shadow mb-6">
        <h3 className="text-heading text-center font-semibold px-4 py-3 bg-white border-b border-gray-200">
          {title}
        </h3>
        <Table
          //@ts-ignore
          columns={columns}
          data={data}
          rowKey="id"
          scroll={{ x: 700 }}
        />
      </div>
    </>
  );
};

export default RecentOrders;
