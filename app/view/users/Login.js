Ext.define('RaterDashboard.view.users.Login', {
  extend: 'Ext.Panel',
  xtype: 'login',
  requires: [
  	'RaterDashboard.view.users.LoginForm',
    'RaterDashboard.view.users.SignUpForm'
  ],
  config: {
    scrollable: {
      direction: 'vertical',
      directionLock: true
    },
    layout: {
      type: 'card'
    },
    activeItem: 0,
    items: [
    	{
    		xtype: 'loginForm'
    	},
		{
			xtype: 'signUpForm'
		}     
    ]
  }
});