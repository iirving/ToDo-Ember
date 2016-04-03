import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
        createTodo(newTitle) {
          if (newTitle.trim()) {
           Ember.Logger.info('doing createTodo ('+newTitle.trim()+")");
          this.store.createRecord('todo', {
            title: newTitle,
            isCompleted: false
          }).save(); }
        },
        deleteTodo(todo) {
          Ember.Logger.info('doing deleteTodo');
          todo.destroyRecord();
        }
      },

      model: function() {
        return this.store.findAll('todo');
      }
});
