/*
*
* SOCIAL X
* by ivanmendoza <dev@ivanmendoza.net>
*
*/

(function($){
	$.fn.socialWidget = function(type, config_settings){
		switch(type){
			case "likeButton":
				loadLikeButton(			this, config_settings);
				break;
			case "likeBox":
				loadLikeBox(			this, config_settings);
				break;
			case "tweetButton":
				loadTweetButton(		this, config_settings);
				break;
			case "followButton":
				loadTwitterFollowButton(this, config_settings);
				break;
			case "twitterBox":
				loadTwitterBox(			this, config_settings);
				break;
			case "pinButton":
				loadPinButton(			this, config_settings);
				break;
			case "pinterestButton":
				loadPinterestButton(	this, config_settings);
				break;
			case "tumblrButton":
				loadTumblrButton(		this, config_settings);
				break;
			case "linkedinButton":
				loadLinkedinButton(		this, config_settings);
				break;
			case "followCompanyButton":
				loadFollowCompanyButton(this, config_settings);
				break;
			case "plusoneButton":
				loadPlusoneButton(		this, config_settings);
				break;
			case "sharethisButton":
				loadSharethisButton(	this);
				break;
		}
		
		function loadJS(url, id){
			if (document.getElementById(id)){return;}
			var js = document.createElement('script');
			if(id){js.id = id;}
			js.src = url;
			var first = document.getElementsByTagName('script')[0];
			first.parentNode.insertBefore(js, first);
		}
		
		// by Avi Flax (http://stackoverflow.com/posts/171256/revisions)
		function mergeObjects(obj1, obj2){
		    var obj3 = {};
		    for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; }
		    for (var attrname in obj2) { obj3[attrname] = obj2[attrname]; }
		    return obj3;
		}
		
		function loadSocialButton(subject, script_url, html_content, container){
			$(container).each(function(){
				$(this).html(html_content);
			});
			loadJS(script_url, subject);
		}
	// FACEBOOK
		function loadLikeButton(element, config_settings){
			var default_settings = {
				"send": 		"false", 
				"layout": 		"standard",	/* standard, button_count, box_count */
				"width": 		"250",
				"action": 		"like", 	/* like, recommend */
				"show-faces": 	"true"
			};
			if(config_settings){
				config_settings = mergeObjects(default_settings, config_settings);
			}else{
				config_settings = default_settings;
			}
			var html_content = '<div id="fb-root"></div><div class="fb-like"';
			var script_url = 'http://connect.facebook.net/en_US/all.js#xfbml=1';
			for(option in config_settings){
				if(option != 'appid'){
					html_content += " data-" + option + '=' + '"' + config_settings[option] + '"';
				}else{
					script_url += '&appId=' + config_settings[option];
				}
			}
			html_content += '></div>';
			
			loadSocialButton(
				'facebook-jssdk',
				script_url,
				html_content,
				element
			);
		}
		
		function loadLikeBox(element, config_settings){
			var default_settings = {
				"href": 		"http://www.facebook.com/platform", 
				"width": 		"250", 
				"show-faces": 	"true", 
				"stream": 		"false", 
				"header": 		"false",
				"border-color": "#ffffff"
			};
			if(config_settings){
				config_settings = mergeObjects(default_settings, config_settings);
			}else{
				config_settings = default_settings;
			}
			
			var html_content = '<div id="fb-root"></div><div class="fb-like-box"';
			var script_url = 'http://connect.facebook.net/en_US/all.js#xfbml=1';
			for(option in config_settings){
				if(option != 'appid'){
					html_content += " data-" + option + '=' + '"' + config_settings[option] + '"';
				}else{
					script_url += '&appId=' + config_settings[option];
				}
			}
			html_content += '></div>';
			loadSocialButton(
				'facebook-jssdk',
				script_url,
				html_content,
				element
			);
		}
		
	// TWITTER
		function loadTweetButton(element, config_settings){
			var default_settings = {
				"lang": "en",
				"count": "horizontal", /* none, vertical, horizontal */
				"size": "medium", /* medium, large */
				"dnt": "true"
			};
			if(config_settings){
				config_settings = mergeObjects(default_settings, config_settings);
			}else{
				config_settings = default_settings;
			}
			
			var html_content = '<a href="https://twitter.com/share" class="twitter-share-button"';
			for(option in config_settings){
				html_content += " data-" + option + '=' + '"' + config_settings[option] + '"';
			}
			html_content += '>Twittear</a>';
	
			loadSocialButton(
				'twitter-wjs',
				'http://platform.twitter.com/widgets.js',
				html_content,
				element
			);
		}
		
		function loadTwitterFollowButton(element, config_settings){
			var default_settings = {
				"lang": "en", 
				"username": "twitter",
			 // "show-count": "false",
			 // "dnt": "true",
			 // "size" : "large"
			};
			if(config_settings){
				config_settings = mergeObjects(default_settings, config_settings);
			}else{
				config_settings = default_settings;
			}
			
			var html_content = '<a href="https://twitter.com/'+config_settings["username"] +'" class="twitter-follow-button"';
			for(option in config_settings){
				if(option != "username"){
					html_content += " data-" + option + '=' + '"' + config_settings[option] + '"';
				}
			}
			html_content += '>Follow '+config_settings["username"] +'</a>';
	
			loadSocialButton(
				'twitter-wjs',
				'http://platform.twitter.com/widgets.js',
				html_content,
				element
			);
		}
		function loadTwitterBox(element, config_settings){
			var default_settings = {
				"lang": "en",
				"dnt": "true"
			};
			if(config_settings){
				config_settings = mergeObjects(default_settings, config_settings);
			}else{
				config_settings = default_settings;
			}
			
			var html_content = '<a class="twitter-timeline"';
			for(option in config_settings){
				html_content += " data-" + option + '=' + '"' + config_settings[option] + '"';
			}
			html_content += '></a>';
			loadSocialButton(
				'twitter-wjs',
				'http://platform.twitter.com/widgets.js',
				html_content,
				element
			);
		}
		
	// GOOGLE PLUS
		function loadPlusoneButton(element, config_settings){
			// For more information https://developers.google.com/+/web/+1button/#plusonetag-parameters
			var default_settings = {
				"size": 		"medium", 
				"annotation": 	"bubble", 
				"width": 		"250px",
				"align": 		"left",
				"expandTo": 	"bottom",
				"count": 		"true"
			};
			if(config_settings){
				config_settings = mergeObjects(default_settings, config_settings);
			}else{
				config_settings = default_settings;
			}
			var html_content = '<div class="g-plusone" ';
			for(option in config_settings){
				if(option != "username"){
					html_content += " data-" + option + '=' + '"' + config_settings[option] + '"';
				}
			}
			html_content += '></div>';
			loadSocialButton(
				'plusone',
				'https://apis.google.com/js/plusone.js',
				html_content,
				element
			);
		}
		
	// PINTEREST
		function loadPinButton(element, config_settings){
			var default_settings = {
				"pin-do": "buttonBookmark"
			};
			if(config_settings){
				config_settings = mergeObjects(default_settings, config_settings);
			}else{
				config_settings = default_settings;
			}
			var html_content = '<a href="//pinterest.com/pin/create/button/" ';
			for(option in config_settings){
				html_content += " data-" + option + '=' + '"' + config_settings[option] + '"';
			}
			html_content += ' ><img src="//assets.pinterest.com/images/pidgets/pin_it_button.png" /></a>';
			
			loadSocialButton(
				'Pinterest',
				'//assets.pinterest.com/js/pinit.js',
				html_content,
				element
			);
		}
		
		function loadPinterestButton(element, config_settings){
			var default_settings = {
				"pin-do": "buttonFollow", 
				"username": "pinterest"
				
			};
			if(config_settings){
				config_settings = mergeObjects(default_settings, config_settings);
			}else{
				config_settings = default_settings;
			}
			
			var html_content = '<a href="http://pinterest.com/' + config_settings["username"] + '"';
			for(option in config_settings){
				if(option.indexOf("pin-")>-1){
					html_content += " data-" + option + '=' + '"' + config_settings[option] + '"';
				}
			}
			html_content += ' >' + config_settings["username"] + '</a>';
	
			loadSocialButton(
				'Pinterest',
				'http://assets.pinterest.com/js/pinit.js',
				html_content,
				element
			);
		}
		
	// TUMBLR
		function loadTumblrButton(element, config_settings){
			var default_settings = {
				"type": "1",
				"width": "81",
				"height": "20",
				"url": document.location.href,
				"title": document.title,
				"description": ""
			};
			if(config_settings){
				config_settings = mergeObjects(default_settings, config_settings);
			}else{
				config_settings = default_settings;
			}
			
			loadSocialButton(
				'tumblr',
				'http://platform.tumblr.com/v1/share.js',
				'<a href="http://www.tumblr.com/share/link?url='+encodeURIComponent(config_settings.url)+'&name='+encodeURIComponent(config_settings.title)+'&description='+encodeURIComponent(config_settings.description)+'" title="Share on Tumblr" style="display:inline-block; text-indent:-9999px; overflow:hidden; width:'+config_settings.width+'px; height:'+config_settings.height+'px; background:url(http://platform.tumblr.com/v1/share_'+config_settings.type+'.png) top left no-repeat transparent;">Share on Tumblr</a>',
				element
			);
		}
		
	// ADD THIS - SHARE THIS
		function loadSharethisButton(element){
			markup = '<div class="addthis_toolbox addthis_default_style"><a class="addthis_counter addthis_pill_style"></a></div>';
			
			loadSocialButton(
				'addthis',
				'http://s7.addthis.com/js/300/addthis_widget.js#pubid=xa-51c299fb5df92b07',
				markup,
				element
			);
		}
	
	// LINKEDIN
		function loadLinkedinButton(element, config_settings){
			var default_settings = {
				"counter": "right"
			};
			if(config_settings){
				config_settings = mergeObjects(default_settings, config_settings);
			}else{
				config_settings = default_settings;
			}
			
			var html_content = '<script type="IN/Share"';
			for(option in config_settings){
				html_content += " data-" + option + '=' + '"' + config_settings[option] + '"';
			}
			html_content += '></script>';
	
			loadSocialButton(
				'LinkedIn',
				'http://platform.linkedin.com/in.js',
				html_content,
				element
			);
		}
		
		function loadFollowCompanyButton(element, config_settings){
			var default_settings = {
				"counter": "right"
			 // "id": "012345678"
			};
			if(config_settings){
				config_settings = mergeObjects(default_settings, config_settings);
			}else{
				config_settings = default_settings;
			}
			
			var html_content = '<script type="IN/FollowCompany"';
			for(option in config_settings){
				html_content += " data-" + option + '=' + '"' + config_settings[option] + '"';
			}
			html_content += '></script>';
	
			loadSocialButton(
				'LinkedIn',
				'http://platform.linkedin.com/in.js',
				html_content,
				element
			);
		}
	
	};
})(jQuery);

// track
// Track a event to Google Analytics
//
function track(category, action, value){
	if(typeof _gaq != 'undefined'){
  		_gaq.push(['_trackEvent', category, action, value]);
	}else{
		return false;
	}
}



