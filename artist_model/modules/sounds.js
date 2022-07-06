export function hasSounds() {
  return _.some(
    this.get("external_media_items").filter(item =>
      _.contains(["soundcloud", "mixcloud", "bandcamp"], item.get("vendor"))
    )
  )
}

export function getSoundSample() {
  const sample = _.first(
    this.get("external_media_items").filter(
      item => item.get("vendor") === "soundcloud"
    )
  )

  return sample
}
