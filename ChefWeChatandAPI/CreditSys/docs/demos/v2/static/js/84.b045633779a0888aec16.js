webpackJsonp([84],{1664:function(t,e,n){"use strict";var i=n(1665),r=n(61),s=n(63),a=n(726);e.a={components:{Rater:i.a,Group:r.a,Cell:s.a,Range:a.a},data:function(){return{data1:0,data2:5,data3:5,data4:3,data41:3.7,data42:3.5,data5:3,data6:3}}}},1665:function(t,e,n){"use strict";function i(t){n(1666)}var r=n(1668),s=n(1669),a=n(0),o=i,l=a(r.a,s.a,o,null,null);e.a=l.exports},1666:function(t,e,n){var i=n(1667);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(227)("30b773d4",i,!0)},1667:function(t,e,n){e=t.exports=n(226)(),e.push([t.i,"\n.vux-rater {\r\n  text-align: left;\r\n  display: inline-block;\r\n  line-height: normal;\n}\n.vux-rater a {\r\n  display: inline-block;\r\n  text-align: center;\r\n  cursor: pointer;\r\n  color: #ccc;\n}\n.vux-rater a:last-child {\r\n  padding-right: 2px!important;\r\n  margin-right: 0px!important;\n}\n.vux-rater a:hover {\r\n  color: #ffdd99;\n}\n.vux-rater a.is-disabled {\r\n  color: #ccc !important;\r\n  cursor: not-allowed;\n}\n.vux-rater-box {\r\n  position: relative;\n}\n.vux-rater-inner {\r\n  position: relative;\r\n  display: inline-block;\n}\n.vux-rater-outer {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  display: inline-block;\r\n  overflow: hidden;\n}\r\n",""])},1668:function(t,e,n){"use strict";e.a={name:"rater",created:function(){this.currentValue=this.value},mounted:function(){this.updateStyle()},props:{max:{type:Number,default:5},value:{type:Number,default:0},disabled:Boolean,star:{type:String,default:"★"},activeColor:{type:String,default:"#fc6"},margin:{type:Number,default:2},fontSize:{type:Number,default:25}},computed:{sliceValue:function(){var t=this.currentValue.toFixed(2).split(".");return 1===t.length?[t[0],0]:t},cutIndex:function(){return 1*this.sliceValue[0]},cutPercent:function(){return 1*this.sliceValue[1]}},methods:{handleClick:function(t,e){this.disabled&&!e||(this.currentValue===t+1?(this.currentValue=t,this.updateStyle()):this.currentValue=t+1)},updateStyle:function(){for(var t=0;t<this.max;t++)t<=this.currentValue-1?this.$set(this.colors,t,this.activeColor):this.$set(this.colors,t,"#ccc")}},data:function(){return{colors:[],currentValue:0}},watch:{currentValue:function(t){this.updateStyle(),this.$emit("input",t)},value:function(t){this.currentValue=t}}}},1669:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-rater"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],staticStyle:{display:"none"},domProps:{value:t.currentValue},on:{input:function(e){e.target.composing||(t.currentValue=e.target.value)}}}),t._v(" "),t._l(t.max,function(e){return n("a",{staticClass:"vux-rater-box",class:{"is-active":t.currentValue>e-1},style:{color:t.colors&&t.colors[e-1]?t.colors[e-1]:"#ccc",marginRight:t.margin+"px",fontSize:t.fontSize+"px",width:t.fontSize+"px",height:t.fontSize+"px",lineHeight:t.fontSize+"px"},on:{click:function(n){t.handleClick(e-1)}}},[n("span",{staticClass:"vux-rater-inner"},[t._v(t._s(t.star)),t.cutPercent>0&&t.cutIndex===e-1?n("span",{staticClass:"vux-rater-outer",style:{color:t.activeColor,width:t.cutPercent+"%"}},[t._v(t._s(t.star))]):t._e()])])})],2)},r=[],s={render:i,staticRenderFns:r};e.a=s},1670:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("group",{attrs:{title:"Normal Usage"}},[n("cell",{attrs:{title:"set default score = 5","inline-desc":"total 5 stars if not specified"}},[n("rater",{slot:"value",model:{value:t.data3,callback:function(e){t.data3=e},expression:"data3"}})],1),t._v(" "),n("cell",{attrs:{title:"change color"}},[n("rater",{attrs:{max:6,"active-color":"#04BE02"},slot:"value",model:{value:t.data3,callback:function(e){t.data3=e},expression:"data3"}})],1)],1),t._v(" "),n("group",{attrs:{title:"disabled = true"}},[n("cell",{attrs:{title:"Your history score"}},[n("rater",{attrs:{disabled:""},slot:"value",model:{value:t.data4,callback:function(e){t.data4=e},expression:"data4"}})],1),t._v(" "),n("cell",{attrs:{title:"Decimal score "+t.data41}},[n("rater",{attrs:{"active-color":"#04BE02",disabled:""},slot:"value",model:{value:t.data41,callback:function(e){t.data41=e},expression:"data41"}})],1),t._v(" "),n("cell",{attrs:{title:"custom font-size(15px)"}},[n("rater",{attrs:{"active-color":"#04BE02","font-size":15,disabled:""},slot:"value",model:{value:t.data42,callback:function(e){t.data42=e},expression:"data42"}})],1)],1),t._v(" "),n("group",{attrs:{title:"custom star, some symbols like ♥ ❤ are not proper."}},[n("cell",{attrs:{title:"loving"}},[n("rater",{attrs:{star:"♡","active-color":"red",margin:15},slot:"value",model:{value:t.data4,callback:function(e){t.data4=e},expression:"data4"}})],1),t._v(" "),n("cell",{attrs:{title:"Sunshine"}},[n("rater",{attrs:{star:"☼","active-color":"#FF9900",margin:4},slot:"value",model:{value:t.data5,callback:function(e){t.data5=e},expression:"data5"}})],1),t._v(" "),n("cell",{attrs:{title:"Smilies"}},[n("rater",{attrs:{star:"☻","active-color":"#FF9900",margin:4},slot:"value",model:{value:t.data5,callback:function(e){t.data5=e},expression:"data5"}})],1),t._v(" "),n("cell",{attrs:{title:"Different stars"}},[n("rater",{attrs:{star:"✩","active-color":"#FF9900",margin:4},slot:"value",model:{value:t.data5,callback:function(e){t.data5=e},expression:"data5"}})],1),t._v(" "),n("cell",{attrs:{title:"How embarrass"}},[n("rater",{attrs:{star:"囧","active-color":"#FF9900",margin:4},slot:"value",model:{value:t.data5,callback:function(e){t.data5=e},expression:"data5"}})],1)],1),t._v(" "),n("group",{attrs:{title:"two way binding"}},[n("cell",{attrs:{title:"Your history score"}},[n("rater",{attrs:{"active-color":"#04BE02"},slot:"value",model:{value:t.data6,callback:function(e){t.data6=e},expression:"data6"}})],1),t._v(" "),n("cell",{attrs:{title:"range",primary:"content","inline-desc":t.data6+""}},[n("range",{attrs:{step:1,min:0,max:5},slot:"value",model:{value:t.data6,callback:function(e){t.data6=e},expression:"data6"}})],1)],1)],1)},r=[],s={render:i,staticRenderFns:r};e.a=s},361:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(1664),r=n(1670),s=n(0),a=s(i.a,r.a,null,null,null);e.default=a.exports},619:function(t,e){var n=window.addEventListener?"addEventListener":"attachEvent",i=window.removeEventListener?"removeEventListener":"detachEvent",r="addEventListener"!==n?"on":"";e.bind=function(t,e,i,s){return t[n](r+e,i,s||!1),i},e.unbind=function(t,e,n,s){return t[i](r+e,n,s||!1),n}},656:function(t,e,n){"use strict";function i(t){var e=window.getComputedStyle(t,null).width;return"100%"===e||"auto"===e?0:parseInt(e,10)}Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"indexof",function(){return r}),n.d(e,"findClosest",function(){return s}),n.d(e,"getWidth",function(){return i}),n.d(e,"percentage",function(){return a});var r=function(t,e){if(t.indexOf)return t.indexOf(e);for(var n=0;n<t.length;++n)if(t[n]===e)return n;return-1},s=function(t,e){for(var n=null,i=e[0],r=0;r<e.length;r++)n=Math.abs(t-i),Math.abs(t-e[r])<n&&(i=e[r]);return i},a={isNumber:function(t){return"number"==typeof t},of:function(t,e){if(a.isNumber(t)&&a.isNumber(e))return t/100*e},from:function(t,e){if(a.isNumber(t)&&a.isNumber(e))return t/e*100}}},726:function(t,e,n){"use strict";function i(t){n(727)}var r=n(729),s=n(739),a=n(0),o=i,l=a(r.a,s.a,o,null,null);e.a=l.exports},727:function(t,e,n){var i=n(728);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(227)("3da67b8b",i,!0)},728:function(t,e,n){e=t.exports=n(226)(),e.push([t.i,"/**\n* actionsheet\n*/\n/**\n* datetime\n*/\n/**\n* tabbar\n*/\n/**\n* tab\n*/\n/**\n* dialog\n*/\n/**\n* x-number\n*/\n/**\n* checkbox\n*/\n/**\n* check-icon\n*/\n/**\n* Cell\n*/\n/**\n* Mask\n*/\n/**\n* Range\n*/\n/**\n* Tabbar\n*/\n/**\n* Header\n*/\n/**\n* Timeline\n*/\n/**\n* Switch\n*/\n/**\n* Button\n*/\n/**\n* swipeout\n*/\n/**\n* Cell\n*/\n/**\n* Badge\n*/\n/**\n* Popover\n*/\n/**\n* Button tab\n*/\n/* alias */\n/**\n* Swiper\n*/\n/**\n* checklist\n*/\n/**\n* popup-picker\n*/\n/**\n* popup\n*/\n/**\n* popup-header\n*/\n/**\n* form-preview\n*/\n/**\n* load-more\n*/\n/**\n* sticky\n*/\n/**\n* group\n*/\n/**\n* toast\n*/\n/**\n* icon\n*/\n/**\n* calendar\n*/\n/**\n* search\n*/\n/**\n* radio\n*/\n/**\n *\n * Main stylesheet for Powerange.\n * http://abpetkov.github.io/powerange/\n *\n */\n/**\n * Horizontal slider style (default).\n */\n.range-bar {\n  background-color: #a9acb1;\n  border-radius: 15px;\n  display: block;\n  height: 1px;\n  position: relative;\n  width: 100%;\n}\n.range-bar-disabled {\n  opacity: 0.5;\n}\n.range-quantity {\n  background-color: #FF9900;\n  border-radius: 15px;\n  display: block;\n  height: 100%;\n  width: 0;\n}\n.range-handle {\n  background-color: #fff;\n  border-radius: 100%;\n  cursor: move;\n  height: 30px;\n  left: 0;\n  top: -13px;\n  position: absolute;\n  width: 30px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);\n}\n.range-min,\n.range-max {\n  color: #181819;\n  font-size: 12px;\n  position: absolute;\n  text-align: center;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  width: 24px;\n}\n.range-min {\n  left: -30px;\n}\n.range-max {\n  right: -30px;\n}\n/**\n * Style for disabling text selection on handle move.\n */\n.unselectable {\n  -webkit-user-select: none;\n          user-select: none;\n}\n/**\n * Style for handle cursor on disabled slider.\n */\n.range-disabled {\n  cursor: default;\n}\n",""])},729:function(t,e,n){"use strict";var i=n(730);e.a={name:"range",props:{decimal:Boolean,value:{default:0,type:Number},min:{type:Number,default:0},minHTML:String,maxHTML:String,max:{type:Number,default:100},step:{type:Number,default:1},disabled:Boolean,disabledOpacity:Number,rangeBarHeight:{type:Number,default:1},rangeHandleHeight:{type:Number,default:30}},created:function(){this.currentValue=this.value},mounted:function(){var t=this,e=this;this.$nextTick(function(){var n={callback:function(t){e.currentValue=t},decimal:t.decimal,start:t.currentValue,min:t.min,max:t.max,minHTML:t.minHTML,maxHTML:t.maxHTML,disable:t.disabled,disabledOpacity:t.disabledOpacity,initialBarWidth:window.getComputedStyle(t.$el.parentNode).width.replace("px","")-80};0!==t.step&&(n.step=t.step),t.range=new i.a(t.$el.querySelector(".vux-range-input"),n);var r=(t.rangeHandleHeight-t.rangeBarHeight)/2;t.$el.querySelector(".range-handle").style.top="-"+r+"px",t.$el.querySelector(".range-bar").style.height=t.rangeBarHeight+"px",t.handleOrientationchange=function(){t.update()},window.addEventListener("orientationchange",t.handleOrientationchange,!1)})},methods:{update:function(){console.log("update",this.currentValue);var t=this.currentValue;t<this.min&&(t=this.min),t>this.max&&(t=this.max),this.range.reInit({min:this.min,max:this.max,step:this.step,value:t}),this.currentValue=t,this.range.setStart(this.currentValue),this.range.setStep()}},data:function(){return{currentValue:0}},watch:{currentValue:function(t){this.range&&this.range.setStart(t),this.$emit("input",t),this.$emit("on-change",t)},value:function(t){this.currentValue=t},min:function(){this.update()},step:function(){this.update()},max:function(){this.update()}},beforeDestroy:function(){window.removeEventListener("orientationchange",this.handleOrientationchange,!1)}}},730:function(t,e,n){"use strict";function i(t,e){this.element=t,this.options=e||{},this.slider=this.create("span","range-bar"),this.hasAppend=!1,null!==this.element&&"text"===this.element.type&&this.init(),this.options.step&&this.step(this.slider.offsetWidth||this.options.initialBarWidth,a(this.handle)),this.setStart(this.options.start)}var r=n(656),s=r.findClosest,a=r.getWidth,o=r.percentage,l=n(731),u=n(732),c=n(734);i.prototype.setStart=function(t){var e=null===t?this.options.min:t,n=o.from(e-this.options.min,this.options.max-this.options.min)||0,i=o.of(n,this.slider.offsetWidth-this.handle.offsetWidth),r=this.options.step?s(i,this.steps):i;this.setPosition(r),this.setValue(this.handle.style.left,this.slider.offsetWidth-this.handle.offsetWidth)},i.prototype.setStep=function(){this.step(a(this.slider)||this.options.initialBarWidth,a(this.handle))},i.prototype.setPosition=function(t){this.handle.style.left=t+"px",this.slider.querySelector(".range-quantity").style.width=t+"px"},i.prototype.onmousedown=function(t){t.touches&&(t=t.touches[0]),this.startX=t.clientX,this.handleOffsetX=this.handle.offsetLeft,this.restrictHandleX=this.slider.offsetWidth-this.handle.offsetWidth,this.unselectable(this.slider,!0)},i.prototype.changeEvent=function(t){if("function"!=typeof Event&&document.fireEvent)this.element.fireEvent("onchange");else{var e=document.createEvent("HTMLEvents");e.initEvent("change",!1,!0),this.element.dispatchEvent(e)}},i.prototype.onmousemove=function(t){t.preventDefault(),t.touches&&(t=t.touches[0]);var e=this.handleOffsetX+t.clientX-this.startX,n=this.steps?s(e,this.steps):e;e<=0?this.setPosition(0):e>=this.restrictHandleX?this.setPosition(this.restrictHandleX):this.setPosition(n),this.setValue(this.handle.style.left,this.slider.offsetWidth-this.handle.offsetWidth)},i.prototype.unselectable=function(t,e){l(this.slider).has("unselectable")||!0!==e?l(this.slider).remove("unselectable"):l(this.slider).add("unselectable")},i.prototype.onmouseup=function(t){this.unselectable(this.slider,!1)},i.prototype.disable=function(t){(this.options.disable||t)&&(this.mouse.unbind(),this.touch.unbind()),this.options.disable&&(this.options.disableOpacity&&(this.slider.style.opacity=this.options.disableOpacity),l(this.slider).add("range-bar-disabled"))},i.prototype.init=function(){this.hide(),this.append(),this.bindEvents(),this.checkValues(this.options.start),this.setRange(this.options.min,this.options.max),this.disable()},i.prototype.reInit=function(t){this.options.start=t.value,this.options.min=t.min,this.options.max=t.max,this.options.step=t.step,this.disable(!0),this.init()},i.prototype.checkStep=function(t){return t<0&&(t=Math.abs(t)),this.options.step=t,this.options.step},i.prototype.setValue=function(t,e){var n=o.from(parseFloat(t),e);if("0px"===t||0===e)i=this.options.min;else{var i=o.of(n,this.options.max-this.options.min)+this.options.min;i=this.options.decimal?Math.round(100*i)/100:Math.round(i),i>this.options.max&&(i=this.options.max)}var r=!1;r=this.element.value!==i,this.element.value=i,this.options.callback(i),r&&this.changeEvent()},i.prototype.checkValues=function(t){t<this.options.min&&(this.options.start=this.options.min),t>this.options.max&&(this.options.start=this.options.max),this.options.min>=this.options.max&&(this.options.min=this.options.max)},i.prototype.step=function(t,e){for(var n=t-e,i=o.from(this.checkStep(this.options.step),this.options.max-this.options.min),r=o.of(i,n),s=[],a=0;a<=n;a+=r)s.push(a);this.steps=s;for(var l=10;l>=0;l--)this.steps[s.length-l]=n-r*l;return this.steps},i.prototype.create=function(t,e){var n=document.createElement(t);return n.className=e,n},i.prototype.insertAfter=function(t,e){t.parentNode.insertBefore(e,t.nextSibling)},i.prototype.setRange=function(t,e){"number"!=typeof t||"number"!=typeof e||this.options.hideRange||(this.slider.querySelector(".range-min").innerHTML=this.options.minHTML||t,this.slider.querySelector(".range-max").innerHTML=this.options.maxHTML||e)},i.prototype.generate=function(){var t={handle:{type:"span",selector:"range-handle"},min:{type:"span",selector:"range-min"},max:{type:"span",selector:"range-max"},quantity:{type:"span",selector:"range-quantity"}};for(var e in t)if(t.hasOwnProperty(e)){var n=this.create(t[e].type,t[e].selector);this.slider.appendChild(n)}return this.slider},i.prototype.append=function(){if(!this.hasAppend){var t=this.generate();this.insertAfter(this.element,t)}this.hasAppend=!0},i.prototype.hide=function(){this.element.style.display="none"},i.prototype.bindEvents=function(){this.handle=this.slider.querySelector(".range-handle"),this.touch=c(this.handle,this),this.touch.bind("touchstart","onmousedown"),this.touch.bind("touchmove","onmousemove"),this.touch.bind("touchend","onmouseup"),this.mouse=u(this.handle,this),this.mouse.bind()};var h={callback:function(){},decimal:!1,disable:!1,disableOpacity:null,hideRange:!1,min:0,max:100,start:null,step:null,vertical:!1};e.a=function(t,e){e=e||{};for(var n in h)null==e[n]&&(e[n]=h[n]);return new i(t,e)}},731:function(t,e,n){function i(t){if(!t||!t.nodeType)throw new Error("A DOM element reference is required");this.el=t,this.list=t.classList}var r=n(656).indexof,s=/\s+/,a=Object.prototype.toString;t.exports=function(t){return new i(t)},i.prototype.add=function(t){if(this.list)return this.list.add(t),this;var e=this.array();return~r(e,t)||e.push(t),this.el.className=e.join(" "),this},i.prototype.remove=function(t){if("[object RegExp]"===a.call(t))return this.removeMatching(t);if(this.list)return this.list.remove(t),this;var e=this.array(),n=r(e,t);return~n&&e.splice(n,1),this.el.className=e.join(" "),this},i.prototype.removeMatching=function(t){for(var e=this.array(),n=0;n<e.length;n++)t.test(e[n])&&this.remove(e[n]);return this},i.prototype.toggle=function(t,e){return this.list?(void 0!==e?e!==this.list.toggle(t,e)&&this.list.toggle(t):this.list.toggle(t),this):(void 0!==e?e?this.add(t):this.remove(t):this.has(t)?this.remove(t):this.add(t),this)},i.prototype.array=function(){var t=this.el.getAttribute("class")||"",e=t.replace(/^\s+|\s+$/g,""),n=e.split(s);return""===n[0]&&n.shift(),n},i.prototype.has=i.prototype.contains=function(t){return this.list?this.list.contains(t):!!~r(this.array(),t)}},732:function(t,e,n){function i(t,e){this.obj=e||{},this.el=t}var r=n(733),s=n(619);t.exports=function(t,e){return new i(t,e)},r(i.prototype),i.prototype.bind=function(){function t(r){n.onmouseup&&n.onmouseup(r),s.unbind(document,"mousemove",e),s.unbind(document,"mouseup",t),i.emit("up",r)}function e(t){n.onmousemove&&n.onmousemove(t),i.emit("move",t)}var n=this.obj,i=this;return i.down=function(r){n.onmousedown&&n.onmousedown(r),s.bind(document,"mouseup",t),s.bind(document,"mousemove",e),i.emit("down",r)},s.bind(this.el,"mousedown",i.down),this},i.prototype.unbind=function(){s.unbind(this.el,"mousedown",this.down),this.down=null}},733:function(t,e){function n(t){if(t)return i(t)}function i(t){for(var e in n.prototype)t[e]=n.prototype[e];return t}t.exports=n,n.prototype.on=n.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this},n.prototype.once=function(t,e){function n(){this.off(t,n),e.apply(this,arguments)}return n.fn=e,this.on(t,n),this},n.prototype.off=n.prototype.removeListener=n.prototype.removeAllListeners=n.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},!arguments.length)return this._callbacks={},this;var n=this._callbacks["$"+t];if(!n)return this;if(1===arguments.length)return delete this._callbacks["$"+t],this;for(var i,r=0;r<n.length;r++)if((i=n[r])===e||i.fn===e){n.splice(r,1);break}return this},n.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),n=this._callbacks["$"+t];if(n){n=n.slice(0);for(var i=0,r=n.length;i<r;++i)n[i].apply(this,e)}return this},n.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},n.prototype.hasListeners=function(t){return!!this.listeners(t).length}},734:function(t,e,n){function i(t,e){if(!(this instanceof i))return new i(t,e);if(!t)throw new Error("element required");if(!e)throw new Error("object required");this.el=t,this.obj=e,this._events={}}function r(t){var e=t.split(/ +/);return{name:e.shift(),selector:e.join(" ")}}var s=n(619),a=n(735);t.exports=i,i.prototype.sub=function(t,e,n){this._events[t]=this._events[t]||{},this._events[t][e]=n},i.prototype.bind=function(t,e){var n=r(t),i=this.el,o=this.obj,l=n.name;e=e||"on"+l;var u=[].slice.call(arguments,2),c=function(){var t=[].slice.call(arguments).concat(u);o[e].apply(o,t)};return n.selector?c=a.bind(i,n.selector,l,c):s.bind(i,l,c),this.sub(l,e,c),c},i.prototype.unbind=function(t,e){if(0===arguments.length)return this.unbindAll();if(1===arguments.length)return this.unbindAllOf(t);var n=this._events[t];if(n){var i=n[e];i&&s.unbind(this.el,t,i)}},i.prototype.unbindAll=function(){for(var t in this._events)this.unbindAllOf(t)},i.prototype.unbindAllOf=function(t){var e=this._events[t];if(e)for(var n in e)this.unbind(t,n)}},735:function(t,e,n){var i=n(736),r=n(619);e.bind=function(t,e,n,s,a){return r.bind(t,n,function(n){var r=n.target||n.srcElement;n.delegateTarget=i(r,e,!0,t),n.delegateTarget&&s.call(t,n)},a)},e.unbind=function(t,e,n,i){r.unbind(t,e,n,i)}},736:function(t,e,n){function i(t,e,n){for(n=n||document.documentElement;t&&t!==n;){if(r(t,e))return t;t=t.parentNode}return r(t,e)?t:null}var r=n(737);t.exports=i},737:function(t,e,n){function i(t,e){if(!t||1!==t.nodeType)return!1;if(a)return a.call(t,e);for(var n=r.all(e,t.parentNode),i=0;i<n.length;++i)if(n[i]===t)return!0;return!1}var r=n(738),s=window.Element.prototype,a=s.matches||s.webkitMatchesSelector||s.mozMatchesSelector||s.msMatchesSelector||s.oMatchesSelector;t.exports=i},738:function(t,e){function n(t,e){return e.querySelector(t)}e=t.exports=function(t,e){return e=e||document,n(t,e)},e.all=function(t,e){return e=e||document,e.querySelectorAll(t)},e.engine=function(t){if(!t.one)throw new Error(".one callback required");if(!t.all)throw new Error(".all callback required");return e.all=t.all,e}},739:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-range-input-box",staticStyle:{position:"relative","margin-right":"30px","margin-left":"50px"}},[n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.currentValue,expression:"currentValue",modifiers:{number:!0}}],staticClass:"vux-range-input",domProps:{value:t.currentValue},on:{input:function(e){e.target.composing||(t.currentValue=t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})])},r=[],s={render:i,staticRenderFns:r};e.a=s}});