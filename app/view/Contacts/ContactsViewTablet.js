Ext.define('RaterDashboard.view.Contacts.ContactsViewTablet', {
  // extend: 'Ext.Container',
  extend: 'Ext.Panel',
  xtype: 'contactsViewTablet',
  config: {
    layout: {
      type: 'hbox',
      //pack: 'center',
      //align: 'center'
    },
    selectedContact: null,
    items:[
        {
          flex: 2,
          xtype: 'contactsList'
        },
        {
          flex: 3,
          xtype: 'contactDetails'
        }
    ] 
  }
});