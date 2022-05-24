import { ROUTES } from "@utils/routes";

export const siteSettings = {
  name: "PickBazar",
  description: "",
  logo: {
    url: "https://kisaan-web-app.s3.ap-southeast-2.amazonaws.com/app_data/public/Home/assets/logo.svg",
    alt: "PickBazar",
    href: "/",
    width: 128,
    height: 40,
  },
  defaultLanguage: "en",
  author: {
    name: "RedQ, Inc.",
    websiteUrl: "https://redq.io",
    address: "",
  },
  headerLinks: [],
  authorizedLinks: [
    { href: ROUTES.SETTINGS, label: "Settings" },
    { href: ROUTES.PROFILE_UPDATE, label: "Profile" },
    { href: ROUTES.LOGOUT, label: "Logout" },
  ],
  currencyCode: "USD",
  sidebarLinks: [
    // {
    //   href: ROUTES.DASHBOARD,
    //   label: "Dashboard",
    //   icon: "DashboardIcon",
    // },
    // { href: ROUTES.PRODUCTS, label: "Products", icon: "ProductsIcon" },
    // { href: ROUTES.ATTRIBUTES, label: "Attributes", icon: "AttributeIcon" },
    // {
    //   href: ROUTES.ATTRIBUTE_VALUES,
    //   label: "Attribute Values",
    //   icon: "AttributeValueIcon",
    // },
    // { href: ROUTES.TYPES, label: "Groups", icon: "TypesIcon" },
    { href: ROUTES.ORDERS, label: "Orders", icon: "OrdersIcon" },
    { href: ROUTES.SUBSCRIPTIONS, label: "Subscriptions", icon: "CategoriesIcon" },
    { href: ROUTES.USER, label: "User", icon: "UsersIcon" },
    // {
    //   href: ROUTES.ORDER_STATUS,
    //   label: "Order Status",
    //   icon: "OrdersStatusIcon",
    // },
    // { href: ROUTES.CUSTOMERS, label: "Customers", icon: "UsersIcon" },
    // { href: ROUTES.COUPONS, label: "Coupons", icon: "CouponsIcon" },
    // { href: ROUTES.TAXES, label: "Taxes", icon: "TaxesIcon" },
    // { href: ROUTES.SHIPPINGS, label: "Shippings", icon: "ShippingsIcon" },
    // { href: ROUTES.SETTINGS, label: "Settings", icon: "SettingsIcon" },
  ],
  product: {
    placeholder: "/product-placeholder.svg",
  },
  avatar: {
    placeholder: "/avatar-placeholder.svg",
  },
};
