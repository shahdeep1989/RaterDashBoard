Ext.define('RaterDashboard.model.TwitterUserTimeline', {
    extend: 'Ext.data.Model',
    config: {
		//identifier: 'uuid',
		fields: [
			"id",
			"created_at",
			"text",
			"user",
			"entities"
		]
		
    }
});