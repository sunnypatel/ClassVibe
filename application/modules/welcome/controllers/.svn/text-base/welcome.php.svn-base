<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Welcome extends CI_Controller {

    // Controller construct
    // loads all resources for class
    function Welcome() {
        parent::__construct();

        // load libraries
        $this->load->library('common/common_lib');
        $this->load->library('auth/tank_auth');
    }

    /**
     * Launch page, user subscription 
     */
    public function index() {
        $this->load->helper(array('form', 'url'));
        $this->load->model('welcome_model');
        $this->load->library('form_validation');
        
        if ($this->tank_auth->is_logged_in()) {
            redirect('/dashboard/');
        } elseif ($this->tank_auth->is_logged_in(FALSE)) {
            redirect('/auth/send_again');
        } else {
            
            // prepare form validation...
                        
        
            $this->form_validation->set_error_delimiters('<span class="help-inline">','</span>');
            $this->form_validation->set_message('required', '%s is a required field.');
            $this->form_validation->set_message('min_length','%s must be at least 4-20 characters');
            $this->form_validation->set_message('max_length','%s must be at least 4-20 characters');
            $this->form_validation->set_message('valid_email', 'Please enter a valid email address.');

            
            $email_activation = $this->config->item('email_activation', 'tank_auth');
            
            if ($this->form_validation->run() == FALSE) {
                // fails validation
                $data['success'] = false;
                $this->common_lib->home_header();
                $this->load->view('welcome_message', $data);
                $this->common_lib->home_footer();
            } else {
              
                // validation success!
                $data['email'] = $this->input->post('email');

                if (!is_null($data = $this->tank_auth->create_user(
                                    $this->form_validation->set_value('email'),
                                    $this->form_validation->set_value('password'),
                                    $this->form_validation->set_value('first_name'),
                                    $this->form_validation->set_value('last_name'),
                                    $email_activation))) {  // user created successfully
                    
                    $data['site_name'] = $this->config->item('website_name', 'tank_auth');
                    if ($email_activation) {         // send "activate" email
                        $data['activation_period'] = $this->config->item('email_activation_expire', 'tank_auth') / 3600;

                        $this->tank_auth->_send_email('activate', $data['email'], $data);

                        unset($data['password']); // Clear password (just for any case)

                        $this->tank_auth->_show_message($this->lang->line('auth_message_registration_completed_1'),'/dashboard/');
                    } else {
                        if ($this->config->item('email_account_details', 'tank_auth')) { // send "welcome" email
                            $this->tank_auth->_send_email('welcome', $data['email'], $data);
                        }
                        unset($data['password']); // Clear password (just for any case)

                        $this->_show_message($this->lang->line('auth_message_registration_completed_2') . ' ' . anchor('/auth/login/', 'Login'));
                    }
                } else {
                    $errors = $this->tank_auth->get_error_message();
                    foreach ($errors as $k => $v)
                        $data['errors'][$k] = $this->lang->line($v);
                }
                $data['success'] = true;
                // show success page
                $this->common_lib->home_header();
                $this->load->view('welcome_message', $data);
                $this->common_lib->home_footer();
            }
        }
    }

    /** Checkes if email is a .edu address
     *
     * @param type $email email to be checked
     */
    public function edu_check($str) {
        $this->load->library('form_validation'); // loads lib in case not loaded

        $str = trim($str);
        $test_sample = substr($str, -4);
        if ($test_sample != '.edu') {
            $this->form_validation->set_message('edu_check', 'To protect your privacy we only accept .edu email addresses at this time.  Please use your .edu address.');
            return false;
        }
        return true;
    }

    /**
     * Ajax calls only!  Checkes post var for email
     * make sure email does not exist in db.
     */
    public function ajax_check_signup() {
        $this->load->model('welcome_model');
        $this->load->library('welcome_library');

        //get email from post
        $email = $this->input->post('email');

        $exists_flag = $this->welcome_library->mailing_email_exist($email);
        if ($exists_flag == 2) { // exists & is user
            echo '2';
            return;
        } elseif ($exists_flag == 1) {
            // exists and NOT a user
            echo '1';
            return;
        } elseif ($exists_flag == 0) {
            // new user, save them!
            $this->welcome_model->submit_email_subscription(array('email' => $email));
            echo '0';
            return;
        }
    }

}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */
