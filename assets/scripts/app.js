$(document).ready(function() {

  $.ajax({
    url: 'https://galvanize-student-apis.herokuapp.com/gpersonnel/roles'
  }).done(function(results) {
    var roleArray = results;
    console.log('roleArray', roleArray);
    for (var i = 0; i < roleArray.length; i++) {

      $('#placeholderValue').after('<option id="' + roleArray[i].title + '" value="' + roleArray[i].img + '">' + roleArray[i].title + '</option>');
    };
      $('#role').change(function() {
        var roleChange = $(this).val();
        $('#roleImage').attr('src', roleChange);
      });
  });

  $('form').on('submit', function(e) {
    e.preventDefault();
    var firstNameToSend = $('#fName').val();
    var lastNameToSend = $('#lName').val();
    var roleToSend = $("form option:selected").text();
    console.log(firstNameToSend);
    console.log(lastNameToSend);
    console.log(roleToSend);

    $.ajax({
      type: "POST",
      url: 'https://galvanize-student-apis.herokuapp.com/gpersonnel/users',
      data: {
        firstName: firstNameToSend,
        lastName: lastNameToSend,
        role: roleToSend
      }
    }).done(function(result) {
      var post = result.message;
      $('.save-status').text(post);
      $('#status').addClass('alert alert-success');
      $('#status').fadeIn(500, function () {
        $(this).delay(2000).fadeOut(500);
      });
    });
  });
});
