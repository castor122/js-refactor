export function _combineCustomGigs() {
  const rawCustomGigs = _.compact([
    this.get("played_gigs"),
    this.get("upcoming_gigs")
  ])
  let customGigs = []

  _.each(rawCustomGigs, gigs => {
    customGigs = customGigs.concat(gigs.toJSON())
  })

  this.set("custom_gigs", customGigs)
}
