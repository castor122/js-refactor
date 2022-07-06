export function getVideoCount() {
  return this.get("external_media_items").filter(
    item => item.itemType() === "video"
  ).length
}

export function hasVideos() {
  return this.getVideoCount() > 0
}
