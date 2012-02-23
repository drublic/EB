App.Store = DS.Store.create({
	adapter:DS.RESTAdapter.create({ bulkCommit:false })
});

var rens = App.Store.createRecord(App.Author, {firstName: 'Rens', lastName: 'Admiraal'});
var nico = App.Store.createRecord(App.Author, {firstName: 'Nico', middleName: 'de', lastName: 'Haen'});

console.log(nico.get('fullName'), rens.get('fullName'));

//console.log(DS.Store.create());
//App.Store = Ember.ArrayController.create({
//
//	content: [],
//
//	save: function() {
//		console.log('save extension', this.toArray());
//	}
//
//});
//
//var store = App.Store.create();
//
//
//var nico = Domain.Author.create();
//nico.set('firstName', 'Nico');
//nico.set('middleName', 'de');
//nico.set('lastName', 'Haen');
//
//var rens = Domain.Author.create();
//rens.set('firstName', 'Rens');
//rens.set('lastName', 'Admiraal');
//
//var extension = Domain.Extension.create();
//extension.addAuthor(nico);
//extension.addAuthor(rens);
//
//store.
//
//store.set('extension', extension);
//
//store.save();