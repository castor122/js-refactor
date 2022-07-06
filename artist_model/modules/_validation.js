export const _validation = {
  artist_type: {
    required: true,
    msg: () => I18n.t("validations.artists.artist_type.required")
  },
  fixed_fee: [
    {
      required: function () {
        return !this.get("fixed_fee_on_request")
      },
      msg: () => I18n.t("validations.artists.salary_min.required")
    },
    {
      pattern: "digits",
      msg: () => I18n.t("validations.artists.salary_min.digits")
    }
  ],
  main_music_genre_id: {
    required: true,
    msg: () => I18n.t("validations.artists.main_music_genre_id.required")
  },
  address: function () {
    return this.get("address").validate()
  },
  tax_rate: {
    min: 0,
    max: 1,
    pattern: "number",
    required: false
  }
}
