export function hasSpotifyAccountConnected() {
  return !_.isEmpty(this.get("external_spotify_id"))
}

export function hasSpotifySongs() {
  return !_.isEmpty(
    this.get("external_media_items").filter(
      item => item.get("vendor") === "spotify"
    )
  )
}

export function hasYoutubeConnected() {
  return !_.has(this.get("fanradar"), "youtube")
}

export function hasVendorConnected(vendor) {
  let hasConnected

  if (vendor === "spotify") {
    hasConnected = this.hasSpotifyAccountConnected()
  } else {
    hasConnected = _.has(this.get("fanradar"), vendor)
  }

  return hasConnected
}

export function fetchInsights(vendor, metric) {
  const url = [
    "/api/v1/artists",
    this.get("id"),
    "insights",
    vendor,
    metric
  ].join("/")

  return $.ajax({
    url,
    data: {
      api_key: this.get("api_key")
    }
  })
}
