import Ember from 'ember';
const {Logger}= Ember;
export default Ember.Component.extend({
  actions: {
    addTodoItem(newTitle) {
      if (newTitle.trim()) {
        Logger.info('addTodoItem in the todo-input item='+newTitle);
        this.sendAction('action', newTitle);
      }
      this.set('newTitle', '');
  }}
});
