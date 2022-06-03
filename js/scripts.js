$(document).ready(function () {
  $('form#questions-form').submit(function (event) {
    event.preventDefault();
    const name = $('#name').val();
    const q1 = $('input:radio[name=q1]:checked').val();
    const q2 = $('input:radio[name=q2]:checked').val();
    const q3 = $('input:radio[name=q3]:checked').val();
    const q4 = $('input:radio[name=q4]:checked').val();
    const q5 = $('input:radio[name=q5]:checked').val();
    const q6 = $('input:radio[name=q6]:checked').val();
    const q7 = $('input:radio[name=q7]:checked').val();
    const q8 = $('input:radio[name=q8]:checked').val();

    let resultTitle =
      'CONGRATULATIONS, ' + name + " LANGUAGE YOU'RE MOST ATTUNED TO IS ";
    let resultReason;
    let link;

    if (q1 === 'option3') {
      resultTitle += 'MACHINE LANGUAGE';
      resultReason = 'You like 0s and 1s. Just like a machine.';
    } else if (q2 === 'option3') {
      resultTitle += 'ASSEMBLY LANGUAGE';
      resultReason = 'Here is a language from your simpler times.';
    } else if (q3 === 'option2') {
      resultTitle += 'COBOL';
      resultReason = 'COBOL and Cobalt. Basically same right?';
    } else if (q4 === 'option1') {
      resultTitle += 'ADA';
      resultReason = 'I believe US government uses ADA.';
    } else if (q5 === 'option3') {
      resultTitle += 'Python';
      resultReason = 'Python is a snake right?';
    } else if (q6 === 'option1') {
      resultTitle += 'CoffeeScript';
      resultReason =
        'I heard you like coffee so I put a coffee in your programming language.';
    } else if (q7 === 'option1') {
      resultTitle += 'C++';
      resultReason =
        'Make sure to paint your computer red too so it can go even faster';
    } else if (q8 === 'option1') {
      resultTitle += 'Kotlin';
      resultReason = 'Do you have an android phone by any chance?';
    } else if (q8 === 'option2') {
      resultTitle += 'C#';
      resultReason = 'You can also pick Java too.';
    } else if (q8 === 'option3') {
      resultTitle += 'Swift';
      resultReason =
        'Be prepared to pay more to host your app on the App Store.';
    } else if (q8 === 'option4') {
      resultTitle += 'Go';
      resultReason = 'Would you like to work on computer servers?';
    }

    $('#result').show();
    $('#result-title').text(resultTitle);
    $('#result-reason').text(resultReason);
    // $('#result-link');
  });
});
