Ext.define('RaterDashboard.view.Contacts.ContactsViewPhone', {
  extend: 'Ext.Container',
  xtype: 'contactsViewPhone',
  config: {
    layout: {
      type: 'card'
    },
    activeItem: 0,
    selectedContact: null,
    items:[
        {
          xtype: 'contactsList'
        },
        {
          xtype: 'contactDetails'
        }
    ] 
  }
});