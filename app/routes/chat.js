import Ember from 'ember';

export default Ember.Route.extend({
    //Using new ES6 format, otherwise would be model function(){ ...
    model(){
        return this.store.findAll('message');
    },
    actions: {
        addChat(newChat) { 
            //This should have a .done on the end of it to handle .done/.fail processing
            //but we skipped over that bit
            this.store.createRecord('message', {name: newChat.name, text: newChat.text}).save();

            this.controller.set('newChat', {});
        } 
    }
});
