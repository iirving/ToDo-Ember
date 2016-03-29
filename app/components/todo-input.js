import Ember from 'ember';
const {Logger}= Ember;
export default Ember.Component.extend({
  actions: {
    addTodoItem(newTitle) {
      if (newTitle) {
        Logger.info('adding todo item='+newTitle);
        this.sendAction('action', newTitle);
      }
      this.set('newTitle', '');
  }}
});
