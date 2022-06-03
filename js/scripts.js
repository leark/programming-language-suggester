$(document).ready(function () {
  $('form#questions-form').submit(function (event) {
    event.preventDefault();
    const name = $('#name').val();
    const q1 = $('input:radio[name=q1]:checked').val();
    console.log(name);
    console.log(q1);

    let resultTitle = "CONGRATULATIONS, LANGUAGE YOU'RE MOST ATTUNED TO IS ";
    let resultReason;

    if (q1 === 'option3') {
      resultTitle += 'MACHINE LANGUAGE';
      resultReason = 'You like 0s and 1s. Just like a machine.';
    }

    $('#result-title').text(resultTitle);
    $('#result-reason').text(resultReason);
  });
});
