import Pagination from "@components/ui/pagination";
import dayjs from "dayjs";
import { Table } from "@components/ui/table";
import ActionButtons from "@components/common/action-buttons";
import usePrice, { formatPrice } from "@utils/use-price";

// import { Userstatus, UserAddress } from "@graphql/analytics.graphql";
import { formatAddress } from "@utils/format-address";
import { ROUTES } from "@utils/routes";
import relativeTime from "dayjs/plugin/relativeTime";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
// import { Order } from "@graphql/Users.graphql";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { order, pricing_details, subscription } from "src/API";
import { formatDate } from "@utils/date-helper";
import InvoiceLink from "./invoice";
import Button from "@components/ui/button";

const columns = [
  {
    title: "email",
    dataIndex: "email",
    key: "email",
    align: "center",
    width: 150,
  },
  {
    title: "full_name",
    dataIndex: "full_name",
    key: "full_name",
    align: "left",
    render: (full_name: any) => (
      <span
        className="whitespace-nowrap font-semibold capitalize"
      // style={{ color: status }}
      >
        {full_name}
      </span>
    ),
  },
  {
    title: "user_type",
    dataIndex: "user_type",
    key: "user_type",
    align: "center",
    width: 70,
    render: (user_type: user_type) => {

      return <span className="whitespace-nowrap">{user_type}</span>;
    },
  },
  {
    title: "register_at",
    dataIndex: "register_at",
    key: "register_at",
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
    title: "last_login_at",
    dataIndex: "last_login_at",
    key: "last_login_at",
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
    title: "Actions",
    dataIndex: "order_id",
    key: "actions",
    align: "center",
    width: 100,
    render: (id: string, order: order) => (
      <ActionButtons
        id={id}
        deleteButton={false}
        editButtonText="Details"
        navigationPath={`${ROUTES.USER}/details?order_id=${id}&user_id=${order.user_id}`}
        modalActionType="DELETE_ORDER"
      />
    ),
  },
];

type IProps = {
  Users: order[] | null | undefined;
  handleFetchMore: any;
  nextToken: any;
};

const User_list = ({ Users, handleFetchMore, nextToken }: IProps) => {

  return (
    <>
      <div className="rounded overflow-hidden shadow mb-6">
        <Table
          //@ts-ignore
          columns={columns}
          //@ts-ignore
          data={Users}
          rowKey="id"
          scroll={{ x: 980 }}
        />
      </div>
      {nextToken && <div className="mx-auto flex justify-center">
        <Button onClick={() => handleFetchMore()}>Load More</Button>
      </div>}
    </>
  );
};

export default User_list;
