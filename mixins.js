/*
Object Class
ExtJS 4 came up with new concept called 'Mixins'. 
Using mixins, you can use functions of other class without inheritance. 
For example, Company class can call eat function of Person class using mixins:
*/
Ext.define('Company', {
	name: 'Unknown',
	constructor: function(name){
		if(name){
			this.name = name;
		}
	},
	getName: function(){
		alert('Company name is ' + this.name);
	},
	statics: {
		staticMethod: function(){
			alert('This is statis method of company class')
		}
	}	
});
Ext.define('Project', {
	extend: 'Company',
	projectName: 'Unknown',
	constructor: function(name, projectName){
		this.projectName = projectName || 'Unknown';
		// call parent class constructor
		this.callParent(arguments);
	},
	getProject: function(){
		alert('My project name is ' + this.projectName);
	}
});
//create an object using 'new'
var project1 = new Company('ABC');
project1.getName();

//create an object using className.create()
var project3 = Company.create('123');
project3.getName();

//create an object using Ext.create
var project = new Ext.create('Project', 'TMA', 'AxS Modeling');
project.getProject();
project.getName();

//call static method by className.staticMethodName()
Company.staticMethod();