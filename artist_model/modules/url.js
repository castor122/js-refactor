export function getBookPath() {
  return "/" + [this.get("slug"), "book"].join("/")
}

export function getFanInsightsPath() {
  return "/" + [this.get("slug"), "fan-insights"].join("/")
}

export function getProfileImageURL() {
  let url = Gigmit.Constants.profileImagePlaceholderImageURL

  if (_.isObject(this.get("profile_image"))) {
    url = this.get("profile_image").imageUrl("large")
  }

  return url
}

export function apiWatchlistPath(watchlistId) {
  return (
    "/" +
    ["api", "v1", "artists", this.get("slug"), "watchlists", watchlistId].join(
      "/"
    )
  )
}
