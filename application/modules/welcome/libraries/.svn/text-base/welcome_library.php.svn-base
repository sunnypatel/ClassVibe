<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Welcome_library {

    function Welcome_library()
    {
        //constructor for the common_lib
        $this->CI =& get_instance();
        
        $this->CI->load->model('welcome_model');
    }
    
    /*
     * Checks if email already exists in mailing list
     * @param email_input, email address to be checked
     * @return bool true if email was found, false if email not found.
     */
    function mailing_email_exist($email_input){
        
        $mailing_list = $this->CI->welcome_model->get_mailing_list();
        
        if($mailing_list)
            foreach($mailing_list as $email){
                if(($email->email == $email_input) && ($email->is_user == 0)){
                    return 1; // email exists in mailling list, but is NOT user
                } elseif(($email->email == $email_input) && ($email->is_user == 1)){
                    return 2; // email exists in mailing list, and IS ALREADY a user
                }

            }
        return 0; // new email! save it!
    }
}