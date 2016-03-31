import Ember from 'ember';
const {Logger}= Ember;
export default Ember.Component.extend({
  remaining: Ember.computed('todos.@each.isCompleted', function() {
    var todos = this.get('todos');
    return todos.filterBy('isCompleted', false).get('length');
  }),
  completed: Ember.computed('todos.@each.isCompleted', function() {
    var todos = this.get('todos');
    return todos.filterBy('isCompleted', true).get('length');
  }),
  actions: {
    clearAllCompleted() {
      Logger.info('clearAllCompleted=');
//      let controller = this;
      let completed = this.get('todos').filterBy('isCompleted', true);
      Logger.info('clearAllCompleted length='+completed.length);
      completed.forEach((todo) => {
       //   this.sendAction('deleteTodo', todo);
          todo.destroyRecord();
//          Logger.info('did we send destroy?')
      });
      Logger.info('eof clearAllCompleted');
    }
  }
});
