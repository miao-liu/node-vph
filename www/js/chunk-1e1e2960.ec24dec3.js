(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1e1e2960"],{1276:function(e,s,t){"use strict";var a=t("2ba4"),n=t("c65b"),i=t("e330"),r=t("d784"),o=t("44e7"),u=t("825a"),c=t("1d80"),l=t("4840"),p=t("8aa5"),d=t("50c4"),m=t("577e"),h=t("dc4a"),f=t("4dae"),v=t("14c3"),g=t("9263"),_=t("9f7f"),w=t("d039"),b=_.UNSUPPORTED_Y,x=4294967295,y=Math.min,k=[].push,I=i(/./.exec),C=i(k),$=i("".slice),E=!w((function(){var e=/(?:)/,s=e.exec;e.exec=function(){return s.apply(this,arguments)};var t="ab".split(e);return 2!==t.length||"a"!==t[0]||"b"!==t[1]}));r("split",(function(e,s,t){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,t){var i=m(c(this)),r=void 0===t?x:t>>>0;if(0===r)return[];if(void 0===e)return[i];if(!o(e))return n(s,i,e,r);var u,l,p,d=[],h=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),v=0,_=new RegExp(e.source,h+"g");while(u=n(g,_,i)){if(l=_.lastIndex,l>v&&(C(d,$(i,v,u.index)),u.length>1&&u.index<i.length&&a(k,d,f(u,1)),p=u[0].length,v=l,d.length>=r))break;_.lastIndex===u.index&&_.lastIndex++}return v===i.length?!p&&I(_,"")||C(d,""):C(d,$(i,v)),d.length>r?f(d,0,r):d}:"0".split(void 0,0).length?function(e,t){return void 0===e&&0===t?[]:n(s,this,e,t)}:s,[function(s,t){var a=c(this),r=void 0==s?void 0:h(s,e);return r?n(r,s,a,t):n(i,m(a),s,t)},function(e,a){var n=u(this),r=m(e),o=t(i,n,r,a,i!==s);if(o.done)return o.value;var c=l(n,RegExp),h=n.unicode,f=(n.ignoreCase?"i":"")+(n.multiline?"m":"")+(n.unicode?"u":"")+(b?"g":"y"),g=new c(b?"^(?:"+n.source+")":n,f),_=void 0===a?x:a>>>0;if(0===_)return[];if(0===r.length)return null===v(g,r)?[r]:[];var w=0,k=0,I=[];while(k<r.length){g.lastIndex=b?0:k;var E,N=v(g,b?$(r,k):r);if(null===N||(E=y(d(g.lastIndex+(b?k:0)),r.length))===w)k=p(r,k,h);else{if(C(I,$(r,w,k)),I.length===_)return I;for(var P=1;P<=N.length-1;P++)if(C(I,N[P]),I.length===_)return I;k=w=E}}return C(I,$(r,w)),I}]}),!E,b)},"208c":function(e,s,t){"use strict";t("22a5")},"22a5":function(e,s,t){},"25f0":function(e,s,t){"use strict";var a=t("e330"),n=t("5e77").PROPER,i=t("6eeb"),r=t("825a"),o=t("3a9b"),u=t("577e"),c=t("d039"),l=t("ad6d"),p="toString",d=RegExp.prototype,m=d[p],h=a(l),f=c((function(){return"/a/b"!=m.call({source:"a",flags:"b"})})),v=n&&m.name!=p;(f||v)&&i(RegExp.prototype,p,(function(){var e=r(this),s=u(e.source),t=e.flags,a=u(void 0===t&&o(d,e)&&!("flags"in d)?h(e):t);return"/"+s+"/"+a}),{unsafe:!0})},"44e7":function(e,s,t){var a=t("861d"),n=t("c6b6"),i=t("b622"),r=i("match");e.exports=function(e){var s;return a(e)&&(void 0!==(s=e[r])?!!s:"RegExp"==n(e))}},"498a":function(e,s,t){"use strict";var a=t("23e7"),n=t("58a8").trim,i=t("c8d2");a({target:"String",proto:!0,forced:i("trim")},{trim:function(){return n(this)}})},5255:function(e,s,t){"use strict";t("57a1")},"57a1":function(e,s,t){},5899:function(e,s){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,s,t){var a=t("e330"),n=t("1d80"),i=t("577e"),r=t("5899"),o=a("".replace),u="["+r+"]",c=RegExp("^"+u+u+"*"),l=RegExp(u+u+"*$"),p=function(e){return function(s){var t=i(n(s));return 1&e&&(t=o(t,c,"")),2&e&&(t=o(t,l,"")),t}};e.exports={start:p(1),end:p(2),trim:p(3)}},"5f4c":function(e,s,t){},9137:function(e,s,t){"use strict";t.r(s);var a=function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("div",[a("div",{staticClass:"logo"},[a("img",{attrs:{src:t("dd88"),alt:""}}),e.err_tip?a("div",{staticClass:"err_tip"},[e._v(e._s(e.err_tip))]):e._e()]),e.is_login?a("div",{staticClass:"login"},[a("login",{on:{alert:e.toogleAlert,tip:e.toggleTip}})],1):a("div",[a("reg",{on:{alert:e.toogleAlert,tip:e.toggleTip}})],1),e.is_login?a("p",{staticClass:"tip"},[a("span",{staticClass:"reg",on:{click:function(s){e.is_login=!1,e.err_tip=""}}},[e._v("还没账号，去注册")])]):a("p",{staticClass:"tip"},[a("span",{staticClass:"login",on:{click:function(s){e.is_login=!0,e.err_tip=""}}},[e._v("已有账号，去登录")])]),e.alert_tip?a("div",{staticClass:"alert"},[e._v(e._s(e.alert_tip))]):e._e()])},n=[],i=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("form",[t("p",[t("label",{attrs:{for:"uname"}},[e._v("登录名")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.uname,expression:"uname"}],attrs:{type:"text",id:"uname",name:"uname",placeholder:"请输入用户名"},domProps:{value:e.uname},on:{blur:function(s){return e.hideIcon()},focus:function(s){return e.showIcon(e.uname)},input:function(s){s.target.composing||(e.uname=s.target.value)}}}),t("span",{staticClass:"tool"},[t("i",{directives:[{name:"show",rawName:"v-show",value:e.uname,expression:"uname"}],staticClass:"clear clear_name",on:{click:function(s){e.uname=""}}},[e._v("x")])])]),t("p",[t("label",{attrs:{for:"upass"}},[e._v("密码")]),"checkbox"===(e.show_pass?"text":"password")?t("input",{directives:[{name:"model",rawName:"v-model",value:e.upass,expression:"upass"}],attrs:{name:"upass",id:"upass",placeholder:"请输入密码",type:"checkbox"},domProps:{checked:Array.isArray(e.upass)?e._i(e.upass,null)>-1:e.upass},on:{blur:function(s){return e.hideIcon()},focus:function(s){return e.showIcon(e.upass)},change:function(s){var t=e.upass,a=s.target,n=!!a.checked;if(Array.isArray(t)){var i=null,r=e._i(t,i);a.checked?r<0&&(e.upass=t.concat([i])):r>-1&&(e.upass=t.slice(0,r).concat(t.slice(r+1)))}else e.upass=n}}}):"radio"===(e.show_pass?"text":"password")?t("input",{directives:[{name:"model",rawName:"v-model",value:e.upass,expression:"upass"}],attrs:{name:"upass",id:"upass",placeholder:"请输入密码",type:"radio"},domProps:{checked:e._q(e.upass,null)},on:{blur:function(s){return e.hideIcon()},focus:function(s){return e.showIcon(e.upass)},change:function(s){e.upass=null}}}):t("input",{directives:[{name:"model",rawName:"v-model",value:e.upass,expression:"upass"}],attrs:{name:"upass",id:"upass",placeholder:"请输入密码",type:e.show_pass?"text":"password"},domProps:{value:e.upass},on:{blur:function(s){return e.hideIcon()},focus:function(s){return e.showIcon(e.upass)},input:function(s){s.target.composing||(e.upass=s.target.value)}}}),t("span",{staticClass:"tool"},[t("i",{directives:[{name:"show",rawName:"v-show",value:e.upass,expression:"upass"}],staticClass:"clear clear_pass",on:{click:function(s){e.upass=""}}},[e._v("x")]),t("i",{class:e.show_pass?"eye show":"eye hide",on:{click:function(s){e.show_pass=!e.show_pass}}})])]),t("button",{class:e.is_disabled?"sub":"sub abled",attrs:{disabled:e.is_disabled},on:{click:e.subForm}},[e._v("登录")]),t("div",{staticClass:"iterm"},[t("i",{class:e.is_agree?"choose agree":"choose",on:{click:function(s){e.is_agree=!e.is_agree}}}),e._v("我已阅读并同意"),t("a",{attrs:{href:""}},[e._v("相关条款")])])])},r=[],o=(t("ac1f"),t("1276"),t("d3b7"),t("25f0"),t("5319"),t("498a"),t("a3be")),u=t("4279"),c={name:"login",data:function(){return{uname:"",upass:"",show_pass:!1,is_agree:!1,is_disabled:!1,is_hide_uname:!1,is_hide_upass:!1,sub_url:""}},methods:{subForm:function(e){var s=this;e=e||window.event,e.preventDefault(),this.checkFrom()&&(this.is_disabled=!0,Object(u["a"])("post",this.sub_url,{username:this.uname,userpass:this.upass}).then((function(e){s.is_disabled=!1,1===e.code?s.$emit("tip","用户不存在"):5===e.code?s.$emit("tip","密码错误"):(s.$store.commit("user/setToken",(16*Math.random()).toString("16").split(".")[1]),window.sessionStorage.setItem("username",s.uname),s.$router.replace("/center"))})))},checkFrom:function(){return!!this.is_agree||(this.$emit("alert","请阅读并勾选相关协议"),!1)},hideIcon:function(e){e=e||window.event;var s=setTimeout((function(){e.target.nextElementSibling.querySelector(".clear").style.display="none",clearTimeout(s)}),800)},showIcon:function(e,s){e.trim()&&(s=s||window.event,s.target.nextElementSibling.querySelector(".clear").style.display="inline-block")}},mounted:function(){this.sub_url=o["s"]}},l=c,p=(t("208c"),t("2877")),d=Object(p["a"])(l,i,r,!1,null,"6f697540",null),m=d.exports,h=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("form",[t("p",[t("label",{attrs:{for:"uname"}},[e._v("账户名")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.uname,expression:"uname"}],attrs:{type:"text",id:"uname",name:"uname",placeholder:"数字 + 英文字母  4-8位即可"},domProps:{value:e.uname},on:{blur:function(s){return e.hideIcon()},focus:function(s){return e.showIcon(e.uname)},input:function(s){s.target.composing||(e.uname=s.target.value)}}}),t("span",{staticClass:"tool"},[t("i",{directives:[{name:"show",rawName:"v-show",value:e.uname,expression:"uname"}],staticClass:"clear clear_name",on:{click:function(s){e.uname=""}}},[e._v("x")])])]),t("p",[t("label",{attrs:{for:"umail"}},[e._v("邮箱")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.uemail,expression:"uemail"}],attrs:{type:"email",id:"uemail",name:"uemail",placeholder:"请输入邮箱"},domProps:{value:e.uemail},on:{blur:function(s){return e.hideIcon()},focus:function(s){return e.showIcon(e.uemail)},input:function(s){s.target.composing||(e.uemail=s.target.value)}}}),t("span",{staticClass:"tool"},[t("i",{directives:[{name:"show",rawName:"v-show",value:e.uemail,expression:"uemail"}],staticClass:"clear clear_email",on:{click:function(s){e.uemail=""}}},[e._v("x")])])]),t("p",[t("label",{attrs:{for:"upass"}},[e._v("密码")]),"checkbox"===(e.show_pass?"text":"password")?t("input",{directives:[{name:"model",rawName:"v-model",value:e.upass,expression:"upass"}],attrs:{name:"upass",id:"upass",placeholder:"请输入密码6-10位",type:"checkbox"},domProps:{checked:Array.isArray(e.upass)?e._i(e.upass,null)>-1:e.upass},on:{blur:function(s){return e.hideIcon()},focus:function(s){return e.showIcon(e.upass)},change:function(s){var t=e.upass,a=s.target,n=!!a.checked;if(Array.isArray(t)){var i=null,r=e._i(t,i);a.checked?r<0&&(e.upass=t.concat([i])):r>-1&&(e.upass=t.slice(0,r).concat(t.slice(r+1)))}else e.upass=n}}}):"radio"===(e.show_pass?"text":"password")?t("input",{directives:[{name:"model",rawName:"v-model",value:e.upass,expression:"upass"}],attrs:{name:"upass",id:"upass",placeholder:"请输入密码6-10位",type:"radio"},domProps:{checked:e._q(e.upass,null)},on:{blur:function(s){return e.hideIcon()},focus:function(s){return e.showIcon(e.upass)},change:function(s){e.upass=null}}}):t("input",{directives:[{name:"model",rawName:"v-model",value:e.upass,expression:"upass"}],attrs:{name:"upass",id:"upass",placeholder:"请输入密码6-10位",type:e.show_pass?"text":"password"},domProps:{value:e.upass},on:{blur:function(s){return e.hideIcon()},focus:function(s){return e.showIcon(e.upass)},input:function(s){s.target.composing||(e.upass=s.target.value)}}}),t("span",{staticClass:"tool"},[t("i",{directives:[{name:"show",rawName:"v-show",value:e.upass,expression:"upass"}],staticClass:"clear clear_pass",on:{click:function(s){e.upass=""}}},[e._v("x")]),t("i",{class:e.show_pass?"eye show":"eye hide",on:{click:function(s){e.show_pass=!e.show_pass}}})])]),t("button",{class:e.is_disabled?"sub":"sub abled",attrs:{disabled:e.is_disabled},on:{click:e.subForm}},[e._v("注册")]),t("div",{staticClass:"iterm"},[t("i",{class:e.is_agree?"choose agree":"choose",on:{click:function(s){e.is_agree=!e.is_agree}}}),e._v("我已阅读并同意"),t("a",{attrs:{href:""}},[e._v("相关条款")])])])},f=[],v=(t("00b4"),{name:"reg",data:function(){return{uname:"",upass:"",uemail:"",show_pass:!1,is_agree:!1,is_disabled:!1}},methods:{subForm:function(e){var s=this;e=e||window.event,e.preventDefault(),this.checkFrom()&&(this.is_disabled=!0,Object(u["a"])("post",this.sub_url,{username:this.uname,userpass:this.upass,useremail:this.uemail}).then((function(e){s.is_disabled=!1,6===e.code?s.$emit("tip","该账户名已存在"):3===e.code?s.$emit("tip","服务器抽了，联系网站管理员"):0===e.code&&(s.$emit("alert","注册成功"),s.clearData(),s.$emit("tip",""))})))},checkFrom:function(){return/^[a-z0-9]{5,8}$/i.test(this.uname)?/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/.test(this.uemail)?/^[a-z0-9]{6,10}$/i.test(this.upass)?!!this.is_agree||(this.$emit("alert","请阅读并勾选相关协议"),!1):(this.$emit("tip","请输入6-10位密码"),!1):(this.$emit("tip","请输入正确的邮箱"),!1):(this.$emit("tip","请输入4-8位账户名"),!1)},hideIcon:function(e){e=e||window.event;var s=setTimeout((function(){e.target.nextElementSibling.querySelector(".clear").style.display="none",clearTimeout(s)}),800)},showIcon:function(e,s){e.trim()&&(s=s||window.event,s.target.nextElementSibling.querySelector(".clear").style.display="inline-block")},clearData:function(){this.uname="",this.upass="",this.uemail="",this.is_agree=!1,this.show_pass=!1}},mounted:function(){this.sub_url=o["t"]}}),g=v,_=(t("5255"),Object(p["a"])(g,h,f,!1,null,"cc169842",null)),w=_.exports,b={data:function(){return{is_login:!0,alert_tip:"",err_tip:""}},components:{login:m,reg:w},methods:{toogleAlert:function(e){var s=this;this.alert_tip=e,setTimeout((function(){s.alert_tip=""}),1e3)},toggleTip:function(e){this.err_tip=e}}},x=b,y=(t("de10"),Object(p["a"])(x,a,n,!1,null,"ea737b16",null));s["default"]=y.exports},c8d2:function(e,s,t){var a=t("5e77").PROPER,n=t("d039"),i=t("5899"),r="​᠎";e.exports=function(e){return n((function(){return!!i[e]()||r[e]()!==r||a&&i[e].name!==e}))}},dd88:function(e,s,t){e.exports=t.p+"img/logo2.28c27f6c.png"},de10:function(e,s,t){"use strict";t("5f4c")}}]);
//# sourceMappingURL=chunk-1e1e2960.ec24dec3.js.map