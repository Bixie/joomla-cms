/* Copyright (C) YOOtheme GmbH, YOOtheme Proprietary Use License (http://www.yootheme.com/license) */

(function(e){var a=function(){};a.prototype=e.extend(a.prototype,{name:"accordion",options:{duration:500,easing:"easeOutQuart",animated:"slide",event:"click",collapseall:!0,matchheight:!0,toggler:".toggler",content:".content"},initialize:function(a,b){b=e.extend({},this.options,b);var f=a.find(b.toggler),d=function(){var g=0;b.matchheight&&a.find(b.content).css("min-height","").css("height","").each(function(){g=Math.max(g,e(this).height())}).css("min-height",g);f.each(function(){var b=e(this),
a=b.next();a.data("height",a.css("height","").show().height());b.hasClass("active")?a.show():a.hide().css("height",0)})};f.each(function(a){var c=e(this).bind(b.event,function(){var c=f.eq(a).hasClass("active")?e([]):f.eq(a),d=f.eq(a).hasClass("active")?f.eq(a):e([]);c.hasClass("active")&&(d=c,c=e([]));b.collapseall&&(d=f.filter(".active"));switch(b.animated){case "slide":c.next().stop().show().animate({height:c.next().data("height")},{easing:b.easing,duration:b.duration});d.next().stop().animate({height:0},
{easing:b.easing,duration:b.duration,complete:function(){d.next().hide()}});break;default:c.next().show().css("height",c.next().data("height")),d.next().hide().css("height",0)}c.addClass("active");d.removeClass("active")}),d=c.next().css("overflow","hidden").addClass("content-wrapper");a==b.index||"all"==b.index?(c.addClass("active"),d.show()):d.hide().css("height",0)});d();e(window).bind("debouncedresize",function(){d()})}});e.fn[a.prototype.name]=function(){var c=arguments,b=c[0]?c[0]:null;return this.each(function(){var f=
e(this);if(a.prototype[b]&&f.data(a.prototype.name)&&"initialize"!=b)f.data(a.prototype.name)[b].apply(f.data(a.prototype.name),Array.prototype.slice.call(c,1));else if(!b||e.isPlainObject(b)){var d=new a;a.prototype.initialize&&d.initialize.apply(d,e.merge([f],c));f.data(a.prototype.name,d)}else e.error("Method "+b+" does not exist on jQuery."+a.name)})};window.$widgetkit&&($widgetkit.lazyloaders.accordion=function(a,b){e(a).accordion(b)})})(jQuery);
