Ext.define('RaterDashboard.view.Contacts.ContactsList', {
  // extend: 'Ext.Container',
  extend: 'Ext.Panel',
  xtype: 'contactsList',
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
                            xtype: 'searchfield',
                            itemId: 'searchContactsListId',
                            placeHolder: 'Search',
                            flex:1,
                            cls: 'contactsSearchFieldCls',
                            inputCls: 'contactsSearchFieldInputCls',
                            border: 0
                        },
                      /*  {
                            xtype: 'spacer'
                        },
                        {
                            xtype: 'button',
                            text: 'Past Invitation',
                            ui: 'plain'
                        },  */
                        {
                            xtype: 'button',
                            iconCls: 'refreshIconBtnCls',
                            cls: 'refreshBtnCls',
                            itemId: 'contactsRefreshBtnId'
                        } 
                    ]
            },
            {
                xtype: 'list',
                flex: 1,
                store: 'Contacts',
                itemId: 'contactListId',
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