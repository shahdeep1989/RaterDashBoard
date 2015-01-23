Ext.define('RaterDashboard.view.twitter.TwitterActivity', {
  extend: 'Ext.Container',
  xtype: 'twitterActivity',
  config: {
    layout: {
      type: 'vbox',
      //pack: 'center',
      //align: 'center'
    },
    items: [
            {
                docked: 'top',
                xtype: 'toolbar',
                cls: 'twitterToolbarCsl',
                layout: {
                    type:"hbox",
                    //pack:"end"
                },
                items: [
                    {
                        xtype: 'button',
                        itemId: 'idBtnTwitterAuthorize',
                        text: 'Login',
                        hidden: true,
                        ui: 'plain'
                    },
                    {
                        xtype: 'searchfield',
                        itemId: 'idSearchTimeline',
                        placeHolder: 'Search',
                        cls: 'twitterSearchFieldCls'
                    },
                    {
                        xtype: 'spacer'
                    },
                    {
                        xtype: 'button',
                        itemId: 'twtInviteFriendsBtnId',
                        //cls: 'fbBtnCls',
                        ui: 'plain',
                        text: "Invite Friends"
                    },
                    {
                        xtype: 'button',
                        text: 'Tweet',
                        itemId: 'twtTweetBtnId',
                        ui: 'plain'
                    },
                /*    {
                        xtype: 'button',
                        iconCls: 'refreshIconBtnCls',
                        cls: 'refreshBtnCls',
                        itemId: 'twtRefrestTweetListBtnId'
                    }, */
                  /*  {
                        xtype: 'button',
                        iconCls: 'fbIconBtnCls'
                        //text: 'Camera',
                        //ui: 'plain'
                    } */
                /*    {
                        xtype: 'button',
                        icon: './resources/images/power_on.png',
                        iconCls: 'logoutBtnIconCls',
                        cls: 'logoutBtnCls',
                        itemId: 'twtLogoutBtnId'
                    }  */
                ]
            },
          /*  {
                xtype: 'accordionlist',
                //store: Ext.create('AccordionListExample.store.Components'),
                //store: Ext.create('RaterDashboard.store.TwitterHomeTimelines'),
                store: Ext.create('RaterDashboard.store.TwitterHomeTimelines'),
                //store: 'TwitterHomeTimelines',
                flex: 1,
                //indent: true,
                //displayField : 'user',
                // Specify useComponents.
                //useComponents: true,
                // Specify data item's xtype you created.
                //defaultType: 'twtAccordionlistitem',

                listeners: {
                    initialize: function() {
                        this.load();
                    }
                }
            },  */
            {
                xtype: 'tabbar',
                height: '3em',
                docked: 'top',
                activeTab: 0,
                items: [
                    {
                        title: 'My Tweets'
                    },
                    {
                        title: 'All Tweets'
                    }
                ],
                listeners: {
                    activetabchange: function(ths, val){
                        var me = this;
                        //if(pressed == 'on' || pressed == true)
                        {
                            var storeName = "";
                            if(val._text == 'My Tweets'){
                                storeName = "TwitterUserTimelines";
                            }
                            else{
                                storeName = "TwitterHomeTimelines";
                            }
                            me.getParent().down('list').setStore(storeName);
                        }
                    }
                }                
            },
            {
                xtype: 'segmentedbutton',
                allowMultiple: false,
                cls: 'twtSegmentedBtnContainerCls',
                pressedCls: 'twtSegmentedPressedBtnCls',
                hidden: true,
                items: [
                    {
                        xtype: 'spacer'
                    },
                    {
                        text: 'My Tweets',
                        cls: 'twtSegmentedBtnCls',
                        pressed: true
                    },
                    {
                        text: 'All Tweets',
                        cls: 'twtSegmentedBtnCls',
                    },
                    {
                        xtype: 'spacer'
                    }
                ],
                listeners: {
                    toggle: function(container, button, pressed){
                        var me = this;
                        if(pressed == 'on' || pressed == true)
                        {
                            console.log(button.getText());
                            var storeName = "";
                            if(button.getText() == 'My Tweets'){
                                storeName = "TwitterUserTimelines";
                            }
                            else{
                                storeName = "TwitterHomeTimelines";
                            }
                            me.getParent().down('list').setStore(storeName);
                        }
                    }
                }
            },
            {
                xtype:'list',
                flex: 1,
                store: 'TwitterUserTimelines',
                //itemTpl: '<div><img src="{user.profile_image_url_https}"/>{text}{}"/></div>',
                plugins: [
                    {
                        xclass: 'Ext.plugin.ListPaging',
                        autoPaging: true
                    }
                ],

                itemTpl: new Ext.XTemplate(
                    '<div style="display:flex;">',
                        '<img src="{user.profile_image_url_https}" height=60 width=60 {user.profile_image_url_https:this.isImagePresent()} />',
                        '<div style="flex:1;padding-left: 0.5em;">',
                            '<div><b>{user.name}</b></div>',
                            '<div>{text}</div>',
                            '{[this.getImages(values.entities.media)]}',
                        '</div>',
                    '</div>',
                    {
                        getImages : function(media){
                            var imgs = ""
                            if(media && media.length){
                                media.forEach(function(data){
                                    imgs+="<img height=80 src='"+data.media_url_https+"' style='padding: 0.1em;'>"
                                });
                            }
                            return imgs;
                        },
                        isImagePresent: function(imgUrl){
                            if(imgUrl){
                                return "";
                            }
                            return "hidden";
                        }
                    }
                )
            }
    ],
    listeners: {
        painted: function(){
            if(localStorage.getItem('twtToken') == null || localStorage.getItem('twtToken') == "" || Ext.getStore('TwitterHomeTimelines').getCount()<=0){
                RaterDashboard.app.getController('Twitter').onTapBtnTwitterAuthorize();
            }
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