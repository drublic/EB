App.TabBar = Em.View.extend({

	tagName: 'ul',

	didInsertElement:function () {
		this.$().parent().height($(document).height() - $('.app-toolbar').height());

		var $tabs = this.$().parent().tabs({
			add: function(event, ui) {
			},
			select: function(event, ui) {
				var componentClassName = ui.tab.hash.replace('#', '');

				if ($(ui.panel).children().length === 0 && App[componentClassName]) {
					var view = App[componentClassName].create();
					view.appendTo($(ui.panel));
				}
			}
		});

		$('#' + this.$().attr('id') + ' span.ui-icon-close').live("click", function () {
			var index = $("li", $tabs).index($(this).parent());
			$tabs.tabs("remove", index);
		});

		$tabs.tabs("add", "fixtures/content/Introduction.html", "Introduction");
		$tabs.tabs("add", "#Configurator", "Configurator");
		$tabs.tabs("add", "#Modeller", "Modeller");

		$tabs.tabs({
			tabTemplate:'<li><a href="#{href}">#{label}</a><span class="ui-icon ui-icon-close">Remove Tab</span></li>'
		});

		$tabs.tabs("add", "#tabs-2", "Modeler 2");
		$tabs.tabs("add", "#tabs-2", "Modeler 3");

		this._super();
	}

});