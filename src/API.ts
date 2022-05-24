/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type contactFormInput = {
  unauth_id?: string | null,
  user_id?: string | null,
  first_name: string,
  last_name: string,
  email: string,
  phone_number: string,
  message: string,
  subject: string,
};

export type contactForm = {
  __typename: "contactForm",
  first_name?: string | null,
  last_name?: string | null,
  email?: string | null,
  phone_number?: string | null,
  message?: string | null,
  subject?: string | null,
  user_id?: string | null,
  unauth_id?: string | null,
  form_id?: string | null,
};

export type bugInput = {
  user_id: string,
  page_url: string,
  screenshot_url: string,
  summary: string,
  errorStack: string,
  description?: string | null,
  developer?: developers_enum | null,
  platform?: platforms_enum | null,
};

export enum developers_enum {
  Kuldeep = "Kuldeep",
  Jahnavi = "Jahnavi",
  GurpreetSingh = "GurpreetSingh",
  JagdeepSingh = "JagdeepSingh",
  Aditya = "Aditya",
  Umesh = "Umesh",
  LovePreet = "LovePreet",
  Diksha = "Diksha",
  Nandu = "Nandu",
}


export enum platforms_enum {
  windows = "windows",
  mac = "mac",
  iphone = "iphone",
  android = "android",
}


export type bug = {
  __typename: "bug",
  user_id: string,
  page_url: string,
  screenshot_url: string,
  summary: string,
  description?: string | null,
  developer?: developers_enum | null,
};

export type createAndUpdateProfileInput = {
  user_PK: string,
  user_SK: string,
  user_id?: string | null,
  uuid?: string | null,
  email?: string | null,
  email_verified_flag?: string | null,
  user_avtar_url?: string | null,
  full_name?: string | null,
  user_role?: string | null,
  user_type?: string | null,
  primary_phone?: string | null,
  secondary_phone?: string | null,
  square_customer_id?: string | null,
  register_at?: string | null,
  last_login_at?: string | null,
  google_details?: string | null,
  google_registration_flag?: string | null,
  facebook_details?: string | null,
  facebook_registration_flag?: string | null,
  user_agent_details?: string | null,
  created_by?: string | null,
  created_at?: string | null,
  modified_by?: string | null,
  modified_at?: string | null,
};

export type userProfile = {
  __typename: "userProfile",
  avatar_url?: string | null,
  email?: string | null,
  email_verified?: string | null,
  email_verified_flag?: string | null,
  full_name?: string | null,
  last_login_at?: string | null,
  primary_phone?: string | null,
  provider?: string | null,
  register_at?: string | null,
  secondary_phone?: string | null,
  user_id?: string | null,
  user_type?: string | null,
};

export type getAndDeleteProfileInput = {
  user_PK: string,
  user_SK: string,
};

export type addAndUpdateUserProfileAddressInput = {
  user_id: string,
  cluster_id?: string | null,
  address_id?: string | null,
  billing_name?: string | null,
  shipping_name?: string | null,
  address_hash?: string | null,
  lat?: number | null,
  lng?: number | null,
  default_flag?: string | null,
  billing_same_as_shipping_flag?: string | null,
  driver_notes?: string | null,
  delivery_instructions?: string | null,
  shipping_email?: string | null,
  shipping_primary_phone?: string | null,
  shipping_secondary_phone?: string | null,
  shipping_address_line_1?: string | null,
  shipping_city?: string | null,
  shipping_postcode?: string | null,
  shipping_state?: string | null,
  shipping_country?: string | null,
  billing_email?: string | null,
  billing_primary_phone?: string | null,
  billing_secondary_phone?: string | null,
  billing_address_line_1?: string | null,
  billing_address_line_2?: string | null,
  billing_city?: string | null,
  billing_postcode?: string | null,
  billing_state?: string | null,
  billing_country?: string | null,
};

export type address = {
  __typename: "address",
  address_id?: string | null,
  cluster_id?: string | null,
  type?: string | null,
  billing_name?: string | null,
  shipping_name?: string | null,
  address_hash?: string | null,
  lat?: number | null,
  lng?: number | null,
  default_flag?: string | null,
  billing_same_as_shipping_flag?: string | null,
  delivery_instructions?: string | null,
  shipping_email?: string | null,
  shipping_primary_phone?: string | null,
  shipping_secondary_phone?: string | null,
  shipping_address_line_1?: string | null,
  shipping_city?: string | null,
  shipping_postcode?: string | null,
  shipping_state?: string | null,
  shipping_country?: string | null,
  billing_email?: string | null,
  billing_primary_phone?: string | null,
  billing_secondary_phone?: string | null,
  billing_address_line_1?: string | null,
  billing_address_line_2?: string | null,
  billing_city?: string | null,
  billing_postcode?: string | null,
  billing_state?: string | null,
  billing_country?: string | null,
};

export type makeDefaultAddressInput = {
  user_id: string,
  address_id: string,
};

export type makeDefaultAddress = {
  __typename: "makeDefaultAddress",
  user_id?: string | null,
  address_id?: string | null,
  message?: string | null,
  status_code?: number | null,
  status?: string | null,
};

export type addBillingAddressInput = {
  user_id: string,
  billing_primary_phone?: string | null,
  billing_city?: string | null,
  billing_address_line_1?: string | null,
  billing_address_line_2?: string | null,
  billing_secondary_phone?: string | null,
  billing_state?: string | null,
  billing_email?: string | null,
  billing_postcode?: string | null,
  billing_name?: string | null,
  billing_country?: string | null,
};

export type billingAddress = {
  __typename: "billingAddress",
  billing_primary_phone?: string | null,
  billing_address_id?: string | null,
  billing_city?: string | null,
  billing_address_line_1?: string | null,
  billing_address_line_2?: string | null,
  billing_secondary_phone?: string | null,
  billing_state?: string | null,
  billing_email?: string | null,
  billing_postcode?: string | null,
  billing_name?: string | null,
  billing_country?: string | null,
};

export type addLastCheckAvailabilityAddressInput = {
  user_id?: string | null,
  unauth_id?: string | null,
  cluster_id: string,
  shipping_name?: string | null,
  lat?: number | null,
  lng?: number | null,
  shipping_email?: string | null,
  shipping_primary_phone?: string | null,
  shipping_secondary_phone?: string | null,
  shipping_address_line_1?: string | null,
  shipping_city?: string | null,
  shipping_postcode: string,
  shipping_state?: string | null,
  shipping_country?: string | null,
};

export type addLastCheckAvailabilityAddress = {
  __typename: "addLastCheckAvailabilityAddress",
  cluster_id?: string | null,
  shipping_name?: string | null,
  lat?: number | null,
  lng?: number | null,
  shipping_email?: string | null,
  shipping_primary_phone?: string | null,
  shipping_secondary_phone?: string | null,
  shipping_address_line_1?: string | null,
  shipping_city?: string | null,
  shipping_postcode?: string | null,
  shipping_state?: string | null,
  shipping_country?: string | null,
  message?: string | null,
  status?: string | null,
  status_code?: number | null,
};

export type getAndDeleteUserAddressInput = {
  user_id: string,
  address_id: string,
  default_flag?: string | null,
};

export type addCardInput = {
  user_id: string,
  email: string,
  phone_number?: string | null,
  source_id: string,
  cardholder_name: string,
  backup_flag?: string | null,
  default_flag?: string | null,
  billing_address_line_1?: string | null,
  billing_city?: string | null,
  billing_country?: string | null,
  billing_postcode?: string | null,
  billing_state?: string | null,
  billing_email?: string | null,
  billing_primary_phone?: string | null,
};

export type addCard = {
  __typename: "addCard",
  user_id: string,
  email: string,
  phone_number?: string | null,
  source_id: string,
  cardholder_name: string,
  backup_flag?: string | null,
  default_flag?: string | null,
  billing_address_line_1?: string | null,
  billing_city?: string | null,
  billing_country?: string | null,
  billing_postcode?: string | null,
  billing_state?: string | null,
  billing_email?: string | null,
  billing_primary_phone?: string | null,
  message?: string | null,
  status?: string | null,
  status_code?: number | null,
};

export type makeDefaultCardInput = {
  user_id: string,
  payment_method_id: string,
};

export type makeDefaultCard = {
  __typename: "makeDefaultCard",
  user_id?: string | null,
  payment_method_id?: string | null,
  message?: string | null,
  status_code?: number | null,
  status?: string | null,
};

export type deleteCardInput = {
  user_id: string,
  payment_method_id: string,
  default_flag: string,
};

export type deleteCard = {
  __typename: "deleteCard",
  user_id?: string | null,
  cardholder_name?: string | null,
  backup_flag?: string | null,
  default_flag?: string | null,
  billing_address_line_1?: string | null,
  billing_city?: string | null,
  billing_country?: string | null,
  billing_postcode?: string | null,
  billing_state?: string | null,
  billing_email?: string | null,
  billing_primary_phone?: string | null,
};

export type updateCardInput = {
  user_id: string,
  payment_method_id: string,
  default_flag: string,
  backup_flag?: string | null,
  billing_address_line_1?: string | null,
  billing_city?: string | null,
  billing_country?: string | null,
  billing_postcode?: string | null,
  billing_state?: string | null,
  billing_email?: string | null,
  billing_primary_phone?: string | null,
  billing_secondary_phone?: string | null,
  cardholder_name?: string | null,
};

export type updateSubscriptionBillingAddressInput = {
  user_id: string,
  subscription_id: string,
  billing_address_line_1?: string | null,
  billing_address_line_2?: string | null,
  billing_city?: string | null,
  billing_country?: string | null,
  billing_postcode?: string | null,
  billing_state?: string | null,
  billing_email?: string | null,
  billing_primary_phone?: string | null,
  billing_secondary_phone?: string | null,
  billing_name?: string | null,
};

export type updateSubscriptionBillingAddress = {
  __typename: "updateSubscriptionBillingAddress",
  user_id?: string | null,
  subscription_id?: string | null,
  billing_address_line_1?: string | null,
  billing_address_line_2?: string | null,
  billing_city?: string | null,
  billing_country?: string | null,
  billing_postcode?: string | null,
  billing_state?: string | null,
  billing_email?: string | null,
  billing_primary_phone?: string | null,
  billing_secondary_phone?: string | null,
  billing_name: string,
};

export type updateSubscriptionShippingAddressInput = {
  user_id: string,
  subscription_id: string,
  delivery_instructions?: string | null,
  delivery_date?: string | null,
  shipping_email?: string | null,
  shipping_name?: string | null,
  shipping_primary_phone?: string | null,
  shipping_secondary_phone?: string | null,
  shipping_address_line_1?: string | null,
  shipping_city?: string | null,
  shipping_postcode?: string | null,
  shipping_state?: string | null,
  shipping_country?: string | null,
  lat?: number | null,
  lng?: number | null,
};

export type updateSubscriptionShippingAddress = {
  __typename: "updateSubscriptionShippingAddress",
  user_id?: string | null,
  subscription_id?: string | null,
  delivery_date?: string | null,
  shipping_name?: string | null,
  delivery_instructions?: string | null,
  lat?: number | null,
  lng?: number | null,
  shipping_email?: string | null,
  shipping_primary_phone?: string | null,
  shipping_secondary_phone?: string | null,
  shipping_address_line_1?: string | null,
  shipping_city?: string | null,
  shipping_postcode?: string | null,
  shipping_state?: string | null,
  shipping_country?: string | null,
  message?: string | null,
  status_code?: number | null,
  status?: string | null,
};

export type paymentLogoUrlInput = {
  PK: string,
  SK: string,
  mastercard?: string | null,
  visa?: string | null,
  american_express?: string | null,
  paypal?: string | null,
};

export type paymentLogoUrls = {
  __typename: "paymentLogoUrls",
  PK?: string | null,
  SK?: string | null,
  visa?: string | null,
  mastercard?: string | null,
  american_express?: string | null,
  paypal?: string | null,
};

export type updateItemCountInCartInput = {
  unauth_id?: string | null,
  user_id?: string | null,
  subscription_flag: string,
  subscription_frequency?: string | null,
  product_id: string,
  item_count: number,
  cluster_id: string,
  shipping_postcode: string,
  buynow_flag: string,
};

export type getCart = {
  __typename: "getCart",
  status?: string | null,
  status_code?: number | null,
  subscription_frequency_list?: Array< string | null > | null,
  contain_subscription_flag?: string | null,
  contain_out_of_stock_product?: string | null,
  product_count?: number | null,
  cart_items?:  Array<cart_items_type | null > | null,
  pricing_details?: pricing_details | null,
  coupon_applied_flag?: string | null,
  coupon_code?: string | null,
  coupon_valid_flag?: string | null,
};

export type cart_items_type = {
  __typename: "cart_items_type",
  product_id: string,
  subscription_flag?: string | null,
  item_count?: number | null,
  subscription_frequency?: string | null,
  subscription_frequency_title?: string | null,
  product_name?: string | null,
  product_title?: string | null,
  inventory_policy?: string | null,
  availability_range?: number | null,
  available_on_subscription_flag?: string | null,
  subscription_frequency_details?:  Array<subscription_frequency_details_type | null > | null,
  stock_flag?: string | null,
  weight?: string | null,
  homepage_media?: snapshot_media_type | null,
  on_sale_flag?: string | null,
  on_sale_to?: string | null,
  on_sale_from?: string | null,
  on_sale_maximum_quantity?: string | null,
  amount_saved?: number | null,
  percentage_off?: number | null,
  sale_price?: number | null,
  base_price?: number | null,
  price_unit?: string | null,
  price_per_unit?: number | null,
};

export type subscription_frequency_details_type = {
  __typename: "subscription_frequency_details_type",
  position?: number | null,
  frequency_title?: string | null,
  frequency_name?: string | null,
};

export type snapshot_media_type = {
  __typename: "snapshot_media_type",
  media_type?: string | null,
  media_url?: string | null,
  media_width?: string | null,
  media_height?: string | null,
};

export type pricing_details = {
  __typename: "pricing_details",
  onetime_amount?: number | null,
  total_amount?: number | null,
  discount?: number | null,
  payable_amount?: number | null,
  onetime_delivery_charge?: number | null,
  recurring_delivery_charges?:  Array<recurring_delivery_charges | null > | null,
};

export type recurring_delivery_charges = {
  __typename: "recurring_delivery_charges",
  subscription_frequency?: string | null,
  recurring_amount?: number | null,
  delivery_charge?: number | null,
  recurring_total_amount?: number | null,
};

export type addToCartInput = {
  user_id?: string | null,
  unauth_id?: string | null,
  subscription_flag: string,
  subscription_frequency?: string | null,
  item_count: number,
  product_id: string,
  buynow_flag: string,
};

export type addToCart = {
  __typename: "addToCart",
  user_id?: string | null,
  unauth_id?: string | null,
  cart_id?: string | null,
  subscription_flag?: string | null,
  subscription_frequency?: string | null,
  item_count?: number | null,
  product_id?: string | null,
  status_code?: number | null,
  status?: string | null,
  message?: string | null,
  buynow_flag?: string | null,
};

export type migrateCartInput = {
  user_id: string,
  unauth_id: string,
  cluster_id: string,
  shipping_postcode: string,
};

export type deleteProductFromCartInput = {
  user_id?: string | null,
  unauth_id?: string | null,
  product_id: string,
  cluster_id: string,
  shipping_postcode: string,
  subscription_flag: string,
  subscription_frequency?: string | null,
  buynow_flag: string,
};

export type updateOrderAddressInput = {
  user_id: string,
  order_id: string,
  address_id: string,
  default_flag: string,
};

export type updateOrderAddress = {
  __typename: "updateOrderAddress",
  user_id?: string | null,
  order_id?: string | null,
  address_id?: string | null,
  default_flag?: string | null,
  message?: string | null,
  status_code?: number | null,
  status?: string | null,
};

export type updateOrderPaymentMethodInput = {
  user_id: string,
  order_id: string,
  payment_method_id: string,
  default_flag: string,
};

export type updateOrderPaymentMethod = {
  __typename: "updateOrderPaymentMethod",
  user_id?: string | null,
  order_id?: string | null,
  payment_method_id?: string | null,
  default_flag?: string | null,
  message?: string | null,
  status_code?: number | null,
  status?: string | null,
};

export type generateInvoiceUrlInput = {
  user_id: string,
  order_id: string,
};

export type generateInvoiceUrl = {
  __typename: "generateInvoiceUrl",
  user_id?: string | null,
  order_id?: string | null,
  invoice_url?: string | null,
  message?: string | null,
  status_code?: number | null,
  status?: string | null,
};

export type checkOutCartInput = {
  user_id: string,
  cart_id?: string | null,
  coupon_applied_flag?: string | null,
  coupon_code?: string | null,
  payment_method_id: string,
  payment_method_default_flag: string,
  delivery_date: string,
  cluster_id: string,
  shipping_postcode: string,
  address_id: string,
  address_default_flag: string,
  buynow_flag: string,
  pricing_details?: pricing_details_input | null,
};

export type pricing_details_input = {
  onetime_amount?: number | null,
  total_amount?: number | null,
  discount?: number | null,
  payable_amount?: number | null,
  onetime_delivery_charge?: number | null,
  recurring_delivery_charges?: Array< recurring_delivery_charges_input | null > | null,
};

export type recurring_delivery_charges_input = {
  subscription_frequency?: string | null,
  recurring_amount?: number | null,
  delivery_charge?: number | null,
  recurring_total_amount?: number | null,
};

export type checkOutCart = {
  __typename: "checkOutCart",
  user_id: string,
  cart_id?: string | null,
  delivery_date?: string | null,
  cluster_id?: string | null,
  order_id?: string | null,
  pricing_details?: pricing_details | null,
  status_code?: number | null,
  status?: string | null,
};

export type cancelOrderInput = {
  user_id: string,
  order_id: string,
  cancelled_reason?: string | null,
};

export type cancelOrder = {
  __typename: "cancelOrder",
  user_id?: string | null,
  order_id?: string | null,
  cancelled_reason?: string | null,
  status_code?: number | null,
  status?: string | null,
  message?: string | null,
};

export type updateOrderBillingAddressInput = {
  user_id: string,
  order_id: string,
  billing_address_line_1?: string | null,
  billing_address_line_2?: string | null,
  billing_city?: string | null,
  billing_country?: string | null,
  billing_postcode?: string | null,
  billing_state?: string | null,
  billing_email?: string | null,
  billing_primary_phone?: string | null,
  billing_secondary_phone?: string | null,
  cardholder_name?: string | null,
};

export type updateOrderBillingAddress = {
  __typename: "updateOrderBillingAddress",
  user_id?: string | null,
  subscription_id?: string | null,
  billing_address_line_1?: string | null,
  billing_address_line_2?: string | null,
  billing_city?: string | null,
  billing_country?: string | null,
  billing_postcode?: string | null,
  billing_state?: string | null,
  billing_email?: string | null,
  billing_primary_phone?: string | null,
  billing_secondary_phone?: string | null,
  cardholder_name: string,
};

export type updateOrderDeliveryDateInput = {
  user_id?: string | null,
  order_id?: string | null,
  delivery_date?: string | null,
};

export type updateOrderDeliveryDate = {
  __typename: "updateOrderDeliveryDate",
  user_id?: string | null,
  order_id?: string | null,
  delivery_date?: string | null,
  message?: string | null,
  status?: string | null,
  status_code?: number | null,
};

export type updateOrderDeliveryInstructionsInput = {
  user_id: string,
  order_id: string,
  delivery_instructions: string,
};

export type updateOrderDeliveryInstructions = {
  __typename: "updateOrderDeliveryInstructions",
  user_id?: string | null,
  order_id?: string | null,
  delivery_instructions?: string | null,
  status_code?: number | null,
  status?: string | null,
  message?: string | null,
};

export type updateSubscriptionPaymentMethodInput = {
  user_id: string,
  subscription_id: string,
  payment_method_id: string,
  default_flag: string,
};

export type updateSubscriptionPaymentMethod = {
  __typename: "updateSubscriptionPaymentMethod",
  user_id?: string | null,
  subscription_id?: string | null,
  payment_method_id?: string | null,
  default_flag?: string | null,
  status?: string | null,
  status_code?: number | null,
  message?: string | null,
};

export type updateSubscriptionDeliveryInstructionsInput = {
  user_id: string,
  subscription_id: string,
  delivery_instructions: string,
};

export type updateSubscriptionDeliveryInstructions = {
  __typename: "updateSubscriptionDeliveryInstructions",
  user_id?: string | null,
  subscription_id?: string | null,
  delivery_instructions?: string | null,
  status?: string | null,
  status_code?: number | null,
  message?: string | null,
};

export type updateSubscriptionAddressInput = {
  user_id: string,
  subscription_id: string,
  address_id: string,
  default_flag: string,
};

export type updateSubscriptionAddress = {
  __typename: "updateSubscriptionAddress",
  user_id?: string | null,
  subscription_id?: string | null,
  address_id?: string | null,
  default_flag?: string | null,
  status?: string | null,
  status_code?: number | null,
  message?: string | null,
};

export type changeSubscriptionShippingAddressInput = {
  user_id: string,
  subscription_id: string,
  address_id: string,
  default_flag: string,
  delivery_date?: string | null,
};

export type changeSubscriptionShippingAddress = {
  __typename: "changeSubscriptionShippingAddress",
  user_id?: string | null,
  subscription_id?: string | null,
  address_id?: string | null,
  default_flag?: string | null,
  delivery_date?: string | null,
  status?: string | null,
  status_code?: number | null,
  message?: string | null,
};

export type holdOrCancelUserSubscriptionInput = {
  user_id: string,
  subscription_id: string,
  subscription_status?: subscription_status_enum | null,
  cancelled_reason?: string | null,
};

export enum subscription_status_enum {
  hold = "hold",
  cancelled = "cancelled",
  active = "active",
}


export type holdOrCancelUserSubscription = {
  __typename: "holdOrCancelUserSubscription",
  user_id: string,
  subscription_id: string,
  cancelled_reason?: string | null,
};

export type addProductInSubscriptionInput = {
  user_id: string,
  subscription_id: string,
  product_id: string,
  item_count: number,
  cluster_id: string,
  shipping_postcode: string,
};

export type addProductInSubscription = {
  __typename: "addProductInSubscription",
  user_id?: string | null,
  subscription_id?: string | null,
  product_id?: string | null,
  item_count?: number | null,
  cluster_id?: string | null,
  shipping_postcode?: string | null,
  message?: string | null,
  status_code?: number | null,
  status?: string | null,
};

export type updateItemCountInSubscriptionInput = {
  user_id: string,
  subscription_id: string,
  product_id: string,
  item_count: number,
  cluster_id: string,
  shipping_postcode: string,
};

export type updateItemCountInSubscription = {
  __typename: "updateItemCountInSubscription",
  user_id?: string | null,
  subscription_id?: string | null,
  product_id?: string | null,
  item_count?: number | null,
  cluster_id?: string | null,
  shipping_postcode?: string | null,
  message?: string | null,
  status_code?: number | null,
  status?: string | null,
};

export type deleteProductFromSubscriptionInput = {
  user_id: string,
  subscription_id: string,
  product_id: string,
  cluster_id: string,
  shipping_postcode: string,
};

export type deleteProductFromSubscription = {
  __typename: "deleteProductFromSubscription",
  user_id?: string | null,
  subscription_id?: string | null,
  product_id?: string | null,
  shipping_postcode?: string | null,
  cluster_id?: string | null,
  message?: string | null,
  status_code?: number | null,
  status?: string | null,
};

export type activeUserSubscriptionInput = {
  user_id?: string | null,
  subscription_id?: string | null,
  delivery_date?: string | null,
  shipping_postcode?: string | null,
  cluster_id?: string | null,
};

export type activeUserSubscription = {
  __typename: "activeUserSubscription",
  user_id?: string | null,
  subscription_id?: string | null,
  delivery_date?: string | null,
  shipping_postcode?: string | null,
  cluster_id?: string | null,
  message?: string | null,
  status?: string | null,
  status_code?: number | null,
};

export type updateSubscriptionDeliveryDateInput = {
  user_id?: string | null,
  subscription_id?: string | null,
  delivery_date?: string | null,
};

export type updateSubscriptionDeliveryDate = {
  __typename: "updateSubscriptionDeliveryDate",
  user_id?: string | null,
  subscription_id?: string | null,
  delivery_date?: string | null,
  message?: string | null,
  status?: string | null,
  status_code?: number | null,
};

export type updateSubscriptionFrequencyInput = {
  user_id: string,
  subscription_id: string,
  delivery_date: string,
  subscription_frequency: string,
};

export type updateSubscriptionFrequency = {
  __typename: "updateSubscriptionFrequency",
  user_id?: string | null,
  subscription_id?: string | null,
  delivery_date?: string | null,
  message?: string | null,
  status?: string | null,
  status_code?: number | null,
  subscription_frequency?: string | null,
};

export type getAndDeleteTransactionInput = {
  user_id: string,
  transaction_id: string,
  transaction_status: string,
};

export type transaction = {
  __typename: "transaction",
  transaction_id?: string | null,
  transaction_status?: string | null,
  payment_amount?: number | null,
  failed_reason?: string | null,
  order_id?: string | null,
  payment_id?: string | null,
  created_at?: string | null,
  payment_method_details?: payment_method_details | null,
};

export type payment_method_details = {
  __typename: "payment_method_details",
  payment_method_type?: string | null,
  exp_month?: number | null,
  exp_year?: number | null,
  last_4?: string | null,
  billing_state?: string | null,
  billing_email?: string | null,
  card_brand?: string | null,
  billing_address_line_1?: string | null,
  default_flag?: string | null,
  billing_primary_phone?: string | null,
  billing_country?: string | null,
  cardholder_name?: string | null,
  billing_city?: string | null,
  payment_method_id?: string | null,
  billing_postcode?: string | null,
  backup_flag?: string | null,
  status?: string | null,
};

export type createAndUpdateProductInput = {
  product_id?: string | null,
  product_type?: string | null,
  categories?: Array< string | null > | null,
  sub_categories?: Array< string | null > | null,
  variations?: Array< string | null > | null,
  best_selling_flag?: flag_enum | null,
  featured_flag?: flag_enum | null,
  product_name?: string | null,
  published_scope?: published_scope_enum | null,
  average_rating_stars?: number | null,
  product_title?: string | null,
  short_description?: string | null,
  long_description?: string | null,
  vendor?: string | null,
  ship_from?: string | null,
  available_on_subscription_flag?: flag_enum | null,
  subscription_frequency_details?: Array< subscription_frequency_details_input | null > | null,
  rating_details?: rating_details_input | null,
  media_details?: Array< media_details_input | null > | null,
  stock_flag?: flag_enum | null,
  weight?: string | null,
  homepage_media?: snapshot_media_input | null,
  on_sale_flag?: flag_enum | null,
  on_sale_to?: string | null,
  on_sale_from?: string | null,
  on_sale_maximum_quantity?: string | null,
  amount_saved?: number | null,
  percentage_off?: number | null,
  sale_price?: number | null,
  base_price?: number | null,
  price_unit?: string | null,
  price_per_unit?: number | null,
  origin_country?: string | null,
  corner_image_url?: string | null,
  status?: general_status_enum | null,
};

export enum flag_enum {
  Y = "Y",
  N = "N",
}


export enum published_scope_enum {
  all = "all",
  web = "web",
  android = "android",
  ios = "ios",
}


export type subscription_frequency_details_input = {
  position?: number | null,
  frequency_title?: string | null,
  frequency_name?: string | null,
};

export type rating_details_input = {
  total_rating_count?: number | null,
  five_start_rating_count?: number | null,
  three_star_rating_count?: number | null,
  one_star_rating_count?: number | null,
  two_star_rating_count?: number | null,
  four_start_rating_count?: number | null,
};

export type media_details_input = {
  position?: number | null,
  media_type?: string | null,
  media_url?: string | null,
  media_height?: string | null,
  media_width?: string | null,
};

export type snapshot_media_input = {
  media_type?: string | null,
  media_url?: string | null,
  media_width?: string | null,
  media_height?: string | null,
};

export enum general_status_enum {
  published = "published",
  draft = "draft",
}


export type product = {
  __typename: "product",
  main_product_flag?: string | null,
  product_id: string,
  product_type?: string | null,
  categories?: Array< string | null > | null,
  sub_categories?: Array< string | null > | null,
  variations?: Array< string | null > | null,
  best_selling_flag?: string | null,
  featured_flag?: string | null,
  product_name?: string | null,
  published_scope?: string | null,
  average_rating_stars?: number | null,
  product_title?: string | null,
  short_description?: string | null,
  long_description?: string | null,
  vendor?: string | null,
  ship_from?: string | null,
  available_on_subscription_flag?: string | null,
  subscription_frequency_details?:  Array<subscription_frequency_details_type | null > | null,
  rating_details?: rating_details_type | null,
  media_details?:  Array<media_details_type | null > | null,
  stock_flag?: string | null,
  weight?: string | null,
  homepage_media?: snapshot_media_type | null,
  on_sale_flag?: string | null,
  on_sale_to?: string | null,
  on_sale_from?: string | null,
  on_sale_maximum_quantity?: string | null,
  amount_saved?: number | null,
  percentage_off?: number | null,
  sale_price?: number | null,
  base_price?: number | null,
  price_unit?: string | null,
  price_per_unit?: number | null,
  origin_country?: string | null,
  corner_image_url?: string | null,
  // only for product creation
  status?: string | null,
};

export type rating_details_type = {
  __typename: "rating_details_type",
  total_rating_count?: number | null,
  five_start_rating_count?: number | null,
  three_star_rating_count?: number | null,
  one_star_rating_count?: number | null,
  two_star_rating_count?: number | null,
  four_start_rating_count?: number | null,
};

export type media_details_type = {
  __typename: "media_details_type",
  position?: number | null,
  media_type?: string | null,
  media_url?: string | null,
  media_height?: string | null,
  media_width?: string | null,
};

export type createAndUpdateCategoryInput = {
  category_id?: string | null,
  category_name?: string | null,
  category_title?: string | null,
  description?: string | null,
  media_url?: string | null,
  media_type?: string | null,
  media_height?: string | null,
  media_width?: string | null,
  status?: general_status_enum | null,
  position?: number | null,
  published_scope?: published_scope_enum | null,
  product_count?: number | null,
  featured_flag?: flag_enum | null,
  shop_media?: shopMediaInput | null,
};

export type shopMediaInput = {
  media_height?: string | null,
  text_color?: string | null,
  background_color?: string | null,
  media_width?: string | null,
  media_url?: string | null,
  media_type?: string | null,
};

export type category = {
  __typename: "category",
  priority?: number | null,
  category_id?: string | null,
  category_name?: string | null,
  category_title?: string | null,
  description?: string | null,
  media_url?: string | null,
  media_type?: string | null,
  media_height?: string | null,
  media_width?: string | null,
  shop_media?: shopMedia | null,
  status?: string | null,
};

export type shopMedia = {
  __typename: "shopMedia",
  media_height?: string | null,
  text_color?: string | null,
  background_color?: string | null,
  media_width?: string | null,
  media_url?: string | null,
  media_type?: string | null,
};

export type getAndDeleteCategoryInput = {
  category_id: string,
};

export type createAndUpdateReviewInput = {
  review_PK: string,
  review_SK?: string | null,
  review_id?: string | null,
  email?: string | null,
  product_id?: string | null,
  product_name?: string | null,
  rating_flag?: string | null,
  rating_stars?: number | null,
  review_flag?: string | null,
  status?: string | null,
  user_id?: string | null,
  uuid?: string | null,
  user_avtar_url?: string | null,
  verified_email_flag?: string | null,
  position?: number | null,
  full_name?: string | null,
  review_subject?: string | null,
  helpful_flag?: string | null,
  helpful_count?: number | null,
  review_detail?: string | null,
  created_by?: string | null,
  created_at?: string | null,
  modified_by?: string | null,
  modified_at?: string | null,
};

export type review = {
  __typename: "review",
  review_id?: string | null,
  product_name?: string | null,
  rating_flag?: string | null,
  rating_stars?: number | null,
  review_flag?: string | null,
  user_id?: string | null,
  user_avtar_url?: string | null,
  full_name?: string | null,
  review_subject?: string | null,
  helpful_flag?: string | null,
  helpful_count?: number | null,
  review_detail?: string | null,
};

export type getAndDeleteReviewInput = {
  review_PK: string,
  review_SK: string,
};

export type createAndUpdateTestimonialInput = {
  testimonial_PK: string,
  testimonial_SK: string,
  testimonial_id?: string | null,
  email?: string | null,
  featured_flag?: string | null,
  rating_flag?: string | null,
  rating_stars?: number | null,
  testimonial_flag?: string | null,
  status?: string | null,
  user_id?: string | null,
  uuid?: string | null,
  user_avtar_url?: string | null,
  verified_email_flag?: string | null,
  position?: number | null,
  full_name?: string | null,
  testimonial_subject?: string | null,
  testimonial_detail?: string | null,
  created_by?: string | null,
  created_at?: string | null,
  modified_by?: string | null,
  modified_at?: string | null,
};

export type testimonial = {
  __typename: "testimonial",
  rating_flag?: string | null,
  rating_stars?: number | null,
  testimonial_flag?: string | null,
  user_avtar_url?: string | null,
  position?: number | null,
  full_name?: string | null,
  testimonial_subject?: string | null,
  testimonial_detail?: string | null,
};

export type getAndDeleteTestimonialInput = {
  testimonial_PK: string,
  testimonial_SK: string,
};

export type subscribeNewsLetterInput = {
  email: string,
  platform: string,
};

export type newsLetter = {
  __typename: "newsLetter",
  news_letter_id?: string | null,
  email: string,
  platform: string,
};

export type getAndDeleteNewsLetterInput = {
  PK: string,
  SK: string,
};

export type createAndUpdateQnaInput = {
  qna_PK: string,
  qna_SK: string,
  qna_id: string,
  product_id?: string | null,
  question?: string | null,
  answer?: string | null,
  position?: number | null,
  answer_by?: string | null,
  status?: string | null,
  created_by?: string | null,
  created_at?: string | null,
  modified_by?: string | null,
  modified_at?: string | null,
};

export type qna = {
  __typename: "qna",
  qna_id?: string | null,
  product_id?: string | null,
  question?: string | null,
  answer?: string | null,
  position?: number | null,
  answer_by?: string | null,
};

export type getAndDeleteQnaInput = {
  qna_PK: string,
  qna_SK: string,
};

export type createAndUpdateCommentInput = {
  PK: string,
  SK: string,
  comment_id: string,
  email?: string | null,
  qna_id?: string | null,
  user_id?: string | null,
  uuid?: string | null,
  user_avtar_url?: string | null,
  comment?: string | null,
  commented_by?: string | null,
  commented_at?: string | null,
  status?: string | null,
  position?: number | null,
  modified_by?: string | null,
  modified_at?: string | null,
};

export type comment = {
  __typename: "comment",
  PK: string,
  SK: string,
  comment_id: string,
  email?: string | null,
  qna_id?: string | null,
  user_id?: string | null,
  uuid?: string | null,
  user_avtar_url?: string | null,
  comment?: string | null,
  commented_by?: string | null,
  commented_at?: string | null,
  status?: string | null,
  position?: number | null,
  modified_by?: string | null,
  modified_at?: string | null,
};

export type getAndDeleteCommentInput = {
  PK: string,
  SK: string,
};

export type createAndUpdateClusterInput = {
  PK: string,
  SK: string,
  cluster_id?: string | null,
  cluster_name?: string | null,
  postcode?: Array< string | null > | null,
  description?: string | null,
  cities?: Array< string | null > | null,
  coordinates_format_1?: string | null,
  coordinates_format_2?: string | null,
  delivery_charges?: string | null,
  delivery_days?: Array< string | null > | null,
  created_by?: string | null,
  created_at?: string | null,
  modified_by?: string | null,
  modified_at?: string | null,
  available_frequency?: Array< string | null > | null,
};

export type cluster = {
  __typename: "cluster",
  PK: string,
  SK: string,
  cluster_id?: string | null,
  cluster_name?: string | null,
  postcode?: Array< string | null > | null,
  description?: string | null,
  cities?: Array< string | null > | null,
  coordinates_format_1?: string | null,
  coordinates_format_2?: string | null,
  delivery_charges?: string | null,
  delivery_days?: Array< string | null > | null,
  created_by?: string | null,
  created_at?: string | null,
  modified_by?: string | null,
  modified_at?: string | null,
  available_frequency?: Array< string | null > | null,
};

export type getAndDeleteClusterInput = {
  PK: string,
  SK: string,
};

export type createAndUpdateInventoryInput = {
  PK?: string | null,
  SK?: string | null,
  product_type?: string | null,
  inventory_id?: string | null,
  product_id?: string | null,
  variation_id?: string | null,
  product_name?: string | null,
  variation_name?: string | null,
  variation_description?: string | null,
  inventory_description?: string | null,
  date?: string | null,
  day?: string | null,
  sku?: string | null,
  total_stock?: number | null,
  current_stock?: number | null,
  purchased_stock?: number | null,
  stock_unit?: string | null,
  created_by?: string | null,
  created_at?: string | null,
  modified_by?: string | null,
  modified_at?: string | null,
};

export type inventory = {
  __typename: "inventory",
  PK?: string | null,
  SK?: string | null,
  product_type?: string | null,
  inventory_id?: string | null,
  product_id?: string | null,
  variation_id?: string | null,
  product_name?: string | null,
  variation_name?: string | null,
  variation_description?: string | null,
  inventory_description?: string | null,
  date?: string | null,
  day?: string | null,
  sku?: string | null,
  total_stock?: number | null,
  current_stock?: number | null,
  purchased_stock?: number | null,
  stock_unit?: string | null,
  created_by?: string | null,
  created_at?: string | null,
  modified_by?: string | null,
  modified_at?: string | null,
};

export type getAndDeleteInventoryInput = {
  PK: string,
  SK: string,
};

export type ProductControlsConnection = {
  __typename: "ProductControlsConnection",
  items?:  Array<ProductControls | null > | null,
  nextToken?: string | null,
};

export type ProductControls = {
  __typename: "ProductControls",
  PK: string,
  SK: string,
  best_selling_flag?: string | null,
  featured_flag?: string | null,
};

export type getMenuInput = {
  page_name: string,
  menu_name: string,
};

export type menuConnection = {
  __typename: "menuConnection",
  nextToken?: string | null,
  menus?:  Array<menu | null > | null,
};

export type menu = {
  __typename: "menu",
  menu_id?: string | null,
  category_name?: string | null,
  category_title?: string | null,
  category_id?: string | null,
  position?: number | null,
  sub_categories?:  Array<sub_category_menu | null > | null,
};

export type sub_category_menu = {
  __typename: "sub_category_menu",
  sub_category_name?: string | null,
  sub_category_id?: string | null,
  sub_category_title?: string | null,
  position?: number | null,
};

export type listBannersInput = {
  page_name: string,
};

export type bannersConnection = {
  __typename: "bannersConnection",
  banners?:  Array<banner | null > | null,
  nextToken?: string | null,
};

export type banner = {
  __typename: "banner",
  mobile_banner_url?: string | null,
  web_banner_url?: string | null,
  banner_id?: string | null,
  priority?: number | null,
};

export enum forward_flag_enum {
  Y = "Y",
}


export type userProfileConnection = {
  __typename: "userProfileConnection",
  profiles?:  Array<userProfile | null > | null,
  nextToken?: string | null,
};

export type listAllAddressesInput = {
  user_id: string,
};

export type addressConnection = {
  __typename: "addressConnection",
  addresses?:  Array<address | null > | null,
  nextToken?: string | null,
};

export type getLastCheckAvailabilityAddressInput = {
  user_id?: string | null,
  unauth_id?: string | null,
};

export type checkAddressAvailabilityInput = {
  user_id: string,
  lat?: number | null,
  lng?: number | null,
  address_line_1?: string | null,
  city?: string | null,
  state?: string | null,
  postcode?: string | null,
  country?: string | null,
  full_address?: string | null,
};

export type checkAddressAvailability = {
  __typename: "checkAddressAvailability",
  postcode?: string | null,
  cluster_id?: string | null,
  status?: boolean | null,
  status_code?: number | null,
};

export type getDeliveryDateByClusterInput = {
  cluster_id: string,
  shipping_postcode: string,
};

export type getDeliveryDateByCluster = {
  __typename: "getDeliveryDateByCluster",
  cluster_id?: string | null,
  shipping_postcode?: string | null,
  available_delivery_date?: Array< string | null > | null,
};

export type alternativeAddressSearchInput = {
  address: string,
};

export type alternativeAddressSearch = {
  __typename: "alternativeAddressSearch",
  lat?: number | null,
  lng?: number | null,
  address_line_1?: string | null,
  city?: string | null,
  state?: string | null,
  postcode?: string | null,
  country?: string | null,
  full_address?: string | null,
  address_provider?: string | null,
};

export type listAllPaymentMethodsInput = {
  user_id: string,
};

export type paymentMethodConnection = {
  __typename: "paymentMethodConnection",
  paymentMethods?:  Array<paymentMethod | null > | null,
  nextToken?: string | null,
};

export type paymentMethod = {
  __typename: "paymentMethod",
  payment_method_id?: string | null,
  status?: string | null,
  default_flag?: string | null,
  backup_flag?: string | null,
  payment_method_type?: string | null,
  card_brand?: string | null,
  last_4?: string | null,
  exp_month?: number | null,
  exp_year?: number | null,
  cardholder_name?: string | null,
  billing_address_line_1?: string | null,
  billing_address_line_2?: string | null,
  billing_city?: string | null,
  billing_country?: string | null,
  billing_email?: string | null,
  billing_postcode?: string | null,
  billing_primary_phone?: string | null,
  billing_secondary_phone?: string | null,
  billing_state?: string | null,
};

export type getCartInput = {
  user_id?: string | null,
  unauth_id?: string | null,
  cart_id?: string | null,
  cluster_id: string,
  shipping_postcode?: string | null,
  buynow_flag: string,
  coupon_applied_flag?: string | null,
  coupon_code?: string | null,
};

export type listOrderItemsInput = {
  order_id: string,
};

export type orderItemsConnection = {
  __typename: "orderItemsConnection",
  orderItems?:  Array<orderItem | null > | null,
  nextToken?: string | null,
};

export type orderItem = {
  __typename: "orderItem",
  corner_image_url?: string | null,
  on_sale_flag?: string | null,
  email_media?: snapshot_media_type | null,
  on_sale_from?: string | null,
  invoice_media?: snapshot_media_type | null,
  item_count?: number | null,
  percentage_off?: number | null,
  product_id?: string | null,
  vendor?: string | null,
  weight?: string | null,
  origin_country?: string | null,
  price_unit?: string | null,
  ship_from?: string | null,
  subscription_frequency?: string | null,
  subscription_flag?: string | null,
  subscription_frequency_details?: subscription_frequency_details_type | null,
  on_sale_to?: string | null,
  on_sale_maximum_quantity?: number | null,
  price_per_unit?: number | null,
  product_title?: string | null,
  availability_range?: number | null,
  amount_saved?: number | null,
  product_name?: string | null,
  stock_flag?: string | null,
  available_on_subscription_flag?: string | null,
  sale_price?: number | null,
  inventory_policy?: string | null,
  base_price?: number | null,
  categories?: Array< string | null > | null,
  product_type?: string | null,
  homepage_media?: snapshot_media_type | null,
  sub_categories?: Array< string | null > | null,
};

export type transactionConnection = {
  __typename: "transactionConnection",
  transactions?:  Array<transaction | null > | null,
  nextToken?: string | null,
};

export type getAndDeleteOrderInput = {
  order_id: string,
  user_id: string,
};

export type order = {
  __typename: "order",
  parent_subscription_id?: string | null,
  invoice_download_flag?: string | null,
  cancelled_at?: string | null,
  child_subscription_ids?: Array< string | null > | null,
  subscription_frequency_list?: Array< string | null > | null,
  product_count?: number | null,
  shipping_address?: shipping_address_type | null,
  backup_payment_method_flag?: string | null,
  delivery_status?: string | null,
  deliver_by?: string | null,
  order_status?: string | null,
  created_via?: string | null,
  contains_subscription_flag?: string | null,
  created_at?: string | null,
  deliver_at?: string | null,
  delivery_date?: string | null,
  user_id?: string | null,
  order_date?: string | null,
  delivery_information_email_sent_flag?: string | null,
  pricing_details?: pricing_details | null,
  delivery_time_window?: string | null,
  snapshot_data?: order_snapshot_type | null,
  order_id?: string | null,
  cancelled_reason?: string | null,
};

export type shipping_address_type = {
  __typename: "shipping_address_type",
  shipping_primary_phone?: string | null,
  shipping_secondary_phone?: string | null,
  shipping_state?: string | null,
  shipping_city?: string | null,
  cluster_id?: string | null,
  shipping_name?: string | null,
  default_flag?: string | null,
  shipping_postcode?: string | null,
  lat?: number | null,
  lng?: number | null,
  delivery_instructions?: string | null,
  shipping_address_line_1?: string | null,
  address_id?: string | null,
  shipping_email?: string | null,
  shipping_country?: string | null,
};

export type order_snapshot_type = {
  __typename: "order_snapshot_type",
  homepage_media?: snapshot_media_type | null,
  product_id?: string | null,
  product_name?: string | null,
  product_title?: string | null,
  card_brand?: string | null,
  last_4?: string | null,
  exp_month?: string | null,
  exp_year?: string | null,
  payment_method_type?: string | null,
  payment_method_id?: string | null,
  backup_flag?: string | null,
};

export type listAllOrdersInput = {
  user_id: string,
};

export type orderConnection = {
  __typename: "orderConnection",
  orders?:  Array<order | null > | null,
  nextToken?: string | null,
};

export type listAllOrderByStatusAdminInput = {
  order_status: string,
};

export type listOrderByStatusInput = {
  user_id: string,
  order_status: string,
};

export type getRelatedUserOrderInput = {
  user_id: string,
};

export type getRelatedOrdersFromSubscriptionInput = {
  parent_subscription_id: string,
  user_id: string,
};

export type getAvailableDeliveryDateInCartInput = {
  user_id: string,
  cart_id?: string | null,
  cluster_id: string,
  shipping_postcode: string,
  buynow_flag?: string | null,
};

export type getAvailableDeliveryDate = {
  __typename: "getAvailableDeliveryDate",
  available_delivery_date?: Array< string | null > | null,
  remove_product_for_more_delivery_date?: remove_product_for_more_delivery_date | null,
  out_of_stock_product?:  Array<out_of_stock_product | null > | null,
};

export type remove_product_for_more_delivery_date = {
  __typename: "remove_product_for_more_delivery_date",
  PK?: string | null,
  SK?: string | null,
  inventory_policy?: string | null,
};

export type out_of_stock_product = {
  __typename: "out_of_stock_product",
  PK?: string | null,
  SK?: string | null,
  date?: string | null,
  current_stock?: number | null,
  stock_unit?: string | null,
  product_type?: string | null,
};

export type getAvailableDeliveryDateInOrderInput = {
  order_id: string,
  cluster_id: string,
  shipping_postcode: string,
};

export type listAllSubscriptionsInput = {
  user_id: string,
};

export type subscriptionConnection = {
  __typename: "subscriptionConnection",
  subscriptions?:  Array<subscription | null > | null,
  nextToken?: string | null,
};

export type subscription = {
  __typename: "subscription",
  user_id?: string | null,
  created_at?: string | null,
  subscription_id?: string | null,
  internal_subscription_id?: string | null,
  product_count?: number | null,
  next_delivery_date?: string | null,
  subscription_frequency?: string | null,
  subscription_status?: string | null,
  next_payment_date?: string | null,
  type?: string | null,
  pricing_details?: pricing_details | null,
  shipping_address?: shipping_address_type | null,
  snapshot_data?: subscription_snapshot_type | null,
};

export type subscription_snapshot_type = {
  __typename: "subscription_snapshot_type",
  homepage_media?: snapshot_media_type | null,
  product_id?: string | null,
  product_name?: string | null,
  product_title?: string | null,
  card_brand?: string | null,
  last_4?: string | null,
  exp_month?: string | null,
  exp_year?: string | null,
  payment_method_type?: string | null,
  payment_method_id?: string | null,
  backup_flag?: string | null,
};

export type listAllSubscriptionByStatusAdminInput = {
  subscription_status?: subscription_status_enum | null,
};

export type listSubscriptionByStatusInput = {
  user_id: string,
  subscription_status: string,
};

export type listSubscriptionItemsInput = {
  subscription_id: string,
};

export type subscriptionItemsConnection = {
  __typename: "subscriptionItemsConnection",
  nextToken?: string | null,
  subscriptionItems?:  Array<subscriptionItem | null > | null,
};

export type subscriptionItem = {
  __typename: "subscriptionItem",
  corner_image_url?: string | null,
  on_sale_flag?: string | null,
  email_media?: snapshot_media_type | null,
  on_sale_from?: string | null,
  invoice_media?: snapshot_media_type | null,
  item_count?: number | null,
  percentage_off?: number | null,
  product_id?: string | null,
  vendor?: string | null,
  weight?: string | null,
  origin_country?: string | null,
  price_unit?: string | null,
  ship_from?: string | null,
  subscription_frequency_details?: subscription_frequency_details_type | null,
  on_sale_to?: string | null,
  on_sale_maximum_quantity?: number | null,
  subscription_flag?: string | null,
  price_per_unit?: number | null,
  product_title?: string | null,
  availability_range?: number | null,
  amount_saved?: number | null,
  product_name?: string | null,
  stock_flag?: string | null,
  available_on_subscription_flag?: string | null,
  sale_price?: number | null,
  inventory_policy?: string | null,
  base_price?: number | null,
  categories?: Array< string | null > | null,
  product_type?: string | null,
  homepage_media?: snapshot_media_type | null,
  sub_categories?: Array< string | null > | null,
};

export type getAndDeleteSubscriptionInput = {
  subscription_id: string,
  user_id: string,
};

export type listAllTransactionsInput = {
  user_id: string,
};

export type listTransactionByStatusInput = {
  user_id: string,
  transaction_status: string,
};

export type getProductInput = {
  product_id: string,
};

export type productConnection = {
  __typename: "productConnection",
  products?:  Array<product | null > | null,
  nextToken?: string | null,
};

export type productFeaturedConnection = {
  __typename: "productFeaturedConnection",
  products?:  Array<product | null > | null,
  nextToken?: string | null,
};

export type listAllBuyAgainProductsInput = {
  user_id: string,
};

export type listAllCategoryProductsInput = {
  categories: Array< string | null >,
};

export enum sortByEnum {
  sale_price = "sale_price",
  product_name = "product_name",
  priority = "priority",
}


export type listAllSubCategoryProductsInput = {
  sub_categories: Array< string | null >,
};

export type categoryConnection = {
  __typename: "categoryConnection",
  categories?:  Array<category | null > | null,
  nextToken?: string | null,
};

export type testimonialConnection = {
  __typename: "testimonialConnection",
  testimonials?:  Array<testimonial | null > | null,
  nextToken?: string | null,
};

export type getAllNewsLetterInput = {
  PK: string,
};

export type newsLetterConnection = {
  __typename: "newsLetterConnection",
  newsLetters?:  Array<newsLetter | null > | null,
  nextToken?: string | null,
};

export type listAllQnasInput = {
  product_id: string,
};

export type qnaConnection = {
  __typename: "qnaConnection",
  qnas?:  Array<qna | null > | null,
  nextToken?: string | null,
};

export type listAllReviewsInput = {
  product_id: string,
};

export type reviewConnection = {
  __typename: "reviewConnection",
  reviews?:  Array<review | null > | null,
  nextToken?: string | null,
};

export type getAllCommentInput = {
  PK: string,
};

export type commentConnection = {
  __typename: "commentConnection",
  comments?:  Array<comment | null > | null,
  nextToken?: string | null,
};

export type getAllClusterInput = {
  PK: string,
};

export type clusterConnection = {
  __typename: "clusterConnection",
  clusters?:  Array<cluster | null > | null,
  nextToken?: string | null,
};

export type inventoryConnection = {
  __typename: "inventoryConnection",
  inventories?:  Array<inventory | null > | null,
};

export type FillContactFormMutationVariables = {
  input: contactFormInput,
};

export type FillContactFormMutation = {
  fillContactForm?:  {
    __typename: "contactForm",
    first_name?: string | null,
    last_name?: string | null,
    email?: string | null,
    phone_number?: string | null,
    message?: string | null,
    subject?: string | null,
    user_id?: string | null,
    unauth_id?: string | null,
    form_id?: string | null,
  } | null,
};

export type CreateBugMutationVariables = {
  input?: bugInput | null,
};

export type CreateBugMutation = {
  createBug?:  {
    __typename: "bug",
    user_id: string,
    page_url: string,
    screenshot_url: string,
    summary: string,
    description?: string | null,
    developer?: developers_enum | null,
  } | null,
};

export type CreateUserProfileMutationVariables = {
  input: createAndUpdateProfileInput,
};

export type CreateUserProfileMutation = {
  createUserProfile?:  {
    __typename: "userProfile",
    avatar_url?: string | null,
    email?: string | null,
    email_verified?: string | null,
    email_verified_flag?: string | null,
    full_name?: string | null,
    last_login_at?: string | null,
    primary_phone?: string | null,
    provider?: string | null,
    register_at?: string | null,
    secondary_phone?: string | null,
    user_id?: string | null,
    user_type?: string | null,
  } | null,
};

export type UpdateUserProfileMutationVariables = {
  input: createAndUpdateProfileInput,
};

export type UpdateUserProfileMutation = {
  updateUserProfile?:  {
    __typename: "userProfile",
    avatar_url?: string | null,
    email?: string | null,
    email_verified?: string | null,
    email_verified_flag?: string | null,
    full_name?: string | null,
    last_login_at?: string | null,
    primary_phone?: string | null,
    provider?: string | null,
    register_at?: string | null,
    secondary_phone?: string | null,
    user_id?: string | null,
    user_type?: string | null,
  } | null,
};

export type DeleteUserProfileMutationVariables = {
  input: getAndDeleteProfileInput,
};

export type DeleteUserProfileMutation = {
  deleteUserProfile?:  {
    __typename: "userProfile",
    avatar_url?: string | null,
    email?: string | null,
    email_verified?: string | null,
    email_verified_flag?: string | null,
    full_name?: string | null,
    last_login_at?: string | null,
    primary_phone?: string | null,
    provider?: string | null,
    register_at?: string | null,
    secondary_phone?: string | null,
    user_id?: string | null,
    user_type?: string | null,
  } | null,
};

export type AddAddressMutationVariables = {
  input: addAndUpdateUserProfileAddressInput,
};

export type AddAddressMutation = {
  addAddress?:  {
    __typename: "address",
    address_id?: string | null,
    cluster_id?: string | null,
    type?: string | null,
    billing_name?: string | null,
    shipping_name?: string | null,
    address_hash?: string | null,
    lat?: number | null,
    lng?: number | null,
    default_flag?: string | null,
    billing_same_as_shipping_flag?: string | null,
    delivery_instructions?: string | null,
    shipping_email?: string | null,
    shipping_primary_phone?: string | null,
    shipping_secondary_phone?: string | null,
    shipping_address_line_1?: string | null,
    shipping_city?: string | null,
    shipping_postcode?: string | null,
    shipping_state?: string | null,
    shipping_country?: string | null,
    billing_email?: string | null,
    billing_primary_phone?: string | null,
    billing_secondary_phone?: string | null,
    billing_address_line_1?: string | null,
    billing_address_line_2?: string | null,
    billing_city?: string | null,
    billing_postcode?: string | null,
    billing_state?: string | null,
    billing_country?: string | null,
  } | null,
};

export type MakeDefaultAddressMutationVariables = {
  input: makeDefaultAddressInput,
};

export type MakeDefaultAddressMutation = {
  makeDefaultAddress?:  {
    __typename: "makeDefaultAddress",
    user_id?: string | null,
    address_id?: string | null,
    message?: string | null,
    status_code?: number | null,
    status?: string | null,
  } | null,
};

export type AddBillingAddressMutationVariables = {
  input: addBillingAddressInput,
};

export type AddBillingAddressMutation = {
  addBillingAddress?:  {
    __typename: "billingAddress",
    billing_primary_phone?: string | null,
    billing_address_id?: string | null,
    billing_city?: string | null,
    billing_address_line_1?: string | null,
    billing_address_line_2?: string | null,
    billing_secondary_phone?: string | null,
    billing_state?: string | null,
    billing_email?: string | null,
    billing_postcode?: string | null,
    billing_name?: string | null,
    billing_country?: string | null,
  } | null,
};

export type AddLastCheckAvailabilityAddressMutationVariables = {
  input: addLastCheckAvailabilityAddressInput,
};

export type AddLastCheckAvailabilityAddressMutation = {
  addLastCheckAvailabilityAddress?:  {
    __typename: "addLastCheckAvailabilityAddress",
    cluster_id?: string | null,
    shipping_name?: string | null,
    lat?: number | null,
    lng?: number | null,
    shipping_email?: string | null,
    shipping_primary_phone?: string | null,
    shipping_secondary_phone?: string | null,
    shipping_address_line_1?: string | null,
    shipping_city?: string | null,
    shipping_postcode?: string | null,
    shipping_state?: string | null,
    shipping_country?: string | null,
    message?: string | null,
    status?: string | null,
    status_code?: number | null,
  } | null,
};

export type UpdateAddressMutationVariables = {
  input: addAndUpdateUserProfileAddressInput,
};

export type UpdateAddressMutation = {
  updateAddress?:  {
    __typename: "address",
    address_id?: string | null,
    cluster_id?: string | null,
    type?: string | null,
    billing_name?: string | null,
    shipping_name?: string | null,
    address_hash?: string | null,
    lat?: number | null,
    lng?: number | null,
    default_flag?: string | null,
    billing_same_as_shipping_flag?: string | null,
    delivery_instructions?: string | null,
    shipping_email?: string | null,
    shipping_primary_phone?: string | null,
    shipping_secondary_phone?: string | null,
    shipping_address_line_1?: string | null,
    shipping_city?: string | null,
    shipping_postcode?: string | null,
    shipping_state?: string | null,
    shipping_country?: string | null,
    billing_email?: string | null,
    billing_primary_phone?: string | null,
    billing_secondary_phone?: string | null,
    billing_address_line_1?: string | null,
    billing_address_line_2?: string | null,
    billing_city?: string | null,
    billing_postcode?: string | null,
    billing_state?: string | null,
    billing_country?: string | null,
  } | null,
};

export type DeleteAddressMutationVariables = {
  input: getAndDeleteUserAddressInput,
};

export type DeleteAddressMutation = {
  deleteAddress?:  {
    __typename: "address",
    address_id?: string | null,
    cluster_id?: string | null,
    type?: string | null,
    billing_name?: string | null,
    shipping_name?: string | null,
    address_hash?: string | null,
    lat?: number | null,
    lng?: number | null,
    default_flag?: string | null,
    billing_same_as_shipping_flag?: string | null,
    delivery_instructions?: string | null,
    shipping_email?: string | null,
    shipping_primary_phone?: string | null,
    shipping_secondary_phone?: string | null,
    shipping_address_line_1?: string | null,
    shipping_city?: string | null,
    shipping_postcode?: string | null,
    shipping_state?: string | null,
    shipping_country?: string | null,
    billing_email?: string | null,
    billing_primary_phone?: string | null,
    billing_secondary_phone?: string | null,
    billing_address_line_1?: string | null,
    billing_address_line_2?: string | null,
    billing_city?: string | null,
    billing_postcode?: string | null,
    billing_state?: string | null,
    billing_country?: string | null,
  } | null,
};

export type AddCardMutationVariables = {
  input: addCardInput,
};

export type AddCardMutation = {
  addCard?:  {
    __typename: "addCard",
    user_id: string,
    email: string,
    phone_number?: string | null,
    source_id: string,
    cardholder_name: string,
    backup_flag?: string | null,
    default_flag?: string | null,
    billing_address_line_1?: string | null,
    billing_city?: string | null,
    billing_country?: string | null,
    billing_postcode?: string | null,
    billing_state?: string | null,
    billing_email?: string | null,
    billing_primary_phone?: string | null,
    message?: string | null,
    status?: string | null,
    status_code?: number | null,
  } | null,
};

export type MakeDefaultCardMutationVariables = {
  input: makeDefaultCardInput,
};

export type MakeDefaultCardMutation = {
  makeDefaultCard?:  {
    __typename: "makeDefaultCard",
    user_id?: string | null,
    payment_method_id?: string | null,
    message?: string | null,
    status_code?: number | null,
    status?: string | null,
  } | null,
};

export type DeleteCardMutationVariables = {
  input: deleteCardInput,
};

export type DeleteCardMutation = {
  deleteCard?:  {
    __typename: "deleteCard",
    user_id?: string | null,
    cardholder_name?: string | null,
    backup_flag?: string | null,
    default_flag?: string | null,
    billing_address_line_1?: string | null,
    billing_city?: string | null,
    billing_country?: string | null,
    billing_postcode?: string | null,
    billing_state?: string | null,
    billing_email?: string | null,
    billing_primary_phone?: string | null,
  } | null,
};

export type UpdateCardMutationVariables = {
  input: updateCardInput,
};

export type UpdateCardMutation = {
  updateCard?:  {
    __typename: "deleteCard",
    user_id?: string | null,
    cardholder_name?: string | null,
    backup_flag?: string | null,
    default_flag?: string | null,
    billing_address_line_1?: string | null,
    billing_city?: string | null,
    billing_country?: string | null,
    billing_postcode?: string | null,
    billing_state?: string | null,
    billing_email?: string | null,
    billing_primary_phone?: string | null,
  } | null,
};

export type UpdateSubscriptionBillingAddressMutationVariables = {
  input: updateSubscriptionBillingAddressInput,
};

export type UpdateSubscriptionBillingAddressMutation = {
  updateSubscriptionBillingAddress?:  {
    __typename: "updateSubscriptionBillingAddress",
    user_id?: string | null,
    subscription_id?: string | null,
    billing_address_line_1?: string | null,
    billing_address_line_2?: string | null,
    billing_city?: string | null,
    billing_country?: string | null,
    billing_postcode?: string | null,
    billing_state?: string | null,
    billing_email?: string | null,
    billing_primary_phone?: string | null,
    billing_secondary_phone?: string | null,
    billing_name: string,
  } | null,
};

export type UpdateSubscriptionShippingAddressMutationVariables = {
  input: updateSubscriptionShippingAddressInput,
};

export type UpdateSubscriptionShippingAddressMutation = {
  updateSubscriptionShippingAddress?:  {
    __typename: "updateSubscriptionShippingAddress",
    user_id?: string | null,
    subscription_id?: string | null,
    delivery_date?: string | null,
    shipping_name?: string | null,
    delivery_instructions?: string | null,
    lat?: number | null,
    lng?: number | null,
    shipping_email?: string | null,
    shipping_primary_phone?: string | null,
    shipping_secondary_phone?: string | null,
    shipping_address_line_1?: string | null,
    shipping_city?: string | null,
    shipping_postcode?: string | null,
    shipping_state?: string | null,
    shipping_country?: string | null,
    message?: string | null,
    status_code?: number | null,
    status?: string | null,
  } | null,
};

export type UpdatePaymentLogoUrlsMutationVariables = {
  input?: paymentLogoUrlInput | null,
};

export type UpdatePaymentLogoUrlsMutation = {
  updatePaymentLogoUrls?:  {
    __typename: "paymentLogoUrls",
    PK?: string | null,
    SK?: string | null,
    visa?: string | null,
    mastercard?: string | null,
    american_express?: string | null,
    paypal?: string | null,
  } | null,
};

export type UpdateItemCountInCartMutationVariables = {
  input: updateItemCountInCartInput,
};

export type UpdateItemCountInCartMutation = {
  updateItemCountInCart?:  {
    __typename: "getCart",
    status?: string | null,
    status_code?: number | null,
    subscription_frequency_list?: Array< string | null > | null,
    contain_subscription_flag?: string | null,
    contain_out_of_stock_product?: string | null,
    product_count?: number | null,
    cart_items?:  Array< {
      __typename: "cart_items_type",
      product_id: string,
      subscription_flag?: string | null,
      item_count?: number | null,
      subscription_frequency?: string | null,
      subscription_frequency_title?: string | null,
      product_name?: string | null,
      product_title?: string | null,
      inventory_policy?: string | null,
      availability_range?: number | null,
      available_on_subscription_flag?: string | null,
      subscription_frequency_details?:  Array< {
        __typename: "subscription_frequency_details_type",
        position?: number | null,
        frequency_title?: string | null,
        frequency_name?: string | null,
      } | null > | null,
      stock_flag?: string | null,
      weight?: string | null,
      homepage_media?:  {
        __typename: "snapshot_media_type",
        media_type?: string | null,
        media_url?: string | null,
        media_width?: string | null,
        media_height?: string | null,
      } | null,
      on_sale_flag?: string | null,
      on_sale_to?: string | null,
      on_sale_from?: string | null,
      on_sale_maximum_quantity?: string | null,
      amount_saved?: number | null,
      percentage_off?: number | null,
      sale_price?: number | null,
      base_price?: number | null,
      price_unit?: string | null,
      price_per_unit?: number | null,
    } | null > | null,
    pricing_details?:  {
      __typename: "pricing_details",
      onetime_amount?: number | null,
      total_amount?: number | null,
      discount?: number | null,
      payable_amount?: number | null,
      onetime_delivery_charge?: number | null,
      recurring_delivery_charges?:  Array< {
        __typename: "recurring_delivery_charges",
        subscription_frequency?: string | null,
        recurring_amount?: number | null,
        delivery_charge?: number | null,
        recurring_total_amount?: number | null,
      } | null > | null,
    } | null,
    coupon_applied_flag?: string | null,
    coupon_code?: string | null,
    coupon_valid_flag?: string | null,
  } | null,
};

export type AddToCartMutationVariables = {
  input: addToCartInput,
};

export type AddToCartMutation = {
  addToCart?:  {
    __typename: "addToCart",
    user_id?: string | null,
    unauth_id?: string | null,
    cart_id?: string | null,
    subscription_flag?: string | null,
    subscription_frequency?: string | null,
    item_count?: number | null,
    product_id?: string | null,
    status_code?: number | null,
    status?: string | null,
    message?: string | null,
    buynow_flag?: string | null,
  } | null,
};

export type MigrateCartMutationVariables = {
  input: migrateCartInput,
};

export type MigrateCartMutation = {
  migrateCart?:  {
    __typename: "getCart",
    status?: string | null,
    status_code?: number | null,
    subscription_frequency_list?: Array< string | null > | null,
    contain_subscription_flag?: string | null,
    contain_out_of_stock_product?: string | null,
    product_count?: number | null,
    cart_items?:  Array< {
      __typename: "cart_items_type",
      product_id: string,
      subscription_flag?: string | null,
      item_count?: number | null,
      subscription_frequency?: string | null,
      subscription_frequency_title?: string | null,
      product_name?: string | null,
      product_title?: string | null,
      inventory_policy?: string | null,
      availability_range?: number | null,
      available_on_subscription_flag?: string | null,
      subscription_frequency_details?:  Array< {
        __typename: "subscription_frequency_details_type",
        position?: number | null,
        frequency_title?: string | null,
        frequency_name?: string | null,
      } | null > | null,
      stock_flag?: string | null,
      weight?: string | null,
      homepage_media?:  {
        __typename: "snapshot_media_type",
        media_type?: string | null,
        media_url?: string | null,
        media_width?: string | null,
        media_height?: string | null,
      } | null,
      on_sale_flag?: string | null,
      on_sale_to?: string | null,
      on_sale_from?: string | null,
      on_sale_maximum_quantity?: string | null,
      amount_saved?: number | null,
      percentage_off?: number | null,
      sale_price?: number | null,
      base_price?: number | null,
      price_unit?: string | null,
      price_per_unit?: number | null,
    } | null > | null,
    pricing_details?:  {
      __typename: "pricing_details",
      onetime_amount?: number | null,
      total_amount?: number | null,
      discount?: number | null,
      payable_amount?: number | null,
      onetime_delivery_charge?: number | null,
      recurring_delivery_charges?:  Array< {
        __typename: "recurring_delivery_charges",
        subscription_frequency?: string | null,
        recurring_amount?: number | null,
        delivery_charge?: number | null,
        recurring_total_amount?: number | null,
      } | null > | null,
    } | null,
    coupon_applied_flag?: string | null,
    coupon_code?: string | null,
    coupon_valid_flag?: string | null,
  } | null,
};

export type DeleteProductFromCartMutationVariables = {
  input: deleteProductFromCartInput,
};

export type DeleteProductFromCartMutation = {
  deleteProductFromCart?:  {
    __typename: "getCart",
    status?: string | null,
    status_code?: number | null,
    subscription_frequency_list?: Array< string | null > | null,
    contain_subscription_flag?: string | null,
    contain_out_of_stock_product?: string | null,
    product_count?: number | null,
    cart_items?:  Array< {
      __typename: "cart_items_type",
      product_id: string,
      subscription_flag?: string | null,
      item_count?: number | null,
      subscription_frequency?: string | null,
      subscription_frequency_title?: string | null,
      product_name?: string | null,
      product_title?: string | null,
      inventory_policy?: string | null,
      availability_range?: number | null,
      available_on_subscription_flag?: string | null,
      subscription_frequency_details?:  Array< {
        __typename: "subscription_frequency_details_type",
        position?: number | null,
        frequency_title?: string | null,
        frequency_name?: string | null,
      } | null > | null,
      stock_flag?: string | null,
      weight?: string | null,
      homepage_media?:  {
        __typename: "snapshot_media_type",
        media_type?: string | null,
        media_url?: string | null,
        media_width?: string | null,
        media_height?: string | null,
      } | null,
      on_sale_flag?: string | null,
      on_sale_to?: string | null,
      on_sale_from?: string | null,
      on_sale_maximum_quantity?: string | null,
      amount_saved?: number | null,
      percentage_off?: number | null,
      sale_price?: number | null,
      base_price?: number | null,
      price_unit?: string | null,
      price_per_unit?: number | null,
    } | null > | null,
    pricing_details?:  {
      __typename: "pricing_details",
      onetime_amount?: number | null,
      total_amount?: number | null,
      discount?: number | null,
      payable_amount?: number | null,
      onetime_delivery_charge?: number | null,
      recurring_delivery_charges?:  Array< {
        __typename: "recurring_delivery_charges",
        subscription_frequency?: string | null,
        recurring_amount?: number | null,
        delivery_charge?: number | null,
        recurring_total_amount?: number | null,
      } | null > | null,
    } | null,
    coupon_applied_flag?: string | null,
    coupon_code?: string | null,
    coupon_valid_flag?: string | null,
  } | null,
};

export type UpdateOrderAddressMutationVariables = {
  input: updateOrderAddressInput,
};

export type UpdateOrderAddressMutation = {
  updateOrderAddress?:  {
    __typename: "updateOrderAddress",
    user_id?: string | null,
    order_id?: string | null,
    address_id?: string | null,
    default_flag?: string | null,
    message?: string | null,
    status_code?: number | null,
    status?: string | null,
  } | null,
};

export type UpdateOrderPaymentMethodMutationVariables = {
  input: updateOrderPaymentMethodInput,
};

export type UpdateOrderPaymentMethodMutation = {
  updateOrderPaymentMethod?:  {
    __typename: "updateOrderPaymentMethod",
    user_id?: string | null,
    order_id?: string | null,
    payment_method_id?: string | null,
    default_flag?: string | null,
    message?: string | null,
    status_code?: number | null,
    status?: string | null,
  } | null,
};

export type GenerateInvoiceUrlMutationVariables = {
  input: generateInvoiceUrlInput,
};

export type GenerateInvoiceUrlMutation = {
  generateInvoiceUrl?:  {
    __typename: "generateInvoiceUrl",
    user_id?: string | null,
    order_id?: string | null,
    invoice_url?: string | null,
    message?: string | null,
    status_code?: number | null,
    status?: string | null,
  } | null,
};

export type CheckOutCartMutationVariables = {
  input: checkOutCartInput,
};

export type CheckOutCartMutation = {
  checkOutCart?:  {
    __typename: "checkOutCart",
    user_id: string,
    cart_id?: string | null,
    delivery_date?: string | null,
    cluster_id?: string | null,
    order_id?: string | null,
    pricing_details?:  {
      __typename: "pricing_details",
      onetime_amount?: number | null,
      total_amount?: number | null,
      discount?: number | null,
      payable_amount?: number | null,
      onetime_delivery_charge?: number | null,
      recurring_delivery_charges?:  Array< {
        __typename: "recurring_delivery_charges",
        subscription_frequency?: string | null,
        recurring_amount?: number | null,
        delivery_charge?: number | null,
        recurring_total_amount?: number | null,
      } | null > | null,
    } | null,
    status_code?: number | null,
    status?: string | null,
  } | null,
};

export type CancelOrderMutationVariables = {
  input: cancelOrderInput,
};

export type CancelOrderMutation = {
  cancelOrder?:  {
    __typename: "cancelOrder",
    user_id?: string | null,
    order_id?: string | null,
    cancelled_reason?: string | null,
    status_code?: number | null,
    status?: string | null,
    message?: string | null,
  } | null,
};

export type UpdateOrderBillingAddressMutationVariables = {
  input: updateOrderBillingAddressInput,
};

export type UpdateOrderBillingAddressMutation = {
  updateOrderBillingAddress?:  {
    __typename: "updateOrderBillingAddress",
    user_id?: string | null,
    subscription_id?: string | null,
    billing_address_line_1?: string | null,
    billing_address_line_2?: string | null,
    billing_city?: string | null,
    billing_country?: string | null,
    billing_postcode?: string | null,
    billing_state?: string | null,
    billing_email?: string | null,
    billing_primary_phone?: string | null,
    billing_secondary_phone?: string | null,
    cardholder_name: string,
  } | null,
};

export type UpdateOrderDeliveryDateMutationVariables = {
  input: updateOrderDeliveryDateInput,
};

export type UpdateOrderDeliveryDateMutation = {
  updateOrderDeliveryDate?:  {
    __typename: "updateOrderDeliveryDate",
    user_id?: string | null,
    order_id?: string | null,
    delivery_date?: string | null,
    message?: string | null,
    status?: string | null,
    status_code?: number | null,
  } | null,
};

export type UpdateOrderDeliveryInstructionsMutationVariables = {
  input: updateOrderDeliveryInstructionsInput,
};

export type UpdateOrderDeliveryInstructionsMutation = {
  updateOrderDeliveryInstructions?:  {
    __typename: "updateOrderDeliveryInstructions",
    user_id?: string | null,
    order_id?: string | null,
    delivery_instructions?: string | null,
    status_code?: number | null,
    status?: string | null,
    message?: string | null,
  } | null,
};

export type UpdateSubscriptionPaymentMethodMutationVariables = {
  input: updateSubscriptionPaymentMethodInput,
};

export type UpdateSubscriptionPaymentMethodMutation = {
  updateSubscriptionPaymentMethod?:  {
    __typename: "updateSubscriptionPaymentMethod",
    user_id?: string | null,
    subscription_id?: string | null,
    payment_method_id?: string | null,
    default_flag?: string | null,
    status?: string | null,
    status_code?: number | null,
    message?: string | null,
  } | null,
};

export type UpdateSubscriptionDeliveryInstructionsMutationVariables = {
  input: updateSubscriptionDeliveryInstructionsInput,
};

export type UpdateSubscriptionDeliveryInstructionsMutation = {
  updateSubscriptionDeliveryInstructions?:  {
    __typename: "updateSubscriptionDeliveryInstructions",
    user_id?: string | null,
    subscription_id?: string | null,
    delivery_instructions?: string | null,
    status?: string | null,
    status_code?: number | null,
    message?: string | null,
  } | null,
};

export type UpdateSubscriptionAddressMutationVariables = {
  input: updateSubscriptionAddressInput,
};

export type UpdateSubscriptionAddressMutation = {
  updateSubscriptionAddress?:  {
    __typename: "updateSubscriptionAddress",
    user_id?: string | null,
    subscription_id?: string | null,
    address_id?: string | null,
    default_flag?: string | null,
    status?: string | null,
    status_code?: number | null,
    message?: string | null,
  } | null,
};

export type ChangeSubscriptionShippingAddressMutationVariables = {
  input: changeSubscriptionShippingAddressInput,
};

export type ChangeSubscriptionShippingAddressMutation = {
  changeSubscriptionShippingAddress?:  {
    __typename: "changeSubscriptionShippingAddress",
    user_id?: string | null,
    subscription_id?: string | null,
    address_id?: string | null,
    default_flag?: string | null,
    delivery_date?: string | null,
    status?: string | null,
    status_code?: number | null,
    message?: string | null,
  } | null,
};

export type HoldOrCancelUserSubscriptionMutationVariables = {
  input: holdOrCancelUserSubscriptionInput,
};

export type HoldOrCancelUserSubscriptionMutation = {
  holdOrCancelUserSubscription?:  {
    __typename: "holdOrCancelUserSubscription",
    user_id: string,
    subscription_id: string,
    cancelled_reason?: string | null,
  } | null,
};

export type AddProductInSubscriptionMutationVariables = {
  input: addProductInSubscriptionInput,
};

export type AddProductInSubscriptionMutation = {
  addProductInSubscription?:  {
    __typename: "addProductInSubscription",
    user_id?: string | null,
    subscription_id?: string | null,
    product_id?: string | null,
    item_count?: number | null,
    cluster_id?: string | null,
    shipping_postcode?: string | null,
    message?: string | null,
    status_code?: number | null,
    status?: string | null,
  } | null,
};

export type UpdateItemCountInSubscriptionMutationVariables = {
  input: updateItemCountInSubscriptionInput,
};

export type UpdateItemCountInSubscriptionMutation = {
  updateItemCountInSubscription?:  {
    __typename: "updateItemCountInSubscription",
    user_id?: string | null,
    subscription_id?: string | null,
    product_id?: string | null,
    item_count?: number | null,
    cluster_id?: string | null,
    shipping_postcode?: string | null,
    message?: string | null,
    status_code?: number | null,
    status?: string | null,
  } | null,
};

export type DeleteProductFromSubscriptionMutationVariables = {
  input: deleteProductFromSubscriptionInput,
};

export type DeleteProductFromSubscriptionMutation = {
  deleteProductFromSubscription?:  {
    __typename: "deleteProductFromSubscription",
    user_id?: string | null,
    subscription_id?: string | null,
    product_id?: string | null,
    shipping_postcode?: string | null,
    cluster_id?: string | null,
    message?: string | null,
    status_code?: number | null,
    status?: string | null,
  } | null,
};

export type ActiveUserSubscriptionMutationVariables = {
  input: activeUserSubscriptionInput,
};

export type ActiveUserSubscriptionMutation = {
  activeUserSubscription?:  {
    __typename: "activeUserSubscription",
    user_id?: string | null,
    subscription_id?: string | null,
    delivery_date?: string | null,
    shipping_postcode?: string | null,
    cluster_id?: string | null,
    message?: string | null,
    status?: string | null,
    status_code?: number | null,
  } | null,
};

export type UpdateSubscriptionDeliveryDateMutationVariables = {
  input: updateSubscriptionDeliveryDateInput,
};

export type UpdateSubscriptionDeliveryDateMutation = {
  updateSubscriptionDeliveryDate?:  {
    __typename: "updateSubscriptionDeliveryDate",
    user_id?: string | null,
    subscription_id?: string | null,
    delivery_date?: string | null,
    message?: string | null,
    status?: string | null,
    status_code?: number | null,
  } | null,
};

export type UpdateSubscriptionFrequencyMutationVariables = {
  input: updateSubscriptionFrequencyInput,
};

export type UpdateSubscriptionFrequencyMutation = {
  updateSubscriptionFrequency?:  {
    __typename: "updateSubscriptionFrequency",
    user_id?: string | null,
    subscription_id?: string | null,
    delivery_date?: string | null,
    message?: string | null,
    status?: string | null,
    status_code?: number | null,
    subscription_frequency?: string | null,
  } | null,
};

export type DeleteUserTransactionMutationVariables = {
  input: getAndDeleteTransactionInput,
};

export type DeleteUserTransactionMutation = {
  deleteUserTransaction?:  {
    __typename: "transaction",
    transaction_id?: string | null,
    transaction_status?: string | null,
    payment_amount?: number | null,
    failed_reason?: string | null,
    order_id?: string | null,
    payment_id?: string | null,
    created_at?: string | null,
    payment_method_details?:  {
      __typename: "payment_method_details",
      payment_method_type?: string | null,
      exp_month?: number | null,
      exp_year?: number | null,
      last_4?: string | null,
      billing_state?: string | null,
      billing_email?: string | null,
      card_brand?: string | null,
      billing_address_line_1?: string | null,
      default_flag?: string | null,
      billing_primary_phone?: string | null,
      billing_country?: string | null,
      cardholder_name?: string | null,
      billing_city?: string | null,
      payment_method_id?: string | null,
      billing_postcode?: string | null,
      backup_flag?: string | null,
      status?: string | null,
    } | null,
  } | null,
};

export type CreateProductMutationVariables = {
  input: createAndUpdateProductInput,
};

export type CreateProductMutation = {
  createProduct?:  {
    __typename: "product",
    main_product_flag?: string | null,
    product_id: string,
    product_type?: string | null,
    categories?: Array< string | null > | null,
    sub_categories?: Array< string | null > | null,
    variations?: Array< string | null > | null,
    best_selling_flag?: string | null,
    featured_flag?: string | null,
    product_name?: string | null,
    published_scope?: string | null,
    average_rating_stars?: number | null,
    product_title?: string | null,
    short_description?: string | null,
    long_description?: string | null,
    vendor?: string | null,
    ship_from?: string | null,
    available_on_subscription_flag?: string | null,
    subscription_frequency_details?:  Array< {
      __typename: "subscription_frequency_details_type",
      position?: number | null,
      frequency_title?: string | null,
      frequency_name?: string | null,
    } | null > | null,
    rating_details?:  {
      __typename: "rating_details_type",
      total_rating_count?: number | null,
      five_start_rating_count?: number | null,
      three_star_rating_count?: number | null,
      one_star_rating_count?: number | null,
      two_star_rating_count?: number | null,
      four_start_rating_count?: number | null,
    } | null,
    media_details?:  Array< {
      __typename: "media_details_type",
      position?: number | null,
      media_type?: string | null,
      media_url?: string | null,
      media_height?: string | null,
      media_width?: string | null,
    } | null > | null,
    stock_flag?: string | null,
    weight?: string | null,
    homepage_media?:  {
      __typename: "snapshot_media_type",
      media_type?: string | null,
      media_url?: string | null,
      media_width?: string | null,
      media_height?: string | null,
    } | null,
    on_sale_flag?: string | null,
    on_sale_to?: string | null,
    on_sale_from?: string | null,
    on_sale_maximum_quantity?: string | null,
    amount_saved?: number | null,
    percentage_off?: number | null,
    sale_price?: number | null,
    base_price?: number | null,
    price_unit?: string | null,
    price_per_unit?: number | null,
    origin_country?: string | null,
    corner_image_url?: string | null,
    // only for product creation
    status?: string | null,
  } | null,
};

export type UpdateProductMutationVariables = {
  input: createAndUpdateProductInput,
};

export type UpdateProductMutation = {
  updateProduct?:  {
    __typename: "product",
    main_product_flag?: string | null,
    product_id: string,
    product_type?: string | null,
    categories?: Array< string | null > | null,
    sub_categories?: Array< string | null > | null,
    variations?: Array< string | null > | null,
    best_selling_flag?: string | null,
    featured_flag?: string | null,
    product_name?: string | null,
    published_scope?: string | null,
    average_rating_stars?: number | null,
    product_title?: string | null,
    short_description?: string | null,
    long_description?: string | null,
    vendor?: string | null,
    ship_from?: string | null,
    available_on_subscription_flag?: string | null,
    subscription_frequency_details?:  Array< {
      __typename: "subscription_frequency_details_type",
      position?: number | null,
      frequency_title?: string | null,
      frequency_name?: string | null,
    } | null > | null,
    rating_details?:  {
      __typename: "rating_details_type",
      total_rating_count?: number | null,
      five_start_rating_count?: number | null,
      three_star_rating_count?: number | null,
      one_star_rating_count?: number | null,
      two_star_rating_count?: number | null,
      four_start_rating_count?: number | null,
    } | null,
    media_details?:  Array< {
      __typename: "media_details_type",
      position?: number | null,
      media_type?: string | null,
      media_url?: string | null,
      media_height?: string | null,
      media_width?: string | null,
    } | null > | null,
    stock_flag?: string | null,
    weight?: string | null,
    homepage_media?:  {
      __typename: "snapshot_media_type",
      media_type?: string | null,
      media_url?: string | null,
      media_width?: string | null,
      media_height?: string | null,
    } | null,
    on_sale_flag?: string | null,
    on_sale_to?: string | null,
    on_sale_from?: string | null,
    on_sale_maximum_quantity?: string | null,
    amount_saved?: number | null,
    percentage_off?: number | null,
    sale_price?: number | null,
    base_price?: number | null,
    price_unit?: string | null,
    price_per_unit?: number | null,
    origin_country?: string | null,
    corner_image_url?: string | null,
    // only for product creation
    status?: string | null,
  } | null,
};

export type CreateCategoryMutationVariables = {
  input: createAndUpdateCategoryInput,
};

export type CreateCategoryMutation = {
  createCategory?:  {
    __typename: "category",
    priority?: number | null,
    category_id?: string | null,
    category_name?: string | null,
    category_title?: string | null,
    description?: string | null,
    media_url?: string | null,
    media_type?: string | null,
    media_height?: string | null,
    media_width?: string | null,
    shop_media?:  {
      __typename: "shopMedia",
      media_height?: string | null,
      text_color?: string | null,
      background_color?: string | null,
      media_width?: string | null,
      media_url?: string | null,
      media_type?: string | null,
    } | null,
    status?: string | null,
  } | null,
};

export type UpdateCategoryMutationVariables = {
  input: createAndUpdateCategoryInput,
};

export type UpdateCategoryMutation = {
  updateCategory?:  {
    __typename: "category",
    priority?: number | null,
    category_id?: string | null,
    category_name?: string | null,
    category_title?: string | null,
    description?: string | null,
    media_url?: string | null,
    media_type?: string | null,
    media_height?: string | null,
    media_width?: string | null,
    shop_media?:  {
      __typename: "shopMedia",
      media_height?: string | null,
      text_color?: string | null,
      background_color?: string | null,
      media_width?: string | null,
      media_url?: string | null,
      media_type?: string | null,
    } | null,
    status?: string | null,
  } | null,
};

export type DeleteCategoryMutationVariables = {
  input: getAndDeleteCategoryInput,
};

export type DeleteCategoryMutation = {
  deleteCategory?:  {
    __typename: "category",
    priority?: number | null,
    category_id?: string | null,
    category_name?: string | null,
    category_title?: string | null,
    description?: string | null,
    media_url?: string | null,
    media_type?: string | null,
    media_height?: string | null,
    media_width?: string | null,
    shop_media?:  {
      __typename: "shopMedia",
      media_height?: string | null,
      text_color?: string | null,
      background_color?: string | null,
      media_width?: string | null,
      media_url?: string | null,
      media_type?: string | null,
    } | null,
    status?: string | null,
  } | null,
};

export type CreateReviewMutationVariables = {
  input: createAndUpdateReviewInput,
};

export type CreateReviewMutation = {
  createReview?:  {
    __typename: "review",
    review_id?: string | null,
    product_name?: string | null,
    rating_flag?: string | null,
    rating_stars?: number | null,
    review_flag?: string | null,
    user_id?: string | null,
    user_avtar_url?: string | null,
    full_name?: string | null,
    review_subject?: string | null,
    helpful_flag?: string | null,
    helpful_count?: number | null,
    review_detail?: string | null,
  } | null,
};

export type UpdateReviewMutationVariables = {
  input: createAndUpdateReviewInput,
};

export type UpdateReviewMutation = {
  updateReview?:  {
    __typename: "review",
    review_id?: string | null,
    product_name?: string | null,
    rating_flag?: string | null,
    rating_stars?: number | null,
    review_flag?: string | null,
    user_id?: string | null,
    user_avtar_url?: string | null,
    full_name?: string | null,
    review_subject?: string | null,
    helpful_flag?: string | null,
    helpful_count?: number | null,
    review_detail?: string | null,
  } | null,
};

export type DeleteReviewMutationVariables = {
  input: getAndDeleteReviewInput,
};

export type DeleteReviewMutation = {
  deleteReview?:  {
    __typename: "review",
    review_id?: string | null,
    product_name?: string | null,
    rating_flag?: string | null,
    rating_stars?: number | null,
    review_flag?: string | null,
    user_id?: string | null,
    user_avtar_url?: string | null,
    full_name?: string | null,
    review_subject?: string | null,
    helpful_flag?: string | null,
    helpful_count?: number | null,
    review_detail?: string | null,
  } | null,
};

export type CreateTestimonialMutationVariables = {
  input?: createAndUpdateTestimonialInput | null,
};

export type CreateTestimonialMutation = {
  createTestimonial?:  {
    __typename: "testimonial",
    rating_flag?: string | null,
    rating_stars?: number | null,
    testimonial_flag?: string | null,
    user_avtar_url?: string | null,
    position?: number | null,
    full_name?: string | null,
    testimonial_subject?: string | null,
    testimonial_detail?: string | null,
  } | null,
};

export type UpdateTestimonialMutationVariables = {
  input?: createAndUpdateTestimonialInput | null,
};

export type UpdateTestimonialMutation = {
  updateTestimonial?:  {
    __typename: "testimonial",
    rating_flag?: string | null,
    rating_stars?: number | null,
    testimonial_flag?: string | null,
    user_avtar_url?: string | null,
    position?: number | null,
    full_name?: string | null,
    testimonial_subject?: string | null,
    testimonial_detail?: string | null,
  } | null,
};

export type DeleteTestimonialMutationVariables = {
  input?: getAndDeleteTestimonialInput | null,
};

export type DeleteTestimonialMutation = {
  deleteTestimonial?:  {
    __typename: "testimonial",
    rating_flag?: string | null,
    rating_stars?: number | null,
    testimonial_flag?: string | null,
    user_avtar_url?: string | null,
    position?: number | null,
    full_name?: string | null,
    testimonial_subject?: string | null,
    testimonial_detail?: string | null,
  } | null,
};

export type SubscribeNewsLetterMutationVariables = {
  input: subscribeNewsLetterInput,
};

export type SubscribeNewsLetterMutation = {
  subscribeNewsLetter?:  {
    __typename: "newsLetter",
    news_letter_id?: string | null,
    email: string,
    platform: string,
  } | null,
};

export type UpdateNewsLetterSubscriptionMutationVariables = {
  input: subscribeNewsLetterInput,
};

export type UpdateNewsLetterSubscriptionMutation = {
  updateNewsLetterSubscription?:  {
    __typename: "newsLetter",
    news_letter_id?: string | null,
    email: string,
    platform: string,
  } | null,
};

export type DeleteNewsLetterSubscriptionMutationVariables = {
  input: getAndDeleteNewsLetterInput,
};

export type DeleteNewsLetterSubscriptionMutation = {
  deleteNewsLetterSubscription?:  {
    __typename: "newsLetter",
    news_letter_id?: string | null,
    email: string,
    platform: string,
  } | null,
};

export type CreateQnaMutationVariables = {
  input: createAndUpdateQnaInput,
};

export type CreateQnaMutation = {
  createQna?:  {
    __typename: "qna",
    qna_id?: string | null,
    product_id?: string | null,
    question?: string | null,
    answer?: string | null,
    position?: number | null,
    answer_by?: string | null,
  } | null,
};

export type UpdateQnaMutationVariables = {
  input: createAndUpdateQnaInput,
};

export type UpdateQnaMutation = {
  updateQna?:  {
    __typename: "qna",
    qna_id?: string | null,
    product_id?: string | null,
    question?: string | null,
    answer?: string | null,
    position?: number | null,
    answer_by?: string | null,
  } | null,
};

export type DeleteQnaMutationVariables = {
  input: getAndDeleteQnaInput,
};

export type DeleteQnaMutation = {
  deleteQna?:  {
    __typename: "qna",
    qna_id?: string | null,
    product_id?: string | null,
    question?: string | null,
    answer?: string | null,
    position?: number | null,
    answer_by?: string | null,
  } | null,
};

export type CreateCommentMutationVariables = {
  input: createAndUpdateCommentInput,
};

export type CreateCommentMutation = {
  createComment?:  {
    __typename: "comment",
    PK: string,
    SK: string,
    comment_id: string,
    email?: string | null,
    qna_id?: string | null,
    user_id?: string | null,
    uuid?: string | null,
    user_avtar_url?: string | null,
    comment?: string | null,
    commented_by?: string | null,
    commented_at?: string | null,
    status?: string | null,
    position?: number | null,
    modified_by?: string | null,
    modified_at?: string | null,
  } | null,
};

export type UpdateCommentMutationVariables = {
  input: createAndUpdateCommentInput,
};

export type UpdateCommentMutation = {
  updateComment?:  {
    __typename: "comment",
    PK: string,
    SK: string,
    comment_id: string,
    email?: string | null,
    qna_id?: string | null,
    user_id?: string | null,
    uuid?: string | null,
    user_avtar_url?: string | null,
    comment?: string | null,
    commented_by?: string | null,
    commented_at?: string | null,
    status?: string | null,
    position?: number | null,
    modified_by?: string | null,
    modified_at?: string | null,
  } | null,
};

export type DeleteCommentMutationVariables = {
  input: getAndDeleteCommentInput,
};

export type DeleteCommentMutation = {
  deleteComment?:  {
    __typename: "comment",
    PK: string,
    SK: string,
    comment_id: string,
    email?: string | null,
    qna_id?: string | null,
    user_id?: string | null,
    uuid?: string | null,
    user_avtar_url?: string | null,
    comment?: string | null,
    commented_by?: string | null,
    commented_at?: string | null,
    status?: string | null,
    position?: number | null,
    modified_by?: string | null,
    modified_at?: string | null,
  } | null,
};

export type CreateClusterMutationVariables = {
  input: createAndUpdateClusterInput,
};

export type CreateClusterMutation = {
  createCluster?:  {
    __typename: "cluster",
    PK: string,
    SK: string,
    cluster_id?: string | null,
    cluster_name?: string | null,
    postcode?: Array< string | null > | null,
    description?: string | null,
    cities?: Array< string | null > | null,
    coordinates_format_1?: string | null,
    coordinates_format_2?: string | null,
    delivery_charges?: string | null,
    delivery_days?: Array< string | null > | null,
    created_by?: string | null,
    created_at?: string | null,
    modified_by?: string | null,
    modified_at?: string | null,
    available_frequency?: Array< string | null > | null,
  } | null,
};

export type UpdateClusterMutationVariables = {
  input: createAndUpdateClusterInput,
};

export type UpdateClusterMutation = {
  updateCluster?:  {
    __typename: "cluster",
    PK: string,
    SK: string,
    cluster_id?: string | null,
    cluster_name?: string | null,
    postcode?: Array< string | null > | null,
    description?: string | null,
    cities?: Array< string | null > | null,
    coordinates_format_1?: string | null,
    coordinates_format_2?: string | null,
    delivery_charges?: string | null,
    delivery_days?: Array< string | null > | null,
    created_by?: string | null,
    created_at?: string | null,
    modified_by?: string | null,
    modified_at?: string | null,
    available_frequency?: Array< string | null > | null,
  } | null,
};

export type DeleteClusterMutationVariables = {
  input: getAndDeleteClusterInput,
};

export type DeleteClusterMutation = {
  deleteCluster?:  {
    __typename: "cluster",
    PK: string,
    SK: string,
    cluster_id?: string | null,
    cluster_name?: string | null,
    postcode?: Array< string | null > | null,
    description?: string | null,
    cities?: Array< string | null > | null,
    coordinates_format_1?: string | null,
    coordinates_format_2?: string | null,
    delivery_charges?: string | null,
    delivery_days?: Array< string | null > | null,
    created_by?: string | null,
    created_at?: string | null,
    modified_by?: string | null,
    modified_at?: string | null,
    available_frequency?: Array< string | null > | null,
  } | null,
};

export type CreateInventoryMutationVariables = {
  input: createAndUpdateInventoryInput,
};

export type CreateInventoryMutation = {
  createInventory?:  {
    __typename: "inventory",
    PK?: string | null,
    SK?: string | null,
    product_type?: string | null,
    inventory_id?: string | null,
    product_id?: string | null,
    variation_id?: string | null,
    product_name?: string | null,
    variation_name?: string | null,
    variation_description?: string | null,
    inventory_description?: string | null,
    date?: string | null,
    day?: string | null,
    sku?: string | null,
    total_stock?: number | null,
    current_stock?: number | null,
    purchased_stock?: number | null,
    stock_unit?: string | null,
    created_by?: string | null,
    created_at?: string | null,
    modified_by?: string | null,
    modified_at?: string | null,
  } | null,
};

export type UpdateInventoryMutationVariables = {
  input: createAndUpdateInventoryInput,
};

export type UpdateInventoryMutation = {
  updateInventory?:  {
    __typename: "inventory",
    PK?: string | null,
    SK?: string | null,
    product_type?: string | null,
    inventory_id?: string | null,
    product_id?: string | null,
    variation_id?: string | null,
    product_name?: string | null,
    variation_name?: string | null,
    variation_description?: string | null,
    inventory_description?: string | null,
    date?: string | null,
    day?: string | null,
    sku?: string | null,
    total_stock?: number | null,
    current_stock?: number | null,
    purchased_stock?: number | null,
    stock_unit?: string | null,
    created_by?: string | null,
    created_at?: string | null,
    modified_by?: string | null,
    modified_at?: string | null,
  } | null,
};

export type DeleteInventoryMutationVariables = {
  input: getAndDeleteInventoryInput,
};

export type DeleteInventoryMutation = {
  deleteInventory?:  {
    __typename: "inventory",
    PK?: string | null,
    SK?: string | null,
    product_type?: string | null,
    inventory_id?: string | null,
    product_id?: string | null,
    variation_id?: string | null,
    product_name?: string | null,
    variation_name?: string | null,
    variation_description?: string | null,
    inventory_description?: string | null,
    date?: string | null,
    day?: string | null,
    sku?: string | null,
    total_stock?: number | null,
    current_stock?: number | null,
    purchased_stock?: number | null,
    stock_unit?: string | null,
    created_by?: string | null,
    created_at?: string | null,
    modified_by?: string | null,
    modified_at?: string | null,
  } | null,
};

export type ProductControlsByGSI1QueryVariables = {
  PK: string,
  first?: number | null,
  after?: string | null,
};

export type ProductControlsByGSI1Query = {
  ProductControlsByGSI1?:  {
    __typename: "ProductControlsConnection",
    items?:  Array< {
      __typename: "ProductControls",
      PK: string,
      SK: string,
      best_selling_flag?: string | null,
      featured_flag?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetMenuQueryVariables = {
  input: getMenuInput,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetMenuQuery = {
  getMenu?:  {
    __typename: "menuConnection",
    nextToken?: string | null,
    menus?:  Array< {
      __typename: "menu",
      menu_id?: string | null,
      category_name?: string | null,
      category_title?: string | null,
      category_id?: string | null,
      position?: number | null,
      sub_categories?:  Array< {
        __typename: "sub_category_menu",
        sub_category_name?: string | null,
        sub_category_id?: string | null,
        sub_category_title?: string | null,
        position?: number | null,
      } | null > | null,
    } | null > | null,
  } | null,
};

export type ListBannersQueryVariables = {
  input: listBannersInput,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBannersQuery = {
  listBanners?:  {
    __typename: "bannersConnection",
    banners?:  Array< {
      __typename: "banner",
      mobile_banner_url?: string | null,
      web_banner_url?: string | null,
      banner_id?: string | null,
      priority?: number | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetUserProfileQueryVariables = {
  input: getAndDeleteProfileInput,
};

export type GetUserProfileQuery = {
  getUserProfile?:  {
    __typename: "userProfile",
    avatar_url?: string | null,
    email?: string | null,
    email_verified?: string | null,
    email_verified_flag?: string | null,
    full_name?: string | null,
    last_login_at?: string | null,
    primary_phone?: string | null,
    provider?: string | null,
    register_at?: string | null,
    secondary_phone?: string | null,
    user_id?: string | null,
    user_type?: string | null,
  } | null,
};

export type ListAllUserProfileQueryVariables = {
  limit?: number | null,
  forward_flag?: forward_flag_enum | null,
  nextToken?: string | null,
};

export type ListAllUserProfileQuery = {
  listAllUserProfile?:  {
    __typename: "userProfileConnection",
    profiles?:  Array< {
      __typename: "userProfile",
      avatar_url?: string | null,
      email?: string | null,
      email_verified?: string | null,
      email_verified_flag?: string | null,
      full_name?: string | null,
      last_login_at?: string | null,
      primary_phone?: string | null,
      provider?: string | null,
      register_at?: string | null,
      secondary_phone?: string | null,
      user_id?: string | null,
      user_type?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetUserProfileAddressQueryVariables = {
  input?: getAndDeleteUserAddressInput | null,
};

export type GetUserProfileAddressQuery = {
  getUserProfileAddress?:  {
    __typename: "address",
    address_id?: string | null,
    cluster_id?: string | null,
    type?: string | null,
    billing_name?: string | null,
    shipping_name?: string | null,
    address_hash?: string | null,
    lat?: number | null,
    lng?: number | null,
    default_flag?: string | null,
    billing_same_as_shipping_flag?: string | null,
    delivery_instructions?: string | null,
    shipping_email?: string | null,
    shipping_primary_phone?: string | null,
    shipping_secondary_phone?: string | null,
    shipping_address_line_1?: string | null,
    shipping_city?: string | null,
    shipping_postcode?: string | null,
    shipping_state?: string | null,
    shipping_country?: string | null,
    billing_email?: string | null,
    billing_primary_phone?: string | null,
    billing_secondary_phone?: string | null,
    billing_address_line_1?: string | null,
    billing_address_line_2?: string | null,
    billing_city?: string | null,
    billing_postcode?: string | null,
    billing_state?: string | null,
    billing_country?: string | null,
  } | null,
};

export type ListAllAddressesQueryVariables = {
  input: listAllAddressesInput,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAllAddressesQuery = {
  listAllAddresses?:  {
    __typename: "addressConnection",
    addresses?:  Array< {
      __typename: "address",
      address_id?: string | null,
      cluster_id?: string | null,
      type?: string | null,
      billing_name?: string | null,
      shipping_name?: string | null,
      address_hash?: string | null,
      lat?: number | null,
      lng?: number | null,
      default_flag?: string | null,
      billing_same_as_shipping_flag?: string | null,
      delivery_instructions?: string | null,
      shipping_email?: string | null,
      shipping_primary_phone?: string | null,
      shipping_secondary_phone?: string | null,
      shipping_address_line_1?: string | null,
      shipping_city?: string | null,
      shipping_postcode?: string | null,
      shipping_state?: string | null,
      shipping_country?: string | null,
      billing_email?: string | null,
      billing_primary_phone?: string | null,
      billing_secondary_phone?: string | null,
      billing_address_line_1?: string | null,
      billing_address_line_2?: string | null,
      billing_city?: string | null,
      billing_postcode?: string | null,
      billing_state?: string | null,
      billing_country?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ListAllShippingAddressesQueryVariables = {
  input: listAllAddressesInput,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAllShippingAddressesQuery = {
  listAllShippingAddresses?:  {
    __typename: "addressConnection",
    addresses?:  Array< {
      __typename: "address",
      address_id?: string | null,
      cluster_id?: string | null,
      type?: string | null,
      billing_name?: string | null,
      shipping_name?: string | null,
      address_hash?: string | null,
      lat?: number | null,
      lng?: number | null,
      default_flag?: string | null,
      billing_same_as_shipping_flag?: string | null,
      delivery_instructions?: string | null,
      shipping_email?: string | null,
      shipping_primary_phone?: string | null,
      shipping_secondary_phone?: string | null,
      shipping_address_line_1?: string | null,
      shipping_city?: string | null,
      shipping_postcode?: string | null,
      shipping_state?: string | null,
      shipping_country?: string | null,
      billing_email?: string | null,
      billing_primary_phone?: string | null,
      billing_secondary_phone?: string | null,
      billing_address_line_1?: string | null,
      billing_address_line_2?: string | null,
      billing_city?: string | null,
      billing_postcode?: string | null,
      billing_state?: string | null,
      billing_country?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetDefaultAddressQueryVariables = {
  input: listAllAddressesInput,
};

export type GetDefaultAddressQuery = {
  getDefaultAddress?:  {
    __typename: "addressConnection",
    addresses?:  Array< {
      __typename: "address",
      address_id?: string | null,
      cluster_id?: string | null,
      type?: string | null,
      billing_name?: string | null,
      shipping_name?: string | null,
      address_hash?: string | null,
      lat?: number | null,
      lng?: number | null,
      default_flag?: string | null,
      billing_same_as_shipping_flag?: string | null,
      delivery_instructions?: string | null,
      shipping_email?: string | null,
      shipping_primary_phone?: string | null,
      shipping_secondary_phone?: string | null,
      shipping_address_line_1?: string | null,
      shipping_city?: string | null,
      shipping_postcode?: string | null,
      shipping_state?: string | null,
      shipping_country?: string | null,
      billing_email?: string | null,
      billing_primary_phone?: string | null,
      billing_secondary_phone?: string | null,
      billing_address_line_1?: string | null,
      billing_address_line_2?: string | null,
      billing_city?: string | null,
      billing_postcode?: string | null,
      billing_state?: string | null,
      billing_country?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetLastCheckAvailabilityAddressQueryVariables = {
  input: getLastCheckAvailabilityAddressInput,
};

export type GetLastCheckAvailabilityAddressQuery = {
  getLastCheckAvailabilityAddress?:  {
    __typename: "addLastCheckAvailabilityAddress",
    cluster_id?: string | null,
    shipping_name?: string | null,
    lat?: number | null,
    lng?: number | null,
    shipping_email?: string | null,
    shipping_primary_phone?: string | null,
    shipping_secondary_phone?: string | null,
    shipping_address_line_1?: string | null,
    shipping_city?: string | null,
    shipping_postcode?: string | null,
    shipping_state?: string | null,
    shipping_country?: string | null,
    message?: string | null,
    status?: string | null,
    status_code?: number | null,
  } | null,
};

export type CheckAddressAvailabilityQueryVariables = {
  input: checkAddressAvailabilityInput,
};

export type CheckAddressAvailabilityQuery = {
  checkAddressAvailability?:  {
    __typename: "checkAddressAvailability",
    postcode?: string | null,
    cluster_id?: string | null,
    status?: boolean | null,
    status_code?: number | null,
  } | null,
};

export type GetDeliveryDateByClusterQueryVariables = {
  input: getDeliveryDateByClusterInput,
};

export type GetDeliveryDateByClusterQuery = {
  getDeliveryDateByCluster?:  {
    __typename: "getDeliveryDateByCluster",
    cluster_id?: string | null,
    shipping_postcode?: string | null,
    available_delivery_date?: Array< string | null > | null,
  } | null,
};

export type AlternativeAddressSearchQueryVariables = {
  input?: alternativeAddressSearchInput | null,
};

export type AlternativeAddressSearchQuery = {
  alternativeAddressSearch?:  Array< {
    __typename: "alternativeAddressSearch",
    lat?: number | null,
    lng?: number | null,
    address_line_1?: string | null,
    city?: string | null,
    state?: string | null,
    postcode?: string | null,
    country?: string | null,
    full_address?: string | null,
    address_provider?: string | null,
  } | null > | null,
};

export type ListAllPaymentMethodsQueryVariables = {
  input: listAllPaymentMethodsInput,
};

export type ListAllPaymentMethodsQuery = {
  listAllPaymentMethods?:  {
    __typename: "paymentMethodConnection",
    paymentMethods?:  Array< {
      __typename: "paymentMethod",
      payment_method_id?: string | null,
      status?: string | null,
      default_flag?: string | null,
      backup_flag?: string | null,
      payment_method_type?: string | null,
      card_brand?: string | null,
      last_4?: string | null,
      exp_month?: number | null,
      exp_year?: number | null,
      cardholder_name?: string | null,
      billing_address_line_1?: string | null,
      billing_address_line_2?: string | null,
      billing_city?: string | null,
      billing_country?: string | null,
      billing_email?: string | null,
      billing_postcode?: string | null,
      billing_primary_phone?: string | null,
      billing_secondary_phone?: string | null,
      billing_state?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetDefaultPaymentMethodQueryVariables = {
  input: listAllPaymentMethodsInput,
};

export type GetDefaultPaymentMethodQuery = {
  getDefaultPaymentMethod?:  {
    __typename: "paymentMethodConnection",
    paymentMethods?:  Array< {
      __typename: "paymentMethod",
      payment_method_id?: string | null,
      status?: string | null,
      default_flag?: string | null,
      backup_flag?: string | null,
      payment_method_type?: string | null,
      card_brand?: string | null,
      last_4?: string | null,
      exp_month?: number | null,
      exp_year?: number | null,
      cardholder_name?: string | null,
      billing_address_line_1?: string | null,
      billing_address_line_2?: string | null,
      billing_city?: string | null,
      billing_country?: string | null,
      billing_email?: string | null,
      billing_postcode?: string | null,
      billing_primary_phone?: string | null,
      billing_secondary_phone?: string | null,
      billing_state?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetPaymentLogoUrlsQueryVariables = {
  input?: paymentLogoUrlInput | null,
};

export type GetPaymentLogoUrlsQuery = {
  getPaymentLogoUrls?:  {
    __typename: "paymentLogoUrls",
    PK?: string | null,
    SK?: string | null,
    visa?: string | null,
    mastercard?: string | null,
    american_express?: string | null,
    paypal?: string | null,
  } | null,
};

export type GetCartQueryVariables = {
  input: getCartInput,
};

export type GetCartQuery = {
  getCart?:  {
    __typename: "getCart",
    status?: string | null,
    status_code?: number | null,
    subscription_frequency_list?: Array< string | null > | null,
    contain_subscription_flag?: string | null,
    contain_out_of_stock_product?: string | null,
    product_count?: number | null,
    cart_items?:  Array< {
      __typename: "cart_items_type",
      product_id: string,
      subscription_flag?: string | null,
      item_count?: number | null,
      subscription_frequency?: string | null,
      subscription_frequency_title?: string | null,
      product_name?: string | null,
      product_title?: string | null,
      inventory_policy?: string | null,
      availability_range?: number | null,
      available_on_subscription_flag?: string | null,
      subscription_frequency_details?:  Array< {
        __typename: "subscription_frequency_details_type",
        position?: number | null,
        frequency_title?: string | null,
        frequency_name?: string | null,
      } | null > | null,
      stock_flag?: string | null,
      weight?: string | null,
      homepage_media?:  {
        __typename: "snapshot_media_type",
        media_type?: string | null,
        media_url?: string | null,
        media_width?: string | null,
        media_height?: string | null,
      } | null,
      on_sale_flag?: string | null,
      on_sale_to?: string | null,
      on_sale_from?: string | null,
      on_sale_maximum_quantity?: string | null,
      amount_saved?: number | null,
      percentage_off?: number | null,
      sale_price?: number | null,
      base_price?: number | null,
      price_unit?: string | null,
      price_per_unit?: number | null,
    } | null > | null,
    pricing_details?:  {
      __typename: "pricing_details",
      onetime_amount?: number | null,
      total_amount?: number | null,
      discount?: number | null,
      payable_amount?: number | null,
      onetime_delivery_charge?: number | null,
      recurring_delivery_charges?:  Array< {
        __typename: "recurring_delivery_charges",
        subscription_frequency?: string | null,
        recurring_amount?: number | null,
        delivery_charge?: number | null,
        recurring_total_amount?: number | null,
      } | null > | null,
    } | null,
    coupon_applied_flag?: string | null,
    coupon_code?: string | null,
    coupon_valid_flag?: string | null,
  } | null,
};

export type ListOrderItemsQueryVariables = {
  input: listOrderItemsInput,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrderItemsQuery = {
  listOrderItems?:  {
    __typename: "orderItemsConnection",
    orderItems?:  Array< {
      __typename: "orderItem",
      corner_image_url?: string | null,
      on_sale_flag?: string | null,
      email_media?:  {
        __typename: "snapshot_media_type",
        media_type?: string | null,
        media_url?: string | null,
        media_width?: string | null,
        media_height?: string | null,
      } | null,
      on_sale_from?: string | null,
      invoice_media?:  {
        __typename: "snapshot_media_type",
        media_type?: string | null,
        media_url?: string | null,
        media_width?: string | null,
        media_height?: string | null,
      } | null,
      item_count?: number | null,
      percentage_off?: number | null,
      product_id?: string | null,
      vendor?: string | null,
      weight?: string | null,
      origin_country?: string | null,
      price_unit?: string | null,
      ship_from?: string | null,
      subscription_frequency?: string | null,
      subscription_flag?: string | null,
      subscription_frequency_details?:  {
        __typename: "subscription_frequency_details_type",
        position?: number | null,
        frequency_title?: string | null,
        frequency_name?: string | null,
      } | null,
      on_sale_to?: string | null,
      on_sale_maximum_quantity?: number | null,
      price_per_unit?: number | null,
      product_title?: string | null,
      availability_range?: number | null,
      amount_saved?: number | null,
      product_name?: string | null,
      stock_flag?: string | null,
      available_on_subscription_flag?: string | null,
      sale_price?: number | null,
      inventory_policy?: string | null,
      base_price?: number | null,
      categories?: Array< string | null > | null,
      product_type?: string | null,
      homepage_media?:  {
        __typename: "snapshot_media_type",
        media_type?: string | null,
        media_url?: string | null,
        media_width?: string | null,
        media_height?: string | null,
      } | null,
      sub_categories?: Array< string | null > | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ListOrderTransactionsQueryVariables = {
  input: listOrderItemsInput,
};

export type ListOrderTransactionsQuery = {
  listOrderTransactions?:  {
    __typename: "transactionConnection",
    transactions?:  Array< {
      __typename: "transaction",
      transaction_id?: string | null,
      transaction_status?: string | null,
      payment_amount?: number | null,
      failed_reason?: string | null,
      order_id?: string | null,
      payment_id?: string | null,
      created_at?: string | null,
      payment_method_details?:  {
        __typename: "payment_method_details",
        payment_method_type?: string | null,
        exp_month?: number | null,
        exp_year?: number | null,
        last_4?: string | null,
        billing_state?: string | null,
        billing_email?: string | null,
        card_brand?: string | null,
        billing_address_line_1?: string | null,
        default_flag?: string | null,
        billing_primary_phone?: string | null,
        billing_country?: string | null,
        cardholder_name?: string | null,
        billing_city?: string | null,
        payment_method_id?: string | null,
        billing_postcode?: string | null,
        backup_flag?: string | null,
        status?: string | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetOrderPaymentMethodQueryVariables = {
  input: listOrderItemsInput,
};

export type GetOrderPaymentMethodQuery = {
  getOrderPaymentMethod?:  {
    __typename: "paymentMethodConnection",
    paymentMethods?:  Array< {
      __typename: "paymentMethod",
      payment_method_id?: string | null,
      status?: string | null,
      default_flag?: string | null,
      backup_flag?: string | null,
      payment_method_type?: string | null,
      card_brand?: string | null,
      last_4?: string | null,
      exp_month?: number | null,
      exp_year?: number | null,
      cardholder_name?: string | null,
      billing_address_line_1?: string | null,
      billing_address_line_2?: string | null,
      billing_city?: string | null,
      billing_country?: string | null,
      billing_email?: string | null,
      billing_postcode?: string | null,
      billing_primary_phone?: string | null,
      billing_secondary_phone?: string | null,
      billing_state?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetOrderQueryVariables = {
  input: getAndDeleteOrderInput,
};

export type GetOrderQuery = {
  getOrder?:  {
    __typename: "order",
    parent_subscription_id?: string | null,
    invoice_download_flag?: string | null,
    cancelled_at?: string | null,
    child_subscription_ids?: Array< string | null > | null,
    subscription_frequency_list?: Array< string | null > | null,
    product_count?: number | null,
    shipping_address?:  {
      __typename: "shipping_address_type",
      shipping_primary_phone?: string | null,
      shipping_secondary_phone?: string | null,
      shipping_state?: string | null,
      shipping_city?: string | null,
      cluster_id?: string | null,
      shipping_name?: string | null,
      default_flag?: string | null,
      shipping_postcode?: string | null,
      lat?: number | null,
      lng?: number | null,
      delivery_instructions?: string | null,
      shipping_address_line_1?: string | null,
      address_id?: string | null,
      shipping_email?: string | null,
      shipping_country?: string | null,
    } | null,
    backup_payment_method_flag?: string | null,
    delivery_status?: string | null,
    deliver_by?: string | null,
    order_status?: string | null,
    created_via?: string | null,
    contains_subscription_flag?: string | null,
    created_at?: string | null,
    deliver_at?: string | null,
    delivery_date?: string | null,
    user_id?: string | null,
    order_date?: string | null,
    delivery_information_email_sent_flag?: string | null,
    pricing_details?:  {
      __typename: "pricing_details",
      onetime_amount?: number | null,
      total_amount?: number | null,
      discount?: number | null,
      payable_amount?: number | null,
      onetime_delivery_charge?: number | null,
      recurring_delivery_charges?:  Array< {
        __typename: "recurring_delivery_charges",
        subscription_frequency?: string | null,
        recurring_amount?: number | null,
        delivery_charge?: number | null,
        recurring_total_amount?: number | null,
      } | null > | null,
    } | null,
    delivery_time_window?: string | null,
    snapshot_data?:  {
      __typename: "order_snapshot_type",
      homepage_media?:  {
        __typename: "snapshot_media_type",
        media_type?: string | null,
        media_url?: string | null,
        media_width?: string | null,
        media_height?: string | null,
      } | null,
      product_id?: string | null,
      product_name?: string | null,
      product_title?: string | null,
      card_brand?: string | null,
      last_4?: string | null,
      exp_month?: string | null,
      exp_year?: string | null,
      payment_method_type?: string | null,
      payment_method_id?: string | null,
      backup_flag?: string | null,
    } | null,
    order_id?: string | null,
    cancelled_reason?: string | null,
  } | null,
};

export type ListAllOrdersQueryVariables = {
  input: listAllOrdersInput,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAllOrdersQuery = {
  listAllOrders?:  {
    __typename: "orderConnection",
    orders?:  Array< {
      __typename: "order",
      parent_subscription_id?: string | null,
      invoice_download_flag?: string | null,
      cancelled_at?: string | null,
      child_subscription_ids?: Array< string | null > | null,
      subscription_frequency_list?: Array< string | null > | null,
      product_count?: number | null,
      shipping_address?:  {
        __typename: "shipping_address_type",
        shipping_primary_phone?: string | null,
        shipping_secondary_phone?: string | null,
        shipping_state?: string | null,
        shipping_city?: string | null,
        cluster_id?: string | null,
        shipping_name?: string | null,
        default_flag?: string | null,
        shipping_postcode?: string | null,
        lat?: number | null,
        lng?: number | null,
        delivery_instructions?: string | null,
        shipping_address_line_1?: string | null,
        address_id?: string | null,
        shipping_email?: string | null,
        shipping_country?: string | null,
      } | null,
      backup_payment_method_flag?: string | null,
      delivery_status?: string | null,
      deliver_by?: string | null,
      order_status?: string | null,
      created_via?: string | null,
      contains_subscription_flag?: string | null,
      created_at?: string | null,
      deliver_at?: string | null,
      delivery_date?: string | null,
      user_id?: string | null,
      order_date?: string | null,
      delivery_information_email_sent_flag?: string | null,
      pricing_details?:  {
        __typename: "pricing_details",
        onetime_amount?: number | null,
        total_amount?: number | null,
        discount?: number | null,
        payable_amount?: number | null,
        onetime_delivery_charge?: number | null,
        recurring_delivery_charges?:  Array< {
          __typename: "recurring_delivery_charges",
          subscription_frequency?: string | null,
          recurring_amount?: number | null,
          delivery_charge?: number | null,
          recurring_total_amount?: number | null,
        } | null > | null,
      } | null,
      delivery_time_window?: string | null,
      snapshot_data?:  {
        __typename: "order_snapshot_type",
        homepage_media?:  {
          __typename: "snapshot_media_type",
          media_type?: string | null,
          media_url?: string | null,
          media_width?: string | null,
          media_height?: string | null,
        } | null,
        product_id?: string | null,
        product_name?: string | null,
        product_title?: string | null,
        card_brand?: string | null,
        last_4?: string | null,
        exp_month?: string | null,
        exp_year?: string | null,
        payment_method_type?: string | null,
        payment_method_id?: string | null,
        backup_flag?: string | null,
      } | null,
      order_id?: string | null,
      cancelled_reason?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ListAllOrdersAdminQueryVariables = {
  limit?: number | null,
  forward_flag?: forward_flag_enum | null,
  nextToken?: string | null,
};

export type ListAllOrdersAdminQuery = {
  listAllOrdersAdmin?:  {
    __typename: "orderConnection",
    orders?:  Array< {
      __typename: "order",
      parent_subscription_id?: string | null,
      invoice_download_flag?: string | null,
      cancelled_at?: string | null,
      child_subscription_ids?: Array< string | null > | null,
      subscription_frequency_list?: Array< string | null > | null,
      product_count?: number | null,
      shipping_address?:  {
        __typename: "shipping_address_type",
        shipping_primary_phone?: string | null,
        shipping_secondary_phone?: string | null,
        shipping_state?: string | null,
        shipping_city?: string | null,
        cluster_id?: string | null,
        shipping_name?: string | null,
        default_flag?: string | null,
        shipping_postcode?: string | null,
        lat?: number | null,
        lng?: number | null,
        delivery_instructions?: string | null,
        shipping_address_line_1?: string | null,
        address_id?: string | null,
        shipping_email?: string | null,
        shipping_country?: string | null,
      } | null,
      backup_payment_method_flag?: string | null,
      delivery_status?: string | null,
      deliver_by?: string | null,
      order_status?: string | null,
      created_via?: string | null,
      contains_subscription_flag?: string | null,
      created_at?: string | null,
      deliver_at?: string | null,
      delivery_date?: string | null,
      user_id?: string | null,
      order_date?: string | null,
      delivery_information_email_sent_flag?: string | null,
      pricing_details?:  {
        __typename: "pricing_details",
        onetime_amount?: number | null,
        total_amount?: number | null,
        discount?: number | null,
        payable_amount?: number | null,
        onetime_delivery_charge?: number | null,
        recurring_delivery_charges?:  Array< {
          __typename: "recurring_delivery_charges",
          subscription_frequency?: string | null,
          recurring_amount?: number | null,
          delivery_charge?: number | null,
          recurring_total_amount?: number | null,
        } | null > | null,
      } | null,
      delivery_time_window?: string | null,
      snapshot_data?:  {
        __typename: "order_snapshot_type",
        homepage_media?:  {
          __typename: "snapshot_media_type",
          media_type?: string | null,
          media_url?: string | null,
          media_width?: string | null,
          media_height?: string | null,
        } | null,
        product_id?: string | null,
        product_name?: string | null,
        product_title?: string | null,
        card_brand?: string | null,
        last_4?: string | null,
        exp_month?: string | null,
        exp_year?: string | null,
        payment_method_type?: string | null,
        payment_method_id?: string | null,
        backup_flag?: string | null,
      } | null,
      order_id?: string | null,
      cancelled_reason?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ListAllOrderByStatusAdminQueryVariables = {
  input: listAllOrderByStatusAdminInput,
  limit?: number | null,
  forward_flag?: forward_flag_enum | null,
  nextToken?: string | null,
};

export type ListAllOrderByStatusAdminQuery = {
  listAllOrderByStatusAdmin?:  {
    __typename: "orderConnection",
    orders?:  Array< {
      __typename: "order",
      parent_subscription_id?: string | null,
      invoice_download_flag?: string | null,
      cancelled_at?: string | null,
      child_subscription_ids?: Array< string | null > | null,
      subscription_frequency_list?: Array< string | null > | null,
      product_count?: number | null,
      shipping_address?:  {
        __typename: "shipping_address_type",
        shipping_primary_phone?: string | null,
        shipping_secondary_phone?: string | null,
        shipping_state?: string | null,
        shipping_city?: string | null,
        cluster_id?: string | null,
        shipping_name?: string | null,
        default_flag?: string | null,
        shipping_postcode?: string | null,
        lat?: number | null,
        lng?: number | null,
        delivery_instructions?: string | null,
        shipping_address_line_1?: string | null,
        address_id?: string | null,
        shipping_email?: string | null,
        shipping_country?: string | null,
      } | null,
      backup_payment_method_flag?: string | null,
      delivery_status?: string | null,
      deliver_by?: string | null,
      order_status?: string | null,
      created_via?: string | null,
      contains_subscription_flag?: string | null,
      created_at?: string | null,
      deliver_at?: string | null,
      delivery_date?: string | null,
      user_id?: string | null,
      order_date?: string | null,
      delivery_information_email_sent_flag?: string | null,
      pricing_details?:  {
        __typename: "pricing_details",
        onetime_amount?: number | null,
        total_amount?: number | null,
        discount?: number | null,
        payable_amount?: number | null,
        onetime_delivery_charge?: number | null,
        recurring_delivery_charges?:  Array< {
          __typename: "recurring_delivery_charges",
          subscription_frequency?: string | null,
          recurring_amount?: number | null,
          delivery_charge?: number | null,
          recurring_total_amount?: number | null,
        } | null > | null,
      } | null,
      delivery_time_window?: string | null,
      snapshot_data?:  {
        __typename: "order_snapshot_type",
        homepage_media?:  {
          __typename: "snapshot_media_type",
          media_type?: string | null,
          media_url?: string | null,
          media_width?: string | null,
          media_height?: string | null,
        } | null,
        product_id?: string | null,
        product_name?: string | null,
        product_title?: string | null,
        card_brand?: string | null,
        last_4?: string | null,
        exp_month?: string | null,
        exp_year?: string | null,
        payment_method_type?: string | null,
        payment_method_id?: string | null,
        backup_flag?: string | null,
      } | null,
      order_id?: string | null,
      cancelled_reason?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ListOrderByStatusQueryVariables = {
  input: listOrderByStatusInput,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrderByStatusQuery = {
  listOrderByStatus?:  {
    __typename: "orderConnection",
    orders?:  Array< {
      __typename: "order",
      parent_subscription_id?: string | null,
      invoice_download_flag?: string | null,
      cancelled_at?: string | null,
      child_subscription_ids?: Array< string | null > | null,
      subscription_frequency_list?: Array< string | null > | null,
      product_count?: number | null,
      shipping_address?:  {
        __typename: "shipping_address_type",
        shipping_primary_phone?: string | null,
        shipping_secondary_phone?: string | null,
        shipping_state?: string | null,
        shipping_city?: string | null,
        cluster_id?: string | null,
        shipping_name?: string | null,
        default_flag?: string | null,
        shipping_postcode?: string | null,
        lat?: number | null,
        lng?: number | null,
        delivery_instructions?: string | null,
        shipping_address_line_1?: string | null,
        address_id?: string | null,
        shipping_email?: string | null,
        shipping_country?: string | null,
      } | null,
      backup_payment_method_flag?: string | null,
      delivery_status?: string | null,
      deliver_by?: string | null,
      order_status?: string | null,
      created_via?: string | null,
      contains_subscription_flag?: string | null,
      created_at?: string | null,
      deliver_at?: string | null,
      delivery_date?: string | null,
      user_id?: string | null,
      order_date?: string | null,
      delivery_information_email_sent_flag?: string | null,
      pricing_details?:  {
        __typename: "pricing_details",
        onetime_amount?: number | null,
        total_amount?: number | null,
        discount?: number | null,
        payable_amount?: number | null,
        onetime_delivery_charge?: number | null,
        recurring_delivery_charges?:  Array< {
          __typename: "recurring_delivery_charges",
          subscription_frequency?: string | null,
          recurring_amount?: number | null,
          delivery_charge?: number | null,
          recurring_total_amount?: number | null,
        } | null > | null,
      } | null,
      delivery_time_window?: string | null,
      snapshot_data?:  {
        __typename: "order_snapshot_type",
        homepage_media?:  {
          __typename: "snapshot_media_type",
          media_type?: string | null,
          media_url?: string | null,
          media_width?: string | null,
          media_height?: string | null,
        } | null,
        product_id?: string | null,
        product_name?: string | null,
        product_title?: string | null,
        card_brand?: string | null,
        last_4?: string | null,
        exp_month?: string | null,
        exp_year?: string | null,
        payment_method_type?: string | null,
        payment_method_id?: string | null,
        backup_flag?: string | null,
      } | null,
      order_id?: string | null,
      cancelled_reason?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ListAllRelatedUserOrderQueryVariables = {
  input: getRelatedUserOrderInput,
  limit?: number | null,
  nextToken?: string | null,
  forward_flag?: string | null,
};

export type ListAllRelatedUserOrderQuery = {
  listAllRelatedUserOrder?:  {
    __typename: "orderConnection",
    orders?:  Array< {
      __typename: "order",
      parent_subscription_id?: string | null,
      invoice_download_flag?: string | null,
      cancelled_at?: string | null,
      child_subscription_ids?: Array< string | null > | null,
      subscription_frequency_list?: Array< string | null > | null,
      product_count?: number | null,
      shipping_address?:  {
        __typename: "shipping_address_type",
        shipping_primary_phone?: string | null,
        shipping_secondary_phone?: string | null,
        shipping_state?: string | null,
        shipping_city?: string | null,
        cluster_id?: string | null,
        shipping_name?: string | null,
        default_flag?: string | null,
        shipping_postcode?: string | null,
        lat?: number | null,
        lng?: number | null,
        delivery_instructions?: string | null,
        shipping_address_line_1?: string | null,
        address_id?: string | null,
        shipping_email?: string | null,
        shipping_country?: string | null,
      } | null,
      backup_payment_method_flag?: string | null,
      delivery_status?: string | null,
      deliver_by?: string | null,
      order_status?: string | null,
      created_via?: string | null,
      contains_subscription_flag?: string | null,
      created_at?: string | null,
      deliver_at?: string | null,
      delivery_date?: string | null,
      user_id?: string | null,
      order_date?: string | null,
      delivery_information_email_sent_flag?: string | null,
      pricing_details?:  {
        __typename: "pricing_details",
        onetime_amount?: number | null,
        total_amount?: number | null,
        discount?: number | null,
        payable_amount?: number | null,
        onetime_delivery_charge?: number | null,
        recurring_delivery_charges?:  Array< {
          __typename: "recurring_delivery_charges",
          subscription_frequency?: string | null,
          recurring_amount?: number | null,
          delivery_charge?: number | null,
          recurring_total_amount?: number | null,
        } | null > | null,
      } | null,
      delivery_time_window?: string | null,
      snapshot_data?:  {
        __typename: "order_snapshot_type",
        homepage_media?:  {
          __typename: "snapshot_media_type",
          media_type?: string | null,
          media_url?: string | null,
          media_width?: string | null,
          media_height?: string | null,
        } | null,
        product_id?: string | null,
        product_name?: string | null,
        product_title?: string | null,
        card_brand?: string | null,
        last_4?: string | null,
        exp_month?: string | null,
        exp_year?: string | null,
        payment_method_type?: string | null,
        payment_method_id?: string | null,
        backup_flag?: string | null,
      } | null,
      order_id?: string | null,
      cancelled_reason?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ListAllRelatedOrdersFromSubscriptionQueryVariables = {
  input: getRelatedOrdersFromSubscriptionInput,
  limit?: number | null,
  nextToken?: string | null,
  forward_flag?: string | null,
};

export type ListAllRelatedOrdersFromSubscriptionQuery = {
  listAllRelatedOrdersFromSubscription?:  {
    __typename: "orderConnection",
    orders?:  Array< {
      __typename: "order",
      parent_subscription_id?: string | null,
      invoice_download_flag?: string | null,
      cancelled_at?: string | null,
      child_subscription_ids?: Array< string | null > | null,
      subscription_frequency_list?: Array< string | null > | null,
      product_count?: number | null,
      shipping_address?:  {
        __typename: "shipping_address_type",
        shipping_primary_phone?: string | null,
        shipping_secondary_phone?: string | null,
        shipping_state?: string | null,
        shipping_city?: string | null,
        cluster_id?: string | null,
        shipping_name?: string | null,
        default_flag?: string | null,
        shipping_postcode?: string | null,
        lat?: number | null,
        lng?: number | null,
        delivery_instructions?: string | null,
        shipping_address_line_1?: string | null,
        address_id?: string | null,
        shipping_email?: string | null,
        shipping_country?: string | null,
      } | null,
      backup_payment_method_flag?: string | null,
      delivery_status?: string | null,
      deliver_by?: string | null,
      order_status?: string | null,
      created_via?: string | null,
      contains_subscription_flag?: string | null,
      created_at?: string | null,
      deliver_at?: string | null,
      delivery_date?: string | null,
      user_id?: string | null,
      order_date?: string | null,
      delivery_information_email_sent_flag?: string | null,
      pricing_details?:  {
        __typename: "pricing_details",
        onetime_amount?: number | null,
        total_amount?: number | null,
        discount?: number | null,
        payable_amount?: number | null,
        onetime_delivery_charge?: number | null,
        recurring_delivery_charges?:  Array< {
          __typename: "recurring_delivery_charges",
          subscription_frequency?: string | null,
          recurring_amount?: number | null,
          delivery_charge?: number | null,
          recurring_total_amount?: number | null,
        } | null > | null,
      } | null,
      delivery_time_window?: string | null,
      snapshot_data?:  {
        __typename: "order_snapshot_type",
        homepage_media?:  {
          __typename: "snapshot_media_type",
          media_type?: string | null,
          media_url?: string | null,
          media_width?: string | null,
          media_height?: string | null,
        } | null,
        product_id?: string | null,
        product_name?: string | null,
        product_title?: string | null,
        card_brand?: string | null,
        last_4?: string | null,
        exp_month?: string | null,
        exp_year?: string | null,
        payment_method_type?: string | null,
        payment_method_id?: string | null,
        backup_flag?: string | null,
      } | null,
      order_id?: string | null,
      cancelled_reason?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetAvailableDeliveryDateInCartQueryVariables = {
  input: getAvailableDeliveryDateInCartInput,
};

export type GetAvailableDeliveryDateInCartQuery = {
  getAvailableDeliveryDateInCart?:  {
    __typename: "getAvailableDeliveryDate",
    available_delivery_date?: Array< string | null > | null,
    remove_product_for_more_delivery_date?:  {
      __typename: "remove_product_for_more_delivery_date",
      PK?: string | null,
      SK?: string | null,
      inventory_policy?: string | null,
    } | null,
    out_of_stock_product?:  Array< {
      __typename: "out_of_stock_product",
      PK?: string | null,
      SK?: string | null,
      date?: string | null,
      current_stock?: number | null,
      stock_unit?: string | null,
      product_type?: string | null,
    } | null > | null,
  } | null,
};

export type GetAvailableDeliveryDateInOrderQueryVariables = {
  input: getAvailableDeliveryDateInOrderInput,
};

export type GetAvailableDeliveryDateInOrderQuery = {
  getAvailableDeliveryDateInOrder?:  {
    __typename: "getAvailableDeliveryDate",
    available_delivery_date?: Array< string | null > | null,
    remove_product_for_more_delivery_date?:  {
      __typename: "remove_product_for_more_delivery_date",
      PK?: string | null,
      SK?: string | null,
      inventory_policy?: string | null,
    } | null,
    out_of_stock_product?:  Array< {
      __typename: "out_of_stock_product",
      PK?: string | null,
      SK?: string | null,
      date?: string | null,
      current_stock?: number | null,
      stock_unit?: string | null,
      product_type?: string | null,
    } | null > | null,
  } | null,
};

export type ListAllSubscriptionsQueryVariables = {
  input: listAllSubscriptionsInput,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAllSubscriptionsQuery = {
  listAllSubscriptions?:  {
    __typename: "subscriptionConnection",
    subscriptions?:  Array< {
      __typename: "subscription",
      user_id?: string | null,
      created_at?: string | null,
      subscription_id?: string | null,
      internal_subscription_id?: string | null,
      product_count?: number | null,
      next_delivery_date?: string | null,
      subscription_frequency?: string | null,
      subscription_status?: string | null,
      next_payment_date?: string | null,
      type?: string | null,
      pricing_details?:  {
        __typename: "pricing_details",
        onetime_amount?: number | null,
        total_amount?: number | null,
        discount?: number | null,
        payable_amount?: number | null,
        onetime_delivery_charge?: number | null,
        recurring_delivery_charges?:  Array< {
          __typename: "recurring_delivery_charges",
          subscription_frequency?: string | null,
          recurring_amount?: number | null,
          delivery_charge?: number | null,
          recurring_total_amount?: number | null,
        } | null > | null,
      } | null,
      shipping_address?:  {
        __typename: "shipping_address_type",
        shipping_primary_phone?: string | null,
        shipping_secondary_phone?: string | null,
        shipping_state?: string | null,
        shipping_city?: string | null,
        cluster_id?: string | null,
        shipping_name?: string | null,
        default_flag?: string | null,
        shipping_postcode?: string | null,
        lat?: number | null,
        lng?: number | null,
        delivery_instructions?: string | null,
        shipping_address_line_1?: string | null,
        address_id?: string | null,
        shipping_email?: string | null,
        shipping_country?: string | null,
      } | null,
      snapshot_data?:  {
        __typename: "subscription_snapshot_type",
        homepage_media?:  {
          __typename: "snapshot_media_type",
          media_type?: string | null,
          media_url?: string | null,
          media_width?: string | null,
          media_height?: string | null,
        } | null,
        product_id?: string | null,
        product_name?: string | null,
        product_title?: string | null,
        card_brand?: string | null,
        last_4?: string | null,
        exp_month?: string | null,
        exp_year?: string | null,
        payment_method_type?: string | null,
        payment_method_id?: string | null,
        backup_flag?: string | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ListAllSubscriptionsAdminQueryVariables = {
  forward_flag?: forward_flag_enum | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAllSubscriptionsAdminQuery = {
  listAllSubscriptionsAdmin?:  {
    __typename: "subscriptionConnection",
    subscriptions?:  Array< {
      __typename: "subscription",
      user_id?: string | null,
      created_at?: string | null,
      subscription_id?: string | null,
      internal_subscription_id?: string | null,
      product_count?: number | null,
      next_delivery_date?: string | null,
      subscription_frequency?: string | null,
      subscription_status?: string | null,
      next_payment_date?: string | null,
      type?: string | null,
      pricing_details?:  {
        __typename: "pricing_details",
        onetime_amount?: number | null,
        total_amount?: number | null,
        discount?: number | null,
        payable_amount?: number | null,
        onetime_delivery_charge?: number | null,
        recurring_delivery_charges?:  Array< {
          __typename: "recurring_delivery_charges",
          subscription_frequency?: string | null,
          recurring_amount?: number | null,
          delivery_charge?: number | null,
          recurring_total_amount?: number | null,
        } | null > | null,
      } | null,
      shipping_address?:  {
        __typename: "shipping_address_type",
        shipping_primary_phone?: string | null,
        shipping_secondary_phone?: string | null,
        shipping_state?: string | null,
        shipping_city?: string | null,
        cluster_id?: string | null,
        shipping_name?: string | null,
        default_flag?: string | null,
        shipping_postcode?: string | null,
        lat?: number | null,
        lng?: number | null,
        delivery_instructions?: string | null,
        shipping_address_line_1?: string | null,
        address_id?: string | null,
        shipping_email?: string | null,
        shipping_country?: string | null,
      } | null,
      snapshot_data?:  {
        __typename: "subscription_snapshot_type",
        homepage_media?:  {
          __typename: "snapshot_media_type",
          media_type?: string | null,
          media_url?: string | null,
          media_width?: string | null,
          media_height?: string | null,
        } | null,
        product_id?: string | null,
        product_name?: string | null,
        product_title?: string | null,
        card_brand?: string | null,
        last_4?: string | null,
        exp_month?: string | null,
        exp_year?: string | null,
        payment_method_type?: string | null,
        payment_method_id?: string | null,
        backup_flag?: string | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ListAllSubscriptionByStatusAdminQueryVariables = {
  input: listAllSubscriptionByStatusAdminInput,
  forward_flag?: forward_flag_enum | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAllSubscriptionByStatusAdminQuery = {
  listAllSubscriptionByStatusAdmin?:  {
    __typename: "subscriptionConnection",
    subscriptions?:  Array< {
      __typename: "subscription",
      user_id?: string | null,
      created_at?: string | null,
      subscription_id?: string | null,
      internal_subscription_id?: string | null,
      product_count?: number | null,
      next_delivery_date?: string | null,
      subscription_frequency?: string | null,
      subscription_status?: string | null,
      next_payment_date?: string | null,
      type?: string | null,
      pricing_details?:  {
        __typename: "pricing_details",
        onetime_amount?: number | null,
        total_amount?: number | null,
        discount?: number | null,
        payable_amount?: number | null,
        onetime_delivery_charge?: number | null,
        recurring_delivery_charges?:  Array< {
          __typename: "recurring_delivery_charges",
          subscription_frequency?: string | null,
          recurring_amount?: number | null,
          delivery_charge?: number | null,
          recurring_total_amount?: number | null,
        } | null > | null,
      } | null,
      shipping_address?:  {
        __typename: "shipping_address_type",
        shipping_primary_phone?: string | null,
        shipping_secondary_phone?: string | null,
        shipping_state?: string | null,
        shipping_city?: string | null,
        cluster_id?: string | null,
        shipping_name?: string | null,
        default_flag?: string | null,
        shipping_postcode?: string | null,
        lat?: number | null,
        lng?: number | null,
        delivery_instructions?: string | null,
        shipping_address_line_1?: string | null,
        address_id?: string | null,
        shipping_email?: string | null,
        shipping_country?: string | null,
      } | null,
      snapshot_data?:  {
        __typename: "subscription_snapshot_type",
        homepage_media?:  {
          __typename: "snapshot_media_type",
          media_type?: string | null,
          media_url?: string | null,
          media_width?: string | null,
          media_height?: string | null,
        } | null,
        product_id?: string | null,
        product_name?: string | null,
        product_title?: string | null,
        card_brand?: string | null,
        last_4?: string | null,
        exp_month?: string | null,
        exp_year?: string | null,
        payment_method_type?: string | null,
        payment_method_id?: string | null,
        backup_flag?: string | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ListSubscriptionByStatusQueryVariables = {
  input: listSubscriptionByStatusInput,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSubscriptionByStatusQuery = {
  listSubscriptionByStatus?:  {
    __typename: "subscriptionConnection",
    subscriptions?:  Array< {
      __typename: "subscription",
      user_id?: string | null,
      created_at?: string | null,
      subscription_id?: string | null,
      internal_subscription_id?: string | null,
      product_count?: number | null,
      next_delivery_date?: string | null,
      subscription_frequency?: string | null,
      subscription_status?: string | null,
      next_payment_date?: string | null,
      type?: string | null,
      pricing_details?:  {
        __typename: "pricing_details",
        onetime_amount?: number | null,
        total_amount?: number | null,
        discount?: number | null,
        payable_amount?: number | null,
        onetime_delivery_charge?: number | null,
        recurring_delivery_charges?:  Array< {
          __typename: "recurring_delivery_charges",
          subscription_frequency?: string | null,
          recurring_amount?: number | null,
          delivery_charge?: number | null,
          recurring_total_amount?: number | null,
        } | null > | null,
      } | null,
      shipping_address?:  {
        __typename: "shipping_address_type",
        shipping_primary_phone?: string | null,
        shipping_secondary_phone?: string | null,
        shipping_state?: string | null,
        shipping_city?: string | null,
        cluster_id?: string | null,
        shipping_name?: string | null,
        default_flag?: string | null,
        shipping_postcode?: string | null,
        lat?: number | null,
        lng?: number | null,
        delivery_instructions?: string | null,
        shipping_address_line_1?: string | null,
        address_id?: string | null,
        shipping_email?: string | null,
        shipping_country?: string | null,
      } | null,
      snapshot_data?:  {
        __typename: "subscription_snapshot_type",
        homepage_media?:  {
          __typename: "snapshot_media_type",
          media_type?: string | null,
          media_url?: string | null,
          media_width?: string | null,
          media_height?: string | null,
        } | null,
        product_id?: string | null,
        product_name?: string | null,
        product_title?: string | null,
        card_brand?: string | null,
        last_4?: string | null,
        exp_month?: string | null,
        exp_year?: string | null,
        payment_method_type?: string | null,
        payment_method_id?: string | null,
        backup_flag?: string | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ListSubscriptionItemsQueryVariables = {
  input: listSubscriptionItemsInput,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSubscriptionItemsQuery = {
  listSubscriptionItems?:  {
    __typename: "subscriptionItemsConnection",
    nextToken?: string | null,
    subscriptionItems?:  Array< {
      __typename: "subscriptionItem",
      corner_image_url?: string | null,
      on_sale_flag?: string | null,
      email_media?:  {
        __typename: "snapshot_media_type",
        media_type?: string | null,
        media_url?: string | null,
        media_width?: string | null,
        media_height?: string | null,
      } | null,
      on_sale_from?: string | null,
      invoice_media?:  {
        __typename: "snapshot_media_type",
        media_type?: string | null,
        media_url?: string | null,
        media_width?: string | null,
        media_height?: string | null,
      } | null,
      item_count?: number | null,
      percentage_off?: number | null,
      product_id?: string | null,
      vendor?: string | null,
      weight?: string | null,
      origin_country?: string | null,
      price_unit?: string | null,
      ship_from?: string | null,
      subscription_frequency_details?:  {
        __typename: "subscription_frequency_details_type",
        position?: number | null,
        frequency_title?: string | null,
        frequency_name?: string | null,
      } | null,
      on_sale_to?: string | null,
      on_sale_maximum_quantity?: number | null,
      subscription_flag?: string | null,
      price_per_unit?: number | null,
      product_title?: string | null,
      availability_range?: number | null,
      amount_saved?: number | null,
      product_name?: string | null,
      stock_flag?: string | null,
      available_on_subscription_flag?: string | null,
      sale_price?: number | null,
      inventory_policy?: string | null,
      base_price?: number | null,
      categories?: Array< string | null > | null,
      product_type?: string | null,
      homepage_media?:  {
        __typename: "snapshot_media_type",
        media_type?: string | null,
        media_url?: string | null,
        media_width?: string | null,
        media_height?: string | null,
      } | null,
      sub_categories?: Array< string | null > | null,
    } | null > | null,
  } | null,
};

export type GetSubscriptionPaymentMethodQueryVariables = {
  input: listSubscriptionItemsInput,
};

export type GetSubscriptionPaymentMethodQuery = {
  getSubscriptionPaymentMethod?:  {
    __typename: "paymentMethodConnection",
    paymentMethods?:  Array< {
      __typename: "paymentMethod",
      payment_method_id?: string | null,
      status?: string | null,
      default_flag?: string | null,
      backup_flag?: string | null,
      payment_method_type?: string | null,
      card_brand?: string | null,
      last_4?: string | null,
      exp_month?: number | null,
      exp_year?: number | null,
      cardholder_name?: string | null,
      billing_address_line_1?: string | null,
      billing_address_line_2?: string | null,
      billing_city?: string | null,
      billing_country?: string | null,
      billing_email?: string | null,
      billing_postcode?: string | null,
      billing_primary_phone?: string | null,
      billing_secondary_phone?: string | null,
      billing_state?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetSubscriptionQueryVariables = {
  input: getAndDeleteSubscriptionInput,
};

export type GetSubscriptionQuery = {
  getSubscription?:  {
    __typename: "subscription",
    user_id?: string | null,
    created_at?: string | null,
    subscription_id?: string | null,
    internal_subscription_id?: string | null,
    product_count?: number | null,
    next_delivery_date?: string | null,
    subscription_frequency?: string | null,
    subscription_status?: string | null,
    next_payment_date?: string | null,
    type?: string | null,
    pricing_details?:  {
      __typename: "pricing_details",
      onetime_amount?: number | null,
      total_amount?: number | null,
      discount?: number | null,
      payable_amount?: number | null,
      onetime_delivery_charge?: number | null,
      recurring_delivery_charges?:  Array< {
        __typename: "recurring_delivery_charges",
        subscription_frequency?: string | null,
        recurring_amount?: number | null,
        delivery_charge?: number | null,
        recurring_total_amount?: number | null,
      } | null > | null,
    } | null,
    shipping_address?:  {
      __typename: "shipping_address_type",
      shipping_primary_phone?: string | null,
      shipping_secondary_phone?: string | null,
      shipping_state?: string | null,
      shipping_city?: string | null,
      cluster_id?: string | null,
      shipping_name?: string | null,
      default_flag?: string | null,
      shipping_postcode?: string | null,
      lat?: number | null,
      lng?: number | null,
      delivery_instructions?: string | null,
      shipping_address_line_1?: string | null,
      address_id?: string | null,
      shipping_email?: string | null,
      shipping_country?: string | null,
    } | null,
    snapshot_data?:  {
      __typename: "subscription_snapshot_type",
      homepage_media?:  {
        __typename: "snapshot_media_type",
        media_type?: string | null,
        media_url?: string | null,
        media_width?: string | null,
        media_height?: string | null,
      } | null,
      product_id?: string | null,
      product_name?: string | null,
      product_title?: string | null,
      card_brand?: string | null,
      last_4?: string | null,
      exp_month?: string | null,
      exp_year?: string | null,
      payment_method_type?: string | null,
      payment_method_id?: string | null,
      backup_flag?: string | null,
    } | null,
  } | null,
};

export type GetTransactionQueryVariables = {
  input: getAndDeleteTransactionInput,
};

export type GetTransactionQuery = {
  getTransaction?:  {
    __typename: "transaction",
    transaction_id?: string | null,
    transaction_status?: string | null,
    payment_amount?: number | null,
    failed_reason?: string | null,
    order_id?: string | null,
    payment_id?: string | null,
    created_at?: string | null,
    payment_method_details?:  {
      __typename: "payment_method_details",
      payment_method_type?: string | null,
      exp_month?: number | null,
      exp_year?: number | null,
      last_4?: string | null,
      billing_state?: string | null,
      billing_email?: string | null,
      card_brand?: string | null,
      billing_address_line_1?: string | null,
      default_flag?: string | null,
      billing_primary_phone?: string | null,
      billing_country?: string | null,
      cardholder_name?: string | null,
      billing_city?: string | null,
      payment_method_id?: string | null,
      billing_postcode?: string | null,
      backup_flag?: string | null,
      status?: string | null,
    } | null,
  } | null,
};

export type ListAllTransactionsQueryVariables = {
  input: listAllTransactionsInput,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAllTransactionsQuery = {
  listAllTransactions?:  {
    __typename: "transactionConnection",
    transactions?:  Array< {
      __typename: "transaction",
      transaction_id?: string | null,
      transaction_status?: string | null,
      payment_amount?: number | null,
      failed_reason?: string | null,
      order_id?: string | null,
      payment_id?: string | null,
      created_at?: string | null,
      payment_method_details?:  {
        __typename: "payment_method_details",
        payment_method_type?: string | null,
        exp_month?: number | null,
        exp_year?: number | null,
        last_4?: string | null,
        billing_state?: string | null,
        billing_email?: string | null,
        card_brand?: string | null,
        billing_address_line_1?: string | null,
        default_flag?: string | null,
        billing_primary_phone?: string | null,
        billing_country?: string | null,
        cardholder_name?: string | null,
        billing_city?: string | null,
        payment_method_id?: string | null,
        billing_postcode?: string | null,
        backup_flag?: string | null,
        status?: string | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ListTransactionByStatusQueryVariables = {
  input: listTransactionByStatusInput,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTransactionByStatusQuery = {
  listTransactionByStatus?:  {
    __typename: "transactionConnection",
    transactions?:  Array< {
      __typename: "transaction",
      transaction_id?: string | null,
      transaction_status?: string | null,
      payment_amount?: number | null,
      failed_reason?: string | null,
      order_id?: string | null,
      payment_id?: string | null,
      created_at?: string | null,
      payment_method_details?:  {
        __typename: "payment_method_details",
        payment_method_type?: string | null,
        exp_month?: number | null,
        exp_year?: number | null,
        last_4?: string | null,
        billing_state?: string | null,
        billing_email?: string | null,
        card_brand?: string | null,
        billing_address_line_1?: string | null,
        default_flag?: string | null,
        billing_primary_phone?: string | null,
        billing_country?: string | null,
        cardholder_name?: string | null,
        billing_city?: string | null,
        payment_method_id?: string | null,
        billing_postcode?: string | null,
        backup_flag?: string | null,
        status?: string | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetProductQueryVariables = {
  input: getProductInput,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetProductQuery = {
  getProduct?:  {
    __typename: "productConnection",
    products?:  Array< {
      __typename: "product",
      main_product_flag?: string | null,
      product_id: string,
      product_type?: string | null,
      categories?: Array< string | null > | null,
      sub_categories?: Array< string | null > | null,
      variations?: Array< string | null > | null,
      best_selling_flag?: string | null,
      featured_flag?: string | null,
      product_name?: string | null,
      published_scope?: string | null,
      average_rating_stars?: number | null,
      product_title?: string | null,
      short_description?: string | null,
      long_description?: string | null,
      vendor?: string | null,
      ship_from?: string | null,
      available_on_subscription_flag?: string | null,
      subscription_frequency_details?:  Array< {
        __typename: "subscription_frequency_details_type",
        position?: number | null,
        frequency_title?: string | null,
        frequency_name?: string | null,
      } | null > | null,
      rating_details?:  {
        __typename: "rating_details_type",
        total_rating_count?: number | null,
        five_start_rating_count?: number | null,
        three_star_rating_count?: number | null,
        one_star_rating_count?: number | null,
        two_star_rating_count?: number | null,
        four_start_rating_count?: number | null,
      } | null,
      media_details?:  Array< {
        __typename: "media_details_type",
        position?: number | null,
        media_type?: string | null,
        media_url?: string | null,
        media_height?: string | null,
        media_width?: string | null,
      } | null > | null,
      stock_flag?: string | null,
      weight?: string | null,
      homepage_media?:  {
        __typename: "snapshot_media_type",
        media_type?: string | null,
        media_url?: string | null,
        media_width?: string | null,
        media_height?: string | null,
      } | null,
      on_sale_flag?: string | null,
      on_sale_to?: string | null,
      on_sale_from?: string | null,
      on_sale_maximum_quantity?: string | null,
      amount_saved?: number | null,
      percentage_off?: number | null,
      sale_price?: number | null,
      base_price?: number | null,
      price_unit?: string | null,
      price_per_unit?: number | null,
      origin_country?: string | null,
      corner_image_url?: string | null,
      // only for product creation
      status?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ListAllSubscriptionProductsQueryVariables = {
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAllSubscriptionProductsQuery = {
  listAllSubscriptionProducts?:  {
    __typename: "productConnection",
    products?:  Array< {
      __typename: "product",
      main_product_flag?: string | null,
      product_id: string,
      product_type?: string | null,
      categories?: Array< string | null > | null,
      sub_categories?: Array< string | null > | null,
      variations?: Array< string | null > | null,
      best_selling_flag?: string | null,
      featured_flag?: string | null,
      product_name?: string | null,
      published_scope?: string | null,
      average_rating_stars?: number | null,
      product_title?: string | null,
      short_description?: string | null,
      long_description?: string | null,
      vendor?: string | null,
      ship_from?: string | null,
      available_on_subscription_flag?: string | null,
      subscription_frequency_details?:  Array< {
        __typename: "subscription_frequency_details_type",
        position?: number | null,
        frequency_title?: string | null,
        frequency_name?: string | null,
      } | null > | null,
      rating_details?:  {
        __typename: "rating_details_type",
        total_rating_count?: number | null,
        five_start_rating_count?: number | null,
        three_star_rating_count?: number | null,
        one_star_rating_count?: number | null,
        two_star_rating_count?: number | null,
        four_start_rating_count?: number | null,
      } | null,
      media_details?:  Array< {
        __typename: "media_details_type",
        position?: number | null,
        media_type?: string | null,
        media_url?: string | null,
        media_height?: string | null,
        media_width?: string | null,
      } | null > | null,
      stock_flag?: string | null,
      weight?: string | null,
      homepage_media?:  {
        __typename: "snapshot_media_type",
        media_type?: string | null,
        media_url?: string | null,
        media_width?: string | null,
        media_height?: string | null,
      } | null,
      on_sale_flag?: string | null,
      on_sale_to?: string | null,
      on_sale_from?: string | null,
      on_sale_maximum_quantity?: string | null,
      amount_saved?: number | null,
      percentage_off?: number | null,
      sale_price?: number | null,
      base_price?: number | null,
      price_unit?: string | null,
      price_per_unit?: number | null,
      origin_country?: string | null,
      corner_image_url?: string | null,
      // only for product creation
      status?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ListFeaturedProductsQueryVariables = {
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFeaturedProductsQuery = {
  listFeaturedProducts?:  {
    __typename: "productFeaturedConnection",
    products?:  Array< {
      __typename: "product",
      main_product_flag?: string | null,
      product_id: string,
      product_type?: string | null,
      categories?: Array< string | null > | null,
      sub_categories?: Array< string | null > | null,
      variations?: Array< string | null > | null,
      best_selling_flag?: string | null,
      featured_flag?: string | null,
      product_name?: string | null,
      published_scope?: string | null,
      average_rating_stars?: number | null,
      product_title?: string | null,
      short_description?: string | null,
      long_description?: string | null,
      vendor?: string | null,
      ship_from?: string | null,
      available_on_subscription_flag?: string | null,
      subscription_frequency_details?:  Array< {
        __typename: "subscription_frequency_details_type",
        position?: number | null,
        frequency_title?: string | null,
        frequency_name?: string | null,
      } | null > | null,
      rating_details?:  {
        __typename: "rating_details_type",
        total_rating_count?: number | null,
        five_start_rating_count?: number | null,
        three_star_rating_count?: number | null,
        one_star_rating_count?: number | null,
        two_star_rating_count?: number | null,
        four_start_rating_count?: number | null,
      } | null,
      media_details?:  Array< {
        __typename: "media_details_type",
        position?: number | null,
        media_type?: string | null,
        media_url?: string | null,
        media_height?: string | null,
        media_width?: string | null,
      } | null > | null,
      stock_flag?: string | null,
      weight?: string | null,
      homepage_media?:  {
        __typename: "snapshot_media_type",
        media_type?: string | null,
        media_url?: string | null,
        media_width?: string | null,
        media_height?: string | null,
      } | null,
      on_sale_flag?: string | null,
      on_sale_to?: string | null,
      on_sale_from?: string | null,
      on_sale_maximum_quantity?: string | null,
      amount_saved?: number | null,
      percentage_off?: number | null,
      sale_price?: number | null,
      base_price?: number | null,
      price_unit?: string | null,
      price_per_unit?: number | null,
      origin_country?: string | null,
      corner_image_url?: string | null,
      // only for product creation
      status?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ListAllBuyAgainProductsQueryVariables = {
  input?: listAllBuyAgainProductsInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAllBuyAgainProductsQuery = {
  listAllBuyAgainProducts?:  {
    __typename: "productFeaturedConnection",
    products?:  Array< {
      __typename: "product",
      main_product_flag?: string | null,
      product_id: string,
      product_type?: string | null,
      categories?: Array< string | null > | null,
      sub_categories?: Array< string | null > | null,
      variations?: Array< string | null > | null,
      best_selling_flag?: string | null,
      featured_flag?: string | null,
      product_name?: string | null,
      published_scope?: string | null,
      average_rating_stars?: number | null,
      product_title?: string | null,
      short_description?: string | null,
      long_description?: string | null,
      vendor?: string | null,
      ship_from?: string | null,
      available_on_subscription_flag?: string | null,
      subscription_frequency_details?:  Array< {
        __typename: "subscription_frequency_details_type",
        position?: number | null,
        frequency_title?: string | null,
        frequency_name?: string | null,
      } | null > | null,
      rating_details?:  {
        __typename: "rating_details_type",
        total_rating_count?: number | null,
        five_start_rating_count?: number | null,
        three_star_rating_count?: number | null,
        one_star_rating_count?: number | null,
        two_star_rating_count?: number | null,
        four_start_rating_count?: number | null,
      } | null,
      media_details?:  Array< {
        __typename: "media_details_type",
        position?: number | null,
        media_type?: string | null,
        media_url?: string | null,
        media_height?: string | null,
        media_width?: string | null,
      } | null > | null,
      stock_flag?: string | null,
      weight?: string | null,
      homepage_media?:  {
        __typename: "snapshot_media_type",
        media_type?: string | null,
        media_url?: string | null,
        media_width?: string | null,
        media_height?: string | null,
      } | null,
      on_sale_flag?: string | null,
      on_sale_to?: string | null,
      on_sale_from?: string | null,
      on_sale_maximum_quantity?: string | null,
      amount_saved?: number | null,
      percentage_off?: number | null,
      sale_price?: number | null,
      base_price?: number | null,
      price_unit?: string | null,
      price_per_unit?: number | null,
      origin_country?: string | null,
      corner_image_url?: string | null,
      // only for product creation
      status?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ListAllProductsQueryVariables = {
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAllProductsQuery = {
  listAllProducts?:  {
    __typename: "productConnection",
    products?:  Array< {
      __typename: "product",
      main_product_flag?: string | null,
      product_id: string,
      product_type?: string | null,
      categories?: Array< string | null > | null,
      sub_categories?: Array< string | null > | null,
      variations?: Array< string | null > | null,
      best_selling_flag?: string | null,
      featured_flag?: string | null,
      product_name?: string | null,
      published_scope?: string | null,
      average_rating_stars?: number | null,
      product_title?: string | null,
      short_description?: string | null,
      long_description?: string | null,
      vendor?: string | null,
      ship_from?: string | null,
      available_on_subscription_flag?: string | null,
      subscription_frequency_details?:  Array< {
        __typename: "subscription_frequency_details_type",
        position?: number | null,
        frequency_title?: string | null,
        frequency_name?: string | null,
      } | null > | null,
      rating_details?:  {
        __typename: "rating_details_type",
        total_rating_count?: number | null,
        five_start_rating_count?: number | null,
        three_star_rating_count?: number | null,
        one_star_rating_count?: number | null,
        two_star_rating_count?: number | null,
        four_start_rating_count?: number | null,
      } | null,
      media_details?:  Array< {
        __typename: "media_details_type",
        position?: number | null,
        media_type?: string | null,
        media_url?: string | null,
        media_height?: string | null,
        media_width?: string | null,
      } | null > | null,
      stock_flag?: string | null,
      weight?: string | null,
      homepage_media?:  {
        __typename: "snapshot_media_type",
        media_type?: string | null,
        media_url?: string | null,
        media_width?: string | null,
        media_height?: string | null,
      } | null,
      on_sale_flag?: string | null,
      on_sale_to?: string | null,
      on_sale_from?: string | null,
      on_sale_maximum_quantity?: string | null,
      amount_saved?: number | null,
      percentage_off?: number | null,
      sale_price?: number | null,
      base_price?: number | null,
      price_unit?: string | null,
      price_per_unit?: number | null,
      origin_country?: string | null,
      corner_image_url?: string | null,
      // only for product creation
      status?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ListAllCategoryProductsQueryVariables = {
  input?: listAllCategoryProductsInput | null,
  limit?: number | null,
  sortBy?: sortByEnum | null,
  ascendingFlag?: string | null,
  nextToken?: string | null,
};

export type ListAllCategoryProductsQuery = {
  listAllCategoryProducts?:  {
    __typename: "productConnection",
    products?:  Array< {
      __typename: "product",
      main_product_flag?: string | null,
      product_id: string,
      product_type?: string | null,
      categories?: Array< string | null > | null,
      sub_categories?: Array< string | null > | null,
      variations?: Array< string | null > | null,
      best_selling_flag?: string | null,
      featured_flag?: string | null,
      product_name?: string | null,
      published_scope?: string | null,
      average_rating_stars?: number | null,
      product_title?: string | null,
      short_description?: string | null,
      long_description?: string | null,
      vendor?: string | null,
      ship_from?: string | null,
      available_on_subscription_flag?: string | null,
      subscription_frequency_details?:  Array< {
        __typename: "subscription_frequency_details_type",
        position?: number | null,
        frequency_title?: string | null,
        frequency_name?: string | null,
      } | null > | null,
      rating_details?:  {
        __typename: "rating_details_type",
        total_rating_count?: number | null,
        five_start_rating_count?: number | null,
        three_star_rating_count?: number | null,
        one_star_rating_count?: number | null,
        two_star_rating_count?: number | null,
        four_start_rating_count?: number | null,
      } | null,
      media_details?:  Array< {
        __typename: "media_details_type",
        position?: number | null,
        media_type?: string | null,
        media_url?: string | null,
        media_height?: string | null,
        media_width?: string | null,
      } | null > | null,
      stock_flag?: string | null,
      weight?: string | null,
      homepage_media?:  {
        __typename: "snapshot_media_type",
        media_type?: string | null,
        media_url?: string | null,
        media_width?: string | null,
        media_height?: string | null,
      } | null,
      on_sale_flag?: string | null,
      on_sale_to?: string | null,
      on_sale_from?: string | null,
      on_sale_maximum_quantity?: string | null,
      amount_saved?: number | null,
      percentage_off?: number | null,
      sale_price?: number | null,
      base_price?: number | null,
      price_unit?: string | null,
      price_per_unit?: number | null,
      origin_country?: string | null,
      corner_image_url?: string | null,
      // only for product creation
      status?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ListAllSubCategoryProductsQueryVariables = {
  input?: listAllSubCategoryProductsInput | null,
  limit?: number | null,
  sortBy?: sortByEnum | null,
  ascendingFlag?: string | null,
  nextToken?: string | null,
};

export type ListAllSubCategoryProductsQuery = {
  listAllSubCategoryProducts?:  {
    __typename: "productConnection",
    products?:  Array< {
      __typename: "product",
      main_product_flag?: string | null,
      product_id: string,
      product_type?: string | null,
      categories?: Array< string | null > | null,
      sub_categories?: Array< string | null > | null,
      variations?: Array< string | null > | null,
      best_selling_flag?: string | null,
      featured_flag?: string | null,
      product_name?: string | null,
      published_scope?: string | null,
      average_rating_stars?: number | null,
      product_title?: string | null,
      short_description?: string | null,
      long_description?: string | null,
      vendor?: string | null,
      ship_from?: string | null,
      available_on_subscription_flag?: string | null,
      subscription_frequency_details?:  Array< {
        __typename: "subscription_frequency_details_type",
        position?: number | null,
        frequency_title?: string | null,
        frequency_name?: string | null,
      } | null > | null,
      rating_details?:  {
        __typename: "rating_details_type",
        total_rating_count?: number | null,
        five_start_rating_count?: number | null,
        three_star_rating_count?: number | null,
        one_star_rating_count?: number | null,
        two_star_rating_count?: number | null,
        four_start_rating_count?: number | null,
      } | null,
      media_details?:  Array< {
        __typename: "media_details_type",
        position?: number | null,
        media_type?: string | null,
        media_url?: string | null,
        media_height?: string | null,
        media_width?: string | null,
      } | null > | null,
      stock_flag?: string | null,
      weight?: string | null,
      homepage_media?:  {
        __typename: "snapshot_media_type",
        media_type?: string | null,
        media_url?: string | null,
        media_width?: string | null,
        media_height?: string | null,
      } | null,
      on_sale_flag?: string | null,
      on_sale_to?: string | null,
      on_sale_from?: string | null,
      on_sale_maximum_quantity?: string | null,
      amount_saved?: number | null,
      percentage_off?: number | null,
      sale_price?: number | null,
      base_price?: number | null,
      price_unit?: string | null,
      price_per_unit?: number | null,
      origin_country?: string | null,
      corner_image_url?: string | null,
      // only for product creation
      status?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetCategoryQueryVariables = {
  input: getAndDeleteCategoryInput,
};

export type GetCategoryQuery = {
  getCategory?:  {
    __typename: "category",
    priority?: number | null,
    category_id?: string | null,
    category_name?: string | null,
    category_title?: string | null,
    description?: string | null,
    media_url?: string | null,
    media_type?: string | null,
    media_height?: string | null,
    media_width?: string | null,
    shop_media?:  {
      __typename: "shopMedia",
      media_height?: string | null,
      text_color?: string | null,
      background_color?: string | null,
      media_width?: string | null,
      media_url?: string | null,
      media_type?: string | null,
    } | null,
    status?: string | null,
  } | null,
};

export type ListAllCategoriesQueryVariables = {
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAllCategoriesQuery = {
  listAllCategories?:  {
    __typename: "categoryConnection",
    categories?:  Array< {
      __typename: "category",
      priority?: number | null,
      category_id?: string | null,
      category_name?: string | null,
      category_title?: string | null,
      description?: string | null,
      media_url?: string | null,
      media_type?: string | null,
      media_height?: string | null,
      media_width?: string | null,
      shop_media?:  {
        __typename: "shopMedia",
        media_height?: string | null,
        text_color?: string | null,
        background_color?: string | null,
        media_width?: string | null,
        media_url?: string | null,
        media_type?: string | null,
      } | null,
      status?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetTestimonialQueryVariables = {
  input?: getAndDeleteTestimonialInput | null,
};

export type GetTestimonialQuery = {
  getTestimonial?:  {
    __typename: "testimonial",
    rating_flag?: string | null,
    rating_stars?: number | null,
    testimonial_flag?: string | null,
    user_avtar_url?: string | null,
    position?: number | null,
    full_name?: string | null,
    testimonial_subject?: string | null,
    testimonial_detail?: string | null,
  } | null,
};

export type ListAllTestimonialsQueryVariables = {
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAllTestimonialsQuery = {
  listAllTestimonials?:  {
    __typename: "testimonialConnection",
    testimonials?:  Array< {
      __typename: "testimonial",
      rating_flag?: string | null,
      rating_stars?: number | null,
      testimonial_flag?: string | null,
      user_avtar_url?: string | null,
      position?: number | null,
      full_name?: string | null,
      testimonial_subject?: string | null,
      testimonial_detail?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ListFeaturedTestimonialsQueryVariables = {
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFeaturedTestimonialsQuery = {
  listFeaturedTestimonials?:  {
    __typename: "testimonialConnection",
    testimonials?:  Array< {
      __typename: "testimonial",
      rating_flag?: string | null,
      rating_stars?: number | null,
      testimonial_flag?: string | null,
      user_avtar_url?: string | null,
      position?: number | null,
      full_name?: string | null,
      testimonial_subject?: string | null,
      testimonial_detail?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetNewsLetterSubscriptionQueryVariables = {
  input: getAndDeleteNewsLetterInput,
};

export type GetNewsLetterSubscriptionQuery = {
  getNewsLetterSubscription?:  {
    __typename: "newsLetter",
    news_letter_id?: string | null,
    email: string,
    platform: string,
  } | null,
};

export type GetAllNewsLetterSubscriptionsQueryVariables = {
  input: getAllNewsLetterInput,
};

export type GetAllNewsLetterSubscriptionsQuery = {
  getAllNewsLetterSubscriptions?:  {
    __typename: "newsLetterConnection",
    newsLetters?:  Array< {
      __typename: "newsLetter",
      news_letter_id?: string | null,
      email: string,
      platform: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetQnaQueryVariables = {
  input: getAndDeleteQnaInput,
};

export type GetQnaQuery = {
  getQna?:  {
    __typename: "qna",
    qna_id?: string | null,
    product_id?: string | null,
    question?: string | null,
    answer?: string | null,
    position?: number | null,
    answer_by?: string | null,
  } | null,
};

export type ListAllQnasQueryVariables = {
  input: listAllQnasInput,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAllQnasQuery = {
  listAllQnas?:  {
    __typename: "qnaConnection",
    qnas?:  Array< {
      __typename: "qna",
      qna_id?: string | null,
      product_id?: string | null,
      question?: string | null,
      answer?: string | null,
      position?: number | null,
      answer_by?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ListAllReviewsQueryVariables = {
  input: listAllReviewsInput,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAllReviewsQuery = {
  listAllReviews?:  {
    __typename: "reviewConnection",
    reviews?:  Array< {
      __typename: "review",
      review_id?: string | null,
      product_name?: string | null,
      rating_flag?: string | null,
      rating_stars?: number | null,
      review_flag?: string | null,
      user_id?: string | null,
      user_avtar_url?: string | null,
      full_name?: string | null,
      review_subject?: string | null,
      helpful_flag?: string | null,
      helpful_count?: number | null,
      review_detail?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetCommentQueryVariables = {
  input: getAndDeleteCommentInput,
};

export type GetCommentQuery = {
  getComment?:  {
    __typename: "comment",
    PK: string,
    SK: string,
    comment_id: string,
    email?: string | null,
    qna_id?: string | null,
    user_id?: string | null,
    uuid?: string | null,
    user_avtar_url?: string | null,
    comment?: string | null,
    commented_by?: string | null,
    commented_at?: string | null,
    status?: string | null,
    position?: number | null,
    modified_by?: string | null,
    modified_at?: string | null,
  } | null,
};

export type GetAllCommentsQueryVariables = {
  input: getAllCommentInput,
  limit?: number | null,
  nextToken?: string | null,
};

export type GetAllCommentsQuery = {
  getAllComments?:  {
    __typename: "commentConnection",
    comments?:  Array< {
      __typename: "comment",
      PK: string,
      SK: string,
      comment_id: string,
      email?: string | null,
      qna_id?: string | null,
      user_id?: string | null,
      uuid?: string | null,
      user_avtar_url?: string | null,
      comment?: string | null,
      commented_by?: string | null,
      commented_at?: string | null,
      status?: string | null,
      position?: number | null,
      modified_by?: string | null,
      modified_at?: string | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetClusterQueryVariables = {
  input: getAndDeleteClusterInput,
};

export type GetClusterQuery = {
  getCluster?:  {
    __typename: "cluster",
    PK: string,
    SK: string,
    cluster_id?: string | null,
    cluster_name?: string | null,
    postcode?: Array< string | null > | null,
    description?: string | null,
    cities?: Array< string | null > | null,
    coordinates_format_1?: string | null,
    coordinates_format_2?: string | null,
    delivery_charges?: string | null,
    delivery_days?: Array< string | null > | null,
    created_by?: string | null,
    created_at?: string | null,
    modified_by?: string | null,
    modified_at?: string | null,
    available_frequency?: Array< string | null > | null,
  } | null,
};

export type GetAllClustersQueryVariables = {
  input: getAllClusterInput,
};

export type GetAllClustersQuery = {
  getAllClusters?:  {
    __typename: "clusterConnection",
    clusters?:  Array< {
      __typename: "cluster",
      PK: string,
      SK: string,
      cluster_id?: string | null,
      cluster_name?: string | null,
      postcode?: Array< string | null > | null,
      description?: string | null,
      cities?: Array< string | null > | null,
      coordinates_format_1?: string | null,
      coordinates_format_2?: string | null,
      delivery_charges?: string | null,
      delivery_days?: Array< string | null > | null,
      created_by?: string | null,
      created_at?: string | null,
      modified_by?: string | null,
      modified_at?: string | null,
      available_frequency?: Array< string | null > | null,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetInventoryQueryVariables = {
  input: getAndDeleteInventoryInput,
};

export type GetInventoryQuery = {
  getInventory?:  {
    __typename: "inventory",
    PK?: string | null,
    SK?: string | null,
    product_type?: string | null,
    inventory_id?: string | null,
    product_id?: string | null,
    variation_id?: string | null,
    product_name?: string | null,
    variation_name?: string | null,
    variation_description?: string | null,
    inventory_description?: string | null,
    date?: string | null,
    day?: string | null,
    sku?: string | null,
    total_stock?: number | null,
    current_stock?: number | null,
    purchased_stock?: number | null,
    stock_unit?: string | null,
    created_by?: string | null,
    created_at?: string | null,
    modified_by?: string | null,
    modified_at?: string | null,
  } | null,
};

export type GetAllInventoriesQueryVariables = {
  input: getAndDeleteInventoryInput,
};

export type GetAllInventoriesQuery = {
  getAllInventories?:  {
    __typename: "inventoryConnection",
    inventories?:  Array< {
      __typename: "inventory",
      PK?: string | null,
      SK?: string | null,
      product_type?: string | null,
      inventory_id?: string | null,
      product_id?: string | null,
      variation_id?: string | null,
      product_name?: string | null,
      variation_name?: string | null,
      variation_description?: string | null,
      inventory_description?: string | null,
      date?: string | null,
      day?: string | null,
      sku?: string | null,
      total_stock?: number | null,
      current_stock?: number | null,
      purchased_stock?: number | null,
      stock_unit?: string | null,
      created_by?: string | null,
      created_at?: string | null,
      modified_by?: string | null,
      modified_at?: string | null,
    } | null > | null,
  } | null,
};
