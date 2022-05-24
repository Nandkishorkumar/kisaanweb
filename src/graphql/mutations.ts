/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const fillContactForm = /* GraphQL */ `
  mutation FillContactForm($input: contactFormInput!) {
    fillContactForm(input: $input) {
      first_name
      last_name
      email
      phone_number
      message
      subject
      user_id
      unauth_id
      form_id
    }
  }
`;
export const createBug = /* GraphQL */ `
  mutation CreateBug($input: bugInput) {
    createBug(input: $input) {
      user_id
      page_url
      screenshot_url
      summary
      description
      developer
    }
  }
`;
export const createUserProfile = /* GraphQL */ `
  mutation CreateUserProfile($input: createAndUpdateProfileInput!) {
    createUserProfile(input: $input) {
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
export const updateUserProfile = /* GraphQL */ `
  mutation UpdateUserProfile($input: createAndUpdateProfileInput!) {
    updateUserProfile(input: $input) {
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
export const deleteUserProfile = /* GraphQL */ `
  mutation DeleteUserProfile($input: getAndDeleteProfileInput!) {
    deleteUserProfile(input: $input) {
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
export const addAddress = /* GraphQL */ `
  mutation AddAddress($input: addAndUpdateUserProfileAddressInput!) {
    addAddress(input: $input) {
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
export const makeDefaultAddress = /* GraphQL */ `
  mutation MakeDefaultAddress($input: makeDefaultAddressInput!) {
    makeDefaultAddress(input: $input) {
      user_id
      address_id
      message
      status_code
      status
    }
  }
`;
export const addBillingAddress = /* GraphQL */ `
  mutation AddBillingAddress($input: addBillingAddressInput!) {
    addBillingAddress(input: $input) {
      billing_primary_phone
      billing_address_id
      billing_city
      billing_address_line_1
      billing_address_line_2
      billing_secondary_phone
      billing_state
      billing_email
      billing_postcode
      billing_name
      billing_country
    }
  }
`;
export const addLastCheckAvailabilityAddress = /* GraphQL */ `
  mutation AddLastCheckAvailabilityAddress(
    $input: addLastCheckAvailabilityAddressInput!
  ) {
    addLastCheckAvailabilityAddress(input: $input) {
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
export const updateAddress = /* GraphQL */ `
  mutation UpdateAddress($input: addAndUpdateUserProfileAddressInput!) {
    updateAddress(input: $input) {
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
export const deleteAddress = /* GraphQL */ `
  mutation DeleteAddress($input: getAndDeleteUserAddressInput!) {
    deleteAddress(input: $input) {
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
export const addCard = /* GraphQL */ `
  mutation AddCard($input: addCardInput!) {
    addCard(input: $input) {
      user_id
      email
      phone_number
      source_id
      cardholder_name
      backup_flag
      default_flag
      billing_address_line_1
      billing_city
      billing_country
      billing_postcode
      billing_state
      billing_email
      billing_primary_phone
      message
      status
      status_code
    }
  }
`;
export const makeDefaultCard = /* GraphQL */ `
  mutation MakeDefaultCard($input: makeDefaultCardInput!) {
    makeDefaultCard(input: $input) {
      user_id
      payment_method_id
      message
      status_code
      status
    }
  }
`;
export const deleteCard = /* GraphQL */ `
  mutation DeleteCard($input: deleteCardInput!) {
    deleteCard(input: $input) {
      user_id
      cardholder_name
      backup_flag
      default_flag
      billing_address_line_1
      billing_city
      billing_country
      billing_postcode
      billing_state
      billing_email
      billing_primary_phone
    }
  }
`;
export const updateCard = /* GraphQL */ `
  mutation UpdateCard($input: updateCardInput!) {
    updateCard(input: $input) {
      user_id
      cardholder_name
      backup_flag
      default_flag
      billing_address_line_1
      billing_city
      billing_country
      billing_postcode
      billing_state
      billing_email
      billing_primary_phone
    }
  }
`;
export const updateSubscriptionBillingAddress = /* GraphQL */ `
  mutation UpdateSubscriptionBillingAddress(
    $input: updateSubscriptionBillingAddressInput!
  ) {
    updateSubscriptionBillingAddress(input: $input) {
      user_id
      subscription_id
      billing_address_line_1
      billing_address_line_2
      billing_city
      billing_country
      billing_postcode
      billing_state
      billing_email
      billing_primary_phone
      billing_secondary_phone
      billing_name
    }
  }
`;
export const updateSubscriptionShippingAddress = /* GraphQL */ `
  mutation UpdateSubscriptionShippingAddress(
    $input: updateSubscriptionShippingAddressInput!
  ) {
    updateSubscriptionShippingAddress(input: $input) {
      user_id
      subscription_id
      delivery_date
      shipping_name
      delivery_instructions
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
      status_code
      status
    }
  }
`;
export const updatePaymentLogoUrls = /* GraphQL */ `
  mutation UpdatePaymentLogoUrls($input: paymentLogoUrlInput) {
    updatePaymentLogoUrls(input: $input) {
      PK
      SK
      visa
      mastercard
      american_express
      paypal
    }
  }
`;
export const updateItemCountInCart = /* GraphQL */ `
  mutation UpdateItemCountInCart($input: updateItemCountInCartInput!) {
    updateItemCountInCart(input: $input) {
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
export const addToCart = /* GraphQL */ `
  mutation AddToCart($input: addToCartInput!) {
    addToCart(input: $input) {
      user_id
      unauth_id
      cart_id
      subscription_flag
      subscription_frequency
      item_count
      product_id
      status_code
      status
      message
      buynow_flag
    }
  }
`;
export const migrateCart = /* GraphQL */ `
  mutation MigrateCart($input: migrateCartInput!) {
    migrateCart(input: $input) {
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
export const deleteProductFromCart = /* GraphQL */ `
  mutation DeleteProductFromCart($input: deleteProductFromCartInput!) {
    deleteProductFromCart(input: $input) {
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
export const updateOrderAddress = /* GraphQL */ `
  mutation UpdateOrderAddress($input: updateOrderAddressInput!) {
    updateOrderAddress(input: $input) {
      user_id
      order_id
      address_id
      default_flag
      message
      status_code
      status
    }
  }
`;
export const updateOrderPaymentMethod = /* GraphQL */ `
  mutation UpdateOrderPaymentMethod($input: updateOrderPaymentMethodInput!) {
    updateOrderPaymentMethod(input: $input) {
      user_id
      order_id
      payment_method_id
      default_flag
      message
      status_code
      status
    }
  }
`;
export const generateInvoiceUrl = /* GraphQL */ `
  mutation GenerateInvoiceUrl($input: generateInvoiceUrlInput!) {
    generateInvoiceUrl(input: $input) {
      user_id
      order_id
      invoice_url
      message
      status_code
      status
    }
  }
`;
export const checkOutCart = /* GraphQL */ `
  mutation CheckOutCart($input: checkOutCartInput!) {
    checkOutCart(input: $input) {
      user_id
      cart_id
      delivery_date
      cluster_id
      order_id
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
      status_code
      status
    }
  }
`;
export const cancelOrder = /* GraphQL */ `
  mutation CancelOrder($input: cancelOrderInput!) {
    cancelOrder(input: $input) {
      user_id
      order_id
      cancelled_reason
      status_code
      status
      message
    }
  }
`;
export const updateOrderBillingAddress = /* GraphQL */ `
  mutation UpdateOrderBillingAddress($input: updateOrderBillingAddressInput!) {
    updateOrderBillingAddress(input: $input) {
      user_id
      subscription_id
      billing_address_line_1
      billing_address_line_2
      billing_city
      billing_country
      billing_postcode
      billing_state
      billing_email
      billing_primary_phone
      billing_secondary_phone
      cardholder_name
    }
  }
`;
export const updateOrderDeliveryDate = /* GraphQL */ `
  mutation UpdateOrderDeliveryDate($input: updateOrderDeliveryDateInput!) {
    updateOrderDeliveryDate(input: $input) {
      user_id
      order_id
      delivery_date
      message
      status
      status_code
    }
  }
`;
export const updateOrderDeliveryInstructions = /* GraphQL */ `
  mutation UpdateOrderDeliveryInstructions(
    $input: updateOrderDeliveryInstructionsInput!
  ) {
    updateOrderDeliveryInstructions(input: $input) {
      user_id
      order_id
      delivery_instructions
      status_code
      status
      message
    }
  }
`;
export const updateSubscriptionPaymentMethod = /* GraphQL */ `
  mutation UpdateSubscriptionPaymentMethod(
    $input: updateSubscriptionPaymentMethodInput!
  ) {
    updateSubscriptionPaymentMethod(input: $input) {
      user_id
      subscription_id
      payment_method_id
      default_flag
      status
      status_code
      message
    }
  }
`;
export const updateSubscriptionDeliveryInstructions = /* GraphQL */ `
  mutation UpdateSubscriptionDeliveryInstructions(
    $input: updateSubscriptionDeliveryInstructionsInput!
  ) {
    updateSubscriptionDeliveryInstructions(input: $input) {
      user_id
      subscription_id
      delivery_instructions
      status
      status_code
      message
    }
  }
`;
export const updateSubscriptionAddress = /* GraphQL */ `
  mutation UpdateSubscriptionAddress($input: updateSubscriptionAddressInput!) {
    updateSubscriptionAddress(input: $input) {
      user_id
      subscription_id
      address_id
      default_flag
      status
      status_code
      message
    }
  }
`;
export const changeSubscriptionShippingAddress = /* GraphQL */ `
  mutation ChangeSubscriptionShippingAddress(
    $input: changeSubscriptionShippingAddressInput!
  ) {
    changeSubscriptionShippingAddress(input: $input) {
      user_id
      subscription_id
      address_id
      default_flag
      delivery_date
      status
      status_code
      message
    }
  }
`;
export const holdOrCancelUserSubscription = /* GraphQL */ `
  mutation HoldOrCancelUserSubscription(
    $input: holdOrCancelUserSubscriptionInput!
  ) {
    holdOrCancelUserSubscription(input: $input) {
      user_id
      subscription_id
      cancelled_reason
    }
  }
`;
export const addProductInSubscription = /* GraphQL */ `
  mutation AddProductInSubscription($input: addProductInSubscriptionInput!) {
    addProductInSubscription(input: $input) {
      user_id
      subscription_id
      product_id
      item_count
      cluster_id
      shipping_postcode
      message
      status_code
      status
    }
  }
`;
export const updateItemCountInSubscription = /* GraphQL */ `
  mutation UpdateItemCountInSubscription(
    $input: updateItemCountInSubscriptionInput!
  ) {
    updateItemCountInSubscription(input: $input) {
      user_id
      subscription_id
      product_id
      item_count
      cluster_id
      shipping_postcode
      message
      status_code
      status
    }
  }
`;
export const deleteProductFromSubscription = /* GraphQL */ `
  mutation DeleteProductFromSubscription(
    $input: deleteProductFromSubscriptionInput!
  ) {
    deleteProductFromSubscription(input: $input) {
      user_id
      subscription_id
      product_id
      shipping_postcode
      cluster_id
      message
      status_code
      status
    }
  }
`;
export const activeUserSubscription = /* GraphQL */ `
  mutation ActiveUserSubscription($input: activeUserSubscriptionInput!) {
    activeUserSubscription(input: $input) {
      user_id
      subscription_id
      delivery_date
      shipping_postcode
      cluster_id
      message
      status
      status_code
    }
  }
`;
export const updateSubscriptionDeliveryDate = /* GraphQL */ `
  mutation UpdateSubscriptionDeliveryDate(
    $input: updateSubscriptionDeliveryDateInput!
  ) {
    updateSubscriptionDeliveryDate(input: $input) {
      user_id
      subscription_id
      delivery_date
      message
      status
      status_code
    }
  }
`;
export const updateSubscriptionFrequency = /* GraphQL */ `
  mutation UpdateSubscriptionFrequency(
    $input: updateSubscriptionFrequencyInput!
  ) {
    updateSubscriptionFrequency(input: $input) {
      user_id
      subscription_id
      delivery_date
      message
      status
      status_code
      subscription_frequency
    }
  }
`;
export const deleteUserTransaction = /* GraphQL */ `
  mutation DeleteUserTransaction($input: getAndDeleteTransactionInput!) {
    deleteUserTransaction(input: $input) {
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
export const createProduct = /* GraphQL */ `
  mutation CreateProduct($input: createAndUpdateProductInput!) {
    createProduct(input: $input) {
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
  }
`;
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct($input: createAndUpdateProductInput!) {
    updateProduct(input: $input) {
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
  }
`;
export const createCategory = /* GraphQL */ `
  mutation CreateCategory($input: createAndUpdateCategoryInput!) {
    createCategory(input: $input) {
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
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory($input: createAndUpdateCategoryInput!) {
    updateCategory(input: $input) {
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
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory($input: getAndDeleteCategoryInput!) {
    deleteCategory(input: $input) {
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
export const createReview = /* GraphQL */ `
  mutation CreateReview($input: createAndUpdateReviewInput!) {
    createReview(input: $input) {
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
  }
`;
export const updateReview = /* GraphQL */ `
  mutation UpdateReview($input: createAndUpdateReviewInput!) {
    updateReview(input: $input) {
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
  }
`;
export const deleteReview = /* GraphQL */ `
  mutation DeleteReview($input: getAndDeleteReviewInput!) {
    deleteReview(input: $input) {
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
  }
`;
export const createTestimonial = /* GraphQL */ `
  mutation CreateTestimonial($input: createAndUpdateTestimonialInput) {
    createTestimonial(input: $input) {
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
export const updateTestimonial = /* GraphQL */ `
  mutation UpdateTestimonial($input: createAndUpdateTestimonialInput) {
    updateTestimonial(input: $input) {
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
export const deleteTestimonial = /* GraphQL */ `
  mutation DeleteTestimonial($input: getAndDeleteTestimonialInput) {
    deleteTestimonial(input: $input) {
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
export const subscribeNewsLetter = /* GraphQL */ `
  mutation SubscribeNewsLetter($input: subscribeNewsLetterInput!) {
    subscribeNewsLetter(input: $input) {
      news_letter_id
      email
      platform
    }
  }
`;
export const updateNewsLetterSubscription = /* GraphQL */ `
  mutation UpdateNewsLetterSubscription($input: subscribeNewsLetterInput!) {
    updateNewsLetterSubscription(input: $input) {
      news_letter_id
      email
      platform
    }
  }
`;
export const deleteNewsLetterSubscription = /* GraphQL */ `
  mutation DeleteNewsLetterSubscription($input: getAndDeleteNewsLetterInput!) {
    deleteNewsLetterSubscription(input: $input) {
      news_letter_id
      email
      platform
    }
  }
`;
export const createQna = /* GraphQL */ `
  mutation CreateQna($input: createAndUpdateQnaInput!) {
    createQna(input: $input) {
      qna_id
      product_id
      question
      answer
      position
      answer_by
    }
  }
`;
export const updateQna = /* GraphQL */ `
  mutation UpdateQna($input: createAndUpdateQnaInput!) {
    updateQna(input: $input) {
      qna_id
      product_id
      question
      answer
      position
      answer_by
    }
  }
`;
export const deleteQna = /* GraphQL */ `
  mutation DeleteQna($input: getAndDeleteQnaInput!) {
    deleteQna(input: $input) {
      qna_id
      product_id
      question
      answer
      position
      answer_by
    }
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment($input: createAndUpdateCommentInput!) {
    createComment(input: $input) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment($input: createAndUpdateCommentInput!) {
    updateComment(input: $input) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment($input: getAndDeleteCommentInput!) {
    deleteComment(input: $input) {
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
export const createCluster = /* GraphQL */ `
  mutation CreateCluster($input: createAndUpdateClusterInput!) {
    createCluster(input: $input) {
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
export const updateCluster = /* GraphQL */ `
  mutation UpdateCluster($input: createAndUpdateClusterInput!) {
    updateCluster(input: $input) {
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
export const deleteCluster = /* GraphQL */ `
  mutation DeleteCluster($input: getAndDeleteClusterInput!) {
    deleteCluster(input: $input) {
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
export const createInventory = /* GraphQL */ `
  mutation CreateInventory($input: createAndUpdateInventoryInput!) {
    createInventory(input: $input) {
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
export const updateInventory = /* GraphQL */ `
  mutation UpdateInventory($input: createAndUpdateInventoryInput!) {
    updateInventory(input: $input) {
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
export const deleteInventory = /* GraphQL */ `
  mutation DeleteInventory($input: getAndDeleteInventoryInput!) {
    deleteInventory(input: $input) {
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
