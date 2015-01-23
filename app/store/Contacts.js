Ext.define('RaterDashboard.store.Contacts', {
  extend: 'Ext.data.Store',
  config: {
    model: 'RaterDashboard.model.Contacts',
    //storeId: 'contacts',
    autoLoad: true,
    grouper: {
       groupFn: function(record) {
           return record.get('name')[0];
       }
   	},
    data: [
    	{uid: '1', name: 'Jinal Shah',  mobileNum: '+91 8980555590', homeNum: '1234567890', email: 'shahdeep1989@gmail.com', workAddress: 'workAddress', homeAddress: 'homeAddress', birthday: '9th Feb', note: 'Nothing' },
    	{uid: '2', name: 'Ashish Joshi',  mobileNum: '+91 8980555590', homeNum: '1234567890', email: 'shahdeep1989@gmail.com', workAddress: 'workAddress', homeAddress: 'homeAddress', birthday: '9th Feb', note: 'Nothing' },
    	{uid: '3', name: 'Dev Shah',  mobileNum: '+91 8980555590', homeNum: '1234567890', email: 'shahdeep1989@gmail.com', workAddress: 'workAddress', homeAddress: 'homeAddress', birthday: '9th Feb', note: 'Nothing' },
    	{uid: '4', name: 'Deep Shah',  mobileNum: '+91 8980555590', homeNum: '1234567890', email: 'shahdeep1989@gmail.com', workAddress: 'workAddress', homeAddress: 'homeAddress', birthday: '9th Feb', note: 'Nothing' },
    	{uid: '5', name: 'Nidhi Joshi',  mobileNum: '+91 8980555590', homeNum: '1234567890', email: 'shahdeep1989@gmail.com', workAddress: 'workAddress', homeAddress: 'homeAddress', birthday: '9th Feb', note: 'Nothing' },
    	{uid: '6', name: 'Nishu',  mobileNum: '+91 8980555590', homeNum: '1234567890', email: 'shahdeep1989@gmail.com', workAddress: 'workAddress', homeAddress: 'homeAddress', birthday: '9th Feb', note: 'Nothing' },
    	{uid: '7', name: 'Heena Shah',  mobileNum: '+91 8980555590', homeNum: '1234567890', email: 'shahdeep1989@gmail.com', workAddress: 'workAddress', homeAddress: 'homeAddress', birthday: '9th Feb', note: 'Nothing' },
    	{uid: '8', name: 'Divy',  mobileNum: '+91 8980555590', homeNum: '1234567890', email: 'shahdeep1989@gmail.com', workAddress: 'workAddress', homeAddress: 'homeAddress', birthday: '9th Feb', note: 'Nothing' },
    	{uid: '9', name: 'Meet',  mobileNum: '+91 8980555590', homeNum: '1234567890', email: 'shahdeep1989@gmail.com', workAddress: 'workAddress', homeAddress: 'homeAddress', birthday: '9th Feb', note: 'Nothing' },
    	{uid: '10', name: 'Aakash Shah',  mobileNum: '+91 8980555590', homeNum: '1234567890', email: 'shahdeep1989@gmail.com', workAddress: 'workAddress', homeAddress: 'homeAddress', birthday: '9th Feb', note: 'Nothing' },
    	{uid: '11', name: 'Rajvi',  mobileNum: '+91 8980555590', homeNum: '1234567890', email: 'shahdeep1989@gmail.com', workAddress: 'workAddress', homeAddress: 'homeAddress', birthday: '9th Feb', note: 'Nothing' },
    	{uid: '12', name: 'Jasmin',  mobileNum: '+91 8980555590', homeNum: '1234567890', email: 'shahdeep1989@gmail.com', workAddress: 'workAddress', homeAddress: 'homeAddress', birthday: '9th Feb', note: 'Nothing' },
    	{uid: '13', name: 'Siddh',  mobileNum: '+91 8980555590', homeNum: '1234567890', email: 'shahdeep1989@gmail.com', workAddress: 'workAddress', homeAddress: 'homeAddress', birthday: '9th Feb', note: 'Nothing' },
    	{uid: '14', name: 'Hiren',  mobileNum: '+91 8980555590', homeNum: '1234567890', email: 'shahdeep1989@gmail.com', workAddress: 'workAddress', homeAddress: 'homeAddress', birthday: '9th Feb', note: 'Nothing' },
    	{uid: '15', name: 'Urvil',  mobileNum: '+91 8980555590', homeNum: '1234567890', email: 'shahdeep1989@gmail.com', workAddress: 'workAddress', homeAddress: 'homeAddress', birthday: '9th Feb', note: 'Nothing' },
    	{uid: '16', name: 'Habib',  mobileNum: '+91 8980555590', homeNum: '1234567890', email: 'shahdeep1989@gmail.com', workAddress: 'workAddress', homeAddress: 'homeAddress', birthday: '9th Feb', note: 'Nothing' },
    	{uid: '17', name: 'Aryan Shah',  mobileNum: '+91 8980555590', homeNum: '1234567890', email: 'shahdeep1989@gmail.com', workAddress: 'workAddress', homeAddress: 'homeAddress', birthday: '9th Feb', note: 'Nothing' },
    	{uid: '18', name: 'Ash Ross',  mobileNum: '+91 8980555590', homeNum: '1234567890', email: 'shahdeep1989@gmail.com', workAddress: 'workAddress', homeAddress: 'homeAddress', birthday: '9th Feb', note: 'Nothing' },
    	{uid: '19', name: 'Heli',  mobileNum: '+91 8980555590', homeNum: '1234567890', email: 'shahdeep1989@gmail.com', workAddress: 'workAddress', homeAddress: 'homeAddress', birthday: '9th Feb', note: 'Nothing' },
    	{uid: '20', name: 'Sanjay',  mobileNum: '+91 8980555590', homeNum: '1234567890', email: 'shahdeep1989@gmail.com', workAddress: 'workAddress', homeAddress: 'homeAddress', birthday: '9th Feb', note: 'Nothing' },
    	{uid: '21', name: 'Chintan',  mobileNum: '+91 8980555590', homeNum: '1234567890', email: 'shahdeep1989@gmail.com', workAddress: 'workAddress', homeAddress: 'homeAddress', birthday: '9th Feb', note: 'Nothing' },
    	{uid: '22', name: 'Pratik',  mobileNum: '+91 8980555590', homeNum: '1234567890', email: 'shahdeep1989@gmail.com', workAddress: 'workAddress', homeAddress: 'homeAddress', birthday: '9th Feb', note: 'Nothing' },
    	{uid: '23', name: 'Zoya',  mobileNum: '+91 8980555590', homeNum: '1234567890', email: 'shahdeep1989@gmail.com', workAddress: 'workAddress', homeAddress: 'homeAddress', birthday: '9th Feb', note: 'Nothing' },
    	{uid: '24', name: 'Rupal',  mobileNum: '+91 8980555590', homeNum: '1234567890', email: 'shahdeep1989@gmail.com', workAddress: 'workAddress', homeAddress: 'homeAddress', birthday: '9th Feb', note: 'Nothing' },
    	{uid: '25', name: 'Dhaval',  mobileNum: '+91 8980555590', homeNum: '1234567890', email: 'shahdeep1989@gmail.com', workAddress: 'workAddress', homeAddress: 'homeAddress', birthday: '9th Feb', note: 'Nothing' },
    	{uid: '26', name: 'Darsh',  mobileNum: '+91 8980555590', homeNum: '1234567890', email: 'shahdeep1989@gmail.com', workAddress: 'workAddress', homeAddress: 'homeAddress', birthday: '9th Feb', note: 'Nothing' },
    	{uid: '27', name: 'Deepa',  mobileNum: '+91 8980555590', homeNum: '1234567890', email: 'shahdeep1989@gmail.com', workAddress: 'workAddress', homeAddress: 'homeAddress', birthday: '9th Feb', note: 'Nothing' }
    ]  
  }
});