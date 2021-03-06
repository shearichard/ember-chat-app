import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('users', function(){
      this.route('user', {path: '/:user_id'});
  });
  this.route('chat');
  this.route('chats', function(){
      this.route('chat', {path: '/:chat_id'});
  });
});

export default Router;
