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
  var test2 = document.createElement('li');
  test2.setAttribute('class', 'row');
  var divImg = document.createElement('div');
  divImg.setAttribute('class', 'column-half');
  test2.prepend(divImg);
  var test3 = document.createElement('img');
  test3.setAttribute('src', entry.photo);
  divImg.appendChild(test3);
  var divText = document.createElement('div');
  divText.setAttribute('class', 'column-half');
  test2.appendChild(divText);
  var h2li = document.createElement('h2');
  h2li.textContent = entry.title;
  divText.prepend(h2li);
  var pLi = document.createElement('p');
  pLi.textContent = entry.notes;
  divText.appendChild(pLi);
  return test2;
}

document.addEventListener('DOMContentLoaded', domContent);
function domContent(e) {
  var test = document.querySelector('#uldata');
  for (var i = 0; i < data.entries.length; i++) {
    var tes19 = renderEntry(data.entries[i]);
    test.appendChild(tes19);
  }
}

function toggleNoEntries(eve) {
  eve.className = 'hidden';
}
toggleNoEntries();
function viewSwap(view) {
  if (!view.matches('.active')) {
    view.className = '.hidden';
  }
}

var anchor = document.querySelector('.anchor');

anchor.addEventListener('click', viewSwap);
