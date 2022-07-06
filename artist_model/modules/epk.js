export function decreaseEPKApplicationsLeft() {
  this.set(
    "epk_applications_left",
    _.max([0, this.get("epk_applications_left") - 1])
  )
}

export function increaseEPKApplicationsLeft() {
  this.set(
    "epk_applications_left",
    _.min([20, this.get("epk_applications_left") + 1])
  )
}

export function isEpkComplete() {
  const isProfileImagePresent = !_.isEmpty(this.get("profile_image"))
  const hasExternalMediaItems = this.get("external_media_items").some()

  return isProfileImagePresent && hasExternalMediaItems
}
