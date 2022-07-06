export function toJSON(options) {
  let profile = Backbone.RelationalModel.prototype.toJSON.call(this, options)

  if (!this.isNew()) {
    // combine played and upcoming gigs into custom gigs
    this._combineCustomGigs()

    profile = _.omit(
      Backbone.RelationalModel.prototype.toJSON.call(this, options),
      this.omittedAttributes
    )
  } else {
    profile = _.pick(
      profile,
      "address_attributes",
      "artist_type",
      "billing_address_attributes",
      "currency",
      "fixed_fee",
      "fixed_fee_on_request",
      "is_ccs_member",
      "main_music_genre_id",
      "name",
      "phone_number",
      "slug",
      "sub_music_genre_ids",
      "tags"
    )
  }

  return profile
}
