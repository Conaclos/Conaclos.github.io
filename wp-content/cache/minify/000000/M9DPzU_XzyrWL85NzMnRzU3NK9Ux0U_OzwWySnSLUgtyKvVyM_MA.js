jQuery(document).ready(function($){var $masthead=$('#masthead'),timeout=false;$.fn.smallMenu=function(){$masthead.find('.site-navigation').removeClass('main-navigation').addClass('main-small-navigation');$masthead.find('.site-navigation h1').removeClass('assistive-text').addClass('menu-toggle');$('.menu-toggle').unbind('click').click(function(){$masthead.find('.menu').toggle();$(this).toggleClass('toggled-on');});};if($(window).width()<600)
$.fn.smallMenu();$(window).resize(function(){var browserWidth=$(window).width();if(false!==timeout)
clearTimeout(timeout);timeout=setTimeout(function(){if(browserWidth<600){$.fn.smallMenu();}else{$masthead.find('.site-navigation').removeClass('main-small-navigation').addClass('main-navigation');$masthead.find('.site-navigation h1').removeClass('menu-toggle').addClass('assistive-text');$masthead.find('.menu').removeAttr('style');}},200);});});;var addComment={moveForm:function(a,b,c,d){var e,f=this,g=f.I(a),h=f.I(c),i=f.I("cancel-comment-reply-link"),j=f.I("comment_parent"),k=f.I("comment_post_ID");if(g&&h&&i&&j){f.respondId=c,d=d||!1,f.I("wp-temp-form-div")||(e=document.createElement("div"),e.id="wp-temp-form-div",e.style.display="none",h.parentNode.insertBefore(e,h)),g.parentNode.insertBefore(h,g.nextSibling),k&&d&&(k.value=d),j.value=b,i.style.display="",i.onclick=function(){var a=addComment,b=a.I("wp-temp-form-div"),c=a.I(a.respondId);if(b&&c)return a.I("comment_parent").value="0",b.parentNode.insertBefore(c,b),b.parentNode.removeChild(b),this.style.display="none",this.onclick=null,!1};try{f.I("comment").focus()}catch(l){}return!1}},I:function(a){return document.getElementById(a)}};