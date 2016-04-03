import Ember from 'ember';
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
      Ember.Logger.info('clearAllCompleted=');
//      let controller = this;
      let completed = this.get('todos').filterBy('isCompleted', true);
      Ember.Logger.info('clearAllCompleted length='+completed.length);
      completed.forEach((todo) => {
       //   this.sendAction('deleteTodo', todo);
          todo.destroyRecord();
//          Logger.info('did we send destroy?')
      });
      Ember.Logger.info('eof clearAllCompleted');
    }
  }
});
