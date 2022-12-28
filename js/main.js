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

  var test = {
    title: $form.elements.title.value,
    photo: $form.elements.photo.value,
    notes: $form.elements.notes.value,
    entryId: data.nextEntryId
  };
  if (e) {
    data.nextEntryId++;
  }
  var $dataentries = data.entries;
  $dataentries.unshift(test);
  $img.setAttribute('src', 'images/placeholder-image-square.jpg');
  $form.reset();
}
