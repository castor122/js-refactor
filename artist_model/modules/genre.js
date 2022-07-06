export function addSubMusicGenre(genre) {
  this.model.get("sub_music_genres").add(genre)
}

export function removeSubMusicGenre(genre) {
  this.model.get("sub_music_genres").remove(genre)
}

export function getAllMusicGenres() {
  var genres = _.compact(
    [this.get("main_music_genre")].concat(this.get("sub_music_genres").models)
  )

  return _.compact(_.filter(genres, genre => !genre.has("_destroy")))
}

export function musicGenresLeftCount() {
  return this.nonPremiumMaxGenreCount - this.getAllMusicGenres().length
}

export function canAddMusicGenre() {
  return this.get("is_premium") || this.musicGenresLeftCount() > 0
}
