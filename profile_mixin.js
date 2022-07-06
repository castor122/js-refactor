(function(){
  window.Gigmit.Mixins['Profile'] = {
    defaults: {
      currency: 'EUR',
      tags:     []
    },
    validation: {
      name: {
        required: true,
        msg: function(){ return I18n.t('validations.profiles.name.required') }
      },
      slug: function(value, attributeName, attributes){
        var isValid = !!value && URI({path: value}).normalizePath().path() == value;

        if(!isValid) {
          return I18n.t('validations.profiles.slug.path');
        }
      }
    },
    addTag: function(tag, options){
      var tags = _.clone(this.get('tags'));

      options = _.defaults(options || {}, {save: true});

      tags.push(tag);
      tags = _.unique(tags);

      this.set('tags', tags);

      if(options.save) {
        return this.save(undefined, {url: this._updatePath()});
      }
    },
    addCustomAttribute: function(key, value){
      return this.addTag('custom_attribute_' + key + ':' + value);
    },
    addPreferredMusicGenreCategory: function(musicGenreCategoryName){
      return this.addTag('preferredMusicGenreCategory:' + musicGenreCategoryName);
    },
    removePreferredMusicGenreCategory: function(musicGenreCategoryName){
      return this.removeTag('preferredMusicGenreCategory:' + musicGenreCategoryName);
    },
    getTags: function(prefix) {
      var tags = this.get('tags');

      if(!_.isUndefined(prefix)) {
        tags = _.map(_.filter(tags, function(tag){
          var components = tag.split(':');

          return components[0] == prefix;
        }), function(tag){
          return tag.replace(prefix + ':', '');
        });
      }

      return tags;
    },
    removeTag: function(tag){
      var tags = _.clone(this.get('tags'));

      tags = _.without(tags, tag);
      this.set('tags', tags);

      return this.save(undefined, {url: this._updatePath()});
    },
    checkSlug: function(slug) {
      return $.ajax('/api/v1/profiles/check_slug', {
        data: {
          api_key:      Gigmit.apiKey,
          profile_name: slug
        },
        dataType: 'json',
        type: 'post',
      });
    },
    slugChanged: function(slug){
      var slug = slug || this.get('slug');

      return !this.isNew() && this.initialSlug != slug;
    },
    url: function(){
      var profileURL = this.slugChanged() ? this.initialSlug : this.get('slug');

      return this.isNew() ? '/profiles' : '/' + profileURL;
    },
    _combineCustomGigs: function(){
      var rawCustomGigs = _.compact([this.get('played_gigs'), this.get('upcoming_gigs')]),
          customGigs = [];

      _.each(rawCustomGigs, function(gigs){
        customGigs = customGigs.concat(gigs.toJSON());
      });

      this.set('custom_gigs', customGigs)
    },
    getSoundsCount: function(){
      return this.get('external_media_items').filter(function(item){
        return item.itemType() == 'sound';
      }).length;
    },
    hasSounds: function(){
      return this.getSoundsCount() > 0;
    },
    getVideoCount: function(){
      return this.get('external_media_items').filter(function(item){
        return item.itemType() == 'video';
      }).length;
    },
    hasVideos: function(){
      return this.getVideoCount() > 0;
    }
  }
})()