$(document).ready(function(){$('#signup-modal').modal({backdrop:'true',keyboard:true});$('#signup_input').twipsy({placement:'right',trigger:'manual'})
$('#password').twipsy({placement:'below',trigger:'focus'})
$('#password').attr('data-original-title',"At least 4 characters");$('#signup_continue').click(function(){continue_form();return;});$('#signup_input').keypress(function(e){if(e.which==13){continue_form();return false;}});function continue_form(){var email=$('#signup_input').val();var edu_chk=(email.indexOf(".edu")==(email.length-4))&&(email.indexOf('@')!=-1);if(edu_chk){$.ajax({type:'post',url:"index.php/welcome/ajax_check_signup",data:"email="+email,success:function(data){if(data=="2"){mod_tipsy_txt('#signup_input','This email already exists');alert('show pwd field and change form action');$('#signup_input').twipsy('show');}else if(data=='0'||data=='1'){$('#signup_email').val(email);$('#email').val(email);$('#signup-modal').modal('show');$('#first_name').focus();}else{alert('something wierd; data='+data);}}})}else{mod_tipsy_txt('#signup_input','Please use a .edu email address');$('#signup_input').twipsy('show');}}
function mod_tipsy_txt(sel,msg){$(sel).attr('data-original-title',msg);}});!function($){"use strict"
var transitionEnd
$(document).ready(function(){$.support.transition=(function(){var thisBody=document.body||document.documentElement,thisStyle=thisBody.style,support=thisStyle.transition!==undefined||thisStyle.WebkitTransition!==undefined||thisStyle.MozTransition!==undefined||thisStyle.MsTransition!==undefined||thisStyle.OTransition!==undefined
return support})()
if($.support.transition){transitionEnd="TransitionEnd"
if($.browser.webkit){transitionEnd="webkitTransitionEnd"}else if($.browser.mozilla){transitionEnd="transitionend"}else if($.browser.opera){transitionEnd="oTransitionEnd"}}})
var Modal=function(content,options){this.settings=$.extend({},$.fn.modal.defaults,options)
this.$element=$(content).delegate('.close','click.modal',$.proxy(this.hide,this))
if(this.settings.show){this.show()}
return this}
Modal.prototype={toggle:function(){return this[!this.isShown?'show':'hide']()},show:function(){var that=this
this.isShown=true
this.$element.trigger('show')
escape.call(this)
backdrop.call(this,function(){var transition=$.support.transition&&that.$element.hasClass('fade')
that.$element.appendTo(document.body).show()
if(transition){that.$element[0].offsetWidth}
that.$element.addClass('in')
transition?that.$element.one(transitionEnd,function(){that.$element.trigger('shown')}):that.$element.trigger('shown')})
return this},hide:function(e){e&&e.preventDefault()
if(!this.isShown){return this}
var that=this
this.isShown=false
escape.call(this)
this.$element.trigger('hide').removeClass('in')
$.support.transition&&this.$element.hasClass('fade')?hideWithTransition.call(this):hideModal.call(this)
return this}}
function hideWithTransition(){var that=this,timeout=setTimeout(function(){that.$element.unbind(transitionEnd)
hideModal.call(that)},500)
this.$element.one(transitionEnd,function(){clearTimeout(timeout)
hideModal.call(that)})}
function hideModal(that){this.$element.hide().trigger('hidden')
backdrop.call(this)}
function backdrop(callback){var that=this,animate=this.$element.hasClass('fade')?'fade':''
if(this.isShown&&this.settings.backdrop){var doAnimate=$.support.transition&&animate
this.$backdrop=$('<div class="modal-backdrop '+animate+'" />').appendTo(document.body)
if(this.settings.backdrop!='static'){this.$backdrop.click($.proxy(this.hide,this))}
if(doAnimate){this.$backdrop[0].offsetWidth}
this.$backdrop.addClass('in')
doAnimate?this.$backdrop.one(transitionEnd,callback):callback()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass('in')
$.support.transition&&this.$element.hasClass('fade')?this.$backdrop.one(transitionEnd,$.proxy(removeBackdrop,this)):removeBackdrop.call(this)}else if(callback){callback()}}
function removeBackdrop(){this.$backdrop.remove()
this.$backdrop=null}
function escape(){var that=this
if(this.isShown&&this.settings.keyboard){$(document).bind('keyup.modal',function(e){if(e.which==27){that.hide()}})}else if(!this.isShown){$(document).unbind('keyup.modal')}}
$.fn.modal=function(options){var modal=this.data('modal')
if(!modal){if(typeof options=='string'){options={show:/show|toggle/.test(options)}}
return this.each(function(){$(this).data('modal',new Modal(this,options))})}
if(options===true){return modal}
if(typeof options=='string'){modal[options]()}else if(modal){modal.toggle()}
return this}
$.fn.modal.Modal=Modal
$.fn.modal.defaults={backdrop:false,keyboard:false,show:false}
$(document).ready(function(){$('body').delegate('[data-controls-modal]','click',function(e){e.preventDefault()
var $this=$(this).data('show',true)
$('#'+$this.attr('data-controls-modal')).modal($this.data())})})}(window.jQuery||window.ender);!function($){"use strict"
var transitionEnd
$(document).ready(function(){$.support.transition=(function(){var thisBody=document.body||document.documentElement,thisStyle=thisBody.style,support=thisStyle.transition!==undefined||thisStyle.WebkitTransition!==undefined||thisStyle.MozTransition!==undefined||thisStyle.MsTransition!==undefined||thisStyle.OTransition!==undefined
return support})()
if($.support.transition){transitionEnd="TransitionEnd"
if($.browser.webkit){transitionEnd="webkitTransitionEnd"}else if($.browser.mozilla){transitionEnd="transitionend"}else if($.browser.opera){transitionEnd="oTransitionEnd"}}})
var Alert=function(content,options){if(options=='close')return this.close.call(content)
this.settings=$.extend({},$.fn.alert.defaults,options)
this.$element=$(content).delegate(this.settings.selector,'click',this.close)}
Alert.prototype={close:function(e){var $element=$(this),className='alert-message'
$element=$element.hasClass(className)?$element:$element.parent()
e&&e.preventDefault()
$element.removeClass('in')
function removeElement(){$element.remove()}
$.support.transition&&$element.hasClass('fade')?$element.bind(transitionEnd,removeElement):removeElement()}}
$.fn.alert=function(options){if(options===true){return this.data('alert')}
return this.each(function(){var $this=$(this),data
if(typeof options=='string'){data=$this.data('alert')
if(typeof data=='object'){return data[options].call($this)}}
$(this).data('alert',new Alert(this,options))})}
$.fn.alert.defaults={selector:'.close'}
$(document).ready(function(){new Alert($('body'),{selector:'.alert-message[data-alert] .close'})})}(window.jQuery||window.ender);!function($){"use strict"
var transitionEnd
$(document).ready(function(){$.support.transition=(function(){var thisBody=document.body||document.documentElement,thisStyle=thisBody.style,support=thisStyle.transition!==undefined||thisStyle.WebkitTransition!==undefined||thisStyle.MozTransition!==undefined||thisStyle.MsTransition!==undefined||thisStyle.OTransition!==undefined
return support})()
if($.support.transition){transitionEnd="TransitionEnd"
if($.browser.webkit){transitionEnd="webkitTransitionEnd"}else if($.browser.mozilla){transitionEnd="transitionend"}else if($.browser.opera){transitionEnd="oTransitionEnd"}}})
var Twipsy=function(element,options){this.$element=$(element)
this.options=options
this.enabled=true
this.fixTitle()}
Twipsy.prototype={show:function(){var pos,actualWidth,actualHeight,placement,$tip,tp
if(this.hasContent()&&this.enabled){$tip=this.tip()
this.setContent()
if(this.options.animate){$tip.addClass('fade')}
$tip.remove().css({top:0,left:0,display:'block'}).prependTo(document.body)
pos=$.extend({},this.$element.offset(),{width:this.$element[0].offsetWidth,height:this.$element[0].offsetHeight})
actualWidth=$tip[0].offsetWidth
actualHeight=$tip[0].offsetHeight
placement=maybeCall(this.options.placement,this,[$tip[0],this.$element[0]])
switch(placement){case'below':tp={top:pos.top+pos.height+this.options.offset,left:pos.left+pos.width/2-actualWidth/2}
break
case'above':tp={top:pos.top-actualHeight-this.options.offset,left:pos.left+pos.width/2-actualWidth/2}
break
case'left':tp={top:pos.top+pos.height/2-actualHeight/2,left:pos.left-actualWidth-this.options.offset}
break
case'right':tp={top:pos.top+pos.height/2-actualHeight/2,left:pos.left+pos.width+this.options.offset}
break}
$tip.css(tp).addClass(placement).addClass('in')}},setContent:function(){var $tip=this.tip()
$tip.find('.twipsy-inner')[this.options.html?'html':'text'](this.getTitle())
$tip[0].className='twipsy'},hide:function(){var that=this,$tip=this.tip()
$tip.removeClass('in')
function removeElement(){$tip.remove()}
$.support.transition&&this.$tip.hasClass('fade')?$tip.bind(transitionEnd,removeElement):removeElement()},fixTitle:function(){var $e=this.$element
if($e.attr('title')||typeof($e.attr('data-original-title'))!='string'){$e.attr('data-original-title',$e.attr('title')||'').removeAttr('title')}},hasContent:function(){return this.getTitle()},getTitle:function(){var title,$e=this.$element,o=this.options
this.fixTitle()
if(typeof o.title=='string'){title=$e.attr(o.title=='title'?'data-original-title':o.title)}else if(typeof o.title=='function'){title=o.title.call($e[0])}
title=(''+title).replace(/(^\s*|\s*$)/,"")
return title||o.fallback},tip:function(){return this.$tip=this.$tip||$('<div class="twipsy" />').html(this.options.template)},validate:function(){if(!this.$element[0].parentNode){this.hide()
this.$element=null
this.options=null}},enable:function(){this.enabled=true},disable:function(){this.enabled=false},toggleEnabled:function(){this.enabled=!this.enabled},toggle:function(){this[this.tip().hasClass('in')?'hide':'show']()}}
function maybeCall(thing,ctx,args){return typeof thing=='function'?thing.apply(ctx,args):thing}
$.fn.twipsy=function(options){$.fn.twipsy.initWith.call(this,options,Twipsy,'twipsy')
return this}
$.fn.twipsy.initWith=function(options,Constructor,name){var twipsy,binder,eventIn,eventOut
if(options===true){return this.data(name)}else if(typeof options=='string'){twipsy=this.data(name)
if(twipsy){twipsy[options]()}
return this}
options=$.extend({},$.fn[name].defaults,options)
function get(ele){var twipsy=$.data(ele,name)
if(!twipsy){twipsy=new Constructor(ele,$.fn.twipsy.elementOptions(ele,options))
$.data(ele,name,twipsy)}
return twipsy}
function enter(){var twipsy=get(this)
twipsy.hoverState='in'
if(options.delayIn==0){twipsy.show()}else{twipsy.fixTitle()
setTimeout(function(){if(twipsy.hoverState=='in'){twipsy.show()}},options.delayIn)}}
function leave(){var twipsy=get(this)
twipsy.hoverState='out'
if(options.delayOut==0){twipsy.hide()}else{setTimeout(function(){if(twipsy.hoverState=='out'){twipsy.hide()}},options.delayOut)}}
if(!options.live){this.each(function(){get(this)})}
if(options.trigger!='manual'){binder=options.live?'live':'bind'
eventIn=options.trigger=='hover'?'mouseenter':'focus'
eventOut=options.trigger=='hover'?'mouseleave':'blur'
this[binder](eventIn,enter)[binder](eventOut,leave)}
return this}
$.fn.twipsy.Twipsy=Twipsy
$.fn.twipsy.defaults={animate:true,delayIn:0,delayOut:0,fallback:'',placement:'above',html:false,live:false,offset:0,title:'title',trigger:'hover',template:'<div class="twipsy-arrow"></div><div class="twipsy-inner"></div>'}
$.fn.twipsy.rejectAttrOptions=['title']
$.fn.twipsy.elementOptions=function(ele,options){var data=$(ele).data(),rejects=$.fn.twipsy.rejectAttrOptions,i=rejects.length
while(i--){delete data[rejects[i]]}
return $.extend({},options,data)}}(window.jQuery||window.ender);