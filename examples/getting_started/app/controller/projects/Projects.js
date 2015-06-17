 Ext.define('ClearOne.controller.projects.Projects', {
     extend: 'Ext.app.Controller',	
	 models: 'projects.Projects',
	 stores: 'projects.Projects',
	 //views: ['projects.List', 'projects.Edit'],
     refs: [{
         ref: 'list',
         selector: 'grid'
     }],

     init: function() {
         var User, allUsers, ed;

         //User = this.getUserModel();
         //allUsers = this.getAllUsersStore();

         //ed = new User({ name: 'Ed' });
         //allUsers.add(ed);
     }
 });