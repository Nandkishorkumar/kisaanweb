import { gql, useQuery } from "@apollo/client";
import Card from "@components/common/card";
import Layout from "@components/common/layout";
import Search from "@components/common/search";
import OrderList from "@components/order/order-list";
import ErrorMessage from "@components/ui/error-message";
import Loader from "@components/ui/loader/loader";
import { listAllOrdersAdmin } from "@graphql/queries";
// import {
//   OrdersOrderByColumn,
//   SortOrder,
//   useOrdersQuery,
// } from "@graphql/orders.graphql";
import { useState } from "react";
import { ListAllOrdersAdminQuery, ListAllOrdersAdminQueryVariables } from "src/API";

export default function Orders() {
  const [searchTerm, setSearchTerm] = useState("");
  const { data, loading, error, fetchMore } = useQuery<ListAllOrdersAdminQuery, ListAllOrdersAdminQueryVariables>(gql(listAllOrdersAdmin), { variables: { limit: 10 } })
  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error.message} />;
  function handleSearch({ searchText }: { searchText: string }) {
    setSearchTerm(searchText);
    // refetch({
    //   // tracking_number: `%${searchText}%`,
    //   page: 1,
    // });
  }
  

  const loadMore = () => {
    fetchMore({
      variables: { nextToken: data?.listAllOrdersAdmin?.nextToken, limit: 10 }, updateQuery: (previousResult, fetchMoreResult) => {
        const moreOrders = fetchMoreResult.fetchMoreResult?.listAllOrdersAdmin?.orders ?? [];
        const previousOrders = previousResult?.listAllOrdersAdmin?.orders ?? [];
        const nextToken = fetchMoreResult.fetchMoreResult?.listAllOrdersAdmin?.nextToken ?? null;
        return {
          ...previousResult,
          listAllOrdersAdmin: {
            ...previousResult.listAllOrdersAdmin,
            orders: [...previousOrders, ...moreOrders],
            nextToken,
          }
        }
      }
    })
  }


  return (
    <>

      <Card className="flex flex-col md:flex-row items-center mb-8">
        <div className="md:w-1/4 mb-4 md:mb-0">
          <h1 className="text-lg font-semibold text-heading">Orders</h1>
        </div>

        <div className="w-full md:w-3/4 flex items-center ml-auto">
          <Search onSearch={handleSearch} />
        </div>
      </Card>

      <OrderList handleFetchMore={loadMore} nextToken={data?.listAllOrdersAdmin?.nextToken} orders={data?.listAllOrdersAdmin?.orders} />
    </>
  );
}

Orders.Layout = Layout;
