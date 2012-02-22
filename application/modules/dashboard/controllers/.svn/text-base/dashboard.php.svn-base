<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Dashboard extends CI_Controller {

    // Controller construct
    // loads all resources for class
    function Dashboard() {
        parent::__construct();

        // load libraries
        $this->load->library('common/common_lib');
        $this->load->library('auth/tank_auth');
    }

    /**
     * Launch page, user dashboard 
     */
    public function index() {
        $this->load->helper(array('form', 'url'));
        $this->load->model('welcome/welcome_model');
        $this->load->library('form_validation');
        var_dump($this->session->flashdata('message'));
    }
}

/* End of file dashboard.php */

