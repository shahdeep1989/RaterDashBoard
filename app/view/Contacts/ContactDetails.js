Ext.define('RaterDashboard.view.Contacts.ContactDetails', {
  extend: 'Ext.Panel',
  xtype: 'contactDetails',
  config: {
        layout: 'vbox',
        scrollable: {
            direction: 'vertical',
            directionLock: true
        },
        items: [
           /* {
                    docked: 'top',
                    xtype: 'toolbar',
                    cls: 'contactsToolbarCls',
                    layout: {
                        type:"hbox",
                        //pack:"end"
                    },
                    items: [
                        {
                            xtype: 'spacer'
                        },
                        {
                            xtype: 'button',
                            //iconCls: 'refreshIconBtnCls',
                            text: 'Invite',
                            cls: 'inviteBtnCls',
                            //style: 'font-size: 1.3em;',
                            itemId: 'contactsInviteBtnId'
                        } 
                    ]
            },  */
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
                        itemId: 'backToContactListBtnId',
                        listeners:{
                            painted:function(element) {
                                var btn = Ext.getCmp(element.id)
                                if(btn.up('contactsViewTablet')){
                                    btn.hide();
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
                        itemId: 'contactsInviteBtnId'
                    } 
                ]
            },
            {
                xtype: 'panel',
                layout: 'vbox',
                style: 'padding: 10px;',
                itemId: 'contactDetailsPanId'
            }
        ]
  }
});