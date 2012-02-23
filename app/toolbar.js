App.ToolBar = Em.View.extend({

	classNames: ['app-toolbar'],

	_ext: null,

	didInsertElement:function () {
		this.initToolbar();
		this._super();
	},

	initToolbar: function() {
		this._ext = new Ext.Toolbar({
			renderTo: Ext.get(this.$().attr('id')),
			width:'100%',
			items:[
				{
					xtype:'splitbutton',
					text:'Extension',
					menu:[
						{text:'New'},
						{text:'Load'}
					]
				}
			]
		});
	}

});