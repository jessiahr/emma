import DS from 'ember-data';

// local dev
export default DS.ActiveModelAdapter.extend({
	host: 'http://localhost:3000',
	namespace: 'api/v1'
});

// export default DS.ActiveModelAdapter.extend({
// 	host: 'https://dripper-staging.herokuapp.com',
// 	namespace: 'api/v2'
// });