export function checkSlug(slug) {
  return $.ajax("/api/v1/profiles/check_slug", {
    data: {
      api_key: Gigmit.apiKey,
      profile_name: slug
    },
    dataType: "json",
    type: "post"
  })
}

export function slugChanged(slug) {
  const readSlug = slug || this.get("slug")

  return !this.isNew() && this.initialSlug !== readSlug
}

export function url() {
  const profileURL = this.slugChanged() ? this.initialSlug : this.get("slug")

  return this.isNew() ? "/profiles" : "/" + profileURL
}
