import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    addTodoItem(newTitle) {
      'use strict';
      this.sendAction('action', newTitle);
      this.set('newTitle', '');
    },
  },
});
