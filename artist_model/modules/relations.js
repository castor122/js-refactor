export const relations = [
  {
    collectionType: Gigmit.Collections.CustomGigs,
    type: Backbone.HasMany,
    key: "custom_gigs",
    relatedModel: Gigmit.Models.CustomGig,
    includeInJSON: false,
    reverseRelation: {
      key: "artist",
      includeInJSON: false
    }
  },
  {
    collectionType: Gigmit.Collections.Representations,
    type: Backbone.HasMany,
    key: "representations",
    relatedModel: Gigmit.Models.Representation,
    includeInJSON: false,
    reverseRelation: {
      key: "artist",
      includeInJSON: false
    }
  },
  {
    collectionType: Gigmit.Collections.CustomGigs,
    type: Backbone.HasMany,
    key: "played_gigs",
    relatedModel: Gigmit.Models.PlayedGig,
    includeInJSON: ["date_from", "address", "title"],
    reverseRelation: {
      key: "artist",
      includeInJSON: false
    }
  },
  {
    collectionType: Gigmit.Collections.CustomGigs,
    type: Backbone.HasMany,
    key: "upcoming_gigs",
    relatedModel: Gigmit.Models.UpcomingGig,
    includeInJSON: ["date_from", "address", "title"],
    reverseRelation: {
      key: "artist",
      includeInJSON: false
    }
  },
  {
    collectionType: Gigmit.Collections.ArtistReleases,
    type: Backbone.HasMany,
    key: "releases",
    keySource: "releases",
    keyDestination: "artist_releases_attributes",
    relatedModel: Gigmit.Models.ArtistRelease,
    includeInJSON: ["id", "label", "release_type", "title", "year", "_destroy"],
    reverseRelation: {
      key: "artist",
      includeInJSON: false
    }
  },
  {
    type: Backbone.HasMany,
    key: "members",
    keySource: "members",
    keyDestination: "members",
    relatedModel: Gigmit.Models.ArtistMember,
    includeInJSON: ["id", "name", "position"]
  },
  {
    type: Backbone.HasOne,
    key: "artistic_profile",
    relatedModel: Gigmit.Models.ArtisticProfile,
    includeInJSON: false,
    reverseRelation: {
      key: "artist",
      includeInJSON: false
    }
  },
  {
    type: Backbone.HasOne,
    key: "main_music_genre",
    relatedModel: Gigmit.Models.MusicGenre,
    includeInJSON: false
  },
  {
    type: Backbone.HasMany,
    key: "sub_music_genres",
    keyDestination: "sub_music_genre_ids",
    relatedModel: Gigmit.Models.SubMusicGenre,
    includeInJSON: "id",
    reverseRelation: {
      key: "artist",
      includeInJSON: false
    }
  },
  {
    collectionType: Gigmit.Collections.ArtistExternalMediaItems,
    type: Backbone.HasMany,
    key: "external_media_items",
    keySource: "external_media_items",
    keyDestination: "external_media_items_attributes",
    relatedModel: Gigmit.Models.ExternalMediaItem,
    includeInJSON: [
      "id",
      "title",
      "vendor",
      "vendor_item_id",
      "sort_order",
      "_destroy"
    ],
    reverseRelation: {
      key: "artist",
      includeInJSON: false
    }
  },
  {
    type: Backbone.HasOne,
    key: "address",
    keySource: "address",
    keyDestination: "address_attributes",
    relatedModel: Gigmit.Models.HomebaseAddress,
    includeInJSON: ["city", "zip_code", "country"],
    reverseRelation: {
      key: "artist",
      includeInJSON: false
    }
  },
  {
    type: Backbone.HasOne,
    key: "billing_address",
    keySource: "billing_address",
    keyDestination: "billing_address_attributes",
    relatedModel: Gigmit.Models.Address,
    includeInJSON: [
      "name",
      "street",
      "street_number",
      "city",
      "zip_code",
      "country"
    ]
  },
  {
    type: Backbone.HasMany,
    key: "press_media_items",
    keySource: "press_media_items",
    keyDestination: "press_media_items_hash",
    relatedModel: Gigmit.Models.PressMediaItem,
    reverseRelation: {
      key: "artist",
      includeInJSON: false
    }
  },
  {
    type: Backbone.HasOne,
    key: "profile_image",
    keySource: "profile_image",
    keyDestination: "profile_image",
    relatedModel: Gigmit.Models.ProfileImage,
    includeInJSON: false,
    reverseRelation: {
      key: "artist",
      type: Backbone.HasOne,
      includeInJSON: false
    }
  },
  {
    type: Backbone.HasMany,
    key: "social_links",
    keySource: "social_links",
    keyDestination: "social_links_attributes",
    relatedModel: Gigmit.Models.SocialLink,
    includeInJSON: ["id", "title", "provider", "url", "_destroy"],
    reverseRelation: {
      key: "artist",
      includeInJSON: false
    }
  },
  {
    type: Backbone.HasMany,
    key: "permissions",
    relatedModel: Gigmit.Models.Permission,
    includeInJSON: false
  },
  {
    collectionType: Gigmit.Collections.ArtistDates,
    type: Backbone.HasMany,
    key: "artist_dates",
    relatedModel: Gigmit.Models.ArtistDate,
    reverseRelation: {
      key: "artist",
      includeInJSON: false
    },
    includeInJSON: false
  },
  {
    type: Backbone.HasOne,
    key: "subscription",
    relatedModel: Gigmit.Models.Subscription,
    includeInJSON: false
  },
  {
    collectionType: Gigmit.Collections.SavedSearches,
    type: Backbone.HasMany,
    key: "saved_searches",
    relatedModel: Gigmit.Models.SavedSearch,
    includeInJSON: false
  },
  {
    type: Backbone.HasOne,
    key: "insights",
    relatedModel: Gigmit.Models.ArtistInsights,
    includeInJSON: false,
    reverseRelation: {
      key: "artist",
      includeInJSON: false,
      type: Backbone.HasOne
    }
  }
]
