import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {

		savePost: function(event){
	        var newPost = this.store.createRecord('post', {
	        title: "write something"
	      });

	                    this.transitionTo('posts');
	    }
	}
});
