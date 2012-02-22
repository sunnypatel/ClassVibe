<?php
if($success) { ?>
<div class="container" style="position:relative;top:-3px;">
        <div class="row">
        <div class="span16">
            <div class="alert-message  fade in" data-alert="alert">
                                <a class="close" href="#">×</a>
                                <p>Thanks for subscribing, welcome to the growing ClassVibe community.  We can now keep you updated with our progress.  </p>
                            </div>
        </div>
    </div>
</div>
<?php } elseif(form_error('email')!= NULL) {?>
<div class="container" style="position:relative;top:-3px;float:middle;">
        <div class="row">
        <div class="span16">
            <div class="alert-message error fade in" data-alert="error">
                                <a class="close" href="#">×</a>
                                <p><?=form_error('email');?></p>
                            </div>
        </div>
    </div>
</div>
<?php } ?>



<div class="container" id="home_container">

    <div class="row">
        <div class="span16">
            <img src="<?=base_url()?>assets/images/home/logo.png"><br><br><br><br>
            
            <div class="row content">
                <div class="span6 offset2">
                    <div class="welcome_h">
                        Welcome
                        <div id="body">
                        ClassVibe is an online directory
                        of classes for university students.
                        Study together, not harder.
                        <!--<a href="#" rel="twipsy" title="tooltip example">twipsy</a>-->
                        </div>
                    </div>
                </div>
                <div class="span1"><img src="<?=base_url()?>assets/images/home/Divider.png"></div>
                <div class="span6">
                    <div class="signup_h">
                        Signup
                        <div id="body">
                            <form action="<?=site_url()?>" method="post" name="subscription">

                            <input type="email" id="signup_input" rel='twipsy' data-original-title="" name="email" placeholder="Email"></input><br>
                            <input type="button" href="#" id="signup_continue" class="btn green asenine" value="Continue" >
                           
                            </form>
                        </div>
                    </div>
                   
                </div>
            </div>
            <!--<input type="submit" class="btn primary" value="Continue">-->
        </div>
    </div>

    <!-- SIGNUP MODAL HTML -->
    <div id="signup-modal" class="modal hide fade signup_modal" style="display:none;">
        <div class="modal-header signup_modal-header">
            <a href="#" class="close">×</a>
        </div>
        <div class="modal-body signup_modal-body">
            <div class="row step1">
              
                <div class="span9" style="text-align: center;width:540px;">
                    <form class="form-stacked">
                        <label for="email" style="text-align:center">Let's get rolling, enter your email:</label>
                        <input class="span5 big" id="signup_email" type="email" placeholder="example@school.edu" readonly="readonly">
                    </form>
                </div>
            </div>
            <br>
            <div class="row">
                <div class="span9" style="text-align: center;width:540px;">
                    <img src="<?=base_url()?>assets/images/home/Divider_h.jpg"></img>
                </div>
            </div>
            <br>
            <div class="row step2 darken">
              
                <div class="span9" style="width:540px;">
                    <div class="row">
                        <div class="span4">
                            <form class="form-stacked" action="<?=base_url()?>" method="post" >
                                <input type="hidden" id="email" value="" name="email">
                                <label for="first_name">First Name</label>
                                <input class="span3" style="" id="first_name" name="first_name" type="text" placeholder="Joe">
                                <label for="last_name">Last Name</label>
                                <input class="span3" style="" id="last_name" name="last_name" type="text" placeholder="Schmo">
                                <label for="password">Password</label>
                                <input class="span3" style="" id="password" name="password"type="password" placeholder="" data-original-title="">
                                <input type="submit" class="next" value="Next">
                            </form>
                            
                              
                            
                        </div>
                        <div class="span1" style="text-align:center;">
                            <img src="<?=base_url()?>assets/images/home/signup_subDivider.jpg"></img>
                        </div>
                        <div class="span4 google_box" style="text-align: center;">
                            <br><br>
                            <p class="google_label">Or login with Google</p><br>
                            <img src="<?=base_url()?>assets/images/home/google_login.png">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
