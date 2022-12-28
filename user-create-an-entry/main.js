var $input = document.querySelector('#Photo');
var $img = document.querySelector('.image');
$input.addEventListener('input', function (e) {
  $img.setAttribute('src', $input.value);
});
