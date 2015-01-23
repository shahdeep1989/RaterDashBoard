Ext.define('RaterDashboard.view.twitter.TwitterFollowerList', {
  extend: 'Ext.Container',
  xtype: 'twitterFollowerList',
  config: {
    layout: {
      type: 'vbox',
      //pack: 'center',
      //align: 'center'
    },
    items: [
    /*  {
	         xtype: 'panel',
	         html: '<div class="fb-login-button" data-max-rows="2" data-size="large" data-show-faces="true" data-auto-logout-link="true"></div>'
      },  */
      {

          docked: 'top',
          xtype: 'toolbar',
          layout: {
              type:"hbox",
              pack:"end"
          },
          cls: 'twitterToolbarCsl',
          items: 
          [
              {
                  xtype: 'searchfield',
                  //flex: 1,
                  cls: 'searchfieldCls',
                  inputCls: 'searchfieldInputCls',
                  placeHolder: 'Search'
              },
              {
                  xtype: 'spacer'
              },
          ]
      },
      {
          xtype: 'panel',
          layout: 'hbox',
          flex: 1,
          items: [
              {
                  xtype: 'list',
                  flex: 1,
                  store: 'TwitterFollowersList',
                  itemTpl: new Ext.XTemplate(
                            '<table border="0px" style="padding:0px; margin-bottom:0px;">',
                              '<tr>',
                                //'<td style="width:10%; min-width:50px;"><img src="{uid:this.setAvatar}" height="auto" width="auto"/></td>',
                                '<td style="width:80%; font-size: 1.2em; font-weight: bold;">',
                                    '<div>{name} </div>',
                                '</td>',
                              '</tr>',
                            '</table>',
                            {
                              setAvatar: function(uid){
                                    //return "https://graph.facebook.com/" + uid + "/picture?type=small";
                              } 
                            }
                      ),
              }
          ]
      }
    ]
  }
});