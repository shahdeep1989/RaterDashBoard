Ext.define('RaterDashboard.model.TwitterFollowersList', {
  extend: 'Ext.data.Model',
  config: {
    identifier: 'uuid',
    fields: [
      'id_str',
      'name',
      'created_at',
      'location',
      'friends_count',
      'followers_count',
      'following',
      'favourites_count',
      'screen_name',
      'statuses_count',
      'profile_image_url'
    ]
  }
});