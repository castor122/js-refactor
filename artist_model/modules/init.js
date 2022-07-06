export function initialize() {
  if (this.isNew()) {
    this.validation = _.extend(this.validation, this._validation)
  } else {
    this.validation = _.extend(this.validation, {
      founding_year: {
        pattern: "number",
        range: [new Date().getFullYear() - 100, new Date().getFullYear()],
        required: false,
        msg: I18n.t("artists.edit_microsite.founding_year.invalid")
      }
    })
  }

  this.initialSlug = this.get("slug")
  this.on("change:fixed_fee_on_request", this._nullify_fixed_fee)
}
