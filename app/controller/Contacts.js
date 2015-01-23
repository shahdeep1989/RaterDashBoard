Ext.define('RaterDashboard.controller.Contacts',{
    extend:'Ext.app.Controller',
    
    config:{
    	refs: {
            //twitterLoginBtn: 'button[itemId=twitterBtnId]',
            contactsTab: 'contactsCardGroup',
            contactsRefreshBtn: 'button[itemId=contactsRefreshBtnId]',
            searchFieldContactsList: 'searchfield[itemId=searchContactsListId]',
            contactsInviteBtn: 'button[itemId=contactsInviteBtnId]',
            contactList: 'list[itemId=contactListId]',
            contactsInviteBtn: 'button[itemId=contactsInviteBtnId]',
            backToContactListBtn:'button[itemId=backToContactListBtnId]'
    	},
    	control: {
            contactsTab: {
                activate: 'contactsTabPressed'
            },
            contactsRefreshBtn: {
                tap: 'refreshContactsList'
            },
            searchFieldContactsList:{
                keyup: 'searchFieldValueChange'
            },
            contactsInviteBtn:{
                tap: 'sendSms'
            },
            contactList: {
                itemsingletap: 'showContactDetails'
                //select: 'selectContacts'
            },
            contactsInviteBtn: {
                tap: 'contactsInviteBtnTapped'
            },
            backToContactListBtn:{
                tap: 'backToContactListBtnTapped'
            }
    	/*	authorizeBtn: {
    			tap: 'onTapBtnTwitterAuthorize'
    		},
    		searchTimeline: {
    			change: 'onSearchTimeline'
    		} */
    	}
    },

    searchFieldValueChange: function(ths){
        var value = ths.getValue();
        console.log(value);
        var contactsStore = Ext.getStore('Contacts');
        contactsStore.clearFilter();
        
        contactsStore.filter([
            Ext.create('Ext.util.Filter', {property: "name", value: value, }),
        ]);
    },

    contactsTabPressed: function(){
        var contactsStore = Ext.getStore('Contacts');
        if(contactsStore.getCount() > 0)
        {
          return;
        }
        this.getContactsList();
    },

    contactsInviteBtnTapped: function(){
        var contactsPage = Ext.Viewport.getActiveItem().getActiveItem().getActiveItem().getActiveItem().getActiveItem();
        var selectedContact =  contactsPage.getSelectedContact();
        if(!selectedContact){
            alert("Please select the record if any.");
            return;
        }
        this.sendSms(selectedContact);
    },

    //sendSms: function( ths, index, target, record){
    sendSms: function(record){
        var phoneNumber = "";
        if(record.data.mobileNum){
            phoneNumber = record.data.mobileNum;
        }

        if(record.data.homeNum){
            phoneNumber = record.data.homeNum;
        }

        if(phoneNumber == ""){
            alert("Please add the contact number.")
            return;
        }

        alert(phoneNumber);

        window.plugins.socialsharing.shareViaSMS(
            'I am using this awesome RaterDashboard App. Check it!',
            phoneNumber,
            function(msg) {
                alert('ok: ' + msg);
            }, 
            function(msg) {
                alert('error: ' + msg);
            }
        );
    },

    selectContacts: function(ths, record){
        this.showContactDetails(ths, 0, ths, record);
    },

    showContactDetails: function( ths, index, target, record){
        //alert(JSON.stringify(record.data));
        var contactsPage = Ext.Viewport.getActiveItem().getActiveItem().getActiveItem().getActiveItem().getActiveItem();
        var detailsPage =  contactsPage.down('#contactDetailsPanId');
        var htmlText = "";
        var data = record.data;
        var contactsViewPhone = target.up('contactsViewPhone');
        
        if(contactsViewPhone){
            //contactsViewPhone.setActiveItem('contactDetails');
            contactsViewPhone.animateActiveItem('contactDetails',{type:'slide'})
        }

        contactsPage.setSelectedContact(record);

        if(data.name){
            htmlText += "<div class='nameClsContactsPage'> " + data.name + " </div>";
            htmlText += "</br>";
        }

        if(data.mobileNum){
            htmlText += "<div class='mobileNumLblClsContactsPage'> mobile </div>";
            htmlText += "<div class='mobileNumClsContactsPage'> " + data.mobileNum + " </div>";
        }
        
        if(data.homeNum){
            htmlText += "<div class='mobileNumLblClsContactsPage'> home </div>";
            htmlText += "<div class='mobileNumClsContactsPage'> " + data.homeNum + " </div>";
        }

        if(data.mobileNum || data.homeNum){
            htmlText += "<hr class='hrClsContactsPage'>";
        }

        if(data.email){
            htmlText += "<div class='mobileNumLblClsContactsPage'> work </div>";
            htmlText += "<div class='mobileNumClsContactsPage'> " + data.email + " </div>";
            htmlText += "<hr class='hrClsContactsPage'>";
        }

        if(data.workAddress){
            htmlText += "<div class='mobileNumLblClsContactsPage'> work </div>";
            htmlText += "<div class='mobileNumClsContactsPage'> " + data.workAddress + " </div>";
        }

        if(data.homeAddress){
            htmlText += "<div class='mobileNumLblClsContactsPage'> home </div>";
            htmlText += "<div class='mobileNumClsContactsPage'> " + data.homeAddress + " </div>";
        }

        if(data.workAddress || data.homeAddress){
            htmlText += "<hr class='hrClsContactsPage'>";
        }

        if(data.birthday){
            htmlText += "<div class='mobileNumLblClsContactsPage'> birthday </div>";
            htmlText += "<div class='mobileNumClsContactsPage'> " + data.birthday + " </div>";
            htmlText += "<hr class='hrClsContactsPage'>";
        }

        if(data.note){
            htmlText += "<div class='mobileNumLblClsContactsPage'> Note </div>";
            htmlText += "<div class='mobileNumClsContactsPage'> " + data.note + " </div>";
            htmlText += "<hr class='hrClsContactsPage'>";
        }

        detailsPage.setHtml(htmlText);
    },

    refreshContactsList: function(){
        this.getContactsList(true);
    },

    getContactsList: function(refreshFlag){
        var me = this;
        if(!refreshFlag){
            if(Ext.getStore('Contacts').getCount() > 0){
                return;
            }
        }

          if(navigator.contacts)
          {
            var options      = new ContactFindOptions();
            options.filter   = "";
            options.multiple = true;
            options.desiredFields = [
                navigator.contacts.fieldType.id,
                //navigator.contacts.fieldType.displayName,
                navigator.contacts.fieldType.name,
                navigator.contacts.fieldType.phoneNumbers,
                navigator.contacts.fieldType.emails,
                navigator.contacts.fieldType.addresses,
                navigator.contacts.fieldType.birthday,
                navigator.contacts.fieldType.note
                //navigator.contacts.fieldType.nickname
            ];
            var fields = [
                //navigator.contacts.fieldType.displayName,
                navigator.contacts.fieldType.name
            ];
            navigator.contacts.find(fields, 
              function(contacts){ //onSuccess
                    //alert('Found ' + contacts.length + ' contacts.');
                    //alert(JSON.stringify(contacts));
                    var contactsArr = [];
                    var mobileNumber = "";
                    var homePhoneNumber = "";
                    var workAddressStr = "";
                    var homeAddressStr = "";
                    var emailStr = "";
                    var birthdayStr = "";
                    var noteStr = "";

                    //alert("1");
                    for(var i=0; i<contacts.length; i++){
                        //alert("i: " + i);
                        mobileNumber = "";
                        homePhoneNumber = "";
                        workAddressStr = "";
                        homeAddressStr = "";
                        emailStr = "";
                        birthdayStr = "";
                        noteStr = "";

                        if(contacts[i].phoneNumbers){
                            for(var j=0; j<contacts[i].phoneNumbers.length;j++){
                                //alert("j1: " + j);
                                if(contacts[i].phoneNumbers[j].type == "mobile"){
                                    //alert("3");
                                    mobileNumber = contacts[i].phoneNumbers[j].value;
                                }

                                else{ //(contacts[i].phoneNumbers[j].type == "other"){
                                    //alert("4");
                                    homePhoneNumber = contacts[i].phoneNumbers[j].value;
                                }
                                   
                            }
                        }
                        //alert("5");
                        if(contacts[i].addresses){
                            for(var j=0; j<contacts[i].addresses.length;j++){
                                //alert("j2: " + j);
                                if(contacts[i].addresses[j].type == "work"){
                                    //alert("5");
                                    if(contacts[i].addresses[j].streetAddress){
                                        //alert("6");
                                        workAddressStr += contacts[i].addresses[j].streetAddress + " </br>"; 
                                    }
                                    if(contacts[i].addresses[j].locality){
                                        //alert("7");
                                        workAddressStr += contacts[i].addresses[j].locality + " " + contacts[i].addresses[j].region + " " + contacts[i].addresses[j].postalCode + " </br>"; 
                                    }
                                    if(contacts[i].addresses[j].country){
                                        //alert("8");
                                        workAddressStr += contacts[i].addresses[j].country; 
                                    }
                                }

                                else{ //(contacts[i].phoneNumbers[j].type == "other"){
                                    //alert("9");
                                    if(contacts[i].addresses[j].streetAddress){
                                        //alert("10");
                                        homeAddressStr += contacts[i].addresses[j].streetAddress + " </br>"; 
                                    }
                                    if(contacts[i].addresses[j].locality){
                                        //alert("11");
                                        homeAddressStr += contacts[i].addresses[j].locality + " " + contacts[i].addresses[j].region + " " + contacts[i].addresses[j].postalCode + " </br>"; 
                                    }
                                    if(contacts[i].addresses[j].country){
                                        //alert("12");
                                        homeAddressStr += contacts[i].addresses[j].country; 
                                    }
                                }
                                   
                            }
                        }

                        if(contacts[i].emails)
                        {
                            for(var j=0; j<contacts[i].emails.length;j++){
                                emailStr += contacts[i].emails[j].value + "</br>";
                            }
                        }

                        if(contacts[i].birthday){
                            birthdayStr = Ext.Date.format(new Date(parseInt(contacts[i].birthday)),'M d, Y');
                        }

                        if(contacts[i].note){
                            noteStr = contacts[i].note;
                        }

                        //alert("13");
                        contactsArr.push({
                            uid: contacts[i].id,
                            name: contacts[i].name.formatted,
                            mobileNum: mobileNumber, //(contacts[i].phoneNumbers.length > 0) ? contacts[i].phoneNumbers[0].value : "",
                            homeNum: homePhoneNumber,
                            email: emailStr,
                            workAddress: workAddressStr,
                            homeAddress: homeAddressStr,
                            birthday: birthdayStr,
                            note: noteStr
                        });
                        //alert("14");
                    }
                    //alert("15");
                    var contactsStore = Ext.getStore('Contacts');
                    //alert("16");
                    contactsStore.removeAll(true);
                    //alert("17");
                    contactsStore.add(contactsArr);
                    var contactsPage = Ext.Viewport.getActiveItem().getActiveItem().getActiveItem().getActiveItem().getActiveItem();
                    var contactsList = contactsPage.down('#contactListId');
                    if(Ext.getStore('Contacts').getCount() > 0){
                        if(contactsList.getSelection().length <= 0){
                            //contactsList.select(0);
                            me.showContactDetails(me, 0, me, contactsStore.getAt(0));
                            contactsPage.setSelectedContact(contactsStore.getAt(0));
                        }
                    }
                    //alert("18");
                   // alert(contactsStore.getCount());
              },
              function(contactError){ // onError
                    alert("Error in contacts");
                    alert(JSON.stringify(contactError));
              },options);
          }
          else
          {
            //alert("Contacts Plugin has not been configured")
            var contactsStore = Ext.getStore('Contacts');
            var contactsPage = Ext.Viewport.getActiveItem().getActiveItem().getActiveItem().getActiveItem().getActiveItem();
                    var contactsList = contactsPage.down('#contactListId');
                    if(Ext.getStore('Contacts').getCount() > 0){
                        if(contactsList.getSelection().length <= 0){
                            //contactsList.select(0);
                            me.showContactDetails(me, 0, me, contactsStore.getAt(0));
                            contactsPage.setSelectedContact(contactsStore.getAt(0));
                        }
                    }
          }
    },
    backToContactListBtnTapped: function(btn){
        var contactsViewPhone = btn.up('contactsViewPhone');
        if(contactsViewPhone){
            //contactsViewPhone.setActiveItem('contactsList');
            contactsViewPhone.animateActiveItem('contactsList',{type:'slide', direction:'right'});
        }
    }


});