Ext.define('RaterDashboard.view.twitter.FollowersViewPhone', {
  extend: 'Ext.Container',
  xtype: 'followersViewPhone',
  config: {
    layout: {
      type: 'card'
    },
    activeItem: 0,
    selectedFollower: null,
    items:[
        {
          xtype: 'followersList'
        },
        {
          xtype: 'followersDetails'
        }
    ] 
  }
});