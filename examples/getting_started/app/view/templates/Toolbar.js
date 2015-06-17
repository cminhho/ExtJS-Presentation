Ext.define('ClearOne.view.templates.Toolbar', {
    extend: 'Ext.toolbar.Toolbar',
	alias : 'widget.Toolbar',
    xtype: 'basic-toolbar',
	margins: '0 0 0 0',
    id: 'basic-toolbar',

    initComponent: function() {
        Ext.apply(this, {
            width: 500,
            items: [{
                xtype:'splitbutton',
                text:'Menu Button',
                glyph: 61,
                menu:[{
                    text:'Menu Button 1'
                }]
            }, '-', {
                xtype:'splitbutton',
                text:'Cut',
                glyph: 67,
                menu: [{
                    text:'Cut Menu Item'
                }]
            }, {
                glyph: 102,
                text:'Copy'
            }, {
                text:'Paste',
                glyph: 70,
                menu:[{
                    text:'Paste Menu Item'
                }]
            }, '-', {
                glyph: 76,
                text:'Format'
            }]
        });
        this.callParent();
    }
});
