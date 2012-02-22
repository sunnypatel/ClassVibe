<?php
$config = array(
           'welcome/index' => array(
                                    array(
                                            'field' => 'email',
                                            'label' => 'Email',
                                            'rules' => 'required|valid_email|trim|xss_clean|callback_edu_check'
                                         ),
                                    array(
                                            'field' => 'password',
                                            'label' => 'Password',
                                            'rules' => 'trim|required|xss_clean|min_length['.$this->config->item('password_min_length', 'tank_auth').']|max_length['.$this->config->item('password_max_length', 'tank_auth').']|alpha_dash'
                                         ),
                                    array(
                                            'field' => 'first_name',
                                            'label' => 'First name',
                                            'rules' => 'required|trim|xss_clean|max_length[15]'
                                         ),
                                    array(
                                            'field' => 'last_name',
                                            'label' => 'Last name',
                                            'rules' => 'required|trim|xss_clean|max_length[15]'
                                         )
                                    )
               );
?>
