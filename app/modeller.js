App.Modeller = Em.View.extend({

	tagName:'div',

	didInsertElement:function () {
		this._super();

		this.$().append('<h1>Modeller</h1>');
	}

});