import Ember from 'ember';

export default Ember.Route.extend({

  chatmodel(params) {
    return this.store.find('message', params.user_id);
  }
})
