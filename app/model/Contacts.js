Ext.define('RaterDashboard.model.Contacts', {
  extend: 'Ext.data.Model',
  config: {
    identifier: 'uuid',
    fields: [
      'uid',
      'name',
      'mobileNum',
      'homeNum',
      'email',
      'workAddress',
      'homeAddress',
      'birthday',
      'note'
    ]
  }
});