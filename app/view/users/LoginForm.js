Ext.define('RaterDashboard.view.users.LoginForm', {
  extend: 'Ext.form.Panel',
  xtype: 'loginForm',
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
			html: '<div align="center"><img src="resources/images/logo.png" width="100%" /></div>'
      },
      {
      		xtype: 'spacer'
      },
      {
			//xtype: 'fieldset',
			xtype: 'panel',
			//title: 'Log in',
			items: [
			  {
			    xtype: 'emailfield',
			    //placeHolder: 'email@example.com',
			    placeHolder: 'Email',
			    //cls: 'emailCls',
			    //value: 'test@gmail.com',
			    cls: 'emailInputCls',
			    name: 'email'
			  },
			  {
			    xtype: 'passwordfield',
			    //placeHolder: '******',
			    placeHolder: 'Password',
			    //value: '123',
			    cls: 'emailInputCls',
			    name: 'password'
			  }
			]
      },
      {
			xtype: 'container',
			layout: 'vbox',
			items: [
			  {
			    xtype: 'button',
			    text: 'Login',
			    //width: 80,
			    //margin: '10 32%',
			    //margin: '0 0 0 7',
			    itemId: 'loginBtnId',
			    //cls: 'buttonCls'
			    cls: 'loginBtnCls'
			  },
			  {
			    xtype: 'button',
			    text: 'Forgot Password',
			    //cls: 'buttonCls ml10',
			    cls: 'forgotPasswordBtnCls',
			    name: 'moveToForgetPasswordBtn'
			  }
			]
      },
      {
      		xtype: 'spacer'
      },
      {
      		xtype: 'label',
      		//docked: 'bottom',
      		style: 'text-align: center;',
      		html:  "Don't have an account yet?"
      },
      {
			xtype: 'button',
			text: 'Create an Accoount',
			//margin: '10 32%',
			//cls: 'buttonCls',
			cls: 'signupBtnCls',
			itemId: 'signupBtnId'
			//docked: 'bottom'
      } 
    ]
  }
});