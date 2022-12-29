var $input = document.querySelector('#Photo');
var $img = document.querySelector('.image');
function inputEvent(e) {
  $img.setAttribute('src', $input.value);
}
$input.addEventListener('input', inputEvent);

var $form = document.querySelector('form');

$form.addEventListener('submit', formEvent);
function formEvent(e) {
  e.preventDefault();

  var formObj = {
    title: $form.elements.title.value,
    photo: $form.elements.photo.value,
    notes: $form.elements.notes.value,
    entryId: data.nextEntryId
  };
  data.nextEntryId++;

  data.entries.unshift(formObj);
  $img.setAttribute('src', 'images/placeholder-image-square.jpg');
  $form.reset();
}

function renderEntry(entry) {
  var ulParent = document.createElement('ul');
  ulParent.setAttribute('class', 'row');
  var test2 = document.createElement('li');
  test2.setAttribute('class', 'column-half');
  ulParent.prepend(test2);
  var test3 = document.createElement('img');
  test3.setAttribute('src', entry.entries.photo);
  test2.appendChild(test3);
  var liSibling = document.createElement('li');
  liSibling.setAttribute('class', 'column-half');
  ulParent.appendChild(liSibling);
  var h2li = document.createElement('h2');
  h2li.textContent = entry.entries.title;
  liSibling.prepend(h2li);
  return ulParent;
}
var test = document.querySelector('.hidden');
document.addEventListener('DOMContentLoaded', function (e) {
  for (var i in data.entries) {
    var tes19 = renderEntry(data.entries[i]);
    test.appendChild(tes19);

  }
});
