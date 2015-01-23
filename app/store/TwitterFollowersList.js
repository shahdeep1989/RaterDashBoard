Ext.define('RaterDashboard.store.TwitterFollowersList', {
  extend: 'Ext.data.Store',
  config: {
    model: 'RaterDashboard.model.TwitterFollowersList',
    //storeId: 'contacts',
    autoLoad: true,
    grouper: {
       groupFn: function(record) {
           return record.get('name')[0];
       }
   	},
  }
});