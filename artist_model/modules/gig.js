export function watchGig(gig, watchlistId, options) {
  const xhrData = $.extend(true, { gig_id: gig.id }, options)
  const xhr = $.ajax(this.apiWatchlistPath(watchlistId) + "/add", {
    data: xhrData,
    type: "post"
  })

  xhr.success(
    _.bind(function () {
      let watchedGigs = _.clone(this.get("watched_gigs"))
      let watchedGig = _.find(watchedGigs, item => item.id === gig.get("id"))

      // ensure watchlist item is present
      watchedGig = watchedGig || { id: gig.id, watchlist_ids: [] }

      // remove old item from watchedGigs
      watchedGigs = _.without(watchedGigs, watchedGig)

      // update watchlist_ids list of gig
      watchedGig.watchlist_ids.push(watchlistId)
      watchedGig.watchlist_ids = _.uniq(watchedGig.watchlist_ids)

      // re-add updated item to watchedGigs
      watchedGigs.push(watchedGig)

      this.set("watched_gigs", watchedGigs)
    }, this)
  )

  return xhr
}

export function unwatchGig(gig, watchlistId) {
  const xhr = $.ajax(this.apiWatchlistPath(watchlistId) + "/remove", {
    data: { gig_id: gig.get("id") },
    type: "delete"
  })

  xhr.success(
    _.bind(function () {
      let watchedGigs = _.clone(this.get("watched_gigs"))
      const unwatchedGig = _.find(
        watchedGigs,
        item => item.id === gig.get("id")
      )

      // remove old item from watchedGigs
      watchedGigs = _.without(watchedGigs, unwatchedGig)

      // update watchlist_ids list of gig
      unwatchedGig.watchlist_ids = _.without(
        unwatchedGig.watchlist_ids,
        watchlistId
      )

      // re-add updated item to watchedGigs
      watchedGigs.push(unwatchedGig)

      this.set("watched_gigs", watchedGigs)
    }, this)
  )

  return xhr
}

export function watchesGig(gig, watchlistId) {
  const needle = this.get("watched_gigs").find(
    item => item.id === gig.id && _.contains(item.watchlist_ids, watchlistId)
  )

  return !_.isUndefined(needle)
}
