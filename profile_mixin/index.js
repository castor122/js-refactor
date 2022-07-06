import {
  addPreferredMusicGenreCategory,
  removePreferredMusicGenreCategory
} from "./modules/genre"
import { _combineCustomGigs } from "./modules/gigs"
import { getSoundsCount, hasSounds } from "./modules/sounds"
import { addCustomAttribute, addTag, getTags, removeTag } from "./modules/tags"
import { checkSlug, slugChanged, url } from "./modules/url"
import { validation } from "./modules/validation"
import { getVideoCount, hasVideos } from "./modules/videos"

window.Gigmit.Mixins["Profile"] = {
  defaults: {
    currency: "EUR",
    tags: []
  },
  validation,
  addTag,
  addCustomAttribute,
  addPreferredMusicGenreCategory,
  removePreferredMusicGenreCategory,
  getTags,
  removeTag,
  checkSlug,
  slugChanged,
  url,
  _combineCustomGigs,
  getSoundsCount,
  hasSounds,
  getVideoCount,
  hasVideos
}
