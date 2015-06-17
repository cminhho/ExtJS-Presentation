Ext.define('ClearOne.view.projects.Info', {
    extend: 'Ext.form.Panel',
    xtype: 'register-form',
    alias : 'widget.ProjectsInfo',
    
    frame: true,
    title: 'Register',
    bodyPadding: 0,
    autoScroll:true,
    margins: '5 0 0 0',
    fieldDefaults: {
        labelAlign: 'right',
        labelWidth: 115,
        msgTarget: 'side'
    },

    initComponent: function() {
        this.items = [{
            xtype: 'fieldset',
            title: 'User Info',
            defaultType: 'textfield',
            defaults: {
                anchor: '100%'
            },
            items: [
                { allowBlank:false, fieldLabel: 'User ID', name: 'user', emptyText: 'user id' },
                { allowBlank:false, fieldLabel: 'Password', name: 'pass', emptyText: 'password', inputType: 'password' },
                { allowBlank:false, fieldLabel: 'Verify', name: 'pass', emptyText: 'password', inputType: 'password' }
            ]
        },
        {
            xtype: 'fieldset',
            title: 'Contact Information',
            defaultType: 'textfield',
            defaults: {
                anchor: '100%'
            },
            items: [{
                fieldLabel: 'First Name',
                emptyText: 'First Name',
                name: 'first'
            },
            {
                fieldLabel: 'Last Name',
                emptyText: 'Last Name',
                name: 'last'
            },
            {
                fieldLabel: 'Company',
                name: 'company'
            },
            {
                fieldLabel: 'Email',
                name: 'email',
                vtype: 'email'
            },
            {
                xtype: 'combobox',
                fieldLabel: 'State',
                name: 'state',
                valueField: 'abbr',
                displayField: 'state',
                typeAhead: true,
                queryMode: 'local',
                emptyText: 'Select a state...'
            },
            {
                xtype: 'datefield',
                fieldLabel: 'Date of Birth',
                name: 'dob',
                allowBlank: false,
                maxValue: new Date()
            }]
        }];

        this.callParent();
    },

    buttons: [{
        text: 'Register',
        disabled: true,
        formBind: true
    }]
});