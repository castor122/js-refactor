import { canAccessVenueDatabase, isBillingDataValid } from "./modules/bool"
import {
  decreaseEPKApplicationsLeft,
  increaseEPKApplicationsLeft,
  isEpkComplete
} from "./modules/epk"
import { getPublicFee, _nullify_fixed_fee } from "./modules/fee"
import {
  addSubMusicGenre,
  canAddMusicGenre,
  getAllMusicGenres,
  musicGenresLeftCount,
  removeSubMusicGenre
} from "./modules/genre"
import { unwatchGig, watchesGig, watchGig } from "./modules/gig"
import { initialize } from "./modules/init"
import { toJSON } from "./modules/json"
import { omittedAttributes } from "./modules/omitted-attributes"
import { relations } from "./modules/relations"
import { getSoundSample, hasSounds } from "./modules/sounds"
import {
  fetchInsights,
  hasSpotifyAccountConnected,
  hasSpotifySongs,
  hasVendorConnected,
  hasYoutubeConnected
} from "./modules/third-party-connections"
import {
  addToDisfavoredEventTypes,
  getArtistTypeText,
  removeFromDisfavoredEventTypes
} from "./modules/types"
import {
  apiWatchlistPath,
  getBookPath,
  getFanInsightsPath,
  getProfileImageURL
} from "./modules/url"
import { hasVideos } from "./modules/videos"
import { _validation } from "./modules/_validation"

window.Gigmit.Models["Artist"] = Backbone.RelationalModel.extend(
  $.extend(true, {}, Gigmit.Mixins.Profile, {
    defaults: {
      fixed_fee_on_request: true,
      played_gigs: [],
      upcoming_gigs: [],
      custom_gigs: [],
      releases: [],
      tax_rate: 0
    },
    modelName: "Artist",
    nonPremiumMaxGenreCount: 5,
    relations,
    omittedAttributes,
    _validation,
    initialize,
    _nullify_fixed_fee,
    addSubMusicGenre,
    removeSubMusicGenre,
    getAllMusicGenres,
    hasSounds,
    hasVideos,
    hasSpotifyAccountConnected,
    hasYoutubeConnected,
    hasVendorConnected,
    hasSpotifySongs,
    getSoundSample,
    getArtistTypeText,
    getBookPath,
    getFanInsightsPath,
    getProfileImageURL,
    removeFromDisfavoredEventTypes,
    addToDisfavoredEventTypes,
    apiWatchlistPath,
    watchGig,
    unwatchGig,
    watchesGig,
    fetchInsights,
    canAddMusicGenre,
    canAccessVenueDatabase,
    musicGenresLeftCount,
    getPublicFee,
    decreaseEPKApplicationsLeft,
    increaseEPKApplicationsLeft,
    isBillingDataValid,
    isEpkComplete,
    toJSON
  })
)
