/*
*
* RESPONSIVEX
* by ivanmendoza <dev@ivanmendoza.net>
*
*/

// A javascript library to improve responsive web design.
// Demos: http://ivanmendoza.net/labs/snbx/demos/responsivex.html
// jQuery required.

// LOP
// Add CSS classes on depends element orientation: .landscape, .portrait, .square

(function( $ ){
	$.fn.lop = function(){
		var el = $(this);
		
		function updateClasses(elements){
			elements.each(function(){
				individual = $(this);
				var w = individual.width();
				var h = individual.height();
				if(w == h){
					individual.addClass("square").removeClass("portrait landscape");
				}else if(w > h){
					individual.addClass("landscape").removeClass("square portrait");
				}else if(w < h){
					individual.addClass("portrait").removeClass("square landscape");
				}
			});
		}
		$(window).ready(function(){
			updateClasses(el);
		});
		$(window).resize(function(){
			updateClasses(el);
		});
		return this;
	};
})( jQuery );

// fullH
// Set element height to "100%"

(function( $ ){
	$.fn.fullH = function(viewportBreakpoint){
	var el = $(this);
	var viewportBreakpoint = viewportBreakpoint || 0;
	var wWidth;
	
	function updateHeight(elements){
		elements.each(function(){
			e = $(this);
			p = $(this).parent();
			eH = p.height() - parseFloat(e.css("margin-top")) - parseFloat(e.css("margin-bottom"));
			if(eH>0){$(this).height( eH );}
		});
	}
	
	$(document).ready(function(){
		wWidth = $(window).width();
		if(viewportBreakpoint === 0 || (viewportBreakpoint >0 && wWidth>viewportBreakpoint) ){
			updateHeight(el);
		}
	});
	$(window).load(function(){
		wWidth = $(window).width();
		if(viewportBreakpoint === 0 || (viewportBreakpoint >0 && wWidth>viewportBreakpoint) ){
			updateHeight(el);
		}
	});
	$(window).resize(function(){
		wWidth = $(window).width();
		if(viewportBreakpoint === 0 || (viewportBreakpoint >0 && wWidth>viewportBreakpoint) ){
			updateHeight(el);
		}
	});
	return this;
};
})( jQuery );

// fullSize
// Set element width and height to "100%"

(function( $ ){
	$.fn.fullSize = function(){
	var el = $(this);
	
	function updateSize(elements){
		elements.each(function(){
			e = $(this);
			p = $(this).parent();
			eW = p.width() - parseFloat(e.css("margin-left")) - parseFloat(e.css("margin-right"));
			eH = p.height() - parseFloat(e.css("margin-top")) - parseFloat(e.css("margin-bottom"));
			if(eW>0){$(this).width( eW );}
			if(eH>0){$(this).height( eH );}
		});
	}
	
	$(document).ready(function(){
		updateSize(el);
	});
	$(window).resize(function(){
		updateSize(el);
	});
	return this;
};
})( jQuery );