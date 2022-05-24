import { billingAddress, paymentMethod, shipping_address_type } from "src/API";
function removeEmpty(obj: any): any {
  return Object.entries(obj)
    .filter(([_, v]) => v != null)
    .reduce(
      (acc, [k, v]) => ({ ...acc, [k]: v === Object(v) ? removeEmpty(v) : v }),
      {}
    );
}

export function formatAddress(address: shipping_address_type | billingAddress | paymentMethod, type: 'shipping' | 'billing' = 'shipping') {
  return `${address[`${type}_address_line_1`]}, ${address[`${type}_city`]}, ${address[`${type}_state`]}
  ${address[`${type}_country`]} ${address[`${type}_postcode`]}`
}
