// Custom site-wide Animations


//(function($){ 
		//$(window).load(function(){
			//Home page title slide animation 
			
	    $(document).ready(function(){
	
	     var boxFixedDiv = "", boxFixedDivNow="", boxFixedOpen=""; 
		 //alert("reached");
		//$('.info-box').toggleClass('navStickGone', 1000);
			
		slide();
	
		$("#concepts .inner-content").hide();
		
		$('#lab').parallax("100%", 2500, 0.4, true);
		$('#space').parallax("50%", 12000, 0.05, true);
		$('#jungle-bg').parallax("50%", 4200, 0.15, true);
		$('#gears').parallax("50%", 5600, 0.30, true);
        $('#ink').parallax("50%", 6700, 0.30, true);
        $('#face3d').parallax("20%", 7700, 0.30, true);
		
	
//Slide down toolbar when waypoint reached
$('h3#nav_print').waypoint(function(direction) {
   if (direction === 'down') {
    $( ".toolbar" ).switchClass( "pushmenu-push-up", "pushmenu-push-down", 500);
	console.log('t'+direction); 
	} // do this on the way down
   
   else {
    $( ".toolbar" ).switchClass( "pushmenu-push-down", "pushmenu-push-up", 500);
 // do this on the way back up through the waypoint
 	console.log('t'+direction); 
   }
});




$('#aboutOuter').waypoint(function(direction) {
   if (direction === 'down') {
    boxFixedDiv = "about-box"; 
	} // do this on the way down
   
   else {
    boxFixedDiv = ""; 
   }
});
$('#interfaceOuter').waypoint(function(direction) {
   if (direction === 'down') {
    boxFixedDiv = "interface-box"; 
	} // do this on the way down
   
   else {
    boxFixedDiv = "about-box"; 
   }
});

$('#interfaceOuter').waypoint(function(direction) {
   if (direction === 'down') {
    	boxFixedDiv = "remove"; 
	} // do this on the way down
   	else {
    	boxFixedDiv = "about-box"; 
   }
  
}, {offset:50});


$('#animationOuter').waypoint(function(direction) {
   if (direction === 'down') {
    boxFixedDiv = "animation-box"; 
	} // do this on the way down
   
   else {
    boxFixedDiv = "interface-box"; 
   }
});

$('#animationOuter').waypoint(function(direction) {
   if (direction === 'down') {
    boxFixedDiv = "remove"; 
	} // do this on the way down
   	else {
    	boxFixedDiv = "interface-box"; 
   }
  
}, {offset:50});

$('#conceptsOuter').waypoint(function(direction) {
   if (direction === 'down') {
    boxFixedDiv = "concepts-box"; 
	} // do this on the way down
   
   else {
    boxFixedDiv = "animation-box"; 
   }
});

$('#conceptsOuter').waypoint(function(direction) {
   if (direction === 'down') {
    	boxFixedDiv = "remove"; 
	} // do this on the way down
   	else {
    	//boxFixedDiv = "animation-box"; 
   }
  
}, {offset:50});

$('#printOuter').waypoint(function(direction) {
   if (direction === 'down') {
    boxFixedDiv = "print-box"; 
	} // do this on the way down
   
   else {
    	boxFixedDiv = "concepts-box"; 
   }
});

$('#printOuter').waypoint(function(direction) {
   if (direction === 'down') {
    	boxFixedDiv = "remove"; 
	} // do this on the way down
   	else {
    	//boxFixedDiv = "concepts-box"; 
   }
  
}, {offset:50});

$('#artOuter').waypoint(function(direction) {
   if (direction === 'down') {
    boxFixedDiv = "art-box"; 
	} // do this on the way down
   
   else {
    //boxFixedDiv = "about-box"; 
   }
});

$('#artOuter').waypoint(function(direction) {
   if (direction === 'down') {
    //boxFixedDiv = "remove"; 
	} // do this on the way down
   	else {
    	boxFixedDiv = "print-box"; 
   }
  
}, {offset:0});




//Contact tooltip
$("#contact_btn").hover(function(){
    $("#tooltip").fadeIn("slow");
},
function(){
    $("#tooltip").fadeOut("slow");
});

function inViewport (el) {
	
    var r, html;
	
    
    if ( !el || 1 !== el.nodeType ) { return false; }
    html = document.documentElement;
    r = el.getBoundingClientRect();
    return ( !!r 
      && r.bottom >= 0 
      && r.right >= 0 
      && r.top <= html.clientHeight 
      && r.left <= html.clientWidth 
    );

}

function adjustOpen(currentDiv)
{	

	var parent = currentDiv.closest( '.containerBlock' );
	parent.removeClass("containerBlock"); 
	if(boxFixedOpen != ""){
		if(!inViewport(document.getElementById(boxFixedOpen)))
		{
			var height = boxFixedOpen == 'oc_animation' ? 0 : 100; 
			var width = boxFixedOpen == 'oc_animation' ? 350 : 0; 
			var buttonarea = boxFixedOpen == 'oc_animation' ? 'button-area2' : 'button-area';
			boxOpenClose($("#"+boxFixedOpen),1, height, 1, width, buttonarea);
		}
		else{
			$("#"+boxFixedOpen).trigger('click');
		}
		
		
	}
	boxFixedOpen = currentDiv.attr('id');
	var temp = currentDiv.attr("id").replace("oc_","");
	if (temp == 'concepts')
	{
		
	$("#" +temp+ " .inner-content").show();
	}
}

function adjustClose(currentDiv){
	boxFixedOpen = "";
	var temp = currentDiv.attr("id").replace("oc_","");
	var parent = currentDiv.closest( '#'+temp+"Outer" );
	parent.addClass("containerBlock"); 
	if (temp == 'concepts')
	{
		
	$("#" +temp+ " .inner-content").hide();
	}
}
		

function boxOpen(temp, height, width, buttonarea) {
	$("#oc_"+temp+" h2").hide("fast" , function () {
		     $("."+buttonarea+" #open-"+temp).hide("fast" , function () {
                $("#oc_"+temp+" h3").show("fast" , function () {
                    $("."+buttonarea+" #close-"+temp).show("fast" , function () { 
						varPaddingTop = boxFixedDivNow == "oc_" + temp? '948px' : '900px'; 
						if(width == 0)
						{
							$("#"+temp+"-box").animate({height:height , paddingTop: varPaddingTop, marginTop: "-900px"}, 500);
						}
						else
						{
							$("#"+temp+"-box").animate({width:width}, 500); 
							
						}
						
                    });
                });
            });
			});
}
function boxClose (temp, height, width, buttonarea){
	$("#oc_"+temp+" h3").hide("fast" , function () {
		     $("."+buttonarea+" #close-"+temp).hide("fast" , function () {
                $("#oc_"+temp+" h2").show("fast" , function () {
                    $("."+buttonarea+" #open-"+temp).show("fast" , function () { 
						if(width == 0)
						{
							$("#"+temp+"-box").animate({height:height , paddingTop: "0", marginTop: "0"}, 500); 
						}
						else
						{
							$("#"+temp+"-box").animate({width:width}, 500); 
							
						}
						
                    });
                });
            });
			});
}

function boxOpenClose(div, heightOpen, heightClose, widthOpen, widthClose, buttonarea)
{
	var temp = div.attr("id").replace("oc_",""); 
	if ($('.'+buttonarea+' #open-'+temp).is(':visible')) {
		adjustOpen(div);
		boxOpen(temp, heightOpen, widthOpen, buttonarea); 
	}
	else
	{
		adjustClose(div);
		boxClose(temp, heightClose, widthClose, buttonarea); 
	}
}
			
			
//About box animation 
		$("#oc_about").click(function () {
   		boxOpenClose($(this), 2400, 100, 0, 0, "button-area");
}); 

//Interface box animation 
		$("#oc_interface").click(function () {
    	boxOpenClose($(this), 2400, 100, 0, 0, "button-area");
}); 

//Animation box animation 
        $("#oc_animation").click(function () {
		console.log("widthOpen");
		
    	boxOpenClose($(this), 0, 0, 670, 350, "button-area2");
}); 

	//Print box animation 
		$("#oc_print").click(function () {
		boxOpenClose($(this), 2400, 100, 0, 0, "button-area");
}); 

//Concepts box animation 
		$("#oc_concepts").click(function () {
    	boxOpenClose($(this), 2400, 100, 0, 0, "button-area");
}); 

//Art box animation 
		$("#oc_art").click(function () {
    boxOpenClose($(this), 2400, 100, 0, 0, "button-area");
}); 
	
	//Activation for HTML5 player in animation section
     $("#osmplayer").osmplayer({
          width: '580px',
          height: '300px',
          playlist: 'playlist.xml'
        });
		
		
		
		
		//Scrolls about section to top as button is clicked 
		$("#oc_about").click(function () {
			$('html, body').animate({
    		scrollTop:$('#about').offset().top + 210
    	}, 500, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
			});
			
			//Scrolls interface section to top as button is clicked 
		$("#oc_interface").click(function () {
			$('html, body').animate({
    		scrollTop:$('#interface').offset().top + 90
    	}, 500, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
			});
			
        //Scrolls animation section to top as button is clicked 
        $("#oc_animation").click(function () {
            $('html, body').animate({
            scrollTop:$('#animation').offset().top + 120
        }, 500, function() {
            parallaxScroll(); // Callback is required for iOS
        });
        return false;
            });

		//Scrolls print section to top as button is clicked 
		$("#oc_print").click(function () {
			$('html, body').animate({
    		scrollTop:$('#print').offset().top + 165
    	}, 500, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
			});
			
			//Scrolls concepts section to top as button is clicked 
		$("#oc_concepts").click(function () {
			$('html, body').animate({
    		scrollTop:$('#concepts').offset().top + 150
    	}, 500, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
			});
			
			//Scrolls art section to top as button is clicked 
		$("#oc_art").click(function () {
			$('html, body').animate({
    		scrollTop:$('#art').offset().top + 130
    	}, 500, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
			});
		
		
	
		
		$("#resume_btn").click(function () {
		    $('.pushmenu-push').toggleClass('toright');
			$('.toolbar').toggleClass('toolbar-extended');
	
			return false; 
		});
		$("#nav_resume a").click(function () {
    		$('.pushmenu-push').toggleClass('toright');
			$('.toolbar').toggleClass('toolbar-extended');
			return false; 
		});
		$("#contact_btn").click(function () {
			$('.pushmenu-push').toggleClass('toleft');
			$('.toolbar').toggleClass('toolbar-extended');
			return false; 
		});
		$("#nav_contact a").click(function () {
		    $('.pushmenu-push').toggleClass('toleft');
			$('.toolbar').toggleClass('toolbar-extended');
			return false; 
		});
	var $window = $(window), $elem = $('.toolbar'); 	
		//Scroll event handler 
    $(window).bind('scroll',function(e){
    	parallaxScroll();
		redrawDotNav();
		//$('.toolbar').css('-webkit-transform', 'translate3d(0,'+($(window).scrollTop() + 48) + 'px,0)');
    });
    
	//Next/prev and primary nav btn click handlers 
	$('#home-tab').click(function(){
    	$('html, body').animate({
    		scrollTop:0
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
	});
	
	// Scrolls from Top nav about
	$(function ToAbout() {
    $('#about-tab').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#about').offset().top + 210
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    	})
	});
	
		//Scrolls from Top nav interface 
    $('#interface-tab').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#interface').offset().top + 90
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
	
	//Scrolls from Top nav animation 
    $('#animation-tab').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#animation').offset().top + 120
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
	
	//Scrolls from Top nav print
    $('#print-tab').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#print').offset().top + 165
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
	
	//Scrolls from Top nav concepts
    $('#concepts-tab').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#concepts').offset().top + 150
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
	
	//Scrolls from Top nav art
    $('#art-tab').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#art').offset().top + 130
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
	
	
	//Scrolls from home nav about
		$('#nav_about').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#about').offset().top + 210
    	}, 1000, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    });
	
	
	
		// Scrolls from home nav interface 
	$('#nav_interface').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#interface').offset().top + 90
    	}, 1300, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    	});
		
			// Scrolls from home nav animation 
	$('#nav_animation').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#animation').offset().top + 120
    	}, 1600, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    	});
	
	
		// Scrolls from home nav print 
	$('#nav_print').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#print').offset().top + 165
    	}, 1900, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    	});
		
		// Scrolls from home nav concepts
	$('#nav_concepts').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#concepts').offset().top + 150
    	}, 2200, function() {
	    	parallaxScroll(); // Callback is required for iOS
		});
    	return false;
    	});
		
		// Scrolls from home nav art
	$('#nav_art').click(function(){
    	$('html, body').animate({
    		scrollTop:$('#art').offset().top + 130
    	}, 2500, function() {
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


function parallaxScrollExtension(scrolled, subtracter, multiplier, divId){
	//if(boxFixedDiv != divId)
	//{
		var st = scrolled;
		var anchorDiv = $("#"+divId + "-container");
        var ot = anchorDiv.position().top;
        var s = $("#"+divId);
        var divPosition = s.css('position'); 
		var adjustment = 0;
		var left = ""; 
		switch (divId)
		{
		case 'about-box':
		  adjustment = 1001;
		  break;
		case 'interface-box':
		  adjustment = 1000+1051-50;
		 break;
		case 'animation-box':
		  adjustment = 1000+1051+1051-50; 
		  left = "2%";
		  break;
		case 'concepts-box':
		  adjustment = 1000+1051+1051+1051-40;
		  break;
		case 'print-box':
		  adjustment = 1000+1051+1051+1051+1051-40;
		  left = "10%";
		  break;
		case 'art-box':
		  adjustment = 1000+1051+1051+1051+1051+1051-50;
		  break;
		} 
		
		console.log(divId+(st +48)+':'+ot+":"+adjustment+":" +boxFixedDiv);
		
		if (divId == 'animation-box' || divId == 'print-box'){
		
					anchorDiv.css({
                			position: "absolute",
                			top: (subtracter-(scrolled*multiplier))+'px'
							//, left: left
							});
				}
				else{
						anchorDiv.css({
                			position: "absolute",
                			top: (subtracter-(scrolled*multiplier))+'px',
							//, right: "14%"
							});
				}
		
        if(st +48  > ot + adjustment && boxFixedDiv ==divId ) {
			anchorDiv.css({
                    right:"auto", left:"auto"}); 
		   if (divPosition != 'fixed'){
		   boxFixedDivNow = divId;
		   if (divId == 'animation-box' || divId == 'print-box'){
		   	  s.css({
                position: "fixed",
                top: "48px",
				left: left
            });
		   }
            else{
				  s.css({
                position: "fixed",
                top: "48px",
				right: "14%"
            });
			}
			}
			if((boxFixedOpen.replace("oc_","")+"-box")==divId && divId == "concepts-box"){
				var height = 1050-13-st+adjustment; 
				s.css({
                height: height
            });
			}
			
        } else  {
            
			 { 
					if (divId == 'animation-box' || divId == 'print-box'){
						anchorDiv.css({left: left});
					}
					else{
							anchorDiv.css({right: "14%"});
					}
				if (divPosition == 'fixed' && boxFixedDiv == "remove"){
					 s.fadeOut(0, function() {
						   s.css({
                   			position: "relative", 
							top: "",
							right:"auto", 
							left:"auto"
                		});
						console.log("faded");
						s.fadeIn('fast', function(){
							
                		});
					});
				}
				else{
					s.css({
                   			position: "relative", 
							top: "",
							right:"auto", 
							left:"auto"
                		});
				}
                
             
            }
        }
    
		//console.log(boxFixedDiv);
		/*$('#'+divId).css('top',(subtracter-(scrolled*multiplier))+'px');
		if (scrolled - (subtracter-(scrolled*multiplier)) > 0 )
		{
			//boxFixedDiv = divId; 
			//$('#'+divId).css('position','fixed');
			
		}*/
	//}
	//else
	/*{
		if ($('#OutermostContainer').hasClass('toleft') || $('#OutermostContainer').hasClass('toright')) {
		var $adjustment = 0;
		switch (divId)
		{
		case 'about-box':
		  $adjustment = 1;
		  break;
		case 'interface-box':
		  $adjustment = 2;
		  break;
		case 'animation-box':
		  $adjustment = 3
		  break;
		case 'concepts-box':
		  $adjustment = 4;
		  break;
		case 'print-box':
		  $adjustment = 5;
		  break;
		case 'art-box':
		  $adjustment = 6;
		  break;
		} 
		$('#'+divId).css({'top':(scrolled + 48*2 - $adjustment*1050) + 'px', position:'absolute'});
		}
	}	*/
}


/* Scroll the background layers */
function parallaxScroll(){
	var scrolled = $(window).scrollTop();
	
	//About Scrolling
$('#outer-ring').css('top',(620-(scrolled*.23))+'px');
	$('#middle-ring').css('top',(620-(scrolled*.23))+'px');
	$('#my-face').css('top',(290-(scrolled*.0))+'px');
	$('#inner-ring').css('top',(620-(scrolled*.23))+'px');
	$('#vertical-scale').css('top',(740-(scrolled*.40))+'px');
	$('#target').css('top',(950-(scrolled*.52))+'px');
	
	parallaxScrollExtension(scrolled, 950, .52, "about-box");
	parallaxScrollExtension(scrolled, 1280, .52, "interface-box");
	parallaxScrollExtension(scrolled, 1900, .52, "animation-box");
	
	parallaxScrollExtension(scrolled, 2030, .42, "concepts-box");
	parallaxScrollExtension(scrolled, 2500, .42, "print-box");
	parallaxScrollExtension(scrolled, 2900, .42, "art-box");
	
	//$('#about-box').css('top',(950-(scrolled*.52))+'px');
	//$('#interface-box').css('top',(1280-(scrolled*.52))+'px');
	
	//$('#animation-box').css('top',(1900-(scrolled*.52))+'px');
	$('#branch').css('top',(50-(scrolled*.05))+'px');
	
	$('#front-ink1').css('top',(1350-(scrolled*.15))+'px');
	$('#front-ink2').css('top',(200-(scrolled*.0))+'px');
	//$('#print-box').css('top',(2500-(scrolled*.42))+'px');
    //$('#concepts-box').css('top',(2030-(scrolled*.42))+'px');
    //$('#art-box').css('top',(2900-(scrolled*.42))+'px');
	
}




/* Set navigation dots to an active state as the user scrolls */
function redrawDotNav(){
	var section1Top =  0;
	// The top of each section is offset by half the distance to the previous section.
	var section2Top =  $('#about').offset().top - (($('#interface').offset().top - $('#about').offset().top) / 2); 
	var section3Top =  $('#interface').offset().top - (($('#animation').offset().top - $('#interface').offset().top) / 2);
	var section4Top =  $('#animation').offset().top - (($('#concepts').offset().top - $('#animation').offset().top) / 2);
	var section5Top =  $('#concepts').offset().top - (($('#print').offset().top - $('#concepts').offset().top) / 2);
	var section6Top =  $('#print').offset().top - (($('#art').offset().top - $('#print').offset().top) / 2);
	var section7Top =  $('#art').offset().top - (($(document).height() - $('#art').offset().top) / 2);;
	
	
	$('li.menu').removeClass('active');
	//$temp = $('#otherStuff').find('.navStick');
	//if($temp){$temp.removeClass('navStick');}
	if($(document).scrollTop() >= section1Top && $(document).scrollTop() < section2Top){
		$('li#home-tab').addClass('active');
	} else if ($(document).scrollTop() >= section2Top && $(document).scrollTop() < section3Top){
		$('li#about-tab').addClass('active');
		//$('#aboutOuter').find('.info-box').removeClass('navStickGone');
		//$('#aboutOuter').find('.info-box').addClass('navStick');
	} else if ($(document).scrollTop() >= section3Top && $(document).scrollTop() < section4Top){
		$('li#interface-tab').addClass('active');
	} else if ($(document).scrollTop() >= section4Top && $(document).scrollTop() < section5Top){
		$('li#animation-tab').addClass('active');
	} else if ($(document).scrollTop() >= section5Top && $(document).scrollTop() < section6Top){
		$('li#concepts-tab').addClass('active');
	} else if ($(document).scrollTop() >= section6Top && $(document).scrollTop() < section7Top){
		$('li#print-tab').addClass('active');
	} else if ($(document).scrollTop() >= section7Top){
		$('li#art-tab').addClass('active');
	}
	
}

//Ad gallery modal and img.click scrolling
   /* $('img.image1').data('ad-desc', 'Whoa! This description is set through elm.data("ad-desc") instead of using the longdesc attribute.<br>And it contains <strong>H</strong>ow <strong>T</strong>o <strong>M</strong>eet <strong>L</strong>adies... <em>What?</em> That aint what HTML stands for? Man...');
    $('img.image1').data('ad-title', 'Title through $.data');
    $('img.image4').data('ad-desc', 'This image is wider than the wrapper, so it has been scaled down');
    $('img.image5').data('ad-desc', 'This image is higher than the wrapper, so it has been scaled down');*/
	/*var galleriesArr = new Array(); 
    galleriesArr[0] = $('#modal-ui-1').adGallery();
	galleriesArr[1] = $('#modal-ui-2').adGallery();
    galleriesArr[2] = $('#modal-concepts-1').adGallery();
    galleriesArr[3] = $('#modal-concepts-2').adGallery();
    galleriesArr[4] = $('#modal-concepts-3').adGallery();
    galleriesArr[5] = $('#modal-print-1').adGallery();
    galleriesArr[6] = $('#modal-print-2').adGallery();
    galleriesArr[0] = $('#modal-art-1').adGallery();
  
   for (var i = 0; i < 1; i++) {
    $('#switch-effect').change(
      function() {
        galleriesArr[i][0].settings.effect = $(this).val();
        return false;
      }
    );
    $('#toggle-slideshow').click(
      function() {
        galleriesArr[i][0].slideshow.toggle();
        return false;
      }
    );
    $('#toggle-description').click(
      function() {
        if(!galleriesArr[i][0].settings.description_wrapper) {
          galleriesArr[i][0].settings.description_wrapper = $('#descriptions');
        } else {
          galleriesArr[i][0].settings.description_wrapper = false;
        }
        return false;
      }
    );
}*/
  
 function modalFadeIn()
 {
 	         $("body").addClass('hidden');
		   var galleriesArr = $(this).adGallery();
          $('#switch-effect').change(
		      function() {
		        galleriesArr[0].settings.effect = $(this).val();
		        return false;
		      }
		    );
		    $('#toggle-slideshow').click(
		      function() {
		        galleriesArr[0].slideshow.toggle();
		        return false;
		      }
		    );
		    $('#toggle-description').click(
		      function() {
		        if(!galleriesArr[0].settings.description_wrapper) {
		          galleriesArr[0].settings.description_wrapper = $('#descriptions');
		        } else {
		          galleriesArr[0].settings.description_wrapper = false;
		        }
		        return false;
		      }
		    );
 }   

 function modalFadeOut(){

	      $('.ad-controls', this).empty();
          $("body").removeClass('hidden');

 }
   
 $(".modal").fadeOut(1);
  $(".modal2").fadeOut(1);

 var docHeight = $(document).height();

	//Ui-2 click opening modal-ui-1
	$('#ui-1').click( function () {
		$('html, body').animate({
    		scrollTop:$('#interface').offset().top + 90
    	  }, 500).promise().done(function() {
	 	$("body").append("<div id='overlay'></div>");
	$("#overlay")
      .height(docHeight)
      .css({
         'opacity' : 0.8,
         'position': 'fixed',
         'top': 0,
         'left': 0,
         'background-color': 'black',
         'width': '100%',
		 'height': '100%',
         'z-index': 5000,
		 'display': 'block'
		 
      });
		
	  $("#modal-ui-1").fadeIn("slow" , modalFadeIn);
	   });
	 
	 $('.gallery-close').click(function () {
	
		 $("body").remove("#overlay");
		 $("#overlay")
      .height(docHeight)
      .css({
         'opacity' : 0.0,
         'position': 'fixed',
         'top': 0,
         'left': 0,
         'background-color': 'black',
         'width': '100%',
		 'height': '100%',
         'z-index': 5000,
		 'display': 'none'
      });
	
	  $("#modal-ui-1").fadeOut("slow" , modalFadeOut);
		 });
		 });
	
	//Ui-2 click opening modal-ui-2
	$('#ui-2').click( function () {
		$('html, body').animate({
    		scrollTop:$('#interface').offset().top + 90
    	  }, 500).promise().done(function() {
	 	$("body").append("<div id='overlay'></div>");
	$("#overlay")
      .height(docHeight)
      .css({
         'opacity' : 0.8,
         'position': 'fixed',
         'top': 0,
         'left': 0,
         'background-color': 'black',
         'width': '100%',
		 'height': '100%',
         'z-index': 5000,
		 'display': 'block'
		 
      });
		
	  $("#modal-ui-2").fadeIn("slow" , modalFadeIn);
	   });
	 
	 $('.gallery-close').click(function () {
	
		 $("body").remove("#overlay");
		 $("#overlay")
      .height(docHeight)
      .css({
         'opacity' : 0.0,
         'position': 'fixed',
         'top': 0,
         'left': 0,
         'background-color': 'black',
         'width': '100%',
		 'height': '100%',
         'z-index': 5000,
		 'display': 'none'
      });
	
	  $("#modal-ui-2").fadeOut("slow" , modalFadeOut);
		 });
		 });
	


    //Concept-1 click opening modal-concepts-1
    $('#concepts-1').click( function () {
        $('html, body').animate({
            scrollTop:$('#concepts').offset().top + 150
          }, 500).promise().done(function() {
        $("body").append("<div id='overlay'></div>");
    $("#overlay")
      .height(docHeight)
      .css({
         'opacity' : 0.8,
         'position': 'fixed',
         'top': 0,
         'left': 0,
         'background-color': 'black',
         'width': '100%',
         'height': '100%',
         'z-index': 5000,
         'display': 'block'
         
      });
        
      $("#modal-concepts-1").fadeIn("slow" , modalFadeIn);
       });
     
     $('.gallery-close').click(function () {
    
         $("body").remove("#overlay");
         $("#overlay")
      .height(docHeight)
      .css({
         'opacity' : 0.0,
         'position': 'fixed',
         'top': 0,
         'left': 0,
         'background-color': 'black',
         'width': '100%',
         'height': '100%',
         'z-index': 5000,
         'display': 'none'
      });
    
      $("#modal-concepts-1").fadeOut("slow" , modalFadeOut);
         });
         });

//Concepts-2 click opening modal-concepts-2
    $('#concepts-2').click( function () {
        $('html, body').animate({
            scrollTop:$('#concepts').offset().top + 150
          }, 500).promise().done(function() {
        $("body").append("<div id='overlay'></div>");
    $("#overlay")
      .height(docHeight)
      .css({
         'opacity' : 0.8,
         'position': 'fixed',
         'top': 0,
         'left': 0,
         'background-color': 'black',
         'width': '100%',
         'height': '100%',
         'z-index': 5000,
         'display': 'block'
         
      });
        
      $("#modal-concepts-2").fadeIn("slow" , modalFadeIn);
       });
     
     $('.gallery-close').click(function () {
    
         $("body").remove("#overlay");
         $("#overlay")
      .height(docHeight)
      .css({
         'opacity' : 0.0,
         'position': 'fixed',
         'top': 0,
         'left': 0,
         'background-color': 'black',
         'width': '100%',
         'height': '100%',
         'z-index': 5000,
         'display': 'none'
      });
    
      $("#modal-concepts-2").fadeOut("slow" , modalFadeOut);
         });
         });

//Concepts-3 click opening modal-concepts-3
    $('#concepts-3').click( function () {
        $('html, body').animate({
            scrollTop:$('#concepts').offset().top + 150
          }, 500).promise().done(function() {
        $("body").append("<div id='overlay'></div>");
    $("#overlay")
      .height(docHeight)
      .css({
         'opacity' : 0.8,
         'position': 'fixed',
         'top': 0,
         'left': 0,
         'background-color': 'black',
         'width': '100%',
         'height': '100%',
         'z-index': 5000,
         'display': 'block'
         
      });
        
      $("#modal-concepts-3").fadeIn("slow" , modalFadeIn);
       });
     
     $('.gallery-close').click(function () {
    
         $("body").remove("#overlay");
         $("#overlay")
      .height(docHeight)
      .css({
         'opacity' : 0.0,
         'position': 'fixed',
         'top': 0,
         'left': 0,
         'background-color': 'black',
         'width': '100%',
         'height': '100%',
         'z-index': 5000,
         'display': 'none'
      });
    
      $("#modal-concepts-3").fadeOut("slow" , modalFadeOut);
         });
         });

//Print-1 click opening modal-print-1
    $('#print-1').click( function () {
        $('html, body').animate({
            scrollTop:$('#print').offset().top + 165
          }, 500).promise().done(function() {
        $("body").append("<div id='overlay'></div>");
    $("#overlay")
      .height(docHeight)
      .css({
         'opacity' : 0.8,
         'position': 'fixed',
         'top': 0,
         'left': 0,
         'background-color': 'black',
         'width': '100%',
         'height': '100%',
         'z-index': 5000,
         'display': 'block'
         
      });
        
      $("#modal-print-1").fadeIn("slow" , modalFadeIn);
       });
     
     $('.gallery-close').click(function () {
    
         $("body").remove("#overlay");
         $("#overlay")
      .height(docHeight)
      .css({
         'opacity' : 0.0,
         'position': 'fixed',
         'top': 0,
         'left': 0,
         'background-color': 'black',
         'width': '100%',
         'height': '100%',
         'z-index': 5000,
         'display': 'none'
      });
    
      $("#modal-print-1").fadeOut("slow" , modalFadeOut);
         });
         });

//Print-2 click opening modal-print-2
    $('#print-2').click( function () {
        $('html, body').animate({
            scrollTop:$('#print').offset().top + 165
          }, 500).promise().done(function() {
        $("body").append("<div id='overlay'></div>");
    $("#overlay")
      .height(docHeight)
      .css({
         'opacity' : 0.8,
         'position': 'fixed',
         'top': 0,
         'left': 0,
         'background-color': 'black',
         'width': '100%',
         'height': '100%',
         'z-index': 5000,
         'display': 'block'
         
      });
        
      $("#modal-print-2").fadeIn("slow" , modalFadeIn);
       });
     
     $('.gallery-close').click(function () {
    
         $("body").remove("#overlay");
         $("#overlay")
      .height(docHeight)
      .css({
         'opacity' : 0.0,
         'position': 'fixed',
         'top': 0,
         'left': 0,
         'background-color': 'black',
         'width': '100%',
         'height': '100%',
         'z-index': 5000,
         'display': 'none'
      });
    
      $("#modal-print-2").fadeOut("slow" , modalFadeOut);
         });
         });

//art-1 click opening modal-art-1
    $('#art-1').click( function () {
	    $('html, body').animate({
            scrollTop:$('#art').offset().top + 130
        }, 500).promise().done(function() {
        $("body").append("<div id='overlay'></div>");
    $("#overlay")
      .height(docHeight)
      .css({
         'opacity' : 0.8,
         'position': 'fixed',
         'top': 0,
         'left': 0,
         'background-color': 'black',
         'width': '100%',
         'height': '100%',
         'z-index': 5000,
         'display': 'block'
         
      });
      $("#modal-art-1").fadeIn("slow" , modalFadeIn);
		  
       });
     
     $('.gallery-close').click(function () {
    
         $("body").remove("#overlay");
         $("#overlay")
      .height(docHeight)
      .css({
         'opacity' : 0.0,
         'position': 'fixed',
         'top': 0,
         'left': 0,
         'background-color': 'black',
         'width': '100%',
         'height': '100%',
         'z-index': 5000,
         'display': 'none'
      });
    
      $("#modal-art-1").fadeOut("slow" , modalFadeOut);
         });
         });

//ani-1 click opening modal-ani-1
    $('#ani-1').click( function () {
        $('html, body').animate({
            scrollTop:$('#animation').offset().top + 120
        }, 500, function() {
		console.log("it");
        $("body").append("<div id='overlay'></div>");
    $("#overlay")
      .height(docHeight)
      .css({
         'opacity' : 0.8,
         'position': 'fixed',
         'top': 0,
         'left': 0,
         'background-color': 'black',
         'width': '100%',
         'height': '100%',
         'z-index': 5000,
         'display': 'block'
         
      });
        
      $("#modal-ani-1").fadeIn("slow" , function () {
          $("body").addClass('hidden')
          });
       });
     
     $('.gallery-close').click(function () {
    
         $("body").remove("#overlay");
         $("#overlay")
      .height(docHeight)
      .css({
         'opacity' : 0.0,
         'position': 'fixed',
         'top': 0,
         'left': 0,
         'background-color': 'black',
         'width': '100%',
         'height': '100%',
         'z-index': 5000,
         'display': 'none'
      });
    
      $("#modal-ani-1").fadeOut("slow" , function () {
          $("body").removeClass('hidden')
          });
         });
         });

//ani-2 click opening modal-ani-2
    $('#ani-2').click( function () {
        $('html, body').animate({
            scrollTop:$('#animation').offset().top + 120
        }, 500, function() {
        $("body").append("<div id='overlay'></div>");
    $("#overlay")
      .height(docHeight)
      .css({
         'opacity' : 0.8,
         'position': 'fixed',
         'top': 0,
         'left': 0,
         'background-color': 'black',
         'width': '100%',
         'height': '100%',
         'z-index': 5000,
         'display': 'block'
         
      });
        
      $("#modal-ani-2").fadeIn("slow" , function () {
          $("body").addClass('hidden')
          });
       });
     
     $('.gallery-close').click(function () {
    
         $("body").remove("#overlay");
         $("#overlay")
      .height(docHeight)
      .css({
         'opacity' : 0.0,
         'position': 'fixed',
         'top': 0,
         'left': 0,
         'background-color': 'black',
         'width': '100%',
         'height': '100%',
         'z-index': 5000,
         'display': 'none'
      });
    
      $("#modal-ani-2").fadeOut("slow" , function () {
          $("body").removeClass('hidden')
          });
         });
         });

//Though process click opening modal-process
    $('#process').click( function () {
        $('html, body').animate({
            scrollTop:$('#about').offset().top + 210
        }, 500, function() {
        $("body").append("<div id='overlay'></div>");
    $("#overlay")
      .height(docHeight)
      .css({
         'opacity' : 0.8,
         'position': 'fixed',
         'top': 0,
         'left': 0,
         'background-color': 'black',
         'width': '100%',
         'height': '100%',
         'z-index': 5000,
         'display': 'block'
         
      });
        
      $("#modal-process").fadeIn("slow" , function () {
          $("body").addClass('hidden')
          });
       });
     
     $('.gallery-close').click(function () {
    
         $("body").remove("#overlay");
         $("#overlay")
      .height(docHeight)
      .css({
         'opacity' : 0.0,
         'position': 'fixed',
         'top': 0,
         'left': 0,
         'background-color': 'black',
         'width': '100%',
         'height': '100%',
         'z-index': 5000,
         'display': 'none'
      });
    
      $("#modal-process").fadeOut("slow" , function () {
          $("body").removeClass('hidden')
          });
         });
         });
		 
		 
		 	
		var fetchedResume;
		$('#resumeHidden').load('resume.html #outerStuff', function() {
		});
	
			$('#contactHidden').load('contact.php', function() {
			//alert('Load was performed.');
		});
		
		 
			 });
			 
   function slide() {
		$("#slide1").slideDown('slow').delay(5000).slideUp('slow').delay(5000);
		$("#slide2").slideUp(1).delay(6000).slideDown('slow').delay(5000).slideUp('slow').delay(5000);
		$("#slide3").slideUp(1).delay(12000).slideDown('slow').delay(5000).slideUp('slow');
		$("#slide4").slideUp(1).delay(18000).slideDown('slow').delay(5000).slideUp('slow').delay(5000);
		$("#slide5").slideUp(1).delay(24000).slideDown('slow').delay(5000).slideUp('slow').delay(5000);
		$("#slide6").slideUp(1).delay(30000).slideDown('slow').delay(5000).slideUp('slow').delay(5000);
		$("#slide7").slideUp(1).delay(36000).slideDown('slow').delay(5000).slideUp('slow' , slide);
		}	
//})(jQuery); 
			

	
		
(function($) { 	
		
  
})(jQuery)
