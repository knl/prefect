var lr=Object.defineProperty;var cr=(e,r,t)=>r in e?lr(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t;var B=(e,r,t)=>(cr(e,typeof r!="symbol"?r+"":r,t),t);import{G as dr,H as hr,I as pr}from"./index-3e9b5a4f-22e45b7a.js";import{B as vr}from"./meta-26546594.js";function mr(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var fe={},Er={get exports(){return fe},set exports(e){fe=e}},I={},Rr={get exports(){return I},set exports(e){I=e}},Je=function(r,t){return function(){for(var n=new Array(arguments.length),s=0;s<n.length;s++)n[s]=arguments[s];return r.apply(t,n)}},yr=Je,ce=Object.prototype.toString,de=function(e){return function(r){var t=ce.call(r);return e[t]||(e[t]=t.slice(8,-1).toLowerCase())}}(Object.create(null));function A(e){return e=e.toLowerCase(),function(t){return de(t)===e}}function he(e){return Array.isArray(e)}function j(e){return typeof e>"u"}function wr(e){return e!==null&&!j(e)&&e.constructor!==null&&!j(e.constructor)&&typeof e.constructor.isBuffer=="function"&&e.constructor.isBuffer(e)}var We=A("ArrayBuffer");function br(e){var r;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?r=ArrayBuffer.isView(e):r=e&&e.buffer&&We(e.buffer),r}function Or(e){return typeof e=="string"}function Ar(e){return typeof e=="number"}function Ve(e){return e!==null&&typeof e=="object"}function L(e){if(de(e)!=="object")return!1;var r=Object.getPrototypeOf(e);return r===null||r===Object.prototype}var Sr=A("Date"),Cr=A("File"),xr=A("Blob"),gr=A("FileList");function pe(e){return ce.call(e)==="[object Function]"}function Tr(e){return Ve(e)&&pe(e.pipe)}function Pr(e){var r="[object FormData]";return e&&(typeof FormData=="function"&&e instanceof FormData||ce.call(e)===r||pe(e.toString)&&e.toString()===r)}var _r=A("URLSearchParams");function Nr(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")}function Ur(){return typeof navigator<"u"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window<"u"&&typeof document<"u"}function ve(e,r){if(!(e===null||typeof e>"u"))if(typeof e!="object"&&(e=[e]),he(e))for(var t=0,i=e.length;t<i;t++)r.call(null,e[t],t,e);else for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.call(null,e[n],n,e)}function le(){var e={};function r(n,s){L(e[s])&&L(n)?e[s]=le(e[s],n):L(n)?e[s]=le({},n):he(n)?e[s]=n.slice():e[s]=n}for(var t=0,i=arguments.length;t<i;t++)ve(arguments[t],r);return e}function Dr(e,r,t){return ve(r,function(n,s){t&&typeof n=="function"?e[s]=yr(n,t):e[s]=n}),e}function qr(e){return e.charCodeAt(0)===65279&&(e=e.slice(1)),e}function Br(e,r,t,i){e.prototype=Object.create(r.prototype,i),e.prototype.constructor=e,t&&Object.assign(e.prototype,t)}function Lr(e,r,t){var i,n,s,a={};r=r||{};do{for(i=Object.getOwnPropertyNames(e),n=i.length;n-- >0;)s=i[n],a[s]||(r[s]=e[s],a[s]=!0);e=Object.getPrototypeOf(e)}while(e&&(!t||t(e,r))&&e!==Object.prototype);return r}function Fr(e,r,t){e=String(e),(t===void 0||t>e.length)&&(t=e.length),t-=r.length;var i=e.indexOf(r,t);return i!==-1&&i===t}function $r(e){if(!e)return null;var r=e.length;if(j(r))return null;for(var t=new Array(r);r-- >0;)t[r]=e[r];return t}var Ir=function(e){return function(r){return e&&r instanceof e}}(typeof Uint8Array<"u"&&Object.getPrototypeOf(Uint8Array)),v={isArray:he,isArrayBuffer:We,isBuffer:wr,isFormData:Pr,isArrayBufferView:br,isString:Or,isNumber:Ar,isObject:Ve,isPlainObject:L,isUndefined:j,isDate:Sr,isFile:Cr,isBlob:xr,isFunction:pe,isStream:Tr,isURLSearchParams:_r,isStandardBrowserEnv:Ur,forEach:ve,merge:le,extend:Dr,trim:Nr,stripBOM:qr,inherits:Br,toFlatObject:Lr,kindOf:de,kindOfTest:A,endsWith:Fr,toArray:$r,isTypedArray:Ir,isFileList:gr},g=v;function be(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var ze=function(r,t,i){if(!t)return r;var n;if(i)n=i(t);else if(g.isURLSearchParams(t))n=t.toString();else{var s=[];g.forEach(t,function(f,d){f===null||typeof f>"u"||(g.isArray(f)?d=d+"[]":f=[f],g.forEach(f,function(h){g.isDate(h)?h=h.toISOString():g.isObject(h)&&(h=JSON.stringify(h)),s.push(be(d)+"="+be(h))}))}),n=s.join("&")}if(n){var a=r.indexOf("#");a!==-1&&(r=r.slice(0,a)),r+=(r.indexOf("?")===-1?"?":"&")+n}return r},jr=v;function k(){this.handlers=[]}k.prototype.use=function(r,t,i){return this.handlers.push({fulfilled:r,rejected:t,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1};k.prototype.eject=function(r){this.handlers[r]&&(this.handlers[r]=null)};k.prototype.forEach=function(r){jr.forEach(this.handlers,function(i){i!==null&&r(i)})};var kr=k,Mr=v,Hr=function(r,t){Mr.forEach(r,function(n,s){s!==t&&s.toUpperCase()===t.toUpperCase()&&(r[t]=n,delete r[s])})},Xe=v;function P(e,r,t,i,n){Error.call(this),this.message=e,this.name="AxiosError",r&&(this.code=r),t&&(this.config=t),i&&(this.request=i),n&&(this.response=n)}Xe.inherits(P,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var Ye=P.prototype,Ke={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach(function(e){Ke[e]={value:e}});Object.defineProperties(P,Ke);Object.defineProperty(Ye,"isAxiosError",{value:!0});P.from=function(e,r,t,i,n,s){var a=Object.create(Ye);return Xe.toFlatObject(e,a,function(f){return f!==Error.prototype}),P.call(a,e.message,r,t,i,n),a.name=e.name,s&&Object.assign(a,s),a};var N=P,Qe={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},w=v;function Jr(e,r){r=r||new FormData;var t=[];function i(s){return s===null?"":w.isDate(s)?s.toISOString():w.isArrayBuffer(s)||w.isTypedArray(s)?typeof Blob=="function"?new Blob([s]):Buffer.from(s):s}function n(s,a){if(w.isPlainObject(s)||w.isArray(s)){if(t.indexOf(s)!==-1)throw Error("Circular reference detected in "+a);t.push(s),w.forEach(s,function(f,d){if(!w.isUndefined(f)){var c=a?a+"."+d:d,h;if(f&&!a&&typeof f=="object"){if(w.endsWith(d,"{}"))f=JSON.stringify(f);else if(w.endsWith(d,"[]")&&(h=w.toArray(f))){h.forEach(function(u){!w.isUndefined(u)&&r.append(c,i(u))});return}}n(f,c)}}),t.pop()}else r.append(a,i(s))}return n(e),r}var Ge=Jr,X,Oe;function Wr(){if(Oe)return X;Oe=1;var e=N;return X=function(t,i,n){var s=n.config.validateStatus;!n.status||!s||s(n.status)?t(n):i(new e("Request failed with status code "+n.status,[e.ERR_BAD_REQUEST,e.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))},X}var Y,Ae;function Vr(){if(Ae)return Y;Ae=1;var e=v;return Y=e.isStandardBrowserEnv()?function(){return{write:function(i,n,s,a,o,f){var d=[];d.push(i+"="+encodeURIComponent(n)),e.isNumber(s)&&d.push("expires="+new Date(s).toGMTString()),e.isString(a)&&d.push("path="+a),e.isString(o)&&d.push("domain="+o),f===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(i){var n=document.cookie.match(new RegExp("(^|;\\s*)("+i+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(i){this.write(i,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),Y}var zr=function(r){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(r)},Xr=function(r,t){return t?r.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):r},Yr=zr,Kr=Xr,Ze=function(r,t){return r&&!Yr(t)?Kr(r,t):t},K,Se;function Qr(){if(Se)return K;Se=1;var e=v,r=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];return K=function(i){var n={},s,a,o;return i&&e.forEach(i.split(`
`),function(d){if(o=d.indexOf(":"),s=e.trim(d.substr(0,o)).toLowerCase(),a=e.trim(d.substr(o+1)),s){if(n[s]&&r.indexOf(s)>=0)return;s==="set-cookie"?n[s]=(n[s]?n[s]:[]).concat([a]):n[s]=n[s]?n[s]+", "+a:a}}),n},K}var Q,Ce;function Gr(){if(Ce)return Q;Ce=1;var e=v;return Q=e.isStandardBrowserEnv()?function(){var t=/(msie|trident)/i.test(navigator.userAgent),i=document.createElement("a"),n;function s(a){var o=a;return t&&(i.setAttribute("href",o),o=i.href),i.setAttribute("href",o),{href:i.href,protocol:i.protocol?i.protocol.replace(/:$/,""):"",host:i.host,search:i.search?i.search.replace(/^\?/,""):"",hash:i.hash?i.hash.replace(/^#/,""):"",hostname:i.hostname,port:i.port,pathname:i.pathname.charAt(0)==="/"?i.pathname:"/"+i.pathname}}return n=s(window.location.href),function(o){var f=e.isString(o)?s(o):o;return f.protocol===n.protocol&&f.host===n.host}}():function(){return function(){return!0}}(),Q}var G,xe;function M(){if(xe)return G;xe=1;var e=N,r=v;function t(i){e.call(this,i??"canceled",e.ERR_CANCELED),this.name="CanceledError"}return r.inherits(t,e,{__CANCEL__:!0}),G=t,G}var Z,ge;function Zr(){return ge||(ge=1,Z=function(r){var t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(r);return t&&t[1]||""}),Z}var ee,Te;function Pe(){if(Te)return ee;Te=1;var e=v,r=Wr(),t=Vr(),i=ze,n=Ze,s=Qr(),a=Gr(),o=Qe,f=N,d=M(),c=Zr();return ee=function(u){return new Promise(function(ar,S){var U=u.data,D=u.headers,q=u.responseType,C;function Re(){u.cancelToken&&u.cancelToken.unsubscribe(C),u.signal&&u.signal.removeEventListener("abort",C)}e.isFormData(U)&&e.isStandardBrowserEnv()&&delete D["Content-Type"];var l=new XMLHttpRequest;if(u.auth){var or=u.auth.username||"",ur=u.auth.password?unescape(encodeURIComponent(u.auth.password)):"";D.Authorization="Basic "+btoa(or+":"+ur)}var W=n(u.baseURL,u.url);l.open(u.method.toUpperCase(),i(W,u.params,u.paramsSerializer),!0),l.timeout=u.timeout;function ye(){if(l){var y="getAllResponseHeaders"in l?s(l.getAllResponseHeaders()):null,x=!q||q==="text"||q==="json"?l.responseText:l.response,O={data:x,status:l.status,statusText:l.statusText,headers:y,config:u,request:l};r(function(z){ar(z),Re()},function(z){S(z),Re()},O),l=null}}if("onloadend"in l?l.onloadend=ye:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(ye)},l.onabort=function(){l&&(S(new f("Request aborted",f.ECONNABORTED,u,l)),l=null)},l.onerror=function(){S(new f("Network Error",f.ERR_NETWORK,u,l,l)),l=null},l.ontimeout=function(){var x=u.timeout?"timeout of "+u.timeout+"ms exceeded":"timeout exceeded",O=u.transitional||o;u.timeoutErrorMessage&&(x=u.timeoutErrorMessage),S(new f(x,O.clarifyTimeoutError?f.ETIMEDOUT:f.ECONNABORTED,u,l)),l=null},e.isStandardBrowserEnv()){var we=(u.withCredentials||a(W))&&u.xsrfCookieName?t.read(u.xsrfCookieName):void 0;we&&(D[u.xsrfHeaderName]=we)}"setRequestHeader"in l&&e.forEach(D,function(x,O){typeof U>"u"&&O.toLowerCase()==="content-type"?delete D[O]:l.setRequestHeader(O,x)}),e.isUndefined(u.withCredentials)||(l.withCredentials=!!u.withCredentials),q&&q!=="json"&&(l.responseType=u.responseType),typeof u.onDownloadProgress=="function"&&l.addEventListener("progress",u.onDownloadProgress),typeof u.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",u.onUploadProgress),(u.cancelToken||u.signal)&&(C=function(y){l&&(S(!y||y&&y.type?new d:y),l.abort(),l=null)},u.cancelToken&&u.cancelToken.subscribe(C),u.signal&&(u.signal.aborted?C():u.signal.addEventListener("abort",C))),U||(U=null);var V=c(W);if(V&&["http","https","file"].indexOf(V)===-1){S(new f("Unsupported protocol "+V+":",f.ERR_BAD_REQUEST,u));return}l.send(U)})},ee}var re,_e;function et(){return _e||(_e=1,re=null),re}var p=v,Ne=Hr,Ue=N,rt=Qe,tt=Ge,nt={"Content-Type":"application/x-www-form-urlencoded"};function De(e,r){!p.isUndefined(e)&&p.isUndefined(e["Content-Type"])&&(e["Content-Type"]=r)}function it(){var e;return(typeof XMLHttpRequest<"u"||typeof process<"u"&&Object.prototype.toString.call(process)==="[object process]")&&(e=Pe()),e}function st(e,r,t){if(p.isString(e))try{return(r||JSON.parse)(e),p.trim(e)}catch(i){if(i.name!=="SyntaxError")throw i}return(t||JSON.stringify)(e)}var H={transitional:rt,adapter:it(),transformRequest:[function(r,t){if(Ne(t,"Accept"),Ne(t,"Content-Type"),p.isFormData(r)||p.isArrayBuffer(r)||p.isBuffer(r)||p.isStream(r)||p.isFile(r)||p.isBlob(r))return r;if(p.isArrayBufferView(r))return r.buffer;if(p.isURLSearchParams(r))return De(t,"application/x-www-form-urlencoded;charset=utf-8"),r.toString();var i=p.isObject(r),n=t&&t["Content-Type"],s;if((s=p.isFileList(r))||i&&n==="multipart/form-data"){var a=this.env&&this.env.FormData;return tt(s?{"files[]":r}:r,a&&new a)}else if(i||n==="application/json")return De(t,"application/json"),st(r);return r}],transformResponse:[function(r){var t=this.transitional||H.transitional,i=t&&t.silentJSONParsing,n=t&&t.forcedJSONParsing,s=!i&&this.responseType==="json";if(s||n&&p.isString(r)&&r.length)try{return JSON.parse(r)}catch(a){if(s)throw a.name==="SyntaxError"?Ue.from(a,Ue.ERR_BAD_RESPONSE,this,null,this.response):a}return r}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:et()},validateStatus:function(r){return r>=200&&r<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};p.forEach(["delete","get","head"],function(r){H.headers[r]={}});p.forEach(["post","put","patch"],function(r){H.headers[r]=p.merge(nt)});var me=H,at=v,ot=me,ut=function(r,t,i){var n=this||ot;return at.forEach(i,function(a){r=a.call(n,r,t)}),r},te,qe;function er(){return qe||(qe=1,te=function(r){return!!(r&&r.__CANCEL__)}),te}var Be=v,ne=ut,ft=er(),lt=me,ct=M();function ie(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new ct}var dt=function(r){ie(r),r.headers=r.headers||{},r.data=ne.call(r,r.data,r.headers,r.transformRequest),r.headers=Be.merge(r.headers.common||{},r.headers[r.method]||{},r.headers),Be.forEach(["delete","get","head","post","put","patch","common"],function(n){delete r.headers[n]});var t=r.adapter||lt.adapter;return t(r).then(function(n){return ie(r),n.data=ne.call(r,n.data,n.headers,r.transformResponse),n},function(n){return ft(n)||(ie(r),n&&n.response&&(n.response.data=ne.call(r,n.response.data,n.response.headers,r.transformResponse))),Promise.reject(n)})},E=v,rr=function(r,t){t=t||{};var i={};function n(c,h){return E.isPlainObject(c)&&E.isPlainObject(h)?E.merge(c,h):E.isPlainObject(h)?E.merge({},h):E.isArray(h)?h.slice():h}function s(c){if(E.isUndefined(t[c])){if(!E.isUndefined(r[c]))return n(void 0,r[c])}else return n(r[c],t[c])}function a(c){if(!E.isUndefined(t[c]))return n(void 0,t[c])}function o(c){if(E.isUndefined(t[c])){if(!E.isUndefined(r[c]))return n(void 0,r[c])}else return n(void 0,t[c])}function f(c){if(c in t)return n(r[c],t[c]);if(c in r)return n(void 0,r[c])}var d={url:a,method:a,data:a,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:f};return E.forEach(Object.keys(r).concat(Object.keys(t)),function(h){var u=d[h]||s,R=u(h);E.isUndefined(R)&&u!==f||(i[h]=R)}),i},se,Le;function tr(){return Le||(Le=1,se={version:"0.27.2"}),se}var ht=tr().version,b=N,Ee={};["object","boolean","number","function","string","symbol"].forEach(function(e,r){Ee[e]=function(i){return typeof i===e||"a"+(r<1?"n ":" ")+e}});var Fe={};Ee.transitional=function(r,t,i){function n(s,a){return"[Axios v"+ht+"] Transitional option '"+s+"'"+a+(i?". "+i:"")}return function(s,a,o){if(r===!1)throw new b(n(a," has been removed"+(t?" in "+t:"")),b.ERR_DEPRECATED);return t&&!Fe[a]&&(Fe[a]=!0,console.warn(n(a," has been deprecated since v"+t+" and will be removed in the near future"))),r?r(s,a,o):!0}};function pt(e,r,t){if(typeof e!="object")throw new b("options must be an object",b.ERR_BAD_OPTION_VALUE);for(var i=Object.keys(e),n=i.length;n-- >0;){var s=i[n],a=r[s];if(a){var o=e[s],f=o===void 0||a(o,s,e);if(f!==!0)throw new b("option "+s+" must be "+f,b.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new b("Unknown option "+s,b.ERR_BAD_OPTION)}}var vt={assertOptions:pt,validators:Ee},nr=v,mt=ze,$e=kr,Ie=dt,J=rr,Et=Ze,ir=vt,T=ir.validators;function _(e){this.defaults=e,this.interceptors={request:new $e,response:new $e}}_.prototype.request=function(r,t){typeof r=="string"?(t=t||{},t.url=r):t=r||{},t=J(this.defaults,t),t.method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var i=t.transitional;i!==void 0&&ir.assertOptions(i,{silentJSONParsing:T.transitional(T.boolean),forcedJSONParsing:T.transitional(T.boolean),clarifyTimeoutError:T.transitional(T.boolean)},!1);var n=[],s=!0;this.interceptors.request.forEach(function(R){typeof R.runWhen=="function"&&R.runWhen(t)===!1||(s=s&&R.synchronous,n.unshift(R.fulfilled,R.rejected))});var a=[];this.interceptors.response.forEach(function(R){a.push(R.fulfilled,R.rejected)});var o;if(!s){var f=[Ie,void 0];for(Array.prototype.unshift.apply(f,n),f=f.concat(a),o=Promise.resolve(t);f.length;)o=o.then(f.shift(),f.shift());return o}for(var d=t;n.length;){var c=n.shift(),h=n.shift();try{d=c(d)}catch(u){h(u);break}}try{o=Ie(d)}catch(u){return Promise.reject(u)}for(;a.length;)o=o.then(a.shift(),a.shift());return o};_.prototype.getUri=function(r){r=J(this.defaults,r);var t=Et(r.baseURL,r.url);return mt(t,r.params,r.paramsSerializer)};nr.forEach(["delete","get","head","options"],function(r){_.prototype[r]=function(t,i){return this.request(J(i||{},{method:r,url:t,data:(i||{}).data}))}});nr.forEach(["post","put","patch"],function(r){function t(i){return function(s,a,o){return this.request(J(o||{},{method:r,headers:i?{"Content-Type":"multipart/form-data"}:{},url:s,data:a}))}}_.prototype[r]=t(),_.prototype[r+"Form"]=t(!0)});var Rt=_,ae,je;function yt(){if(je)return ae;je=1;var e=M();function r(t){if(typeof t!="function")throw new TypeError("executor must be a function.");var i;this.promise=new Promise(function(a){i=a});var n=this;this.promise.then(function(s){if(n._listeners){var a,o=n._listeners.length;for(a=0;a<o;a++)n._listeners[a](s);n._listeners=null}}),this.promise.then=function(s){var a,o=new Promise(function(f){n.subscribe(f),a=f}).then(s);return o.cancel=function(){n.unsubscribe(a)},o},t(function(a){n.reason||(n.reason=new e(a),i(n.reason))})}return r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.prototype.subscribe=function(i){if(this.reason){i(this.reason);return}this._listeners?this._listeners.push(i):this._listeners=[i]},r.prototype.unsubscribe=function(i){if(this._listeners){var n=this._listeners.indexOf(i);n!==-1&&this._listeners.splice(n,1)}},r.source=function(){var i,n=new r(function(a){i=a});return{token:n,cancel:i}},ae=r,ae}var oe,ke;function wt(){return ke||(ke=1,oe=function(r){return function(i){return r.apply(null,i)}}),oe}var ue,Me;function bt(){if(Me)return ue;Me=1;var e=v;return ue=function(t){return e.isObject(t)&&t.isAxiosError===!0},ue}var He=v,Ot=Je,F=Rt,At=rr,St=me;function sr(e){var r=new F(e),t=Ot(F.prototype.request,r);return He.extend(t,F.prototype,r),He.extend(t,r),t.create=function(n){return sr(At(e,n))},t}var m=sr(St);m.Axios=F;m.CanceledError=M();m.CancelToken=yt();m.isCancel=er();m.VERSION=tr().version;m.toFormData=Ge;m.AxiosError=N;m.Cancel=m.CanceledError;m.all=function(r){return Promise.all(r)};m.spread=wt();m.isAxiosError=bt();Rr.exports=m;I.default=m;(function(e){e.exports=I})(Er);const Ct=mr(fe),xt=e=>{switch(e){case"workers":return"access:workers";case"work_pools":return"access:work_pools";default:return null}},gt=function(e){return{apiUrl:e.api_url,flags:this.map("FlagResponse",e.flags,"FeatureFlag").filter(dr)}},Tt={...hr,FlagResponse:{FeatureFlag:xt},SettingsResponse:{Settings:gt}},Pt=new pr(Tt);class ${static async load(){if(this.settings!==null)return this.settings;if(this.promise!==null)return this.promise;this.promise=new Promise(t=>Ct.get("/ui-settings",{baseURL:this.baseUrl}).then(({data:i})=>Pt.map("SettingsResponse",i,"Settings")).then(t));const r=await this.promise;return this.settings=r}static async get(r,t){var n;await this.load();const i=(n=this.settings)==null?void 0:n[r];if(i===void 0){if(t)return t;throw`UI setting "${r}" does not exist and no default was provided.`}return i}}B($,"settings",null),B($,"promise",null),B($,"baseUrl",vr());function qt(e){return class extends e{constructor(){super(...arguments);B(this,"server",$.get("apiUrl"))}}}export{qt as A,$ as U};