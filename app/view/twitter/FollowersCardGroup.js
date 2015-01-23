Ext.define("RaterDashboard.view.twitter.FollowersCardGroup", {
  extend: 'Ext.Container',
  xtype: 'followersCardGroup',
  requires: [
    'RaterDashboard.view.twitter.FollowersViewPhone',
    'RaterDashboard.view.twitter.FollowersViewTablet',
    'RaterDashboard.view.twitter.FollowersList',
    'RaterDashboard.view.twitter.FollowersDetails'
  ],
  config: {
    layout: 'card',
    activeItem: 0,
    style: 'background:white;',
    items: [
      {
	       xtype: 'followersViewTablet',
      },
      {
         xtype: 'followersViewPhone'
      }
    ],
    listeners: {
        painted: function(){
              //RaterDashboard.app.getController('Contacts').getContactsList();
        },
        resize: function(element,eOpts){
          console.log("in");
          activeContactsView = Ext.getCmp(element.id).getActiveItem();
          if(eOpts.width >= 730 && activeContactsView.xtype==='followersViewPhone'){
            Ext.getCmp(element.id).setActiveItem('followersViewTablet');
          }else if(eOpts.width < 730 && activeContactsView.xtype==='followersViewTablet'){
            Ext.getCmp(element.id).setActiveItem('followersViewPhone');
          }
        }
    }
  }
});