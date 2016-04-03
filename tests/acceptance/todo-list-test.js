import { test } from 'qunit';
import moduleForAcceptance from 'todo-ember/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | todos list');

test('entering a new item adds to the bottom of the list.', function(assert) {
  const newItemtitle = 'My new ToDo';
  visit('/');
  fillIn('input#new-todo',newItemtitle);
  keyEvent('input#new-todo', 'keyup', 13);
  andThen(function() {
    assert.equal(find('ul#todo-list li:last label').text().trim(), newItemtitle, "added a new todo item title text.");
  });
});

test('we can delete a item.', function(assert) {
  const itemSelector = 'ul#todo-list li:first';
  visit('/');
  andThen(function() {
    let numberOfItems = find('ul#todo-list li').length;
    let itemText = find(itemSelector+' label').text().trim();
    click(itemSelector+' button.destroy');
    andThen(function() {
      assert.equal(find('ul#todo-list li').length, numberOfItems - 1, 'one less item in the list');
      assert.notEqual(findWithAssert(itemSelector+' label').text().trim(), itemText, 'the item is no longer there.');
    });
  });
});

test('we can toggle the complete state of a item.', function(assert) {
  const itemSelector = 'ul#todo-list li:first';
  visit('/');
  andThen(function() {
    let itemClass = find(itemSelector+' label').attr("class");
//    alert(itemClass);
    keyEvent(itemSelector + ' input', 'keyup', 13);
    andThen(function() {
  //    alert(find(itemSelector+' label').attr("class"));
      assert.notEqual(findWithAssert(itemSelector+' label').attr("class"), itemClass);
    });
  });
});
