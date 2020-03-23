/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
    
    $("#skills .skill > a > span").each(function() {
    	var $elem = $(this);
    	$elem.hover(function () {
    		doSkillHoverActions($elem, "0px");
        }, function() {
        	doSkillHoverActions($elem, "125px");
        });
    });
    
    function doSkillHoverActions($elem, xPos) {
    	var bgPos = $elem.css("background-position");
    	var yPos = bgPos.split(" ")[1];
    	$elem.css("background-position", xPos + " " + yPos);
    }
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});