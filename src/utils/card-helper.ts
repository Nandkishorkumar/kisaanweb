export function getCardUrl(card: "visa" | "mastercard" | "paypal" | string) {
  card = card.toLowerCase() as "visa" | "mastercard" | "paypal";
  if (card == "visa") {
    return "https://kisaan-web-app.s3.ap-southeast-2.amazonaws.com/payment_method_logo/visa.png";
  }
  if (card == "mastercard") {
    return "https://kisaan-web-app.s3.ap-southeast-2.amazonaws.com/payment_method_logo/mastercard.png";
  }
  if (card == "paypal") {
    return "https://kisaan-web-app.s3.ap-southeast-2.amazonaws.com/payment_method_logo/paypal.png";
  } else {
    return "https://kisaan-web-app.s3.ap-southeast-2.amazonaws.com/payment_method_logo/visa.png";
  }
}