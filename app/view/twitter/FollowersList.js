Ext.define('RaterDashboard.view.twitter.FollowersList', {
  // extend: 'Ext.Container',
  extend: 'Ext.Panel',
  xtype: 'followersList',
  config: {
        layout: 'vbox',
        style: 'border-right:1px solid lightgray;',
        items: [
            {
                    docked: 'top',
                    xtype: 'toolbar',
                    cls: 'contactsToolbarCls',
                    layout: {
                        type:"hbox",
                        //pack:"end"
                    },
                    items: [
                        {
                            xtype: 'button',
                            iconCls: 'backIconBtnCls',
                            cls: 'refreshBtnCls',
                            itemId: 'backTOTwtHomeBtnId',
                            handler: function(){
                                //Ext.Viewport.getActiveItem().getActiveItem().getActiveItem().getActiveItem().getActiveItem().animateActiveItem('twitterActivity',{type:'slide', direction:'right'});
                                Ext.ComponentQuery.query("twitterCardGroup")[0].animateActiveItem('twitterActivity',{type:'slide', direction:'right'})
                            }
                        },
                        {
                            xtype: 'searchfield',
                            itemId: 'searchTwitterFollowerListId',
                            placeHolder: 'Search',
                            flex:1,
                            cls: 'contactsSearchFieldCls',
                            inputCls: 'contactsSearchFieldInputCls',
                            border: 0
                        },
                        {
                            xtype: 'button',
                            iconCls: 'refreshIconBtnCls',
                            cls: 'refreshBtnCls',
                            itemId: 'twitterFollowerRefreshBtnId'
                        }
                    ]
            },
            {
                xtype: 'list',
                flex: 1,
                store: 'TwitterFollowersList',
                itemId: 'twitterFollowersListId',
                grouped: true,
                indexBar : true,
                itemCls : 'contactsListItemCls',
                selectedCls: 'contactsListItemSelectedCls',
                pressedCls: 'contactsListItemSelectedCls',
                itemTpl: '<div> {name} </div>'
            }
        ]
  }
});