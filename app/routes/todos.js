import Ember from 'ember';

const {Logger}= Ember;

export default Ember.Route.extend({
  actions: {
        createTodo(newTitle) {
          if (newTitle.trim()) {
           Logger.info('doing createTodo ('+newTitle.trim()+")");
          this.store.createRecord('todo', {
            title: newTitle,
            isCompleted: false
          }).save(); }
        },
        deleteTodo(todo) {
          Logger.info('doing deleteTodo');
          todo.destroyRecord();
        }
      },

      model: function() {
        return this.store.findAll('todo');
      }
});
