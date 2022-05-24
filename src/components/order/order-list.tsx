import Pagination from "@components/ui/pagination";
import dayjs from "dayjs";
import { Table } from "@components/ui/table";
import ActionButtons from "@components/common/action-buttons";
import usePrice, { formatPrice } from "@utils/use-price";

// import { OrderStatus, UserAddress } from "@graphql/analytics.graphql";
import { formatAddress } from "@utils/format-address";
import { ROUTES } from "@utils/routes";
import relativeTime from "dayjs/plugin/relativeTime";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
// import { Order } from "@graphql/orders.graphql";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { order, pricing_details, subscription } from "src/API";
import { formatDate } from "@utils/date-helper";
import InvoiceLink from "./invoice";
import Button from "@components/ui/button";
import Link from "@components/ui/link";

const columns = [
  {
    title: "Order ID",
    dataIndex: "order_id",
    key: "order_id",
    align: "center",
    width: 150,
    render: (id: string, order: order) => {
      return <Link href={`${ROUTES.ORDERS}/details?order_id=${id}&user_id=${order.user_id}`}>
        <span className="transition duration-50  border-b-2 hover:border-gray-500">{id}</span>
      </Link>
    }
  },
  {
    title: "Status",
    dataIndex: "order_status",
    key: "order_status",
    align: "left",
    render: (status: any) => (
      <span
        className="whitespace-nowrap font-semibold capitalize"
      // style={{ color: status }}
      >
        {status}
      </span>
    ),
  },
  {
    title: "Total",
    dataIndex: "pricing_details",
    key: "pricing_details",
    align: "center",
    width: 70,
    render: (pricing_details: pricing_details) => {

      return <span className="whitespace-nowrap">{formatPrice({ amount: pricing_details.payable_amount })}</span>;
    },
  },
  {
    title: "Order Date",
    dataIndex: "created_at",
    key: "created_at",
    align: "center",
    render: (date: string) => {
      dayjs.extend(relativeTime);
      dayjs.extend(utc);
      dayjs.extend(timezone);
      return (
        <span className="whitespace-nowrap">
          {formatDate(date)}
        </span>
      );
    },
  },
  {
    title: "Delivery date",
    dataIndex: "delivery_date",
    key: "delivery_date",
    align: "center",
    render: (date: string) => {
      dayjs.extend(relativeTime);
      dayjs.extend(utc);
      dayjs.extend(timezone);
      return (
        <span className="whitespace-nowrap">
          {formatDate(date)}
        </span>
      );
    },
  },

  {
    title: "Shipping Address",
    dataIndex: "shipping_address",
    key: "shipping_address",
    align: "left",
    render: (shipping_address: any) => (
      <div>{formatAddress(shipping_address).slice(0, 30)}...</div>
    ),
  },
  {
    title: "Invoice",
    dataIndex: "id",
    key: "download",
    align: "center",
    width: 120,
    render: (_id: string, order: order) => (
      <InvoiceLink order_id={order.order_id} user_id={order.user_id} title='Download' />
    ),
  },
  // {
  //   title: "Actions",
  //   dataIndex: "order_id",
  //   key: "actions",
  //   align: "center",
  //   width: 100,
  //   render: (id: string, order: order) => (
  //     <ActionButtons
  //       id={id}
  //       deleteButton={false}
  //       editButtonText="Details"
  //       navigationPath={`${ROUTES.ORDERS}/details?order_id=${id}&user_id=${order.user_id}`}
  //       modalActionType="DELETE_ORDER"
  //     />
  //   ),
  // },
];

type IProps = {
  orders: order[] | null | undefined;
  handleFetchMore: any;
  nextToken: any;
};

const OrderList = ({ orders, handleFetchMore, nextToken }: IProps) => {

  return (
    <>
      <div className="rounded overflow-hidden shadow mb-6">
        <Table
          //@ts-ignore
          columns={columns}
          //@ts-ignore
          data={orders}
          rowKey="id"
          scroll={{ x: 980 }}
        />
      </div>

      {/* {!!paginatorInfo.total && (
        <div className="flex justify-end items-center">
          <Pagination
            total={paginatorInfo.total}
            current={paginatorInfo.currentPage}
            pageSize={paginatorInfo.perPage}
            onChange={onPagination}
          />
        </div>
      )} */}

      {nextToken && <div className="mx-auto flex justify-center">
        <Button onClick={() => handleFetchMore()}>Load More</Button>
      </div>}
    </>
  );
};

export default OrderList;
