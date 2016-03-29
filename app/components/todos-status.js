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
//      Logger.info('todos=' + todos.length);
  //  var todos2 = this.get('todos');
 //     var dd = this.store.query('todos', { isCompleted: true  });
//   var done = this.store.filterBy('todos', {'isCompleted', true});
   // var done = this.store.filter('isCompleted', true);
    //  Logger.info('done=' + done.length);
    // done.deleteRecord();
    Logger.info('eof clearAllCompleted');
    }
  }
});
