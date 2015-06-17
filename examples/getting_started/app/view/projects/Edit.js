 Ext.define('ClearOne.controller.Users', {
     extend: 'Ext.app.Controller',
	 views: 'projects.Edit',	
	 
     init: function() {
         console.log('Initialized Users! This happens before ' +
                     'the Application launch() function is called');
     }
 });