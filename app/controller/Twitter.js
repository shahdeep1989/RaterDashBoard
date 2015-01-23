Ext.define('RaterDashboard.controller.Twitter',{
    extend:'Ext.app.Controller',
    
    config:{
    	refs: {
            twitterLoginBtn: 'button[itemId=twitterBtnId]',
    		authorizeBtn: 'button[itemId=idBtnTwitterAuthorize]',
            twtInviteFriendsBtn: "button[itemId=twtInviteFriendsBtnId]",
            twtTweetBtn: "button[itemId=twtTweetBtnId]",
            twtLogoutBtn: "button[itemId=twtLogoutBtnId]",
    		searchTimeline: 'searchfield[itemId=idSearchTimeline]',
            searchTwitterFollowerList: 'searchfield[itemId=searchTwitterFollowerListId]',
            twitterFollowersList: 'list[itemId=twitterFollowersListId]',
            twtRefrestTweetListBtn: 'button[itemId=twtRefrestTweetListBtnId]',
            twitterFollowerRefreshBtn: 'button[itemId=twitterFollowerRefreshBtnId]'
    	},
    	control: {
            twitterLoginBtn: {
                tap: 'twitterLoginBtnTapped'
            },
    		authorizeBtn: {
    			tap: 'onTapBtnTwitterAuthorize'
    		},
            twtInviteFriendsBtn: {
                tap: 'twtInviteFriendsBtnPressed'
            },
            twtTweetBtn: {
                tap: 'twtTweetBtnPressed'
            },
            twtLogoutBtn: {
                tap: 'twtLogoutBtnPressed'
            },
    		searchTimeline: {
    			keyup: 'onSearchTimeline'
    		},
            searchTwitterFollowerList: {
                keyup: 'onSearchTwitterFollowerList'
            },
            twitterFollowersList: {
                itemsingletap: 'showTwitterFollowersDetails'
                //select: 'selectContacts'
            },
            twtRefrestTweetListBtn: {
                tap: 'twtRefrestTweetListBtnPressed'
            },
            twitterFollowerRefreshBtn: {
                tap: 'twitterFollowerRefreshBtnPressed'
            }
    	}
    },


    twitterLoginBtnTapped: function(){
         //Ext.Viewport.getActiveItem().getActiveItem().getActiveItem().getActiveItem().setActiveItem('twitterActivity');   
        Ext.ComponentQuery.query("twitterCardGroup")[0].setActiveItem('twitterActivity');
    },

    twtTweetBtnPressed: function(){
        var me = this;
        var twitterWindow = window.open('https://twitter.com/intent/tweet?text=', '_blank', 'location=no');
        twitterWindow.addEventListener("exit", function(event){
            me.getUserHomeTimeline(twitterWindow);
        });
    },

    onSearchTwitterFollowerList: function(ths){
        var value = ths.getValue();
        console.log(value);
        var twitterFollowersStore = Ext.getStore('TwitterFollowersList');
        twitterFollowersStore.clearFilter();
        
        twitterFollowersStore.filter([
            Ext.create('Ext.util.Filter', {property: "name", value: value, }),
        ]);
    },

    showTwitterFollowersDetails: function( ths, index, target, record){
        var followerListPage = Ext.Viewport.getActiveItem().getActiveItem().getActiveItem().getActiveItem().getActiveItem().getActiveItem();
        
        var detailsPage =  followerListPage.down('#twitterFollowerDetailsPanId');
        var htmlText = "";
        data = record.data;
        var followersViewPhone = target.up('followersViewPhone');
        console.log(followersViewPhone);
        
        if(followersViewPhone){
            followersViewPhone.animateActiveItem('followersDetails',{type:'slide'})
        }

        followerListPage.setSelectedFollower(record);

        if(data.name){
            htmlText += "<div class='nameClsContactsPage'> " + data.name + " </div>";
            htmlText += "</br>";
        }

        if(data.created_at){
            htmlText += "<div class='mobileNumLblClsContactsPage'> Created At </div>";
            htmlText += "<div class='mobileNumClsContactsPage'> " + Ext.Date.format(new Date(data.created_at),"d M,Y") + " </div>";
            htmlText += "<hr class='hrClsContactsPage'>";
        }
        
        if(data.location){
            htmlText += "<div class='mobileNumLblClsContactsPage'> Location </div>";
            htmlText += "<div class='mobileNumClsContactsPage'> " + data.location + " </div>";
            htmlText += "<hr class='hrClsContactsPage'>";
        }

        if(data.friends_count){
            htmlText += "<div class='mobileNumLblClsContactsPage'> Friends count </div>";
            htmlText += "<div class='mobileNumClsContactsPage'> " + data.friends_count + " </div>";
            htmlText += "<hr class='hrClsContactsPage'>";
        }

        if(data.followers_count){
            htmlText += "<div class='mobileNumLblClsContactsPage'> Followers count </div>";
            htmlText += "<div class='mobileNumClsContactsPage'> " + data.followers_count + " </div>";
            htmlText += "<hr class='hrClsContactsPage'>";
        }

        if(data.following){
            htmlText += "<div class='mobileNumLblClsContactsPage'> Following </div>";
            htmlText += "<div class='mobileNumClsContactsPage'> " + data.following + " </div>";
            htmlText += "<hr class='hrClsContactsPage'>";
        }

        if(data.favourites_count){
            htmlText += "<div class='mobileNumLblClsContactsPage'> Favourites count </div>";
            htmlText += "<div class='mobileNumClsContactsPage'> " + data.favourites_count + " </div>";
            htmlText += "<hr class='hrClsContactsPage'>";
        }

        if(data.statuses_count){
            htmlText += "<div class='mobileNumLblClsContactsPage'> Statuses count </div>";
            htmlText += "<div class='mobileNumClsContactsPage'> " + data.statuses_count + " </div>";
            htmlText += "<hr class='hrClsContactsPage'>";
        }

        if(data.profile_image_url){
            htmlText += "<div class='mobileNumLblClsContactsPage'> Following </div>";
            htmlText += "<div class='mobileNumClsContactsPage'> " + data.following + " </div>";
            htmlText += "<hr class='hrClsContactsPage'>";
        }

        if(data.profile_image_url){
            htmlText += "<img src=" + data.profile_image_url + "/>";
            htmlText += "<hr class='hrClsContactsPage'>";
        }

        detailsPage.setHtml(htmlText);
        //Ext.Viewport.getActiveItem().getActiveItem().getActiveItem().getActiveItem().getActiveItem().animateActiveItem('followersDetails',{type:'slide'});
    },

    twtLogoutBtnPressed: function(){
        localStorage.setItem('twtToken',"");
        localStorage.setItem('twtTokenSecret',"");
        localStorage.setItem('twtUserId',"");
        localStorage.setItem('twtScreenName',"");
        Ext.getStore('TwitterFollowersList').removeAll(false);
        Ext.getStore('TwitterHomeTimelines').removeAll(false);
        Ext.getStore('TwitterUserTimelines').removeAll(false);
        Ext.Viewport.getActiveItem().getActiveItem().getActiveItem().getActiveItem().setActiveItem('twitterLogin');
    },

    twtInviteFriendsBtnPressed: function(isRefresh){
        if(isRefresh == true){
            Ext.getStore('TwitterFollowersList').removeAll(false);
            this.twtInviteFriendsBtnPressedTwo(-1);    
            return;
        }
        if(Ext.getStore('TwitterFollowersList').getCount() > 0){
            //Ext.Viewport.getActiveItem().getActiveItem().getActiveItem().getActiveItem().setActiveItem('followersCardGroup');
            Ext.ComponentQuery.query("twitterCardGroup")[0].setActiveItem('followersCardGroup');
            return;
        }
        Ext.getStore('TwitterFollowersList').removeAll(false);
        this.twtInviteFriendsBtnPressedTwo(-1);
    },

    twtInviteFriendsBtnPressedTwo: function(cursor){
        var me = this;
        var twtFriendsStore = Ext.getStore('TwitterFollowersList');
        var cursorParam = "";
      /*  if(!cursor){
            cursor = -1;
            twtFriendsStore.removeAll(false);
        }
        else
        { */
            cursorParam = "&cursor=" + cursor;
        //}
        //alert("cursor: " + cursor);
        Ext.Viewport.setMasked({xtype: 'loadmask'});
        oauth.get('https://api.twitter.com/1.1/followers/list.json?screen_name=' + localStorage.getItem('twtScreenName') + '&user_id=' + localStorage.getItem('twtUserId') + cursorParam, 
            //https://api.twitter.com/1.1/statuses/home_timeline.json?access_token=2856765261-ucoM0CGSJtC7RoxEDsj5iMGG1QiII1pjAVMcVjV
            function(resData){
                //alert(JSON.stringify(resData));
                console.log("data1: " + resData);
                var twtFriendsData = Ext.decode(resData.text);
                cursor = twtFriendsData.next_cursor;
                twtFriendsData = twtFriendsData.users;
                //alert("cursor: " + cursor);
                //alert(twtFriendsData);
                console.log(twtFriendsData);
                //alert("length of data:  " + twtFriendsData.length);
                twtFriendsStore.add(twtFriendsData);
                if(cursor == 0)
                {
                    Ext.Viewport.setMasked(false);
                    //twtFriendsData = twtFriendsData.users;
                    //alert("2:  " + twtFriendsData.length);
                    //twtFriendsStore.add(twtFriendsList);
                    //alert("length of store" + twtFriendsStore.getCount());
                    //Ext.Viewport.getActiveItem().getActiveItem().getActiveItem().getActiveItem().setActiveItem('followersCardGroup');
                    //path = main / mainCardGroup / apCentralMainTabPanel / twitterCardGroup
                    Ext.ComponentQuery.query("twitterCardGroup")[0].setActiveItem('followersCardGroup');
                }
                else
                {
                    me.twtInviteFriendsBtnPressedTwo(cursor);    
                }
            }, 
            function(err){
                //alert("7");
                Ext.Viewport.setMasked(false);
                alert("error: " + JSON.stringify(err));
            }
        );
    },

    onTapBtnTwitterAuthorize: function(){
        //alert("in");
        var me = this;
        var options = {
                consumerKey: 'PwE7u8Nusi6qZcNbebPZ5MNOD', // YOUR Twitter CONSUMER_KEY
                consumerSecret: 'mlBpy0w00NuuZBIOhQswXR12FsFwtGJ21g7IrxfpQTqf2xzTDG', // YOUR Twitter CONSUMER_SECRET
                callbackUrl: "https://twitter.com"
            };
        oauth = OAuth(options);
        //window.oauth = OAuth(options);
        //alert("1");

        if(localStorage.getItem('twtToken')){
            oauth.setAccessToken(localStorage.getItem('twtToken'), localStorage.getItem('twtTokenSecret'));
            me.getUserHomeTimeline();
            return;
        }

        Ext.Viewport.setMasked({xtype: 'loadmask'});
        oauth.get('https://api.twitter.com/oauth/request_token',
            function(data) {
                //alert("2");
                Ext.Viewport.setMasked(false);
                requestParams = data.text;
                console.log("Success: ",data);
                //alert("data: " + JSON.stringify(data));
                var twitterWindow = window.open('https://api.twitter.com/oauth/authorize?'+data.text, '_blank', 'location=no');
                if(window.phonegap){
                //if(true){
                    //alert("3");
                    twitterWindow.addEventListener('loadstart',function(event){
                        var jsonUrlParams;
                        if(event.url.match("https://twitter.com")){
                            //alert("4");
                            //alert("event: " + JSON.stringify(event));
                            //alert("event: " + JSON.stringify(event.url));
                            jsonUrlParams = JSON.parse('{"'+event.url.split("?")[1].replace(/\=/g,'":"').replace(/\&/g,'","')+'"}');
                            oauth.get('https://api.twitter.com/oauth/access_token?'+event.url.split("?")[1],
                                function(data) {
                                    twitterWindow.close();

                                    tokenStr = data.text.split('&')[0];
                                    tokenSecStr = data.text.split('&')[1];
                                    userIdStr = data.text.split('&')[2];
                                    screenNameStr = data.text.split('&')[3];

                                    token = tokenStr.split('=')[1];
                                    tokenSec = tokenSecStr.split('=')[1];
                                    userId = userIdStr.split('=')[1];
                                    screenName = screenNameStr.split('=')[1];

                                    localStorage.setItem('twtToken',token);
                                    localStorage.setItem('twtTokenSecret',tokenSec);
                                    localStorage.setItem('twtUserId',userId);
                                    localStorage.setItem('twtScreenName',screenName);


                                    oauth.setAccessToken(token, tokenSec);
                                    me.getUserHomeTimeline();
                                    
                                    //oauth.get('https://api.twitter.com/1.1/statuses/home_timeline.json?count=10', 
                                 /*   oauth.get('https://api.twitter.com/1.1/statuses/home_timeline.json?count=200', 
                                        //https://api.twitter.com/1.1/statuses/home_timeline.json?access_token=2856765261-ucoM0CGSJtC7RoxEDsj5iMGG1QiII1pjAVMcVjV
                                        function(resData){
                                            //alert("6");
                                            console.log("data: " + JSON.stringify(resData));
                                            var twtHomeData = Ext.decode(resData.text);
                                            var twtStore = Ext.getStore('TwitterHomeTimelines');
                                            twtStore.removeAll(false);
                                            twtStore.add(twtHomeData);
                                            me.getUserTimeline();
                                        }, 
                                        function(err){
                                            //alert("7");
                                            alert("error: " + JSON.stringify(err));
                                        }
                                    );
                                    */
                                },
                                function(data){
                                    //alert("8");
                                    //alert("error");
                                    alert("error :  " + JSON.stringify(data));
                                    console.log("ERROR: "+data);
                                }
                            );
                        }
                    });
                }else{   // for testing purpose in development in desktop
                    localStorage.setItem('twtToken','2856765261-ucoM0CGSJtC7RoxEDsj5iMGG1QiII1pjAVMcVjV');
                    localStorage.setItem('twtTokenSecret','RZs5FfJR5B8XLYxZScaD0SasTQHjhfCTZDoW7nQQ8fgIj');
                    localStorage.setItem('twtUserId',"2856765261");
                    localStorage.setItem('twtScreenName',"ashrossusa");
                    oauth.setAccessToken('2856765261-ucoM0CGSJtC7RoxEDsj5iMGG1QiII1pjAVMcVjV','RZs5FfJR5B8XLYxZScaD0SasTQHjhfCTZDoW7nQQ8fgIj');
                    me.getUserHomeTimeline();
                }


            },function(data) {
                Ext.Viewport.setMasked(false);
                console.log("ERROR: "+data);
            }
        );
    },


    getUserHomeTimeline: function(twitterWindow){
        var me = this;
        if(twitterWindow){
            twitterWindow.removeEventListener('exit', function(event){

            });
        }
        Ext.Viewport.setMasked({xtype: 'loadmask'});
        oauth.get('https://api.twitter.com/1.1/statuses/home_timeline.json?count=200', 
            //https://api.twitter.com/1.1/statuses/home_timeline.json?access_token=2856765261-ucoM0CGSJtC7RoxEDsj5iMGG1QiII1pjAVMcVjV
            function(resData){
                Ext.Viewport.setMasked(false);
                //alert("6");
                //console.log("data: " + JSON.stringify(resData));
                var twtHomeData = Ext.decode(resData.text);
                var twtStore = Ext.getStore('TwitterHomeTimelines');
                twtStore.removeAll(false);
                twtStore.add(twtHomeData);
                me.getUserTimeline();
            }, 
            function(err){
                //alert("7");
                Ext.Viewport.setMasked(false);
                alert("error: " + JSON.stringify(err));
            }
        );        
    },

    // twiter user timeline
    //https://api.twitter.com/1.1/statuses/user_timeline.json?count=200&trim_user=true&user_id=2856765261&screen_name=ashrossusa
    getUserTimeline: function(){
      /*  var options = {
                consumerKey: 'PwE7u8Nusi6qZcNbebPZ5MNOD', // YOUR Twitter CONSUMER_KEY
                consumerSecret: 'mlBpy0w00NuuZBIOhQswXR12FsFwtGJ21g7IrxfpQTqf2xzTDG', // YOUR Twitter CONSUMER_SECRET
                callbackUrl: "https://twitter.com"
            };
        oauth = OAuth(options);
        oauth.setAccessToken('2856765261-ucoM0CGSJtC7RoxEDsj5iMGG1QiII1pjAVMcVjV','RZs5FfJR5B8XLYxZScaD0SasTQHjhfCTZDoW7nQQ8fgIj');
        */
        Ext.Viewport.setMasked({xtype: 'loadmask'});
        oauth.get('https://api.twitter.com/1.1/statuses/user_timeline.json?count=200&trim_user=true&user_id=' + localStorage.getItem('twtUserId') + '&screen_name=' + localStorage.getItem('twtScreenName'),
            function(resData){
                Ext.Viewport.setMasked(false);
                //alert("6");
                //console.log("data: " + JSON.stringify(resData));
                var twtHomeData = Ext.decode(resData.text);
                var twtStore = Ext.getStore('TwitterUserTimelines');
                twtStore.removeAll(false);
                twtStore.add(twtHomeData);
            }, 
            function(err){
                //alert("7");
                Ext.Viewport.setMasked(false);
                alert("error: " + JSON.stringify(err));
            }
        );
    },

    twtRefrestTweetListBtnPressed: function(){
        var me = this;
        me.getUserHomeTimeline();
    },

    twitterFollowerRefreshBtnPressed: function(){
        var me = this;
        me.twtInviteFriendsBtnPressed(true);
    },

    onSearchTimeline: function(ths){
        var value = ths.getValue();
        var twitterTweetStore = "";
        if(ths.getParent().getParent().down('segmentedbutton').getPressedButtons()[0]._text == "My Tweets"){
            twitterTweetStore = Ext.getStore('TwitterUserTimelines');
            twitterTweetStore.clearFilter();        
            twitterTweetStore.filter([
                Ext.create('Ext.util.Filter', {property: "text", value: value }),
            ]);
        }
        else{
            twitterTweetStore = Ext.getStore('TwitterHomeTimelines');
            twitterTweetStore.clearFilter();        
            twitterTweetStore.filter([
                Ext.create('Ext.util.Filter', {property: "text", value: value }),
            ]);
        }
    }
});


/*
working

https://api.twitter.com/1.1/statuses/home_timeline.json?oauth_consumer_key=DC0sePOBbQ8bYdC8r4Smg&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1418648443&oauth_nonce=-726876059&oauth_version=1.0&oauth_token=2904748999-ox8vjdGsCebftSXwRIl8lE9oNVpvdMBQPrWnidH&oauth_signature=pmtoWbXBZaYQPU74dd7r6pG1rV8%3D

*/