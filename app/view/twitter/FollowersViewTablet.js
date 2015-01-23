Ext.define('RaterDashboard.view.twitter.FollowersViewTablet', {
  // extend: 'Ext.Container',
  extend: 'Ext.Panel',
  xtype: 'followersViewTablet',
  config: {
    layout: {
      type: 'hbox',
      //pack: 'center',
      //align: 'center'
    },
    selectedFollower: null,
    items:[
        {
          flex: 2,
          xtype: 'followersList'
        },
        {
          flex: 3,
          xtype: 'followersDetails'
        }
    ] 
  }
});