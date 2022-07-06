export function _nullify_fixed_fee() {
  if (this.get("fixed_fee_on_request")) {
    this.set("fixed_fee", null)
  }
}

/**
 * returns public fee information (category of fee)
 *
 * {}                       -> fee on request only
 * {prefix: 'to', fee: 200} -> fee up to 200EUR
 */
export function getPublicFee() {
  const absoluteFee = this.get("fixed_fee")
  const maxFee =
    Gigmit.Constants.artistSalaryClasses[
      Gigmit.Constants.artistSalaryClasses.length - 2
    ]
  let fee = {}
  let stripped

  if (!this.get("fixed_fee_on_request")) {
    stripped = _.reject(
      Gigmit.Constants.artistSalaryClasses,
      fee => fee < absoluteFee
    )

    if (_.isEmpty(stripped)) {
      fee = {
        prefix: "above",
        fee: maxFee
      }
    } else {
      fee = {
        prefix: "to",
        fee: _.first(stripped)
      }
    }
  }

  return fee
}
