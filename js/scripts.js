$(document).ready(function () {
  // when Start is clicked
  $('#start').click(function () {
    $('#questions-form').fadeIn();
    $('#startDiv').hide();
  });

  // When Show me the way! is clicked
  $('form#questions-form').submit(function (event) {
    event.preventDefault();

    // get the values from the questions and store them
    // q means question
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
      'CONGRATULATIONS, ' + name + ", LANGUAGE YOU'RE MOST ATTUNED TO IS ";
    let resultReason;
    let link;

    if (q1 === 'zerosOnes') {
      resultTitle += 'MACHINE CODE';
      resultReason = 'You like 0s and 1s. Just like a machine.';
      link = 'https://en.wikipedia.org/wiki/Machine_code';
    } else if (q2 === 'past') {
      resultTitle += 'ASSEMBLY LANGUAGE';
      resultReason = 'Here is a language from your simpler times.';
      link = 'http://flint.cs.yale.edu/cs421/papers/art-of-asm/pdf/FORWARD.PDF';
    } else if (q3 === 'cobalt') {
      resultTitle += 'COBOL';
      resultReason = 'COBOL and Cobalt. Basically same right?';
      link =
        'https://old.reddit.com/r/mainframe/comments/m54uax/cobol_programmers_are_back_in_demand_seriously/';
    } else if (q4 === 'public') {
      resultTitle += 'ADA';
      resultReason = 'I believe US government developed and uses ADA.';
      link = 'https://old.reddit.com/r/ada/';
    } else if (q5 === 'snake') {
      resultTitle += 'Python';
      resultReason = 'Python is a snake right?';
      link = 'https://www.learnpython.org/';
    } else if (q6 === 'coffee') {
      resultTitle += 'CoffeeScript';
      resultReason =
        'I heard you like coffee so I put a coffee in your programming language.';
      link = 'https://coffeescript.org/';
    } else if (q7 === 'fast') {
      resultTitle += 'C++';
      resultReason =
        'Make sure to paint your computer red too so it can go even faster';
      link =
        'https://old.reddit.com/r/cpp/comments/scri8u/why_do_you_like_c/hu8axvr/';
    } else if (q8 === 'google') {
      resultTitle += 'Kotlin';
      resultReason =
        'Do you have an android phone by any chance? You can also pick Java too';
      link =
        'https://old.reddit.com/r/java/comments/ndwz92/can_i_get_some_reasons_to_use_java_instead_of/';
    } else if (q8 === 'microsoft') {
      resultTitle += 'C#';
      resultReason = 'You can also pick Java too.';
      link = 'https://old.reddit.com/r/csharp/comments/p1cttu/is_c_fun/';
    } else if (q8 === 'apple') {
      resultTitle += 'Swift';
      resultReason =
        'Be prepared to pay more to host your app on the App Store.';
      link =
        'https://old.reddit.com/r/swift/comments/hcohn5/do_you_guys_actually_like_swift/';
    } else if (q8 === 'amazon') {
      resultTitle += 'Go Language';
      resultReason = 'Would you like to work on computer servers?';
      link =
        'https://old.reddit.com/r/golang/comments/mjhf5h/why_people_hate_go/';
    }
    $('#questions-form').hide();
    $('#resultDiv').fadeIn();
    $('#result-title').text(resultTitle);
    $('#result-reason').text(resultReason);
    $('#result-link').attr('href', link);
    $('#retryDiv').show();
  });

  // When Go Again! is clicked
  $('#retry').click(function () {
    $('#startDiv').fadeIn();
    $('#resultDiv').hide();
    $('#retryDiv').hide();

    // clear out the fields
    $('#name').val('');
    $('input:radio[name=q1]:checked').checked = false;
    $('input:radio[name=q2]:checked').checked = false;
    $('input:radio[name=q3]:checked').checked = false;
    $('input:radio[name=q4]:checked').checked = false;
    $('input:radio[name=q5]:checked').checked = false;
    $('input:radio[name=q6]:checked').checked = false;
    $('input:radio[name=q7]:checked').checked = false;
    $('input:radio[name=q8]:checked').checked = false;
    $('#result-title').text('');
    $('#result-reason').text('');
    $('#result-link').attr('href', '');
  });
});
