(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{156:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(163);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement("h1",null,"Hi! I'm building a fake Gatsby site as part of a tutorial!"),r.a.createElement("p",null,"What do I like to do? Lots of course but definitely enjoy building websites."))}},158:function(e,t,n){var a;e.exports=(a=n(160))&&a.default||a},159:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(6),i=n.n(o),l=n(40),s=n.n(l);n.d(t,"a",function(){return s.a});n(158),r.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},160:function(e,t,n){"use strict";n.r(t);n(41);var a=n(0),r=n.n(a),o=n(6),i=n.n(o),l=n(64),s=function(e){var t=e.location,n=e.pageResources;return n?r.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json)):null};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=s},161:function(e,t,n){"use strict";n(0)},162:function(e,t,n){(function(n){var a,r;window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){var t,n=(this.document||this.ownerDocument).querySelectorAll(e),a=this;do{for(t=n.length;0<=--t&&n.item(t)!==a;);}while(t<0&&(a=a.parentElement));return a}),function(){function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n}"function"!=typeof window.CustomEvent&&(e.prototype=window.Event.prototype,window.CustomEvent=e)}(),function(){for(var e=0,t=["ms","moz","webkit","o"],n=0;n<t.length&&!window.requestAnimationFrame;++n)window.requestAnimationFrame=window[t[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t[n]+"CancelAnimationFrame"]||window[t[n]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,n){var a=(new Date).getTime(),r=Math.max(0,16-(a-e)),o=window.setTimeout(function(){t(a+r)},r);return e=a+r,o}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})}(),r=void 0!==n?n:"undefined"!=typeof window?window:this,void 0===(a=function(){return function(e){"use strict";var t={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},n=function(){var e={};return Array.prototype.forEach.call(arguments,function(t){for(var n in t){if(!t.hasOwnProperty(n))return;e[n]=t[n]}}),e},a=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),a=n.length,r=-1,o="",i=n.charCodeAt(0);++r<a;){if(0===(t=n.charCodeAt(r)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");o+=1<=t&&t<=31||127==t||0===r&&48<=t&&t<=57||1===r&&48<=t&&t<=57&&45===i?"\\"+t.toString(16)+" ":128<=t||45===t||95===t||48<=t&&t<=57||65<=t&&t<=90||97<=t&&t<=122?n.charAt(r):"\\"+n.charAt(r)}return"#"+o},r=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},o=function(t,n,a,r){if(n.emitEvents&&"function"==typeof e.CustomEvent){var o=new CustomEvent(t,{bubbles:!0,detail:{anchor:a,toggle:r}});document.dispatchEvent(o)}};return function(i,l){var s,c,u,m,d={cancelScroll:function(e){cancelAnimationFrame(m),m=null,e||o("scrollCancel",s)},animateScroll:function(a,i,l){d.cancelScroll();var c=n(s||t,l||{}),h="[object Number]"===Object.prototype.toString.call(a),p=h||!a.tagName?null:a;if(h||p){var f=e.pageYOffset;c.header&&!u&&(u=document.querySelector(c.header));var g,E,w,y,v,b,S,A,k=function(t){return t?(n=t,parseInt(e.getComputedStyle(n).height,10)+t.offsetTop):0;var n}(u),I=h?a:function(t,n,a,o){var i=0;if(t.offsetParent)for(;i+=t.offsetTop,t=t.offsetParent;);return i=Math.max(i-n-a,0),o&&(i=Math.min(i,r()-e.innerHeight)),i}(p,k,parseInt("function"==typeof c.offset?c.offset(a,i):c.offset,10),c.clip),C=I-f,x=r(),O=0,T=(g=C,w=(E=c).speedAsDuration?E.speed:Math.abs(g/1e3*E.speed),E.durationMax&&w>E.durationMax?E.durationMax:E.durationMin&&w<E.durationMin?E.durationMin:parseInt(w,10)),q=function(t){var n,r,l;y||(y=t),O+=t-y,b=f+C*(r=v=1<(v=0===T?0:O/T)?1:v,"easeInQuad"===(n=c).easing&&(l=r*r),"easeOutQuad"===n.easing&&(l=r*(2-r)),"easeInOutQuad"===n.easing&&(l=r<.5?2*r*r:(4-2*r)*r-1),"easeInCubic"===n.easing&&(l=r*r*r),"easeOutCubic"===n.easing&&(l=--r*r*r+1),"easeInOutCubic"===n.easing&&(l=r<.5?4*r*r*r:(r-1)*(2*r-2)*(2*r-2)+1),"easeInQuart"===n.easing&&(l=r*r*r*r),"easeOutQuart"===n.easing&&(l=1- --r*r*r*r),"easeInOutQuart"===n.easing&&(l=r<.5?8*r*r*r*r:1-8*--r*r*r*r),"easeInQuint"===n.easing&&(l=r*r*r*r*r),"easeOutQuint"===n.easing&&(l=1+--r*r*r*r*r),"easeInOutQuint"===n.easing&&(l=r<.5?16*r*r*r*r*r:1+16*--r*r*r*r*r),n.customEasing&&(l=n.customEasing(r)),l||r),e.scrollTo(0,Math.floor(b)),function(t,n){var r,l,s,u=e.pageYOffset;if(t==n||u==n||(f<n&&e.innerHeight+u)>=x)return d.cancelScroll(!0),l=n,s=h,0===(r=a)&&document.body.focus(),s||(r.focus(),document.activeElement!==r&&(r.setAttribute("tabindex","-1"),r.focus(),r.style.outline="none"),e.scrollTo(0,l)),o("scrollStop",c,a,i),!(m=y=null)}(b,I)||(m=e.requestAnimationFrame(q),y=t)};0===e.pageYOffset&&e.scrollTo(0,0),S=a,A=c,h||history.pushState&&A.updateURL&&history.pushState({smoothScroll:JSON.stringify(A),anchor:S.id},document.title,S===document.documentElement?"#top":"#"+S.id),"matchMedia"in e&&e.matchMedia("(prefers-reduced-motion)").matches?e.scrollTo(0,Math.floor(I)):(o("scrollStart",c,a,i),d.cancelScroll(!0),e.requestAnimationFrame(q))}}},h=function(t){if(!t.defaultPrevented&&!(0!==t.button||t.metaKey||t.ctrlKey||t.shiftKey)&&"closest"in t.target&&(c=t.target.closest(i))&&"a"===c.tagName.toLowerCase()&&!t.target.closest(s.ignore)&&c.hostname===e.location.hostname&&c.pathname===e.location.pathname&&/#/.test(c.href)){var n,r=a(c.hash);if("#"===r){if(!s.topOnEmptyHash)return;n=document.documentElement}else n=document.querySelector(r);(n=n||"#top"!==r?n:document.documentElement)&&(t.preventDefault(),function(t){if(history.replaceState&&t.updateURL&&!history.state){var n=e.location.hash;n=n||"",history.replaceState({smoothScroll:JSON.stringify(t),anchor:n||e.pageYOffset},document.title,n||e.location.href)}}(s),d.animateScroll(n,c))}},p=function(e){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(s)){var t=history.state.anchor;"string"==typeof t&&t&&!(t=document.querySelector(a(history.state.anchor)))||d.animateScroll(t,null,{updateURL:!1})}};return d.destroy=function(){s&&(document.removeEventListener("click",h,!1),e.removeEventListener("popstate",p,!1),d.cancelScroll(),m=u=c=s=null)},function(){if(!("querySelector"in document&&"addEventListener"in e&&"requestAnimationFrame"in e&&"closest"in e.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";d.destroy(),s=n(t,l||{}),u=s.header?document.querySelector(s.header):null,document.addEventListener("click",h,!1),s.updateURL&&s.popstate&&e.addEventListener("popstate",p,!1)}(),d}}(r)}.apply(t,[]))||(e.exports=a)}).call(this,n(95))},163:function(e,t,n){"use strict";var a=n(0),r=n.n(a);n(159),n(161),n(164);"undefined"!=typeof window&&n(162)('a[href*="#"]');t.a=function(e){e.children;return r.a.createElement("body",null,r.a.createElement("div",{class:"header",style:{minHeight:"20rem"}},r.a.createElement("header",{style:{margin:"0 auto",maxWidth:"800px",padding:"1rem 1rem"}},r.a.createElement("h1",null,"rizbizkitz"),r.a.createElement("img",{src:"rizbizkits-logo.png",class:"logo"}))),r.a.createElement("div",{class:"wrapper subtitle purple-bg",style:{margin:"0 auto",maxWidth:"800px",padding:"1rem 1rem"}},r.a.createElement("h2",null,"sup? ",r.a.createElement("span",{class:"highlight"},"I'm riz."),r.a.createElement("br",null),"web designin' + web devin'."),r.a.createElement("ul",{style:{listStyle:"none"}},r.a.createElement("li",null,r.a.createElement("a",{href:"#grad"},"final year comp sci student at NTU 👈")),r.a.createElement("li",null,r.a.createElement("a",{href:"#jh"},"on a summer ",r.a.createElement("span",{class:"highlight"},"design internship")," at JH 👈")),r.a.createElement("li",null,r.a.createElement("a",{href:"#cursor"},"previously on placement at Cursor 👈 ")),r.a.createElement("li",null,r.a.createElement("a",{href:"#pfnotts"},"co-founder of Project Function 👈 ")),r.a.createElement("li",null,r.a.createElement("a",{href:"#speaking"},"public speaker and poet 👈")))),r.a.createElement("div",{class:"wrapper purple-bg",style:{margin:"0 auto",maxWidth:"800px",padding:"1rem 1rem"}},r.a.createElement("div",{id:"jh",class:"panel jh",style:{padding:"1rem 1rem"}},r.a.createElement("div",{class:"jh-brand"},r.a.createElement("h2",null,r.a.createElement("span",{class:"highlight"},"JH and a Design-fueled Summer")),r.a.createElement("h3",null,"I have the privilege of joining Notts-based eCommerce agency, JH, for an exciting 3 months, working in mentorship of the Design Team. As a first foray into a full designer role, my full thoughts on this are unravelled here."))),r.a.createElement("div",{id:"pfnotts",class:"panel pfnotts",style:{padding:"1rem 1rem"}},r.a.createElement("div",{class:"pfnotts-brand"},r.a.createElement("h2",null,r.a.createElement("span",{class:"highlight"},"Origins: Co-founding Project Function")),r.a.createElement("h3",null,"Project Function is a platform for providing free web developemt courses to under-represented folks, since its inception in Jan, 2019. As a co-founder of this initiative, I am proud of laying the groundwork in creating a welcoming and learning environment."),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("a",{href:"https://projectfunction.io"},"Visit the #PFSite."))),r.a.createElement("div",{id:"cursor",class:"panel cursor",style:{padding:"1rem 1rem"}},r.a.createElement("div",{class:"cursor-brand"},r.a.createElement("h2",null,r.a.createElement("span",{class:"highlight"},"The time and experience at Cursor")),r.a.createElement("h3",null,"For my placement year as part of my degree, I chose to work at Cursor as a Junior Web Designer/Developer in Lincoln for a year, commuting from Notts. I've aquired and polished skills, new and old. Read my attempt at summarising my wonderful time at Cursor, here."))),r.a.createElement("div",{id:"grad",class:"panel grad black-bg",style:{padding:"1rem 1rem"}},r.a.createElement("h2",null,"Days to Graduation:"),r.a.createElement("h3",null,"26/10/2020 minus Today."),r.a.createElement("h3",{class:"hashtag text-right"},"#Math 🎓"))),r.a.createElement("div",{id:"speaking",class:"white-bg full-banner"},r.a.createElement("div",{class:"wrapper",style:{margin:"0 auto",maxWidth:"800px",padding:"1rem 1rem"}},r.a.createElement("img",{src:"riz-banner.jpg",class:"riz"}),r.a.createElement("div",{class:"panel extra"},r.a.createElement("h2",null,"Speakin' + Poetin'"),r.a.createElement("h3",null,"After a 5-min Lightning Talk at ",r.a.createElement("a",{href:"https://www.technottingham.com"},"Tech Nottingham")," in 2016 on Club Penguin, I've gradually built-up my Speaking experience. You might have found me infront of the Women in Tech Nottingham audience (reading a poem penned for the occasion ",r.a.createElement("a",{href:"https://www.technottingham.com/news/2018/7/31/a-poem-by-rizwana"},"once")," and then ",r.a.createElement("a",{href:"https://www.instagram.com/p/BuwaHL_HV0a/"},"again"),"), or opening the brilliant ",r.a.createElement("a",{href:"https://newadventuresconf.com"},"New Adventures 2019")," conference with a poem on",r.a.createElement("a",{href:"https://newadventuresconf.com/2019/NA2019-mag.pdf"}," Wonder"),", overlooking a crowd that could fill multiple buses. "),r.a.createElement("br",null),r.a.createElement("h3",null,"All in all, Speaking gives me great joy especially when I can bring together my poetry and wit, to form talks that people can laugh or relate to. If that sounds like something your meetup/conference/stage could do with, I'm happy to discuss over pretend coffee and an email."),r.a.createElement("br",null)),r.a.createElement("div",{class:"panel yellow-bg",style:{padding:"1rem 1rem"}},r.a.createElement("h2",{class:"m-0 p-0"},"Upcoming Speaking Deet:"),r.a.createElement("br",null),r.a.createElement("h3",{class:"m-0 p-0"},r.a.createElement("strong",null,"July 4th, 2019:"),r.a.createElement("br",null),r.a.createElement("span",{class:"highlight"},r.a.createElement("a",{class:"https://www.technottingham.com/events/wit-july-2019"}," No Time To Spare: Spark, Tinder, Breeze"))," for Women In Tech, Nottingham")))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-fcc1741d9ed4335f76b1.js.map