export function canAccessVenueDatabase() {
  return (
    this.get("is_premium") && this.get("subscription").canAccessVenueDatabase()
  )
}

export function isBillingDataValid() {
  const billingAddress = this.get("billing_address")
  const isBillingAddressValid =
    !_.isEmpty(billingAddress) && billingAddress.validate() === undefined
  const isTaxRateValid =
    !_.isEmpty(this.get("tax_rate")) && _.isNumber(this.get("tax_rate"))

  return isBillingAddressValid && isTaxRateValid
}
