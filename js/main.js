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
  var newDomTree = renderEntry(formObj);
  $uldata.prepend(newDomTree);
  viewSwap('entries');
  toggleNoEntries();
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
  pencil.setAttribute('class', 'fa-solid fa-pencil');
  divText.prepend(pencil);
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
  if (e.target.matches('#create-new')) { viewSwap('entry-form'); }
}

var anchor = document.querySelector('.anchor');
var $newButton = document.querySelector('.nah');

anchor.addEventListener('click', currentView);
$newButton.addEventListener('click', currentView);

$uldata.addEventListener('click', function (e) {
  var $allData = document.querySelector('[data-entry-id]');
  var $dataEntryId = $allData.getAttribute('data-entry-id');
  $dataEntryId = Number($dataEntryId);
  if (e.target.tagName === 'I') {
    viewSwap('entry-form');
    for (var i = 0; i < data.entries.length; i++) {

      if (data.entries[i].entryId === $dataEntryId) {
        data.editing = data.entries[i];
        $img.setAttribute('src', data.entries[i].photo);
        $form.elements.title.value = data.entries[i].title;
        $form.elements.photo.value = data.entries[i].photo;
        $form.elements.notes.value = data.entries[i].notes;
        var $header = document.querySelector('.header');
        $header.textContent = 'Edit Entry';
      }
    }
  }
});
