import Modal from "@components/ui/modal";
import { useUI } from "@contexts/ui.context";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { ROUTES } from "@utils/routes";
import { loggedIn } from "@utils/is-loggedin";
import AttributeValueDeleteView from "@components/attribute-values/attribute-values-delete-view";
// const TaxDeleteView = dynamic(() => import("@components/tax/tax-delete-view"));
// const BanCustomerView = dynamic(
// 	() => import("@components/customer/customer-ban-view")
// );
// const ShippingDeleteView = dynamic(
// 	() => import("@components/shipping/shipping-delete-view")
// );
// const CategoryDeleteView = dynamic(
// 	() => import("@components/category/category-delete-view")
// );
// const CouponDeleteView = dynamic(
// 	() => import("@components/coupon/coupon-delete-view")
// );
// const OrderDeleteView = dynamic(
// 	() => import("@components/order/order-delete-view")
// );
// const ProductDeleteView = dynamic(
// 	() => import("@components/product/product-delete-view")
// );
// const TypeDeleteView = dynamic(
// 	() => import("@components/type/type-delete-view")
// );
// const AttributeDeleteView = dynamic(
// 	() => import("@components/attribute/attribute-delete-view")
// );
// const OrderStatusDeleteView = dynamic(
// 	() => import("@components/order-status/order-status-delete-view")
// );

const Layout: React.FC = ({ children }) => {
	const router = useRouter();

	if (!loggedIn()) {
		router.push(ROUTES.LOGIN);
	}
	const { displayModal, closeModal, modalView } = useUI();

	return (
		<div className="min-h-screen bg-gray-100 flex flex-col transition-colors duration-150">
			<Navbar />
			<div className="flex flex-1 pt-20">
				<Sidebar />
				<main className="w-full lg:pl-72 xl:pl-76">
					<div className="p-5 md:p-8 overflow-y-auto h-full">{children}</div>
				</main>
			</div>
			{/* render modal */}
			<Modal
				open={displayModal}
				onClose={closeModal}
				containerClassName="max-w-xs"
			// useBlurBackdrop={true}
			>
				{/* {modalView === "DELETE_PRODUCT" && <ProductDeleteView />}
				{modalView === "DELETE_TYPE" && <TypeDeleteView />}
				{modalView === "DELETE_ATTRIBUTE" && <AttributeDeleteView />}
				{modalView === "DELETE_ATTRIBUTE_VALUE" && <AttributeValueDeleteView />}
				{modalView === "DELETE_CATEGORY" && <CategoryDeleteView />}
				{modalView === "DELETE_ORDER" && <OrderDeleteView />}
				{modalView === "DELETE_COUPON" && <CouponDeleteView />}
				{modalView === "DELETE_TAX" && <TaxDeleteView />}
				{modalView === "DELETE_SHIPPING" && <ShippingDeleteView />}
				{modalView === "DELETE_ORDER_STATUS" && <OrderStatusDeleteView />}
				{modalView === "BAN_CUSTOMER" && <BanCustomerView />} */}
			</Modal>
		</div>
	);
};
export default Layout;
