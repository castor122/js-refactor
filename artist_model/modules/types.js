// [i18n:dump] I18n.t('activerecord.enums.artist.artist_types.dj')
// [i18n:dump] I18n.t('activerecord.enums.artist.artist_types.live')
export function getArtistTypeText() {
  return I18n.t(
    "activerecord.enums.artist.artist_types." + this.get("artist_type")
  )
}

export function removeFromDisfavoredEventTypes(type) {
  let types = _.clone(this.get("disfavored_event_types"))

  types = _.without(types, type)

  this.set("disfavored_event_types", types)
}

export function addToDisfavoredEventTypes(type) {
  const types = _.clone(this.get("disfavored_event_types"))

  types.push(type)

  this.set("disfavored_event_types", types)
}
