Ext.define("RaterDashboard.view.home.RaterHome", {
  extend: 'Ext.Container',
  xtype: 'raterHome',
  config: {
    scrollable: {
      direction: 'vertical',
      directionLock: true
    },
    items: [
    	{
	xtype: 'panel',
	html: 'TEST ON WINDOW'
      },
      {
	xtype: 'panel',
	cls: 'pageHeadingCls',
	html: 'AP Central'
      },
      {
	xtype: 'container',
	cls: 'containerImgBlockCls',
	layout: 'hbox',
	items: [
	  {
	    xtype: 'panel',
	    cls: 'imgBlockCls',
	    html: [
	      '<div align="center"><img src="resources/images/exploreap.jpg" /></div>' +
		      '<div class="headingCls">Explore AP</div>' +
		      '<div class="contentCls">See what students are saying about AP and how it helps them prepare for college and beyond.</div>'
	    ],
	    listeners: [
	      {
		element: 'element',
		event: 'tap',
		fn: function () {
		  console.log('1');
		  var url = 'https://apstudent.collegeboard.org/exploreap';
		  if (Ext.os.is.iOS) {
		    console.log('iOS');
		    window.open(url, '_blank', 'EnableViewPortScale=yes,location=no');
		  } else if (Ext.os.is.Andriod) {
		    console.log('Android');
		    navigator.app.loadUrl(url, {openExternal: true});
		  } else {
		    console.log('web');
		    window.open(url, '_system');
		  }
		}
	      }
	    ]
	  },
	  {
	    xtype: 'panel',
	    cls: 'imgBlockCls',
	    html: [
	      '<div align="center"><img src="resources/images/apca-2014.gif" /></div>' +
		      '<div class="headingCls">AP Course Audit</div>' +
		      '<div class="contentCls">AP Course Audit is accepting submissions for new courses that will be offered in the 2014-15 school year.</div>'
	    ],
	    listeners: [
	      {
		element: 'element',
		event: 'tap',
		fn: function () {
		  console.log('1');
		  var url = 'http://www.collegeboard.com/html/apcourseaudit/';
		  if (Ext.os.is.iOS) {
		    console.log('iOS');
		    window.open(url, '_blank', 'EnableViewPortScale=yes,location=no');
		  } else if (Ext.os.is.Andriod) {
		    console.log('Android');
		    navigator.app.loadUrl(url, {openExternal: true});
		  } else {
		    console.log('web');
		    window.open(url, '_system');
		  }
		}
	      }
	    ]
	  },
	  {
	    xtype: 'panel',
	    cls: 'imgBlockCls',
	    html: [
	      '<div align="center"><img src="resources/images/apcentral_spotlight_Reader2014.gif" /></div>' +
		      '<div class="headingCls">Now accepting applications</div>' +
		      '<div class="contentCls">Join over 12,000 college faculty members and AP teachers at the 2015 AP Exam Reading.</div>'
	    ],
	    listeners: [
	      {
		element: 'element',
		event: 'tap',
		fn: function () {
		  console.log('1');
		  var url = 'http://apcentral.collegeboard.com/apc/public/homepage/4137.html';
		  if (Ext.os.is.iOS) {
		    console.log('iOS');
		    window.open(url, '_blank', 'EnableViewPortScale=yes,location=no');
		  } else if (Ext.os.is.Andriod) {
		    console.log('Android');
		    navigator.app.loadUrl(url, {openExternal: true});
		  } else {
		    console.log('web');
		    window.open(url, '_system');
		  }
		}
	      }
	    ]
	  }
	]
      },
      {
	xtype: 'panel',
	cls: 'pageHeadingCls',
	html: 'FEATURED ARTICLES'
      },
      {
	xtype: 'dataview',
	store: null,
	scrollable: null,
	cls: 'newsListCls',
	itemId: 'homeFeaturedListId',
	itemTpl: [
	  '<div class="headingCls">{title}</div>' +
		  '<div class="contentCls">{content}</div>'
	],
	data: [
	  {title: 'Nine Teachers Leading the Technology Revolution', content: 'This report, in partnership with Phi Delta Kappa International and the National Writing Project, profiles the work of nine dedicated teachers using technology to enhance student engagement across diverse subject and content areas.', url: 'https://www.collegeboard.org/advocacy'},
	  {title: 'Teachers Are the Center of Education: Profiles of Eight Teachers ', content: 'This new report, created in partnership with Phi Delta Kappa International, documents a day in the life of eight teachers.  Each of their stories highlights the critical importance of teachers and salutes their great work.', url: 'https://www.collegeboard.org/advocacy'}
	]

      },
      {
	xtype: 'panel',
	cls: 'pageHeadingCls doubleTopBordCls mt15',
	html: 'EXPLORE AP'
      },
      {
	xtype: 'dataview',
	store: null,
	scrollable: null,
	itemId: 'homeExploreListId',
	itemTpl: [
	  '<div class="headingCls">{title}</div>'
	],
	data: [
	  {title: 'AP Exam Dates', url: 'http://professionals.collegeboard.com/testing/ap/about/dates'},
	  {title: 'Exam Fees & Fee Reductions', url: 'http://professionals.collegeboard.com/testing/ap/about/fees'},
	  {title: 'Students & Parents', url: 'https://apstudent.collegeboard.org/home'},
	  {title: 'Resources for AP Coordinators', url: 'http://professionals.collegeboard.com/testing/ap'},
	  {title: 'Building Your AP Program', url: 'http://professionals.collegeboard.com/k-12/assessment/ap'},
	  {title: 'Information for Colleges & Universities', url: 'http://aphighered.collegeboard.org/'}

	]
      }
    ]
  }
});