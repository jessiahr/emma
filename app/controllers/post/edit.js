import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {

		savePost: function(){
	       this.model.save();
	       this.transitionTo('post');

	    }
	}
});
