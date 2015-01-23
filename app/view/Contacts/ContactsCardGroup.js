Ext.define("RaterDashboard.view.Contacts.ContactsCardGroup", {
  extend: 'Ext.Container',
  xtype: 'contactsCardGroup',
  requires: [
    'RaterDashboard.view.Contacts.ContactsViewPhone',
    'RaterDashboard.view.Contacts.ContactsViewTablet',
    'RaterDashboard.view.Contacts.ContactsList',
    'RaterDashboard.view.Contacts.ContactDetails'
  ],
  config: {
    layout: 'card',
    activeItem: 0,
    style: 'background:white;',
    items: [
      {
	       xtype: 'contactsViewTablet',
      },
      {
         xtype: 'contactsViewPhone'
      }
    ],
    listeners: {
        painted: function(){
          RaterDashboard.app.getController('Contacts').getContactsList();
        },
        resize: function(element,eOpts){
          var activeContactsView = Ext.getCmp(element.id).getActiveItem();
          if(eOpts.width >= 730 && activeContactsView.xtype==='contactsViewPhone'){
            Ext.getCmp(element.id).setActiveItem('contactsViewTablet');
          }else if(eOpts.width < 730 && activeContactsView.xtype==='contactsViewTablet'){
            Ext.getCmp(element.id).setActiveItem('contactsViewPhone');
          }
        }
    }
  }
});