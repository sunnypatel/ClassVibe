<?php

class Welcome_model extends CI_Model {

    function __construct()
    {
        parent::__construct();
    }
    
    // Submit to mailing list.
    function submit_email_subscription($data){
        $data= array(
            'email'=>$data['email'],
            'date'=>date('Y-m-d H:i:s'),
            'ip'=> $this->input->ip_address()
        );
        $this->db->insert('mailing_list',$data);
    }
    
    // Get all email address
    function get_mailing_list(){
        $query = $this->db->get('mailing_list');
        
        return $query->result();
    }
}
?>
