$(document).ready(function () {
  $('form#questions-form').submit(function (event) {
    event.preventDefault();
    const name = $('#name').val();
    const q1 = $('input:radio[name=q1]:checked').val();
    console.log(name);
    console.log(q1);
  });
});
