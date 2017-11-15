!function(e,n){"use strict";"function"==typeof define&&define.amd?define(["jquery"],function(t){return n(t,e,e.document,e.Math)}):"object"==typeof exports&&exports?module.exports=n(require("jquery"),e,e.document,e.Math):n(jQuery,e,e.document,e.Math)}("undefined"!=typeof window?window:this,function(e,n,t,o,i){"use strict";var a="fullpage-wrapper",l="."+a,r="fp-responsive",s="fp-notransition",c="fp-destroyed",d="fp-enabled",f="fp-viewing",u="active",h="."+u,p="fp-completely",v="."+p,g="fp-section",m="."+g,w=m+h,S=m+":first",b=m+":last",x="fp-tableCell",y="."+x,C="fp-nav",T="#"+C,k="fp-tooltip",I="."+k,L="fp-slide",E="."+L,A=E+h,M="fp-slides",O="."+M,R="fp-slidesContainer",H="."+R,B="fp-table",z="fp-slidesNav",D="."+z,P=D+" a",q=".fp-controlArrow",F="fp-prev",V="."+F,W="fp-controlArrow "+F,U=q+V,Y=q+".fp-next",j=e(n),N=e(t),X={scrollbars:!0,mouseWheel:!0,hideScrollbars:!1,fadeScrollbars:!1,disableMouse:!0,interactiveScrollbars:!0};e.fn.fullpage=function(V){function Q(n,t){n||Xn(0),Zn("autoScrolling",n,t);var o=e(w);V.autoScrolling&&!V.scrollBar?(et.css({overflow:"hidden",height:"100%"}),G(kt.recordHistory,"internal"),dt.css({"-ms-touch-action":"none","touch-action":"none"}),o.length&&Xn(o.position().top)):(et.css({overflow:"visible",height:"initial"}),G(!1,"internal"),dt.css({"-ms-touch-action":"","touch-action":""}),o.length&&et.scrollTop(o.position().top))}function G(e,n){Zn("recordHistory",e,n)}function J(e,n){Zn("scrollingSpeed",e,n)}function Z(e,n){Zn("fitToSection",e,n)}function $(e){V.lockAnchors=e}function _(e){e?(Fn(),Vn()):(qn(),Wn())}function ee(n,t){void 0!==t?(t=t.replace(/ /g,"").split(","),e.each(t,function(e,t){Qn(n,t,"m")})):n?(_(!0),Un()):(_(!1),Yn())}function ne(n,t){void 0!==t?(t=t.replace(/ /g,"").split(","),e.each(t,function(e,t){Qn(n,t,"k")})):V.keyboardScrolling=n}function te(){var n=e(w).prev(m);n.length||!V.loopTop&&!V.continuousVertical||(n=e(m).last()),n.length&&Fe(n,null,!0)}function oe(){var n=e(w).next(m);n.length||!V.loopBottom&&!V.continuousVertical||(n=e(m).first()),n.length&&Fe(n,null,!1)}function ie(e,n){J(0,"internal"),ae(e,n),J(kt.scrollingSpeed,"internal")}function ae(e,n){var t=En(e);void 0!==n?Mn(e,n):t.length>0&&Fe(t)}function le(e){De("right",e)}function re(e){De("left",e)}function se(n){if(!dt.hasClass(c)){ut=!0,ft=j.height(),e(m).each(function(){var n=e(this).find(O),t=e(this).find(E);V.verticalCentered&&e(this).find(y).css("height",In(e(this))+"px"),e(this).css("height",ft+"px"),V.scrollOverflow&&(t.length?t.each(function(){Tn(e(this))}):Tn(e(this))),t.length>1&&fn(n,n.find(A))});var t=e(w),o=t.index(m);o&&ie(o+1),ut=!1,e.isFunction(V.afterResize)&&n&&V.afterResize.call(dt),e.isFunction(V.afterReBuild)&&!n&&V.afterReBuild.call(dt)}}function ce(n){var t=nt.hasClass(r);n?t||(Q(!1,"internal"),Z(!1,"internal"),e(T).hide(),nt.addClass(r),e.isFunction(V.afterResponsive)&&V.afterResponsive.call(dt,n)):t&&(Q(kt.autoScrolling,"internal"),Z(kt.autoScrolling,"internal"),e(T).show(),nt.removeClass(r),e.isFunction(V.afterResponsive)&&V.afterResponsive.call(dt,n))}function de(){var n=dt.find(V.sectionSelector);V.anchors.length||(V.anchors=n.filter("[data-anchor]").map(function(){return e(this).data("anchor").toString()}).get()),V.navigationTooltips.length||(V.navigationTooltips=n.filter("[data-tooltip]").map(function(){return e(this).data("tooltip").toString()}).get())}function fe(){dt.css({height:"100%",position:"relative"}),dt.addClass(a),e("html").addClass(d),ft=j.height(),dt.removeClass(c),ve(),e(m).each(function(n){var t=e(this),o=t.find(E),i=o.length;he(t,n),pe(t,n),i>0?ue(t,o,i):V.verticalCentered&&kn(t)}),V.fixedElements&&V.css3&&e(V.fixedElements).appendTo(nt),V.navigation&&me(),Se(),V.scrollOverflow?("complete"===t.readyState&&we(),j.on("load",we)):ye()}function ue(n,t,o){var i=100*o,a=100/o;t.wrapAll('<div class="'+R+'" />'),t.parent().wrap('<div class="'+M+'" />'),n.find(H).css("width",i+"%"),o>1&&(V.controlArrows&&ge(n),V.slidesNavigation&&Rn(n,o)),t.each(function(n){e(this).css("width",a+"%"),V.verticalCentered&&kn(e(this))});var l=n.find(A);l.length&&(0!==e(w).index(m)||0===e(w).index(m)&&0!==l.index())?Nn(l,"internal"):t.eq(0).addClass(u)}function he(n,t){t||0!==e(w).length||n.addClass(u),lt=e(w),n.css("height",ft+"px"),V.paddingTop&&n.css("padding-top",V.paddingTop),V.paddingBottom&&n.css("padding-bottom",V.paddingBottom),void 0!==V.sectionsColor[t]&&n.css("background-color",V.sectionsColor[t]),void 0!==V.anchors[t]&&n.attr("data-anchor",V.anchors[t])}function pe(n,t){void 0!==V.anchors[t]&&n.hasClass(u)&&xn(V.anchors[t],t),V.menu&&V.css3&&e(V.menu).closest(l).length&&e(V.menu).appendTo(nt)}function ve(){dt.find(V.sectionSelector).addClass(g),dt.find(V.slideSelector).addClass(L)}function ge(e){e.find(O).after('<div class="'+W+'"></div><div class="fp-controlArrow fp-next"></div>'),"#fff"!=V.controlArrowColor&&(e.find(Y).css("border-color","transparent transparent transparent "+V.controlArrowColor),e.find(U).css("border-color","transparent "+V.controlArrowColor+" transparent transparent")),V.loopHorizontal||e.find(U).hide()}function me(){nt.append('<div id="'+C+'"><ul></ul></div>');var n=e(T);n.addClass(function(){return V.showActiveTooltip?"fp-show-active "+V.navigationPosition:V.navigationPosition});for(var t=0;t<e(m).length;t++){var o="";V.anchors.length&&(o=V.anchors[t]);var i='<li><a href="#'+o+'"><span></span></a>',a=V.navigationTooltips[t];void 0!==a&&""!==a&&(i+='<div class="'+k+" "+V.navigationPosition+'">'+a+"</div>"),i+="</li>",n.find("ul").append(i)}e(T).css("margin-top","-"+e(T).height()/2+"px"),e(T).find("li").eq(e(w).index(m)).find("a").addClass(u)}function we(){e(m).each(function(){var n=e(this).find(E);n.length?n.each(function(){Tn(e(this))}):Tn(e(this))}),ye()}function Se(){dt.find('iframe[src*="youtube.com/embed/"]').each(function(){be(e(this),"enablejsapi=1")})}function be(e,n){var t=e.attr("src");e.attr("src",t+xe(t)+n)}function xe(e){return/\?/.test(e)?"&":"?"}function ye(){var n=e(w);n.addClass(p),V.scrollOverflowHandler.afterRender&&V.scrollOverflowHandler.afterRender(n),Xe(n),Ke(n),V.scrollOverflowHandler.afterLoad(),Ce()&&e.isFunction(V.afterLoad)&&V.afterLoad.call(n,n.data("anchor"),n.index(m)+1),e.isFunction(V.afterRender)&&V.afterRender.call(dt)}function Ce(){var e=n.location.hash.replace("#","").split("/"),t=En(decodeURIComponent(e[0]));return!t.length||t.length&&t.index()===lt.index()}function Te(){var n;if(!V.autoScrolling||V.scrollBar){var o=j.scrollTop(),i=Le(o),a=0,l=o+j.height()/2,r=nt.height()-j.height()===o,s=t.querySelectorAll(m);if(r)a=s.length-1;else if(o)for(var c=0;c<s.length;++c){var d=s[c];d.offsetTop<=l&&(a=c)}else a=0;if(Ie(i)&&(e(w).hasClass(p)||e(w).addClass(p).siblings().removeClass(p)),n=e(s).eq(a),!n.hasClass(u)){It=!0;var f,h,v=e(w),g=v.index(m)+1,S=yn(n),b=n.data("anchor"),x=n.index(m)+1,y=n.find(A);y.length&&(h=y.data("anchor"),f=y.index()),pt&&(n.addClass(u).siblings().removeClass(u),e.isFunction(V.onLeave)&&V.onLeave.call(v,g,x,S),e.isFunction(V.afterLoad)&&V.afterLoad.call(n,b,x),Ge(v),Xe(n),Ke(n),xn(b,x-1),V.anchors.length&&(ot=b),Hn(f,h,b,x)),clearTimeout(bt),bt=setTimeout(function(){It=!1},100)}V.fitToSection&&(clearTimeout(xt),xt=setTimeout(function(){V.fitToSection&&ke()},V.fitToSectionDelay))}}function ke(){pt&&(ut=!0,Fe(e(w)),ut=!1)}function Ie(n){var t=e(w).position().top,o=t+j.height();return"up"==n?o>=j.scrollTop()+j.height():t<=j.scrollTop()}function Le(e){var n=e>Lt?"down":"up";return Lt=e,Ht=e,n}function Ee(e,n){if(gt.m[e]){var t="down"===e?"bottom":"top",o="down"===e?oe:te;if(n.length>0){if(!V.scrollOverflowHandler.isScrolled(t,n))return!0;o()}else o()}}function Ae(e){var n=e.originalEvent;!Oe(e.target)&&V.autoScrolling&&Re(n)&&e.preventDefault()}function Me(n){var t=n.originalEvent,i=e(t.target).closest(m);if(!Oe(n.target)&&Re(t)){V.autoScrolling&&n.preventDefault();var a=V.scrollOverflowHandler.scrollable(i),l=jn(t);Mt=l.y,Ot=l.x,i.find(O).length&&o.abs(At-Ot)>o.abs(Et-Mt)?!rt&&o.abs(At-Ot)>j.outerWidth()/100*V.touchSensitivity&&(At>Ot?gt.m.right&&le(i):gt.m.left&&re(i)):V.autoScrolling&&pt&&o.abs(Et-Mt)>j.height()/100*V.touchSensitivity&&(Et>Mt?Ee("down",a):Mt>Et&&Ee("up",a))}}function Oe(n,t){t=t||0;var o=e(n).parent();return!!(t<V.normalScrollElementTouchThreshold&&o.is(V.normalScrollElements))||t!=V.normalScrollElementTouchThreshold&&Oe(o,++t)}function Re(e){return void 0===e.pointerType||"mouse"!=e.pointerType}function He(e){var n=e.originalEvent;if(V.fitToSection&&et.stop(),Re(n)){var t=jn(n);Et=t.y,At=t.x}}function Be(e,n){for(var t=0,i=e.slice(o.max(e.length-n,1)),a=0;a<i.length;a++)t+=i[a];return o.ceil(t/n)}function ze(t){var i=(new Date).getTime(),a=e(v).hasClass("fp-normal-scroll");if(V.autoScrolling&&!at&&!a){t=t||n.event;var l=t.wheelDelta||-t.deltaY||-t.detail,r=o.max(-1,o.min(1,l)),s=void 0!==t.wheelDeltaX||void 0!==t.deltaX,c=o.abs(t.wheelDeltaX)<o.abs(t.wheelDelta)||o.abs(t.deltaX)<o.abs(t.deltaY)||!s;vt.length>149&&vt.shift(),vt.push(o.abs(l)),V.scrollBar&&(t.preventDefault?t.preventDefault():t.returnValue=!1);var d=e(w),f=V.scrollOverflowHandler.scrollable(d),u=i-Rt;return Rt=i,u>200&&(vt=[]),pt&&Be(vt,10)>=Be(vt,70)&&c&&(r<0?Ee("down",f):Ee("up",f)),!1}V.fitToSection&&et.stop()}function De(n,t){var o=void 0===t?e(w):t,i=o.find(O),a=i.find(E).length;if(!(!i.length||rt||a<2)){var l=i.find(A),r=null;if(r="left"===n?l.prev(E):l.next(E),!r.length){if(!V.loopHorizontal)return;r="left"===n?l.siblings(":last"):l.siblings(":first")}rt=!0,fn(i,r,n)}}function Pe(){e(A).each(function(){Nn(e(this),"internal")})}function qe(e){var n=e.position(),t=n.top,o=n.top>Ht,i=t-ft+e.outerHeight(),a=V.bigSectionsDestination;return e.outerHeight()>ft?(o||a)&&"bottom"!==a||(t=i):(o||ut&&e.is(":last-child"))&&(t=i),Ht=t,t}function Fe(n,t,o){if(void 0!==n){var i,a,l=qe(n),r={element:n,callback:t,isMovementUp:o,dtop:l,yMovement:yn(n),anchorLink:n.data("anchor"),sectionIndex:n.index(m),activeSlide:n.find(A),activeSection:e(w),leavingSection:e(w).index(m)+1,localIsResizing:ut};r.activeSection.is(n)&&!ut||V.scrollBar&&j.scrollTop()===r.dtop&&!n.hasClass("fp-auto-height")||(r.activeSlide.length&&(i=r.activeSlide.data("anchor"),a=r.activeSlide.index()),V.autoScrolling&&V.continuousVertical&&void 0!==r.isMovementUp&&(!r.isMovementUp&&"up"==r.yMovement||r.isMovementUp&&"down"==r.yMovement)&&(r=Ue(r)),e.isFunction(V.onLeave)&&!r.localIsResizing&&!1===V.onLeave.call(r.activeSection,r.leavingSection,r.sectionIndex+1,r.yMovement)||(r.localIsResizing||Ge(r.activeSection),V.scrollOverflowHandler.beforeLeave(),n.addClass(u).siblings().removeClass(u),Xe(n),V.scrollOverflowHandler.onLeave(),pt=!1,Hn(a,i,r.anchorLink,r.sectionIndex),Ve(r),ot=r.anchorLink,xn(r.anchorLink,r.sectionIndex)))}}function Ve(n){if(V.css3&&V.autoScrolling&&!V.scrollBar)Ln("translate3d(0px, -"+o.round(n.dtop)+"px, 0px)",!0),V.scrollingSpeed?(clearTimeout(wt),wt=setTimeout(function(){je(n)},V.scrollingSpeed)):je(n);else{var t=We(n);e(t.element).animate(t.options,V.scrollingSpeed,V.easing).promise().done(function(){V.scrollBar?setTimeout(function(){je(n)},30):je(n)})}}function We(e){var n={};return V.autoScrolling&&!V.scrollBar?(n.options={top:-e.dtop},n.element=l):(n.options={scrollTop:e.dtop},n.element="html, body"),n}function Ue(n){return n.isMovementUp?e(w).before(n.activeSection.nextAll(m)):e(w).after(n.activeSection.prevAll(m).get().reverse()),Xn(e(w).position().top),Pe(),n.wrapAroundElements=n.activeSection,n.dtop=n.element.position().top,n.yMovement=yn(n.element),n}function Ye(n){n.wrapAroundElements&&n.wrapAroundElements.length&&(n.isMovementUp?e(S).before(n.wrapAroundElements):e(b).after(n.wrapAroundElements),Xn(e(w).position().top),Pe())}function je(n){Ye(n),e.isFunction(V.afterLoad)&&!n.localIsResizing&&V.afterLoad.call(n.element,n.anchorLink,n.sectionIndex+1),V.scrollOverflowHandler.afterLoad(),n.localIsResizing||Ke(n.element),n.element.addClass(p).siblings().removeClass(p),pt=!0,e.isFunction(n.callback)&&n.callback.call(this)}function Ne(e,n){e.attr(n,e.data(n)).removeAttr("data-"+n)}function Xe(n){if(V.lazyLoading){var t;Je(n).find("img[data-src], img[data-srcset], source[data-src], audio[data-src], iframe[data-src]").each(function(){t=e(this),e.each(["src","srcset"],function(e,n){var o=t.attr("data-"+n);void 0!==o&&o&&Ne(t,n)}),t.is("source")&&t.closest("video").get(0).load()})}}function Ke(n){var t=Je(n);t.find("video, audio").each(function(){var n=e(this).get(0);n.hasAttribute("data-autoplay")&&"function"==typeof n.play&&n.play()}),t.find('iframe[src*="youtube.com/embed/"]').each(function(){var n=e(this).get(0);n.hasAttribute("data-autoplay")&&Qe(n),n.onload=function(){n.hasAttribute("data-autoplay")&&Qe(n)}})}function Qe(e){e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*")}function Ge(n){var t=Je(n);t.find("video, audio").each(function(){var n=e(this).get(0);n.hasAttribute("data-keepplaying")||"function"!=typeof n.pause||n.pause()}),t.find('iframe[src*="youtube.com/embed/"]').each(function(){var n=e(this).get(0);/youtube\.com\/embed\//.test(e(this).attr("src"))&&!n.hasAttribute("data-keepplaying")&&e(this).get(0).contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")})}function Je(n){var t=n.find(A);return t.length&&(n=e(t)),n}function Ze(){var e=n.location.hash.replace("#","").split("/"),t=decodeURIComponent(e[0]),o=decodeURIComponent(e[1]);t&&(V.animateAnchor?Mn(t,o):ie(t,o))}function $e(){if(!It&&!V.lockAnchors){var e=n.location.hash.replace("#","").split("/"),t=decodeURIComponent(e[0]),o=decodeURIComponent(e[1]),i=void 0===ot,a=void 0===ot&&void 0===o&&!rt;t.length&&(t&&t!==ot&&!i||a||!rt&&it!=o)&&Mn(t,o)}}function _e(n){clearTimeout(yt);var t=e(":focus");if(!t.is("textarea")&&!t.is("input")&&!t.is("select")&&"true"!==t.attr("contentEditable")&&""!==t.attr("contentEditable")&&V.keyboardScrolling&&V.autoScrolling){var o=n.which,i=[40,38,32,33,34];e.inArray(o,i)>-1&&n.preventDefault(),at=n.ctrlKey,yt=setTimeout(function(){cn(n)},150)}}function en(){e(this).prev().trigger("click")}function nn(e){ht&&(at=e.ctrlKey)}function tn(e){2==e.which&&(Bt=e.pageY,dt.on("mousemove",dn))}function on(e){2==e.which&&dt.off("mousemove")}function an(){var n=e(this).closest(m);e(this).hasClass(F)?gt.m.left&&re(n):gt.m.right&&le(n)}function ln(){ht=!1,at=!1}function rn(n){n.preventDefault();var t=e(this).parent().index();Fe(e(m).eq(t))}function sn(n){n.preventDefault();var t=e(this).closest(m).find(O);fn(t,t.find(E).eq(e(this).closest("li").index()))}function cn(n){var t=n.shiftKey;if(pt||!([37,39].indexOf(n.which)<0))switch(n.which){case 38:case 33:gt.k.up&&te();break;case 32:if(t&&gt.k.up){te();break}case 40:case 34:gt.k.down&&oe();break;case 36:gt.k.up&&ae(1);break;case 35:gt.k.down&&ae(e(m).length);break;case 37:gt.k.left&&re();break;case 39:gt.k.right&&le();break;default:return}}function dn(e){pt&&(e.pageY<Bt&&gt.m.up?te():e.pageY>Bt&&gt.m.down&&oe()),Bt=e.pageY}function fn(n,t,o){var i=n.closest(m),a={slides:n,destiny:t,direction:o,destinyPos:t.position(),slideIndex:t.index(),section:i,sectionIndex:i.index(m),anchorLink:i.data("anchor"),slidesNav:i.find(D),slideAnchor:zn(t),prevSlide:i.find(A),prevSlideIndex:i.find(A).index(),localIsResizing:ut};if(a.xMovement=Cn(a.prevSlideIndex,a.slideIndex),a.localIsResizing||(pt=!1),V.onSlideLeave&&!a.localIsResizing&&"none"!==a.xMovement&&e.isFunction(V.onSlideLeave)&&!1===V.onSlideLeave.call(a.prevSlide,a.anchorLink,a.sectionIndex+1,a.prevSlideIndex,a.xMovement,a.slideIndex))return void(rt=!1);t.addClass(u).siblings().removeClass(u),a.localIsResizing||(Ge(a.prevSlide),Xe(t)),!V.loopHorizontal&&V.controlArrows&&(i.find(U).toggle(0!==a.slideIndex),i.find(Y).toggle(!t.is(":last-child"))),i.hasClass(u)&&!a.localIsResizing&&Hn(a.slideIndex,a.slideAnchor,a.anchorLink,a.sectionIndex),hn(n,a,!0)}function un(n){pn(n.slidesNav,n.slideIndex),n.localIsResizing||(e.isFunction(V.afterSlideLoad)&&V.afterSlideLoad.call(n.destiny,n.anchorLink,n.sectionIndex+1,n.slideAnchor,n.slideIndex),pt=!0,Ke(n.destiny)),rt=!1}function hn(e,n,t){var i=n.destinyPos;if(V.css3){var a="translate3d(-"+o.round(i.left)+"px, 0px, 0px)";mn(e.find(H)).css(Kn(a)),St=setTimeout(function(){t&&un(n)},V.scrollingSpeed,V.easing)}else e.animate({scrollLeft:o.round(i.left)},V.scrollingSpeed,V.easing,function(){t&&un(n)})}function pn(e,n){e.find(h).removeClass(u),e.find("li").eq(n).find("a").addClass(u)}function vn(){if(gn(),st){var n=e(t.activeElement);if(!n.is("textarea")&&!n.is("input")&&!n.is("select")){var i=j.height();o.abs(i-zt)>20*o.max(zt,i)/100&&(se(!0),zt=i)}}else clearTimeout(mt),mt=setTimeout(function(){se(!0)},350)}function gn(){var e=V.responsive||V.responsiveWidth,n=V.responsiveHeight,t=e&&j.outerWidth()<e,o=n&&j.height()<n;e&&n?ce(t||o):e?ce(t):n&&ce(o)}function mn(e){var n="all "+V.scrollingSpeed+"ms "+V.easingcss3;return e.removeClass(s),e.css({"-webkit-transition":n,transition:n})}function wn(e){return e.addClass(s)}function Sn(n,t){V.navigation&&(e(T).find(h).removeClass(u),n?e(T).find('a[href="#'+n+'"]').addClass(u):e(T).find("li").eq(t).find("a").addClass(u))}function bn(n){V.menu&&(e(V.menu).find(h).removeClass(u),e(V.menu).find('[data-menuanchor="'+n+'"]').addClass(u))}function xn(e,n){bn(e),Sn(e,n)}function yn(n){var t=e(w).index(m),o=n.index(m);return t==o?"none":t>o?"up":"down"}function Cn(e,n){return e==n?"none":e>n?"left":"right"}function Tn(e){if(!e.hasClass("fp-noscroll")){e.css("overflow","hidden");var n,t=V.scrollOverflowHandler,o=t.wrapContent(),i=e.closest(m),a=t.scrollable(e);a.length?n=t.scrollHeight(e):(n=e.get(0).scrollHeight,V.verticalCentered&&(n=e.find(y).get(0).scrollHeight));var l=ft-parseInt(i.css("padding-bottom"))-parseInt(i.css("padding-top"));n>l?a.length?t.update(e,l):(V.verticalCentered?e.find(y).wrapInner(o):e.wrapInner(o),t.create(e,l)):t.remove(e),e.css("overflow","")}}function kn(e){e.hasClass(B)||e.addClass(B).wrapInner('<div class="'+x+'" style="height:'+In(e)+'px;" />')}function In(e){var n=ft;if(V.paddingTop||V.paddingBottom){var t=e;t.hasClass(g)||(t=e.closest(m));var o=parseInt(t.css("padding-top"))+parseInt(t.css("padding-bottom"));n=ft-o}return n}function Ln(e,n){n?mn(dt):wn(dt),dt.css(Kn(e)),setTimeout(function(){dt.removeClass(s)},10)}function En(n){if(!n)return[];var t=dt.find(m+'[data-anchor="'+n+'"]');return t.length||(t=e(m).eq(n-1)),t}function An(e,n){var t=n.find(O),o=t.find(E+'[data-anchor="'+e+'"]');return o.length||(o=t.find(E).eq(e)),o}function Mn(e,n){var t=En(e);t.length&&(void 0===n&&(n=0),e===ot||t.hasClass(u)?On(t,n):Fe(t,function(){On(t,n)}))}function On(e,n){if(void 0!==n){var t=e.find(O),o=An(n,e);o.length&&fn(t,o)}}function Rn(e,n){e.append('<div class="'+z+'"><ul></ul></div>');var t=e.find(D);t.addClass(V.slidesNavPosition);for(var o=0;o<n;o++)t.find("ul").append('<li><a href="#"><span></span></a></li>');t.css("margin-left","-"+t.width()/2+"px"),t.find("li").first().find("a").addClass(u)}function Hn(e,n,t,o){var i="";V.anchors.length&&!V.lockAnchors&&(e?(void 0!==t&&(i=t),void 0===n&&(n=e),it=n,Bn(i+"/"+n)):void 0!==e?(it=n,Bn(t)):Bn(t)),Dn()}function Bn(e){if(V.recordHistory)location.hash=e;else if(st||ct)n.history.replaceState(i,i,"#"+e);else{var t=n.location.href.split("#")[0];n.location.replace(t+"#"+e)}}function zn(e){var n=e.data("anchor"),t=e.index();return void 0===n&&(n=t),n}function Dn(){var n=e(w),t=n.find(A),o=zn(n),i=zn(t),a=String(o);t.length&&(a=a+"-"+i),a=a.replace("/","-").replace("#","");var l=new RegExp("\\b\\s?"+f+"-[^\\s]+\\b","g");nt[0].className=nt[0].className.replace(l,""),nt.addClass(f+"-"+a)}function Pn(){var e,o=t.createElement("p"),a={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};t.body.insertBefore(o,null);for(var l in a)o.style[l]!==i&&(o.style[l]="translate3d(1px,1px,1px)",e=n.getComputedStyle(o).getPropertyValue(a[l]));return t.body.removeChild(o),e!==i&&e.length>0&&"none"!==e}function qn(){t.addEventListener?(t.removeEventListener("mousewheel",ze,!1),t.removeEventListener("wheel",ze,!1),t.removeEventListener("MozMousePixelScroll",ze,!1)):t.detachEvent("onmousewheel",ze)}function Fn(){var e,o="";n.addEventListener?e="addEventListener":(e="attachEvent",o="on");var a="onwheel"in t.createElement("div")?"wheel":t.onmousewheel!==i?"mousewheel":"DOMMouseScroll";"DOMMouseScroll"==a?t[e](o+"MozMousePixelScroll",ze,!1):t[e](o+a,ze,!1)}function Vn(){dt.on("mousedown",tn).on("mouseup",on)}function Wn(){dt.off("mousedown",tn).off("mouseup",on)}function Un(){(st||ct)&&(V.autoScrolling&&nt.off(Tt.touchmove).on(Tt.touchmove,Ae),e(l).off(Tt.touchstart).on(Tt.touchstart,He).off(Tt.touchmove).on(Tt.touchmove,Me))}function Yn(){(st||ct)&&e(l).off(Tt.touchstart).off(Tt.touchmove)}function jn(e){var n=[];return n.y=void 0!==e.pageY&&(e.pageY||e.pageX)?e.pageY:e.touches[0].pageY,n.x=void 0!==e.pageX&&(e.pageY||e.pageX)?e.pageX:e.touches[0].pageX,ct&&Re(e)&&V.scrollBar&&(n.y=e.touches[0].pageY,n.x=e.touches[0].pageX),n}function Nn(e,n){J(0,"internal"),void 0!==n&&(ut=!0),fn(e.closest(O),e),void 0!==n&&(ut=!1),J(kt.scrollingSpeed,"internal")}function Xn(e){var n=o.round(e);V.css3&&V.autoScrolling&&!V.scrollBar?Ln("translate3d(0px, -"+n+"px, 0px)",!1):V.autoScrolling&&!V.scrollBar?dt.css("top",-n):et.scrollTop(n)}function Kn(e){return{"-webkit-transform":e,"-moz-transform":e,"-ms-transform":e,transform:e}}function Qn(e,n,t){switch(n){case"up":gt[t].up=e;break;case"down":gt[t].down=e;break;case"left":gt[t].left=e;break;case"right":gt[t].right=e;break;case"all":"m"==t?ee(e):ne(e)}}function Gn(n){Q(!1,"internal"),ee(!1),ne(!1),dt.addClass(c),clearTimeout(St),clearTimeout(wt),clearTimeout(mt),clearTimeout(bt),clearTimeout(xt),j.off("scroll",Te).off("hashchange",$e).off("resize",vn),N.off("click touchstart",T+" a").off("mouseenter",T+" li").off("mouseleave",T+" li").off("click touchstart",P).off("mouseover",V.normalScrollElements).off("mouseout",V.normalScrollElements),e(m).off("click touchstart",q),clearTimeout(St),clearTimeout(wt),n&&Jn()}function Jn(){Xn(0),dt.find("img[data-src], source[data-src], audio[data-src], iframe[data-src]").each(function(){Ne(e(this),"src")}),dt.find("img[data-srcset]").each(function(){Ne(e(this),"srcset")}),e(T+", "+D+", "+q).remove(),e(m).css({height:"","background-color":"",padding:""}),e(E).css({width:""}),dt.css({height:"",position:"","-ms-touch-action":"","touch-action":""}),et.css({overflow:"",height:""}),e("html").removeClass(d),nt.removeClass(r),e.each(nt.get(0).className.split(/\s+/),function(e,n){0===n.indexOf(f)&&nt.removeClass(n)}),e(m+", "+E).each(function(){V.scrollOverflowHandler.remove(e(this)),e(this).removeClass(B+" "+u)}),wn(dt),dt.find(y+", "+H+", "+O).each(function(){e(this).replaceWith(this.childNodes)}),dt.css({"-webkit-transition":"none",transition:"none"}),et.scrollTop(0);var n=[g,L,R];e.each(n,function(n,t){e("."+t).removeClass(t)})}function Zn(e,n,t){V[e]=n,"internal"!==t&&(kt[e]=n)}function $n(){var n=["fadingEffect","continuousHorizontal","scrollHorizontally","interlockedSlides","resetSliders","responsiveSlides","offsetSections","dragAndMove","scrollOverflowReset","parallax"];if(e("html").hasClass(d))return void _n("error","Fullpage.js can only be initialized once and you are doing it multiple times!");V.continuousVertical&&(V.loopTop||V.loopBottom)&&(V.continuousVertical=!1,_n("warn","Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),V.scrollBar&&V.scrollOverflow&&_n("warn","Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox"),!V.continuousVertical||!V.scrollBar&&V.autoScrolling||(V.continuousVertical=!1,_n("warn","Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),e.each(n,function(e,n){V[n]&&_n("warn","fullpage.js extensions require jquery.fullpage.extensions.min.js file instead of the usual jquery.fullpage.js. Requested: "+n)}),e.each(V.anchors,function(n,t){var o=N.find("[name]").filter(function(){return e(this).attr("name")&&e(this).attr("name").toLowerCase()==t.toLowerCase()}),i=N.find("[id]").filter(function(){return e(this).attr("id")&&e(this).attr("id").toLowerCase()==t.toLowerCase()});(i.length||o.length)&&(_n("error","data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."),i.length&&_n("error",'"'+t+'" is is being used by another element `id` property'),o.length&&_n("error",'"'+t+'" is is being used by another element `name` property'))})}function _n(e,n){console&&console[e]&&console[e]("fullPage: "+n)}if(e("html").hasClass(d))return void $n();var et=e("html, body"),nt=e("body"),tt=e.fn.fullpage;V=e.extend({menu:!1,anchors:[],lockAnchors:!1,navigation:!1,navigationPosition:"right",navigationTooltips:[],showActiveTooltip:!1,slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,hybrid:!1,css3:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,fitToSectionDelay:1e3,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,continuousHorizontal:!1,scrollHorizontally:!1,interlockedSlides:!1,dragAndMove:!1,offsetSections:!1,resetSliders:!1,fadingEffect:!1,normalScrollElements:null,scrollOverflow:!1,scrollOverflowReset:!1,scrollOverflowHandler:K,scrollOverflowOptions:null,touchSensitivity:5,normalScrollElementTouchThreshold:5,bigSectionsDestination:null,keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,controlArrows:!0,controlArrowColor:"#fff",verticalCentered:!0,sectionsColor:[],paddingTop:0,paddingBottom:0,fixedElements:null,responsive:0,responsiveWidth:0,responsiveHeight:0,responsiveSlides:!1,parallax:!1,parallaxOptions:{type:"reveal",percentage:62,property:"translate"},sectionSelector:".section",slideSelector:".slide",afterLoad:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null,afterResponsive:null,lazyLoading:!0},V);var ot,it,at,lt,rt=!1,st=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),ct="ontouchstart"in n||navigator.msMaxTouchPoints>0||navigator.maxTouchPoints,dt=e(this),ft=j.height(),ut=!1,ht=!0,pt=!0,vt=[],gt={};gt.m={up:!0,down:!0,left:!0,right:!0},gt.k=e.extend(!0,{},gt.m);var mt,wt,St,bt,xt,yt,Ct=function(){return n.PointerEvent?{down:"pointerdown",move:"pointermove"}:{down:"MSPointerDown",move:"MSPointerMove"}}(),Tt={touchmove:"ontouchmove"in n?"touchmove":Ct.move,touchstart:"ontouchstart"in n?"touchstart":Ct.down},kt=e.extend(!0,{},V);$n(),X.click=ct,X=e.extend(X,V.scrollOverflowOptions),e.extend(e.easing,{easeInOutCubic:function(e,n,t,o,i){return(n/=i/2)<1?o/2*n*n*n+t:o/2*((n-=2)*n*n+2)+t}}),e(this).length&&(tt.setAutoScrolling=Q,tt.setRecordHistory=G,tt.setScrollingSpeed=J,tt.setFitToSection=Z,tt.setLockAnchors=$,tt.setMouseWheelScrolling=_,tt.setAllowScrolling=ee,tt.setKeyboardScrolling=ne,tt.moveSectionUp=te,tt.moveSectionDown=oe,tt.silentMoveTo=ie,tt.moveTo=ae,tt.moveSlideRight=le,tt.moveSlideLeft=re,tt.fitToSection=ke,tt.reBuild=se,tt.setResponsive=ce,tt.destroy=Gn,function(){V.css3&&(V.css3=Pn()),V.scrollBar=V.scrollBar||V.hybrid,de(),fe(),ee(!0),Q(V.autoScrolling,"internal"),gn(),Dn(),"complete"===t.readyState&&Ze(),j.on("load",Ze)}(),function(){j.on("scroll",Te).on("hashchange",$e).blur(ln).resize(vn),N.keydown(_e).keyup(nn).on("click touchstart",T+" a",rn).on("click touchstart",P,sn).on("click",I,en),e(m).on("click touchstart",q,an),V.normalScrollElements&&(N.on("mouseenter",V.normalScrollElements,function(){_(!1)}),N.on("mouseleave",V.normalScrollElements,function(){_(!0)}))}());var It=!1,Lt=0,Et=0,At=0,Mt=0,Ot=0,Rt=(new Date).getTime(),Ht=0,Bt=0,zt=ft},"undefined"!=typeof IScroll&&(IScroll.prototype.wheelOn=function(){this.wrapper.addEventListener("wheel",this),this.wrapper.addEventListener("mousewheel",this),this.wrapper.addEventListener("DOMMouseScroll",this)},IScroll.prototype.wheelOff=function(){this.wrapper.removeEventListener("wheel",this),this.wrapper.removeEventListener("mousewheel",this),this.wrapper.removeEventListener("DOMMouseScroll",this)});var K={refreshId:null,iScrollInstances:[],toggleWheel:function(n){e(w).find(".fp-scrollable").each(function(){var t=e(this).data("iscrollInstance");void 0!==t&&t&&(n?t.wheelOn():t.wheelOff())})},onLeave:function(){K.toggleWheel(!1)},beforeLeave:function(){K.onLeave()},afterLoad:function(){K.toggleWheel(!0)},create:function(n,t){var o=n.find(".fp-scrollable");o.height(t),o.each(function(){var n=e(this),t=n.data("iscrollInstance");t&&e.each(K.iScrollInstances,function(){e(this).destroy()}),t=new IScroll(n.get(0),X),K.iScrollInstances.push(t),t.wheelOff(),n.data("iscrollInstance",t)})},isScrolled:function(e,n){var t=n.data("iscrollInstance");return!t||("top"===e?t.y>=0&&!n.scrollTop():"bottom"===e?0-t.y+n.scrollTop()+1+n.innerHeight()>=n[0].scrollHeight:void 0)},scrollable:function(e){return e.find(O).length?e.find(A).find(".fp-scrollable"):e.find(".fp-scrollable")},scrollHeight:function(e){return e.find(".fp-scrollable").children().first().get(0).scrollHeight},remove:function(e){var n=e.find(".fp-scrollable");if(n.length){n.data("iscrollInstance").destroy(),n.data("iscrollInstance",null)}e.find(".fp-scrollable").children().first().children().first().unwrap().unwrap()},update:function(n,t){clearTimeout(K.refreshId),K.refreshId=setTimeout(function(){e.each(K.iScrollInstances,function(){e(this).get(0).refresh()})},150),n.find(".fp-scrollable").css("height",t+"px").parent().css("height",t+"px")},wrapContent:function(){return'<div class="fp-scrollable"><div class="fp-scroller"></div></div>'}}});