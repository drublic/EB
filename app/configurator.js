App.Configurator = Em.View.extend({

	tagName:'div',

	didInsertElement:function () {
		this._super();

		this.$().append('<div class="tree" style="width: 200px; float: left;"><div class="form" style="float: left;"></div>');

		this.$().find('.tree').dynatree({
			onActivate:function (node) {
				// A DynaTreeNode object is passed to the activation handler
				// Note: we also get this event, if persistence is on, and the page is reloaded.
				alert("You activated " + node.data.title);
			},
			children:[
				{title:"Item 1"},
				{title:"Folder 2", isFolder:true, key:"folder2",
					children:[
						{title:"Sub-item 2.1"},
						{title:"Sub-item 2.2"}
					]
				},
				{title:"Item 3"}
			]
		});



	}

});