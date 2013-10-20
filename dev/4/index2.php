<!DOCTYPE HTML>
<html><head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>DC</title>
    <link href="css/style3.css" rel="stylesheet" type="text/css">
    <link rel="stylesheet" type="text/css" href="css/jquery.pageslide.css" />
    
	
   
   
   <script type="text/javascript" src="js/jquery.js"></script>
   
   <!-- Adobe Edge composition -->
	<script type="text/javascript" charset="utf-8" src="Power4_edgePreload.js"></script>
   <!-- Lavalamp-->
    <!--<script type="text/javascript" src="js/jquery-1.2.3.min.js"></script>-->
    <script type="text/javascript" src="js/jquery.easing.min.js"></script>
    <script type="text/javascript" src="js/jquery.lavalamp.min.js"></script>
  
  <!-- Pageslide -->
   <!--<script type="text/javascript" src="lib/jquery-1.7.1.min.js"></script>-->
    <script type="text/javascript" src="js/jquery.pageslide.js"></script>
  
  <!-- Parallax -->
    <script src="js/modernizr.custom.37797.js"></script> 
		<!-- Grab Google CDN's jQuery. fall back to local if necessary --> 
		<!-- <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js"></script> -->
		<script>!window.jQuery && document.write('<script src="/js/jquery-1.6.1.min.js"><\/script>')</script>
        
   <!-- Scroll To -->     
        <script src="js/jquery.scrollTo-1.4.2-min.js"></script>
    
    
    <link rel="shortcut icon" type="image/x-icon" href="images/favicon.ico">
    <meta name="title" content="DC Creative Portfolio">
    <meta name="description" content="Damon Carlstrom - Campaign concepts, interface design, motion graphics, logos, print work and all sorts of goodies">
    <link rel="image_src" href="images/thumb.jpg">
    
    <style>
.edgeLoad-pw_button {
	display:none;
}
</style>
    </head>

    <body>
    <div class="outer_container">
      <div class="toolbar">
        <div class="resume_btn">
          <a href="_secondary.html" id="resume_btn"></a><!-- end #resume_btn -->
          <img style="position: relative; top: 15px; left: 5px;" src="images/etch.png" alt=""> <!-- end .resume_btn --></div>
        <div class="contact_btn"> <img style="position: relative; top: 12px; right: 50px;  float: right;" src="images/etch.png" alt=""> <div id="contact_btn">
        <!-- end #contact_btn --></div> 
          <!-- end .contact_btn --></div>
        <div class="current">
          <ul>
            <li class="menu"><a href="#home">Home</a></li>
            <li class="menu"><a href="#about" >About</a></li>
            <li class="menu"><a href="#interface">Interface</a></li>
            <li class="menu"><a href="#animation">Animation</a></li>
            <li class="menu"><a href="#print">Print</a></li>
            <li class="menu"><a href="#campaigns">Campaigns</a></li>
            <li class="menu"><a href="#art">Art</a></li>
          </ul>
          
          <!-- end .nav --></div>
        
        <!-- end .toolbar --></div>
        
        <div id="modal" style="display:none">
    	
        <p>This slide uses "modal" option set to "true". When using a modal pageslide, clicking on the main window will not close the window. You must explicitly call <code>$.pageslide.close()</code>.</p>
            <p><a href="javascript:$.pageslide.close()">Close</a></p>
      
</div> <!-- end #modal -->
      <div class="home_container">
        <div id="home_nav">
          <h1>Damon Carlstrom</h1>
          <div id="name_slide"> 
           <div id="blue" style="position: absolute; right: 0px; top: 0px;overflow:hidden;">
    <h3 style="color: black; background-color:#CF0;">Web Designer</h3>
    </div>
    <div id="red" class="fltrt" style="position: absolute; overflow: hidden; right: 0px; top: 0px;">
    <h3 style="color: white; background-color:red;">Motion Graphics</h3>
    </div>
          </div>
          <div id="Stage" class="pw_button"></div>
          <div id="nav_lines">
            <h3 id="nav_resume" class="x_nav"><a href="#resume">Resume</a></h3>
            <h3 id="nav_contact" class="x_nav"><a href="#contact">Contact</a></h3>
            <h3 id="nav_about" class="x_nav"><a href="#about" >About</a></h3>
            <h3 id="nav_interface" class="x_nav"><a href="#interface">Interface</a></h3>
            <h3 id="nav_animation" class="x_nav"><a href="#animation">Animation</a></h3>
            <h3 id="nav_print" class="x_nav"><a href="#print">Print</a></h3>
            <h3 id="nav_campaigns" class="x_nav"><a href="#campaigns">Campaigns</a></h3>
            <h3 id="nav_art" class="x_nav"><a href="#art">Art</a></h3>
            
            <!-- end .nav_lines --></div>
          <!-- end .home_nav --></div>
        <!-- end .home_container --></div>
      <div id="about_container">
      <div class="info-box">
      <div class="info-control">
      <!-- end .info-control --></div>
      <header>Damon</header>
      <p class="info-title">Who I am and what I do</p>
      <!-- end .info-box --></div>
      	<!-- end .about_container --></div>
      <div class="content"> 
        
        <!-- end .content --></div>
    </div>
    <script type="text/javascript">
        
	
		
	 $(document).ready(	
		$(function() {
            $(".toolbar").lavaLamp({
                fx: "backout",
                speed: 700,
                click: function(event, menuItem) {
                    return true;
                }
            });
        }));
		
		$("#blue").slideDown(2000).delay(5000).slideUp().delay(5000);
		$("#red").slideUp(1).delay(5000).slideDown('slow');
		
		$("#resume_btn").pageslide(); 
		
	
		
		redrawDotNav();
	
	/* Scroll event handler */
    $(window).bind('scroll',function(e){
    	parallaxScroll();
		redrawDotNav();
    });
    
	/* Next/prev and primary nav btn click handlers */
	$('a.manned-flight').click(function(){
    	$('html, body').animate({
    		scrollTop:0
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
	});
    $('a.frameless-parachute').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#frameless-parachute').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
    $('a.english-channel').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#english-channel').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
	$('a.about').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#about').offset().top
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
    
    /* Show/hide dot lav labels on hover */
    $('nav#primary a').hover(
    	function () {
			$(this).prev('h1').show();
		},
		function () {
			$(this).prev('h1').hide();
		}
    );
    
;

/* Scroll the background layers */
function parallaxScroll(){
	var scrolled = $(window).scrollTop();
	$('#parallax-bg1').css('top',(0-(scrolled*.25))+'px');
	$('#parallax-bg2').css('top',(0-(scrolled*.5))+'px');
	$('#parallax-bg3').css('top',(0-(scrolled*.75))+'px');
}

/* Set navigation dots to an active state as the user scrolls */
function redrawDotNav(){
	var section1Top =  0;
	// The top of each section is offset by half the distance to the previous section.
	var section2Top =  $('#frameless-parachute').offset().top - (($('#english-channel').offset().top - $('#frameless-parachute').offset().top) / 2);
	var section3Top =  $('#english-channel').offset().top - (($('#about').offset().top - $('#english-channel').offset().top) / 2);
	var section4Top =  $('#about').offset().top - (($(document).height() - $('#about').offset().top) / 2);;
	$('nav#primary a').removeClass('active');
	if($(document).scrollTop() >= section1Top && $(document).scrollTop() < section2Top){
		$('nav#primary a.manned-flight').addClass('active');
	} else if ($(document).scrollTop() >= section2Top && $(document).scrollTop() < section3Top){
		$('nav#primary a.frameless-parachute').addClass('active');
	} else if ($(document).scrollTop() >= section3Top && $(document).scrollTop() < section4Top){
		$('nav#primary a.english-channel').addClass('active');
	} else if ($(document).scrollTop() >= section4Top){
		$('nav#primary a.about').addClass('active');
	}
	
}

		
    </script>
</body>
</html>