export function addTag(tag, options) {
  let tags = _.clone(this.get("tags"))

  options = _.defaults(options || {}, { save: true })

  tags.push(tag)
  tags = _.unique(tags)

  this.set("tags", tags)

  if (options.save) {
    return this.save(undefined, { url: this._updatePath() })
  }
}

export function getTags(prefix) {
  let tags = this.get("tags")

  if (!_.isUndefined(prefix)) {
    tags = _.map(
      _.filter(tags, tag => {
        const [component] = tag.split(":")

        return component === prefix
      }),
      tag => tag.replace(prefix + ":", "")
    )
  }

  return tags
}

export function removeTag(tag) {
  let tags = _.clone(this.get("tags"))

  tags = _.without(tags, tag)
  this.set("tags", tags)

  return this.save(undefined, { url: this._updatePath() })
}

export function addCustomAttribute(key, value) {
  return this.addTag("custom_attribute_" + key + ":" + value)
}
