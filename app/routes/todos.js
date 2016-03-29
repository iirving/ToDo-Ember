import Ember from 'ember';
/*jshint strict: true */
const {Logger}= Ember;

export default Ember.Route.extend({
  actions: {
        createTodo(newTitle) {
          this.store.createRecord('todo', {
            title: newTitle,
            isCompleted: false
          }).save();
        }
      },
      model: function() {
        return this.store.findAll('todo');
      }
});
