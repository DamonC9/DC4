// Custom site-wide Animations


//(function($){ 
		//$(window).load(function(){
			//Home page title slide animation 
			
	    $(document).ready(function(){
			
      

		slide();
	
		
		$('#lab').parallax("100%", 2500, 0.4, true);
		$('#space').parallax("50%", 12000, 0.05, true);
		$('#jungle-bg').parallax("50%", 4200, 0.15, true);
		$('#gears').parallax("50%", 5600, 0.30, true);
        $('#ink').parallax("50%", 6700, 0.30, true);
        $('#face3d').parallax("20%", 7700, 0.30, true);
		
	
//Slide down toolbar when waypoint reached
$('h3#nav_print').waypoint(function(event, direction) {
   if (direction === 'down') {
	 $('.toolbar').animate({marginTop: "0px"}, 500)
	} // do this on the way down
   
   else {
   $('.toolbar').animate({marginTop: "-48px"}, 500)
 // do this on the way back up through the waypoint
   }
});

//Contact tooltip
$("#contact_btn").hover(function(){
    $("#tooltip").fadeIn("slow");
},
function(){
    $("#tooltip").fadeOut("slow");
});




			
//About box animation 
		$("#oc_about").click(function () {
    if ($('.button-area #open-about').is(':visible')) {
        $("#oc_about h2").fadeOut("fast" , function () {
            $(".button-area #open-about").fadeOut("fast" , function () {
                $("#oc_about h3").fadeIn("fast" , function () {
                    $(".button-area #close-about").fadeIn("fast" , function () {
                        $("#about-box").animate({height:"2400px" , paddingTop: "900px", marginTop: "-900px"}, 500);
                    });
                });
            });
        });
    } else {
        $("#oc_about h3").fadeOut("fast" , function () {
            $(".button-area #close-about").fadeOut("fast" , function () {
                $("#oc_about h2").fadeIn("fast" , function () {
                    $(".button-area #open-about").fadeIn("fast" , function () { 
                        $("#about-box").animate({height:"100px" , paddingTop: "0", marginTop: "0"}, 500); 
                    });
                });
            });
        });
    }
}); 

//Interface box animation 
		$("#oc_interface").click(function () {
    if ($('.button-area #open-interface').is(':visible')) {
        $("#oc_interface h2").fadeOut("fast" , function () {
            $(".button-area #open-interface").fadeOut("fast" , function () {
                $("#oc_interface h3").fadeIn("fast" , function () {
                    $(".button-area #close-interface").fadeIn("fast" , function () {
                        $("#interface-box").animate({height:"2400px" , paddingTop: "900px", marginTop: "-900px"}, 500);
                    });
                });
            });
        });
    } else {
        $("#oc_interface h3").fadeOut("fast" , function () {
            $(".button-area #close-interface").fadeOut("fast" , function () {
                $("#oc_interface h2").fadeIn("fast" , function () {
                    $(".button-area #open-interface").fadeIn("fast" , function () { 
                        $("#interface-box").animate({height:"100px" , paddingTop: "0", marginTop: "0"}, 500); 
                    });
                });
            });
        });
    }
}); 

//Animation box animation 
        $("#oc_animation").click(function () {
    if ($('.button-area2 #open-animation').is(':visible')) {
        $("#oc_animation h2").fadeOut("fast" , function () {
            $(".button-area2 #open-animation").fadeOut("fast" , function () {
                $("#oc_animation h3").fadeIn("fast" , function () {
                    $(".button-area2 #close-animation").fadeIn("fast" , function () {
                        $("#animation-box").animate({width:"670px"}, 500);
                    });
                });
            });
        });
    } else {
        $("#oc_animation h3").fadeOut("fast" , function () {
            $(".button-area2 #close-animation").fadeOut("fast" , function () {
                $("#oc_animation h2").fadeIn("fast" , function () {
                    $(".button-area2 #open-animation").fadeIn("fast" , function () { 
                        $("#animation-box").animate({width:"350px"}, 500); 
                    });
                });
            });
        });
    }
}); 

	//Print box animation 
		$("#oc_print").click(function () {
    if ($('.button-area #open-print').is(':visible')) {
        $("#oc_print h2").fadeOut("fast" , function () {
            $(".button-area #open-print").fadeOut("fast" , function () {
                $("#oc_print h3").fadeIn("fast" , function () {
                    $(".button-area #close-print").fadeIn("fast" , function () {
                        $("#print-box").animate({height:"2400px" , paddingTop: "900px", marginTop: "-900px"}, 500);
                    });
                });
            });
        });
    } else {
        $("#oc_print h3").fadeOut("fast" , function () {
            $(".button-area #close-print").fadeOut("fast" , function () {
                $("#oc_print h2").fadeIn("fast" , function () {
                    $(".button-area #open-print").fadeIn("fast" , function () { 
                        $("#print-box").animate({height:"100px" , paddingTop: "0", marginTop: "0"}, 500); 
                    });
                });
            });
        });
    }
}); 

//Concepts box animation 
		$("#oc_concepts").click(function () {
    if ($('.button-area #open-concepts').is(':visible')) {
        $("#oc_concepts h2").fadeOut("fast" , function () {
            $(".button-area #open-concepts").fadeOut("fast" , function () {
                $("#oc_concepts h3").fadeIn("fast" , function () {
                    $(".button-area #close-concepts").fadeIn("fast" , function () {
                        $("#concepts-box").animate({height:"2400px" , paddingTop: "900px", marginTop: "-900px"}, 500);
                    });
                });
            });
        });
    } else {
        $("#oc_concepts h3").fadeOut("fast" , function () {
            $(".button-area #close-concepts").fadeOut("fast" , function () {
                $("#oc_concepts h2").fadeIn("fast" , function () {
                    $(".button-area #open-concepts").fadeIn("fast" , function () { 
                        $("#concepts-box").animate({height:"100px" , paddingTop: "0", marginTop: "0"}, 500); 
                    });
                });
            });
        });
    }
}); 

//Art box animation 
		$("#oc_art").click(function () {
    if ($('.button-area #open-art').is(':visible')) {
        $("#oc_art h2").fadeOut("fast" , function () {
            $(".button-area #open-art").fadeOut("fast" , function () {
                $("#oc_art h3").fadeIn("fast" , function () {
                    $(".button-area #close-art").fadeIn("fast" , function () {
                        $("#art-box").animate({height:"2400px" , paddingTop: "900px", marginTop: "-900px"}, 500);
                    });
                });
            });
        });
    } else {
        $("#oc_art h3").fadeOut("fast" , function () {
            $(".button-area #close-art").fadeOut("fast" , function () {
                $("#oc_art h2").fadeIn("fast" , function () {
                    $(".button-area #open-art").fadeIn("fast" , function () { 
                        $("#art-box").animate({height:"100px" , paddingTop: "0", marginTop: "0"}, 500); 
                    });
                });
            });
        });
    }
}); 
	
	//Activation for HTML5 player in animation section
     $("#osmplayer").osmplayer({
          width: '590px',
          height: '305px',
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
		
		
		
		
		//Scroll event handler 
    $(window).bind('scroll',function(e){
    	parallaxScroll();
		redrawDotNav();
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
	$('#about-box').css('top',(950-(scrolled*.52))+'px');
	$('#interface-box').css('top',(1280-(scrolled*.52))+'px');
	
	$('#animation-box').css('top',(1900-(scrolled*.52))+'px');
	$('#branch').css('top',(50-(scrolled*.05))+'px');
	
	$('#front-ink1').css('top',(1350-(scrolled*.15))+'px');
	$('#front-ink2').css('top',(200-(scrolled*.0))+'px');
	$('#print-box').css('top',(2500-(scrolled*.42))+'px');
    $('#concepts-box').css('top',(2030-(scrolled*.42))+'px');
    $('#art-box').css('top',(2900-(scrolled*.42))+'px');
	
}

var sdegree = 0;

$(window).scroll(function(event, direction) {
 if (direction === 'down') {
         sdegree ++ ;
    sdegree = sdegree + 1 ;
    var srotate = "rotate(" + sdegree + "deg)";
    $("#middle-ring,#inner-ring,#outer-ring").css({"-moz-transform" : srotate, "-webkit-transform" : srotate});
    } // do this on the way down
   
   else {
       sdegree ++ ;
    sdegree = sdegree + 1 ;
    var srotate = "rotate(" + sdegree + "deg)";
    $("#middle-ring,#inner-ring,#outer-ring").css({"-moz-transform" : srotate, "-webkit-transform" : srotate});
 // do this on the way back up through the waypoint
   }
   

});

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
	if($(document).scrollTop() >= section1Top && $(document).scrollTop() < section2Top){
		$('li#home-tab').addClass('active');
	} else if ($(document).scrollTop() >= section2Top && $(document).scrollTop() < section3Top){
		$('li#about-tab').addClass('active');
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

	//Ui-1 click opening modal-ui-1
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

   
 //Ui-3 click opening modal-ui-3
    $('#ui-3').click( function () {
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
        
      $("#modal-ui-3").fadeIn("slow" , modalFadeIn);
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
    
      $("#modal-ui-3").fadeOut("slow" , modalFadeOut);
         });
         });

 //Ui-4 click opening modal-ui-4
    $('#ui-4').click( function () {
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
        
      $("#modal-ui-4").fadeIn("slow" , modalFadeIn);
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
    
      $("#modal-ui-4").fadeOut("slow" , modalFadeOut);
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
