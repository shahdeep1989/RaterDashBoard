Ext.define('RaterDashboard.view.twitter.FollowersDetails', {
  extend: 'Ext.Panel',
  xtype: 'followersDetails',
  config: {
        layout: 'vbox',
        scrollable: {
            direction: 'vertical',
            directionLock: true
        },
        items: [
             {
                docked: 'top',
                xtype: 'panel',
                layout: {
                    type:"hbox",
                },
                items: [
                    {
                        xtype: 'button',
                        //text: 'Back',
                        //cls: 'inviteBtnCls',
                        //ui: 'back',
                        iconCls: 'backIconBtnCls',
                        cls: 'refreshBtnCls',
                        itemId: 'backToTwitterFollowerListBtnId',
                        listeners:{
                            painted:function(element) {
                                var btn = Ext.getCmp(element.id);
                                if(btn.up('followersViewTablet')){
                                    btn.hide();
                                }
                            },
                            tap: function(element){
                                //Ext.Viewport.getActiveItem().getActiveItem().getActiveItem().getActiveItem().getActiveItem().animateActiveItem('followersList',{type:'slide', direction:'right'});
                                var btn = Ext.getCmp(element.id);
                                var followersViewPhone = btn.up('followersViewPhone');
                                if(followersViewPhone){
                                    followersViewPhone.animateActiveItem('followersList',{type:'slide', direction:'right'});
                                }
                            }
                        }
                    } ,
                    {
                        flex: 1,
                        xtype: 'panel'
                    },
                    {
                        xtype: 'button',
                        text: 'Invite',
                        cls: 'inviteBtnCls',
                        //itemId: 'contactsInviteBtnId'
                    } 
                ]
            },
            {
                xtype: 'panel',
                layout: 'vbox',
                style: 'padding: 10px;',
                itemId: 'twitterFollowerDetailsPanId'
            }
        ]
  }
});