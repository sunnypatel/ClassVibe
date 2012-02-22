$(document).ready(function(){
    // init. modal, tooltips, events etc
    $('#signup-modal').modal({
        backdrop:'true',
        keyboard:true
    });
    
    // homepage signup input error msg tooltip
    $('#signup_input').twipsy({
        placement:'right',
        trigger:'manual'
    })
    // tooltip help for password
    $('#password').twipsy({
        placement:'below',
        trigger:'focus'
    })
    $('#password').attr('data-original-title',"At least 4 characters");
    
    
    /*
     * Controls the signup fields and popup
     * processing
     */
    $('#signup_continue').click(function(){
        continue_form();
        return;
    });
    // when enter key is pressed
    $('#signup_input').keypress(function(e){
        if(e.which == 13){
            continue_form();
            return false;
        }
    });
      
    function continue_form(){
        // get signup field email
        var email = $('#signup_input').val();
        var edu_chk = (email.indexOf(".edu") == (email.length - 4)) && (email.indexOf('@') != -1 );
        if(edu_chk){
            // valid .edu email address,             
            // send ajax call to server to check if email already exists.
            $.ajax({
                type:'post',
                url:"index.php/welcome/ajax_check_signup",
                data:"email="+email,
                success:function(data){
                    if(data=="2") { // email already exists in db
                        
                        mod_tipsy_txt('#signup_input','This email already exists');
                        alert('show pwd field and change form action');
                        $('#signup_input').twipsy('show');
                        
                    } else if(data =='0' || data == '1') { // email doesnt have a user acct yet
                        $('#signup_email').val(email);
                        $('#email').val(email); // add to hidden email field
                        $('#signup-modal').modal('show');   // show signup popup
                        $('#first_name').focus(); 
                    } else {
                        alert('something wierd; data='+data);
                    }
                }
            })
            
        } else {
            // not valid .edu email address
            mod_tipsy_txt('#signup_input','Please use a .edu email address');
            $('#signup_input').twipsy('show');
        }
    }
    
    // show tipsy error message
    function mod_tipsy_txt( sel, msg){
        $(sel).attr('data-original-title',msg);
    }
});
