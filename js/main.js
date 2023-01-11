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
  if (data.editing === null) {
    data.nextEntryId++;

    data.entries.unshift(formObj);
    $img.setAttribute('src', 'images/placeholder-image-square.jpg');

    var newDomTree = renderEntry(formObj);
    $uldata.prepend(newDomTree);
  }

  if (data.editing !== null) {
    var editedObj = {
      entryId: data.editing.entryId,
      notes: $form.elements.notes.value,
      photo: $form.elements.photo.value,
      title: $form.elements.title.value

    };

    for (var i = 0; i < data.entries.length; i++) {

      if (data.entries[i].entryId === data.editing.entryId) {

        data.entries.splice(i, 1, editedObj);
        var $liEntries = document.querySelectorAll('li');

        for (var a = 0; a < $liEntries.length; a++) {

          var numLi = Number($liEntries[a].getAttribute('data-entry-id'));
          if (numLi === editedObj.entryId) {
            var newRender = renderEntry(editedObj);
            $liEntries[a].replaceWith(newRender);
            $header.textContent = 'New Entry';
          }
        }

      }
    }
  }
  $img.setAttribute('src', 'images/placeholder-image-square.jpg');
  viewSwap('entries');
  toggleNoEntries();
  data.editing = null;
  $form.reset();
}

function renderEntry(entry) {
  var $li = document.createElement('li');
  $li.setAttribute('class', 'row');
  $li.setAttribute('data-entry-id', entry.entryId);
  var divImg = document.createElement('div');
  divImg.setAttribute('class', 'column-half');
  $li.prepend(divImg);
  var $img = document.createElement('img');
  $img.setAttribute('src', entry.photo);
  divImg.appendChild($img);
  var divText = document.createElement('div');
  divText.setAttribute('class', 'column-half');
  $li.appendChild(divText);
  var h2li = document.createElement('h2');
  h2li.textContent = entry.title;
  divText.prepend(h2li);
  var pencil = document.createElement('i');
  pencil.classList.add('fa-solid');
  pencil.classList.add('fa-pencil');
  pencil.setAttribute('data-entry-id', entry.entryId);
  divText.appendChild(pencil);
  var pLi = document.createElement('p');
  pLi.textContent = entry.notes;
  divText.appendChild(pLi);

  return $li;
}
var $uldata = document.querySelector('#uldata');
document.addEventListener('DOMContentLoaded', domContent);
function domContent(e) {

  for (var i = 0; i < data.entries.length; i++) {
    var dataRender = renderEntry(data.entries[i]);
    $uldata.appendChild(dataRender);
    viewSwap(data.view);
    toggleNoEntries();
  }
}
var $hideEntries = document.querySelector('#no-entries');
function toggleNoEntries(eve) {
  if ($uldata.hasChildNodes) {
    $hideEntries.setAttribute('class', 'hidden');
  } else {
    $hideEntries.setAttribute('class', 'row');
  }
}
var viewList = document.querySelectorAll('[data-view]');
function viewSwap(view) {
  data.view = view;
  for (var index = 0; index < viewList.length; index++) {
    if (viewList[index].getAttribute('data-view') === view) {
      viewList[index].className = '';
    } else {
      viewList[index].className = 'hidden';
    }
  }
}

function currentView(e) {
  if (e.target.matches('#entries-view')) {
    viewSwap('entries');
  }
  if (e.target.matches('#create-new')) {
    viewSwap('entry-form');
    $delete.setAttribute('class', 'delete-btn hidden');
  }
}

var anchor = document.querySelector('.anchor');
var $newButton = document.querySelector('.nah');

anchor.addEventListener('click', currentView);
$newButton.addEventListener('click', currentView);
var $header = document.querySelector('.header');

function pencilClick(e) {
  var $dataEntryId = e.target.getAttribute('data-entry-id');
  $dataEntryId = Number($dataEntryId);
  if (e.target.matches('i')) {
    viewSwap('entry-form');
    $delete.setAttribute('class', 'delete-btn');
    for (var i = 0; i < data.entries.length; i++) {

      if (data.entries[i].entryId === $dataEntryId) {
        data.editing = data.entries[i];
        $img.setAttribute('src', data.entries[i].photo);
        $form.elements.title.value = data.entries[i].title;
        $form.elements.photo.value = data.entries[i].photo;
        $form.elements.notes.value = data.entries[i].notes;
        $header.textContent = 'Edit Entry';

      }
    }
  }
}
$uldata.addEventListener('click', pencilClick);

var $delete = document.querySelector('.delete-btn');
$delete.addEventListener('click', function (e) {
});
