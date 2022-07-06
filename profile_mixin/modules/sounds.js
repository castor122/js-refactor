export function getSoundsCount() {
  return this.get("external_media_items").filter(
    item => item.itemType() === "sound"
  ).length
}

export function hasSounds() {
  return this.getSoundsCount() > 0
}
