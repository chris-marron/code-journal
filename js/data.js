/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

window.addEventListener('beforeunload', function (e) {
  var $data = JSON.stringify(data);
  localStorage.setItem('data', $data);
});
