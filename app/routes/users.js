import Ember from 'ember';

export default Ember.Route.extend({

    //Using new ES6 format, otherwise would be model function(){ ...
    model(){
        return this.store.findAll('user');
    },

//    setupController(controller, model){
//        this._super(controller, model);
//        this.controller.
//        //debugger;
//    },
    actions: {
        addUser(newUser) { 
            //This should have a .done on the end of it to handle .done/.fail processing
            //but we skipped over that bit
            this.store.createRecord('user', {name: newUser.name, email: newUser.email}).save();

            this.controller.set('newUser', {});
        } 
    }
});
