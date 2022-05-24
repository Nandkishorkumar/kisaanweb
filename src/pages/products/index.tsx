import { gql, useQuery } from "@apollo/client";
import Card from "@components/common/card";
import Layout from "@components/common/layout";
import Search from "@components/common/search";
import ProductList from "@components/product/product-list";
import ErrorMessage from "@components/ui/error-message";
import Loader from "@components/ui/loader/loader";
import { listAllProducts } from "@graphql/queries";
// import {
//   ProductsOrderByColumn,
//   useProductsQuery,
//   ProductsHasTypeColumn,
//   SqlOperator,
// } from "@graphql/products.graphql";
import { useState } from "react";

export default function ProductsPage() {
  if (process.env.NODE_ENV === "development") {
    // getCombinedQueriesAndMutations()
  }
  const [searchTerm, setSearchTerm] = useState("");
  const { data, loading, error } = useQuery(gql(listAllProducts), {
    variables: {
      limit: 10
    }
  })
  const paginatorInfo = {
    total: 30,
    currentPage: 1,
    perPage: 10
  }

  // const { data, loading, error, refetch } = useProductsQuery({
  //   variables: {
  //     // first: 10,
  //     // hasType: {
  //     //   column: ProductsHasTypeColumn.Slug,
  //     //   operator: SqlOperator.Eq,
  //     //   value: "clothing",
  //     // },
  //     // orderBy: [
  //     //   {
  //     //     field: ProductsOrderByColumn.CreatedAt,
  //     //     order: SortOrder.Desc,
  //     //   },
  //     // ],
  //     // page: 1,
  //   },
  //   fetchPolicy: "network-only",
  // });

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error.message} />;

  function handleSearch({ searchText }: { searchText: string }) {
    setSearchTerm(searchText);
    // refetch({
    //   text: `%${searchText}%`,
    //   page: 1,
    // });
  }
  function handlePagination(current: any) {
    console.log({ current })
    // refetch({
    //   limit: paginatorInfo.perPage
    // });
  }
  return (
    <>
      <Card className="flex flex-col md:flex-row items-center mb-8">
        <div className="md:w-1/4 mb-4 md:mb-0">
          <h1 className="text-lg font-semibold text-heading">Products</h1>
        </div>

        <div className="w-full md:w-3/4 flex items-center ml-auto">
          <Search onSearch={handleSearch} />
        </div>
      </Card>
      <ProductList paginatorInfo={paginatorInfo} products={data?.listAllProducts?.products ?? []} onPagination={handlePagination} />
    </>
  );
}
ProductsPage.Layout = Layout;
