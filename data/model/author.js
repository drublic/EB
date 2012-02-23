App.Author = DS.Model.extend({
	firstName:DS.attr('string'),
	lastName:DS.attr('string'),
	middleName:DS.attr('string'),
	email:DS.attr('string'),
//	extension:DS.belongsTo('Domain.Extension'),

	fullName:function () {
		var name = this.get('firstName');
		if (this.get('middleName')) {
			name = name + ' ' + this.get('middleName');
		}
		return name + ' ' + this.get('lastName');
	}.property('firstName', 'middleName', 'lastName')
});