Ext.define('RaterDashboard.view.users.SignUpForm', {
  extend: 'Ext.form.Panel',
  xtype: 'signUpForm',
  config: {
    scrollable: {
      direction: 'vertical',
      directionLock: true
    },
    layout: {
      type: 'vbox',
      pack: 'center',
      align: 'center'
    },
    cls: 'loginCls',
    items: [
      {
			xtype: 'panel',
			items: [
			  {
			    xtype: 'textfield',
			    placeHolder: 'First Name',
			    cls: 'emailInputCls',
			    name: 'firstname'
			  },
			  {
			    xtype: 'textfield',
			    placeHolder: 'Last Name',
			    cls: 'emailInputCls',
			    name: 'lastname'
			  },
			  {
			    xtype: 'emailfield',
			    placeHolder: 'Email',
			    cls: 'emailInputCls',
			    name: 'email'
			  },
			  {
			    xtype: 'passwordfield',
			    placeHolder: 'Password',
			    cls: 'emailInputCls',
			    name: 'password'
			  },
			  {
			    xtype: 'passwordfield',
			    placeHolder: 'Confirm Password',
			    cls: 'emailInputCls',
			    name: 'confirmpassword'
			  }
			]
      },
      {
			xtype: 'container',
			layout: 'vbox',
			items: [
			  {
			    xtype: 'button',
			    text: 'Sign Up',
			    itemId: 'createNewAccountBtnId',
			    cls: 'loginBtnCls'
			  },
			  {
			    xtype: 'button',
			    text: 'Cancel',
			    ui: 'round',
			    style:'margin-top:0.5em;',
			    itemId: 'backFromSignUpViewBtnId'
			  },
			]
      }
    ]
  }
});