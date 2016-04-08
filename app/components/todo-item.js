import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNameBindings: ['editing'],
  editing: false,
  actions: {
    editTodo() {
      this.toggleProperty('editing');
    },

    submitTodo() {
      let todo = this.get('todo');
      if (todo.get('title').trim() === '') {
        todo.destroyRecord();
      } else {
        todo.save();
      }

      this.set('editing', false);
    },

    toggleCompleted(item) {
      var isCompletedStatus = item.get('isCompleted');
      if (isCompletedStatus === true) {
        item.set('isCompleted', false);
      } else {
        item.set('isCompleted', true);
      }
    },

    removeItem(item) {
      Ember.Logger.info('doing removeItem in todo-item');
      item.destroyRecord();
    },
  },
});
