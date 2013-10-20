<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>DC</title>
<link rel="shortcut icon" type="image/x-icon" href="images/favicon.ico">
<meta name="title" content="DC Creative Portfolio">
<meta name="description" content="Damon Carlstrom - Campaign concepts, interface design, motion graphics, logos, print work and all sorts of goodies">
<link rel="image_src" href="images/thumb.jpg">
<link href="css/style48.css" rel="stylesheet" type="text/css">
<link href="css/the-tooltip.css" rel="stylesheet" />
<link href="css/less.css" rel="stylesheet" />
<link rel="stylesheet" href="templates/default/css/osmplayer_default.css">
<link rel="stylesheet" href="jquery-ui/mint-choc/jquery-ui-1.8.18.custom.css">

<style>
.edgeLoad-pw_button {
	display: none;
}

</style>
<script src="http://code.jquery.com/jquery-latest.min.js"></script>

 <script src="js/animations/jQuery.html5Loader.circular.js"></script>
 <script src="js/jQuery.html5Loader.js"></script>
 <script src="js/css_browser_selector.js"></script>
  <script type="text/javascript" charset="utf-8" src="Power4_edgePreload.js"></script>
<script type="text/javascript">
 

$('document').ready( function ($){

var loaderAnimation = $("#html5Loader").LoaderAnimation();
$.html5Loader({
		getFilesToLoadJSON:'js/files.json',
		onUpdate: loaderAnimation.update
});

});


  </script>
<body>

<div id="html5Loader"></div>

<script type="text/javascript">

ralkon = $.noConflict();

</script>
<script src="js/jquery.js"> </script> 
 </head>


<div class="outer_container">
  <div class="toolbar" style="position: fixed;">
    <div class="resume_btn"> <a href="resume.html" id="resume_btn"></a><!-- end #resume_btn --> 
      <img style="position: relative; top: 15px; left: 5px;" src="images/etch.png" alt=""> </div>
    <!-- end .resume_btn -->
    <div class="contact_btn"> <img style="position: relative; top: 12px; right: 50px;  float: right;" src="images/etch.png" alt=""> <img width="89px" height="43px" style="margin-bottom: -30px; display: block;padding: 0; " src="images/contact_me.png" alt=""><a id="contact_btn" class="the-tooltip bottom right black show" href="contact.php"><span><img src="images/contact_me.png" alt=""></span></a> </div>
    <!-- end .contact_btn -->
    <nav class="current">
      <ul>
        <li class="menu" id="home-tab"><a href="#home">Home</a></li>
        <li class="menu" id="about-tab"><a href="#about" >About</a></li>
        <li class="menu" id="interface-tab"><a href="#interface">Interface</a></li>
        <li class="menu" id="animation-tab"><a href="#animation">Animation</a></li>
        <li class="menu" id="concepts-tab"><a href="#campaigns">Concepts</a></li>
        <li class="menu" id="print-tab"><a href="#print">Print</a></li>
        <li class="menu" id="art-tab"><a href="#art">Art</a></li>
      </ul>
    </nav>
    <!-- end .nav --> 
    
  </div>
  <!-- end .toolbar -->
  
  <div class="home_container" id="home">
    <p id="copyright">Designed &#38; Developed by Damon Carlstrom &#169; 2012</p>
    <div id="home_nav">
      <h1>Damon Carlstrom</h1>
      <div id="name_slide">
        <div id="slide1" style="position: absolute; right: 0px; top: 0px;overflow:hidden;">
          <h3 style="color: #7fb1c8; background-color: black;">User-Interface Specialist</h3>
        </div>
        <div id="slide2" class="fltrt" style="position: absolute; overflow: hidden; right: 0px; top: 0px;">
          <h3 style="color: black; background-color:#c9fd59;">Motion Graphics Ninja</h3>
        </div>
        <div id="slide3" style="position: absolute; right: 0px; top: 0px;overflow:hidden;">
          <h3 style="color: white; background-color: #812d2b;">Self-Made Superhero</h3>
        </div>
        <div id="slide4" class="fltrt" style="position: absolute; overflow: hidden; right: 0px; top: 0px;">
          <h3 style="color: black; background-color: #e1bb5f;">Creative Strategist</h3>
        </div>
        <div id="slide5" class="fltrt" style="position: absolute; overflow: hidden; right: 0px; top: 0px;">
          <h3 style="color: white; background-color: #004695;">OKC Thunder Fan</h3>
        </div>
        <div id="slide6" class="fltrt" style="position: absolute; overflow: hidden; right: 0px; top: 0px;">
          <h3 style="color: white; background-color:#099;">Capable Developer</h3>
        </div>
        <div id="slide7" class="fltrt" style="position: absolute; overflow: hidden; right: 0px; top: 0px;">
          <h3 style="color: white; background-color:#4b6a50;">Aspiring World Traveler</h3>
        </div>
      </div>
      <div id="Stage" class="pw_button"></div>
      <div id="nav_lines">
        <h3 id="nav_resume" class="x_nav"><a href="resume.html">Resume</a></h3>
        <h3 id="nav_contact" class="x_nav"><a href="contact.php">Contact</a></h3>
        <h3 id="nav_about" class="x_nav"><a href="#about" >About</a></h3>
        <h3 id="nav_interface" class="x_nav"><a href="#interface">Interface</a></h3>
        <h3 id="nav_animation" class="x_nav"><a href="#animation">Animation</a></h3>
       <h3 id="nav_concepts" class="x_nav"><a href="#concepts">Concepts</a></h3>
        <h3 id="nav_print" class="x_nav"><a href="#print">Print</a></h3>
        <h3 id="nav_art" class="x_nav"><a href="#art">Art</a></h3>
      </div>
      <!-- end .nav_lines --> 
    </div>
    <!-- end .home_nav -->
    <div id="logo"></div>
    <!--<img id="city" src="images/home_city.jpg" alt="">--> 
    <!-- end #home--></div>
    <?php include 'about.php'; ?>

    <?php include 'interface.php'; ?>

    <?php include 'animation.php'; ?>

    <?php include 'concepts.php'; ?>

    <?php include 'print.php'; ?>

    <?php include 'art.php'; ?>
  
  
</div>
<!-- end outer container --> 




<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.8/jquery-ui.js"></script> 
<script type="text/javascript" src="js/jquery.parallax-1.1.js"></script> 
<script type="text/javascript" src="js/jquery.ad-gallery.js"></script> 
<script src="js/jquery.scrollTo-1.4.3.1.min.js"></script> 
<script src="js/jquery.easing.1.3.js"></script> 
<script src="js/jquery.scrollorama.js"></script> 
<script type="text/javascript" src="js/jquery.pageslide.js"></script> 
<script src="js/waypoints.min.js"></script> 
<script src="js/the-tooltip.min.js"></script>
<!--[if (gte IE 6)&(lte IE 8)]>
<script src="http://s3.amazonaws.com/nwapi/nwmatcher/nwmatcher-1.2.5-min.js"></script>
<script src="js/min/selectivizr.js"></script>
<![endif]-->
<!--[if lt IE 9]><script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
<script type="text/javascript" src="bin/osmplayer.compressed.js"></script>
<script type="text/javascript" src="templates/default/js/osmplayer.default.js"></script>
<script type="text/javascript" src="templates/default/js/osmplayer.teaser.default.js"></script> 
<script type="text/javascript" src="templates/default/js/osmplayer.controller.default.js"></script> 
<script type="text/javascript" src="templates/default/js/osmplayer.pager.default.js"></script> 
<script type="text/javascript" src="templates/default/js/osmplayer.playLoader.default.js"></script> 
<script type="text/javascript" src="templates/default/js/osmplayer.playlist.default.js"></script> 
<script type="text/javascript" src="js/custom-animations.js"></script>
<script src="scripts/swfobject_modified.js" type="text/javascript"></script>

<script type="text/javascript" >
swfobject.registerObject("FlashID");
swfobject.registerObject("FlashID2");
swfobject.registerObject("FlashID3");
swfobject.registerObject("FlashID4");
</script>



 

</body>
</html>