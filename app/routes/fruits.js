import Ember from 'ember';

export default Ember.Route.extend({

    //Using new ES6 format, otherwise would be model function(){ ...
    model(){
        return this.store.findAll('fruit');
    },

//    setupController(controller, model){
//        this._super(controller, model);
//        this.controller.
//        //debugger;
//    },
    actions: {
        addFruit(newFruit) { 
            //This should have a .done on the end of it to handle .done/.fail processing
            //but we skipped over that bit
            this.store.createRecord('fruit', {name: newFruit.name, price: newFruit.price}).save();

            this.controller.set('newFruit', {});
        } 
    }
});
