/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const productControlsByGSI1 = /* GraphQL */ `
  query ProductControlsByGSI1($PK: String!, $first: Int, $after: String) {
    ProductControlsByGSI1(PK: $PK, first: $first, after: $after) {
      items {
        PK
        SK
        best_selling_flag
        featured_flag
      }
      nextToken
    }
  }
`;
export const getUsers=/* Graphql*/ `
query GetUsers {
  listAllUserProfile {
    profiles {
      avatar_url
      email
      user_type
      user_id
      secondary_phone
      register_at
      provider
      primary_phone
      last_login_at
      full_name
      email_verified_flag
      email_verified
    }
  }
}`;
export const getMenu = /* GraphQL */ `
  query GetMenu($input: getMenuInput!, $limit: Int, $nextToken: String) {
    getMenu(input: $input, limit: $limit, nextToken: $nextToken) {
      nextToken
      menus {
        menu_id
        category_name
        category_title
        category_id
        position
        sub_categories {
          sub_category_name
          sub_category_id
          sub_category_title
          position
        }
      }
    }
  }
`;
export const listBanners = /* GraphQL */ `
  query ListBanners(
    $input: listBannersInput!
    $limit: Int
    $nextToken: String
  ) {
    listBanners(input: $input, limit: $limit, nextToken: $nextToken) {
      banners {
        mobile_banner_url
        web_banner_url
        banner_id
        priority
      }
      nextToken
    }
  }
`;
export const getUserProfile = /* GraphQL */ `
  query GetUserProfile($input: getAndDeleteProfileInput!) {
    getUserProfile(input: $input) {
      avatar_url
      email
      email_verified
      email_verified_flag
      full_name
      last_login_at
      primary_phone
      provider
      register_at
      secondary_phone
      user_id
      user_type
    }
  }
`;
export const listAllUserProfile = /* GraphQL */ `
  query ListAllUserProfile(
    $limit: Int
    $forward_flag: forward_flag_enum
    $nextToken: String
  ) {
    listAllUserProfile(
      limit: $limit
      forward_flag: $forward_flag
      nextToken: $nextToken
    ) {
      profiles {
        avatar_url
        email
        email_verified
        email_verified_flag
        full_name
        last_login_at
        primary_phone
        provider
        register_at
        secondary_phone
        user_id
        user_type
      }
      nextToken
    }
  }
`;
export const getUserProfileAddress = /* GraphQL */ `
  query GetUserProfileAddress($input: getAndDeleteUserAddressInput) {
    getUserProfileAddress(input: $input) {
      address_id
      cluster_id
      type
      billing_name
      shipping_name
      address_hash
      lat
      lng
      default_flag
      billing_same_as_shipping_flag
      delivery_instructions
      shipping_email
      shipping_primary_phone
      shipping_secondary_phone
      shipping_address_line_1
      shipping_city
      shipping_postcode
      shipping_state
      shipping_country
      billing_email
      billing_primary_phone
      billing_secondary_phone
      billing_address_line_1
      billing_address_line_2
      billing_city
      billing_postcode
      billing_state
      billing_country
    }
  }
`;
export const listAllAddresses = /* GraphQL */ `
  query ListAllAddresses(
    $input: listAllAddressesInput!
    $limit: Int
    $nextToken: String
  ) {
    listAllAddresses(input: $input, limit: $limit, nextToken: $nextToken) {
      addresses {
        address_id
        cluster_id
        type
        billing_name
        shipping_name
        address_hash
        lat
        lng
        default_flag
        billing_same_as_shipping_flag
        delivery_instructions
        shipping_email
        shipping_primary_phone
        shipping_secondary_phone
        shipping_address_line_1
        shipping_city
        shipping_postcode
        shipping_state
        shipping_country
        billing_email
        billing_primary_phone
        billing_secondary_phone
        billing_address_line_1
        billing_address_line_2
        billing_city
        billing_postcode
        billing_state
        billing_country
      }
      nextToken
    }
  }
`;
export const listAllShippingAddresses = /* GraphQL */ `
  query ListAllShippingAddresses(
    $input: listAllAddressesInput!
    $limit: Int
    $nextToken: String
  ) {
    listAllShippingAddresses(
      input: $input
      limit: $limit
      nextToken: $nextToken
    ) {
      addresses {
        address_id
        cluster_id
        type
        billing_name
        shipping_name
        address_hash
        lat
        lng
        default_flag
        billing_same_as_shipping_flag
        delivery_instructions
        shipping_email
        shipping_primary_phone
        shipping_secondary_phone
        shipping_address_line_1
        shipping_city
        shipping_postcode
        shipping_state
        shipping_country
        billing_email
        billing_primary_phone
        billing_secondary_phone
        billing_address_line_1
        billing_address_line_2
        billing_city
        billing_postcode
        billing_state
        billing_country
      }
      nextToken
    }
  }
`;
export const getDefaultAddress = /* GraphQL */ `
  query GetDefaultAddress($input: listAllAddressesInput!) {
    getDefaultAddress(input: $input) {
      addresses {
        address_id
        cluster_id
        type
        billing_name
        shipping_name
        address_hash
        lat
        lng
        default_flag
        billing_same_as_shipping_flag
        delivery_instructions
        shipping_email
        shipping_primary_phone
        shipping_secondary_phone
        shipping_address_line_1
        shipping_city
        shipping_postcode
        shipping_state
        shipping_country
        billing_email
        billing_primary_phone
        billing_secondary_phone
        billing_address_line_1
        billing_address_line_2
        billing_city
        billing_postcode
        billing_state
        billing_country
      }
      nextToken
    }
  }
`;
export const getLastCheckAvailabilityAddress = /* GraphQL */ `
  query GetLastCheckAvailabilityAddress(
    $input: getLastCheckAvailabilityAddressInput!
  ) {
    getLastCheckAvailabilityAddress(input: $input) {
      cluster_id
      shipping_name
      lat
      lng
      shipping_email
      shipping_primary_phone
      shipping_secondary_phone
      shipping_address_line_1
      shipping_city
      shipping_postcode
      shipping_state
      shipping_country
      message
      status
      status_code
    }
  }
`;
export const checkAddressAvailability = /* GraphQL */ `
  query CheckAddressAvailability($input: checkAddressAvailabilityInput!) {
    checkAddressAvailability(input: $input) {
      postcode
      cluster_id
      status
      status_code
    }
  }
`;
export const getDeliveryDateByCluster = /* GraphQL */ `
  query GetDeliveryDateByCluster($input: getDeliveryDateByClusterInput!) {
    getDeliveryDateByCluster(input: $input) {
      cluster_id
      shipping_postcode
      available_delivery_date
    }
  }
`;
export const alternativeAddressSearch = /* GraphQL */ `
  query AlternativeAddressSearch($input: alternativeAddressSearchInput) {
    alternativeAddressSearch(input: $input) {
      lat
      lng
      address_line_1
      city
      state
      postcode
      country
      full_address
      address_provider
    }
  }
`;
export const listAllPaymentMethods = /* GraphQL */ `
  query ListAllPaymentMethods($input: listAllPaymentMethodsInput!) {
    listAllPaymentMethods(input: $input) {
      paymentMethods {
        payment_method_id
        status
        default_flag
        backup_flag
        payment_method_type
        card_brand
        last_4
        exp_month
        exp_year
        cardholder_name
        billing_address_line_1
        billing_address_line_2
        billing_city
        billing_country
        billing_email
        billing_postcode
        billing_primary_phone
        billing_secondary_phone
        billing_state
      }
      nextToken
    }
  }
`;
export const getDefaultPaymentMethod = /* GraphQL */ `
  query GetDefaultPaymentMethod($input: listAllPaymentMethodsInput!) {
    getDefaultPaymentMethod(input: $input) {
      paymentMethods {
        payment_method_id
        status
        default_flag
        backup_flag
        payment_method_type
        card_brand
        last_4
        exp_month
        exp_year
        cardholder_name
        billing_address_line_1
        billing_address_line_2
        billing_city
        billing_country
        billing_email
        billing_postcode
        billing_primary_phone
        billing_secondary_phone
        billing_state
      }
      nextToken
    }
  }
`;
export const getPaymentLogoUrls = /* GraphQL */ `
  query GetPaymentLogoUrls($input: paymentLogoUrlInput) {
    getPaymentLogoUrls(input: $input) {
      PK
      SK
      visa
      mastercard
      american_express
      paypal
    }
  }
`;
export const getCart = /* GraphQL */ `
  query GetCart($input: getCartInput!) {
    getCart(input: $input) {
      status
      status_code
      subscription_frequency_list
      contain_subscription_flag
      contain_out_of_stock_product
      product_count
      cart_items {
        product_id
        subscription_flag
        item_count
        subscription_frequency
        subscription_frequency_title
        product_name
        product_title
        inventory_policy
        availability_range
        available_on_subscription_flag
        subscription_frequency_details {
          position
          frequency_title
          frequency_name
        }
        stock_flag
        weight
        homepage_media {
          media_type
          media_url
          media_width
          media_height
        }
        on_sale_flag
        on_sale_to
        on_sale_from
        on_sale_maximum_quantity
        amount_saved
        percentage_off
        sale_price
        base_price
        price_unit
        price_per_unit
      }
      pricing_details {
        onetime_amount
        total_amount
        discount
        payable_amount
        onetime_delivery_charge
        recurring_delivery_charges {
          subscription_frequency
          recurring_amount
          delivery_charge
          recurring_total_amount
        }
      }
      coupon_applied_flag
      coupon_code
      coupon_valid_flag
    }
  }
`;
export const listOrderItems = /* GraphQL */ `
  query ListOrderItems(
    $input: listOrderItemsInput!
    $limit: Int
    $nextToken: String
  ) {
    listOrderItems(input: $input, limit: $limit, nextToken: $nextToken) {
      orderItems {
        corner_image_url
        on_sale_flag
        email_media {
          media_type
          media_url
          media_width
          media_height
        }
        on_sale_from
        invoice_media {
          media_type
          media_url
          media_width
          media_height
        }
        item_count
        percentage_off
        product_id
        vendor
        weight
        origin_country
        price_unit
        ship_from
        subscription_frequency
        subscription_flag
        subscription_frequency_details {
          position
          frequency_title
          frequency_name
        }
        on_sale_to
        on_sale_maximum_quantity
        price_per_unit
        product_title
        availability_range
        amount_saved
        product_name
        stock_flag
        available_on_subscription_flag
        sale_price
        inventory_policy
        base_price
        categories
        product_type
        homepage_media {
          media_type
          media_url
          media_width
          media_height
        }
        sub_categories
      }
      nextToken
    }
  }
`;
export const listOrderTransactions = /* GraphQL */ `
  query ListOrderTransactions($input: listOrderItemsInput!) {
    listOrderTransactions(input: $input) {
      transactions {
        transaction_id
        transaction_status
        payment_amount
        failed_reason
        order_id
        payment_id
        created_at
        payment_method_details {
          payment_method_type
          exp_month
          exp_year
          last_4
          billing_state
          billing_email
          card_brand
          billing_address_line_1
          default_flag
          billing_primary_phone
          billing_country
          cardholder_name
          billing_city
          payment_method_id
          billing_postcode
          backup_flag
          status
        }
      }
      nextToken
    }
  }
`;
export const getOrderPaymentMethod = /* GraphQL */ `
  query GetOrderPaymentMethod($input: listOrderItemsInput!) {
    getOrderPaymentMethod(input: $input) {
      paymentMethods {
        payment_method_id
        status
        default_flag
        backup_flag
        payment_method_type
        card_brand
        last_4
        exp_month
        exp_year
        cardholder_name
        billing_address_line_1
        billing_address_line_2
        billing_city
        billing_country
        billing_email
        billing_postcode
        billing_primary_phone
        billing_secondary_phone
        billing_state
      }
      nextToken
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($input: getAndDeleteOrderInput!) {
    getOrder(input: $input) {
      parent_subscription_id
      invoice_download_flag
      cancelled_at
      child_subscription_ids
      subscription_frequency_list
      product_count
      shipping_address {
        shipping_primary_phone
        shipping_secondary_phone
        shipping_state
        shipping_city
        cluster_id
        shipping_name
        default_flag
        shipping_postcode
        lat
        lng
        delivery_instructions
        shipping_address_line_1
        address_id
        shipping_email
        shipping_country
      }
      backup_payment_method_flag
      delivery_status
      deliver_by
      order_status
      created_via
      contains_subscription_flag
      created_at
      deliver_at
      delivery_date
      user_id
      order_date
      delivery_information_email_sent_flag
      pricing_details {
        onetime_amount
        total_amount
        discount
        payable_amount
        onetime_delivery_charge
        recurring_delivery_charges {
          subscription_frequency
          recurring_amount
          delivery_charge
          recurring_total_amount
        }
      }
      delivery_time_window
      snapshot_data {
        homepage_media {
          media_type
          media_url
          media_width
          media_height
        }
        product_id
        product_name
        product_title
        card_brand
        last_4
        exp_month
        exp_year
        payment_method_type
        payment_method_id
        backup_flag
      }
      order_id
      cancelled_reason
    }
  }
`;
export const listAllOrders = /* GraphQL */ `
  query ListAllOrders(
    $input: listAllOrdersInput!
    $limit: Int
    $nextToken: String
  ) {
    listAllOrders(input: $input, limit: $limit, nextToken: $nextToken) {
      orders {
        parent_subscription_id
        invoice_download_flag
        cancelled_at
        child_subscription_ids
        subscription_frequency_list
        product_count
        shipping_address {
          shipping_primary_phone
          shipping_secondary_phone
          shipping_state
          shipping_city
          cluster_id
          shipping_name
          default_flag
          shipping_postcode
          lat
          lng
          delivery_instructions
          shipping_address_line_1
          address_id
          shipping_email
          shipping_country
        }
        backup_payment_method_flag
        delivery_status
        deliver_by
        order_status
        created_via
        contains_subscription_flag
        created_at
        deliver_at
        delivery_date
        user_id
        order_date
        delivery_information_email_sent_flag
        pricing_details {
          onetime_amount
          total_amount
          discount
          payable_amount
          onetime_delivery_charge
          recurring_delivery_charges {
            subscription_frequency
            recurring_amount
            delivery_charge
            recurring_total_amount
          }
        }
        delivery_time_window
        snapshot_data {
          homepage_media {
            media_type
            media_url
            media_width
            media_height
          }
          product_id
          product_name
          product_title
          card_brand
          last_4
          exp_month
          exp_year
          payment_method_type
          payment_method_id
          backup_flag
        }
        order_id
        cancelled_reason
      }
      nextToken
    }
  }
`;
export const listAllOrdersAdmin = /* GraphQL */ `
  query ListAllOrdersAdmin(
    $limit: Int
    $forward_flag: forward_flag_enum
    $nextToken: String
  ) {
    listAllOrdersAdmin(
      limit: $limit
      forward_flag: $forward_flag
      nextToken: $nextToken
    ) {
      orders {
        parent_subscription_id
        invoice_download_flag
        cancelled_at
        child_subscription_ids
        subscription_frequency_list
        product_count
        shipping_address {
          shipping_primary_phone
          shipping_secondary_phone
          shipping_state
          shipping_city
          cluster_id
          shipping_name
          default_flag
          shipping_postcode
          lat
          lng
          delivery_instructions
          shipping_address_line_1
          address_id
          shipping_email
          shipping_country
        }
        backup_payment_method_flag
        delivery_status
        deliver_by
        order_status
        created_via
        contains_subscription_flag
        created_at
        deliver_at
        delivery_date
        user_id
        order_date
        delivery_information_email_sent_flag
        pricing_details {
          onetime_amount
          total_amount
          discount
          payable_amount
          onetime_delivery_charge
          recurring_delivery_charges {
            subscription_frequency
            recurring_amount
            delivery_charge
            recurring_total_amount
          }
        }
        delivery_time_window
        snapshot_data {
          homepage_media {
            media_type
            media_url
            media_width
            media_height
          }
          product_id
          product_name
          product_title
          card_brand
          last_4
          exp_month
          exp_year
          payment_method_type
          payment_method_id
          backup_flag
        }
        order_id
        cancelled_reason
      }
      nextToken
    }
  }
`;
export const listAllOrderByStatusAdmin = /* GraphQL */ `
  query ListAllOrderByStatusAdmin(
    $input: listAllOrderByStatusAdminInput!
    $limit: Int
    $forward_flag: forward_flag_enum
    $nextToken: String
  ) {
    listAllOrderByStatusAdmin(
      input: $input
      limit: $limit
      forward_flag: $forward_flag
      nextToken: $nextToken
    ) {
      orders {
        parent_subscription_id
        invoice_download_flag
        cancelled_at
        child_subscription_ids
        subscription_frequency_list
        product_count
        shipping_address {
          shipping_primary_phone
          shipping_secondary_phone
          shipping_state
          shipping_city
          cluster_id
          shipping_name
          default_flag
          shipping_postcode
          lat
          lng
          delivery_instructions
          shipping_address_line_1
          address_id
          shipping_email
          shipping_country
        }
        backup_payment_method_flag
        delivery_status
        deliver_by
        order_status
        created_via
        contains_subscription_flag
        created_at
        deliver_at
        delivery_date
        user_id
        order_date
        delivery_information_email_sent_flag
        pricing_details {
          onetime_amount
          total_amount
          discount
          payable_amount
          onetime_delivery_charge
          recurring_delivery_charges {
            subscription_frequency
            recurring_amount
            delivery_charge
            recurring_total_amount
          }
        }
        delivery_time_window
        snapshot_data {
          homepage_media {
            media_type
            media_url
            media_width
            media_height
          }
          product_id
          product_name
          product_title
          card_brand
          last_4
          exp_month
          exp_year
          payment_method_type
          payment_method_id
          backup_flag
        }
        order_id
        cancelled_reason
      }
      nextToken
    }
  }
`;
export const listOrderByStatus = /* GraphQL */ `
  query ListOrderByStatus(
    $input: listOrderByStatusInput!
    $limit: Int
    $nextToken: String
  ) {
    listOrderByStatus(input: $input, limit: $limit, nextToken: $nextToken) {
      orders {
        parent_subscription_id
        invoice_download_flag
        cancelled_at
        child_subscription_ids
        subscription_frequency_list
        product_count
        shipping_address {
          shipping_primary_phone
          shipping_secondary_phone
          shipping_state
          shipping_city
          cluster_id
          shipping_name
          default_flag
          shipping_postcode
          lat
          lng
          delivery_instructions
          shipping_address_line_1
          address_id
          shipping_email
          shipping_country
        }
        backup_payment_method_flag
        delivery_status
        deliver_by
        order_status
        created_via
        contains_subscription_flag
        created_at
        deliver_at
        delivery_date
        user_id
        order_date
        delivery_information_email_sent_flag
        pricing_details {
          onetime_amount
          total_amount
          discount
          payable_amount
          onetime_delivery_charge
          recurring_delivery_charges {
            subscription_frequency
            recurring_amount
            delivery_charge
            recurring_total_amount
          }
        }
        delivery_time_window
        snapshot_data {
          homepage_media {
            media_type
            media_url
            media_width
            media_height
          }
          product_id
          product_name
          product_title
          card_brand
          last_4
          exp_month
          exp_year
          payment_method_type
          payment_method_id
          backup_flag
        }
        order_id
        cancelled_reason
      }
      nextToken
    }
  }
`;
export const listAllRelatedUserOrder = /* GraphQL */ `
  query ListAllRelatedUserOrder(
    $input: getRelatedUserOrderInput!
    $limit: Int
    $nextToken: String
    $forward_flag: String
  ) {
    listAllRelatedUserOrder(
      input: $input
      limit: $limit
      nextToken: $nextToken
      forward_flag: $forward_flag
    ) {
      orders {
        parent_subscription_id
        invoice_download_flag
        cancelled_at
        child_subscription_ids
        subscription_frequency_list
        product_count
        shipping_address {
          shipping_primary_phone
          shipping_secondary_phone
          shipping_state
          shipping_city
          cluster_id
          shipping_name
          default_flag
          shipping_postcode
          lat
          lng
          delivery_instructions
          shipping_address_line_1
          address_id
          shipping_email
          shipping_country
        }
        backup_payment_method_flag
        delivery_status
        deliver_by
        order_status
        created_via
        contains_subscription_flag
        created_at
        deliver_at
        delivery_date
        user_id
        order_date
        delivery_information_email_sent_flag
        pricing_details {
          onetime_amount
          total_amount
          discount
          payable_amount
          onetime_delivery_charge
          recurring_delivery_charges {
            subscription_frequency
            recurring_amount
            delivery_charge
            recurring_total_amount
          }
        }
        delivery_time_window
        snapshot_data {
          homepage_media {
            media_type
            media_url
            media_width
            media_height
          }
          product_id
          product_name
          product_title
          card_brand
          last_4
          exp_month
          exp_year
          payment_method_type
          payment_method_id
          backup_flag
        }
        order_id
        cancelled_reason
      }
      nextToken
    }
  }
`;
export const listAllRelatedOrdersFromSubscription = /* GraphQL */ `
  query ListAllRelatedOrdersFromSubscription(
    $input: getRelatedOrdersFromSubscriptionInput!
    $limit: Int
    $nextToken: String
    $forward_flag: String
  ) {
    listAllRelatedOrdersFromSubscription(
      input: $input
      limit: $limit
      nextToken: $nextToken
      forward_flag: $forward_flag
    ) {
      orders {
        parent_subscription_id
        invoice_download_flag
        cancelled_at
        child_subscription_ids
        subscription_frequency_list
        product_count
        shipping_address {
          shipping_primary_phone
          shipping_secondary_phone
          shipping_state
          shipping_city
          cluster_id
          shipping_name
          default_flag
          shipping_postcode
          lat
          lng
          delivery_instructions
          shipping_address_line_1
          address_id
          shipping_email
          shipping_country
        }
        backup_payment_method_flag
        delivery_status
        deliver_by
        order_status
        created_via
        contains_subscription_flag
        created_at
        deliver_at
        delivery_date
        user_id
        order_date
        delivery_information_email_sent_flag
        pricing_details {
          onetime_amount
          total_amount
          discount
          payable_amount
          onetime_delivery_charge
          recurring_delivery_charges {
            subscription_frequency
            recurring_amount
            delivery_charge
            recurring_total_amount
          }
        }
        delivery_time_window
        snapshot_data {
          homepage_media {
            media_type
            media_url
            media_width
            media_height
          }
          product_id
          product_name
          product_title
          card_brand
          last_4
          exp_month
          exp_year
          payment_method_type
          payment_method_id
          backup_flag
        }
        order_id
        cancelled_reason
      }
      nextToken
    }
  }
`;
export const getAvailableDeliveryDateInCart = /* GraphQL */ `
  query GetAvailableDeliveryDateInCart(
    $input: getAvailableDeliveryDateInCartInput!
  ) {
    getAvailableDeliveryDateInCart(input: $input) {
      available_delivery_date
      remove_product_for_more_delivery_date {
        PK
        SK
        inventory_policy
      }
      out_of_stock_product {
        PK
        SK
        date
        current_stock
        stock_unit
        product_type
      }
    }
  }
`;
export const getAvailableDeliveryDateInOrder = /* GraphQL */ `
  query GetAvailableDeliveryDateInOrder(
    $input: getAvailableDeliveryDateInOrderInput!
  ) {
    getAvailableDeliveryDateInOrder(input: $input) {
      available_delivery_date
      remove_product_for_more_delivery_date {
        PK
        SK
        inventory_policy
      }
      out_of_stock_product {
        PK
        SK
        date
        current_stock
        stock_unit
        product_type
      }
    }
  }
`;
export const listAllSubscriptions = /* GraphQL */ `
  query ListAllSubscriptions(
    $input: listAllSubscriptionsInput!
    $limit: Int
    $nextToken: String
  ) {
    listAllSubscriptions(input: $input, limit: $limit, nextToken: $nextToken) {
      subscriptions {
        user_id
        created_at
        subscription_id
        internal_subscription_id
        product_count
        next_delivery_date
        subscription_frequency
        subscription_status
        next_payment_date
        type
        pricing_details {
          onetime_amount
          total_amount
          discount
          payable_amount
          onetime_delivery_charge
          recurring_delivery_charges {
            subscription_frequency
            recurring_amount
            delivery_charge
            recurring_total_amount
          }
        }
        shipping_address {
          shipping_primary_phone
          shipping_secondary_phone
          shipping_state
          shipping_city
          cluster_id
          shipping_name
          default_flag
          shipping_postcode
          lat
          lng
          delivery_instructions
          shipping_address_line_1
          address_id
          shipping_email
          shipping_country
        }
        snapshot_data {
          homepage_media {
            media_type
            media_url
            media_width
            media_height
          }
          product_id
          product_name
          product_title
          card_brand
          last_4
          exp_month
          exp_year
          payment_method_type
          payment_method_id
          backup_flag
        }
      }
      nextToken
    }
  }
`;
export const listAllSubscriptionsAdmin = /* GraphQL */ `
  query ListAllSubscriptionsAdmin(
    $forward_flag: forward_flag_enum
    $limit: Int
    $nextToken: String
  ) {
    listAllSubscriptionsAdmin(
      forward_flag: $forward_flag
      limit: $limit
      nextToken: $nextToken
    ) {
      subscriptions {
        user_id
        created_at
        subscription_id
        internal_subscription_id
        product_count
        next_delivery_date
        subscription_frequency
        subscription_status
        next_payment_date
        type
        pricing_details {
          onetime_amount
          total_amount
          discount
          payable_amount
          onetime_delivery_charge
          recurring_delivery_charges {
            subscription_frequency
            recurring_amount
            delivery_charge
            recurring_total_amount
          }
        }
        shipping_address {
          shipping_primary_phone
          shipping_secondary_phone
          shipping_state
          shipping_city
          cluster_id
          shipping_name
          default_flag
          shipping_postcode
          lat
          lng
          delivery_instructions
          shipping_address_line_1
          address_id
          shipping_email
          shipping_country
        }
        snapshot_data {
          homepage_media {
            media_type
            media_url
            media_width
            media_height
          }
          product_id
          product_name
          product_title
          card_brand
          last_4
          exp_month
          exp_year
          payment_method_type
          payment_method_id
          backup_flag
        }
      }
      nextToken
    }
  }
`;
export const listAllSubscriptionByStatusAdmin = /* GraphQL */ `
  query ListAllSubscriptionByStatusAdmin(
    $input: listAllSubscriptionByStatusAdminInput!
    $forward_flag: forward_flag_enum
    $limit: Int
    $nextToken: String
  ) {
    listAllSubscriptionByStatusAdmin(
      input: $input
      forward_flag: $forward_flag
      limit: $limit
      nextToken: $nextToken
    ) {
      subscriptions {
        user_id
        created_at
        subscription_id
        internal_subscription_id
        product_count
        next_delivery_date
        subscription_frequency
        subscription_status
        next_payment_date
        type
        pricing_details {
          onetime_amount
          total_amount
          discount
          payable_amount
          onetime_delivery_charge
          recurring_delivery_charges {
            subscription_frequency
            recurring_amount
            delivery_charge
            recurring_total_amount
          }
        }
        shipping_address {
          shipping_primary_phone
          shipping_secondary_phone
          shipping_state
          shipping_city
          cluster_id
          shipping_name
          default_flag
          shipping_postcode
          lat
          lng
          delivery_instructions
          shipping_address_line_1
          address_id
          shipping_email
          shipping_country
        }
        snapshot_data {
          homepage_media {
            media_type
            media_url
            media_width
            media_height
          }
          product_id
          product_name
          product_title
          card_brand
          last_4
          exp_month
          exp_year
          payment_method_type
          payment_method_id
          backup_flag
        }
      }
      nextToken
    }
  }
`;
export const listSubscriptionByStatus = /* GraphQL */ `
  query ListSubscriptionByStatus(
    $input: listSubscriptionByStatusInput!
    $limit: Int
    $nextToken: String
  ) {
    listSubscriptionByStatus(
      input: $input
      limit: $limit
      nextToken: $nextToken
    ) {
      subscriptions {
        user_id
        created_at
        subscription_id
        internal_subscription_id
        product_count
        next_delivery_date
        subscription_frequency
        subscription_status
        next_payment_date
        type
        pricing_details {
          onetime_amount
          total_amount
          discount
          payable_amount
          onetime_delivery_charge
          recurring_delivery_charges {
            subscription_frequency
            recurring_amount
            delivery_charge
            recurring_total_amount
          }
        }
        shipping_address {
          shipping_primary_phone
          shipping_secondary_phone
          shipping_state
          shipping_city
          cluster_id
          shipping_name
          default_flag
          shipping_postcode
          lat
          lng
          delivery_instructions
          shipping_address_line_1
          address_id
          shipping_email
          shipping_country
        }
        snapshot_data {
          homepage_media {
            media_type
            media_url
            media_width
            media_height
          }
          product_id
          product_name
          product_title
          card_brand
          last_4
          exp_month
          exp_year
          payment_method_type
          payment_method_id
          backup_flag
        }
      }
      nextToken
    }
  }
`;
export const listSubscriptionItems = /* GraphQL */ `
  query ListSubscriptionItems(
    $input: listSubscriptionItemsInput!
    $limit: Int
    $nextToken: String
  ) {
    listSubscriptionItems(input: $input, limit: $limit, nextToken: $nextToken) {
      nextToken
      subscriptionItems {
        corner_image_url
        on_sale_flag
        email_media {
          media_type
          media_url
          media_width
          media_height
        }
        on_sale_from
        invoice_media {
          media_type
          media_url
          media_width
          media_height
        }
        item_count
        percentage_off
        product_id
        vendor
        weight
        origin_country
        price_unit
        ship_from
        subscription_frequency_details {
          position
          frequency_title
          frequency_name
        }
        on_sale_to
        on_sale_maximum_quantity
        subscription_flag
        price_per_unit
        product_title
        availability_range
        amount_saved
        product_name
        stock_flag
        available_on_subscription_flag
        sale_price
        inventory_policy
        base_price
        categories
        product_type
        homepage_media {
          media_type
          media_url
          media_width
          media_height
        }
        sub_categories
      }
    }
  }
`;
export const getSubscriptionPaymentMethod = /* GraphQL */ `
  query GetSubscriptionPaymentMethod($input: listSubscriptionItemsInput!) {
    getSubscriptionPaymentMethod(input: $input) {
      paymentMethods {
        payment_method_id
        status
        default_flag
        backup_flag
        payment_method_type
        card_brand
        last_4
        exp_month
        exp_year
        cardholder_name
        billing_address_line_1
        billing_address_line_2
        billing_city
        billing_country
        billing_email
        billing_postcode
        billing_primary_phone
        billing_secondary_phone
        billing_state
      }
      nextToken
    }
  }
`;
export const getSubscription = /* GraphQL */ `
  query GetSubscription($input: getAndDeleteSubscriptionInput!) {
    getSubscription(input: $input) {
      user_id
      created_at
      subscription_id
      internal_subscription_id
      product_count
      next_delivery_date
      subscription_frequency
      subscription_status
      next_payment_date
      type
      pricing_details {
        onetime_amount
        total_amount
        discount
        payable_amount
        onetime_delivery_charge
        recurring_delivery_charges {
          subscription_frequency
          recurring_amount
          delivery_charge
          recurring_total_amount
        }
      }
      shipping_address {
        shipping_primary_phone
        shipping_secondary_phone
        shipping_state
        shipping_city
        cluster_id
        shipping_name
        default_flag
        shipping_postcode
        lat
        lng
        delivery_instructions
        shipping_address_line_1
        address_id
        shipping_email
        shipping_country
      }
      snapshot_data {
        homepage_media {
          media_type
          media_url
          media_width
          media_height
        }
        product_id
        product_name
        product_title
        card_brand
        last_4
        exp_month
        exp_year
        payment_method_type
        payment_method_id
        backup_flag
      }
    }
  }
`;
export const getTransaction = /* GraphQL */ `
  query GetTransaction($input: getAndDeleteTransactionInput!) {
    getTransaction(input: $input) {
      transaction_id
      transaction_status
      payment_amount
      failed_reason
      order_id
      payment_id
      created_at
      payment_method_details {
        payment_method_type
        exp_month
        exp_year
        last_4
        billing_state
        billing_email
        card_brand
        billing_address_line_1
        default_flag
        billing_primary_phone
        billing_country
        cardholder_name
        billing_city
        payment_method_id
        billing_postcode
        backup_flag
        status
      }
    }
  }
`;
export const listAllTransactions = /* GraphQL */ `
  query ListAllTransactions(
    $input: listAllTransactionsInput!
    $limit: Int
    $nextToken: String
  ) {
    listAllTransactions(input: $input, limit: $limit, nextToken: $nextToken) {
      transactions {
        transaction_id
        transaction_status
        payment_amount
        failed_reason
        order_id
        payment_id
        created_at
        payment_method_details {
          payment_method_type
          exp_month
          exp_year
          last_4
          billing_state
          billing_email
          card_brand
          billing_address_line_1
          default_flag
          billing_primary_phone
          billing_country
          cardholder_name
          billing_city
          payment_method_id
          billing_postcode
          backup_flag
          status
        }
      }
      nextToken
    }
  }
`;
export const listTransactionByStatus = /* GraphQL */ `
  query ListTransactionByStatus(
    $input: listTransactionByStatusInput!
    $limit: Int
    $nextToken: String
  ) {
    listTransactionByStatus(
      input: $input
      limit: $limit
      nextToken: $nextToken
    ) {
      transactions {
        transaction_id
        transaction_status
        payment_amount
        failed_reason
        order_id
        payment_id
        created_at
        payment_method_details {
          payment_method_type
          exp_month
          exp_year
          last_4
          billing_state
          billing_email
          card_brand
          billing_address_line_1
          default_flag
          billing_primary_phone
          billing_country
          cardholder_name
          billing_city
          payment_method_id
          billing_postcode
          backup_flag
          status
        }
      }
      nextToken
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($input: getProductInput!, $limit: Int, $nextToken: String) {
    getProduct(input: $input, limit: $limit, nextToken: $nextToken) {
      products {
        main_product_flag
        product_id
        product_type
        categories
        sub_categories
        variations
        best_selling_flag
        featured_flag
        product_name
        published_scope
        average_rating_stars
        product_title
        short_description
        long_description
        vendor
        ship_from
        available_on_subscription_flag
        subscription_frequency_details {
          position
          frequency_title
          frequency_name
        }
        rating_details {
          total_rating_count
          five_start_rating_count
          three_star_rating_count
          one_star_rating_count
          two_star_rating_count
          four_start_rating_count
        }
        media_details {
          position
          media_type
          media_url
          media_height
          media_width
        }
        stock_flag
        weight
        homepage_media {
          media_type
          media_url
          media_width
          media_height
        }
        on_sale_flag
        on_sale_to
        on_sale_from
        on_sale_maximum_quantity
        amount_saved
        percentage_off
        sale_price
        base_price
        price_unit
        price_per_unit
        origin_country
        corner_image_url
        status
      }
      nextToken
    }
  }
`;
export const listAllSubscriptionProducts = /* GraphQL */ `
  query ListAllSubscriptionProducts($limit: Int, $nextToken: String) {
    listAllSubscriptionProducts(limit: $limit, nextToken: $nextToken) {
      products {
        main_product_flag
        product_id
        product_type
        categories
        sub_categories
        variations
        best_selling_flag
        featured_flag
        product_name
        published_scope
        average_rating_stars
        product_title
        short_description
        long_description
        vendor
        ship_from
        available_on_subscription_flag
        subscription_frequency_details {
          position
          frequency_title
          frequency_name
        }
        rating_details {
          total_rating_count
          five_start_rating_count
          three_star_rating_count
          one_star_rating_count
          two_star_rating_count
          four_start_rating_count
        }
        media_details {
          position
          media_type
          media_url
          media_height
          media_width
        }
        stock_flag
        weight
        homepage_media {
          media_type
          media_url
          media_width
          media_height
        }
        on_sale_flag
        on_sale_to
        on_sale_from
        on_sale_maximum_quantity
        amount_saved
        percentage_off
        sale_price
        base_price
        price_unit
        price_per_unit
        origin_country
        corner_image_url
        status
      }
      nextToken
    }
  }
`;
export const listFeaturedProducts = /* GraphQL */ `
  query ListFeaturedProducts($limit: Int, $nextToken: String) {
    listFeaturedProducts(limit: $limit, nextToken: $nextToken) {
      products {
        main_product_flag
        product_id
        product_type
        categories
        sub_categories
        variations
        best_selling_flag
        featured_flag
        product_name
        published_scope
        average_rating_stars
        product_title
        short_description
        long_description
        vendor
        ship_from
        available_on_subscription_flag
        subscription_frequency_details {
          position
          frequency_title
          frequency_name
        }
        rating_details {
          total_rating_count
          five_start_rating_count
          three_star_rating_count
          one_star_rating_count
          two_star_rating_count
          four_start_rating_count
        }
        media_details {
          position
          media_type
          media_url
          media_height
          media_width
        }
        stock_flag
        weight
        homepage_media {
          media_type
          media_url
          media_width
          media_height
        }
        on_sale_flag
        on_sale_to
        on_sale_from
        on_sale_maximum_quantity
        amount_saved
        percentage_off
        sale_price
        base_price
        price_unit
        price_per_unit
        origin_country
        corner_image_url
        status
      }
      nextToken
    }
  }
`;
export const listAllBuyAgainProducts = /* GraphQL */ `
  query ListAllBuyAgainProducts(
    $input: listAllBuyAgainProductsInput
    $limit: Int
    $nextToken: String
  ) {
    listAllBuyAgainProducts(
      input: $input
      limit: $limit
      nextToken: $nextToken
    ) {
      products {
        main_product_flag
        product_id
        product_type
        categories
        sub_categories
        variations
        best_selling_flag
        featured_flag
        product_name
        published_scope
        average_rating_stars
        product_title
        short_description
        long_description
        vendor
        ship_from
        available_on_subscription_flag
        subscription_frequency_details {
          position
          frequency_title
          frequency_name
        }
        rating_details {
          total_rating_count
          five_start_rating_count
          three_star_rating_count
          one_star_rating_count
          two_star_rating_count
          four_start_rating_count
        }
        media_details {
          position
          media_type
          media_url
          media_height
          media_width
        }
        stock_flag
        weight
        homepage_media {
          media_type
          media_url
          media_width
          media_height
        }
        on_sale_flag
        on_sale_to
        on_sale_from
        on_sale_maximum_quantity
        amount_saved
        percentage_off
        sale_price
        base_price
        price_unit
        price_per_unit
        origin_country
        corner_image_url
        status
      }
      nextToken
    }
  }
`;
export const listAllProducts = /* GraphQL */ `
  query ListAllProducts($limit: Int, $nextToken: String) {
    listAllProducts(limit: $limit, nextToken: $nextToken) {
      products {
        main_product_flag
        product_id
        product_type
        categories
        sub_categories
        variations
        best_selling_flag
        featured_flag
        product_name
        published_scope
        average_rating_stars
        product_title
        short_description
        long_description
        vendor
        ship_from
        available_on_subscription_flag
        subscription_frequency_details {
          position
          frequency_title
          frequency_name
        }
        rating_details {
          total_rating_count
          five_start_rating_count
          three_star_rating_count
          one_star_rating_count
          two_star_rating_count
          four_start_rating_count
        }
        media_details {
          position
          media_type
          media_url
          media_height
          media_width
        }
        stock_flag
        weight
        homepage_media {
          media_type
          media_url
          media_width
          media_height
        }
        on_sale_flag
        on_sale_to
        on_sale_from
        on_sale_maximum_quantity
        amount_saved
        percentage_off
        sale_price
        base_price
        price_unit
        price_per_unit
        origin_country
        corner_image_url
        status
      }
      nextToken
    }
  }
`;
export const listAllCategoryProducts = /* GraphQL */ `
  query ListAllCategoryProducts(
    $input: listAllCategoryProductsInput
    $limit: Int
    $sortBy: sortByEnum
    $ascendingFlag: String
    $nextToken: String
  ) {
    listAllCategoryProducts(
      input: $input
      limit: $limit
      sortBy: $sortBy
      ascendingFlag: $ascendingFlag
      nextToken: $nextToken
    ) {
      products {
        main_product_flag
        product_id
        product_type
        categories
        sub_categories
        variations
        best_selling_flag
        featured_flag
        product_name
        published_scope
        average_rating_stars
        product_title
        short_description
        long_description
        vendor
        ship_from
        available_on_subscription_flag
        subscription_frequency_details {
          position
          frequency_title
          frequency_name
        }
        rating_details {
          total_rating_count
          five_start_rating_count
          three_star_rating_count
          one_star_rating_count
          two_star_rating_count
          four_start_rating_count
        }
        media_details {
          position
          media_type
          media_url
          media_height
          media_width
        }
        stock_flag
        weight
        homepage_media {
          media_type
          media_url
          media_width
          media_height
        }
        on_sale_flag
        on_sale_to
        on_sale_from
        on_sale_maximum_quantity
        amount_saved
        percentage_off
        sale_price
        base_price
        price_unit
        price_per_unit
        origin_country
        corner_image_url
        status
      }
      nextToken
    }
  }
`;
export const listAllSubCategoryProducts = /* GraphQL */ `
  query ListAllSubCategoryProducts(
    $input: listAllSubCategoryProductsInput
    $limit: Int
    $sortBy: sortByEnum
    $ascendingFlag: String
    $nextToken: String
  ) {
    listAllSubCategoryProducts(
      input: $input
      limit: $limit
      sortBy: $sortBy
      ascendingFlag: $ascendingFlag
      nextToken: $nextToken
    ) {
      products {
        main_product_flag
        product_id
        product_type
        categories
        sub_categories
        variations
        best_selling_flag
        featured_flag
        product_name
        published_scope
        average_rating_stars
        product_title
        short_description
        long_description
        vendor
        ship_from
        available_on_subscription_flag
        subscription_frequency_details {
          position
          frequency_title
          frequency_name
        }
        rating_details {
          total_rating_count
          five_start_rating_count
          three_star_rating_count
          one_star_rating_count
          two_star_rating_count
          four_start_rating_count
        }
        media_details {
          position
          media_type
          media_url
          media_height
          media_width
        }
        stock_flag
        weight
        homepage_media {
          media_type
          media_url
          media_width
          media_height
        }
        on_sale_flag
        on_sale_to
        on_sale_from
        on_sale_maximum_quantity
        amount_saved
        percentage_off
        sale_price
        base_price
        price_unit
        price_per_unit
        origin_country
        corner_image_url
        status
      }
      nextToken
    }
  }
`;
export const getCategory = /* GraphQL */ `
  query GetCategory($input: getAndDeleteCategoryInput!) {
    getCategory(input: $input) {
      priority
      category_id
      category_name
      category_title
      description
      media_url
      media_type
      media_height
      media_width
      shop_media {
        media_height
        text_color
        background_color
        media_width
        media_url
        media_type
      }
      status
    }
  }
`;
export const listAllCategories = /* GraphQL */ `
  query ListAllCategories($limit: Int, $nextToken: String) {
    listAllCategories(limit: $limit, nextToken: $nextToken) {
      categories {
        priority
        category_id
        category_name
        category_title
        description
        media_url
        media_type
        media_height
        media_width
        shop_media {
          media_height
          text_color
          background_color
          media_width
          media_url
          media_type
        }
        status
      }
      nextToken
    }
  }
`;
export const getTestimonial = /* GraphQL */ `
  query GetTestimonial($input: getAndDeleteTestimonialInput) {
    getTestimonial(input: $input) {
      rating_flag
      rating_stars
      testimonial_flag
      user_avtar_url
      position
      full_name
      testimonial_subject
      testimonial_detail
    }
  }
`;
export const listAllTestimonials = /* GraphQL */ `
  query ListAllTestimonials($limit: Int, $nextToken: String) {
    listAllTestimonials(limit: $limit, nextToken: $nextToken) {
      testimonials {
        rating_flag
        rating_stars
        testimonial_flag
        user_avtar_url
        position
        full_name
        testimonial_subject
        testimonial_detail
      }
      nextToken
    }
  }
`;
export const listFeaturedTestimonials = /* GraphQL */ `
  query ListFeaturedTestimonials($limit: Int, $nextToken: String) {
    listFeaturedTestimonials(limit: $limit, nextToken: $nextToken) {
      testimonials {
        rating_flag
        rating_stars
        testimonial_flag
        user_avtar_url
        position
        full_name
        testimonial_subject
        testimonial_detail
      }
      nextToken
    }
  }
`;
export const getNewsLetterSubscription = /* GraphQL */ `
  query GetNewsLetterSubscription($input: getAndDeleteNewsLetterInput!) {
    getNewsLetterSubscription(input: $input) {
      news_letter_id
      email
      platform
    }
  }
`;
export const getAllNewsLetterSubscriptions = /* GraphQL */ `
  query GetAllNewsLetterSubscriptions($input: getAllNewsLetterInput!) {
    getAllNewsLetterSubscriptions(input: $input) {
      newsLetters {
        news_letter_id
        email
        platform
      }
      nextToken
    }
  }
`;
export const getQna = /* GraphQL */ `
  query GetQna($input: getAndDeleteQnaInput!) {
    getQna(input: $input) {
      qna_id
      product_id
      question
      answer
      position
      answer_by
    }
  }
`;
export const listAllQnas = /* GraphQL */ `
  query ListAllQnas(
    $input: listAllQnasInput!
    $limit: Int
    $nextToken: String
  ) {
    listAllQnas(input: $input, limit: $limit, nextToken: $nextToken) {
      qnas {
        qna_id
        product_id
        question
        answer
        position
        answer_by
      }
      nextToken
    }
  }
`;
export const listAllReviews = /* GraphQL */ `
  query ListAllReviews(
    $input: listAllReviewsInput!
    $limit: Int
    $nextToken: String
  ) {
    listAllReviews(input: $input, limit: $limit, nextToken: $nextToken) {
      reviews {
        review_id
        product_name
        rating_flag
        rating_stars
        review_flag
        user_id
        user_avtar_url
        full_name
        review_subject
        helpful_flag
        helpful_count
        review_detail
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($input: getAndDeleteCommentInput!) {
    getComment(input: $input) {
      PK
      SK
      comment_id
      email
      qna_id
      user_id
      uuid
      user_avtar_url
      comment
      commented_by
      commented_at
      status
      position
      modified_by
      modified_at
    }
  }
`;
export const getAllComments = /* GraphQL */ `
  query GetAllComments(
    $input: getAllCommentInput!
    $limit: Int
    $nextToken: String
  ) {
    getAllComments(input: $input, limit: $limit, nextToken: $nextToken) {
      comments {
        PK
        SK
        comment_id
        email
        qna_id
        user_id
        uuid
        user_avtar_url
        comment
        commented_by
        commented_at
        status
        position
        modified_by
        modified_at
      }
      nextToken
    }
  }
`;
export const getCluster = /* GraphQL */ `
  query GetCluster($input: getAndDeleteClusterInput!) {
    getCluster(input: $input) {
      PK
      SK
      cluster_id
      cluster_name
      postcode
      description
      cities
      coordinates_format_1
      coordinates_format_2
      delivery_charges
      delivery_days
      created_by
      created_at
      modified_by
      modified_at
      available_frequency
    }
  }
`;
export const getAllClusters = /* GraphQL */ `
  query GetAllClusters($input: getAllClusterInput!) {
    getAllClusters(input: $input) {
      clusters {
        PK
        SK
        cluster_id
        cluster_name
        postcode
        description
        cities
        coordinates_format_1
        coordinates_format_2
        delivery_charges
        delivery_days
        created_by
        created_at
        modified_by
        modified_at
        available_frequency
      }
      nextToken
    }
  }
`;
export const getInventory = /* GraphQL */ `
  query GetInventory($input: getAndDeleteInventoryInput!) {
    getInventory(input: $input) {
      PK
      SK
      product_type
      inventory_id
      product_id
      variation_id
      product_name
      variation_name
      variation_description
      inventory_description
      date
      day
      sku
      total_stock
      current_stock
      purchased_stock
      stock_unit
      created_by
      created_at
      modified_by
      modified_at
    }
  }
`;
export const getAllInventories = /* GraphQL */ `
  query GetAllInventories($input: getAndDeleteInventoryInput!) {
    getAllInventories(input: $input) {
      inventories {
        PK
        SK
        product_type
        inventory_id
        product_id
        variation_id
        product_name
        variation_name
        variation_description
        inventory_description
        date
        day
        sku
        total_stock
        current_stock
        purchased_stock
        stock_unit
        created_by
        created_at
        modified_by
        modified_at
      }
    }
  }
`;
