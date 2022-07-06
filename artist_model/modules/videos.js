export function hasVideos() {
  return _.some(
    this.get("external_media_items").filter(item =>
      _.contains(["vimeo", "youtube"], item.get("vendor"))
    )
  )
}
