<!DOCTYPE HTML>
<html lang="en-US">
<head>
<meta charset='utf-8'> 
<title>DC Labs - Damon Carlstrom Creative Portfolio</title>
<meta property="og:title" content="DC Labs" />
<meta property="og:type" content="website" />
<meta property="og:url" content="http://damon9.com" />
<meta property="og:image" content="http://damon9.com/images/dc-logo.jpg" />
<meta property="og:site_name" content="DC Labs" />
<meta property="og:description" content="Damon Carlstrom - Creative portfolio of web design, motion graphics, 3d animation, logos, and other graphic design." />

<link href="css/style51.css" rel="stylesheet" type="text/css">
<link rel="stylesheet" href="templates/default/css/osmplayer_default.css" type="text/css">
<link rel="stylesheet" href="jquery-ui/mint-choc/jquery-ui-1.8.18.custom.css" type="text/css">

<style>
.edgeLoad-pw_button {
	display: none;
}
</style>
<script src="js/jquery-latest.min.js" type="text/javascript"></script>
<script src="js/animations/jQuery.html5Loader.circular.js" type="text/javascript"></script>
<script src="js/jQuery.html5Loader.js" type="text/javascript"></script>
<script src="js/css_browser_selector.js" type="text/javascript"></script>
<script type="text/javascript" src="js/jquery-ui.js"></script> 
<script type="text/javascript" src="bin/osmplayer.compressed.js"></script>
<script type="text/javascript" src="templates/default/js/osmplayer.default.js"></script>
<script type="text/javascript"  src="js/jquery.easing.1.3.js"></script> 
<script type="text/javascript" charset="utf-8" src="Power4_edgePreload.js"></script>
<script type="text/javascript">
 $('document').ready( function ($){

var loaderAnimation = $("#html5Loader").LoaderAnimation();
$.html5Loader({
		getFilesToLoadJSON:'js/files.json',
		onUpdate: loaderAnimation.update
});

window.onload = function(){
var slideMenuButton = document.getElementById('rsm');
  slideMenuButton.onclick = function(e) {
    var site = document.getElementById('site');
    var cl = site.classList;
    if (cl.contains('open')) {
      cl.remove('open');
    } else {
      cl.add('open');
    }
  };
}

});
</script>

<body>

<div id="html5Loader"></div>


 </head>


<div class="outer_container">

      <div id="sideNav">
         <div id="something"> <img src="images/skills_image2.png" alt="" width="355px">
      <div id="bottom-half">
    <div id="side-buttons">
          <a href="images/dc_cv1.pdf">
          <div id="doc_btn">
          <span>CV</span>
          </div>
          </a>
         <a href="images/dc_resume1.pdf"> <div id="pdf_btn"><span>pdf</span></div></a>
        </div>
    <p>Download Resume / CV <span style="font-size: 20px; padding-right: 15px; float: right;"> >></span></p>
    <img id="resume" width="310px" src="images/dc_resume1.jpg" alt="Damon Carlstrom Resume"> </div>
    </div>
</div>
       </div>
    



    <div id="site">
  <div class="toolbar" style="position: fixed;">

    <div class="resume_btn"> <div id="resume_btn" class="rsm"></div><!-- end #resume_btn --> 
      <img style="position: relative; top: 15px; left: 5px;" src="images/etch.png" alt=""> </div>
    <!-- end .resume_btn -->
    <div class="contact_btn"> <img style="position: relative; top: 12px; right: 50px;  float: right;" src="images/etch.png" alt=""> 
      <a id="contact_btn" href="contact.php"></a> 
          <div ><img id="tooltip" style="display: none; padding-top: 10px; width: 89px; height: 43px; z-index: 999;" src="images/contact_me2.png" alt=""></div>
    </div>
    <!-- end .contact_btn -->

    <nav class="current">
      <ul>
        <li class="menu" id="home-tab"><a href="#home">Home</a></li>
        <li class="menu" id="about-tab"><a href="#about" >About</a></li>
        <li class="menu" id="interface-tab"><a href="#interface">Digital</a></li>
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
    <p id="copyright">Designed &#38; Developed by Damon Carlstrom &#169; 2013</p>
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
        <h3 id="nav_resume" class="x_nav"><a href="#" id="rsm">Resume</a></h3>
        <h3 id="nav_contact" class="x_nav"><a href="contact.php">Contact</a></h3>
        <h3 id="nav_about" class="x_nav"><a href="#about" >About</a></h3>
        <h3 id="nav_interface" class="x_nav"><a href="#interface">Digital</a></h3>
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
</div>
<!-- end outer container --> 


<script type="text/javascript" src="js/jquery.parallax-1.1.js"></script> 
<script type="text/javascript" src="js/jquery.ad-gallery.js"></script> 
<script src="js/jquery.scrollTo-1.4.3.1.min.js"></script> 

<script src="js/waypoints.min.js"></script> 
<script type="text/javascript" src="templates/default/js/osmplayer.teaser.default.js"></script> 
<script type="text/javascript" src="templates/default/js/osmplayer.controller.default.js"></script> 
<script type="text/javascript" src="templates/default/js/osmplayer.pager.default.js"></script> 
<script type="text/javascript" src="templates/default/js/osmplayer.playLoader.default.js"></script> 
<script type="text/javascript" src="templates/default/js/osmplayer.playlist.default.js"></script> 
<script type="text/javascript" src="js/custom-animations2.js"></script>
<script src="scripts/swfobject_modified.js" type="text/javascript"></script>

<script type="text/javascript" >
var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36783132-2']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

swfobject.registerObject("FlashID");
swfobject.registerObject("FlashID2");
swfobject.registerObject("FlashID3");
swfobject.registerObject("FlashID4");
</script>

</body>
</html>