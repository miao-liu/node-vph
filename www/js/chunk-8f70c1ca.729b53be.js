(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8f70c1ca"],{"1d04":function(t,e,a){},"448d":function(t,e,a){},"498a":function(t,e,a){"use strict";var n=a("23e7"),s=a("58a8").trim,r=a("c8d2");n({target:"String",proto:!0,forced:r("trim")},{trim:function(){return s(this)}})},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,a){var n=a("e330"),s=a("1d80"),r=a("577e"),i=a("5899"),o=n("".replace),c="["+i+"]",l=RegExp("^"+c+c+"*"),u=RegExp(c+c+"*$"),d=function(t){return function(e){var a=r(s(e));return 1&t&&(a=o(a,l,"")),2&t&&(a=o(a,u,"")),a}};t.exports={start:d(1),end:d(2),trim:d(3)}},"61d3":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bread-menu"},[a("router-link",{attrs:{to:"/"}},[a("span",{staticClass:"back"})]),t._l(t.navs,(function(e,n){return a("router-link",{key:n,attrs:{to:e.to}},[t._v(t._s(e.name))])}))],2)},s=[],r={props:{navs:Array},methods:{},created:function(){}},i=r,o=(a("6d01"),a("2877")),c=Object(o["a"])(i,n,s,!1,null,"7de07b61",null);e["a"]=c.exports},"6d01":function(t,e,a){"use strict";a("dbaf")},7156:function(t,e,a){var n=a("1626"),s=a("861d"),r=a("d2bb");t.exports=function(t,e,a){var i,o;return r&&n(i=e.constructor)&&i!==a&&s(o=i.prototype)&&o!==a.prototype&&r(t,o),t}},a9e3:function(t,e,a){"use strict";var n=a("83ab"),s=a("da84"),r=a("e330"),i=a("94ca"),o=a("6eeb"),c=a("1a2d"),l=a("7156"),u=a("3a9b"),d=a("d9b5"),h=a("c04e"),p=a("d039"),f=a("241c").f,v=a("06cf").f,m=a("9bf2").f,y=a("408a"),b=a("58a8").trim,g="Number",x=s[g],E=x.prototype,k=s.TypeError,_=r("".slice),T=r("".charCodeAt),w=function(t){var e=h(t,"number");return"bigint"==typeof e?e:S(e)},S=function(t){var e,a,n,s,r,i,o,c,l=h(t,"number");if(d(l))throw k("Cannot convert a Symbol value to a number");if("string"==typeof l&&l.length>2)if(l=b(l),e=T(l,0),43===e||45===e){if(a=T(l,2),88===a||120===a)return NaN}else if(48===e){switch(T(l,1)){case 66:case 98:n=2,s=49;break;case 79:case 111:n=8,s=55;break;default:return+l}for(r=_(l,2),i=r.length,o=0;o<i;o++)if(c=T(r,o),c<48||c>s)return NaN;return parseInt(r,n)}return+l};if(i(g,!x(" 0o1")||!x("0b1")||x("+0x1"))){for(var N,C=function(t){var e=arguments.length<1?0:x(w(t)),a=this;return u(E,a)&&p((function(){y(a)}))?l(Object(e),a,C):e},I=n?f(x):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),P=0;I.length>P;P++)c(x,N=I[P])&&!c(C,N)&&m(C,N,v(x,N));C.prototype=E,E.constructor=C,o(s,g,C)}},b24d:function(t,e,a){"use strict";a("448d")},c562:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"add-address"},[a("bread-menu",{attrs:{navs:t.navs}}),a("form",[a("div",[a("label",{attrs:{for:"user"}},[t._v("收货人")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user,expression:"user"}],attrs:{type:"text",name:"user",id:"user",placeholder:"收货人姓名"},domProps:{value:t.user},on:{input:function(e){e.target.composing||(t.user=e.target.value)}}}),a("span",{staticClass:"clear"})]),a("div",[a("label",{attrs:{for:"phone"}},[t._v("手机号码")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],attrs:{type:"tel",name:"phone",id:"phone",placeholder:"收货人手机号"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}}),a("span",{staticClass:"clear"})]),a("div",[a("label",{attrs:{for:"city"}},[t._v("所在地区")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.address,expression:"address"}],attrs:{type:"text",name:"city",id:"city",placeholder:"选择省/市/区",readonly:""},domProps:{value:t.address},on:{focus:function(e){return t.togglePanel(!0)},input:function(e){e.target.composing||(t.address=e.target.value)}}}),a("div",{staticClass:"address-panel"},[a("div",{staticClass:"alert-mask"}),a("p",{staticClass:"tip flex"},[a("span",{staticClass:"cancel",on:{click:function(e){return t.togglePanel(!1)}}},[t._v("取消")]),a("span",{staticClass:"ok",on:{click:function(e){return t.confirm()}}},[t._v("确认")])]),a("linkage-menu")],1)]),a("div",[a("label",{attrs:{for:"street"}},[t._v("详细地址")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.street,expression:"street"}],attrs:{type:"text",name:"street",id:"street",placeholder:"街道门牌号"},domProps:{value:t.street},on:{input:function(e){e.target.composing||(t.street=e.target.value)}}})])]),a("div",{staticClass:"tip-sub"}),a("button",{class:t.is_disabled?"sub clicked":"sub",attrs:{disabled:t.is_disabled},on:{click:t.saveaddr}},[t._v(t._s(t.is_disabled?"保存中":"保存"))])],1)},s=[],r=(a("498a"),a("ac1f"),a("00b4"),a("61d3")),i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"choose-address"},[a("div",{staticClass:"box"},[a("div",{staticClass:"wrap flex"},[a("ul",{staticClass:"province",staticStyle:{transform:"translateY(0)"},attrs:{"data-type":"province","data-level":"0"}}),a("ul",{staticClass:"city",staticStyle:{transform:"translateY(0)"},attrs:{"data-type":"city","data-level":"1"}}),a("ul",{staticClass:"area",staticStyle:{transform:"translateY(0)"},attrs:{"data-type":"area","data-level":"2"}})])])])}],c=a("1da1"),l=(a("d81d"),a("96cf"),a("4279")),u=a("a3be"),d=a("2909");function h(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function p(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function f(t,e,a){return e&&p(t.prototype,e),a&&p(t,a),t}a("d3b7"),a("159b"),a("99af"),a("b64b"),a("a9e3");var v=function(){function t(e){h(this,t);var a=e.container,n=e.cur;this.data=e.data,this.pos={},this.container=document.querySelector(a),this.containerH=this.container.offsetHeight,this.provincesEl=this.container.querySelector(".province"),this.citysEl=this.container.querySelector(".city"),this.areasEl=this.container.querySelector(".area"),this.events=["start","move","end"],this.cur=n}return f(t,[{key:"init",value:function(){this.initView(this.provincesEl,this.getData(this.data),0)}},{key:"initView",value:function(t,e,a){var n=0===a?this.cur:"",s=t.dataset.type,r="<li class= ".concat(n,' data-clear="0" data-idx="0">请选择</li>');this.pos[s+"Num"]=e.length,e.forEach((function(t,e){r+=e+1===a?"<li class=".concat(n," data-idx = ").concat(e+1,">").concat(t,"</li>"):"<li data-idx = ".concat(e+1,">").concat(t,"</li>")})),t.innerHTML=r,this.bindEvents(t)}},{key:"getData",value:function(t,e,a){return e?a?t[e][a]:Object.keys(t[e]):Object.keys(t)}},{key:"movestart",value:function(t){t.cancelable&&(t.defaultPrevented||t.preventDefault());var e=t.target.parentElement,a=e.dataset.type,n=e.style.transform;this.pos[a+"StartTime"]=Date.now(),this.pos[a+"Ty"]=this.extractTop(n),this.pos[a+"StartT"]=t.changedTouches[0].pageY,this.pos[a+"Index"]=t.target.dataset.idx}},{key:"movemove",value:function(t){var e=t.target.parentElement,a=e.dataset.type,n=t.changedTouches[0].pageY-this.pos[a+"StartT"];this.pos[a+"EndT"]=this.pos[a+"Ty"]+n;var s=Math.round(this.pos[a+"EndT"]/this.containerH);this.pos[a+"Index"]=Math.abs(s),this.localEl(e,s)}},{key:"localEl",value:function(t,e,a){var n=t.dataset.type,s=e*this.containerH;a||(e>=0&&(e=0,s=0),e<=-this.pos[n+"Num"]-1&&(e=-this.pos[n+"Num"],s=e*this.containerH)),this.pos[n+"Index"]=Math.abs(e),t.style.transform="translateY(".concat(s,"px)"),this.removeClass(t,"li",this.cur),this.addClass(t,"li",this.pos[n+"Index"],this.cur)}},{key:"moveend",value:function(t){var e=t.target.parentElement,a=e.dataset.type,n=+this.pos[a+"Index"];this.pos[a+"EndT"]=n*this.containerH,Date.now()-this.pos[a+"StartTime"]<=200&&this.localEl(e,-n,!0),n?this.changeData(+e.dataset.level):this.clearOther(Number(e.dataset.level))}},{key:"extractTop",value:function(t){return Number(t.substring(t.indexOf("(")+1,t.lastIndexOf("p")))}},{key:"bindEvents",value:function(t){var e=this;this.events.forEach((function(a){t.addEventListener("touch"+a,(function(t){t=t||window.event,e["move"+a](t)}))}))}},{key:"removeClass",value:function(t,e,a){Object(d["a"])(t.children).forEach((function(t){t.classList.remove(a)}))}},{key:"addClass",value:function(t,e,a,n){t.querySelectorAll(e)[a].classList.add(n)}},{key:"changeData",value:function(t){switch(t){case 0:this.reloadProvince();break;case 1:this.reloadCity();break}}},{key:"reloadProvince",value:function(){this.citysEl.style.transform="translateY(0px)";var t=this.provincesEl.querySelector("."+this.cur).innerText.trim(),e=this.getData(this.data,t);this.initView(this.citysEl,e,0),this.clearOther(1)}},{key:"reloadCity",value:function(){this.areasEl.style.transform="translateY(0px)";var t=this.provincesEl.querySelector("."+this.cur).innerText.trim(),e=this.citysEl.querySelector("."+this.cur).innerText.trim(),a=this.getData(this.data,t,e);this.initView(this.areasEl,a,0)}},{key:"clearOther",value:function(t){0===t?(this.citysEl.innerHTML="",this.areasEl.innerHTML=""):1===t&&(this.areasEl.innerHTML="")}}]),t}(),m={data:function(){return{map:null,province:"",linkage_menu:null}},methods:{getData:function(){return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(l["a"])("get",u["d"]).then((function(t){return t.data}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))()}},mounted:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getData();case 2:return t.map=e.sent,e.next=5,t.$nextTick();case 5:t.linkage_menu=new v({data:t.map,container:".choose-address .box .wrap",cur:"cur"}),t.linkage_menu.init();case 7:case"end":return e.stop()}}),e)})))()}},y=m,b=(a("b24d"),a("2877")),g=Object(b["a"])(y,i,o,!1,null,null,null),x=g.exports,E={components:{breadMenu:r["a"],linkageMenu:x},data:function(){return{is_default:!1,user:"",phone:"",address:"",street:"",navs:[{name:"个人中心",to:"/center"},{name:"收货地址",to:"/addresslist"},{name:"新增地址",to:"/addaddr"}],address_panel:null,address_mask:null,tip:null,timer:null,is_disabled:!1}},methods:{setDefault:function(){this.is_default=!this.is_default,document.querySelector(".default").classList.toggle("save")},saveaddr:function(){var t=this;if(this.checkFrom()){this.is_disabled=!0;var e={username:window.sessionStorage.getItem("username"),name:this.user,phone:this.phone,address:this.address,street:this.street};Object(l["a"])("post",u["a"],e).then((function(e){t.is_disabled=!1,e.error?t.tipPanel("服务器问题，联系管理员"):t.$router.push("/addresslist")}))}},checkFrom:function(){return this.user.trim()?this.phone.trim()?/^1[3,4,5,7,8,9]\d{9}$/.test(this.phone)?!!this.phone.trim()||(this.tipPanel("请输入收货地址"),!1):(this.tipPanel("请输入正确的手机号"),!1):(this.tipPanel("请输入手机号码"),!1):(this.tipPanel("请输入收货人姓名"),!1)},togglePanel:function(t){console.log(t),this.address_panel.style.visibility=t?"visible":"hidden",this.address_panel.style.opacity=t?1:0},tipPanel:function(t){var e=this;this.tip.innerText=t,this.tip.style.visibility="visible",this.timer=setTimeout((function(){e.tip.style.visibility="hidden",clearTimeout(e.timer)}),1e3)},confirm:function(){for(var t=document.querySelectorAll(".add-address .address-panel .cur"),e=0;e<t.length;e++)if("请选择"===t[e].innerText.trim())return void this.tipPanel("请选择地址");for(var a=t[0].innerText,n=1;n<t.length;n++)a+="/"+t[n].innerText;this.address=a,this.address_panel.style.visibility="hidden"}},mounted:function(){var t=this;this.$nextTick((function(){t.address_panel=document.querySelector(".add-address .address-panel"),t.address_mask=document.querySelector(".add-address .alert-mask"),t.tip=document.querySelector(".add-address .tip-sub")}))}},k=E,_=(a("d018"),Object(b["a"])(k,n,s,!1,null,"73976f81",null));e["default"]=_.exports},c8d2:function(t,e,a){var n=a("5e77").PROPER,s=a("d039"),r=a("5899"),i="​᠎";t.exports=function(t){return s((function(){return!!r[t]()||i[t]()!==i||n&&r[t].name!==t}))}},d018:function(t,e,a){"use strict";a("1d04")},dbaf:function(t,e,a){}}]);
//# sourceMappingURL=chunk-8f70c1ca.729b53be.js.map