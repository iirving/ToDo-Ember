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
    clearAllCompleted(todos) {
      Logger.info('clearAllCompleted=');
      let completed = this.get('todos').filterBy('isCompleted', true);
      completed.forEach((todo) => {
          //this.sendAction('deleteTodo', todo);
          Logger.info('destroyRecord='+'todo.title');
          todo.destroyRecord();
      });
      Logger.info('eof clearAllCompleted');
    }
  }
});
