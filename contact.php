
<? ob_start(); ?>

<?PHP
/*
    Contact Form from HTML Form Guide
    This program is free software published under the
    terms of the GNU Lesser General Public License.
    See this page for more info:
    http://www.html-form-guide.com/php-form/php-form-validation.html
*/
require_once("./include/fgcontactform.php"); 
require_once("./include/formvalidator.php");

$formproc = new FGContactForm();

//Initialize the contact form
$formproc->AddRecipient('damon.j.c9@gmail.com'); //<<---Put your email address here
$formproc->SetFormRandomKey('CnRrspl1FyEylUj');

$validation_errors='';
if(isset($_POST['submitted']))
{// We need to validate only after the form is submitted

    //Setup Server side Validations
    //Please note that the element name is case sensitive 
    $validator = new FormValidator();
    $validator->addValidation("name","req","Please fill in Name");
    $validator->addValidation("email","email","The input for Email should be a valid email value");
    $validator->addValidation("email","req","Please fill in Email");
    
    //Then validate the form
    if($validator->ValidateForm())
    {
        //If the validations succeeded, proceed with form processing
        if($formproc->ProcessForm())
        {
            $formproc->RedirectToURL("thank-you2.php");
        }
    }
    else
    {
        //Validations failed. Display Errors.
        $error_hash = $validator->GetErrors();
        foreach($error_hash as $inpname => $inp_err)
        {
           $validation_errors .= "<p>$inpname : $inp_err</p>\n";
        }        
    }
}//if
$disp_name  = isset($_POST['name'])?$_POST['name']:'';
$disp_email = isset($_POST['email'])?$_POST['email']:'';
$disp_message = isset($_POST['message'])?$_POST['message']:'';


?>

<!doctype html>
<html lang="en">
    <head>
    <style>
body {
	font: 14px/18px "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif; 
	color: #EFEFEF; 
}
h2 {
	color: #FFF;
}

@font-face {
	font-family: 'GeosansLightRegular';
	src: url('css/geosans/geosanslight-webfont.eot');
	src: url('css/geosans/geosanslight-webfont.eot?#iefix') format('embedded-opentype'), url('css/geosans/geosanslight-webfont.woff') format('woff'), url('css/geosans/geosanslight-webfont.ttf') format('truetype'), url('css/geosans/geosanslight-webfont.svg#GeosansLightRegular') format('svg');
	font-weight: normal;
	font-style: normal;
}
#something-else {
	padding: 0;
	margin: 0;
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	overflow: hidden;}
#bg {
	padding: 0;
	margin: 0px 0 0 20px;
	position: relative;
	background-color: #1c1b1b;
	width: 340px;
	top: 0px;
	left: 0px;
	height: 500px;
	-moz-border-radius: 10px;
-webkit-border-radius: 10px;
-khtml-border-radius: 10px;
border-radius: 10px; 
	box-shadow: 1px 1px 6px 1px #000000;
	
}

#contact-tab {position: absolute; width: 16px; height: 32px;margin-left: -14px; top: 5px;}


#contactus fieldset
{
   width:270px;
   padding:20px 20px 20px 20px;
   border:1px solid #ccc;
-moz-border-radius: 10px;
-webkit-border-radius: 10px;
-khtml-border-radius: 10px;
border-radius: 10px;   
margin-top: -5px;
margin-left: 15px;
}

#contactus legend
{
   font-family: 'GeosansLightRegular';
   font-size: 20px;
   font-weight: normal;
   
    /*text-shadow: 0px 0px 4px #0F6, 0px 0px 1px #fff;
	color:#0f9;
	opacity: .70;*/
	color: #82da9b;
}

@font-face {
    font-family: 'typo3Normal';
    src: url('../fonts/typo3normal-webfont.eot');
    src: url('../fonts/typo3normal-webfont.eot?#iefix') format('embedded-opentype'),
         url('../fonts/typo3normal-webfont.woff') format('woff'),
         url('../fonts/typo3normal-webfont.ttf') format('truetype'),
         url('../fonts/typo3normal-webfont.svg#typo3Normal') format('svg');
    font-weight: normal;
    font-style: normal;

}


#contactus label
{
   font-family: 'GeosansLightRegular';
   font-size:14px;
   font-weight: normal;
   color: #fff;
   letter-spacing: .1em;
  
}

#contactus input[type="text"],textarea
{
  font-family:"Trebuchet MS", Arial, Helvetica, sans-serif;
  font-size: 13px;
  line-height:100%;
   
  padding : 5px; 
  border : 1px solid #333;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    -khtml-border-radius: 5px;
    border-radius: 5px;

}

#contactus input[type="text"]
{
  height:18px;
  width:220px;
  margin-top: 2px;
}

#contactus #scaptcha
{
  width:60px;
  height:18px;
}

#contactus input[type="submit"]
{
   width:100px;
   height:30px;
   padding-left:0px;
}

#contactus textarea
{
  height:120px;
  width:260px;
  margin-top: 2px;
}

#contactus input:focus,textarea:focus
{
  color : #000;
  border : 1px solid #6fe4a0;
 /* background-color : #ffff99; */
  font-weight:bold;
  font-size: 14px;
  
}

#contactus .container
{
   margin-top:8px;
   margin-bottom: 10px;
}

#contactus .error
{
   font-family: 'GeosansLightRegular'; 
   font-size: 13px;
   color: #dedf6a;
   background-color : #ffff00;
}

#contactus fieldset#antispam
{
   padding:2px;
   border-top:1px solid #EEE;
   border-left:0;
   border-right:0;
   border-bottom:0;
   width:350px;
}

#contactus fieldset#antispam legend
{
   font-family : Arial, sans-serif;
   font-size: 0.8em;
   font-weight:normal;
   color:#333;   
}

#contactus .short_explanation
{
   font-family: 'GeosansLightRegular';
   font-size: 14px;
   color: #cb4c4c; 
   font-weight: bold;
}

/* spam_trap: This input is hidden. This is here to trick the spam bots*/
#contactus .spmhidip
{
   display:none;
   width:10px;
   height:3px;
}
#fg_crdiv
{
   font-family : Arial, sans-serif;
   font-size: 0.3em;
   opacity: .2;
   -moz-opacity: .2;
   filter: alpha(opacity=20);   
}

.submit-btn {
	background:-webkit-gradient( linear, left top, left bottom, color-stop(0.05, #82da9b), color-stop(1, #65b87d) );
	background:-moz-linear-gradient( center top, #82da9b 5%, #65b87d 100% );
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#82da9b', endColorstr='#65b87d');
	background-color:#82da9b;
	-moz-border-radius:6px;
	-webkit-border-radius:6px;
	border-radius:6px;
	border:2px solid #121212;
	display:inline-block;
	color:#1a1a1a;
	font-family: 'GeosansLightRegular';
	font-size:16px;
	font-weight:bold;
	padding:0px 0px;
	text-decoration:none;
	
}.submit-btn:hover {
	background:-webkit-gradient( linear, left top, left bottom, color-stop(0.05, #65b87d), color-stop(1, #82da9b) );
	background:-moz-linear-gradient( center top, #65b87d 5%, #82da9b 100% );
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#65b87d', endColorstr='#82da9b');
	background-color:#65b87d;
	
}.submit-btn:active {
	position:relative;
	-moz-box-shadow: 1px 1px 3px #333 inset;
-webkit-box-shadow: 1px 1px 3px #333 inset;
box-shadow: 1px 1px 3px #333 inset;
	
}
    </style>
    </head>
<div id="something-else">
<div id="bg">
<img id="contact-tab" src="images/tab2.png" alt="">
<br>

 <!-- Form Code Start -->
<form id='contactus' action='<?php echo $formproc->GetSelfScript(); ?>' method='post' accept-charset='UTF-8'>
<fieldset >
<legend>How can I help you?</legend>

<input type='hidden' name='submitted' id='submitted' value='1'/>
<input type='hidden' name='<?php echo $formproc->GetFormIDInputName(); ?>' value='<?php echo $formproc->GetFormIDInputValue(); ?>'/>
<input type='text'  class='spmhidip' name='<?php echo $formproc->GetSpamTrapInputName(); ?>' />

<div class='short_explanation'>* required fields</div>

<div>
<span class='error'><?php echo $formproc->GetErrorMessage(); ?></span>
<span class='error'><?php echo $validation_errors; ?></span>
</div>
<div class='container'>
    <label for='name' >Your Full Name*: </label><br/>
    <input type='text' name='name' id='name' value='<?php echo htmlentities($disp_name) ?>' maxlength="50" /><br/>
    <span id='contactus_name_errorloc' class='error'></span>
</div>
<div class='container'>
    <label for='email' >Email Address*:</label><br/>
    <input type='text' name='email' id='email' value='<?php echo htmlentities($disp_email) ?>' maxlength="50" /><br/>
    <span id='contactus_email_errorloc' class='error'></span>
</div>

<div class='container'>
    <label for='message' >Message:</label><br/>
    <span id='contactus_message_errorloc' class='error'></span>
    <textarea rows="10" cols="50" name='message' id='message'><?php echo htmlentities($disp_message) ?></textarea>
</div>


<div class='container'>
    <input class="submit-btn" type='submit' name='Submit' value='Submit' />
</div>

</fieldset>
</form>
<!--
Form Code End
Visit html-form-guide.com for more info.
-->
     
</div>
