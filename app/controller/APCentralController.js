Ext.define("RaterDashboard.controller.APCentralController", {
  extend: 'Ext.app.Controller',
  config: {
    refs: {
      // News view
      newsList: 'mainCardGroup #newsListId'
    },
    control: {
      newsList: {
	itemtap: 'newsListTapped'
      }
    }
  },
  init: function (application) {
    var data = [
      {
	"name": "Login to RaterApp",
	"iconCls": "loginIcon",
	"type": ""
      },
//      {
//	"name": "Raters",
//	"iconCls": "speakerIcon",
//	"type": "Rater"
//      },
//      {
//	"name": "Sponsors",
//	"iconCls": "sponsorIcon",
//	"type": "Rater"
//      },
//      {
//	"name": "More Info",
//	"iconCls": "infoIcon",
//	"type": "Rater"
//      },
      {
	"name": "Facebook",
	"iconCls": "faceBookIcon",
	"type": "Social"
      },
      {
	"name": "Twitter",
	"iconCls": "twitterIcon",
	"type": "Social"
      }
    ];
    var slideNavListStore = Ext.getStore('slideNavListStore');
    slideNavListStore.setData(data);
  },
  newsListTapped: function (list, index, target, record, e, eOpts) {
    var me = this;
    console.log(record.data.url);
    var url = record.data.url;
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
});