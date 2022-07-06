(function(window){
  window.Gigmit.Models['Artist'] = Backbone.RelationalModel.extend(
    $.extend(
      true,
      {},
      Gigmit.Mixins.Profile,
      {
        defaults: {
          fixed_fee_on_request: true,
          played_gigs: [],
          upcoming_gigs: [],
          custom_gigs: [],
          releases: [],
          tax_rate: 0
        },
        modelName: 'Artist',
        nonPremiumMaxGenreCount: 5,
        relations: [
          {
            collectionType: Gigmit.Collections.CustomGigs,
            type:           Backbone.HasMany,
            key:            'custom_gigs',
            relatedModel:   Gigmit.Models.CustomGig,
            includeInJSON:  false,
            reverseRelation: {
              key: 'artist',
              includeInJSON: false
            }
          },
          {
            collectionType: Gigmit.Collections.Representations,
            type:           Backbone.HasMany,
            key:            'representations',
            relatedModel:   Gigmit.Models.Representation,
            includeInJSON:  false,
            reverseRelation: {
              key: 'artist',
              includeInJSON: false
            }
          },
          {
            collectionType: Gigmit.Collections.CustomGigs,
            type:           Backbone.HasMany,
            key:            'played_gigs',
            relatedModel:   Gigmit.Models.PlayedGig,
            includeInJSON:  ['date_from', 'address', 'title'],
            reverseRelation: {
              key: 'artist',
              includeInJSON: false
            }
          },
          {
            collectionType: Gigmit.Collections.CustomGigs,
            type:           Backbone.HasMany,
            key:            'upcoming_gigs',
            relatedModel:   Gigmit.Models.UpcomingGig,
            includeInJSON:  ['date_from', 'address', 'title'],
            reverseRelation: {
              key: 'artist',
              includeInJSON: false
            }
          },
          {
            collectionType: Gigmit.Collections.ArtistReleases,
            type:           Backbone.HasMany,
            key:            'releases',
            keySource:      'releases',
            keyDestination: 'artist_releases_attributes',
            relatedModel:   Gigmit.Models.ArtistRelease,
            includeInJSON:  ['id', 'label', 'release_type', 'title', 'year', '_destroy'],
            reverseRelation: {
              key: 'artist',
              includeInJSON: false
            }
          },
          {
            type:           Backbone.HasMany,
            key:            'members',
            keySource:      'members',
            keyDestination: 'members',
            relatedModel:   Gigmit.Models.ArtistMember,
            includeInJSON:  ['id', 'name', 'position']
          },
          {
            type:           Backbone.HasOne,
            key:            'artistic_profile',
            relatedModel:   Gigmit.Models.ArtisticProfile,
            includeInJSON:  false,
            reverseRelation: {
              key: 'artist',
              includeInJSON: false
            }
          },
          {
            type:           Backbone.HasOne,
            key:            'main_music_genre',
            relatedModel:   Gigmit.Models.MusicGenre,
            includeInJSON:  false
          },
          {
            type:           Backbone.HasMany,
            key:            'sub_music_genres',
            keyDestination: 'sub_music_genre_ids',
            relatedModel:   Gigmit.Models.SubMusicGenre,
            includeInJSON:  'id',
            reverseRelation: {
              key: 'artist',
              includeInJSON: false
            }
          },
          {
            collectionType: Gigmit.Collections.ArtistExternalMediaItems,
            type:           Backbone.HasMany,
            key:            'external_media_items',
            keySource:      'external_media_items',
            keyDestination: 'external_media_items_attributes',
            relatedModel:   Gigmit.Models.ExternalMediaItem,
            includeInJSON:  ['id', 'title', 'vendor', 'vendor_item_id', 'sort_order', '_destroy'],
            reverseRelation: {
              key: 'artist',
              includeInJSON: false
            }
          },
          {
            type:           Backbone.HasOne,
            key:            'address',
            keySource:      'address',
            keyDestination: 'address_attributes',
            relatedModel:   Gigmit.Models.HomebaseAddress,
            includeInJSON:  ['city', 'zip_code', 'country'],
            reverseRelation: {
              key: 'artist',
              includeInJSON: false
            }
          },
          {
            type:           Backbone.HasOne,
            key:            'billing_address',
            keySource:      'billing_address',
            keyDestination: 'billing_address_attributes',
            relatedModel:   Gigmit.Models.Address,
            includeInJSON:  ['name', 'street', 'street_number', 'city', 'zip_code', 'country']
          },
          {
            type:           Backbone.HasMany,
            key:            'press_media_items',
            keySource:      'press_media_items',
            keyDestination: 'press_media_items_hash',
            relatedModel:   Gigmit.Models.PressMediaItem,
            reverseRelation: {
              key: 'artist',
              includeInJSON: false
            }
          },
          {
            type:           Backbone.HasOne,
            key:            'profile_image',
            keySource:      'profile_image',
            keyDestination: 'profile_image',
            relatedModel:   Gigmit.Models.ProfileImage,
            includeInJSON:  false,
            reverseRelation: {
              key:           'artist',
              type:          Backbone.HasOne,
              includeInJSON: false
            }
          },
          {
            type:           Backbone.HasMany,
            key:            'social_links',
            keySource:      'social_links',
            keyDestination: 'social_links_attributes',
            relatedModel:   Gigmit.Models.SocialLink,
            includeInJSON:  ['id', 'title', 'provider', 'url', '_destroy'],
            reverseRelation: {
              key:           'artist',
              includeInJSON: false
            }
          },
          {
            type:           Backbone.HasMany,
            key:            'permissions',
            relatedModel:   Gigmit.Models.Permission,
            includeInJSON:  false
          },
          {
            collectionType: Gigmit.Collections.ArtistDates,
            type:           Backbone.HasMany,
            key:            'artist_dates',
            relatedModel:   Gigmit.Models.ArtistDate,
            reverseRelation: {
              key: 'artist',
              includeInJSON: false
            },
            includeInJSON:  false
          },
          {
            type:           Backbone.HasOne,
            key:            'subscription',
            relatedModel:   Gigmit.Models.Subscription,
            includeInJSON:  false
          },
          {
            collectionType: Gigmit.Collections.SavedSearches,
            type:           Backbone.HasMany,
            key:            'saved_searches',
            relatedModel:   Gigmit.Models.SavedSearch,
            includeInJSON:  false
          },
          {
            type:           Backbone.HasOne,
            key:            'insights',
            relatedModel:   Gigmit.Models.ArtistInsights,
            includeInJSON:  false,
            reverseRelation: {
              key: 'artist',
              includeInJSON: false,
              type: Backbone.HasOne
            }
          }
        ],

        omittedAttributes: [
          'api_key',
          'artist_dates',
          'artistic_profile',
          'catering_rider',
          'default_watchlist_id',
          'epk_applications_left',
          'fanradar',
          'id',
          'insights',
          'is_featured',
          'is_ines_talent',
          'is_premium',
          'main_music_genre',
          'pending_opportunities',
          'played_gigs',
          'profile_image',
          'public_fee',
          'sounds',
          'technical_rider',
          'type',
          'upcoming_gigs',
          'users',
          'watched_gigs'
        ],

        _validation: {
          artist_type: {
            required: true,
            msg: function() { return I18n.t('validations.artists.artist_type.required') }
          },
          fixed_fee: [
            {
              required: function(){
                return !this.get('fixed_fee_on_request');
              },
              msg: function(){ return I18n.t('validations.artists.salary_min.required') }
            },
            {
              pattern: 'digits',
              msg: function(){ return I18n.t('validations.artists.salary_min.digits') }
            }
          ],
          main_music_genre_id: {
            required: true,
            msg: function(){ return I18n.t('validations.artists.main_music_genre_id.required') }
          },
          address: function(){
            return this.get('address').validate();
          },
          tax_rate: {
            min:      0,
            max:      1,
            pattern:  'number',
            required: false
          }
        },

        initialize: function(){
          if(this.isNew()) {
            this.validation = _.extend(this.validation, this._validation)
          } else {
            this.validation = _.extend(this.validation, {
              founding_year: {
                pattern: 'number',
                range: [(new Date()).getFullYear() - 100, new Date().getFullYear()],
                required: false,
                msg: I18n.t('artists.edit_microsite.founding_year.invalid')
              }
            });
          }

          this.initialSlug = this.get('slug');
          this.on( 'change:fixed_fee_on_request', this._nullify_fixed_fee )
        },

        _nullify_fixed_fee: function(){
          if(this.get('fixed_fee_on_request')){
            this.set('fixed_fee', null);
          }
        },

        addSubMusicGenre: function(genre){
          this.model.get('sub_music_genres').add(genre);
        },

        removeSubMusicGenre: function(genre){
          this.model.get('sub_music_genres').remove(genre);
        },

        getAllMusicGenres: function(){
          var genres = _.compact([this.get('main_music_genre')].concat(this.get('sub_music_genres').models));

          return _.compact(_.filter(genres, function(genre){
            return !genre.has('_destroy');
          }));
        },

        hasSounds: function(){
          return _.some(this.get('external_media_items').filter(function(item){
            return _.contains(['soundcloud', 'mixcloud', 'bandcamp'], item.get('vendor'));
          }));
        },

        hasVideos: function(){
          return _.some(this.get('external_media_items').filter(function(item){
            return _.contains(['vimeo', 'youtube'], item.get('vendor'));
          }));
        },

        hasSpotifyAccountConnected: function(){
          return !_.isEmpty(this.get('external_spotify_id'));
        },

        hasYoutubeConnected: function(){
          return !_.has(this.get('fanradar'), 'youtube');
        },

        hasVendorConnected: function(vendor){
          var hasConnected;

          if(vendor == 'spotify') {
            hasConnected = this.hasSpotifyAccountConnected();
          } else {
            hasConnected = _.has(this.get('fanradar'), vendor);
          }

          return hasConnected;
        },

        hasSpotifySongs: function(){
          return !_.isEmpty(this.get('external_media_items').filter(function(item){
            return item.get('vendor') == 'spotify';
          }))
        },

        getSoundSample: function(){
          var sample = _.first( this.get('external_media_items').filter( function( item ){
            return item.get( 'vendor' ) == 'soundcloud';
          } ) );

          return sample;
        },

        // [i18n:dump] I18n.t('activerecord.enums.artist.artist_types.dj')
        // [i18n:dump] I18n.t('activerecord.enums.artist.artist_types.live')
        getArtistTypeText: function(){
          return I18n.t('activerecord.enums.artist.artist_types.' + this.get('artist_type'));
        },

        getBookPath: function(){
          return '/' + [
            this.get('slug'),
            'book'
          ].join('/');
        },

        getFanInsightsPath: function(){
          return '/' + [
            this.get('slug'),
            'fan-insights'
          ].join('/');
        },

        getProfileImageURL: function(){
          var url = Gigmit.Constants.profileImagePlaceholderImageURL;

          if(_.isObject(this.get('profile_image'))) {
            url = this.get('profile_image').imageUrl('large');
          }

          return url
        },

        removeFromDisfavoredEventTypes: function(type){
          var types = _.clone(this.get('disfavored_event_types'));

          types = _.without(types, type);

          this.set('disfavored_event_types', types);
        },

        addToDisfavoredEventTypes: function(type){
          var types = _.clone(this.get('disfavored_event_types'));

          types.push(type);

          this.set('disfavored_event_types', types);
        },

        apiWatchlistPath: function(watchlistId){
          return '/' + [
            'api',
            'v1',
            'artists',
            this.get('slug'),
            'watchlists',
            watchlistId
          ].join('/');
        },

        watchGig: function(gig, watchlistId, options){
          var xhrData = $.extend(true, {gig_id: gig.id}, options);
          var xhr     = $.ajax(this.apiWatchlistPath(watchlistId) + '/add', {data: xhrData, type: 'post'});

          xhr.success(_.bind(function(){
            var watchedGigs = _.clone(this.get('watched_gigs'));
            var watchedGig  = _.find(watchedGigs, function(item){
              return item.id == gig.get('id');
            });

            // ensure watchlist item is present
            watchedGig = watchedGig || {id: gig.id, watchlist_ids: []};

            // remove old item from watchedGigs
            watchedGigs = _.without(watchedGigs, watchedGig);

            // update watchlist_ids list of gig
            watchedGig.watchlist_ids.push(watchlistId)
            watchedGig.watchlist_ids = _.uniq(watchedGig.watchlist_ids);

            // re-add updated item to watchedGigs
            watchedGigs.push(watchedGig);

            this.set('watched_gigs', watchedGigs);
          }, this));

          return xhr;
        },

        unwatchGig: function(gig, watchlistId){
          var xhr = $.ajax(this.apiWatchlistPath(watchlistId) + '/remove', {
            data: { gig_id: gig.get('id') },
            type: 'delete'
          });

          xhr.success(_.bind(function(){
            var watchedGigs  = _.clone(this.get('watched_gigs'));
            var unwatchedGig = _.find(watchedGigs, function(item){
              return item.id == gig.get('id');
            });

            // remove old item from watchedGigs
            watchedGigs = _.without(watchedGigs, unwatchedGig);

            // update watchlist_ids list of gig
            unwatchedGig.watchlist_ids = _.without(unwatchedGig.watchlist_ids, watchlistId);

            // re-add updated item to watchedGigs
            watchedGigs.push(unwatchedGig);

            this.set('watched_gigs', watchedGigs);
          }, this));

          return xhr;
        },

        watchesGig: function(gig, watchlistId) {
          var needle = this.get('watched_gigs').find(function(item){
            return item.id == gig.id && _.contains(item.watchlist_ids, watchlistId);
          });

          return !_.isUndefined(needle);
        },

        fetchInsights: function(vendor, metric){
          var url = [
            '/api/v1/artists',
            this.get('id'),
            'insights',
            vendor,
            metric
          ].join('/');

          return $.ajax({
            url: url,
            data: {
              api_key: this.get('api_key')
            }
          });
        },

        canAddMusicGenre: function(){
          return this.get('is_premium') || this.musicGenresLeftCount() > 0;
        },

        canAccessVenueDatabase: function(){
          return this.get('is_premium') && this.get('subscription').canAccessVenueDatabase()
        },

        musicGenresLeftCount: function(){
          return this.nonPremiumMaxGenreCount - this.getAllMusicGenres().length;
        },

        /**
         * returns public fee information (category of fee)
         *
         * {}                       -> fee on request only
         * {prefix: 'to', fee: 200} -> fee up to 200EUR
         */
        getPublicFee: function(){
          var absoluteFee   = this.get('fixed_fee');
          var maxFee        = Gigmit.Constants.artistSalaryClasses[Gigmit.Constants.artistSalaryClasses.length - 2];
          var fee           = {};
          var stripped;

          if(!this.get('fixed_fee_on_request')) {
            stripped = _.reject(Gigmit.Constants.artistSalaryClasses, function(fee){
              return fee < absoluteFee;
            });

            if(_.isEmpty(stripped)) {
              fee = {
                prefix: 'above',
                fee:    maxFee
              };
            } else {
              fee = {
                prefix: 'to',
                fee:    _.first(stripped)
              };
            }
          }

          return fee;
        },

        decreaseEPKApplicationsLeft: function(){
          this.set('epk_applications_left', _.max([0, this.get('epk_applications_left') - 1]));
        },

        increaseEPKApplicationsLeft: function(){
          this.set('epk_applications_left', _.min([20, this.get('epk_applications_left') + 1]));
        },

        isBillingDataValid: function(){
          var billingAddress        = this.get('billing_address');
          var isBillingAddressValid = !_.isEmpty(billingAddress) && billingAddress.validate() == undefined;
          var isTaxRateValid        = !_.isEmpty(this.get('tax_rate')) && _.isNumber(this.get('tax_rate'));

          return isBillingAddressValid && isTaxRateValid;
        },

        isEpkComplete: function(){
          var isProfileImagePresent = !_.isEmpty(this.get('profile_image'));
          var hasExternalMediaItems = this.get('external_media_items').some();

          return isProfileImagePresent && hasExternalMediaItems;
        },

        toJSON: function(options) {
          var profile = Backbone.RelationalModel.prototype.toJSON.call( this, options )

          if(!this.isNew()) {
            // combine played and upcoming gigs into custom gigs
            this._combineCustomGigs()

            profile = _.omit(Backbone.RelationalModel.prototype.toJSON.call( this, options ), this.omittedAttributes)
          } else {
            profile = _.pick(
              profile,
              'address_attributes',
              'artist_type',
              'billing_address_attributes',
              'currency',
              'fixed_fee',
              'fixed_fee_on_request',
              'is_ccs_member',
              'main_music_genre_id',
              'name',
              'phone_number',
              'slug',
              'sub_music_genre_ids',
              'tags'
            );
          }

          return profile;
        }
      }
    )
  );
})(window)