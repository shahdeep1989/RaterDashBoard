Ext.define("RaterDashboard.view.MainCardGroup", {
  extend: 'Ext.Container',
  xtype: 'mainCardGroup',
  requires: [
    'RaterDashboard.view.APCentralMainTabPanel',
//    'RaterDashboard.view.users.Login',
//    'RaterDashboard.view.maps.Maps',
//    'RaterDashboard.view.more.MoreCardGroup',
//    'RaterDashboard.view.sponsor.Sponsor',
//    'RaterDashboard.view.schedule.Schedule',
//    'RaterDashboard.view.rater.Rater',
    'RaterDashboard.view.home.HomeMainTabPanel'
//    'RaterDashboard.view.facebook.FacebookCardGroup',
//    'RaterDashboard.view.video.VideoCardGroup'
  ], 
  config: {
    layout: 'card',
    items: [
      {
	xtype: 'titlebar',
	title: 'AP Central',
	ui: 'mainToolbar',
	itemId: 'mainToolbarId',
	docked: 'top',
	items: [
		{
			xtype: 'button',
			itemId: 'navBtnId',
			iconCls: 'list',
			ui: 'plain'
		},
		{
			xtype: 'button',
			hidden: true,
			itemId: 'backButtonId',
			text: '',
			iconCls: 'backBtnIcon',
			ui: 'plain'
		},
		{
			xtype: 'spacer'
		},
	  	{
	        xtype: 'button',
	        iconCls: 'refreshWhiteIconBtnCls',
	        align: 'right',
	        cls: 'refreshBtnCls',
	        hidden: true,
	        itemId: 'twtRefrestTweetListBtnId',
	    },
	    {
	        xtype: 'button',
	        iconCls: 'logoutWhiteIconBtnCls',
	        cls: 'refreshBtnCls',
	        align: 'right',
	        hidden: true,
	        itemId: 'twtLogoutBtnId'
	    }
	]
      },
      {
	xtype: 'apCentralMainTabPanel'
      },
//      {
//	xtype: 'login'
//      },
//      {
//	xtype: 'maps'
//      },
//      {
//	xtype: 'sponsor'
//      },
//      {
//	xtype: 'schedule'
//      },
//      {
//	xtype: 'rater'
//      },
//      {
//	xtype: 'videoCardGroup'
//      },
//      {
//	xtype: 'moreCardGroup'
//      },
      {
	xtype: 'homeMainTabPanel'
      }
//      {
//	xtype: 'facebookCardGroup'
//      }
    ]
  }
});