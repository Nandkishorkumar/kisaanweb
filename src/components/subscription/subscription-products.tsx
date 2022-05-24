import { Table } from "@components/ui/table";
import { siteSettings } from "@settings/site.settings";
import { formatProductPrice } from "@utils/use-price";
import Image from "next/image";
import { orderItem, snapshot_media_type } from "src/API";

const columns = [

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
    render: (value: number, product: orderItem) => {

      const price = product?.on_sale_flag == "Y"
        ? product?.sale_price
        : product?.base_price
      return (
        <span className="whitespace-nowrap" title={`${price}`}>
          {formatProductPrice(
            product.price_per_unit ?? 0
          )}/{value}
        </span>
      );
      // }
    },
  },
  {
    title: "Quantity",
    dataIndex: "item_count",
    key: "item_count",
    align: "center",
    width: 100,
  },
  {
    title: "Total",
    dataIndex: "item_count",
    key: "item_count",
    width: 90,
    align: "center",
    render: (item_count: number, product: orderItem) => {
      const price = (product?.on_sale_flag == "Y"
        ? product?.sale_price
        : product?.base_price) ?? 0
      return (
        <span className="whitespace-nowrap truncate">{formatProductPrice(price * item_count)}</span>
      )
    },
  },
];

export type IProps = {
  products: orderItem[] | null | undefined;
};

const OrderProductList = ({ products }: IProps) => {
  return (
    <>
      <div className="rounded overflow-hidden shadow mb-6">
        {/* @ts-ignore */}
        <Table columns={columns} data={products} rowKey="id" scroll={{ x: 900 }} />
      </div>

    </>
  );
};

export default OrderProductList;
