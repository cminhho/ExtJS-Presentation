/* ---------------------------------------------------------------
Define New Class
Use Ext.define() method to define new custom class
Syntax: Ext.define((String) className, (Object) classMembers, (Optional Function) onClassCreatedCallback);
*/
Ext.define('Employee',{
	name: 'unnamed',
	getName: function(){
		alert('Employee name is ' + this.name);
	}
}, function(){
	alert('Employee object created');
})

/* ---------------------------------------------------------------
Create an Object of a class
Use: Sencha recommends Ext.create() to create an object
*/
// Create an object using 'new'
var employeeObj1 = new Employee('Employee');
employeeObj.getName();

// Create an object using className.create()
var employeeObj2  = Employee.create();
employeeObj2.getName();

// Create an object using Ext.create 
var employeeObj3 = Ext.create('Employee');
employeeObj.getName();

/* ---------------------------------------------------------------
Define Constructor
Use: adding function name construct as a class member 
*/
Ext.define('Team', {
	name: 'Unnamed',
	getName: function(){
		alert('Team name is ' + this.name)
	},
	constructor: function(name){
		if(name){
			this.name = name;
		}
	}
})
var teamObj = Ext.create('Team', 'Web Team');
teamObj.getName();

/* ---------------------------------------------------------------
Declare Private members in class 
Use: Use JS closure to create private members of the class
*/
Ext.define('Member', function(){
	var name = 'unnamed';
	return {
		constructor: function(){
			this.name = name;
		},
		getName: function(){
			alert('Member name is ' + this.name)
		}
	}
})
var memberObj = Ext.create('Member', 'Ho Minh Chung');
memberObj.getName();

/* ---------------------------------------------------------------
Declare Static members in class 
Use: Use JS closure to create private members of the class
*/
Ext.define('Technology', {
	name: 'unnamed',
	getName: function(){
		alert('Technology name is ' + this.name);
	},
	constructor: function(technologyName){
		if(technologyName){
			this.name = technologyName;
		}
	},
	statics: {
		staticMethod: function(){
			alert('This is static method of technology class.')
		}
	}
})
Technology.staticMethod();

/* ---------------------------------------------------------------
Inheritance 
Use: Use an extend property to inherit class A from class B when defining class A
*/
Ext.define('Project', {
	extend: 'Technology',
	projectName: 'Unknown',
	constructor: function(technologyName, projectName){
		this.projectName = projectName || 'Unknown';
		// call parent class constructor
		this.callParent(arguments);
	},
	getProject: function(){
		alert('My project name is ' + this.projectName);
	},
	getAddress: function(customerName){
		alert('Customer name is ' + customerName)
	}
});

var project = Ext.create('Project', 'ExtJS', 'ClearOne');
project.getProject();
project.getName();

/* ---------------------------------------------------------------
Mixins 
Use: Using mixins, you can use functions of other class without inheritance
*/
Ext.define('Customer', {
	name: 'Unknown',
	constructor: function(name){
		this.name = name;
	},
	mixins: {
		getAddress: 'Project'
	},
	getName: function(){
		alert('Customer name is ' + this.name)
	}
})
var customerObj = Ext.create('Customer', 'ClearOne');
customerObj.getName();
customerObj.getAddress('UK');

/* ---------------------------------------------------------------
Config : configuration option for the class
Use: You can declare public properties with default values in config. 
will have getters and setters automatically if class does not have this methods already define.
*/
Ext.define('Person', {
	// get & set method created for config property automatically
	config: {
		name: 'unnamed'
	},
	constructor: function(config){
		this.initConfig(config);
	},
	//adding extra logic to your setters for config properties. 
	applyName: function(name){
		return Ext.String.capitalize(name)
	},
	updateName: function(newVal, oldVal){
		alert('New value is ' + newVal + ', Old value is ' + oldVal)
	}
});
var personObj = Ext.create('Person', { name: 'Chung Ho', address: 'AxS Modeling'});
alert('Person name is ' + personObj.getName()); // output: Chung Ho
personObj.setName('Newbie');
alert('Person name is ' + personObj.getName()); // output: Newbie

/* ---------------------------------------------------------------
Events : Ext.util.Observable class provides common interface for publishing events
*/
Ext.define('Mobile', {
	extend: 'Ext.util.Observable',
	config: {
		name: '',
		type: ''
	},
	constructor: function(config){
		this.addEvents('mobileNameChanged');
		this.initConfig(config);
		this.callParent(arguments);
	},
	updateName: function(newVal, oldVal){
		this.fireEvent('mobileNameChanged', newVal);
	}
})
var mobileObj = Ext.create('Mobile', {name: 'Sony', type: 'Z2'});
mobileObj.on('mobileNameChanged', function(name){
	alert('The name has been changed to ' + name);
});
mobileObj.setName('IPhone')
// you can do same thing by using mixins 'Ext.util.Observable'
Ext.define('Car', {
	config: {
		name: '',
		type: ''
	},
	mixins: {
		observable: 'Ext.util.Observable'
	},
	constructor: function(config){
		this.addEvents('carNameChanged');
		this.mixins.observable.constructor.call(this, config);
		this.initConfig(config);
	},
	applyName: function(name){
		return Ext.String.capitalize(name)
	},
	updateName: function(newVal, oldVal){
		this.fireEvent('carNameChanged', newVal);
	}
});
var carObj = Ext.create('Car', {name: 'Ferrari', type: '485 GTB'});
carObj.on('carNameChanged', function(name){
	alert('Car name has been changed to ' + name)
});
carObj.setName('Lamborghini Aventador');

 
 
 