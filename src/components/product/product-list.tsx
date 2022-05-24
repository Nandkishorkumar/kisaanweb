import Pagination from "@components/ui/pagination";
import Image from "next/image";
import { Table } from "@components/ui/table";
import ActionButtons from "@components/common/action-buttons";
// import { ProductPaginator } from "@graphql/settings.graphql";
import { siteSettings } from "@settings/site.settings";
// import usePrice from "@utils/use-price";
import { ROUTES } from "@utils/routes";
import Badge from "@components/ui/badge/badge";
import { product, snapshot_media_type } from "src/API";
import { formatProductPrice } from "@utils/use-price";
// import { Product, ProductType } from "@graphql/products.graphql";

const columns = [
  // {
  //   title: "ID",
  //   dataIndex: "id",
  //   key: "id",
  //   align: "center",
  //   width: 64,
  // },
  {
    title: "Image",
    dataIndex: "homepage_media",
    key: "homepage_media",
    align: "left",
    width: 74,
    render: (image: snapshot_media_type, { name }: { name: string }) => {
      console.log({ image })
      return (
        <Image
          src={image?.media_url ?? siteSettings.product.placeholder}
          alt={name}
          layout="fixed"
          width={42}
          height={42}
          className="rounded overflow-hidden"
        />
      )
    },
  },
  {
    title: "Name",
    dataIndex: "product_title",
    key: "product_title",
    align: "left",
    width: 200,
    ellipsis: true,
  },
  // {
  //   title: "Group",
  //   dataIndex: "type",
  //   key: "type",
  //   width: 120,
  //   align: "center",
  //   render: (type: any) => (
  //     <span className="whitespace-nowrap truncate">{type?.name}</span>
  //   ),
  // },
  {
    title: "Product Type",
    dataIndex: "product_type",
    key: "product_type",
    width: 90,
    align: "center",
    render: (product_type: string) => (
      <span className="whitespace-nowrap truncate">{product_type}</span>
    ),
  },
  {
    title: "Price/Unit",
    dataIndex: "price_unit",
    key: "price_unit",
    align: "right",
    width: 100,
    render: (value: number, product: product) => {
      // if (record?.product_type === ProductType.Variable) {
      //   const { price: max_price } = usePrice({
      //     amount: record?.max_price as number,
      //   });
      //   const { price: min_price } = usePrice({
      //     amount: record?.min_price as number,
      //   });
      //   return (
      //     <span
      //       className="whitespace-nowrap"
      //       title={`${min_price} - ${max_price}`}
      //     >{`${min_price} - ${max_price}`}</span>
      //   );
      // } else {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      // const { price } = usePrice({ amount: value, });
      return (
        <span className="whitespace-nowrap" title={`${value}`}>
          {formatProductPrice(
            product?.price_per_unit
          )}/{value}
        </span>
      );
      // }
    },
  },
  {
    title: "Quantity",
    dataIndex: "on_sale_maximum_quantity",
    key: "on_sale_maximum_quantity",
    align: "center",
    width: 100,
  },
  {
    title: "Description",
    dataIndex: "long_description",
    key: "long_description",
    align: "left",
    width: 220,
    ellipsis: true,
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
    align: "center",
    width: 100,
    render: (status: string) => (
      <Badge
        text={status}
        color={status === "DRAFT" ? "bg-yellow-400" : "bg-primary"}
      />
    ),
  },
  {
    title: "Actions",
    dataIndex: "id",
    key: "actions",
    align: "center",
    width: 80,
    render: (id: string) => (
      <ActionButtons
        id={id}
        navigationPath={`${ROUTES.PRODUCTS}/edit/${id}`}
        modalActionType="DELETE_PRODUCT"
      />
    ),
  },
];

export type IProps = {
  products: product[] | null | undefined;
  onPagination: (current: number) => void;
};

const ProductList = ({ products, onPagination, paginatorInfo }: IProps) => {
  // const { data, paginatorInfo } = products!;
  console.log({ products })
  return (
    <>
      <div className="rounded overflow-hidden shadow mb-6">
        {/* @ts-ignore */}
        <Table columns={columns} data={products} rowKey="id" scroll={{ x: 900 }} />
      </div>

      {/* {!!paginatorInfo.total && (
        <div className="flex justify-end items-center">
          <Pagination
            total={paginatorInfo.total}
            current={paginatorInfo.currentPage}
            pageSize={paginatorInfo.perPage}
            onChange={onPagination}
            showLessItems
          />
        </div>
      )} */}
    </>
  );
};

export default ProductList;
