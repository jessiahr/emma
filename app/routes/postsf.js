import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {

		console.log('test');
		return this.store.all('post');
    }
});
