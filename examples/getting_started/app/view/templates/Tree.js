
var store = Ext.create('Ext.data.TreeStore', {
    root: {
        text: 'Project - New Project ',
        expanded: true,
		
        children: [
            {
                text: 'Child 1',
                leaf: true,
				handler: function(grid, rowIndex, colIndex, actionItem, event, record, row) {
                    Ext.Msg.alert('Editing' + (record.get('done') ? ' completed task' : '') , record.get('task'));
                }
            },
            {
                text: 'Child 2',
                leaf: true
            },
            {
                text: 'Child 3',
                expanded: true,
                children: [
                    {
                        text: 'Grandchild',
                        leaf: true,
						href: 'Grandchild'
                    }
                ]
            }
        ]
    }
});

Ext.define('ClearOne.view.templates.Tree', 
{
    extend : 'Ext.tree.Panel',
    alias : 'widget.Tree',
	margins: '0 0 0 0',
    store: store
});
