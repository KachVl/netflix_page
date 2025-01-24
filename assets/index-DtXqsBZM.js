(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();var Ff={exports:{}},_a={},Of={exports:{}},ht={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gg;function tM(){if(Gg)return ht;Gg=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),g=Symbol.iterator;function _(N){return N===null||typeof N!="object"?null:(N=g&&N[g]||N["@@iterator"],typeof N=="function"?N:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,E={};function S(N,ne,Ue){this.props=N,this.context=ne,this.refs=E,this.updater=Ue||x}S.prototype.isReactComponent={},S.prototype.setState=function(N,ne){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,ne,"setState")},S.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function y(){}y.prototype=S.prototype;function L(N,ne,Ue){this.props=N,this.context=ne,this.refs=E,this.updater=Ue||x}var b=L.prototype=new y;b.constructor=L,M(b,S.prototype),b.isPureReactComponent=!0;var C=Array.isArray,O=Object.prototype.hasOwnProperty,F={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function z(N,ne,Ue){var Z,de={},Se=null,ve=null;if(ne!=null)for(Z in ne.ref!==void 0&&(ve=ne.ref),ne.key!==void 0&&(Se=""+ne.key),ne)O.call(ne,Z)&&!U.hasOwnProperty(Z)&&(de[Z]=ne[Z]);var Te=arguments.length-2;if(Te===1)de.children=Ue;else if(1<Te){for(var Ie=Array(Te),Je=0;Je<Te;Je++)Ie[Je]=arguments[Je+2];de.children=Ie}if(N&&N.defaultProps)for(Z in Te=N.defaultProps,Te)de[Z]===void 0&&(de[Z]=Te[Z]);return{$$typeof:n,type:N,key:Se,ref:ve,props:de,_owner:F.current}}function P(N,ne){return{$$typeof:n,type:N.type,key:ne,ref:N.ref,props:N.props,_owner:N._owner}}function R(N){return typeof N=="object"&&N!==null&&N.$$typeof===n}function H(N){var ne={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(Ue){return ne[Ue]})}var oe=/\/+/g;function te(N,ne){return typeof N=="object"&&N!==null&&N.key!=null?H(""+N.key):ne.toString(36)}function ue(N,ne,Ue,Z,de){var Se=typeof N;(Se==="undefined"||Se==="boolean")&&(N=null);var ve=!1;if(N===null)ve=!0;else switch(Se){case"string":case"number":ve=!0;break;case"object":switch(N.$$typeof){case n:case e:ve=!0}}if(ve)return ve=N,de=de(ve),N=Z===""?"."+te(ve,0):Z,C(de)?(Ue="",N!=null&&(Ue=N.replace(oe,"$&/")+"/"),ue(de,ne,Ue,"",function(Je){return Je})):de!=null&&(R(de)&&(de=P(de,Ue+(!de.key||ve&&ve.key===de.key?"":(""+de.key).replace(oe,"$&/")+"/")+N)),ne.push(de)),1;if(ve=0,Z=Z===""?".":Z+":",C(N))for(var Te=0;Te<N.length;Te++){Se=N[Te];var Ie=Z+te(Se,Te);ve+=ue(Se,ne,Ue,Ie,de)}else if(Ie=_(N),typeof Ie=="function")for(N=Ie.call(N),Te=0;!(Se=N.next()).done;)Se=Se.value,Ie=Z+te(Se,Te++),ve+=ue(Se,ne,Ue,Ie,de);else if(Se==="object")throw ne=String(N),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.");return ve}function he(N,ne,Ue){if(N==null)return N;var Z=[],de=0;return ue(N,Z,"","",function(Se){return ne.call(Ue,Se,de++)}),Z}function le(N){if(N._status===-1){var ne=N._result;ne=ne(),ne.then(function(Ue){(N._status===0||N._status===-1)&&(N._status=1,N._result=Ue)},function(Ue){(N._status===0||N._status===-1)&&(N._status=2,N._result=Ue)}),N._status===-1&&(N._status=0,N._result=ne)}if(N._status===1)return N._result.default;throw N._result}var ie={current:null},B={transition:null},ae={ReactCurrentDispatcher:ie,ReactCurrentBatchConfig:B,ReactCurrentOwner:F};function re(){throw Error("act(...) is not supported in production builds of React.")}return ht.Children={map:he,forEach:function(N,ne,Ue){he(N,function(){ne.apply(this,arguments)},Ue)},count:function(N){var ne=0;return he(N,function(){ne++}),ne},toArray:function(N){return he(N,function(ne){return ne})||[]},only:function(N){if(!R(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},ht.Component=S,ht.Fragment=t,ht.Profiler=o,ht.PureComponent=L,ht.StrictMode=r,ht.Suspense=d,ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ae,ht.act=re,ht.cloneElement=function(N,ne,Ue){if(N==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+N+".");var Z=M({},N.props),de=N.key,Se=N.ref,ve=N._owner;if(ne!=null){if(ne.ref!==void 0&&(Se=ne.ref,ve=F.current),ne.key!==void 0&&(de=""+ne.key),N.type&&N.type.defaultProps)var Te=N.type.defaultProps;for(Ie in ne)O.call(ne,Ie)&&!U.hasOwnProperty(Ie)&&(Z[Ie]=ne[Ie]===void 0&&Te!==void 0?Te[Ie]:ne[Ie])}var Ie=arguments.length-2;if(Ie===1)Z.children=Ue;else if(1<Ie){Te=Array(Ie);for(var Je=0;Je<Ie;Je++)Te[Je]=arguments[Je+2];Z.children=Te}return{$$typeof:n,type:N.type,key:de,ref:Se,props:Z,_owner:ve}},ht.createContext=function(N){return N={$$typeof:u,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},N.Provider={$$typeof:l,_context:N},N.Consumer=N},ht.createElement=z,ht.createFactory=function(N){var ne=z.bind(null,N);return ne.type=N,ne},ht.createRef=function(){return{current:null}},ht.forwardRef=function(N){return{$$typeof:c,render:N}},ht.isValidElement=R,ht.lazy=function(N){return{$$typeof:m,_payload:{_status:-1,_result:N},_init:le}},ht.memo=function(N,ne){return{$$typeof:h,type:N,compare:ne===void 0?null:ne}},ht.startTransition=function(N){var ne=B.transition;B.transition={};try{N()}finally{B.transition=ne}},ht.unstable_act=re,ht.useCallback=function(N,ne){return ie.current.useCallback(N,ne)},ht.useContext=function(N){return ie.current.useContext(N)},ht.useDebugValue=function(){},ht.useDeferredValue=function(N){return ie.current.useDeferredValue(N)},ht.useEffect=function(N,ne){return ie.current.useEffect(N,ne)},ht.useId=function(){return ie.current.useId()},ht.useImperativeHandle=function(N,ne,Ue){return ie.current.useImperativeHandle(N,ne,Ue)},ht.useInsertionEffect=function(N,ne){return ie.current.useInsertionEffect(N,ne)},ht.useLayoutEffect=function(N,ne){return ie.current.useLayoutEffect(N,ne)},ht.useMemo=function(N,ne){return ie.current.useMemo(N,ne)},ht.useReducer=function(N,ne,Ue){return ie.current.useReducer(N,ne,Ue)},ht.useRef=function(N){return ie.current.useRef(N)},ht.useState=function(N){return ie.current.useState(N)},ht.useSyncExternalStore=function(N,ne,Ue){return ie.current.useSyncExternalStore(N,ne,Ue)},ht.useTransition=function(){return ie.current.useTransition()},ht.version="18.3.1",ht}var Wg;function Lh(){return Wg||(Wg=1,Of.exports=tM()),Of.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xg;function nM(){if(Xg)return _a;Xg=1;var n=Lh(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(c,d,h){var m,g={},_=null,x=null;h!==void 0&&(_=""+h),d.key!==void 0&&(_=""+d.key),d.ref!==void 0&&(x=d.ref);for(m in d)r.call(d,m)&&!l.hasOwnProperty(m)&&(g[m]=d[m]);if(c&&c.defaultProps)for(m in d=c.defaultProps,d)g[m]===void 0&&(g[m]=d[m]);return{$$typeof:e,type:c,key:_,ref:x,props:g,_owner:o.current}}return _a.Fragment=t,_a.jsx=u,_a.jsxs=u,_a}var jg;function iM(){return jg||(jg=1,Ff.exports=nM()),Ff.exports}var Ve=iM(),Ye=Lh(),tu={},kf={exports:{}},zn={},Bf={exports:{}},zf={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yg;function rM(){return Yg||(Yg=1,function(n){function e(B,ae){var re=B.length;B.push(ae);e:for(;0<re;){var N=re-1>>>1,ne=B[N];if(0<o(ne,ae))B[N]=ae,B[re]=ne,re=N;else break e}}function t(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var ae=B[0],re=B.pop();if(re!==ae){B[0]=re;e:for(var N=0,ne=B.length,Ue=ne>>>1;N<Ue;){var Z=2*(N+1)-1,de=B[Z],Se=Z+1,ve=B[Se];if(0>o(de,re))Se<ne&&0>o(ve,de)?(B[N]=ve,B[Se]=re,N=Se):(B[N]=de,B[Z]=re,N=Z);else if(Se<ne&&0>o(ve,re))B[N]=ve,B[Se]=re,N=Se;else break e}}return ae}function o(B,ae){var re=B.sortIndex-ae.sortIndex;return re!==0?re:B.id-ae.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var u=Date,c=u.now();n.unstable_now=function(){return u.now()-c}}var d=[],h=[],m=1,g=null,_=3,x=!1,M=!1,E=!1,S=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(B){for(var ae=t(h);ae!==null;){if(ae.callback===null)r(h);else if(ae.startTime<=B)r(h),ae.sortIndex=ae.expirationTime,e(d,ae);else break;ae=t(h)}}function C(B){if(E=!1,b(B),!M)if(t(d)!==null)M=!0,le(O);else{var ae=t(h);ae!==null&&ie(C,ae.startTime-B)}}function O(B,ae){M=!1,E&&(E=!1,y(z),z=-1),x=!0;var re=_;try{for(b(ae),g=t(d);g!==null&&(!(g.expirationTime>ae)||B&&!H());){var N=g.callback;if(typeof N=="function"){g.callback=null,_=g.priorityLevel;var ne=N(g.expirationTime<=ae);ae=n.unstable_now(),typeof ne=="function"?g.callback=ne:g===t(d)&&r(d),b(ae)}else r(d);g=t(d)}if(g!==null)var Ue=!0;else{var Z=t(h);Z!==null&&ie(C,Z.startTime-ae),Ue=!1}return Ue}finally{g=null,_=re,x=!1}}var F=!1,U=null,z=-1,P=5,R=-1;function H(){return!(n.unstable_now()-R<P)}function oe(){if(U!==null){var B=n.unstable_now();R=B;var ae=!0;try{ae=U(!0,B)}finally{ae?te():(F=!1,U=null)}}else F=!1}var te;if(typeof L=="function")te=function(){L(oe)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,he=ue.port2;ue.port1.onmessage=oe,te=function(){he.postMessage(null)}}else te=function(){S(oe,0)};function le(B){U=B,F||(F=!0,te())}function ie(B,ae){z=S(function(){B(n.unstable_now())},ae)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(B){B.callback=null},n.unstable_continueExecution=function(){M||x||(M=!0,le(O))},n.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<B?Math.floor(1e3/B):5},n.unstable_getCurrentPriorityLevel=function(){return _},n.unstable_getFirstCallbackNode=function(){return t(d)},n.unstable_next=function(B){switch(_){case 1:case 2:case 3:var ae=3;break;default:ae=_}var re=_;_=ae;try{return B()}finally{_=re}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(B,ae){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var re=_;_=B;try{return ae()}finally{_=re}},n.unstable_scheduleCallback=function(B,ae,re){var N=n.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?N+re:N):re=N,B){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=re+ne,B={id:m++,callback:ae,priorityLevel:B,startTime:re,expirationTime:ne,sortIndex:-1},re>N?(B.sortIndex=re,e(h,B),t(d)===null&&B===t(h)&&(E?(y(z),z=-1):E=!0,ie(C,re-N))):(B.sortIndex=ne,e(d,B),M||x||(M=!0,le(O))),B},n.unstable_shouldYield=H,n.unstable_wrapCallback=function(B){var ae=_;return function(){var re=_;_=ae;try{return B.apply(this,arguments)}finally{_=re}}}}(zf)),zf}var qg;function sM(){return qg||(qg=1,Bf.exports=rM()),Bf.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kg;function oM(){if(Kg)return zn;Kg=1;var n=Lh(),e=sM();function t(i){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+i,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(i,s){u(i,s),u(i+"Capture",s)}function u(i,s){for(o[i]=s,i=0;i<s.length;i++)r.add(s[i])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},g={};function _(i){return d.call(g,i)?!0:d.call(m,i)?!1:h.test(i)?g[i]=!0:(m[i]=!0,!1)}function x(i,s,a,f){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return f?!1:a!==null?!a.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function M(i,s,a,f){if(s===null||typeof s>"u"||x(i,s,a,f))return!0;if(f)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function E(i,s,a,f,p,v,T){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=f,this.attributeNamespace=p,this.mustUseProperty=a,this.propertyName=i,this.type=s,this.sanitizeURL=v,this.removeEmptyString=T}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){S[i]=new E(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var s=i[0];S[s]=new E(s,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){S[i]=new E(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){S[i]=new E(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){S[i]=new E(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){S[i]=new E(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){S[i]=new E(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){S[i]=new E(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){S[i]=new E(i,5,!1,i.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function L(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var s=i.replace(y,L);S[s]=new E(s,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var s=i.replace(y,L);S[s]=new E(s,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var s=i.replace(y,L);S[s]=new E(s,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){S[i]=new E(i,1,!1,i.toLowerCase(),null,!1,!1)}),S.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){S[i]=new E(i,1,!1,i.toLowerCase(),null,!0,!0)});function b(i,s,a,f){var p=S.hasOwnProperty(s)?S[s]:null;(p!==null?p.type!==0:f||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(M(s,a,p,f)&&(a=null),f||p===null?_(s)&&(a===null?i.removeAttribute(s):i.setAttribute(s,""+a)):p.mustUseProperty?i[p.propertyName]=a===null?p.type===3?!1:"":a:(s=p.attributeName,f=p.attributeNamespace,a===null?i.removeAttribute(s):(p=p.type,a=p===3||p===4&&a===!0?"":""+a,f?i.setAttributeNS(f,s,a):i.setAttribute(s,a))))}var C=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,O=Symbol.for("react.element"),F=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),z=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),H=Symbol.for("react.context"),oe=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),ue=Symbol.for("react.suspense_list"),he=Symbol.for("react.memo"),le=Symbol.for("react.lazy"),ie=Symbol.for("react.offscreen"),B=Symbol.iterator;function ae(i){return i===null||typeof i!="object"?null:(i=B&&i[B]||i["@@iterator"],typeof i=="function"?i:null)}var re=Object.assign,N;function ne(i){if(N===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);N=s&&s[1]||""}return`
`+N+i}var Ue=!1;function Z(i,s){if(!i||Ue)return"";Ue=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(ee){var f=ee}Reflect.construct(i,[],s)}else{try{s.call()}catch(ee){f=ee}i.call(s.prototype)}else{try{throw Error()}catch(ee){f=ee}i()}}catch(ee){if(ee&&f&&typeof ee.stack=="string"){for(var p=ee.stack.split(`
`),v=f.stack.split(`
`),T=p.length-1,I=v.length-1;1<=T&&0<=I&&p[T]!==v[I];)I--;for(;1<=T&&0<=I;T--,I--)if(p[T]!==v[I]){if(T!==1||I!==1)do if(T--,I--,0>I||p[T]!==v[I]){var k=`
`+p[T].replace(" at new "," at ");return i.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",i.displayName)),k}while(1<=T&&0<=I);break}}}finally{Ue=!1,Error.prepareStackTrace=a}return(i=i?i.displayName||i.name:"")?ne(i):""}function de(i){switch(i.tag){case 5:return ne(i.type);case 16:return ne("Lazy");case 13:return ne("Suspense");case 19:return ne("SuspenseList");case 0:case 2:case 15:return i=Z(i.type,!1),i;case 11:return i=Z(i.type.render,!1),i;case 1:return i=Z(i.type,!0),i;default:return""}}function Se(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case U:return"Fragment";case F:return"Portal";case P:return"Profiler";case z:return"StrictMode";case te:return"Suspense";case ue:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case H:return(i.displayName||"Context")+".Consumer";case R:return(i._context.displayName||"Context")+".Provider";case oe:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case he:return s=i.displayName||null,s!==null?s:Se(i.type)||"Memo";case le:s=i._payload,i=i._init;try{return Se(i(s))}catch{}}return null}function ve(i){var s=i.type;switch(i.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=s.render,i=i.displayName||i.name||"",s.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Se(s);case 8:return s===z?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function Te(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Ie(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Je(i){var s=Ie(i)?"checked":"value",a=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),f=""+i[s];if(!i.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var p=a.get,v=a.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return p.call(this)},set:function(T){f=""+T,v.call(this,T)}}),Object.defineProperty(i,s,{enumerable:a.enumerable}),{getValue:function(){return f},setValue:function(T){f=""+T},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function Pt(i){i._valueTracker||(i._valueTracker=Je(i))}function _t(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var a=s.getValue(),f="";return i&&(f=Ie(i)?i.checked?"true":"false":i.value),i=f,i!==a?(s.setValue(i),!0):!1}function It(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function V(i,s){var a=s.checked;return re({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??i._wrapperState.initialChecked})}function Rn(i,s){var a=s.defaultValue==null?"":s.defaultValue,f=s.checked!=null?s.checked:s.defaultChecked;a=Te(s.value!=null?s.value:a),i._wrapperState={initialChecked:f,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function gt(i,s){s=s.checked,s!=null&&b(i,"checked",s,!1)}function ft(i,s){gt(i,s);var a=Te(s.value),f=s.type;if(a!=null)f==="number"?(a===0&&i.value===""||i.value!=a)&&(i.value=""+a):i.value!==""+a&&(i.value=""+a);else if(f==="submit"||f==="reset"){i.removeAttribute("value");return}s.hasOwnProperty("value")?Rt(i,s.type,a):s.hasOwnProperty("defaultValue")&&Rt(i,s.type,Te(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(i.defaultChecked=!!s.defaultChecked)}function qe(i,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var f=s.type;if(!(f!=="submit"&&f!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+i._wrapperState.initialValue,a||s===i.value||(i.value=s),i.defaultValue=s}a=i.name,a!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,a!==""&&(i.name=a)}function Rt(i,s,a){(s!=="number"||It(i.ownerDocument)!==i)&&(a==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+a&&(i.defaultValue=""+a))}var We=Array.isArray;function D(i,s,a,f){if(i=i.options,s){s={};for(var p=0;p<a.length;p++)s["$"+a[p]]=!0;for(a=0;a<i.length;a++)p=s.hasOwnProperty("$"+i[a].value),i[a].selected!==p&&(i[a].selected=p),p&&f&&(i[a].defaultSelected=!0)}else{for(a=""+Te(a),s=null,p=0;p<i.length;p++){if(i[p].value===a){i[p].selected=!0,f&&(i[p].defaultSelected=!0);return}s!==null||i[p].disabled||(s=i[p])}s!==null&&(s.selected=!0)}}function w(i,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return re({},s,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function $(i,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(t(92));if(We(a)){if(1<a.length)throw Error(t(93));a=a[0]}s=a}s==null&&(s=""),a=s}i._wrapperState={initialValue:Te(a)}}function pe(i,s){var a=Te(s.value),f=Te(s.defaultValue);a!=null&&(a=""+a,a!==i.value&&(i.value=a),s.defaultValue==null&&i.defaultValue!==a&&(i.defaultValue=a)),f!=null&&(i.defaultValue=""+f)}function ge(i){var s=i.textContent;s===i._wrapperState.initialValue&&s!==""&&s!==null&&(i.value=s)}function ce(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xe(i,s){return i==null||i==="http://www.w3.org/1999/xhtml"?ce(s):i==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var we,Ne=function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,f,p){MSApp.execUnsafeLocalFunction(function(){return i(s,a,f,p)})}:i}(function(i,s){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=s;else{for(we=we||document.createElement("div"),we.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=we.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;s.firstChild;)i.appendChild(s.firstChild)}});function ct(i,s){if(s){var a=i.firstChild;if(a&&a===i.lastChild&&a.nodeType===3){a.nodeValue=s;return}}i.textContent=s}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oe=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(i){Oe.forEach(function(s){s=s+i.charAt(0).toUpperCase()+i.substring(1),Me[s]=Me[i]})});function $e(i,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||Me.hasOwnProperty(i)&&Me[i]?(""+s).trim():s+"px"}function nt(i,s){i=i.style;for(var a in s)if(s.hasOwnProperty(a)){var f=a.indexOf("--")===0,p=$e(a,s[a],f);a==="float"&&(a="cssFloat"),f?i.setProperty(a,p):i[a]=p}}var ke=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function dt(i,s){if(s){if(ke[i]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function st(i,s){if(i.indexOf("-")===-1)return typeof s.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var At=null;function W(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var Ae=null,se=null,fe=null;function be(i){if(i=na(i)){if(typeof Ae!="function")throw Error(t(280));var s=i.stateNode;s&&(s=gl(s),Ae(i.stateNode,i.type,s))}}function Pe(i){se?fe?fe.push(i):fe=[i]:se=i}function ot(){if(se){var i=se,s=fe;if(fe=se=null,be(i),s)for(i=0;i<s.length;i++)be(s[i])}}function Nt(i,s){return i(s)}function en(){}var St=!1;function Un(i,s,a){if(St)return i(s,a);St=!0;try{return Nt(i,s,a)}finally{St=!1,(se!==null||fe!==null)&&(en(),ot())}}function Cn(i,s){var a=i.stateNode;if(a===null)return null;var f=gl(a);if(f===null)return null;a=f[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(i=i.type,f=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!f;break e;default:i=!1}if(i)return null;if(a&&typeof a!="function")throw Error(t(231,s,typeof a));return a}var Cs=!1;if(c)try{var lr={};Object.defineProperty(lr,"passive",{get:function(){Cs=!0}}),window.addEventListener("test",lr,lr),window.removeEventListener("test",lr,lr)}catch{Cs=!1}function Ui(i,s,a,f,p,v,T,I,k){var ee=Array.prototype.slice.call(arguments,3);try{s.apply(a,ee)}catch(_e){this.onError(_e)}}var Ni=!1,Yr=null,qr=!1,ur=null,qa={onError:function(i){Ni=!0,Yr=i}};function Ps(i,s,a,f,p,v,T,I,k){Ni=!1,Yr=null,Ui.apply(qa,arguments)}function Ka(i,s,a,f,p,v,T,I,k){if(Ps.apply(this,arguments),Ni){if(Ni){var ee=Yr;Ni=!1,Yr=null}else throw Error(t(198));qr||(qr=!0,ur=ee)}}function Ei(i){var s=i,a=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,s.flags&4098&&(a=s.return),i=s.return;while(i)}return s.tag===3?a:null}function $a(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function Za(i){if(Ei(i)!==i)throw Error(t(188))}function rc(i){var s=i.alternate;if(!s){if(s=Ei(i),s===null)throw Error(t(188));return s!==i?null:i}for(var a=i,f=s;;){var p=a.return;if(p===null)break;var v=p.alternate;if(v===null){if(f=p.return,f!==null){a=f;continue}break}if(p.child===v.child){for(v=p.child;v;){if(v===a)return Za(p),i;if(v===f)return Za(p),s;v=v.sibling}throw Error(t(188))}if(a.return!==f.return)a=p,f=v;else{for(var T=!1,I=p.child;I;){if(I===a){T=!0,a=p,f=v;break}if(I===f){T=!0,f=p,a=v;break}I=I.sibling}if(!T){for(I=v.child;I;){if(I===a){T=!0,a=v,f=p;break}if(I===f){T=!0,f=v,a=p;break}I=I.sibling}if(!T)throw Error(t(189))}}if(a.alternate!==f)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?i:s}function Qa(i){return i=rc(i),i!==null?Ja(i):null}function Ja(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var s=Ja(i);if(s!==null)return s;i=i.sibling}return null}var el=e.unstable_scheduleCallback,A=e.unstable_cancelCallback,X=e.unstable_shouldYield,J=e.unstable_requestPaint,q=e.unstable_now,j=e.unstable_getCurrentPriorityLevel,xe=e.unstable_ImmediatePriority,Re=e.unstable_UserBlockingPriority,De=e.unstable_NormalPriority,Be=e.unstable_LowPriority,it=e.unstable_IdlePriority,tt=null,He=null;function yt(i){if(He&&typeof He.onCommitFiberRoot=="function")try{He.onCommitFiberRoot(tt,i,void 0,(i.current.flags&128)===128)}catch{}}var at=Math.clz32?Math.clz32:xt,Wt=Math.log,Bt=Math.LN2;function xt(i){return i>>>=0,i===0?32:31-(Wt(i)/Bt|0)|0}var Ke=64,Xt=4194304;function vt(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function _n(i,s){var a=i.pendingLanes;if(a===0)return 0;var f=0,p=i.suspendedLanes,v=i.pingedLanes,T=a&268435455;if(T!==0){var I=T&~p;I!==0?f=vt(I):(v&=T,v!==0&&(f=vt(v)))}else T=a&~p,T!==0?f=vt(T):v!==0&&(f=vt(v));if(f===0)return 0;if(s!==0&&s!==f&&!(s&p)&&(p=f&-f,v=s&-s,p>=v||p===16&&(v&4194240)!==0))return s;if(f&4&&(f|=a&16),s=i.entangledLanes,s!==0)for(i=i.entanglements,s&=f;0<s;)a=31-at(s),p=1<<a,f|=i[a],s&=~p;return f}function cr(i,s){switch(i){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pn(i,s){for(var a=i.suspendedLanes,f=i.pingedLanes,p=i.expirationTimes,v=i.pendingLanes;0<v;){var T=31-at(v),I=1<<T,k=p[T];k===-1?(!(I&a)||I&f)&&(p[T]=cr(I,s)):k<=s&&(i.expiredLanes|=I),v&=~I}}function Fi(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function Lt(){var i=Ke;return Ke<<=1,!(Ke&4194240)&&(Ke=64),i}function vn(i){for(var s=[],a=0;31>a;a++)s.push(i);return s}function an(i,s,a){i.pendingLanes|=s,s!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,s=31-at(s),i[s]=a}function hn(i,s){var a=i.pendingLanes&~s;i.pendingLanes=s,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=s,i.mutableReadLanes&=s,i.entangledLanes&=s,s=i.entanglements;var f=i.eventTimes;for(i=i.expirationTimes;0<a;){var p=31-at(a),v=1<<p;s[p]=0,f[p]=-1,i[p]=-1,a&=~v}}function ln(i,s){var a=i.entangledLanes|=s;for(i=i.entanglements;a;){var f=31-at(a),p=1<<f;p&s|i[f]&s&&(i[f]|=s),a&=~p}}var Mt=0;function Ti(i){return i&=-i,1<i?4<i?i&268435455?16:536870912:4:1}var Mp,sc,Ep,Tp,wp,oc=!1,tl=[],fr=null,dr=null,hr=null,zo=new Map,Vo=new Map,pr=[],Tx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ap(i,s){switch(i){case"focusin":case"focusout":fr=null;break;case"dragenter":case"dragleave":dr=null;break;case"mouseover":case"mouseout":hr=null;break;case"pointerover":case"pointerout":zo.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vo.delete(s.pointerId)}}function Ho(i,s,a,f,p,v){return i===null||i.nativeEvent!==v?(i={blockedOn:s,domEventName:a,eventSystemFlags:f,nativeEvent:v,targetContainers:[p]},s!==null&&(s=na(s),s!==null&&sc(s)),i):(i.eventSystemFlags|=f,s=i.targetContainers,p!==null&&s.indexOf(p)===-1&&s.push(p),i)}function wx(i,s,a,f,p){switch(s){case"focusin":return fr=Ho(fr,i,s,a,f,p),!0;case"dragenter":return dr=Ho(dr,i,s,a,f,p),!0;case"mouseover":return hr=Ho(hr,i,s,a,f,p),!0;case"pointerover":var v=p.pointerId;return zo.set(v,Ho(zo.get(v)||null,i,s,a,f,p)),!0;case"gotpointercapture":return v=p.pointerId,Vo.set(v,Ho(Vo.get(v)||null,i,s,a,f,p)),!0}return!1}function Rp(i){var s=Kr(i.target);if(s!==null){var a=Ei(s);if(a!==null){if(s=a.tag,s===13){if(s=$a(a),s!==null){i.blockedOn=s,wp(i.priority,function(){Ep(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){i.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}i.blockedOn=null}function nl(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var a=lc(i.domEventName,i.eventSystemFlags,s[0],i.nativeEvent);if(a===null){a=i.nativeEvent;var f=new a.constructor(a.type,a);At=f,a.target.dispatchEvent(f),At=null}else return s=na(a),s!==null&&sc(s),i.blockedOn=a,!1;s.shift()}return!0}function Cp(i,s,a){nl(i)&&a.delete(s)}function Ax(){oc=!1,fr!==null&&nl(fr)&&(fr=null),dr!==null&&nl(dr)&&(dr=null),hr!==null&&nl(hr)&&(hr=null),zo.forEach(Cp),Vo.forEach(Cp)}function Go(i,s){i.blockedOn===s&&(i.blockedOn=null,oc||(oc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Ax)))}function Wo(i){function s(p){return Go(p,i)}if(0<tl.length){Go(tl[0],i);for(var a=1;a<tl.length;a++){var f=tl[a];f.blockedOn===i&&(f.blockedOn=null)}}for(fr!==null&&Go(fr,i),dr!==null&&Go(dr,i),hr!==null&&Go(hr,i),zo.forEach(s),Vo.forEach(s),a=0;a<pr.length;a++)f=pr[a],f.blockedOn===i&&(f.blockedOn=null);for(;0<pr.length&&(a=pr[0],a.blockedOn===null);)Rp(a),a.blockedOn===null&&pr.shift()}var bs=C.ReactCurrentBatchConfig,il=!0;function Rx(i,s,a,f){var p=Mt,v=bs.transition;bs.transition=null;try{Mt=1,ac(i,s,a,f)}finally{Mt=p,bs.transition=v}}function Cx(i,s,a,f){var p=Mt,v=bs.transition;bs.transition=null;try{Mt=4,ac(i,s,a,f)}finally{Mt=p,bs.transition=v}}function ac(i,s,a,f){if(il){var p=lc(i,s,a,f);if(p===null)wc(i,s,f,rl,a),Ap(i,f);else if(wx(p,i,s,a,f))f.stopPropagation();else if(Ap(i,f),s&4&&-1<Tx.indexOf(i)){for(;p!==null;){var v=na(p);if(v!==null&&Mp(v),v=lc(i,s,a,f),v===null&&wc(i,s,f,rl,a),v===p)break;p=v}p!==null&&f.stopPropagation()}else wc(i,s,f,null,a)}}var rl=null;function lc(i,s,a,f){if(rl=null,i=W(f),i=Kr(i),i!==null)if(s=Ei(i),s===null)i=null;else if(a=s.tag,a===13){if(i=$a(s),i!==null)return i;i=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null);return rl=i,null}function Pp(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(j()){case xe:return 1;case Re:return 4;case De:case Be:return 16;case it:return 536870912;default:return 16}default:return 16}}var mr=null,uc=null,sl=null;function bp(){if(sl)return sl;var i,s=uc,a=s.length,f,p="value"in mr?mr.value:mr.textContent,v=p.length;for(i=0;i<a&&s[i]===p[i];i++);var T=a-i;for(f=1;f<=T&&s[a-f]===p[v-f];f++);return sl=p.slice(i,1<f?1-f:void 0)}function ol(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function al(){return!0}function Dp(){return!1}function Xn(i){function s(a,f,p,v,T){this._reactName=a,this._targetInst=p,this.type=f,this.nativeEvent=v,this.target=T,this.currentTarget=null;for(var I in i)i.hasOwnProperty(I)&&(a=i[I],this[I]=a?a(v):v[I]);return this.isDefaultPrevented=(v.defaultPrevented!=null?v.defaultPrevented:v.returnValue===!1)?al:Dp,this.isPropagationStopped=Dp,this}return re(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=al)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=al)},persist:function(){},isPersistent:al}),s}var Ds={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cc=Xn(Ds),Xo=re({},Ds,{view:0,detail:0}),Px=Xn(Xo),fc,dc,jo,ll=re({},Xo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pc,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==jo&&(jo&&i.type==="mousemove"?(fc=i.screenX-jo.screenX,dc=i.screenY-jo.screenY):dc=fc=0,jo=i),fc)},movementY:function(i){return"movementY"in i?i.movementY:dc}}),Lp=Xn(ll),bx=re({},ll,{dataTransfer:0}),Dx=Xn(bx),Lx=re({},Xo,{relatedTarget:0}),hc=Xn(Lx),Ix=re({},Ds,{animationName:0,elapsedTime:0,pseudoElement:0}),Ux=Xn(Ix),Nx=re({},Ds,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),Fx=Xn(Nx),Ox=re({},Ds,{data:0}),Ip=Xn(Ox),kx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Bx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Vx(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=zx[i])?!!s[i]:!1}function pc(){return Vx}var Hx=re({},Xo,{key:function(i){if(i.key){var s=kx[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=ol(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?Bx[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pc,charCode:function(i){return i.type==="keypress"?ol(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?ol(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),Gx=Xn(Hx),Wx=re({},ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Up=Xn(Wx),Xx=re({},Xo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pc}),jx=Xn(Xx),Yx=re({},Ds,{propertyName:0,elapsedTime:0,pseudoElement:0}),qx=Xn(Yx),Kx=re({},ll,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),$x=Xn(Kx),Zx=[9,13,27,32],mc=c&&"CompositionEvent"in window,Yo=null;c&&"documentMode"in document&&(Yo=document.documentMode);var Qx=c&&"TextEvent"in window&&!Yo,Np=c&&(!mc||Yo&&8<Yo&&11>=Yo),Fp=" ",Op=!1;function kp(i,s){switch(i){case"keyup":return Zx.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bp(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Ls=!1;function Jx(i,s){switch(i){case"compositionend":return Bp(s);case"keypress":return s.which!==32?null:(Op=!0,Fp);case"textInput":return i=s.data,i===Fp&&Op?null:i;default:return null}}function eS(i,s){if(Ls)return i==="compositionend"||!mc&&kp(i,s)?(i=bp(),sl=uc=mr=null,Ls=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Np&&s.locale!=="ko"?null:s.data;default:return null}}var tS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zp(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!tS[i.type]:s==="textarea"}function Vp(i,s,a,f){Pe(f),s=hl(s,"onChange"),0<s.length&&(a=new cc("onChange","change",null,a,f),i.push({event:a,listeners:s}))}var qo=null,Ko=null;function nS(i){sm(i,0)}function ul(i){var s=Os(i);if(_t(s))return i}function iS(i,s){if(i==="change")return s}var Hp=!1;if(c){var gc;if(c){var _c="oninput"in document;if(!_c){var Gp=document.createElement("div");Gp.setAttribute("oninput","return;"),_c=typeof Gp.oninput=="function"}gc=_c}else gc=!1;Hp=gc&&(!document.documentMode||9<document.documentMode)}function Wp(){qo&&(qo.detachEvent("onpropertychange",Xp),Ko=qo=null)}function Xp(i){if(i.propertyName==="value"&&ul(Ko)){var s=[];Vp(s,Ko,i,W(i)),Un(nS,s)}}function rS(i,s,a){i==="focusin"?(Wp(),qo=s,Ko=a,qo.attachEvent("onpropertychange",Xp)):i==="focusout"&&Wp()}function sS(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return ul(Ko)}function oS(i,s){if(i==="click")return ul(s)}function aS(i,s){if(i==="input"||i==="change")return ul(s)}function lS(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var ci=typeof Object.is=="function"?Object.is:lS;function $o(i,s){if(ci(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var a=Object.keys(i),f=Object.keys(s);if(a.length!==f.length)return!1;for(f=0;f<a.length;f++){var p=a[f];if(!d.call(s,p)||!ci(i[p],s[p]))return!1}return!0}function jp(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function Yp(i,s){var a=jp(i);i=0;for(var f;a;){if(a.nodeType===3){if(f=i+a.textContent.length,i<=s&&f>=s)return{node:a,offset:s-i};i=f}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=jp(a)}}function qp(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?qp(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function Kp(){for(var i=window,s=It();s instanceof i.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)i=s.contentWindow;else break;s=It(i.document)}return s}function vc(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}function uS(i){var s=Kp(),a=i.focusedElem,f=i.selectionRange;if(s!==a&&a&&a.ownerDocument&&qp(a.ownerDocument.documentElement,a)){if(f!==null&&vc(a)){if(s=f.start,i=f.end,i===void 0&&(i=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(i,a.value.length);else if(i=(s=a.ownerDocument||document)&&s.defaultView||window,i.getSelection){i=i.getSelection();var p=a.textContent.length,v=Math.min(f.start,p);f=f.end===void 0?v:Math.min(f.end,p),!i.extend&&v>f&&(p=f,f=v,v=p),p=Yp(a,v);var T=Yp(a,f);p&&T&&(i.rangeCount!==1||i.anchorNode!==p.node||i.anchorOffset!==p.offset||i.focusNode!==T.node||i.focusOffset!==T.offset)&&(s=s.createRange(),s.setStart(p.node,p.offset),i.removeAllRanges(),v>f?(i.addRange(s),i.extend(T.node,T.offset)):(s.setEnd(T.node,T.offset),i.addRange(s)))}}for(s=[],i=a;i=i.parentNode;)i.nodeType===1&&s.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)i=s[a],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var cS=c&&"documentMode"in document&&11>=document.documentMode,Is=null,yc=null,Zo=null,xc=!1;function $p(i,s,a){var f=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;xc||Is==null||Is!==It(f)||(f=Is,"selectionStart"in f&&vc(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),Zo&&$o(Zo,f)||(Zo=f,f=hl(yc,"onSelect"),0<f.length&&(s=new cc("onSelect","select",null,s,a),i.push({event:s,listeners:f}),s.target=Is)))}function cl(i,s){var a={};return a[i.toLowerCase()]=s.toLowerCase(),a["Webkit"+i]="webkit"+s,a["Moz"+i]="moz"+s,a}var Us={animationend:cl("Animation","AnimationEnd"),animationiteration:cl("Animation","AnimationIteration"),animationstart:cl("Animation","AnimationStart"),transitionend:cl("Transition","TransitionEnd")},Sc={},Zp={};c&&(Zp=document.createElement("div").style,"AnimationEvent"in window||(delete Us.animationend.animation,delete Us.animationiteration.animation,delete Us.animationstart.animation),"TransitionEvent"in window||delete Us.transitionend.transition);function fl(i){if(Sc[i])return Sc[i];if(!Us[i])return i;var s=Us[i],a;for(a in s)if(s.hasOwnProperty(a)&&a in Zp)return Sc[i]=s[a];return i}var Qp=fl("animationend"),Jp=fl("animationiteration"),em=fl("animationstart"),tm=fl("transitionend"),nm=new Map,im="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gr(i,s){nm.set(i,s),l(s,[i])}for(var Mc=0;Mc<im.length;Mc++){var Ec=im[Mc],fS=Ec.toLowerCase(),dS=Ec[0].toUpperCase()+Ec.slice(1);gr(fS,"on"+dS)}gr(Qp,"onAnimationEnd"),gr(Jp,"onAnimationIteration"),gr(em,"onAnimationStart"),gr("dblclick","onDoubleClick"),gr("focusin","onFocus"),gr("focusout","onBlur"),gr(tm,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qo));function rm(i,s,a){var f=i.type||"unknown-event";i.currentTarget=a,Ka(f,s,void 0,i),i.currentTarget=null}function sm(i,s){s=(s&4)!==0;for(var a=0;a<i.length;a++){var f=i[a],p=f.event;f=f.listeners;e:{var v=void 0;if(s)for(var T=f.length-1;0<=T;T--){var I=f[T],k=I.instance,ee=I.currentTarget;if(I=I.listener,k!==v&&p.isPropagationStopped())break e;rm(p,I,ee),v=k}else for(T=0;T<f.length;T++){if(I=f[T],k=I.instance,ee=I.currentTarget,I=I.listener,k!==v&&p.isPropagationStopped())break e;rm(p,I,ee),v=k}}}if(qr)throw i=ur,qr=!1,ur=null,i}function Ft(i,s){var a=s[Dc];a===void 0&&(a=s[Dc]=new Set);var f=i+"__bubble";a.has(f)||(om(s,i,2,!1),a.add(f))}function Tc(i,s,a){var f=0;s&&(f|=4),om(a,i,f,s)}var dl="_reactListening"+Math.random().toString(36).slice(2);function Jo(i){if(!i[dl]){i[dl]=!0,r.forEach(function(a){a!=="selectionchange"&&(hS.has(a)||Tc(a,!1,i),Tc(a,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[dl]||(s[dl]=!0,Tc("selectionchange",!1,s))}}function om(i,s,a,f){switch(Pp(s)){case 1:var p=Rx;break;case 4:p=Cx;break;default:p=ac}a=p.bind(null,s,a,i),p=void 0,!Cs||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(p=!0),f?p!==void 0?i.addEventListener(s,a,{capture:!0,passive:p}):i.addEventListener(s,a,!0):p!==void 0?i.addEventListener(s,a,{passive:p}):i.addEventListener(s,a,!1)}function wc(i,s,a,f,p){var v=f;if(!(s&1)&&!(s&2)&&f!==null)e:for(;;){if(f===null)return;var T=f.tag;if(T===3||T===4){var I=f.stateNode.containerInfo;if(I===p||I.nodeType===8&&I.parentNode===p)break;if(T===4)for(T=f.return;T!==null;){var k=T.tag;if((k===3||k===4)&&(k=T.stateNode.containerInfo,k===p||k.nodeType===8&&k.parentNode===p))return;T=T.return}for(;I!==null;){if(T=Kr(I),T===null)return;if(k=T.tag,k===5||k===6){f=v=T;continue e}I=I.parentNode}}f=f.return}Un(function(){var ee=v,_e=W(a),ye=[];e:{var me=nm.get(i);if(me!==void 0){var Le=cc,ze=i;switch(i){case"keypress":if(ol(a)===0)break e;case"keydown":case"keyup":Le=Gx;break;case"focusin":ze="focus",Le=hc;break;case"focusout":ze="blur",Le=hc;break;case"beforeblur":case"afterblur":Le=hc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Le=Lp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Le=Dx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Le=jx;break;case Qp:case Jp:case em:Le=Ux;break;case tm:Le=qx;break;case"scroll":Le=Px;break;case"wheel":Le=$x;break;case"copy":case"cut":case"paste":Le=Fx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Le=Up}var Ge=(s&4)!==0,qt=!Ge&&i==="scroll",Y=Ge?me!==null?me+"Capture":null:me;Ge=[];for(var G=ee,K;G!==null;){K=G;var Ee=K.stateNode;if(K.tag===5&&Ee!==null&&(K=Ee,Y!==null&&(Ee=Cn(G,Y),Ee!=null&&Ge.push(ea(G,Ee,K)))),qt)break;G=G.return}0<Ge.length&&(me=new Le(me,ze,null,a,_e),ye.push({event:me,listeners:Ge}))}}if(!(s&7)){e:{if(me=i==="mouseover"||i==="pointerover",Le=i==="mouseout"||i==="pointerout",me&&a!==At&&(ze=a.relatedTarget||a.fromElement)&&(Kr(ze)||ze[Oi]))break e;if((Le||me)&&(me=_e.window===_e?_e:(me=_e.ownerDocument)?me.defaultView||me.parentWindow:window,Le?(ze=a.relatedTarget||a.toElement,Le=ee,ze=ze?Kr(ze):null,ze!==null&&(qt=Ei(ze),ze!==qt||ze.tag!==5&&ze.tag!==6)&&(ze=null)):(Le=null,ze=ee),Le!==ze)){if(Ge=Lp,Ee="onMouseLeave",Y="onMouseEnter",G="mouse",(i==="pointerout"||i==="pointerover")&&(Ge=Up,Ee="onPointerLeave",Y="onPointerEnter",G="pointer"),qt=Le==null?me:Os(Le),K=ze==null?me:Os(ze),me=new Ge(Ee,G+"leave",Le,a,_e),me.target=qt,me.relatedTarget=K,Ee=null,Kr(_e)===ee&&(Ge=new Ge(Y,G+"enter",ze,a,_e),Ge.target=K,Ge.relatedTarget=qt,Ee=Ge),qt=Ee,Le&&ze)t:{for(Ge=Le,Y=ze,G=0,K=Ge;K;K=Ns(K))G++;for(K=0,Ee=Y;Ee;Ee=Ns(Ee))K++;for(;0<G-K;)Ge=Ns(Ge),G--;for(;0<K-G;)Y=Ns(Y),K--;for(;G--;){if(Ge===Y||Y!==null&&Ge===Y.alternate)break t;Ge=Ns(Ge),Y=Ns(Y)}Ge=null}else Ge=null;Le!==null&&am(ye,me,Le,Ge,!1),ze!==null&&qt!==null&&am(ye,qt,ze,Ge,!0)}}e:{if(me=ee?Os(ee):window,Le=me.nodeName&&me.nodeName.toLowerCase(),Le==="select"||Le==="input"&&me.type==="file")var je=iS;else if(zp(me))if(Hp)je=aS;else{je=sS;var Ze=rS}else(Le=me.nodeName)&&Le.toLowerCase()==="input"&&(me.type==="checkbox"||me.type==="radio")&&(je=oS);if(je&&(je=je(i,ee))){Vp(ye,je,a,_e);break e}Ze&&Ze(i,me,ee),i==="focusout"&&(Ze=me._wrapperState)&&Ze.controlled&&me.type==="number"&&Rt(me,"number",me.value)}switch(Ze=ee?Os(ee):window,i){case"focusin":(zp(Ze)||Ze.contentEditable==="true")&&(Is=Ze,yc=ee,Zo=null);break;case"focusout":Zo=yc=Is=null;break;case"mousedown":xc=!0;break;case"contextmenu":case"mouseup":case"dragend":xc=!1,$p(ye,a,_e);break;case"selectionchange":if(cS)break;case"keydown":case"keyup":$p(ye,a,_e)}var Qe;if(mc)e:{switch(i){case"compositionstart":var rt="onCompositionStart";break e;case"compositionend":rt="onCompositionEnd";break e;case"compositionupdate":rt="onCompositionUpdate";break e}rt=void 0}else Ls?kp(i,a)&&(rt="onCompositionEnd"):i==="keydown"&&a.keyCode===229&&(rt="onCompositionStart");rt&&(Np&&a.locale!=="ko"&&(Ls||rt!=="onCompositionStart"?rt==="onCompositionEnd"&&Ls&&(Qe=bp()):(mr=_e,uc="value"in mr?mr.value:mr.textContent,Ls=!0)),Ze=hl(ee,rt),0<Ze.length&&(rt=new Ip(rt,i,null,a,_e),ye.push({event:rt,listeners:Ze}),Qe?rt.data=Qe:(Qe=Bp(a),Qe!==null&&(rt.data=Qe)))),(Qe=Qx?Jx(i,a):eS(i,a))&&(ee=hl(ee,"onBeforeInput"),0<ee.length&&(_e=new Ip("onBeforeInput","beforeinput",null,a,_e),ye.push({event:_e,listeners:ee}),_e.data=Qe))}sm(ye,s)})}function ea(i,s,a){return{instance:i,listener:s,currentTarget:a}}function hl(i,s){for(var a=s+"Capture",f=[];i!==null;){var p=i,v=p.stateNode;p.tag===5&&v!==null&&(p=v,v=Cn(i,a),v!=null&&f.unshift(ea(i,v,p)),v=Cn(i,s),v!=null&&f.push(ea(i,v,p))),i=i.return}return f}function Ns(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function am(i,s,a,f,p){for(var v=s._reactName,T=[];a!==null&&a!==f;){var I=a,k=I.alternate,ee=I.stateNode;if(k!==null&&k===f)break;I.tag===5&&ee!==null&&(I=ee,p?(k=Cn(a,v),k!=null&&T.unshift(ea(a,k,I))):p||(k=Cn(a,v),k!=null&&T.push(ea(a,k,I)))),a=a.return}T.length!==0&&i.push({event:s,listeners:T})}var pS=/\r\n?/g,mS=/\u0000|\uFFFD/g;function lm(i){return(typeof i=="string"?i:""+i).replace(pS,`
`).replace(mS,"")}function pl(i,s,a){if(s=lm(s),lm(i)!==s&&a)throw Error(t(425))}function ml(){}var Ac=null,Rc=null;function Cc(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Pc=typeof setTimeout=="function"?setTimeout:void 0,gS=typeof clearTimeout=="function"?clearTimeout:void 0,um=typeof Promise=="function"?Promise:void 0,_S=typeof queueMicrotask=="function"?queueMicrotask:typeof um<"u"?function(i){return um.resolve(null).then(i).catch(vS)}:Pc;function vS(i){setTimeout(function(){throw i})}function bc(i,s){var a=s,f=0;do{var p=a.nextSibling;if(i.removeChild(a),p&&p.nodeType===8)if(a=p.data,a==="/$"){if(f===0){i.removeChild(p),Wo(s);return}f--}else a!=="$"&&a!=="$?"&&a!=="$!"||f++;a=p}while(a);Wo(s)}function _r(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return i}function cm(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var a=i.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return i;s--}else a==="/$"&&s++}i=i.previousSibling}return null}var Fs=Math.random().toString(36).slice(2),wi="__reactFiber$"+Fs,ta="__reactProps$"+Fs,Oi="__reactContainer$"+Fs,Dc="__reactEvents$"+Fs,yS="__reactListeners$"+Fs,xS="__reactHandles$"+Fs;function Kr(i){var s=i[wi];if(s)return s;for(var a=i.parentNode;a;){if(s=a[Oi]||a[wi]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(i=cm(i);i!==null;){if(a=i[wi])return a;i=cm(i)}return s}i=a,a=i.parentNode}return null}function na(i){return i=i[wi]||i[Oi],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function Os(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function gl(i){return i[ta]||null}var Lc=[],ks=-1;function vr(i){return{current:i}}function Ot(i){0>ks||(i.current=Lc[ks],Lc[ks]=null,ks--)}function Ut(i,s){ks++,Lc[ks]=i.current,i.current=s}var yr={},yn=vr(yr),Nn=vr(!1),$r=yr;function Bs(i,s){var a=i.type.contextTypes;if(!a)return yr;var f=i.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===s)return f.__reactInternalMemoizedMaskedChildContext;var p={},v;for(v in a)p[v]=s[v];return f&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=s,i.__reactInternalMemoizedMaskedChildContext=p),p}function Fn(i){return i=i.childContextTypes,i!=null}function _l(){Ot(Nn),Ot(yn)}function fm(i,s,a){if(yn.current!==yr)throw Error(t(168));Ut(yn,s),Ut(Nn,a)}function dm(i,s,a){var f=i.stateNode;if(s=s.childContextTypes,typeof f.getChildContext!="function")return a;f=f.getChildContext();for(var p in f)if(!(p in s))throw Error(t(108,ve(i)||"Unknown",p));return re({},a,f)}function vl(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||yr,$r=yn.current,Ut(yn,i),Ut(Nn,Nn.current),!0}function hm(i,s,a){var f=i.stateNode;if(!f)throw Error(t(169));a?(i=dm(i,s,$r),f.__reactInternalMemoizedMergedChildContext=i,Ot(Nn),Ot(yn),Ut(yn,i)):Ot(Nn),Ut(Nn,a)}var ki=null,yl=!1,Ic=!1;function pm(i){ki===null?ki=[i]:ki.push(i)}function SS(i){yl=!0,pm(i)}function xr(){if(!Ic&&ki!==null){Ic=!0;var i=0,s=Mt;try{var a=ki;for(Mt=1;i<a.length;i++){var f=a[i];do f=f(!0);while(f!==null)}ki=null,yl=!1}catch(p){throw ki!==null&&(ki=ki.slice(i+1)),el(xe,xr),p}finally{Mt=s,Ic=!1}}return null}var zs=[],Vs=0,xl=null,Sl=0,Jn=[],ei=0,Zr=null,Bi=1,zi="";function Qr(i,s){zs[Vs++]=Sl,zs[Vs++]=xl,xl=i,Sl=s}function mm(i,s,a){Jn[ei++]=Bi,Jn[ei++]=zi,Jn[ei++]=Zr,Zr=i;var f=Bi;i=zi;var p=32-at(f)-1;f&=~(1<<p),a+=1;var v=32-at(s)+p;if(30<v){var T=p-p%5;v=(f&(1<<T)-1).toString(32),f>>=T,p-=T,Bi=1<<32-at(s)+p|a<<p|f,zi=v+i}else Bi=1<<v|a<<p|f,zi=i}function Uc(i){i.return!==null&&(Qr(i,1),mm(i,1,0))}function Nc(i){for(;i===xl;)xl=zs[--Vs],zs[Vs]=null,Sl=zs[--Vs],zs[Vs]=null;for(;i===Zr;)Zr=Jn[--ei],Jn[ei]=null,zi=Jn[--ei],Jn[ei]=null,Bi=Jn[--ei],Jn[ei]=null}var jn=null,Yn=null,zt=!1,fi=null;function gm(i,s){var a=ri(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=i,s=i.deletions,s===null?(i.deletions=[a],i.flags|=16):s.push(a)}function _m(i,s){switch(i.tag){case 5:var a=i.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(i.stateNode=s,jn=i,Yn=_r(s.firstChild),!0):!1;case 6:return s=i.pendingProps===""||s.nodeType!==3?null:s,s!==null?(i.stateNode=s,jn=i,Yn=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=Zr!==null?{id:Bi,overflow:zi}:null,i.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=ri(18,null,null,0),a.stateNode=s,a.return=i,i.child=a,jn=i,Yn=null,!0):!1;default:return!1}}function Fc(i){return(i.mode&1)!==0&&(i.flags&128)===0}function Oc(i){if(zt){var s=Yn;if(s){var a=s;if(!_m(i,s)){if(Fc(i))throw Error(t(418));s=_r(a.nextSibling);var f=jn;s&&_m(i,s)?gm(f,a):(i.flags=i.flags&-4097|2,zt=!1,jn=i)}}else{if(Fc(i))throw Error(t(418));i.flags=i.flags&-4097|2,zt=!1,jn=i}}}function vm(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;jn=i}function Ml(i){if(i!==jn)return!1;if(!zt)return vm(i),zt=!0,!1;var s;if((s=i.tag!==3)&&!(s=i.tag!==5)&&(s=i.type,s=s!=="head"&&s!=="body"&&!Cc(i.type,i.memoizedProps)),s&&(s=Yn)){if(Fc(i))throw ym(),Error(t(418));for(;s;)gm(i,s),s=_r(s.nextSibling)}if(vm(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8){var a=i.data;if(a==="/$"){if(s===0){Yn=_r(i.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}i=i.nextSibling}Yn=null}}else Yn=jn?_r(i.stateNode.nextSibling):null;return!0}function ym(){for(var i=Yn;i;)i=_r(i.nextSibling)}function Hs(){Yn=jn=null,zt=!1}function kc(i){fi===null?fi=[i]:fi.push(i)}var MS=C.ReactCurrentBatchConfig;function ia(i,s,a){if(i=a.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var f=a.stateNode}if(!f)throw Error(t(147,i));var p=f,v=""+i;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===v?s.ref:(s=function(T){var I=p.refs;T===null?delete I[v]:I[v]=T},s._stringRef=v,s)}if(typeof i!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,i))}return i}function El(i,s){throw i=Object.prototype.toString.call(s),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i))}function xm(i){var s=i._init;return s(i._payload)}function Sm(i){function s(Y,G){if(i){var K=Y.deletions;K===null?(Y.deletions=[G],Y.flags|=16):K.push(G)}}function a(Y,G){if(!i)return null;for(;G!==null;)s(Y,G),G=G.sibling;return null}function f(Y,G){for(Y=new Map;G!==null;)G.key!==null?Y.set(G.key,G):Y.set(G.index,G),G=G.sibling;return Y}function p(Y,G){return Y=Cr(Y,G),Y.index=0,Y.sibling=null,Y}function v(Y,G,K){return Y.index=K,i?(K=Y.alternate,K!==null?(K=K.index,K<G?(Y.flags|=2,G):K):(Y.flags|=2,G)):(Y.flags|=1048576,G)}function T(Y){return i&&Y.alternate===null&&(Y.flags|=2),Y}function I(Y,G,K,Ee){return G===null||G.tag!==6?(G=bf(K,Y.mode,Ee),G.return=Y,G):(G=p(G,K),G.return=Y,G)}function k(Y,G,K,Ee){var je=K.type;return je===U?_e(Y,G,K.props.children,Ee,K.key):G!==null&&(G.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===le&&xm(je)===G.type)?(Ee=p(G,K.props),Ee.ref=ia(Y,G,K),Ee.return=Y,Ee):(Ee=Yl(K.type,K.key,K.props,null,Y.mode,Ee),Ee.ref=ia(Y,G,K),Ee.return=Y,Ee)}function ee(Y,G,K,Ee){return G===null||G.tag!==4||G.stateNode.containerInfo!==K.containerInfo||G.stateNode.implementation!==K.implementation?(G=Df(K,Y.mode,Ee),G.return=Y,G):(G=p(G,K.children||[]),G.return=Y,G)}function _e(Y,G,K,Ee,je){return G===null||G.tag!==7?(G=os(K,Y.mode,Ee,je),G.return=Y,G):(G=p(G,K),G.return=Y,G)}function ye(Y,G,K){if(typeof G=="string"&&G!==""||typeof G=="number")return G=bf(""+G,Y.mode,K),G.return=Y,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case O:return K=Yl(G.type,G.key,G.props,null,Y.mode,K),K.ref=ia(Y,null,G),K.return=Y,K;case F:return G=Df(G,Y.mode,K),G.return=Y,G;case le:var Ee=G._init;return ye(Y,Ee(G._payload),K)}if(We(G)||ae(G))return G=os(G,Y.mode,K,null),G.return=Y,G;El(Y,G)}return null}function me(Y,G,K,Ee){var je=G!==null?G.key:null;if(typeof K=="string"&&K!==""||typeof K=="number")return je!==null?null:I(Y,G,""+K,Ee);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case O:return K.key===je?k(Y,G,K,Ee):null;case F:return K.key===je?ee(Y,G,K,Ee):null;case le:return je=K._init,me(Y,G,je(K._payload),Ee)}if(We(K)||ae(K))return je!==null?null:_e(Y,G,K,Ee,null);El(Y,K)}return null}function Le(Y,G,K,Ee,je){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return Y=Y.get(K)||null,I(G,Y,""+Ee,je);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case O:return Y=Y.get(Ee.key===null?K:Ee.key)||null,k(G,Y,Ee,je);case F:return Y=Y.get(Ee.key===null?K:Ee.key)||null,ee(G,Y,Ee,je);case le:var Ze=Ee._init;return Le(Y,G,K,Ze(Ee._payload),je)}if(We(Ee)||ae(Ee))return Y=Y.get(K)||null,_e(G,Y,Ee,je,null);El(G,Ee)}return null}function ze(Y,G,K,Ee){for(var je=null,Ze=null,Qe=G,rt=G=0,fn=null;Qe!==null&&rt<K.length;rt++){Qe.index>rt?(fn=Qe,Qe=null):fn=Qe.sibling;var Tt=me(Y,Qe,K[rt],Ee);if(Tt===null){Qe===null&&(Qe=fn);break}i&&Qe&&Tt.alternate===null&&s(Y,Qe),G=v(Tt,G,rt),Ze===null?je=Tt:Ze.sibling=Tt,Ze=Tt,Qe=fn}if(rt===K.length)return a(Y,Qe),zt&&Qr(Y,rt),je;if(Qe===null){for(;rt<K.length;rt++)Qe=ye(Y,K[rt],Ee),Qe!==null&&(G=v(Qe,G,rt),Ze===null?je=Qe:Ze.sibling=Qe,Ze=Qe);return zt&&Qr(Y,rt),je}for(Qe=f(Y,Qe);rt<K.length;rt++)fn=Le(Qe,Y,rt,K[rt],Ee),fn!==null&&(i&&fn.alternate!==null&&Qe.delete(fn.key===null?rt:fn.key),G=v(fn,G,rt),Ze===null?je=fn:Ze.sibling=fn,Ze=fn);return i&&Qe.forEach(function(Pr){return s(Y,Pr)}),zt&&Qr(Y,rt),je}function Ge(Y,G,K,Ee){var je=ae(K);if(typeof je!="function")throw Error(t(150));if(K=je.call(K),K==null)throw Error(t(151));for(var Ze=je=null,Qe=G,rt=G=0,fn=null,Tt=K.next();Qe!==null&&!Tt.done;rt++,Tt=K.next()){Qe.index>rt?(fn=Qe,Qe=null):fn=Qe.sibling;var Pr=me(Y,Qe,Tt.value,Ee);if(Pr===null){Qe===null&&(Qe=fn);break}i&&Qe&&Pr.alternate===null&&s(Y,Qe),G=v(Pr,G,rt),Ze===null?je=Pr:Ze.sibling=Pr,Ze=Pr,Qe=fn}if(Tt.done)return a(Y,Qe),zt&&Qr(Y,rt),je;if(Qe===null){for(;!Tt.done;rt++,Tt=K.next())Tt=ye(Y,Tt.value,Ee),Tt!==null&&(G=v(Tt,G,rt),Ze===null?je=Tt:Ze.sibling=Tt,Ze=Tt);return zt&&Qr(Y,rt),je}for(Qe=f(Y,Qe);!Tt.done;rt++,Tt=K.next())Tt=Le(Qe,Y,rt,Tt.value,Ee),Tt!==null&&(i&&Tt.alternate!==null&&Qe.delete(Tt.key===null?rt:Tt.key),G=v(Tt,G,rt),Ze===null?je=Tt:Ze.sibling=Tt,Ze=Tt);return i&&Qe.forEach(function(eM){return s(Y,eM)}),zt&&Qr(Y,rt),je}function qt(Y,G,K,Ee){if(typeof K=="object"&&K!==null&&K.type===U&&K.key===null&&(K=K.props.children),typeof K=="object"&&K!==null){switch(K.$$typeof){case O:e:{for(var je=K.key,Ze=G;Ze!==null;){if(Ze.key===je){if(je=K.type,je===U){if(Ze.tag===7){a(Y,Ze.sibling),G=p(Ze,K.props.children),G.return=Y,Y=G;break e}}else if(Ze.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===le&&xm(je)===Ze.type){a(Y,Ze.sibling),G=p(Ze,K.props),G.ref=ia(Y,Ze,K),G.return=Y,Y=G;break e}a(Y,Ze);break}else s(Y,Ze);Ze=Ze.sibling}K.type===U?(G=os(K.props.children,Y.mode,Ee,K.key),G.return=Y,Y=G):(Ee=Yl(K.type,K.key,K.props,null,Y.mode,Ee),Ee.ref=ia(Y,G,K),Ee.return=Y,Y=Ee)}return T(Y);case F:e:{for(Ze=K.key;G!==null;){if(G.key===Ze)if(G.tag===4&&G.stateNode.containerInfo===K.containerInfo&&G.stateNode.implementation===K.implementation){a(Y,G.sibling),G=p(G,K.children||[]),G.return=Y,Y=G;break e}else{a(Y,G);break}else s(Y,G);G=G.sibling}G=Df(K,Y.mode,Ee),G.return=Y,Y=G}return T(Y);case le:return Ze=K._init,qt(Y,G,Ze(K._payload),Ee)}if(We(K))return ze(Y,G,K,Ee);if(ae(K))return Ge(Y,G,K,Ee);El(Y,K)}return typeof K=="string"&&K!==""||typeof K=="number"?(K=""+K,G!==null&&G.tag===6?(a(Y,G.sibling),G=p(G,K),G.return=Y,Y=G):(a(Y,G),G=bf(K,Y.mode,Ee),G.return=Y,Y=G),T(Y)):a(Y,G)}return qt}var Gs=Sm(!0),Mm=Sm(!1),Tl=vr(null),wl=null,Ws=null,Bc=null;function zc(){Bc=Ws=wl=null}function Vc(i){var s=Tl.current;Ot(Tl),i._currentValue=s}function Hc(i,s,a){for(;i!==null;){var f=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,f!==null&&(f.childLanes|=s)):f!==null&&(f.childLanes&s)!==s&&(f.childLanes|=s),i===a)break;i=i.return}}function Xs(i,s){wl=i,Bc=Ws=null,i=i.dependencies,i!==null&&i.firstContext!==null&&(i.lanes&s&&(On=!0),i.firstContext=null)}function ti(i){var s=i._currentValue;if(Bc!==i)if(i={context:i,memoizedValue:s,next:null},Ws===null){if(wl===null)throw Error(t(308));Ws=i,wl.dependencies={lanes:0,firstContext:i}}else Ws=Ws.next=i;return s}var Jr=null;function Gc(i){Jr===null?Jr=[i]:Jr.push(i)}function Em(i,s,a,f){var p=s.interleaved;return p===null?(a.next=a,Gc(s)):(a.next=p.next,p.next=a),s.interleaved=a,Vi(i,f)}function Vi(i,s){i.lanes|=s;var a=i.alternate;for(a!==null&&(a.lanes|=s),a=i,i=i.return;i!==null;)i.childLanes|=s,a=i.alternate,a!==null&&(a.childLanes|=s),a=i,i=i.return;return a.tag===3?a.stateNode:null}var Sr=!1;function Wc(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Tm(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function Hi(i,s){return{eventTime:i,lane:s,tag:0,payload:null,callback:null,next:null}}function Mr(i,s,a){var f=i.updateQueue;if(f===null)return null;if(f=f.shared,Et&2){var p=f.pending;return p===null?s.next=s:(s.next=p.next,p.next=s),f.pending=s,Vi(i,a)}return p=f.interleaved,p===null?(s.next=s,Gc(f)):(s.next=p.next,p.next=s),f.interleaved=s,Vi(i,a)}function Al(i,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var f=s.lanes;f&=i.pendingLanes,a|=f,s.lanes=a,ln(i,a)}}function wm(i,s){var a=i.updateQueue,f=i.alternate;if(f!==null&&(f=f.updateQueue,a===f)){var p=null,v=null;if(a=a.firstBaseUpdate,a!==null){do{var T={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};v===null?p=v=T:v=v.next=T,a=a.next}while(a!==null);v===null?p=v=s:v=v.next=s}else p=v=s;a={baseState:f.baseState,firstBaseUpdate:p,lastBaseUpdate:v,shared:f.shared,effects:f.effects},i.updateQueue=a;return}i=a.lastBaseUpdate,i===null?a.firstBaseUpdate=s:i.next=s,a.lastBaseUpdate=s}function Rl(i,s,a,f){var p=i.updateQueue;Sr=!1;var v=p.firstBaseUpdate,T=p.lastBaseUpdate,I=p.shared.pending;if(I!==null){p.shared.pending=null;var k=I,ee=k.next;k.next=null,T===null?v=ee:T.next=ee,T=k;var _e=i.alternate;_e!==null&&(_e=_e.updateQueue,I=_e.lastBaseUpdate,I!==T&&(I===null?_e.firstBaseUpdate=ee:I.next=ee,_e.lastBaseUpdate=k))}if(v!==null){var ye=p.baseState;T=0,_e=ee=k=null,I=v;do{var me=I.lane,Le=I.eventTime;if((f&me)===me){_e!==null&&(_e=_e.next={eventTime:Le,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var ze=i,Ge=I;switch(me=s,Le=a,Ge.tag){case 1:if(ze=Ge.payload,typeof ze=="function"){ye=ze.call(Le,ye,me);break e}ye=ze;break e;case 3:ze.flags=ze.flags&-65537|128;case 0:if(ze=Ge.payload,me=typeof ze=="function"?ze.call(Le,ye,me):ze,me==null)break e;ye=re({},ye,me);break e;case 2:Sr=!0}}I.callback!==null&&I.lane!==0&&(i.flags|=64,me=p.effects,me===null?p.effects=[I]:me.push(I))}else Le={eventTime:Le,lane:me,tag:I.tag,payload:I.payload,callback:I.callback,next:null},_e===null?(ee=_e=Le,k=ye):_e=_e.next=Le,T|=me;if(I=I.next,I===null){if(I=p.shared.pending,I===null)break;me=I,I=me.next,me.next=null,p.lastBaseUpdate=me,p.shared.pending=null}}while(!0);if(_e===null&&(k=ye),p.baseState=k,p.firstBaseUpdate=ee,p.lastBaseUpdate=_e,s=p.shared.interleaved,s!==null){p=s;do T|=p.lane,p=p.next;while(p!==s)}else v===null&&(p.shared.lanes=0);ns|=T,i.lanes=T,i.memoizedState=ye}}function Am(i,s,a){if(i=s.effects,s.effects=null,i!==null)for(s=0;s<i.length;s++){var f=i[s],p=f.callback;if(p!==null){if(f.callback=null,f=a,typeof p!="function")throw Error(t(191,p));p.call(f)}}}var ra={},Ai=vr(ra),sa=vr(ra),oa=vr(ra);function es(i){if(i===ra)throw Error(t(174));return i}function Xc(i,s){switch(Ut(oa,s),Ut(sa,i),Ut(Ai,ra),i=s.nodeType,i){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:Xe(null,"");break;default:i=i===8?s.parentNode:s,s=i.namespaceURI||null,i=i.tagName,s=Xe(s,i)}Ot(Ai),Ut(Ai,s)}function js(){Ot(Ai),Ot(sa),Ot(oa)}function Rm(i){es(oa.current);var s=es(Ai.current),a=Xe(s,i.type);s!==a&&(Ut(sa,i),Ut(Ai,a))}function jc(i){sa.current===i&&(Ot(Ai),Ot(sa))}var Vt=vr(0);function Cl(i){for(var s=i;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if(s.flags&128)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Yc=[];function qc(){for(var i=0;i<Yc.length;i++)Yc[i]._workInProgressVersionPrimary=null;Yc.length=0}var Pl=C.ReactCurrentDispatcher,Kc=C.ReactCurrentBatchConfig,ts=0,Ht=null,tn=null,un=null,bl=!1,aa=!1,la=0,ES=0;function xn(){throw Error(t(321))}function $c(i,s){if(s===null)return!1;for(var a=0;a<s.length&&a<i.length;a++)if(!ci(i[a],s[a]))return!1;return!0}function Zc(i,s,a,f,p,v){if(ts=v,Ht=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,Pl.current=i===null||i.memoizedState===null?RS:CS,i=a(f,p),aa){v=0;do{if(aa=!1,la=0,25<=v)throw Error(t(301));v+=1,un=tn=null,s.updateQueue=null,Pl.current=PS,i=a(f,p)}while(aa)}if(Pl.current=Il,s=tn!==null&&tn.next!==null,ts=0,un=tn=Ht=null,bl=!1,s)throw Error(t(300));return i}function Qc(){var i=la!==0;return la=0,i}function Ri(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?Ht.memoizedState=un=i:un=un.next=i,un}function ni(){if(tn===null){var i=Ht.alternate;i=i!==null?i.memoizedState:null}else i=tn.next;var s=un===null?Ht.memoizedState:un.next;if(s!==null)un=s,tn=i;else{if(i===null)throw Error(t(310));tn=i,i={memoizedState:tn.memoizedState,baseState:tn.baseState,baseQueue:tn.baseQueue,queue:tn.queue,next:null},un===null?Ht.memoizedState=un=i:un=un.next=i}return un}function ua(i,s){return typeof s=="function"?s(i):s}function Jc(i){var s=ni(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=i;var f=tn,p=f.baseQueue,v=a.pending;if(v!==null){if(p!==null){var T=p.next;p.next=v.next,v.next=T}f.baseQueue=p=v,a.pending=null}if(p!==null){v=p.next,f=f.baseState;var I=T=null,k=null,ee=v;do{var _e=ee.lane;if((ts&_e)===_e)k!==null&&(k=k.next={lane:0,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),f=ee.hasEagerState?ee.eagerState:i(f,ee.action);else{var ye={lane:_e,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null};k===null?(I=k=ye,T=f):k=k.next=ye,Ht.lanes|=_e,ns|=_e}ee=ee.next}while(ee!==null&&ee!==v);k===null?T=f:k.next=I,ci(f,s.memoizedState)||(On=!0),s.memoizedState=f,s.baseState=T,s.baseQueue=k,a.lastRenderedState=f}if(i=a.interleaved,i!==null){p=i;do v=p.lane,Ht.lanes|=v,ns|=v,p=p.next;while(p!==i)}else p===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function ef(i){var s=ni(),a=s.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=i;var f=a.dispatch,p=a.pending,v=s.memoizedState;if(p!==null){a.pending=null;var T=p=p.next;do v=i(v,T.action),T=T.next;while(T!==p);ci(v,s.memoizedState)||(On=!0),s.memoizedState=v,s.baseQueue===null&&(s.baseState=v),a.lastRenderedState=v}return[v,f]}function Cm(){}function Pm(i,s){var a=Ht,f=ni(),p=s(),v=!ci(f.memoizedState,p);if(v&&(f.memoizedState=p,On=!0),f=f.queue,tf(Lm.bind(null,a,f,i),[i]),f.getSnapshot!==s||v||un!==null&&un.memoizedState.tag&1){if(a.flags|=2048,ca(9,Dm.bind(null,a,f,p,s),void 0,null),cn===null)throw Error(t(349));ts&30||bm(a,s,p)}return p}function bm(i,s,a){i.flags|=16384,i={getSnapshot:s,value:a},s=Ht.updateQueue,s===null?(s={lastEffect:null,stores:null},Ht.updateQueue=s,s.stores=[i]):(a=s.stores,a===null?s.stores=[i]:a.push(i))}function Dm(i,s,a,f){s.value=a,s.getSnapshot=f,Im(s)&&Um(i)}function Lm(i,s,a){return a(function(){Im(s)&&Um(i)})}function Im(i){var s=i.getSnapshot;i=i.value;try{var a=s();return!ci(i,a)}catch{return!0}}function Um(i){var s=Vi(i,1);s!==null&&mi(s,i,1,-1)}function Nm(i){var s=Ri();return typeof i=="function"&&(i=i()),s.memoizedState=s.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ua,lastRenderedState:i},s.queue=i,i=i.dispatch=AS.bind(null,Ht,i),[s.memoizedState,i]}function ca(i,s,a,f){return i={tag:i,create:s,destroy:a,deps:f,next:null},s=Ht.updateQueue,s===null?(s={lastEffect:null,stores:null},Ht.updateQueue=s,s.lastEffect=i.next=i):(a=s.lastEffect,a===null?s.lastEffect=i.next=i:(f=a.next,a.next=i,i.next=f,s.lastEffect=i)),i}function Fm(){return ni().memoizedState}function Dl(i,s,a,f){var p=Ri();Ht.flags|=i,p.memoizedState=ca(1|s,a,void 0,f===void 0?null:f)}function Ll(i,s,a,f){var p=ni();f=f===void 0?null:f;var v=void 0;if(tn!==null){var T=tn.memoizedState;if(v=T.destroy,f!==null&&$c(f,T.deps)){p.memoizedState=ca(s,a,v,f);return}}Ht.flags|=i,p.memoizedState=ca(1|s,a,v,f)}function Om(i,s){return Dl(8390656,8,i,s)}function tf(i,s){return Ll(2048,8,i,s)}function km(i,s){return Ll(4,2,i,s)}function Bm(i,s){return Ll(4,4,i,s)}function zm(i,s){if(typeof s=="function")return i=i(),s(i),function(){s(null)};if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function Vm(i,s,a){return a=a!=null?a.concat([i]):null,Ll(4,4,zm.bind(null,s,i),a)}function nf(){}function Hm(i,s){var a=ni();s=s===void 0?null:s;var f=a.memoizedState;return f!==null&&s!==null&&$c(s,f[1])?f[0]:(a.memoizedState=[i,s],i)}function Gm(i,s){var a=ni();s=s===void 0?null:s;var f=a.memoizedState;return f!==null&&s!==null&&$c(s,f[1])?f[0]:(i=i(),a.memoizedState=[i,s],i)}function Wm(i,s,a){return ts&21?(ci(a,s)||(a=Lt(),Ht.lanes|=a,ns|=a,i.baseState=!0),s):(i.baseState&&(i.baseState=!1,On=!0),i.memoizedState=a)}function TS(i,s){var a=Mt;Mt=a!==0&&4>a?a:4,i(!0);var f=Kc.transition;Kc.transition={};try{i(!1),s()}finally{Mt=a,Kc.transition=f}}function Xm(){return ni().memoizedState}function wS(i,s,a){var f=Ar(i);if(a={lane:f,action:a,hasEagerState:!1,eagerState:null,next:null},jm(i))Ym(s,a);else if(a=Em(i,s,a,f),a!==null){var p=Dn();mi(a,i,f,p),qm(a,s,f)}}function AS(i,s,a){var f=Ar(i),p={lane:f,action:a,hasEagerState:!1,eagerState:null,next:null};if(jm(i))Ym(s,p);else{var v=i.alternate;if(i.lanes===0&&(v===null||v.lanes===0)&&(v=s.lastRenderedReducer,v!==null))try{var T=s.lastRenderedState,I=v(T,a);if(p.hasEagerState=!0,p.eagerState=I,ci(I,T)){var k=s.interleaved;k===null?(p.next=p,Gc(s)):(p.next=k.next,k.next=p),s.interleaved=p;return}}catch{}finally{}a=Em(i,s,p,f),a!==null&&(p=Dn(),mi(a,i,f,p),qm(a,s,f))}}function jm(i){var s=i.alternate;return i===Ht||s!==null&&s===Ht}function Ym(i,s){aa=bl=!0;var a=i.pending;a===null?s.next=s:(s.next=a.next,a.next=s),i.pending=s}function qm(i,s,a){if(a&4194240){var f=s.lanes;f&=i.pendingLanes,a|=f,s.lanes=a,ln(i,a)}}var Il={readContext:ti,useCallback:xn,useContext:xn,useEffect:xn,useImperativeHandle:xn,useInsertionEffect:xn,useLayoutEffect:xn,useMemo:xn,useReducer:xn,useRef:xn,useState:xn,useDebugValue:xn,useDeferredValue:xn,useTransition:xn,useMutableSource:xn,useSyncExternalStore:xn,useId:xn,unstable_isNewReconciler:!1},RS={readContext:ti,useCallback:function(i,s){return Ri().memoizedState=[i,s===void 0?null:s],i},useContext:ti,useEffect:Om,useImperativeHandle:function(i,s,a){return a=a!=null?a.concat([i]):null,Dl(4194308,4,zm.bind(null,s,i),a)},useLayoutEffect:function(i,s){return Dl(4194308,4,i,s)},useInsertionEffect:function(i,s){return Dl(4,2,i,s)},useMemo:function(i,s){var a=Ri();return s=s===void 0?null:s,i=i(),a.memoizedState=[i,s],i},useReducer:function(i,s,a){var f=Ri();return s=a!==void 0?a(s):s,f.memoizedState=f.baseState=s,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:s},f.queue=i,i=i.dispatch=wS.bind(null,Ht,i),[f.memoizedState,i]},useRef:function(i){var s=Ri();return i={current:i},s.memoizedState=i},useState:Nm,useDebugValue:nf,useDeferredValue:function(i){return Ri().memoizedState=i},useTransition:function(){var i=Nm(!1),s=i[0];return i=TS.bind(null,i[1]),Ri().memoizedState=i,[s,i]},useMutableSource:function(){},useSyncExternalStore:function(i,s,a){var f=Ht,p=Ri();if(zt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=s(),cn===null)throw Error(t(349));ts&30||bm(f,s,a)}p.memoizedState=a;var v={value:a,getSnapshot:s};return p.queue=v,Om(Lm.bind(null,f,v,i),[i]),f.flags|=2048,ca(9,Dm.bind(null,f,v,a,s),void 0,null),a},useId:function(){var i=Ri(),s=cn.identifierPrefix;if(zt){var a=zi,f=Bi;a=(f&~(1<<32-at(f)-1)).toString(32)+a,s=":"+s+"R"+a,a=la++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=ES++,s=":"+s+"r"+a.toString(32)+":";return i.memoizedState=s},unstable_isNewReconciler:!1},CS={readContext:ti,useCallback:Hm,useContext:ti,useEffect:tf,useImperativeHandle:Vm,useInsertionEffect:km,useLayoutEffect:Bm,useMemo:Gm,useReducer:Jc,useRef:Fm,useState:function(){return Jc(ua)},useDebugValue:nf,useDeferredValue:function(i){var s=ni();return Wm(s,tn.memoizedState,i)},useTransition:function(){var i=Jc(ua)[0],s=ni().memoizedState;return[i,s]},useMutableSource:Cm,useSyncExternalStore:Pm,useId:Xm,unstable_isNewReconciler:!1},PS={readContext:ti,useCallback:Hm,useContext:ti,useEffect:tf,useImperativeHandle:Vm,useInsertionEffect:km,useLayoutEffect:Bm,useMemo:Gm,useReducer:ef,useRef:Fm,useState:function(){return ef(ua)},useDebugValue:nf,useDeferredValue:function(i){var s=ni();return tn===null?s.memoizedState=i:Wm(s,tn.memoizedState,i)},useTransition:function(){var i=ef(ua)[0],s=ni().memoizedState;return[i,s]},useMutableSource:Cm,useSyncExternalStore:Pm,useId:Xm,unstable_isNewReconciler:!1};function di(i,s){if(i&&i.defaultProps){s=re({},s),i=i.defaultProps;for(var a in i)s[a]===void 0&&(s[a]=i[a]);return s}return s}function rf(i,s,a,f){s=i.memoizedState,a=a(f,s),a=a==null?s:re({},s,a),i.memoizedState=a,i.lanes===0&&(i.updateQueue.baseState=a)}var Ul={isMounted:function(i){return(i=i._reactInternals)?Ei(i)===i:!1},enqueueSetState:function(i,s,a){i=i._reactInternals;var f=Dn(),p=Ar(i),v=Hi(f,p);v.payload=s,a!=null&&(v.callback=a),s=Mr(i,v,p),s!==null&&(mi(s,i,p,f),Al(s,i,p))},enqueueReplaceState:function(i,s,a){i=i._reactInternals;var f=Dn(),p=Ar(i),v=Hi(f,p);v.tag=1,v.payload=s,a!=null&&(v.callback=a),s=Mr(i,v,p),s!==null&&(mi(s,i,p,f),Al(s,i,p))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var a=Dn(),f=Ar(i),p=Hi(a,f);p.tag=2,s!=null&&(p.callback=s),s=Mr(i,p,f),s!==null&&(mi(s,i,f,a),Al(s,i,f))}};function Km(i,s,a,f,p,v,T){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(f,v,T):s.prototype&&s.prototype.isPureReactComponent?!$o(a,f)||!$o(p,v):!0}function $m(i,s,a){var f=!1,p=yr,v=s.contextType;return typeof v=="object"&&v!==null?v=ti(v):(p=Fn(s)?$r:yn.current,f=s.contextTypes,v=(f=f!=null)?Bs(i,p):yr),s=new s(a,v),i.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Ul,i.stateNode=s,s._reactInternals=i,f&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=p,i.__reactInternalMemoizedMaskedChildContext=v),s}function Zm(i,s,a,f){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,f),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,f),s.state!==i&&Ul.enqueueReplaceState(s,s.state,null)}function sf(i,s,a,f){var p=i.stateNode;p.props=a,p.state=i.memoizedState,p.refs={},Wc(i);var v=s.contextType;typeof v=="object"&&v!==null?p.context=ti(v):(v=Fn(s)?$r:yn.current,p.context=Bs(i,v)),p.state=i.memoizedState,v=s.getDerivedStateFromProps,typeof v=="function"&&(rf(i,s,v,a),p.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(s=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),s!==p.state&&Ul.enqueueReplaceState(p,p.state,null),Rl(i,a,p,f),p.state=i.memoizedState),typeof p.componentDidMount=="function"&&(i.flags|=4194308)}function Ys(i,s){try{var a="",f=s;do a+=de(f),f=f.return;while(f);var p=a}catch(v){p=`
Error generating stack: `+v.message+`
`+v.stack}return{value:i,source:s,stack:p,digest:null}}function of(i,s,a){return{value:i,source:null,stack:a??null,digest:s??null}}function af(i,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var bS=typeof WeakMap=="function"?WeakMap:Map;function Qm(i,s,a){a=Hi(-1,a),a.tag=3,a.payload={element:null};var f=s.value;return a.callback=function(){Vl||(Vl=!0,Mf=f),af(i,s)},a}function Jm(i,s,a){a=Hi(-1,a),a.tag=3;var f=i.type.getDerivedStateFromError;if(typeof f=="function"){var p=s.value;a.payload=function(){return f(p)},a.callback=function(){af(i,s)}}var v=i.stateNode;return v!==null&&typeof v.componentDidCatch=="function"&&(a.callback=function(){af(i,s),typeof f!="function"&&(Tr===null?Tr=new Set([this]):Tr.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})}),a}function eg(i,s,a){var f=i.pingCache;if(f===null){f=i.pingCache=new bS;var p=new Set;f.set(s,p)}else p=f.get(s),p===void 0&&(p=new Set,f.set(s,p));p.has(a)||(p.add(a),i=WS.bind(null,i,s,a),s.then(i,i))}function tg(i){do{var s;if((s=i.tag===13)&&(s=i.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return i;i=i.return}while(i!==null);return null}function ng(i,s,a,f,p){return i.mode&1?(i.flags|=65536,i.lanes=p,i):(i===s?i.flags|=65536:(i.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=Hi(-1,1),s.tag=2,Mr(a,s,1))),a.lanes|=1),i)}var DS=C.ReactCurrentOwner,On=!1;function bn(i,s,a,f){s.child=i===null?Mm(s,null,a,f):Gs(s,i.child,a,f)}function ig(i,s,a,f,p){a=a.render;var v=s.ref;return Xs(s,p),f=Zc(i,s,a,f,v,p),a=Qc(),i!==null&&!On?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~p,Gi(i,s,p)):(zt&&a&&Uc(s),s.flags|=1,bn(i,s,f,p),s.child)}function rg(i,s,a,f,p){if(i===null){var v=a.type;return typeof v=="function"&&!Pf(v)&&v.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=v,sg(i,s,v,f,p)):(i=Yl(a.type,null,f,s,s.mode,p),i.ref=s.ref,i.return=s,s.child=i)}if(v=i.child,!(i.lanes&p)){var T=v.memoizedProps;if(a=a.compare,a=a!==null?a:$o,a(T,f)&&i.ref===s.ref)return Gi(i,s,p)}return s.flags|=1,i=Cr(v,f),i.ref=s.ref,i.return=s,s.child=i}function sg(i,s,a,f,p){if(i!==null){var v=i.memoizedProps;if($o(v,f)&&i.ref===s.ref)if(On=!1,s.pendingProps=f=v,(i.lanes&p)!==0)i.flags&131072&&(On=!0);else return s.lanes=i.lanes,Gi(i,s,p)}return lf(i,s,a,f,p)}function og(i,s,a){var f=s.pendingProps,p=f.children,v=i!==null?i.memoizedState:null;if(f.mode==="hidden")if(!(s.mode&1))s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ut(Ks,qn),qn|=a;else{if(!(a&1073741824))return i=v!==null?v.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:i,cachePool:null,transitions:null},s.updateQueue=null,Ut(Ks,qn),qn|=i,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=v!==null?v.baseLanes:a,Ut(Ks,qn),qn|=f}else v!==null?(f=v.baseLanes|a,s.memoizedState=null):f=a,Ut(Ks,qn),qn|=f;return bn(i,s,p,a),s.child}function ag(i,s){var a=s.ref;(i===null&&a!==null||i!==null&&i.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function lf(i,s,a,f,p){var v=Fn(a)?$r:yn.current;return v=Bs(s,v),Xs(s,p),a=Zc(i,s,a,f,v,p),f=Qc(),i!==null&&!On?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~p,Gi(i,s,p)):(zt&&f&&Uc(s),s.flags|=1,bn(i,s,a,p),s.child)}function lg(i,s,a,f,p){if(Fn(a)){var v=!0;vl(s)}else v=!1;if(Xs(s,p),s.stateNode===null)Fl(i,s),$m(s,a,f),sf(s,a,f,p),f=!0;else if(i===null){var T=s.stateNode,I=s.memoizedProps;T.props=I;var k=T.context,ee=a.contextType;typeof ee=="object"&&ee!==null?ee=ti(ee):(ee=Fn(a)?$r:yn.current,ee=Bs(s,ee));var _e=a.getDerivedStateFromProps,ye=typeof _e=="function"||typeof T.getSnapshotBeforeUpdate=="function";ye||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(I!==f||k!==ee)&&Zm(s,T,f,ee),Sr=!1;var me=s.memoizedState;T.state=me,Rl(s,f,T,p),k=s.memoizedState,I!==f||me!==k||Nn.current||Sr?(typeof _e=="function"&&(rf(s,a,_e,f),k=s.memoizedState),(I=Sr||Km(s,a,I,f,me,k,ee))?(ye||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(s.flags|=4194308)):(typeof T.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=f,s.memoizedState=k),T.props=f,T.state=k,T.context=ee,f=I):(typeof T.componentDidMount=="function"&&(s.flags|=4194308),f=!1)}else{T=s.stateNode,Tm(i,s),I=s.memoizedProps,ee=s.type===s.elementType?I:di(s.type,I),T.props=ee,ye=s.pendingProps,me=T.context,k=a.contextType,typeof k=="object"&&k!==null?k=ti(k):(k=Fn(a)?$r:yn.current,k=Bs(s,k));var Le=a.getDerivedStateFromProps;(_e=typeof Le=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(I!==ye||me!==k)&&Zm(s,T,f,k),Sr=!1,me=s.memoizedState,T.state=me,Rl(s,f,T,p);var ze=s.memoizedState;I!==ye||me!==ze||Nn.current||Sr?(typeof Le=="function"&&(rf(s,a,Le,f),ze=s.memoizedState),(ee=Sr||Km(s,a,ee,f,me,ze,k)||!1)?(_e||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(f,ze,k),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(f,ze,k)),typeof T.componentDidUpdate=="function"&&(s.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof T.componentDidUpdate!="function"||I===i.memoizedProps&&me===i.memoizedState||(s.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||I===i.memoizedProps&&me===i.memoizedState||(s.flags|=1024),s.memoizedProps=f,s.memoizedState=ze),T.props=f,T.state=ze,T.context=k,f=ee):(typeof T.componentDidUpdate!="function"||I===i.memoizedProps&&me===i.memoizedState||(s.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||I===i.memoizedProps&&me===i.memoizedState||(s.flags|=1024),f=!1)}return uf(i,s,a,f,v,p)}function uf(i,s,a,f,p,v){ag(i,s);var T=(s.flags&128)!==0;if(!f&&!T)return p&&hm(s,a,!1),Gi(i,s,v);f=s.stateNode,DS.current=s;var I=T&&typeof a.getDerivedStateFromError!="function"?null:f.render();return s.flags|=1,i!==null&&T?(s.child=Gs(s,i.child,null,v),s.child=Gs(s,null,I,v)):bn(i,s,I,v),s.memoizedState=f.state,p&&hm(s,a,!0),s.child}function ug(i){var s=i.stateNode;s.pendingContext?fm(i,s.pendingContext,s.pendingContext!==s.context):s.context&&fm(i,s.context,!1),Xc(i,s.containerInfo)}function cg(i,s,a,f,p){return Hs(),kc(p),s.flags|=256,bn(i,s,a,f),s.child}var cf={dehydrated:null,treeContext:null,retryLane:0};function ff(i){return{baseLanes:i,cachePool:null,transitions:null}}function fg(i,s,a){var f=s.pendingProps,p=Vt.current,v=!1,T=(s.flags&128)!==0,I;if((I=T)||(I=i!==null&&i.memoizedState===null?!1:(p&2)!==0),I?(v=!0,s.flags&=-129):(i===null||i.memoizedState!==null)&&(p|=1),Ut(Vt,p&1),i===null)return Oc(s),i=s.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?(s.mode&1?i.data==="$!"?s.lanes=8:s.lanes=1073741824:s.lanes=1,null):(T=f.children,i=f.fallback,v?(f=s.mode,v=s.child,T={mode:"hidden",children:T},!(f&1)&&v!==null?(v.childLanes=0,v.pendingProps=T):v=ql(T,f,0,null),i=os(i,f,a,null),v.return=s,i.return=s,v.sibling=i,s.child=v,s.child.memoizedState=ff(a),s.memoizedState=cf,i):df(s,T));if(p=i.memoizedState,p!==null&&(I=p.dehydrated,I!==null))return LS(i,s,T,f,I,p,a);if(v){v=f.fallback,T=s.mode,p=i.child,I=p.sibling;var k={mode:"hidden",children:f.children};return!(T&1)&&s.child!==p?(f=s.child,f.childLanes=0,f.pendingProps=k,s.deletions=null):(f=Cr(p,k),f.subtreeFlags=p.subtreeFlags&14680064),I!==null?v=Cr(I,v):(v=os(v,T,a,null),v.flags|=2),v.return=s,f.return=s,f.sibling=v,s.child=f,f=v,v=s.child,T=i.child.memoizedState,T=T===null?ff(a):{baseLanes:T.baseLanes|a,cachePool:null,transitions:T.transitions},v.memoizedState=T,v.childLanes=i.childLanes&~a,s.memoizedState=cf,f}return v=i.child,i=v.sibling,f=Cr(v,{mode:"visible",children:f.children}),!(s.mode&1)&&(f.lanes=a),f.return=s,f.sibling=null,i!==null&&(a=s.deletions,a===null?(s.deletions=[i],s.flags|=16):a.push(i)),s.child=f,s.memoizedState=null,f}function df(i,s){return s=ql({mode:"visible",children:s},i.mode,0,null),s.return=i,i.child=s}function Nl(i,s,a,f){return f!==null&&kc(f),Gs(s,i.child,null,a),i=df(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function LS(i,s,a,f,p,v,T){if(a)return s.flags&256?(s.flags&=-257,f=of(Error(t(422))),Nl(i,s,T,f)):s.memoizedState!==null?(s.child=i.child,s.flags|=128,null):(v=f.fallback,p=s.mode,f=ql({mode:"visible",children:f.children},p,0,null),v=os(v,p,T,null),v.flags|=2,f.return=s,v.return=s,f.sibling=v,s.child=f,s.mode&1&&Gs(s,i.child,null,T),s.child.memoizedState=ff(T),s.memoizedState=cf,v);if(!(s.mode&1))return Nl(i,s,T,null);if(p.data==="$!"){if(f=p.nextSibling&&p.nextSibling.dataset,f)var I=f.dgst;return f=I,v=Error(t(419)),f=of(v,f,void 0),Nl(i,s,T,f)}if(I=(T&i.childLanes)!==0,On||I){if(f=cn,f!==null){switch(T&-T){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=p&(f.suspendedLanes|T)?0:p,p!==0&&p!==v.retryLane&&(v.retryLane=p,Vi(i,p),mi(f,i,p,-1))}return Cf(),f=of(Error(t(421))),Nl(i,s,T,f)}return p.data==="$?"?(s.flags|=128,s.child=i.child,s=XS.bind(null,i),p._reactRetry=s,null):(i=v.treeContext,Yn=_r(p.nextSibling),jn=s,zt=!0,fi=null,i!==null&&(Jn[ei++]=Bi,Jn[ei++]=zi,Jn[ei++]=Zr,Bi=i.id,zi=i.overflow,Zr=s),s=df(s,f.children),s.flags|=4096,s)}function dg(i,s,a){i.lanes|=s;var f=i.alternate;f!==null&&(f.lanes|=s),Hc(i.return,s,a)}function hf(i,s,a,f,p){var v=i.memoizedState;v===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:f,tail:a,tailMode:p}:(v.isBackwards=s,v.rendering=null,v.renderingStartTime=0,v.last=f,v.tail=a,v.tailMode=p)}function hg(i,s,a){var f=s.pendingProps,p=f.revealOrder,v=f.tail;if(bn(i,s,f.children,a),f=Vt.current,f&2)f=f&1|2,s.flags|=128;else{if(i!==null&&i.flags&128)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&dg(i,a,s);else if(i.tag===19)dg(i,a,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}f&=1}if(Ut(Vt,f),!(s.mode&1))s.memoizedState=null;else switch(p){case"forwards":for(a=s.child,p=null;a!==null;)i=a.alternate,i!==null&&Cl(i)===null&&(p=a),a=a.sibling;a=p,a===null?(p=s.child,s.child=null):(p=a.sibling,a.sibling=null),hf(s,!1,p,a,v);break;case"backwards":for(a=null,p=s.child,s.child=null;p!==null;){if(i=p.alternate,i!==null&&Cl(i)===null){s.child=p;break}i=p.sibling,p.sibling=a,a=p,p=i}hf(s,!0,a,null,v);break;case"together":hf(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Fl(i,s){!(s.mode&1)&&i!==null&&(i.alternate=null,s.alternate=null,s.flags|=2)}function Gi(i,s,a){if(i!==null&&(s.dependencies=i.dependencies),ns|=s.lanes,!(a&s.childLanes))return null;if(i!==null&&s.child!==i.child)throw Error(t(153));if(s.child!==null){for(i=s.child,a=Cr(i,i.pendingProps),s.child=a,a.return=s;i.sibling!==null;)i=i.sibling,a=a.sibling=Cr(i,i.pendingProps),a.return=s;a.sibling=null}return s.child}function IS(i,s,a){switch(s.tag){case 3:ug(s),Hs();break;case 5:Rm(s);break;case 1:Fn(s.type)&&vl(s);break;case 4:Xc(s,s.stateNode.containerInfo);break;case 10:var f=s.type._context,p=s.memoizedProps.value;Ut(Tl,f._currentValue),f._currentValue=p;break;case 13:if(f=s.memoizedState,f!==null)return f.dehydrated!==null?(Ut(Vt,Vt.current&1),s.flags|=128,null):a&s.child.childLanes?fg(i,s,a):(Ut(Vt,Vt.current&1),i=Gi(i,s,a),i!==null?i.sibling:null);Ut(Vt,Vt.current&1);break;case 19:if(f=(a&s.childLanes)!==0,i.flags&128){if(f)return hg(i,s,a);s.flags|=128}if(p=s.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),Ut(Vt,Vt.current),f)break;return null;case 22:case 23:return s.lanes=0,og(i,s,a)}return Gi(i,s,a)}var pg,pf,mg,gg;pg=function(i,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)i.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},pf=function(){},mg=function(i,s,a,f){var p=i.memoizedProps;if(p!==f){i=s.stateNode,es(Ai.current);var v=null;switch(a){case"input":p=V(i,p),f=V(i,f),v=[];break;case"select":p=re({},p,{value:void 0}),f=re({},f,{value:void 0}),v=[];break;case"textarea":p=w(i,p),f=w(i,f),v=[];break;default:typeof p.onClick!="function"&&typeof f.onClick=="function"&&(i.onclick=ml)}dt(a,f);var T;a=null;for(ee in p)if(!f.hasOwnProperty(ee)&&p.hasOwnProperty(ee)&&p[ee]!=null)if(ee==="style"){var I=p[ee];for(T in I)I.hasOwnProperty(T)&&(a||(a={}),a[T]="")}else ee!=="dangerouslySetInnerHTML"&&ee!=="children"&&ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&ee!=="autoFocus"&&(o.hasOwnProperty(ee)?v||(v=[]):(v=v||[]).push(ee,null));for(ee in f){var k=f[ee];if(I=p!=null?p[ee]:void 0,f.hasOwnProperty(ee)&&k!==I&&(k!=null||I!=null))if(ee==="style")if(I){for(T in I)!I.hasOwnProperty(T)||k&&k.hasOwnProperty(T)||(a||(a={}),a[T]="");for(T in k)k.hasOwnProperty(T)&&I[T]!==k[T]&&(a||(a={}),a[T]=k[T])}else a||(v||(v=[]),v.push(ee,a)),a=k;else ee==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,I=I?I.__html:void 0,k!=null&&I!==k&&(v=v||[]).push(ee,k)):ee==="children"?typeof k!="string"&&typeof k!="number"||(v=v||[]).push(ee,""+k):ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&(o.hasOwnProperty(ee)?(k!=null&&ee==="onScroll"&&Ft("scroll",i),v||I===k||(v=[])):(v=v||[]).push(ee,k))}a&&(v=v||[]).push("style",a);var ee=v;(s.updateQueue=ee)&&(s.flags|=4)}},gg=function(i,s,a,f){a!==f&&(s.flags|=4)};function fa(i,s){if(!zt)switch(i.tailMode){case"hidden":s=i.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?i.tail=null:a.sibling=null;break;case"collapsed":a=i.tail;for(var f=null;a!==null;)a.alternate!==null&&(f=a),a=a.sibling;f===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:f.sibling=null}}function Sn(i){var s=i.alternate!==null&&i.alternate.child===i.child,a=0,f=0;if(s)for(var p=i.child;p!==null;)a|=p.lanes|p.childLanes,f|=p.subtreeFlags&14680064,f|=p.flags&14680064,p.return=i,p=p.sibling;else for(p=i.child;p!==null;)a|=p.lanes|p.childLanes,f|=p.subtreeFlags,f|=p.flags,p.return=i,p=p.sibling;return i.subtreeFlags|=f,i.childLanes=a,s}function US(i,s,a){var f=s.pendingProps;switch(Nc(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Sn(s),null;case 1:return Fn(s.type)&&_l(),Sn(s),null;case 3:return f=s.stateNode,js(),Ot(Nn),Ot(yn),qc(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(i===null||i.child===null)&&(Ml(s)?s.flags|=4:i===null||i.memoizedState.isDehydrated&&!(s.flags&256)||(s.flags|=1024,fi!==null&&(wf(fi),fi=null))),pf(i,s),Sn(s),null;case 5:jc(s);var p=es(oa.current);if(a=s.type,i!==null&&s.stateNode!=null)mg(i,s,a,f,p),i.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!f){if(s.stateNode===null)throw Error(t(166));return Sn(s),null}if(i=es(Ai.current),Ml(s)){f=s.stateNode,a=s.type;var v=s.memoizedProps;switch(f[wi]=s,f[ta]=v,i=(s.mode&1)!==0,a){case"dialog":Ft("cancel",f),Ft("close",f);break;case"iframe":case"object":case"embed":Ft("load",f);break;case"video":case"audio":for(p=0;p<Qo.length;p++)Ft(Qo[p],f);break;case"source":Ft("error",f);break;case"img":case"image":case"link":Ft("error",f),Ft("load",f);break;case"details":Ft("toggle",f);break;case"input":Rn(f,v),Ft("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!v.multiple},Ft("invalid",f);break;case"textarea":$(f,v),Ft("invalid",f)}dt(a,v),p=null;for(var T in v)if(v.hasOwnProperty(T)){var I=v[T];T==="children"?typeof I=="string"?f.textContent!==I&&(v.suppressHydrationWarning!==!0&&pl(f.textContent,I,i),p=["children",I]):typeof I=="number"&&f.textContent!==""+I&&(v.suppressHydrationWarning!==!0&&pl(f.textContent,I,i),p=["children",""+I]):o.hasOwnProperty(T)&&I!=null&&T==="onScroll"&&Ft("scroll",f)}switch(a){case"input":Pt(f),qe(f,v,!0);break;case"textarea":Pt(f),ge(f);break;case"select":case"option":break;default:typeof v.onClick=="function"&&(f.onclick=ml)}f=p,s.updateQueue=f,f!==null&&(s.flags|=4)}else{T=p.nodeType===9?p:p.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=ce(a)),i==="http://www.w3.org/1999/xhtml"?a==="script"?(i=T.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof f.is=="string"?i=T.createElement(a,{is:f.is}):(i=T.createElement(a),a==="select"&&(T=i,f.multiple?T.multiple=!0:f.size&&(T.size=f.size))):i=T.createElementNS(i,a),i[wi]=s,i[ta]=f,pg(i,s,!1,!1),s.stateNode=i;e:{switch(T=st(a,f),a){case"dialog":Ft("cancel",i),Ft("close",i),p=f;break;case"iframe":case"object":case"embed":Ft("load",i),p=f;break;case"video":case"audio":for(p=0;p<Qo.length;p++)Ft(Qo[p],i);p=f;break;case"source":Ft("error",i),p=f;break;case"img":case"image":case"link":Ft("error",i),Ft("load",i),p=f;break;case"details":Ft("toggle",i),p=f;break;case"input":Rn(i,f),p=V(i,f),Ft("invalid",i);break;case"option":p=f;break;case"select":i._wrapperState={wasMultiple:!!f.multiple},p=re({},f,{value:void 0}),Ft("invalid",i);break;case"textarea":$(i,f),p=w(i,f),Ft("invalid",i);break;default:p=f}dt(a,p),I=p;for(v in I)if(I.hasOwnProperty(v)){var k=I[v];v==="style"?nt(i,k):v==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&Ne(i,k)):v==="children"?typeof k=="string"?(a!=="textarea"||k!=="")&&ct(i,k):typeof k=="number"&&ct(i,""+k):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(o.hasOwnProperty(v)?k!=null&&v==="onScroll"&&Ft("scroll",i):k!=null&&b(i,v,k,T))}switch(a){case"input":Pt(i),qe(i,f,!1);break;case"textarea":Pt(i),ge(i);break;case"option":f.value!=null&&i.setAttribute("value",""+Te(f.value));break;case"select":i.multiple=!!f.multiple,v=f.value,v!=null?D(i,!!f.multiple,v,!1):f.defaultValue!=null&&D(i,!!f.multiple,f.defaultValue,!0);break;default:typeof p.onClick=="function"&&(i.onclick=ml)}switch(a){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Sn(s),null;case 6:if(i&&s.stateNode!=null)gg(i,s,i.memoizedProps,f);else{if(typeof f!="string"&&s.stateNode===null)throw Error(t(166));if(a=es(oa.current),es(Ai.current),Ml(s)){if(f=s.stateNode,a=s.memoizedProps,f[wi]=s,(v=f.nodeValue!==a)&&(i=jn,i!==null))switch(i.tag){case 3:pl(f.nodeValue,a,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&pl(f.nodeValue,a,(i.mode&1)!==0)}v&&(s.flags|=4)}else f=(a.nodeType===9?a:a.ownerDocument).createTextNode(f),f[wi]=s,s.stateNode=f}return Sn(s),null;case 13:if(Ot(Vt),f=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(zt&&Yn!==null&&s.mode&1&&!(s.flags&128))ym(),Hs(),s.flags|=98560,v=!1;else if(v=Ml(s),f!==null&&f.dehydrated!==null){if(i===null){if(!v)throw Error(t(318));if(v=s.memoizedState,v=v!==null?v.dehydrated:null,!v)throw Error(t(317));v[wi]=s}else Hs(),!(s.flags&128)&&(s.memoizedState=null),s.flags|=4;Sn(s),v=!1}else fi!==null&&(wf(fi),fi=null),v=!0;if(!v)return s.flags&65536?s:null}return s.flags&128?(s.lanes=a,s):(f=f!==null,f!==(i!==null&&i.memoizedState!==null)&&f&&(s.child.flags|=8192,s.mode&1&&(i===null||Vt.current&1?nn===0&&(nn=3):Cf())),s.updateQueue!==null&&(s.flags|=4),Sn(s),null);case 4:return js(),pf(i,s),i===null&&Jo(s.stateNode.containerInfo),Sn(s),null;case 10:return Vc(s.type._context),Sn(s),null;case 17:return Fn(s.type)&&_l(),Sn(s),null;case 19:if(Ot(Vt),v=s.memoizedState,v===null)return Sn(s),null;if(f=(s.flags&128)!==0,T=v.rendering,T===null)if(f)fa(v,!1);else{if(nn!==0||i!==null&&i.flags&128)for(i=s.child;i!==null;){if(T=Cl(i),T!==null){for(s.flags|=128,fa(v,!1),f=T.updateQueue,f!==null&&(s.updateQueue=f,s.flags|=4),s.subtreeFlags=0,f=a,a=s.child;a!==null;)v=a,i=f,v.flags&=14680066,T=v.alternate,T===null?(v.childLanes=0,v.lanes=i,v.child=null,v.subtreeFlags=0,v.memoizedProps=null,v.memoizedState=null,v.updateQueue=null,v.dependencies=null,v.stateNode=null):(v.childLanes=T.childLanes,v.lanes=T.lanes,v.child=T.child,v.subtreeFlags=0,v.deletions=null,v.memoizedProps=T.memoizedProps,v.memoizedState=T.memoizedState,v.updateQueue=T.updateQueue,v.type=T.type,i=T.dependencies,v.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),a=a.sibling;return Ut(Vt,Vt.current&1|2),s.child}i=i.sibling}v.tail!==null&&q()>$s&&(s.flags|=128,f=!0,fa(v,!1),s.lanes=4194304)}else{if(!f)if(i=Cl(T),i!==null){if(s.flags|=128,f=!0,a=i.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),fa(v,!0),v.tail===null&&v.tailMode==="hidden"&&!T.alternate&&!zt)return Sn(s),null}else 2*q()-v.renderingStartTime>$s&&a!==1073741824&&(s.flags|=128,f=!0,fa(v,!1),s.lanes=4194304);v.isBackwards?(T.sibling=s.child,s.child=T):(a=v.last,a!==null?a.sibling=T:s.child=T,v.last=T)}return v.tail!==null?(s=v.tail,v.rendering=s,v.tail=s.sibling,v.renderingStartTime=q(),s.sibling=null,a=Vt.current,Ut(Vt,f?a&1|2:a&1),s):(Sn(s),null);case 22:case 23:return Rf(),f=s.memoizedState!==null,i!==null&&i.memoizedState!==null!==f&&(s.flags|=8192),f&&s.mode&1?qn&1073741824&&(Sn(s),s.subtreeFlags&6&&(s.flags|=8192)):Sn(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function NS(i,s){switch(Nc(s),s.tag){case 1:return Fn(s.type)&&_l(),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return js(),Ot(Nn),Ot(yn),qc(),i=s.flags,i&65536&&!(i&128)?(s.flags=i&-65537|128,s):null;case 5:return jc(s),null;case 13:if(Ot(Vt),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(t(340));Hs()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return Ot(Vt),null;case 4:return js(),null;case 10:return Vc(s.type._context),null;case 22:case 23:return Rf(),null;case 24:return null;default:return null}}var Ol=!1,Mn=!1,FS=typeof WeakSet=="function"?WeakSet:Set,Fe=null;function qs(i,s){var a=i.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(f){jt(i,s,f)}else a.current=null}function mf(i,s,a){try{a()}catch(f){jt(i,s,f)}}var _g=!1;function OS(i,s){if(Ac=il,i=Kp(),vc(i)){if("selectionStart"in i)var a={start:i.selectionStart,end:i.selectionEnd};else e:{a=(a=i.ownerDocument)&&a.defaultView||window;var f=a.getSelection&&a.getSelection();if(f&&f.rangeCount!==0){a=f.anchorNode;var p=f.anchorOffset,v=f.focusNode;f=f.focusOffset;try{a.nodeType,v.nodeType}catch{a=null;break e}var T=0,I=-1,k=-1,ee=0,_e=0,ye=i,me=null;t:for(;;){for(var Le;ye!==a||p!==0&&ye.nodeType!==3||(I=T+p),ye!==v||f!==0&&ye.nodeType!==3||(k=T+f),ye.nodeType===3&&(T+=ye.nodeValue.length),(Le=ye.firstChild)!==null;)me=ye,ye=Le;for(;;){if(ye===i)break t;if(me===a&&++ee===p&&(I=T),me===v&&++_e===f&&(k=T),(Le=ye.nextSibling)!==null)break;ye=me,me=ye.parentNode}ye=Le}a=I===-1||k===-1?null:{start:I,end:k}}else a=null}a=a||{start:0,end:0}}else a=null;for(Rc={focusedElem:i,selectionRange:a},il=!1,Fe=s;Fe!==null;)if(s=Fe,i=s.child,(s.subtreeFlags&1028)!==0&&i!==null)i.return=s,Fe=i;else for(;Fe!==null;){s=Fe;try{var ze=s.alternate;if(s.flags&1024)switch(s.tag){case 0:case 11:case 15:break;case 1:if(ze!==null){var Ge=ze.memoizedProps,qt=ze.memoizedState,Y=s.stateNode,G=Y.getSnapshotBeforeUpdate(s.elementType===s.type?Ge:di(s.type,Ge),qt);Y.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var K=s.stateNode.containerInfo;K.nodeType===1?K.textContent="":K.nodeType===9&&K.documentElement&&K.removeChild(K.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ee){jt(s,s.return,Ee)}if(i=s.sibling,i!==null){i.return=s.return,Fe=i;break}Fe=s.return}return ze=_g,_g=!1,ze}function da(i,s,a){var f=s.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var p=f=f.next;do{if((p.tag&i)===i){var v=p.destroy;p.destroy=void 0,v!==void 0&&mf(s,a,v)}p=p.next}while(p!==f)}}function kl(i,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&i)===i){var f=a.create;a.destroy=f()}a=a.next}while(a!==s)}}function gf(i){var s=i.ref;if(s!==null){var a=i.stateNode;switch(i.tag){case 5:i=a;break;default:i=a}typeof s=="function"?s(i):s.current=i}}function vg(i){var s=i.alternate;s!==null&&(i.alternate=null,vg(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&(delete s[wi],delete s[ta],delete s[Dc],delete s[yS],delete s[xS])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function yg(i){return i.tag===5||i.tag===3||i.tag===4}function xg(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||yg(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function _f(i,s,a){var f=i.tag;if(f===5||f===6)i=i.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(i,s):a.insertBefore(i,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(i,a)):(s=a,s.appendChild(i)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=ml));else if(f!==4&&(i=i.child,i!==null))for(_f(i,s,a),i=i.sibling;i!==null;)_f(i,s,a),i=i.sibling}function vf(i,s,a){var f=i.tag;if(f===5||f===6)i=i.stateNode,s?a.insertBefore(i,s):a.appendChild(i);else if(f!==4&&(i=i.child,i!==null))for(vf(i,s,a),i=i.sibling;i!==null;)vf(i,s,a),i=i.sibling}var pn=null,hi=!1;function Er(i,s,a){for(a=a.child;a!==null;)Sg(i,s,a),a=a.sibling}function Sg(i,s,a){if(He&&typeof He.onCommitFiberUnmount=="function")try{He.onCommitFiberUnmount(tt,a)}catch{}switch(a.tag){case 5:Mn||qs(a,s);case 6:var f=pn,p=hi;pn=null,Er(i,s,a),pn=f,hi=p,pn!==null&&(hi?(i=pn,a=a.stateNode,i.nodeType===8?i.parentNode.removeChild(a):i.removeChild(a)):pn.removeChild(a.stateNode));break;case 18:pn!==null&&(hi?(i=pn,a=a.stateNode,i.nodeType===8?bc(i.parentNode,a):i.nodeType===1&&bc(i,a),Wo(i)):bc(pn,a.stateNode));break;case 4:f=pn,p=hi,pn=a.stateNode.containerInfo,hi=!0,Er(i,s,a),pn=f,hi=p;break;case 0:case 11:case 14:case 15:if(!Mn&&(f=a.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){p=f=f.next;do{var v=p,T=v.destroy;v=v.tag,T!==void 0&&(v&2||v&4)&&mf(a,s,T),p=p.next}while(p!==f)}Er(i,s,a);break;case 1:if(!Mn&&(qs(a,s),f=a.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=a.memoizedProps,f.state=a.memoizedState,f.componentWillUnmount()}catch(I){jt(a,s,I)}Er(i,s,a);break;case 21:Er(i,s,a);break;case 22:a.mode&1?(Mn=(f=Mn)||a.memoizedState!==null,Er(i,s,a),Mn=f):Er(i,s,a);break;default:Er(i,s,a)}}function Mg(i){var s=i.updateQueue;if(s!==null){i.updateQueue=null;var a=i.stateNode;a===null&&(a=i.stateNode=new FS),s.forEach(function(f){var p=jS.bind(null,i,f);a.has(f)||(a.add(f),f.then(p,p))})}}function pi(i,s){var a=s.deletions;if(a!==null)for(var f=0;f<a.length;f++){var p=a[f];try{var v=i,T=s,I=T;e:for(;I!==null;){switch(I.tag){case 5:pn=I.stateNode,hi=!1;break e;case 3:pn=I.stateNode.containerInfo,hi=!0;break e;case 4:pn=I.stateNode.containerInfo,hi=!0;break e}I=I.return}if(pn===null)throw Error(t(160));Sg(v,T,p),pn=null,hi=!1;var k=p.alternate;k!==null&&(k.return=null),p.return=null}catch(ee){jt(p,s,ee)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)Eg(s,i),s=s.sibling}function Eg(i,s){var a=i.alternate,f=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(pi(s,i),Ci(i),f&4){try{da(3,i,i.return),kl(3,i)}catch(Ge){jt(i,i.return,Ge)}try{da(5,i,i.return)}catch(Ge){jt(i,i.return,Ge)}}break;case 1:pi(s,i),Ci(i),f&512&&a!==null&&qs(a,a.return);break;case 5:if(pi(s,i),Ci(i),f&512&&a!==null&&qs(a,a.return),i.flags&32){var p=i.stateNode;try{ct(p,"")}catch(Ge){jt(i,i.return,Ge)}}if(f&4&&(p=i.stateNode,p!=null)){var v=i.memoizedProps,T=a!==null?a.memoizedProps:v,I=i.type,k=i.updateQueue;if(i.updateQueue=null,k!==null)try{I==="input"&&v.type==="radio"&&v.name!=null&&gt(p,v),st(I,T);var ee=st(I,v);for(T=0;T<k.length;T+=2){var _e=k[T],ye=k[T+1];_e==="style"?nt(p,ye):_e==="dangerouslySetInnerHTML"?Ne(p,ye):_e==="children"?ct(p,ye):b(p,_e,ye,ee)}switch(I){case"input":ft(p,v);break;case"textarea":pe(p,v);break;case"select":var me=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!v.multiple;var Le=v.value;Le!=null?D(p,!!v.multiple,Le,!1):me!==!!v.multiple&&(v.defaultValue!=null?D(p,!!v.multiple,v.defaultValue,!0):D(p,!!v.multiple,v.multiple?[]:"",!1))}p[ta]=v}catch(Ge){jt(i,i.return,Ge)}}break;case 6:if(pi(s,i),Ci(i),f&4){if(i.stateNode===null)throw Error(t(162));p=i.stateNode,v=i.memoizedProps;try{p.nodeValue=v}catch(Ge){jt(i,i.return,Ge)}}break;case 3:if(pi(s,i),Ci(i),f&4&&a!==null&&a.memoizedState.isDehydrated)try{Wo(s.containerInfo)}catch(Ge){jt(i,i.return,Ge)}break;case 4:pi(s,i),Ci(i);break;case 13:pi(s,i),Ci(i),p=i.child,p.flags&8192&&(v=p.memoizedState!==null,p.stateNode.isHidden=v,!v||p.alternate!==null&&p.alternate.memoizedState!==null||(Sf=q())),f&4&&Mg(i);break;case 22:if(_e=a!==null&&a.memoizedState!==null,i.mode&1?(Mn=(ee=Mn)||_e,pi(s,i),Mn=ee):pi(s,i),Ci(i),f&8192){if(ee=i.memoizedState!==null,(i.stateNode.isHidden=ee)&&!_e&&i.mode&1)for(Fe=i,_e=i.child;_e!==null;){for(ye=Fe=_e;Fe!==null;){switch(me=Fe,Le=me.child,me.tag){case 0:case 11:case 14:case 15:da(4,me,me.return);break;case 1:qs(me,me.return);var ze=me.stateNode;if(typeof ze.componentWillUnmount=="function"){f=me,a=me.return;try{s=f,ze.props=s.memoizedProps,ze.state=s.memoizedState,ze.componentWillUnmount()}catch(Ge){jt(f,a,Ge)}}break;case 5:qs(me,me.return);break;case 22:if(me.memoizedState!==null){Ag(ye);continue}}Le!==null?(Le.return=me,Fe=Le):Ag(ye)}_e=_e.sibling}e:for(_e=null,ye=i;;){if(ye.tag===5){if(_e===null){_e=ye;try{p=ye.stateNode,ee?(v=p.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none"):(I=ye.stateNode,k=ye.memoizedProps.style,T=k!=null&&k.hasOwnProperty("display")?k.display:null,I.style.display=$e("display",T))}catch(Ge){jt(i,i.return,Ge)}}}else if(ye.tag===6){if(_e===null)try{ye.stateNode.nodeValue=ee?"":ye.memoizedProps}catch(Ge){jt(i,i.return,Ge)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===i)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===i)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===i)break e;_e===ye&&(_e=null),ye=ye.return}_e===ye&&(_e=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:pi(s,i),Ci(i),f&4&&Mg(i);break;case 21:break;default:pi(s,i),Ci(i)}}function Ci(i){var s=i.flags;if(s&2){try{e:{for(var a=i.return;a!==null;){if(yg(a)){var f=a;break e}a=a.return}throw Error(t(160))}switch(f.tag){case 5:var p=f.stateNode;f.flags&32&&(ct(p,""),f.flags&=-33);var v=xg(i);vf(i,v,p);break;case 3:case 4:var T=f.stateNode.containerInfo,I=xg(i);_f(i,I,T);break;default:throw Error(t(161))}}catch(k){jt(i,i.return,k)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function kS(i,s,a){Fe=i,Tg(i)}function Tg(i,s,a){for(var f=(i.mode&1)!==0;Fe!==null;){var p=Fe,v=p.child;if(p.tag===22&&f){var T=p.memoizedState!==null||Ol;if(!T){var I=p.alternate,k=I!==null&&I.memoizedState!==null||Mn;I=Ol;var ee=Mn;if(Ol=T,(Mn=k)&&!ee)for(Fe=p;Fe!==null;)T=Fe,k=T.child,T.tag===22&&T.memoizedState!==null?Rg(p):k!==null?(k.return=T,Fe=k):Rg(p);for(;v!==null;)Fe=v,Tg(v),v=v.sibling;Fe=p,Ol=I,Mn=ee}wg(i)}else p.subtreeFlags&8772&&v!==null?(v.return=p,Fe=v):wg(i)}}function wg(i){for(;Fe!==null;){var s=Fe;if(s.flags&8772){var a=s.alternate;try{if(s.flags&8772)switch(s.tag){case 0:case 11:case 15:Mn||kl(5,s);break;case 1:var f=s.stateNode;if(s.flags&4&&!Mn)if(a===null)f.componentDidMount();else{var p=s.elementType===s.type?a.memoizedProps:di(s.type,a.memoizedProps);f.componentDidUpdate(p,a.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var v=s.updateQueue;v!==null&&Am(s,v,f);break;case 3:var T=s.updateQueue;if(T!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}Am(s,T,a)}break;case 5:var I=s.stateNode;if(a===null&&s.flags&4){a=I;var k=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&a.focus();break;case"img":k.src&&(a.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var ee=s.alternate;if(ee!==null){var _e=ee.memoizedState;if(_e!==null){var ye=_e.dehydrated;ye!==null&&Wo(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Mn||s.flags&512&&gf(s)}catch(me){jt(s,s.return,me)}}if(s===i){Fe=null;break}if(a=s.sibling,a!==null){a.return=s.return,Fe=a;break}Fe=s.return}}function Ag(i){for(;Fe!==null;){var s=Fe;if(s===i){Fe=null;break}var a=s.sibling;if(a!==null){a.return=s.return,Fe=a;break}Fe=s.return}}function Rg(i){for(;Fe!==null;){var s=Fe;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{kl(4,s)}catch(k){jt(s,a,k)}break;case 1:var f=s.stateNode;if(typeof f.componentDidMount=="function"){var p=s.return;try{f.componentDidMount()}catch(k){jt(s,p,k)}}var v=s.return;try{gf(s)}catch(k){jt(s,v,k)}break;case 5:var T=s.return;try{gf(s)}catch(k){jt(s,T,k)}}}catch(k){jt(s,s.return,k)}if(s===i){Fe=null;break}var I=s.sibling;if(I!==null){I.return=s.return,Fe=I;break}Fe=s.return}}var BS=Math.ceil,Bl=C.ReactCurrentDispatcher,yf=C.ReactCurrentOwner,ii=C.ReactCurrentBatchConfig,Et=0,cn=null,Qt=null,mn=0,qn=0,Ks=vr(0),nn=0,ha=null,ns=0,zl=0,xf=0,pa=null,kn=null,Sf=0,$s=1/0,Wi=null,Vl=!1,Mf=null,Tr=null,Hl=!1,wr=null,Gl=0,ma=0,Ef=null,Wl=-1,Xl=0;function Dn(){return Et&6?q():Wl!==-1?Wl:Wl=q()}function Ar(i){return i.mode&1?Et&2&&mn!==0?mn&-mn:MS.transition!==null?(Xl===0&&(Xl=Lt()),Xl):(i=Mt,i!==0||(i=window.event,i=i===void 0?16:Pp(i.type)),i):1}function mi(i,s,a,f){if(50<ma)throw ma=0,Ef=null,Error(t(185));an(i,a,f),(!(Et&2)||i!==cn)&&(i===cn&&(!(Et&2)&&(zl|=a),nn===4&&Rr(i,mn)),Bn(i,f),a===1&&Et===0&&!(s.mode&1)&&($s=q()+500,yl&&xr()))}function Bn(i,s){var a=i.callbackNode;Pn(i,s);var f=_n(i,i===cn?mn:0);if(f===0)a!==null&&A(a),i.callbackNode=null,i.callbackPriority=0;else if(s=f&-f,i.callbackPriority!==s){if(a!=null&&A(a),s===1)i.tag===0?SS(Pg.bind(null,i)):pm(Pg.bind(null,i)),_S(function(){!(Et&6)&&xr()}),a=null;else{switch(Ti(f)){case 1:a=xe;break;case 4:a=Re;break;case 16:a=De;break;case 536870912:a=it;break;default:a=De}a=Og(a,Cg.bind(null,i))}i.callbackPriority=s,i.callbackNode=a}}function Cg(i,s){if(Wl=-1,Xl=0,Et&6)throw Error(t(327));var a=i.callbackNode;if(Zs()&&i.callbackNode!==a)return null;var f=_n(i,i===cn?mn:0);if(f===0)return null;if(f&30||f&i.expiredLanes||s)s=jl(i,f);else{s=f;var p=Et;Et|=2;var v=Dg();(cn!==i||mn!==s)&&(Wi=null,$s=q()+500,rs(i,s));do try{HS();break}catch(I){bg(i,I)}while(!0);zc(),Bl.current=v,Et=p,Qt!==null?s=0:(cn=null,mn=0,s=nn)}if(s!==0){if(s===2&&(p=Fi(i),p!==0&&(f=p,s=Tf(i,p))),s===1)throw a=ha,rs(i,0),Rr(i,f),Bn(i,q()),a;if(s===6)Rr(i,f);else{if(p=i.current.alternate,!(f&30)&&!zS(p)&&(s=jl(i,f),s===2&&(v=Fi(i),v!==0&&(f=v,s=Tf(i,v))),s===1))throw a=ha,rs(i,0),Rr(i,f),Bn(i,q()),a;switch(i.finishedWork=p,i.finishedLanes=f,s){case 0:case 1:throw Error(t(345));case 2:ss(i,kn,Wi);break;case 3:if(Rr(i,f),(f&130023424)===f&&(s=Sf+500-q(),10<s)){if(_n(i,0)!==0)break;if(p=i.suspendedLanes,(p&f)!==f){Dn(),i.pingedLanes|=i.suspendedLanes&p;break}i.timeoutHandle=Pc(ss.bind(null,i,kn,Wi),s);break}ss(i,kn,Wi);break;case 4:if(Rr(i,f),(f&4194240)===f)break;for(s=i.eventTimes,p=-1;0<f;){var T=31-at(f);v=1<<T,T=s[T],T>p&&(p=T),f&=~v}if(f=p,f=q()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*BS(f/1960))-f,10<f){i.timeoutHandle=Pc(ss.bind(null,i,kn,Wi),f);break}ss(i,kn,Wi);break;case 5:ss(i,kn,Wi);break;default:throw Error(t(329))}}}return Bn(i,q()),i.callbackNode===a?Cg.bind(null,i):null}function Tf(i,s){var a=pa;return i.current.memoizedState.isDehydrated&&(rs(i,s).flags|=256),i=jl(i,s),i!==2&&(s=kn,kn=a,s!==null&&wf(s)),i}function wf(i){kn===null?kn=i:kn.push.apply(kn,i)}function zS(i){for(var s=i;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var f=0;f<a.length;f++){var p=a[f],v=p.getSnapshot;p=p.value;try{if(!ci(v(),p))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Rr(i,s){for(s&=~xf,s&=~zl,i.suspendedLanes|=s,i.pingedLanes&=~s,i=i.expirationTimes;0<s;){var a=31-at(s),f=1<<a;i[a]=-1,s&=~f}}function Pg(i){if(Et&6)throw Error(t(327));Zs();var s=_n(i,0);if(!(s&1))return Bn(i,q()),null;var a=jl(i,s);if(i.tag!==0&&a===2){var f=Fi(i);f!==0&&(s=f,a=Tf(i,f))}if(a===1)throw a=ha,rs(i,0),Rr(i,s),Bn(i,q()),a;if(a===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=s,ss(i,kn,Wi),Bn(i,q()),null}function Af(i,s){var a=Et;Et|=1;try{return i(s)}finally{Et=a,Et===0&&($s=q()+500,yl&&xr())}}function is(i){wr!==null&&wr.tag===0&&!(Et&6)&&Zs();var s=Et;Et|=1;var a=ii.transition,f=Mt;try{if(ii.transition=null,Mt=1,i)return i()}finally{Mt=f,ii.transition=a,Et=s,!(Et&6)&&xr()}}function Rf(){qn=Ks.current,Ot(Ks)}function rs(i,s){i.finishedWork=null,i.finishedLanes=0;var a=i.timeoutHandle;if(a!==-1&&(i.timeoutHandle=-1,gS(a)),Qt!==null)for(a=Qt.return;a!==null;){var f=a;switch(Nc(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&_l();break;case 3:js(),Ot(Nn),Ot(yn),qc();break;case 5:jc(f);break;case 4:js();break;case 13:Ot(Vt);break;case 19:Ot(Vt);break;case 10:Vc(f.type._context);break;case 22:case 23:Rf()}a=a.return}if(cn=i,Qt=i=Cr(i.current,null),mn=qn=s,nn=0,ha=null,xf=zl=ns=0,kn=pa=null,Jr!==null){for(s=0;s<Jr.length;s++)if(a=Jr[s],f=a.interleaved,f!==null){a.interleaved=null;var p=f.next,v=a.pending;if(v!==null){var T=v.next;v.next=p,f.next=T}a.pending=f}Jr=null}return i}function bg(i,s){do{var a=Qt;try{if(zc(),Pl.current=Il,bl){for(var f=Ht.memoizedState;f!==null;){var p=f.queue;p!==null&&(p.pending=null),f=f.next}bl=!1}if(ts=0,un=tn=Ht=null,aa=!1,la=0,yf.current=null,a===null||a.return===null){nn=1,ha=s,Qt=null;break}e:{var v=i,T=a.return,I=a,k=s;if(s=mn,I.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var ee=k,_e=I,ye=_e.tag;if(!(_e.mode&1)&&(ye===0||ye===11||ye===15)){var me=_e.alternate;me?(_e.updateQueue=me.updateQueue,_e.memoizedState=me.memoizedState,_e.lanes=me.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var Le=tg(T);if(Le!==null){Le.flags&=-257,ng(Le,T,I,v,s),Le.mode&1&&eg(v,ee,s),s=Le,k=ee;var ze=s.updateQueue;if(ze===null){var Ge=new Set;Ge.add(k),s.updateQueue=Ge}else ze.add(k);break e}else{if(!(s&1)){eg(v,ee,s),Cf();break e}k=Error(t(426))}}else if(zt&&I.mode&1){var qt=tg(T);if(qt!==null){!(qt.flags&65536)&&(qt.flags|=256),ng(qt,T,I,v,s),kc(Ys(k,I));break e}}v=k=Ys(k,I),nn!==4&&(nn=2),pa===null?pa=[v]:pa.push(v),v=T;do{switch(v.tag){case 3:v.flags|=65536,s&=-s,v.lanes|=s;var Y=Qm(v,k,s);wm(v,Y);break e;case 1:I=k;var G=v.type,K=v.stateNode;if(!(v.flags&128)&&(typeof G.getDerivedStateFromError=="function"||K!==null&&typeof K.componentDidCatch=="function"&&(Tr===null||!Tr.has(K)))){v.flags|=65536,s&=-s,v.lanes|=s;var Ee=Jm(v,I,s);wm(v,Ee);break e}}v=v.return}while(v!==null)}Ig(a)}catch(je){s=je,Qt===a&&a!==null&&(Qt=a=a.return);continue}break}while(!0)}function Dg(){var i=Bl.current;return Bl.current=Il,i===null?Il:i}function Cf(){(nn===0||nn===3||nn===2)&&(nn=4),cn===null||!(ns&268435455)&&!(zl&268435455)||Rr(cn,mn)}function jl(i,s){var a=Et;Et|=2;var f=Dg();(cn!==i||mn!==s)&&(Wi=null,rs(i,s));do try{VS();break}catch(p){bg(i,p)}while(!0);if(zc(),Et=a,Bl.current=f,Qt!==null)throw Error(t(261));return cn=null,mn=0,nn}function VS(){for(;Qt!==null;)Lg(Qt)}function HS(){for(;Qt!==null&&!X();)Lg(Qt)}function Lg(i){var s=Fg(i.alternate,i,qn);i.memoizedProps=i.pendingProps,s===null?Ig(i):Qt=s,yf.current=null}function Ig(i){var s=i;do{var a=s.alternate;if(i=s.return,s.flags&32768){if(a=NS(a,s),a!==null){a.flags&=32767,Qt=a;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{nn=6,Qt=null;return}}else if(a=US(a,s,qn),a!==null){Qt=a;return}if(s=s.sibling,s!==null){Qt=s;return}Qt=s=i}while(s!==null);nn===0&&(nn=5)}function ss(i,s,a){var f=Mt,p=ii.transition;try{ii.transition=null,Mt=1,GS(i,s,a,f)}finally{ii.transition=p,Mt=f}return null}function GS(i,s,a,f){do Zs();while(wr!==null);if(Et&6)throw Error(t(327));a=i.finishedWork;var p=i.finishedLanes;if(a===null)return null;if(i.finishedWork=null,i.finishedLanes=0,a===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var v=a.lanes|a.childLanes;if(hn(i,v),i===cn&&(Qt=cn=null,mn=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||Hl||(Hl=!0,Og(De,function(){return Zs(),null})),v=(a.flags&15990)!==0,a.subtreeFlags&15990||v){v=ii.transition,ii.transition=null;var T=Mt;Mt=1;var I=Et;Et|=4,yf.current=null,OS(i,a),Eg(a,i),uS(Rc),il=!!Ac,Rc=Ac=null,i.current=a,kS(a),J(),Et=I,Mt=T,ii.transition=v}else i.current=a;if(Hl&&(Hl=!1,wr=i,Gl=p),v=i.pendingLanes,v===0&&(Tr=null),yt(a.stateNode),Bn(i,q()),s!==null)for(f=i.onRecoverableError,a=0;a<s.length;a++)p=s[a],f(p.value,{componentStack:p.stack,digest:p.digest});if(Vl)throw Vl=!1,i=Mf,Mf=null,i;return Gl&1&&i.tag!==0&&Zs(),v=i.pendingLanes,v&1?i===Ef?ma++:(ma=0,Ef=i):ma=0,xr(),null}function Zs(){if(wr!==null){var i=Ti(Gl),s=ii.transition,a=Mt;try{if(ii.transition=null,Mt=16>i?16:i,wr===null)var f=!1;else{if(i=wr,wr=null,Gl=0,Et&6)throw Error(t(331));var p=Et;for(Et|=4,Fe=i.current;Fe!==null;){var v=Fe,T=v.child;if(Fe.flags&16){var I=v.deletions;if(I!==null){for(var k=0;k<I.length;k++){var ee=I[k];for(Fe=ee;Fe!==null;){var _e=Fe;switch(_e.tag){case 0:case 11:case 15:da(8,_e,v)}var ye=_e.child;if(ye!==null)ye.return=_e,Fe=ye;else for(;Fe!==null;){_e=Fe;var me=_e.sibling,Le=_e.return;if(vg(_e),_e===ee){Fe=null;break}if(me!==null){me.return=Le,Fe=me;break}Fe=Le}}}var ze=v.alternate;if(ze!==null){var Ge=ze.child;if(Ge!==null){ze.child=null;do{var qt=Ge.sibling;Ge.sibling=null,Ge=qt}while(Ge!==null)}}Fe=v}}if(v.subtreeFlags&2064&&T!==null)T.return=v,Fe=T;else e:for(;Fe!==null;){if(v=Fe,v.flags&2048)switch(v.tag){case 0:case 11:case 15:da(9,v,v.return)}var Y=v.sibling;if(Y!==null){Y.return=v.return,Fe=Y;break e}Fe=v.return}}var G=i.current;for(Fe=G;Fe!==null;){T=Fe;var K=T.child;if(T.subtreeFlags&2064&&K!==null)K.return=T,Fe=K;else e:for(T=G;Fe!==null;){if(I=Fe,I.flags&2048)try{switch(I.tag){case 0:case 11:case 15:kl(9,I)}}catch(je){jt(I,I.return,je)}if(I===T){Fe=null;break e}var Ee=I.sibling;if(Ee!==null){Ee.return=I.return,Fe=Ee;break e}Fe=I.return}}if(Et=p,xr(),He&&typeof He.onPostCommitFiberRoot=="function")try{He.onPostCommitFiberRoot(tt,i)}catch{}f=!0}return f}finally{Mt=a,ii.transition=s}}return!1}function Ug(i,s,a){s=Ys(a,s),s=Qm(i,s,1),i=Mr(i,s,1),s=Dn(),i!==null&&(an(i,1,s),Bn(i,s))}function jt(i,s,a){if(i.tag===3)Ug(i,i,a);else for(;s!==null;){if(s.tag===3){Ug(s,i,a);break}else if(s.tag===1){var f=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(Tr===null||!Tr.has(f))){i=Ys(a,i),i=Jm(s,i,1),s=Mr(s,i,1),i=Dn(),s!==null&&(an(s,1,i),Bn(s,i));break}}s=s.return}}function WS(i,s,a){var f=i.pingCache;f!==null&&f.delete(s),s=Dn(),i.pingedLanes|=i.suspendedLanes&a,cn===i&&(mn&a)===a&&(nn===4||nn===3&&(mn&130023424)===mn&&500>q()-Sf?rs(i,0):xf|=a),Bn(i,s)}function Ng(i,s){s===0&&(i.mode&1?(s=Xt,Xt<<=1,!(Xt&130023424)&&(Xt=4194304)):s=1);var a=Dn();i=Vi(i,s),i!==null&&(an(i,s,a),Bn(i,a))}function XS(i){var s=i.memoizedState,a=0;s!==null&&(a=s.retryLane),Ng(i,a)}function jS(i,s){var a=0;switch(i.tag){case 13:var f=i.stateNode,p=i.memoizedState;p!==null&&(a=p.retryLane);break;case 19:f=i.stateNode;break;default:throw Error(t(314))}f!==null&&f.delete(s),Ng(i,a)}var Fg;Fg=function(i,s,a){if(i!==null)if(i.memoizedProps!==s.pendingProps||Nn.current)On=!0;else{if(!(i.lanes&a)&&!(s.flags&128))return On=!1,IS(i,s,a);On=!!(i.flags&131072)}else On=!1,zt&&s.flags&1048576&&mm(s,Sl,s.index);switch(s.lanes=0,s.tag){case 2:var f=s.type;Fl(i,s),i=s.pendingProps;var p=Bs(s,yn.current);Xs(s,a),p=Zc(null,s,f,i,p,a);var v=Qc();return s.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Fn(f)?(v=!0,vl(s)):v=!1,s.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,Wc(s),p.updater=Ul,s.stateNode=p,p._reactInternals=s,sf(s,f,i,a),s=uf(null,s,f,!0,v,a)):(s.tag=0,zt&&v&&Uc(s),bn(null,s,p,a),s=s.child),s;case 16:f=s.elementType;e:{switch(Fl(i,s),i=s.pendingProps,p=f._init,f=p(f._payload),s.type=f,p=s.tag=qS(f),i=di(f,i),p){case 0:s=lf(null,s,f,i,a);break e;case 1:s=lg(null,s,f,i,a);break e;case 11:s=ig(null,s,f,i,a);break e;case 14:s=rg(null,s,f,di(f.type,i),a);break e}throw Error(t(306,f,""))}return s;case 0:return f=s.type,p=s.pendingProps,p=s.elementType===f?p:di(f,p),lf(i,s,f,p,a);case 1:return f=s.type,p=s.pendingProps,p=s.elementType===f?p:di(f,p),lg(i,s,f,p,a);case 3:e:{if(ug(s),i===null)throw Error(t(387));f=s.pendingProps,v=s.memoizedState,p=v.element,Tm(i,s),Rl(s,f,null,a);var T=s.memoizedState;if(f=T.element,v.isDehydrated)if(v={element:f,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},s.updateQueue.baseState=v,s.memoizedState=v,s.flags&256){p=Ys(Error(t(423)),s),s=cg(i,s,f,a,p);break e}else if(f!==p){p=Ys(Error(t(424)),s),s=cg(i,s,f,a,p);break e}else for(Yn=_r(s.stateNode.containerInfo.firstChild),jn=s,zt=!0,fi=null,a=Mm(s,null,f,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Hs(),f===p){s=Gi(i,s,a);break e}bn(i,s,f,a)}s=s.child}return s;case 5:return Rm(s),i===null&&Oc(s),f=s.type,p=s.pendingProps,v=i!==null?i.memoizedProps:null,T=p.children,Cc(f,p)?T=null:v!==null&&Cc(f,v)&&(s.flags|=32),ag(i,s),bn(i,s,T,a),s.child;case 6:return i===null&&Oc(s),null;case 13:return fg(i,s,a);case 4:return Xc(s,s.stateNode.containerInfo),f=s.pendingProps,i===null?s.child=Gs(s,null,f,a):bn(i,s,f,a),s.child;case 11:return f=s.type,p=s.pendingProps,p=s.elementType===f?p:di(f,p),ig(i,s,f,p,a);case 7:return bn(i,s,s.pendingProps,a),s.child;case 8:return bn(i,s,s.pendingProps.children,a),s.child;case 12:return bn(i,s,s.pendingProps.children,a),s.child;case 10:e:{if(f=s.type._context,p=s.pendingProps,v=s.memoizedProps,T=p.value,Ut(Tl,f._currentValue),f._currentValue=T,v!==null)if(ci(v.value,T)){if(v.children===p.children&&!Nn.current){s=Gi(i,s,a);break e}}else for(v=s.child,v!==null&&(v.return=s);v!==null;){var I=v.dependencies;if(I!==null){T=v.child;for(var k=I.firstContext;k!==null;){if(k.context===f){if(v.tag===1){k=Hi(-1,a&-a),k.tag=2;var ee=v.updateQueue;if(ee!==null){ee=ee.shared;var _e=ee.pending;_e===null?k.next=k:(k.next=_e.next,_e.next=k),ee.pending=k}}v.lanes|=a,k=v.alternate,k!==null&&(k.lanes|=a),Hc(v.return,a,s),I.lanes|=a;break}k=k.next}}else if(v.tag===10)T=v.type===s.type?null:v.child;else if(v.tag===18){if(T=v.return,T===null)throw Error(t(341));T.lanes|=a,I=T.alternate,I!==null&&(I.lanes|=a),Hc(T,a,s),T=v.sibling}else T=v.child;if(T!==null)T.return=v;else for(T=v;T!==null;){if(T===s){T=null;break}if(v=T.sibling,v!==null){v.return=T.return,T=v;break}T=T.return}v=T}bn(i,s,p.children,a),s=s.child}return s;case 9:return p=s.type,f=s.pendingProps.children,Xs(s,a),p=ti(p),f=f(p),s.flags|=1,bn(i,s,f,a),s.child;case 14:return f=s.type,p=di(f,s.pendingProps),p=di(f.type,p),rg(i,s,f,p,a);case 15:return sg(i,s,s.type,s.pendingProps,a);case 17:return f=s.type,p=s.pendingProps,p=s.elementType===f?p:di(f,p),Fl(i,s),s.tag=1,Fn(f)?(i=!0,vl(s)):i=!1,Xs(s,a),$m(s,f,p),sf(s,f,p,a),uf(null,s,f,!0,i,a);case 19:return hg(i,s,a);case 22:return og(i,s,a)}throw Error(t(156,s.tag))};function Og(i,s){return el(i,s)}function YS(i,s,a,f){this.tag=i,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ri(i,s,a,f){return new YS(i,s,a,f)}function Pf(i){return i=i.prototype,!(!i||!i.isReactComponent)}function qS(i){if(typeof i=="function")return Pf(i)?1:0;if(i!=null){if(i=i.$$typeof,i===oe)return 11;if(i===he)return 14}return 2}function Cr(i,s){var a=i.alternate;return a===null?(a=ri(i.tag,s,i.key,i.mode),a.elementType=i.elementType,a.type=i.type,a.stateNode=i.stateNode,a.alternate=i,i.alternate=a):(a.pendingProps=s,a.type=i.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=i.flags&14680064,a.childLanes=i.childLanes,a.lanes=i.lanes,a.child=i.child,a.memoizedProps=i.memoizedProps,a.memoizedState=i.memoizedState,a.updateQueue=i.updateQueue,s=i.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=i.sibling,a.index=i.index,a.ref=i.ref,a}function Yl(i,s,a,f,p,v){var T=2;if(f=i,typeof i=="function")Pf(i)&&(T=1);else if(typeof i=="string")T=5;else e:switch(i){case U:return os(a.children,p,v,s);case z:T=8,p|=8;break;case P:return i=ri(12,a,s,p|2),i.elementType=P,i.lanes=v,i;case te:return i=ri(13,a,s,p),i.elementType=te,i.lanes=v,i;case ue:return i=ri(19,a,s,p),i.elementType=ue,i.lanes=v,i;case ie:return ql(a,p,v,s);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case R:T=10;break e;case H:T=9;break e;case oe:T=11;break e;case he:T=14;break e;case le:T=16,f=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return s=ri(T,a,s,p),s.elementType=i,s.type=f,s.lanes=v,s}function os(i,s,a,f){return i=ri(7,i,f,s),i.lanes=a,i}function ql(i,s,a,f){return i=ri(22,i,f,s),i.elementType=ie,i.lanes=a,i.stateNode={isHidden:!1},i}function bf(i,s,a){return i=ri(6,i,null,s),i.lanes=a,i}function Df(i,s,a){return s=ri(4,i.children!==null?i.children:[],i.key,s),s.lanes=a,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}function KS(i,s,a,f,p){this.tag=s,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vn(0),this.expirationTimes=vn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vn(0),this.identifierPrefix=f,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function Lf(i,s,a,f,p,v,T,I,k){return i=new KS(i,s,a,I,k),s===1?(s=1,v===!0&&(s|=8)):s=0,v=ri(3,null,null,s),i.current=v,v.stateNode=i,v.memoizedState={element:f,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wc(v),i}function $S(i,s,a){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:f==null?null:""+f,children:i,containerInfo:s,implementation:a}}function kg(i){if(!i)return yr;i=i._reactInternals;e:{if(Ei(i)!==i||i.tag!==1)throw Error(t(170));var s=i;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Fn(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(i.tag===1){var a=i.type;if(Fn(a))return dm(i,a,s)}return s}function Bg(i,s,a,f,p,v,T,I,k){return i=Lf(a,f,!0,i,p,v,T,I,k),i.context=kg(null),a=i.current,f=Dn(),p=Ar(a),v=Hi(f,p),v.callback=s??null,Mr(a,v,p),i.current.lanes=p,an(i,p,f),Bn(i,f),i}function Kl(i,s,a,f){var p=s.current,v=Dn(),T=Ar(p);return a=kg(a),s.context===null?s.context=a:s.pendingContext=a,s=Hi(v,T),s.payload={element:i},f=f===void 0?null:f,f!==null&&(s.callback=f),i=Mr(p,s,T),i!==null&&(mi(i,p,T,v),Al(i,p,T)),T}function $l(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function zg(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var a=i.retryLane;i.retryLane=a!==0&&a<s?a:s}}function If(i,s){zg(i,s),(i=i.alternate)&&zg(i,s)}var Vg=typeof reportError=="function"?reportError:function(i){console.error(i)};function Uf(i){this._internalRoot=i}Zl.prototype.render=Uf.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(t(409));Kl(i,s,null,null)},Zl.prototype.unmount=Uf.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;is(function(){Kl(null,i,null,null)}),s[Oi]=null}};function Zl(i){this._internalRoot=i}Zl.prototype.unstable_scheduleHydration=function(i){if(i){var s=Tp();i={blockedOn:null,target:i,priority:s};for(var a=0;a<pr.length&&s!==0&&s<pr[a].priority;a++);pr.splice(a,0,i),a===0&&Rp(i)}};function Nf(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function Ql(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function Hg(){}function ZS(i,s,a,f,p){if(p){if(typeof f=="function"){var v=f;f=function(){var ee=$l(T);v.call(ee)}}var T=Bg(s,f,i,0,null,!1,!1,"",Hg);return i._reactRootContainer=T,i[Oi]=T.current,Jo(i.nodeType===8?i.parentNode:i),is(),T}for(;p=i.lastChild;)i.removeChild(p);if(typeof f=="function"){var I=f;f=function(){var ee=$l(k);I.call(ee)}}var k=Lf(i,0,!1,null,null,!1,!1,"",Hg);return i._reactRootContainer=k,i[Oi]=k.current,Jo(i.nodeType===8?i.parentNode:i),is(function(){Kl(s,k,a,f)}),k}function Jl(i,s,a,f,p){var v=a._reactRootContainer;if(v){var T=v;if(typeof p=="function"){var I=p;p=function(){var k=$l(T);I.call(k)}}Kl(s,T,i,p)}else T=ZS(a,s,i,p,f);return $l(T)}Mp=function(i){switch(i.tag){case 3:var s=i.stateNode;if(s.current.memoizedState.isDehydrated){var a=vt(s.pendingLanes);a!==0&&(ln(s,a|1),Bn(s,q()),!(Et&6)&&($s=q()+500,xr()))}break;case 13:is(function(){var f=Vi(i,1);if(f!==null){var p=Dn();mi(f,i,1,p)}}),If(i,1)}},sc=function(i){if(i.tag===13){var s=Vi(i,134217728);if(s!==null){var a=Dn();mi(s,i,134217728,a)}If(i,134217728)}},Ep=function(i){if(i.tag===13){var s=Ar(i),a=Vi(i,s);if(a!==null){var f=Dn();mi(a,i,s,f)}If(i,s)}},Tp=function(){return Mt},wp=function(i,s){var a=Mt;try{return Mt=i,s()}finally{Mt=a}},Ae=function(i,s,a){switch(s){case"input":if(ft(i,a),s=a.name,a.type==="radio"&&s!=null){for(a=i;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var f=a[s];if(f!==i&&f.form===i.form){var p=gl(f);if(!p)throw Error(t(90));_t(f),ft(f,p)}}}break;case"textarea":pe(i,a);break;case"select":s=a.value,s!=null&&D(i,!!a.multiple,s,!1)}},Nt=Af,en=is;var QS={usingClientEntryPoint:!1,Events:[na,Os,gl,Pe,ot,Af]},ga={findFiberByHostInstance:Kr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},JS={bundleType:ga.bundleType,version:ga.version,rendererPackageName:ga.rendererPackageName,rendererConfig:ga.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=Qa(i),i===null?null:i.stateNode},findFiberByHostInstance:ga.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var eu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!eu.isDisabled&&eu.supportsFiber)try{tt=eu.inject(JS),He=eu}catch{}}return zn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=QS,zn.createPortal=function(i,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Nf(s))throw Error(t(200));return $S(i,s,null,a)},zn.createRoot=function(i,s){if(!Nf(i))throw Error(t(299));var a=!1,f="",p=Vg;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onRecoverableError!==void 0&&(p=s.onRecoverableError)),s=Lf(i,1,!1,null,null,a,!1,f,p),i[Oi]=s.current,Jo(i.nodeType===8?i.parentNode:i),new Uf(s)},zn.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=Qa(s),i=i===null?null:i.stateNode,i},zn.flushSync=function(i){return is(i)},zn.hydrate=function(i,s,a){if(!Ql(s))throw Error(t(200));return Jl(null,i,s,!0,a)},zn.hydrateRoot=function(i,s,a){if(!Nf(i))throw Error(t(405));var f=a!=null&&a.hydratedSources||null,p=!1,v="",T=Vg;if(a!=null&&(a.unstable_strictMode===!0&&(p=!0),a.identifierPrefix!==void 0&&(v=a.identifierPrefix),a.onRecoverableError!==void 0&&(T=a.onRecoverableError)),s=Bg(s,null,i,1,a??null,p,!1,v,T),i[Oi]=s.current,Jo(i),f)for(i=0;i<f.length;i++)a=f[i],p=a._getVersion,p=p(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,p]:s.mutableSourceEagerHydrationData.push(a,p);return new Zl(s)},zn.render=function(i,s,a){if(!Ql(s))throw Error(t(200));return Jl(null,i,s,!1,a)},zn.unmountComponentAtNode=function(i){if(!Ql(i))throw Error(t(40));return i._reactRootContainer?(is(function(){Jl(null,null,i,!1,function(){i._reactRootContainer=null,i[Oi]=null})}),!0):!1},zn.unstable_batchedUpdates=Af,zn.unstable_renderSubtreeIntoContainer=function(i,s,a,f){if(!Ql(a))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return Jl(i,s,a,!1,f)},zn.version="18.3.1-next-f1338f8080-20240426",zn}var $g;function aM(){if($g)return kf.exports;$g=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),kf.exports=oM(),kf.exports}var Zg;function lM(){if(Zg)return tu;Zg=1;var n=aM();return tu.createRoot=n.createRoot,tu.hydrateRoot=n.hydrateRoot,tu}var uM=lM();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ih="172",Mo={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},mo={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},cM=0,Qg=1,fM=2,g0=1,dM=2,$i=3,Hr=0,Hn=1,Zi=2,Br=0,Eo=1,Jg=2,e_=3,t_=4,hM=5,_s=100,pM=101,mM=102,gM=103,_M=104,vM=200,yM=201,xM=202,SM=203,Cd=204,Pd=205,MM=206,EM=207,TM=208,wM=209,AM=210,RM=211,CM=212,PM=213,bM=214,bd=0,Dd=1,Ld=2,Ao=3,Id=4,Ud=5,Nd=6,Fd=7,_0=0,DM=1,LM=2,zr=0,IM=1,UM=2,NM=3,FM=4,OM=5,kM=6,BM=7,v0=300,Ro=301,Co=302,Od=303,kd=304,Ku=306,Bd=1e3,ys=1001,zd=1002,Mi=1003,zM=1004,nu=1005,bi=1006,Vf=1007,xs=1008,rr=1009,y0=1010,x0=1011,Ia=1012,Uh=1013,Es=1014,Qi=1015,za=1016,Nh=1017,Fh=1018,Po=1020,S0=35902,M0=1021,E0=1022,Si=1023,T0=1024,w0=1025,To=1026,bo=1027,A0=1028,Oh=1029,R0=1030,kh=1031,Bh=1033,bu=33776,Du=33777,Lu=33778,Iu=33779,Vd=35840,Hd=35841,Gd=35842,Wd=35843,Xd=36196,jd=37492,Yd=37496,qd=37808,Kd=37809,$d=37810,Zd=37811,Qd=37812,Jd=37813,eh=37814,th=37815,nh=37816,ih=37817,rh=37818,sh=37819,oh=37820,ah=37821,Uu=36492,lh=36494,uh=36495,C0=36283,ch=36284,fh=36285,dh=36286,VM=3200,HM=3201,GM=0,WM=1,kr="",li="srgb",Do="srgb-linear",Bu="linear",bt="srgb",Qs=7680,n_=519,XM=512,jM=513,YM=514,P0=515,qM=516,KM=517,$M=518,ZM=519,i_=35044,r_="300 es",Ji=2e3,zu=2001;class As{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const En=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let s_=1234567;const Ra=Math.PI/180,Ua=180/Math.PI;function Fo(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(En[n&255]+En[n>>8&255]+En[n>>16&255]+En[n>>24&255]+"-"+En[e&255]+En[e>>8&255]+"-"+En[e>>16&15|64]+En[e>>24&255]+"-"+En[t&63|128]+En[t>>8&255]+"-"+En[t>>16&255]+En[t>>24&255]+En[r&255]+En[r>>8&255]+En[r>>16&255]+En[r>>24&255]).toLowerCase()}function mt(n,e,t){return Math.max(e,Math.min(t,n))}function zh(n,e){return(n%e+e)%e}function QM(n,e,t,r,o){return r+(n-e)*(o-r)/(t-e)}function JM(n,e,t){return n!==e?(t-n)/(e-n):0}function Ca(n,e,t){return(1-t)*n+t*e}function eE(n,e,t,r){return Ca(n,e,1-Math.exp(-t*r))}function tE(n,e=1){return e-Math.abs(zh(n,e*2)-e)}function nE(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function iE(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function rE(n,e){return n+Math.floor(Math.random()*(e-n+1))}function sE(n,e){return n+Math.random()*(e-n)}function oE(n){return n*(.5-Math.random())}function aE(n){n!==void 0&&(s_=n);let e=s_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function lE(n){return n*Ra}function uE(n){return n*Ua}function cE(n){return(n&n-1)===0&&n!==0}function fE(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function dE(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function hE(n,e,t,r,o){const l=Math.cos,u=Math.sin,c=l(t/2),d=u(t/2),h=l((e+r)/2),m=u((e+r)/2),g=l((e-r)/2),_=u((e-r)/2),x=l((r-e)/2),M=u((r-e)/2);switch(o){case"XYX":n.set(c*m,d*g,d*_,c*h);break;case"YZY":n.set(d*_,c*m,d*g,c*h);break;case"ZXZ":n.set(d*g,d*_,c*m,c*h);break;case"XZX":n.set(c*m,d*M,d*x,c*h);break;case"YXY":n.set(d*x,c*m,d*M,c*h);break;case"ZYZ":n.set(d*M,d*x,c*m,c*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function ho(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ln(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const pE={DEG2RAD:Ra,RAD2DEG:Ua,generateUUID:Fo,clamp:mt,euclideanModulo:zh,mapLinear:QM,inverseLerp:JM,lerp:Ca,damp:eE,pingpong:tE,smoothstep:nE,smootherstep:iE,randInt:rE,randFloat:sE,randFloatSpread:oE,seededRandom:aE,degToRad:lE,radToDeg:uE,isPowerOfTwo:cE,ceilPowerOfTwo:fE,floorPowerOfTwo:dE,setQuaternionFromProperEuler:hE,normalize:Ln,denormalize:ho};class pt{constructor(e=0,t=0){pt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(mt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class lt{constructor(e,t,r,o,l,u,c,d,h){lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,c,d,h)}set(e,t,r,o,l,u,c,d,h){const m=this.elements;return m[0]=e,m[1]=o,m[2]=c,m[3]=t,m[4]=l,m[5]=d,m[6]=r,m[7]=u,m[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],c=r[3],d=r[6],h=r[1],m=r[4],g=r[7],_=r[2],x=r[5],M=r[8],E=o[0],S=o[3],y=o[6],L=o[1],b=o[4],C=o[7],O=o[2],F=o[5],U=o[8];return l[0]=u*E+c*L+d*O,l[3]=u*S+c*b+d*F,l[6]=u*y+c*C+d*U,l[1]=h*E+m*L+g*O,l[4]=h*S+m*b+g*F,l[7]=h*y+m*C+g*U,l[2]=_*E+x*L+M*O,l[5]=_*S+x*b+M*F,l[8]=_*y+x*C+M*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],c=e[5],d=e[6],h=e[7],m=e[8];return t*u*m-t*c*h-r*l*m+r*c*d+o*l*h-o*u*d}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],c=e[5],d=e[6],h=e[7],m=e[8],g=m*u-c*h,_=c*d-m*l,x=h*l-u*d,M=t*g+r*_+o*x;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/M;return e[0]=g*E,e[1]=(o*h-m*r)*E,e[2]=(c*r-o*u)*E,e[3]=_*E,e[4]=(m*t-o*d)*E,e[5]=(o*l-c*t)*E,e[6]=x*E,e[7]=(r*d-h*t)*E,e[8]=(u*t-r*l)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,c){const d=Math.cos(l),h=Math.sin(l);return this.set(r*d,r*h,-r*(d*u+h*c)+u+e,-o*h,o*d,-o*(-h*u+d*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(Hf.makeScale(e,t)),this}rotate(e){return this.premultiply(Hf.makeRotation(-e)),this}translate(e,t){return this.premultiply(Hf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Hf=new lt;function b0(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Vu(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function mE(){const n=Vu("canvas");return n.style.display="block",n}const o_={};function po(n){n in o_||(o_[n]=!0,console.warn(n))}function gE(n,e,t){return new Promise(function(r,o){function l(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:o();break;case n.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}function _E(n){const e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function vE(n){const e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const a_=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),l_=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function yE(){const n={enabled:!0,workingColorSpace:Do,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===bt&&(o.r=tr(o.r),o.g=tr(o.g),o.b=tr(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===bt&&(o.r=wo(o.r),o.g=wo(o.g),o.b=wo(o.b))),o},fromWorkingColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},toWorkingColorSpace:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===kr?Bu:this.spaces[o].transfer},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return n.define({[Do]:{primaries:e,whitePoint:r,transfer:Bu,toXYZ:a_,fromXYZ:l_,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:li},outputColorSpaceConfig:{drawingBufferColorSpace:li}},[li]:{primaries:e,whitePoint:r,transfer:bt,toXYZ:a_,fromXYZ:l_,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:li}}}),n}const wt=yE();function tr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function wo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Js;class xE{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Js===void 0&&(Js=Vu("canvas")),Js.width=e.width,Js.height=e.height;const r=Js.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=Js}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Vu("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=tr(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(tr(t[r]/255)*255):t[r]=tr(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let SE=0;class D0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:SE++}),this.uuid=Fo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,c=o.length;u<c;u++)o[u].isDataTexture?l.push(Gf(o[u].image)):l.push(Gf(o[u]))}else l=Gf(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function Gf(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?xE.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ME=0;class Gn extends As{constructor(e=Gn.DEFAULT_IMAGE,t=Gn.DEFAULT_MAPPING,r=ys,o=ys,l=bi,u=xs,c=Si,d=rr,h=Gn.DEFAULT_ANISOTROPY,m=kr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ME++}),this.uuid=Fo(),this.name="",this.source=new D0(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=d,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==v0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bd:e.x=e.x-Math.floor(e.x);break;case ys:e.x=e.x<0?0:1;break;case zd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bd:e.y=e.y-Math.floor(e.y);break;case ys:e.y=e.y<0?0:1;break;case zd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=v0;Gn.DEFAULT_ANISOTROPY=1;class $t{constructor(e=0,t=0,r=0,o=1){$t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const d=e.elements,h=d[0],m=d[4],g=d[8],_=d[1],x=d[5],M=d[9],E=d[2],S=d[6],y=d[10];if(Math.abs(m-_)<.01&&Math.abs(g-E)<.01&&Math.abs(M-S)<.01){if(Math.abs(m+_)<.1&&Math.abs(g+E)<.1&&Math.abs(M+S)<.1&&Math.abs(h+x+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(h+1)/2,C=(x+1)/2,O=(y+1)/2,F=(m+_)/4,U=(g+E)/4,z=(M+S)/4;return b>C&&b>O?b<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(b),o=F/r,l=U/r):C>O?C<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(C),r=F/o,l=z/o):O<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(O),r=U/l,o=z/l),this.set(r,o,l,t),this}let L=Math.sqrt((S-M)*(S-M)+(g-E)*(g-E)+(_-m)*(_-m));return Math.abs(L)<.001&&(L=1),this.x=(S-M)/L,this.y=(g-E)/L,this.z=(_-m)/L,this.w=Math.acos((h+x+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this.w=mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this.w=mt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(mt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class EE extends As{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new $t(0,0,e,t),this.scissorTest=!1,this.viewport=new $t(0,0,e,t);const o={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const l=new Gn(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);l.flipY=!1,l.generateMipmaps=r.generateMipmaps,l.internalFormat=r.internalFormat,this.textures=[];const u=r.count;for(let c=0;c<u;c++)this.textures[c]=l.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,o=e.textures.length;r<o;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new D0(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ts extends EE{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class L0 extends Gn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Mi,this.minFilter=Mi,this.wrapR=ys,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class TE extends Gn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Mi,this.minFilter=Mi,this.wrapR=ys,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ws{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,c){let d=r[o+0],h=r[o+1],m=r[o+2],g=r[o+3];const _=l[u+0],x=l[u+1],M=l[u+2],E=l[u+3];if(c===0){e[t+0]=d,e[t+1]=h,e[t+2]=m,e[t+3]=g;return}if(c===1){e[t+0]=_,e[t+1]=x,e[t+2]=M,e[t+3]=E;return}if(g!==E||d!==_||h!==x||m!==M){let S=1-c;const y=d*_+h*x+m*M+g*E,L=y>=0?1:-1,b=1-y*y;if(b>Number.EPSILON){const O=Math.sqrt(b),F=Math.atan2(O,y*L);S=Math.sin(S*F)/O,c=Math.sin(c*F)/O}const C=c*L;if(d=d*S+_*C,h=h*S+x*C,m=m*S+M*C,g=g*S+E*C,S===1-c){const O=1/Math.sqrt(d*d+h*h+m*m+g*g);d*=O,h*=O,m*=O,g*=O}}e[t]=d,e[t+1]=h,e[t+2]=m,e[t+3]=g}static multiplyQuaternionsFlat(e,t,r,o,l,u){const c=r[o],d=r[o+1],h=r[o+2],m=r[o+3],g=l[u],_=l[u+1],x=l[u+2],M=l[u+3];return e[t]=c*M+m*g+d*x-h*_,e[t+1]=d*M+m*_+h*g-c*x,e[t+2]=h*M+m*x+c*_-d*g,e[t+3]=m*M-c*g-d*_-h*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,c=Math.cos,d=Math.sin,h=c(r/2),m=c(o/2),g=c(l/2),_=d(r/2),x=d(o/2),M=d(l/2);switch(u){case"XYZ":this._x=_*m*g+h*x*M,this._y=h*x*g-_*m*M,this._z=h*m*M+_*x*g,this._w=h*m*g-_*x*M;break;case"YXZ":this._x=_*m*g+h*x*M,this._y=h*x*g-_*m*M,this._z=h*m*M-_*x*g,this._w=h*m*g+_*x*M;break;case"ZXY":this._x=_*m*g-h*x*M,this._y=h*x*g+_*m*M,this._z=h*m*M+_*x*g,this._w=h*m*g-_*x*M;break;case"ZYX":this._x=_*m*g-h*x*M,this._y=h*x*g+_*m*M,this._z=h*m*M-_*x*g,this._w=h*m*g+_*x*M;break;case"YZX":this._x=_*m*g+h*x*M,this._y=h*x*g+_*m*M,this._z=h*m*M-_*x*g,this._w=h*m*g-_*x*M;break;case"XZY":this._x=_*m*g-h*x*M,this._y=h*x*g-_*m*M,this._z=h*m*M+_*x*g,this._w=h*m*g+_*x*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],c=t[5],d=t[9],h=t[2],m=t[6],g=t[10],_=r+c+g;if(_>0){const x=.5/Math.sqrt(_+1);this._w=.25/x,this._x=(m-d)*x,this._y=(l-h)*x,this._z=(u-o)*x}else if(r>c&&r>g){const x=2*Math.sqrt(1+r-c-g);this._w=(m-d)/x,this._x=.25*x,this._y=(o+u)/x,this._z=(l+h)/x}else if(c>g){const x=2*Math.sqrt(1+c-r-g);this._w=(l-h)/x,this._x=(o+u)/x,this._y=.25*x,this._z=(d+m)/x}else{const x=2*Math.sqrt(1+g-r-c);this._w=(u-o)/x,this._x=(l+h)/x,this._y=(d+m)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,c=t._x,d=t._y,h=t._z,m=t._w;return this._x=r*m+u*c+o*h-l*d,this._y=o*m+u*d+l*c-r*h,this._z=l*m+u*h+r*d-o*c,this._w=u*m-r*c-o*d-l*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,o=this._y,l=this._z,u=this._w;let c=u*e._w+r*e._x+o*e._y+l*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=u,this._x=r,this._y=o,this._z=l,this;const d=1-c*c;if(d<=Number.EPSILON){const x=1-t;return this._w=x*u+t*this._w,this._x=x*r+t*this._x,this._y=x*o+t*this._y,this._z=x*l+t*this._z,this.normalize(),this}const h=Math.sqrt(d),m=Math.atan2(h,c),g=Math.sin((1-t)*m)/h,_=Math.sin(t*m)/h;return this._w=u*g+this._w*_,this._x=r*g+this._x*_,this._y=o*g+this._y*_,this._z=l*g+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Q{constructor(e=0,t=0,r=0){Q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(u_.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(u_.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,c=e.z,d=e.w,h=2*(u*o-c*r),m=2*(c*t-l*o),g=2*(l*r-u*t);return this.x=t+d*h+u*g-c*m,this.y=r+d*m+c*h-l*g,this.z=o+d*g+l*m-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(mt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,c=t.y,d=t.z;return this.x=o*d-l*c,this.y=l*u-r*d,this.z=r*c-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Wf.copy(this).projectOnVector(e),this.sub(Wf)}reflect(e){return this.sub(Wf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wf=new Q,u_=new ws;class Va{constructor(e=new Q(1/0,1/0,1/0),t=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(gi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(gi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=gi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,c=l.count;u<c;u++)e.isMesh===!0?e.getVertexPosition(u,gi):gi.fromBufferAttribute(l,u),gi.applyMatrix4(e.matrixWorld),this.expandByPoint(gi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),iu.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),iu.copy(r.boundingBox)),iu.applyMatrix4(e.matrixWorld),this.union(iu)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gi),gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(va),ru.subVectors(this.max,va),eo.subVectors(e.a,va),to.subVectors(e.b,va),no.subVectors(e.c,va),br.subVectors(to,eo),Dr.subVectors(no,to),as.subVectors(eo,no);let t=[0,-br.z,br.y,0,-Dr.z,Dr.y,0,-as.z,as.y,br.z,0,-br.x,Dr.z,0,-Dr.x,as.z,0,-as.x,-br.y,br.x,0,-Dr.y,Dr.x,0,-as.y,as.x,0];return!Xf(t,eo,to,no,ru)||(t=[1,0,0,0,1,0,0,0,1],!Xf(t,eo,to,no,ru))?!1:(su.crossVectors(br,Dr),t=[su.x,su.y,su.z],Xf(t,eo,to,no,ru))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Xi=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],gi=new Q,iu=new Va,eo=new Q,to=new Q,no=new Q,br=new Q,Dr=new Q,as=new Q,va=new Q,ru=new Q,su=new Q,ls=new Q;function Xf(n,e,t,r,o){for(let l=0,u=n.length-3;l<=u;l+=3){ls.fromArray(n,l);const c=o.x*Math.abs(ls.x)+o.y*Math.abs(ls.y)+o.z*Math.abs(ls.z),d=e.dot(ls),h=t.dot(ls),m=r.dot(ls);if(Math.max(-Math.max(d,h,m),Math.min(d,h,m))>c)return!1}return!0}const wE=new Va,ya=new Q,jf=new Q;class $u{constructor(e=new Q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):wE.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ya.subVectors(e,this.center);const t=ya.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(ya,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(jf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ya.copy(e.center).add(jf)),this.expandByPoint(ya.copy(e.center).sub(jf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ji=new Q,Yf=new Q,ou=new Q,Lr=new Q,qf=new Q,au=new Q,Kf=new Q;class Vh{constructor(e=new Q,t=new Q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ji)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ji.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ji.copy(this.origin).addScaledVector(this.direction,t),ji.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){Yf.copy(e).add(t).multiplyScalar(.5),ou.copy(t).sub(e).normalize(),Lr.copy(this.origin).sub(Yf);const l=e.distanceTo(t)*.5,u=-this.direction.dot(ou),c=Lr.dot(this.direction),d=-Lr.dot(ou),h=Lr.lengthSq(),m=Math.abs(1-u*u);let g,_,x,M;if(m>0)if(g=u*d-c,_=u*c-d,M=l*m,g>=0)if(_>=-M)if(_<=M){const E=1/m;g*=E,_*=E,x=g*(g+u*_+2*c)+_*(u*g+_+2*d)+h}else _=l,g=Math.max(0,-(u*_+c)),x=-g*g+_*(_+2*d)+h;else _=-l,g=Math.max(0,-(u*_+c)),x=-g*g+_*(_+2*d)+h;else _<=-M?(g=Math.max(0,-(-u*l+c)),_=g>0?-l:Math.min(Math.max(-l,-d),l),x=-g*g+_*(_+2*d)+h):_<=M?(g=0,_=Math.min(Math.max(-l,-d),l),x=_*(_+2*d)+h):(g=Math.max(0,-(u*l+c)),_=g>0?l:Math.min(Math.max(-l,-d),l),x=-g*g+_*(_+2*d)+h);else _=u>0?-l:l,g=Math.max(0,-(u*_+c)),x=-g*g+_*(_+2*d)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,g),o&&o.copy(Yf).addScaledVector(ou,_),x}intersectSphere(e,t){ji.subVectors(e.center,this.origin);const r=ji.dot(this.direction),o=ji.dot(ji)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),c=r-u,d=r+u;return d<0?null:c<0?this.at(d,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,c,d;const h=1/this.direction.x,m=1/this.direction.y,g=1/this.direction.z,_=this.origin;return h>=0?(r=(e.min.x-_.x)*h,o=(e.max.x-_.x)*h):(r=(e.max.x-_.x)*h,o=(e.min.x-_.x)*h),m>=0?(l=(e.min.y-_.y)*m,u=(e.max.y-_.y)*m):(l=(e.max.y-_.y)*m,u=(e.min.y-_.y)*m),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),g>=0?(c=(e.min.z-_.z)*g,d=(e.max.z-_.z)*g):(c=(e.max.z-_.z)*g,d=(e.min.z-_.z)*g),r>d||c>o)||((c>r||r!==r)&&(r=c),(d<o||o!==o)&&(o=d),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,ji)!==null}intersectTriangle(e,t,r,o,l){qf.subVectors(t,e),au.subVectors(r,e),Kf.crossVectors(qf,au);let u=this.direction.dot(Kf),c;if(u>0){if(o)return null;c=1}else if(u<0)c=-1,u=-u;else return null;Lr.subVectors(this.origin,e);const d=c*this.direction.dot(au.crossVectors(Lr,au));if(d<0)return null;const h=c*this.direction.dot(qf.cross(Lr));if(h<0||d+h>u)return null;const m=-c*Lr.dot(Kf);return m<0?null:this.at(m/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Zt{constructor(e,t,r,o,l,u,c,d,h,m,g,_,x,M,E,S){Zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,c,d,h,m,g,_,x,M,E,S)}set(e,t,r,o,l,u,c,d,h,m,g,_,x,M,E,S){const y=this.elements;return y[0]=e,y[4]=t,y[8]=r,y[12]=o,y[1]=l,y[5]=u,y[9]=c,y[13]=d,y[2]=h,y[6]=m,y[10]=g,y[14]=_,y[3]=x,y[7]=M,y[11]=E,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Zt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,o=1/io.setFromMatrixColumn(e,0).length(),l=1/io.setFromMatrixColumn(e,1).length(),u=1/io.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),c=Math.sin(r),d=Math.cos(o),h=Math.sin(o),m=Math.cos(l),g=Math.sin(l);if(e.order==="XYZ"){const _=u*m,x=u*g,M=c*m,E=c*g;t[0]=d*m,t[4]=-d*g,t[8]=h,t[1]=x+M*h,t[5]=_-E*h,t[9]=-c*d,t[2]=E-_*h,t[6]=M+x*h,t[10]=u*d}else if(e.order==="YXZ"){const _=d*m,x=d*g,M=h*m,E=h*g;t[0]=_+E*c,t[4]=M*c-x,t[8]=u*h,t[1]=u*g,t[5]=u*m,t[9]=-c,t[2]=x*c-M,t[6]=E+_*c,t[10]=u*d}else if(e.order==="ZXY"){const _=d*m,x=d*g,M=h*m,E=h*g;t[0]=_-E*c,t[4]=-u*g,t[8]=M+x*c,t[1]=x+M*c,t[5]=u*m,t[9]=E-_*c,t[2]=-u*h,t[6]=c,t[10]=u*d}else if(e.order==="ZYX"){const _=u*m,x=u*g,M=c*m,E=c*g;t[0]=d*m,t[4]=M*h-x,t[8]=_*h+E,t[1]=d*g,t[5]=E*h+_,t[9]=x*h-M,t[2]=-h,t[6]=c*d,t[10]=u*d}else if(e.order==="YZX"){const _=u*d,x=u*h,M=c*d,E=c*h;t[0]=d*m,t[4]=E-_*g,t[8]=M*g+x,t[1]=g,t[5]=u*m,t[9]=-c*m,t[2]=-h*m,t[6]=x*g+M,t[10]=_-E*g}else if(e.order==="XZY"){const _=u*d,x=u*h,M=c*d,E=c*h;t[0]=d*m,t[4]=-g,t[8]=h*m,t[1]=_*g+E,t[5]=u*m,t[9]=x*g-M,t[2]=M*g-x,t[6]=c*m,t[10]=E*g+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(AE,e,RE)}lookAt(e,t,r){const o=this.elements;return Kn.subVectors(e,t),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),Ir.crossVectors(r,Kn),Ir.lengthSq()===0&&(Math.abs(r.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),Ir.crossVectors(r,Kn)),Ir.normalize(),lu.crossVectors(Kn,Ir),o[0]=Ir.x,o[4]=lu.x,o[8]=Kn.x,o[1]=Ir.y,o[5]=lu.y,o[9]=Kn.y,o[2]=Ir.z,o[6]=lu.z,o[10]=Kn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],c=r[4],d=r[8],h=r[12],m=r[1],g=r[5],_=r[9],x=r[13],M=r[2],E=r[6],S=r[10],y=r[14],L=r[3],b=r[7],C=r[11],O=r[15],F=o[0],U=o[4],z=o[8],P=o[12],R=o[1],H=o[5],oe=o[9],te=o[13],ue=o[2],he=o[6],le=o[10],ie=o[14],B=o[3],ae=o[7],re=o[11],N=o[15];return l[0]=u*F+c*R+d*ue+h*B,l[4]=u*U+c*H+d*he+h*ae,l[8]=u*z+c*oe+d*le+h*re,l[12]=u*P+c*te+d*ie+h*N,l[1]=m*F+g*R+_*ue+x*B,l[5]=m*U+g*H+_*he+x*ae,l[9]=m*z+g*oe+_*le+x*re,l[13]=m*P+g*te+_*ie+x*N,l[2]=M*F+E*R+S*ue+y*B,l[6]=M*U+E*H+S*he+y*ae,l[10]=M*z+E*oe+S*le+y*re,l[14]=M*P+E*te+S*ie+y*N,l[3]=L*F+b*R+C*ue+O*B,l[7]=L*U+b*H+C*he+O*ae,l[11]=L*z+b*oe+C*le+O*re,l[15]=L*P+b*te+C*ie+O*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],c=e[5],d=e[9],h=e[13],m=e[2],g=e[6],_=e[10],x=e[14],M=e[3],E=e[7],S=e[11],y=e[15];return M*(+l*d*g-o*h*g-l*c*_+r*h*_+o*c*x-r*d*x)+E*(+t*d*x-t*h*_+l*u*_-o*u*x+o*h*m-l*d*m)+S*(+t*h*g-t*c*x-l*u*g+r*u*x+l*c*m-r*h*m)+y*(-o*c*m-t*d*g+t*c*_+o*u*g-r*u*_+r*d*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],c=e[5],d=e[6],h=e[7],m=e[8],g=e[9],_=e[10],x=e[11],M=e[12],E=e[13],S=e[14],y=e[15],L=g*S*h-E*_*h+E*d*x-c*S*x-g*d*y+c*_*y,b=M*_*h-m*S*h-M*d*x+u*S*x+m*d*y-u*_*y,C=m*E*h-M*g*h+M*c*x-u*E*x-m*c*y+u*g*y,O=M*g*d-m*E*d-M*c*_+u*E*_+m*c*S-u*g*S,F=t*L+r*b+o*C+l*O;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/F;return e[0]=L*U,e[1]=(E*_*l-g*S*l-E*o*x+r*S*x+g*o*y-r*_*y)*U,e[2]=(c*S*l-E*d*l+E*o*h-r*S*h-c*o*y+r*d*y)*U,e[3]=(g*d*l-c*_*l-g*o*h+r*_*h+c*o*x-r*d*x)*U,e[4]=b*U,e[5]=(m*S*l-M*_*l+M*o*x-t*S*x-m*o*y+t*_*y)*U,e[6]=(M*d*l-u*S*l-M*o*h+t*S*h+u*o*y-t*d*y)*U,e[7]=(u*_*l-m*d*l+m*o*h-t*_*h-u*o*x+t*d*x)*U,e[8]=C*U,e[9]=(M*g*l-m*E*l-M*r*x+t*E*x+m*r*y-t*g*y)*U,e[10]=(u*E*l-M*c*l+M*r*h-t*E*h-u*r*y+t*c*y)*U,e[11]=(m*c*l-u*g*l-m*r*h+t*g*h+u*r*x-t*c*x)*U,e[12]=O*U,e[13]=(m*E*o-M*g*o+M*r*_-t*E*_-m*r*S+t*g*S)*U,e[14]=(M*c*o-u*E*o-M*r*d+t*E*d+u*r*S-t*c*S)*U,e[15]=(u*g*o-m*c*o+m*r*d-t*g*d-u*r*_+t*c*_)*U,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,c=e.y,d=e.z,h=l*u,m=l*c;return this.set(h*u+r,h*c-o*d,h*d+o*c,0,h*c+o*d,m*c+r,m*d-o*u,0,h*d-o*c,m*d+o*u,l*d*d+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,c=t._z,d=t._w,h=l+l,m=u+u,g=c+c,_=l*h,x=l*m,M=l*g,E=u*m,S=u*g,y=c*g,L=d*h,b=d*m,C=d*g,O=r.x,F=r.y,U=r.z;return o[0]=(1-(E+y))*O,o[1]=(x+C)*O,o[2]=(M-b)*O,o[3]=0,o[4]=(x-C)*F,o[5]=(1-(_+y))*F,o[6]=(S+L)*F,o[7]=0,o[8]=(M+b)*U,o[9]=(S-L)*U,o[10]=(1-(_+E))*U,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;let l=io.set(o[0],o[1],o[2]).length();const u=io.set(o[4],o[5],o[6]).length(),c=io.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],_i.copy(this);const h=1/l,m=1/u,g=1/c;return _i.elements[0]*=h,_i.elements[1]*=h,_i.elements[2]*=h,_i.elements[4]*=m,_i.elements[5]*=m,_i.elements[6]*=m,_i.elements[8]*=g,_i.elements[9]*=g,_i.elements[10]*=g,t.setFromRotationMatrix(_i),r.x=l,r.y=u,r.z=c,this}makePerspective(e,t,r,o,l,u,c=Ji){const d=this.elements,h=2*l/(t-e),m=2*l/(r-o),g=(t+e)/(t-e),_=(r+o)/(r-o);let x,M;if(c===Ji)x=-(u+l)/(u-l),M=-2*u*l/(u-l);else if(c===zu)x=-u/(u-l),M=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return d[0]=h,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=m,d[9]=_,d[13]=0,d[2]=0,d[6]=0,d[10]=x,d[14]=M,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,r,o,l,u,c=Ji){const d=this.elements,h=1/(t-e),m=1/(r-o),g=1/(u-l),_=(t+e)*h,x=(r+o)*m;let M,E;if(c===Ji)M=(u+l)*g,E=-2*g;else if(c===zu)M=l*g,E=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return d[0]=2*h,d[4]=0,d[8]=0,d[12]=-_,d[1]=0,d[5]=2*m,d[9]=0,d[13]=-x,d[2]=0,d[6]=0,d[10]=E,d[14]=-M,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const io=new Q,_i=new Zt,AE=new Q(0,0,0),RE=new Q(1,1,1),Ir=new Q,lu=new Q,Kn=new Q,c_=new Zt,f_=new ws;class sr{constructor(e=0,t=0,r=0,o=sr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],c=o[8],d=o[1],h=o[5],m=o[9],g=o[2],_=o[6],x=o[10];switch(t){case"XYZ":this._y=Math.asin(mt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-m,x),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(_,h),this._z=0);break;case"YXZ":this._x=Math.asin(-mt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(c,x),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-g,l),this._z=0);break;case"ZXY":this._x=Math.asin(mt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-g,x),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-mt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(_,x),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(mt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,h),this._y=Math.atan2(-g,l)):(this._x=0,this._y=Math.atan2(c,x));break;case"XZY":this._z=Math.asin(-mt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,h),this._y=Math.atan2(c,l)):(this._x=Math.atan2(-m,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return c_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(c_,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return f_.setFromEuler(this),this.setFromQuaternion(f_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}sr.DEFAULT_ORDER="XYZ";class I0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let CE=0;const d_=new Q,ro=new ws,Yi=new Zt,uu=new Q,xa=new Q,PE=new Q,bE=new ws,h_=new Q(1,0,0),p_=new Q(0,1,0),m_=new Q(0,0,1),g_={type:"added"},DE={type:"removed"},so={type:"childadded",child:null},$f={type:"childremoved",child:null};class Wn extends As{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:CE++}),this.uuid=Fo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wn.DEFAULT_UP.clone();const e=new Q,t=new sr,r=new ws,o=new Q(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Zt},normalMatrix:{value:new lt}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=Wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new I0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ro.setFromAxisAngle(e,t),this.quaternion.multiply(ro),this}rotateOnWorldAxis(e,t){return ro.setFromAxisAngle(e,t),this.quaternion.premultiply(ro),this}rotateX(e){return this.rotateOnAxis(h_,e)}rotateY(e){return this.rotateOnAxis(p_,e)}rotateZ(e){return this.rotateOnAxis(m_,e)}translateOnAxis(e,t){return d_.copy(e).applyQuaternion(this.quaternion),this.position.add(d_.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(h_,e)}translateY(e){return this.translateOnAxis(p_,e)}translateZ(e){return this.translateOnAxis(m_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yi.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?uu.copy(e):uu.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),xa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yi.lookAt(xa,uu,this.up):Yi.lookAt(uu,xa,this.up),this.quaternion.setFromRotationMatrix(Yi),o&&(Yi.extractRotation(o.matrixWorld),ro.setFromRotationMatrix(Yi),this.quaternion.premultiply(ro.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(g_),so.child=e,this.dispatchEvent(so),so.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(DE),$f.child=e,this.dispatchEvent($f),$f.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(g_),so.child=e,this.dispatchEvent(so),so.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xa,e,PE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xa,bE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function l(c,d){return c[d.uuid]===void 0&&(c[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const d=c.shapes;if(Array.isArray(d))for(let h=0,m=d.length;h<m;h++){const g=d[h];l(e.shapes,g)}else l(e.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let d=0,h=this.material.length;d<h;d++)c.push(l(e.materials,this.material[d]));o.material=c}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let c=0;c<this.children.length;c++)o.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let c=0;c<this.animations.length;c++){const d=this.animations[c];o.animations.push(l(e.animations,d))}}if(t){const c=u(e.geometries),d=u(e.materials),h=u(e.textures),m=u(e.images),g=u(e.shapes),_=u(e.skeletons),x=u(e.animations),M=u(e.nodes);c.length>0&&(r.geometries=c),d.length>0&&(r.materials=d),h.length>0&&(r.textures=h),m.length>0&&(r.images=m),g.length>0&&(r.shapes=g),_.length>0&&(r.skeletons=_),x.length>0&&(r.animations=x),M.length>0&&(r.nodes=M)}return r.object=o,r;function u(c){const d=[];for(const h in c){const m=c[h];delete m.metadata,d.push(m)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Wn.DEFAULT_UP=new Q(0,1,0);Wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vi=new Q,qi=new Q,Zf=new Q,Ki=new Q,oo=new Q,ao=new Q,__=new Q,Qf=new Q,Jf=new Q,ed=new Q,td=new $t,nd=new $t,id=new $t;class xi{constructor(e=new Q,t=new Q,r=new Q){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),vi.subVectors(e,t),o.cross(vi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){vi.subVectors(o,t),qi.subVectors(r,t),Zf.subVectors(e,t);const u=vi.dot(vi),c=vi.dot(qi),d=vi.dot(Zf),h=qi.dot(qi),m=qi.dot(Zf),g=u*h-c*c;if(g===0)return l.set(0,0,0),null;const _=1/g,x=(h*d-c*m)*_,M=(u*m-c*d)*_;return l.set(1-x-M,M,x)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,Ki)===null?!1:Ki.x>=0&&Ki.y>=0&&Ki.x+Ki.y<=1}static getInterpolation(e,t,r,o,l,u,c,d){return this.getBarycoord(e,t,r,o,Ki)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,Ki.x),d.addScaledVector(u,Ki.y),d.addScaledVector(c,Ki.z),d)}static getInterpolatedAttribute(e,t,r,o,l,u){return td.setScalar(0),nd.setScalar(0),id.setScalar(0),td.fromBufferAttribute(e,t),nd.fromBufferAttribute(e,r),id.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(td,l.x),u.addScaledVector(nd,l.y),u.addScaledVector(id,l.z),u}static isFrontFacing(e,t,r,o){return vi.subVectors(r,t),qi.subVectors(e,t),vi.cross(qi).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vi.subVectors(this.c,this.b),qi.subVectors(this.a,this.b),vi.cross(qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return xi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return xi.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return xi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,c;oo.subVectors(o,r),ao.subVectors(l,r),Qf.subVectors(e,r);const d=oo.dot(Qf),h=ao.dot(Qf);if(d<=0&&h<=0)return t.copy(r);Jf.subVectors(e,o);const m=oo.dot(Jf),g=ao.dot(Jf);if(m>=0&&g<=m)return t.copy(o);const _=d*g-m*h;if(_<=0&&d>=0&&m<=0)return u=d/(d-m),t.copy(r).addScaledVector(oo,u);ed.subVectors(e,l);const x=oo.dot(ed),M=ao.dot(ed);if(M>=0&&x<=M)return t.copy(l);const E=x*h-d*M;if(E<=0&&h>=0&&M<=0)return c=h/(h-M),t.copy(r).addScaledVector(ao,c);const S=m*M-x*g;if(S<=0&&g-m>=0&&x-M>=0)return __.subVectors(l,o),c=(g-m)/(g-m+(x-M)),t.copy(o).addScaledVector(__,c);const y=1/(S+E+_);return u=E*y,c=_*y,t.copy(r).addScaledVector(oo,u).addScaledVector(ao,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const U0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ur={h:0,s:0,l:0},cu={h:0,s:0,l:0};function rd(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ct{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=li){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.toWorkingColorSpace(this,t),this}setRGB(e,t,r,o=wt.workingColorSpace){return this.r=e,this.g=t,this.b=r,wt.toWorkingColorSpace(this,o),this}setHSL(e,t,r,o=wt.workingColorSpace){if(e=zh(e,1),t=mt(t,0,1),r=mt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=rd(u,l,e+1/3),this.g=rd(u,l,e),this.b=rd(u,l,e-1/3)}return wt.toWorkingColorSpace(this,o),this}setStyle(e,t=li){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],c=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=li){const r=U0[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=tr(e.r),this.g=tr(e.g),this.b=tr(e.b),this}copyLinearToSRGB(e){return this.r=wo(e.r),this.g=wo(e.g),this.b=wo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=li){return wt.fromWorkingColorSpace(Tn.copy(this),e),Math.round(mt(Tn.r*255,0,255))*65536+Math.round(mt(Tn.g*255,0,255))*256+Math.round(mt(Tn.b*255,0,255))}getHexString(e=li){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=wt.workingColorSpace){wt.fromWorkingColorSpace(Tn.copy(this),t);const r=Tn.r,o=Tn.g,l=Tn.b,u=Math.max(r,o,l),c=Math.min(r,o,l);let d,h;const m=(c+u)/2;if(c===u)d=0,h=0;else{const g=u-c;switch(h=m<=.5?g/(u+c):g/(2-u-c),u){case r:d=(o-l)/g+(o<l?6:0);break;case o:d=(l-r)/g+2;break;case l:d=(r-o)/g+4;break}d/=6}return e.h=d,e.s=h,e.l=m,e}getRGB(e,t=wt.workingColorSpace){return wt.fromWorkingColorSpace(Tn.copy(this),t),e.r=Tn.r,e.g=Tn.g,e.b=Tn.b,e}getStyle(e=li){wt.fromWorkingColorSpace(Tn.copy(this),e);const t=Tn.r,r=Tn.g,o=Tn.b;return e!==li?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Ur),this.setHSL(Ur.h+e,Ur.s+t,Ur.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Ur),e.getHSL(cu);const r=Ca(Ur.h,cu.h,t),o=Ca(Ur.s,cu.s,t),l=Ca(Ur.l,cu.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tn=new Ct;Ct.NAMES=U0;let LE=0;class Ha extends As{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:LE++}),this.uuid=Fo(),this.name="",this.type="Material",this.blending=Eo,this.side=Hr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cd,this.blendDst=Pd,this.blendEquation=_s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=Ao,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=n_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qs,this.stencilZFail=Qs,this.stencilZPass=Qs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Eo&&(r.blending=this.blending),this.side!==Hr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Cd&&(r.blendSrc=this.blendSrc),this.blendDst!==Pd&&(r.blendDst=this.blendDst),this.blendEquation!==_s&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ao&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==n_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Qs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Qs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const c in l){const d=l[c];delete d.metadata,u.push(d)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class N0 extends Ha{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sr,this.combine=_0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Jt=new Q,fu=new pt;class Di{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=i_,this.updateRanges=[],this.gpuType=Qi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)fu.fromBufferAttribute(this,t),fu.applyMatrix3(e),this.setXY(t,fu.x,fu.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=ho(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Ln(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ho(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ln(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ho(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ln(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ho(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ln(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ho(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ln(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Ln(t,this.array),r=Ln(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Ln(t,this.array),r=Ln(r,this.array),o=Ln(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=Ln(t,this.array),r=Ln(r,this.array),o=Ln(o,this.array),l=Ln(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==i_&&(e.usage=this.usage),e}}class F0 extends Di{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class O0 extends Di{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Vr extends Di{constructor(e,t,r){super(new Float32Array(e),t,r)}}let IE=0;const si=new Zt,sd=new Wn,lo=new Q,$n=new Va,Sa=new Va,dn=new Q;class ar extends As{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:IE++}),this.uuid=Fo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(b0(e)?O0:F0)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new lt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return si.makeRotationFromQuaternion(e),this.applyMatrix4(si),this}rotateX(e){return si.makeRotationX(e),this.applyMatrix4(si),this}rotateY(e){return si.makeRotationY(e),this.applyMatrix4(si),this}rotateZ(e){return si.makeRotationZ(e),this.applyMatrix4(si),this}translate(e,t,r){return si.makeTranslation(e,t,r),this.applyMatrix4(si),this}scale(e,t,r){return si.makeScale(e,t,r),this.applyMatrix4(si),this}lookAt(e){return sd.lookAt(e),sd.updateMatrix(),this.applyMatrix4(sd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(lo).negate(),this.translate(lo.x,lo.y,lo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Vr(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Va);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];$n.setFromBufferAttribute(l),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $u);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(e){const r=this.boundingSphere.center;if($n.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const c=t[l];Sa.setFromBufferAttribute(c),this.morphTargetsRelative?(dn.addVectors($n.min,Sa.min),$n.expandByPoint(dn),dn.addVectors($n.max,Sa.max),$n.expandByPoint(dn)):($n.expandByPoint(Sa.min),$n.expandByPoint(Sa.max))}$n.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)dn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(dn));if(t)for(let l=0,u=t.length;l<u;l++){const c=t[l],d=this.morphTargetsRelative;for(let h=0,m=c.count;h<m;h++)dn.fromBufferAttribute(c,h),d&&(lo.fromBufferAttribute(e,h),dn.add(lo)),o=Math.max(o,r.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Di(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),c=[],d=[];for(let z=0;z<r.count;z++)c[z]=new Q,d[z]=new Q;const h=new Q,m=new Q,g=new Q,_=new pt,x=new pt,M=new pt,E=new Q,S=new Q;function y(z,P,R){h.fromBufferAttribute(r,z),m.fromBufferAttribute(r,P),g.fromBufferAttribute(r,R),_.fromBufferAttribute(l,z),x.fromBufferAttribute(l,P),M.fromBufferAttribute(l,R),m.sub(h),g.sub(h),x.sub(_),M.sub(_);const H=1/(x.x*M.y-M.x*x.y);isFinite(H)&&(E.copy(m).multiplyScalar(M.y).addScaledVector(g,-x.y).multiplyScalar(H),S.copy(g).multiplyScalar(x.x).addScaledVector(m,-M.x).multiplyScalar(H),c[z].add(E),c[P].add(E),c[R].add(E),d[z].add(S),d[P].add(S),d[R].add(S))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let z=0,P=L.length;z<P;++z){const R=L[z],H=R.start,oe=R.count;for(let te=H,ue=H+oe;te<ue;te+=3)y(e.getX(te+0),e.getX(te+1),e.getX(te+2))}const b=new Q,C=new Q,O=new Q,F=new Q;function U(z){O.fromBufferAttribute(o,z),F.copy(O);const P=c[z];b.copy(P),b.sub(O.multiplyScalar(O.dot(P))).normalize(),C.crossVectors(F,P);const H=C.dot(d[z])<0?-1:1;u.setXYZW(z,b.x,b.y,b.z,H)}for(let z=0,P=L.length;z<P;++z){const R=L[z],H=R.start,oe=R.count;for(let te=H,ue=H+oe;te<ue;te+=3)U(e.getX(te+0)),U(e.getX(te+1)),U(e.getX(te+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Di(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let _=0,x=r.count;_<x;_++)r.setXYZ(_,0,0,0);const o=new Q,l=new Q,u=new Q,c=new Q,d=new Q,h=new Q,m=new Q,g=new Q;if(e)for(let _=0,x=e.count;_<x;_+=3){const M=e.getX(_+0),E=e.getX(_+1),S=e.getX(_+2);o.fromBufferAttribute(t,M),l.fromBufferAttribute(t,E),u.fromBufferAttribute(t,S),m.subVectors(u,l),g.subVectors(o,l),m.cross(g),c.fromBufferAttribute(r,M),d.fromBufferAttribute(r,E),h.fromBufferAttribute(r,S),c.add(m),d.add(m),h.add(m),r.setXYZ(M,c.x,c.y,c.z),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(S,h.x,h.y,h.z)}else for(let _=0,x=t.count;_<x;_+=3)o.fromBufferAttribute(t,_+0),l.fromBufferAttribute(t,_+1),u.fromBufferAttribute(t,_+2),m.subVectors(u,l),g.subVectors(o,l),m.cross(g),r.setXYZ(_+0,m.x,m.y,m.z),r.setXYZ(_+1,m.x,m.y,m.z),r.setXYZ(_+2,m.x,m.y,m.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)dn.fromBufferAttribute(e,t),dn.normalize(),e.setXYZ(t,dn.x,dn.y,dn.z)}toNonIndexed(){function e(c,d){const h=c.array,m=c.itemSize,g=c.normalized,_=new h.constructor(d.length*m);let x=0,M=0;for(let E=0,S=d.length;E<S;E++){c.isInterleavedBufferAttribute?x=d[E]*c.data.stride+c.offset:x=d[E]*m;for(let y=0;y<m;y++)_[M++]=h[x++]}return new Di(_,m,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ar,r=this.index.array,o=this.attributes;for(const c in o){const d=o[c],h=e(d,r);t.setAttribute(c,h)}const l=this.morphAttributes;for(const c in l){const d=[],h=l[c];for(let m=0,g=h.length;m<g;m++){const _=h[m],x=e(_,r);d.push(x)}t.morphAttributes[c]=d}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let c=0,d=u.length;c<d;c++){const h=u[c];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const d in r){const h=r[d];e.data.attributes[d]=h.toJSON(e.data)}const o={};let l=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],m=[];for(let g=0,_=h.length;g<_;g++){const x=h[g];m.push(x.toJSON(e.data))}m.length>0&&(o[d]=m,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const o=e.attributes;for(const h in o){const m=o[h];this.setAttribute(h,m.clone(t))}const l=e.morphAttributes;for(const h in l){const m=[],g=l[h];for(let _=0,x=g.length;_<x;_++)m.push(g[_].clone(t));this.morphAttributes[h]=m}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,m=u.length;h<m;h++){const g=u[h];this.addGroup(g.start,g.count,g.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const v_=new Zt,us=new Vh,du=new $u,y_=new Q,hu=new Q,pu=new Q,mu=new Q,od=new Q,gu=new Q,x_=new Q,_u=new Q;class er extends Wn{constructor(e=new ar,t=new N0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const c=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const c=this.morphTargetInfluences;if(l&&c){gu.set(0,0,0);for(let d=0,h=l.length;d<h;d++){const m=c[d],g=l[d];m!==0&&(od.fromBufferAttribute(g,e),u?gu.addScaledVector(od,m):gu.addScaledVector(od.sub(t),m))}t.add(gu)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),du.copy(r.boundingSphere),du.applyMatrix4(l),us.copy(e.ray).recast(e.near),!(du.containsPoint(us.origin)===!1&&(us.intersectSphere(du,y_)===null||us.origin.distanceToSquared(y_)>(e.far-e.near)**2))&&(v_.copy(l).invert(),us.copy(e.ray).applyMatrix4(v_),!(r.boundingBox!==null&&us.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,us)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,c=l.index,d=l.attributes.position,h=l.attributes.uv,m=l.attributes.uv1,g=l.attributes.normal,_=l.groups,x=l.drawRange;if(c!==null)if(Array.isArray(u))for(let M=0,E=_.length;M<E;M++){const S=_[M],y=u[S.materialIndex],L=Math.max(S.start,x.start),b=Math.min(c.count,Math.min(S.start+S.count,x.start+x.count));for(let C=L,O=b;C<O;C+=3){const F=c.getX(C),U=c.getX(C+1),z=c.getX(C+2);o=vu(this,y,e,r,h,m,g,F,U,z),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const M=Math.max(0,x.start),E=Math.min(c.count,x.start+x.count);for(let S=M,y=E;S<y;S+=3){const L=c.getX(S),b=c.getX(S+1),C=c.getX(S+2);o=vu(this,u,e,r,h,m,g,L,b,C),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}else if(d!==void 0)if(Array.isArray(u))for(let M=0,E=_.length;M<E;M++){const S=_[M],y=u[S.materialIndex],L=Math.max(S.start,x.start),b=Math.min(d.count,Math.min(S.start+S.count,x.start+x.count));for(let C=L,O=b;C<O;C+=3){const F=C,U=C+1,z=C+2;o=vu(this,y,e,r,h,m,g,F,U,z),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const M=Math.max(0,x.start),E=Math.min(d.count,x.start+x.count);for(let S=M,y=E;S<y;S+=3){const L=S,b=S+1,C=S+2;o=vu(this,u,e,r,h,m,g,L,b,C),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}}}function UE(n,e,t,r,o,l,u,c){let d;if(e.side===Hn?d=r.intersectTriangle(u,l,o,!0,c):d=r.intersectTriangle(o,l,u,e.side===Hr,c),d===null)return null;_u.copy(c),_u.applyMatrix4(n.matrixWorld);const h=t.ray.origin.distanceTo(_u);return h<t.near||h>t.far?null:{distance:h,point:_u.clone(),object:n}}function vu(n,e,t,r,o,l,u,c,d,h){n.getVertexPosition(c,hu),n.getVertexPosition(d,pu),n.getVertexPosition(h,mu);const m=UE(n,e,t,r,hu,pu,mu,x_);if(m){const g=new Q;xi.getBarycoord(x_,hu,pu,mu,g),o&&(m.uv=xi.getInterpolatedAttribute(o,c,d,h,g,new pt)),l&&(m.uv1=xi.getInterpolatedAttribute(l,c,d,h,g,new pt)),u&&(m.normal=xi.getInterpolatedAttribute(u,c,d,h,g,new Q),m.normal.dot(r.direction)>0&&m.normal.multiplyScalar(-1));const _={a:c,b:d,c:h,normal:new Q,materialIndex:0};xi.getNormal(hu,pu,mu,_.normal),m.face=_,m.barycoord=g}return m}class Ga extends ar{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const c=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const d=[],h=[],m=[],g=[];let _=0,x=0;M("z","y","x",-1,-1,r,t,e,u,l,0),M("z","y","x",1,-1,r,t,-e,u,l,1),M("x","z","y",1,1,e,r,t,o,u,2),M("x","z","y",1,-1,e,r,-t,o,u,3),M("x","y","z",1,-1,e,t,r,o,l,4),M("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(d),this.setAttribute("position",new Vr(h,3)),this.setAttribute("normal",new Vr(m,3)),this.setAttribute("uv",new Vr(g,2));function M(E,S,y,L,b,C,O,F,U,z,P){const R=C/U,H=O/z,oe=C/2,te=O/2,ue=F/2,he=U+1,le=z+1;let ie=0,B=0;const ae=new Q;for(let re=0;re<le;re++){const N=re*H-te;for(let ne=0;ne<he;ne++){const Ue=ne*R-oe;ae[E]=Ue*L,ae[S]=N*b,ae[y]=ue,h.push(ae.x,ae.y,ae.z),ae[E]=0,ae[S]=0,ae[y]=F>0?1:-1,m.push(ae.x,ae.y,ae.z),g.push(ne/U),g.push(1-re/z),ie+=1}}for(let re=0;re<z;re++)for(let N=0;N<U;N++){const ne=_+N+he*re,Ue=_+N+he*(re+1),Z=_+(N+1)+he*(re+1),de=_+(N+1)+he*re;d.push(ne,Ue,de),d.push(Ue,Z,de),B+=6}c.addGroup(x,B,P),x+=B,_+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ga(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Lo(n){const e={};for(const t in n){e[t]={};for(const r in n[t]){const o=n[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function In(n){const e={};for(let t=0;t<n.length;t++){const r=Lo(n[t]);for(const o in r)e[o]=r[o]}return e}function NE(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function k0(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const FE={clone:Lo,merge:In};var OE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Gr extends Ha{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=OE,this.fragmentShader=kE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Lo(e.uniforms),this.uniformsGroups=NE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class B0 extends Wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt,this.coordinateSystem=Ji}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Nr=new Q,S_=new pt,M_=new pt;class ui extends B0{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ua*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ra*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ua*2*Math.atan(Math.tan(Ra*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Nr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Nr.x,Nr.y).multiplyScalar(-e/Nr.z),Nr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Nr.x,Nr.y).multiplyScalar(-e/Nr.z)}getViewSize(e,t){return this.getViewBounds(e,S_,M_),t.subVectors(M_,S_)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ra*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,h=u.fullHeight;l+=u.offsetX*o/d,t-=u.offsetY*r/h,o*=u.width/d,r*=u.height/h}const c=this.filmOffset;c!==0&&(l+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const uo=-90,co=1;class BE extends Wn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ui(uo,co,e,t);o.layers=this.layers,this.add(o);const l=new ui(uo,co,e,t);l.layers=this.layers,this.add(l);const u=new ui(uo,co,e,t);u.layers=this.layers,this.add(u);const c=new ui(uo,co,e,t);c.layers=this.layers,this.add(c);const d=new ui(uo,co,e,t);d.layers=this.layers,this.add(d);const h=new ui(uo,co,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,c,d]=t;for(const h of t)this.remove(h);if(e===Ji)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===zu)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,c,d,h,m]=this.children,g=e.getRenderTarget(),_=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const E=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(t,l),e.setRenderTarget(r,1,o),e.render(t,u),e.setRenderTarget(r,2,o),e.render(t,c),e.setRenderTarget(r,3,o),e.render(t,d),e.setRenderTarget(r,4,o),e.render(t,h),r.texture.generateMipmaps=E,e.setRenderTarget(r,5,o),e.render(t,m),e.setRenderTarget(g,_,x),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class z0 extends Gn{constructor(e,t,r,o,l,u,c,d,h,m){e=e!==void 0?e:[],t=t!==void 0?t:Ro,super(e,t,r,o,l,u,c,d,h,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class zE extends Ts{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new z0(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:bi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Ga(5,5,5),l=new Gr({name:"CubemapFromEquirect",uniforms:Lo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Hn,blending:Br});l.uniforms.tEquirect.value=t;const u=new er(o,l),c=t.minFilter;return t.minFilter===xs&&(t.minFilter=bi),new BE(1,10,this).update(e,u),t.minFilter=c,u.geometry.dispose(),u.material.dispose(),this}clear(e,t,r,o){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}class VE extends Wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sr,this.environmentIntensity=1,this.environmentRotation=new sr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const ad=new Q,HE=new Q,GE=new lt;class Or{constructor(e=new Q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=ad.subVectors(r,t).cross(HE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(ad),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||GE.getNormalMatrix(e),o=this.coplanarPoint(ad).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const cs=new $u,yu=new Q;class V0{constructor(e=new Or,t=new Or,r=new Or,o=new Or,l=new Or,u=new Or){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(r),c[3].copy(o),c[4].copy(l),c[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Ji){const r=this.planes,o=e.elements,l=o[0],u=o[1],c=o[2],d=o[3],h=o[4],m=o[5],g=o[6],_=o[7],x=o[8],M=o[9],E=o[10],S=o[11],y=o[12],L=o[13],b=o[14],C=o[15];if(r[0].setComponents(d-l,_-h,S-x,C-y).normalize(),r[1].setComponents(d+l,_+h,S+x,C+y).normalize(),r[2].setComponents(d+u,_+m,S+M,C+L).normalize(),r[3].setComponents(d-u,_-m,S-M,C-L).normalize(),r[4].setComponents(d-c,_-g,S-E,C-b).normalize(),t===Ji)r[5].setComponents(d+c,_+g,S+E,C+b).normalize();else if(t===zu)r[5].setComponents(c,g,E,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),cs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),cs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(cs)}intersectsSprite(e){return cs.center.set(0,0,0),cs.radius=.7071067811865476,cs.applyMatrix4(e.matrixWorld),this.intersectsSphere(cs)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(yu.x=o.normal.x>0?e.max.x:e.min.x,yu.y=o.normal.y>0?e.max.y:e.min.y,yu.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(yu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class H0 extends Ha{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const E_=new Zt,hh=new Vh,xu=new $u,Su=new Q;class WE extends Wn{constructor(e=new ar,t=new H0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),xu.copy(r.boundingSphere),xu.applyMatrix4(o),xu.radius+=l,e.ray.intersectsSphere(xu)===!1)return;E_.copy(o).invert(),hh.copy(e.ray).applyMatrix4(E_);const c=l/((this.scale.x+this.scale.y+this.scale.z)/3),d=c*c,h=r.index,g=r.attributes.position;if(h!==null){const _=Math.max(0,u.start),x=Math.min(h.count,u.start+u.count);for(let M=_,E=x;M<E;M++){const S=h.getX(M);Su.fromBufferAttribute(g,S),T_(Su,S,d,o,e,t,this)}}else{const _=Math.max(0,u.start),x=Math.min(g.count,u.start+u.count);for(let M=_,E=x;M<E;M++)Su.fromBufferAttribute(g,M),T_(Su,M,d,o,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const c=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=l}}}}}function T_(n,e,t,r,o,l,u){const c=hh.distanceSqToPoint(n);if(c<t){const d=new Q;hh.closestPointToPoint(n,d),d.applyMatrix4(r);const h=o.ray.origin.distanceTo(d);if(h<o.near||h>o.far)return;l.push({distance:h,distanceToRay:Math.sqrt(c),point:d,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class Mu extends Wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}class G0 extends Gn{constructor(e,t,r,o,l,u,c,d,h,m=To){if(m!==To&&m!==bo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&m===To&&(r=Es),r===void 0&&m===bo&&(r=Po),super(null,o,l,u,c,d,m,r,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:Mi,this.minFilter=d!==void 0?d:Mi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Zu extends ar{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,c=Math.floor(r),d=Math.floor(o),h=c+1,m=d+1,g=e/c,_=t/d,x=[],M=[],E=[],S=[];for(let y=0;y<m;y++){const L=y*_-u;for(let b=0;b<h;b++){const C=b*g-l;M.push(C,-L,0),E.push(0,0,1),S.push(b/c),S.push(1-y/d)}}for(let y=0;y<d;y++)for(let L=0;L<c;L++){const b=L+h*y,C=L+h*(y+1),O=L+1+h*(y+1),F=L+1+h*y;x.push(b,C,F),x.push(C,O,F)}this.setIndex(x),this.setAttribute("position",new Vr(M,3)),this.setAttribute("normal",new Vr(E,3)),this.setAttribute("uv",new Vr(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zu(e.width,e.height,e.widthSegments,e.heightSegments)}}class XE extends Ha{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=VM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class jE extends Ha{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class YE extends B0{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,c=o+t,d=o-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=h*this.view.offsetX,u=l+h*this.view.width,c-=m*this.view.offsetY,d=c-m*this.view.height}this.projectionMatrix.makeOrthographic(l,u,c,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class qE extends ui{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class w_{constructor(e=1,t=0,r=0){return this.radius=e,this.phi=t,this.theta=r,this}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=mt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(mt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class KE extends As{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function A_(n,e,t,r){const o=$E(r);switch(t){case M0:return n*e;case T0:return n*e;case w0:return n*e*2;case A0:return n*e/o.components*o.byteLength;case Oh:return n*e/o.components*o.byteLength;case R0:return n*e*2/o.components*o.byteLength;case kh:return n*e*2/o.components*o.byteLength;case E0:return n*e*3/o.components*o.byteLength;case Si:return n*e*4/o.components*o.byteLength;case Bh:return n*e*4/o.components*o.byteLength;case bu:case Du:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Lu:case Iu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Hd:case Wd:return Math.max(n,16)*Math.max(e,8)/4;case Vd:case Gd:return Math.max(n,8)*Math.max(e,8)/2;case Xd:case jd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Yd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case qd:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Kd:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case $d:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Zd:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Qd:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Jd:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case eh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case th:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case nh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case ih:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case rh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case sh:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case oh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case ah:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Uu:case lh:case uh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case C0:case ch:return Math.ceil(n/4)*Math.ceil(e/4)*8;case fh:case dh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function $E(n){switch(n){case rr:case y0:return{byteLength:1,components:1};case Ia:case x0:case za:return{byteLength:2,components:1};case Nh:case Fh:return{byteLength:2,components:4};case Es:case Uh:case Qi:return{byteLength:4,components:1};case S0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ih}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ih);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function W0(){let n=null,e=!1,t=null,r=null;function o(l,u){t(l,u),r=n.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=n.requestAnimationFrame(o),e=!0)},stop:function(){n.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){n=l}}}function ZE(n){const e=new WeakMap;function t(c,d){const h=c.array,m=c.usage,g=h.byteLength,_=n.createBuffer();n.bindBuffer(d,_),n.bufferData(d,h,m),c.onUploadCallback();let x;if(h instanceof Float32Array)x=n.FLOAT;else if(h instanceof Uint16Array)c.isFloat16BufferAttribute?x=n.HALF_FLOAT:x=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=n.SHORT;else if(h instanceof Uint32Array)x=n.UNSIGNED_INT;else if(h instanceof Int32Array)x=n.INT;else if(h instanceof Int8Array)x=n.BYTE;else if(h instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:g}}function r(c,d,h){const m=d.array,g=d.updateRanges;if(n.bindBuffer(h,c),g.length===0)n.bufferSubData(h,0,m);else{g.sort((x,M)=>x.start-M.start);let _=0;for(let x=1;x<g.length;x++){const M=g[_],E=g[x];E.start<=M.start+M.count+1?M.count=Math.max(M.count,E.start+E.count-M.start):(++_,g[_]=E)}g.length=_+1;for(let x=0,M=g.length;x<M;x++){const E=g[x];n.bufferSubData(h,E.start*m.BYTES_PER_ELEMENT,m,E.start,E.count)}d.clearUpdateRanges()}d.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function l(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=e.get(c);d&&(n.deleteBuffer(d.buffer),e.delete(c))}function u(c,d){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const m=e.get(c);(!m||m.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const h=e.get(c);if(h===void 0)e.set(c,t(c,d));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,c,d),h.version=c.version}}return{get:o,remove:l,update:u}}var QE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,JE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,eT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,iT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,sT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,oT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,aT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,cT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,fT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,dT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,hT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,pT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_T=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,vT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,xT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ST=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,MT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ET=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,TT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,AT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,RT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,CT="gl_FragColor = linearToOutputTexel( gl_FragColor );",PT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,bT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,DT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,LT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,IT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,UT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,NT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,FT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,OT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,BT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,zT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,VT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,HT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,GT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,WT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,XT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,YT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,KT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,$T=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ZT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,QT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,JT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ew=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,tw=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,nw=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iw=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,rw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ow=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,aw=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,cw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hw=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,pw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,gw=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_w=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,vw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Sw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Mw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ew=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Tw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ww=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Aw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Rw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Lw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Iw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Uw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Nw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Fw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ow=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Bw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,zw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Vw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Hw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ww=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Xw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,jw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Yw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Kw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,$w=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Zw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,rA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,sA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,oA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,aA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,cA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,dA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,gA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_A=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,vA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,yA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,MA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,EA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,TA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,AA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,RA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,CA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,PA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ut={alphahash_fragment:QE,alphahash_pars_fragment:JE,alphamap_fragment:eT,alphamap_pars_fragment:tT,alphatest_fragment:nT,alphatest_pars_fragment:iT,aomap_fragment:rT,aomap_pars_fragment:sT,batching_pars_vertex:oT,batching_vertex:aT,begin_vertex:lT,beginnormal_vertex:uT,bsdfs:cT,iridescence_fragment:fT,bumpmap_pars_fragment:dT,clipping_planes_fragment:hT,clipping_planes_pars_fragment:pT,clipping_planes_pars_vertex:mT,clipping_planes_vertex:gT,color_fragment:_T,color_pars_fragment:vT,color_pars_vertex:yT,color_vertex:xT,common:ST,cube_uv_reflection_fragment:MT,defaultnormal_vertex:ET,displacementmap_pars_vertex:TT,displacementmap_vertex:wT,emissivemap_fragment:AT,emissivemap_pars_fragment:RT,colorspace_fragment:CT,colorspace_pars_fragment:PT,envmap_fragment:bT,envmap_common_pars_fragment:DT,envmap_pars_fragment:LT,envmap_pars_vertex:IT,envmap_physical_pars_fragment:WT,envmap_vertex:UT,fog_vertex:NT,fog_pars_vertex:FT,fog_fragment:OT,fog_pars_fragment:kT,gradientmap_pars_fragment:BT,lightmap_pars_fragment:zT,lights_lambert_fragment:VT,lights_lambert_pars_fragment:HT,lights_pars_begin:GT,lights_toon_fragment:XT,lights_toon_pars_fragment:jT,lights_phong_fragment:YT,lights_phong_pars_fragment:qT,lights_physical_fragment:KT,lights_physical_pars_fragment:$T,lights_fragment_begin:ZT,lights_fragment_maps:QT,lights_fragment_end:JT,logdepthbuf_fragment:ew,logdepthbuf_pars_fragment:tw,logdepthbuf_pars_vertex:nw,logdepthbuf_vertex:iw,map_fragment:rw,map_pars_fragment:sw,map_particle_fragment:ow,map_particle_pars_fragment:aw,metalnessmap_fragment:lw,metalnessmap_pars_fragment:uw,morphinstance_vertex:cw,morphcolor_vertex:fw,morphnormal_vertex:dw,morphtarget_pars_vertex:hw,morphtarget_vertex:pw,normal_fragment_begin:mw,normal_fragment_maps:gw,normal_pars_fragment:_w,normal_pars_vertex:vw,normal_vertex:yw,normalmap_pars_fragment:xw,clearcoat_normal_fragment_begin:Sw,clearcoat_normal_fragment_maps:Mw,clearcoat_pars_fragment:Ew,iridescence_pars_fragment:Tw,opaque_fragment:ww,packing:Aw,premultiplied_alpha_fragment:Rw,project_vertex:Cw,dithering_fragment:Pw,dithering_pars_fragment:bw,roughnessmap_fragment:Dw,roughnessmap_pars_fragment:Lw,shadowmap_pars_fragment:Iw,shadowmap_pars_vertex:Uw,shadowmap_vertex:Nw,shadowmask_pars_fragment:Fw,skinbase_vertex:Ow,skinning_pars_vertex:kw,skinning_vertex:Bw,skinnormal_vertex:zw,specularmap_fragment:Vw,specularmap_pars_fragment:Hw,tonemapping_fragment:Gw,tonemapping_pars_fragment:Ww,transmission_fragment:Xw,transmission_pars_fragment:jw,uv_pars_fragment:Yw,uv_pars_vertex:qw,uv_vertex:Kw,worldpos_vertex:$w,background_vert:Zw,background_frag:Qw,backgroundCube_vert:Jw,backgroundCube_frag:eA,cube_vert:tA,cube_frag:nA,depth_vert:iA,depth_frag:rA,distanceRGBA_vert:sA,distanceRGBA_frag:oA,equirect_vert:aA,equirect_frag:lA,linedashed_vert:uA,linedashed_frag:cA,meshbasic_vert:fA,meshbasic_frag:dA,meshlambert_vert:hA,meshlambert_frag:pA,meshmatcap_vert:mA,meshmatcap_frag:gA,meshnormal_vert:_A,meshnormal_frag:vA,meshphong_vert:yA,meshphong_frag:xA,meshphysical_vert:SA,meshphysical_frag:MA,meshtoon_vert:EA,meshtoon_frag:TA,points_vert:wA,points_frag:AA,shadow_vert:RA,shadow_frag:CA,sprite_vert:PA,sprite_frag:bA},Ce={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},Pi={basic:{uniforms:In([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:In([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Ct(0)}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:In([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:In([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:In([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new Ct(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:In([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:In([Ce.points,Ce.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:In([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:In([Ce.common,Ce.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:In([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:In([Ce.sprite,Ce.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distanceRGBA:{uniforms:In([Ce.common,Ce.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distanceRGBA_vert,fragmentShader:ut.distanceRGBA_frag},shadow:{uniforms:In([Ce.lights,Ce.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};Pi.physical={uniforms:In([Pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};const Eu={r:0,b:0,g:0},fs=new sr,DA=new Zt;function LA(n,e,t,r,o,l,u){const c=new Ct(0);let d=l===!0?0:1,h,m,g=null,_=0,x=null;function M(b){let C=b.isScene===!0?b.background:null;return C&&C.isTexture&&(C=(b.backgroundBlurriness>0?t:e).get(C)),C}function E(b){let C=!1;const O=M(b);O===null?y(c,d):O&&O.isColor&&(y(O,1),C=!0);const F=n.xr.getEnvironmentBlendMode();F==="additive"?r.buffers.color.setClear(0,0,0,1,u):F==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(n.autoClear||C)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function S(b,C){const O=M(C);O&&(O.isCubeTexture||O.mapping===Ku)?(m===void 0&&(m=new er(new Ga(1,1,1),new Gr({name:"BackgroundCubeMaterial",uniforms:Lo(Pi.backgroundCube.uniforms),vertexShader:Pi.backgroundCube.vertexShader,fragmentShader:Pi.backgroundCube.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(F,U,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(m)),fs.copy(C.backgroundRotation),fs.x*=-1,fs.y*=-1,fs.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(fs.y*=-1,fs.z*=-1),m.material.uniforms.envMap.value=O,m.material.uniforms.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(DA.makeRotationFromEuler(fs)),m.material.toneMapped=wt.getTransfer(O.colorSpace)!==bt,(g!==O||_!==O.version||x!==n.toneMapping)&&(m.material.needsUpdate=!0,g=O,_=O.version,x=n.toneMapping),m.layers.enableAll(),b.unshift(m,m.geometry,m.material,0,0,null)):O&&O.isTexture&&(h===void 0&&(h=new er(new Zu(2,2),new Gr({name:"BackgroundMaterial",uniforms:Lo(Pi.background.uniforms),vertexShader:Pi.background.vertexShader,fragmentShader:Pi.background.fragmentShader,side:Hr,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(h)),h.material.uniforms.t2D.value=O,h.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,h.material.toneMapped=wt.getTransfer(O.colorSpace)!==bt,O.matrixAutoUpdate===!0&&O.updateMatrix(),h.material.uniforms.uvTransform.value.copy(O.matrix),(g!==O||_!==O.version||x!==n.toneMapping)&&(h.material.needsUpdate=!0,g=O,_=O.version,x=n.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null))}function y(b,C){b.getRGB(Eu,k0(n)),r.buffers.color.setClear(Eu.r,Eu.g,Eu.b,C,u)}function L(){m!==void 0&&(m.geometry.dispose(),m.material.dispose()),h!==void 0&&(h.geometry.dispose(),h.material.dispose())}return{getClearColor:function(){return c},setClearColor:function(b,C=1){c.set(b),d=C,y(c,d)},getClearAlpha:function(){return d},setClearAlpha:function(b){d=b,y(c,d)},render:E,addToRenderList:S,dispose:L}}function IA(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),r={},o=_(null);let l=o,u=!1;function c(R,H,oe,te,ue){let he=!1;const le=g(te,oe,H);l!==le&&(l=le,h(l.object)),he=x(R,te,oe,ue),he&&M(R,te,oe,ue),ue!==null&&e.update(ue,n.ELEMENT_ARRAY_BUFFER),(he||u)&&(u=!1,C(R,H,oe,te),ue!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(ue).buffer))}function d(){return n.createVertexArray()}function h(R){return n.bindVertexArray(R)}function m(R){return n.deleteVertexArray(R)}function g(R,H,oe){const te=oe.wireframe===!0;let ue=r[R.id];ue===void 0&&(ue={},r[R.id]=ue);let he=ue[H.id];he===void 0&&(he={},ue[H.id]=he);let le=he[te];return le===void 0&&(le=_(d()),he[te]=le),le}function _(R){const H=[],oe=[],te=[];for(let ue=0;ue<t;ue++)H[ue]=0,oe[ue]=0,te[ue]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:oe,attributeDivisors:te,object:R,attributes:{},index:null}}function x(R,H,oe,te){const ue=l.attributes,he=H.attributes;let le=0;const ie=oe.getAttributes();for(const B in ie)if(ie[B].location>=0){const re=ue[B];let N=he[B];if(N===void 0&&(B==="instanceMatrix"&&R.instanceMatrix&&(N=R.instanceMatrix),B==="instanceColor"&&R.instanceColor&&(N=R.instanceColor)),re===void 0||re.attribute!==N||N&&re.data!==N.data)return!0;le++}return l.attributesNum!==le||l.index!==te}function M(R,H,oe,te){const ue={},he=H.attributes;let le=0;const ie=oe.getAttributes();for(const B in ie)if(ie[B].location>=0){let re=he[B];re===void 0&&(B==="instanceMatrix"&&R.instanceMatrix&&(re=R.instanceMatrix),B==="instanceColor"&&R.instanceColor&&(re=R.instanceColor));const N={};N.attribute=re,re&&re.data&&(N.data=re.data),ue[B]=N,le++}l.attributes=ue,l.attributesNum=le,l.index=te}function E(){const R=l.newAttributes;for(let H=0,oe=R.length;H<oe;H++)R[H]=0}function S(R){y(R,0)}function y(R,H){const oe=l.newAttributes,te=l.enabledAttributes,ue=l.attributeDivisors;oe[R]=1,te[R]===0&&(n.enableVertexAttribArray(R),te[R]=1),ue[R]!==H&&(n.vertexAttribDivisor(R,H),ue[R]=H)}function L(){const R=l.newAttributes,H=l.enabledAttributes;for(let oe=0,te=H.length;oe<te;oe++)H[oe]!==R[oe]&&(n.disableVertexAttribArray(oe),H[oe]=0)}function b(R,H,oe,te,ue,he,le){le===!0?n.vertexAttribIPointer(R,H,oe,ue,he):n.vertexAttribPointer(R,H,oe,te,ue,he)}function C(R,H,oe,te){E();const ue=te.attributes,he=oe.getAttributes(),le=H.defaultAttributeValues;for(const ie in he){const B=he[ie];if(B.location>=0){let ae=ue[ie];if(ae===void 0&&(ie==="instanceMatrix"&&R.instanceMatrix&&(ae=R.instanceMatrix),ie==="instanceColor"&&R.instanceColor&&(ae=R.instanceColor)),ae!==void 0){const re=ae.normalized,N=ae.itemSize,ne=e.get(ae);if(ne===void 0)continue;const Ue=ne.buffer,Z=ne.type,de=ne.bytesPerElement,Se=Z===n.INT||Z===n.UNSIGNED_INT||ae.gpuType===Uh;if(ae.isInterleavedBufferAttribute){const ve=ae.data,Te=ve.stride,Ie=ae.offset;if(ve.isInstancedInterleavedBuffer){for(let Je=0;Je<B.locationSize;Je++)y(B.location+Je,ve.meshPerAttribute);R.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let Je=0;Je<B.locationSize;Je++)S(B.location+Je);n.bindBuffer(n.ARRAY_BUFFER,Ue);for(let Je=0;Je<B.locationSize;Je++)b(B.location+Je,N/B.locationSize,Z,re,Te*de,(Ie+N/B.locationSize*Je)*de,Se)}else{if(ae.isInstancedBufferAttribute){for(let ve=0;ve<B.locationSize;ve++)y(B.location+ve,ae.meshPerAttribute);R.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ve=0;ve<B.locationSize;ve++)S(B.location+ve);n.bindBuffer(n.ARRAY_BUFFER,Ue);for(let ve=0;ve<B.locationSize;ve++)b(B.location+ve,N/B.locationSize,Z,re,N*de,N/B.locationSize*ve*de,Se)}}else if(le!==void 0){const re=le[ie];if(re!==void 0)switch(re.length){case 2:n.vertexAttrib2fv(B.location,re);break;case 3:n.vertexAttrib3fv(B.location,re);break;case 4:n.vertexAttrib4fv(B.location,re);break;default:n.vertexAttrib1fv(B.location,re)}}}}L()}function O(){z();for(const R in r){const H=r[R];for(const oe in H){const te=H[oe];for(const ue in te)m(te[ue].object),delete te[ue];delete H[oe]}delete r[R]}}function F(R){if(r[R.id]===void 0)return;const H=r[R.id];for(const oe in H){const te=H[oe];for(const ue in te)m(te[ue].object),delete te[ue];delete H[oe]}delete r[R.id]}function U(R){for(const H in r){const oe=r[H];if(oe[R.id]===void 0)continue;const te=oe[R.id];for(const ue in te)m(te[ue].object),delete te[ue];delete oe[R.id]}}function z(){P(),u=!0,l!==o&&(l=o,h(l.object))}function P(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:c,reset:z,resetDefaultState:P,dispose:O,releaseStatesOfGeometry:F,releaseStatesOfProgram:U,initAttributes:E,enableAttribute:S,disableUnusedAttributes:L}}function UA(n,e,t){let r;function o(h){r=h}function l(h,m){n.drawArrays(r,h,m),t.update(m,r,1)}function u(h,m,g){g!==0&&(n.drawArraysInstanced(r,h,m,g),t.update(m,r,g))}function c(h,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,m,0,g);let x=0;for(let M=0;M<g;M++)x+=m[M];t.update(x,r,1)}function d(h,m,g,_){if(g===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let M=0;M<h.length;M++)u(h[M],m[M],_[M]);else{x.multiDrawArraysInstancedWEBGL(r,h,0,m,0,_,0,g);let M=0;for(let E=0;E<g;E++)M+=m[E]*_[E];t.update(M,r,1)}}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=d}function NA(n,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");o=n.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(U){return!(U!==Si&&r.convert(U)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(U){const z=U===za&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==rr&&r.convert(U)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Qi&&!z)}function d(U){if(U==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const m=d(h);m!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",m,"instead."),h=m);const g=t.logarithmicDepthBuffer===!0,_=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),x=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_TEXTURE_SIZE),S=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),y=n.getParameter(n.MAX_VERTEX_ATTRIBS),L=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),C=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),O=M>0,F=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:c,precision:h,logarithmicDepthBuffer:g,reverseDepthBuffer:_,maxTextures:x,maxVertexTextures:M,maxTextureSize:E,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:L,maxVaryings:b,maxFragmentUniforms:C,vertexTextures:O,maxSamples:F}}function FA(n){const e=this;let t=null,r=0,o=!1,l=!1;const u=new Or,c=new lt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(g,_){const x=g.length!==0||_||r!==0||o;return o=_,r=g.length,x},this.beginShadows=function(){l=!0,m(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(g,_){t=m(g,_,0)},this.setState=function(g,_,x){const M=g.clippingPlanes,E=g.clipIntersection,S=g.clipShadows,y=n.get(g);if(!o||M===null||M.length===0||l&&!S)l?m(null):h();else{const L=l?0:r,b=L*4;let C=y.clippingState||null;d.value=C,C=m(M,_,b,x);for(let O=0;O!==b;++O)C[O]=t[O];y.clippingState=C,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=L}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function m(g,_,x,M){const E=g!==null?g.length:0;let S=null;if(E!==0){if(S=d.value,M!==!0||S===null){const y=x+E*4,L=_.matrixWorldInverse;c.getNormalMatrix(L),(S===null||S.length<y)&&(S=new Float32Array(y));for(let b=0,C=x;b!==E;++b,C+=4)u.copy(g[b]).applyMatrix4(L,c),u.normal.toArray(S,C),S[C+3]=u.constant}d.value=S,d.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,S}}function OA(n){let e=new WeakMap;function t(u,c){return c===Od?u.mapping=Ro:c===kd&&(u.mapping=Co),u}function r(u){if(u&&u.isTexture){const c=u.mapping;if(c===Od||c===kd)if(e.has(u)){const d=e.get(u).texture;return t(d,u.mapping)}else{const d=u.image;if(d&&d.height>0){const h=new zE(d.height);return h.fromEquirectangularTexture(n,u),e.set(u,h),u.addEventListener("dispose",o),t(h.texture,u.mapping)}else return null}}return u}function o(u){const c=u.target;c.removeEventListener("dispose",o);const d=e.get(c);d!==void 0&&(e.delete(c),d.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}const go=4,R_=[.125,.215,.35,.446,.526,.582],vs=20,ld=new YE,C_=new Ct;let ud=null,cd=0,fd=0,dd=!1;const ps=(1+Math.sqrt(5))/2,fo=1/ps,P_=[new Q(-ps,fo,0),new Q(ps,fo,0),new Q(-fo,0,ps),new Q(fo,0,ps),new Q(0,ps,-fo),new Q(0,ps,fo),new Q(-1,1,-1),new Q(1,1,-1),new Q(-1,1,1),new Q(1,1,1)];class b_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,o=100){ud=this._renderer.getRenderTarget(),cd=this._renderer.getActiveCubeFace(),fd=this._renderer.getActiveMipmapLevel(),dd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,o,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=I_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=L_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ud,cd,fd),this._renderer.xr.enabled=dd,e.scissorTest=!1,Tu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ro||e.mapping===Co?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ud=this._renderer.getRenderTarget(),cd=this._renderer.getActiveCubeFace(),fd=this._renderer.getActiveMipmapLevel(),dd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:bi,minFilter:bi,generateMipmaps:!1,type:za,format:Si,colorSpace:Do,depthBuffer:!1},o=D_(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=D_(e,t,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=kA(l)),this._blurMaterial=BA(l,e,t)}return o}_compileMaterial(e){const t=new er(this._lodPlanes[0],e);this._renderer.compile(t,ld)}_sceneToCubeUV(e,t,r,o){const c=new ui(90,1,t,r),d=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],m=this._renderer,g=m.autoClear,_=m.toneMapping;m.getClearColor(C_),m.toneMapping=zr,m.autoClear=!1;const x=new N0({name:"PMREM.Background",side:Hn,depthWrite:!1,depthTest:!1}),M=new er(new Ga,x);let E=!1;const S=e.background;S?S.isColor&&(x.color.copy(S),e.background=null,E=!0):(x.color.copy(C_),E=!0);for(let y=0;y<6;y++){const L=y%3;L===0?(c.up.set(0,d[y],0),c.lookAt(h[y],0,0)):L===1?(c.up.set(0,0,d[y]),c.lookAt(0,h[y],0)):(c.up.set(0,d[y],0),c.lookAt(0,0,h[y]));const b=this._cubeSize;Tu(o,L*b,y>2?b:0,b,b),m.setRenderTarget(o),E&&m.render(M,c),m.render(e,c)}M.geometry.dispose(),M.material.dispose(),m.toneMapping=_,m.autoClear=g,e.background=S}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===Ro||e.mapping===Co;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=I_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=L_());const l=o?this._cubemapMaterial:this._equirectMaterial,u=new er(this._lodPlanes[0],l),c=l.uniforms;c.envMap.value=e;const d=this._cubeSize;Tu(t,0,0,3*d,2*d),r.setRenderTarget(t),r.render(u,ld)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let l=1;l<o;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),c=P_[(o-l-1)%P_.length];this._blur(e,l-1,l,u,c)}t.autoClear=r}_blur(e,t,r,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,o,"latitudinal",l),this._halfBlur(u,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,u,c){const d=this._renderer,h=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,g=new er(this._lodPlanes[o],h),_=h.uniforms,x=this._sizeLods[r]-1,M=isFinite(l)?Math.PI/(2*x):2*Math.PI/(2*vs-1),E=l/M,S=isFinite(l)?1+Math.floor(m*E):vs;S>vs&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${vs}`);const y=[];let L=0;for(let U=0;U<vs;++U){const z=U/E,P=Math.exp(-z*z/2);y.push(P),U===0?L+=P:U<S&&(L+=2*P)}for(let U=0;U<y.length;U++)y[U]=y[U]/L;_.envMap.value=e.texture,_.samples.value=S,_.weights.value=y,_.latitudinal.value=u==="latitudinal",c&&(_.poleAxis.value=c);const{_lodMax:b}=this;_.dTheta.value=M,_.mipInt.value=b-r;const C=this._sizeLods[o],O=3*C*(o>b-go?o-b+go:0),F=4*(this._cubeSize-C);Tu(t,O,F,3*C,2*C),d.setRenderTarget(t),d.render(g,ld)}}function kA(n){const e=[],t=[],r=[];let o=n;const l=n-go+1+R_.length;for(let u=0;u<l;u++){const c=Math.pow(2,o);t.push(c);let d=1/c;u>n-go?d=R_[u-n+go-1]:u===0&&(d=0),r.push(d);const h=1/(c-2),m=-h,g=1+h,_=[m,m,g,m,g,g,m,m,g,g,m,g],x=6,M=6,E=3,S=2,y=1,L=new Float32Array(E*M*x),b=new Float32Array(S*M*x),C=new Float32Array(y*M*x);for(let F=0;F<x;F++){const U=F%3*2/3-1,z=F>2?0:-1,P=[U,z,0,U+2/3,z,0,U+2/3,z+1,0,U,z,0,U+2/3,z+1,0,U,z+1,0];L.set(P,E*M*F),b.set(_,S*M*F);const R=[F,F,F,F,F,F];C.set(R,y*M*F)}const O=new ar;O.setAttribute("position",new Di(L,E)),O.setAttribute("uv",new Di(b,S)),O.setAttribute("faceIndex",new Di(C,y)),e.push(O),o>go&&o--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function D_(n,e,t){const r=new Ts(n,e,t);return r.texture.mapping=Ku,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Tu(n,e,t,r,o){n.viewport.set(e,t,r,o),n.scissor.set(e,t,r,o)}function BA(n,e,t){const r=new Float32Array(vs),o=new Q(0,1,0);return new Gr({name:"SphericalGaussianBlur",defines:{n:vs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Hh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Br,depthTest:!1,depthWrite:!1})}function L_(){return new Gr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Br,depthTest:!1,depthWrite:!1})}function I_(){return new Gr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Br,depthTest:!1,depthWrite:!1})}function Hh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function zA(n){let e=new WeakMap,t=null;function r(c){if(c&&c.isTexture){const d=c.mapping,h=d===Od||d===kd,m=d===Ro||d===Co;if(h||m){let g=e.get(c);const _=g!==void 0?g.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==_)return t===null&&(t=new b_(n)),g=h?t.fromEquirectangular(c,g):t.fromCubemap(c,g),g.texture.pmremVersion=c.pmremVersion,e.set(c,g),g.texture;if(g!==void 0)return g.texture;{const x=c.image;return h&&x&&x.height>0||m&&x&&o(x)?(t===null&&(t=new b_(n)),g=h?t.fromEquirectangular(c):t.fromCubemap(c),g.texture.pmremVersion=c.pmremVersion,e.set(c,g),c.addEventListener("dispose",l),g.texture):null}}}return c}function o(c){let d=0;const h=6;for(let m=0;m<h;m++)c[m]!==void 0&&d++;return d===h}function l(c){const d=c.target;d.removeEventListener("dispose",l);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:u}}function VA(n){const e={};function t(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=n.getExtension(r)}return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&po("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function HA(n,e,t,r){const o={},l=new WeakMap;function u(g){const _=g.target;_.index!==null&&e.remove(_.index);for(const M in _.attributes)e.remove(_.attributes[M]);_.removeEventListener("dispose",u),delete o[_.id];const x=l.get(_);x&&(e.remove(x),l.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function c(g,_){return o[_.id]===!0||(_.addEventListener("dispose",u),o[_.id]=!0,t.memory.geometries++),_}function d(g){const _=g.attributes;for(const x in _)e.update(_[x],n.ARRAY_BUFFER)}function h(g){const _=[],x=g.index,M=g.attributes.position;let E=0;if(x!==null){const L=x.array;E=x.version;for(let b=0,C=L.length;b<C;b+=3){const O=L[b+0],F=L[b+1],U=L[b+2];_.push(O,F,F,U,U,O)}}else if(M!==void 0){const L=M.array;E=M.version;for(let b=0,C=L.length/3-1;b<C;b+=3){const O=b+0,F=b+1,U=b+2;_.push(O,F,F,U,U,O)}}else return;const S=new(b0(_)?O0:F0)(_,1);S.version=E;const y=l.get(g);y&&e.remove(y),l.set(g,S)}function m(g){const _=l.get(g);if(_){const x=g.index;x!==null&&_.version<x.version&&h(g)}else h(g);return l.get(g)}return{get:c,update:d,getWireframeAttribute:m}}function GA(n,e,t){let r;function o(_){r=_}let l,u;function c(_){l=_.type,u=_.bytesPerElement}function d(_,x){n.drawElements(r,x,l,_*u),t.update(x,r,1)}function h(_,x,M){M!==0&&(n.drawElementsInstanced(r,x,l,_*u,M),t.update(x,r,M))}function m(_,x,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,x,0,l,_,0,M);let S=0;for(let y=0;y<M;y++)S+=x[y];t.update(S,r,1)}function g(_,x,M,E){if(M===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let y=0;y<_.length;y++)h(_[y]/u,x[y],E[y]);else{S.multiDrawElementsInstancedWEBGL(r,x,0,l,_,0,E,0,M);let y=0;for(let L=0;L<M;L++)y+=x[L]*E[L];t.update(y,r,1)}}this.setMode=o,this.setIndex=c,this.render=d,this.renderInstances=h,this.renderMultiDraw=m,this.renderMultiDrawInstances=g}function WA(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,c){switch(t.calls++,u){case n.TRIANGLES:t.triangles+=c*(l/3);break;case n.LINES:t.lines+=c*(l/2);break;case n.LINE_STRIP:t.lines+=c*(l-1);break;case n.LINE_LOOP:t.lines+=c*l;break;case n.POINTS:t.points+=c*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function XA(n,e,t){const r=new WeakMap,o=new $t;function l(u,c,d){const h=u.morphTargetInfluences,m=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,g=m!==void 0?m.length:0;let _=r.get(c);if(_===void 0||_.count!==g){let R=function(){z.dispose(),r.delete(c),c.removeEventListener("dispose",R)};var x=R;_!==void 0&&_.texture.dispose();const M=c.morphAttributes.position!==void 0,E=c.morphAttributes.normal!==void 0,S=c.morphAttributes.color!==void 0,y=c.morphAttributes.position||[],L=c.morphAttributes.normal||[],b=c.morphAttributes.color||[];let C=0;M===!0&&(C=1),E===!0&&(C=2),S===!0&&(C=3);let O=c.attributes.position.count*C,F=1;O>e.maxTextureSize&&(F=Math.ceil(O/e.maxTextureSize),O=e.maxTextureSize);const U=new Float32Array(O*F*4*g),z=new L0(U,O,F,g);z.type=Qi,z.needsUpdate=!0;const P=C*4;for(let H=0;H<g;H++){const oe=y[H],te=L[H],ue=b[H],he=O*F*4*H;for(let le=0;le<oe.count;le++){const ie=le*P;M===!0&&(o.fromBufferAttribute(oe,le),U[he+ie+0]=o.x,U[he+ie+1]=o.y,U[he+ie+2]=o.z,U[he+ie+3]=0),E===!0&&(o.fromBufferAttribute(te,le),U[he+ie+4]=o.x,U[he+ie+5]=o.y,U[he+ie+6]=o.z,U[he+ie+7]=0),S===!0&&(o.fromBufferAttribute(ue,le),U[he+ie+8]=o.x,U[he+ie+9]=o.y,U[he+ie+10]=o.z,U[he+ie+11]=ue.itemSize===4?o.w:1)}}_={count:g,texture:z,size:new pt(O,F)},r.set(c,_),c.addEventListener("dispose",R)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(n,"morphTexture",u.morphTexture,t);else{let M=0;for(let S=0;S<h.length;S++)M+=h[S];const E=c.morphTargetsRelative?1:1-M;d.getUniforms().setValue(n,"morphTargetBaseInfluence",E),d.getUniforms().setValue(n,"morphTargetInfluences",h)}d.getUniforms().setValue(n,"morphTargetsTexture",_.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",_.size)}return{update:l}}function jA(n,e,t,r){let o=new WeakMap;function l(d){const h=r.render.frame,m=d.geometry,g=e.get(d,m);if(o.get(g)!==h&&(e.update(g),o.set(g,h)),d.isInstancedMesh&&(d.hasEventListener("dispose",c)===!1&&d.addEventListener("dispose",c),o.get(d)!==h&&(t.update(d.instanceMatrix,n.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,n.ARRAY_BUFFER),o.set(d,h))),d.isSkinnedMesh){const _=d.skeleton;o.get(_)!==h&&(_.update(),o.set(_,h))}return g}function u(){o=new WeakMap}function c(d){const h=d.target;h.removeEventListener("dispose",c),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:l,dispose:u}}const X0=new Gn,U_=new G0(1,1),j0=new L0,Y0=new TE,q0=new z0,N_=[],F_=[],O_=new Float32Array(16),k_=new Float32Array(9),B_=new Float32Array(4);function Oo(n,e,t){const r=n[0];if(r<=0||r>0)return n;const o=e*t;let l=N_[o];if(l===void 0&&(l=new Float32Array(o),N_[o]=l),e!==0){r.toArray(l,0);for(let u=1,c=0;u!==e;++u)c+=t,n[u].toArray(l,c)}return l}function sn(n,e){if(n.length!==e.length)return!1;for(let t=0,r=n.length;t<r;t++)if(n[t]!==e[t])return!1;return!0}function on(n,e){for(let t=0,r=e.length;t<r;t++)n[t]=e[t]}function Qu(n,e){let t=F_[e];t===void 0&&(t=new Int32Array(e),F_[e]=t);for(let r=0;r!==e;++r)t[r]=n.allocateTextureUnit();return t}function YA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function qA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;n.uniform2fv(this.addr,e),on(t,e)}}function KA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(sn(t,e))return;n.uniform3fv(this.addr,e),on(t,e)}}function $A(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;n.uniform4fv(this.addr,e),on(t,e)}}function ZA(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(sn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),on(t,e)}else{if(sn(t,r))return;B_.set(r),n.uniformMatrix2fv(this.addr,!1,B_),on(t,r)}}function QA(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(sn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),on(t,e)}else{if(sn(t,r))return;k_.set(r),n.uniformMatrix3fv(this.addr,!1,k_),on(t,r)}}function JA(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(sn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),on(t,e)}else{if(sn(t,r))return;O_.set(r),n.uniformMatrix4fv(this.addr,!1,O_),on(t,r)}}function e1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function t1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;n.uniform2iv(this.addr,e),on(t,e)}}function n1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;n.uniform3iv(this.addr,e),on(t,e)}}function i1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;n.uniform4iv(this.addr,e),on(t,e)}}function r1(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function s1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;n.uniform2uiv(this.addr,e),on(t,e)}}function o1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;n.uniform3uiv(this.addr,e),on(t,e)}}function a1(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;n.uniform4uiv(this.addr,e),on(t,e)}}function l1(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o);let l;this.type===n.SAMPLER_2D_SHADOW?(U_.compareFunction=P0,l=U_):l=X0,t.setTexture2D(e||l,o)}function u1(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||Y0,o)}function c1(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||q0,o)}function f1(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||j0,o)}function d1(n){switch(n){case 5126:return YA;case 35664:return qA;case 35665:return KA;case 35666:return $A;case 35674:return ZA;case 35675:return QA;case 35676:return JA;case 5124:case 35670:return e1;case 35667:case 35671:return t1;case 35668:case 35672:return n1;case 35669:case 35673:return i1;case 5125:return r1;case 36294:return s1;case 36295:return o1;case 36296:return a1;case 35678:case 36198:case 36298:case 36306:case 35682:return l1;case 35679:case 36299:case 36307:return u1;case 35680:case 36300:case 36308:case 36293:return c1;case 36289:case 36303:case 36311:case 36292:return f1}}function h1(n,e){n.uniform1fv(this.addr,e)}function p1(n,e){const t=Oo(e,this.size,2);n.uniform2fv(this.addr,t)}function m1(n,e){const t=Oo(e,this.size,3);n.uniform3fv(this.addr,t)}function g1(n,e){const t=Oo(e,this.size,4);n.uniform4fv(this.addr,t)}function _1(n,e){const t=Oo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function v1(n,e){const t=Oo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function y1(n,e){const t=Oo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function x1(n,e){n.uniform1iv(this.addr,e)}function S1(n,e){n.uniform2iv(this.addr,e)}function M1(n,e){n.uniform3iv(this.addr,e)}function E1(n,e){n.uniform4iv(this.addr,e)}function T1(n,e){n.uniform1uiv(this.addr,e)}function w1(n,e){n.uniform2uiv(this.addr,e)}function A1(n,e){n.uniform3uiv(this.addr,e)}function R1(n,e){n.uniform4uiv(this.addr,e)}function C1(n,e,t){const r=this.cache,o=e.length,l=Qu(t,o);sn(r,l)||(n.uniform1iv(this.addr,l),on(r,l));for(let u=0;u!==o;++u)t.setTexture2D(e[u]||X0,l[u])}function P1(n,e,t){const r=this.cache,o=e.length,l=Qu(t,o);sn(r,l)||(n.uniform1iv(this.addr,l),on(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||Y0,l[u])}function b1(n,e,t){const r=this.cache,o=e.length,l=Qu(t,o);sn(r,l)||(n.uniform1iv(this.addr,l),on(r,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||q0,l[u])}function D1(n,e,t){const r=this.cache,o=e.length,l=Qu(t,o);sn(r,l)||(n.uniform1iv(this.addr,l),on(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||j0,l[u])}function L1(n){switch(n){case 5126:return h1;case 35664:return p1;case 35665:return m1;case 35666:return g1;case 35674:return _1;case 35675:return v1;case 35676:return y1;case 5124:case 35670:return x1;case 35667:case 35671:return S1;case 35668:case 35672:return M1;case 35669:case 35673:return E1;case 5125:return T1;case 36294:return w1;case 36295:return A1;case 36296:return R1;case 35678:case 36198:case 36298:case 36306:case 35682:return C1;case 35679:case 36299:case 36307:return P1;case 35680:case 36300:case 36308:case 36293:return b1;case 36289:case 36303:case 36311:case 36292:return D1}}class I1{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=d1(t.type)}}class U1{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=L1(t.type)}}class N1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const c=o[l];c.setValue(e,t[c.id],r)}}}const hd=/(\w+)(\])?(\[|\.)?/g;function z_(n,e){n.seq.push(e),n.map[e.id]=e}function F1(n,e,t){const r=n.name,o=r.length;for(hd.lastIndex=0;;){const l=hd.exec(r),u=hd.lastIndex;let c=l[1];const d=l[2]==="]",h=l[3];if(d&&(c=c|0),h===void 0||h==="["&&u+2===o){z_(t,h===void 0?new I1(c,n,e):new U1(c,n,e));break}else{let g=t.map[c];g===void 0&&(g=new N1(c),z_(t,g)),t=g}}}class Nu{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const l=e.getActiveUniform(t,o),u=e.getUniformLocation(t,l.name);F1(l,u,this)}}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const c=t[l],d=r[c.id];d.needsUpdate!==!1&&c.setValue(e,d.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function V_(n,e,t){const r=n.createShader(e);return n.shaderSource(r,t),n.compileShader(r),r}const O1=37297;let k1=0;function B1(n,e){const t=n.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const c=u+1;r.push(`${c===e?">":" "} ${c}: ${t[u]}`)}return r.join(`
`)}const H_=new lt;function z1(n){wt._getMatrix(H_,wt.workingColorSpace,n);const e=`mat3( ${H_.elements.map(t=>t.toFixed(4))} )`;switch(wt.getTransfer(n)){case Bu:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function G_(n,e,t){const r=n.getShaderParameter(e,n.COMPILE_STATUS),o=n.getShaderInfoLog(e).trim();if(r&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const u=parseInt(l[1]);return t.toUpperCase()+`

`+o+`

`+B1(n.getShaderSource(e),u)}else return o}function V1(n,e){const t=z1(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function H1(n,e){let t;switch(e){case IM:t="Linear";break;case UM:t="Reinhard";break;case NM:t="Cineon";break;case FM:t="ACESFilmic";break;case kM:t="AgX";break;case BM:t="Neutral";break;case OM:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const wu=new Q;function G1(){wt.getLuminanceCoefficients(wu);const n=wu.x.toFixed(4),e=wu.y.toFixed(4),t=wu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function W1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ea).join(`
`)}function X1(n){const e=[];for(const t in n){const r=n[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function j1(n,e){const t={},r=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=n.getActiveAttrib(e,o),u=l.name;let c=1;l.type===n.FLOAT_MAT2&&(c=2),l.type===n.FLOAT_MAT3&&(c=3),l.type===n.FLOAT_MAT4&&(c=4),t[u]={type:l.type,location:n.getAttribLocation(e,u),locationSize:c}}return t}function Ea(n){return n!==""}function W_(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function X_(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Y1=/^[ \t]*#include +<([\w\d./]+)>/gm;function ph(n){return n.replace(Y1,K1)}const q1=new Map;function K1(n,e){let t=ut[e];if(t===void 0){const r=q1.get(e);if(r!==void 0)t=ut[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return ph(t)}const $1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function j_(n){return n.replace($1,Z1)}function Z1(n,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function Y_(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Q1(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===g0?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===dM?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===$i&&(e="SHADOWMAP_TYPE_VSM"),e}function J1(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ro:case Co:e="ENVMAP_TYPE_CUBE";break;case Ku:e="ENVMAP_TYPE_CUBE_UV";break}return e}function eR(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Co:e="ENVMAP_MODE_REFRACTION";break}return e}function tR(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case _0:e="ENVMAP_BLENDING_MULTIPLY";break;case DM:e="ENVMAP_BLENDING_MIX";break;case LM:e="ENVMAP_BLENDING_ADD";break}return e}function nR(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:r,maxMip:t}}function iR(n,e,t,r){const o=n.getContext(),l=t.defines;let u=t.vertexShader,c=t.fragmentShader;const d=Q1(t),h=J1(t),m=eR(t),g=tR(t),_=nR(t),x=W1(t),M=X1(l),E=o.createProgram();let S,y,L=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Ea).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Ea).join(`
`),y.length>0&&(y+=`
`)):(S=[Y_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ea).join(`
`),y=[Y_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+m:"",t.envMap?"#define "+g:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==zr?"#define TONE_MAPPING":"",t.toneMapping!==zr?ut.tonemapping_pars_fragment:"",t.toneMapping!==zr?H1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,V1("linearToOutputTexel",t.outputColorSpace),G1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ea).join(`
`)),u=ph(u),u=W_(u,t),u=X_(u,t),c=ph(c),c=W_(c,t),c=X_(c,t),u=j_(u),c=j_(c),t.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,S=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",t.glslVersion===r_?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===r_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const b=L+S+u,C=L+y+c,O=V_(o,o.VERTEX_SHADER,b),F=V_(o,o.FRAGMENT_SHADER,C);o.attachShader(E,O),o.attachShader(E,F),t.index0AttributeName!==void 0?o.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(E,0,"position"),o.linkProgram(E);function U(H){if(n.debug.checkShaderErrors){const oe=o.getProgramInfoLog(E).trim(),te=o.getShaderInfoLog(O).trim(),ue=o.getShaderInfoLog(F).trim();let he=!0,le=!0;if(o.getProgramParameter(E,o.LINK_STATUS)===!1)if(he=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(o,E,O,F);else{const ie=G_(o,O,"vertex"),B=G_(o,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(E,o.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+oe+`
`+ie+`
`+B)}else oe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",oe):(te===""||ue==="")&&(le=!1);le&&(H.diagnostics={runnable:he,programLog:oe,vertexShader:{log:te,prefix:S},fragmentShader:{log:ue,prefix:y}})}o.deleteShader(O),o.deleteShader(F),z=new Nu(o,E),P=j1(o,E)}let z;this.getUniforms=function(){return z===void 0&&U(this),z};let P;this.getAttributes=function(){return P===void 0&&U(this),P};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=o.getProgramParameter(E,O1)),R},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=k1++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=O,this.fragmentShader=F,this}let rR=0;class sR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new oR(e),t.set(e,r)),r}}class oR{constructor(e){this.id=rR++,this.code=e,this.usedTimes=0}}function aR(n,e,t,r,o,l,u){const c=new I0,d=new sR,h=new Set,m=[],g=o.logarithmicDepthBuffer,_=o.vertexTextures;let x=o.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(P){return h.add(P),P===0?"uv":`uv${P}`}function S(P,R,H,oe,te){const ue=oe.fog,he=te.geometry,le=P.isMeshStandardMaterial?oe.environment:null,ie=(P.isMeshStandardMaterial?t:e).get(P.envMap||le),B=ie&&ie.mapping===Ku?ie.image.height:null,ae=M[P.type];P.precision!==null&&(x=o.getMaxPrecision(P.precision),x!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",x,"instead."));const re=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,N=re!==void 0?re.length:0;let ne=0;he.morphAttributes.position!==void 0&&(ne=1),he.morphAttributes.normal!==void 0&&(ne=2),he.morphAttributes.color!==void 0&&(ne=3);let Ue,Z,de,Se;if(ae){const St=Pi[ae];Ue=St.vertexShader,Z=St.fragmentShader}else Ue=P.vertexShader,Z=P.fragmentShader,d.update(P),de=d.getVertexShaderID(P),Se=d.getFragmentShaderID(P);const ve=n.getRenderTarget(),Te=n.state.buffers.depth.getReversed(),Ie=te.isInstancedMesh===!0,Je=te.isBatchedMesh===!0,Pt=!!P.map,_t=!!P.matcap,It=!!ie,V=!!P.aoMap,Rn=!!P.lightMap,gt=!!P.bumpMap,ft=!!P.normalMap,qe=!!P.displacementMap,Rt=!!P.emissiveMap,We=!!P.metalnessMap,D=!!P.roughnessMap,w=P.anisotropy>0,$=P.clearcoat>0,pe=P.dispersion>0,ge=P.iridescence>0,ce=P.sheen>0,Xe=P.transmission>0,we=w&&!!P.anisotropyMap,Ne=$&&!!P.clearcoatMap,ct=$&&!!P.clearcoatNormalMap,Me=$&&!!P.clearcoatRoughnessMap,Oe=ge&&!!P.iridescenceMap,$e=ge&&!!P.iridescenceThicknessMap,nt=ce&&!!P.sheenColorMap,ke=ce&&!!P.sheenRoughnessMap,dt=!!P.specularMap,st=!!P.specularColorMap,At=!!P.specularIntensityMap,W=Xe&&!!P.transmissionMap,Ae=Xe&&!!P.thicknessMap,se=!!P.gradientMap,fe=!!P.alphaMap,be=P.alphaTest>0,Pe=!!P.alphaHash,ot=!!P.extensions;let Nt=zr;P.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(Nt=n.toneMapping);const en={shaderID:ae,shaderType:P.type,shaderName:P.name,vertexShader:Ue,fragmentShader:Z,defines:P.defines,customVertexShaderID:de,customFragmentShaderID:Se,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:x,batching:Je,batchingColor:Je&&te._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&te.instanceColor!==null,instancingMorph:Ie&&te.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:ve===null?n.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:Do,alphaToCoverage:!!P.alphaToCoverage,map:Pt,matcap:_t,envMap:It,envMapMode:It&&ie.mapping,envMapCubeUVHeight:B,aoMap:V,lightMap:Rn,bumpMap:gt,normalMap:ft,displacementMap:_&&qe,emissiveMap:Rt,normalMapObjectSpace:ft&&P.normalMapType===WM,normalMapTangentSpace:ft&&P.normalMapType===GM,metalnessMap:We,roughnessMap:D,anisotropy:w,anisotropyMap:we,clearcoat:$,clearcoatMap:Ne,clearcoatNormalMap:ct,clearcoatRoughnessMap:Me,dispersion:pe,iridescence:ge,iridescenceMap:Oe,iridescenceThicknessMap:$e,sheen:ce,sheenColorMap:nt,sheenRoughnessMap:ke,specularMap:dt,specularColorMap:st,specularIntensityMap:At,transmission:Xe,transmissionMap:W,thicknessMap:Ae,gradientMap:se,opaque:P.transparent===!1&&P.blending===Eo&&P.alphaToCoverage===!1,alphaMap:fe,alphaTest:be,alphaHash:Pe,combine:P.combine,mapUv:Pt&&E(P.map.channel),aoMapUv:V&&E(P.aoMap.channel),lightMapUv:Rn&&E(P.lightMap.channel),bumpMapUv:gt&&E(P.bumpMap.channel),normalMapUv:ft&&E(P.normalMap.channel),displacementMapUv:qe&&E(P.displacementMap.channel),emissiveMapUv:Rt&&E(P.emissiveMap.channel),metalnessMapUv:We&&E(P.metalnessMap.channel),roughnessMapUv:D&&E(P.roughnessMap.channel),anisotropyMapUv:we&&E(P.anisotropyMap.channel),clearcoatMapUv:Ne&&E(P.clearcoatMap.channel),clearcoatNormalMapUv:ct&&E(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&E(P.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&E(P.iridescenceMap.channel),iridescenceThicknessMapUv:$e&&E(P.iridescenceThicknessMap.channel),sheenColorMapUv:nt&&E(P.sheenColorMap.channel),sheenRoughnessMapUv:ke&&E(P.sheenRoughnessMap.channel),specularMapUv:dt&&E(P.specularMap.channel),specularColorMapUv:st&&E(P.specularColorMap.channel),specularIntensityMapUv:At&&E(P.specularIntensityMap.channel),transmissionMapUv:W&&E(P.transmissionMap.channel),thicknessMapUv:Ae&&E(P.thicknessMap.channel),alphaMapUv:fe&&E(P.alphaMap.channel),vertexTangents:!!he.attributes.tangent&&(ft||w),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,pointsUvs:te.isPoints===!0&&!!he.attributes.uv&&(Pt||fe),fog:!!ue,useFog:P.fog===!0,fogExp2:!!ue&&ue.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:Te,skinning:te.isSkinnedMesh===!0,morphTargets:he.morphAttributes.position!==void 0,morphNormals:he.morphAttributes.normal!==void 0,morphColors:he.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:ne,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:P.dithering,shadowMapEnabled:n.shadowMap.enabled&&H.length>0,shadowMapType:n.shadowMap.type,toneMapping:Nt,decodeVideoTexture:Pt&&P.map.isVideoTexture===!0&&wt.getTransfer(P.map.colorSpace)===bt,decodeVideoTextureEmissive:Rt&&P.emissiveMap.isVideoTexture===!0&&wt.getTransfer(P.emissiveMap.colorSpace)===bt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===Zi,flipSided:P.side===Hn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:ot&&P.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&P.extensions.multiDraw===!0||Je)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return en.vertexUv1s=h.has(1),en.vertexUv2s=h.has(2),en.vertexUv3s=h.has(3),h.clear(),en}function y(P){const R=[];if(P.shaderID?R.push(P.shaderID):(R.push(P.customVertexShaderID),R.push(P.customFragmentShaderID)),P.defines!==void 0)for(const H in P.defines)R.push(H),R.push(P.defines[H]);return P.isRawShaderMaterial===!1&&(L(R,P),b(R,P),R.push(n.outputColorSpace)),R.push(P.customProgramCacheKey),R.join()}function L(P,R){P.push(R.precision),P.push(R.outputColorSpace),P.push(R.envMapMode),P.push(R.envMapCubeUVHeight),P.push(R.mapUv),P.push(R.alphaMapUv),P.push(R.lightMapUv),P.push(R.aoMapUv),P.push(R.bumpMapUv),P.push(R.normalMapUv),P.push(R.displacementMapUv),P.push(R.emissiveMapUv),P.push(R.metalnessMapUv),P.push(R.roughnessMapUv),P.push(R.anisotropyMapUv),P.push(R.clearcoatMapUv),P.push(R.clearcoatNormalMapUv),P.push(R.clearcoatRoughnessMapUv),P.push(R.iridescenceMapUv),P.push(R.iridescenceThicknessMapUv),P.push(R.sheenColorMapUv),P.push(R.sheenRoughnessMapUv),P.push(R.specularMapUv),P.push(R.specularColorMapUv),P.push(R.specularIntensityMapUv),P.push(R.transmissionMapUv),P.push(R.thicknessMapUv),P.push(R.combine),P.push(R.fogExp2),P.push(R.sizeAttenuation),P.push(R.morphTargetsCount),P.push(R.morphAttributeCount),P.push(R.numDirLights),P.push(R.numPointLights),P.push(R.numSpotLights),P.push(R.numSpotLightMaps),P.push(R.numHemiLights),P.push(R.numRectAreaLights),P.push(R.numDirLightShadows),P.push(R.numPointLightShadows),P.push(R.numSpotLightShadows),P.push(R.numSpotLightShadowsWithMaps),P.push(R.numLightProbes),P.push(R.shadowMapType),P.push(R.toneMapping),P.push(R.numClippingPlanes),P.push(R.numClipIntersection),P.push(R.depthPacking)}function b(P,R){c.disableAll(),R.supportsVertexTextures&&c.enable(0),R.instancing&&c.enable(1),R.instancingColor&&c.enable(2),R.instancingMorph&&c.enable(3),R.matcap&&c.enable(4),R.envMap&&c.enable(5),R.normalMapObjectSpace&&c.enable(6),R.normalMapTangentSpace&&c.enable(7),R.clearcoat&&c.enable(8),R.iridescence&&c.enable(9),R.alphaTest&&c.enable(10),R.vertexColors&&c.enable(11),R.vertexAlphas&&c.enable(12),R.vertexUv1s&&c.enable(13),R.vertexUv2s&&c.enable(14),R.vertexUv3s&&c.enable(15),R.vertexTangents&&c.enable(16),R.anisotropy&&c.enable(17),R.alphaHash&&c.enable(18),R.batching&&c.enable(19),R.dispersion&&c.enable(20),R.batchingColor&&c.enable(21),P.push(c.mask),c.disableAll(),R.fog&&c.enable(0),R.useFog&&c.enable(1),R.flatShading&&c.enable(2),R.logarithmicDepthBuffer&&c.enable(3),R.reverseDepthBuffer&&c.enable(4),R.skinning&&c.enable(5),R.morphTargets&&c.enable(6),R.morphNormals&&c.enable(7),R.morphColors&&c.enable(8),R.premultipliedAlpha&&c.enable(9),R.shadowMapEnabled&&c.enable(10),R.doubleSided&&c.enable(11),R.flipSided&&c.enable(12),R.useDepthPacking&&c.enable(13),R.dithering&&c.enable(14),R.transmission&&c.enable(15),R.sheen&&c.enable(16),R.opaque&&c.enable(17),R.pointsUvs&&c.enable(18),R.decodeVideoTexture&&c.enable(19),R.decodeVideoTextureEmissive&&c.enable(20),R.alphaToCoverage&&c.enable(21),P.push(c.mask)}function C(P){const R=M[P.type];let H;if(R){const oe=Pi[R];H=FE.clone(oe.uniforms)}else H=P.uniforms;return H}function O(P,R){let H;for(let oe=0,te=m.length;oe<te;oe++){const ue=m[oe];if(ue.cacheKey===R){H=ue,++H.usedTimes;break}}return H===void 0&&(H=new iR(n,R,P,l),m.push(H)),H}function F(P){if(--P.usedTimes===0){const R=m.indexOf(P);m[R]=m[m.length-1],m.pop(),P.destroy()}}function U(P){d.remove(P)}function z(){d.dispose()}return{getParameters:S,getProgramCacheKey:y,getUniforms:C,acquireProgram:O,releaseProgram:F,releaseShaderCache:U,programs:m,dispose:z}}function lR(){let n=new WeakMap;function e(u){return n.has(u)}function t(u){let c=n.get(u);return c===void 0&&(c={},n.set(u,c)),c}function r(u){n.delete(u)}function o(u,c,d){n.get(u)[c]=d}function l(){n=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function uR(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function q_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function K_(){const n=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(g,_,x,M,E,S){let y=n[e];return y===void 0?(y={id:g.id,object:g,geometry:_,material:x,groupOrder:M,renderOrder:g.renderOrder,z:E,group:S},n[e]=y):(y.id=g.id,y.object=g,y.geometry=_,y.material=x,y.groupOrder=M,y.renderOrder=g.renderOrder,y.z=E,y.group=S),e++,y}function c(g,_,x,M,E,S){const y=u(g,_,x,M,E,S);x.transmission>0?r.push(y):x.transparent===!0?o.push(y):t.push(y)}function d(g,_,x,M,E,S){const y=u(g,_,x,M,E,S);x.transmission>0?r.unshift(y):x.transparent===!0?o.unshift(y):t.unshift(y)}function h(g,_){t.length>1&&t.sort(g||uR),r.length>1&&r.sort(_||q_),o.length>1&&o.sort(_||q_)}function m(){for(let g=e,_=n.length;g<_;g++){const x=n[g];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:c,unshift:d,finish:m,sort:h}}function cR(){let n=new WeakMap;function e(r,o){const l=n.get(r);let u;return l===void 0?(u=new K_,n.set(r,[u])):o>=l.length?(u=new K_,l.push(u)):u=l[o],u}function t(){n=new WeakMap}return{get:e,dispose:t}}function fR(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Q,color:new Ct};break;case"SpotLight":t={position:new Q,direction:new Q,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Q,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Q,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":t={color:new Ct,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return n[e.id]=t,t}}}function dR(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let hR=0;function pR(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function mR(n){const e=new fR,t=dR(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new Q);const o=new Q,l=new Zt,u=new Zt;function c(h){let m=0,g=0,_=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let x=0,M=0,E=0,S=0,y=0,L=0,b=0,C=0,O=0,F=0,U=0;h.sort(pR);for(let P=0,R=h.length;P<R;P++){const H=h[P],oe=H.color,te=H.intensity,ue=H.distance,he=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)m+=oe.r*te,g+=oe.g*te,_+=oe.b*te;else if(H.isLightProbe){for(let le=0;le<9;le++)r.probe[le].addScaledVector(H.sh.coefficients[le],te);U++}else if(H.isDirectionalLight){const le=e.get(H);if(le.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const ie=H.shadow,B=t.get(H);B.shadowIntensity=ie.intensity,B.shadowBias=ie.bias,B.shadowNormalBias=ie.normalBias,B.shadowRadius=ie.radius,B.shadowMapSize=ie.mapSize,r.directionalShadow[x]=B,r.directionalShadowMap[x]=he,r.directionalShadowMatrix[x]=H.shadow.matrix,L++}r.directional[x]=le,x++}else if(H.isSpotLight){const le=e.get(H);le.position.setFromMatrixPosition(H.matrixWorld),le.color.copy(oe).multiplyScalar(te),le.distance=ue,le.coneCos=Math.cos(H.angle),le.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),le.decay=H.decay,r.spot[E]=le;const ie=H.shadow;if(H.map&&(r.spotLightMap[O]=H.map,O++,ie.updateMatrices(H),H.castShadow&&F++),r.spotLightMatrix[E]=ie.matrix,H.castShadow){const B=t.get(H);B.shadowIntensity=ie.intensity,B.shadowBias=ie.bias,B.shadowNormalBias=ie.normalBias,B.shadowRadius=ie.radius,B.shadowMapSize=ie.mapSize,r.spotShadow[E]=B,r.spotShadowMap[E]=he,C++}E++}else if(H.isRectAreaLight){const le=e.get(H);le.color.copy(oe).multiplyScalar(te),le.halfWidth.set(H.width*.5,0,0),le.halfHeight.set(0,H.height*.5,0),r.rectArea[S]=le,S++}else if(H.isPointLight){const le=e.get(H);if(le.color.copy(H.color).multiplyScalar(H.intensity),le.distance=H.distance,le.decay=H.decay,H.castShadow){const ie=H.shadow,B=t.get(H);B.shadowIntensity=ie.intensity,B.shadowBias=ie.bias,B.shadowNormalBias=ie.normalBias,B.shadowRadius=ie.radius,B.shadowMapSize=ie.mapSize,B.shadowCameraNear=ie.camera.near,B.shadowCameraFar=ie.camera.far,r.pointShadow[M]=B,r.pointShadowMap[M]=he,r.pointShadowMatrix[M]=H.shadow.matrix,b++}r.point[M]=le,M++}else if(H.isHemisphereLight){const le=e.get(H);le.skyColor.copy(H.color).multiplyScalar(te),le.groundColor.copy(H.groundColor).multiplyScalar(te),r.hemi[y]=le,y++}}S>0&&(n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ce.LTC_FLOAT_1,r.rectAreaLTC2=Ce.LTC_FLOAT_2):(r.rectAreaLTC1=Ce.LTC_HALF_1,r.rectAreaLTC2=Ce.LTC_HALF_2)),r.ambient[0]=m,r.ambient[1]=g,r.ambient[2]=_;const z=r.hash;(z.directionalLength!==x||z.pointLength!==M||z.spotLength!==E||z.rectAreaLength!==S||z.hemiLength!==y||z.numDirectionalShadows!==L||z.numPointShadows!==b||z.numSpotShadows!==C||z.numSpotMaps!==O||z.numLightProbes!==U)&&(r.directional.length=x,r.spot.length=E,r.rectArea.length=S,r.point.length=M,r.hemi.length=y,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=L,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=C+O-F,r.spotLightMap.length=O,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=U,z.directionalLength=x,z.pointLength=M,z.spotLength=E,z.rectAreaLength=S,z.hemiLength=y,z.numDirectionalShadows=L,z.numPointShadows=b,z.numSpotShadows=C,z.numSpotMaps=O,z.numLightProbes=U,r.version=hR++)}function d(h,m){let g=0,_=0,x=0,M=0,E=0;const S=m.matrixWorldInverse;for(let y=0,L=h.length;y<L;y++){const b=h[y];if(b.isDirectionalLight){const C=r.directional[g];C.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(S),g++}else if(b.isSpotLight){const C=r.spot[x];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(S),C.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(S),x++}else if(b.isRectAreaLight){const C=r.rectArea[M];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(S),u.identity(),l.copy(b.matrixWorld),l.premultiply(S),u.extractRotation(l),C.halfWidth.set(b.width*.5,0,0),C.halfHeight.set(0,b.height*.5,0),C.halfWidth.applyMatrix4(u),C.halfHeight.applyMatrix4(u),M++}else if(b.isPointLight){const C=r.point[_];C.position.setFromMatrixPosition(b.matrixWorld),C.position.applyMatrix4(S),_++}else if(b.isHemisphereLight){const C=r.hemi[E];C.direction.setFromMatrixPosition(b.matrixWorld),C.direction.transformDirection(S),E++}}}return{setup:c,setupView:d,state:r}}function $_(n){const e=new mR(n),t=[],r=[];function o(m){h.camera=m,t.length=0,r.length=0}function l(m){t.push(m)}function u(m){r.push(m)}function c(){e.setup(t)}function d(m){e.setupView(t,m)}const h={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:h,setupLights:c,setupLightsView:d,pushLight:l,pushShadow:u}}function gR(n){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let c;return u===void 0?(c=new $_(n),e.set(o,[c])):l>=u.length?(c=new $_(n),u.push(c)):c=u[l],c}function r(){e=new WeakMap}return{get:t,dispose:r}}const _R=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function yR(n,e,t){let r=new V0;const o=new pt,l=new pt,u=new $t,c=new XE({depthPacking:HM}),d=new jE,h={},m=t.maxTextureSize,g={[Hr]:Hn,[Hn]:Hr,[Zi]:Zi},_=new Gr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:_R,fragmentShader:vR}),x=_.clone();x.defines.HORIZONTAL_PASS=1;const M=new ar;M.setAttribute("position",new Di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new er(M,_),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=g0;let y=this.type;this.render=function(F,U,z){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||F.length===0)return;const P=n.getRenderTarget(),R=n.getActiveCubeFace(),H=n.getActiveMipmapLevel(),oe=n.state;oe.setBlending(Br),oe.buffers.color.setClear(1,1,1,1),oe.buffers.depth.setTest(!0),oe.setScissorTest(!1);const te=y!==$i&&this.type===$i,ue=y===$i&&this.type!==$i;for(let he=0,le=F.length;he<le;he++){const ie=F[he],B=ie.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",ie,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;o.copy(B.mapSize);const ae=B.getFrameExtents();if(o.multiply(ae),l.copy(B.mapSize),(o.x>m||o.y>m)&&(o.x>m&&(l.x=Math.floor(m/ae.x),o.x=l.x*ae.x,B.mapSize.x=l.x),o.y>m&&(l.y=Math.floor(m/ae.y),o.y=l.y*ae.y,B.mapSize.y=l.y)),B.map===null||te===!0||ue===!0){const N=this.type!==$i?{minFilter:Mi,magFilter:Mi}:{};B.map!==null&&B.map.dispose(),B.map=new Ts(o.x,o.y,N),B.map.texture.name=ie.name+".shadowMap",B.camera.updateProjectionMatrix()}n.setRenderTarget(B.map),n.clear();const re=B.getViewportCount();for(let N=0;N<re;N++){const ne=B.getViewport(N);u.set(l.x*ne.x,l.y*ne.y,l.x*ne.z,l.y*ne.w),oe.viewport(u),B.updateMatrices(ie,N),r=B.getFrustum(),C(U,z,B.camera,ie,this.type)}B.isPointLightShadow!==!0&&this.type===$i&&L(B,z),B.needsUpdate=!1}y=this.type,S.needsUpdate=!1,n.setRenderTarget(P,R,H)};function L(F,U){const z=e.update(E);_.defines.VSM_SAMPLES!==F.blurSamples&&(_.defines.VSM_SAMPLES=F.blurSamples,x.defines.VSM_SAMPLES=F.blurSamples,_.needsUpdate=!0,x.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Ts(o.x,o.y)),_.uniforms.shadow_pass.value=F.map.texture,_.uniforms.resolution.value=F.mapSize,_.uniforms.radius.value=F.radius,n.setRenderTarget(F.mapPass),n.clear(),n.renderBufferDirect(U,null,z,_,E,null),x.uniforms.shadow_pass.value=F.mapPass.texture,x.uniforms.resolution.value=F.mapSize,x.uniforms.radius.value=F.radius,n.setRenderTarget(F.map),n.clear(),n.renderBufferDirect(U,null,z,x,E,null)}function b(F,U,z,P){let R=null;const H=z.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(H!==void 0)R=H;else if(R=z.isPointLight===!0?d:c,n.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const oe=R.uuid,te=U.uuid;let ue=h[oe];ue===void 0&&(ue={},h[oe]=ue);let he=ue[te];he===void 0&&(he=R.clone(),ue[te]=he,U.addEventListener("dispose",O)),R=he}if(R.visible=U.visible,R.wireframe=U.wireframe,P===$i?R.side=U.shadowSide!==null?U.shadowSide:U.side:R.side=U.shadowSide!==null?U.shadowSide:g[U.side],R.alphaMap=U.alphaMap,R.alphaTest=U.alphaTest,R.map=U.map,R.clipShadows=U.clipShadows,R.clippingPlanes=U.clippingPlanes,R.clipIntersection=U.clipIntersection,R.displacementMap=U.displacementMap,R.displacementScale=U.displacementScale,R.displacementBias=U.displacementBias,R.wireframeLinewidth=U.wireframeLinewidth,R.linewidth=U.linewidth,z.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const oe=n.properties.get(R);oe.light=z}return R}function C(F,U,z,P,R){if(F.visible===!1)return;if(F.layers.test(U.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&R===$i)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,F.matrixWorld);const te=e.update(F),ue=F.material;if(Array.isArray(ue)){const he=te.groups;for(let le=0,ie=he.length;le<ie;le++){const B=he[le],ae=ue[B.materialIndex];if(ae&&ae.visible){const re=b(F,ae,P,R);F.onBeforeShadow(n,F,U,z,te,re,B),n.renderBufferDirect(z,null,te,re,F,B),F.onAfterShadow(n,F,U,z,te,re,B)}}}else if(ue.visible){const he=b(F,ue,P,R);F.onBeforeShadow(n,F,U,z,te,he,null),n.renderBufferDirect(z,null,te,he,F,null),F.onAfterShadow(n,F,U,z,te,he,null)}}const oe=F.children;for(let te=0,ue=oe.length;te<ue;te++)C(oe[te],U,z,P,R)}function O(F){F.target.removeEventListener("dispose",O);for(const z in h){const P=h[z],R=F.target.uuid;R in P&&(P[R].dispose(),delete P[R])}}}const xR={[bd]:Dd,[Ld]:Nd,[Id]:Fd,[Ao]:Ud,[Dd]:bd,[Nd]:Ld,[Fd]:Id,[Ud]:Ao};function SR(n,e){function t(){let W=!1;const Ae=new $t;let se=null;const fe=new $t(0,0,0,0);return{setMask:function(be){se!==be&&!W&&(n.colorMask(be,be,be,be),se=be)},setLocked:function(be){W=be},setClear:function(be,Pe,ot,Nt,en){en===!0&&(be*=Nt,Pe*=Nt,ot*=Nt),Ae.set(be,Pe,ot,Nt),fe.equals(Ae)===!1&&(n.clearColor(be,Pe,ot,Nt),fe.copy(Ae))},reset:function(){W=!1,se=null,fe.set(-1,0,0,0)}}}function r(){let W=!1,Ae=!1,se=null,fe=null,be=null;return{setReversed:function(Pe){if(Ae!==Pe){const ot=e.get("EXT_clip_control");Ae?ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.ZERO_TO_ONE_EXT):ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.NEGATIVE_ONE_TO_ONE_EXT);const Nt=be;be=null,this.setClear(Nt)}Ae=Pe},getReversed:function(){return Ae},setTest:function(Pe){Pe?ve(n.DEPTH_TEST):Te(n.DEPTH_TEST)},setMask:function(Pe){se!==Pe&&!W&&(n.depthMask(Pe),se=Pe)},setFunc:function(Pe){if(Ae&&(Pe=xR[Pe]),fe!==Pe){switch(Pe){case bd:n.depthFunc(n.NEVER);break;case Dd:n.depthFunc(n.ALWAYS);break;case Ld:n.depthFunc(n.LESS);break;case Ao:n.depthFunc(n.LEQUAL);break;case Id:n.depthFunc(n.EQUAL);break;case Ud:n.depthFunc(n.GEQUAL);break;case Nd:n.depthFunc(n.GREATER);break;case Fd:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}fe=Pe}},setLocked:function(Pe){W=Pe},setClear:function(Pe){be!==Pe&&(Ae&&(Pe=1-Pe),n.clearDepth(Pe),be=Pe)},reset:function(){W=!1,se=null,fe=null,be=null,Ae=!1}}}function o(){let W=!1,Ae=null,se=null,fe=null,be=null,Pe=null,ot=null,Nt=null,en=null;return{setTest:function(St){W||(St?ve(n.STENCIL_TEST):Te(n.STENCIL_TEST))},setMask:function(St){Ae!==St&&!W&&(n.stencilMask(St),Ae=St)},setFunc:function(St,Un,Cn){(se!==St||fe!==Un||be!==Cn)&&(n.stencilFunc(St,Un,Cn),se=St,fe=Un,be=Cn)},setOp:function(St,Un,Cn){(Pe!==St||ot!==Un||Nt!==Cn)&&(n.stencilOp(St,Un,Cn),Pe=St,ot=Un,Nt=Cn)},setLocked:function(St){W=St},setClear:function(St){en!==St&&(n.clearStencil(St),en=St)},reset:function(){W=!1,Ae=null,se=null,fe=null,be=null,Pe=null,ot=null,Nt=null,en=null}}}const l=new t,u=new r,c=new o,d=new WeakMap,h=new WeakMap;let m={},g={},_=new WeakMap,x=[],M=null,E=!1,S=null,y=null,L=null,b=null,C=null,O=null,F=null,U=new Ct(0,0,0),z=0,P=!1,R=null,H=null,oe=null,te=null,ue=null;const he=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let le=!1,ie=0;const B=n.getParameter(n.VERSION);B.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(B)[1]),le=ie>=1):B.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),le=ie>=2);let ae=null,re={};const N=n.getParameter(n.SCISSOR_BOX),ne=n.getParameter(n.VIEWPORT),Ue=new $t().fromArray(N),Z=new $t().fromArray(ne);function de(W,Ae,se,fe){const be=new Uint8Array(4),Pe=n.createTexture();n.bindTexture(W,Pe),n.texParameteri(W,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(W,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ot=0;ot<se;ot++)W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY?n.texImage3D(Ae,0,n.RGBA,1,1,fe,0,n.RGBA,n.UNSIGNED_BYTE,be):n.texImage2D(Ae+ot,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,be);return Pe}const Se={};Se[n.TEXTURE_2D]=de(n.TEXTURE_2D,n.TEXTURE_2D,1),Se[n.TEXTURE_CUBE_MAP]=de(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[n.TEXTURE_2D_ARRAY]=de(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Se[n.TEXTURE_3D]=de(n.TEXTURE_3D,n.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),c.setClear(0),ve(n.DEPTH_TEST),u.setFunc(Ao),gt(!1),ft(Qg),ve(n.CULL_FACE),V(Br);function ve(W){m[W]!==!0&&(n.enable(W),m[W]=!0)}function Te(W){m[W]!==!1&&(n.disable(W),m[W]=!1)}function Ie(W,Ae){return g[W]!==Ae?(n.bindFramebuffer(W,Ae),g[W]=Ae,W===n.DRAW_FRAMEBUFFER&&(g[n.FRAMEBUFFER]=Ae),W===n.FRAMEBUFFER&&(g[n.DRAW_FRAMEBUFFER]=Ae),!0):!1}function Je(W,Ae){let se=x,fe=!1;if(W){se=_.get(Ae),se===void 0&&(se=[],_.set(Ae,se));const be=W.textures;if(se.length!==be.length||se[0]!==n.COLOR_ATTACHMENT0){for(let Pe=0,ot=be.length;Pe<ot;Pe++)se[Pe]=n.COLOR_ATTACHMENT0+Pe;se.length=be.length,fe=!0}}else se[0]!==n.BACK&&(se[0]=n.BACK,fe=!0);fe&&n.drawBuffers(se)}function Pt(W){return M!==W?(n.useProgram(W),M=W,!0):!1}const _t={[_s]:n.FUNC_ADD,[pM]:n.FUNC_SUBTRACT,[mM]:n.FUNC_REVERSE_SUBTRACT};_t[gM]=n.MIN,_t[_M]=n.MAX;const It={[vM]:n.ZERO,[yM]:n.ONE,[xM]:n.SRC_COLOR,[Cd]:n.SRC_ALPHA,[AM]:n.SRC_ALPHA_SATURATE,[TM]:n.DST_COLOR,[MM]:n.DST_ALPHA,[SM]:n.ONE_MINUS_SRC_COLOR,[Pd]:n.ONE_MINUS_SRC_ALPHA,[wM]:n.ONE_MINUS_DST_COLOR,[EM]:n.ONE_MINUS_DST_ALPHA,[RM]:n.CONSTANT_COLOR,[CM]:n.ONE_MINUS_CONSTANT_COLOR,[PM]:n.CONSTANT_ALPHA,[bM]:n.ONE_MINUS_CONSTANT_ALPHA};function V(W,Ae,se,fe,be,Pe,ot,Nt,en,St){if(W===Br){E===!0&&(Te(n.BLEND),E=!1);return}if(E===!1&&(ve(n.BLEND),E=!0),W!==hM){if(W!==S||St!==P){if((y!==_s||C!==_s)&&(n.blendEquation(n.FUNC_ADD),y=_s,C=_s),St)switch(W){case Eo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Jg:n.blendFunc(n.ONE,n.ONE);break;case e_:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case t_:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Eo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Jg:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case e_:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case t_:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}L=null,b=null,O=null,F=null,U.set(0,0,0),z=0,S=W,P=St}return}be=be||Ae,Pe=Pe||se,ot=ot||fe,(Ae!==y||be!==C)&&(n.blendEquationSeparate(_t[Ae],_t[be]),y=Ae,C=be),(se!==L||fe!==b||Pe!==O||ot!==F)&&(n.blendFuncSeparate(It[se],It[fe],It[Pe],It[ot]),L=se,b=fe,O=Pe,F=ot),(Nt.equals(U)===!1||en!==z)&&(n.blendColor(Nt.r,Nt.g,Nt.b,en),U.copy(Nt),z=en),S=W,P=!1}function Rn(W,Ae){W.side===Zi?Te(n.CULL_FACE):ve(n.CULL_FACE);let se=W.side===Hn;Ae&&(se=!se),gt(se),W.blending===Eo&&W.transparent===!1?V(Br):V(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),u.setFunc(W.depthFunc),u.setTest(W.depthTest),u.setMask(W.depthWrite),l.setMask(W.colorWrite);const fe=W.stencilWrite;c.setTest(fe),fe&&(c.setMask(W.stencilWriteMask),c.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),c.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Rt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ve(n.SAMPLE_ALPHA_TO_COVERAGE):Te(n.SAMPLE_ALPHA_TO_COVERAGE)}function gt(W){R!==W&&(W?n.frontFace(n.CW):n.frontFace(n.CCW),R=W)}function ft(W){W!==cM?(ve(n.CULL_FACE),W!==H&&(W===Qg?n.cullFace(n.BACK):W===fM?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Te(n.CULL_FACE),H=W}function qe(W){W!==oe&&(le&&n.lineWidth(W),oe=W)}function Rt(W,Ae,se){W?(ve(n.POLYGON_OFFSET_FILL),(te!==Ae||ue!==se)&&(n.polygonOffset(Ae,se),te=Ae,ue=se)):Te(n.POLYGON_OFFSET_FILL)}function We(W){W?ve(n.SCISSOR_TEST):Te(n.SCISSOR_TEST)}function D(W){W===void 0&&(W=n.TEXTURE0+he-1),ae!==W&&(n.activeTexture(W),ae=W)}function w(W,Ae,se){se===void 0&&(ae===null?se=n.TEXTURE0+he-1:se=ae);let fe=re[se];fe===void 0&&(fe={type:void 0,texture:void 0},re[se]=fe),(fe.type!==W||fe.texture!==Ae)&&(ae!==se&&(n.activeTexture(se),ae=se),n.bindTexture(W,Ae||Se[W]),fe.type=W,fe.texture=Ae)}function $(){const W=re[ae];W!==void 0&&W.type!==void 0&&(n.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function pe(){try{n.compressedTexImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ge(){try{n.compressedTexImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ce(){try{n.texSubImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Xe(){try{n.texSubImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function we(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ne(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ct(){try{n.texStorage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Me(){try{n.texStorage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Oe(){try{n.texImage2D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function $e(){try{n.texImage3D.apply(n,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function nt(W){Ue.equals(W)===!1&&(n.scissor(W.x,W.y,W.z,W.w),Ue.copy(W))}function ke(W){Z.equals(W)===!1&&(n.viewport(W.x,W.y,W.z,W.w),Z.copy(W))}function dt(W,Ae){let se=h.get(Ae);se===void 0&&(se=new WeakMap,h.set(Ae,se));let fe=se.get(W);fe===void 0&&(fe=n.getUniformBlockIndex(Ae,W.name),se.set(W,fe))}function st(W,Ae){const fe=h.get(Ae).get(W);d.get(Ae)!==fe&&(n.uniformBlockBinding(Ae,fe,W.__bindingPointIndex),d.set(Ae,fe))}function At(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),u.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),m={},ae=null,re={},g={},_=new WeakMap,x=[],M=null,E=!1,S=null,y=null,L=null,b=null,C=null,O=null,F=null,U=new Ct(0,0,0),z=0,P=!1,R=null,H=null,oe=null,te=null,ue=null,Ue.set(0,0,n.canvas.width,n.canvas.height),Z.set(0,0,n.canvas.width,n.canvas.height),l.reset(),u.reset(),c.reset()}return{buffers:{color:l,depth:u,stencil:c},enable:ve,disable:Te,bindFramebuffer:Ie,drawBuffers:Je,useProgram:Pt,setBlending:V,setMaterial:Rn,setFlipSided:gt,setCullFace:ft,setLineWidth:qe,setPolygonOffset:Rt,setScissorTest:We,activeTexture:D,bindTexture:w,unbindTexture:$,compressedTexImage2D:pe,compressedTexImage3D:ge,texImage2D:Oe,texImage3D:$e,updateUBOMapping:dt,uniformBlockBinding:st,texStorage2D:ct,texStorage3D:Me,texSubImage2D:ce,texSubImage3D:Xe,compressedTexSubImage2D:we,compressedTexSubImage3D:Ne,scissor:nt,viewport:ke,reset:At}}function MR(n,e,t,r,o,l,u){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new pt,m=new WeakMap;let g;const _=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(D,w){return x?new OffscreenCanvas(D,w):Vu("canvas")}function E(D,w,$){let pe=1;const ge=We(D);if((ge.width>$||ge.height>$)&&(pe=$/Math.max(ge.width,ge.height)),pe<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ce=Math.floor(pe*ge.width),Xe=Math.floor(pe*ge.height);g===void 0&&(g=M(ce,Xe));const we=w?M(ce,Xe):g;return we.width=ce,we.height=Xe,we.getContext("2d").drawImage(D,0,0,ce,Xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+ce+"x"+Xe+")."),we}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),D;return D}function S(D){return D.generateMipmaps}function y(D){n.generateMipmap(D)}function L(D){return D.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?n.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(D,w,$,pe,ge=!1){if(D!==null){if(n[D]!==void 0)return n[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ce=w;if(w===n.RED&&($===n.FLOAT&&(ce=n.R32F),$===n.HALF_FLOAT&&(ce=n.R16F),$===n.UNSIGNED_BYTE&&(ce=n.R8)),w===n.RED_INTEGER&&($===n.UNSIGNED_BYTE&&(ce=n.R8UI),$===n.UNSIGNED_SHORT&&(ce=n.R16UI),$===n.UNSIGNED_INT&&(ce=n.R32UI),$===n.BYTE&&(ce=n.R8I),$===n.SHORT&&(ce=n.R16I),$===n.INT&&(ce=n.R32I)),w===n.RG&&($===n.FLOAT&&(ce=n.RG32F),$===n.HALF_FLOAT&&(ce=n.RG16F),$===n.UNSIGNED_BYTE&&(ce=n.RG8)),w===n.RG_INTEGER&&($===n.UNSIGNED_BYTE&&(ce=n.RG8UI),$===n.UNSIGNED_SHORT&&(ce=n.RG16UI),$===n.UNSIGNED_INT&&(ce=n.RG32UI),$===n.BYTE&&(ce=n.RG8I),$===n.SHORT&&(ce=n.RG16I),$===n.INT&&(ce=n.RG32I)),w===n.RGB_INTEGER&&($===n.UNSIGNED_BYTE&&(ce=n.RGB8UI),$===n.UNSIGNED_SHORT&&(ce=n.RGB16UI),$===n.UNSIGNED_INT&&(ce=n.RGB32UI),$===n.BYTE&&(ce=n.RGB8I),$===n.SHORT&&(ce=n.RGB16I),$===n.INT&&(ce=n.RGB32I)),w===n.RGBA_INTEGER&&($===n.UNSIGNED_BYTE&&(ce=n.RGBA8UI),$===n.UNSIGNED_SHORT&&(ce=n.RGBA16UI),$===n.UNSIGNED_INT&&(ce=n.RGBA32UI),$===n.BYTE&&(ce=n.RGBA8I),$===n.SHORT&&(ce=n.RGBA16I),$===n.INT&&(ce=n.RGBA32I)),w===n.RGB&&$===n.UNSIGNED_INT_5_9_9_9_REV&&(ce=n.RGB9_E5),w===n.RGBA){const Xe=ge?Bu:wt.getTransfer(pe);$===n.FLOAT&&(ce=n.RGBA32F),$===n.HALF_FLOAT&&(ce=n.RGBA16F),$===n.UNSIGNED_BYTE&&(ce=Xe===bt?n.SRGB8_ALPHA8:n.RGBA8),$===n.UNSIGNED_SHORT_4_4_4_4&&(ce=n.RGBA4),$===n.UNSIGNED_SHORT_5_5_5_1&&(ce=n.RGB5_A1)}return(ce===n.R16F||ce===n.R32F||ce===n.RG16F||ce===n.RG32F||ce===n.RGBA16F||ce===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function C(D,w){let $;return D?w===null||w===Es||w===Po?$=n.DEPTH24_STENCIL8:w===Qi?$=n.DEPTH32F_STENCIL8:w===Ia&&($=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Es||w===Po?$=n.DEPTH_COMPONENT24:w===Qi?$=n.DEPTH_COMPONENT32F:w===Ia&&($=n.DEPTH_COMPONENT16),$}function O(D,w){return S(D)===!0||D.isFramebufferTexture&&D.minFilter!==Mi&&D.minFilter!==bi?Math.log2(Math.max(w.width,w.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?w.mipmaps.length:1}function F(D){const w=D.target;w.removeEventListener("dispose",F),z(w),w.isVideoTexture&&m.delete(w)}function U(D){const w=D.target;w.removeEventListener("dispose",U),R(w)}function z(D){const w=r.get(D);if(w.__webglInit===void 0)return;const $=D.source,pe=_.get($);if(pe){const ge=pe[w.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&P(D),Object.keys(pe).length===0&&_.delete($)}r.remove(D)}function P(D){const w=r.get(D);n.deleteTexture(w.__webglTexture);const $=D.source,pe=_.get($);delete pe[w.__cacheKey],u.memory.textures--}function R(D){const w=r.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),r.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(w.__webglFramebuffer[pe]))for(let ge=0;ge<w.__webglFramebuffer[pe].length;ge++)n.deleteFramebuffer(w.__webglFramebuffer[pe][ge]);else n.deleteFramebuffer(w.__webglFramebuffer[pe]);w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer[pe])}else{if(Array.isArray(w.__webglFramebuffer))for(let pe=0;pe<w.__webglFramebuffer.length;pe++)n.deleteFramebuffer(w.__webglFramebuffer[pe]);else n.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&n.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&n.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let pe=0;pe<w.__webglColorRenderbuffer.length;pe++)w.__webglColorRenderbuffer[pe]&&n.deleteRenderbuffer(w.__webglColorRenderbuffer[pe]);w.__webglDepthRenderbuffer&&n.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const $=D.textures;for(let pe=0,ge=$.length;pe<ge;pe++){const ce=r.get($[pe]);ce.__webglTexture&&(n.deleteTexture(ce.__webglTexture),u.memory.textures--),r.remove($[pe])}r.remove(D)}let H=0;function oe(){H=0}function te(){const D=H;return D>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+o.maxTextures),H+=1,D}function ue(D){const w=[];return w.push(D.wrapS),w.push(D.wrapT),w.push(D.wrapR||0),w.push(D.magFilter),w.push(D.minFilter),w.push(D.anisotropy),w.push(D.internalFormat),w.push(D.format),w.push(D.type),w.push(D.generateMipmaps),w.push(D.premultiplyAlpha),w.push(D.flipY),w.push(D.unpackAlignment),w.push(D.colorSpace),w.join()}function he(D,w){const $=r.get(D);if(D.isVideoTexture&&qe(D),D.isRenderTargetTexture===!1&&D.version>0&&$.__version!==D.version){const pe=D.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z($,D,w);return}}t.bindTexture(n.TEXTURE_2D,$.__webglTexture,n.TEXTURE0+w)}function le(D,w){const $=r.get(D);if(D.version>0&&$.__version!==D.version){Z($,D,w);return}t.bindTexture(n.TEXTURE_2D_ARRAY,$.__webglTexture,n.TEXTURE0+w)}function ie(D,w){const $=r.get(D);if(D.version>0&&$.__version!==D.version){Z($,D,w);return}t.bindTexture(n.TEXTURE_3D,$.__webglTexture,n.TEXTURE0+w)}function B(D,w){const $=r.get(D);if(D.version>0&&$.__version!==D.version){de($,D,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture,n.TEXTURE0+w)}const ae={[Bd]:n.REPEAT,[ys]:n.CLAMP_TO_EDGE,[zd]:n.MIRRORED_REPEAT},re={[Mi]:n.NEAREST,[zM]:n.NEAREST_MIPMAP_NEAREST,[nu]:n.NEAREST_MIPMAP_LINEAR,[bi]:n.LINEAR,[Vf]:n.LINEAR_MIPMAP_NEAREST,[xs]:n.LINEAR_MIPMAP_LINEAR},N={[XM]:n.NEVER,[ZM]:n.ALWAYS,[jM]:n.LESS,[P0]:n.LEQUAL,[YM]:n.EQUAL,[$M]:n.GEQUAL,[qM]:n.GREATER,[KM]:n.NOTEQUAL};function ne(D,w){if(w.type===Qi&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===bi||w.magFilter===Vf||w.magFilter===nu||w.magFilter===xs||w.minFilter===bi||w.minFilter===Vf||w.minFilter===nu||w.minFilter===xs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(D,n.TEXTURE_WRAP_S,ae[w.wrapS]),n.texParameteri(D,n.TEXTURE_WRAP_T,ae[w.wrapT]),(D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY)&&n.texParameteri(D,n.TEXTURE_WRAP_R,ae[w.wrapR]),n.texParameteri(D,n.TEXTURE_MAG_FILTER,re[w.magFilter]),n.texParameteri(D,n.TEXTURE_MIN_FILTER,re[w.minFilter]),w.compareFunction&&(n.texParameteri(D,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(D,n.TEXTURE_COMPARE_FUNC,N[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Mi||w.minFilter!==nu&&w.minFilter!==xs||w.type===Qi&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||r.get(w).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");n.texParameterf(D,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,o.getMaxAnisotropy())),r.get(w).__currentAnisotropy=w.anisotropy}}}function Ue(D,w){let $=!1;D.__webglInit===void 0&&(D.__webglInit=!0,w.addEventListener("dispose",F));const pe=w.source;let ge=_.get(pe);ge===void 0&&(ge={},_.set(pe,ge));const ce=ue(w);if(ce!==D.__cacheKey){ge[ce]===void 0&&(ge[ce]={texture:n.createTexture(),usedTimes:0},u.memory.textures++,$=!0),ge[ce].usedTimes++;const Xe=ge[D.__cacheKey];Xe!==void 0&&(ge[D.__cacheKey].usedTimes--,Xe.usedTimes===0&&P(w)),D.__cacheKey=ce,D.__webglTexture=ge[ce].texture}return $}function Z(D,w,$){let pe=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(pe=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(pe=n.TEXTURE_3D);const ge=Ue(D,w),ce=w.source;t.bindTexture(pe,D.__webglTexture,n.TEXTURE0+$);const Xe=r.get(ce);if(ce.version!==Xe.__version||ge===!0){t.activeTexture(n.TEXTURE0+$);const we=wt.getPrimaries(wt.workingColorSpace),Ne=w.colorSpace===kr?null:wt.getPrimaries(w.colorSpace),ct=w.colorSpace===kr||we===Ne?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);let Me=E(w.image,!1,o.maxTextureSize);Me=Rt(w,Me);const Oe=l.convert(w.format,w.colorSpace),$e=l.convert(w.type);let nt=b(w.internalFormat,Oe,$e,w.colorSpace,w.isVideoTexture);ne(pe,w);let ke;const dt=w.mipmaps,st=w.isVideoTexture!==!0,At=Xe.__version===void 0||ge===!0,W=ce.dataReady,Ae=O(w,Me);if(w.isDepthTexture)nt=C(w.format===bo,w.type),At&&(st?t.texStorage2D(n.TEXTURE_2D,1,nt,Me.width,Me.height):t.texImage2D(n.TEXTURE_2D,0,nt,Me.width,Me.height,0,Oe,$e,null));else if(w.isDataTexture)if(dt.length>0){st&&At&&t.texStorage2D(n.TEXTURE_2D,Ae,nt,dt[0].width,dt[0].height);for(let se=0,fe=dt.length;se<fe;se++)ke=dt[se],st?W&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,ke.width,ke.height,Oe,$e,ke.data):t.texImage2D(n.TEXTURE_2D,se,nt,ke.width,ke.height,0,Oe,$e,ke.data);w.generateMipmaps=!1}else st?(At&&t.texStorage2D(n.TEXTURE_2D,Ae,nt,Me.width,Me.height),W&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Me.width,Me.height,Oe,$e,Me.data)):t.texImage2D(n.TEXTURE_2D,0,nt,Me.width,Me.height,0,Oe,$e,Me.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){st&&At&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ae,nt,dt[0].width,dt[0].height,Me.depth);for(let se=0,fe=dt.length;se<fe;se++)if(ke=dt[se],w.format!==Si)if(Oe!==null)if(st){if(W)if(w.layerUpdates.size>0){const be=A_(ke.width,ke.height,w.format,w.type);for(const Pe of w.layerUpdates){const ot=ke.data.subarray(Pe*be/ke.data.BYTES_PER_ELEMENT,(Pe+1)*be/ke.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,Pe,ke.width,ke.height,1,Oe,ot)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,ke.width,ke.height,Me.depth,Oe,ke.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,se,nt,ke.width,ke.height,Me.depth,0,ke.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?W&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,ke.width,ke.height,Me.depth,Oe,$e,ke.data):t.texImage3D(n.TEXTURE_2D_ARRAY,se,nt,ke.width,ke.height,Me.depth,0,Oe,$e,ke.data)}else{st&&At&&t.texStorage2D(n.TEXTURE_2D,Ae,nt,dt[0].width,dt[0].height);for(let se=0,fe=dt.length;se<fe;se++)ke=dt[se],w.format!==Si?Oe!==null?st?W&&t.compressedTexSubImage2D(n.TEXTURE_2D,se,0,0,ke.width,ke.height,Oe,ke.data):t.compressedTexImage2D(n.TEXTURE_2D,se,nt,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?W&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,ke.width,ke.height,Oe,$e,ke.data):t.texImage2D(n.TEXTURE_2D,se,nt,ke.width,ke.height,0,Oe,$e,ke.data)}else if(w.isDataArrayTexture)if(st){if(At&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ae,nt,Me.width,Me.height,Me.depth),W)if(w.layerUpdates.size>0){const se=A_(Me.width,Me.height,w.format,w.type);for(const fe of w.layerUpdates){const be=Me.data.subarray(fe*se/Me.data.BYTES_PER_ELEMENT,(fe+1)*se/Me.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,fe,Me.width,Me.height,1,Oe,$e,be)}w.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Oe,$e,Me.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,nt,Me.width,Me.height,Me.depth,0,Oe,$e,Me.data);else if(w.isData3DTexture)st?(At&&t.texStorage3D(n.TEXTURE_3D,Ae,nt,Me.width,Me.height,Me.depth),W&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Oe,$e,Me.data)):t.texImage3D(n.TEXTURE_3D,0,nt,Me.width,Me.height,Me.depth,0,Oe,$e,Me.data);else if(w.isFramebufferTexture){if(At)if(st)t.texStorage2D(n.TEXTURE_2D,Ae,nt,Me.width,Me.height);else{let se=Me.width,fe=Me.height;for(let be=0;be<Ae;be++)t.texImage2D(n.TEXTURE_2D,be,nt,se,fe,0,Oe,$e,null),se>>=1,fe>>=1}}else if(dt.length>0){if(st&&At){const se=We(dt[0]);t.texStorage2D(n.TEXTURE_2D,Ae,nt,se.width,se.height)}for(let se=0,fe=dt.length;se<fe;se++)ke=dt[se],st?W&&t.texSubImage2D(n.TEXTURE_2D,se,0,0,Oe,$e,ke):t.texImage2D(n.TEXTURE_2D,se,nt,Oe,$e,ke);w.generateMipmaps=!1}else if(st){if(At){const se=We(Me);t.texStorage2D(n.TEXTURE_2D,Ae,nt,se.width,se.height)}W&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Oe,$e,Me)}else t.texImage2D(n.TEXTURE_2D,0,nt,Oe,$e,Me);S(w)&&y(pe),Xe.__version=ce.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function de(D,w,$){if(w.image.length!==6)return;const pe=Ue(D,w),ge=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+$);const ce=r.get(ge);if(ge.version!==ce.__version||pe===!0){t.activeTexture(n.TEXTURE0+$);const Xe=wt.getPrimaries(wt.workingColorSpace),we=w.colorSpace===kr?null:wt.getPrimaries(w.colorSpace),Ne=w.colorSpace===kr||Xe===we?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);const ct=w.isCompressedTexture||w.image[0].isCompressedTexture,Me=w.image[0]&&w.image[0].isDataTexture,Oe=[];for(let fe=0;fe<6;fe++)!ct&&!Me?Oe[fe]=E(w.image[fe],!0,o.maxCubemapSize):Oe[fe]=Me?w.image[fe].image:w.image[fe],Oe[fe]=Rt(w,Oe[fe]);const $e=Oe[0],nt=l.convert(w.format,w.colorSpace),ke=l.convert(w.type),dt=b(w.internalFormat,nt,ke,w.colorSpace),st=w.isVideoTexture!==!0,At=ce.__version===void 0||pe===!0,W=ge.dataReady;let Ae=O(w,$e);ne(n.TEXTURE_CUBE_MAP,w);let se;if(ct){st&&At&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ae,dt,$e.width,$e.height);for(let fe=0;fe<6;fe++){se=Oe[fe].mipmaps;for(let be=0;be<se.length;be++){const Pe=se[be];w.format!==Si?nt!==null?st?W&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,be,0,0,Pe.width,Pe.height,nt,Pe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,be,dt,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):st?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,be,0,0,Pe.width,Pe.height,nt,ke,Pe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,be,dt,Pe.width,Pe.height,0,nt,ke,Pe.data)}}}else{if(se=w.mipmaps,st&&At){se.length>0&&Ae++;const fe=We(Oe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ae,dt,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(Me){st?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Oe[fe].width,Oe[fe].height,nt,ke,Oe[fe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,dt,Oe[fe].width,Oe[fe].height,0,nt,ke,Oe[fe].data);for(let be=0;be<se.length;be++){const ot=se[be].image[fe].image;st?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,be+1,0,0,ot.width,ot.height,nt,ke,ot.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,be+1,dt,ot.width,ot.height,0,nt,ke,ot.data)}}else{st?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,nt,ke,Oe[fe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,dt,nt,ke,Oe[fe]);for(let be=0;be<se.length;be++){const Pe=se[be];st?W&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,be+1,0,0,nt,ke,Pe.image[fe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,be+1,dt,nt,ke,Pe.image[fe])}}}S(w)&&y(n.TEXTURE_CUBE_MAP),ce.__version=ge.version,w.onUpdate&&w.onUpdate(w)}D.__version=w.version}function Se(D,w,$,pe,ge,ce){const Xe=l.convert($.format,$.colorSpace),we=l.convert($.type),Ne=b($.internalFormat,Xe,we,$.colorSpace),ct=r.get(w),Me=r.get($);if(Me.__renderTarget=w,!ct.__hasExternalTextures){const Oe=Math.max(1,w.width>>ce),$e=Math.max(1,w.height>>ce);ge===n.TEXTURE_3D||ge===n.TEXTURE_2D_ARRAY?t.texImage3D(ge,ce,Ne,Oe,$e,w.depth,0,Xe,we,null):t.texImage2D(ge,ce,Ne,Oe,$e,0,Xe,we,null)}t.bindFramebuffer(n.FRAMEBUFFER,D),ft(w)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,pe,ge,Me.__webglTexture,0,gt(w)):(ge===n.TEXTURE_2D||ge>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,pe,ge,Me.__webglTexture,ce),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ve(D,w,$){if(n.bindRenderbuffer(n.RENDERBUFFER,D),w.depthBuffer){const pe=w.depthTexture,ge=pe&&pe.isDepthTexture?pe.type:null,ce=C(w.stencilBuffer,ge),Xe=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,we=gt(w);ft(w)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,we,ce,w.width,w.height):$?n.renderbufferStorageMultisample(n.RENDERBUFFER,we,ce,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,ce,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Xe,n.RENDERBUFFER,D)}else{const pe=w.textures;for(let ge=0;ge<pe.length;ge++){const ce=pe[ge],Xe=l.convert(ce.format,ce.colorSpace),we=l.convert(ce.type),Ne=b(ce.internalFormat,Xe,we,ce.colorSpace),ct=gt(w);$&&ft(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ct,Ne,w.width,w.height):ft(w)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ct,Ne,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,Ne,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Te(D,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,D),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=r.get(w.depthTexture);pe.__renderTarget=w,(!pe.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),he(w.depthTexture,0);const ge=pe.__webglTexture,ce=gt(w);if(w.depthTexture.format===To)ft(w)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ge,0,ce):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ge,0);else if(w.depthTexture.format===bo)ft(w)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ge,0,ce):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function Ie(D){const w=r.get(D),$=D.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==D.depthTexture){const pe=D.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),pe){const ge=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,pe.removeEventListener("dispose",ge)};pe.addEventListener("dispose",ge),w.__depthDisposeCallback=ge}w.__boundDepthTexture=pe}if(D.depthTexture&&!w.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");Te(w.__webglFramebuffer,D)}else if($){w.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[pe]),w.__webglDepthbuffer[pe]===void 0)w.__webglDepthbuffer[pe]=n.createRenderbuffer(),ve(w.__webglDepthbuffer[pe],D,!1);else{const ge=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=w.__webglDepthbuffer[pe];n.bindRenderbuffer(n.RENDERBUFFER,ce),n.framebufferRenderbuffer(n.FRAMEBUFFER,ge,n.RENDERBUFFER,ce)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=n.createRenderbuffer(),ve(w.__webglDepthbuffer,D,!1);else{const pe=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ge=w.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ge),n.framebufferRenderbuffer(n.FRAMEBUFFER,pe,n.RENDERBUFFER,ge)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Je(D,w,$){const pe=r.get(D);w!==void 0&&Se(pe.__webglFramebuffer,D,D.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),$!==void 0&&Ie(D)}function Pt(D){const w=D.texture,$=r.get(D),pe=r.get(w);D.addEventListener("dispose",U);const ge=D.textures,ce=D.isWebGLCubeRenderTarget===!0,Xe=ge.length>1;if(Xe||(pe.__webglTexture===void 0&&(pe.__webglTexture=n.createTexture()),pe.__version=w.version,u.memory.textures++),ce){$.__webglFramebuffer=[];for(let we=0;we<6;we++)if(w.mipmaps&&w.mipmaps.length>0){$.__webglFramebuffer[we]=[];for(let Ne=0;Ne<w.mipmaps.length;Ne++)$.__webglFramebuffer[we][Ne]=n.createFramebuffer()}else $.__webglFramebuffer[we]=n.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){$.__webglFramebuffer=[];for(let we=0;we<w.mipmaps.length;we++)$.__webglFramebuffer[we]=n.createFramebuffer()}else $.__webglFramebuffer=n.createFramebuffer();if(Xe)for(let we=0,Ne=ge.length;we<Ne;we++){const ct=r.get(ge[we]);ct.__webglTexture===void 0&&(ct.__webglTexture=n.createTexture(),u.memory.textures++)}if(D.samples>0&&ft(D)===!1){$.__webglMultisampledFramebuffer=n.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let we=0;we<ge.length;we++){const Ne=ge[we];$.__webglColorRenderbuffer[we]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,$.__webglColorRenderbuffer[we]);const ct=l.convert(Ne.format,Ne.colorSpace),Me=l.convert(Ne.type),Oe=b(Ne.internalFormat,ct,Me,Ne.colorSpace,D.isXRRenderTarget===!0),$e=gt(D);n.renderbufferStorageMultisample(n.RENDERBUFFER,$e,Oe,D.width,D.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.RENDERBUFFER,$.__webglColorRenderbuffer[we])}n.bindRenderbuffer(n.RENDERBUFFER,null),D.depthBuffer&&($.__webglDepthRenderbuffer=n.createRenderbuffer(),ve($.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ce){t.bindTexture(n.TEXTURE_CUBE_MAP,pe.__webglTexture),ne(n.TEXTURE_CUBE_MAP,w);for(let we=0;we<6;we++)if(w.mipmaps&&w.mipmaps.length>0)for(let Ne=0;Ne<w.mipmaps.length;Ne++)Se($.__webglFramebuffer[we][Ne],D,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ne);else Se($.__webglFramebuffer[we],D,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);S(w)&&y(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Xe){for(let we=0,Ne=ge.length;we<Ne;we++){const ct=ge[we],Me=r.get(ct);t.bindTexture(n.TEXTURE_2D,Me.__webglTexture),ne(n.TEXTURE_2D,ct),Se($.__webglFramebuffer,D,ct,n.COLOR_ATTACHMENT0+we,n.TEXTURE_2D,0),S(ct)&&y(n.TEXTURE_2D)}t.unbindTexture()}else{let we=n.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(we=D.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(we,pe.__webglTexture),ne(we,w),w.mipmaps&&w.mipmaps.length>0)for(let Ne=0;Ne<w.mipmaps.length;Ne++)Se($.__webglFramebuffer[Ne],D,w,n.COLOR_ATTACHMENT0,we,Ne);else Se($.__webglFramebuffer,D,w,n.COLOR_ATTACHMENT0,we,0);S(w)&&y(we),t.unbindTexture()}D.depthBuffer&&Ie(D)}function _t(D){const w=D.textures;for(let $=0,pe=w.length;$<pe;$++){const ge=w[$];if(S(ge)){const ce=L(D),Xe=r.get(ge).__webglTexture;t.bindTexture(ce,Xe),y(ce),t.unbindTexture()}}}const It=[],V=[];function Rn(D){if(D.samples>0){if(ft(D)===!1){const w=D.textures,$=D.width,pe=D.height;let ge=n.COLOR_BUFFER_BIT;const ce=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Xe=r.get(D),we=w.length>1;if(we)for(let Ne=0;Ne<w.length;Ne++)t.bindFramebuffer(n.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Xe.__webglFramebuffer);for(let Ne=0;Ne<w.length;Ne++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ge|=n.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ge|=n.STENCIL_BUFFER_BIT)),we){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Xe.__webglColorRenderbuffer[Ne]);const ct=r.get(w[Ne]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ct,0)}n.blitFramebuffer(0,0,$,pe,0,0,$,pe,ge,n.NEAREST),d===!0&&(It.length=0,V.length=0,It.push(n.COLOR_ATTACHMENT0+Ne),D.depthBuffer&&D.resolveDepthBuffer===!1&&(It.push(ce),V.push(ce),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,V)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,It))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),we)for(let Ne=0;Ne<w.length;Ne++){t.bindFramebuffer(n.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.RENDERBUFFER,Xe.__webglColorRenderbuffer[Ne]);const ct=r.get(w[Ne]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Xe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ne,n.TEXTURE_2D,ct,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&d){const w=D.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[w])}}}function gt(D){return Math.min(o.maxSamples,D.samples)}function ft(D){const w=r.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function qe(D){const w=u.render.frame;m.get(D)!==w&&(m.set(D,w),D.update())}function Rt(D,w){const $=D.colorSpace,pe=D.format,ge=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||$!==Do&&$!==kr&&(wt.getTransfer($)===bt?(pe!==Si||ge!==rr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),w}function We(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(h.width=D.naturalWidth||D.width,h.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(h.width=D.displayWidth,h.height=D.displayHeight):(h.width=D.width,h.height=D.height),h}this.allocateTextureUnit=te,this.resetTextureUnits=oe,this.setTexture2D=he,this.setTexture2DArray=le,this.setTexture3D=ie,this.setTextureCube=B,this.rebindTextures=Je,this.setupRenderTarget=Pt,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=Rn,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=ft}function ER(n,e){function t(r,o=kr){let l;const u=wt.getTransfer(o);if(r===rr)return n.UNSIGNED_BYTE;if(r===Nh)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Fh)return n.UNSIGNED_SHORT_5_5_5_1;if(r===S0)return n.UNSIGNED_INT_5_9_9_9_REV;if(r===y0)return n.BYTE;if(r===x0)return n.SHORT;if(r===Ia)return n.UNSIGNED_SHORT;if(r===Uh)return n.INT;if(r===Es)return n.UNSIGNED_INT;if(r===Qi)return n.FLOAT;if(r===za)return n.HALF_FLOAT;if(r===M0)return n.ALPHA;if(r===E0)return n.RGB;if(r===Si)return n.RGBA;if(r===T0)return n.LUMINANCE;if(r===w0)return n.LUMINANCE_ALPHA;if(r===To)return n.DEPTH_COMPONENT;if(r===bo)return n.DEPTH_STENCIL;if(r===A0)return n.RED;if(r===Oh)return n.RED_INTEGER;if(r===R0)return n.RG;if(r===kh)return n.RG_INTEGER;if(r===Bh)return n.RGBA_INTEGER;if(r===bu||r===Du||r===Lu||r===Iu)if(u===bt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===bu)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Du)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Lu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Iu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===bu)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Du)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Lu)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Iu)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Vd||r===Hd||r===Gd||r===Wd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Vd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Hd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Gd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Wd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Xd||r===jd||r===Yd)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Xd||r===jd)return u===bt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Yd)return u===bt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===qd||r===Kd||r===$d||r===Zd||r===Qd||r===Jd||r===eh||r===th||r===nh||r===ih||r===rh||r===sh||r===oh||r===ah)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===qd)return u===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Kd)return u===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===$d)return u===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Zd)return u===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Qd)return u===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Jd)return u===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===eh)return u===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===th)return u===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===nh)return u===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ih)return u===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===rh)return u===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===sh)return u===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===oh)return u===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ah)return u===bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Uu||r===lh||r===uh)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Uu)return u===bt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===lh)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===uh)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===C0||r===ch||r===fh||r===dh)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Uu)return l.COMPRESSED_RED_RGTC1_EXT;if(r===ch)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===fh)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===dh)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Po?n.UNSIGNED_INT_24_8:n[r]!==void 0?n[r]:null}return{convert:t}}const TR={type:"move"};class pd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const c=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const E of e.hand.values()){const S=t.getJointPose(E,r),y=this._getHandJoint(h,E);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const m=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],_=m.position.distanceTo(g.position),x=.02,M=.005;h.inputState.pinching&&_>x+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&_<=x-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1));c!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(TR)))}return c!==null&&(c.visible=o!==null),d!==null&&(d.visible=l!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Mu;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const wR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,AR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class RR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const o=new Gn,l=e.properties.get(o);l.__webglTexture=t.texture,(t.depthNear!==r.depthNear||t.depthFar!==r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Gr({vertexShader:wR,fragmentShader:AR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new er(new Zu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class CR extends As{constructor(e,t){super();const r=this;let o=null,l=1,u=null,c="local-floor",d=1,h=null,m=null,g=null,_=null,x=null,M=null;const E=new RR,S=t.getContextAttributes();let y=null,L=null;const b=[],C=[],O=new pt;let F=null;const U=new ui;U.viewport=new $t;const z=new ui;z.viewport=new $t;const P=[U,z],R=new qE;let H=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let de=b[Z];return de===void 0&&(de=new pd,b[Z]=de),de.getTargetRaySpace()},this.getControllerGrip=function(Z){let de=b[Z];return de===void 0&&(de=new pd,b[Z]=de),de.getGripSpace()},this.getHand=function(Z){let de=b[Z];return de===void 0&&(de=new pd,b[Z]=de),de.getHandSpace()};function te(Z){const de=C.indexOf(Z.inputSource);if(de===-1)return;const Se=b[de];Se!==void 0&&(Se.update(Z.inputSource,Z.frame,h||u),Se.dispatchEvent({type:Z.type,data:Z.inputSource}))}function ue(){o.removeEventListener("select",te),o.removeEventListener("selectstart",te),o.removeEventListener("selectend",te),o.removeEventListener("squeeze",te),o.removeEventListener("squeezestart",te),o.removeEventListener("squeezeend",te),o.removeEventListener("end",ue),o.removeEventListener("inputsourceschange",he);for(let Z=0;Z<b.length;Z++){const de=C[Z];de!==null&&(C[Z]=null,b[Z].disconnect(de))}H=null,oe=null,E.reset(),e.setRenderTarget(y),x=null,_=null,g=null,o=null,L=null,Ue.stop(),r.isPresenting=!1,e.setPixelRatio(F),e.setSize(O.width,O.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){l=Z,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){c=Z,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(Z){h=Z},this.getBaseLayer=function(){return _!==null?_:x},this.getBinding=function(){return g},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(Z){if(o=Z,o!==null){if(y=e.getRenderTarget(),o.addEventListener("select",te),o.addEventListener("selectstart",te),o.addEventListener("selectend",te),o.addEventListener("squeeze",te),o.addEventListener("squeezestart",te),o.addEventListener("squeezeend",te),o.addEventListener("end",ue),o.addEventListener("inputsourceschange",he),S.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(O),o.enabledFeatures!==void 0&&o.enabledFeatures.includes("layers")){let Se=null,ve=null,Te=null;S.depth&&(Te=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=S.stencil?bo:To,ve=S.stencil?Po:Es);const Ie={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:l};g=new XRWebGLBinding(o,t),_=g.createProjectionLayer(Ie),o.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),L=new Ts(_.textureWidth,_.textureHeight,{format:Si,type:rr,depthTexture:new G0(_.textureWidth,_.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1})}else{const Se={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:l};x=new XRWebGLLayer(o,t,Se),o.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),L=new Ts(x.framebufferWidth,x.framebufferHeight,{format:Si,type:rr,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}L.isXRRenderTarget=!0,this.setFoveation(d),h=null,u=await o.requestReferenceSpace(c),Ue.setContext(o),Ue.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function he(Z){for(let de=0;de<Z.removed.length;de++){const Se=Z.removed[de],ve=C.indexOf(Se);ve>=0&&(C[ve]=null,b[ve].disconnect(Se))}for(let de=0;de<Z.added.length;de++){const Se=Z.added[de];let ve=C.indexOf(Se);if(ve===-1){for(let Ie=0;Ie<b.length;Ie++)if(Ie>=C.length){C.push(Se),ve=Ie;break}else if(C[Ie]===null){C[Ie]=Se,ve=Ie;break}if(ve===-1)break}const Te=b[ve];Te&&Te.connect(Se)}}const le=new Q,ie=new Q;function B(Z,de,Se){le.setFromMatrixPosition(de.matrixWorld),ie.setFromMatrixPosition(Se.matrixWorld);const ve=le.distanceTo(ie),Te=de.projectionMatrix.elements,Ie=Se.projectionMatrix.elements,Je=Te[14]/(Te[10]-1),Pt=Te[14]/(Te[10]+1),_t=(Te[9]+1)/Te[5],It=(Te[9]-1)/Te[5],V=(Te[8]-1)/Te[0],Rn=(Ie[8]+1)/Ie[0],gt=Je*V,ft=Je*Rn,qe=ve/(-V+Rn),Rt=qe*-V;if(de.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Rt),Z.translateZ(qe),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Te[10]===-1)Z.projectionMatrix.copy(de.projectionMatrix),Z.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const We=Je+qe,D=Pt+qe,w=gt-Rt,$=ft+(ve-Rt),pe=_t*Pt/D*We,ge=It*Pt/D*We;Z.projectionMatrix.makePerspective(w,$,pe,ge,We,D),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function ae(Z,de){de===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(de.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(o===null)return;let de=Z.near,Se=Z.far;E.texture!==null&&(E.depthNear>0&&(de=E.depthNear),E.depthFar>0&&(Se=E.depthFar)),R.near=z.near=U.near=de,R.far=z.far=U.far=Se,(H!==R.near||oe!==R.far)&&(o.updateRenderState({depthNear:R.near,depthFar:R.far}),H=R.near,oe=R.far),U.layers.mask=Z.layers.mask|2,z.layers.mask=Z.layers.mask|4,R.layers.mask=U.layers.mask|z.layers.mask;const ve=Z.parent,Te=R.cameras;ae(R,ve);for(let Ie=0;Ie<Te.length;Ie++)ae(Te[Ie],ve);Te.length===2?B(R,U,z):R.projectionMatrix.copy(U.projectionMatrix),re(Z,R,ve)};function re(Z,de,Se){Se===null?Z.matrix.copy(de.matrixWorld):(Z.matrix.copy(Se.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(de.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(de.projectionMatrix),Z.projectionMatrixInverse.copy(de.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Ua*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(_===null&&x===null))return d},this.setFoveation=function(Z){d=Z,_!==null&&(_.fixedFoveation=Z),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=Z)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(R)};let N=null;function ne(Z,de){if(m=de.getViewerPose(h||u),M=de,m!==null){const Se=m.views;x!==null&&(e.setRenderTargetFramebuffer(L,x.framebuffer),e.setRenderTarget(L));let ve=!1;Se.length!==R.cameras.length&&(R.cameras.length=0,ve=!0);for(let Ie=0;Ie<Se.length;Ie++){const Je=Se[Ie];let Pt=null;if(x!==null)Pt=x.getViewport(Je);else{const It=g.getViewSubImage(_,Je);Pt=It.viewport,Ie===0&&(e.setRenderTargetTextures(L,It.colorTexture,_.ignoreDepthValues?void 0:It.depthStencilTexture),e.setRenderTarget(L))}let _t=P[Ie];_t===void 0&&(_t=new ui,_t.layers.enable(Ie),_t.viewport=new $t,P[Ie]=_t),_t.matrix.fromArray(Je.transform.matrix),_t.matrix.decompose(_t.position,_t.quaternion,_t.scale),_t.projectionMatrix.fromArray(Je.projectionMatrix),_t.projectionMatrixInverse.copy(_t.projectionMatrix).invert(),_t.viewport.set(Pt.x,Pt.y,Pt.width,Pt.height),Ie===0&&(R.matrix.copy(_t.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),ve===!0&&R.cameras.push(_t)}const Te=o.enabledFeatures;if(Te&&Te.includes("depth-sensing")){const Ie=g.getDepthInformation(Se[0]);Ie&&Ie.isValid&&Ie.texture&&E.init(e,Ie,o.renderState)}}for(let Se=0;Se<b.length;Se++){const ve=C[Se],Te=b[Se];ve!==null&&Te!==void 0&&Te.update(ve,de,h||u)}N&&N(Z,de),de.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:de}),M=null}const Ue=new W0;Ue.setAnimationLoop(ne),this.setAnimationLoop=function(Z){N=Z},this.dispose=function(){}}}const ds=new sr,PR=new Zt;function bR(n,e){function t(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function r(S,y){y.color.getRGB(S.fogColor.value,k0(n)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function o(S,y,L,b,C){y.isMeshBasicMaterial||y.isMeshLambertMaterial?l(S,y):y.isMeshToonMaterial?(l(S,y),g(S,y)):y.isMeshPhongMaterial?(l(S,y),m(S,y)):y.isMeshStandardMaterial?(l(S,y),_(S,y),y.isMeshPhysicalMaterial&&x(S,y,C)):y.isMeshMatcapMaterial?(l(S,y),M(S,y)):y.isMeshDepthMaterial?l(S,y):y.isMeshDistanceMaterial?(l(S,y),E(S,y)):y.isMeshNormalMaterial?l(S,y):y.isLineBasicMaterial?(u(S,y),y.isLineDashedMaterial&&c(S,y)):y.isPointsMaterial?d(S,y,L,b):y.isSpriteMaterial?h(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function l(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,t(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===Hn&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,t(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===Hn&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,t(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,t(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const L=e.get(y),b=L.envMap,C=L.envMapRotation;b&&(S.envMap.value=b,ds.copy(C),ds.x*=-1,ds.y*=-1,ds.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ds.y*=-1,ds.z*=-1),S.envMapRotation.value.setFromMatrix4(PR.makeRotationFromEuler(ds)),S.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,S.aoMapTransform))}function u(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform))}function c(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function d(S,y,L,b){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*L,S.scale.value=b*.5,y.map&&(S.map.value=y.map,t(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function h(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function m(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function g(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function _(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function x(S,y,L){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Hn&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=L.texture,S.transmissionSamplerSize.value.set(L.width,L.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,y){y.matcap&&(S.matcap.value=y.matcap)}function E(S,y){const L=e.get(y).light;S.referencePosition.value.setFromMatrixPosition(L.matrixWorld),S.nearDistance.value=L.shadow.camera.near,S.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function DR(n,e,t,r){let o={},l={},u=[];const c=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function d(L,b){const C=b.program;r.uniformBlockBinding(L,C)}function h(L,b){let C=o[L.id];C===void 0&&(M(L),C=m(L),o[L.id]=C,L.addEventListener("dispose",S));const O=b.program;r.updateUBOMapping(L,O);const F=e.render.frame;l[L.id]!==F&&(_(L),l[L.id]=F)}function m(L){const b=g();L.__bindingPointIndex=b;const C=n.createBuffer(),O=L.__size,F=L.usage;return n.bindBuffer(n.UNIFORM_BUFFER,C),n.bufferData(n.UNIFORM_BUFFER,O,F),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,C),C}function g(){for(let L=0;L<c;L++)if(u.indexOf(L)===-1)return u.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(L){const b=o[L.id],C=L.uniforms,O=L.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let F=0,U=C.length;F<U;F++){const z=Array.isArray(C[F])?C[F]:[C[F]];for(let P=0,R=z.length;P<R;P++){const H=z[P];if(x(H,F,P,O)===!0){const oe=H.__offset,te=Array.isArray(H.value)?H.value:[H.value];let ue=0;for(let he=0;he<te.length;he++){const le=te[he],ie=E(le);typeof le=="number"||typeof le=="boolean"?(H.__data[0]=le,n.bufferSubData(n.UNIFORM_BUFFER,oe+ue,H.__data)):le.isMatrix3?(H.__data[0]=le.elements[0],H.__data[1]=le.elements[1],H.__data[2]=le.elements[2],H.__data[3]=0,H.__data[4]=le.elements[3],H.__data[5]=le.elements[4],H.__data[6]=le.elements[5],H.__data[7]=0,H.__data[8]=le.elements[6],H.__data[9]=le.elements[7],H.__data[10]=le.elements[8],H.__data[11]=0):(le.toArray(H.__data,ue),ue+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,oe,H.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function x(L,b,C,O){const F=L.value,U=b+"_"+C;if(O[U]===void 0)return typeof F=="number"||typeof F=="boolean"?O[U]=F:O[U]=F.clone(),!0;{const z=O[U];if(typeof F=="number"||typeof F=="boolean"){if(z!==F)return O[U]=F,!0}else if(z.equals(F)===!1)return z.copy(F),!0}return!1}function M(L){const b=L.uniforms;let C=0;const O=16;for(let U=0,z=b.length;U<z;U++){const P=Array.isArray(b[U])?b[U]:[b[U]];for(let R=0,H=P.length;R<H;R++){const oe=P[R],te=Array.isArray(oe.value)?oe.value:[oe.value];for(let ue=0,he=te.length;ue<he;ue++){const le=te[ue],ie=E(le),B=C%O,ae=B%ie.boundary,re=B+ae;C+=ae,re!==0&&O-re<ie.storage&&(C+=O-re),oe.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),oe.__offset=C,C+=ie.storage}}}const F=C%O;return F>0&&(C+=O-F),L.__size=C,L.__cache={},this}function E(L){const b={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(b.boundary=4,b.storage=4):L.isVector2?(b.boundary=8,b.storage=8):L.isVector3||L.isColor?(b.boundary=16,b.storage=12):L.isVector4?(b.boundary=16,b.storage=16):L.isMatrix3?(b.boundary=48,b.storage=48):L.isMatrix4?(b.boundary=64,b.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),b}function S(L){const b=L.target;b.removeEventListener("dispose",S);const C=u.indexOf(b.__bindingPointIndex);u.splice(C,1),n.deleteBuffer(o[b.id]),delete o[b.id],delete l[b.id]}function y(){for(const L in o)n.deleteBuffer(o[L]);u=[],o={},l={}}return{bind:d,update:h,dispose:y}}class LR{constructor(e={}){const{canvas:t=mE(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:c=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:_=!1}=e;this.isWebGLRenderer=!0;let x;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=r.getContextAttributes().alpha}else x=u;const M=new Uint32Array(4),E=new Int32Array(4);let S=null,y=null;const L=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=li,this.toneMapping=zr,this.toneMappingExposure=1;const C=this;let O=!1,F=0,U=0,z=null,P=-1,R=null;const H=new $t,oe=new $t;let te=null;const ue=new Ct(0);let he=0,le=t.width,ie=t.height,B=1,ae=null,re=null;const N=new $t(0,0,le,ie),ne=new $t(0,0,le,ie);let Ue=!1;const Z=new V0;let de=!1,Se=!1;this.transmissionResolutionScale=1;const ve=new Zt,Te=new Zt,Ie=new Q,Je=new $t,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let _t=!1;function It(){return z===null?B:1}let V=r;function Rn(A,X){return t.getContext(A,X)}try{const A={alpha:!0,depth:o,stencil:l,antialias:c,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:m,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ih}`),t.addEventListener("webglcontextlost",fe,!1),t.addEventListener("webglcontextrestored",be,!1),t.addEventListener("webglcontextcreationerror",Pe,!1),V===null){const X="webgl2";if(V=Rn(X,A),V===null)throw Rn(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let gt,ft,qe,Rt,We,D,w,$,pe,ge,ce,Xe,we,Ne,ct,Me,Oe,$e,nt,ke,dt,st,At,W;function Ae(){gt=new VA(V),gt.init(),st=new ER(V,gt),ft=new NA(V,gt,e,st),qe=new SR(V,gt),ft.reverseDepthBuffer&&_&&qe.buffers.depth.setReversed(!0),Rt=new WA(V),We=new lR,D=new MR(V,gt,qe,We,ft,st,Rt),w=new OA(C),$=new zA(C),pe=new ZE(V),At=new IA(V,pe),ge=new HA(V,pe,Rt,At),ce=new jA(V,ge,pe,Rt),nt=new XA(V,ft,D),Me=new FA(We),Xe=new aR(C,w,$,gt,ft,At,Me),we=new bR(C,We),Ne=new cR,ct=new gR(gt),$e=new LA(C,w,$,qe,ce,x,d),Oe=new yR(C,ce,ft),W=new DR(V,Rt,ft,qe),ke=new UA(V,gt,Rt),dt=new GA(V,gt,Rt),Rt.programs=Xe.programs,C.capabilities=ft,C.extensions=gt,C.properties=We,C.renderLists=Ne,C.shadowMap=Oe,C.state=qe,C.info=Rt}Ae();const se=new CR(C,V);this.xr=se,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const A=gt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=gt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(A){A!==void 0&&(B=A,this.setSize(le,ie,!1))},this.getSize=function(A){return A.set(le,ie)},this.setSize=function(A,X,J=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}le=A,ie=X,t.width=Math.floor(A*B),t.height=Math.floor(X*B),J===!0&&(t.style.width=A+"px",t.style.height=X+"px"),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(le*B,ie*B).floor()},this.setDrawingBufferSize=function(A,X,J){le=A,ie=X,B=J,t.width=Math.floor(A*J),t.height=Math.floor(X*J),this.setViewport(0,0,A,X)},this.getCurrentViewport=function(A){return A.copy(H)},this.getViewport=function(A){return A.copy(N)},this.setViewport=function(A,X,J,q){A.isVector4?N.set(A.x,A.y,A.z,A.w):N.set(A,X,J,q),qe.viewport(H.copy(N).multiplyScalar(B).round())},this.getScissor=function(A){return A.copy(ne)},this.setScissor=function(A,X,J,q){A.isVector4?ne.set(A.x,A.y,A.z,A.w):ne.set(A,X,J,q),qe.scissor(oe.copy(ne).multiplyScalar(B).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(A){qe.setScissorTest(Ue=A)},this.setOpaqueSort=function(A){ae=A},this.setTransparentSort=function(A){re=A},this.getClearColor=function(A){return A.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor.apply($e,arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha.apply($e,arguments)},this.clear=function(A=!0,X=!0,J=!0){let q=0;if(A){let j=!1;if(z!==null){const xe=z.texture.format;j=xe===Bh||xe===kh||xe===Oh}if(j){const xe=z.texture.type,Re=xe===rr||xe===Es||xe===Ia||xe===Po||xe===Nh||xe===Fh,De=$e.getClearColor(),Be=$e.getClearAlpha(),it=De.r,tt=De.g,He=De.b;Re?(M[0]=it,M[1]=tt,M[2]=He,M[3]=Be,V.clearBufferuiv(V.COLOR,0,M)):(E[0]=it,E[1]=tt,E[2]=He,E[3]=Be,V.clearBufferiv(V.COLOR,0,E))}else q|=V.COLOR_BUFFER_BIT}X&&(q|=V.DEPTH_BUFFER_BIT),J&&(q|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",fe,!1),t.removeEventListener("webglcontextrestored",be,!1),t.removeEventListener("webglcontextcreationerror",Pe,!1),$e.dispose(),Ne.dispose(),ct.dispose(),We.dispose(),w.dispose(),$.dispose(),ce.dispose(),At.dispose(),W.dispose(),Xe.dispose(),se.dispose(),se.removeEventListener("sessionstart",Cs),se.removeEventListener("sessionend",lr),Ui.stop()};function fe(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),O=!0}function be(){console.log("THREE.WebGLRenderer: Context Restored."),O=!1;const A=Rt.autoReset,X=Oe.enabled,J=Oe.autoUpdate,q=Oe.needsUpdate,j=Oe.type;Ae(),Rt.autoReset=A,Oe.enabled=X,Oe.autoUpdate=J,Oe.needsUpdate=q,Oe.type=j}function Pe(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ot(A){const X=A.target;X.removeEventListener("dispose",ot),Nt(X)}function Nt(A){en(A),We.remove(A)}function en(A){const X=We.get(A).programs;X!==void 0&&(X.forEach(function(J){Xe.releaseProgram(J)}),A.isShaderMaterial&&Xe.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,J,q,j,xe){X===null&&(X=Pt);const Re=j.isMesh&&j.matrixWorld.determinant()<0,De=$a(A,X,J,q,j);qe.setMaterial(q,Re);let Be=J.index,it=1;if(q.wireframe===!0){if(Be=ge.getWireframeAttribute(J),Be===void 0)return;it=2}const tt=J.drawRange,He=J.attributes.position;let yt=tt.start*it,at=(tt.start+tt.count)*it;xe!==null&&(yt=Math.max(yt,xe.start*it),at=Math.min(at,(xe.start+xe.count)*it)),Be!==null?(yt=Math.max(yt,0),at=Math.min(at,Be.count)):He!=null&&(yt=Math.max(yt,0),at=Math.min(at,He.count));const Wt=at-yt;if(Wt<0||Wt===1/0)return;At.setup(j,q,De,J,Be);let Bt,xt=ke;if(Be!==null&&(Bt=pe.get(Be),xt=dt,xt.setIndex(Bt)),j.isMesh)q.wireframe===!0?(qe.setLineWidth(q.wireframeLinewidth*It()),xt.setMode(V.LINES)):xt.setMode(V.TRIANGLES);else if(j.isLine){let Ke=q.linewidth;Ke===void 0&&(Ke=1),qe.setLineWidth(Ke*It()),j.isLineSegments?xt.setMode(V.LINES):j.isLineLoop?xt.setMode(V.LINE_LOOP):xt.setMode(V.LINE_STRIP)}else j.isPoints?xt.setMode(V.POINTS):j.isSprite&&xt.setMode(V.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)xt.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(gt.get("WEBGL_multi_draw"))xt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const Ke=j._multiDrawStarts,Xt=j._multiDrawCounts,vt=j._multiDrawCount,_n=Be?pe.get(Be).bytesPerElement:1,cr=We.get(q).currentProgram.getUniforms();for(let Pn=0;Pn<vt;Pn++)cr.setValue(V,"_gl_DrawID",Pn),xt.render(Ke[Pn]/_n,Xt[Pn])}else if(j.isInstancedMesh)xt.renderInstances(yt,Wt,j.count);else if(J.isInstancedBufferGeometry){const Ke=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Xt=Math.min(J.instanceCount,Ke);xt.renderInstances(yt,Wt,Xt)}else xt.render(yt,Wt)};function St(A,X,J){A.transparent===!0&&A.side===Zi&&A.forceSinglePass===!1?(A.side=Hn,A.needsUpdate=!0,Ps(A,X,J),A.side=Hr,A.needsUpdate=!0,Ps(A,X,J),A.side=Zi):Ps(A,X,J)}this.compile=function(A,X,J=null){J===null&&(J=A),y=ct.get(J),y.init(X),b.push(y),J.traverseVisible(function(j){j.isLight&&j.layers.test(X.layers)&&(y.pushLight(j),j.castShadow&&y.pushShadow(j))}),A!==J&&A.traverseVisible(function(j){j.isLight&&j.layers.test(X.layers)&&(y.pushLight(j),j.castShadow&&y.pushShadow(j))}),y.setupLights();const q=new Set;return A.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const xe=j.material;if(xe)if(Array.isArray(xe))for(let Re=0;Re<xe.length;Re++){const De=xe[Re];St(De,J,j),q.add(De)}else St(xe,J,j),q.add(xe)}),b.pop(),y=null,q},this.compileAsync=function(A,X,J=null){const q=this.compile(A,X,J);return new Promise(j=>{function xe(){if(q.forEach(function(Re){We.get(Re).currentProgram.isReady()&&q.delete(Re)}),q.size===0){j(A);return}setTimeout(xe,10)}gt.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let Un=null;function Cn(A){Un&&Un(A)}function Cs(){Ui.stop()}function lr(){Ui.start()}const Ui=new W0;Ui.setAnimationLoop(Cn),typeof self<"u"&&Ui.setContext(self),this.setAnimationLoop=function(A){Un=A,se.setAnimationLoop(A),A===null?Ui.stop():Ui.start()},se.addEventListener("sessionstart",Cs),se.addEventListener("sessionend",lr),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(X),X=se.getCamera()),A.isScene===!0&&A.onBeforeRender(C,A,X,z),y=ct.get(A,b.length),y.init(X),b.push(y),Te.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Z.setFromProjectionMatrix(Te),Se=this.localClippingEnabled,de=Me.init(this.clippingPlanes,Se),S=Ne.get(A,L.length),S.init(),L.push(S),se.enabled===!0&&se.isPresenting===!0){const xe=C.xr.getDepthSensingMesh();xe!==null&&Ni(xe,X,-1/0,C.sortObjects)}Ni(A,X,0,C.sortObjects),S.finish(),C.sortObjects===!0&&S.sort(ae,re),_t=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,_t&&$e.addToRenderList(S,A),this.info.render.frame++,de===!0&&Me.beginShadows();const J=y.state.shadowsArray;Oe.render(J,A,X),de===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=S.opaque,j=S.transmissive;if(y.setupLights(),X.isArrayCamera){const xe=X.cameras;if(j.length>0)for(let Re=0,De=xe.length;Re<De;Re++){const Be=xe[Re];qr(q,j,A,Be)}_t&&$e.render(A);for(let Re=0,De=xe.length;Re<De;Re++){const Be=xe[Re];Yr(S,A,Be,Be.viewport)}}else j.length>0&&qr(q,j,A,X),_t&&$e.render(A),Yr(S,A,X);z!==null&&U===0&&(D.updateMultisampleRenderTarget(z),D.updateRenderTargetMipmap(z)),A.isScene===!0&&A.onAfterRender(C,A,X),At.resetDefaultState(),P=-1,R=null,b.pop(),b.length>0?(y=b[b.length-1],de===!0&&Me.setGlobalState(C.clippingPlanes,y.state.camera)):y=null,L.pop(),L.length>0?S=L[L.length-1]:S=null};function Ni(A,X,J,q){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)J=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLight)y.pushLight(A),A.castShadow&&y.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Z.intersectsSprite(A)){q&&Je.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Te);const Re=ce.update(A),De=A.material;De.visible&&S.push(A,Re,De,J,Je.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Z.intersectsObject(A))){const Re=ce.update(A),De=A.material;if(q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Je.copy(A.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Je.copy(Re.boundingSphere.center)),Je.applyMatrix4(A.matrixWorld).applyMatrix4(Te)),Array.isArray(De)){const Be=Re.groups;for(let it=0,tt=Be.length;it<tt;it++){const He=Be[it],yt=De[He.materialIndex];yt&&yt.visible&&S.push(A,Re,yt,J,Je.z,He)}}else De.visible&&S.push(A,Re,De,J,Je.z,null)}}const xe=A.children;for(let Re=0,De=xe.length;Re<De;Re++)Ni(xe[Re],X,J,q)}function Yr(A,X,J,q){const j=A.opaque,xe=A.transmissive,Re=A.transparent;y.setupLightsView(J),de===!0&&Me.setGlobalState(C.clippingPlanes,J),q&&qe.viewport(H.copy(q)),j.length>0&&ur(j,X,J),xe.length>0&&ur(xe,X,J),Re.length>0&&ur(Re,X,J),qe.buffers.depth.setTest(!0),qe.buffers.depth.setMask(!0),qe.buffers.color.setMask(!0),qe.setPolygonOffset(!1)}function qr(A,X,J,q){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[q.id]===void 0&&(y.state.transmissionRenderTarget[q.id]=new Ts(1,1,{generateMipmaps:!0,type:gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float")?za:rr,minFilter:xs,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace}));const xe=y.state.transmissionRenderTarget[q.id],Re=q.viewport||H;xe.setSize(Re.z*C.transmissionResolutionScale,Re.w*C.transmissionResolutionScale);const De=C.getRenderTarget();C.setRenderTarget(xe),C.getClearColor(ue),he=C.getClearAlpha(),he<1&&C.setClearColor(16777215,.5),C.clear(),_t&&$e.render(J);const Be=C.toneMapping;C.toneMapping=zr;const it=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),y.setupLightsView(q),de===!0&&Me.setGlobalState(C.clippingPlanes,q),ur(A,J,q),D.updateMultisampleRenderTarget(xe),D.updateRenderTargetMipmap(xe),gt.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let He=0,yt=X.length;He<yt;He++){const at=X[He],Wt=at.object,Bt=at.geometry,xt=at.material,Ke=at.group;if(xt.side===Zi&&Wt.layers.test(q.layers)){const Xt=xt.side;xt.side=Hn,xt.needsUpdate=!0,qa(Wt,J,q,Bt,xt,Ke),xt.side=Xt,xt.needsUpdate=!0,tt=!0}}tt===!0&&(D.updateMultisampleRenderTarget(xe),D.updateRenderTargetMipmap(xe))}C.setRenderTarget(De),C.setClearColor(ue,he),it!==void 0&&(q.viewport=it),C.toneMapping=Be}function ur(A,X,J){const q=X.isScene===!0?X.overrideMaterial:null;for(let j=0,xe=A.length;j<xe;j++){const Re=A[j],De=Re.object,Be=Re.geometry,it=q===null?Re.material:q,tt=Re.group;De.layers.test(J.layers)&&qa(De,X,J,Be,it,tt)}}function qa(A,X,J,q,j,xe){A.onBeforeRender(C,X,J,q,j,xe),A.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),j.onBeforeRender(C,X,J,q,A,xe),j.transparent===!0&&j.side===Zi&&j.forceSinglePass===!1?(j.side=Hn,j.needsUpdate=!0,C.renderBufferDirect(J,X,q,j,A,xe),j.side=Hr,j.needsUpdate=!0,C.renderBufferDirect(J,X,q,j,A,xe),j.side=Zi):C.renderBufferDirect(J,X,q,j,A,xe),A.onAfterRender(C,X,J,q,j,xe)}function Ps(A,X,J){X.isScene!==!0&&(X=Pt);const q=We.get(A),j=y.state.lights,xe=y.state.shadowsArray,Re=j.state.version,De=Xe.getParameters(A,j.state,xe,X,J),Be=Xe.getProgramCacheKey(De);let it=q.programs;q.environment=A.isMeshStandardMaterial?X.environment:null,q.fog=X.fog,q.envMap=(A.isMeshStandardMaterial?$:w).get(A.envMap||q.environment),q.envMapRotation=q.environment!==null&&A.envMap===null?X.environmentRotation:A.envMapRotation,it===void 0&&(A.addEventListener("dispose",ot),it=new Map,q.programs=it);let tt=it.get(Be);if(tt!==void 0){if(q.currentProgram===tt&&q.lightsStateVersion===Re)return Ei(A,De),tt}else De.uniforms=Xe.getUniforms(A),A.onBeforeCompile(De,C),tt=Xe.acquireProgram(De,Be),it.set(Be,tt),q.uniforms=De.uniforms;const He=q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(He.clippingPlanes=Me.uniform),Ei(A,De),q.needsLights=rc(A),q.lightsStateVersion=Re,q.needsLights&&(He.ambientLightColor.value=j.state.ambient,He.lightProbe.value=j.state.probe,He.directionalLights.value=j.state.directional,He.directionalLightShadows.value=j.state.directionalShadow,He.spotLights.value=j.state.spot,He.spotLightShadows.value=j.state.spotShadow,He.rectAreaLights.value=j.state.rectArea,He.ltc_1.value=j.state.rectAreaLTC1,He.ltc_2.value=j.state.rectAreaLTC2,He.pointLights.value=j.state.point,He.pointLightShadows.value=j.state.pointShadow,He.hemisphereLights.value=j.state.hemi,He.directionalShadowMap.value=j.state.directionalShadowMap,He.directionalShadowMatrix.value=j.state.directionalShadowMatrix,He.spotShadowMap.value=j.state.spotShadowMap,He.spotLightMatrix.value=j.state.spotLightMatrix,He.spotLightMap.value=j.state.spotLightMap,He.pointShadowMap.value=j.state.pointShadowMap,He.pointShadowMatrix.value=j.state.pointShadowMatrix),q.currentProgram=tt,q.uniformsList=null,tt}function Ka(A){if(A.uniformsList===null){const X=A.currentProgram.getUniforms();A.uniformsList=Nu.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function Ei(A,X){const J=We.get(A);J.outputColorSpace=X.outputColorSpace,J.batching=X.batching,J.batchingColor=X.batchingColor,J.instancing=X.instancing,J.instancingColor=X.instancingColor,J.instancingMorph=X.instancingMorph,J.skinning=X.skinning,J.morphTargets=X.morphTargets,J.morphNormals=X.morphNormals,J.morphColors=X.morphColors,J.morphTargetsCount=X.morphTargetsCount,J.numClippingPlanes=X.numClippingPlanes,J.numIntersection=X.numClipIntersection,J.vertexAlphas=X.vertexAlphas,J.vertexTangents=X.vertexTangents,J.toneMapping=X.toneMapping}function $a(A,X,J,q,j){X.isScene!==!0&&(X=Pt),D.resetTextureUnits();const xe=X.fog,Re=q.isMeshStandardMaterial?X.environment:null,De=z===null?C.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Do,Be=(q.isMeshStandardMaterial?$:w).get(q.envMap||Re),it=q.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,tt=!!J.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),He=!!J.morphAttributes.position,yt=!!J.morphAttributes.normal,at=!!J.morphAttributes.color;let Wt=zr;q.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Wt=C.toneMapping);const Bt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,xt=Bt!==void 0?Bt.length:0,Ke=We.get(q),Xt=y.state.lights;if(de===!0&&(Se===!0||A!==R)){const hn=A===R&&q.id===P;Me.setState(q,A,hn)}let vt=!1;q.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==Xt.state.version||Ke.outputColorSpace!==De||j.isBatchedMesh&&Ke.batching===!1||!j.isBatchedMesh&&Ke.batching===!0||j.isBatchedMesh&&Ke.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&Ke.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&Ke.instancing===!1||!j.isInstancedMesh&&Ke.instancing===!0||j.isSkinnedMesh&&Ke.skinning===!1||!j.isSkinnedMesh&&Ke.skinning===!0||j.isInstancedMesh&&Ke.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Ke.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Ke.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Ke.instancingMorph===!1&&j.morphTexture!==null||Ke.envMap!==Be||q.fog===!0&&Ke.fog!==xe||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==Me.numPlanes||Ke.numIntersection!==Me.numIntersection)||Ke.vertexAlphas!==it||Ke.vertexTangents!==tt||Ke.morphTargets!==He||Ke.morphNormals!==yt||Ke.morphColors!==at||Ke.toneMapping!==Wt||Ke.morphTargetsCount!==xt)&&(vt=!0):(vt=!0,Ke.__version=q.version);let _n=Ke.currentProgram;vt===!0&&(_n=Ps(q,X,j));let cr=!1,Pn=!1,Fi=!1;const Lt=_n.getUniforms(),vn=Ke.uniforms;if(qe.useProgram(_n.program)&&(cr=!0,Pn=!0,Fi=!0),q.id!==P&&(P=q.id,Pn=!0),cr||R!==A){qe.buffers.depth.getReversed()?(ve.copy(A.projectionMatrix),_E(ve),vE(ve),Lt.setValue(V,"projectionMatrix",ve)):Lt.setValue(V,"projectionMatrix",A.projectionMatrix),Lt.setValue(V,"viewMatrix",A.matrixWorldInverse);const ln=Lt.map.cameraPosition;ln!==void 0&&ln.setValue(V,Ie.setFromMatrixPosition(A.matrixWorld)),ft.logarithmicDepthBuffer&&Lt.setValue(V,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Lt.setValue(V,"isOrthographic",A.isOrthographicCamera===!0),R!==A&&(R=A,Pn=!0,Fi=!0)}if(j.isSkinnedMesh){Lt.setOptional(V,j,"bindMatrix"),Lt.setOptional(V,j,"bindMatrixInverse");const hn=j.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),Lt.setValue(V,"boneTexture",hn.boneTexture,D))}j.isBatchedMesh&&(Lt.setOptional(V,j,"batchingTexture"),Lt.setValue(V,"batchingTexture",j._matricesTexture,D),Lt.setOptional(V,j,"batchingIdTexture"),Lt.setValue(V,"batchingIdTexture",j._indirectTexture,D),Lt.setOptional(V,j,"batchingColorTexture"),j._colorsTexture!==null&&Lt.setValue(V,"batchingColorTexture",j._colorsTexture,D));const an=J.morphAttributes;if((an.position!==void 0||an.normal!==void 0||an.color!==void 0)&&nt.update(j,J,_n),(Pn||Ke.receiveShadow!==j.receiveShadow)&&(Ke.receiveShadow=j.receiveShadow,Lt.setValue(V,"receiveShadow",j.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(vn.envMap.value=Be,vn.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&X.environment!==null&&(vn.envMapIntensity.value=X.environmentIntensity),Pn&&(Lt.setValue(V,"toneMappingExposure",C.toneMappingExposure),Ke.needsLights&&Za(vn,Fi),xe&&q.fog===!0&&we.refreshFogUniforms(vn,xe),we.refreshMaterialUniforms(vn,q,B,ie,y.state.transmissionRenderTarget[A.id]),Nu.upload(V,Ka(Ke),vn,D)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Nu.upload(V,Ka(Ke),vn,D),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Lt.setValue(V,"center",j.center),Lt.setValue(V,"modelViewMatrix",j.modelViewMatrix),Lt.setValue(V,"normalMatrix",j.normalMatrix),Lt.setValue(V,"modelMatrix",j.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const hn=q.uniformsGroups;for(let ln=0,Mt=hn.length;ln<Mt;ln++){const Ti=hn[ln];W.update(Ti,_n),W.bind(Ti,_n)}}return _n}function Za(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function rc(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return z},this.setRenderTargetTextures=function(A,X,J){We.get(A.texture).__webglTexture=X,We.get(A.depthTexture).__webglTexture=J;const q=We.get(A);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=J===void 0,q.__autoAllocateDepthBuffer||gt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,X){const J=We.get(A);J.__webglFramebuffer=X,J.__useDefaultFramebuffer=X===void 0};const Qa=V.createFramebuffer();this.setRenderTarget=function(A,X=0,J=0){z=A,F=X,U=J;let q=!0,j=null,xe=!1,Re=!1;if(A){const Be=We.get(A);if(Be.__useDefaultFramebuffer!==void 0)qe.bindFramebuffer(V.FRAMEBUFFER,null),q=!1;else if(Be.__webglFramebuffer===void 0)D.setupRenderTarget(A);else if(Be.__hasExternalTextures)D.rebindTextures(A,We.get(A.texture).__webglTexture,We.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const He=A.depthTexture;if(Be.__boundDepthTexture!==He){if(He!==null&&We.has(He)&&(A.width!==He.image.width||A.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(A)}}const it=A.texture;(it.isData3DTexture||it.isDataArrayTexture||it.isCompressedArrayTexture)&&(Re=!0);const tt=We.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(tt[X])?j=tt[X][J]:j=tt[X],xe=!0):A.samples>0&&D.useMultisampledRTT(A)===!1?j=We.get(A).__webglMultisampledFramebuffer:Array.isArray(tt)?j=tt[J]:j=tt,H.copy(A.viewport),oe.copy(A.scissor),te=A.scissorTest}else H.copy(N).multiplyScalar(B).floor(),oe.copy(ne).multiplyScalar(B).floor(),te=Ue;if(J!==0&&(j=Qa),qe.bindFramebuffer(V.FRAMEBUFFER,j)&&q&&qe.drawBuffers(A,j),qe.viewport(H),qe.scissor(oe),qe.setScissorTest(te),xe){const Be=We.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+X,Be.__webglTexture,J)}else if(Re){const Be=We.get(A.texture),it=X;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,Be.__webglTexture,J,it)}else if(A!==null&&J!==0){const Be=We.get(A.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Be.__webglTexture,J)}P=-1},this.readRenderTargetPixels=function(A,X,J,q,j,xe,Re){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=We.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Re!==void 0&&(De=De[Re]),De){qe.bindFramebuffer(V.FRAMEBUFFER,De);try{const Be=A.texture,it=Be.format,tt=Be.type;if(!ft.textureFormatReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ft.textureTypeReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-q&&J>=0&&J<=A.height-j&&V.readPixels(X,J,q,j,st.convert(it),st.convert(tt),xe)}finally{const Be=z!==null?We.get(z).__webglFramebuffer:null;qe.bindFramebuffer(V.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(A,X,J,q,j,xe,Re){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=We.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Re!==void 0&&(De=De[Re]),De){const Be=A.texture,it=Be.format,tt=Be.type;if(!ft.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ft.textureTypeReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=A.width-q&&J>=0&&J<=A.height-j){qe.bindFramebuffer(V.FRAMEBUFFER,De);const He=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,He),V.bufferData(V.PIXEL_PACK_BUFFER,xe.byteLength,V.STREAM_READ),V.readPixels(X,J,q,j,st.convert(it),st.convert(tt),0);const yt=z!==null?We.get(z).__webglFramebuffer:null;qe.bindFramebuffer(V.FRAMEBUFFER,yt);const at=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await gE(V,at,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,He),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,xe),V.deleteBuffer(He),V.deleteSync(at),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,X=null,J=0){A.isTexture!==!0&&(po("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,A=arguments[1]);const q=Math.pow(2,-J),j=Math.floor(A.image.width*q),xe=Math.floor(A.image.height*q),Re=X!==null?X.x:0,De=X!==null?X.y:0;D.setTexture2D(A,0),V.copyTexSubImage2D(V.TEXTURE_2D,J,0,0,Re,De,j,xe),qe.unbindTexture()};const Ja=V.createFramebuffer(),el=V.createFramebuffer();this.copyTextureToTexture=function(A,X,J=null,q=null,j=0,xe=null){A.isTexture!==!0&&(po("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,A=arguments[1],X=arguments[2],xe=arguments[3]||0,J=null),xe===null&&(j!==0?(po("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),xe=j,j=0):xe=0);let Re,De,Be,it,tt,He,yt,at,Wt;const Bt=A.isCompressedTexture?A.mipmaps[xe]:A.image;if(J!==null)Re=J.max.x-J.min.x,De=J.max.y-J.min.y,Be=J.isBox3?J.max.z-J.min.z:1,it=J.min.x,tt=J.min.y,He=J.isBox3?J.min.z:0;else{const an=Math.pow(2,-j);Re=Math.floor(Bt.width*an),De=Math.floor(Bt.height*an),A.isDataArrayTexture?Be=Bt.depth:A.isData3DTexture?Be=Math.floor(Bt.depth*an):Be=1,it=0,tt=0,He=0}q!==null?(yt=q.x,at=q.y,Wt=q.z):(yt=0,at=0,Wt=0);const xt=st.convert(X.format),Ke=st.convert(X.type);let Xt;X.isData3DTexture?(D.setTexture3D(X,0),Xt=V.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(D.setTexture2DArray(X,0),Xt=V.TEXTURE_2D_ARRAY):(D.setTexture2D(X,0),Xt=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,X.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,X.unpackAlignment);const vt=V.getParameter(V.UNPACK_ROW_LENGTH),_n=V.getParameter(V.UNPACK_IMAGE_HEIGHT),cr=V.getParameter(V.UNPACK_SKIP_PIXELS),Pn=V.getParameter(V.UNPACK_SKIP_ROWS),Fi=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Bt.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Bt.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,it),V.pixelStorei(V.UNPACK_SKIP_ROWS,tt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,He);const Lt=A.isDataArrayTexture||A.isData3DTexture,vn=X.isDataArrayTexture||X.isData3DTexture;if(A.isDepthTexture){const an=We.get(A),hn=We.get(X),ln=We.get(an.__renderTarget),Mt=We.get(hn.__renderTarget);qe.bindFramebuffer(V.READ_FRAMEBUFFER,ln.__webglFramebuffer),qe.bindFramebuffer(V.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let Ti=0;Ti<Be;Ti++)Lt&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,We.get(A).__webglTexture,j,He+Ti),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,We.get(X).__webglTexture,xe,Wt+Ti)),V.blitFramebuffer(it,tt,Re,De,yt,at,Re,De,V.DEPTH_BUFFER_BIT,V.NEAREST);qe.bindFramebuffer(V.READ_FRAMEBUFFER,null),qe.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(j!==0||A.isRenderTargetTexture||We.has(A)){const an=We.get(A),hn=We.get(X);qe.bindFramebuffer(V.READ_FRAMEBUFFER,Ja),qe.bindFramebuffer(V.DRAW_FRAMEBUFFER,el);for(let ln=0;ln<Be;ln++)Lt?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,an.__webglTexture,j,He+ln):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,an.__webglTexture,j),vn?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,hn.__webglTexture,xe,Wt+ln):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,hn.__webglTexture,xe),j!==0?V.blitFramebuffer(it,tt,Re,De,yt,at,Re,De,V.COLOR_BUFFER_BIT,V.NEAREST):vn?V.copyTexSubImage3D(Xt,xe,yt,at,Wt+ln,it,tt,Re,De):V.copyTexSubImage2D(Xt,xe,yt,at,it,tt,Re,De);qe.bindFramebuffer(V.READ_FRAMEBUFFER,null),qe.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else vn?A.isDataTexture||A.isData3DTexture?V.texSubImage3D(Xt,xe,yt,at,Wt,Re,De,Be,xt,Ke,Bt.data):X.isCompressedArrayTexture?V.compressedTexSubImage3D(Xt,xe,yt,at,Wt,Re,De,Be,xt,Bt.data):V.texSubImage3D(Xt,xe,yt,at,Wt,Re,De,Be,xt,Ke,Bt):A.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,xe,yt,at,Re,De,xt,Ke,Bt.data):A.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,xe,yt,at,Bt.width,Bt.height,xt,Bt.data):V.texSubImage2D(V.TEXTURE_2D,xe,yt,at,Re,De,xt,Ke,Bt);V.pixelStorei(V.UNPACK_ROW_LENGTH,vt),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,_n),V.pixelStorei(V.UNPACK_SKIP_PIXELS,cr),V.pixelStorei(V.UNPACK_SKIP_ROWS,Pn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Fi),xe===0&&X.generateMipmaps&&V.generateMipmap(Xt),qe.unbindTexture()},this.copyTextureToTexture3D=function(A,X,J=null,q=null,j=0){return A.isTexture!==!0&&(po("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,q=arguments[1]||null,A=arguments[2],X=arguments[3],j=arguments[4]||0),po('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,X,J,q,j)},this.initRenderTarget=function(A){We.get(A).__webglFramebuffer===void 0&&D.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?D.setTextureCube(A,0):A.isData3DTexture?D.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?D.setTexture2DArray(A,0):D.setTexture2D(A,0),qe.unbindTexture()},this.resetState=function(){F=0,U=0,z=null,qe.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=wt._getDrawingBufferColorSpace(e),t.unpackColorSpace=wt._getUnpackColorSpace()}}const Z_={type:"change"},Gh={type:"start"},K0={type:"end"},Au=new Vh,Q_=new Or,IR=Math.cos(70*pE.DEG2RAD),rn=new Q,Vn=2*Math.PI,Dt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},md=1e-6;class UR extends KE{constructor(e,t=null){super(e,t),this.state=Dt.NONE,this.enabled=!0,this.target=new Q,this.cursor=new Q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Mo.ROTATE,MIDDLE:Mo.DOLLY,RIGHT:Mo.PAN},this.touches={ONE:mo.ROTATE,TWO:mo.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new Q,this._lastQuaternion=new ws,this._lastTargetPosition=new Q,this._quat=new ws().setFromUnitVectors(e.up,new Q(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new w_,this._sphericalDelta=new w_,this._scale=1,this._panOffset=new Q,this._rotateStart=new pt,this._rotateEnd=new pt,this._rotateDelta=new pt,this._panStart=new pt,this._panEnd=new pt,this._panDelta=new pt,this._dollyStart=new pt,this._dollyEnd=new pt,this._dollyDelta=new pt,this._dollyDirection=new Q,this._mouse=new pt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=FR.bind(this),this._onPointerDown=NR.bind(this),this._onPointerUp=OR.bind(this),this._onContextMenu=WR.bind(this),this._onMouseWheel=zR.bind(this),this._onKeyDown=VR.bind(this),this._onTouchStart=HR.bind(this),this._onTouchMove=GR.bind(this),this._onMouseDown=kR.bind(this),this._onMouseMove=BR.bind(this),this._interceptControlDown=XR.bind(this),this._interceptControlUp=jR.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Z_),this.update(),this.state=Dt.NONE}update(e=null){const t=this.object.position;rn.copy(t).sub(this.target),rn.applyQuaternion(this._quat),this._spherical.setFromVector3(rn),this.autoRotate&&this.state===Dt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(r)&&isFinite(o)&&(r<-Math.PI?r+=Vn:r>Math.PI&&(r-=Vn),o<-Math.PI?o+=Vn:o>Math.PI&&(o-=Vn),r<=o?this._spherical.theta=Math.max(r,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+o)/2?Math.max(r,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let l=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),l=u!=this._spherical.radius}if(rn.setFromSpherical(this._spherical),rn.applyQuaternion(this._quatInverse),t.copy(this.target).add(rn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const c=rn.length();u=this._clampDistance(c*this._scale);const d=c-u;this.object.position.addScaledVector(this._dollyDirection,d),this.object.updateMatrixWorld(),l=!!d}else if(this.object.isOrthographicCamera){const c=new Q(this._mouse.x,this._mouse.y,0);c.unproject(this.object);const d=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),l=d!==this.object.zoom;const h=new Q(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(c),this.object.updateMatrixWorld(),u=rn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(Au.origin.copy(this.object.position),Au.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Au.direction))<IR?this.object.lookAt(this.target):(Q_.setFromNormalAndCoplanarPoint(this.object.up,this.target),Au.intersectPlane(Q_,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),l=!0)}return this._scale=1,this._performCursorZoom=!1,l||this._lastPosition.distanceToSquared(this.object.position)>md||8*(1-this._lastQuaternion.dot(this.object.quaternion))>md||this._lastTargetPosition.distanceToSquared(this.target)>md?(this.dispatchEvent(Z_),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Vn/60*this.autoRotateSpeed*e:Vn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){rn.setFromMatrixColumn(t,0),rn.multiplyScalar(-e),this._panOffset.add(rn)}_panUp(e,t){this.screenSpacePanning===!0?rn.setFromMatrixColumn(t,1):(rn.setFromMatrixColumn(t,0),rn.crossVectors(this.object.up,rn)),rn.multiplyScalar(e),this._panOffset.add(rn)}_pan(e,t){const r=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;rn.copy(o).sub(this.target);let l=rn.length();l*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*l/r.clientHeight,this.object.matrix),this._panUp(2*t*l/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),o=e-r.left,l=t-r.top,u=r.width,c=r.height;this._mouse.x=o/u*2-1,this._mouse.y=-(l/c)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Vn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Vn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Vn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._rotateStart.set(r,o)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panStart.set(r,o)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,o=e.pageY-t.y,l=Math.sqrt(r*r+o*o);this._dollyStart.set(0,l)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),o=.5*(e.pageX+r.x),l=.5*(e.pageY+r.y);this._rotateEnd.set(o,l)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Vn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Vn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panEnd.set(r,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,o=e.pageY-t.y,l=Math.sqrt(r*r+o*o);this._dollyEnd.set(0,l),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(e.pageX+t.x)*.5,c=(e.pageY+t.y)*.5;this._updateZoomParameters(u,c)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new pt,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function NR(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function FR(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function OR(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(K0),this.state=Dt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function kR(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Mo.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Dt.DOLLY;break;case Mo.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Dt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Dt.ROTATE}break;case Mo.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Dt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Dt.PAN}break;default:this.state=Dt.NONE}this.state!==Dt.NONE&&this.dispatchEvent(Gh)}function BR(n){switch(this.state){case Dt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Dt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Dt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function zR(n){this.enabled===!1||this.enableZoom===!1||this.state!==Dt.NONE||(n.preventDefault(),this.dispatchEvent(Gh),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(K0))}function VR(n){this.enabled!==!1&&this._handleKeyDown(n)}function HR(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case mo.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Dt.TOUCH_ROTATE;break;case mo.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Dt.TOUCH_PAN;break;default:this.state=Dt.NONE}break;case 2:switch(this.touches.TWO){case mo.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Dt.TOUCH_DOLLY_PAN;break;case mo.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Dt.TOUCH_DOLLY_ROTATE;break;default:this.state=Dt.NONE}break;default:this.state=Dt.NONE}this.state!==Dt.NONE&&this.dispatchEvent(Gh)}function GR(n){switch(this._trackPointer(n),this.state){case Dt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Dt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Dt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Dt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Dt.NONE}}function WR(n){this.enabled!==!1&&n.preventDefault()}function XR(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function jR(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const YR=()=>{const n=Math.random(),e=Math.random(),t=n*2*Math.PI,r=Math.acos(2*e-1),o=Math.cbrt(Math.random()),l=Math.sin(t),u=Math.cos(t),c=Math.sin(r),d=Math.cos(r),h=o*c*u,m=o*c*l,g=o*d;return{x:h,y:m,z:g}},qR=()=>{const n=Ye.useRef(null),e=Ye.useRef(new VE),t=Ye.useRef(null),r=Ye.useRef(null),o=Ye.useRef(null),l=Ye.useRef(null),u=Ye.useRef(null),c=Ye.useRef(null),d=Ye.useRef(0),h=Ye.useRef(0);Ye.useEffect(()=>{if(!n.current)return;const x=n.current,M=new LR({alpha:!0});M.setPixelRatio(Math.min(window.devicePixelRatio,1)),M.setSize(x.offsetWidth,x.offsetHeight),M.setClearColor(0,1),x.appendChild(M.domElement),t.current=M;const E=new ui(70,x.offsetWidth/x.offsetHeight,.01,1e3);E.position.set(0,0,2),r.current=E;const S=new UR(E,M.domElement);S.enableZoom=!1,S.enablePan=!1,S.enableRotate=!1,o.current=S,_(),m(),window.addEventListener("resize",m),window.addEventListener("mousemove",g);const y=()=>{requestAnimationFrame(y),t.current&&r.current&&e.current&&t.current.render(e.current,r.current)};return y(),()=>{window.removeEventListener("resize",m),window.removeEventListener("mousemove",g),x&&x.removeChild(M.domElement)}},[]);const m=()=>{!n.current||!t.current||!r.current||(t.current.setSize(n.current.offsetWidth,n.current.offsetHeight),r.current.aspect=n.current.offsetWidth/n.current.offsetHeight,r.current.updateProjectionMatrix())},g=x=>{d.current=x.clientX/window.innerWidth*2-1,h.current=-(x.clientY/window.innerHeight)*2+1,r.current&&(r.current.rotation.x=h.current*.2,r.current.rotation.y=d.current*.2)},_=()=>{l.current=new H0({size:.01,sizeAttenuation:!0,alphaTest:.5,transparent:!0}),u.current=new ar;const x=[];for(let M=0;M<5e3;M++){const E=YR();x.push(4*E.x,4*E.y,4*E.z)}u.current.setAttribute("position",new Vr(x,3)),c.current=new WE(u.current,l.current),e.current&&c.current&&e.current.add(c.current)};return Ve.jsx("div",{id:"container",ref:n,style:{width:"100%",height:"100vh"}})};function J_(){const{innerWidth:n,innerHeight:e}=window;return{width:n,height:e}}function KR(){const[n,e]=Ye.useState(J_());return Ye.useEffect(()=>{function t(){e(J_())}return window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},[]),n}const $R=({movies:n})=>{const[e,t]=Ye.useState(0),{width:r}=KR(),o=ZR(r),l=QR(r),u=n.length-l,c=d=>{if(d==="left"){if(e===0)return;t(e-1);return}e>=u||t(e+1)};return Ve.jsxs("div",{className:"carousel",children:[Ve.jsxs("div",{className:"carousel__top",children:[Ve.jsx("h3",{className:"carousel__title",children:"Popular this week"}),Ve.jsxs("div",{className:"carousel__buttons",children:[Ve.jsx("button",{className:"carousel__button carousel__button--left",onClick:()=>c("right")}),Ve.jsx("button",{className:"carousel__button carousel__button--right",onClick:()=>c("left")})]})]}),Ve.jsx("div",{className:"carousel__bottom",style:{transform:`translatex(${e*(150+o)}px)`},children:n.map(d=>Ve.jsx("div",{className:"carousel__movie",children:Ve.jsx("a",{href:d.link,target:"_blank",children:Ve.jsx("img",{className:"carousel__movie-image",alt:`${d.id} image`,src:d.imgUrl})})},d.id))})]})};function ZR(n){let e;return n<640?e=6.5*4:n<1023?e=7*4:e=10*4,e}function QR(n){return n<540?2:n<760?3:n<940?4:n<1024?5:n<1460?3:n<1810?4:n<2150?5:6}const JR="/netflix_page/assets/logo-BI5DDhp1.svg",eC="/netflix_page/assets/profile-img-B7ugtheX.png",tC=()=>Ve.jsxs("header",{className:"header",children:[Ve.jsxs("div",{className:"header__left-container",children:[Ve.jsx("a",{href:"https://www.netflix.com/",target:"_blank",children:Ve.jsx("img",{className:"header__logo",alt:"Netflix Logo",src:JR})}),Ve.jsx("div",{className:"header__stroke"}),Ve.jsx("div",{className:"header__date",children:"Friday July 8th"})]}),Ve.jsxs("div",{className:"header__right-container",children:[Ve.jsx("button",{className:"header__search-button"}),Ve.jsx("div",{className:"header__profile",children:Ve.jsx("img",{className:"header__profile__img",alt:"profile image",src:eC})})]})]}),$0=Ye.createContext({});function nC(n){const e=Ye.useRef(null);return e.current===null&&(e.current=n()),e.current}const Wh=Ye.createContext(null),Z0=Ye.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});function iC(n=!0){const e=Ye.useContext(Wh);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:r,register:o}=e,l=Ye.useId();Ye.useEffect(()=>{n&&o(l)},[n]);const u=Ye.useCallback(()=>n&&r&&r(l),[l,r,n]);return!t&&r?[!1,u]:[!0]}const Xh=typeof window<"u",rC=Xh?Ye.useLayoutEffect:Ye.useEffect,Zn=n=>n;let mh=Zn;function jh(n){let e;return()=>(e===void 0&&(e=n()),e)}const Io=(n,e,t)=>{const r=e-n;return r===0?1:(t-n)/r},nr=n=>n*1e3,ir=n=>n/1e3,sC={skipAnimations:!1,useManualTiming:!1};function oC(n){let e=new Set,t=new Set,r=!1,o=!1;const l=new WeakSet;let u={delta:0,timestamp:0,isProcessing:!1};function c(h){l.has(h)&&(d.schedule(h),n()),h(u)}const d={schedule:(h,m=!1,g=!1)=>{const x=g&&r?e:t;return m&&l.add(h),x.has(h)||x.add(h),h},cancel:h=>{t.delete(h),l.delete(h)},process:h=>{if(u=h,r){o=!0;return}r=!0,[e,t]=[t,e],e.forEach(c),e.clear(),r=!1,o&&(o=!1,d.process(h))}};return d}const Ru=["read","resolveKeyframes","update","preRender","render","postRender"],aC=40;function Q0(n,e){let t=!1,r=!0;const o={delta:0,timestamp:0,isProcessing:!1},l=()=>t=!0,u=Ru.reduce((y,L)=>(y[L]=oC(l),y),{}),{read:c,resolveKeyframes:d,update:h,preRender:m,render:g,postRender:_}=u,x=()=>{const y=performance.now();t=!1,o.delta=r?1e3/60:Math.max(Math.min(y-o.timestamp,aC),1),o.timestamp=y,o.isProcessing=!0,c.process(o),d.process(o),h.process(o),m.process(o),g.process(o),_.process(o),o.isProcessing=!1,t&&e&&(r=!1,n(x))},M=()=>{t=!0,r=!0,o.isProcessing||n(x)};return{schedule:Ru.reduce((y,L)=>{const b=u[L];return y[L]=(C,O=!1,F=!1)=>(t||M(),b.schedule(C,O,F)),y},{}),cancel:y=>{for(let L=0;L<Ru.length;L++)u[Ru[L]].cancel(y)},state:o,steps:u}}const{schedule:kt,cancel:Wr,state:gn,steps:gd}=Q0(typeof requestAnimationFrame<"u"?requestAnimationFrame:Zn,!0),J0=Ye.createContext({strict:!1}),ev={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Uo={};for(const n in ev)Uo[n]={isEnabled:e=>ev[n].some(t=>!!e[t])};function lC(n){for(const e in n)Uo[e]={...Uo[e],...n[e]}}const uC=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Hu(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||uC.has(n)}let ey=n=>!Hu(n);function cC(n){n&&(ey=e=>e.startsWith("on")?!Hu(e):n(e))}try{cC(require("@emotion/is-prop-valid").default)}catch{}function fC(n,e,t){const r={};for(const o in n)o==="values"&&typeof n.values=="object"||(ey(o)||t===!0&&Hu(o)||!e&&!Hu(o)||n.draggable&&o.startsWith("onDrag"))&&(r[o]=n[o]);return r}function dC(n){if(typeof Proxy>"u")return n;const e=new Map,t=(...r)=>n(...r);return new Proxy(t,{get:(r,o)=>o==="create"?n:(e.has(o)||e.set(o,n(o)),e.get(o))})}const Ju=Ye.createContext({});function Na(n){return typeof n=="string"||Array.isArray(n)}function ec(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}const Yh=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],qh=["initial",...Yh];function tc(n){return ec(n.animate)||qh.some(e=>Na(n[e]))}function ty(n){return!!(tc(n)||n.variants)}function hC(n,e){if(tc(n)){const{initial:t,animate:r}=n;return{initial:t===!1||Na(t)?t:void 0,animate:Na(r)?r:void 0}}return n.inherit!==!1?e:{}}function pC(n){const{initial:e,animate:t}=hC(n,Ye.useContext(Ju));return Ye.useMemo(()=>({initial:e,animate:t}),[tv(e),tv(t)])}function tv(n){return Array.isArray(n)?n.join(" "):n}const mC=Symbol.for("motionComponentSymbol");function _o(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function gC(n,e,t){return Ye.useCallback(r=>{r&&n.onMount&&n.onMount(r),e&&(r?e.mount(r):e.unmount()),t&&(typeof t=="function"?t(r):_o(t)&&(t.current=r))},[e])}const Kh=n=>n.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),_C="framerAppearId",ny="data-"+Kh(_C),{schedule:$h,cancel:DL}=Q0(queueMicrotask,!1),iy=Ye.createContext({});function vC(n,e,t,r,o){var l,u;const{visualElement:c}=Ye.useContext(Ju),d=Ye.useContext(J0),h=Ye.useContext(Wh),m=Ye.useContext(Z0).reducedMotion,g=Ye.useRef(null);r=r||d.renderer,!g.current&&r&&(g.current=r(n,{visualState:e,parent:c,props:t,presenceContext:h,blockInitialAnimation:h?h.initial===!1:!1,reducedMotionConfig:m}));const _=g.current,x=Ye.useContext(iy);_&&!_.projection&&o&&(_.type==="html"||_.type==="svg")&&yC(g.current,t,o,x);const M=Ye.useRef(!1);Ye.useInsertionEffect(()=>{_&&M.current&&_.update(t,h)});const E=t[ny],S=Ye.useRef(!!E&&!(!((l=window.MotionHandoffIsComplete)===null||l===void 0)&&l.call(window,E))&&((u=window.MotionHasOptimisedAnimation)===null||u===void 0?void 0:u.call(window,E)));return rC(()=>{_&&(M.current=!0,window.MotionIsMounted=!0,_.updateFeatures(),$h.render(_.render),S.current&&_.animationState&&_.animationState.animateChanges())}),Ye.useEffect(()=>{_&&(!S.current&&_.animationState&&_.animationState.animateChanges(),S.current&&(queueMicrotask(()=>{var y;(y=window.MotionHandoffMarkAsComplete)===null||y===void 0||y.call(window,E)}),S.current=!1))}),_}function yC(n,e,t,r){const{layoutId:o,layout:l,drag:u,dragConstraints:c,layoutScroll:d,layoutRoot:h}=e;n.projection=new t(n.latestValues,e["data-framer-portal-id"]?void 0:ry(n.parent)),n.projection.setOptions({layoutId:o,layout:l,alwaysMeasureLayout:!!u||c&&_o(c),visualElement:n,animationType:typeof l=="string"?l:"both",initialPromotionConfig:r,layoutScroll:d,layoutRoot:h})}function ry(n){if(n)return n.options.allowProjection!==!1?n.projection:ry(n.parent)}function xC({preloadedFeatures:n,createVisualElement:e,useRender:t,useVisualState:r,Component:o}){var l,u;n&&lC(n);function c(h,m){let g;const _={...Ye.useContext(Z0),...h,layoutId:SC(h)},{isStatic:x}=_,M=pC(h),E=r(h,x);if(!x&&Xh){MC();const S=EC(_);g=S.MeasureLayout,M.visualElement=vC(o,E,_,e,S.ProjectionNode)}return Ve.jsxs(Ju.Provider,{value:M,children:[g&&M.visualElement?Ve.jsx(g,{visualElement:M.visualElement,..._}):null,t(o,h,gC(E,M.visualElement,m),E,x,M.visualElement)]})}c.displayName=`motion.${typeof o=="string"?o:`create(${(u=(l=o.displayName)!==null&&l!==void 0?l:o.name)!==null&&u!==void 0?u:""})`}`;const d=Ye.forwardRef(c);return d[mC]=o,d}function SC({layoutId:n}){const e=Ye.useContext($0).id;return e&&n!==void 0?e+"-"+n:n}function MC(n,e){Ye.useContext(J0).strict}function EC(n){const{drag:e,layout:t}=Uo;if(!e&&!t)return{};const r={...e,...t};return{MeasureLayout:e!=null&&e.isEnabled(n)||t!=null&&t.isEnabled(n)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}const TC=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Zh(n){return typeof n!="string"||n.includes("-")?!1:!!(TC.indexOf(n)>-1||/[A-Z]/u.test(n))}function nv(n){const e=[{},{}];return n==null||n.values.forEach((t,r)=>{e[0][r]=t.get(),e[1][r]=t.getVelocity()}),e}function Qh(n,e,t,r){if(typeof e=="function"){const[o,l]=nv(r);e=e(t!==void 0?t:n.custom,o,l)}if(typeof e=="string"&&(e=n.variants&&n.variants[e]),typeof e=="function"){const[o,l]=nv(r);e=e(t!==void 0?t:n.custom,o,l)}return e}const gh=n=>Array.isArray(n),wC=n=>!!(n&&typeof n=="object"&&n.mix&&n.toValue),AC=n=>gh(n)?n[n.length-1]||0:n,An=n=>!!(n&&n.getVelocity);function Fu(n){const e=An(n)?n.get():n;return wC(e)?e.toValue():e}function RC({scrapeMotionValuesFromProps:n,createRenderState:e,onUpdate:t},r,o,l){const u={latestValues:CC(r,o,l,n),renderState:e()};return t&&(u.onMount=c=>t({props:r,current:c,...u}),u.onUpdate=c=>t(c)),u}const sy=n=>(e,t)=>{const r=Ye.useContext(Ju),o=Ye.useContext(Wh),l=()=>RC(n,e,r,o);return t?l():nC(l)};function CC(n,e,t,r){const o={},l=r(n,{});for(const _ in l)o[_]=Fu(l[_]);let{initial:u,animate:c}=n;const d=tc(n),h=ty(n);e&&h&&!d&&n.inherit!==!1&&(u===void 0&&(u=e.initial),c===void 0&&(c=e.animate));let m=t?t.initial===!1:!1;m=m||u===!1;const g=m?c:u;if(g&&typeof g!="boolean"&&!ec(g)){const _=Array.isArray(g)?g:[g];for(let x=0;x<_.length;x++){const M=Qh(n,_[x]);if(M){const{transitionEnd:E,transition:S,...y}=M;for(const L in y){let b=y[L];if(Array.isArray(b)){const C=m?b.length-1:0;b=b[C]}b!==null&&(o[L]=b)}for(const L in E)o[L]=E[L]}}}return o}const ko=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Rs=new Set(ko),oy=n=>e=>typeof e=="string"&&e.startsWith(n),ay=oy("--"),PC=oy("var(--"),Jh=n=>PC(n)?bC.test(n.split("/*")[0].trim()):!1,bC=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,ly=(n,e)=>e&&typeof n=="number"?e.transform(n):n,or=(n,e,t)=>t>e?e:t<n?n:t,Bo={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},Fa={...Bo,transform:n=>or(0,1,n)},Cu={...Bo,default:1},Wa=n=>({test:e=>typeof e=="string"&&e.endsWith(n)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${n}`}),Fr=Wa("deg"),Li=Wa("%"),et=Wa("px"),DC=Wa("vh"),LC=Wa("vw"),iv={...Li,parse:n=>Li.parse(n)/100,transform:n=>Li.transform(n*100)},IC={borderWidth:et,borderTopWidth:et,borderRightWidth:et,borderBottomWidth:et,borderLeftWidth:et,borderRadius:et,radius:et,borderTopLeftRadius:et,borderTopRightRadius:et,borderBottomRightRadius:et,borderBottomLeftRadius:et,width:et,maxWidth:et,height:et,maxHeight:et,top:et,right:et,bottom:et,left:et,padding:et,paddingTop:et,paddingRight:et,paddingBottom:et,paddingLeft:et,margin:et,marginTop:et,marginRight:et,marginBottom:et,marginLeft:et,backgroundPositionX:et,backgroundPositionY:et},UC={rotate:Fr,rotateX:Fr,rotateY:Fr,rotateZ:Fr,scale:Cu,scaleX:Cu,scaleY:Cu,scaleZ:Cu,skew:Fr,skewX:Fr,skewY:Fr,distance:et,translateX:et,translateY:et,translateZ:et,x:et,y:et,z:et,perspective:et,transformPerspective:et,opacity:Fa,originX:iv,originY:iv,originZ:et},rv={...Bo,transform:Math.round},ep={...IC,...UC,zIndex:rv,size:et,fillOpacity:Fa,strokeOpacity:Fa,numOctaves:rv},NC={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},FC=ko.length;function OC(n,e,t){let r="",o=!0;for(let l=0;l<FC;l++){const u=ko[l],c=n[u];if(c===void 0)continue;let d=!0;if(typeof c=="number"?d=c===(u.startsWith("scale")?1:0):d=parseFloat(c)===0,!d||t){const h=ly(c,ep[u]);if(!d){o=!1;const m=NC[u]||u;r+=`${m}(${h}) `}t&&(e[u]=h)}}return r=r.trim(),t?r=t(e,o?"":r):o&&(r="none"),r}function tp(n,e,t){const{style:r,vars:o,transformOrigin:l}=n;let u=!1,c=!1;for(const d in e){const h=e[d];if(Rs.has(d)){u=!0;continue}else if(ay(d)){o[d]=h;continue}else{const m=ly(h,ep[d]);d.startsWith("origin")?(c=!0,l[d]=m):r[d]=m}}if(e.transform||(u||t?r.transform=OC(e,n.transform,t):r.transform&&(r.transform="none")),c){const{originX:d="50%",originY:h="50%",originZ:m=0}=l;r.transformOrigin=`${d} ${h} ${m}`}}const kC={offset:"stroke-dashoffset",array:"stroke-dasharray"},BC={offset:"strokeDashoffset",array:"strokeDasharray"};function zC(n,e,t=1,r=0,o=!0){n.pathLength=1;const l=o?kC:BC;n[l.offset]=et.transform(-r);const u=et.transform(e),c=et.transform(t);n[l.array]=`${u} ${c}`}function sv(n,e,t){return typeof n=="string"?n:et.transform(e+t*n)}function VC(n,e,t){const r=sv(e,n.x,n.width),o=sv(t,n.y,n.height);return`${r} ${o}`}function np(n,{attrX:e,attrY:t,attrScale:r,originX:o,originY:l,pathLength:u,pathSpacing:c=1,pathOffset:d=0,...h},m,g){if(tp(n,h,g),m){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:_,style:x,dimensions:M}=n;_.transform&&(M&&(x.transform=_.transform),delete _.transform),M&&(o!==void 0||l!==void 0||x.transform)&&(x.transformOrigin=VC(M,o!==void 0?o:.5,l!==void 0?l:.5)),e!==void 0&&(_.x=e),t!==void 0&&(_.y=t),r!==void 0&&(_.scale=r),u!==void 0&&zC(_,u,c,d,!1)}const ip=()=>({style:{},transform:{},transformOrigin:{},vars:{}}),uy=()=>({...ip(),attrs:{}}),rp=n=>typeof n=="string"&&n.toLowerCase()==="svg";function cy(n,{style:e,vars:t},r,o){Object.assign(n.style,e,o&&o.getProjectionStyles(r));for(const l in t)n.style.setProperty(l,t[l])}const fy=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function dy(n,e,t,r){cy(n,e,void 0,r);for(const o in e.attrs)n.setAttribute(fy.has(o)?o:Kh(o),e.attrs[o])}const Gu={};function HC(n){Object.assign(Gu,n)}function hy(n,{layout:e,layoutId:t}){return Rs.has(n)||n.startsWith("origin")||(e||t!==void 0)&&(!!Gu[n]||n==="opacity")}function sp(n,e,t){var r;const{style:o}=n,l={};for(const u in o)(An(o[u])||e.style&&An(e.style[u])||hy(u,n)||((r=t==null?void 0:t.getValue(u))===null||r===void 0?void 0:r.liveStyle)!==void 0)&&(l[u]=o[u]);return l}function py(n,e,t){const r=sp(n,e,t);for(const o in n)if(An(n[o])||An(e[o])){const l=ko.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;r[l]=n[o]}return r}function GC(n,e){try{e.dimensions=typeof n.getBBox=="function"?n.getBBox():n.getBoundingClientRect()}catch{e.dimensions={x:0,y:0,width:0,height:0}}}const ov=["x","y","width","height","cx","cy","r"],WC={useVisualState:sy({scrapeMotionValuesFromProps:py,createRenderState:uy,onUpdate:({props:n,prevProps:e,current:t,renderState:r,latestValues:o})=>{if(!t)return;let l=!!n.drag;if(!l){for(const c in o)if(Rs.has(c)){l=!0;break}}if(!l)return;let u=!e;if(e)for(let c=0;c<ov.length;c++){const d=ov[c];n[d]!==e[d]&&(u=!0)}u&&kt.read(()=>{GC(t,r),kt.render(()=>{np(r,o,rp(t.tagName),n.transformTemplate),dy(t,r)})})}})},XC={useVisualState:sy({scrapeMotionValuesFromProps:sp,createRenderState:ip})};function my(n,e,t){for(const r in e)!An(e[r])&&!hy(r,t)&&(n[r]=e[r])}function jC({transformTemplate:n},e){return Ye.useMemo(()=>{const t=ip();return tp(t,e,n),Object.assign({},t.vars,t.style)},[e])}function YC(n,e){const t=n.style||{},r={};return my(r,t,n),Object.assign(r,jC(n,e)),r}function qC(n,e){const t={},r=YC(n,e);return n.drag&&n.dragListener!==!1&&(t.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(t.tabIndex=0),t.style=r,t}function KC(n,e,t,r){const o=Ye.useMemo(()=>{const l=uy();return np(l,e,rp(r),n.transformTemplate),{...l.attrs,style:{...l.style}}},[e]);if(n.style){const l={};my(l,n.style,n),o.style={...l,...o.style}}return o}function $C(n=!1){return(t,r,o,{latestValues:l},u)=>{const d=(Zh(t)?KC:qC)(r,l,u,t),h=fC(r,typeof t=="string",n),m=t!==Ye.Fragment?{...h,...d,ref:o}:{},{children:g}=r,_=Ye.useMemo(()=>An(g)?g.get():g,[g]);return Ye.createElement(t,{...m,children:_})}}function ZC(n,e){return function(r,{forwardMotionProps:o}={forwardMotionProps:!1}){const u={...Zh(r)?WC:XC,preloadedFeatures:n,useRender:$C(o),createVisualElement:e,Component:r};return xC(u)}}function gy(n,e){if(!Array.isArray(e))return!1;const t=e.length;if(t!==n.length)return!1;for(let r=0;r<t;r++)if(e[r]!==n[r])return!1;return!0}function nc(n,e,t){const r=n.getProps();return Qh(r,e,t!==void 0?t:r.custom,n)}const QC=jh(()=>window.ScrollTimeline!==void 0);class JC{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map(e=>"finished"in e?e.finished:e))}getAll(e){return this.animations[0][e]}setAll(e,t){for(let r=0;r<this.animations.length;r++)this.animations[r][e]=t}attachTimeline(e,t){const r=this.animations.map(o=>{if(QC()&&o.attachTimeline)return o.attachTimeline(e);if(typeof t=="function")return t(o)});return()=>{r.forEach((o,l)=>{o&&o(),this.animations[l].stop()})}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let t=0;t<this.animations.length;t++)e=Math.max(e,this.animations[t].duration);return e}runAll(e){this.animations.forEach(t=>t[e]())}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class eP extends JC{then(e,t){return Promise.all(this.animations).then(e).catch(t)}}function op(n,e){return n?n[e]||n.default||n:void 0}const _h=2e4;function _y(n){let e=0;const t=50;let r=n.next(e);for(;!r.done&&e<_h;)e+=t,r=n.next(e);return e>=_h?1/0:e}function ap(n){return typeof n=="function"}function av(n,e){n.timeline=e,n.onfinish=null}const lp=n=>Array.isArray(n)&&typeof n[0]=="number",tP={linearEasing:void 0};function nP(n,e){const t=jh(n);return()=>{var r;return(r=tP[e])!==null&&r!==void 0?r:t()}}const Wu=nP(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),vy=(n,e,t=10)=>{let r="";const o=Math.max(Math.round(e/t),2);for(let l=0;l<o;l++)r+=n(Io(0,o-1,l))+", ";return`linear(${r.substring(0,r.length-2)})`};function yy(n){return!!(typeof n=="function"&&Wu()||!n||typeof n=="string"&&(n in vh||Wu())||lp(n)||Array.isArray(n)&&n.every(yy))}const Ta=([n,e,t,r])=>`cubic-bezier(${n}, ${e}, ${t}, ${r})`,vh={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ta([0,.65,.55,1]),circOut:Ta([.55,0,1,.45]),backIn:Ta([.31,.01,.66,-.59]),backOut:Ta([.33,1.53,.69,.99])};function xy(n,e){if(n)return typeof n=="function"&&Wu()?vy(n,e):lp(n)?Ta(n):Array.isArray(n)?n.map(t=>xy(t,e)||vh.easeOut):vh[n]}const yi={x:!1,y:!1};function Sy(){return yi.x||yi.y}function iP(n,e,t){var r;if(n instanceof Element)return[n];if(typeof n=="string"){let o=document;const l=(r=void 0)!==null&&r!==void 0?r:o.querySelectorAll(n);return l?Array.from(l):[]}return Array.from(n)}function My(n,e){const t=iP(n),r=new AbortController,o={passive:!0,...e,signal:r.signal};return[t,o,()=>r.abort()]}function lv(n){return!(n.pointerType==="touch"||Sy())}function rP(n,e,t={}){const[r,o,l]=My(n,t),u=c=>{if(!lv(c))return;const{target:d}=c,h=e(d,c);if(typeof h!="function"||!d)return;const m=g=>{lv(g)&&(h(g),d.removeEventListener("pointerleave",m))};d.addEventListener("pointerleave",m,o)};return r.forEach(c=>{c.addEventListener("pointerenter",u,o)}),l}const Ey=(n,e)=>e?n===e?!0:Ey(n,e.parentElement):!1,up=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,sP=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function oP(n){return sP.has(n.tagName)||n.tabIndex!==-1}const wa=new WeakSet;function uv(n){return e=>{e.key==="Enter"&&n(e)}}function _d(n,e){n.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const aP=(n,e)=>{const t=n.currentTarget;if(!t)return;const r=uv(()=>{if(wa.has(t))return;_d(t,"down");const o=uv(()=>{_d(t,"up")}),l=()=>_d(t,"cancel");t.addEventListener("keyup",o,e),t.addEventListener("blur",l,e)});t.addEventListener("keydown",r,e),t.addEventListener("blur",()=>t.removeEventListener("keydown",r),e)};function cv(n){return up(n)&&!Sy()}function lP(n,e,t={}){const[r,o,l]=My(n,t),u=c=>{const d=c.currentTarget;if(!cv(c)||wa.has(d))return;wa.add(d);const h=e(d,c),m=(x,M)=>{window.removeEventListener("pointerup",g),window.removeEventListener("pointercancel",_),!(!cv(x)||!wa.has(d))&&(wa.delete(d),typeof h=="function"&&h(x,{success:M}))},g=x=>{m(x,t.useGlobalTarget||Ey(d,x.target))},_=x=>{m(x,!1)};window.addEventListener("pointerup",g,o),window.addEventListener("pointercancel",_,o)};return r.forEach(c=>{!oP(c)&&c.getAttribute("tabindex")===null&&(c.tabIndex=0),(t.useGlobalTarget?window:c).addEventListener("pointerdown",u,o),c.addEventListener("focus",h=>aP(h,o),o)}),l}function uP(n){return n==="x"||n==="y"?yi[n]?null:(yi[n]=!0,()=>{yi[n]=!1}):yi.x||yi.y?null:(yi.x=yi.y=!0,()=>{yi.x=yi.y=!1})}const Ty=new Set(["width","height","top","left","right","bottom",...ko]);let Ou;function cP(){Ou=void 0}const Ii={now:()=>(Ou===void 0&&Ii.set(gn.isProcessing||sC.useManualTiming?gn.timestamp:performance.now()),Ou),set:n=>{Ou=n,queueMicrotask(cP)}};function cp(n,e){n.indexOf(e)===-1&&n.push(e)}function fp(n,e){const t=n.indexOf(e);t>-1&&n.splice(t,1)}class dp{constructor(){this.subscriptions=[]}add(e){return cp(this.subscriptions,e),()=>fp(this.subscriptions,e)}notify(e,t,r){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](e,t,r);else for(let l=0;l<o;l++){const u=this.subscriptions[l];u&&u(e,t,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function wy(n,e){return e?n*(1e3/e):0}const fv=30,fP=n=>!isNaN(parseFloat(n));class dP{constructor(e,t={}){this.version="12.0.3",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(r,o=!0)=>{const l=Ii.now();this.updatedAt!==l&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),o&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=Ii.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=fP(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new dp);const r=this.events[e].add(t);return e==="change"?()=>{r(),kt.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e,t=!0){!t||!this.passiveEffect?this.updateAndNotify(e,t):this.passiveEffect(e,this.updateAndNotify)}setWithVelocity(e,t,r){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-r}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=Ii.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>fv)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,fv);return wy(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Oa(n,e){return new dP(n,e)}function hP(n,e,t){n.hasValue(e)?n.getValue(e).set(t):n.addValue(e,Oa(t))}function pP(n,e){const t=nc(n,e);let{transitionEnd:r={},transition:o={},...l}=t||{};l={...l,...r};for(const u in l){const c=AC(l[u]);hP(n,u,c)}}function mP(n){return!!(An(n)&&n.add)}function yh(n,e){const t=n.getValue("willChange");if(mP(t))return t.add(e)}function Ay(n){return n.props[ny]}const Ry=(n,e,t)=>(((1-3*t+3*e)*n+(3*t-6*e))*n+3*e)*n,gP=1e-7,_P=12;function vP(n,e,t,r,o){let l,u,c=0;do u=e+(t-e)/2,l=Ry(u,r,o)-n,l>0?t=u:e=u;while(Math.abs(l)>gP&&++c<_P);return u}function Xa(n,e,t,r){if(n===e&&t===r)return Zn;const o=l=>vP(l,0,1,n,t);return l=>l===0||l===1?l:Ry(o(l),e,r)}const Cy=n=>e=>e<=.5?n(2*e)/2:(2-n(2*(1-e)))/2,Py=n=>e=>1-n(1-e),by=Xa(.33,1.53,.69,.99),hp=Py(by),Dy=Cy(hp),Ly=n=>(n*=2)<1?.5*hp(n):.5*(2-Math.pow(2,-10*(n-1))),pp=n=>1-Math.sin(Math.acos(n)),Iy=Py(pp),Uy=Cy(pp),Ny=n=>/^0[^.\s]+$/u.test(n);function yP(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||Ny(n):!0}const Pa=n=>Math.round(n*1e5)/1e5,mp=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function xP(n){return n==null}const SP=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,gp=(n,e)=>t=>!!(typeof t=="string"&&SP.test(t)&&t.startsWith(n)||e&&!xP(t)&&Object.prototype.hasOwnProperty.call(t,e)),Fy=(n,e,t)=>r=>{if(typeof r!="string")return r;const[o,l,u,c]=r.match(mp);return{[n]:parseFloat(o),[e]:parseFloat(l),[t]:parseFloat(u),alpha:c!==void 0?parseFloat(c):1}},MP=n=>or(0,255,n),vd={...Bo,transform:n=>Math.round(MP(n))},Ss={test:gp("rgb","red"),parse:Fy("red","green","blue"),transform:({red:n,green:e,blue:t,alpha:r=1})=>"rgba("+vd.transform(n)+", "+vd.transform(e)+", "+vd.transform(t)+", "+Pa(Fa.transform(r))+")"};function EP(n){let e="",t="",r="",o="";return n.length>5?(e=n.substring(1,3),t=n.substring(3,5),r=n.substring(5,7),o=n.substring(7,9)):(e=n.substring(1,2),t=n.substring(2,3),r=n.substring(3,4),o=n.substring(4,5),e+=e,t+=t,r+=r,o+=o),{red:parseInt(e,16),green:parseInt(t,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}}const xh={test:gp("#"),parse:EP,transform:Ss.transform},vo={test:gp("hsl","hue"),parse:Fy("hue","saturation","lightness"),transform:({hue:n,saturation:e,lightness:t,alpha:r=1})=>"hsla("+Math.round(n)+", "+Li.transform(Pa(e))+", "+Li.transform(Pa(t))+", "+Pa(Fa.transform(r))+")"},wn={test:n=>Ss.test(n)||xh.test(n)||vo.test(n),parse:n=>Ss.test(n)?Ss.parse(n):vo.test(n)?vo.parse(n):xh.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?Ss.transform(n):vo.transform(n)},TP=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function wP(n){var e,t;return isNaN(n)&&typeof n=="string"&&(((e=n.match(mp))===null||e===void 0?void 0:e.length)||0)+(((t=n.match(TP))===null||t===void 0?void 0:t.length)||0)>0}const Oy="number",ky="color",AP="var",RP="var(",dv="${}",CP=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function ka(n){const e=n.toString(),t=[],r={color:[],number:[],var:[]},o=[];let l=0;const c=e.replace(CP,d=>(wn.test(d)?(r.color.push(l),o.push(ky),t.push(wn.parse(d))):d.startsWith(RP)?(r.var.push(l),o.push(AP),t.push(d)):(r.number.push(l),o.push(Oy),t.push(parseFloat(d))),++l,dv)).split(dv);return{values:t,split:c,indexes:r,types:o}}function By(n){return ka(n).values}function zy(n){const{split:e,types:t}=ka(n),r=e.length;return o=>{let l="";for(let u=0;u<r;u++)if(l+=e[u],o[u]!==void 0){const c=t[u];c===Oy?l+=Pa(o[u]):c===ky?l+=wn.transform(o[u]):l+=o[u]}return l}}const PP=n=>typeof n=="number"?0:n;function bP(n){const e=By(n);return zy(n)(e.map(PP))}const Xr={test:wP,parse:By,createTransformer:zy,getAnimatableNone:bP},DP=new Set(["brightness","contrast","saturate","opacity"]);function LP(n){const[e,t]=n.slice(0,-1).split("(");if(e==="drop-shadow")return n;const[r]=t.match(mp)||[];if(!r)return n;const o=t.replace(r,"");let l=DP.has(e)?1:0;return r!==t&&(l*=100),e+"("+l+o+")"}const IP=/\b([a-z-]*)\(.*?\)/gu,Sh={...Xr,getAnimatableNone:n=>{const e=n.match(IP);return e?e.map(LP).join(" "):n}},UP={...ep,color:wn,backgroundColor:wn,outlineColor:wn,fill:wn,stroke:wn,borderColor:wn,borderTopColor:wn,borderRightColor:wn,borderBottomColor:wn,borderLeftColor:wn,filter:Sh,WebkitFilter:Sh},_p=n=>UP[n];function Vy(n,e){let t=_p(n);return t!==Sh&&(t=Xr),t.getAnimatableNone?t.getAnimatableNone(e):void 0}const NP=new Set(["auto","none","0"]);function FP(n,e,t){let r=0,o;for(;r<n.length&&!o;){const l=n[r];typeof l=="string"&&!NP.has(l)&&ka(l).values.length&&(o=n[r]),r++}if(o&&t)for(const l of e)n[l]=Vy(t,o)}const hv=n=>n===Bo||n===et,pv=(n,e)=>parseFloat(n.split(", ")[e]),mv=(n,e)=>(t,{transform:r})=>{if(r==="none"||!r)return 0;const o=r.match(/^matrix3d\((.+)\)$/u);if(o)return pv(o[1],e);{const l=r.match(/^matrix\((.+)\)$/u);return l?pv(l[1],n):0}},OP=new Set(["x","y","z"]),kP=ko.filter(n=>!OP.has(n));function BP(n){const e=[];return kP.forEach(t=>{const r=n.getValue(t);r!==void 0&&(e.push([t,r.get()]),r.set(t.startsWith("scale")?1:0))}),e}const No={width:({x:n},{paddingLeft:e="0",paddingRight:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),height:({y:n},{paddingTop:e="0",paddingBottom:t="0"})=>n.max-n.min-parseFloat(e)-parseFloat(t),top:(n,{top:e})=>parseFloat(e),left:(n,{left:e})=>parseFloat(e),bottom:({y:n},{top:e})=>parseFloat(e)+(n.max-n.min),right:({x:n},{left:e})=>parseFloat(e)+(n.max-n.min),x:mv(4,13),y:mv(5,14)};No.translateX=No.x;No.translateY=No.y;const Ms=new Set;let Mh=!1,Eh=!1;function Hy(){if(Eh){const n=Array.from(Ms).filter(r=>r.needsMeasurement),e=new Set(n.map(r=>r.element)),t=new Map;e.forEach(r=>{const o=BP(r);o.length&&(t.set(r,o),r.render())}),n.forEach(r=>r.measureInitialState()),e.forEach(r=>{r.render();const o=t.get(r);o&&o.forEach(([l,u])=>{var c;(c=r.getValue(l))===null||c===void 0||c.set(u)})}),n.forEach(r=>r.measureEndState()),n.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Eh=!1,Mh=!1,Ms.forEach(n=>n.complete()),Ms.clear()}function Gy(){Ms.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(Eh=!0)})}function zP(){Gy(),Hy()}class vp{constructor(e,t,r,o,l,u=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=r,this.motionValue=o,this.element=l,this.isAsync=u}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Ms.add(this),Mh||(Mh=!0,kt.read(Gy),kt.resolveKeyframes(Hy))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:t,element:r,motionValue:o}=this;for(let l=0;l<e.length;l++)if(e[l]===null)if(l===0){const u=o==null?void 0:o.get(),c=e[e.length-1];if(u!==void 0)e[0]=u;else if(r&&t){const d=r.readValue(t,c);d!=null&&(e[0]=d)}e[0]===void 0&&(e[0]=c),o&&u===void 0&&o.set(e[0])}else e[l]=e[l-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),Ms.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Ms.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const Wy=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n),VP=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function HP(n){const e=VP.exec(n);if(!e)return[,];const[,t,r,o]=e;return[`--${t??r}`,o]}function Xy(n,e,t=1){const[r,o]=HP(n);if(!r)return;const l=window.getComputedStyle(e).getPropertyValue(r);if(l){const u=l.trim();return Wy(u)?parseFloat(u):u}return Jh(o)?Xy(o,e,t+1):o}const jy=n=>e=>e.test(n),GP={test:n=>n==="auto",parse:n=>n},Yy=[Bo,et,Li,Fr,LC,DC,GP],gv=n=>Yy.find(jy(n));class qy extends vp{constructor(e,t,r,o,l){super(e,t,r,o,l,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:t,name:r}=this;if(!t||!t.current)return;super.readKeyframes();for(let d=0;d<e.length;d++){let h=e[d];if(typeof h=="string"&&(h=h.trim(),Jh(h))){const m=Xy(h,t.current);m!==void 0&&(e[d]=m),d===e.length-1&&(this.finalKeyframe=h)}}if(this.resolveNoneKeyframes(),!Ty.has(r)||e.length!==2)return;const[o,l]=e,u=gv(o),c=gv(l);if(u!==c)if(hv(u)&&hv(c))for(let d=0;d<e.length;d++){const h=e[d];typeof h=="string"&&(e[d]=parseFloat(h))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:t}=this,r=[];for(let o=0;o<e.length;o++)yP(e[o])&&r.push(o);r.length&&FP(e,r,t)}measureInitialState(){const{element:e,unresolvedKeyframes:t,name:r}=this;if(!e||!e.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=No[r](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;const o=t[t.length-1];o!==void 0&&e.getValue(r,o).jump(o,!1)}measureEndState(){var e;const{element:t,name:r,unresolvedKeyframes:o}=this;if(!t||!t.current)return;const l=t.getValue(r);l&&l.jump(this.measuredOrigin,!1);const u=o.length-1,c=o[u];o[u]=No[r](t.measureViewportBox(),window.getComputedStyle(t.current)),c!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=c),!((e=this.removedTransforms)===null||e===void 0)&&e.length&&this.removedTransforms.forEach(([d,h])=>{t.getValue(d).set(h)}),this.resolveNoneKeyframes()}}const _v=(n,e)=>e==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(Xr.test(n)||n==="0")&&!n.startsWith("url("));function WP(n){const e=n[0];if(n.length===1)return!0;for(let t=0;t<n.length;t++)if(n[t]!==e)return!0}function XP(n,e,t,r){const o=n[0];if(o===null)return!1;if(e==="display"||e==="visibility")return!0;const l=n[n.length-1],u=_v(o,e),c=_v(l,e);return!u||!c?!1:WP(n)||(t==="spring"||ap(t))&&r}const jP=n=>n!==null;function ic(n,{repeat:e,repeatType:t="loop"},r){const o=n.filter(jP),l=e&&t!=="loop"&&e%2===1?0:o.length-1;return!l||r===void 0?o[l]:r}const YP=40;class Ky{constructor({autoplay:e=!0,delay:t=0,type:r="keyframes",repeat:o=0,repeatDelay:l=0,repeatType:u="loop",...c}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=Ii.now(),this.options={autoplay:e,delay:t,type:r,repeat:o,repeatDelay:l,repeatType:u,...c},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt?this.resolvedAt-this.createdAt>YP?this.resolvedAt:this.createdAt:this.createdAt}get resolved(){return!this._resolved&&!this.hasAttemptedResolve&&zP(),this._resolved}onKeyframesResolved(e,t){this.resolvedAt=Ii.now(),this.hasAttemptedResolve=!0;const{name:r,type:o,velocity:l,delay:u,onComplete:c,onUpdate:d,isGenerator:h}=this.options;if(!h&&!XP(e,r,o,l))if(u)this.options.duration=0;else{d&&d(ic(e,this.options,t)),c&&c(),this.resolveFinishedPromise();return}const m=this.initPlayback(e,t);m!==!1&&(this._resolved={keyframes:e,finalKeyframe:t,...m},this.onPostResolved())}onPostResolved(){}then(e,t){return this.currentFinishedPromise.then(e,t)}flatten(){this.options.type="keyframes",this.options.ease="linear"}updateFinishedPromise(){this.currentFinishedPromise=new Promise(e=>{this.resolveFinishedPromise=e})}}const Gt=(n,e,t)=>n+(e-n)*t;function yd(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*(2/3-t)*6:n}function qP({hue:n,saturation:e,lightness:t,alpha:r}){n/=360,e/=100,t/=100;let o=0,l=0,u=0;if(!e)o=l=u=t;else{const c=t<.5?t*(1+e):t+e-t*e,d=2*t-c;o=yd(d,c,n+1/3),l=yd(d,c,n),u=yd(d,c,n-1/3)}return{red:Math.round(o*255),green:Math.round(l*255),blue:Math.round(u*255),alpha:r}}function Xu(n,e){return t=>t>0?e:n}const xd=(n,e,t)=>{const r=n*n,o=t*(e*e-r)+r;return o<0?0:Math.sqrt(o)},KP=[xh,Ss,vo],$P=n=>KP.find(e=>e.test(n));function vv(n){const e=$P(n);if(!e)return!1;let t=e.parse(n);return e===vo&&(t=qP(t)),t}const yv=(n,e)=>{const t=vv(n),r=vv(e);if(!t||!r)return Xu(n,e);const o={...t};return l=>(o.red=xd(t.red,r.red,l),o.green=xd(t.green,r.green,l),o.blue=xd(t.blue,r.blue,l),o.alpha=Gt(t.alpha,r.alpha,l),Ss.transform(o))},ZP=(n,e)=>t=>e(n(t)),ja=(...n)=>n.reduce(ZP),Th=new Set(["none","hidden"]);function QP(n,e){return Th.has(n)?t=>t<=0?n:e:t=>t>=1?e:n}function JP(n,e){return t=>Gt(n,e,t)}function yp(n){return typeof n=="number"?JP:typeof n=="string"?Jh(n)?Xu:wn.test(n)?yv:nb:Array.isArray(n)?$y:typeof n=="object"?wn.test(n)?yv:eb:Xu}function $y(n,e){const t=[...n],r=t.length,o=n.map((l,u)=>yp(l)(l,e[u]));return l=>{for(let u=0;u<r;u++)t[u]=o[u](l);return t}}function eb(n,e){const t={...n,...e},r={};for(const o in t)n[o]!==void 0&&e[o]!==void 0&&(r[o]=yp(n[o])(n[o],e[o]));return o=>{for(const l in r)t[l]=r[l](o);return t}}function tb(n,e){var t;const r=[],o={color:0,var:0,number:0};for(let l=0;l<e.values.length;l++){const u=e.types[l],c=n.indexes[u][o[u]],d=(t=n.values[c])!==null&&t!==void 0?t:0;r[l]=d,o[u]++}return r}const nb=(n,e)=>{const t=Xr.createTransformer(e),r=ka(n),o=ka(e);return r.indexes.var.length===o.indexes.var.length&&r.indexes.color.length===o.indexes.color.length&&r.indexes.number.length>=o.indexes.number.length?Th.has(n)&&!o.values.length||Th.has(e)&&!r.values.length?QP(n,e):ja($y(tb(r,o),o.values),t):Xu(n,e)};function Zy(n,e,t){return typeof n=="number"&&typeof e=="number"&&typeof t=="number"?Gt(n,e,t):yp(n)(n,e)}const ib=5;function Qy(n,e,t){const r=Math.max(e-ib,0);return wy(t-n(r),e-r)}const Yt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},xv=.001;function rb({duration:n=Yt.duration,bounce:e=Yt.bounce,velocity:t=Yt.velocity,mass:r=Yt.mass}){let o,l,u=1-e;u=or(Yt.minDamping,Yt.maxDamping,u),n=or(Yt.minDuration,Yt.maxDuration,ir(n)),u<1?(o=h=>{const m=h*u,g=m*n,_=m-t,x=wh(h,u),M=Math.exp(-g);return xv-_/x*M},l=h=>{const g=h*u*n,_=g*t+t,x=Math.pow(u,2)*Math.pow(h,2)*n,M=Math.exp(-g),E=wh(Math.pow(h,2),u);return(-o(h)+xv>0?-1:1)*((_-x)*M)/E}):(o=h=>{const m=Math.exp(-h*n),g=(h-t)*n+1;return-.001+m*g},l=h=>{const m=Math.exp(-h*n),g=(t-h)*(n*n);return m*g});const c=5/n,d=ob(o,l,c);if(n=nr(n),isNaN(d))return{stiffness:Yt.stiffness,damping:Yt.damping,duration:n};{const h=Math.pow(d,2)*r;return{stiffness:h,damping:u*2*Math.sqrt(r*h),duration:n}}}const sb=12;function ob(n,e,t){let r=t;for(let o=1;o<sb;o++)r=r-n(r)/e(r);return r}function wh(n,e){return n*Math.sqrt(1-e*e)}const ab=["duration","bounce"],lb=["stiffness","damping","mass"];function Sv(n,e){return e.some(t=>n[t]!==void 0)}function ub(n){let e={velocity:Yt.velocity,stiffness:Yt.stiffness,damping:Yt.damping,mass:Yt.mass,isResolvedFromDuration:!1,...n};if(!Sv(n,lb)&&Sv(n,ab))if(n.visualDuration){const t=n.visualDuration,r=2*Math.PI/(t*1.2),o=r*r,l=2*or(.05,1,1-(n.bounce||0))*Math.sqrt(o);e={...e,mass:Yt.mass,stiffness:o,damping:l}}else{const t=rb(n);e={...e,...t,mass:Yt.mass},e.isResolvedFromDuration=!0}return e}function Jy(n=Yt.visualDuration,e=Yt.bounce){const t=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:e}:n;let{restSpeed:r,restDelta:o}=t;const l=t.keyframes[0],u=t.keyframes[t.keyframes.length-1],c={done:!1,value:l},{stiffness:d,damping:h,mass:m,duration:g,velocity:_,isResolvedFromDuration:x}=ub({...t,velocity:-ir(t.velocity||0)}),M=_||0,E=h/(2*Math.sqrt(d*m)),S=u-l,y=ir(Math.sqrt(d/m)),L=Math.abs(S)<5;r||(r=L?Yt.restSpeed.granular:Yt.restSpeed.default),o||(o=L?Yt.restDelta.granular:Yt.restDelta.default);let b;if(E<1){const O=wh(y,E);b=F=>{const U=Math.exp(-E*y*F);return u-U*((M+E*y*S)/O*Math.sin(O*F)+S*Math.cos(O*F))}}else if(E===1)b=O=>u-Math.exp(-y*O)*(S+(M+y*S)*O);else{const O=y*Math.sqrt(E*E-1);b=F=>{const U=Math.exp(-E*y*F),z=Math.min(O*F,300);return u-U*((M+E*y*S)*Math.sinh(z)+O*S*Math.cosh(z))/O}}const C={calculatedDuration:x&&g||null,next:O=>{const F=b(O);if(x)c.done=O>=g;else{let U=0;E<1&&(U=O===0?nr(M):Qy(b,O,F));const z=Math.abs(U)<=r,P=Math.abs(u-F)<=o;c.done=z&&P}return c.value=c.done?u:F,c},toString:()=>{const O=Math.min(_y(C),_h),F=vy(U=>C.next(O*U).value,O,30);return O+"ms "+F}};return C}function Mv({keyframes:n,velocity:e=0,power:t=.8,timeConstant:r=325,bounceDamping:o=10,bounceStiffness:l=500,modifyTarget:u,min:c,max:d,restDelta:h=.5,restSpeed:m}){const g=n[0],_={done:!1,value:g},x=z=>c!==void 0&&z<c||d!==void 0&&z>d,M=z=>c===void 0?d:d===void 0||Math.abs(c-z)<Math.abs(d-z)?c:d;let E=t*e;const S=g+E,y=u===void 0?S:u(S);y!==S&&(E=y-g);const L=z=>-E*Math.exp(-z/r),b=z=>y+L(z),C=z=>{const P=L(z),R=b(z);_.done=Math.abs(P)<=h,_.value=_.done?y:R};let O,F;const U=z=>{x(_.value)&&(O=z,F=Jy({keyframes:[_.value,M(_.value)],velocity:Qy(b,z,_.value),damping:o,stiffness:l,restDelta:h,restSpeed:m}))};return U(0),{calculatedDuration:null,next:z=>{let P=!1;return!F&&O===void 0&&(P=!0,C(z),U(z)),O!==void 0&&z>=O?F.next(z-O):(!P&&C(z),_)}}}const cb=Xa(.42,0,1,1),fb=Xa(0,0,.58,1),ex=Xa(.42,0,.58,1),db=n=>Array.isArray(n)&&typeof n[0]!="number",Ev={linear:Zn,easeIn:cb,easeInOut:ex,easeOut:fb,circIn:pp,circInOut:Uy,circOut:Iy,backIn:hp,backInOut:Dy,backOut:by,anticipate:Ly},Tv=n=>{if(lp(n)){mh(n.length===4);const[e,t,r,o]=n;return Xa(e,t,r,o)}else if(typeof n=="string")return mh(Ev[n]!==void 0),Ev[n];return n};function hb(n,e,t){const r=[],o=t||Zy,l=n.length-1;for(let u=0;u<l;u++){let c=o(n[u],n[u+1]);if(e){const d=Array.isArray(e)?e[u]||Zn:e;c=ja(d,c)}r.push(c)}return r}function pb(n,e,{clamp:t=!0,ease:r,mixer:o}={}){const l=n.length;if(mh(l===e.length),l===1)return()=>e[0];if(l===2&&e[0]===e[1])return()=>e[1];const u=n[0]===n[1];n[0]>n[l-1]&&(n=[...n].reverse(),e=[...e].reverse());const c=hb(e,r,o),d=c.length,h=m=>{if(u&&m<n[0])return e[0];let g=0;if(d>1)for(;g<n.length-2&&!(m<n[g+1]);g++);const _=Io(n[g],n[g+1],m);return c[g](_)};return t?m=>h(or(n[0],n[l-1],m)):h}function mb(n,e){const t=n[n.length-1];for(let r=1;r<=e;r++){const o=Io(0,e,r);n.push(Gt(t,1,o))}}function gb(n){const e=[0];return mb(e,n.length-1),e}function _b(n,e){return n.map(t=>t*e)}function vb(n,e){return n.map(()=>e||ex).splice(0,n.length-1)}function ju({duration:n=300,keyframes:e,times:t,ease:r="easeInOut"}){const o=db(r)?r.map(Tv):Tv(r),l={done:!1,value:e[0]},u=_b(t&&t.length===e.length?t:gb(e),n),c=pb(u,e,{ease:Array.isArray(o)?o:vb(e,o)});return{calculatedDuration:n,next:d=>(l.value=c(d),l.done=d>=n,l)}}const yb=n=>{const e=({timestamp:t})=>n(t);return{start:()=>kt.update(e,!0),stop:()=>Wr(e),now:()=>gn.isProcessing?gn.timestamp:Ii.now()}},xb={decay:Mv,inertia:Mv,tween:ju,keyframes:ju,spring:Jy},Sb=n=>n/100;class xp extends Ky{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.teardown();const{onStop:d}=this.options;d&&d()};const{name:t,motionValue:r,element:o,keyframes:l}=this.options,u=(o==null?void 0:o.KeyframeResolver)||vp,c=(d,h)=>this.onKeyframesResolved(d,h);this.resolver=new u(l,c,t,r,o),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(e){const{type:t="keyframes",repeat:r=0,repeatDelay:o=0,repeatType:l,velocity:u=0}=this.options,c=ap(t)?t:xb[t]||ju;let d,h;c!==ju&&typeof e[0]!="number"&&(d=ja(Sb,Zy(e[0],e[1])),e=[0,100]);const m=c({...this.options,keyframes:e});l==="mirror"&&(h=c({...this.options,keyframes:[...e].reverse(),velocity:-u})),m.calculatedDuration===null&&(m.calculatedDuration=_y(m));const{calculatedDuration:g}=m,_=g+o,x=_*(r+1)-o;return{generator:m,mirroredGenerator:h,mapPercentToKeyframes:d,calculatedDuration:g,resolvedDuration:_,totalDuration:x}}onPostResolved(){const{autoplay:e=!0}=this.options;this.play(),this.pendingPlayState==="paused"||!e?this.pause():this.state=this.pendingPlayState}tick(e,t=!1){const{resolved:r}=this;if(!r){const{keyframes:z}=this.options;return{done:!0,value:z[z.length-1]}}const{finalKeyframe:o,generator:l,mirroredGenerator:u,mapPercentToKeyframes:c,keyframes:d,calculatedDuration:h,totalDuration:m,resolvedDuration:g}=r;if(this.startTime===null)return l.next(0);const{delay:_,repeat:x,repeatType:M,repeatDelay:E,onUpdate:S}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-m/this.speed,this.startTime)),t?this.currentTime=e:this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const y=this.currentTime-_*(this.speed>=0?1:-1),L=this.speed>=0?y<0:y>m;this.currentTime=Math.max(y,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=m);let b=this.currentTime,C=l;if(x){const z=Math.min(this.currentTime,m)/g;let P=Math.floor(z),R=z%1;!R&&z>=1&&(R=1),R===1&&P--,P=Math.min(P,x+1),!!(P%2)&&(M==="reverse"?(R=1-R,E&&(R-=E/g)):M==="mirror"&&(C=u)),b=or(0,1,R)*g}const O=L?{done:!1,value:d[0]}:C.next(b);c&&(O.value=c(O.value));let{done:F}=O;!L&&h!==null&&(F=this.speed>=0?this.currentTime>=m:this.currentTime<=0);const U=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&F);return U&&o!==void 0&&(O.value=ic(d,this.options,o)),S&&S(O.value),U&&this.finish(),O}get duration(){const{resolved:e}=this;return e?ir(e.calculatedDuration):0}get time(){return ir(this.currentTime)}set time(e){e=nr(e),this.currentTime=e,this.holdTime!==null||this.speed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const t=this.playbackSpeed!==e;this.playbackSpeed=e,t&&(this.time=ir(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;const{driver:e=yb,onPlay:t,startTime:r}=this.options;this.driver||(this.driver=e(l=>this.tick(l))),t&&t();const o=this.driver.now();this.holdTime!==null?this.startTime=o-this.holdTime:this.startTime?this.state==="finished"&&(this.startTime=o):this.startTime=r??this.calcStartTime(),this.state==="finished"&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var e;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=(e=this.currentTime)!==null&&e!==void 0?e:0}complete(){this.state!=="running"&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){this.cancelTime!==null&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}}const Mb=new Set(["opacity","clipPath","filter","transform"]);function Eb(n,e,t,{delay:r=0,duration:o=300,repeat:l=0,repeatType:u="loop",ease:c="easeInOut",times:d}={}){const h={[e]:t};d&&(h.offset=d);const m=xy(c,o);return Array.isArray(m)&&(h.easing=m),n.animate(h,{delay:r,duration:o,easing:Array.isArray(m)?"linear":m,fill:"both",iterations:l+1,direction:u==="reverse"?"alternate":"normal"})}const Tb=jh(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Yu=10,wb=2e4;function Ab(n){return ap(n.type)||n.type==="spring"||!yy(n.ease)}function Rb(n,e){const t=new xp({...e,keyframes:n,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:n[0]};const o=[];let l=0;for(;!r.done&&l<wb;)r=t.sample(l),o.push(r.value),l+=Yu;return{times:void 0,keyframes:o,duration:l-Yu,ease:"linear"}}const tx={anticipate:Ly,backInOut:Dy,circInOut:Uy};function Cb(n){return n in tx}class wv extends Ky{constructor(e){super(e);const{name:t,motionValue:r,element:o,keyframes:l}=this.options;this.resolver=new qy(l,(u,c)=>this.onKeyframesResolved(u,c),t,r,o),this.resolver.scheduleResolve()}initPlayback(e,t){let{duration:r=300,times:o,ease:l,type:u,motionValue:c,name:d,startTime:h}=this.options;if(!c.owner||!c.owner.current)return!1;if(typeof l=="string"&&Wu()&&Cb(l)&&(l=tx[l]),Ab(this.options)){const{onComplete:g,onUpdate:_,motionValue:x,element:M,...E}=this.options,S=Rb(e,E);e=S.keyframes,e.length===1&&(e[1]=e[0]),r=S.duration,o=S.times,l=S.ease,u="keyframes"}const m=Eb(c.owner.current,d,e,{...this.options,duration:r,times:o,ease:l});return m.startTime=h??this.calcStartTime(),this.pendingTimeline?(av(m,this.pendingTimeline),this.pendingTimeline=void 0):m.onfinish=()=>{const{onComplete:g}=this.options;c.set(ic(e,this.options,t)),g&&g(),this.cancel(),this.resolveFinishedPromise()},{animation:m,duration:r,times:o,type:u,ease:l,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:t}=e;return ir(t)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:t}=e;return ir(t.currentTime||0)}set time(e){const{resolved:t}=this;if(!t)return;const{animation:r}=t;r.currentTime=nr(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:t}=e;return t.playbackRate}set speed(e){const{resolved:t}=this;if(!t)return;const{animation:r}=t;r.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:t}=e;return t.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:t}=e;return t.startTime}attachTimeline(e){if(!this._resolved)this.pendingTimeline=e;else{const{resolved:t}=this;if(!t)return Zn;const{animation:r}=t;av(r,e)}return Zn}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:t}=e;t.playState==="finished"&&this.updateFinishedPromise(),t.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:t}=e;t.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,this.state==="idle")return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:t,keyframes:r,duration:o,type:l,ease:u,times:c}=e;if(t.playState==="idle"||t.playState==="finished")return;if(this.time){const{motionValue:h,onUpdate:m,onComplete:g,element:_,...x}=this.options,M=new xp({...x,keyframes:r,duration:o,type:l,ease:u,times:c,isGenerator:!0}),E=nr(this.time);h.setWithVelocity(M.sample(E-Yu).value,M.sample(E).value,Yu)}const{onStop:d}=this.options;d&&d(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:t,name:r,repeatDelay:o,repeatType:l,damping:u,type:c}=e;if(!t||!t.owner||!(t.owner.current instanceof HTMLElement))return!1;const{onUpdate:d,transformTemplate:h}=t.owner.getProps();return Tb()&&r&&Mb.has(r)&&!d&&!h&&!o&&l!=="mirror"&&u!==0&&c!=="inertia"}}const Pb={type:"spring",stiffness:500,damping:25,restSpeed:10},bb=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),Db={type:"keyframes",duration:.8},Lb={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Ib=(n,{keyframes:e})=>e.length>2?Db:Rs.has(n)?n.startsWith("scale")?bb(e[1]):Pb:Lb;function Ub({when:n,delay:e,delayChildren:t,staggerChildren:r,staggerDirection:o,repeat:l,repeatType:u,repeatDelay:c,from:d,elapsed:h,...m}){return!!Object.keys(m).length}const Sp=(n,e,t,r={},o,l)=>u=>{const c=op(r,n)||{},d=c.delay||r.delay||0;let{elapsed:h=0}=r;h=h-nr(d);let m={keyframes:Array.isArray(t)?t:[null,t],ease:"easeOut",velocity:e.getVelocity(),...c,delay:-h,onUpdate:_=>{e.set(_),c.onUpdate&&c.onUpdate(_)},onComplete:()=>{u(),c.onComplete&&c.onComplete()},name:n,motionValue:e,element:l?void 0:o};Ub(c)||(m={...m,...Ib(n,m)}),m.duration&&(m.duration=nr(m.duration)),m.repeatDelay&&(m.repeatDelay=nr(m.repeatDelay)),m.from!==void 0&&(m.keyframes[0]=m.from);let g=!1;if((m.type===!1||m.duration===0&&!m.repeatDelay)&&(m.duration=0,m.delay===0&&(g=!0)),g&&!l&&e.get()!==void 0){const _=ic(m.keyframes,c);if(_!==void 0)return kt.update(()=>{m.onUpdate(_),m.onComplete()}),new eP([])}return!l&&wv.supports(m)?new wv(m):new xp(m)};function Nb({protectedKeys:n,needsAnimating:e},t){const r=n.hasOwnProperty(t)&&e[t]!==!0;return e[t]=!1,r}function nx(n,e,{delay:t=0,transitionOverride:r,type:o}={}){var l;let{transition:u=n.getDefaultTransition(),transitionEnd:c,...d}=e;r&&(u=r);const h=[],m=o&&n.animationState&&n.animationState.getState()[o];for(const g in d){const _=n.getValue(g,(l=n.latestValues[g])!==null&&l!==void 0?l:null),x=d[g];if(x===void 0||m&&Nb(m,g))continue;const M={delay:t,...op(u||{},g)};let E=!1;if(window.MotionHandoffAnimation){const y=Ay(n);if(y){const L=window.MotionHandoffAnimation(y,g,kt);L!==null&&(M.startTime=L,E=!0)}}yh(n,g),_.start(Sp(g,_,x,n.shouldReduceMotion&&Ty.has(g)?{type:!1}:M,n,E));const S=_.animation;S&&h.push(S)}return c&&Promise.all(h).then(()=>{kt.update(()=>{c&&pP(n,c)})}),h}function Ah(n,e,t={}){var r;const o=nc(n,e,t.type==="exit"?(r=n.presenceContext)===null||r===void 0?void 0:r.custom:void 0);let{transition:l=n.getDefaultTransition()||{}}=o||{};t.transitionOverride&&(l=t.transitionOverride);const u=o?()=>Promise.all(nx(n,o,t)):()=>Promise.resolve(),c=n.variantChildren&&n.variantChildren.size?(h=0)=>{const{delayChildren:m=0,staggerChildren:g,staggerDirection:_}=l;return Fb(n,e,m+h,g,_,t)}:()=>Promise.resolve(),{when:d}=l;if(d){const[h,m]=d==="beforeChildren"?[u,c]:[c,u];return h().then(()=>m())}else return Promise.all([u(),c(t.delay)])}function Fb(n,e,t=0,r=0,o=1,l){const u=[],c=(n.variantChildren.size-1)*r,d=o===1?(h=0)=>h*r:(h=0)=>c-h*r;return Array.from(n.variantChildren).sort(Ob).forEach((h,m)=>{h.notify("AnimationStart",e),u.push(Ah(h,e,{...l,delay:t+d(m)}).then(()=>h.notify("AnimationComplete",e)))}),Promise.all(u)}function Ob(n,e){return n.sortNodePosition(e)}function kb(n,e,t={}){n.notify("AnimationStart",e);let r;if(Array.isArray(e)){const o=e.map(l=>Ah(n,l,t));r=Promise.all(o)}else if(typeof e=="string")r=Ah(n,e,t);else{const o=typeof e=="function"?nc(n,e,t.custom):e;r=Promise.all(nx(n,o,t))}return r.then(()=>{n.notify("AnimationComplete",e)})}const Bb=qh.length;function ix(n){if(!n)return;if(!n.isControllingVariants){const t=n.parent?ix(n.parent)||{}:{};return n.props.initial!==void 0&&(t.initial=n.props.initial),t}const e={};for(let t=0;t<Bb;t++){const r=qh[t],o=n.props[r];(Na(o)||o===!1)&&(e[r]=o)}return e}const zb=[...Yh].reverse(),Vb=Yh.length;function Hb(n){return e=>Promise.all(e.map(({animation:t,options:r})=>kb(n,t,r)))}function Gb(n){let e=Hb(n),t=Av(),r=!0;const o=d=>(h,m)=>{var g;const _=nc(n,m,d==="exit"?(g=n.presenceContext)===null||g===void 0?void 0:g.custom:void 0);if(_){const{transition:x,transitionEnd:M,...E}=_;h={...h,...E,...M}}return h};function l(d){e=d(n)}function u(d){const{props:h}=n,m=ix(n.parent)||{},g=[],_=new Set;let x={},M=1/0;for(let S=0;S<Vb;S++){const y=zb[S],L=t[y],b=h[y]!==void 0?h[y]:m[y],C=Na(b),O=y===d?L.isActive:null;O===!1&&(M=S);let F=b===m[y]&&b!==h[y]&&C;if(F&&r&&n.manuallyAnimateOnMount&&(F=!1),L.protectedKeys={...x},!L.isActive&&O===null||!b&&!L.prevProp||ec(b)||typeof b=="boolean")continue;const U=Wb(L.prevProp,b);let z=U||y===d&&L.isActive&&!F&&C||S>M&&C,P=!1;const R=Array.isArray(b)?b:[b];let H=R.reduce(o(y),{});O===!1&&(H={});const{prevResolvedValues:oe={}}=L,te={...oe,...H},ue=ie=>{z=!0,_.has(ie)&&(P=!0,_.delete(ie)),L.needsAnimating[ie]=!0;const B=n.getValue(ie);B&&(B.liveStyle=!1)};for(const ie in te){const B=H[ie],ae=oe[ie];if(x.hasOwnProperty(ie))continue;let re=!1;gh(B)&&gh(ae)?re=!gy(B,ae):re=B!==ae,re?B!=null?ue(ie):_.add(ie):B!==void 0&&_.has(ie)?ue(ie):L.protectedKeys[ie]=!0}L.prevProp=b,L.prevResolvedValues=H,L.isActive&&(x={...x,...H}),r&&n.blockInitialAnimation&&(z=!1),z&&(!(F&&U)||P)&&g.push(...R.map(ie=>({animation:ie,options:{type:y}})))}if(_.size){const S={};_.forEach(y=>{const L=n.getBaseTarget(y),b=n.getValue(y);b&&(b.liveStyle=!0),S[y]=L??null}),g.push({animation:S})}let E=!!g.length;return r&&(h.initial===!1||h.initial===h.animate)&&!n.manuallyAnimateOnMount&&(E=!1),r=!1,E?e(g):Promise.resolve()}function c(d,h){var m;if(t[d].isActive===h)return Promise.resolve();(m=n.variantChildren)===null||m===void 0||m.forEach(_=>{var x;return(x=_.animationState)===null||x===void 0?void 0:x.setActive(d,h)}),t[d].isActive=h;const g=u(d);for(const _ in t)t[_].protectedKeys={};return g}return{animateChanges:u,setActive:c,setAnimateFunction:l,getState:()=>t,reset:()=>{t=Av(),r=!0}}}function Wb(n,e){return typeof e=="string"?e!==n:Array.isArray(e)?!gy(e,n):!1}function hs(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Av(){return{animate:hs(!0),whileInView:hs(),whileHover:hs(),whileTap:hs(),whileDrag:hs(),whileFocus:hs(),exit:hs()}}class jr{constructor(e){this.isMounted=!1,this.node=e}update(){}}class Xb extends jr{constructor(e){super(e),e.animationState||(e.animationState=Gb(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();ec(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)===null||e===void 0||e.call(this)}}let jb=0;class Yb extends jr{constructor(){super(...arguments),this.id=jb++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;const o=this.node.animationState.setActive("exit",!e);t&&!e&&o.then(()=>t(this.id))}mount(){const{register:e}=this.node.presenceContext||{};e&&(this.unmount=e(this.id))}unmount(){}}const qb={animation:{Feature:Xb},exit:{Feature:Yb}};function Ba(n,e,t,r={passive:!0}){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t)}function Ya(n){return{point:{x:n.pageX,y:n.pageY}}}const Kb=n=>e=>up(e)&&n(e,Ya(e));function ba(n,e,t,r){return Ba(n,e,Kb(t),r)}const Rv=(n,e)=>Math.abs(n-e);function $b(n,e){const t=Rv(n.x,e.x),r=Rv(n.y,e.y);return Math.sqrt(t**2+r**2)}class rx{constructor(e,t,{transformPagePoint:r,contextWindow:o,dragSnapToOrigin:l=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const g=Md(this.lastMoveEventInfo,this.history),_=this.startEvent!==null,x=$b(g.offset,{x:0,y:0})>=3;if(!_&&!x)return;const{point:M}=g,{timestamp:E}=gn;this.history.push({...M,timestamp:E});const{onStart:S,onMove:y}=this.handlers;_||(S&&S(this.lastMoveEvent,g),this.startEvent=this.lastMoveEvent),y&&y(this.lastMoveEvent,g)},this.handlePointerMove=(g,_)=>{this.lastMoveEvent=g,this.lastMoveEventInfo=Sd(_,this.transformPagePoint),kt.update(this.updatePoint,!0)},this.handlePointerUp=(g,_)=>{this.end();const{onEnd:x,onSessionEnd:M,resumeAnimation:E}=this.handlers;if(this.dragSnapToOrigin&&E&&E(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const S=Md(g.type==="pointercancel"?this.lastMoveEventInfo:Sd(_,this.transformPagePoint),this.history);this.startEvent&&x&&x(g,S),M&&M(g,S)},!up(e))return;this.dragSnapToOrigin=l,this.handlers=t,this.transformPagePoint=r,this.contextWindow=o||window;const u=Ya(e),c=Sd(u,this.transformPagePoint),{point:d}=c,{timestamp:h}=gn;this.history=[{...d,timestamp:h}];const{onSessionStart:m}=t;m&&m(e,Md(c,this.history)),this.removeListeners=ja(ba(this.contextWindow,"pointermove",this.handlePointerMove),ba(this.contextWindow,"pointerup",this.handlePointerUp),ba(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),Wr(this.updatePoint)}}function Sd(n,e){return e?{point:e(n.point)}:n}function Cv(n,e){return{x:n.x-e.x,y:n.y-e.y}}function Md({point:n},e){return{point:n,delta:Cv(n,sx(e)),offset:Cv(n,Zb(e)),velocity:Qb(e,.1)}}function Zb(n){return n[0]}function sx(n){return n[n.length-1]}function Qb(n,e){if(n.length<2)return{x:0,y:0};let t=n.length-1,r=null;const o=sx(n);for(;t>=0&&(r=n[t],!(o.timestamp-r.timestamp>nr(e)));)t--;if(!r)return{x:0,y:0};const l=ir(o.timestamp-r.timestamp);if(l===0)return{x:0,y:0};const u={x:(o.x-r.x)/l,y:(o.y-r.y)/l};return u.x===1/0&&(u.x=0),u.y===1/0&&(u.y=0),u}const ox=1e-4,Jb=1-ox,eD=1+ox,ax=.01,tD=0-ax,nD=0+ax;function Qn(n){return n.max-n.min}function iD(n,e,t){return Math.abs(n-e)<=t}function Pv(n,e,t,r=.5){n.origin=r,n.originPoint=Gt(e.min,e.max,n.origin),n.scale=Qn(t)/Qn(e),n.translate=Gt(t.min,t.max,n.origin)-n.originPoint,(n.scale>=Jb&&n.scale<=eD||isNaN(n.scale))&&(n.scale=1),(n.translate>=tD&&n.translate<=nD||isNaN(n.translate))&&(n.translate=0)}function Da(n,e,t,r){Pv(n.x,e.x,t.x,r?r.originX:void 0),Pv(n.y,e.y,t.y,r?r.originY:void 0)}function bv(n,e,t){n.min=t.min+e.min,n.max=n.min+Qn(e)}function rD(n,e,t){bv(n.x,e.x,t.x),bv(n.y,e.y,t.y)}function Dv(n,e,t){n.min=e.min-t.min,n.max=n.min+Qn(e)}function La(n,e,t){Dv(n.x,e.x,t.x),Dv(n.y,e.y,t.y)}function sD(n,{min:e,max:t},r){return e!==void 0&&n<e?n=r?Gt(e,n,r.min):Math.max(n,e):t!==void 0&&n>t&&(n=r?Gt(t,n,r.max):Math.min(n,t)),n}function Lv(n,e,t){return{min:e!==void 0?n.min+e:void 0,max:t!==void 0?n.max+t-(n.max-n.min):void 0}}function oD(n,{top:e,left:t,bottom:r,right:o}){return{x:Lv(n.x,t,o),y:Lv(n.y,e,r)}}function Iv(n,e){let t=e.min-n.min,r=e.max-n.max;return e.max-e.min<n.max-n.min&&([t,r]=[r,t]),{min:t,max:r}}function aD(n,e){return{x:Iv(n.x,e.x),y:Iv(n.y,e.y)}}function lD(n,e){let t=.5;const r=Qn(n),o=Qn(e);return o>r?t=Io(e.min,e.max-r,n.min):r>o&&(t=Io(n.min,n.max-o,e.min)),or(0,1,t)}function uD(n,e){const t={};return e.min!==void 0&&(t.min=e.min-n.min),e.max!==void 0&&(t.max=e.max-n.min),t}const Rh=.35;function cD(n=Rh){return n===!1?n=0:n===!0&&(n=Rh),{x:Uv(n,"left","right"),y:Uv(n,"top","bottom")}}function Uv(n,e,t){return{min:Nv(n,e),max:Nv(n,t)}}function Nv(n,e){return typeof n=="number"?n:n[e]||0}const Fv=()=>({translate:0,scale:1,origin:0,originPoint:0}),yo=()=>({x:Fv(),y:Fv()}),Ov=()=>({min:0,max:0}),Kt=()=>({x:Ov(),y:Ov()});function ai(n){return[n("x"),n("y")]}function lx({top:n,left:e,right:t,bottom:r}){return{x:{min:e,max:t},y:{min:n,max:r}}}function fD({x:n,y:e}){return{top:e.min,right:n.max,bottom:e.max,left:n.min}}function dD(n,e){if(!e)return n;const t=e({x:n.left,y:n.top}),r=e({x:n.right,y:n.bottom});return{top:t.y,left:t.x,bottom:r.y,right:r.x}}function Ed(n){return n===void 0||n===1}function Ch({scale:n,scaleX:e,scaleY:t}){return!Ed(n)||!Ed(e)||!Ed(t)}function ms(n){return Ch(n)||ux(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function ux(n){return kv(n.x)||kv(n.y)}function kv(n){return n&&n!=="0%"}function qu(n,e,t){const r=n-t,o=e*r;return t+o}function Bv(n,e,t,r,o){return o!==void 0&&(n=qu(n,o,r)),qu(n,t,r)+e}function Ph(n,e=0,t=1,r,o){n.min=Bv(n.min,e,t,r,o),n.max=Bv(n.max,e,t,r,o)}function cx(n,{x:e,y:t}){Ph(n.x,e.translate,e.scale,e.originPoint),Ph(n.y,t.translate,t.scale,t.originPoint)}const zv=.999999999999,Vv=1.0000000000001;function hD(n,e,t,r=!1){const o=t.length;if(!o)return;e.x=e.y=1;let l,u;for(let c=0;c<o;c++){l=t[c],u=l.projectionDelta;const{visualElement:d}=l.options;d&&d.props.style&&d.props.style.display==="contents"||(r&&l.options.layoutScroll&&l.scroll&&l!==l.root&&So(n,{x:-l.scroll.offset.x,y:-l.scroll.offset.y}),u&&(e.x*=u.x.scale,e.y*=u.y.scale,cx(n,u)),r&&ms(l.latestValues)&&So(n,l.latestValues))}e.x<Vv&&e.x>zv&&(e.x=1),e.y<Vv&&e.y>zv&&(e.y=1)}function xo(n,e){n.min=n.min+e,n.max=n.max+e}function Hv(n,e,t,r,o=.5){const l=Gt(n.min,n.max,o);Ph(n,e,t,l,r)}function So(n,e){Hv(n.x,e.x,e.scaleX,e.scale,e.originX),Hv(n.y,e.y,e.scaleY,e.scale,e.originY)}function fx(n,e){return lx(dD(n.getBoundingClientRect(),e))}function pD(n,e,t){const r=fx(n,t),{scroll:o}=e;return o&&(xo(r.x,o.offset.x),xo(r.y,o.offset.y)),r}const dx=({current:n})=>n?n.ownerDocument.defaultView:null,mD=new WeakMap;class gD{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Kt(),this.visualElement=e}start(e,{snapToCursor:t=!1}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const o=m=>{const{dragSnapToOrigin:g}=this.getProps();g?this.pauseAnimation():this.stopAnimation(),t&&this.snapToCursor(Ya(m).point)},l=(m,g)=>{const{drag:_,dragPropagation:x,onDragStart:M}=this.getProps();if(_&&!x&&(this.openDragLock&&this.openDragLock(),this.openDragLock=uP(_),!this.openDragLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),ai(S=>{let y=this.getAxisMotionValue(S).get()||0;if(Li.test(y)){const{projection:L}=this.visualElement;if(L&&L.layout){const b=L.layout.layoutBox[S];b&&(y=Qn(b)*(parseFloat(y)/100))}}this.originPoint[S]=y}),M&&kt.postRender(()=>M(m,g)),yh(this.visualElement,"transform");const{animationState:E}=this.visualElement;E&&E.setActive("whileDrag",!0)},u=(m,g)=>{const{dragPropagation:_,dragDirectionLock:x,onDirectionLock:M,onDrag:E}=this.getProps();if(!_&&!this.openDragLock)return;const{offset:S}=g;if(x&&this.currentDirection===null){this.currentDirection=_D(S),this.currentDirection!==null&&M&&M(this.currentDirection);return}this.updateAxis("x",g.point,S),this.updateAxis("y",g.point,S),this.visualElement.render(),E&&E(m,g)},c=(m,g)=>this.stop(m,g),d=()=>ai(m=>{var g;return this.getAnimationState(m)==="paused"&&((g=this.getAxisMotionValue(m).animation)===null||g===void 0?void 0:g.play())}),{dragSnapToOrigin:h}=this.getProps();this.panSession=new rx(e,{onSessionStart:o,onStart:l,onMove:u,onSessionEnd:c,resumeAnimation:d},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:h,contextWindow:dx(this.visualElement)})}stop(e,t){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:o}=t;this.startAnimation(o);const{onDragEnd:l}=this.getProps();l&&kt.postRender(()=>l(e,t))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(e,t,r){const{drag:o}=this.getProps();if(!r||!Pu(e,o,this.currentDirection))return;const l=this.getAxisMotionValue(e);let u=this.originPoint[e]+r[e];this.constraints&&this.constraints[e]&&(u=sD(u,this.constraints[e],this.elastic[e])),l.set(u)}resolveConstraints(){var e;const{dragConstraints:t,dragElastic:r}=this.getProps(),o=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(e=this.visualElement.projection)===null||e===void 0?void 0:e.layout,l=this.constraints;t&&_o(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&o?this.constraints=oD(o.layoutBox,t):this.constraints=!1,this.elastic=cD(r),l!==this.constraints&&o&&this.constraints&&!this.hasMutatedConstraints&&ai(u=>{this.constraints!==!1&&this.getAxisMotionValue(u)&&(this.constraints[u]=uD(o.layoutBox[u],this.constraints[u]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!_o(e))return!1;const r=e.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const l=pD(r,o.root,this.visualElement.getTransformPagePoint());let u=aD(o.layout.layoutBox,l);if(t){const c=t(fD(u));this.hasMutatedConstraints=!!c,c&&(u=lx(c))}return u}startAnimation(e){const{drag:t,dragMomentum:r,dragElastic:o,dragTransition:l,dragSnapToOrigin:u,onDragTransitionEnd:c}=this.getProps(),d=this.constraints||{},h=ai(m=>{if(!Pu(m,t,this.currentDirection))return;let g=d[m]||{};u&&(g={min:0,max:0});const _=o?200:1e6,x=o?40:1e7,M={type:"inertia",velocity:r?e[m]:0,bounceStiffness:_,bounceDamping:x,timeConstant:750,restDelta:1,restSpeed:10,...l,...g};return this.startAxisValueAnimation(m,M)});return Promise.all(h).then(c)}startAxisValueAnimation(e,t){const r=this.getAxisMotionValue(e);return yh(this.visualElement,e),r.start(Sp(e,r,0,t,this.visualElement,!1))}stopAnimation(){ai(e=>this.getAxisMotionValue(e).stop())}pauseAnimation(){ai(e=>{var t;return(t=this.getAxisMotionValue(e).animation)===null||t===void 0?void 0:t.pause()})}getAnimationState(e){var t;return(t=this.getAxisMotionValue(e).animation)===null||t===void 0?void 0:t.state}getAxisMotionValue(e){const t=`_drag${e.toUpperCase()}`,r=this.visualElement.getProps(),o=r[t];return o||this.visualElement.getValue(e,(r.initial?r.initial[e]:void 0)||0)}snapToCursor(e){ai(t=>{const{drag:r}=this.getProps();if(!Pu(t,r,this.currentDirection))return;const{projection:o}=this.visualElement,l=this.getAxisMotionValue(t);if(o&&o.layout){const{min:u,max:c}=o.layout.layoutBox[t];l.set(e[t]-Gt(u,c,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:r}=this.visualElement;if(!_o(t)||!r||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};ai(u=>{const c=this.getAxisMotionValue(u);if(c&&this.constraints!==!1){const d=c.get();o[u]=lD({min:d,max:d},this.constraints[u])}});const{transformTemplate:l}=this.visualElement.getProps();this.visualElement.current.style.transform=l?l({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),ai(u=>{if(!Pu(u,e,null))return;const c=this.getAxisMotionValue(u),{min:d,max:h}=this.constraints[u];c.set(Gt(d,h,o[u]))})}addListeners(){if(!this.visualElement.current)return;mD.set(this.visualElement,this);const e=this.visualElement.current,t=ba(e,"pointerdown",d=>{const{drag:h,dragListener:m=!0}=this.getProps();h&&m&&this.start(d)}),r=()=>{const{dragConstraints:d}=this.getProps();_o(d)&&d.current&&(this.constraints=this.resolveRefConstraints())},{projection:o}=this.visualElement,l=o.addEventListener("measure",r);o&&!o.layout&&(o.root&&o.root.updateScroll(),o.updateLayout()),kt.read(r);const u=Ba(window,"resize",()=>this.scalePositionWithinConstraints()),c=o.addEventListener("didUpdate",({delta:d,hasLayoutChanged:h})=>{this.isDragging&&h&&(ai(m=>{const g=this.getAxisMotionValue(m);g&&(this.originPoint[m]+=d[m].translate,g.set(g.get()+d[m].translate))}),this.visualElement.render())});return()=>{u(),t(),l(),c&&c()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:r=!1,dragPropagation:o=!1,dragConstraints:l=!1,dragElastic:u=Rh,dragMomentum:c=!0}=e;return{...e,drag:t,dragDirectionLock:r,dragPropagation:o,dragConstraints:l,dragElastic:u,dragMomentum:c}}}function Pu(n,e,t){return(e===!0||e===n)&&(t===null||t===n)}function _D(n,e=10){let t=null;return Math.abs(n.y)>e?t="y":Math.abs(n.x)>e&&(t="x"),t}class vD extends jr{constructor(e){super(e),this.removeGroupControls=Zn,this.removeListeners=Zn,this.controls=new gD(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Zn}unmount(){this.removeGroupControls(),this.removeListeners()}}const Gv=n=>(e,t)=>{n&&kt.postRender(()=>n(e,t))};class yD extends jr{constructor(){super(...arguments),this.removePointerDownListener=Zn}onPointerDown(e){this.session=new rx(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:dx(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:r,onPanEnd:o}=this.node.getProps();return{onSessionStart:Gv(e),onStart:Gv(t),onMove:r,onEnd:(l,u)=>{delete this.session,o&&kt.postRender(()=>o(l,u))}}}mount(){this.removePointerDownListener=ba(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}const ku={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function Wv(n,e){return e.max===e.min?0:n/(e.max-e.min)*100}const Ma={correct:(n,e)=>{if(!e.target)return n;if(typeof n=="string")if(et.test(n))n=parseFloat(n);else return n;const t=Wv(n,e.target.x),r=Wv(n,e.target.y);return`${t}% ${r}%`}},xD={correct:(n,{treeScale:e,projectionDelta:t})=>{const r=n,o=Xr.parse(n);if(o.length>5)return r;const l=Xr.createTransformer(n),u=typeof o[0]!="number"?1:0,c=t.x.scale*e.x,d=t.y.scale*e.y;o[0+u]/=c,o[1+u]/=d;const h=Gt(c,d,.5);return typeof o[2+u]=="number"&&(o[2+u]/=h),typeof o[3+u]=="number"&&(o[3+u]/=h),l(o)}};class SD extends Ye.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:r,layoutId:o}=this.props,{projection:l}=e;HC(MD),l&&(t.group&&t.group.add(l),r&&r.register&&o&&r.register(l),l.root.didUpdate(),l.addEventListener("animationComplete",()=>{this.safeToRemove()}),l.setOptions({...l.options,onExitComplete:()=>this.safeToRemove()})),ku.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:r,drag:o,isPresent:l}=this.props,u=r.projection;return u&&(u.isPresent=l,o||e.layoutDependency!==t||t===void 0?u.willUpdate():this.safeToRemove(),e.isPresent!==l&&(l?u.promote():u.relegate()||kt.postRender(()=>{const c=u.getStack();(!c||!c.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),$h.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:r}=this.props,{projection:o}=e;o&&(o.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(o),r&&r.deregister&&r.deregister(o))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function hx(n){const[e,t]=iC(),r=Ye.useContext($0);return Ve.jsx(SD,{...n,layoutGroup:r,switchLayoutGroup:Ye.useContext(iy),isPresent:e,safeToRemove:t})}const MD={borderRadius:{...Ma,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Ma,borderTopRightRadius:Ma,borderBottomLeftRadius:Ma,borderBottomRightRadius:Ma,boxShadow:xD};function ED(n,e,t){const r=An(n)?n:Oa(n);return r.start(Sp("",r,e,t)),r.animation}function TD(n){return n instanceof SVGElement&&n.tagName!=="svg"}const wD=(n,e)=>n.depth-e.depth;class AD{constructor(){this.children=[],this.isDirty=!1}add(e){cp(this.children,e),this.isDirty=!0}remove(e){fp(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(wD),this.isDirty=!1,this.children.forEach(e)}}function RD(n,e){const t=Ii.now(),r=({timestamp:o})=>{const l=o-t;l>=e&&(Wr(r),n(l-e))};return kt.read(r,!0),()=>Wr(r)}const px=["TopLeft","TopRight","BottomLeft","BottomRight"],CD=px.length,Xv=n=>typeof n=="string"?parseFloat(n):n,jv=n=>typeof n=="number"||et.test(n);function PD(n,e,t,r,o,l){o?(n.opacity=Gt(0,t.opacity!==void 0?t.opacity:1,bD(r)),n.opacityExit=Gt(e.opacity!==void 0?e.opacity:1,0,DD(r))):l&&(n.opacity=Gt(e.opacity!==void 0?e.opacity:1,t.opacity!==void 0?t.opacity:1,r));for(let u=0;u<CD;u++){const c=`border${px[u]}Radius`;let d=Yv(e,c),h=Yv(t,c);if(d===void 0&&h===void 0)continue;d||(d=0),h||(h=0),d===0||h===0||jv(d)===jv(h)?(n[c]=Math.max(Gt(Xv(d),Xv(h),r),0),(Li.test(h)||Li.test(d))&&(n[c]+="%")):n[c]=h}(e.rotate||t.rotate)&&(n.rotate=Gt(e.rotate||0,t.rotate||0,r))}function Yv(n,e){return n[e]!==void 0?n[e]:n.borderRadius}const bD=mx(0,.5,Iy),DD=mx(.5,.95,Zn);function mx(n,e,t){return r=>r<n?0:r>e?1:t(Io(n,e,r))}function qv(n,e){n.min=e.min,n.max=e.max}function oi(n,e){qv(n.x,e.x),qv(n.y,e.y)}function Kv(n,e){n.translate=e.translate,n.scale=e.scale,n.originPoint=e.originPoint,n.origin=e.origin}function $v(n,e,t,r,o){return n-=e,n=qu(n,1/t,r),o!==void 0&&(n=qu(n,1/o,r)),n}function LD(n,e=0,t=1,r=.5,o,l=n,u=n){if(Li.test(e)&&(e=parseFloat(e),e=Gt(u.min,u.max,e/100)-u.min),typeof e!="number")return;let c=Gt(l.min,l.max,r);n===l&&(c-=e),n.min=$v(n.min,e,t,c,o),n.max=$v(n.max,e,t,c,o)}function Zv(n,e,[t,r,o],l,u){LD(n,e[t],e[r],e[o],e.scale,l,u)}const ID=["x","scaleX","originX"],UD=["y","scaleY","originY"];function Qv(n,e,t,r){Zv(n.x,e,ID,t?t.x:void 0,r?r.x:void 0),Zv(n.y,e,UD,t?t.y:void 0,r?r.y:void 0)}function Jv(n){return n.translate===0&&n.scale===1}function gx(n){return Jv(n.x)&&Jv(n.y)}function e0(n,e){return n.min===e.min&&n.max===e.max}function ND(n,e){return e0(n.x,e.x)&&e0(n.y,e.y)}function t0(n,e){return Math.round(n.min)===Math.round(e.min)&&Math.round(n.max)===Math.round(e.max)}function _x(n,e){return t0(n.x,e.x)&&t0(n.y,e.y)}function n0(n){return Qn(n.x)/Qn(n.y)}function i0(n,e){return n.translate===e.translate&&n.scale===e.scale&&n.originPoint===e.originPoint}class FD{constructor(){this.members=[]}add(e){cp(this.members,e),e.scheduleRender()}remove(e){if(fp(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const t=this.members[this.members.length-1];t&&this.promote(t)}}relegate(e){const t=this.members.findIndex(o=>e===o);if(t===0)return!1;let r;for(let o=t;o>=0;o--){const l=this.members[o];if(l.isPresent!==!1){r=l;break}}return r?(this.promote(r),!0):!1}promote(e,t){const r=this.lead;if(e!==r&&(this.prevLead=r,this.lead=e,e.show(),r)){r.instance&&r.scheduleRender(),e.scheduleRender(),e.resumeFrom=r,t&&(e.resumeFrom.preserveOpacity=!0),r.snapshot&&(e.snapshot=r.snapshot,e.snapshot.latestValues=r.animationValues||r.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:o}=e.options;o===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:t,resumingFrom:r}=e;t.onExitComplete&&t.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function OD(n,e,t){let r="";const o=n.x.translate/e.x,l=n.y.translate/e.y,u=(t==null?void 0:t.z)||0;if((o||l||u)&&(r=`translate3d(${o}px, ${l}px, ${u}px) `),(e.x!==1||e.y!==1)&&(r+=`scale(${1/e.x}, ${1/e.y}) `),t){const{transformPerspective:h,rotate:m,rotateX:g,rotateY:_,skewX:x,skewY:M}=t;h&&(r=`perspective(${h}px) ${r}`),m&&(r+=`rotate(${m}deg) `),g&&(r+=`rotateX(${g}deg) `),_&&(r+=`rotateY(${_}deg) `),x&&(r+=`skewX(${x}deg) `),M&&(r+=`skewY(${M}deg) `)}const c=n.x.scale*e.x,d=n.y.scale*e.y;return(c!==1||d!==1)&&(r+=`scale(${c}, ${d})`),r||"none"}const gs={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0},Aa=typeof window<"u"&&window.MotionDebug!==void 0,Td=["","X","Y","Z"],kD={visibility:"hidden"},r0=1e3;let BD=0;function wd(n,e,t,r){const{latestValues:o}=e;o[n]&&(t[n]=o[n],e.setStaticValue(n,0),r&&(r[n]=0))}function vx(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:e}=n.options;if(!e)return;const t=Ay(e);if(window.MotionHasOptimisedAnimation(t,"transform")){const{layout:o,layoutId:l}=n.options;window.MotionCancelOptimisedAnimation(t,"transform",kt,!(o||l))}const{parent:r}=n;r&&!r.hasCheckedOptimisedAppear&&vx(r)}function yx({attachResizeListener:n,defaultParent:e,measureScroll:t,checkIsScrollRoot:r,resetTransform:o}){return class{constructor(u={},c=e==null?void 0:e()){this.id=BD++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,Aa&&(gs.totalNodes=gs.resolvedTargetDeltas=gs.recalculatedProjection=0),this.nodes.forEach(HD),this.nodes.forEach(YD),this.nodes.forEach(qD),this.nodes.forEach(GD),Aa&&window.MotionDebug.record(gs)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=u,this.root=c?c.root||c:this,this.path=c?[...c.path,c]:[],this.parent=c,this.depth=c?c.depth+1:0;for(let d=0;d<this.path.length;d++)this.path[d].shouldResetTransform=!0;this.root===this&&(this.nodes=new AD)}addEventListener(u,c){return this.eventHandlers.has(u)||this.eventHandlers.set(u,new dp),this.eventHandlers.get(u).add(c)}notifyListeners(u,...c){const d=this.eventHandlers.get(u);d&&d.notify(...c)}hasListeners(u){return this.eventHandlers.has(u)}mount(u,c=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=TD(u),this.instance=u;const{layoutId:d,layout:h,visualElement:m}=this.options;if(m&&!m.current&&m.mount(u),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),c&&(h||d)&&(this.isLayoutDirty=!0),n){let g;const _=()=>this.root.updateBlockedByResize=!1;n(u,()=>{this.root.updateBlockedByResize=!0,g&&g(),g=RD(_,250),ku.hasAnimatedSinceResize&&(ku.hasAnimatedSinceResize=!1,this.nodes.forEach(o0))})}d&&this.root.registerSharedNode(d,this),this.options.animate!==!1&&m&&(d||h)&&this.addEventListener("didUpdate",({delta:g,hasLayoutChanged:_,hasRelativeLayoutChanged:x,layout:M})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const E=this.options.transition||m.getDefaultTransition()||JD,{onLayoutAnimationStart:S,onLayoutAnimationComplete:y}=m.getProps(),L=!this.targetLayout||!_x(this.targetLayout,M),b=!_&&x;if(this.options.layoutRoot||this.resumeFrom||b||_&&(L||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(g,b);const C={...op(E,"layout"),onPlay:S,onComplete:y};(m.shouldReduceMotion||this.options.layoutRoot)&&(C.delay=0,C.type=!1),this.startAnimation(C)}else _||o0(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=M})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const u=this.getStack();u&&u.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,Wr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(KD),this.animationId++)}getTransformTemplate(){const{visualElement:u}=this.options;return u&&u.getProps().transformTemplate}willUpdate(u=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&vx(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let m=0;m<this.path.length;m++){const g=this.path[m];g.shouldResetTransform=!0,g.updateScroll("snapshot"),g.options.layoutRoot&&g.willUpdate(!1)}const{layoutId:c,layout:d}=this.options;if(c===void 0&&!d)return;const h=this.getTransformTemplate();this.prevTransformTemplateValue=h?h(this.latestValues,""):void 0,this.updateSnapshot(),u&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(s0);return}this.isUpdating||this.nodes.forEach(XD),this.isUpdating=!1,this.nodes.forEach(jD),this.nodes.forEach(zD),this.nodes.forEach(VD),this.clearAllSnapshots();const c=Ii.now();gn.delta=or(0,1e3/60,c-gn.timestamp),gn.timestamp=c,gn.isProcessing=!0,gd.update.process(gn),gd.preRender.process(gn),gd.render.process(gn),gn.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,$h.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(WD),this.sharedNodes.forEach($D)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,kt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){kt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let d=0;d<this.path.length;d++)this.path[d].updateScroll();const u=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Kt(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:c}=this.options;c&&c.notify("LayoutMeasure",this.layout.layoutBox,u?u.layoutBox:void 0)}updateScroll(u="measure"){let c=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===u&&(c=!1),c){const d=r(this.instance);this.scroll={animationId:this.root.animationId,phase:u,isRoot:d,offset:t(this.instance),wasRoot:this.scroll?this.scroll.isRoot:d}}}resetTransform(){if(!o)return;const u=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,c=this.projectionDelta&&!gx(this.projectionDelta),d=this.getTransformTemplate(),h=d?d(this.latestValues,""):void 0,m=h!==this.prevTransformTemplateValue;u&&(c||ms(this.latestValues)||m)&&(o(this.instance,h),this.shouldResetTransform=!1,this.scheduleRender())}measure(u=!0){const c=this.measurePageBox();let d=this.removeElementScroll(c);return u&&(d=this.removeTransform(d)),eL(d),{animationId:this.root.animationId,measuredBox:c,layoutBox:d,latestValues:{},source:this.id}}measurePageBox(){var u;const{visualElement:c}=this.options;if(!c)return Kt();const d=c.measureViewportBox();if(!(((u=this.scroll)===null||u===void 0?void 0:u.wasRoot)||this.path.some(tL))){const{scroll:m}=this.root;m&&(xo(d.x,m.offset.x),xo(d.y,m.offset.y))}return d}removeElementScroll(u){var c;const d=Kt();if(oi(d,u),!((c=this.scroll)===null||c===void 0)&&c.wasRoot)return d;for(let h=0;h<this.path.length;h++){const m=this.path[h],{scroll:g,options:_}=m;m!==this.root&&g&&_.layoutScroll&&(g.wasRoot&&oi(d,u),xo(d.x,g.offset.x),xo(d.y,g.offset.y))}return d}applyTransform(u,c=!1){const d=Kt();oi(d,u);for(let h=0;h<this.path.length;h++){const m=this.path[h];!c&&m.options.layoutScroll&&m.scroll&&m!==m.root&&So(d,{x:-m.scroll.offset.x,y:-m.scroll.offset.y}),ms(m.latestValues)&&So(d,m.latestValues)}return ms(this.latestValues)&&So(d,this.latestValues),d}removeTransform(u){const c=Kt();oi(c,u);for(let d=0;d<this.path.length;d++){const h=this.path[d];if(!h.instance||!ms(h.latestValues))continue;Ch(h.latestValues)&&h.updateSnapshot();const m=Kt(),g=h.measurePageBox();oi(m,g),Qv(c,h.latestValues,h.snapshot?h.snapshot.layoutBox:void 0,m)}return ms(this.latestValues)&&Qv(c,this.latestValues),c}setTargetDelta(u){this.targetDelta=u,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(u){this.options={...this.options,...u,crossfade:u.crossfade!==void 0?u.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==gn.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(u=!1){var c;const d=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=d.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=d.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=d.isSharedProjectionDirty);const h=!!this.resumingFrom||this!==d;if(!(u||h&&this.isSharedProjectionDirty||this.isProjectionDirty||!((c=this.parent)===null||c===void 0)&&c.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:g,layoutId:_}=this.options;if(!(!this.layout||!(g||_))){if(this.resolvedRelativeTargetAt=gn.timestamp,!this.targetDelta&&!this.relativeTarget){const x=this.getClosestProjectingParent();x&&x.layout&&this.animationProgress!==1?(this.relativeParent=x,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Kt(),this.relativeTargetOrigin=Kt(),La(this.relativeTargetOrigin,this.layout.layoutBox,x.layout.layoutBox),oi(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=Kt(),this.targetWithTransforms=Kt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),rD(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):oi(this.target,this.layout.layoutBox),cx(this.target,this.targetDelta)):oi(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const x=this.getClosestProjectingParent();x&&!!x.resumingFrom==!!this.resumingFrom&&!x.options.layoutScroll&&x.target&&this.animationProgress!==1?(this.relativeParent=x,this.forceRelativeParentToResolveTarget(),this.relativeTarget=Kt(),this.relativeTargetOrigin=Kt(),La(this.relativeTargetOrigin,this.target,x.target),oi(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}Aa&&gs.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Ch(this.parent.latestValues)||ux(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var u;const c=this.getLead(),d=!!this.resumingFrom||this!==c;let h=!0;if((this.isProjectionDirty||!((u=this.parent)===null||u===void 0)&&u.isProjectionDirty)&&(h=!1),d&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(h=!1),this.resolvedRelativeTargetAt===gn.timestamp&&(h=!1),h)return;const{layout:m,layoutId:g}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(m||g))return;oi(this.layoutCorrected,this.layout.layoutBox);const _=this.treeScale.x,x=this.treeScale.y;hD(this.layoutCorrected,this.treeScale,this.path,d),c.layout&&!c.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(c.target=c.layout.layoutBox,c.targetWithTransforms=Kt());const{target:M}=c;if(!M){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Kv(this.prevProjectionDelta.x,this.projectionDelta.x),Kv(this.prevProjectionDelta.y,this.projectionDelta.y)),Da(this.projectionDelta,this.layoutCorrected,M,this.latestValues),(this.treeScale.x!==_||this.treeScale.y!==x||!i0(this.projectionDelta.x,this.prevProjectionDelta.x)||!i0(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",M)),Aa&&gs.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(u=!0){var c;if((c=this.options.visualElement)===null||c===void 0||c.scheduleRender(),u){const d=this.getStack();d&&d.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=yo(),this.projectionDelta=yo(),this.projectionDeltaWithTransform=yo()}setAnimationOrigin(u,c=!1){const d=this.snapshot,h=d?d.latestValues:{},m={...this.latestValues},g=yo();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!c;const _=Kt(),x=d?d.source:void 0,M=this.layout?this.layout.source:void 0,E=x!==M,S=this.getStack(),y=!S||S.members.length<=1,L=!!(E&&!y&&this.options.crossfade===!0&&!this.path.some(QD));this.animationProgress=0;let b;this.mixTargetDelta=C=>{const O=C/1e3;a0(g.x,u.x,O),a0(g.y,u.y,O),this.setTargetDelta(g),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(La(_,this.layout.layoutBox,this.relativeParent.layout.layoutBox),ZD(this.relativeTarget,this.relativeTargetOrigin,_,O),b&&ND(this.relativeTarget,b)&&(this.isProjectionDirty=!1),b||(b=Kt()),oi(b,this.relativeTarget)),E&&(this.animationValues=m,PD(m,h,this.latestValues,O,L,y)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=O},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(u){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(Wr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=kt.update(()=>{ku.hasAnimatedSinceResize=!0,this.currentAnimation=ED(0,r0,{...u,onUpdate:c=>{this.mixTargetDelta(c),u.onUpdate&&u.onUpdate(c)},onComplete:()=>{u.onComplete&&u.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const u=this.getStack();u&&u.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(r0),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const u=this.getLead();let{targetWithTransforms:c,target:d,layout:h,latestValues:m}=u;if(!(!c||!d||!h)){if(this!==u&&this.layout&&h&&xx(this.options.animationType,this.layout.layoutBox,h.layoutBox)){d=this.target||Kt();const g=Qn(this.layout.layoutBox.x);d.x.min=u.target.x.min,d.x.max=d.x.min+g;const _=Qn(this.layout.layoutBox.y);d.y.min=u.target.y.min,d.y.max=d.y.min+_}oi(c,d),So(c,m),Da(this.projectionDeltaWithTransform,this.layoutCorrected,c,m)}}registerSharedNode(u,c){this.sharedNodes.has(u)||this.sharedNodes.set(u,new FD),this.sharedNodes.get(u).add(c);const h=c.options.initialPromotionConfig;c.promote({transition:h?h.transition:void 0,preserveFollowOpacity:h&&h.shouldPreserveFollowOpacity?h.shouldPreserveFollowOpacity(c):void 0})}isLead(){const u=this.getStack();return u?u.lead===this:!0}getLead(){var u;const{layoutId:c}=this.options;return c?((u=this.getStack())===null||u===void 0?void 0:u.lead)||this:this}getPrevLead(){var u;const{layoutId:c}=this.options;return c?(u=this.getStack())===null||u===void 0?void 0:u.prevLead:void 0}getStack(){const{layoutId:u}=this.options;if(u)return this.root.sharedNodes.get(u)}promote({needsReset:u,transition:c,preserveFollowOpacity:d}={}){const h=this.getStack();h&&h.promote(this,d),u&&(this.projectionDelta=void 0,this.needsReset=!0),c&&this.setOptions({transition:c})}relegate(){const u=this.getStack();return u?u.relegate(this):!1}resetSkewAndRotation(){const{visualElement:u}=this.options;if(!u)return;let c=!1;const{latestValues:d}=u;if((d.z||d.rotate||d.rotateX||d.rotateY||d.rotateZ||d.skewX||d.skewY)&&(c=!0),!c)return;const h={};d.z&&wd("z",u,h,this.animationValues);for(let m=0;m<Td.length;m++)wd(`rotate${Td[m]}`,u,h,this.animationValues),wd(`skew${Td[m]}`,u,h,this.animationValues);u.render();for(const m in h)u.setStaticValue(m,h[m]),this.animationValues&&(this.animationValues[m]=h[m]);u.scheduleRender()}getProjectionStyles(u){var c,d;if(!this.instance||this.isSVG)return;if(!this.isVisible)return kD;const h={visibility:""},m=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,h.opacity="",h.pointerEvents=Fu(u==null?void 0:u.pointerEvents)||"",h.transform=m?m(this.latestValues,""):"none",h;const g=this.getLead();if(!this.projectionDelta||!this.layout||!g.target){const E={};return this.options.layoutId&&(E.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,E.pointerEvents=Fu(u==null?void 0:u.pointerEvents)||""),this.hasProjected&&!ms(this.latestValues)&&(E.transform=m?m({},""):"none",this.hasProjected=!1),E}const _=g.animationValues||g.latestValues;this.applyTransformsToTarget(),h.transform=OD(this.projectionDeltaWithTransform,this.treeScale,_),m&&(h.transform=m(_,h.transform));const{x,y:M}=this.projectionDelta;h.transformOrigin=`${x.origin*100}% ${M.origin*100}% 0`,g.animationValues?h.opacity=g===this?(d=(c=_.opacity)!==null&&c!==void 0?c:this.latestValues.opacity)!==null&&d!==void 0?d:1:this.preserveOpacity?this.latestValues.opacity:_.opacityExit:h.opacity=g===this?_.opacity!==void 0?_.opacity:"":_.opacityExit!==void 0?_.opacityExit:0;for(const E in Gu){if(_[E]===void 0)continue;const{correct:S,applyTo:y}=Gu[E],L=h.transform==="none"?_[E]:S(_[E],g);if(y){const b=y.length;for(let C=0;C<b;C++)h[y[C]]=L}else h[E]=L}return this.options.layoutId&&(h.pointerEvents=g===this?Fu(u==null?void 0:u.pointerEvents)||"":"none"),h}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(u=>{var c;return(c=u.currentAnimation)===null||c===void 0?void 0:c.stop()}),this.root.nodes.forEach(s0),this.root.sharedNodes.clear()}}}function zD(n){n.updateLayout()}function VD(n){var e;const t=((e=n.resumeFrom)===null||e===void 0?void 0:e.snapshot)||n.snapshot;if(n.isLead()&&n.layout&&t&&n.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:o}=n.layout,{animationType:l}=n.options,u=t.source!==n.layout.source;l==="size"?ai(g=>{const _=u?t.measuredBox[g]:t.layoutBox[g],x=Qn(_);_.min=r[g].min,_.max=_.min+x}):xx(l,t.layoutBox,r)&&ai(g=>{const _=u?t.measuredBox[g]:t.layoutBox[g],x=Qn(r[g]);_.max=_.min+x,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[g].max=n.relativeTarget[g].min+x)});const c=yo();Da(c,r,t.layoutBox);const d=yo();u?Da(d,n.applyTransform(o,!0),t.measuredBox):Da(d,r,t.layoutBox);const h=!gx(c);let m=!1;if(!n.resumeFrom){const g=n.getClosestProjectingParent();if(g&&!g.resumeFrom){const{snapshot:_,layout:x}=g;if(_&&x){const M=Kt();La(M,t.layoutBox,_.layoutBox);const E=Kt();La(E,r,x.layoutBox),_x(M,E)||(m=!0),g.options.layoutRoot&&(n.relativeTarget=E,n.relativeTargetOrigin=M,n.relativeParent=g)}}}n.notifyListeners("didUpdate",{layout:r,snapshot:t,delta:d,layoutDelta:c,hasLayoutChanged:h,hasRelativeLayoutChanged:m})}else if(n.isLead()){const{onExitComplete:r}=n.options;r&&r()}n.options.transition=void 0}function HD(n){Aa&&gs.totalNodes++,n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function GD(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function WD(n){n.clearSnapshot()}function s0(n){n.clearMeasurements()}function XD(n){n.isLayoutDirty=!1}function jD(n){const{visualElement:e}=n.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),n.resetTransform()}function o0(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function YD(n){n.resolveTargetDelta()}function qD(n){n.calcProjection()}function KD(n){n.resetSkewAndRotation()}function $D(n){n.removeLeadSnapshot()}function a0(n,e,t){n.translate=Gt(e.translate,0,t),n.scale=Gt(e.scale,1,t),n.origin=e.origin,n.originPoint=e.originPoint}function l0(n,e,t,r){n.min=Gt(e.min,t.min,r),n.max=Gt(e.max,t.max,r)}function ZD(n,e,t,r){l0(n.x,e.x,t.x,r),l0(n.y,e.y,t.y,r)}function QD(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const JD={duration:.45,ease:[.4,0,.1,1]},u0=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),c0=u0("applewebkit/")&&!u0("chrome/")?Math.round:Zn;function f0(n){n.min=c0(n.min),n.max=c0(n.max)}function eL(n){f0(n.x),f0(n.y)}function xx(n,e,t){return n==="position"||n==="preserve-aspect"&&!iD(n0(e),n0(t),.2)}function tL(n){var e;return n!==n.root&&((e=n.scroll)===null||e===void 0?void 0:e.wasRoot)}const nL=yx({attachResizeListener:(n,e)=>Ba(n,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Ad={current:void 0},Sx=yx({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!Ad.current){const n=new nL({});n.mount(window),n.setOptions({layoutScroll:!0}),Ad.current=n}return Ad.current},resetTransform:(n,e)=>{n.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),iL={pan:{Feature:yD},drag:{Feature:vD,ProjectionNode:Sx,MeasureLayout:hx}};function d0(n,e,t){const{props:r}=n;n.animationState&&r.whileHover&&n.animationState.setActive("whileHover",t==="Start");const o="onHover"+t,l=r[o];l&&kt.postRender(()=>l(e,Ya(e)))}class rL extends jr{mount(){const{current:e}=this.node;e&&(this.unmount=rP(e,(t,r)=>(d0(this.node,r,"Start"),o=>d0(this.node,o,"End"))))}unmount(){}}class sL extends jr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=ja(Ba(this.node.current,"focus",()=>this.onFocus()),Ba(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function h0(n,e,t){const{props:r}=n;n.animationState&&r.whileTap&&n.animationState.setActive("whileTap",t==="Start");const o="onTap"+(t==="End"?"":t),l=r[o];l&&kt.postRender(()=>l(e,Ya(e)))}class oL extends jr{mount(){const{current:e}=this.node;e&&(this.unmount=lP(e,(t,r)=>(h0(this.node,r,"Start"),(o,{success:l})=>h0(this.node,o,l?"End":"Cancel")),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}const bh=new WeakMap,Rd=new WeakMap,aL=n=>{const e=bh.get(n.target);e&&e(n)},lL=n=>{n.forEach(aL)};function uL({root:n,...e}){const t=n||document;Rd.has(t)||Rd.set(t,{});const r=Rd.get(t),o=JSON.stringify(e);return r[o]||(r[o]=new IntersectionObserver(lL,{root:n,...e})),r[o]}function cL(n,e,t){const r=uL(e);return bh.set(n,t),r.observe(n),()=>{bh.delete(n),r.unobserve(n)}}const fL={some:0,all:1};class dL extends jr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:t,margin:r,amount:o="some",once:l}=e,u={root:t?t.current:void 0,rootMargin:r,threshold:typeof o=="number"?o:fL[o]},c=d=>{const{isIntersecting:h}=d;if(this.isInView===h||(this.isInView=h,l&&!h&&this.hasEnteredView))return;h&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",h);const{onViewportEnter:m,onViewportLeave:g}=this.node.getProps(),_=h?m:g;_&&_(d)};return cL(this.node.current,u,c)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:t}=this.node;["amount","margin","root"].some(hL(e,t))&&this.startObserver()}unmount(){}}function hL({viewport:n={}},{viewport:e={}}={}){return t=>n[t]!==e[t]}const pL={inView:{Feature:dL},tap:{Feature:oL},focus:{Feature:sL},hover:{Feature:rL}},mL={layout:{ProjectionNode:Sx,MeasureLayout:hx}},Dh={current:null},Mx={current:!1};function gL(){if(Mx.current=!0,!!Xh)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),e=()=>Dh.current=n.matches;n.addListener(e),e()}else Dh.current=!1}const _L=[...Yy,wn,Xr],vL=n=>_L.find(jy(n)),p0=new WeakMap;function yL(n,e,t){for(const r in e){const o=e[r],l=t[r];if(An(o))n.addValue(r,o);else if(An(l))n.addValue(r,Oa(o,{owner:n}));else if(l!==o)if(n.hasValue(r)){const u=n.getValue(r);u.liveStyle===!0?u.jump(o):u.hasAnimated||u.set(o)}else{const u=n.getStaticValue(r);n.addValue(r,Oa(u!==void 0?u:o,{owner:n}))}}for(const r in t)e[r]===void 0&&n.removeValue(r);return e}const m0=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class xL{scrapeMotionValuesFromProps(e,t,r){return{}}constructor({parent:e,props:t,presenceContext:r,reducedMotionConfig:o,blockInitialAnimation:l,visualState:u},c={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=vp,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const x=Ii.now();this.renderScheduledAt<x&&(this.renderScheduledAt=x,kt.render(this.render,!1,!0))};const{latestValues:d,renderState:h,onUpdate:m}=u;this.onUpdate=m,this.latestValues=d,this.baseTarget={...d},this.initialValues=t.initial?{...d}:{},this.renderState=h,this.parent=e,this.props=t,this.presenceContext=r,this.depth=e?e.depth+1:0,this.reducedMotionConfig=o,this.options=c,this.blockInitialAnimation=!!l,this.isControllingVariants=tc(t),this.isVariantNode=ty(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:g,..._}=this.scrapeMotionValuesFromProps(t,{},this);for(const x in _){const M=_[x];d[x]!==void 0&&An(M)&&M.set(d[x],!1)}}mount(e){this.current=e,p0.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((t,r)=>this.bindToMotionValue(r,t)),Mx.current||gL(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:Dh.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){p0.delete(this.current),this.projection&&this.projection.unmount(),Wr(this.notifyUpdate),Wr(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}bindToMotionValue(e,t){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const r=Rs.has(e),o=t.on("change",c=>{this.latestValues[e]=c,this.props.onUpdate&&kt.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),l=t.on("renderRequest",this.scheduleRender);let u;window.MotionCheckAppearSync&&(u=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{o(),l(),u&&u(),t.owner&&t.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in Uo){const t=Uo[e];if(!t)continue;const{isEnabled:r,Feature:o}=t;if(!this.features[e]&&o&&r(this.props)&&(this.features[e]=new o(this)),this.features[e]){const l=this.features[e];l.isMounted?l.update():(l.mount(),l.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Kt()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let r=0;r<m0.length;r++){const o=m0[r];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const l="on"+o,u=e[l];u&&(this.propEventSubscriptions[o]=this.on(o,u))}this.prevMotionValues=yL(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){const r=this.values.get(e);t!==r&&(r&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return r===void 0&&t!==void 0&&(r=Oa(t===null?void 0:t,{owner:this}),this.addValue(e,r)),r}readValue(e,t){var r;let o=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:(r=this.getBaseTargetFromProps(this.props,e))!==null&&r!==void 0?r:this.readValueFromInstance(this.current,e,this.options);return o!=null&&(typeof o=="string"&&(Wy(o)||Ny(o))?o=parseFloat(o):!vL(o)&&Xr.test(t)&&(o=Vy(e,t)),this.setBaseTarget(e,An(o)?o.get():o)),An(o)?o.get():o}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){var t;const{initial:r}=this.props;let o;if(typeof r=="string"||typeof r=="object"){const u=Qh(this.props,r,(t=this.presenceContext)===null||t===void 0?void 0:t.custom);u&&(o=u[e])}if(r&&o!==void 0)return o;const l=this.getBaseTargetFromProps(this.props,e);return l!==void 0&&!An(l)?l:this.initialValues[e]!==void 0&&o===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new dp),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}}class Ex extends xL{constructor(){super(...arguments),this.KeyframeResolver=qy}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){return e.style?e.style[t]:void 0}removeValueFromRenderState(e,{vars:t,style:r}){delete t[e],delete r[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;An(e)&&(this.childSubscription=e.on("change",t=>{this.current&&(this.current.textContent=`${t}`)}))}}function SL(n){return window.getComputedStyle(n)}class ML extends Ex{constructor(){super(...arguments),this.type="html",this.renderInstance=cy}readValueFromInstance(e,t){if(Rs.has(t)){const r=_p(t);return r&&r.default||0}else{const r=SL(e),o=(ay(t)?r.getPropertyValue(t):r[t])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(e,{transformPagePoint:t}){return fx(e,t)}build(e,t,r){tp(e,t,r.transformTemplate)}scrapeMotionValuesFromProps(e,t,r){return sp(e,t,r)}}class EL extends Ex{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=Kt}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(Rs.has(t)){const r=_p(t);return r&&r.default||0}return t=fy.has(t)?t:Kh(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,r){return py(e,t,r)}build(e,t,r){np(e,t,this.isSVGTag,r.transformTemplate)}renderInstance(e,t,r,o){dy(e,t,r,o)}mount(e){this.isSVGTag=rp(e.tagName),super.mount(e)}}const TL=(n,e)=>Zh(n)?new EL(e):new ML(e,{allowProjection:n!==Ye.Fragment}),wL=ZC({...qb,...pL,...iL,...mL},TL),AL=dC(wL),RL=({movie:n})=>{const{genre:e,title:t,year:r,director:o,seasons:l,description:u,rating:c,streamLink:d,allEpisodesLink:h,ageReastriction:m}=n,[g,_]=Ye.useState(!0);return Ye.useEffect(()=>{setTimeout(()=>{_(!1)},t.length*(1e3/20)+250)}),Ve.jsxs("article",{className:"movie",children:[Ve.jsx("div",{className:`movie__genres ${g?"hidden":""}`,children:Ve.jsx("span",{className:"movie__genre",children:e.join(" | ")})}),Ve.jsx("h2",{className:"movie__title",children:t.split("").map((x,M)=>Ve.jsxs(AL.span,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.25,delay:M/20},children:[x,""]},M))}),Ve.jsxs("div",{className:`movie__details ${g?"hidden":""}`,children:[Ve.jsx("span",{className:"movie__year",children:r}),Ve.jsx("div",{className:"movie__details-stroke"}),Ve.jsxs("span",{className:"movie__director",children:[Ve.jsx("span",{className:"movie__director-title",children:"DIRECTOR: "}),o]}),l&&Ve.jsxs(Ve.Fragment,{children:[Ve.jsx("div",{className:"movie__details-stroke"}),Ve.jsxs("span",{className:"movie__seasons",children:[Ve.jsx("span",{className:"movie__seasons-title",children:"seasons: "}),l]})]})]}),Ve.jsx("p",{className:`movie__description ${g?"hidden":""}`,children:u}),Ve.jsxs("div",{className:`movie__rating ${g?"hidden":""}`,children:[Ve.jsx("div",{className:`movie__rating-star ${c>=1?"movie__rating-star--filled":""}`}),Ve.jsx("div",{className:`movie__rating-star ${c>=2?"movie__rating-star--filled":""}`}),Ve.jsx("div",{className:`movie__rating-star ${c>=3?"movie__rating-star--filled":""}`}),Ve.jsx("div",{className:`movie__rating-star ${c>=4?"movie__rating-star--filled":""}`}),Ve.jsx("div",{className:`movie__rating-star ${c>4?"movie__rating-star--filled":""}`})]}),Ve.jsxs("div",{className:`movie__buttons ${g?"hidden":""}`,children:[Ve.jsx("a",{href:d,target:"_blank",children:Ve.jsxs("div",{className:"movie__button movie__button--stream",children:[Ve.jsx("span",{children:"STREAM NOW"}),Ve.jsx("div",{className:"movie__button--stream-icon"})]})}),Ve.jsx("a",{href:h,target:"_blank",children:Ve.jsx("div",{className:"movie__button movie__button--all",children:"ALL EPISODES"})})]}),m&&Ve.jsxs("div",{className:"movie__age",children:[Ve.jsx("div",{className:"movie__age-red-square"}),Ve.jsxs("span",{className:"movie__age-title",children:[m,"+"]})]})]})},CL={id:1,title:"Stranger Things",genre:["Drama","Thriller","Supernatural"],ageReastriction:16,year:2019,director:"Shawn Levy",seasons:"3 (5 Episodes)",description:"In 1980s Indiana, a group of young friends witness supernatural forces and secret government exploits. As they search for answers, the children unravel a series of extraordinary mysteries.",rating:3,streamLink:"https://www.netflix.com/title/80057281",allEpisodesLink:"https://www.netflix.com/title/80057281"},PL=[{id:2,imgUrl:"./images/2.jpg",link:"https://www.netflix.com/"},{id:3,imgUrl:"./images/3.png",link:"https://www.netflix.com/"},{id:4,imgUrl:"./images/4.png",link:"https://www.netflix.com/"},{id:5,imgUrl:"./images/5.png",link:"https://www.netflix.com/"},{id:6,imgUrl:"./images/6.png",link:"https://www.netflix.com/"},{id:7,imgUrl:"./images/7.png",link:"https://www.netflix.com/"}];function bL(){return Ve.jsxs(Ve.Fragment,{children:[Ve.jsx(qR,{}),Ve.jsx(tC,{}),Ve.jsx(RL,{movie:CL}),Ve.jsx($R,{movies:PL})]})}uM.createRoot(document.getElementById("root")).render(Ve.jsx(Ye.StrictMode,{children:Ve.jsx(bL,{})}));
