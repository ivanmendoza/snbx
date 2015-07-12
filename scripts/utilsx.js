/*
*
* UTILS X
* by ivanmendoza <dev@ivanmendoza.net>
*
*/

jQuery.fn.exists = function(){return jQuery(this).length;}

// is_ FUNCTIONS
	var isArray = function(var_obj){
		if(Object.prototype.toString.call( var_obj ) === '[object Array]'){
			return true;
		}
		return false;
	};
	var isObject = function(var_obj){
		if(Object.prototype.toString.call( var_obj ) === '[object Object]'){
			return true;
		}
		return false;
	};
	
// is_ BROWSER FUNCTIONS
	var isIE = function(){
		if(navigator.appName=="Microsoft Internet Explorer"){
			 return true;
		}
		return false;
	};
	

// DEBUG FUNCTIONS
	var log = function(message) {
	    if(console) {
	       console.log(message);
	    }                                   
	};