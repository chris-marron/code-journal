/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

window.addEventListener('beforeunload', dataJson);
function dataJson(e) {
  var dataJson = JSON.stringify(data);
  localStorage.setItem('data', dataJson);

}

var getJson = localStorage.getItem('dataJson');
if (getJson !== null) {
  data = JSON.parse(getJson);
}
