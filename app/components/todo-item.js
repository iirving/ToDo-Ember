import Ember from 'ember';

export default Ember.Component.extend({
  tagName: "li",
  actions: {
    toggleCompleted(item) {
      var isCompletedStatus = item.get('isCompleted');
      if (isCompletedStatus == true) {
        item.set('isCompleted', false);
      } else {
        item.set('isCompleted', true);
      }
    },
    removeItem(item) {
 //     var id = item.id
//      alert('this will remove the todo item.'+ id);
        item.destroyRecord();
    }
  }
});
