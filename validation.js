
$(document).ready(function() {
    var arr=new Array(Object);
    var k=0;
   /* $('#first_form').submit(function(e) {
        e.preventDefault();
        var first_name = $('#first_name').val();
        var last_name = $('#last_name').val();
        var email = $('#email').val();
        var password = $('#password').val();
         var cnfmpsw=$('#cnfmpassword').val();*/


    $('#btn').click(function() {
       // e.preventDefault();
        var first_name = $('#first_name').val();
        var last_name = $('#last_name').val();
        var email = $('#email').val();
        var password = $('#password').val();
        var cnfmpsw=$('#cnfmpassword').val();

        $(".error").remove();

        arr[k] = {
            'fname' :first_name,
            'lname' :last_name ,
            'email' : email,
           'password':password,
            'cnfmpswd':cnfmpsw
        };
        k++;

        if (first_name.length < 1 || first_name.length >30 ) {
            $('#first_name').after('<span class="error">This field is required</span>');
        }
        if (last_name.length < 1 || last_name.length > 30) {
            $('#last_name').after('<span class="error">This field is required</span>');
        }
        if (email.length < 1) {
            $('#email').after('<span class="error">This field is required</span>');
        }
        else {
            var regEx =/^[a-zA-Z0-9_.]{4,30}@[a-zA-Z]{2,7}[.]{1}[a-zA-Z.]{2,20}$/;
            var validEmail = regEx.test(email);
           // alert(validEmail);
            if (!validEmail) {
                $('#email').after('<span class="error">Enter a valid email</span>');
            }
        }
        if (password.length < 8) {
            $('#password').after('<span class="error">Password must be at least 8 characters long</span>');
        }


        if (cnfmpsw.length < 8) {
            $('#cnfmpassword').after('<span class="error">Password must be at least 8 characters long</span>');
        }
        else{

            if(cnfmpsw!=password){
                $('#cnfmpassword').after('<span class="error">Password mismatched</span>');
            }
        }


        if(first_name !=''){
            var x=confirm("do you want to submit your details?");

            alert(x);
          if(x==true){
              if(k!=null){
                  $("#emp_table").append("<tr><td>"+arr[k-1].fname+"</td>"
                      +"<td>"+arr[k-1].name+"</td>"
                      +"<td>"+arr[k-1].dob+"</td>"
                      +"<td> <i class='rmv  fa fa-trash'>delete</i></td></tr>"
                  );

              }
          }
          else{
              alert("okay!! try again");
          }



        }

    });






    $(document).on('click', '.rmv', function () {
        $(this).parents('tr').remove();
    });






})