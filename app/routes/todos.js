import Ember from 'ember';
/*jshint strict: true */
const {Logger}= Ember;

export default Ember.Route.extend({
  actions: {
    addTodoItem(todoitem){
      'use strict';
      Logger.info('adding todo item' + todoitem);
      let controller = this.get('controller');
      Logger.info('controller=' + controller);
      let item = this.store.createRecord('todo', {
          title: todoitem,
          isCompleted: false
        }).save().then(function(){
        controller.set('new-todo', 'ian');
        let v  = controller.get('new-todo');
        Logger.info('controller new-todo=' + v);
      });
       this.set('new-todo', 'tom');
Logger.info('this new-todo=' + this.get('new-todo'));
      }

    },
   model: function() {
      return this.store.findAll('todo');
    }
});
