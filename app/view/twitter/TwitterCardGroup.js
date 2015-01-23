Ext.define("RaterDashboard.view.twitter.TwitterCardGroup", {
  extend: 'Ext.Container',
  xtype: 'twitterCardGroup',
  requires: [
    'RaterDashboard.view.twitter.TwitterLogin',
    'RaterDashboard.view.twitter.TwitterActivity',
    'RaterDashboard.view.twitter.TwitterFollowerList',
    'RaterDashboard.view.twitter.TwtAccordionListItem',
    'RaterDashboard.view.twitter.FollowersCardGroup'
  ],
  config: {
    layout: 'card',
    items: [
      {
          xtype: 'twitterActivity' 
      },
      {
          xtype: 'followersCardGroup'
      },
      {
         xtype: 'twitterLogin'
      }
    /*  {
          xtype: 'twitterFollowerList' 
      }  */
    ],
    listeners: {
        painted: function(){
          if(Ext.Viewport.getActiveItem()){
            Ext.Viewport.getActiveItem().getActiveItem().down('#twtRefrestTweetListBtnId').setHidden(false);
            Ext.Viewport.getActiveItem().getActiveItem().down('#twtLogoutBtnId').setHidden(false);
          }
        },
        hide: function(){
          if(Ext.Viewport.getActiveItem()){
            Ext.Viewport.getActiveItem().getActiveItem().down('#twtRefrestTweetListBtnId').setHidden(true);
            Ext.Viewport.getActiveItem().getActiveItem().down('#twtLogoutBtnId').setHidden(true);
          }
        }
    }
  }
});