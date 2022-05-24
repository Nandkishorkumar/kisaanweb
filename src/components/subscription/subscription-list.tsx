import ActionButtons from "@components/common/action-buttons";
import Button from "@components/ui/button";
import Link from "@components/ui/link";
import { Table } from "@components/ui/table";
import { formatDate } from "@utils/date-helper";
// import { OrderStatus, UserAddress } from "@graphql/analytics.graphql";
import { formatAddress } from "@utils/format-address";
import { ROUTES } from "@utils/routes";
import { formatPrice } from "@utils/use-price";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import { ColumnsType } from "rc-table/lib/interface";
import { pricing_details, subscription, subscription_status_enum } from "src/API";


const columns: ColumnsType<subscription> = [
  {
    title: "Subscription ID",
    dataIndex: "subscription_id",
    key: "subscription_id",
    align: "center",
    width: 150,
    render: (id: string, subscription: subscription) =>
      <Link href={`${ROUTES.SUBSCRIPTIONS}/details?subscription_id=${id}&user_id=${subscription.user_id}`}>
        <span className="transition duration-50  border-b-2 hover:border-gray-500">{id}</span>
      </Link>

  },
  {
    title: "Status",
    dataIndex: "subscription_status",
    key: "subscription_status",
    align: "center",
    width: 50,
    render: (subscription_status: subscription_status_enum) => {
      return <div className="flex items-center justify-center space-s-3">
        {subscription_status === 'active' &&
          <span className="px-3 py-1 rounded-full text-xs whitespace-nowrap uppercase relative text-white bg-primary-2">
            {subscription_status}
          </span>
        }
        {subscription_status === 'hold' &&
          <span className="px-3 py-1 rounded-full text-xs whitespace-nowrap uppercase relative text-white bg-yellow-400">
            {subscription_status}
          </span>
        }
        {subscription_status === 'cancelled' &&
          <span className="px-3 py-1 rounded-full text-xs whitespace-nowrap uppercase relative text-white bg-red-400">
            {subscription_status}
          </span>
        }

      </div>
    }
  },
  {
    title: "Product Count",
    dataIndex: "product_count",
    key: "product_count",
    align: "center",
    width: 50,
  },
  {
    title: "Frequency",
    dataIndex: "subscription_frequency",
    key: "subscription_frequency",
    align: "left",
    render: (status: string) => (
      <span
        className="whitespace-nowrap font-semibold capitalize"
      // style={{ color: status }}
      >
        {status.replaceAll('_', ' ')}
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
    title: "Start Date",
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
    title: "Next delivery",
    dataIndex: "next_delivery_date",
    key: "next_delivery_date",
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
    title: "Next payment",
    dataIndex: "next_payment_date",
    key: "next_payment_date",
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

  // {
  //   title: "Shipping Address",
  //   dataIndex: "shipping_address",
  //   key: "shipping_address",
  //   align: "left",
  //   render: (shipping_address: any) => (
  //     <div>{formatAddress(shipping_address).slice(0, 20)}...</div>
  //   ),
  // },

  // {
  //   title: "Actions",
  //   dataIndex: "subscription_id",
  //   key: "actions",
  //   align: "center",
  //   width: 100,
  //   render: (id: string, order: subscription) => (
  //     <ActionButtons
  //       id={id}
  //       deleteButton={false}
  //       editButtonText="Details"
  //       navigationPath={`${ROUTES.SUBSCRIPTIONS}/details?subscription_id=${id}&user_id=${order.user_id}`}
  //       modalActionType="DELETE_ORDER"
  //     />
  //   ),
  // },
];

type IProps = {
  subscriptions: subscription[] | null | undefined;
  handleFetchMore: any;
  nextToken: any;
};

const SubscriptionList = ({ subscriptions, handleFetchMore, nextToken }: IProps) => {

  return (
    <>
      <div className="rounded overflow-hidden shadow mb-6">
        <Table
          //@ts-ignore
          columns={columns}
          //@ts-ignore
          data={subscriptions}
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

export default SubscriptionList;
