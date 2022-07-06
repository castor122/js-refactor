export function addPreferredMusicGenreCategory(musicGenreCategoryName) {
  return this.addTag("preferredMusicGenreCategory:" + musicGenreCategoryName)
}

export function removePreferredMusicGenreCategory(musicGenreCategoryName) {
  return this.removeTag("preferredMusicGenreCategory:" + musicGenreCategoryName)
}
