(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();function _0(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}function v0(s){if(Object.prototype.hasOwnProperty.call(s,"__esModule"))return s;var e=s.default;if(typeof e=="function"){var t=function i(){var o=!1;try{o=this instanceof i}catch{}return o?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(s).forEach(function(i){var o=Object.getOwnPropertyDescriptor(s,i);Object.defineProperty(t,i,o.get?o:{enumerable:!0,get:function(){return s[i]}})}),t}var Zc={exports:{}},na={},Qc={exports:{}},ut={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wp;function y0(){if(Wp)return ut;Wp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),_=Symbol.iterator;function v(O){return O===null||typeof O!="object"?null:(O=_&&O[_]||O["@@iterator"],typeof O=="function"?O:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,M={};function y(O,ne,Pe){this.props=O,this.context=ne,this.refs=M,this.updater=Pe||S}y.prototype.isReactComponent={},y.prototype.setState=function(O,ne){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,ne,"setState")},y.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function x(){}x.prototype=y.prototype;function C(O,ne,Pe){this.props=O,this.context=ne,this.refs=M,this.updater=Pe||S}var T=C.prototype=new x;T.constructor=C,w(T,y.prototype),T.isPureReactComponent=!0;var L=Array.isArray,V=Object.prototype.hasOwnProperty,D={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function Q(O,ne,Pe){var $,ue={},xe=null,me=null;if(ne!=null)for($ in ne.ref!==void 0&&(me=ne.ref),ne.key!==void 0&&(xe=""+ne.key),ne)V.call(ne,$)&&!N.hasOwnProperty($)&&(ue[$]=ne[$]);var De=arguments.length-2;if(De===1)ue.children=Pe;else if(1<De){for(var Fe=Array(De),W=0;W<De;W++)Fe[W]=arguments[W+2];ue.children=Fe}if(O&&O.defaultProps)for($ in De=O.defaultProps,De)ue[$]===void 0&&(ue[$]=De[$]);return{$$typeof:s,type:O,key:xe,ref:me,props:ue,_owner:D.current}}function P(O,ne){return{$$typeof:s,type:O.type,key:ne,ref:O.ref,props:O.props,_owner:O._owner}}function A(O){return typeof O=="object"&&O!==null&&O.$$typeof===s}function q(O){var ne={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Pe){return ne[Pe]})}var se=/\/+/g;function z(O,ne){return typeof O=="object"&&O!==null&&O.key!=null?q(""+O.key):ne.toString(36)}function ae(O,ne,Pe,$,ue){var xe=typeof O;(xe==="undefined"||xe==="boolean")&&(O=null);var me=!1;if(O===null)me=!0;else switch(xe){case"string":case"number":me=!0;break;case"object":switch(O.$$typeof){case s:case e:me=!0}}if(me)return me=O,ue=ue(me),O=$===""?"."+z(me,0):$,L(ue)?(Pe="",O!=null&&(Pe=O.replace(se,"$&/")+"/"),ae(ue,ne,Pe,"",function(W){return W})):ue!=null&&(A(ue)&&(ue=P(ue,Pe+(!ue.key||me&&me.key===ue.key?"":(""+ue.key).replace(se,"$&/")+"/")+O)),ne.push(ue)),1;if(me=0,$=$===""?".":$+":",L(O))for(var De=0;De<O.length;De++){xe=O[De];var Fe=$+z(xe,De);me+=ae(xe,ne,Pe,Fe,ue)}else if(Fe=v(O),typeof Fe=="function")for(O=Fe.call(O),De=0;!(xe=O.next()).done;)xe=xe.value,Fe=$+z(xe,De++),me+=ae(xe,ne,Pe,Fe,ue);else if(xe==="object")throw ne=String(O),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.");return me}function oe(O,ne,Pe){if(O==null)return O;var $=[],ue=0;return ae(O,$,"","",function(xe){return ne.call(Pe,xe,ue++)}),$}function ge(O){if(O._status===-1){var ne=O._result;ne=ne(),ne.then(function(Pe){(O._status===0||O._status===-1)&&(O._status=1,O._result=Pe)},function(Pe){(O._status===0||O._status===-1)&&(O._status=2,O._result=Pe)}),O._status===-1&&(O._status=0,O._result=ne)}if(O._status===1)return O._result.default;throw O._result}var de={current:null},F={transition:null},re={ReactCurrentDispatcher:de,ReactCurrentBatchConfig:F,ReactCurrentOwner:D};function Y(){throw Error("act(...) is not supported in production builds of React.")}return ut.Children={map:oe,forEach:function(O,ne,Pe){oe(O,function(){ne.apply(this,arguments)},Pe)},count:function(O){var ne=0;return oe(O,function(){ne++}),ne},toArray:function(O){return oe(O,function(ne){return ne})||[]},only:function(O){if(!A(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},ut.Component=y,ut.Fragment=t,ut.Profiler=o,ut.PureComponent=C,ut.StrictMode=i,ut.Suspense=h,ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=re,ut.act=Y,ut.cloneElement=function(O,ne,Pe){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var $=w({},O.props),ue=O.key,xe=O.ref,me=O._owner;if(ne!=null){if(ne.ref!==void 0&&(xe=ne.ref,me=D.current),ne.key!==void 0&&(ue=""+ne.key),O.type&&O.type.defaultProps)var De=O.type.defaultProps;for(Fe in ne)V.call(ne,Fe)&&!N.hasOwnProperty(Fe)&&($[Fe]=ne[Fe]===void 0&&De!==void 0?De[Fe]:ne[Fe])}var Fe=arguments.length-2;if(Fe===1)$.children=Pe;else if(1<Fe){De=Array(Fe);for(var W=0;W<Fe;W++)De[W]=arguments[W+2];$.children=De}return{$$typeof:s,type:O.type,key:ue,ref:xe,props:$,_owner:me}},ut.createContext=function(O){return O={$$typeof:u,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:a,_context:O},O.Consumer=O},ut.createElement=Q,ut.createFactory=function(O){var ne=Q.bind(null,O);return ne.type=O,ne},ut.createRef=function(){return{current:null}},ut.forwardRef=function(O){return{$$typeof:d,render:O}},ut.isValidElement=A,ut.lazy=function(O){return{$$typeof:m,_payload:{_status:-1,_result:O},_init:ge}},ut.memo=function(O,ne){return{$$typeof:f,type:O,compare:ne===void 0?null:ne}},ut.startTransition=function(O){var ne=F.transition;F.transition={};try{O()}finally{F.transition=ne}},ut.unstable_act=Y,ut.useCallback=function(O,ne){return de.current.useCallback(O,ne)},ut.useContext=function(O){return de.current.useContext(O)},ut.useDebugValue=function(){},ut.useDeferredValue=function(O){return de.current.useDeferredValue(O)},ut.useEffect=function(O,ne){return de.current.useEffect(O,ne)},ut.useId=function(){return de.current.useId()},ut.useImperativeHandle=function(O,ne,Pe){return de.current.useImperativeHandle(O,ne,Pe)},ut.useInsertionEffect=function(O,ne){return de.current.useInsertionEffect(O,ne)},ut.useLayoutEffect=function(O,ne){return de.current.useLayoutEffect(O,ne)},ut.useMemo=function(O,ne){return de.current.useMemo(O,ne)},ut.useReducer=function(O,ne,Pe){return de.current.useReducer(O,ne,Pe)},ut.useRef=function(O){return de.current.useRef(O)},ut.useState=function(O){return de.current.useState(O)},ut.useSyncExternalStore=function(O,ne,Pe){return de.current.useSyncExternalStore(O,ne,Pe)},ut.useTransition=function(){return de.current.useTransition()},ut.version="18.3.1",ut}var jp;function ch(){return jp||(jp=1,Qc.exports=y0()),Qc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $p;function x0(){if($p)return na;$p=1;var s=ch(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(d,h,f){var m,_={},v=null,S=null;f!==void 0&&(v=""+f),h.key!==void 0&&(v=""+h.key),h.ref!==void 0&&(S=h.ref);for(m in h)i.call(h,m)&&!a.hasOwnProperty(m)&&(_[m]=h[m]);if(d&&d.defaultProps)for(m in h=d.defaultProps,h)_[m]===void 0&&(_[m]=h[m]);return{$$typeof:e,type:d,key:v,ref:S,props:_,_owner:o.current}}return na.Fragment=t,na.jsx=u,na.jsxs=u,na}var Xp;function S0(){return Xp||(Xp=1,Zc.exports=x0()),Zc.exports}var Ve=S0(),ss=ch(),Ml={},ed={exports:{}},An={},td={exports:{}},nd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qp;function E0(){return qp||(qp=1,(function(s){function e(F,re){var Y=F.length;F.push(re);e:for(;0<Y;){var O=Y-1>>>1,ne=F[O];if(0<o(ne,re))F[O]=re,F[Y]=ne,Y=O;else break e}}function t(F){return F.length===0?null:F[0]}function i(F){if(F.length===0)return null;var re=F[0],Y=F.pop();if(Y!==re){F[0]=Y;e:for(var O=0,ne=F.length,Pe=ne>>>1;O<Pe;){var $=2*(O+1)-1,ue=F[$],xe=$+1,me=F[xe];if(0>o(ue,Y))xe<ne&&0>o(me,ue)?(F[O]=me,F[xe]=Y,O=xe):(F[O]=ue,F[$]=Y,O=$);else if(xe<ne&&0>o(me,Y))F[O]=me,F[xe]=Y,O=xe;else break e}}return re}function o(F,re){var Y=F.sortIndex-re.sortIndex;return Y!==0?Y:F.id-re.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;s.unstable_now=function(){return a.now()}}else{var u=Date,d=u.now();s.unstable_now=function(){return u.now()-d}}var h=[],f=[],m=1,_=null,v=3,S=!1,w=!1,M=!1,y=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function T(F){for(var re=t(f);re!==null;){if(re.callback===null)i(f);else if(re.startTime<=F)i(f),re.sortIndex=re.expirationTime,e(h,re);else break;re=t(f)}}function L(F){if(M=!1,T(F),!w)if(t(h)!==null)w=!0,ge(V);else{var re=t(f);re!==null&&de(L,re.startTime-F)}}function V(F,re){w=!1,M&&(M=!1,x(Q),Q=-1),S=!0;var Y=v;try{for(T(re),_=t(h);_!==null&&(!(_.expirationTime>re)||F&&!q());){var O=_.callback;if(typeof O=="function"){_.callback=null,v=_.priorityLevel;var ne=O(_.expirationTime<=re);re=s.unstable_now(),typeof ne=="function"?_.callback=ne:_===t(h)&&i(h),T(re)}else i(h);_=t(h)}if(_!==null)var Pe=!0;else{var $=t(f);$!==null&&de(L,$.startTime-re),Pe=!1}return Pe}finally{_=null,v=Y,S=!1}}var D=!1,N=null,Q=-1,P=5,A=-1;function q(){return!(s.unstable_now()-A<P)}function se(){if(N!==null){var F=s.unstable_now();A=F;var re=!0;try{re=N(!0,F)}finally{re?z():(D=!1,N=null)}}else D=!1}var z;if(typeof C=="function")z=function(){C(se)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,oe=ae.port2;ae.port1.onmessage=se,z=function(){oe.postMessage(null)}}else z=function(){y(se,0)};function ge(F){N=F,D||(D=!0,z())}function de(F,re){Q=y(function(){F(s.unstable_now())},re)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(F){F.callback=null},s.unstable_continueExecution=function(){w||S||(w=!0,ge(V))},s.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<F?Math.floor(1e3/F):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_getFirstCallbackNode=function(){return t(h)},s.unstable_next=function(F){switch(v){case 1:case 2:case 3:var re=3;break;default:re=v}var Y=v;v=re;try{return F()}finally{v=Y}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(F,re){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var Y=v;v=F;try{return re()}finally{v=Y}},s.unstable_scheduleCallback=function(F,re,Y){var O=s.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?O+Y:O):Y=O,F){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=Y+ne,F={id:m++,callback:re,priorityLevel:F,startTime:Y,expirationTime:ne,sortIndex:-1},Y>O?(F.sortIndex=Y,e(f,F),t(h)===null&&F===t(f)&&(M?(x(Q),Q=-1):M=!0,de(L,Y-O))):(F.sortIndex=ne,e(h,F),w||S||(w=!0,ge(V))),F},s.unstable_shouldYield=q,s.unstable_wrapCallback=function(F){var re=v;return function(){var Y=v;v=re;try{return F.apply(this,arguments)}finally{v=Y}}}})(nd)),nd}var Yp;function w0(){return Yp||(Yp=1,td.exports=E0()),td.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kp;function M0(){if(Kp)return An;Kp=1;var s=ch(),e=w0();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,l=1;l<arguments.length;l++)r+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function a(n,r){u(n,r),u(n+"Capture",r)}function u(n,r){for(o[n]=r,n=0;n<r.length;n++)i.add(r[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},_={};function v(n){return h.call(_,n)?!0:h.call(m,n)?!1:f.test(n)?_[n]=!0:(m[n]=!0,!1)}function S(n,r,l,c){if(l!==null&&l.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:l!==null?!l.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function w(n,r,l,c){if(r===null||typeof r>"u"||S(n,r,l,c))return!0;if(c)return!1;if(l!==null)switch(l.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function M(n,r,l,c,p,g,E){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=p,this.mustUseProperty=l,this.propertyName=n,this.type=r,this.sanitizeURL=g,this.removeEmptyString=E}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new M(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];y[r]=new M(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new M(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new M(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new M(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new M(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new M(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new M(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new M(n,5,!1,n.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function C(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(x,C);y[r]=new M(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(x,C);y[r]=new M(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(x,C);y[r]=new M(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new M(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new M(n,1,!1,n.toLowerCase(),null,!0,!0)});function T(n,r,l,c){var p=y.hasOwnProperty(r)?y[r]:null;(p!==null?p.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(w(r,l,p,c)&&(l=null),c||p===null?v(r)&&(l===null?n.removeAttribute(r):n.setAttribute(r,""+l)):p.mustUseProperty?n[p.propertyName]=l===null?p.type===3?!1:"":l:(r=p.attributeName,c=p.attributeNamespace,l===null?n.removeAttribute(r):(p=p.type,l=p===3||p===4&&l===!0?"":""+l,c?n.setAttributeNS(c,r,l):n.setAttribute(r,l))))}var L=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,V=Symbol.for("react.element"),D=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),Q=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),q=Symbol.for("react.context"),se=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),ae=Symbol.for("react.suspense_list"),oe=Symbol.for("react.memo"),ge=Symbol.for("react.lazy"),de=Symbol.for("react.offscreen"),F=Symbol.iterator;function re(n){return n===null||typeof n!="object"?null:(n=F&&n[F]||n["@@iterator"],typeof n=="function"?n:null)}var Y=Object.assign,O;function ne(n){if(O===void 0)try{throw Error()}catch(l){var r=l.stack.trim().match(/\n( *(at )?)/);O=r&&r[1]||""}return`
`+O+n}var Pe=!1;function $(n,r){if(!n||Pe)return"";Pe=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(Z){var c=Z}Reflect.construct(n,[],r)}else{try{r.call()}catch(Z){c=Z}n.call(r.prototype)}else{try{throw Error()}catch(Z){c=Z}n()}}catch(Z){if(Z&&c&&typeof Z.stack=="string"){for(var p=Z.stack.split(`
`),g=c.stack.split(`
`),E=p.length-1,I=g.length-1;1<=E&&0<=I&&p[E]!==g[I];)I--;for(;1<=E&&0<=I;E--,I--)if(p[E]!==g[I]){if(E!==1||I!==1)do if(E--,I--,0>I||p[E]!==g[I]){var k=`
`+p[E].replace(" at new "," at ");return n.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",n.displayName)),k}while(1<=E&&0<=I);break}}}finally{Pe=!1,Error.prepareStackTrace=l}return(n=n?n.displayName||n.name:"")?ne(n):""}function ue(n){switch(n.tag){case 5:return ne(n.type);case 16:return ne("Lazy");case 13:return ne("Suspense");case 19:return ne("SuspenseList");case 0:case 2:case 15:return n=$(n.type,!1),n;case 11:return n=$(n.type.render,!1),n;case 1:return n=$(n.type,!0),n;default:return""}}function xe(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case N:return"Fragment";case D:return"Portal";case P:return"Profiler";case Q:return"StrictMode";case z:return"Suspense";case ae:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case q:return(n.displayName||"Context")+".Consumer";case A:return(n._context.displayName||"Context")+".Provider";case se:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case oe:return r=n.displayName||null,r!==null?r:xe(n.type)||"Memo";case ge:r=n._payload,n=n._init;try{return xe(n(r))}catch{}}return null}function me(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xe(r);case 8:return r===Q?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function De(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Fe(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function W(n){var r=Fe(n)?"checked":"value",l=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),c=""+n[r];if(!n.hasOwnProperty(r)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,g=l.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return p.call(this)},set:function(E){c=""+E,g.call(this,E)}}),Object.defineProperty(n,r,{enumerable:l.enumerable}),{getValue:function(){return c},setValue:function(E){c=""+E},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function yt(n){n._valueTracker||(n._valueTracker=W(n))}function $e(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var l=r.getValue(),c="";return n&&(c=Fe(n)?n.checked?"true":"false":n.value),n=c,n!==l?(r.setValue(n),!0):!1}function vt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Xe(n,r){var l=r.checked;return Y({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??n._wrapperState.initialChecked})}function dt(n,r){var l=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;l=De(r.value!=null?r.value:l),n._wrapperState={initialChecked:c,initialValue:l,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function it(n,r){r=r.checked,r!=null&&T(n,"checked",r,!1)}function lt(n,r){it(n,r);var l=De(r.value),c=r.type;if(l!=null)c==="number"?(l===0&&n.value===""||n.value!=l)&&(n.value=""+l):n.value!==""+l&&(n.value=""+l);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?U(n,r.type,l):r.hasOwnProperty("defaultValue")&&U(n,r.type,De(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Rt(n,r,l){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,l||r===n.value||(n.value=r),n.defaultValue=r}l=n.name,l!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,l!==""&&(n.name=l)}function U(n,r,l){(r!=="number"||vt(n.ownerDocument)!==n)&&(l==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+l&&(n.defaultValue=""+l))}var b=Array.isArray;function ie(n,r,l,c){if(n=n.options,r){r={};for(var p=0;p<l.length;p++)r["$"+l[p]]=!0;for(l=0;l<n.length;l++)p=r.hasOwnProperty("$"+n[l].value),n[l].selected!==p&&(n[l].selected=p),p&&c&&(n[l].defaultSelected=!0)}else{for(l=""+De(l),r=null,p=0;p<n.length;p++){if(n[p].value===l){n[p].selected=!0,c&&(n[p].defaultSelected=!0);return}r!==null||n[p].disabled||(r=n[p])}r!==null&&(r.selected=!0)}}function ce(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return Y({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function _e(n,r){var l=r.value;if(l==null){if(l=r.children,r=r.defaultValue,l!=null){if(r!=null)throw Error(t(92));if(b(l)){if(1<l.length)throw Error(t(93));l=l[0]}r=l}r==null&&(r=""),l=r}n._wrapperState={initialValue:De(l)}}function ye(n,r){var l=De(r.value),c=De(r.defaultValue);l!=null&&(l=""+l,l!==n.value&&(n.value=l),r.defaultValue==null&&n.defaultValue!==l&&(n.defaultValue=l)),c!=null&&(n.defaultValue=""+c)}function Ge(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function Ae(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Me(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?Ae(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ze,Ee=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,l,c,p){MSApp.execUnsafeLocalFunction(function(){return n(r,l,c,p)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(Ze=Ze||document.createElement("div"),Ze.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Ze.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function He(n,r){if(r){var l=n.firstChild;if(l&&l===n.lastChild&&l.nodeType===3){l.nodeValue=r;return}}n.textContent=r}var at={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qe=["Webkit","ms","Moz","O"];Object.keys(at).forEach(function(n){qe.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),at[r]=at[n]})});function Le(n,r,l){return r==null||typeof r=="boolean"||r===""?"":l||typeof r!="number"||r===0||at.hasOwnProperty(n)&&at[n]?(""+r).trim():r+"px"}function nt(n,r){n=n.style;for(var l in r)if(r.hasOwnProperty(l)){var c=l.indexOf("--")===0,p=Le(l,r[l],c);l==="float"&&(l="cssFloat"),c?n.setProperty(l,p):n[l]=p}}var ht=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ct(n,r){if(r){if(ht[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function et(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var H=null;function he(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var le=null,we=null,Re=null;function ft(n){if(n=Ho(n)){if(typeof le!="function")throw Error(t(280));var r=n.stateNode;r&&(r=Ba(r),le(n.stateNode,n.type,r))}}function wt(n){we?Re?Re.push(n):Re=[n]:we=n}function Pt(){if(we){var n=we,r=Re;if(Re=we=null,ft(n),r)for(n=0;n<r.length;n++)ft(r[n])}}function Wt(n,r){return n(r)}function gt(){}var Sn=!1;function Qt(n,r,l){if(Sn)return n(r,l);Sn=!0;try{return Wt(n,r,l)}finally{Sn=!1,(we!==null||Re!==null)&&(gt(),Pt())}}function Vi(n,r){var l=n.stateNode;if(l===null)return null;var c=Ba(l);if(c===null)return null;l=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(l&&typeof l!="function")throw Error(t(231,r,typeof l));return l}var ls=!1;if(d)try{var Gi={};Object.defineProperty(Gi,"passive",{get:function(){ls=!0}}),window.addEventListener("test",Gi,Gi),window.removeEventListener("test",Gi,Gi)}catch{ls=!1}function us(n,r,l,c,p,g,E,I,k){var Z=Array.prototype.slice.call(arguments,3);try{r.apply(l,Z)}catch(pe){this.onError(pe)}}var Wi=!1,Ei=null,Cr=!1,cs=null,gu={onError:function(n){Wi=!0,Ei=n}};function _u(n,r,l,c,p,g,E,I,k){Wi=!1,Ei=null,us.apply(gu,arguments)}function vu(n,r,l,c,p,g,E,I,k){if(_u.apply(this,arguments),Wi){if(Wi){var Z=Ei;Wi=!1,Ei=null}else throw Error(t(198));Cr||(Cr=!0,cs=Z)}}function R(n){var r=n,l=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(l=r.return),n=r.return;while(n)}return r.tag===3?l:null}function G(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function te(n){if(R(n)!==n)throw Error(t(188))}function J(n){var r=n.alternate;if(!r){if(r=R(n),r===null)throw Error(t(188));return r!==n?null:n}for(var l=n,c=r;;){var p=l.return;if(p===null)break;var g=p.alternate;if(g===null){if(c=p.return,c!==null){l=c;continue}break}if(p.child===g.child){for(g=p.child;g;){if(g===l)return te(p),n;if(g===c)return te(p),r;g=g.sibling}throw Error(t(188))}if(l.return!==c.return)l=p,c=g;else{for(var E=!1,I=p.child;I;){if(I===l){E=!0,l=p,c=g;break}if(I===c){E=!0,c=p,l=g;break}I=I.sibling}if(!E){for(I=g.child;I;){if(I===l){E=!0,l=g,c=p;break}if(I===c){E=!0,c=g,l=p;break}I=I.sibling}if(!E)throw Error(t(189))}}if(l.alternate!==c)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?n:r}function K(n){return n=J(n),n!==null?Te(n):null}function Te(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=Te(n);if(r!==null)return r;n=n.sibling}return null}var ke=e.unstable_scheduleCallback,ze=e.unstable_cancelCallback,Ye=e.unstable_shouldYield,Qe=e.unstable_requestPaint,Ne=e.unstable_now,rt=e.unstable_getCurrentPriorityLevel,Ut=e.unstable_ImmediatePriority,jt=e.unstable_UserBlockingPriority,en=e.unstable_NormalPriority,Jn=e.unstable_LowPriority,pt=e.unstable_IdlePriority,Ke=null,dn=null;function Tt(n){if(dn&&typeof dn.onCommitFiberRoot=="function")try{dn.onCommitFiberRoot(Ke,n,void 0,(n.current.flags&128)===128)}catch{}}var $t=Math.clz32?Math.clz32:Eo,wa=Math.log,Pr=Math.LN2;function Eo(n){return n>>>=0,n===0?32:31-(wa(n)/Pr|0)|0}var Bt=64,Dn=4194304;function wi(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function an(n,r){var l=n.pendingLanes;if(l===0)return 0;var c=0,p=n.suspendedLanes,g=n.pingedLanes,E=l&268435455;if(E!==0){var I=E&~p;I!==0?c=wi(I):(g&=E,g!==0&&(c=wi(g)))}else E=l&~p,E!==0?c=wi(E):g!==0&&(c=wi(g));if(c===0)return 0;if(r!==0&&r!==c&&(r&p)===0&&(p=c&-c,g=r&-r,p>=g||p===16&&(g&4194240)!==0))return r;if((c&4)!==0&&(c|=l&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=c;0<r;)l=31-$t(r),p=1<<l,c|=n[l],r&=~p;return c}function wo(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yu(n,r){for(var l=n.suspendedLanes,c=n.pingedLanes,p=n.expirationTimes,g=n.pendingLanes;0<g;){var E=31-$t(g),I=1<<E,k=p[E];k===-1?((I&l)===0||(I&c)!==0)&&(p[E]=wo(I,r)):k<=r&&(n.expiredLanes|=I),g&=~I}}function ds(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function xh(){var n=Bt;return Bt<<=1,(Bt&4194240)===0&&(Bt=64),n}function xu(n){for(var r=[],l=0;31>l;l++)r.push(n);return r}function Mo(n,r,l){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-$t(r),n[r]=l}function F_(n,r){var l=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<l;){var p=31-$t(l),g=1<<p;r[p]=0,c[p]=-1,n[p]=-1,l&=~g}}function Su(n,r){var l=n.entangledLanes|=r;for(n=n.entanglements;l;){var c=31-$t(l),p=1<<c;p&r|n[c]&r&&(n[c]|=r),l&=~p}}var St=0;function Sh(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Eh,Eu,wh,Mh,Th,wu=!1,Ma=[],ji=null,$i=null,Xi=null,To=new Map,bo=new Map,qi=[],B_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bh(n,r){switch(n){case"focusin":case"focusout":ji=null;break;case"dragenter":case"dragleave":$i=null;break;case"mouseover":case"mouseout":Xi=null;break;case"pointerover":case"pointerout":To.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":bo.delete(r.pointerId)}}function Ao(n,r,l,c,p,g){return n===null||n.nativeEvent!==g?(n={blockedOn:r,domEventName:l,eventSystemFlags:c,nativeEvent:g,targetContainers:[p]},r!==null&&(r=Ho(r),r!==null&&Eu(r)),n):(n.eventSystemFlags|=c,r=n.targetContainers,p!==null&&r.indexOf(p)===-1&&r.push(p),n)}function z_(n,r,l,c,p){switch(r){case"focusin":return ji=Ao(ji,n,r,l,c,p),!0;case"dragenter":return $i=Ao($i,n,r,l,c,p),!0;case"mouseover":return Xi=Ao(Xi,n,r,l,c,p),!0;case"pointerover":var g=p.pointerId;return To.set(g,Ao(To.get(g)||null,n,r,l,c,p)),!0;case"gotpointercapture":return g=p.pointerId,bo.set(g,Ao(bo.get(g)||null,n,r,l,c,p)),!0}return!1}function Ah(n){var r=Lr(n.target);if(r!==null){var l=R(r);if(l!==null){if(r=l.tag,r===13){if(r=G(l),r!==null){n.blockedOn=r,Th(n.priority,function(){wh(l)});return}}else if(r===3&&l.stateNode.current.memoizedState.isDehydrated){n.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ta(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var l=Tu(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(l===null){l=n.nativeEvent;var c=new l.constructor(l.type,l);H=c,l.target.dispatchEvent(c),H=null}else return r=Ho(l),r!==null&&Eu(r),n.blockedOn=l,!1;r.shift()}return!0}function Rh(n,r,l){Ta(n)&&l.delete(r)}function H_(){wu=!1,ji!==null&&Ta(ji)&&(ji=null),$i!==null&&Ta($i)&&($i=null),Xi!==null&&Ta(Xi)&&(Xi=null),To.forEach(Rh),bo.forEach(Rh)}function Ro(n,r){n.blockedOn===r&&(n.blockedOn=null,wu||(wu=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,H_)))}function Co(n){function r(p){return Ro(p,n)}if(0<Ma.length){Ro(Ma[0],n);for(var l=1;l<Ma.length;l++){var c=Ma[l];c.blockedOn===n&&(c.blockedOn=null)}}for(ji!==null&&Ro(ji,n),$i!==null&&Ro($i,n),Xi!==null&&Ro(Xi,n),To.forEach(r),bo.forEach(r),l=0;l<qi.length;l++)c=qi[l],c.blockedOn===n&&(c.blockedOn=null);for(;0<qi.length&&(l=qi[0],l.blockedOn===null);)Ah(l),l.blockedOn===null&&qi.shift()}var hs=L.ReactCurrentBatchConfig,ba=!0;function V_(n,r,l,c){var p=St,g=hs.transition;hs.transition=null;try{St=1,Mu(n,r,l,c)}finally{St=p,hs.transition=g}}function G_(n,r,l,c){var p=St,g=hs.transition;hs.transition=null;try{St=4,Mu(n,r,l,c)}finally{St=p,hs.transition=g}}function Mu(n,r,l,c){if(ba){var p=Tu(n,r,l,c);if(p===null)Vu(n,r,c,Aa,l),bh(n,c);else if(z_(p,n,r,l,c))c.stopPropagation();else if(bh(n,c),r&4&&-1<B_.indexOf(n)){for(;p!==null;){var g=Ho(p);if(g!==null&&Eh(g),g=Tu(n,r,l,c),g===null&&Vu(n,r,c,Aa,l),g===p)break;p=g}p!==null&&c.stopPropagation()}else Vu(n,r,c,null,l)}}var Aa=null;function Tu(n,r,l,c){if(Aa=null,n=he(c),n=Lr(n),n!==null)if(r=R(n),r===null)n=null;else if(l=r.tag,l===13){if(n=G(r),n!==null)return n;n=null}else if(l===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Aa=n,null}function Ch(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(rt()){case Ut:return 1;case jt:return 4;case en:case Jn:return 16;case pt:return 536870912;default:return 16}default:return 16}}var Yi=null,bu=null,Ra=null;function Ph(){if(Ra)return Ra;var n,r=bu,l=r.length,c,p="value"in Yi?Yi.value:Yi.textContent,g=p.length;for(n=0;n<l&&r[n]===p[n];n++);var E=l-n;for(c=1;c<=E&&r[l-c]===p[g-c];c++);return Ra=p.slice(n,1<c?1-c:void 0)}function Ca(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Pa(){return!0}function Lh(){return!1}function Un(n){function r(l,c,p,g,E){this._reactName=l,this._targetInst=p,this.type=c,this.nativeEvent=g,this.target=E,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(l=n[I],this[I]=l?l(g):g[I]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Pa:Lh,this.isPropagationStopped=Lh,this}return Y(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Pa)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Pa)},persist:function(){},isPersistent:Pa}),r}var fs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Au=Un(fs),Po=Y({},fs,{view:0,detail:0}),W_=Un(Po),Ru,Cu,Lo,La=Y({},Po,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Lu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Lo&&(Lo&&n.type==="mousemove"?(Ru=n.screenX-Lo.screenX,Cu=n.screenY-Lo.screenY):Cu=Ru=0,Lo=n),Ru)},movementY:function(n){return"movementY"in n?n.movementY:Cu}}),Ih=Un(La),j_=Y({},La,{dataTransfer:0}),$_=Un(j_),X_=Y({},Po,{relatedTarget:0}),Pu=Un(X_),q_=Y({},fs,{animationName:0,elapsedTime:0,pseudoElement:0}),Y_=Un(q_),K_=Y({},fs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),J_=Un(K_),Z_=Y({},fs,{data:0}),Dh=Un(Z_),Q_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ev={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nv(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=tv[n])?!!r[n]:!1}function Lu(){return nv}var iv=Y({},Po,{key:function(n){if(n.key){var r=Q_[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Ca(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?ev[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Lu,charCode:function(n){return n.type==="keypress"?Ca(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ca(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),rv=Un(iv),sv=Y({},La,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Uh=Un(sv),ov=Y({},Po,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Lu}),av=Un(ov),lv=Y({},fs,{propertyName:0,elapsedTime:0,pseudoElement:0}),uv=Un(lv),cv=Y({},La,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),dv=Un(cv),hv=[9,13,27,32],Iu=d&&"CompositionEvent"in window,Io=null;d&&"documentMode"in document&&(Io=document.documentMode);var fv=d&&"TextEvent"in window&&!Io,Nh=d&&(!Iu||Io&&8<Io&&11>=Io),Oh=" ",kh=!1;function Fh(n,r){switch(n){case"keyup":return hv.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Bh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ps=!1;function pv(n,r){switch(n){case"compositionend":return Bh(r);case"keypress":return r.which!==32?null:(kh=!0,Oh);case"textInput":return n=r.data,n===Oh&&kh?null:n;default:return null}}function mv(n,r){if(ps)return n==="compositionend"||!Iu&&Fh(n,r)?(n=Ph(),Ra=bu=Yi=null,ps=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Nh&&r.locale!=="ko"?null:r.data;default:return null}}var gv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zh(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!gv[n.type]:r==="textarea"}function Hh(n,r,l,c){wt(c),r=Oa(r,"onChange"),0<r.length&&(l=new Au("onChange","change",null,l,c),n.push({event:l,listeners:r}))}var Do=null,Uo=null;function _v(n){of(n,0)}function Ia(n){var r=ys(n);if($e(r))return n}function vv(n,r){if(n==="change")return r}var Vh=!1;if(d){var Du;if(d){var Uu="oninput"in document;if(!Uu){var Gh=document.createElement("div");Gh.setAttribute("oninput","return;"),Uu=typeof Gh.oninput=="function"}Du=Uu}else Du=!1;Vh=Du&&(!document.documentMode||9<document.documentMode)}function Wh(){Do&&(Do.detachEvent("onpropertychange",jh),Uo=Do=null)}function jh(n){if(n.propertyName==="value"&&Ia(Uo)){var r=[];Hh(r,Uo,n,he(n)),Qt(_v,r)}}function yv(n,r,l){n==="focusin"?(Wh(),Do=r,Uo=l,Do.attachEvent("onpropertychange",jh)):n==="focusout"&&Wh()}function xv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ia(Uo)}function Sv(n,r){if(n==="click")return Ia(r)}function Ev(n,r){if(n==="input"||n==="change")return Ia(r)}function wv(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Zn=typeof Object.is=="function"?Object.is:wv;function No(n,r){if(Zn(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var l=Object.keys(n),c=Object.keys(r);if(l.length!==c.length)return!1;for(c=0;c<l.length;c++){var p=l[c];if(!h.call(r,p)||!Zn(n[p],r[p]))return!1}return!0}function $h(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Xh(n,r){var l=$h(n);n=0;for(var c;l;){if(l.nodeType===3){if(c=n+l.textContent.length,n<=r&&c>=r)return{node:l,offset:r-n};n=c}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=$h(l)}}function qh(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?qh(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Yh(){for(var n=window,r=vt();r instanceof n.HTMLIFrameElement;){try{var l=typeof r.contentWindow.location.href=="string"}catch{l=!1}if(l)n=r.contentWindow;else break;r=vt(n.document)}return r}function Nu(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function Mv(n){var r=Yh(),l=n.focusedElem,c=n.selectionRange;if(r!==l&&l&&l.ownerDocument&&qh(l.ownerDocument.documentElement,l)){if(c!==null&&Nu(l)){if(r=c.start,n=c.end,n===void 0&&(n=r),"selectionStart"in l)l.selectionStart=r,l.selectionEnd=Math.min(n,l.value.length);else if(n=(r=l.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var p=l.textContent.length,g=Math.min(c.start,p);c=c.end===void 0?g:Math.min(c.end,p),!n.extend&&g>c&&(p=c,c=g,g=p),p=Xh(l,g);var E=Xh(l,c);p&&E&&(n.rangeCount!==1||n.anchorNode!==p.node||n.anchorOffset!==p.offset||n.focusNode!==E.node||n.focusOffset!==E.offset)&&(r=r.createRange(),r.setStart(p.node,p.offset),n.removeAllRanges(),g>c?(n.addRange(r),n.extend(E.node,E.offset)):(r.setEnd(E.node,E.offset),n.addRange(r)))}}for(r=[],n=l;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<r.length;l++)n=r[l],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Tv=d&&"documentMode"in document&&11>=document.documentMode,ms=null,Ou=null,Oo=null,ku=!1;function Kh(n,r,l){var c=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;ku||ms==null||ms!==vt(c)||(c=ms,"selectionStart"in c&&Nu(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Oo&&No(Oo,c)||(Oo=c,c=Oa(Ou,"onSelect"),0<c.length&&(r=new Au("onSelect","select",null,r,l),n.push({event:r,listeners:c}),r.target=ms)))}function Da(n,r){var l={};return l[n.toLowerCase()]=r.toLowerCase(),l["Webkit"+n]="webkit"+r,l["Moz"+n]="moz"+r,l}var gs={animationend:Da("Animation","AnimationEnd"),animationiteration:Da("Animation","AnimationIteration"),animationstart:Da("Animation","AnimationStart"),transitionend:Da("Transition","TransitionEnd")},Fu={},Jh={};d&&(Jh=document.createElement("div").style,"AnimationEvent"in window||(delete gs.animationend.animation,delete gs.animationiteration.animation,delete gs.animationstart.animation),"TransitionEvent"in window||delete gs.transitionend.transition);function Ua(n){if(Fu[n])return Fu[n];if(!gs[n])return n;var r=gs[n],l;for(l in r)if(r.hasOwnProperty(l)&&l in Jh)return Fu[n]=r[l];return n}var Zh=Ua("animationend"),Qh=Ua("animationiteration"),ef=Ua("animationstart"),tf=Ua("transitionend"),nf=new Map,rf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ki(n,r){nf.set(n,r),a(r,[n])}for(var Bu=0;Bu<rf.length;Bu++){var zu=rf[Bu],bv=zu.toLowerCase(),Av=zu[0].toUpperCase()+zu.slice(1);Ki(bv,"on"+Av)}Ki(Zh,"onAnimationEnd"),Ki(Qh,"onAnimationIteration"),Ki(ef,"onAnimationStart"),Ki("dblclick","onDoubleClick"),Ki("focusin","onFocus"),Ki("focusout","onBlur"),Ki(tf,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ko="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Rv=new Set("cancel close invalid load scroll toggle".split(" ").concat(ko));function sf(n,r,l){var c=n.type||"unknown-event";n.currentTarget=l,vu(c,r,void 0,n),n.currentTarget=null}function of(n,r){r=(r&4)!==0;for(var l=0;l<n.length;l++){var c=n[l],p=c.event;c=c.listeners;e:{var g=void 0;if(r)for(var E=c.length-1;0<=E;E--){var I=c[E],k=I.instance,Z=I.currentTarget;if(I=I.listener,k!==g&&p.isPropagationStopped())break e;sf(p,I,Z),g=k}else for(E=0;E<c.length;E++){if(I=c[E],k=I.instance,Z=I.currentTarget,I=I.listener,k!==g&&p.isPropagationStopped())break e;sf(p,I,Z),g=k}}}if(Cr)throw n=cs,Cr=!1,cs=null,n}function Lt(n,r){var l=r[qu];l===void 0&&(l=r[qu]=new Set);var c=n+"__bubble";l.has(c)||(af(r,n,2,!1),l.add(c))}function Hu(n,r,l){var c=0;r&&(c|=4),af(l,n,c,r)}var Na="_reactListening"+Math.random().toString(36).slice(2);function Fo(n){if(!n[Na]){n[Na]=!0,i.forEach(function(l){l!=="selectionchange"&&(Rv.has(l)||Hu(l,!1,n),Hu(l,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Na]||(r[Na]=!0,Hu("selectionchange",!1,r))}}function af(n,r,l,c){switch(Ch(r)){case 1:var p=V_;break;case 4:p=G_;break;default:p=Mu}l=p.bind(null,r,l,n),p=void 0,!ls||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(p=!0),c?p!==void 0?n.addEventListener(r,l,{capture:!0,passive:p}):n.addEventListener(r,l,!0):p!==void 0?n.addEventListener(r,l,{passive:p}):n.addEventListener(r,l,!1)}function Vu(n,r,l,c,p){var g=c;if((r&1)===0&&(r&2)===0&&c!==null)e:for(;;){if(c===null)return;var E=c.tag;if(E===3||E===4){var I=c.stateNode.containerInfo;if(I===p||I.nodeType===8&&I.parentNode===p)break;if(E===4)for(E=c.return;E!==null;){var k=E.tag;if((k===3||k===4)&&(k=E.stateNode.containerInfo,k===p||k.nodeType===8&&k.parentNode===p))return;E=E.return}for(;I!==null;){if(E=Lr(I),E===null)return;if(k=E.tag,k===5||k===6){c=g=E;continue e}I=I.parentNode}}c=c.return}Qt(function(){var Z=g,pe=he(l),ve=[];e:{var fe=nf.get(n);if(fe!==void 0){var Ce=Au,Ue=n;switch(n){case"keypress":if(Ca(l)===0)break e;case"keydown":case"keyup":Ce=rv;break;case"focusin":Ue="focus",Ce=Pu;break;case"focusout":Ue="blur",Ce=Pu;break;case"beforeblur":case"afterblur":Ce=Pu;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ce=Ih;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ce=$_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ce=av;break;case Zh:case Qh:case ef:Ce=Y_;break;case tf:Ce=uv;break;case"scroll":Ce=W_;break;case"wheel":Ce=dv;break;case"copy":case"cut":case"paste":Ce=J_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ce=Uh}var Oe=(r&4)!==0,zt=!Oe&&n==="scroll",j=Oe?fe!==null?fe+"Capture":null:fe;Oe=[];for(var B=Z,X;B!==null;){X=B;var Se=X.stateNode;if(X.tag===5&&Se!==null&&(X=Se,j!==null&&(Se=Vi(B,j),Se!=null&&Oe.push(Bo(B,Se,X)))),zt)break;B=B.return}0<Oe.length&&(fe=new Ce(fe,Ue,null,l,pe),ve.push({event:fe,listeners:Oe}))}}if((r&7)===0){e:{if(fe=n==="mouseover"||n==="pointerover",Ce=n==="mouseout"||n==="pointerout",fe&&l!==H&&(Ue=l.relatedTarget||l.fromElement)&&(Lr(Ue)||Ue[Mi]))break e;if((Ce||fe)&&(fe=pe.window===pe?pe:(fe=pe.ownerDocument)?fe.defaultView||fe.parentWindow:window,Ce?(Ue=l.relatedTarget||l.toElement,Ce=Z,Ue=Ue?Lr(Ue):null,Ue!==null&&(zt=R(Ue),Ue!==zt||Ue.tag!==5&&Ue.tag!==6)&&(Ue=null)):(Ce=null,Ue=Z),Ce!==Ue)){if(Oe=Ih,Se="onMouseLeave",j="onMouseEnter",B="mouse",(n==="pointerout"||n==="pointerover")&&(Oe=Uh,Se="onPointerLeave",j="onPointerEnter",B="pointer"),zt=Ce==null?fe:ys(Ce),X=Ue==null?fe:ys(Ue),fe=new Oe(Se,B+"leave",Ce,l,pe),fe.target=zt,fe.relatedTarget=X,Se=null,Lr(pe)===Z&&(Oe=new Oe(j,B+"enter",Ue,l,pe),Oe.target=X,Oe.relatedTarget=zt,Se=Oe),zt=Se,Ce&&Ue)t:{for(Oe=Ce,j=Ue,B=0,X=Oe;X;X=_s(X))B++;for(X=0,Se=j;Se;Se=_s(Se))X++;for(;0<B-X;)Oe=_s(Oe),B--;for(;0<X-B;)j=_s(j),X--;for(;B--;){if(Oe===j||j!==null&&Oe===j.alternate)break t;Oe=_s(Oe),j=_s(j)}Oe=null}else Oe=null;Ce!==null&&lf(ve,fe,Ce,Oe,!1),Ue!==null&&zt!==null&&lf(ve,zt,Ue,Oe,!0)}}e:{if(fe=Z?ys(Z):window,Ce=fe.nodeName&&fe.nodeName.toLowerCase(),Ce==="select"||Ce==="input"&&fe.type==="file")var Be=vv;else if(zh(fe))if(Vh)Be=Ev;else{Be=xv;var We=yv}else(Ce=fe.nodeName)&&Ce.toLowerCase()==="input"&&(fe.type==="checkbox"||fe.type==="radio")&&(Be=Sv);if(Be&&(Be=Be(n,Z))){Hh(ve,Be,l,pe);break e}We&&We(n,fe,Z),n==="focusout"&&(We=fe._wrapperState)&&We.controlled&&fe.type==="number"&&U(fe,"number",fe.value)}switch(We=Z?ys(Z):window,n){case"focusin":(zh(We)||We.contentEditable==="true")&&(ms=We,Ou=Z,Oo=null);break;case"focusout":Oo=Ou=ms=null;break;case"mousedown":ku=!0;break;case"contextmenu":case"mouseup":case"dragend":ku=!1,Kh(ve,l,pe);break;case"selectionchange":if(Tv)break;case"keydown":case"keyup":Kh(ve,l,pe)}var je;if(Iu)e:{switch(n){case"compositionstart":var Je="onCompositionStart";break e;case"compositionend":Je="onCompositionEnd";break e;case"compositionupdate":Je="onCompositionUpdate";break e}Je=void 0}else ps?Fh(n,l)&&(Je="onCompositionEnd"):n==="keydown"&&l.keyCode===229&&(Je="onCompositionStart");Je&&(Nh&&l.locale!=="ko"&&(ps||Je!=="onCompositionStart"?Je==="onCompositionEnd"&&ps&&(je=Ph()):(Yi=pe,bu="value"in Yi?Yi.value:Yi.textContent,ps=!0)),We=Oa(Z,Je),0<We.length&&(Je=new Dh(Je,n,null,l,pe),ve.push({event:Je,listeners:We}),je?Je.data=je:(je=Bh(l),je!==null&&(Je.data=je)))),(je=fv?pv(n,l):mv(n,l))&&(Z=Oa(Z,"onBeforeInput"),0<Z.length&&(pe=new Dh("onBeforeInput","beforeinput",null,l,pe),ve.push({event:pe,listeners:Z}),pe.data=je))}of(ve,r)})}function Bo(n,r,l){return{instance:n,listener:r,currentTarget:l}}function Oa(n,r){for(var l=r+"Capture",c=[];n!==null;){var p=n,g=p.stateNode;p.tag===5&&g!==null&&(p=g,g=Vi(n,l),g!=null&&c.unshift(Bo(n,g,p)),g=Vi(n,r),g!=null&&c.push(Bo(n,g,p))),n=n.return}return c}function _s(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function lf(n,r,l,c,p){for(var g=r._reactName,E=[];l!==null&&l!==c;){var I=l,k=I.alternate,Z=I.stateNode;if(k!==null&&k===c)break;I.tag===5&&Z!==null&&(I=Z,p?(k=Vi(l,g),k!=null&&E.unshift(Bo(l,k,I))):p||(k=Vi(l,g),k!=null&&E.push(Bo(l,k,I)))),l=l.return}E.length!==0&&n.push({event:r,listeners:E})}var Cv=/\r\n?/g,Pv=/\u0000|\uFFFD/g;function uf(n){return(typeof n=="string"?n:""+n).replace(Cv,`
`).replace(Pv,"")}function ka(n,r,l){if(r=uf(r),uf(n)!==r&&l)throw Error(t(425))}function Fa(){}var Gu=null,Wu=null;function ju(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var $u=typeof setTimeout=="function"?setTimeout:void 0,Lv=typeof clearTimeout=="function"?clearTimeout:void 0,cf=typeof Promise=="function"?Promise:void 0,Iv=typeof queueMicrotask=="function"?queueMicrotask:typeof cf<"u"?function(n){return cf.resolve(null).then(n).catch(Dv)}:$u;function Dv(n){setTimeout(function(){throw n})}function Xu(n,r){var l=r,c=0;do{var p=l.nextSibling;if(n.removeChild(l),p&&p.nodeType===8)if(l=p.data,l==="/$"){if(c===0){n.removeChild(p),Co(r);return}c--}else l!=="$"&&l!=="$?"&&l!=="$!"||c++;l=p}while(l);Co(r)}function Ji(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function df(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="$"||l==="$!"||l==="$?"){if(r===0)return n;r--}else l==="/$"&&r++}n=n.previousSibling}return null}var vs=Math.random().toString(36).slice(2),ci="__reactFiber$"+vs,zo="__reactProps$"+vs,Mi="__reactContainer$"+vs,qu="__reactEvents$"+vs,Uv="__reactListeners$"+vs,Nv="__reactHandles$"+vs;function Lr(n){var r=n[ci];if(r)return r;for(var l=n.parentNode;l;){if(r=l[Mi]||l[ci]){if(l=r.alternate,r.child!==null||l!==null&&l.child!==null)for(n=df(n);n!==null;){if(l=n[ci])return l;n=df(n)}return r}n=l,l=n.parentNode}return null}function Ho(n){return n=n[ci]||n[Mi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ys(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Ba(n){return n[zo]||null}var Yu=[],xs=-1;function Zi(n){return{current:n}}function It(n){0>xs||(n.current=Yu[xs],Yu[xs]=null,xs--)}function bt(n,r){xs++,Yu[xs]=n.current,n.current=r}var Qi={},hn=Zi(Qi),En=Zi(!1),Ir=Qi;function Ss(n,r){var l=n.type.contextTypes;if(!l)return Qi;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var p={},g;for(g in l)p[g]=r[g];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=p),p}function wn(n){return n=n.childContextTypes,n!=null}function za(){It(En),It(hn)}function hf(n,r,l){if(hn.current!==Qi)throw Error(t(168));bt(hn,r),bt(En,l)}function ff(n,r,l){var c=n.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return l;c=c.getChildContext();for(var p in c)if(!(p in r))throw Error(t(108,me(n)||"Unknown",p));return Y({},l,c)}function Ha(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Qi,Ir=hn.current,bt(hn,n),bt(En,En.current),!0}function pf(n,r,l){var c=n.stateNode;if(!c)throw Error(t(169));l?(n=ff(n,r,Ir),c.__reactInternalMemoizedMergedChildContext=n,It(En),It(hn),bt(hn,n)):It(En),bt(En,l)}var Ti=null,Va=!1,Ku=!1;function mf(n){Ti===null?Ti=[n]:Ti.push(n)}function Ov(n){Va=!0,mf(n)}function er(){if(!Ku&&Ti!==null){Ku=!0;var n=0,r=St;try{var l=Ti;for(St=1;n<l.length;n++){var c=l[n];do c=c(!0);while(c!==null)}Ti=null,Va=!1}catch(p){throw Ti!==null&&(Ti=Ti.slice(n+1)),ke(Ut,er),p}finally{St=r,Ku=!1}}return null}var Es=[],ws=0,Ga=null,Wa=0,Hn=[],Vn=0,Dr=null,bi=1,Ai="";function Ur(n,r){Es[ws++]=Wa,Es[ws++]=Ga,Ga=n,Wa=r}function gf(n,r,l){Hn[Vn++]=bi,Hn[Vn++]=Ai,Hn[Vn++]=Dr,Dr=n;var c=bi;n=Ai;var p=32-$t(c)-1;c&=~(1<<p),l+=1;var g=32-$t(r)+p;if(30<g){var E=p-p%5;g=(c&(1<<E)-1).toString(32),c>>=E,p-=E,bi=1<<32-$t(r)+p|l<<p|c,Ai=g+n}else bi=1<<g|l<<p|c,Ai=n}function Ju(n){n.return!==null&&(Ur(n,1),gf(n,1,0))}function Zu(n){for(;n===Ga;)Ga=Es[--ws],Es[ws]=null,Wa=Es[--ws],Es[ws]=null;for(;n===Dr;)Dr=Hn[--Vn],Hn[Vn]=null,Ai=Hn[--Vn],Hn[Vn]=null,bi=Hn[--Vn],Hn[Vn]=null}var Nn=null,On=null,Nt=!1,Qn=null;function _f(n,r){var l=$n(5,null,null,0);l.elementType="DELETED",l.stateNode=r,l.return=n,r=n.deletions,r===null?(n.deletions=[l],n.flags|=16):r.push(l)}function vf(n,r){switch(n.tag){case 5:var l=n.type;return r=r.nodeType!==1||l.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,Nn=n,On=Ji(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,Nn=n,On=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(l=Dr!==null?{id:bi,overflow:Ai}:null,n.memoizedState={dehydrated:r,treeContext:l,retryLane:1073741824},l=$n(18,null,null,0),l.stateNode=r,l.return=n,n.child=l,Nn=n,On=null,!0):!1;default:return!1}}function Qu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function ec(n){if(Nt){var r=On;if(r){var l=r;if(!vf(n,r)){if(Qu(n))throw Error(t(418));r=Ji(l.nextSibling);var c=Nn;r&&vf(n,r)?_f(c,l):(n.flags=n.flags&-4097|2,Nt=!1,Nn=n)}}else{if(Qu(n))throw Error(t(418));n.flags=n.flags&-4097|2,Nt=!1,Nn=n}}}function yf(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Nn=n}function ja(n){if(n!==Nn)return!1;if(!Nt)return yf(n),Nt=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!ju(n.type,n.memoizedProps)),r&&(r=On)){if(Qu(n))throw xf(),Error(t(418));for(;r;)_f(n,r),r=Ji(r.nextSibling)}if(yf(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="/$"){if(r===0){On=Ji(n.nextSibling);break e}r--}else l!=="$"&&l!=="$!"&&l!=="$?"||r++}n=n.nextSibling}On=null}}else On=Nn?Ji(n.stateNode.nextSibling):null;return!0}function xf(){for(var n=On;n;)n=Ji(n.nextSibling)}function Ms(){On=Nn=null,Nt=!1}function tc(n){Qn===null?Qn=[n]:Qn.push(n)}var kv=L.ReactCurrentBatchConfig;function Vo(n,r,l){if(n=l.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var c=l.stateNode}if(!c)throw Error(t(147,n));var p=c,g=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===g?r.ref:(r=function(E){var I=p.refs;E===null?delete I[g]:I[g]=E},r._stringRef=g,r)}if(typeof n!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,n))}return n}function $a(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function Sf(n){var r=n._init;return r(n._payload)}function Ef(n){function r(j,B){if(n){var X=j.deletions;X===null?(j.deletions=[B],j.flags|=16):X.push(B)}}function l(j,B){if(!n)return null;for(;B!==null;)r(j,B),B=B.sibling;return null}function c(j,B){for(j=new Map;B!==null;)B.key!==null?j.set(B.key,B):j.set(B.index,B),B=B.sibling;return j}function p(j,B){return j=lr(j,B),j.index=0,j.sibling=null,j}function g(j,B,X){return j.index=X,n?(X=j.alternate,X!==null?(X=X.index,X<B?(j.flags|=2,B):X):(j.flags|=2,B)):(j.flags|=1048576,B)}function E(j){return n&&j.alternate===null&&(j.flags|=2),j}function I(j,B,X,Se){return B===null||B.tag!==6?(B=$c(X,j.mode,Se),B.return=j,B):(B=p(B,X),B.return=j,B)}function k(j,B,X,Se){var Be=X.type;return Be===N?pe(j,B,X.props.children,Se,X.key):B!==null&&(B.elementType===Be||typeof Be=="object"&&Be!==null&&Be.$$typeof===ge&&Sf(Be)===B.type)?(Se=p(B,X.props),Se.ref=Vo(j,B,X),Se.return=j,Se):(Se=gl(X.type,X.key,X.props,null,j.mode,Se),Se.ref=Vo(j,B,X),Se.return=j,Se)}function Z(j,B,X,Se){return B===null||B.tag!==4||B.stateNode.containerInfo!==X.containerInfo||B.stateNode.implementation!==X.implementation?(B=Xc(X,j.mode,Se),B.return=j,B):(B=p(B,X.children||[]),B.return=j,B)}function pe(j,B,X,Se,Be){return B===null||B.tag!==7?(B=Vr(X,j.mode,Se,Be),B.return=j,B):(B=p(B,X),B.return=j,B)}function ve(j,B,X){if(typeof B=="string"&&B!==""||typeof B=="number")return B=$c(""+B,j.mode,X),B.return=j,B;if(typeof B=="object"&&B!==null){switch(B.$$typeof){case V:return X=gl(B.type,B.key,B.props,null,j.mode,X),X.ref=Vo(j,null,B),X.return=j,X;case D:return B=Xc(B,j.mode,X),B.return=j,B;case ge:var Se=B._init;return ve(j,Se(B._payload),X)}if(b(B)||re(B))return B=Vr(B,j.mode,X,null),B.return=j,B;$a(j,B)}return null}function fe(j,B,X,Se){var Be=B!==null?B.key:null;if(typeof X=="string"&&X!==""||typeof X=="number")return Be!==null?null:I(j,B,""+X,Se);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case V:return X.key===Be?k(j,B,X,Se):null;case D:return X.key===Be?Z(j,B,X,Se):null;case ge:return Be=X._init,fe(j,B,Be(X._payload),Se)}if(b(X)||re(X))return Be!==null?null:pe(j,B,X,Se,null);$a(j,X)}return null}function Ce(j,B,X,Se,Be){if(typeof Se=="string"&&Se!==""||typeof Se=="number")return j=j.get(X)||null,I(B,j,""+Se,Be);if(typeof Se=="object"&&Se!==null){switch(Se.$$typeof){case V:return j=j.get(Se.key===null?X:Se.key)||null,k(B,j,Se,Be);case D:return j=j.get(Se.key===null?X:Se.key)||null,Z(B,j,Se,Be);case ge:var We=Se._init;return Ce(j,B,X,We(Se._payload),Be)}if(b(Se)||re(Se))return j=j.get(X)||null,pe(B,j,Se,Be,null);$a(B,Se)}return null}function Ue(j,B,X,Se){for(var Be=null,We=null,je=B,Je=B=0,rn=null;je!==null&&Je<X.length;Je++){je.index>Je?(rn=je,je=null):rn=je.sibling;var _t=fe(j,je,X[Je],Se);if(_t===null){je===null&&(je=rn);break}n&&je&&_t.alternate===null&&r(j,je),B=g(_t,B,Je),We===null?Be=_t:We.sibling=_t,We=_t,je=rn}if(Je===X.length)return l(j,je),Nt&&Ur(j,Je),Be;if(je===null){for(;Je<X.length;Je++)je=ve(j,X[Je],Se),je!==null&&(B=g(je,B,Je),We===null?Be=je:We.sibling=je,We=je);return Nt&&Ur(j,Je),Be}for(je=c(j,je);Je<X.length;Je++)rn=Ce(je,j,Je,X[Je],Se),rn!==null&&(n&&rn.alternate!==null&&je.delete(rn.key===null?Je:rn.key),B=g(rn,B,Je),We===null?Be=rn:We.sibling=rn,We=rn);return n&&je.forEach(function(ur){return r(j,ur)}),Nt&&Ur(j,Je),Be}function Oe(j,B,X,Se){var Be=re(X);if(typeof Be!="function")throw Error(t(150));if(X=Be.call(X),X==null)throw Error(t(151));for(var We=Be=null,je=B,Je=B=0,rn=null,_t=X.next();je!==null&&!_t.done;Je++,_t=X.next()){je.index>Je?(rn=je,je=null):rn=je.sibling;var ur=fe(j,je,_t.value,Se);if(ur===null){je===null&&(je=rn);break}n&&je&&ur.alternate===null&&r(j,je),B=g(ur,B,Je),We===null?Be=ur:We.sibling=ur,We=ur,je=rn}if(_t.done)return l(j,je),Nt&&Ur(j,Je),Be;if(je===null){for(;!_t.done;Je++,_t=X.next())_t=ve(j,_t.value,Se),_t!==null&&(B=g(_t,B,Je),We===null?Be=_t:We.sibling=_t,We=_t);return Nt&&Ur(j,Je),Be}for(je=c(j,je);!_t.done;Je++,_t=X.next())_t=Ce(je,j,Je,_t.value,Se),_t!==null&&(n&&_t.alternate!==null&&je.delete(_t.key===null?Je:_t.key),B=g(_t,B,Je),We===null?Be=_t:We.sibling=_t,We=_t);return n&&je.forEach(function(g0){return r(j,g0)}),Nt&&Ur(j,Je),Be}function zt(j,B,X,Se){if(typeof X=="object"&&X!==null&&X.type===N&&X.key===null&&(X=X.props.children),typeof X=="object"&&X!==null){switch(X.$$typeof){case V:e:{for(var Be=X.key,We=B;We!==null;){if(We.key===Be){if(Be=X.type,Be===N){if(We.tag===7){l(j,We.sibling),B=p(We,X.props.children),B.return=j,j=B;break e}}else if(We.elementType===Be||typeof Be=="object"&&Be!==null&&Be.$$typeof===ge&&Sf(Be)===We.type){l(j,We.sibling),B=p(We,X.props),B.ref=Vo(j,We,X),B.return=j,j=B;break e}l(j,We);break}else r(j,We);We=We.sibling}X.type===N?(B=Vr(X.props.children,j.mode,Se,X.key),B.return=j,j=B):(Se=gl(X.type,X.key,X.props,null,j.mode,Se),Se.ref=Vo(j,B,X),Se.return=j,j=Se)}return E(j);case D:e:{for(We=X.key;B!==null;){if(B.key===We)if(B.tag===4&&B.stateNode.containerInfo===X.containerInfo&&B.stateNode.implementation===X.implementation){l(j,B.sibling),B=p(B,X.children||[]),B.return=j,j=B;break e}else{l(j,B);break}else r(j,B);B=B.sibling}B=Xc(X,j.mode,Se),B.return=j,j=B}return E(j);case ge:return We=X._init,zt(j,B,We(X._payload),Se)}if(b(X))return Ue(j,B,X,Se);if(re(X))return Oe(j,B,X,Se);$a(j,X)}return typeof X=="string"&&X!==""||typeof X=="number"?(X=""+X,B!==null&&B.tag===6?(l(j,B.sibling),B=p(B,X),B.return=j,j=B):(l(j,B),B=$c(X,j.mode,Se),B.return=j,j=B),E(j)):l(j,B)}return zt}var Ts=Ef(!0),wf=Ef(!1),Xa=Zi(null),qa=null,bs=null,nc=null;function ic(){nc=bs=qa=null}function rc(n){var r=Xa.current;It(Xa),n._currentValue=r}function sc(n,r,l){for(;n!==null;){var c=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),n===l)break;n=n.return}}function As(n,r){qa=n,nc=bs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Mn=!0),n.firstContext=null)}function Gn(n){var r=n._currentValue;if(nc!==n)if(n={context:n,memoizedValue:r,next:null},bs===null){if(qa===null)throw Error(t(308));bs=n,qa.dependencies={lanes:0,firstContext:n}}else bs=bs.next=n;return r}var Nr=null;function oc(n){Nr===null?Nr=[n]:Nr.push(n)}function Mf(n,r,l,c){var p=r.interleaved;return p===null?(l.next=l,oc(r)):(l.next=p.next,p.next=l),r.interleaved=l,Ri(n,c)}function Ri(n,r){n.lanes|=r;var l=n.alternate;for(l!==null&&(l.lanes|=r),l=n,n=n.return;n!==null;)n.childLanes|=r,l=n.alternate,l!==null&&(l.childLanes|=r),l=n,n=n.return;return l.tag===3?l.stateNode:null}var tr=!1;function ac(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Tf(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ci(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function nr(n,r,l){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(mt&2)!==0){var p=c.pending;return p===null?r.next=r:(r.next=p.next,p.next=r),c.pending=r,Ri(n,l)}return p=c.interleaved,p===null?(r.next=r,oc(c)):(r.next=p.next,p.next=r),c.interleaved=r,Ri(n,l)}function Ya(n,r,l){if(r=r.updateQueue,r!==null&&(r=r.shared,(l&4194240)!==0)){var c=r.lanes;c&=n.pendingLanes,l|=c,r.lanes=l,Su(n,l)}}function bf(n,r){var l=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,l===c)){var p=null,g=null;if(l=l.firstBaseUpdate,l!==null){do{var E={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};g===null?p=g=E:g=g.next=E,l=l.next}while(l!==null);g===null?p=g=r:g=g.next=r}else p=g=r;l={baseState:c.baseState,firstBaseUpdate:p,lastBaseUpdate:g,shared:c.shared,effects:c.effects},n.updateQueue=l;return}n=l.lastBaseUpdate,n===null?l.firstBaseUpdate=r:n.next=r,l.lastBaseUpdate=r}function Ka(n,r,l,c){var p=n.updateQueue;tr=!1;var g=p.firstBaseUpdate,E=p.lastBaseUpdate,I=p.shared.pending;if(I!==null){p.shared.pending=null;var k=I,Z=k.next;k.next=null,E===null?g=Z:E.next=Z,E=k;var pe=n.alternate;pe!==null&&(pe=pe.updateQueue,I=pe.lastBaseUpdate,I!==E&&(I===null?pe.firstBaseUpdate=Z:I.next=Z,pe.lastBaseUpdate=k))}if(g!==null){var ve=p.baseState;E=0,pe=Z=k=null,I=g;do{var fe=I.lane,Ce=I.eventTime;if((c&fe)===fe){pe!==null&&(pe=pe.next={eventTime:Ce,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var Ue=n,Oe=I;switch(fe=r,Ce=l,Oe.tag){case 1:if(Ue=Oe.payload,typeof Ue=="function"){ve=Ue.call(Ce,ve,fe);break e}ve=Ue;break e;case 3:Ue.flags=Ue.flags&-65537|128;case 0:if(Ue=Oe.payload,fe=typeof Ue=="function"?Ue.call(Ce,ve,fe):Ue,fe==null)break e;ve=Y({},ve,fe);break e;case 2:tr=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,fe=p.effects,fe===null?p.effects=[I]:fe.push(I))}else Ce={eventTime:Ce,lane:fe,tag:I.tag,payload:I.payload,callback:I.callback,next:null},pe===null?(Z=pe=Ce,k=ve):pe=pe.next=Ce,E|=fe;if(I=I.next,I===null){if(I=p.shared.pending,I===null)break;fe=I,I=fe.next,fe.next=null,p.lastBaseUpdate=fe,p.shared.pending=null}}while(!0);if(pe===null&&(k=ve),p.baseState=k,p.firstBaseUpdate=Z,p.lastBaseUpdate=pe,r=p.shared.interleaved,r!==null){p=r;do E|=p.lane,p=p.next;while(p!==r)}else g===null&&(p.shared.lanes=0);Fr|=E,n.lanes=E,n.memoizedState=ve}}function Af(n,r,l){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var c=n[r],p=c.callback;if(p!==null){if(c.callback=null,c=l,typeof p!="function")throw Error(t(191,p));p.call(c)}}}var Go={},di=Zi(Go),Wo=Zi(Go),jo=Zi(Go);function Or(n){if(n===Go)throw Error(t(174));return n}function lc(n,r){switch(bt(jo,r),bt(Wo,n),bt(di,Go),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:Me(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=Me(r,n)}It(di),bt(di,r)}function Rs(){It(di),It(Wo),It(jo)}function Rf(n){Or(jo.current);var r=Or(di.current),l=Me(r,n.type);r!==l&&(bt(Wo,n),bt(di,l))}function uc(n){Wo.current===n&&(It(di),It(Wo))}var Ot=Zi(0);function Ja(n){for(var r=n;r!==null;){if(r.tag===13){var l=r.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var cc=[];function dc(){for(var n=0;n<cc.length;n++)cc[n]._workInProgressVersionPrimary=null;cc.length=0}var Za=L.ReactCurrentDispatcher,hc=L.ReactCurrentBatchConfig,kr=0,kt=null,Xt=null,tn=null,Qa=!1,$o=!1,Xo=0,Fv=0;function fn(){throw Error(t(321))}function fc(n,r){if(r===null)return!1;for(var l=0;l<r.length&&l<n.length;l++)if(!Zn(n[l],r[l]))return!1;return!0}function pc(n,r,l,c,p,g){if(kr=g,kt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Za.current=n===null||n.memoizedState===null?Vv:Gv,n=l(c,p),$o){g=0;do{if($o=!1,Xo=0,25<=g)throw Error(t(301));g+=1,tn=Xt=null,r.updateQueue=null,Za.current=Wv,n=l(c,p)}while($o)}if(Za.current=nl,r=Xt!==null&&Xt.next!==null,kr=0,tn=Xt=kt=null,Qa=!1,r)throw Error(t(300));return n}function mc(){var n=Xo!==0;return Xo=0,n}function hi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return tn===null?kt.memoizedState=tn=n:tn=tn.next=n,tn}function Wn(){if(Xt===null){var n=kt.alternate;n=n!==null?n.memoizedState:null}else n=Xt.next;var r=tn===null?kt.memoizedState:tn.next;if(r!==null)tn=r,Xt=n;else{if(n===null)throw Error(t(310));Xt=n,n={memoizedState:Xt.memoizedState,baseState:Xt.baseState,baseQueue:Xt.baseQueue,queue:Xt.queue,next:null},tn===null?kt.memoizedState=tn=n:tn=tn.next=n}return tn}function qo(n,r){return typeof r=="function"?r(n):r}function gc(n){var r=Wn(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var c=Xt,p=c.baseQueue,g=l.pending;if(g!==null){if(p!==null){var E=p.next;p.next=g.next,g.next=E}c.baseQueue=p=g,l.pending=null}if(p!==null){g=p.next,c=c.baseState;var I=E=null,k=null,Z=g;do{var pe=Z.lane;if((kr&pe)===pe)k!==null&&(k=k.next={lane:0,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null}),c=Z.hasEagerState?Z.eagerState:n(c,Z.action);else{var ve={lane:pe,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null};k===null?(I=k=ve,E=c):k=k.next=ve,kt.lanes|=pe,Fr|=pe}Z=Z.next}while(Z!==null&&Z!==g);k===null?E=c:k.next=I,Zn(c,r.memoizedState)||(Mn=!0),r.memoizedState=c,r.baseState=E,r.baseQueue=k,l.lastRenderedState=c}if(n=l.interleaved,n!==null){p=n;do g=p.lane,kt.lanes|=g,Fr|=g,p=p.next;while(p!==n)}else p===null&&(l.lanes=0);return[r.memoizedState,l.dispatch]}function _c(n){var r=Wn(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var c=l.dispatch,p=l.pending,g=r.memoizedState;if(p!==null){l.pending=null;var E=p=p.next;do g=n(g,E.action),E=E.next;while(E!==p);Zn(g,r.memoizedState)||(Mn=!0),r.memoizedState=g,r.baseQueue===null&&(r.baseState=g),l.lastRenderedState=g}return[g,c]}function Cf(){}function Pf(n,r){var l=kt,c=Wn(),p=r(),g=!Zn(c.memoizedState,p);if(g&&(c.memoizedState=p,Mn=!0),c=c.queue,vc(Df.bind(null,l,c,n),[n]),c.getSnapshot!==r||g||tn!==null&&tn.memoizedState.tag&1){if(l.flags|=2048,Yo(9,If.bind(null,l,c,p,r),void 0,null),nn===null)throw Error(t(349));(kr&30)!==0||Lf(l,r,p)}return p}function Lf(n,r,l){n.flags|=16384,n={getSnapshot:r,value:l},r=kt.updateQueue,r===null?(r={lastEffect:null,stores:null},kt.updateQueue=r,r.stores=[n]):(l=r.stores,l===null?r.stores=[n]:l.push(n))}function If(n,r,l,c){r.value=l,r.getSnapshot=c,Uf(r)&&Nf(n)}function Df(n,r,l){return l(function(){Uf(r)&&Nf(n)})}function Uf(n){var r=n.getSnapshot;n=n.value;try{var l=r();return!Zn(n,l)}catch{return!0}}function Nf(n){var r=Ri(n,1);r!==null&&ii(r,n,1,-1)}function Of(n){var r=hi();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qo,lastRenderedState:n},r.queue=n,n=n.dispatch=Hv.bind(null,kt,n),[r.memoizedState,n]}function Yo(n,r,l,c){return n={tag:n,create:r,destroy:l,deps:c,next:null},r=kt.updateQueue,r===null?(r={lastEffect:null,stores:null},kt.updateQueue=r,r.lastEffect=n.next=n):(l=r.lastEffect,l===null?r.lastEffect=n.next=n:(c=l.next,l.next=n,n.next=c,r.lastEffect=n)),n}function kf(){return Wn().memoizedState}function el(n,r,l,c){var p=hi();kt.flags|=n,p.memoizedState=Yo(1|r,l,void 0,c===void 0?null:c)}function tl(n,r,l,c){var p=Wn();c=c===void 0?null:c;var g=void 0;if(Xt!==null){var E=Xt.memoizedState;if(g=E.destroy,c!==null&&fc(c,E.deps)){p.memoizedState=Yo(r,l,g,c);return}}kt.flags|=n,p.memoizedState=Yo(1|r,l,g,c)}function Ff(n,r){return el(8390656,8,n,r)}function vc(n,r){return tl(2048,8,n,r)}function Bf(n,r){return tl(4,2,n,r)}function zf(n,r){return tl(4,4,n,r)}function Hf(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Vf(n,r,l){return l=l!=null?l.concat([n]):null,tl(4,4,Hf.bind(null,r,n),l)}function yc(){}function Gf(n,r){var l=Wn();r=r===void 0?null:r;var c=l.memoizedState;return c!==null&&r!==null&&fc(r,c[1])?c[0]:(l.memoizedState=[n,r],n)}function Wf(n,r){var l=Wn();r=r===void 0?null:r;var c=l.memoizedState;return c!==null&&r!==null&&fc(r,c[1])?c[0]:(n=n(),l.memoizedState=[n,r],n)}function jf(n,r,l){return(kr&21)===0?(n.baseState&&(n.baseState=!1,Mn=!0),n.memoizedState=l):(Zn(l,r)||(l=xh(),kt.lanes|=l,Fr|=l,n.baseState=!0),r)}function Bv(n,r){var l=St;St=l!==0&&4>l?l:4,n(!0);var c=hc.transition;hc.transition={};try{n(!1),r()}finally{St=l,hc.transition=c}}function $f(){return Wn().memoizedState}function zv(n,r,l){var c=or(n);if(l={lane:c,action:l,hasEagerState:!1,eagerState:null,next:null},Xf(n))qf(r,l);else if(l=Mf(n,r,l,c),l!==null){var p=yn();ii(l,n,c,p),Yf(l,r,c)}}function Hv(n,r,l){var c=or(n),p={lane:c,action:l,hasEagerState:!1,eagerState:null,next:null};if(Xf(n))qf(r,p);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=r.lastRenderedReducer,g!==null))try{var E=r.lastRenderedState,I=g(E,l);if(p.hasEagerState=!0,p.eagerState=I,Zn(I,E)){var k=r.interleaved;k===null?(p.next=p,oc(r)):(p.next=k.next,k.next=p),r.interleaved=p;return}}catch{}finally{}l=Mf(n,r,p,c),l!==null&&(p=yn(),ii(l,n,c,p),Yf(l,r,c))}}function Xf(n){var r=n.alternate;return n===kt||r!==null&&r===kt}function qf(n,r){$o=Qa=!0;var l=n.pending;l===null?r.next=r:(r.next=l.next,l.next=r),n.pending=r}function Yf(n,r,l){if((l&4194240)!==0){var c=r.lanes;c&=n.pendingLanes,l|=c,r.lanes=l,Su(n,l)}}var nl={readContext:Gn,useCallback:fn,useContext:fn,useEffect:fn,useImperativeHandle:fn,useInsertionEffect:fn,useLayoutEffect:fn,useMemo:fn,useReducer:fn,useRef:fn,useState:fn,useDebugValue:fn,useDeferredValue:fn,useTransition:fn,useMutableSource:fn,useSyncExternalStore:fn,useId:fn,unstable_isNewReconciler:!1},Vv={readContext:Gn,useCallback:function(n,r){return hi().memoizedState=[n,r===void 0?null:r],n},useContext:Gn,useEffect:Ff,useImperativeHandle:function(n,r,l){return l=l!=null?l.concat([n]):null,el(4194308,4,Hf.bind(null,r,n),l)},useLayoutEffect:function(n,r){return el(4194308,4,n,r)},useInsertionEffect:function(n,r){return el(4,2,n,r)},useMemo:function(n,r){var l=hi();return r=r===void 0?null:r,n=n(),l.memoizedState=[n,r],n},useReducer:function(n,r,l){var c=hi();return r=l!==void 0?l(r):r,c.memoizedState=c.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},c.queue=n,n=n.dispatch=zv.bind(null,kt,n),[c.memoizedState,n]},useRef:function(n){var r=hi();return n={current:n},r.memoizedState=n},useState:Of,useDebugValue:yc,useDeferredValue:function(n){return hi().memoizedState=n},useTransition:function(){var n=Of(!1),r=n[0];return n=Bv.bind(null,n[1]),hi().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,l){var c=kt,p=hi();if(Nt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=r(),nn===null)throw Error(t(349));(kr&30)!==0||Lf(c,r,l)}p.memoizedState=l;var g={value:l,getSnapshot:r};return p.queue=g,Ff(Df.bind(null,c,g,n),[n]),c.flags|=2048,Yo(9,If.bind(null,c,g,l,r),void 0,null),l},useId:function(){var n=hi(),r=nn.identifierPrefix;if(Nt){var l=Ai,c=bi;l=(c&~(1<<32-$t(c)-1)).toString(32)+l,r=":"+r+"R"+l,l=Xo++,0<l&&(r+="H"+l.toString(32)),r+=":"}else l=Fv++,r=":"+r+"r"+l.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},Gv={readContext:Gn,useCallback:Gf,useContext:Gn,useEffect:vc,useImperativeHandle:Vf,useInsertionEffect:Bf,useLayoutEffect:zf,useMemo:Wf,useReducer:gc,useRef:kf,useState:function(){return gc(qo)},useDebugValue:yc,useDeferredValue:function(n){var r=Wn();return jf(r,Xt.memoizedState,n)},useTransition:function(){var n=gc(qo)[0],r=Wn().memoizedState;return[n,r]},useMutableSource:Cf,useSyncExternalStore:Pf,useId:$f,unstable_isNewReconciler:!1},Wv={readContext:Gn,useCallback:Gf,useContext:Gn,useEffect:vc,useImperativeHandle:Vf,useInsertionEffect:Bf,useLayoutEffect:zf,useMemo:Wf,useReducer:_c,useRef:kf,useState:function(){return _c(qo)},useDebugValue:yc,useDeferredValue:function(n){var r=Wn();return Xt===null?r.memoizedState=n:jf(r,Xt.memoizedState,n)},useTransition:function(){var n=_c(qo)[0],r=Wn().memoizedState;return[n,r]},useMutableSource:Cf,useSyncExternalStore:Pf,useId:$f,unstable_isNewReconciler:!1};function ei(n,r){if(n&&n.defaultProps){r=Y({},r),n=n.defaultProps;for(var l in n)r[l]===void 0&&(r[l]=n[l]);return r}return r}function xc(n,r,l,c){r=n.memoizedState,l=l(c,r),l=l==null?r:Y({},r,l),n.memoizedState=l,n.lanes===0&&(n.updateQueue.baseState=l)}var il={isMounted:function(n){return(n=n._reactInternals)?R(n)===n:!1},enqueueSetState:function(n,r,l){n=n._reactInternals;var c=yn(),p=or(n),g=Ci(c,p);g.payload=r,l!=null&&(g.callback=l),r=nr(n,g,p),r!==null&&(ii(r,n,p,c),Ya(r,n,p))},enqueueReplaceState:function(n,r,l){n=n._reactInternals;var c=yn(),p=or(n),g=Ci(c,p);g.tag=1,g.payload=r,l!=null&&(g.callback=l),r=nr(n,g,p),r!==null&&(ii(r,n,p,c),Ya(r,n,p))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var l=yn(),c=or(n),p=Ci(l,c);p.tag=2,r!=null&&(p.callback=r),r=nr(n,p,c),r!==null&&(ii(r,n,c,l),Ya(r,n,c))}};function Kf(n,r,l,c,p,g,E){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,g,E):r.prototype&&r.prototype.isPureReactComponent?!No(l,c)||!No(p,g):!0}function Jf(n,r,l){var c=!1,p=Qi,g=r.contextType;return typeof g=="object"&&g!==null?g=Gn(g):(p=wn(r)?Ir:hn.current,c=r.contextTypes,g=(c=c!=null)?Ss(n,p):Qi),r=new r(l,g),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=il,n.stateNode=r,r._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=p,n.__reactInternalMemoizedMaskedChildContext=g),r}function Zf(n,r,l,c){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(l,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(l,c),r.state!==n&&il.enqueueReplaceState(r,r.state,null)}function Sc(n,r,l,c){var p=n.stateNode;p.props=l,p.state=n.memoizedState,p.refs={},ac(n);var g=r.contextType;typeof g=="object"&&g!==null?p.context=Gn(g):(g=wn(r)?Ir:hn.current,p.context=Ss(n,g)),p.state=n.memoizedState,g=r.getDerivedStateFromProps,typeof g=="function"&&(xc(n,r,g,l),p.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(r=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),r!==p.state&&il.enqueueReplaceState(p,p.state,null),Ka(n,l,p,c),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308)}function Cs(n,r){try{var l="",c=r;do l+=ue(c),c=c.return;while(c);var p=l}catch(g){p=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:r,stack:p,digest:null}}function Ec(n,r,l){return{value:n,source:null,stack:l??null,digest:r??null}}function wc(n,r){try{console.error(r.value)}catch(l){setTimeout(function(){throw l})}}var jv=typeof WeakMap=="function"?WeakMap:Map;function Qf(n,r,l){l=Ci(-1,l),l.tag=3,l.payload={element:null};var c=r.value;return l.callback=function(){cl||(cl=!0,Fc=c),wc(n,r)},l}function ep(n,r,l){l=Ci(-1,l),l.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var p=r.value;l.payload=function(){return c(p)},l.callback=function(){wc(n,r)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(l.callback=function(){wc(n,r),typeof c!="function"&&(rr===null?rr=new Set([this]):rr.add(this));var E=r.stack;this.componentDidCatch(r.value,{componentStack:E!==null?E:""})}),l}function tp(n,r,l){var c=n.pingCache;if(c===null){c=n.pingCache=new jv;var p=new Set;c.set(r,p)}else p=c.get(r),p===void 0&&(p=new Set,c.set(r,p));p.has(l)||(p.add(l),n=s0.bind(null,n,r,l),r.then(n,n))}function np(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function ip(n,r,l,c,p){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(r=Ci(-1,1),r.tag=2,nr(l,r,1))),l.lanes|=1),n):(n.flags|=65536,n.lanes=p,n)}var $v=L.ReactCurrentOwner,Mn=!1;function vn(n,r,l,c){r.child=n===null?wf(r,null,l,c):Ts(r,n.child,l,c)}function rp(n,r,l,c,p){l=l.render;var g=r.ref;return As(r,p),c=pc(n,r,l,c,g,p),l=mc(),n!==null&&!Mn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~p,Pi(n,r,p)):(Nt&&l&&Ju(r),r.flags|=1,vn(n,r,c,p),r.child)}function sp(n,r,l,c,p){if(n===null){var g=l.type;return typeof g=="function"&&!jc(g)&&g.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(r.tag=15,r.type=g,op(n,r,g,c,p)):(n=gl(l.type,null,c,r,r.mode,p),n.ref=r.ref,n.return=r,r.child=n)}if(g=n.child,(n.lanes&p)===0){var E=g.memoizedProps;if(l=l.compare,l=l!==null?l:No,l(E,c)&&n.ref===r.ref)return Pi(n,r,p)}return r.flags|=1,n=lr(g,c),n.ref=r.ref,n.return=r,r.child=n}function op(n,r,l,c,p){if(n!==null){var g=n.memoizedProps;if(No(g,c)&&n.ref===r.ref)if(Mn=!1,r.pendingProps=c=g,(n.lanes&p)!==0)(n.flags&131072)!==0&&(Mn=!0);else return r.lanes=n.lanes,Pi(n,r,p)}return Mc(n,r,l,c,p)}function ap(n,r,l){var c=r.pendingProps,p=c.children,g=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},bt(Ls,kn),kn|=l;else{if((l&1073741824)===0)return n=g!==null?g.baseLanes|l:l,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,bt(Ls,kn),kn|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:l,bt(Ls,kn),kn|=c}else g!==null?(c=g.baseLanes|l,r.memoizedState=null):c=l,bt(Ls,kn),kn|=c;return vn(n,r,p,l),r.child}function lp(n,r){var l=r.ref;(n===null&&l!==null||n!==null&&n.ref!==l)&&(r.flags|=512,r.flags|=2097152)}function Mc(n,r,l,c,p){var g=wn(l)?Ir:hn.current;return g=Ss(r,g),As(r,p),l=pc(n,r,l,c,g,p),c=mc(),n!==null&&!Mn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~p,Pi(n,r,p)):(Nt&&c&&Ju(r),r.flags|=1,vn(n,r,l,p),r.child)}function up(n,r,l,c,p){if(wn(l)){var g=!0;Ha(r)}else g=!1;if(As(r,p),r.stateNode===null)sl(n,r),Jf(r,l,c),Sc(r,l,c,p),c=!0;else if(n===null){var E=r.stateNode,I=r.memoizedProps;E.props=I;var k=E.context,Z=l.contextType;typeof Z=="object"&&Z!==null?Z=Gn(Z):(Z=wn(l)?Ir:hn.current,Z=Ss(r,Z));var pe=l.getDerivedStateFromProps,ve=typeof pe=="function"||typeof E.getSnapshotBeforeUpdate=="function";ve||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(I!==c||k!==Z)&&Zf(r,E,c,Z),tr=!1;var fe=r.memoizedState;E.state=fe,Ka(r,c,E,p),k=r.memoizedState,I!==c||fe!==k||En.current||tr?(typeof pe=="function"&&(xc(r,l,pe,c),k=r.memoizedState),(I=tr||Kf(r,l,I,c,fe,k,Z))?(ve||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(r.flags|=4194308)):(typeof E.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=k),E.props=c,E.state=k,E.context=Z,c=I):(typeof E.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{E=r.stateNode,Tf(n,r),I=r.memoizedProps,Z=r.type===r.elementType?I:ei(r.type,I),E.props=Z,ve=r.pendingProps,fe=E.context,k=l.contextType,typeof k=="object"&&k!==null?k=Gn(k):(k=wn(l)?Ir:hn.current,k=Ss(r,k));var Ce=l.getDerivedStateFromProps;(pe=typeof Ce=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(I!==ve||fe!==k)&&Zf(r,E,c,k),tr=!1,fe=r.memoizedState,E.state=fe,Ka(r,c,E,p);var Ue=r.memoizedState;I!==ve||fe!==Ue||En.current||tr?(typeof Ce=="function"&&(xc(r,l,Ce,c),Ue=r.memoizedState),(Z=tr||Kf(r,l,Z,c,fe,Ue,k)||!1)?(pe||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(c,Ue,k),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(c,Ue,k)),typeof E.componentDidUpdate=="function"&&(r.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof E.componentDidUpdate!="function"||I===n.memoizedProps&&fe===n.memoizedState||(r.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&fe===n.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=Ue),E.props=c,E.state=Ue,E.context=k,c=Z):(typeof E.componentDidUpdate!="function"||I===n.memoizedProps&&fe===n.memoizedState||(r.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&fe===n.memoizedState||(r.flags|=1024),c=!1)}return Tc(n,r,l,c,g,p)}function Tc(n,r,l,c,p,g){lp(n,r);var E=(r.flags&128)!==0;if(!c&&!E)return p&&pf(r,l,!1),Pi(n,r,g);c=r.stateNode,$v.current=r;var I=E&&typeof l.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,n!==null&&E?(r.child=Ts(r,n.child,null,g),r.child=Ts(r,null,I,g)):vn(n,r,I,g),r.memoizedState=c.state,p&&pf(r,l,!0),r.child}function cp(n){var r=n.stateNode;r.pendingContext?hf(n,r.pendingContext,r.pendingContext!==r.context):r.context&&hf(n,r.context,!1),lc(n,r.containerInfo)}function dp(n,r,l,c,p){return Ms(),tc(p),r.flags|=256,vn(n,r,l,c),r.child}var bc={dehydrated:null,treeContext:null,retryLane:0};function Ac(n){return{baseLanes:n,cachePool:null,transitions:null}}function hp(n,r,l){var c=r.pendingProps,p=Ot.current,g=!1,E=(r.flags&128)!==0,I;if((I=E)||(I=n!==null&&n.memoizedState===null?!1:(p&2)!==0),I?(g=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(p|=1),bt(Ot,p&1),n===null)return ec(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(E=c.children,n=c.fallback,g?(c=r.mode,g=r.child,E={mode:"hidden",children:E},(c&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=E):g=_l(E,c,0,null),n=Vr(n,c,l,null),g.return=r,n.return=r,g.sibling=n,r.child=g,r.child.memoizedState=Ac(l),r.memoizedState=bc,n):Rc(r,E));if(p=n.memoizedState,p!==null&&(I=p.dehydrated,I!==null))return Xv(n,r,E,c,I,p,l);if(g){g=c.fallback,E=r.mode,p=n.child,I=p.sibling;var k={mode:"hidden",children:c.children};return(E&1)===0&&r.child!==p?(c=r.child,c.childLanes=0,c.pendingProps=k,r.deletions=null):(c=lr(p,k),c.subtreeFlags=p.subtreeFlags&14680064),I!==null?g=lr(I,g):(g=Vr(g,E,l,null),g.flags|=2),g.return=r,c.return=r,c.sibling=g,r.child=c,c=g,g=r.child,E=n.child.memoizedState,E=E===null?Ac(l):{baseLanes:E.baseLanes|l,cachePool:null,transitions:E.transitions},g.memoizedState=E,g.childLanes=n.childLanes&~l,r.memoizedState=bc,c}return g=n.child,n=g.sibling,c=lr(g,{mode:"visible",children:c.children}),(r.mode&1)===0&&(c.lanes=l),c.return=r,c.sibling=null,n!==null&&(l=r.deletions,l===null?(r.deletions=[n],r.flags|=16):l.push(n)),r.child=c,r.memoizedState=null,c}function Rc(n,r){return r=_l({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function rl(n,r,l,c){return c!==null&&tc(c),Ts(r,n.child,null,l),n=Rc(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function Xv(n,r,l,c,p,g,E){if(l)return r.flags&256?(r.flags&=-257,c=Ec(Error(t(422))),rl(n,r,E,c)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(g=c.fallback,p=r.mode,c=_l({mode:"visible",children:c.children},p,0,null),g=Vr(g,p,E,null),g.flags|=2,c.return=r,g.return=r,c.sibling=g,r.child=c,(r.mode&1)!==0&&Ts(r,n.child,null,E),r.child.memoizedState=Ac(E),r.memoizedState=bc,g);if((r.mode&1)===0)return rl(n,r,E,null);if(p.data==="$!"){if(c=p.nextSibling&&p.nextSibling.dataset,c)var I=c.dgst;return c=I,g=Error(t(419)),c=Ec(g,c,void 0),rl(n,r,E,c)}if(I=(E&n.childLanes)!==0,Mn||I){if(c=nn,c!==null){switch(E&-E){case 4:p=2;break;case 16:p=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:p=32;break;case 536870912:p=268435456;break;default:p=0}p=(p&(c.suspendedLanes|E))!==0?0:p,p!==0&&p!==g.retryLane&&(g.retryLane=p,Ri(n,p),ii(c,n,p,-1))}return Wc(),c=Ec(Error(t(421))),rl(n,r,E,c)}return p.data==="$?"?(r.flags|=128,r.child=n.child,r=o0.bind(null,n),p._reactRetry=r,null):(n=g.treeContext,On=Ji(p.nextSibling),Nn=r,Nt=!0,Qn=null,n!==null&&(Hn[Vn++]=bi,Hn[Vn++]=Ai,Hn[Vn++]=Dr,bi=n.id,Ai=n.overflow,Dr=r),r=Rc(r,c.children),r.flags|=4096,r)}function fp(n,r,l){n.lanes|=r;var c=n.alternate;c!==null&&(c.lanes|=r),sc(n.return,r,l)}function Cc(n,r,l,c,p){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:l,tailMode:p}:(g.isBackwards=r,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=l,g.tailMode=p)}function pp(n,r,l){var c=r.pendingProps,p=c.revealOrder,g=c.tail;if(vn(n,r,c.children,l),c=Ot.current,(c&2)!==0)c=c&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&fp(n,l,r);else if(n.tag===19)fp(n,l,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(bt(Ot,c),(r.mode&1)===0)r.memoizedState=null;else switch(p){case"forwards":for(l=r.child,p=null;l!==null;)n=l.alternate,n!==null&&Ja(n)===null&&(p=l),l=l.sibling;l=p,l===null?(p=r.child,r.child=null):(p=l.sibling,l.sibling=null),Cc(r,!1,p,l,g);break;case"backwards":for(l=null,p=r.child,r.child=null;p!==null;){if(n=p.alternate,n!==null&&Ja(n)===null){r.child=p;break}n=p.sibling,p.sibling=l,l=p,p=n}Cc(r,!0,l,null,g);break;case"together":Cc(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function sl(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function Pi(n,r,l){if(n!==null&&(r.dependencies=n.dependencies),Fr|=r.lanes,(l&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,l=lr(n,n.pendingProps),r.child=l,l.return=r;n.sibling!==null;)n=n.sibling,l=l.sibling=lr(n,n.pendingProps),l.return=r;l.sibling=null}return r.child}function qv(n,r,l){switch(r.tag){case 3:cp(r),Ms();break;case 5:Rf(r);break;case 1:wn(r.type)&&Ha(r);break;case 4:lc(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,p=r.memoizedProps.value;bt(Xa,c._currentValue),c._currentValue=p;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?(bt(Ot,Ot.current&1),r.flags|=128,null):(l&r.child.childLanes)!==0?hp(n,r,l):(bt(Ot,Ot.current&1),n=Pi(n,r,l),n!==null?n.sibling:null);bt(Ot,Ot.current&1);break;case 19:if(c=(l&r.childLanes)!==0,(n.flags&128)!==0){if(c)return pp(n,r,l);r.flags|=128}if(p=r.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),bt(Ot,Ot.current),c)break;return null;case 22:case 23:return r.lanes=0,ap(n,r,l)}return Pi(n,r,l)}var mp,Pc,gp,_p;mp=function(n,r){for(var l=r.child;l!==null;){if(l.tag===5||l.tag===6)n.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===r)break;for(;l.sibling===null;){if(l.return===null||l.return===r)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Pc=function(){},gp=function(n,r,l,c){var p=n.memoizedProps;if(p!==c){n=r.stateNode,Or(di.current);var g=null;switch(l){case"input":p=Xe(n,p),c=Xe(n,c),g=[];break;case"select":p=Y({},p,{value:void 0}),c=Y({},c,{value:void 0}),g=[];break;case"textarea":p=ce(n,p),c=ce(n,c),g=[];break;default:typeof p.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Fa)}Ct(l,c);var E;l=null;for(Z in p)if(!c.hasOwnProperty(Z)&&p.hasOwnProperty(Z)&&p[Z]!=null)if(Z==="style"){var I=p[Z];for(E in I)I.hasOwnProperty(E)&&(l||(l={}),l[E]="")}else Z!=="dangerouslySetInnerHTML"&&Z!=="children"&&Z!=="suppressContentEditableWarning"&&Z!=="suppressHydrationWarning"&&Z!=="autoFocus"&&(o.hasOwnProperty(Z)?g||(g=[]):(g=g||[]).push(Z,null));for(Z in c){var k=c[Z];if(I=p?.[Z],c.hasOwnProperty(Z)&&k!==I&&(k!=null||I!=null))if(Z==="style")if(I){for(E in I)!I.hasOwnProperty(E)||k&&k.hasOwnProperty(E)||(l||(l={}),l[E]="");for(E in k)k.hasOwnProperty(E)&&I[E]!==k[E]&&(l||(l={}),l[E]=k[E])}else l||(g||(g=[]),g.push(Z,l)),l=k;else Z==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,I=I?I.__html:void 0,k!=null&&I!==k&&(g=g||[]).push(Z,k)):Z==="children"?typeof k!="string"&&typeof k!="number"||(g=g||[]).push(Z,""+k):Z!=="suppressContentEditableWarning"&&Z!=="suppressHydrationWarning"&&(o.hasOwnProperty(Z)?(k!=null&&Z==="onScroll"&&Lt("scroll",n),g||I===k||(g=[])):(g=g||[]).push(Z,k))}l&&(g=g||[]).push("style",l);var Z=g;(r.updateQueue=Z)&&(r.flags|=4)}},_p=function(n,r,l,c){l!==c&&(r.flags|=4)};function Ko(n,r){if(!Nt)switch(n.tailMode){case"hidden":r=n.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?n.tail=null:l.sibling=null;break;case"collapsed":l=n.tail;for(var c=null;l!==null;)l.alternate!==null&&(c=l),l=l.sibling;c===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function pn(n){var r=n.alternate!==null&&n.alternate.child===n.child,l=0,c=0;if(r)for(var p=n.child;p!==null;)l|=p.lanes|p.childLanes,c|=p.subtreeFlags&14680064,c|=p.flags&14680064,p.return=n,p=p.sibling;else for(p=n.child;p!==null;)l|=p.lanes|p.childLanes,c|=p.subtreeFlags,c|=p.flags,p.return=n,p=p.sibling;return n.subtreeFlags|=c,n.childLanes=l,r}function Yv(n,r,l){var c=r.pendingProps;switch(Zu(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pn(r),null;case 1:return wn(r.type)&&za(),pn(r),null;case 3:return c=r.stateNode,Rs(),It(En),It(hn),dc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(ja(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Qn!==null&&(Hc(Qn),Qn=null))),Pc(n,r),pn(r),null;case 5:uc(r);var p=Or(jo.current);if(l=r.type,n!==null&&r.stateNode!=null)gp(n,r,l,c,p),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(t(166));return pn(r),null}if(n=Or(di.current),ja(r)){c=r.stateNode,l=r.type;var g=r.memoizedProps;switch(c[ci]=r,c[zo]=g,n=(r.mode&1)!==0,l){case"dialog":Lt("cancel",c),Lt("close",c);break;case"iframe":case"object":case"embed":Lt("load",c);break;case"video":case"audio":for(p=0;p<ko.length;p++)Lt(ko[p],c);break;case"source":Lt("error",c);break;case"img":case"image":case"link":Lt("error",c),Lt("load",c);break;case"details":Lt("toggle",c);break;case"input":dt(c,g),Lt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},Lt("invalid",c);break;case"textarea":_e(c,g),Lt("invalid",c)}Ct(l,g),p=null;for(var E in g)if(g.hasOwnProperty(E)){var I=g[E];E==="children"?typeof I=="string"?c.textContent!==I&&(g.suppressHydrationWarning!==!0&&ka(c.textContent,I,n),p=["children",I]):typeof I=="number"&&c.textContent!==""+I&&(g.suppressHydrationWarning!==!0&&ka(c.textContent,I,n),p=["children",""+I]):o.hasOwnProperty(E)&&I!=null&&E==="onScroll"&&Lt("scroll",c)}switch(l){case"input":yt(c),Rt(c,g,!0);break;case"textarea":yt(c),Ge(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=Fa)}c=p,r.updateQueue=c,c!==null&&(r.flags|=4)}else{E=p.nodeType===9?p:p.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Ae(l)),n==="http://www.w3.org/1999/xhtml"?l==="script"?(n=E.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=E.createElement(l,{is:c.is}):(n=E.createElement(l),l==="select"&&(E=n,c.multiple?E.multiple=!0:c.size&&(E.size=c.size))):n=E.createElementNS(n,l),n[ci]=r,n[zo]=c,mp(n,r,!1,!1),r.stateNode=n;e:{switch(E=et(l,c),l){case"dialog":Lt("cancel",n),Lt("close",n),p=c;break;case"iframe":case"object":case"embed":Lt("load",n),p=c;break;case"video":case"audio":for(p=0;p<ko.length;p++)Lt(ko[p],n);p=c;break;case"source":Lt("error",n),p=c;break;case"img":case"image":case"link":Lt("error",n),Lt("load",n),p=c;break;case"details":Lt("toggle",n),p=c;break;case"input":dt(n,c),p=Xe(n,c),Lt("invalid",n);break;case"option":p=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},p=Y({},c,{value:void 0}),Lt("invalid",n);break;case"textarea":_e(n,c),p=ce(n,c),Lt("invalid",n);break;default:p=c}Ct(l,p),I=p;for(g in I)if(I.hasOwnProperty(g)){var k=I[g];g==="style"?nt(n,k):g==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&Ee(n,k)):g==="children"?typeof k=="string"?(l!=="textarea"||k!=="")&&He(n,k):typeof k=="number"&&He(n,""+k):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?k!=null&&g==="onScroll"&&Lt("scroll",n):k!=null&&T(n,g,k,E))}switch(l){case"input":yt(n),Rt(n,c,!1);break;case"textarea":yt(n),Ge(n);break;case"option":c.value!=null&&n.setAttribute("value",""+De(c.value));break;case"select":n.multiple=!!c.multiple,g=c.value,g!=null?ie(n,!!c.multiple,g,!1):c.defaultValue!=null&&ie(n,!!c.multiple,c.defaultValue,!0);break;default:typeof p.onClick=="function"&&(n.onclick=Fa)}switch(l){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return pn(r),null;case 6:if(n&&r.stateNode!=null)_p(n,r,n.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(t(166));if(l=Or(jo.current),Or(di.current),ja(r)){if(c=r.stateNode,l=r.memoizedProps,c[ci]=r,(g=c.nodeValue!==l)&&(n=Nn,n!==null))switch(n.tag){case 3:ka(c.nodeValue,l,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&ka(c.nodeValue,l,(n.mode&1)!==0)}g&&(r.flags|=4)}else c=(l.nodeType===9?l:l.ownerDocument).createTextNode(c),c[ci]=r,r.stateNode=c}return pn(r),null;case 13:if(It(Ot),c=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Nt&&On!==null&&(r.mode&1)!==0&&(r.flags&128)===0)xf(),Ms(),r.flags|=98560,g=!1;else if(g=ja(r),c!==null&&c.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=r.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[ci]=r}else Ms(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;pn(r),g=!1}else Qn!==null&&(Hc(Qn),Qn=null),g=!0;if(!g)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=l,r):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(Ot.current&1)!==0?qt===0&&(qt=3):Wc())),r.updateQueue!==null&&(r.flags|=4),pn(r),null);case 4:return Rs(),Pc(n,r),n===null&&Fo(r.stateNode.containerInfo),pn(r),null;case 10:return rc(r.type._context),pn(r),null;case 17:return wn(r.type)&&za(),pn(r),null;case 19:if(It(Ot),g=r.memoizedState,g===null)return pn(r),null;if(c=(r.flags&128)!==0,E=g.rendering,E===null)if(c)Ko(g,!1);else{if(qt!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(E=Ja(n),E!==null){for(r.flags|=128,Ko(g,!1),c=E.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=l,l=r.child;l!==null;)g=l,n=c,g.flags&=14680066,E=g.alternate,E===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=E.childLanes,g.lanes=E.lanes,g.child=E.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=E.memoizedProps,g.memoizedState=E.memoizedState,g.updateQueue=E.updateQueue,g.type=E.type,n=E.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),l=l.sibling;return bt(Ot,Ot.current&1|2),r.child}n=n.sibling}g.tail!==null&&Ne()>Is&&(r.flags|=128,c=!0,Ko(g,!1),r.lanes=4194304)}else{if(!c)if(n=Ja(E),n!==null){if(r.flags|=128,c=!0,l=n.updateQueue,l!==null&&(r.updateQueue=l,r.flags|=4),Ko(g,!0),g.tail===null&&g.tailMode==="hidden"&&!E.alternate&&!Nt)return pn(r),null}else 2*Ne()-g.renderingStartTime>Is&&l!==1073741824&&(r.flags|=128,c=!0,Ko(g,!1),r.lanes=4194304);g.isBackwards?(E.sibling=r.child,r.child=E):(l=g.last,l!==null?l.sibling=E:r.child=E,g.last=E)}return g.tail!==null?(r=g.tail,g.rendering=r,g.tail=r.sibling,g.renderingStartTime=Ne(),r.sibling=null,l=Ot.current,bt(Ot,c?l&1|2:l&1),r):(pn(r),null);case 22:case 23:return Gc(),c=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(r.flags|=8192),c&&(r.mode&1)!==0?(kn&1073741824)!==0&&(pn(r),r.subtreeFlags&6&&(r.flags|=8192)):pn(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function Kv(n,r){switch(Zu(r),r.tag){case 1:return wn(r.type)&&za(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Rs(),It(En),It(hn),dc(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return uc(r),null;case 13:if(It(Ot),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Ms()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return It(Ot),null;case 4:return Rs(),null;case 10:return rc(r.type._context),null;case 22:case 23:return Gc(),null;case 24:return null;default:return null}}var ol=!1,mn=!1,Jv=typeof WeakSet=="function"?WeakSet:Set,Ie=null;function Ps(n,r){var l=n.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(c){Ft(n,r,c)}else l.current=null}function Lc(n,r,l){try{l()}catch(c){Ft(n,r,c)}}var vp=!1;function Zv(n,r){if(Gu=ba,n=Yh(),Nu(n)){if("selectionStart"in n)var l={start:n.selectionStart,end:n.selectionEnd};else e:{l=(l=n.ownerDocument)&&l.defaultView||window;var c=l.getSelection&&l.getSelection();if(c&&c.rangeCount!==0){l=c.anchorNode;var p=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{l.nodeType,g.nodeType}catch{l=null;break e}var E=0,I=-1,k=-1,Z=0,pe=0,ve=n,fe=null;t:for(;;){for(var Ce;ve!==l||p!==0&&ve.nodeType!==3||(I=E+p),ve!==g||c!==0&&ve.nodeType!==3||(k=E+c),ve.nodeType===3&&(E+=ve.nodeValue.length),(Ce=ve.firstChild)!==null;)fe=ve,ve=Ce;for(;;){if(ve===n)break t;if(fe===l&&++Z===p&&(I=E),fe===g&&++pe===c&&(k=E),(Ce=ve.nextSibling)!==null)break;ve=fe,fe=ve.parentNode}ve=Ce}l=I===-1||k===-1?null:{start:I,end:k}}else l=null}l=l||{start:0,end:0}}else l=null;for(Wu={focusedElem:n,selectionRange:l},ba=!1,Ie=r;Ie!==null;)if(r=Ie,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,Ie=n;else for(;Ie!==null;){r=Ie;try{var Ue=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(Ue!==null){var Oe=Ue.memoizedProps,zt=Ue.memoizedState,j=r.stateNode,B=j.getSnapshotBeforeUpdate(r.elementType===r.type?Oe:ei(r.type,Oe),zt);j.__reactInternalSnapshotBeforeUpdate=B}break;case 3:var X=r.stateNode.containerInfo;X.nodeType===1?X.textContent="":X.nodeType===9&&X.documentElement&&X.removeChild(X.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Se){Ft(r,r.return,Se)}if(n=r.sibling,n!==null){n.return=r.return,Ie=n;break}Ie=r.return}return Ue=vp,vp=!1,Ue}function Jo(n,r,l){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var p=c=c.next;do{if((p.tag&n)===n){var g=p.destroy;p.destroy=void 0,g!==void 0&&Lc(r,l,g)}p=p.next}while(p!==c)}}function al(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&n)===n){var c=l.create;l.destroy=c()}l=l.next}while(l!==r)}}function Ic(n){var r=n.ref;if(r!==null){var l=n.stateNode;switch(n.tag){case 5:n=l;break;default:n=l}typeof r=="function"?r(n):r.current=n}}function yp(n){var r=n.alternate;r!==null&&(n.alternate=null,yp(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[ci],delete r[zo],delete r[qu],delete r[Uv],delete r[Nv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function xp(n){return n.tag===5||n.tag===3||n.tag===4}function Sp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||xp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Dc(n,r,l){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?l.nodeType===8?l.parentNode.insertBefore(n,r):l.insertBefore(n,r):(l.nodeType===8?(r=l.parentNode,r.insertBefore(n,l)):(r=l,r.appendChild(n)),l=l._reactRootContainer,l!=null||r.onclick!==null||(r.onclick=Fa));else if(c!==4&&(n=n.child,n!==null))for(Dc(n,r,l),n=n.sibling;n!==null;)Dc(n,r,l),n=n.sibling}function Uc(n,r,l){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?l.insertBefore(n,r):l.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Uc(n,r,l),n=n.sibling;n!==null;)Uc(n,r,l),n=n.sibling}var ln=null,ti=!1;function ir(n,r,l){for(l=l.child;l!==null;)Ep(n,r,l),l=l.sibling}function Ep(n,r,l){if(dn&&typeof dn.onCommitFiberUnmount=="function")try{dn.onCommitFiberUnmount(Ke,l)}catch{}switch(l.tag){case 5:mn||Ps(l,r);case 6:var c=ln,p=ti;ln=null,ir(n,r,l),ln=c,ti=p,ln!==null&&(ti?(n=ln,l=l.stateNode,n.nodeType===8?n.parentNode.removeChild(l):n.removeChild(l)):ln.removeChild(l.stateNode));break;case 18:ln!==null&&(ti?(n=ln,l=l.stateNode,n.nodeType===8?Xu(n.parentNode,l):n.nodeType===1&&Xu(n,l),Co(n)):Xu(ln,l.stateNode));break;case 4:c=ln,p=ti,ln=l.stateNode.containerInfo,ti=!0,ir(n,r,l),ln=c,ti=p;break;case 0:case 11:case 14:case 15:if(!mn&&(c=l.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){p=c=c.next;do{var g=p,E=g.destroy;g=g.tag,E!==void 0&&((g&2)!==0||(g&4)!==0)&&Lc(l,r,E),p=p.next}while(p!==c)}ir(n,r,l);break;case 1:if(!mn&&(Ps(l,r),c=l.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=l.memoizedProps,c.state=l.memoizedState,c.componentWillUnmount()}catch(I){Ft(l,r,I)}ir(n,r,l);break;case 21:ir(n,r,l);break;case 22:l.mode&1?(mn=(c=mn)||l.memoizedState!==null,ir(n,r,l),mn=c):ir(n,r,l);break;default:ir(n,r,l)}}function wp(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var l=n.stateNode;l===null&&(l=n.stateNode=new Jv),r.forEach(function(c){var p=a0.bind(null,n,c);l.has(c)||(l.add(c),c.then(p,p))})}}function ni(n,r){var l=r.deletions;if(l!==null)for(var c=0;c<l.length;c++){var p=l[c];try{var g=n,E=r,I=E;e:for(;I!==null;){switch(I.tag){case 5:ln=I.stateNode,ti=!1;break e;case 3:ln=I.stateNode.containerInfo,ti=!0;break e;case 4:ln=I.stateNode.containerInfo,ti=!0;break e}I=I.return}if(ln===null)throw Error(t(160));Ep(g,E,p),ln=null,ti=!1;var k=p.alternate;k!==null&&(k.return=null),p.return=null}catch(Z){Ft(p,r,Z)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Mp(r,n),r=r.sibling}function Mp(n,r){var l=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ni(r,n),fi(n),c&4){try{Jo(3,n,n.return),al(3,n)}catch(Oe){Ft(n,n.return,Oe)}try{Jo(5,n,n.return)}catch(Oe){Ft(n,n.return,Oe)}}break;case 1:ni(r,n),fi(n),c&512&&l!==null&&Ps(l,l.return);break;case 5:if(ni(r,n),fi(n),c&512&&l!==null&&Ps(l,l.return),n.flags&32){var p=n.stateNode;try{He(p,"")}catch(Oe){Ft(n,n.return,Oe)}}if(c&4&&(p=n.stateNode,p!=null)){var g=n.memoizedProps,E=l!==null?l.memoizedProps:g,I=n.type,k=n.updateQueue;if(n.updateQueue=null,k!==null)try{I==="input"&&g.type==="radio"&&g.name!=null&&it(p,g),et(I,E);var Z=et(I,g);for(E=0;E<k.length;E+=2){var pe=k[E],ve=k[E+1];pe==="style"?nt(p,ve):pe==="dangerouslySetInnerHTML"?Ee(p,ve):pe==="children"?He(p,ve):T(p,pe,ve,Z)}switch(I){case"input":lt(p,g);break;case"textarea":ye(p,g);break;case"select":var fe=p._wrapperState.wasMultiple;p._wrapperState.wasMultiple=!!g.multiple;var Ce=g.value;Ce!=null?ie(p,!!g.multiple,Ce,!1):fe!==!!g.multiple&&(g.defaultValue!=null?ie(p,!!g.multiple,g.defaultValue,!0):ie(p,!!g.multiple,g.multiple?[]:"",!1))}p[zo]=g}catch(Oe){Ft(n,n.return,Oe)}}break;case 6:if(ni(r,n),fi(n),c&4){if(n.stateNode===null)throw Error(t(162));p=n.stateNode,g=n.memoizedProps;try{p.nodeValue=g}catch(Oe){Ft(n,n.return,Oe)}}break;case 3:if(ni(r,n),fi(n),c&4&&l!==null&&l.memoizedState.isDehydrated)try{Co(r.containerInfo)}catch(Oe){Ft(n,n.return,Oe)}break;case 4:ni(r,n),fi(n);break;case 13:ni(r,n),fi(n),p=n.child,p.flags&8192&&(g=p.memoizedState!==null,p.stateNode.isHidden=g,!g||p.alternate!==null&&p.alternate.memoizedState!==null||(kc=Ne())),c&4&&wp(n);break;case 22:if(pe=l!==null&&l.memoizedState!==null,n.mode&1?(mn=(Z=mn)||pe,ni(r,n),mn=Z):ni(r,n),fi(n),c&8192){if(Z=n.memoizedState!==null,(n.stateNode.isHidden=Z)&&!pe&&(n.mode&1)!==0)for(Ie=n,pe=n.child;pe!==null;){for(ve=Ie=pe;Ie!==null;){switch(fe=Ie,Ce=fe.child,fe.tag){case 0:case 11:case 14:case 15:Jo(4,fe,fe.return);break;case 1:Ps(fe,fe.return);var Ue=fe.stateNode;if(typeof Ue.componentWillUnmount=="function"){c=fe,l=fe.return;try{r=c,Ue.props=r.memoizedProps,Ue.state=r.memoizedState,Ue.componentWillUnmount()}catch(Oe){Ft(c,l,Oe)}}break;case 5:Ps(fe,fe.return);break;case 22:if(fe.memoizedState!==null){Ap(ve);continue}}Ce!==null?(Ce.return=fe,Ie=Ce):Ap(ve)}pe=pe.sibling}e:for(pe=null,ve=n;;){if(ve.tag===5){if(pe===null){pe=ve;try{p=ve.stateNode,Z?(g=p.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(I=ve.stateNode,k=ve.memoizedProps.style,E=k!=null&&k.hasOwnProperty("display")?k.display:null,I.style.display=Le("display",E))}catch(Oe){Ft(n,n.return,Oe)}}}else if(ve.tag===6){if(pe===null)try{ve.stateNode.nodeValue=Z?"":ve.memoizedProps}catch(Oe){Ft(n,n.return,Oe)}}else if((ve.tag!==22&&ve.tag!==23||ve.memoizedState===null||ve===n)&&ve.child!==null){ve.child.return=ve,ve=ve.child;continue}if(ve===n)break e;for(;ve.sibling===null;){if(ve.return===null||ve.return===n)break e;pe===ve&&(pe=null),ve=ve.return}pe===ve&&(pe=null),ve.sibling.return=ve.return,ve=ve.sibling}}break;case 19:ni(r,n),fi(n),c&4&&wp(n);break;case 21:break;default:ni(r,n),fi(n)}}function fi(n){var r=n.flags;if(r&2){try{e:{for(var l=n.return;l!==null;){if(xp(l)){var c=l;break e}l=l.return}throw Error(t(160))}switch(c.tag){case 5:var p=c.stateNode;c.flags&32&&(He(p,""),c.flags&=-33);var g=Sp(n);Uc(n,g,p);break;case 3:case 4:var E=c.stateNode.containerInfo,I=Sp(n);Dc(n,I,E);break;default:throw Error(t(161))}}catch(k){Ft(n,n.return,k)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function Qv(n,r,l){Ie=n,Tp(n)}function Tp(n,r,l){for(var c=(n.mode&1)!==0;Ie!==null;){var p=Ie,g=p.child;if(p.tag===22&&c){var E=p.memoizedState!==null||ol;if(!E){var I=p.alternate,k=I!==null&&I.memoizedState!==null||mn;I=ol;var Z=mn;if(ol=E,(mn=k)&&!Z)for(Ie=p;Ie!==null;)E=Ie,k=E.child,E.tag===22&&E.memoizedState!==null?Rp(p):k!==null?(k.return=E,Ie=k):Rp(p);for(;g!==null;)Ie=g,Tp(g),g=g.sibling;Ie=p,ol=I,mn=Z}bp(n)}else(p.subtreeFlags&8772)!==0&&g!==null?(g.return=p,Ie=g):bp(n)}}function bp(n){for(;Ie!==null;){var r=Ie;if((r.flags&8772)!==0){var l=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:mn||al(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!mn)if(l===null)c.componentDidMount();else{var p=r.elementType===r.type?l.memoizedProps:ei(r.type,l.memoizedProps);c.componentDidUpdate(p,l.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=r.updateQueue;g!==null&&Af(r,g,c);break;case 3:var E=r.updateQueue;if(E!==null){if(l=null,r.child!==null)switch(r.child.tag){case 5:l=r.child.stateNode;break;case 1:l=r.child.stateNode}Af(r,E,l)}break;case 5:var I=r.stateNode;if(l===null&&r.flags&4){l=I;var k=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&l.focus();break;case"img":k.src&&(l.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var Z=r.alternate;if(Z!==null){var pe=Z.memoizedState;if(pe!==null){var ve=pe.dehydrated;ve!==null&&Co(ve)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}mn||r.flags&512&&Ic(r)}catch(fe){Ft(r,r.return,fe)}}if(r===n){Ie=null;break}if(l=r.sibling,l!==null){l.return=r.return,Ie=l;break}Ie=r.return}}function Ap(n){for(;Ie!==null;){var r=Ie;if(r===n){Ie=null;break}var l=r.sibling;if(l!==null){l.return=r.return,Ie=l;break}Ie=r.return}}function Rp(n){for(;Ie!==null;){var r=Ie;try{switch(r.tag){case 0:case 11:case 15:var l=r.return;try{al(4,r)}catch(k){Ft(r,l,k)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var p=r.return;try{c.componentDidMount()}catch(k){Ft(r,p,k)}}var g=r.return;try{Ic(r)}catch(k){Ft(r,g,k)}break;case 5:var E=r.return;try{Ic(r)}catch(k){Ft(r,E,k)}}}catch(k){Ft(r,r.return,k)}if(r===n){Ie=null;break}var I=r.sibling;if(I!==null){I.return=r.return,Ie=I;break}Ie=r.return}}var e0=Math.ceil,ll=L.ReactCurrentDispatcher,Nc=L.ReactCurrentOwner,jn=L.ReactCurrentBatchConfig,mt=0,nn=null,Ht=null,un=0,kn=0,Ls=Zi(0),qt=0,Zo=null,Fr=0,ul=0,Oc=0,Qo=null,Tn=null,kc=0,Is=1/0,Li=null,cl=!1,Fc=null,rr=null,dl=!1,sr=null,hl=0,ea=0,Bc=null,fl=-1,pl=0;function yn(){return(mt&6)!==0?Ne():fl!==-1?fl:fl=Ne()}function or(n){return(n.mode&1)===0?1:(mt&2)!==0&&un!==0?un&-un:kv.transition!==null?(pl===0&&(pl=xh()),pl):(n=St,n!==0||(n=window.event,n=n===void 0?16:Ch(n.type)),n)}function ii(n,r,l,c){if(50<ea)throw ea=0,Bc=null,Error(t(185));Mo(n,l,c),((mt&2)===0||n!==nn)&&(n===nn&&((mt&2)===0&&(ul|=l),qt===4&&ar(n,un)),bn(n,c),l===1&&mt===0&&(r.mode&1)===0&&(Is=Ne()+500,Va&&er()))}function bn(n,r){var l=n.callbackNode;yu(n,r);var c=an(n,n===nn?un:0);if(c===0)l!==null&&ze(l),n.callbackNode=null,n.callbackPriority=0;else if(r=c&-c,n.callbackPriority!==r){if(l!=null&&ze(l),r===1)n.tag===0?Ov(Pp.bind(null,n)):mf(Pp.bind(null,n)),Iv(function(){(mt&6)===0&&er()}),l=null;else{switch(Sh(c)){case 1:l=Ut;break;case 4:l=jt;break;case 16:l=en;break;case 536870912:l=pt;break;default:l=en}l=Fp(l,Cp.bind(null,n))}n.callbackPriority=r,n.callbackNode=l}}function Cp(n,r){if(fl=-1,pl=0,(mt&6)!==0)throw Error(t(327));var l=n.callbackNode;if(Ds()&&n.callbackNode!==l)return null;var c=an(n,n===nn?un:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||r)r=ml(n,c);else{r=c;var p=mt;mt|=2;var g=Ip();(nn!==n||un!==r)&&(Li=null,Is=Ne()+500,zr(n,r));do try{i0();break}catch(I){Lp(n,I)}while(!0);ic(),ll.current=g,mt=p,Ht!==null?r=0:(nn=null,un=0,r=qt)}if(r!==0){if(r===2&&(p=ds(n),p!==0&&(c=p,r=zc(n,p))),r===1)throw l=Zo,zr(n,0),ar(n,c),bn(n,Ne()),l;if(r===6)ar(n,c);else{if(p=n.current.alternate,(c&30)===0&&!t0(p)&&(r=ml(n,c),r===2&&(g=ds(n),g!==0&&(c=g,r=zc(n,g))),r===1))throw l=Zo,zr(n,0),ar(n,c),bn(n,Ne()),l;switch(n.finishedWork=p,n.finishedLanes=c,r){case 0:case 1:throw Error(t(345));case 2:Hr(n,Tn,Li);break;case 3:if(ar(n,c),(c&130023424)===c&&(r=kc+500-Ne(),10<r)){if(an(n,0)!==0)break;if(p=n.suspendedLanes,(p&c)!==c){yn(),n.pingedLanes|=n.suspendedLanes&p;break}n.timeoutHandle=$u(Hr.bind(null,n,Tn,Li),r);break}Hr(n,Tn,Li);break;case 4:if(ar(n,c),(c&4194240)===c)break;for(r=n.eventTimes,p=-1;0<c;){var E=31-$t(c);g=1<<E,E=r[E],E>p&&(p=E),c&=~g}if(c=p,c=Ne()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*e0(c/1960))-c,10<c){n.timeoutHandle=$u(Hr.bind(null,n,Tn,Li),c);break}Hr(n,Tn,Li);break;case 5:Hr(n,Tn,Li);break;default:throw Error(t(329))}}}return bn(n,Ne()),n.callbackNode===l?Cp.bind(null,n):null}function zc(n,r){var l=Qo;return n.current.memoizedState.isDehydrated&&(zr(n,r).flags|=256),n=ml(n,r),n!==2&&(r=Tn,Tn=l,r!==null&&Hc(r)),n}function Hc(n){Tn===null?Tn=n:Tn.push.apply(Tn,n)}function t0(n){for(var r=n;;){if(r.flags&16384){var l=r.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var c=0;c<l.length;c++){var p=l[c],g=p.getSnapshot;p=p.value;try{if(!Zn(g(),p))return!1}catch{return!1}}}if(l=r.child,r.subtreeFlags&16384&&l!==null)l.return=r,r=l;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function ar(n,r){for(r&=~Oc,r&=~ul,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var l=31-$t(r),c=1<<l;n[l]=-1,r&=~c}}function Pp(n){if((mt&6)!==0)throw Error(t(327));Ds();var r=an(n,0);if((r&1)===0)return bn(n,Ne()),null;var l=ml(n,r);if(n.tag!==0&&l===2){var c=ds(n);c!==0&&(r=c,l=zc(n,c))}if(l===1)throw l=Zo,zr(n,0),ar(n,r),bn(n,Ne()),l;if(l===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,Hr(n,Tn,Li),bn(n,Ne()),null}function Vc(n,r){var l=mt;mt|=1;try{return n(r)}finally{mt=l,mt===0&&(Is=Ne()+500,Va&&er())}}function Br(n){sr!==null&&sr.tag===0&&(mt&6)===0&&Ds();var r=mt;mt|=1;var l=jn.transition,c=St;try{if(jn.transition=null,St=1,n)return n()}finally{St=c,jn.transition=l,mt=r,(mt&6)===0&&er()}}function Gc(){kn=Ls.current,It(Ls)}function zr(n,r){n.finishedWork=null,n.finishedLanes=0;var l=n.timeoutHandle;if(l!==-1&&(n.timeoutHandle=-1,Lv(l)),Ht!==null)for(l=Ht.return;l!==null;){var c=l;switch(Zu(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&za();break;case 3:Rs(),It(En),It(hn),dc();break;case 5:uc(c);break;case 4:Rs();break;case 13:It(Ot);break;case 19:It(Ot);break;case 10:rc(c.type._context);break;case 22:case 23:Gc()}l=l.return}if(nn=n,Ht=n=lr(n.current,null),un=kn=r,qt=0,Zo=null,Oc=ul=Fr=0,Tn=Qo=null,Nr!==null){for(r=0;r<Nr.length;r++)if(l=Nr[r],c=l.interleaved,c!==null){l.interleaved=null;var p=c.next,g=l.pending;if(g!==null){var E=g.next;g.next=p,c.next=E}l.pending=c}Nr=null}return n}function Lp(n,r){do{var l=Ht;try{if(ic(),Za.current=nl,Qa){for(var c=kt.memoizedState;c!==null;){var p=c.queue;p!==null&&(p.pending=null),c=c.next}Qa=!1}if(kr=0,tn=Xt=kt=null,$o=!1,Xo=0,Nc.current=null,l===null||l.return===null){qt=1,Zo=r,Ht=null;break}e:{var g=n,E=l.return,I=l,k=r;if(r=un,I.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var Z=k,pe=I,ve=pe.tag;if((pe.mode&1)===0&&(ve===0||ve===11||ve===15)){var fe=pe.alternate;fe?(pe.updateQueue=fe.updateQueue,pe.memoizedState=fe.memoizedState,pe.lanes=fe.lanes):(pe.updateQueue=null,pe.memoizedState=null)}var Ce=np(E);if(Ce!==null){Ce.flags&=-257,ip(Ce,E,I,g,r),Ce.mode&1&&tp(g,Z,r),r=Ce,k=Z;var Ue=r.updateQueue;if(Ue===null){var Oe=new Set;Oe.add(k),r.updateQueue=Oe}else Ue.add(k);break e}else{if((r&1)===0){tp(g,Z,r),Wc();break e}k=Error(t(426))}}else if(Nt&&I.mode&1){var zt=np(E);if(zt!==null){(zt.flags&65536)===0&&(zt.flags|=256),ip(zt,E,I,g,r),tc(Cs(k,I));break e}}g=k=Cs(k,I),qt!==4&&(qt=2),Qo===null?Qo=[g]:Qo.push(g),g=E;do{switch(g.tag){case 3:g.flags|=65536,r&=-r,g.lanes|=r;var j=Qf(g,k,r);bf(g,j);break e;case 1:I=k;var B=g.type,X=g.stateNode;if((g.flags&128)===0&&(typeof B.getDerivedStateFromError=="function"||X!==null&&typeof X.componentDidCatch=="function"&&(rr===null||!rr.has(X)))){g.flags|=65536,r&=-r,g.lanes|=r;var Se=ep(g,I,r);bf(g,Se);break e}}g=g.return}while(g!==null)}Up(l)}catch(Be){r=Be,Ht===l&&l!==null&&(Ht=l=l.return);continue}break}while(!0)}function Ip(){var n=ll.current;return ll.current=nl,n===null?nl:n}function Wc(){(qt===0||qt===3||qt===2)&&(qt=4),nn===null||(Fr&268435455)===0&&(ul&268435455)===0||ar(nn,un)}function ml(n,r){var l=mt;mt|=2;var c=Ip();(nn!==n||un!==r)&&(Li=null,zr(n,r));do try{n0();break}catch(p){Lp(n,p)}while(!0);if(ic(),mt=l,ll.current=c,Ht!==null)throw Error(t(261));return nn=null,un=0,qt}function n0(){for(;Ht!==null;)Dp(Ht)}function i0(){for(;Ht!==null&&!Ye();)Dp(Ht)}function Dp(n){var r=kp(n.alternate,n,kn);n.memoizedProps=n.pendingProps,r===null?Up(n):Ht=r,Nc.current=null}function Up(n){var r=n;do{var l=r.alternate;if(n=r.return,(r.flags&32768)===0){if(l=Yv(l,r,kn),l!==null){Ht=l;return}}else{if(l=Kv(l,r),l!==null){l.flags&=32767,Ht=l;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{qt=6,Ht=null;return}}if(r=r.sibling,r!==null){Ht=r;return}Ht=r=n}while(r!==null);qt===0&&(qt=5)}function Hr(n,r,l){var c=St,p=jn.transition;try{jn.transition=null,St=1,r0(n,r,l,c)}finally{jn.transition=p,St=c}return null}function r0(n,r,l,c){do Ds();while(sr!==null);if((mt&6)!==0)throw Error(t(327));l=n.finishedWork;var p=n.finishedLanes;if(l===null)return null;if(n.finishedWork=null,n.finishedLanes=0,l===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=l.lanes|l.childLanes;if(F_(n,g),n===nn&&(Ht=nn=null,un=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||dl||(dl=!0,Fp(en,function(){return Ds(),null})),g=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||g){g=jn.transition,jn.transition=null;var E=St;St=1;var I=mt;mt|=4,Nc.current=null,Zv(n,l),Mp(l,n),Mv(Wu),ba=!!Gu,Wu=Gu=null,n.current=l,Qv(l),Qe(),mt=I,St=E,jn.transition=g}else n.current=l;if(dl&&(dl=!1,sr=n,hl=p),g=n.pendingLanes,g===0&&(rr=null),Tt(l.stateNode),bn(n,Ne()),r!==null)for(c=n.onRecoverableError,l=0;l<r.length;l++)p=r[l],c(p.value,{componentStack:p.stack,digest:p.digest});if(cl)throw cl=!1,n=Fc,Fc=null,n;return(hl&1)!==0&&n.tag!==0&&Ds(),g=n.pendingLanes,(g&1)!==0?n===Bc?ea++:(ea=0,Bc=n):ea=0,er(),null}function Ds(){if(sr!==null){var n=Sh(hl),r=jn.transition,l=St;try{if(jn.transition=null,St=16>n?16:n,sr===null)var c=!1;else{if(n=sr,sr=null,hl=0,(mt&6)!==0)throw Error(t(331));var p=mt;for(mt|=4,Ie=n.current;Ie!==null;){var g=Ie,E=g.child;if((Ie.flags&16)!==0){var I=g.deletions;if(I!==null){for(var k=0;k<I.length;k++){var Z=I[k];for(Ie=Z;Ie!==null;){var pe=Ie;switch(pe.tag){case 0:case 11:case 15:Jo(8,pe,g)}var ve=pe.child;if(ve!==null)ve.return=pe,Ie=ve;else for(;Ie!==null;){pe=Ie;var fe=pe.sibling,Ce=pe.return;if(yp(pe),pe===Z){Ie=null;break}if(fe!==null){fe.return=Ce,Ie=fe;break}Ie=Ce}}}var Ue=g.alternate;if(Ue!==null){var Oe=Ue.child;if(Oe!==null){Ue.child=null;do{var zt=Oe.sibling;Oe.sibling=null,Oe=zt}while(Oe!==null)}}Ie=g}}if((g.subtreeFlags&2064)!==0&&E!==null)E.return=g,Ie=E;else e:for(;Ie!==null;){if(g=Ie,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:Jo(9,g,g.return)}var j=g.sibling;if(j!==null){j.return=g.return,Ie=j;break e}Ie=g.return}}var B=n.current;for(Ie=B;Ie!==null;){E=Ie;var X=E.child;if((E.subtreeFlags&2064)!==0&&X!==null)X.return=E,Ie=X;else e:for(E=B;Ie!==null;){if(I=Ie,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:al(9,I)}}catch(Be){Ft(I,I.return,Be)}if(I===E){Ie=null;break e}var Se=I.sibling;if(Se!==null){Se.return=I.return,Ie=Se;break e}Ie=I.return}}if(mt=p,er(),dn&&typeof dn.onPostCommitFiberRoot=="function")try{dn.onPostCommitFiberRoot(Ke,n)}catch{}c=!0}return c}finally{St=l,jn.transition=r}}return!1}function Np(n,r,l){r=Cs(l,r),r=Qf(n,r,1),n=nr(n,r,1),r=yn(),n!==null&&(Mo(n,1,r),bn(n,r))}function Ft(n,r,l){if(n.tag===3)Np(n,n,l);else for(;r!==null;){if(r.tag===3){Np(r,n,l);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(rr===null||!rr.has(c))){n=Cs(l,n),n=ep(r,n,1),r=nr(r,n,1),n=yn(),r!==null&&(Mo(r,1,n),bn(r,n));break}}r=r.return}}function s0(n,r,l){var c=n.pingCache;c!==null&&c.delete(r),r=yn(),n.pingedLanes|=n.suspendedLanes&l,nn===n&&(un&l)===l&&(qt===4||qt===3&&(un&130023424)===un&&500>Ne()-kc?zr(n,0):Oc|=l),bn(n,r)}function Op(n,r){r===0&&((n.mode&1)===0?r=1:(r=Dn,Dn<<=1,(Dn&130023424)===0&&(Dn=4194304)));var l=yn();n=Ri(n,r),n!==null&&(Mo(n,r,l),bn(n,l))}function o0(n){var r=n.memoizedState,l=0;r!==null&&(l=r.retryLane),Op(n,l)}function a0(n,r){var l=0;switch(n.tag){case 13:var c=n.stateNode,p=n.memoizedState;p!==null&&(l=p.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(r),Op(n,l)}var kp;kp=function(n,r,l){if(n!==null)if(n.memoizedProps!==r.pendingProps||En.current)Mn=!0;else{if((n.lanes&l)===0&&(r.flags&128)===0)return Mn=!1,qv(n,r,l);Mn=(n.flags&131072)!==0}else Mn=!1,Nt&&(r.flags&1048576)!==0&&gf(r,Wa,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;sl(n,r),n=r.pendingProps;var p=Ss(r,hn.current);As(r,l),p=pc(null,r,c,n,p,l);var g=mc();return r.flags|=1,typeof p=="object"&&p!==null&&typeof p.render=="function"&&p.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,wn(c)?(g=!0,Ha(r)):g=!1,r.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,ac(r),p.updater=il,r.stateNode=p,p._reactInternals=r,Sc(r,c,n,l),r=Tc(null,r,c,!0,g,l)):(r.tag=0,Nt&&g&&Ju(r),vn(null,r,p,l),r=r.child),r;case 16:c=r.elementType;e:{switch(sl(n,r),n=r.pendingProps,p=c._init,c=p(c._payload),r.type=c,p=r.tag=u0(c),n=ei(c,n),p){case 0:r=Mc(null,r,c,n,l);break e;case 1:r=up(null,r,c,n,l);break e;case 11:r=rp(null,r,c,n,l);break e;case 14:r=sp(null,r,c,ei(c.type,n),l);break e}throw Error(t(306,c,""))}return r;case 0:return c=r.type,p=r.pendingProps,p=r.elementType===c?p:ei(c,p),Mc(n,r,c,p,l);case 1:return c=r.type,p=r.pendingProps,p=r.elementType===c?p:ei(c,p),up(n,r,c,p,l);case 3:e:{if(cp(r),n===null)throw Error(t(387));c=r.pendingProps,g=r.memoizedState,p=g.element,Tf(n,r),Ka(r,c,null,l);var E=r.memoizedState;if(c=E.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},r.updateQueue.baseState=g,r.memoizedState=g,r.flags&256){p=Cs(Error(t(423)),r),r=dp(n,r,c,l,p);break e}else if(c!==p){p=Cs(Error(t(424)),r),r=dp(n,r,c,l,p);break e}else for(On=Ji(r.stateNode.containerInfo.firstChild),Nn=r,Nt=!0,Qn=null,l=wf(r,null,c,l),r.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Ms(),c===p){r=Pi(n,r,l);break e}vn(n,r,c,l)}r=r.child}return r;case 5:return Rf(r),n===null&&ec(r),c=r.type,p=r.pendingProps,g=n!==null?n.memoizedProps:null,E=p.children,ju(c,p)?E=null:g!==null&&ju(c,g)&&(r.flags|=32),lp(n,r),vn(n,r,E,l),r.child;case 6:return n===null&&ec(r),null;case 13:return hp(n,r,l);case 4:return lc(r,r.stateNode.containerInfo),c=r.pendingProps,n===null?r.child=Ts(r,null,c,l):vn(n,r,c,l),r.child;case 11:return c=r.type,p=r.pendingProps,p=r.elementType===c?p:ei(c,p),rp(n,r,c,p,l);case 7:return vn(n,r,r.pendingProps,l),r.child;case 8:return vn(n,r,r.pendingProps.children,l),r.child;case 12:return vn(n,r,r.pendingProps.children,l),r.child;case 10:e:{if(c=r.type._context,p=r.pendingProps,g=r.memoizedProps,E=p.value,bt(Xa,c._currentValue),c._currentValue=E,g!==null)if(Zn(g.value,E)){if(g.children===p.children&&!En.current){r=Pi(n,r,l);break e}}else for(g=r.child,g!==null&&(g.return=r);g!==null;){var I=g.dependencies;if(I!==null){E=g.child;for(var k=I.firstContext;k!==null;){if(k.context===c){if(g.tag===1){k=Ci(-1,l&-l),k.tag=2;var Z=g.updateQueue;if(Z!==null){Z=Z.shared;var pe=Z.pending;pe===null?k.next=k:(k.next=pe.next,pe.next=k),Z.pending=k}}g.lanes|=l,k=g.alternate,k!==null&&(k.lanes|=l),sc(g.return,l,r),I.lanes|=l;break}k=k.next}}else if(g.tag===10)E=g.type===r.type?null:g.child;else if(g.tag===18){if(E=g.return,E===null)throw Error(t(341));E.lanes|=l,I=E.alternate,I!==null&&(I.lanes|=l),sc(E,l,r),E=g.sibling}else E=g.child;if(E!==null)E.return=g;else for(E=g;E!==null;){if(E===r){E=null;break}if(g=E.sibling,g!==null){g.return=E.return,E=g;break}E=E.return}g=E}vn(n,r,p.children,l),r=r.child}return r;case 9:return p=r.type,c=r.pendingProps.children,As(r,l),p=Gn(p),c=c(p),r.flags|=1,vn(n,r,c,l),r.child;case 14:return c=r.type,p=ei(c,r.pendingProps),p=ei(c.type,p),sp(n,r,c,p,l);case 15:return op(n,r,r.type,r.pendingProps,l);case 17:return c=r.type,p=r.pendingProps,p=r.elementType===c?p:ei(c,p),sl(n,r),r.tag=1,wn(c)?(n=!0,Ha(r)):n=!1,As(r,l),Jf(r,c,p),Sc(r,c,p,l),Tc(null,r,c,!0,n,l);case 19:return pp(n,r,l);case 22:return ap(n,r,l)}throw Error(t(156,r.tag))};function Fp(n,r){return ke(n,r)}function l0(n,r,l,c){this.tag=n,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(n,r,l,c){return new l0(n,r,l,c)}function jc(n){return n=n.prototype,!(!n||!n.isReactComponent)}function u0(n){if(typeof n=="function")return jc(n)?1:0;if(n!=null){if(n=n.$$typeof,n===se)return 11;if(n===oe)return 14}return 2}function lr(n,r){var l=n.alternate;return l===null?(l=$n(n.tag,r,n.key,n.mode),l.elementType=n.elementType,l.type=n.type,l.stateNode=n.stateNode,l.alternate=n,n.alternate=l):(l.pendingProps=r,l.type=n.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=n.flags&14680064,l.childLanes=n.childLanes,l.lanes=n.lanes,l.child=n.child,l.memoizedProps=n.memoizedProps,l.memoizedState=n.memoizedState,l.updateQueue=n.updateQueue,r=n.dependencies,l.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},l.sibling=n.sibling,l.index=n.index,l.ref=n.ref,l}function gl(n,r,l,c,p,g){var E=2;if(c=n,typeof n=="function")jc(n)&&(E=1);else if(typeof n=="string")E=5;else e:switch(n){case N:return Vr(l.children,p,g,r);case Q:E=8,p|=8;break;case P:return n=$n(12,l,r,p|2),n.elementType=P,n.lanes=g,n;case z:return n=$n(13,l,r,p),n.elementType=z,n.lanes=g,n;case ae:return n=$n(19,l,r,p),n.elementType=ae,n.lanes=g,n;case de:return _l(l,p,g,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case A:E=10;break e;case q:E=9;break e;case se:E=11;break e;case oe:E=14;break e;case ge:E=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=$n(E,l,r,p),r.elementType=n,r.type=c,r.lanes=g,r}function Vr(n,r,l,c){return n=$n(7,n,c,r),n.lanes=l,n}function _l(n,r,l,c){return n=$n(22,n,c,r),n.elementType=de,n.lanes=l,n.stateNode={isHidden:!1},n}function $c(n,r,l){return n=$n(6,n,null,r),n.lanes=l,n}function Xc(n,r,l){return r=$n(4,n.children!==null?n.children:[],n.key,r),r.lanes=l,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function c0(n,r,l,c,p){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xu(0),this.expirationTimes=xu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xu(0),this.identifierPrefix=c,this.onRecoverableError=p,this.mutableSourceEagerHydrationData=null}function qc(n,r,l,c,p,g,E,I,k){return n=new c0(n,r,l,I,k),r===1?(r=1,g===!0&&(r|=8)):r=0,g=$n(3,null,null,r),n.current=g,g.stateNode=n,g.memoizedState={element:c,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},ac(g),n}function d0(n,r,l){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:D,key:c==null?null:""+c,children:n,containerInfo:r,implementation:l}}function Bp(n){if(!n)return Qi;n=n._reactInternals;e:{if(R(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(wn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var l=n.type;if(wn(l))return ff(n,l,r)}return r}function zp(n,r,l,c,p,g,E,I,k){return n=qc(l,c,!0,n,p,g,E,I,k),n.context=Bp(null),l=n.current,c=yn(),p=or(l),g=Ci(c,p),g.callback=r??null,nr(l,g,p),n.current.lanes=p,Mo(n,p,c),bn(n,c),n}function vl(n,r,l,c){var p=r.current,g=yn(),E=or(p);return l=Bp(l),r.context===null?r.context=l:r.pendingContext=l,r=Ci(g,E),r.payload={element:n},c=c===void 0?null:c,c!==null&&(r.callback=c),n=nr(p,r,E),n!==null&&(ii(n,p,E,g),Ya(n,p,E)),E}function yl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Hp(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var l=n.retryLane;n.retryLane=l!==0&&l<r?l:r}}function Yc(n,r){Hp(n,r),(n=n.alternate)&&Hp(n,r)}function h0(){return null}var Vp=typeof reportError=="function"?reportError:function(n){console.error(n)};function Kc(n){this._internalRoot=n}xl.prototype.render=Kc.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));vl(n,r,null,null)},xl.prototype.unmount=Kc.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Br(function(){vl(null,n,null,null)}),r[Mi]=null}};function xl(n){this._internalRoot=n}xl.prototype.unstable_scheduleHydration=function(n){if(n){var r=Mh();n={blockedOn:null,target:n,priority:r};for(var l=0;l<qi.length&&r!==0&&r<qi[l].priority;l++);qi.splice(l,0,n),l===0&&Ah(n)}};function Jc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Sl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Gp(){}function f0(n,r,l,c,p){if(p){if(typeof c=="function"){var g=c;c=function(){var Z=yl(E);g.call(Z)}}var E=zp(r,c,n,0,null,!1,!1,"",Gp);return n._reactRootContainer=E,n[Mi]=E.current,Fo(n.nodeType===8?n.parentNode:n),Br(),E}for(;p=n.lastChild;)n.removeChild(p);if(typeof c=="function"){var I=c;c=function(){var Z=yl(k);I.call(Z)}}var k=qc(n,0,!1,null,null,!1,!1,"",Gp);return n._reactRootContainer=k,n[Mi]=k.current,Fo(n.nodeType===8?n.parentNode:n),Br(function(){vl(r,k,l,c)}),k}function El(n,r,l,c,p){var g=l._reactRootContainer;if(g){var E=g;if(typeof p=="function"){var I=p;p=function(){var k=yl(E);I.call(k)}}vl(r,E,n,p)}else E=f0(l,r,n,p,c);return yl(E)}Eh=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var l=wi(r.pendingLanes);l!==0&&(Su(r,l|1),bn(r,Ne()),(mt&6)===0&&(Is=Ne()+500,er()))}break;case 13:Br(function(){var c=Ri(n,1);if(c!==null){var p=yn();ii(c,n,1,p)}}),Yc(n,1)}},Eu=function(n){if(n.tag===13){var r=Ri(n,134217728);if(r!==null){var l=yn();ii(r,n,134217728,l)}Yc(n,134217728)}},wh=function(n){if(n.tag===13){var r=or(n),l=Ri(n,r);if(l!==null){var c=yn();ii(l,n,r,c)}Yc(n,r)}},Mh=function(){return St},Th=function(n,r){var l=St;try{return St=n,r()}finally{St=l}},le=function(n,r,l){switch(r){case"input":if(lt(n,l),r=l.name,l.type==="radio"&&r!=null){for(l=n;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<l.length;r++){var c=l[r];if(c!==n&&c.form===n.form){var p=Ba(c);if(!p)throw Error(t(90));$e(c),lt(c,p)}}}break;case"textarea":ye(n,l);break;case"select":r=l.value,r!=null&&ie(n,!!l.multiple,r,!1)}},Wt=Vc,gt=Br;var p0={usingClientEntryPoint:!1,Events:[Ho,ys,Ba,wt,Pt,Vc]},ta={findFiberByHostInstance:Lr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},m0={bundleType:ta.bundleType,version:ta.version,rendererPackageName:ta.rendererPackageName,rendererConfig:ta.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:L.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=K(n),n===null?null:n.stateNode},findFiberByHostInstance:ta.findFiberByHostInstance||h0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var wl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wl.isDisabled&&wl.supportsFiber)try{Ke=wl.inject(m0),dn=wl}catch{}}return An.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=p0,An.createPortal=function(n,r){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Jc(r))throw Error(t(200));return d0(n,r,null,l)},An.createRoot=function(n,r){if(!Jc(n))throw Error(t(299));var l=!1,c="",p=Vp;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(p=r.onRecoverableError)),r=qc(n,1,!1,null,null,l,!1,c,p),n[Mi]=r.current,Fo(n.nodeType===8?n.parentNode:n),new Kc(r)},An.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=K(r),n=n===null?null:n.stateNode,n},An.flushSync=function(n){return Br(n)},An.hydrate=function(n,r,l){if(!Sl(r))throw Error(t(200));return El(null,n,r,!0,l)},An.hydrateRoot=function(n,r,l){if(!Jc(n))throw Error(t(405));var c=l!=null&&l.hydratedSources||null,p=!1,g="",E=Vp;if(l!=null&&(l.unstable_strictMode===!0&&(p=!0),l.identifierPrefix!==void 0&&(g=l.identifierPrefix),l.onRecoverableError!==void 0&&(E=l.onRecoverableError)),r=zp(r,null,n,1,l??null,p,!1,g,E),n[Mi]=r.current,Fo(n),c)for(n=0;n<c.length;n++)l=c[n],p=l._getVersion,p=p(l._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[l,p]:r.mutableSourceEagerHydrationData.push(l,p);return new xl(r)},An.render=function(n,r,l){if(!Sl(r))throw Error(t(200));return El(null,n,r,!1,l)},An.unmountComponentAtNode=function(n){if(!Sl(n))throw Error(t(40));return n._reactRootContainer?(Br(function(){El(null,null,n,!1,function(){n._reactRootContainer=null,n[Mi]=null})}),!0):!1},An.unstable_batchedUpdates=Vc,An.unstable_renderSubtreeIntoContainer=function(n,r,l,c){if(!Sl(l))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return El(n,r,l,!1,c)},An.version="18.3.1-next-f1338f8080-20240426",An}var Jp;function T0(){if(Jp)return ed.exports;Jp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),ed.exports=M0(),ed.exports}var Zp;function b0(){if(Zp)return Ml;Zp=1;var s=T0();return Ml.createRoot=s.createRoot,Ml.hydrateRoot=s.hydrateRoot,Ml}var A0=b0();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const dh="164",R0=0,Qp=1,C0=2,Wg=1,P0=2,ki=3,wr=0,Ln=1,Bi=2,Sr=0,co=1,em=2,tm=3,nm=4,L0=5,es=100,I0=101,D0=102,U0=103,N0=104,O0=200,k0=201,F0=202,B0=203,jd=204,$d=205,z0=206,H0=207,V0=208,G0=209,W0=210,j0=211,$0=212,X0=213,q0=214,Y0=0,K0=1,J0=2,Ql=3,Z0=4,Q0=5,ey=6,ty=7,jg=0,ny=1,iy=2,Er=0,ry=1,sy=2,oy=3,ay=4,ly=5,uy=6,cy=7,$g=300,po=301,mo=302,Xd=303,qd=304,uu=306,Yd=1e3,is=1001,Kd=1002,Kn=1003,dy=1004,Tl=1005,li=1006,id=1007,rs=1008,Mr=1009,hy=1010,fy=1011,Xg=1012,qg=1013,go=1014,xr=1015,cu=1016,Yg=1017,Kg=1018,ga=1020,py=35902,my=1021,gy=1022,yi=1023,_y=1024,vy=1025,ho=1026,pa=1027,yy=1028,Jg=1029,xy=1030,Zg=1031,Qg=1033,rd=33776,sd=33777,od=33778,ad=33779,im=35840,rm=35841,sm=35842,om=35843,am=36196,lm=37492,um=37496,cm=37808,dm=37809,hm=37810,fm=37811,pm=37812,mm=37813,gm=37814,_m=37815,vm=37816,ym=37817,xm=37818,Sm=37819,Em=37820,wm=37821,ld=36492,Mm=36494,Tm=36495,Sy=36283,bm=36284,Am=36285,Rm=36286,Ey=3200,wy=3201,My=0,Ty=1,vr="",gi="srgb",br="srgb-linear",hh="display-p3",du="display-p3-linear",eu="linear",Dt="srgb",tu="rec709",nu="p3",Us=7680,Cm=519,by=512,Ay=513,Ry=514,e_=515,Cy=516,Py=517,Ly=518,Iy=519,Pm=35044,Lm="300 es",zi=2e3,iu=2001;class yo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const a=o.indexOf(t);a!==-1&&o.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const o=i.slice(0);for(let a=0,u=o.length;a<u;a++)o[a].call(this,e);e.target=null}}}const gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ud=Math.PI/180,Jd=180/Math.PI;function _a(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(gn[s&255]+gn[s>>8&255]+gn[s>>16&255]+gn[s>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[t&63|128]+gn[t>>8&255]+"-"+gn[t>>16&255]+gn[t>>24&255]+gn[i&255]+gn[i>>8&255]+gn[i>>16&255]+gn[i>>24&255]).toLowerCase()}function Pn(s,e,t){return Math.max(e,Math.min(t,s))}function Dy(s,e){return(s%e+e)%e}function cd(s,e,t){return(1-t)*s+t*e}function ia(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Rn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class xt{constructor(e=0,t=0){xt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6],this.y=o[1]*t+o[4]*i+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Pn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),o=Math.sin(t),a=this.x-e.x,u=this.y-e.y;return this.x=a*i-u*o+e.x,this.y=a*o+u*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ot{constructor(e,t,i,o,a,u,d,h,f){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,o,a,u,d,h,f)}set(e,t,i,o,a,u,d,h,f){const m=this.elements;return m[0]=e,m[1]=o,m[2]=d,m[3]=t,m[4]=a,m[5]=h,m[6]=i,m[7]=u,m[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,o=t.elements,a=this.elements,u=i[0],d=i[3],h=i[6],f=i[1],m=i[4],_=i[7],v=i[2],S=i[5],w=i[8],M=o[0],y=o[3],x=o[6],C=o[1],T=o[4],L=o[7],V=o[2],D=o[5],N=o[8];return a[0]=u*M+d*C+h*V,a[3]=u*y+d*T+h*D,a[6]=u*x+d*L+h*N,a[1]=f*M+m*C+_*V,a[4]=f*y+m*T+_*D,a[7]=f*x+m*L+_*N,a[2]=v*M+S*C+w*V,a[5]=v*y+S*T+w*D,a[8]=v*x+S*L+w*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],u=e[4],d=e[5],h=e[6],f=e[7],m=e[8];return t*u*m-t*d*f-i*a*m+i*d*h+o*a*f-o*u*h}invert(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],u=e[4],d=e[5],h=e[6],f=e[7],m=e[8],_=m*u-d*f,v=d*h-m*a,S=f*a-u*h,w=t*_+i*v+o*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/w;return e[0]=_*M,e[1]=(o*f-m*i)*M,e[2]=(d*i-o*u)*M,e[3]=v*M,e[4]=(m*t-o*h)*M,e[5]=(o*a-d*t)*M,e[6]=S*M,e[7]=(i*h-f*t)*M,e[8]=(u*t-i*a)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,o,a,u,d){const h=Math.cos(a),f=Math.sin(a);return this.set(i*h,i*f,-i*(h*u+f*d)+u+e,-o*f,o*h,-o*(-f*u+h*d)+d+t,0,0,1),this}scale(e,t){return this.premultiply(dd.makeScale(e,t)),this}rotate(e){return this.premultiply(dd.makeRotation(-e)),this}translate(e,t){return this.premultiply(dd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let o=0;o<9;o++)if(t[o]!==i[o])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const dd=new ot;function t_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ru(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Uy(){const s=ru("canvas");return s.style.display="block",s}const Im={};function Ny(s){s in Im||(Im[s]=!0,console.warn(s))}const Dm=new ot().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Um=new ot().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),bl={[br]:{transfer:eu,primaries:tu,toReference:s=>s,fromReference:s=>s},[gi]:{transfer:Dt,primaries:tu,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[du]:{transfer:eu,primaries:nu,toReference:s=>s.applyMatrix3(Um),fromReference:s=>s.applyMatrix3(Dm)},[hh]:{transfer:Dt,primaries:nu,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Um),fromReference:s=>s.applyMatrix3(Dm).convertLinearToSRGB()}},Oy=new Set([br,du]),Mt={enabled:!0,_workingColorSpace:br,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Oy.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const i=bl[e].toReference,o=bl[t].fromReference;return o(i(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return bl[s].primaries},getTransfer:function(s){return s===vr?eu:bl[s].transfer}};function fo(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function hd(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ns;class ky{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ns===void 0&&(Ns=ru("canvas")),Ns.width=e.width,Ns.height=e.height;const i=Ns.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ns}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ru("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const o=i.getImageData(0,0,e.width,e.height),a=o.data;for(let u=0;u<a.length;u++)a[u]=fo(a[u]/255)*255;return i.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(fo(t[i]/255)*255):t[i]=fo(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Fy=0;class n_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fy++}),this.uuid=_a(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},o=this.data;if(o!==null){let a;if(Array.isArray(o)){a=[];for(let u=0,d=o.length;u<d;u++)o[u].isDataTexture?a.push(fd(o[u].image)):a.push(fd(o[u]))}else a=fd(o);i.url=a}return t||(e.images[this.uuid]=i),i}}function fd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ky.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let By=0;class In extends yo{constructor(e=In.DEFAULT_IMAGE,t=In.DEFAULT_MAPPING,i=is,o=is,a=li,u=rs,d=yi,h=Mr,f=In.DEFAULT_ANISOTROPY,m=vr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:By++}),this.uuid=_a(),this.name="",this.source=new n_(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=o,this.magFilter=a,this.minFilter=u,this.anisotropy=f,this.format=d,this.internalFormat=null,this.type=h,this.offset=new xt(0,0),this.repeat=new xt(1,1),this.center=new xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$g)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Yd:e.x=e.x-Math.floor(e.x);break;case is:e.x=e.x<0?0:1;break;case Kd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Yd:e.y=e.y-Math.floor(e.y);break;case is:e.y=e.y<0?0:1;break;case Kd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=$g;In.DEFAULT_ANISOTROPY=1;class cn{constructor(e=0,t=0,i=0,o=1){cn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,o){return this.x=e,this.y=t,this.z=i,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,o=this.z,a=this.w,u=e.elements;return this.x=u[0]*t+u[4]*i+u[8]*o+u[12]*a,this.y=u[1]*t+u[5]*i+u[9]*o+u[13]*a,this.z=u[2]*t+u[6]*i+u[10]*o+u[14]*a,this.w=u[3]*t+u[7]*i+u[11]*o+u[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,o,a;const h=e.elements,f=h[0],m=h[4],_=h[8],v=h[1],S=h[5],w=h[9],M=h[2],y=h[6],x=h[10];if(Math.abs(m-v)<.01&&Math.abs(_-M)<.01&&Math.abs(w-y)<.01){if(Math.abs(m+v)<.1&&Math.abs(_+M)<.1&&Math.abs(w+y)<.1&&Math.abs(f+S+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(f+1)/2,L=(S+1)/2,V=(x+1)/2,D=(m+v)/4,N=(_+M)/4,Q=(w+y)/4;return T>L&&T>V?T<.01?(i=0,o=.707106781,a=.707106781):(i=Math.sqrt(T),o=D/i,a=N/i):L>V?L<.01?(i=.707106781,o=0,a=.707106781):(o=Math.sqrt(L),i=D/o,a=Q/o):V<.01?(i=.707106781,o=.707106781,a=0):(a=Math.sqrt(V),i=N/a,o=Q/a),this.set(i,o,a,t),this}let C=Math.sqrt((y-w)*(y-w)+(_-M)*(_-M)+(v-m)*(v-m));return Math.abs(C)<.001&&(C=1),this.x=(y-w)/C,this.y=(_-M)/C,this.z=(v-m)/C,this.w=Math.acos((f+S+x-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zy extends yo{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new cn(0,0,e,t),this.scissorTest=!1,this.viewport=new cn(0,0,e,t);const o={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:li,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const a=new In(o,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];const u=i.count;for(let d=0;d<u;d++)this.textures[d]=a.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let o=0,a=this.textures.length;o<a;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,o=e.textures.length;i<o;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new n_(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class os extends zy{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class i_ extends In{constructor(e=null,t=1,i=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:o},this.magFilter=Kn,this.minFilter=Kn,this.wrapR=is,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hy extends In{constructor(e=null,t=1,i=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:o},this.magFilter=Kn,this.minFilter=Kn,this.wrapR=is,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class va{constructor(e=0,t=0,i=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=o}static slerpFlat(e,t,i,o,a,u,d){let h=i[o+0],f=i[o+1],m=i[o+2],_=i[o+3];const v=a[u+0],S=a[u+1],w=a[u+2],M=a[u+3];if(d===0){e[t+0]=h,e[t+1]=f,e[t+2]=m,e[t+3]=_;return}if(d===1){e[t+0]=v,e[t+1]=S,e[t+2]=w,e[t+3]=M;return}if(_!==M||h!==v||f!==S||m!==w){let y=1-d;const x=h*v+f*S+m*w+_*M,C=x>=0?1:-1,T=1-x*x;if(T>Number.EPSILON){const V=Math.sqrt(T),D=Math.atan2(V,x*C);y=Math.sin(y*D)/V,d=Math.sin(d*D)/V}const L=d*C;if(h=h*y+v*L,f=f*y+S*L,m=m*y+w*L,_=_*y+M*L,y===1-d){const V=1/Math.sqrt(h*h+f*f+m*m+_*_);h*=V,f*=V,m*=V,_*=V}}e[t]=h,e[t+1]=f,e[t+2]=m,e[t+3]=_}static multiplyQuaternionsFlat(e,t,i,o,a,u){const d=i[o],h=i[o+1],f=i[o+2],m=i[o+3],_=a[u],v=a[u+1],S=a[u+2],w=a[u+3];return e[t]=d*w+m*_+h*S-f*v,e[t+1]=h*w+m*v+f*_-d*S,e[t+2]=f*w+m*S+d*v-h*_,e[t+3]=m*w-d*_-h*v-f*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,o){return this._x=e,this._y=t,this._z=i,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,o=e._y,a=e._z,u=e._order,d=Math.cos,h=Math.sin,f=d(i/2),m=d(o/2),_=d(a/2),v=h(i/2),S=h(o/2),w=h(a/2);switch(u){case"XYZ":this._x=v*m*_+f*S*w,this._y=f*S*_-v*m*w,this._z=f*m*w+v*S*_,this._w=f*m*_-v*S*w;break;case"YXZ":this._x=v*m*_+f*S*w,this._y=f*S*_-v*m*w,this._z=f*m*w-v*S*_,this._w=f*m*_+v*S*w;break;case"ZXY":this._x=v*m*_-f*S*w,this._y=f*S*_+v*m*w,this._z=f*m*w+v*S*_,this._w=f*m*_-v*S*w;break;case"ZYX":this._x=v*m*_-f*S*w,this._y=f*S*_+v*m*w,this._z=f*m*w-v*S*_,this._w=f*m*_+v*S*w;break;case"YZX":this._x=v*m*_+f*S*w,this._y=f*S*_+v*m*w,this._z=f*m*w-v*S*_,this._w=f*m*_-v*S*w;break;case"XZY":this._x=v*m*_-f*S*w,this._y=f*S*_-v*m*w,this._z=f*m*w+v*S*_,this._w=f*m*_+v*S*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,o=Math.sin(i);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],o=t[4],a=t[8],u=t[1],d=t[5],h=t[9],f=t[2],m=t[6],_=t[10],v=i+d+_;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(m-h)*S,this._y=(a-f)*S,this._z=(u-o)*S}else if(i>d&&i>_){const S=2*Math.sqrt(1+i-d-_);this._w=(m-h)/S,this._x=.25*S,this._y=(o+u)/S,this._z=(a+f)/S}else if(d>_){const S=2*Math.sqrt(1+d-i-_);this._w=(a-f)/S,this._x=(o+u)/S,this._y=.25*S,this._z=(h+m)/S}else{const S=2*Math.sqrt(1+_-i-d);this._w=(u-o)/S,this._x=(a+f)/S,this._y=(h+m)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Pn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const o=Math.min(1,t/i);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,o=e._y,a=e._z,u=e._w,d=t._x,h=t._y,f=t._z,m=t._w;return this._x=i*m+u*d+o*f-a*h,this._y=o*m+u*h+a*d-i*f,this._z=a*m+u*f+i*h-o*d,this._w=u*m-i*d-o*h-a*f,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,o=this._y,a=this._z,u=this._w;let d=u*e._w+i*e._x+o*e._y+a*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=u,this._x=i,this._y=o,this._z=a,this;const h=1-d*d;if(h<=Number.EPSILON){const S=1-t;return this._w=S*u+t*this._w,this._x=S*i+t*this._x,this._y=S*o+t*this._y,this._z=S*a+t*this._z,this.normalize(),this}const f=Math.sqrt(h),m=Math.atan2(f,d),_=Math.sin((1-t)*m)/f,v=Math.sin(t*m)/f;return this._w=u*_+this._w*v,this._x=i*_+this._x*v,this._y=o*_+this._y*v,this._z=a*_+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),o=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(o*Math.sin(e),o*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ee{constructor(e=0,t=0,i=0){ee.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Nm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Nm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*o,this.y=a[1]*t+a[4]*i+a[7]*o,this.z=a[2]*t+a[5]*i+a[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,o=this.z,a=e.elements,u=1/(a[3]*t+a[7]*i+a[11]*o+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*o+a[12])*u,this.y=(a[1]*t+a[5]*i+a[9]*o+a[13])*u,this.z=(a[2]*t+a[6]*i+a[10]*o+a[14])*u,this}applyQuaternion(e){const t=this.x,i=this.y,o=this.z,a=e.x,u=e.y,d=e.z,h=e.w,f=2*(u*o-d*i),m=2*(d*t-a*o),_=2*(a*i-u*t);return this.x=t+h*f+u*_-d*m,this.y=i+h*m+d*f-a*_,this.z=o+h*_+a*m-u*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*o,this.y=a[1]*t+a[5]*i+a[9]*o,this.z=a[2]*t+a[6]*i+a[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,o=e.y,a=e.z,u=t.x,d=t.y,h=t.z;return this.x=o*h-a*d,this.y=a*u-i*h,this.z=i*d-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return pd.copy(this).projectOnVector(e),this.sub(pd)}reflect(e){return this.sub(pd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Pn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,o=this.z-e.z;return t*t+i*i+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const o=Math.sin(t)*e;return this.x=o*Math.sin(i),this.y=Math.cos(t)*e,this.z=o*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const pd=new ee,Nm=new va;class ya{constructor(e=new ee(1/0,1/0,1/0),t=new ee(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ri.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ri.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=a.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,ri):ri.fromBufferAttribute(a,u),ri.applyMatrix4(e.matrixWorld),this.expandByPoint(ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Al.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Al.copy(i.boundingBox)),Al.applyMatrix4(e.matrixWorld),this.union(Al)}const o=e.children;for(let a=0,u=o.length;a<u;a++)this.expandByObject(o[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ri),ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ra),Rl.subVectors(this.max,ra),Os.subVectors(e.a,ra),ks.subVectors(e.b,ra),Fs.subVectors(e.c,ra),cr.subVectors(ks,Os),dr.subVectors(Fs,ks),Gr.subVectors(Os,Fs);let t=[0,-cr.z,cr.y,0,-dr.z,dr.y,0,-Gr.z,Gr.y,cr.z,0,-cr.x,dr.z,0,-dr.x,Gr.z,0,-Gr.x,-cr.y,cr.x,0,-dr.y,dr.x,0,-Gr.y,Gr.x,0];return!md(t,Os,ks,Fs,Rl)||(t=[1,0,0,0,1,0,0,0,1],!md(t,Os,ks,Fs,Rl))?!1:(Cl.crossVectors(cr,dr),t=[Cl.x,Cl.y,Cl.z],md(t,Os,ks,Fs,Rl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ii=[new ee,new ee,new ee,new ee,new ee,new ee,new ee,new ee],ri=new ee,Al=new ya,Os=new ee,ks=new ee,Fs=new ee,cr=new ee,dr=new ee,Gr=new ee,ra=new ee,Rl=new ee,Cl=new ee,Wr=new ee;function md(s,e,t,i,o){for(let a=0,u=s.length-3;a<=u;a+=3){Wr.fromArray(s,a);const d=o.x*Math.abs(Wr.x)+o.y*Math.abs(Wr.y)+o.z*Math.abs(Wr.z),h=e.dot(Wr),f=t.dot(Wr),m=i.dot(Wr);if(Math.max(-Math.max(h,f,m),Math.min(h,f,m))>d)return!1}return!0}const Vy=new ya,sa=new ee,gd=new ee;class fh{constructor(e=new ee,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Vy.setFromPoints(e).getCenter(i);let o=0;for(let a=0,u=e.length;a<u;a++)o=Math.max(o,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;sa.subVectors(e,this.center);const t=sa.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),o=(i-this.radius)*.5;this.center.addScaledVector(sa,o/i),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(sa.copy(e.center).add(gd)),this.expandByPoint(sa.copy(e.center).sub(gd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Di=new ee,_d=new ee,Pl=new ee,hr=new ee,vd=new ee,Ll=new ee,yd=new ee;class Gy{constructor(e=new ee,t=new ee(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Di)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Di.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Di.copy(this.origin).addScaledVector(this.direction,t),Di.distanceToSquared(e))}distanceSqToSegment(e,t,i,o){_d.copy(e).add(t).multiplyScalar(.5),Pl.copy(t).sub(e).normalize(),hr.copy(this.origin).sub(_d);const a=e.distanceTo(t)*.5,u=-this.direction.dot(Pl),d=hr.dot(this.direction),h=-hr.dot(Pl),f=hr.lengthSq(),m=Math.abs(1-u*u);let _,v,S,w;if(m>0)if(_=u*h-d,v=u*d-h,w=a*m,_>=0)if(v>=-w)if(v<=w){const M=1/m;_*=M,v*=M,S=_*(_+u*v+2*d)+v*(u*_+v+2*h)+f}else v=a,_=Math.max(0,-(u*v+d)),S=-_*_+v*(v+2*h)+f;else v=-a,_=Math.max(0,-(u*v+d)),S=-_*_+v*(v+2*h)+f;else v<=-w?(_=Math.max(0,-(-u*a+d)),v=_>0?-a:Math.min(Math.max(-a,-h),a),S=-_*_+v*(v+2*h)+f):v<=w?(_=0,v=Math.min(Math.max(-a,-h),a),S=v*(v+2*h)+f):(_=Math.max(0,-(u*a+d)),v=_>0?a:Math.min(Math.max(-a,-h),a),S=-_*_+v*(v+2*h)+f);else v=u>0?-a:a,_=Math.max(0,-(u*v+d)),S=-_*_+v*(v+2*h)+f;return i&&i.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(_d).addScaledVector(Pl,v),S}intersectSphere(e,t){Di.subVectors(e.center,this.origin);const i=Di.dot(this.direction),o=Di.dot(Di)-i*i,a=e.radius*e.radius;if(o>a)return null;const u=Math.sqrt(a-o),d=i-u,h=i+u;return h<0?null:d<0?this.at(h,t):this.at(d,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,o,a,u,d,h;const f=1/this.direction.x,m=1/this.direction.y,_=1/this.direction.z,v=this.origin;return f>=0?(i=(e.min.x-v.x)*f,o=(e.max.x-v.x)*f):(i=(e.max.x-v.x)*f,o=(e.min.x-v.x)*f),m>=0?(a=(e.min.y-v.y)*m,u=(e.max.y-v.y)*m):(a=(e.max.y-v.y)*m,u=(e.min.y-v.y)*m),i>u||a>o||((a>i||isNaN(i))&&(i=a),(u<o||isNaN(o))&&(o=u),_>=0?(d=(e.min.z-v.z)*_,h=(e.max.z-v.z)*_):(d=(e.max.z-v.z)*_,h=(e.min.z-v.z)*_),i>h||d>o)||((d>i||i!==i)&&(i=d),(h<o||o!==o)&&(o=h),o<0)?null:this.at(i>=0?i:o,t)}intersectsBox(e){return this.intersectBox(e,Di)!==null}intersectTriangle(e,t,i,o,a){vd.subVectors(t,e),Ll.subVectors(i,e),yd.crossVectors(vd,Ll);let u=this.direction.dot(yd),d;if(u>0){if(o)return null;d=1}else if(u<0)d=-1,u=-u;else return null;hr.subVectors(this.origin,e);const h=d*this.direction.dot(Ll.crossVectors(hr,Ll));if(h<0)return null;const f=d*this.direction.dot(vd.cross(hr));if(f<0||h+f>u)return null;const m=-d*hr.dot(yd);return m<0?null:this.at(m/u,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Kt{constructor(e,t,i,o,a,u,d,h,f,m,_,v,S,w,M,y){Kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,o,a,u,d,h,f,m,_,v,S,w,M,y)}set(e,t,i,o,a,u,d,h,f,m,_,v,S,w,M,y){const x=this.elements;return x[0]=e,x[4]=t,x[8]=i,x[12]=o,x[1]=a,x[5]=u,x[9]=d,x[13]=h,x[2]=f,x[6]=m,x[10]=_,x[14]=v,x[3]=S,x[7]=w,x[11]=M,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,o=1/Bs.setFromMatrixColumn(e,0).length(),a=1/Bs.setFromMatrixColumn(e,1).length(),u=1/Bs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*o,t[1]=i[1]*o,t[2]=i[2]*o,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*u,t[9]=i[9]*u,t[10]=i[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,o=e.y,a=e.z,u=Math.cos(i),d=Math.sin(i),h=Math.cos(o),f=Math.sin(o),m=Math.cos(a),_=Math.sin(a);if(e.order==="XYZ"){const v=u*m,S=u*_,w=d*m,M=d*_;t[0]=h*m,t[4]=-h*_,t[8]=f,t[1]=S+w*f,t[5]=v-M*f,t[9]=-d*h,t[2]=M-v*f,t[6]=w+S*f,t[10]=u*h}else if(e.order==="YXZ"){const v=h*m,S=h*_,w=f*m,M=f*_;t[0]=v+M*d,t[4]=w*d-S,t[8]=u*f,t[1]=u*_,t[5]=u*m,t[9]=-d,t[2]=S*d-w,t[6]=M+v*d,t[10]=u*h}else if(e.order==="ZXY"){const v=h*m,S=h*_,w=f*m,M=f*_;t[0]=v-M*d,t[4]=-u*_,t[8]=w+S*d,t[1]=S+w*d,t[5]=u*m,t[9]=M-v*d,t[2]=-u*f,t[6]=d,t[10]=u*h}else if(e.order==="ZYX"){const v=u*m,S=u*_,w=d*m,M=d*_;t[0]=h*m,t[4]=w*f-S,t[8]=v*f+M,t[1]=h*_,t[5]=M*f+v,t[9]=S*f-w,t[2]=-f,t[6]=d*h,t[10]=u*h}else if(e.order==="YZX"){const v=u*h,S=u*f,w=d*h,M=d*f;t[0]=h*m,t[4]=M-v*_,t[8]=w*_+S,t[1]=_,t[5]=u*m,t[9]=-d*m,t[2]=-f*m,t[6]=S*_+w,t[10]=v-M*_}else if(e.order==="XZY"){const v=u*h,S=u*f,w=d*h,M=d*f;t[0]=h*m,t[4]=-_,t[8]=f*m,t[1]=v*_+M,t[5]=u*m,t[9]=S*_-w,t[2]=w*_-S,t[6]=d*m,t[10]=M*_+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wy,e,jy)}lookAt(e,t,i){const o=this.elements;return Fn.subVectors(e,t),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),fr.crossVectors(i,Fn),fr.lengthSq()===0&&(Math.abs(i.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),fr.crossVectors(i,Fn)),fr.normalize(),Il.crossVectors(Fn,fr),o[0]=fr.x,o[4]=Il.x,o[8]=Fn.x,o[1]=fr.y,o[5]=Il.y,o[9]=Fn.y,o[2]=fr.z,o[6]=Il.z,o[10]=Fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,o=t.elements,a=this.elements,u=i[0],d=i[4],h=i[8],f=i[12],m=i[1],_=i[5],v=i[9],S=i[13],w=i[2],M=i[6],y=i[10],x=i[14],C=i[3],T=i[7],L=i[11],V=i[15],D=o[0],N=o[4],Q=o[8],P=o[12],A=o[1],q=o[5],se=o[9],z=o[13],ae=o[2],oe=o[6],ge=o[10],de=o[14],F=o[3],re=o[7],Y=o[11],O=o[15];return a[0]=u*D+d*A+h*ae+f*F,a[4]=u*N+d*q+h*oe+f*re,a[8]=u*Q+d*se+h*ge+f*Y,a[12]=u*P+d*z+h*de+f*O,a[1]=m*D+_*A+v*ae+S*F,a[5]=m*N+_*q+v*oe+S*re,a[9]=m*Q+_*se+v*ge+S*Y,a[13]=m*P+_*z+v*de+S*O,a[2]=w*D+M*A+y*ae+x*F,a[6]=w*N+M*q+y*oe+x*re,a[10]=w*Q+M*se+y*ge+x*Y,a[14]=w*P+M*z+y*de+x*O,a[3]=C*D+T*A+L*ae+V*F,a[7]=C*N+T*q+L*oe+V*re,a[11]=C*Q+T*se+L*ge+V*Y,a[15]=C*P+T*z+L*de+V*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],o=e[8],a=e[12],u=e[1],d=e[5],h=e[9],f=e[13],m=e[2],_=e[6],v=e[10],S=e[14],w=e[3],M=e[7],y=e[11],x=e[15];return w*(+a*h*_-o*f*_-a*d*v+i*f*v+o*d*S-i*h*S)+M*(+t*h*S-t*f*v+a*u*v-o*u*S+o*f*m-a*h*m)+y*(+t*f*_-t*d*S-a*u*_+i*u*S+a*d*m-i*f*m)+x*(-o*d*m-t*h*_+t*d*v+o*u*_-i*u*v+i*h*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],o=e[2],a=e[3],u=e[4],d=e[5],h=e[6],f=e[7],m=e[8],_=e[9],v=e[10],S=e[11],w=e[12],M=e[13],y=e[14],x=e[15],C=_*y*f-M*v*f+M*h*S-d*y*S-_*h*x+d*v*x,T=w*v*f-m*y*f-w*h*S+u*y*S+m*h*x-u*v*x,L=m*M*f-w*_*f+w*d*S-u*M*S-m*d*x+u*_*x,V=w*_*h-m*M*h-w*d*v+u*M*v+m*d*y-u*_*y,D=t*C+i*T+o*L+a*V;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/D;return e[0]=C*N,e[1]=(M*v*a-_*y*a-M*o*S+i*y*S+_*o*x-i*v*x)*N,e[2]=(d*y*a-M*h*a+M*o*f-i*y*f-d*o*x+i*h*x)*N,e[3]=(_*h*a-d*v*a-_*o*f+i*v*f+d*o*S-i*h*S)*N,e[4]=T*N,e[5]=(m*y*a-w*v*a+w*o*S-t*y*S-m*o*x+t*v*x)*N,e[6]=(w*h*a-u*y*a-w*o*f+t*y*f+u*o*x-t*h*x)*N,e[7]=(u*v*a-m*h*a+m*o*f-t*v*f-u*o*S+t*h*S)*N,e[8]=L*N,e[9]=(w*_*a-m*M*a-w*i*S+t*M*S+m*i*x-t*_*x)*N,e[10]=(u*M*a-w*d*a+w*i*f-t*M*f-u*i*x+t*d*x)*N,e[11]=(m*d*a-u*_*a-m*i*f+t*_*f+u*i*S-t*d*S)*N,e[12]=V*N,e[13]=(m*M*o-w*_*o+w*i*v-t*M*v-m*i*y+t*_*y)*N,e[14]=(w*d*o-u*M*o-w*i*h+t*M*h+u*i*y-t*d*y)*N,e[15]=(u*_*o-m*d*o+m*i*h-t*_*h-u*i*v+t*d*v)*N,this}scale(e){const t=this.elements,i=e.x,o=e.y,a=e.z;return t[0]*=i,t[4]*=o,t[8]*=a,t[1]*=i,t[5]*=o,t[9]*=a,t[2]*=i,t[6]*=o,t[10]*=a,t[3]*=i,t[7]*=o,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,o))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),o=Math.sin(t),a=1-i,u=e.x,d=e.y,h=e.z,f=a*u,m=a*d;return this.set(f*u+i,f*d-o*h,f*h+o*d,0,f*d+o*h,m*d+i,m*h-o*u,0,f*h-o*d,m*h+o*u,a*h*h+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,o,a,u){return this.set(1,i,a,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,i){const o=this.elements,a=t._x,u=t._y,d=t._z,h=t._w,f=a+a,m=u+u,_=d+d,v=a*f,S=a*m,w=a*_,M=u*m,y=u*_,x=d*_,C=h*f,T=h*m,L=h*_,V=i.x,D=i.y,N=i.z;return o[0]=(1-(M+x))*V,o[1]=(S+L)*V,o[2]=(w-T)*V,o[3]=0,o[4]=(S-L)*D,o[5]=(1-(v+x))*D,o[6]=(y+C)*D,o[7]=0,o[8]=(w+T)*N,o[9]=(y-C)*N,o[10]=(1-(v+M))*N,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,i){const o=this.elements;let a=Bs.set(o[0],o[1],o[2]).length();const u=Bs.set(o[4],o[5],o[6]).length(),d=Bs.set(o[8],o[9],o[10]).length();this.determinant()<0&&(a=-a),e.x=o[12],e.y=o[13],e.z=o[14],si.copy(this);const f=1/a,m=1/u,_=1/d;return si.elements[0]*=f,si.elements[1]*=f,si.elements[2]*=f,si.elements[4]*=m,si.elements[5]*=m,si.elements[6]*=m,si.elements[8]*=_,si.elements[9]*=_,si.elements[10]*=_,t.setFromRotationMatrix(si),i.x=a,i.y=u,i.z=d,this}makePerspective(e,t,i,o,a,u,d=zi){const h=this.elements,f=2*a/(t-e),m=2*a/(i-o),_=(t+e)/(t-e),v=(i+o)/(i-o);let S,w;if(d===zi)S=-(u+a)/(u-a),w=-2*u*a/(u-a);else if(d===iu)S=-u/(u-a),w=-u*a/(u-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return h[0]=f,h[4]=0,h[8]=_,h[12]=0,h[1]=0,h[5]=m,h[9]=v,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=w,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,i,o,a,u,d=zi){const h=this.elements,f=1/(t-e),m=1/(i-o),_=1/(u-a),v=(t+e)*f,S=(i+o)*m;let w,M;if(d===zi)w=(u+a)*_,M=-2*_;else if(d===iu)w=a*_,M=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return h[0]=2*f,h[4]=0,h[8]=0,h[12]=-v,h[1]=0,h[5]=2*m,h[9]=0,h[13]=-S,h[2]=0,h[6]=0,h[10]=M,h[14]=-w,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let o=0;o<16;o++)if(t[o]!==i[o])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Bs=new ee,si=new Kt,Wy=new ee(0,0,0),jy=new ee(1,1,1),fr=new ee,Il=new ee,Fn=new ee,Om=new Kt,km=new va;class Hi{constructor(e=0,t=0,i=0,o=Hi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,o=this._order){return this._x=e,this._y=t,this._z=i,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const o=e.elements,a=o[0],u=o[4],d=o[8],h=o[1],f=o[5],m=o[9],_=o[2],v=o[6],S=o[10];switch(t){case"XYZ":this._y=Math.asin(Pn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,S),this._z=Math.atan2(-u,a)):(this._x=Math.atan2(v,f),this._z=0);break;case"YXZ":this._x=Math.asin(-Pn(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(h,f)):(this._y=Math.atan2(-_,a),this._z=0);break;case"ZXY":this._x=Math.asin(Pn(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-_,S),this._z=Math.atan2(-u,f)):(this._y=0,this._z=Math.atan2(h,a));break;case"ZYX":this._y=Math.asin(-Pn(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(h,a)):(this._x=0,this._z=Math.atan2(-u,f));break;case"YZX":this._z=Math.asin(Pn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-m,f),this._y=Math.atan2(-_,a)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-Pn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(v,f),this._y=Math.atan2(d,a)):(this._x=Math.atan2(-m,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Om.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Om,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return km.setFromEuler(this),this.setFromQuaternion(km,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hi.DEFAULT_ORDER="XYZ";class r_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $y=0;const Fm=new ee,zs=new va,Ui=new Kt,Dl=new ee,oa=new ee,Xy=new ee,qy=new va,Bm=new ee(1,0,0),zm=new ee(0,1,0),Hm=new ee(0,0,1),Vm={type:"added"},Yy={type:"removed"},Hs={type:"childadded",child:null},xd={type:"childremoved",child:null};class zn extends yo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$y++}),this.uuid=_a(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zn.DEFAULT_UP.clone();const e=new ee,t=new Hi,i=new va,o=new ee(1,1,1);function a(){i.setFromEuler(t,!1)}function u(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Kt},normalMatrix:{value:new ot}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=zn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new r_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zs.setFromAxisAngle(e,t),this.quaternion.multiply(zs),this}rotateOnWorldAxis(e,t){return zs.setFromAxisAngle(e,t),this.quaternion.premultiply(zs),this}rotateX(e){return this.rotateOnAxis(Bm,e)}rotateY(e){return this.rotateOnAxis(zm,e)}rotateZ(e){return this.rotateOnAxis(Hm,e)}translateOnAxis(e,t){return Fm.copy(e).applyQuaternion(this.quaternion),this.position.add(Fm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Bm,e)}translateY(e){return this.translateOnAxis(zm,e)}translateZ(e){return this.translateOnAxis(Hm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Dl.copy(e):Dl.set(e,t,i);const o=this.parent;this.updateWorldMatrix(!0,!1),oa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(oa,Dl,this.up):Ui.lookAt(Dl,oa,this.up),this.quaternion.setFromRotationMatrix(Ui),o&&(Ui.extractRotation(o.matrixWorld),zs.setFromRotationMatrix(Ui),this.quaternion.premultiply(zs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Vm),Hs.child=e,this.dispatchEvent(Hs),Hs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Yy),xd.child=e,this.dispatchEvent(xd),xd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ui),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Vm),Hs.child=e,this.dispatchEvent(Hs),Hs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,o=this.children.length;i<o;i++){const u=this.children[i].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const o=this.children;for(let a=0,u=o.length;a<u;a++)o[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oa,e,Xy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oa,qy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,o=t.length;i<o;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,o=t.length;i<o;i++){const a=t[i];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const o=this.children;for(let a=0,u=o.length;a<u;a++){const d=o[a];d.matrixWorldAutoUpdate===!0&&d.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),o.maxGeometryCount=this._maxGeometryCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function a(d,h){return d[h.uuid]===void 0&&(d[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=a(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const h=d.shapes;if(Array.isArray(h))for(let f=0,m=h.length;f<m;f++){const _=h[f];a(e.shapes,_)}else a(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let h=0,f=this.material.length;h<f;h++)d.push(a(e.materials,this.material[h]));o.material=d}else o.material=a(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const h=this.animations[d];o.animations.push(a(e.animations,h))}}if(t){const d=u(e.geometries),h=u(e.materials),f=u(e.textures),m=u(e.images),_=u(e.shapes),v=u(e.skeletons),S=u(e.animations),w=u(e.nodes);d.length>0&&(i.geometries=d),h.length>0&&(i.materials=h),f.length>0&&(i.textures=f),m.length>0&&(i.images=m),_.length>0&&(i.shapes=_),v.length>0&&(i.skeletons=v),S.length>0&&(i.animations=S),w.length>0&&(i.nodes=w)}return i.object=o,i;function u(d){const h=[];for(const f in d){const m=d[f];delete m.metadata,h.push(m)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const o=e.children[i];this.add(o.clone())}return this}}zn.DEFAULT_UP=new ee(0,1,0);zn.DEFAULT_MATRIX_AUTO_UPDATE=!0;zn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const oi=new ee,Ni=new ee,Sd=new ee,Oi=new ee,Vs=new ee,Gs=new ee,Gm=new ee,Ed=new ee,wd=new ee,Md=new ee;class vi{constructor(e=new ee,t=new ee,i=new ee){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,o){o.subVectors(i,t),oi.subVectors(e,t),o.cross(oi);const a=o.lengthSq();return a>0?o.multiplyScalar(1/Math.sqrt(a)):o.set(0,0,0)}static getBarycoord(e,t,i,o,a){oi.subVectors(o,t),Ni.subVectors(i,t),Sd.subVectors(e,t);const u=oi.dot(oi),d=oi.dot(Ni),h=oi.dot(Sd),f=Ni.dot(Ni),m=Ni.dot(Sd),_=u*f-d*d;if(_===0)return a.set(0,0,0),null;const v=1/_,S=(f*h-d*m)*v,w=(u*m-d*h)*v;return a.set(1-S-w,w,S)}static containsPoint(e,t,i,o){return this.getBarycoord(e,t,i,o,Oi)===null?!1:Oi.x>=0&&Oi.y>=0&&Oi.x+Oi.y<=1}static getInterpolation(e,t,i,o,a,u,d,h){return this.getBarycoord(e,t,i,o,Oi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(a,Oi.x),h.addScaledVector(u,Oi.y),h.addScaledVector(d,Oi.z),h)}static isFrontFacing(e,t,i,o){return oi.subVectors(i,t),Ni.subVectors(e,t),oi.cross(Ni).dot(o)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,o){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,i,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oi.subVectors(this.c,this.b),Ni.subVectors(this.a,this.b),oi.cross(Ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return vi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,o,a){return vi.getInterpolation(e,this.a,this.b,this.c,t,i,o,a)}containsPoint(e){return vi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,o=this.b,a=this.c;let u,d;Vs.subVectors(o,i),Gs.subVectors(a,i),Ed.subVectors(e,i);const h=Vs.dot(Ed),f=Gs.dot(Ed);if(h<=0&&f<=0)return t.copy(i);wd.subVectors(e,o);const m=Vs.dot(wd),_=Gs.dot(wd);if(m>=0&&_<=m)return t.copy(o);const v=h*_-m*f;if(v<=0&&h>=0&&m<=0)return u=h/(h-m),t.copy(i).addScaledVector(Vs,u);Md.subVectors(e,a);const S=Vs.dot(Md),w=Gs.dot(Md);if(w>=0&&S<=w)return t.copy(a);const M=S*f-h*w;if(M<=0&&f>=0&&w<=0)return d=f/(f-w),t.copy(i).addScaledVector(Gs,d);const y=m*w-S*_;if(y<=0&&_-m>=0&&S-w>=0)return Gm.subVectors(a,o),d=(_-m)/(_-m+(S-w)),t.copy(o).addScaledVector(Gm,d);const x=1/(y+M+v);return u=M*x,d=v*x,t.copy(i).addScaledVector(Vs,u).addScaledVector(Gs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const s_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pr={h:0,s:0,l:0},Ul={h:0,s:0,l:0};function Td(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Et{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,o=Mt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Mt.toWorkingColorSpace(this,o),this}setHSL(e,t,i,o=Mt.workingColorSpace){if(e=Dy(e,1),t=Pn(t,0,1),i=Pn(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,u=2*i-a;this.r=Td(u,a,e+1/3),this.g=Td(u,a,e),this.b=Td(u,a,e-1/3)}return Mt.toWorkingColorSpace(this,o),this}setStyle(e,t=gi){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const u=o[1],d=o[2];switch(u){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=o[1],u=a.length;if(u===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gi){const i=s_[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fo(e.r),this.g=fo(e.g),this.b=fo(e.b),this}copyLinearToSRGB(e){return this.r=hd(e.r),this.g=hd(e.g),this.b=hd(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gi){return Mt.fromWorkingColorSpace(_n.copy(this),e),Math.round(Pn(_n.r*255,0,255))*65536+Math.round(Pn(_n.g*255,0,255))*256+Math.round(Pn(_n.b*255,0,255))}getHexString(e=gi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Mt.workingColorSpace){Mt.fromWorkingColorSpace(_n.copy(this),t);const i=_n.r,o=_n.g,a=_n.b,u=Math.max(i,o,a),d=Math.min(i,o,a);let h,f;const m=(d+u)/2;if(d===u)h=0,f=0;else{const _=u-d;switch(f=m<=.5?_/(u+d):_/(2-u-d),u){case i:h=(o-a)/_+(o<a?6:0);break;case o:h=(a-i)/_+2;break;case a:h=(i-o)/_+4;break}h/=6}return e.h=h,e.s=f,e.l=m,e}getRGB(e,t=Mt.workingColorSpace){return Mt.fromWorkingColorSpace(_n.copy(this),t),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=gi){Mt.fromWorkingColorSpace(_n.copy(this),e);const t=_n.r,i=_n.g,o=_n.b;return e!==gi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(o*255)})`}offsetHSL(e,t,i){return this.getHSL(pr),this.setHSL(pr.h+e,pr.s+t,pr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(pr),e.getHSL(Ul);const i=cd(pr.h,Ul.h,t),o=cd(pr.s,Ul.s,t),a=cd(pr.l,Ul.l,t);return this.setHSL(i,o,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,o=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*o,this.g=a[1]*t+a[4]*i+a[7]*o,this.b=a[2]*t+a[5]*i+a[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _n=new Et;Et.NAMES=s_;let Ky=0;class hu extends yo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ky++}),this.uuid=_a(),this.name="",this.type="Material",this.blending=co,this.side=wr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jd,this.blendDst=$d,this.blendEquation=es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=Ql,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Us,this.stencilZFail=Us,this.stencilZPass=Us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(i):o&&o.isVector3&&i&&i.isVector3?o.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==co&&(i.blending=this.blending),this.side!==wr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==jd&&(i.blendSrc=this.blendSrc),this.blendDst!==$d&&(i.blendDst=this.blendDst),this.blendEquation!==es&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ql&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Us&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Us&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Us&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function o(a){const u=[];for(const d in a){const h=a[d];delete h.metadata,u.push(h)}return u}if(t){const a=o(e.textures),u=o(e.images);a.length>0&&(i.textures=a),u.length>0&&(i.images=u)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const o=t.length;i=new Array(o);for(let a=0;a!==o;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class su extends hu{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.combine=jg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Vt=new ee,Nl=new xt;class xi{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Pm,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=xr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Ny("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let o=0,a=this.itemSize;o<a;o++)this.array[e+o]=t.array[i+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Nl.fromBufferAttribute(this,t),Nl.applyMatrix3(e),this.setXY(t,Nl.x,Nl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix3(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyMatrix4(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.applyNormalMatrix(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Vt.fromBufferAttribute(this,t),Vt.transformDirection(e),this.setXYZ(t,Vt.x,Vt.y,Vt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ia(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Rn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ia(t,this.array)),t}setX(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ia(t,this.array)),t}setY(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ia(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ia(t,this.array)),t}setW(e,t){return this.normalized&&(t=Rn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Rn(t,this.array),i=Rn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,o){return e*=this.itemSize,this.normalized&&(t=Rn(t,this.array),i=Rn(i,this.array),o=Rn(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=o,this}setXYZW(e,t,i,o,a){return e*=this.itemSize,this.normalized&&(t=Rn(t,this.array),i=Rn(i,this.array),o=Rn(o,this.array),a=Rn(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=o,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Pm&&(e.usage=this.usage),e}}class o_ extends xi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class a_ extends xi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Si extends xi{constructor(e,t,i){super(new Float32Array(e),t,i)}}let Jy=0;const Xn=new Kt,bd=new zn,Ws=new ee,Bn=new ya,aa=new ya,sn=new ee;class Ar extends yo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jy++}),this.uuid=_a(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(t_(e)?a_:o_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new ot().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xn.makeRotationFromQuaternion(e),this.applyMatrix4(Xn),this}rotateX(e){return Xn.makeRotationX(e),this.applyMatrix4(Xn),this}rotateY(e){return Xn.makeRotationY(e),this.applyMatrix4(Xn),this}rotateZ(e){return Xn.makeRotationZ(e),this.applyMatrix4(Xn),this}translate(e,t,i){return Xn.makeTranslation(e,t,i),this.applyMatrix4(Xn),this}scale(e,t,i){return Xn.makeScale(e,t,i),this.applyMatrix4(Xn),this}lookAt(e){return bd.lookAt(e),bd.updateMatrix(),this.applyMatrix4(bd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ws).negate(),this.translate(Ws.x,Ws.y,Ws.z),this}setFromPoints(e){const t=[];for(let i=0,o=e.length;i<o;i++){const a=e[i];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new Si(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ya);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ee(-1/0,-1/0,-1/0),new ee(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,o=t.length;i<o;i++){const a=t[i];Bn.setFromBufferAttribute(a),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,Bn.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,Bn.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(Bn.min),this.boundingBox.expandByPoint(Bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fh);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ee,1/0);return}if(e){const i=this.boundingSphere.center;if(Bn.setFromBufferAttribute(e),t)for(let a=0,u=t.length;a<u;a++){const d=t[a];aa.setFromBufferAttribute(d),this.morphTargetsRelative?(sn.addVectors(Bn.min,aa.min),Bn.expandByPoint(sn),sn.addVectors(Bn.max,aa.max),Bn.expandByPoint(sn)):(Bn.expandByPoint(aa.min),Bn.expandByPoint(aa.max))}Bn.getCenter(i);let o=0;for(let a=0,u=e.count;a<u;a++)sn.fromBufferAttribute(e,a),o=Math.max(o,i.distanceToSquared(sn));if(t)for(let a=0,u=t.length;a<u;a++){const d=t[a],h=this.morphTargetsRelative;for(let f=0,m=d.count;f<m;f++)sn.fromBufferAttribute(d,f),h&&(Ws.fromBufferAttribute(e,f),sn.add(Ws)),o=Math.max(o,i.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,o=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new xi(new Float32Array(4*i.count),4));const u=this.getAttribute("tangent"),d=[],h=[];for(let Q=0;Q<i.count;Q++)d[Q]=new ee,h[Q]=new ee;const f=new ee,m=new ee,_=new ee,v=new xt,S=new xt,w=new xt,M=new ee,y=new ee;function x(Q,P,A){f.fromBufferAttribute(i,Q),m.fromBufferAttribute(i,P),_.fromBufferAttribute(i,A),v.fromBufferAttribute(a,Q),S.fromBufferAttribute(a,P),w.fromBufferAttribute(a,A),m.sub(f),_.sub(f),S.sub(v),w.sub(v);const q=1/(S.x*w.y-w.x*S.y);isFinite(q)&&(M.copy(m).multiplyScalar(w.y).addScaledVector(_,-S.y).multiplyScalar(q),y.copy(_).multiplyScalar(S.x).addScaledVector(m,-w.x).multiplyScalar(q),d[Q].add(M),d[P].add(M),d[A].add(M),h[Q].add(y),h[P].add(y),h[A].add(y))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let Q=0,P=C.length;Q<P;++Q){const A=C[Q],q=A.start,se=A.count;for(let z=q,ae=q+se;z<ae;z+=3)x(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const T=new ee,L=new ee,V=new ee,D=new ee;function N(Q){V.fromBufferAttribute(o,Q),D.copy(V);const P=d[Q];T.copy(P),T.sub(V.multiplyScalar(V.dot(P))).normalize(),L.crossVectors(D,P);const q=L.dot(h[Q])<0?-1:1;u.setXYZW(Q,T.x,T.y,T.z,q)}for(let Q=0,P=C.length;Q<P;++Q){const A=C[Q],q=A.start,se=A.count;for(let z=q,ae=q+se;z<ae;z+=3)N(e.getX(z+0)),N(e.getX(z+1)),N(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new xi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let v=0,S=i.count;v<S;v++)i.setXYZ(v,0,0,0);const o=new ee,a=new ee,u=new ee,d=new ee,h=new ee,f=new ee,m=new ee,_=new ee;if(e)for(let v=0,S=e.count;v<S;v+=3){const w=e.getX(v+0),M=e.getX(v+1),y=e.getX(v+2);o.fromBufferAttribute(t,w),a.fromBufferAttribute(t,M),u.fromBufferAttribute(t,y),m.subVectors(u,a),_.subVectors(o,a),m.cross(_),d.fromBufferAttribute(i,w),h.fromBufferAttribute(i,M),f.fromBufferAttribute(i,y),d.add(m),h.add(m),f.add(m),i.setXYZ(w,d.x,d.y,d.z),i.setXYZ(M,h.x,h.y,h.z),i.setXYZ(y,f.x,f.y,f.z)}else for(let v=0,S=t.count;v<S;v+=3)o.fromBufferAttribute(t,v+0),a.fromBufferAttribute(t,v+1),u.fromBufferAttribute(t,v+2),m.subVectors(u,a),_.subVectors(o,a),m.cross(_),i.setXYZ(v+0,m.x,m.y,m.z),i.setXYZ(v+1,m.x,m.y,m.z),i.setXYZ(v+2,m.x,m.y,m.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)sn.fromBufferAttribute(e,t),sn.normalize(),e.setXYZ(t,sn.x,sn.y,sn.z)}toNonIndexed(){function e(d,h){const f=d.array,m=d.itemSize,_=d.normalized,v=new f.constructor(h.length*m);let S=0,w=0;for(let M=0,y=h.length;M<y;M++){d.isInterleavedBufferAttribute?S=h[M]*d.data.stride+d.offset:S=h[M]*m;for(let x=0;x<m;x++)v[w++]=f[S++]}return new xi(v,m,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ar,i=this.index.array,o=this.attributes;for(const d in o){const h=o[d],f=e(h,i);t.setAttribute(d,f)}const a=this.morphAttributes;for(const d in a){const h=[],f=a[d];for(let m=0,_=f.length;m<_;m++){const v=f[m],S=e(v,i);h.push(S)}t.morphAttributes[d]=h}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,h=u.length;d<h;d++){const f=u[d];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const f in h)h[f]!==void 0&&(e[f]=h[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const h in i){const f=i[h];e.data.attributes[h]=f.toJSON(e.data)}const o={};let a=!1;for(const h in this.morphAttributes){const f=this.morphAttributes[h],m=[];for(let _=0,v=f.length;_<v;_++){const S=f[_];m.push(S.toJSON(e.data))}m.length>0&&(o[h]=m,a=!0)}a&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const o=e.attributes;for(const f in o){const m=o[f];this.setAttribute(f,m.clone(t))}const a=e.morphAttributes;for(const f in a){const m=[],_=a[f];for(let v=0,S=_.length;v<S;v++)m.push(_[v].clone(t));this.morphAttributes[f]=m}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let f=0,m=u.length;f<m;f++){const _=u[f];this.addGroup(_.start,_.count,_.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wm=new Kt,jr=new Gy,Ol=new fh,jm=new ee,js=new ee,$s=new ee,Xs=new ee,Ad=new ee,kl=new ee,Fl=new xt,Bl=new xt,zl=new xt,$m=new ee,Xm=new ee,qm=new ee,Hl=new ee,Vl=new ee;class ui extends zn{constructor(e=new Ar,t=new su){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const o=t[i[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,u=o.length;a<u;a++){const d=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=a}}}}getVertexPosition(e,t){const i=this.geometry,o=i.attributes.position,a=i.morphAttributes.position,u=i.morphTargetsRelative;t.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(a&&d){kl.set(0,0,0);for(let h=0,f=a.length;h<f;h++){const m=d[h],_=a[h];m!==0&&(Ad.fromBufferAttribute(_,e),u?kl.addScaledVector(Ad,m):kl.addScaledVector(Ad.sub(t),m))}t.add(kl)}return t}raycast(e,t){const i=this.geometry,o=this.material,a=this.matrixWorld;o!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ol.copy(i.boundingSphere),Ol.applyMatrix4(a),jr.copy(e.ray).recast(e.near),!(Ol.containsPoint(jr.origin)===!1&&(jr.intersectSphere(Ol,jm)===null||jr.origin.distanceToSquared(jm)>(e.far-e.near)**2))&&(Wm.copy(a).invert(),jr.copy(e.ray).applyMatrix4(Wm),!(i.boundingBox!==null&&jr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,jr)))}_computeIntersections(e,t,i){let o;const a=this.geometry,u=this.material,d=a.index,h=a.attributes.position,f=a.attributes.uv,m=a.attributes.uv1,_=a.attributes.normal,v=a.groups,S=a.drawRange;if(d!==null)if(Array.isArray(u))for(let w=0,M=v.length;w<M;w++){const y=v[w],x=u[y.materialIndex],C=Math.max(y.start,S.start),T=Math.min(d.count,Math.min(y.start+y.count,S.start+S.count));for(let L=C,V=T;L<V;L+=3){const D=d.getX(L),N=d.getX(L+1),Q=d.getX(L+2);o=Gl(this,x,e,i,f,m,_,D,N,Q),o&&(o.faceIndex=Math.floor(L/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const w=Math.max(0,S.start),M=Math.min(d.count,S.start+S.count);for(let y=w,x=M;y<x;y+=3){const C=d.getX(y),T=d.getX(y+1),L=d.getX(y+2);o=Gl(this,u,e,i,f,m,_,C,T,L),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}else if(h!==void 0)if(Array.isArray(u))for(let w=0,M=v.length;w<M;w++){const y=v[w],x=u[y.materialIndex],C=Math.max(y.start,S.start),T=Math.min(h.count,Math.min(y.start+y.count,S.start+S.count));for(let L=C,V=T;L<V;L+=3){const D=L,N=L+1,Q=L+2;o=Gl(this,x,e,i,f,m,_,D,N,Q),o&&(o.faceIndex=Math.floor(L/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const w=Math.max(0,S.start),M=Math.min(h.count,S.start+S.count);for(let y=w,x=M;y<x;y+=3){const C=y,T=y+1,L=y+2;o=Gl(this,u,e,i,f,m,_,C,T,L),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}}}function Zy(s,e,t,i,o,a,u,d){let h;if(e.side===Ln?h=i.intersectTriangle(u,a,o,!0,d):h=i.intersectTriangle(o,a,u,e.side===wr,d),h===null)return null;Vl.copy(d),Vl.applyMatrix4(s.matrixWorld);const f=t.ray.origin.distanceTo(Vl);return f<t.near||f>t.far?null:{distance:f,point:Vl.clone(),object:s}}function Gl(s,e,t,i,o,a,u,d,h,f){s.getVertexPosition(d,js),s.getVertexPosition(h,$s),s.getVertexPosition(f,Xs);const m=Zy(s,e,t,i,js,$s,Xs,Hl);if(m){o&&(Fl.fromBufferAttribute(o,d),Bl.fromBufferAttribute(o,h),zl.fromBufferAttribute(o,f),m.uv=vi.getInterpolation(Hl,js,$s,Xs,Fl,Bl,zl,new xt)),a&&(Fl.fromBufferAttribute(a,d),Bl.fromBufferAttribute(a,h),zl.fromBufferAttribute(a,f),m.uv1=vi.getInterpolation(Hl,js,$s,Xs,Fl,Bl,zl,new xt)),u&&($m.fromBufferAttribute(u,d),Xm.fromBufferAttribute(u,h),qm.fromBufferAttribute(u,f),m.normal=vi.getInterpolation(Hl,js,$s,Xs,$m,Xm,qm,new ee),m.normal.dot(i.direction)>0&&m.normal.multiplyScalar(-1));const _={a:d,b:h,c:f,normal:new ee,materialIndex:0};vi.getNormal(js,$s,Xs,_.normal),m.face=_}return m}class xa extends Ar{constructor(e=1,t=1,i=1,o=1,a=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:o,heightSegments:a,depthSegments:u};const d=this;o=Math.floor(o),a=Math.floor(a),u=Math.floor(u);const h=[],f=[],m=[],_=[];let v=0,S=0;w("z","y","x",-1,-1,i,t,e,u,a,0),w("z","y","x",1,-1,i,t,-e,u,a,1),w("x","z","y",1,1,e,i,t,o,u,2),w("x","z","y",1,-1,e,i,-t,o,u,3),w("x","y","z",1,-1,e,t,i,o,a,4),w("x","y","z",-1,-1,e,t,-i,o,a,5),this.setIndex(h),this.setAttribute("position",new Si(f,3)),this.setAttribute("normal",new Si(m,3)),this.setAttribute("uv",new Si(_,2));function w(M,y,x,C,T,L,V,D,N,Q,P){const A=L/N,q=V/Q,se=L/2,z=V/2,ae=D/2,oe=N+1,ge=Q+1;let de=0,F=0;const re=new ee;for(let Y=0;Y<ge;Y++){const O=Y*q-z;for(let ne=0;ne<oe;ne++){const Pe=ne*A-se;re[M]=Pe*C,re[y]=O*T,re[x]=ae,f.push(re.x,re.y,re.z),re[M]=0,re[y]=0,re[x]=D>0?1:-1,m.push(re.x,re.y,re.z),_.push(ne/N),_.push(1-Y/Q),de+=1}}for(let Y=0;Y<Q;Y++)for(let O=0;O<N;O++){const ne=v+O+oe*Y,Pe=v+O+oe*(Y+1),$=v+(O+1)+oe*(Y+1),ue=v+(O+1)+oe*Y;h.push(ne,Pe,ue),h.push(Pe,$,ue),F+=6}d.addGroup(S,F,P),S+=F,v+=de}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _o(s){const e={};for(const t in s){e[t]={};for(const i in s[t]){const o=s[t][i];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=o.clone():Array.isArray(o)?e[t][i]=o.slice():e[t][i]=o}}return e}function xn(s){const e={};for(let t=0;t<s.length;t++){const i=_o(s[t]);for(const o in i)e[o]=i[o]}return e}function Qy(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function l_(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}const ex={clone:_o,merge:xn};var tx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Tr extends hu{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tx,this.fragmentShader=nx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_o(e.uniforms),this.uniformsGroups=Qy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const o in this.extensions)this.extensions[o]===!0&&(i[o]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class u_ extends zn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=zi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const mr=new ee,Ym=new xt,Km=new xt;class Yn extends u_{constructor(e=50,t=1,i=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Jd*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ud*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Jd*2*Math.atan(Math.tan(ud*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){mr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(mr.x,mr.y).multiplyScalar(-e/mr.z),mr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(mr.x,mr.y).multiplyScalar(-e/mr.z)}getViewSize(e,t){return this.getViewBounds(e,Ym,Km),t.subVectors(Km,Ym)}setViewOffset(e,t,i,o,a,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=o,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ud*.5*this.fov)/this.zoom,i=2*t,o=this.aspect*i,a=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,f=u.fullHeight;a+=u.offsetX*o/h,t-=u.offsetY*i/f,o*=u.width/h,i*=u.height/f}const d=this.filmOffset;d!==0&&(a+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+o,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const qs=-90,Ys=1;class ix extends zn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Yn(qs,Ys,e,t);o.layers=this.layers,this.add(o);const a=new Yn(qs,Ys,e,t);a.layers=this.layers,this.add(a);const u=new Yn(qs,Ys,e,t);u.layers=this.layers,this.add(u);const d=new Yn(qs,Ys,e,t);d.layers=this.layers,this.add(d);const h=new Yn(qs,Ys,e,t);h.layers=this.layers,this.add(h);const f=new Yn(qs,Ys,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,o,a,u,d,h]=t;for(const f of t)this.remove(f);if(e===zi)i.up.set(0,1,0),i.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===iu)i.up.set(0,-1,0),i.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,u,d,h,f,m]=this.children,_=e.getRenderTarget(),v=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,o),e.render(t,a),e.setRenderTarget(i,1,o),e.render(t,u),e.setRenderTarget(i,2,o),e.render(t,d),e.setRenderTarget(i,3,o),e.render(t,h),e.setRenderTarget(i,4,o),e.render(t,f),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,o),e.render(t,m),e.setRenderTarget(_,v,S),e.xr.enabled=w,i.texture.needsPMREMUpdate=!0}}class c_ extends In{constructor(e,t,i,o,a,u,d,h,f,m){e=e!==void 0?e:[],t=t!==void 0?t:po,super(e,t,i,o,a,u,d,h,f,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class rx extends os{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},o=[i,i,i,i,i,i];this.texture=new c_(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:li}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new xa(5,5,5),a=new Tr({name:"CubemapFromEquirect",uniforms:_o(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ln,blending:Sr});a.uniforms.tEquirect.value=t;const u=new ui(o,a),d=t.minFilter;return t.minFilter===rs&&(t.minFilter=li),new ix(1,10,this).update(e,u),t.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,t,i,o){const a=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,i,o);e.setRenderTarget(a)}}const Rd=new ee,sx=new ee,ox=new ot;class Jr{constructor(e=new ee(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,o){return this.normal.set(e,t,i),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const o=Rd.subVectors(i,t).cross(sx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Rd),o=this.normal.dot(i);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/o;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||ox.getNormalMatrix(e),o=this.coplanarPoint(Rd).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-o.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $r=new fh,Wl=new ee;class d_{constructor(e=new Jr,t=new Jr,i=new Jr,o=new Jr,a=new Jr,u=new Jr){this.planes=[e,t,i,o,a,u]}set(e,t,i,o,a,u){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(i),d[3].copy(o),d[4].copy(a),d[5].copy(u),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=zi){const i=this.planes,o=e.elements,a=o[0],u=o[1],d=o[2],h=o[3],f=o[4],m=o[5],_=o[6],v=o[7],S=o[8],w=o[9],M=o[10],y=o[11],x=o[12],C=o[13],T=o[14],L=o[15];if(i[0].setComponents(h-a,v-f,y-S,L-x).normalize(),i[1].setComponents(h+a,v+f,y+S,L+x).normalize(),i[2].setComponents(h+u,v+m,y+w,L+C).normalize(),i[3].setComponents(h-u,v-m,y-w,L-C).normalize(),i[4].setComponents(h-d,v-_,y-M,L-T).normalize(),t===zi)i[5].setComponents(h+d,v+_,y+M,L+T).normalize();else if(t===iu)i[5].setComponents(d,_,M,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$r.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),$r.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($r)}intersectsSprite(e){return $r.center.set(0,0,0),$r.radius=.7071067811865476,$r.applyMatrix4(e.matrixWorld),this.intersectsSphere($r)}intersectsSphere(e){const t=this.planes,i=e.center,o=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const o=t[i];if(Wl.x=o.normal.x>0?e.max.x:e.min.x,Wl.y=o.normal.y>0?e.max.y:e.min.y,Wl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Wl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function h_(){let s=null,e=!1,t=null,i=null;function o(a,u){t(a,u),i=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(i=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){s=a}}}function ax(s){const e=new WeakMap;function t(d,h){const f=d.array,m=d.usage,_=f.byteLength,v=s.createBuffer();s.bindBuffer(h,v),s.bufferData(h,f,m),d.onUploadCallback();let S;if(f instanceof Float32Array)S=s.FLOAT;else if(f instanceof Uint16Array)d.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(f instanceof Int16Array)S=s.SHORT;else if(f instanceof Uint32Array)S=s.UNSIGNED_INT;else if(f instanceof Int32Array)S=s.INT;else if(f instanceof Int8Array)S=s.BYTE;else if(f instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:v,type:S,bytesPerElement:f.BYTES_PER_ELEMENT,version:d.version,size:_}}function i(d,h,f){const m=h.array,_=h._updateRange,v=h.updateRanges;if(s.bindBuffer(f,d),_.count===-1&&v.length===0&&s.bufferSubData(f,0,m),v.length!==0){for(let S=0,w=v.length;S<w;S++){const M=v[S];s.bufferSubData(f,M.start*m.BYTES_PER_ELEMENT,m,M.start,M.count)}h.clearUpdateRanges()}_.count!==-1&&(s.bufferSubData(f,_.offset*m.BYTES_PER_ELEMENT,m,_.offset,_.count),_.count=-1),h.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function a(d){d.isInterleavedBufferAttribute&&(d=d.data);const h=e.get(d);h&&(s.deleteBuffer(h.buffer),e.delete(d))}function u(d,h){if(d.isGLBufferAttribute){const m=e.get(d);(!m||m.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}d.isInterleavedBufferAttribute&&(d=d.data);const f=e.get(d);if(f===void 0)e.set(d,t(d,h));else if(f.version<d.version){if(f.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(f.buffer,d,h),f.version=d.version}}return{get:o,remove:a,update:u}}class fu extends Ar{constructor(e=1,t=1,i=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:o};const a=e/2,u=t/2,d=Math.floor(i),h=Math.floor(o),f=d+1,m=h+1,_=e/d,v=t/h,S=[],w=[],M=[],y=[];for(let x=0;x<m;x++){const C=x*v-u;for(let T=0;T<f;T++){const L=T*_-a;w.push(L,-C,0),M.push(0,0,1),y.push(T/d),y.push(1-x/h)}}for(let x=0;x<h;x++)for(let C=0;C<d;C++){const T=C+f*x,L=C+f*(x+1),V=C+1+f*(x+1),D=C+1+f*x;S.push(T,L,D),S.push(L,V,D)}this.setIndex(S),this.setAttribute("position",new Si(w,3)),this.setAttribute("normal",new Si(M,3)),this.setAttribute("uv",new Si(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fu(e.width,e.height,e.widthSegments,e.heightSegments)}}var lx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ux=`#ifdef USE_ALPHAHASH
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
#endif`,cx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,px=`#ifdef USE_AOMAP
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
#endif`,mx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gx=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,_x=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,vx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Sx=`#ifdef USE_IRIDESCENCE
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
#endif`,Ex=`#ifdef USE_BUMPMAP
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
#endif`,wx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Mx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ax=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Rx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Cx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Px=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Lx=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,Ix=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Dx=`vec3 transformedNormal = objectNormal;
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
#endif`,Ux=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Nx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ox=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bx=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,zx=`#ifdef USE_ENVMAP
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
#endif`,Hx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Vx=`#ifdef USE_ENVMAP
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
#endif`,Gx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wx=`#ifdef USE_ENVMAP
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
#endif`,jx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$x=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yx=`#ifdef USE_GRADIENTMAP
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
}`,Kx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qx=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,eS=`#ifdef USE_ENVMAP
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
#endif`,tS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,iS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sS=`PhysicalMaterial material;
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
#endif`,oS=`struct PhysicalMaterial {
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
}`,aS=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,lS=`#if defined( RE_IndirectDiffuse )
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
#endif`,uS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,pS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_S=`#if defined( USE_POINTS_UV )
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
#endif`,vS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,SS=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ES=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,wS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
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
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,MS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,TS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,bS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,AS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,RS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,CS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,PS=`#ifdef USE_NORMALMAP
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
#endif`,LS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,IS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,DS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,US=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,NS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,OS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,kS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,FS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,BS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,HS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,VS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,GS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
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
		return shadow;
	}
#endif`,WS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,jS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$S=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,XS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qS=`#ifdef USE_SKINNING
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
#endif`,YS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,KS=`#ifdef USE_SKINNING
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
#endif`,JS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ZS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,QS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,eE=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tE=`#ifdef USE_TRANSMISSION
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
#endif`,nE=`#ifdef USE_TRANSMISSION
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
#endif`,iE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const aE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lE=`uniform sampler2D t2D;
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
}`,uE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,dE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fE=`#include <common>
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
}`,pE=`#if DEPTH_PACKING == 3200
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
	#endif
}`,mE=`#define DISTANCE
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
}`,gE=`#define DISTANCE
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
}`,_E=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yE=`uniform float scale;
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
}`,xE=`uniform vec3 diffuse;
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
}`,SE=`#include <common>
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
}`,EE=`uniform vec3 diffuse;
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
}`,wE=`#define LAMBERT
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
}`,ME=`#define LAMBERT
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
}`,TE=`#define MATCAP
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
}`,bE=`#define MATCAP
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
}`,AE=`#define NORMAL
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
}`,RE=`#define NORMAL
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
}`,CE=`#define PHONG
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
}`,PE=`#define PHONG
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
}`,LE=`#define STANDARD
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
}`,IE=`#define STANDARD
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
}`,DE=`#define TOON
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
}`,UE=`#define TOON
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
}`,NE=`uniform float size;
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
}`,OE=`uniform vec3 diffuse;
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
}`,kE=`#include <common>
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
}`,FE=`uniform vec3 color;
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
}`,BE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,zE=`uniform vec3 diffuse;
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
}`,st={alphahash_fragment:lx,alphahash_pars_fragment:ux,alphamap_fragment:cx,alphamap_pars_fragment:dx,alphatest_fragment:hx,alphatest_pars_fragment:fx,aomap_fragment:px,aomap_pars_fragment:mx,batching_pars_vertex:gx,batching_vertex:_x,begin_vertex:vx,beginnormal_vertex:yx,bsdfs:xx,iridescence_fragment:Sx,bumpmap_pars_fragment:Ex,clipping_planes_fragment:wx,clipping_planes_pars_fragment:Mx,clipping_planes_pars_vertex:Tx,clipping_planes_vertex:bx,color_fragment:Ax,color_pars_fragment:Rx,color_pars_vertex:Cx,color_vertex:Px,common:Lx,cube_uv_reflection_fragment:Ix,defaultnormal_vertex:Dx,displacementmap_pars_vertex:Ux,displacementmap_vertex:Nx,emissivemap_fragment:Ox,emissivemap_pars_fragment:kx,colorspace_fragment:Fx,colorspace_pars_fragment:Bx,envmap_fragment:zx,envmap_common_pars_fragment:Hx,envmap_pars_fragment:Vx,envmap_pars_vertex:Gx,envmap_physical_pars_fragment:eS,envmap_vertex:Wx,fog_vertex:jx,fog_pars_vertex:$x,fog_fragment:Xx,fog_pars_fragment:qx,gradientmap_pars_fragment:Yx,lightmap_pars_fragment:Kx,lights_lambert_fragment:Jx,lights_lambert_pars_fragment:Zx,lights_pars_begin:Qx,lights_toon_fragment:tS,lights_toon_pars_fragment:nS,lights_phong_fragment:iS,lights_phong_pars_fragment:rS,lights_physical_fragment:sS,lights_physical_pars_fragment:oS,lights_fragment_begin:aS,lights_fragment_maps:lS,lights_fragment_end:uS,logdepthbuf_fragment:cS,logdepthbuf_pars_fragment:dS,logdepthbuf_pars_vertex:hS,logdepthbuf_vertex:fS,map_fragment:pS,map_pars_fragment:mS,map_particle_fragment:gS,map_particle_pars_fragment:_S,metalnessmap_fragment:vS,metalnessmap_pars_fragment:yS,morphinstance_vertex:xS,morphcolor_vertex:SS,morphnormal_vertex:ES,morphtarget_pars_vertex:wS,morphtarget_vertex:MS,normal_fragment_begin:TS,normal_fragment_maps:bS,normal_pars_fragment:AS,normal_pars_vertex:RS,normal_vertex:CS,normalmap_pars_fragment:PS,clearcoat_normal_fragment_begin:LS,clearcoat_normal_fragment_maps:IS,clearcoat_pars_fragment:DS,iridescence_pars_fragment:US,opaque_fragment:NS,packing:OS,premultiplied_alpha_fragment:kS,project_vertex:FS,dithering_fragment:BS,dithering_pars_fragment:zS,roughnessmap_fragment:HS,roughnessmap_pars_fragment:VS,shadowmap_pars_fragment:GS,shadowmap_pars_vertex:WS,shadowmap_vertex:jS,shadowmask_pars_fragment:$S,skinbase_vertex:XS,skinning_pars_vertex:qS,skinning_vertex:YS,skinnormal_vertex:KS,specularmap_fragment:JS,specularmap_pars_fragment:ZS,tonemapping_fragment:QS,tonemapping_pars_fragment:eE,transmission_fragment:tE,transmission_pars_fragment:nE,uv_pars_fragment:iE,uv_pars_vertex:rE,uv_vertex:sE,worldpos_vertex:oE,background_vert:aE,background_frag:lE,backgroundCube_vert:uE,backgroundCube_frag:cE,cube_vert:dE,cube_frag:hE,depth_vert:fE,depth_frag:pE,distanceRGBA_vert:mE,distanceRGBA_frag:gE,equirect_vert:_E,equirect_frag:vE,linedashed_vert:yE,linedashed_frag:xE,meshbasic_vert:SE,meshbasic_frag:EE,meshlambert_vert:wE,meshlambert_frag:ME,meshmatcap_vert:TE,meshmatcap_frag:bE,meshnormal_vert:AE,meshnormal_frag:RE,meshphong_vert:CE,meshphong_frag:PE,meshphysical_vert:LE,meshphysical_frag:IE,meshtoon_vert:DE,meshtoon_frag:UE,points_vert:NE,points_frag:OE,shadow_vert:kE,shadow_frag:FE,sprite_vert:BE,sprite_frag:zE},be={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},_i={basic:{uniforms:xn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:xn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Et(0)}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:xn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:xn([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:xn([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new Et(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:xn([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:xn([be.points,be.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:xn([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:xn([be.common,be.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:xn([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:xn([be.sprite,be.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distanceRGBA:{uniforms:xn([be.common,be.displacementmap,{referencePosition:{value:new ee},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distanceRGBA_vert,fragmentShader:st.distanceRGBA_frag},shadow:{uniforms:xn([be.lights,be.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};_i.physical={uniforms:xn([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};const jl={r:0,b:0,g:0},Xr=new Hi,HE=new Kt;function VE(s,e,t,i,o,a,u){const d=new Et(0);let h=a===!0?0:1,f,m,_=null,v=0,S=null;function w(C){let T=C.isScene===!0?C.background:null;return T&&T.isTexture&&(T=(C.backgroundBlurriness>0?t:e).get(T)),T}function M(C){let T=!1;const L=w(C);L===null?x(d,h):L&&L.isColor&&(x(L,1),T=!0);const V=s.xr.getEnvironmentBlendMode();V==="additive"?i.buffers.color.setClear(0,0,0,1,u):V==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,u),(s.autoClear||T)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil)}function y(C,T){const L=w(T);L&&(L.isCubeTexture||L.mapping===uu)?(m===void 0&&(m=new ui(new xa(1,1,1),new Tr({name:"BackgroundCubeMaterial",uniforms:_o(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(V,D,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(m)),Xr.copy(T.backgroundRotation),Xr.x*=-1,Xr.y*=-1,Xr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Xr.y*=-1,Xr.z*=-1),m.material.uniforms.envMap.value=L,m.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(HE.makeRotationFromEuler(Xr)),m.material.toneMapped=Mt.getTransfer(L.colorSpace)!==Dt,(_!==L||v!==L.version||S!==s.toneMapping)&&(m.material.needsUpdate=!0,_=L,v=L.version,S=s.toneMapping),m.layers.enableAll(),C.unshift(m,m.geometry,m.material,0,0,null)):L&&L.isTexture&&(f===void 0&&(f=new ui(new fu(2,2),new Tr({name:"BackgroundMaterial",uniforms:_o(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:wr,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(f)),f.material.uniforms.t2D.value=L,f.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,f.material.toneMapped=Mt.getTransfer(L.colorSpace)!==Dt,L.matrixAutoUpdate===!0&&L.updateMatrix(),f.material.uniforms.uvTransform.value.copy(L.matrix),(_!==L||v!==L.version||S!==s.toneMapping)&&(f.material.needsUpdate=!0,_=L,v=L.version,S=s.toneMapping),f.layers.enableAll(),C.unshift(f,f.geometry,f.material,0,0,null))}function x(C,T){C.getRGB(jl,l_(s)),i.buffers.color.setClear(jl.r,jl.g,jl.b,T,u)}return{getClearColor:function(){return d},setClearColor:function(C,T=1){d.set(C),h=T,x(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(C){h=C,x(d,h)},render:M,addToRenderList:y}}function GE(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},o=v(null);let a=o,u=!1;function d(A,q,se,z,ae){let oe=!1;const ge=_(z,se,q);a!==ge&&(a=ge,f(a.object)),oe=S(A,z,se,ae),oe&&w(A,z,se,ae),ae!==null&&e.update(ae,s.ELEMENT_ARRAY_BUFFER),(oe||u)&&(u=!1,L(A,q,se,z),ae!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ae).buffer))}function h(){return s.createVertexArray()}function f(A){return s.bindVertexArray(A)}function m(A){return s.deleteVertexArray(A)}function _(A,q,se){const z=se.wireframe===!0;let ae=i[A.id];ae===void 0&&(ae={},i[A.id]=ae);let oe=ae[q.id];oe===void 0&&(oe={},ae[q.id]=oe);let ge=oe[z];return ge===void 0&&(ge=v(h()),oe[z]=ge),ge}function v(A){const q=[],se=[],z=[];for(let ae=0;ae<t;ae++)q[ae]=0,se[ae]=0,z[ae]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:se,attributeDivisors:z,object:A,attributes:{},index:null}}function S(A,q,se,z){const ae=a.attributes,oe=q.attributes;let ge=0;const de=se.getAttributes();for(const F in de)if(de[F].location>=0){const Y=ae[F];let O=oe[F];if(O===void 0&&(F==="instanceMatrix"&&A.instanceMatrix&&(O=A.instanceMatrix),F==="instanceColor"&&A.instanceColor&&(O=A.instanceColor)),Y===void 0||Y.attribute!==O||O&&Y.data!==O.data)return!0;ge++}return a.attributesNum!==ge||a.index!==z}function w(A,q,se,z){const ae={},oe=q.attributes;let ge=0;const de=se.getAttributes();for(const F in de)if(de[F].location>=0){let Y=oe[F];Y===void 0&&(F==="instanceMatrix"&&A.instanceMatrix&&(Y=A.instanceMatrix),F==="instanceColor"&&A.instanceColor&&(Y=A.instanceColor));const O={};O.attribute=Y,Y&&Y.data&&(O.data=Y.data),ae[F]=O,ge++}a.attributes=ae,a.attributesNum=ge,a.index=z}function M(){const A=a.newAttributes;for(let q=0,se=A.length;q<se;q++)A[q]=0}function y(A){x(A,0)}function x(A,q){const se=a.newAttributes,z=a.enabledAttributes,ae=a.attributeDivisors;se[A]=1,z[A]===0&&(s.enableVertexAttribArray(A),z[A]=1),ae[A]!==q&&(s.vertexAttribDivisor(A,q),ae[A]=q)}function C(){const A=a.newAttributes,q=a.enabledAttributes;for(let se=0,z=q.length;se<z;se++)q[se]!==A[se]&&(s.disableVertexAttribArray(se),q[se]=0)}function T(A,q,se,z,ae,oe,ge){ge===!0?s.vertexAttribIPointer(A,q,se,ae,oe):s.vertexAttribPointer(A,q,se,z,ae,oe)}function L(A,q,se,z){M();const ae=z.attributes,oe=se.getAttributes(),ge=q.defaultAttributeValues;for(const de in oe){const F=oe[de];if(F.location>=0){let re=ae[de];if(re===void 0&&(de==="instanceMatrix"&&A.instanceMatrix&&(re=A.instanceMatrix),de==="instanceColor"&&A.instanceColor&&(re=A.instanceColor)),re!==void 0){const Y=re.normalized,O=re.itemSize,ne=e.get(re);if(ne===void 0)continue;const Pe=ne.buffer,$=ne.type,ue=ne.bytesPerElement,xe=$===s.INT||$===s.UNSIGNED_INT||re.gpuType===qg;if(re.isInterleavedBufferAttribute){const me=re.data,De=me.stride,Fe=re.offset;if(me.isInstancedInterleavedBuffer){for(let W=0;W<F.locationSize;W++)x(F.location+W,me.meshPerAttribute);A.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let W=0;W<F.locationSize;W++)y(F.location+W);s.bindBuffer(s.ARRAY_BUFFER,Pe);for(let W=0;W<F.locationSize;W++)T(F.location+W,O/F.locationSize,$,Y,De*ue,(Fe+O/F.locationSize*W)*ue,xe)}else{if(re.isInstancedBufferAttribute){for(let me=0;me<F.locationSize;me++)x(F.location+me,re.meshPerAttribute);A.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let me=0;me<F.locationSize;me++)y(F.location+me);s.bindBuffer(s.ARRAY_BUFFER,Pe);for(let me=0;me<F.locationSize;me++)T(F.location+me,O/F.locationSize,$,Y,O*ue,O/F.locationSize*me*ue,xe)}}else if(ge!==void 0){const Y=ge[de];if(Y!==void 0)switch(Y.length){case 2:s.vertexAttrib2fv(F.location,Y);break;case 3:s.vertexAttrib3fv(F.location,Y);break;case 4:s.vertexAttrib4fv(F.location,Y);break;default:s.vertexAttrib1fv(F.location,Y)}}}}C()}function V(){Q();for(const A in i){const q=i[A];for(const se in q){const z=q[se];for(const ae in z)m(z[ae].object),delete z[ae];delete q[se]}delete i[A]}}function D(A){if(i[A.id]===void 0)return;const q=i[A.id];for(const se in q){const z=q[se];for(const ae in z)m(z[ae].object),delete z[ae];delete q[se]}delete i[A.id]}function N(A){for(const q in i){const se=i[q];if(se[A.id]===void 0)continue;const z=se[A.id];for(const ae in z)m(z[ae].object),delete z[ae];delete se[A.id]}}function Q(){P(),u=!0,a!==o&&(a=o,f(a.object))}function P(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:Q,resetDefaultState:P,dispose:V,releaseStatesOfGeometry:D,releaseStatesOfProgram:N,initAttributes:M,enableAttribute:y,disableUnusedAttributes:C}}function WE(s,e,t){let i;function o(f){i=f}function a(f,m){s.drawArrays(i,f,m),t.update(m,i,1)}function u(f,m,_){_!==0&&(s.drawArraysInstanced(i,f,m,_),t.update(m,i,_))}function d(f,m,_){if(_===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let S=0;S<_;S++)this.render(f[S],m[S]);else{v.multiDrawArraysWEBGL(i,f,0,m,0,_);let S=0;for(let w=0;w<_;w++)S+=m[w];t.update(S,i,1)}}function h(f,m,_,v){if(_===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let w=0;w<f.length;w++)u(f[w],m[w],v[w]);else{S.multiDrawArraysInstancedWEBGL(i,f,0,m,0,v,0,_);let w=0;for(let M=0;M<_;M++)w+=m[M];for(let M=0;M<v.length;M++)t.update(w,i,v[M])}}this.setMode=o,this.render=a,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function jE(s,e,t,i){let o;function a(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(D){return!(D!==yi&&i.convert(D)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(D){const N=D===cu&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==Mr&&i.convert(D)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==xr&&!N)}function h(D){if(D==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=t.precision!==void 0?t.precision:"highp";const m=h(f);m!==f&&(console.warn("THREE.WebGLRenderer:",f,"not supported, using",m,"instead."),f=m);const _=t.logarithmicDepthBuffer===!0,v=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),S=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_TEXTURE_SIZE),M=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),y=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),C=s.getParameter(s.MAX_VARYING_VECTORS),T=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),L=S>0,V=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:d,precision:f,logarithmicDepthBuffer:_,maxTextures:v,maxVertexTextures:S,maxTextureSize:w,maxCubemapSize:M,maxAttributes:y,maxVertexUniforms:x,maxVaryings:C,maxFragmentUniforms:T,vertexTextures:L,maxSamples:V}}function $E(s){const e=this;let t=null,i=0,o=!1,a=!1;const u=new Jr,d=new ot,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(_,v){const S=_.length!==0||v||i!==0||o;return o=v,i=_.length,S},this.beginShadows=function(){a=!0,m(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(_,v){t=m(_,v,0)},this.setState=function(_,v,S){const w=_.clippingPlanes,M=_.clipIntersection,y=_.clipShadows,x=s.get(_);if(!o||w===null||w.length===0||a&&!y)a?m(null):f();else{const C=a?0:i,T=C*4;let L=x.clippingState||null;h.value=L,L=m(w,v,T,S);for(let V=0;V!==T;++V)L[V]=t[V];x.clippingState=L,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=C}};function f(){h.value!==t&&(h.value=t,h.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function m(_,v,S,w){const M=_!==null?_.length:0;let y=null;if(M!==0){if(y=h.value,w!==!0||y===null){const x=S+M*4,C=v.matrixWorldInverse;d.getNormalMatrix(C),(y===null||y.length<x)&&(y=new Float32Array(x));for(let T=0,L=S;T!==M;++T,L+=4)u.copy(_[T]).applyMatrix4(C,d),u.normal.toArray(y,L),y[L+3]=u.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,y}}function XE(s){let e=new WeakMap;function t(u,d){return d===Xd?u.mapping=po:d===qd&&(u.mapping=mo),u}function i(u){if(u&&u.isTexture){const d=u.mapping;if(d===Xd||d===qd)if(e.has(u)){const h=e.get(u).texture;return t(h,u.mapping)}else{const h=u.image;if(h&&h.height>0){const f=new rx(h.height);return f.fromEquirectangularTexture(s,u),e.set(u,f),u.addEventListener("dispose",o),t(f.texture,u.mapping)}else return null}}return u}function o(u){const d=u.target;d.removeEventListener("dispose",o);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class qE extends u_{constructor(e=-1,t=1,i=1,o=-1,a=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=o,this.near=a,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,o,a,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=o,this.view.width=a,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let a=i-e,u=i+e,d=o+t,h=o-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=f*this.view.offsetX,u=a+f*this.view.width,d-=m*this.view.offsetY,h=d-m*this.view.height}this.projectionMatrix.makeOrthographic(a,u,d,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const uo=4,Jm=[.125,.215,.35,.446,.526,.582],ts=20,Cd=new qE,Zm=new Et;let Pd=null,Ld=0,Id=0,Dd=!1;const Zr=(1+Math.sqrt(5))/2,Ks=1/Zr,Qm=[new ee(-Zr,Ks,0),new ee(Zr,Ks,0),new ee(-Ks,0,Zr),new ee(Ks,0,Zr),new ee(0,Zr,-Ks),new ee(0,Zr,Ks),new ee(-1,1,-1),new ee(1,1,-1),new ee(-1,1,1),new ee(1,1,1)];class eg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,o=100){Pd=this._renderer.getRenderTarget(),Ld=this._renderer.getActiveCubeFace(),Id=this._renderer.getActiveMipmapLevel(),Dd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,o,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ig(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ng(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Pd,Ld,Id),this._renderer.xr.enabled=Dd,e.scissorTest=!1,$l(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===po||e.mapping===mo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Pd=this._renderer.getRenderTarget(),Ld=this._renderer.getActiveCubeFace(),Id=this._renderer.getActiveMipmapLevel(),Dd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:li,minFilter:li,generateMipmaps:!1,type:cu,format:yi,colorSpace:br,depthBuffer:!1},o=tg(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tg(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=YE(a)),this._blurMaterial=KE(a,e,t)}return o}_compileMaterial(e){const t=new ui(this._lodPlanes[0],e);this._renderer.compile(t,Cd)}_sceneToCubeUV(e,t,i,o){const d=new Yn(90,1,t,i),h=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],m=this._renderer,_=m.autoClear,v=m.toneMapping;m.getClearColor(Zm),m.toneMapping=Er,m.autoClear=!1;const S=new su({name:"PMREM.Background",side:Ln,depthWrite:!1,depthTest:!1}),w=new ui(new xa,S);let M=!1;const y=e.background;y?y.isColor&&(S.color.copy(y),e.background=null,M=!0):(S.color.copy(Zm),M=!0);for(let x=0;x<6;x++){const C=x%3;C===0?(d.up.set(0,h[x],0),d.lookAt(f[x],0,0)):C===1?(d.up.set(0,0,h[x]),d.lookAt(0,f[x],0)):(d.up.set(0,h[x],0),d.lookAt(0,0,f[x]));const T=this._cubeSize;$l(o,C*T,x>2?T:0,T,T),m.setRenderTarget(o),M&&m.render(w,d),m.render(e,d)}w.geometry.dispose(),w.material.dispose(),m.toneMapping=v,m.autoClear=_,e.background=y}_textureToCubeUV(e,t){const i=this._renderer,o=e.mapping===po||e.mapping===mo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=ig()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ng());const a=o?this._cubemapMaterial:this._equirectMaterial,u=new ui(this._lodPlanes[0],a),d=a.uniforms;d.envMap.value=e;const h=this._cubeSize;$l(t,0,0,3*h,2*h),i.setRenderTarget(t),i.render(u,Cd)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let a=1;a<o;a++){const u=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),d=Qm[(o-a-1)%Qm.length];this._blur(e,a-1,a,u,d)}t.autoClear=i}_blur(e,t,i,o,a){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,i,o,"latitudinal",a),this._halfBlur(u,e,i,i,o,"longitudinal",a)}_halfBlur(e,t,i,o,a,u,d){const h=this._renderer,f=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,_=new ui(this._lodPlanes[o],f),v=f.uniforms,S=this._sizeLods[i]-1,w=isFinite(a)?Math.PI/(2*S):2*Math.PI/(2*ts-1),M=a/w,y=isFinite(a)?1+Math.floor(m*M):ts;y>ts&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${ts}`);const x=[];let C=0;for(let N=0;N<ts;++N){const Q=N/M,P=Math.exp(-Q*Q/2);x.push(P),N===0?C+=P:N<y&&(C+=2*P)}for(let N=0;N<x.length;N++)x[N]=x[N]/C;v.envMap.value=e.texture,v.samples.value=y,v.weights.value=x,v.latitudinal.value=u==="latitudinal",d&&(v.poleAxis.value=d);const{_lodMax:T}=this;v.dTheta.value=w,v.mipInt.value=T-i;const L=this._sizeLods[o],V=3*L*(o>T-uo?o-T+uo:0),D=4*(this._cubeSize-L);$l(t,V,D,3*L,2*L),h.setRenderTarget(t),h.render(_,Cd)}}function YE(s){const e=[],t=[],i=[];let o=s;const a=s-uo+1+Jm.length;for(let u=0;u<a;u++){const d=Math.pow(2,o);t.push(d);let h=1/d;u>s-uo?h=Jm[u-s+uo-1]:u===0&&(h=0),i.push(h);const f=1/(d-2),m=-f,_=1+f,v=[m,m,_,m,_,_,m,m,_,_,m,_],S=6,w=6,M=3,y=2,x=1,C=new Float32Array(M*w*S),T=new Float32Array(y*w*S),L=new Float32Array(x*w*S);for(let D=0;D<S;D++){const N=D%3*2/3-1,Q=D>2?0:-1,P=[N,Q,0,N+2/3,Q,0,N+2/3,Q+1,0,N,Q,0,N+2/3,Q+1,0,N,Q+1,0];C.set(P,M*w*D),T.set(v,y*w*D);const A=[D,D,D,D,D,D];L.set(A,x*w*D)}const V=new Ar;V.setAttribute("position",new xi(C,M)),V.setAttribute("uv",new xi(T,y)),V.setAttribute("faceIndex",new xi(L,x)),e.push(V),o>uo&&o--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function tg(s,e,t){const i=new os(s,e,t);return i.texture.mapping=uu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function $l(s,e,t,i,o){s.viewport.set(e,t,i,o),s.scissor.set(e,t,i,o)}function KE(s,e,t){const i=new Float32Array(ts),o=new ee(0,1,0);return new Tr({name:"SphericalGaussianBlur",defines:{n:ts,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:ph(),fragmentShader:`

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
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function ng(){return new Tr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ph(),fragmentShader:`

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
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function ig(){return new Tr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ph(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sr,depthTest:!1,depthWrite:!1})}function ph(){return`

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
	`}function JE(s){let e=new WeakMap,t=null;function i(d){if(d&&d.isTexture){const h=d.mapping,f=h===Xd||h===qd,m=h===po||h===mo;if(f||m){let _=e.get(d);const v=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==v)return t===null&&(t=new eg(s)),_=f?t.fromEquirectangular(d,_):t.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),_.texture;if(_!==void 0)return _.texture;{const S=d.image;return f&&S&&S.height>0||m&&S&&o(S)?(t===null&&(t=new eg(s)),_=f?t.fromEquirectangular(d):t.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),d.addEventListener("dispose",a),_.texture):null}}}return d}function o(d){let h=0;const f=6;for(let m=0;m<f;m++)d[m]!==void 0&&h++;return h===f}function a(d){const h=d.target;h.removeEventListener("dispose",a);const f=e.get(h);f!==void 0&&(e.delete(h),f.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:u}}function ZE(s){const e={};function t(i){if(e[i]!==void 0)return e[i];let o;switch(i){case"WEBGL_depth_texture":o=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=s.getExtension(i)}return e[i]=o,o}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const o=t(i);return o===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),o}}}function QE(s,e,t,i){const o={},a=new WeakMap;function u(_){const v=_.target;v.index!==null&&e.remove(v.index);for(const w in v.attributes)e.remove(v.attributes[w]);for(const w in v.morphAttributes){const M=v.morphAttributes[w];for(let y=0,x=M.length;y<x;y++)e.remove(M[y])}v.removeEventListener("dispose",u),delete o[v.id];const S=a.get(v);S&&(e.remove(S),a.delete(v)),i.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function d(_,v){return o[v.id]===!0||(v.addEventListener("dispose",u),o[v.id]=!0,t.memory.geometries++),v}function h(_){const v=_.attributes;for(const w in v)e.update(v[w],s.ARRAY_BUFFER);const S=_.morphAttributes;for(const w in S){const M=S[w];for(let y=0,x=M.length;y<x;y++)e.update(M[y],s.ARRAY_BUFFER)}}function f(_){const v=[],S=_.index,w=_.attributes.position;let M=0;if(S!==null){const C=S.array;M=S.version;for(let T=0,L=C.length;T<L;T+=3){const V=C[T+0],D=C[T+1],N=C[T+2];v.push(V,D,D,N,N,V)}}else if(w!==void 0){const C=w.array;M=w.version;for(let T=0,L=C.length/3-1;T<L;T+=3){const V=T+0,D=T+1,N=T+2;v.push(V,D,D,N,N,V)}}else return;const y=new(t_(v)?a_:o_)(v,1);y.version=M;const x=a.get(_);x&&e.remove(x),a.set(_,y)}function m(_){const v=a.get(_);if(v){const S=_.index;S!==null&&v.version<S.version&&f(_)}else f(_);return a.get(_)}return{get:d,update:h,getWireframeAttribute:m}}function ew(s,e,t){let i;function o(v){i=v}let a,u;function d(v){a=v.type,u=v.bytesPerElement}function h(v,S){s.drawElements(i,S,a,v*u),t.update(S,i,1)}function f(v,S,w){w!==0&&(s.drawElementsInstanced(i,S,a,v*u,w),t.update(S,i,w))}function m(v,S,w){if(w===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let y=0;y<w;y++)this.render(v[y]/u,S[y]);else{M.multiDrawElementsWEBGL(i,S,0,a,v,0,w);let y=0;for(let x=0;x<w;x++)y+=S[x];t.update(y,i,1)}}function _(v,S,w,M){if(w===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<v.length;x++)f(v[x]/u,S[x],M[x]);else{y.multiDrawElementsInstancedWEBGL(i,S,0,a,v,0,M,0,w);let x=0;for(let C=0;C<w;C++)x+=S[C];for(let C=0;C<M.length;C++)t.update(x,i,M[C])}}this.setMode=o,this.setIndex=d,this.render=h,this.renderInstances=f,this.renderMultiDraw=m,this.renderMultiDrawInstances=_}function tw(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,u,d){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=d*(a/3);break;case s.LINES:t.lines+=d*(a/2);break;case s.LINE_STRIP:t.lines+=d*(a-1);break;case s.LINE_LOOP:t.lines+=d*a;break;case s.POINTS:t.points+=d*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:i}}function nw(s,e,t){const i=new WeakMap,o=new cn;function a(u,d,h){const f=u.morphTargetInfluences,m=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=m!==void 0?m.length:0;let v=i.get(d);if(v===void 0||v.count!==_){let A=function(){Q.dispose(),i.delete(d),d.removeEventListener("dispose",A)};var S=A;v!==void 0&&v.texture.dispose();const w=d.morphAttributes.position!==void 0,M=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],C=d.morphAttributes.normal||[],T=d.morphAttributes.color||[];let L=0;w===!0&&(L=1),M===!0&&(L=2),y===!0&&(L=3);let V=d.attributes.position.count*L,D=1;V>e.maxTextureSize&&(D=Math.ceil(V/e.maxTextureSize),V=e.maxTextureSize);const N=new Float32Array(V*D*4*_),Q=new i_(N,V,D,_);Q.type=xr,Q.needsUpdate=!0;const P=L*4;for(let q=0;q<_;q++){const se=x[q],z=C[q],ae=T[q],oe=V*D*4*q;for(let ge=0;ge<se.count;ge++){const de=ge*P;w===!0&&(o.fromBufferAttribute(se,ge),N[oe+de+0]=o.x,N[oe+de+1]=o.y,N[oe+de+2]=o.z,N[oe+de+3]=0),M===!0&&(o.fromBufferAttribute(z,ge),N[oe+de+4]=o.x,N[oe+de+5]=o.y,N[oe+de+6]=o.z,N[oe+de+7]=0),y===!0&&(o.fromBufferAttribute(ae,ge),N[oe+de+8]=o.x,N[oe+de+9]=o.y,N[oe+de+10]=o.z,N[oe+de+11]=ae.itemSize===4?o.w:1)}}v={count:_,texture:Q,size:new xt(V,D)},i.set(d,v),d.addEventListener("dispose",A)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let w=0;for(let y=0;y<f.length;y++)w+=f[y];const M=d.morphTargetsRelative?1:1-w;h.getUniforms().setValue(s,"morphTargetBaseInfluence",M),h.getUniforms().setValue(s,"morphTargetInfluences",f)}h.getUniforms().setValue(s,"morphTargetsTexture",v.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:a}}function iw(s,e,t,i){let o=new WeakMap;function a(h){const f=i.render.frame,m=h.geometry,_=e.get(h,m);if(o.get(_)!==f&&(e.update(_),o.set(_,f)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),o.get(h)!==f&&(t.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,s.ARRAY_BUFFER),o.set(h,f))),h.isSkinnedMesh){const v=h.skeleton;o.get(v)!==f&&(v.update(),o.set(v,f))}return _}function u(){o=new WeakMap}function d(h){const f=h.target;f.removeEventListener("dispose",d),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:a,dispose:u}}class f_ extends In{constructor(e,t,i,o,a,u,d,h,f,m){if(m=m!==void 0?m:ho,m!==ho&&m!==pa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&m===ho&&(i=go),i===void 0&&m===pa&&(i=ga),super(null,o,a,u,d,h,m,i,f),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=d!==void 0?d:Kn,this.minFilter=h!==void 0?h:Kn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const p_=new In,m_=new f_(1,1);m_.compareFunction=e_;const g_=new i_,__=new Hy,v_=new c_,rg=[],sg=[],og=new Float32Array(16),ag=new Float32Array(9),lg=new Float32Array(4);function xo(s,e,t){const i=s[0];if(i<=0||i>0)return s;const o=e*t;let a=rg[o];if(a===void 0&&(a=new Float32Array(o),rg[o]=a),e!==0){i.toArray(a,0);for(let u=1,d=0;u!==e;++u)d+=t,s[u].toArray(a,d)}return a}function Jt(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function Zt(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function pu(s,e){let t=sg[e];t===void 0&&(t=new Int32Array(e),sg[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function rw(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function sw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;s.uniform2fv(this.addr,e),Zt(t,e)}}function ow(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Jt(t,e))return;s.uniform3fv(this.addr,e),Zt(t,e)}}function aw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;s.uniform4fv(this.addr,e),Zt(t,e)}}function lw(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(Jt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Zt(t,e)}else{if(Jt(t,i))return;lg.set(i),s.uniformMatrix2fv(this.addr,!1,lg),Zt(t,i)}}function uw(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(Jt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Zt(t,e)}else{if(Jt(t,i))return;ag.set(i),s.uniformMatrix3fv(this.addr,!1,ag),Zt(t,i)}}function cw(s,e){const t=this.cache,i=e.elements;if(i===void 0){if(Jt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Zt(t,e)}else{if(Jt(t,i))return;og.set(i),s.uniformMatrix4fv(this.addr,!1,og),Zt(t,i)}}function dw(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function hw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;s.uniform2iv(this.addr,e),Zt(t,e)}}function fw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;s.uniform3iv(this.addr,e),Zt(t,e)}}function pw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;s.uniform4iv(this.addr,e),Zt(t,e)}}function mw(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function gw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;s.uniform2uiv(this.addr,e),Zt(t,e)}}function _w(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;s.uniform3uiv(this.addr,e),Zt(t,e)}}function vw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;s.uniform4uiv(this.addr,e),Zt(t,e)}}function yw(s,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(s.uniform1i(this.addr,o),i[0]=o);const a=this.type===s.SAMPLER_2D_SHADOW?m_:p_;t.setTexture2D(e||a,o)}function xw(s,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(s.uniform1i(this.addr,o),i[0]=o),t.setTexture3D(e||__,o)}function Sw(s,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(s.uniform1i(this.addr,o),i[0]=o),t.setTextureCube(e||v_,o)}function Ew(s,e,t){const i=this.cache,o=t.allocateTextureUnit();i[0]!==o&&(s.uniform1i(this.addr,o),i[0]=o),t.setTexture2DArray(e||g_,o)}function ww(s){switch(s){case 5126:return rw;case 35664:return sw;case 35665:return ow;case 35666:return aw;case 35674:return lw;case 35675:return uw;case 35676:return cw;case 5124:case 35670:return dw;case 35667:case 35671:return hw;case 35668:case 35672:return fw;case 35669:case 35673:return pw;case 5125:return mw;case 36294:return gw;case 36295:return _w;case 36296:return vw;case 35678:case 36198:case 36298:case 36306:case 35682:return yw;case 35679:case 36299:case 36307:return xw;case 35680:case 36300:case 36308:case 36293:return Sw;case 36289:case 36303:case 36311:case 36292:return Ew}}function Mw(s,e){s.uniform1fv(this.addr,e)}function Tw(s,e){const t=xo(e,this.size,2);s.uniform2fv(this.addr,t)}function bw(s,e){const t=xo(e,this.size,3);s.uniform3fv(this.addr,t)}function Aw(s,e){const t=xo(e,this.size,4);s.uniform4fv(this.addr,t)}function Rw(s,e){const t=xo(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Cw(s,e){const t=xo(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Pw(s,e){const t=xo(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Lw(s,e){s.uniform1iv(this.addr,e)}function Iw(s,e){s.uniform2iv(this.addr,e)}function Dw(s,e){s.uniform3iv(this.addr,e)}function Uw(s,e){s.uniform4iv(this.addr,e)}function Nw(s,e){s.uniform1uiv(this.addr,e)}function Ow(s,e){s.uniform2uiv(this.addr,e)}function kw(s,e){s.uniform3uiv(this.addr,e)}function Fw(s,e){s.uniform4uiv(this.addr,e)}function Bw(s,e,t){const i=this.cache,o=e.length,a=pu(t,o);Jt(i,a)||(s.uniform1iv(this.addr,a),Zt(i,a));for(let u=0;u!==o;++u)t.setTexture2D(e[u]||p_,a[u])}function zw(s,e,t){const i=this.cache,o=e.length,a=pu(t,o);Jt(i,a)||(s.uniform1iv(this.addr,a),Zt(i,a));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||__,a[u])}function Hw(s,e,t){const i=this.cache,o=e.length,a=pu(t,o);Jt(i,a)||(s.uniform1iv(this.addr,a),Zt(i,a));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||v_,a[u])}function Vw(s,e,t){const i=this.cache,o=e.length,a=pu(t,o);Jt(i,a)||(s.uniform1iv(this.addr,a),Zt(i,a));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||g_,a[u])}function Gw(s){switch(s){case 5126:return Mw;case 35664:return Tw;case 35665:return bw;case 35666:return Aw;case 35674:return Rw;case 35675:return Cw;case 35676:return Pw;case 5124:case 35670:return Lw;case 35667:case 35671:return Iw;case 35668:case 35672:return Dw;case 35669:case 35673:return Uw;case 5125:return Nw;case 36294:return Ow;case 36295:return kw;case 36296:return Fw;case 35678:case 36198:case 36298:case 36306:case 35682:return Bw;case 35679:case 36299:case 36307:return zw;case 35680:case 36300:case 36308:case 36293:return Hw;case 36289:case 36303:case 36311:case 36292:return Vw}}class Ww{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=ww(t.type)}}class jw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Gw(t.type)}}class $w{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const o=this.seq;for(let a=0,u=o.length;a!==u;++a){const d=o[a];d.setValue(e,t[d.id],i)}}}const Ud=/(\w+)(\])?(\[|\.)?/g;function ug(s,e){s.seq.push(e),s.map[e.id]=e}function Xw(s,e,t){const i=s.name,o=i.length;for(Ud.lastIndex=0;;){const a=Ud.exec(i),u=Ud.lastIndex;let d=a[1];const h=a[2]==="]",f=a[3];if(h&&(d=d|0),f===void 0||f==="["&&u+2===o){ug(t,f===void 0?new Ww(d,s,e):new jw(d,s,e));break}else{let _=t.map[d];_===void 0&&(_=new $w(d),ug(t,_)),t=_}}}class Zl{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),u=e.getUniformLocation(t,a.name);Xw(a,u,this)}}setValue(e,t,i,o){const a=this.map[t];a!==void 0&&a.setValue(e,i,o)}setOptional(e,t,i){const o=t[i];o!==void 0&&this.setValue(e,i,o)}static upload(e,t,i,o){for(let a=0,u=t.length;a!==u;++a){const d=t[a],h=i[d.id];h.needsUpdate!==!1&&d.setValue(e,h.value,o)}}static seqWithValue(e,t){const i=[];for(let o=0,a=e.length;o!==a;++o){const u=e[o];u.id in t&&i.push(u)}return i}}function cg(s,e,t){const i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}const qw=37297;let Yw=0;function Kw(s,e){const t=s.split(`
`),i=[],o=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let u=o;u<a;u++){const d=u+1;i.push(`${d===e?">":" "} ${d}: ${t[u]}`)}return i.join(`
`)}function Jw(s){const e=Mt.getPrimaries(Mt.workingColorSpace),t=Mt.getPrimaries(s);let i;switch(e===t?i="":e===nu&&t===tu?i="LinearDisplayP3ToLinearSRGB":e===tu&&t===nu&&(i="LinearSRGBToLinearDisplayP3"),s){case br:case du:return[i,"LinearTransferOETF"];case gi:case hh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[i,"LinearTransferOETF"]}}function dg(s,e,t){const i=s.getShaderParameter(e,s.COMPILE_STATUS),o=s.getShaderInfoLog(e).trim();if(i&&o==="")return"";const a=/ERROR: 0:(\d+)/.exec(o);if(a){const u=parseInt(a[1]);return t.toUpperCase()+`

`+o+`

`+Kw(s.getShaderSource(e),u)}else return o}function Zw(s,e){const t=Jw(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Qw(s,e){let t;switch(e){case ry:t="Linear";break;case sy:t="Reinhard";break;case oy:t="OptimizedCineon";break;case ay:t="ACESFilmic";break;case uy:t="AgX";break;case cy:t="Neutral";break;case ly:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function eM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ua).join(`
`)}function tM(s){const e=[];for(const t in s){const i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function nM(s,e){const t={},i=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<i;o++){const a=s.getActiveAttrib(e,o),u=a.name;let d=1;a.type===s.FLOAT_MAT2&&(d=2),a.type===s.FLOAT_MAT3&&(d=3),a.type===s.FLOAT_MAT4&&(d=4),t[u]={type:a.type,location:s.getAttribLocation(e,u),locationSize:d}}return t}function ua(s){return s!==""}function hg(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function fg(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const iM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zd(s){return s.replace(iM,sM)}const rM=new Map;function sM(s,e){let t=st[e];if(t===void 0){const i=rM.get(e);if(i!==void 0)t=st[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Zd(t)}const oM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pg(s){return s.replace(oM,aM)}function aM(s,e,t,i){let o="";for(let a=parseInt(e);a<parseInt(t);a++)o+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return o}function mg(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function lM(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Wg?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===P0?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ki&&(e="SHADOWMAP_TYPE_VSM"),e}function uM(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case po:case mo:e="ENVMAP_TYPE_CUBE";break;case uu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function cM(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case mo:e="ENVMAP_MODE_REFRACTION";break}return e}function dM(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case jg:e="ENVMAP_BLENDING_MULTIPLY";break;case ny:e="ENVMAP_BLENDING_MIX";break;case iy:e="ENVMAP_BLENDING_ADD";break}return e}function hM(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function fM(s,e,t,i){const o=s.getContext(),a=t.defines;let u=t.vertexShader,d=t.fragmentShader;const h=lM(t),f=uM(t),m=cM(t),_=dM(t),v=hM(t),S=eM(t),w=tM(a),M=o.createProgram();let y,x,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(ua).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(ua).join(`
`),x.length>0&&(x+=`
`)):(y=[mg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ua).join(`
`),x=[mg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+m:"",t.envMap?"#define "+_:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Er?"#define TONE_MAPPING":"",t.toneMapping!==Er?st.tonemapping_pars_fragment:"",t.toneMapping!==Er?Qw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,Zw("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ua).join(`
`)),u=Zd(u),u=hg(u,t),u=fg(u,t),d=Zd(d),d=hg(d,t),d=fg(d,t),u=pg(u),d=pg(d),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",t.glslVersion===Lm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Lm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const T=C+y+u,L=C+x+d,V=cg(o,o.VERTEX_SHADER,T),D=cg(o,o.FRAGMENT_SHADER,L);o.attachShader(M,V),o.attachShader(M,D),t.index0AttributeName!==void 0?o.bindAttribLocation(M,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(M,0,"position"),o.linkProgram(M);function N(q){if(s.debug.checkShaderErrors){const se=o.getProgramInfoLog(M).trim(),z=o.getShaderInfoLog(V).trim(),ae=o.getShaderInfoLog(D).trim();let oe=!0,ge=!0;if(o.getProgramParameter(M,o.LINK_STATUS)===!1)if(oe=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,M,V,D);else{const de=dg(o,V,"vertex"),F=dg(o,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(M,o.VALIDATE_STATUS)+`

Material Name: `+q.name+`
Material Type: `+q.type+`

Program Info Log: `+se+`
`+de+`
`+F)}else se!==""?console.warn("THREE.WebGLProgram: Program Info Log:",se):(z===""||ae==="")&&(ge=!1);ge&&(q.diagnostics={runnable:oe,programLog:se,vertexShader:{log:z,prefix:y},fragmentShader:{log:ae,prefix:x}})}o.deleteShader(V),o.deleteShader(D),Q=new Zl(o,M),P=nM(o,M)}let Q;this.getUniforms=function(){return Q===void 0&&N(this),Q};let P;this.getAttributes=function(){return P===void 0&&N(this),P};let A=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=o.getProgramParameter(M,qw)),A},this.destroy=function(){i.releaseStatesOfProgram(this),o.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Yw++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=V,this.fragmentShader=D,this}let pM=0;class mM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,o=this._getShaderStage(t),a=this._getShaderStage(i),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(a)===!1&&(u.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new gM(e),t.set(e,i)),i}}class gM{constructor(e){this.id=pM++,this.code=e,this.usedTimes=0}}function _M(s,e,t,i,o,a,u){const d=new r_,h=new mM,f=new Set,m=[],_=o.logarithmicDepthBuffer,v=o.vertexTextures;let S=o.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(P){return f.add(P),P===0?"uv":`uv${P}`}function y(P,A,q,se,z){const ae=se.fog,oe=z.geometry,ge=P.isMeshStandardMaterial?se.environment:null,de=(P.isMeshStandardMaterial?t:e).get(P.envMap||ge),F=de&&de.mapping===uu?de.image.height:null,re=w[P.type];P.precision!==null&&(S=o.getMaxPrecision(P.precision),S!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",S,"instead."));const Y=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,O=Y!==void 0?Y.length:0;let ne=0;oe.morphAttributes.position!==void 0&&(ne=1),oe.morphAttributes.normal!==void 0&&(ne=2),oe.morphAttributes.color!==void 0&&(ne=3);let Pe,$,ue,xe;if(re){const gt=_i[re];Pe=gt.vertexShader,$=gt.fragmentShader}else Pe=P.vertexShader,$=P.fragmentShader,h.update(P),ue=h.getVertexShaderID(P),xe=h.getFragmentShaderID(P);const me=s.getRenderTarget(),De=z.isInstancedMesh===!0,Fe=z.isBatchedMesh===!0,W=!!P.map,yt=!!P.matcap,$e=!!de,vt=!!P.aoMap,Xe=!!P.lightMap,dt=!!P.bumpMap,it=!!P.normalMap,lt=!!P.displacementMap,Rt=!!P.emissiveMap,U=!!P.metalnessMap,b=!!P.roughnessMap,ie=P.anisotropy>0,ce=P.clearcoat>0,_e=P.dispersion>0,ye=P.iridescence>0,Ge=P.sheen>0,Ae=P.transmission>0,Me=ie&&!!P.anisotropyMap,Ze=ce&&!!P.clearcoatMap,Ee=ce&&!!P.clearcoatNormalMap,He=ce&&!!P.clearcoatRoughnessMap,at=ye&&!!P.iridescenceMap,qe=ye&&!!P.iridescenceThicknessMap,Le=Ge&&!!P.sheenColorMap,nt=Ge&&!!P.sheenRoughnessMap,ht=!!P.specularMap,Ct=!!P.specularColorMap,et=!!P.specularIntensityMap,H=Ae&&!!P.transmissionMap,he=Ae&&!!P.thicknessMap,le=!!P.gradientMap,we=!!P.alphaMap,Re=P.alphaTest>0,ft=!!P.alphaHash,wt=!!P.extensions;let Pt=Er;P.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(Pt=s.toneMapping);const Wt={shaderID:re,shaderType:P.type,shaderName:P.name,vertexShader:Pe,fragmentShader:$,defines:P.defines,customVertexShaderID:ue,customFragmentShaderID:xe,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:S,batching:Fe,instancing:De,instancingColor:De&&z.instanceColor!==null,instancingMorph:De&&z.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:me===null?s.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:br,alphaToCoverage:!!P.alphaToCoverage,map:W,matcap:yt,envMap:$e,envMapMode:$e&&de.mapping,envMapCubeUVHeight:F,aoMap:vt,lightMap:Xe,bumpMap:dt,normalMap:it,displacementMap:v&&lt,emissiveMap:Rt,normalMapObjectSpace:it&&P.normalMapType===Ty,normalMapTangentSpace:it&&P.normalMapType===My,metalnessMap:U,roughnessMap:b,anisotropy:ie,anisotropyMap:Me,clearcoat:ce,clearcoatMap:Ze,clearcoatNormalMap:Ee,clearcoatRoughnessMap:He,dispersion:_e,iridescence:ye,iridescenceMap:at,iridescenceThicknessMap:qe,sheen:Ge,sheenColorMap:Le,sheenRoughnessMap:nt,specularMap:ht,specularColorMap:Ct,specularIntensityMap:et,transmission:Ae,transmissionMap:H,thicknessMap:he,gradientMap:le,opaque:P.transparent===!1&&P.blending===co&&P.alphaToCoverage===!1,alphaMap:we,alphaTest:Re,alphaHash:ft,combine:P.combine,mapUv:W&&M(P.map.channel),aoMapUv:vt&&M(P.aoMap.channel),lightMapUv:Xe&&M(P.lightMap.channel),bumpMapUv:dt&&M(P.bumpMap.channel),normalMapUv:it&&M(P.normalMap.channel),displacementMapUv:lt&&M(P.displacementMap.channel),emissiveMapUv:Rt&&M(P.emissiveMap.channel),metalnessMapUv:U&&M(P.metalnessMap.channel),roughnessMapUv:b&&M(P.roughnessMap.channel),anisotropyMapUv:Me&&M(P.anisotropyMap.channel),clearcoatMapUv:Ze&&M(P.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&M(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:He&&M(P.clearcoatRoughnessMap.channel),iridescenceMapUv:at&&M(P.iridescenceMap.channel),iridescenceThicknessMapUv:qe&&M(P.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&M(P.sheenColorMap.channel),sheenRoughnessMapUv:nt&&M(P.sheenRoughnessMap.channel),specularMapUv:ht&&M(P.specularMap.channel),specularColorMapUv:Ct&&M(P.specularColorMap.channel),specularIntensityMapUv:et&&M(P.specularIntensityMap.channel),transmissionMapUv:H&&M(P.transmissionMap.channel),thicknessMapUv:he&&M(P.thicknessMap.channel),alphaMapUv:we&&M(P.alphaMap.channel),vertexTangents:!!oe.attributes.tangent&&(it||ie),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!oe.attributes.uv&&(W||we),fog:!!ae,useFog:P.fog===!0,fogExp2:!!ae&&ae.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:_,skinning:z.isSkinnedMesh===!0,morphTargets:oe.morphAttributes.position!==void 0,morphNormals:oe.morphAttributes.normal!==void 0,morphColors:oe.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:ne,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:P.dithering,shadowMapEnabled:s.shadowMap.enabled&&q.length>0,shadowMapType:s.shadowMap.type,toneMapping:Pt,useLegacyLights:s._useLegacyLights,decodeVideoTexture:W&&P.map.isVideoTexture===!0&&Mt.getTransfer(P.map.colorSpace)===Dt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===Bi,flipSided:P.side===Ln,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:wt&&P.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:wt&&P.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return Wt.vertexUv1s=f.has(1),Wt.vertexUv2s=f.has(2),Wt.vertexUv3s=f.has(3),f.clear(),Wt}function x(P){const A=[];if(P.shaderID?A.push(P.shaderID):(A.push(P.customVertexShaderID),A.push(P.customFragmentShaderID)),P.defines!==void 0)for(const q in P.defines)A.push(q),A.push(P.defines[q]);return P.isRawShaderMaterial===!1&&(C(A,P),T(A,P),A.push(s.outputColorSpace)),A.push(P.customProgramCacheKey),A.join()}function C(P,A){P.push(A.precision),P.push(A.outputColorSpace),P.push(A.envMapMode),P.push(A.envMapCubeUVHeight),P.push(A.mapUv),P.push(A.alphaMapUv),P.push(A.lightMapUv),P.push(A.aoMapUv),P.push(A.bumpMapUv),P.push(A.normalMapUv),P.push(A.displacementMapUv),P.push(A.emissiveMapUv),P.push(A.metalnessMapUv),P.push(A.roughnessMapUv),P.push(A.anisotropyMapUv),P.push(A.clearcoatMapUv),P.push(A.clearcoatNormalMapUv),P.push(A.clearcoatRoughnessMapUv),P.push(A.iridescenceMapUv),P.push(A.iridescenceThicknessMapUv),P.push(A.sheenColorMapUv),P.push(A.sheenRoughnessMapUv),P.push(A.specularMapUv),P.push(A.specularColorMapUv),P.push(A.specularIntensityMapUv),P.push(A.transmissionMapUv),P.push(A.thicknessMapUv),P.push(A.combine),P.push(A.fogExp2),P.push(A.sizeAttenuation),P.push(A.morphTargetsCount),P.push(A.morphAttributeCount),P.push(A.numDirLights),P.push(A.numPointLights),P.push(A.numSpotLights),P.push(A.numSpotLightMaps),P.push(A.numHemiLights),P.push(A.numRectAreaLights),P.push(A.numDirLightShadows),P.push(A.numPointLightShadows),P.push(A.numSpotLightShadows),P.push(A.numSpotLightShadowsWithMaps),P.push(A.numLightProbes),P.push(A.shadowMapType),P.push(A.toneMapping),P.push(A.numClippingPlanes),P.push(A.numClipIntersection),P.push(A.depthPacking)}function T(P,A){d.disableAll(),A.supportsVertexTextures&&d.enable(0),A.instancing&&d.enable(1),A.instancingColor&&d.enable(2),A.instancingMorph&&d.enable(3),A.matcap&&d.enable(4),A.envMap&&d.enable(5),A.normalMapObjectSpace&&d.enable(6),A.normalMapTangentSpace&&d.enable(7),A.clearcoat&&d.enable(8),A.iridescence&&d.enable(9),A.alphaTest&&d.enable(10),A.vertexColors&&d.enable(11),A.vertexAlphas&&d.enable(12),A.vertexUv1s&&d.enable(13),A.vertexUv2s&&d.enable(14),A.vertexUv3s&&d.enable(15),A.vertexTangents&&d.enable(16),A.anisotropy&&d.enable(17),A.alphaHash&&d.enable(18),A.batching&&d.enable(19),A.dispersion&&d.enable(20),P.push(d.mask),d.disableAll(),A.fog&&d.enable(0),A.useFog&&d.enable(1),A.flatShading&&d.enable(2),A.logarithmicDepthBuffer&&d.enable(3),A.skinning&&d.enable(4),A.morphTargets&&d.enable(5),A.morphNormals&&d.enable(6),A.morphColors&&d.enable(7),A.premultipliedAlpha&&d.enable(8),A.shadowMapEnabled&&d.enable(9),A.useLegacyLights&&d.enable(10),A.doubleSided&&d.enable(11),A.flipSided&&d.enable(12),A.useDepthPacking&&d.enable(13),A.dithering&&d.enable(14),A.transmission&&d.enable(15),A.sheen&&d.enable(16),A.opaque&&d.enable(17),A.pointsUvs&&d.enable(18),A.decodeVideoTexture&&d.enable(19),A.alphaToCoverage&&d.enable(20),P.push(d.mask)}function L(P){const A=w[P.type];let q;if(A){const se=_i[A];q=ex.clone(se.uniforms)}else q=P.uniforms;return q}function V(P,A){let q;for(let se=0,z=m.length;se<z;se++){const ae=m[se];if(ae.cacheKey===A){q=ae,++q.usedTimes;break}}return q===void 0&&(q=new fM(s,A,P,a),m.push(q)),q}function D(P){if(--P.usedTimes===0){const A=m.indexOf(P);m[A]=m[m.length-1],m.pop(),P.destroy()}}function N(P){h.remove(P)}function Q(){h.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:L,acquireProgram:V,releaseProgram:D,releaseShaderCache:N,programs:m,dispose:Q}}function vM(){let s=new WeakMap;function e(a){let u=s.get(a);return u===void 0&&(u={},s.set(a,u)),u}function t(a){s.delete(a)}function i(a,u,d){s.get(a)[u]=d}function o(){s=new WeakMap}return{get:e,remove:t,update:i,dispose:o}}function yM(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function gg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function _g(){const s=[];let e=0;const t=[],i=[],o=[];function a(){e=0,t.length=0,i.length=0,o.length=0}function u(_,v,S,w,M,y){let x=s[e];return x===void 0?(x={id:_.id,object:_,geometry:v,material:S,groupOrder:w,renderOrder:_.renderOrder,z:M,group:y},s[e]=x):(x.id=_.id,x.object=_,x.geometry=v,x.material=S,x.groupOrder=w,x.renderOrder=_.renderOrder,x.z=M,x.group=y),e++,x}function d(_,v,S,w,M,y){const x=u(_,v,S,w,M,y);S.transmission>0?i.push(x):S.transparent===!0?o.push(x):t.push(x)}function h(_,v,S,w,M,y){const x=u(_,v,S,w,M,y);S.transmission>0?i.unshift(x):S.transparent===!0?o.unshift(x):t.unshift(x)}function f(_,v){t.length>1&&t.sort(_||yM),i.length>1&&i.sort(v||gg),o.length>1&&o.sort(v||gg)}function m(){for(let _=e,v=s.length;_<v;_++){const S=s[_];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:i,transparent:o,init:a,push:d,unshift:h,finish:m,sort:f}}function xM(){let s=new WeakMap;function e(i,o){const a=s.get(i);let u;return a===void 0?(u=new _g,s.set(i,[u])):o>=a.length?(u=new _g,a.push(u)):u=a[o],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function SM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ee,color:new Et};break;case"SpotLight":t={position:new ee,direction:new ee,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ee,color:new Et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ee,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":t={color:new Et,position:new ee,halfWidth:new ee,halfHeight:new ee};break}return s[e.id]=t,t}}}function EM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let wM=0;function MM(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function TM(s){const e=new SM,t=EM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)i.probe.push(new ee);const o=new ee,a=new Kt,u=new Kt;function d(f,m){let _=0,v=0,S=0;for(let q=0;q<9;q++)i.probe[q].set(0,0,0);let w=0,M=0,y=0,x=0,C=0,T=0,L=0,V=0,D=0,N=0,Q=0;f.sort(MM);const P=m===!0?Math.PI:1;for(let q=0,se=f.length;q<se;q++){const z=f[q],ae=z.color,oe=z.intensity,ge=z.distance,de=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)_+=ae.r*oe*P,v+=ae.g*oe*P,S+=ae.b*oe*P;else if(z.isLightProbe){for(let F=0;F<9;F++)i.probe[F].addScaledVector(z.sh.coefficients[F],oe);Q++}else if(z.isDirectionalLight){const F=e.get(z);if(F.color.copy(z.color).multiplyScalar(z.intensity*P),z.castShadow){const re=z.shadow,Y=t.get(z);Y.shadowBias=re.bias,Y.shadowNormalBias=re.normalBias,Y.shadowRadius=re.radius,Y.shadowMapSize=re.mapSize,i.directionalShadow[w]=Y,i.directionalShadowMap[w]=de,i.directionalShadowMatrix[w]=z.shadow.matrix,T++}i.directional[w]=F,w++}else if(z.isSpotLight){const F=e.get(z);F.position.setFromMatrixPosition(z.matrixWorld),F.color.copy(ae).multiplyScalar(oe*P),F.distance=ge,F.coneCos=Math.cos(z.angle),F.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),F.decay=z.decay,i.spot[y]=F;const re=z.shadow;if(z.map&&(i.spotLightMap[D]=z.map,D++,re.updateMatrices(z),z.castShadow&&N++),i.spotLightMatrix[y]=re.matrix,z.castShadow){const Y=t.get(z);Y.shadowBias=re.bias,Y.shadowNormalBias=re.normalBias,Y.shadowRadius=re.radius,Y.shadowMapSize=re.mapSize,i.spotShadow[y]=Y,i.spotShadowMap[y]=de,V++}y++}else if(z.isRectAreaLight){const F=e.get(z);F.color.copy(ae).multiplyScalar(oe),F.halfWidth.set(z.width*.5,0,0),F.halfHeight.set(0,z.height*.5,0),i.rectArea[x]=F,x++}else if(z.isPointLight){const F=e.get(z);if(F.color.copy(z.color).multiplyScalar(z.intensity*P),F.distance=z.distance,F.decay=z.decay,z.castShadow){const re=z.shadow,Y=t.get(z);Y.shadowBias=re.bias,Y.shadowNormalBias=re.normalBias,Y.shadowRadius=re.radius,Y.shadowMapSize=re.mapSize,Y.shadowCameraNear=re.camera.near,Y.shadowCameraFar=re.camera.far,i.pointShadow[M]=Y,i.pointShadowMap[M]=de,i.pointShadowMatrix[M]=z.shadow.matrix,L++}i.point[M]=F,M++}else if(z.isHemisphereLight){const F=e.get(z);F.skyColor.copy(z.color).multiplyScalar(oe*P),F.groundColor.copy(z.groundColor).multiplyScalar(oe*P),i.hemi[C]=F,C++}}x>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=be.LTC_FLOAT_1,i.rectAreaLTC2=be.LTC_FLOAT_2):(i.rectAreaLTC1=be.LTC_HALF_1,i.rectAreaLTC2=be.LTC_HALF_2)),i.ambient[0]=_,i.ambient[1]=v,i.ambient[2]=S;const A=i.hash;(A.directionalLength!==w||A.pointLength!==M||A.spotLength!==y||A.rectAreaLength!==x||A.hemiLength!==C||A.numDirectionalShadows!==T||A.numPointShadows!==L||A.numSpotShadows!==V||A.numSpotMaps!==D||A.numLightProbes!==Q)&&(i.directional.length=w,i.spot.length=y,i.rectArea.length=x,i.point.length=M,i.hemi.length=C,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=L,i.pointShadowMap.length=L,i.spotShadow.length=V,i.spotShadowMap.length=V,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=L,i.spotLightMatrix.length=V+D-N,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=N,i.numLightProbes=Q,A.directionalLength=w,A.pointLength=M,A.spotLength=y,A.rectAreaLength=x,A.hemiLength=C,A.numDirectionalShadows=T,A.numPointShadows=L,A.numSpotShadows=V,A.numSpotMaps=D,A.numLightProbes=Q,i.version=wM++)}function h(f,m){let _=0,v=0,S=0,w=0,M=0;const y=m.matrixWorldInverse;for(let x=0,C=f.length;x<C;x++){const T=f[x];if(T.isDirectionalLight){const L=i.directional[_];L.direction.setFromMatrixPosition(T.matrixWorld),o.setFromMatrixPosition(T.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(y),_++}else if(T.isSpotLight){const L=i.spot[S];L.position.setFromMatrixPosition(T.matrixWorld),L.position.applyMatrix4(y),L.direction.setFromMatrixPosition(T.matrixWorld),o.setFromMatrixPosition(T.target.matrixWorld),L.direction.sub(o),L.direction.transformDirection(y),S++}else if(T.isRectAreaLight){const L=i.rectArea[w];L.position.setFromMatrixPosition(T.matrixWorld),L.position.applyMatrix4(y),u.identity(),a.copy(T.matrixWorld),a.premultiply(y),u.extractRotation(a),L.halfWidth.set(T.width*.5,0,0),L.halfHeight.set(0,T.height*.5,0),L.halfWidth.applyMatrix4(u),L.halfHeight.applyMatrix4(u),w++}else if(T.isPointLight){const L=i.point[v];L.position.setFromMatrixPosition(T.matrixWorld),L.position.applyMatrix4(y),v++}else if(T.isHemisphereLight){const L=i.hemi[M];L.direction.setFromMatrixPosition(T.matrixWorld),L.direction.transformDirection(y),M++}}}return{setup:d,setupView:h,state:i}}function vg(s){const e=new TM(s),t=[],i=[];function o(m){f.camera=m,t.length=0,i.length=0}function a(m){t.push(m)}function u(m){i.push(m)}function d(m){e.setup(t,m)}function h(m){e.setupView(t,m)}const f={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:f,setupLights:d,setupLightsView:h,pushLight:a,pushShadow:u}}function bM(s){let e=new WeakMap;function t(o,a=0){const u=e.get(o);let d;return u===void 0?(d=new vg(s),e.set(o,[d])):a>=u.length?(d=new vg(s),u.push(d)):d=u[a],d}function i(){e=new WeakMap}return{get:t,dispose:i}}class AM extends hu{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ey,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class RM extends hu{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const CM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,PM=`uniform sampler2D shadow_pass;
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
}`;function LM(s,e,t){let i=new d_;const o=new xt,a=new xt,u=new cn,d=new AM({depthPacking:wy}),h=new RM,f={},m=t.maxTextureSize,_={[wr]:Ln,[Ln]:wr,[Bi]:Bi},v=new Tr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:CM,fragmentShader:PM}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const w=new Ar;w.setAttribute("position",new xi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new ui(w,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wg;let x=this.type;this.render=function(D,N,Q){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||D.length===0)return;const P=s.getRenderTarget(),A=s.getActiveCubeFace(),q=s.getActiveMipmapLevel(),se=s.state;se.setBlending(Sr),se.buffers.color.setClear(1,1,1,1),se.buffers.depth.setTest(!0),se.setScissorTest(!1);const z=x!==ki&&this.type===ki,ae=x===ki&&this.type!==ki;for(let oe=0,ge=D.length;oe<ge;oe++){const de=D[oe],F=de.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",de,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;o.copy(F.mapSize);const re=F.getFrameExtents();if(o.multiply(re),a.copy(F.mapSize),(o.x>m||o.y>m)&&(o.x>m&&(a.x=Math.floor(m/re.x),o.x=a.x*re.x,F.mapSize.x=a.x),o.y>m&&(a.y=Math.floor(m/re.y),o.y=a.y*re.y,F.mapSize.y=a.y)),F.map===null||z===!0||ae===!0){const O=this.type!==ki?{minFilter:Kn,magFilter:Kn}:{};F.map!==null&&F.map.dispose(),F.map=new os(o.x,o.y,O),F.map.texture.name=de.name+".shadowMap",F.camera.updateProjectionMatrix()}s.setRenderTarget(F.map),s.clear();const Y=F.getViewportCount();for(let O=0;O<Y;O++){const ne=F.getViewport(O);u.set(a.x*ne.x,a.y*ne.y,a.x*ne.z,a.y*ne.w),se.viewport(u),F.updateMatrices(de,O),i=F.getFrustum(),L(N,Q,F.camera,de,this.type)}F.isPointLightShadow!==!0&&this.type===ki&&C(F,Q),F.needsUpdate=!1}x=this.type,y.needsUpdate=!1,s.setRenderTarget(P,A,q)};function C(D,N){const Q=e.update(M);v.defines.VSM_SAMPLES!==D.blurSamples&&(v.defines.VSM_SAMPLES=D.blurSamples,S.defines.VSM_SAMPLES=D.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new os(o.x,o.y)),v.uniforms.shadow_pass.value=D.map.texture,v.uniforms.resolution.value=D.mapSize,v.uniforms.radius.value=D.radius,s.setRenderTarget(D.mapPass),s.clear(),s.renderBufferDirect(N,null,Q,v,M,null),S.uniforms.shadow_pass.value=D.mapPass.texture,S.uniforms.resolution.value=D.mapSize,S.uniforms.radius.value=D.radius,s.setRenderTarget(D.map),s.clear(),s.renderBufferDirect(N,null,Q,S,M,null)}function T(D,N,Q,P){let A=null;const q=Q.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(q!==void 0)A=q;else if(A=Q.isPointLight===!0?h:d,s.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){const se=A.uuid,z=N.uuid;let ae=f[se];ae===void 0&&(ae={},f[se]=ae);let oe=ae[z];oe===void 0&&(oe=A.clone(),ae[z]=oe,N.addEventListener("dispose",V)),A=oe}if(A.visible=N.visible,A.wireframe=N.wireframe,P===ki?A.side=N.shadowSide!==null?N.shadowSide:N.side:A.side=N.shadowSide!==null?N.shadowSide:_[N.side],A.alphaMap=N.alphaMap,A.alphaTest=N.alphaTest,A.map=N.map,A.clipShadows=N.clipShadows,A.clippingPlanes=N.clippingPlanes,A.clipIntersection=N.clipIntersection,A.displacementMap=N.displacementMap,A.displacementScale=N.displacementScale,A.displacementBias=N.displacementBias,A.wireframeLinewidth=N.wireframeLinewidth,A.linewidth=N.linewidth,Q.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const se=s.properties.get(A);se.light=Q}return A}function L(D,N,Q,P,A){if(D.visible===!1)return;if(D.layers.test(N.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&A===ki)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,D.matrixWorld);const z=e.update(D),ae=D.material;if(Array.isArray(ae)){const oe=z.groups;for(let ge=0,de=oe.length;ge<de;ge++){const F=oe[ge],re=ae[F.materialIndex];if(re&&re.visible){const Y=T(D,re,P,A);D.onBeforeShadow(s,D,N,Q,z,Y,F),s.renderBufferDirect(Q,null,z,Y,D,F),D.onAfterShadow(s,D,N,Q,z,Y,F)}}}else if(ae.visible){const oe=T(D,ae,P,A);D.onBeforeShadow(s,D,N,Q,z,oe,null),s.renderBufferDirect(Q,null,z,oe,D,null),D.onAfterShadow(s,D,N,Q,z,oe,null)}}const se=D.children;for(let z=0,ae=se.length;z<ae;z++)L(se[z],N,Q,P,A)}function V(D){D.target.removeEventListener("dispose",V);for(const Q in f){const P=f[Q],A=D.target.uuid;A in P&&(P[A].dispose(),delete P[A])}}}function IM(s){function e(){let H=!1;const he=new cn;let le=null;const we=new cn(0,0,0,0);return{setMask:function(Re){le!==Re&&!H&&(s.colorMask(Re,Re,Re,Re),le=Re)},setLocked:function(Re){H=Re},setClear:function(Re,ft,wt,Pt,Wt){Wt===!0&&(Re*=Pt,ft*=Pt,wt*=Pt),he.set(Re,ft,wt,Pt),we.equals(he)===!1&&(s.clearColor(Re,ft,wt,Pt),we.copy(he))},reset:function(){H=!1,le=null,we.set(-1,0,0,0)}}}function t(){let H=!1,he=null,le=null,we=null;return{setTest:function(Re){Re?xe(s.DEPTH_TEST):me(s.DEPTH_TEST)},setMask:function(Re){he!==Re&&!H&&(s.depthMask(Re),he=Re)},setFunc:function(Re){if(le!==Re){switch(Re){case Y0:s.depthFunc(s.NEVER);break;case K0:s.depthFunc(s.ALWAYS);break;case J0:s.depthFunc(s.LESS);break;case Ql:s.depthFunc(s.LEQUAL);break;case Z0:s.depthFunc(s.EQUAL);break;case Q0:s.depthFunc(s.GEQUAL);break;case ey:s.depthFunc(s.GREATER);break;case ty:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}le=Re}},setLocked:function(Re){H=Re},setClear:function(Re){we!==Re&&(s.clearDepth(Re),we=Re)},reset:function(){H=!1,he=null,le=null,we=null}}}function i(){let H=!1,he=null,le=null,we=null,Re=null,ft=null,wt=null,Pt=null,Wt=null;return{setTest:function(gt){H||(gt?xe(s.STENCIL_TEST):me(s.STENCIL_TEST))},setMask:function(gt){he!==gt&&!H&&(s.stencilMask(gt),he=gt)},setFunc:function(gt,Sn,Qt){(le!==gt||we!==Sn||Re!==Qt)&&(s.stencilFunc(gt,Sn,Qt),le=gt,we=Sn,Re=Qt)},setOp:function(gt,Sn,Qt){(ft!==gt||wt!==Sn||Pt!==Qt)&&(s.stencilOp(gt,Sn,Qt),ft=gt,wt=Sn,Pt=Qt)},setLocked:function(gt){H=gt},setClear:function(gt){Wt!==gt&&(s.clearStencil(gt),Wt=gt)},reset:function(){H=!1,he=null,le=null,we=null,Re=null,ft=null,wt=null,Pt=null,Wt=null}}}const o=new e,a=new t,u=new i,d=new WeakMap,h=new WeakMap;let f={},m={},_=new WeakMap,v=[],S=null,w=!1,M=null,y=null,x=null,C=null,T=null,L=null,V=null,D=new Et(0,0,0),N=0,Q=!1,P=null,A=null,q=null,se=null,z=null;const ae=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let oe=!1,ge=0;const de=s.getParameter(s.VERSION);de.indexOf("WebGL")!==-1?(ge=parseFloat(/^WebGL (\d)/.exec(de)[1]),oe=ge>=1):de.indexOf("OpenGL ES")!==-1&&(ge=parseFloat(/^OpenGL ES (\d)/.exec(de)[1]),oe=ge>=2);let F=null,re={};const Y=s.getParameter(s.SCISSOR_BOX),O=s.getParameter(s.VIEWPORT),ne=new cn().fromArray(Y),Pe=new cn().fromArray(O);function $(H,he,le,we){const Re=new Uint8Array(4),ft=s.createTexture();s.bindTexture(H,ft),s.texParameteri(H,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(H,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let wt=0;wt<le;wt++)H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY?s.texImage3D(he,0,s.RGBA,1,1,we,0,s.RGBA,s.UNSIGNED_BYTE,Re):s.texImage2D(he+wt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Re);return ft}const ue={};ue[s.TEXTURE_2D]=$(s.TEXTURE_2D,s.TEXTURE_2D,1),ue[s.TEXTURE_CUBE_MAP]=$(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[s.TEXTURE_2D_ARRAY]=$(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ue[s.TEXTURE_3D]=$(s.TEXTURE_3D,s.TEXTURE_3D,1,1),o.setClear(0,0,0,1),a.setClear(1),u.setClear(0),xe(s.DEPTH_TEST),a.setFunc(Ql),dt(!1),it(Qp),xe(s.CULL_FACE),vt(Sr);function xe(H){f[H]!==!0&&(s.enable(H),f[H]=!0)}function me(H){f[H]!==!1&&(s.disable(H),f[H]=!1)}function De(H,he){return m[H]!==he?(s.bindFramebuffer(H,he),m[H]=he,H===s.DRAW_FRAMEBUFFER&&(m[s.FRAMEBUFFER]=he),H===s.FRAMEBUFFER&&(m[s.DRAW_FRAMEBUFFER]=he),!0):!1}function Fe(H,he){let le=v,we=!1;if(H){le=_.get(he),le===void 0&&(le=[],_.set(he,le));const Re=H.textures;if(le.length!==Re.length||le[0]!==s.COLOR_ATTACHMENT0){for(let ft=0,wt=Re.length;ft<wt;ft++)le[ft]=s.COLOR_ATTACHMENT0+ft;le.length=Re.length,we=!0}}else le[0]!==s.BACK&&(le[0]=s.BACK,we=!0);we&&s.drawBuffers(le)}function W(H){return S!==H?(s.useProgram(H),S=H,!0):!1}const yt={[es]:s.FUNC_ADD,[I0]:s.FUNC_SUBTRACT,[D0]:s.FUNC_REVERSE_SUBTRACT};yt[U0]=s.MIN,yt[N0]=s.MAX;const $e={[O0]:s.ZERO,[k0]:s.ONE,[F0]:s.SRC_COLOR,[jd]:s.SRC_ALPHA,[W0]:s.SRC_ALPHA_SATURATE,[V0]:s.DST_COLOR,[z0]:s.DST_ALPHA,[B0]:s.ONE_MINUS_SRC_COLOR,[$d]:s.ONE_MINUS_SRC_ALPHA,[G0]:s.ONE_MINUS_DST_COLOR,[H0]:s.ONE_MINUS_DST_ALPHA,[j0]:s.CONSTANT_COLOR,[$0]:s.ONE_MINUS_CONSTANT_COLOR,[X0]:s.CONSTANT_ALPHA,[q0]:s.ONE_MINUS_CONSTANT_ALPHA};function vt(H,he,le,we,Re,ft,wt,Pt,Wt,gt){if(H===Sr){w===!0&&(me(s.BLEND),w=!1);return}if(w===!1&&(xe(s.BLEND),w=!0),H!==L0){if(H!==M||gt!==Q){if((y!==es||T!==es)&&(s.blendEquation(s.FUNC_ADD),y=es,T=es),gt)switch(H){case co:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case em:s.blendFunc(s.ONE,s.ONE);break;case tm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case nm:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case co:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case em:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case tm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case nm:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}x=null,C=null,L=null,V=null,D.set(0,0,0),N=0,M=H,Q=gt}return}Re=Re||he,ft=ft||le,wt=wt||we,(he!==y||Re!==T)&&(s.blendEquationSeparate(yt[he],yt[Re]),y=he,T=Re),(le!==x||we!==C||ft!==L||wt!==V)&&(s.blendFuncSeparate($e[le],$e[we],$e[ft],$e[wt]),x=le,C=we,L=ft,V=wt),(Pt.equals(D)===!1||Wt!==N)&&(s.blendColor(Pt.r,Pt.g,Pt.b,Wt),D.copy(Pt),N=Wt),M=H,Q=!1}function Xe(H,he){H.side===Bi?me(s.CULL_FACE):xe(s.CULL_FACE);let le=H.side===Ln;he&&(le=!le),dt(le),H.blending===co&&H.transparent===!1?vt(Sr):vt(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),a.setFunc(H.depthFunc),a.setTest(H.depthTest),a.setMask(H.depthWrite),o.setMask(H.colorWrite);const we=H.stencilWrite;u.setTest(we),we&&(u.setMask(H.stencilWriteMask),u.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),u.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Rt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?xe(s.SAMPLE_ALPHA_TO_COVERAGE):me(s.SAMPLE_ALPHA_TO_COVERAGE)}function dt(H){P!==H&&(H?s.frontFace(s.CW):s.frontFace(s.CCW),P=H)}function it(H){H!==R0?(xe(s.CULL_FACE),H!==A&&(H===Qp?s.cullFace(s.BACK):H===C0?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):me(s.CULL_FACE),A=H}function lt(H){H!==q&&(oe&&s.lineWidth(H),q=H)}function Rt(H,he,le){H?(xe(s.POLYGON_OFFSET_FILL),(se!==he||z!==le)&&(s.polygonOffset(he,le),se=he,z=le)):me(s.POLYGON_OFFSET_FILL)}function U(H){H?xe(s.SCISSOR_TEST):me(s.SCISSOR_TEST)}function b(H){H===void 0&&(H=s.TEXTURE0+ae-1),F!==H&&(s.activeTexture(H),F=H)}function ie(H,he,le){le===void 0&&(F===null?le=s.TEXTURE0+ae-1:le=F);let we=re[le];we===void 0&&(we={type:void 0,texture:void 0},re[le]=we),(we.type!==H||we.texture!==he)&&(F!==le&&(s.activeTexture(le),F=le),s.bindTexture(H,he||ue[H]),we.type=H,we.texture=he)}function ce(){const H=re[F];H!==void 0&&H.type!==void 0&&(s.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function _e(){try{s.compressedTexImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ye(){try{s.compressedTexImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ge(){try{s.texSubImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ae(){try{s.texSubImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Me(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ze(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ee(){try{s.texStorage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function He(){try{s.texStorage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function at(){try{s.texImage2D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function qe(){try{s.texImage3D.apply(s,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Le(H){ne.equals(H)===!1&&(s.scissor(H.x,H.y,H.z,H.w),ne.copy(H))}function nt(H){Pe.equals(H)===!1&&(s.viewport(H.x,H.y,H.z,H.w),Pe.copy(H))}function ht(H,he){let le=h.get(he);le===void 0&&(le=new WeakMap,h.set(he,le));let we=le.get(H);we===void 0&&(we=s.getUniformBlockIndex(he,H.name),le.set(H,we))}function Ct(H,he){const we=h.get(he).get(H);d.get(he)!==we&&(s.uniformBlockBinding(he,we,H.__bindingPointIndex),d.set(he,we))}function et(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},F=null,re={},m={},_=new WeakMap,v=[],S=null,w=!1,M=null,y=null,x=null,C=null,T=null,L=null,V=null,D=new Et(0,0,0),N=0,Q=!1,P=null,A=null,q=null,se=null,z=null,ne.set(0,0,s.canvas.width,s.canvas.height),Pe.set(0,0,s.canvas.width,s.canvas.height),o.reset(),a.reset(),u.reset()}return{buffers:{color:o,depth:a,stencil:u},enable:xe,disable:me,bindFramebuffer:De,drawBuffers:Fe,useProgram:W,setBlending:vt,setMaterial:Xe,setFlipSided:dt,setCullFace:it,setLineWidth:lt,setPolygonOffset:Rt,setScissorTest:U,activeTexture:b,bindTexture:ie,unbindTexture:ce,compressedTexImage2D:_e,compressedTexImage3D:ye,texImage2D:at,texImage3D:qe,updateUBOMapping:ht,uniformBlockBinding:Ct,texStorage2D:Ee,texStorage3D:He,texSubImage2D:Ge,texSubImage3D:Ae,compressedTexSubImage2D:Me,compressedTexSubImage3D:Ze,scissor:Le,viewport:nt,reset:et}}function DM(s,e,t,i,o,a,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new xt,m=new WeakMap;let _;const v=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(U,b){return S?new OffscreenCanvas(U,b):ru("canvas")}function M(U,b,ie){let ce=1;const _e=Rt(U);if((_e.width>ie||_e.height>ie)&&(ce=ie/Math.max(_e.width,_e.height)),ce<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ye=Math.floor(ce*_e.width),Ge=Math.floor(ce*_e.height);_===void 0&&(_=w(ye,Ge));const Ae=b?w(ye,Ge):_;return Ae.width=ye,Ae.height=Ge,Ae.getContext("2d").drawImage(U,0,0,ye,Ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+ye+"x"+Ge+")."),Ae}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),U;return U}function y(U){return U.generateMipmaps&&U.minFilter!==Kn&&U.minFilter!==li}function x(U){s.generateMipmap(U)}function C(U,b,ie,ce,_e=!1){if(U!==null){if(s[U]!==void 0)return s[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ye=b;if(b===s.RED&&(ie===s.FLOAT&&(ye=s.R32F),ie===s.HALF_FLOAT&&(ye=s.R16F),ie===s.UNSIGNED_BYTE&&(ye=s.R8)),b===s.RED_INTEGER&&(ie===s.UNSIGNED_BYTE&&(ye=s.R8UI),ie===s.UNSIGNED_SHORT&&(ye=s.R16UI),ie===s.UNSIGNED_INT&&(ye=s.R32UI),ie===s.BYTE&&(ye=s.R8I),ie===s.SHORT&&(ye=s.R16I),ie===s.INT&&(ye=s.R32I)),b===s.RG&&(ie===s.FLOAT&&(ye=s.RG32F),ie===s.HALF_FLOAT&&(ye=s.RG16F),ie===s.UNSIGNED_BYTE&&(ye=s.RG8)),b===s.RG_INTEGER&&(ie===s.UNSIGNED_BYTE&&(ye=s.RG8UI),ie===s.UNSIGNED_SHORT&&(ye=s.RG16UI),ie===s.UNSIGNED_INT&&(ye=s.RG32UI),ie===s.BYTE&&(ye=s.RG8I),ie===s.SHORT&&(ye=s.RG16I),ie===s.INT&&(ye=s.RG32I)),b===s.RGB&&ie===s.UNSIGNED_INT_5_9_9_9_REV&&(ye=s.RGB9_E5),b===s.RGBA){const Ge=_e?eu:Mt.getTransfer(ce);ie===s.FLOAT&&(ye=s.RGBA32F),ie===s.HALF_FLOAT&&(ye=s.RGBA16F),ie===s.UNSIGNED_BYTE&&(ye=Ge===Dt?s.SRGB8_ALPHA8:s.RGBA8),ie===s.UNSIGNED_SHORT_4_4_4_4&&(ye=s.RGBA4),ie===s.UNSIGNED_SHORT_5_5_5_1&&(ye=s.RGB5_A1)}return(ye===s.R16F||ye===s.R32F||ye===s.RG16F||ye===s.RG32F||ye===s.RGBA16F||ye===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ye}function T(U,b){return y(U)===!0||U.isFramebufferTexture&&U.minFilter!==Kn&&U.minFilter!==li?Math.log2(Math.max(b.width,b.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?b.mipmaps.length:1}function L(U){const b=U.target;b.removeEventListener("dispose",L),D(b),b.isVideoTexture&&m.delete(b)}function V(U){const b=U.target;b.removeEventListener("dispose",V),Q(b)}function D(U){const b=i.get(U);if(b.__webglInit===void 0)return;const ie=U.source,ce=v.get(ie);if(ce){const _e=ce[b.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&N(U),Object.keys(ce).length===0&&v.delete(ie)}i.remove(U)}function N(U){const b=i.get(U);s.deleteTexture(b.__webglTexture);const ie=U.source,ce=v.get(ie);delete ce[b.__cacheKey],u.memory.textures--}function Q(U){const b=i.get(U);if(U.depthTexture&&U.depthTexture.dispose(),U.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(b.__webglFramebuffer[ce]))for(let _e=0;_e<b.__webglFramebuffer[ce].length;_e++)s.deleteFramebuffer(b.__webglFramebuffer[ce][_e]);else s.deleteFramebuffer(b.__webglFramebuffer[ce]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[ce])}else{if(Array.isArray(b.__webglFramebuffer))for(let ce=0;ce<b.__webglFramebuffer.length;ce++)s.deleteFramebuffer(b.__webglFramebuffer[ce]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ce=0;ce<b.__webglColorRenderbuffer.length;ce++)b.__webglColorRenderbuffer[ce]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[ce]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const ie=U.textures;for(let ce=0,_e=ie.length;ce<_e;ce++){const ye=i.get(ie[ce]);ye.__webglTexture&&(s.deleteTexture(ye.__webglTexture),u.memory.textures--),i.remove(ie[ce])}i.remove(U)}let P=0;function A(){P=0}function q(){const U=P;return U>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+o.maxTextures),P+=1,U}function se(U){const b=[];return b.push(U.wrapS),b.push(U.wrapT),b.push(U.wrapR||0),b.push(U.magFilter),b.push(U.minFilter),b.push(U.anisotropy),b.push(U.internalFormat),b.push(U.format),b.push(U.type),b.push(U.generateMipmaps),b.push(U.premultiplyAlpha),b.push(U.flipY),b.push(U.unpackAlignment),b.push(U.colorSpace),b.join()}function z(U,b){const ie=i.get(U);if(U.isVideoTexture&&it(U),U.isRenderTargetTexture===!1&&U.version>0&&ie.__version!==U.version){const ce=U.image;if(ce===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(ie,U,b);return}}t.bindTexture(s.TEXTURE_2D,ie.__webglTexture,s.TEXTURE0+b)}function ae(U,b){const ie=i.get(U);if(U.version>0&&ie.__version!==U.version){ne(ie,U,b);return}t.bindTexture(s.TEXTURE_2D_ARRAY,ie.__webglTexture,s.TEXTURE0+b)}function oe(U,b){const ie=i.get(U);if(U.version>0&&ie.__version!==U.version){ne(ie,U,b);return}t.bindTexture(s.TEXTURE_3D,ie.__webglTexture,s.TEXTURE0+b)}function ge(U,b){const ie=i.get(U);if(U.version>0&&ie.__version!==U.version){Pe(ie,U,b);return}t.bindTexture(s.TEXTURE_CUBE_MAP,ie.__webglTexture,s.TEXTURE0+b)}const de={[Yd]:s.REPEAT,[is]:s.CLAMP_TO_EDGE,[Kd]:s.MIRRORED_REPEAT},F={[Kn]:s.NEAREST,[dy]:s.NEAREST_MIPMAP_NEAREST,[Tl]:s.NEAREST_MIPMAP_LINEAR,[li]:s.LINEAR,[id]:s.LINEAR_MIPMAP_NEAREST,[rs]:s.LINEAR_MIPMAP_LINEAR},re={[by]:s.NEVER,[Iy]:s.ALWAYS,[Ay]:s.LESS,[e_]:s.LEQUAL,[Ry]:s.EQUAL,[Ly]:s.GEQUAL,[Cy]:s.GREATER,[Py]:s.NOTEQUAL};function Y(U,b){if(b.type===xr&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===li||b.magFilter===id||b.magFilter===Tl||b.magFilter===rs||b.minFilter===li||b.minFilter===id||b.minFilter===Tl||b.minFilter===rs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(U,s.TEXTURE_WRAP_S,de[b.wrapS]),s.texParameteri(U,s.TEXTURE_WRAP_T,de[b.wrapT]),(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)&&s.texParameteri(U,s.TEXTURE_WRAP_R,de[b.wrapR]),s.texParameteri(U,s.TEXTURE_MAG_FILTER,F[b.magFilter]),s.texParameteri(U,s.TEXTURE_MIN_FILTER,F[b.minFilter]),b.compareFunction&&(s.texParameteri(U,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(U,s.TEXTURE_COMPARE_FUNC,re[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Kn||b.minFilter!==Tl&&b.minFilter!==rs||b.type===xr&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const ie=e.get("EXT_texture_filter_anisotropic");s.texParameterf(U,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,o.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function O(U,b){let ie=!1;U.__webglInit===void 0&&(U.__webglInit=!0,b.addEventListener("dispose",L));const ce=b.source;let _e=v.get(ce);_e===void 0&&(_e={},v.set(ce,_e));const ye=se(b);if(ye!==U.__cacheKey){_e[ye]===void 0&&(_e[ye]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,ie=!0),_e[ye].usedTimes++;const Ge=_e[U.__cacheKey];Ge!==void 0&&(_e[U.__cacheKey].usedTimes--,Ge.usedTimes===0&&N(b)),U.__cacheKey=ye,U.__webglTexture=_e[ye].texture}return ie}function ne(U,b,ie){let ce=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(ce=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(ce=s.TEXTURE_3D);const _e=O(U,b),ye=b.source;t.bindTexture(ce,U.__webglTexture,s.TEXTURE0+ie);const Ge=i.get(ye);if(ye.version!==Ge.__version||_e===!0){t.activeTexture(s.TEXTURE0+ie);const Ae=Mt.getPrimaries(Mt.workingColorSpace),Me=b.colorSpace===vr?null:Mt.getPrimaries(b.colorSpace),Ze=b.colorSpace===vr||Ae===Me?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);let Ee=M(b.image,!1,o.maxTextureSize);Ee=lt(b,Ee);const He=a.convert(b.format,b.colorSpace),at=a.convert(b.type);let qe=C(b.internalFormat,He,at,b.colorSpace,b.isVideoTexture);Y(ce,b);let Le;const nt=b.mipmaps,ht=b.isVideoTexture!==!0,Ct=Ge.__version===void 0||_e===!0,et=ye.dataReady,H=T(b,Ee);if(b.isDepthTexture)qe=s.DEPTH_COMPONENT16,b.type===xr?qe=s.DEPTH_COMPONENT32F:b.type===go?qe=s.DEPTH_COMPONENT24:b.type===ga&&(qe=s.DEPTH24_STENCIL8),Ct&&(ht?t.texStorage2D(s.TEXTURE_2D,1,qe,Ee.width,Ee.height):t.texImage2D(s.TEXTURE_2D,0,qe,Ee.width,Ee.height,0,He,at,null));else if(b.isDataTexture)if(nt.length>0){ht&&Ct&&t.texStorage2D(s.TEXTURE_2D,H,qe,nt[0].width,nt[0].height);for(let he=0,le=nt.length;he<le;he++)Le=nt[he],ht?et&&t.texSubImage2D(s.TEXTURE_2D,he,0,0,Le.width,Le.height,He,at,Le.data):t.texImage2D(s.TEXTURE_2D,he,qe,Le.width,Le.height,0,He,at,Le.data);b.generateMipmaps=!1}else ht?(Ct&&t.texStorage2D(s.TEXTURE_2D,H,qe,Ee.width,Ee.height),et&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ee.width,Ee.height,He,at,Ee.data)):t.texImage2D(s.TEXTURE_2D,0,qe,Ee.width,Ee.height,0,He,at,Ee.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ht&&Ct&&t.texStorage3D(s.TEXTURE_2D_ARRAY,H,qe,nt[0].width,nt[0].height,Ee.depth);for(let he=0,le=nt.length;he<le;he++)Le=nt[he],b.format!==yi?He!==null?ht?et&&t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,he,0,0,0,Le.width,Le.height,Ee.depth,He,Le.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,he,qe,Le.width,Le.height,Ee.depth,0,Le.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ht?et&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,he,0,0,0,Le.width,Le.height,Ee.depth,He,at,Le.data):t.texImage3D(s.TEXTURE_2D_ARRAY,he,qe,Le.width,Le.height,Ee.depth,0,He,at,Le.data)}else{ht&&Ct&&t.texStorage2D(s.TEXTURE_2D,H,qe,nt[0].width,nt[0].height);for(let he=0,le=nt.length;he<le;he++)Le=nt[he],b.format!==yi?He!==null?ht?et&&t.compressedTexSubImage2D(s.TEXTURE_2D,he,0,0,Le.width,Le.height,He,Le.data):t.compressedTexImage2D(s.TEXTURE_2D,he,qe,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ht?et&&t.texSubImage2D(s.TEXTURE_2D,he,0,0,Le.width,Le.height,He,at,Le.data):t.texImage2D(s.TEXTURE_2D,he,qe,Le.width,Le.height,0,He,at,Le.data)}else if(b.isDataArrayTexture)ht?(Ct&&t.texStorage3D(s.TEXTURE_2D_ARRAY,H,qe,Ee.width,Ee.height,Ee.depth),et&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,He,at,Ee.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,qe,Ee.width,Ee.height,Ee.depth,0,He,at,Ee.data);else if(b.isData3DTexture)ht?(Ct&&t.texStorage3D(s.TEXTURE_3D,H,qe,Ee.width,Ee.height,Ee.depth),et&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,He,at,Ee.data)):t.texImage3D(s.TEXTURE_3D,0,qe,Ee.width,Ee.height,Ee.depth,0,He,at,Ee.data);else if(b.isFramebufferTexture){if(Ct)if(ht)t.texStorage2D(s.TEXTURE_2D,H,qe,Ee.width,Ee.height);else{let he=Ee.width,le=Ee.height;for(let we=0;we<H;we++)t.texImage2D(s.TEXTURE_2D,we,qe,he,le,0,He,at,null),he>>=1,le>>=1}}else if(nt.length>0){if(ht&&Ct){const he=Rt(nt[0]);t.texStorage2D(s.TEXTURE_2D,H,qe,he.width,he.height)}for(let he=0,le=nt.length;he<le;he++)Le=nt[he],ht?et&&t.texSubImage2D(s.TEXTURE_2D,he,0,0,He,at,Le):t.texImage2D(s.TEXTURE_2D,he,qe,He,at,Le);b.generateMipmaps=!1}else if(ht){if(Ct){const he=Rt(Ee);t.texStorage2D(s.TEXTURE_2D,H,qe,he.width,he.height)}et&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,He,at,Ee)}else t.texImage2D(s.TEXTURE_2D,0,qe,He,at,Ee);y(b)&&x(ce),Ge.__version=ye.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function Pe(U,b,ie){if(b.image.length!==6)return;const ce=O(U,b),_e=b.source;t.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+ie);const ye=i.get(_e);if(_e.version!==ye.__version||ce===!0){t.activeTexture(s.TEXTURE0+ie);const Ge=Mt.getPrimaries(Mt.workingColorSpace),Ae=b.colorSpace===vr?null:Mt.getPrimaries(b.colorSpace),Me=b.colorSpace===vr||Ge===Ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const Ze=b.isCompressedTexture||b.image[0].isCompressedTexture,Ee=b.image[0]&&b.image[0].isDataTexture,He=[];for(let le=0;le<6;le++)!Ze&&!Ee?He[le]=M(b.image[le],!0,o.maxCubemapSize):He[le]=Ee?b.image[le].image:b.image[le],He[le]=lt(b,He[le]);const at=He[0],qe=a.convert(b.format,b.colorSpace),Le=a.convert(b.type),nt=C(b.internalFormat,qe,Le,b.colorSpace),ht=b.isVideoTexture!==!0,Ct=ye.__version===void 0||ce===!0,et=_e.dataReady;let H=T(b,at);Y(s.TEXTURE_CUBE_MAP,b);let he;if(Ze){ht&&Ct&&t.texStorage2D(s.TEXTURE_CUBE_MAP,H,nt,at.width,at.height);for(let le=0;le<6;le++){he=He[le].mipmaps;for(let we=0;we<he.length;we++){const Re=he[we];b.format!==yi?qe!==null?ht?et&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,we,0,0,Re.width,Re.height,qe,Re.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,we,nt,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ht?et&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,we,0,0,Re.width,Re.height,qe,Le,Re.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,we,nt,Re.width,Re.height,0,qe,Le,Re.data)}}}else{if(he=b.mipmaps,ht&&Ct){he.length>0&&H++;const le=Rt(He[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,H,nt,le.width,le.height)}for(let le=0;le<6;le++)if(Ee){ht?et&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,He[le].width,He[le].height,qe,Le,He[le].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,nt,He[le].width,He[le].height,0,qe,Le,He[le].data);for(let we=0;we<he.length;we++){const ft=he[we].image[le].image;ht?et&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,we+1,0,0,ft.width,ft.height,qe,Le,ft.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,we+1,nt,ft.width,ft.height,0,qe,Le,ft.data)}}else{ht?et&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,qe,Le,He[le]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,nt,qe,Le,He[le]);for(let we=0;we<he.length;we++){const Re=he[we];ht?et&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,we+1,0,0,qe,Le,Re.image[le]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,we+1,nt,qe,Le,Re.image[le])}}}y(b)&&x(s.TEXTURE_CUBE_MAP),ye.__version=_e.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function $(U,b,ie,ce,_e,ye){const Ge=a.convert(ie.format,ie.colorSpace),Ae=a.convert(ie.type),Me=C(ie.internalFormat,Ge,Ae,ie.colorSpace);if(!i.get(b).__hasExternalTextures){const Ee=Math.max(1,b.width>>ye),He=Math.max(1,b.height>>ye);_e===s.TEXTURE_3D||_e===s.TEXTURE_2D_ARRAY?t.texImage3D(_e,ye,Me,Ee,He,b.depth,0,Ge,Ae,null):t.texImage2D(_e,ye,Me,Ee,He,0,Ge,Ae,null)}t.bindFramebuffer(s.FRAMEBUFFER,U),dt(b)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ce,_e,i.get(ie).__webglTexture,0,Xe(b)):(_e===s.TEXTURE_2D||_e>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,ce,_e,i.get(ie).__webglTexture,ye),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ue(U,b,ie){if(s.bindRenderbuffer(s.RENDERBUFFER,U),b.depthBuffer&&!b.stencilBuffer){let ce=s.DEPTH_COMPONENT24;if(ie||dt(b)){const _e=b.depthTexture;_e&&_e.isDepthTexture&&(_e.type===xr?ce=s.DEPTH_COMPONENT32F:_e.type===go&&(ce=s.DEPTH_COMPONENT24));const ye=Xe(b);dt(b)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ye,ce,b.width,b.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,ye,ce,b.width,b.height)}else s.renderbufferStorage(s.RENDERBUFFER,ce,b.width,b.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,U)}else if(b.depthBuffer&&b.stencilBuffer){const ce=Xe(b);ie&&dt(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ce,s.DEPTH24_STENCIL8,b.width,b.height):dt(b)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ce,s.DEPTH24_STENCIL8,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,U)}else{const ce=b.textures;for(let _e=0;_e<ce.length;_e++){const ye=ce[_e],Ge=a.convert(ye.format,ye.colorSpace),Ae=a.convert(ye.type),Me=C(ye.internalFormat,Ge,Ae,ye.colorSpace),Ze=Xe(b);ie&&dt(b)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ze,Me,b.width,b.height):dt(b)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ze,Me,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Me,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function xe(U,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,U),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),z(b.depthTexture,0);const ce=i.get(b.depthTexture).__webglTexture,_e=Xe(b);if(b.depthTexture.format===ho)dt(b)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ce,0,_e):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ce,0);else if(b.depthTexture.format===pa)dt(b)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ce,0,_e):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ce,0);else throw new Error("Unknown depthTexture format")}function me(U){const b=i.get(U),ie=U.isWebGLCubeRenderTarget===!0;if(U.depthTexture&&!b.__autoAllocateDepthBuffer){if(ie)throw new Error("target.depthTexture not supported in Cube render targets");xe(b.__webglFramebuffer,U)}else if(ie){b.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[ce]),b.__webglDepthbuffer[ce]=s.createRenderbuffer(),ue(b.__webglDepthbuffer[ce],U,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=s.createRenderbuffer(),ue(b.__webglDepthbuffer,U,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function De(U,b,ie){const ce=i.get(U);b!==void 0&&$(ce.__webglFramebuffer,U,U.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ie!==void 0&&me(U)}function Fe(U){const b=U.texture,ie=i.get(U),ce=i.get(b);U.addEventListener("dispose",V);const _e=U.textures,ye=U.isWebGLCubeRenderTarget===!0,Ge=_e.length>1;if(Ge||(ce.__webglTexture===void 0&&(ce.__webglTexture=s.createTexture()),ce.__version=b.version,u.memory.textures++),ye){ie.__webglFramebuffer=[];for(let Ae=0;Ae<6;Ae++)if(b.mipmaps&&b.mipmaps.length>0){ie.__webglFramebuffer[Ae]=[];for(let Me=0;Me<b.mipmaps.length;Me++)ie.__webglFramebuffer[Ae][Me]=s.createFramebuffer()}else ie.__webglFramebuffer[Ae]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){ie.__webglFramebuffer=[];for(let Ae=0;Ae<b.mipmaps.length;Ae++)ie.__webglFramebuffer[Ae]=s.createFramebuffer()}else ie.__webglFramebuffer=s.createFramebuffer();if(Ge)for(let Ae=0,Me=_e.length;Ae<Me;Ae++){const Ze=i.get(_e[Ae]);Ze.__webglTexture===void 0&&(Ze.__webglTexture=s.createTexture(),u.memory.textures++)}if(U.samples>0&&dt(U)===!1){ie.__webglMultisampledFramebuffer=s.createFramebuffer(),ie.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,ie.__webglMultisampledFramebuffer);for(let Ae=0;Ae<_e.length;Ae++){const Me=_e[Ae];ie.__webglColorRenderbuffer[Ae]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ie.__webglColorRenderbuffer[Ae]);const Ze=a.convert(Me.format,Me.colorSpace),Ee=a.convert(Me.type),He=C(Me.internalFormat,Ze,Ee,Me.colorSpace,U.isXRRenderTarget===!0),at=Xe(U);s.renderbufferStorageMultisample(s.RENDERBUFFER,at,He,U.width,U.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ae,s.RENDERBUFFER,ie.__webglColorRenderbuffer[Ae])}s.bindRenderbuffer(s.RENDERBUFFER,null),U.depthBuffer&&(ie.__webglDepthRenderbuffer=s.createRenderbuffer(),ue(ie.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ye){t.bindTexture(s.TEXTURE_CUBE_MAP,ce.__webglTexture),Y(s.TEXTURE_CUBE_MAP,b);for(let Ae=0;Ae<6;Ae++)if(b.mipmaps&&b.mipmaps.length>0)for(let Me=0;Me<b.mipmaps.length;Me++)$(ie.__webglFramebuffer[Ae][Me],U,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Me);else $(ie.__webglFramebuffer[Ae],U,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0);y(b)&&x(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ge){for(let Ae=0,Me=_e.length;Ae<Me;Ae++){const Ze=_e[Ae],Ee=i.get(Ze);t.bindTexture(s.TEXTURE_2D,Ee.__webglTexture),Y(s.TEXTURE_2D,Ze),$(ie.__webglFramebuffer,U,Ze,s.COLOR_ATTACHMENT0+Ae,s.TEXTURE_2D,0),y(Ze)&&x(s.TEXTURE_2D)}t.unbindTexture()}else{let Ae=s.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ae=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ae,ce.__webglTexture),Y(Ae,b),b.mipmaps&&b.mipmaps.length>0)for(let Me=0;Me<b.mipmaps.length;Me++)$(ie.__webglFramebuffer[Me],U,b,s.COLOR_ATTACHMENT0,Ae,Me);else $(ie.__webglFramebuffer,U,b,s.COLOR_ATTACHMENT0,Ae,0);y(b)&&x(Ae),t.unbindTexture()}U.depthBuffer&&me(U)}function W(U){const b=U.textures;for(let ie=0,ce=b.length;ie<ce;ie++){const _e=b[ie];if(y(_e)){const ye=U.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Ge=i.get(_e).__webglTexture;t.bindTexture(ye,Ge),x(ye),t.unbindTexture()}}}const yt=[],$e=[];function vt(U){if(U.samples>0){if(dt(U)===!1){const b=U.textures,ie=U.width,ce=U.height;let _e=s.COLOR_BUFFER_BIT;const ye=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ge=i.get(U),Ae=b.length>1;if(Ae)for(let Me=0;Me<b.length;Me++)t.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Me,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Me,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let Me=0;Me<b.length;Me++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(_e|=s.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(_e|=s.STENCIL_BUFFER_BIT)),Ae){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ge.__webglColorRenderbuffer[Me]);const Ze=i.get(b[Me]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ze,0)}s.blitFramebuffer(0,0,ie,ce,0,0,ie,ce,_e,s.NEAREST),h===!0&&(yt.length=0,$e.length=0,yt.push(s.COLOR_ATTACHMENT0+Me),U.depthBuffer&&U.resolveDepthBuffer===!1&&(yt.push(ye),$e.push(ye),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,$e)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,yt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ae)for(let Me=0;Me<b.length;Me++){t.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Me,s.RENDERBUFFER,Ge.__webglColorRenderbuffer[Me]);const Ze=i.get(b[Me]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ge.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Me,s.TEXTURE_2D,Ze,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&h){const b=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function Xe(U){return Math.min(o.maxSamples,U.samples)}function dt(U){const b=i.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function it(U){const b=u.render.frame;m.get(U)!==b&&(m.set(U,b),U.update())}function lt(U,b){const ie=U.colorSpace,ce=U.format,_e=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||ie!==br&&ie!==vr&&(Mt.getTransfer(ie)===Dt?(ce!==yi||_e!==Mr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ie)),b}function Rt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(f.width=U.naturalWidth||U.width,f.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(f.width=U.displayWidth,f.height=U.displayHeight):(f.width=U.width,f.height=U.height),f}this.allocateTextureUnit=q,this.resetTextureUnits=A,this.setTexture2D=z,this.setTexture2DArray=ae,this.setTexture3D=oe,this.setTextureCube=ge,this.rebindTextures=De,this.setupRenderTarget=Fe,this.updateRenderTargetMipmap=W,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=me,this.setupFrameBufferTexture=$,this.useMultisampledRTT=dt}function UM(s,e){function t(i,o=vr){let a;const u=Mt.getTransfer(o);if(i===Mr)return s.UNSIGNED_BYTE;if(i===Yg)return s.UNSIGNED_SHORT_4_4_4_4;if(i===Kg)return s.UNSIGNED_SHORT_5_5_5_1;if(i===py)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===hy)return s.BYTE;if(i===fy)return s.SHORT;if(i===Xg)return s.UNSIGNED_SHORT;if(i===qg)return s.INT;if(i===go)return s.UNSIGNED_INT;if(i===xr)return s.FLOAT;if(i===cu)return s.HALF_FLOAT;if(i===my)return s.ALPHA;if(i===gy)return s.RGB;if(i===yi)return s.RGBA;if(i===_y)return s.LUMINANCE;if(i===vy)return s.LUMINANCE_ALPHA;if(i===ho)return s.DEPTH_COMPONENT;if(i===pa)return s.DEPTH_STENCIL;if(i===yy)return s.RED;if(i===Jg)return s.RED_INTEGER;if(i===xy)return s.RG;if(i===Zg)return s.RG_INTEGER;if(i===Qg)return s.RGBA_INTEGER;if(i===rd||i===sd||i===od||i===ad)if(u===Dt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===rd)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===sd)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===od)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ad)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===rd)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===sd)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===od)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ad)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===im||i===rm||i===sm||i===om)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===im)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===rm)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===sm)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===om)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===am||i===lm||i===um)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===am||i===lm)return u===Dt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===um)return u===Dt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===cm||i===dm||i===hm||i===fm||i===pm||i===mm||i===gm||i===_m||i===vm||i===ym||i===xm||i===Sm||i===Em||i===wm)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===cm)return u===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===dm)return u===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===hm)return u===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===fm)return u===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===pm)return u===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===mm)return u===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===gm)return u===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===_m)return u===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===vm)return u===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ym)return u===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===xm)return u===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Sm)return u===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Em)return u===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===wm)return u===Dt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ld||i===Mm||i===Tm)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===ld)return u===Dt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Mm)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Tm)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Sy||i===bm||i===Am||i===Rm)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===ld)return a.COMPRESSED_RED_RGTC1_EXT;if(i===bm)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Am)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Rm)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ga?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:t}}class NM extends Yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Xl extends zn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const OM={type:"move"};class Nd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ee,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ee),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ee,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ee),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let o=null,a=null,u=null;const d=this._targetRay,h=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){u=!0;for(const M of e.hand.values()){const y=t.getJointPose(M,i),x=this._getHandJoint(f,M);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const m=f.joints["index-finger-tip"],_=f.joints["thumb-tip"],v=m.position.distanceTo(_.position),S=.02,w=.005;f.inputState.pinching&&v>S+w?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&v<=S-w&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(h.matrix.fromArray(a.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,a.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(a.linearVelocity)):h.hasLinearVelocity=!1,a.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(a.angularVelocity)):h.hasAngularVelocity=!1));d!==null&&(o=t.getPose(e.targetRaySpace,i),o===null&&a!==null&&(o=a),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(OM)))}return d!==null&&(d.visible=o!==null),h!==null&&(h.visible=a!==null),f!==null&&(f.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Xl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const kM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,FM=`
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

}`;class BM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const o=new In,a=e.properties.get(o);a.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}render(e,t){if(this.texture!==null){if(this.mesh===null){const i=t.cameras[0].viewport,o=new Tr({vertexShader:kM,fragmentShader:FM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ui(new fu(20,20),o)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class zM extends yo{constructor(e,t){super();const i=this;let o=null,a=1,u=null,d="local-floor",h=1,f=null,m=null,_=null,v=null,S=null,w=null;const M=new BM,y=t.getContextAttributes();let x=null,C=null;const T=[],L=[],V=new xt;let D=null;const N=new Yn;N.layers.enable(1),N.viewport=new cn;const Q=new Yn;Q.layers.enable(2),Q.viewport=new cn;const P=[N,Q],A=new NM;A.layers.enable(1),A.layers.enable(2);let q=null,se=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ue=T[$];return ue===void 0&&(ue=new Nd,T[$]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function($){let ue=T[$];return ue===void 0&&(ue=new Nd,T[$]=ue),ue.getGripSpace()},this.getHand=function($){let ue=T[$];return ue===void 0&&(ue=new Nd,T[$]=ue),ue.getHandSpace()};function z($){const ue=L.indexOf($.inputSource);if(ue===-1)return;const xe=T[ue];xe!==void 0&&(xe.update($.inputSource,$.frame,f||u),xe.dispatchEvent({type:$.type,data:$.inputSource}))}function ae(){o.removeEventListener("select",z),o.removeEventListener("selectstart",z),o.removeEventListener("selectend",z),o.removeEventListener("squeeze",z),o.removeEventListener("squeezestart",z),o.removeEventListener("squeezeend",z),o.removeEventListener("end",ae),o.removeEventListener("inputsourceschange",oe);for(let $=0;$<T.length;$++){const ue=L[$];ue!==null&&(L[$]=null,T[$].disconnect(ue))}q=null,se=null,M.reset(),e.setRenderTarget(x),S=null,v=null,_=null,o=null,C=null,Pe.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(V.width,V.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){a=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){d=$,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||u},this.setReferenceSpace=function($){f=$},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return _},this.getFrame=function(){return w},this.getSession=function(){return o},this.setSession=async function($){if(o=$,o!==null){if(x=e.getRenderTarget(),o.addEventListener("select",z),o.addEventListener("selectstart",z),o.addEventListener("selectend",z),o.addEventListener("squeeze",z),o.addEventListener("squeezestart",z),o.addEventListener("squeezeend",z),o.addEventListener("end",ae),o.addEventListener("inputsourceschange",oe),y.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(V),o.renderState.layers===void 0){const ue={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:a};S=new XRWebGLLayer(o,t,ue),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),C=new os(S.framebufferWidth,S.framebufferHeight,{format:yi,type:Mr,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let ue=null,xe=null,me=null;y.depth&&(me=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=y.stencil?pa:ho,xe=y.stencil?ga:go);const De={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:a};_=new XRWebGLBinding(o,t),v=_.createProjectionLayer(De),o.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),C=new os(v.textureWidth,v.textureHeight,{format:yi,type:Mr,depthTexture:new f_(v.textureWidth,v.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(h),f=null,u=await o.requestReferenceSpace(d),Pe.setContext(o),Pe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode};function oe($){for(let ue=0;ue<$.removed.length;ue++){const xe=$.removed[ue],me=L.indexOf(xe);me>=0&&(L[me]=null,T[me].disconnect(xe))}for(let ue=0;ue<$.added.length;ue++){const xe=$.added[ue];let me=L.indexOf(xe);if(me===-1){for(let Fe=0;Fe<T.length;Fe++)if(Fe>=L.length){L.push(xe),me=Fe;break}else if(L[Fe]===null){L[Fe]=xe,me=Fe;break}if(me===-1)break}const De=T[me];De&&De.connect(xe)}}const ge=new ee,de=new ee;function F($,ue,xe){ge.setFromMatrixPosition(ue.matrixWorld),de.setFromMatrixPosition(xe.matrixWorld);const me=ge.distanceTo(de),De=ue.projectionMatrix.elements,Fe=xe.projectionMatrix.elements,W=De[14]/(De[10]-1),yt=De[14]/(De[10]+1),$e=(De[9]+1)/De[5],vt=(De[9]-1)/De[5],Xe=(De[8]-1)/De[0],dt=(Fe[8]+1)/Fe[0],it=W*Xe,lt=W*dt,Rt=me/(-Xe+dt),U=Rt*-Xe;ue.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(U),$.translateZ(Rt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert();const b=W+Rt,ie=yt+Rt,ce=it-U,_e=lt+(me-U),ye=$e*yt/ie*b,Ge=vt*yt/ie*b;$.projectionMatrix.makePerspective(ce,_e,ye,Ge,b,ie),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}function re($,ue){ue===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ue.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(o===null)return;M.texture!==null&&($.near=M.depthNear,$.far=M.depthFar),A.near=Q.near=N.near=$.near,A.far=Q.far=N.far=$.far,(q!==A.near||se!==A.far)&&(o.updateRenderState({depthNear:A.near,depthFar:A.far}),q=A.near,se=A.far,N.near=q,N.far=se,Q.near=q,Q.far=se,N.updateProjectionMatrix(),Q.updateProjectionMatrix(),$.updateProjectionMatrix());const ue=$.parent,xe=A.cameras;re(A,ue);for(let me=0;me<xe.length;me++)re(xe[me],ue);xe.length===2?F(A,N,Q):A.projectionMatrix.copy(N.projectionMatrix),Y($,A,ue)};function Y($,ue,xe){xe===null?$.matrix.copy(ue.matrixWorld):($.matrix.copy(xe.matrixWorld),$.matrix.invert(),$.matrix.multiply(ue.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ue.projectionMatrix),$.projectionMatrixInverse.copy(ue.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Jd*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(v===null&&S===null))return h},this.setFoveation=function($){h=$,v!==null&&(v.fixedFoveation=$),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=$)},this.hasDepthSensing=function(){return M.texture!==null};let O=null;function ne($,ue){if(m=ue.getViewerPose(f||u),w=ue,m!==null){const xe=m.views;S!==null&&(e.setRenderTargetFramebuffer(C,S.framebuffer),e.setRenderTarget(C));let me=!1;xe.length!==A.cameras.length&&(A.cameras.length=0,me=!0);for(let Fe=0;Fe<xe.length;Fe++){const W=xe[Fe];let yt=null;if(S!==null)yt=S.getViewport(W);else{const vt=_.getViewSubImage(v,W);yt=vt.viewport,Fe===0&&(e.setRenderTargetTextures(C,vt.colorTexture,v.ignoreDepthValues?void 0:vt.depthStencilTexture),e.setRenderTarget(C))}let $e=P[Fe];$e===void 0&&($e=new Yn,$e.layers.enable(Fe),$e.viewport=new cn,P[Fe]=$e),$e.matrix.fromArray(W.transform.matrix),$e.matrix.decompose($e.position,$e.quaternion,$e.scale),$e.projectionMatrix.fromArray(W.projectionMatrix),$e.projectionMatrixInverse.copy($e.projectionMatrix).invert(),$e.viewport.set(yt.x,yt.y,yt.width,yt.height),Fe===0&&(A.matrix.copy($e.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),me===!0&&A.cameras.push($e)}const De=o.enabledFeatures;if(De&&De.includes("depth-sensing")){const Fe=_.getDepthInformation(xe[0]);Fe&&Fe.isValid&&Fe.texture&&M.init(e,Fe,o.renderState)}}for(let xe=0;xe<T.length;xe++){const me=L[xe],De=T[xe];me!==null&&De!==void 0&&De.update(me,ue,f||u)}M.render(e,A),O&&O($,ue),ue.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ue}),w=null}const Pe=new h_;Pe.setAnimationLoop(ne),this.setAnimationLoop=function($){O=$},this.dispose=function(){}}}const qr=new Hi,HM=new Kt;function VM(s,e){function t(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function i(y,x){x.color.getRGB(y.fogColor.value,l_(s)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function o(y,x,C,T,L){x.isMeshBasicMaterial||x.isMeshLambertMaterial?a(y,x):x.isMeshToonMaterial?(a(y,x),_(y,x)):x.isMeshPhongMaterial?(a(y,x),m(y,x)):x.isMeshStandardMaterial?(a(y,x),v(y,x),x.isMeshPhysicalMaterial&&S(y,x,L)):x.isMeshMatcapMaterial?(a(y,x),w(y,x)):x.isMeshDepthMaterial?a(y,x):x.isMeshDistanceMaterial?(a(y,x),M(y,x)):x.isMeshNormalMaterial?a(y,x):x.isLineBasicMaterial?(u(y,x),x.isLineDashedMaterial&&d(y,x)):x.isPointsMaterial?h(y,x,C,T):x.isSpriteMaterial?f(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function a(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,t(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===Ln&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,t(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===Ln&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,t(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,t(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const C=e.get(x),T=C.envMap,L=C.envMapRotation;if(T&&(y.envMap.value=T,qr.copy(L),qr.x*=-1,qr.y*=-1,qr.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(qr.y*=-1,qr.z*=-1),y.envMapRotation.value.setFromMatrix4(HM.makeRotationFromEuler(qr)),y.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap){y.lightMap.value=x.lightMap;const V=s._useLegacyLights===!0?Math.PI:1;y.lightMapIntensity.value=x.lightMapIntensity*V,t(x.lightMap,y.lightMapTransform)}x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,y.aoMapTransform))}function u(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform))}function d(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function h(y,x,C,T){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*C,y.scale.value=T*.5,x.map&&(y.map.value=x.map,t(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function f(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function m(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function _(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function v(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function S(y,x,C){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Ln&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=C.texture,y.transmissionSamplerSize.value.set(C.width,C.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,y.specularIntensityMapTransform))}function w(y,x){x.matcap&&(y.matcap.value=x.matcap)}function M(y,x){const C=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(C.matrixWorld),y.nearDistance.value=C.shadow.camera.near,y.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:o}}function GM(s,e,t,i){let o={},a={},u=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(C,T){const L=T.program;i.uniformBlockBinding(C,L)}function f(C,T){let L=o[C.id];L===void 0&&(w(C),L=m(C),o[C.id]=L,C.addEventListener("dispose",y));const V=T.program;i.updateUBOMapping(C,V);const D=e.render.frame;a[C.id]!==D&&(v(C),a[C.id]=D)}function m(C){const T=_();C.__bindingPointIndex=T;const L=s.createBuffer(),V=C.__size,D=C.usage;return s.bindBuffer(s.UNIFORM_BUFFER,L),s.bufferData(s.UNIFORM_BUFFER,V,D),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,T,L),L}function _(){for(let C=0;C<d;C++)if(u.indexOf(C)===-1)return u.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(C){const T=o[C.id],L=C.uniforms,V=C.__cache;s.bindBuffer(s.UNIFORM_BUFFER,T);for(let D=0,N=L.length;D<N;D++){const Q=Array.isArray(L[D])?L[D]:[L[D]];for(let P=0,A=Q.length;P<A;P++){const q=Q[P];if(S(q,D,P,V)===!0){const se=q.__offset,z=Array.isArray(q.value)?q.value:[q.value];let ae=0;for(let oe=0;oe<z.length;oe++){const ge=z[oe],de=M(ge);typeof ge=="number"||typeof ge=="boolean"?(q.__data[0]=ge,s.bufferSubData(s.UNIFORM_BUFFER,se+ae,q.__data)):ge.isMatrix3?(q.__data[0]=ge.elements[0],q.__data[1]=ge.elements[1],q.__data[2]=ge.elements[2],q.__data[3]=0,q.__data[4]=ge.elements[3],q.__data[5]=ge.elements[4],q.__data[6]=ge.elements[5],q.__data[7]=0,q.__data[8]=ge.elements[6],q.__data[9]=ge.elements[7],q.__data[10]=ge.elements[8],q.__data[11]=0):(ge.toArray(q.__data,ae),ae+=de.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,se,q.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(C,T,L,V){const D=C.value,N=T+"_"+L;if(V[N]===void 0)return typeof D=="number"||typeof D=="boolean"?V[N]=D:V[N]=D.clone(),!0;{const Q=V[N];if(typeof D=="number"||typeof D=="boolean"){if(Q!==D)return V[N]=D,!0}else if(Q.equals(D)===!1)return Q.copy(D),!0}return!1}function w(C){const T=C.uniforms;let L=0;const V=16;for(let N=0,Q=T.length;N<Q;N++){const P=Array.isArray(T[N])?T[N]:[T[N]];for(let A=0,q=P.length;A<q;A++){const se=P[A],z=Array.isArray(se.value)?se.value:[se.value];for(let ae=0,oe=z.length;ae<oe;ae++){const ge=z[ae],de=M(ge),F=L%V;F!==0&&V-F<de.boundary&&(L+=V-F),se.__data=new Float32Array(de.storage/Float32Array.BYTES_PER_ELEMENT),se.__offset=L,L+=de.storage}}}const D=L%V;return D>0&&(L+=V-D),C.__size=L,C.__cache={},this}function M(C){const T={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(T.boundary=4,T.storage=4):C.isVector2?(T.boundary=8,T.storage=8):C.isVector3||C.isColor?(T.boundary=16,T.storage=12):C.isVector4?(T.boundary=16,T.storage=16):C.isMatrix3?(T.boundary=48,T.storage=48):C.isMatrix4?(T.boundary=64,T.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),T}function y(C){const T=C.target;T.removeEventListener("dispose",y);const L=u.indexOf(T.__bindingPointIndex);u.splice(L,1),s.deleteBuffer(o[T.id]),delete o[T.id],delete a[T.id]}function x(){for(const C in o)s.deleteBuffer(o[C]);u=[],o={},a={}}return{bind:h,update:f,dispose:x}}class WM{constructor(e={}){const{canvas:t=Uy(),context:i=null,depth:o=!0,stencil:a=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:f=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:_=!1}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=u;const S=new Uint32Array(4),w=new Int32Array(4);let M=null,y=null;const x=[],C=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=gi,this._useLegacyLights=!1,this.toneMapping=Er,this.toneMappingExposure=1;const T=this;let L=!1,V=0,D=0,N=null,Q=-1,P=null;const A=new cn,q=new cn;let se=null;const z=new Et(0);let ae=0,oe=t.width,ge=t.height,de=1,F=null,re=null;const Y=new cn(0,0,oe,ge),O=new cn(0,0,oe,ge);let ne=!1;const Pe=new d_;let $=!1,ue=!1;const xe=new Kt,me=new ee,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Fe(){return N===null?de:1}let W=i;function yt(R,G){return t.getContext(R,G)}try{const R={alpha:!0,depth:o,stencil:a,antialias:d,premultipliedAlpha:h,preserveDrawingBuffer:f,powerPreference:m,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${dh}`),t.addEventListener("webglcontextlost",H,!1),t.addEventListener("webglcontextrestored",he,!1),t.addEventListener("webglcontextcreationerror",le,!1),W===null){const G="webgl2";if(W=yt(G,R),W===null)throw yt(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let $e,vt,Xe,dt,it,lt,Rt,U,b,ie,ce,_e,ye,Ge,Ae,Me,Ze,Ee,He,at,qe,Le,nt,ht;function Ct(){$e=new ZE(W),$e.init(),Le=new UM(W,$e),vt=new jE(W,$e,e,Le),Xe=new IM(W),dt=new tw(W),it=new vM,lt=new DM(W,$e,Xe,it,vt,Le,dt),Rt=new XE(T),U=new JE(T),b=new ax(W),nt=new GE(W,b),ie=new QE(W,b,dt,nt),ce=new iw(W,ie,b,dt),He=new nw(W,vt,lt),Me=new $E(it),_e=new _M(T,Rt,U,$e,vt,nt,Me),ye=new VM(T,it),Ge=new xM,Ae=new bM($e),Ee=new VE(T,Rt,U,Xe,ce,v,h),Ze=new LM(T,ce,vt),ht=new GM(W,dt,vt,Xe),at=new WE(W,$e,dt),qe=new ew(W,$e,dt),dt.programs=_e.programs,T.capabilities=vt,T.extensions=$e,T.properties=it,T.renderLists=Ge,T.shadowMap=Ze,T.state=Xe,T.info=dt}Ct();const et=new zM(T,W);this.xr=et,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const R=$e.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=$e.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(R){R!==void 0&&(de=R,this.setSize(oe,ge,!1))},this.getSize=function(R){return R.set(oe,ge)},this.setSize=function(R,G,te=!0){if(et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}oe=R,ge=G,t.width=Math.floor(R*de),t.height=Math.floor(G*de),te===!0&&(t.style.width=R+"px",t.style.height=G+"px"),this.setViewport(0,0,R,G)},this.getDrawingBufferSize=function(R){return R.set(oe*de,ge*de).floor()},this.setDrawingBufferSize=function(R,G,te){oe=R,ge=G,de=te,t.width=Math.floor(R*te),t.height=Math.floor(G*te),this.setViewport(0,0,R,G)},this.getCurrentViewport=function(R){return R.copy(A)},this.getViewport=function(R){return R.copy(Y)},this.setViewport=function(R,G,te,J){R.isVector4?Y.set(R.x,R.y,R.z,R.w):Y.set(R,G,te,J),Xe.viewport(A.copy(Y).multiplyScalar(de).round())},this.getScissor=function(R){return R.copy(O)},this.setScissor=function(R,G,te,J){R.isVector4?O.set(R.x,R.y,R.z,R.w):O.set(R,G,te,J),Xe.scissor(q.copy(O).multiplyScalar(de).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(R){Xe.setScissorTest(ne=R)},this.setOpaqueSort=function(R){F=R},this.setTransparentSort=function(R){re=R},this.getClearColor=function(R){return R.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor.apply(Ee,arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha.apply(Ee,arguments)},this.clear=function(R=!0,G=!0,te=!0){let J=0;if(R){let K=!1;if(N!==null){const Te=N.texture.format;K=Te===Qg||Te===Zg||Te===Jg}if(K){const Te=N.texture.type,ke=Te===Mr||Te===go||Te===Xg||Te===ga||Te===Yg||Te===Kg,ze=Ee.getClearColor(),Ye=Ee.getClearAlpha(),Qe=ze.r,Ne=ze.g,rt=ze.b;ke?(S[0]=Qe,S[1]=Ne,S[2]=rt,S[3]=Ye,W.clearBufferuiv(W.COLOR,0,S)):(w[0]=Qe,w[1]=Ne,w[2]=rt,w[3]=Ye,W.clearBufferiv(W.COLOR,0,w))}else J|=W.COLOR_BUFFER_BIT}G&&(J|=W.DEPTH_BUFFER_BIT),te&&(J|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",H,!1),t.removeEventListener("webglcontextrestored",he,!1),t.removeEventListener("webglcontextcreationerror",le,!1),Ge.dispose(),Ae.dispose(),it.dispose(),Rt.dispose(),U.dispose(),ce.dispose(),nt.dispose(),ht.dispose(),_e.dispose(),et.dispose(),et.removeEventListener("sessionstart",gt),et.removeEventListener("sessionend",Sn),Qt.stop()};function H(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const R=dt.autoReset,G=Ze.enabled,te=Ze.autoUpdate,J=Ze.needsUpdate,K=Ze.type;Ct(),dt.autoReset=R,Ze.enabled=G,Ze.autoUpdate=te,Ze.needsUpdate=J,Ze.type=K}function le(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function we(R){const G=R.target;G.removeEventListener("dispose",we),Re(G)}function Re(R){ft(R),it.remove(R)}function ft(R){const G=it.get(R).programs;G!==void 0&&(G.forEach(function(te){_e.releaseProgram(te)}),R.isShaderMaterial&&_e.releaseShaderCache(R))}this.renderBufferDirect=function(R,G,te,J,K,Te){G===null&&(G=De);const ke=K.isMesh&&K.matrixWorld.determinant()<0,ze=gu(R,G,te,J,K);Xe.setMaterial(J,ke);let Ye=te.index,Qe=1;if(J.wireframe===!0){if(Ye=ie.getWireframeAttribute(te),Ye===void 0)return;Qe=2}const Ne=te.drawRange,rt=te.attributes.position;let Ut=Ne.start*Qe,jt=(Ne.start+Ne.count)*Qe;Te!==null&&(Ut=Math.max(Ut,Te.start*Qe),jt=Math.min(jt,(Te.start+Te.count)*Qe)),Ye!==null?(Ut=Math.max(Ut,0),jt=Math.min(jt,Ye.count)):rt!=null&&(Ut=Math.max(Ut,0),jt=Math.min(jt,rt.count));const en=jt-Ut;if(en<0||en===1/0)return;nt.setup(K,J,ze,te,Ye);let Jn,pt=at;if(Ye!==null&&(Jn=b.get(Ye),pt=qe,pt.setIndex(Jn)),K.isMesh)J.wireframe===!0?(Xe.setLineWidth(J.wireframeLinewidth*Fe()),pt.setMode(W.LINES)):pt.setMode(W.TRIANGLES);else if(K.isLine){let Ke=J.linewidth;Ke===void 0&&(Ke=1),Xe.setLineWidth(Ke*Fe()),K.isLineSegments?pt.setMode(W.LINES):K.isLineLoop?pt.setMode(W.LINE_LOOP):pt.setMode(W.LINE_STRIP)}else K.isPoints?pt.setMode(W.POINTS):K.isSprite&&pt.setMode(W.TRIANGLES);if(K.isBatchedMesh)K._multiDrawInstances!==null?pt.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances):pt.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else if(K.isInstancedMesh)pt.renderInstances(Ut,en,K.count);else if(te.isInstancedBufferGeometry){const Ke=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,dn=Math.min(te.instanceCount,Ke);pt.renderInstances(Ut,en,dn)}else pt.render(Ut,en)};function wt(R,G,te){R.transparent===!0&&R.side===Bi&&R.forceSinglePass===!1?(R.side=Ln,R.needsUpdate=!0,Ei(R,G,te),R.side=wr,R.needsUpdate=!0,Ei(R,G,te),R.side=Bi):Ei(R,G,te)}this.compile=function(R,G,te=null){te===null&&(te=R),y=Ae.get(te),y.init(G),C.push(y),te.traverseVisible(function(K){K.isLight&&K.layers.test(G.layers)&&(y.pushLight(K),K.castShadow&&y.pushShadow(K))}),R!==te&&R.traverseVisible(function(K){K.isLight&&K.layers.test(G.layers)&&(y.pushLight(K),K.castShadow&&y.pushShadow(K))}),y.setupLights(T._useLegacyLights);const J=new Set;return R.traverse(function(K){const Te=K.material;if(Te)if(Array.isArray(Te))for(let ke=0;ke<Te.length;ke++){const ze=Te[ke];wt(ze,te,K),J.add(ze)}else wt(Te,te,K),J.add(Te)}),C.pop(),y=null,J},this.compileAsync=function(R,G,te=null){const J=this.compile(R,G,te);return new Promise(K=>{function Te(){if(J.forEach(function(ke){it.get(ke).currentProgram.isReady()&&J.delete(ke)}),J.size===0){K(R);return}setTimeout(Te,10)}$e.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let Pt=null;function Wt(R){Pt&&Pt(R)}function gt(){Qt.stop()}function Sn(){Qt.start()}const Qt=new h_;Qt.setAnimationLoop(Wt),typeof self<"u"&&Qt.setContext(self),this.setAnimationLoop=function(R){Pt=R,et.setAnimationLoop(R),R===null?Qt.stop():Qt.start()},et.addEventListener("sessionstart",gt),et.addEventListener("sessionend",Sn),this.render=function(R,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(et.cameraAutoUpdate===!0&&et.updateCamera(G),G=et.getCamera()),R.isScene===!0&&R.onBeforeRender(T,R,G,N),y=Ae.get(R,C.length),y.init(G),C.push(y),xe.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Pe.setFromProjectionMatrix(xe),ue=this.localClippingEnabled,$=Me.init(this.clippingPlanes,ue),M=Ge.get(R,x.length),M.init(),x.push(M),Vi(R,G,0,T.sortObjects),M.finish(),T.sortObjects===!0&&M.sort(F,re);const te=et.enabled===!1||et.isPresenting===!1||et.hasDepthSensing()===!1;te&&Ee.addToRenderList(M,R),this.info.render.frame++,$===!0&&Me.beginShadows();const J=y.state.shadowsArray;Ze.render(J,R,G),$===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=M.opaque,Te=M.transmissive;if(y.setupLights(T._useLegacyLights),G.isArrayCamera){const ke=G.cameras;if(Te.length>0)for(let ze=0,Ye=ke.length;ze<Ye;ze++){const Qe=ke[ze];Gi(K,Te,R,Qe)}te&&Ee.render(R);for(let ze=0,Ye=ke.length;ze<Ye;ze++){const Qe=ke[ze];ls(M,R,Qe,Qe.viewport)}}else Te.length>0&&Gi(K,Te,R,G),te&&Ee.render(R),ls(M,R,G);N!==null&&(lt.updateMultisampleRenderTarget(N),lt.updateRenderTargetMipmap(N)),R.isScene===!0&&R.onAfterRender(T,R,G),nt.resetDefaultState(),Q=-1,P=null,C.pop(),C.length>0?(y=C[C.length-1],$===!0&&Me.setGlobalState(T.clippingPlanes,y.state.camera)):y=null,x.pop(),x.length>0?M=x[x.length-1]:M=null};function Vi(R,G,te,J){if(R.visible===!1)return;if(R.layers.test(G.layers)){if(R.isGroup)te=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(G);else if(R.isLight)y.pushLight(R),R.castShadow&&y.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Pe.intersectsSprite(R)){J&&me.setFromMatrixPosition(R.matrixWorld).applyMatrix4(xe);const ke=ce.update(R),ze=R.material;ze.visible&&M.push(R,ke,ze,te,me.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Pe.intersectsObject(R))){const ke=ce.update(R),ze=R.material;if(J&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),me.copy(R.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),me.copy(ke.boundingSphere.center)),me.applyMatrix4(R.matrixWorld).applyMatrix4(xe)),Array.isArray(ze)){const Ye=ke.groups;for(let Qe=0,Ne=Ye.length;Qe<Ne;Qe++){const rt=Ye[Qe],Ut=ze[rt.materialIndex];Ut&&Ut.visible&&M.push(R,ke,Ut,te,me.z,rt)}}else ze.visible&&M.push(R,ke,ze,te,me.z,null)}}const Te=R.children;for(let ke=0,ze=Te.length;ke<ze;ke++)Vi(Te[ke],G,te,J)}function ls(R,G,te,J){const K=R.opaque,Te=R.transmissive,ke=R.transparent;y.setupLightsView(te),$===!0&&Me.setGlobalState(T.clippingPlanes,te),J&&Xe.viewport(A.copy(J)),K.length>0&&us(K,G,te),Te.length>0&&us(Te,G,te),ke.length>0&&us(ke,G,te),Xe.buffers.depth.setTest(!0),Xe.buffers.depth.setMask(!0),Xe.buffers.color.setMask(!0),Xe.setPolygonOffset(!1)}function Gi(R,G,te,J){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[J.id]===void 0&&(y.state.transmissionRenderTarget[J.id]=new os(1,1,{generateMipmaps:!0,type:$e.has("EXT_color_buffer_half_float")||$e.has("EXT_color_buffer_float")?cu:Mr,minFilter:rs,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const Te=y.state.transmissionRenderTarget[J.id],ke=J.viewport||A;Te.setSize(ke.z,ke.w);const ze=T.getRenderTarget();T.setRenderTarget(Te),T.getClearColor(z),ae=T.getClearAlpha(),ae<1&&T.setClearColor(16777215,.5),T.clear();const Ye=T.toneMapping;T.toneMapping=Er;const Qe=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),y.setupLightsView(J),$===!0&&Me.setGlobalState(T.clippingPlanes,J),us(R,te,J),lt.updateMultisampleRenderTarget(Te),lt.updateRenderTargetMipmap(Te),$e.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let rt=0,Ut=G.length;rt<Ut;rt++){const jt=G[rt],en=jt.object,Jn=jt.geometry,pt=jt.material,Ke=jt.group;if(pt.side===Bi&&en.layers.test(J.layers)){const dn=pt.side;pt.side=Ln,pt.needsUpdate=!0,Wi(en,te,J,Jn,pt,Ke),pt.side=dn,pt.needsUpdate=!0,Ne=!0}}Ne===!0&&(lt.updateMultisampleRenderTarget(Te),lt.updateRenderTargetMipmap(Te))}T.setRenderTarget(ze),T.setClearColor(z,ae),Qe!==void 0&&(J.viewport=Qe),T.toneMapping=Ye}function us(R,G,te){const J=G.isScene===!0?G.overrideMaterial:null;for(let K=0,Te=R.length;K<Te;K++){const ke=R[K],ze=ke.object,Ye=ke.geometry,Qe=J===null?ke.material:J,Ne=ke.group;ze.layers.test(te.layers)&&Wi(ze,G,te,Ye,Qe,Ne)}}function Wi(R,G,te,J,K,Te){R.onBeforeRender(T,G,te,J,K,Te),R.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),K.onBeforeRender(T,G,te,J,R,Te),K.transparent===!0&&K.side===Bi&&K.forceSinglePass===!1?(K.side=Ln,K.needsUpdate=!0,T.renderBufferDirect(te,G,J,K,R,Te),K.side=wr,K.needsUpdate=!0,T.renderBufferDirect(te,G,J,K,R,Te),K.side=Bi):T.renderBufferDirect(te,G,J,K,R,Te),R.onAfterRender(T,G,te,J,K,Te)}function Ei(R,G,te){G.isScene!==!0&&(G=De);const J=it.get(R),K=y.state.lights,Te=y.state.shadowsArray,ke=K.state.version,ze=_e.getParameters(R,K.state,Te,G,te),Ye=_e.getProgramCacheKey(ze);let Qe=J.programs;J.environment=R.isMeshStandardMaterial?G.environment:null,J.fog=G.fog,J.envMap=(R.isMeshStandardMaterial?U:Rt).get(R.envMap||J.environment),J.envMapRotation=J.environment!==null&&R.envMap===null?G.environmentRotation:R.envMapRotation,Qe===void 0&&(R.addEventListener("dispose",we),Qe=new Map,J.programs=Qe);let Ne=Qe.get(Ye);if(Ne!==void 0){if(J.currentProgram===Ne&&J.lightsStateVersion===ke)return cs(R,ze),Ne}else ze.uniforms=_e.getUniforms(R),R.onBuild(te,ze,T),R.onBeforeCompile(ze,T),Ne=_e.acquireProgram(ze,Ye),Qe.set(Ye,Ne),J.uniforms=ze.uniforms;const rt=J.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(rt.clippingPlanes=Me.uniform),cs(R,ze),J.needsLights=vu(R),J.lightsStateVersion=ke,J.needsLights&&(rt.ambientLightColor.value=K.state.ambient,rt.lightProbe.value=K.state.probe,rt.directionalLights.value=K.state.directional,rt.directionalLightShadows.value=K.state.directionalShadow,rt.spotLights.value=K.state.spot,rt.spotLightShadows.value=K.state.spotShadow,rt.rectAreaLights.value=K.state.rectArea,rt.ltc_1.value=K.state.rectAreaLTC1,rt.ltc_2.value=K.state.rectAreaLTC2,rt.pointLights.value=K.state.point,rt.pointLightShadows.value=K.state.pointShadow,rt.hemisphereLights.value=K.state.hemi,rt.directionalShadowMap.value=K.state.directionalShadowMap,rt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,rt.spotShadowMap.value=K.state.spotShadowMap,rt.spotLightMatrix.value=K.state.spotLightMatrix,rt.spotLightMap.value=K.state.spotLightMap,rt.pointShadowMap.value=K.state.pointShadowMap,rt.pointShadowMatrix.value=K.state.pointShadowMatrix),J.currentProgram=Ne,J.uniformsList=null,Ne}function Cr(R){if(R.uniformsList===null){const G=R.currentProgram.getUniforms();R.uniformsList=Zl.seqWithValue(G.seq,R.uniforms)}return R.uniformsList}function cs(R,G){const te=it.get(R);te.outputColorSpace=G.outputColorSpace,te.batching=G.batching,te.instancing=G.instancing,te.instancingColor=G.instancingColor,te.instancingMorph=G.instancingMorph,te.skinning=G.skinning,te.morphTargets=G.morphTargets,te.morphNormals=G.morphNormals,te.morphColors=G.morphColors,te.morphTargetsCount=G.morphTargetsCount,te.numClippingPlanes=G.numClippingPlanes,te.numIntersection=G.numClipIntersection,te.vertexAlphas=G.vertexAlphas,te.vertexTangents=G.vertexTangents,te.toneMapping=G.toneMapping}function gu(R,G,te,J,K){G.isScene!==!0&&(G=De),lt.resetTextureUnits();const Te=G.fog,ke=J.isMeshStandardMaterial?G.environment:null,ze=N===null?T.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:br,Ye=(J.isMeshStandardMaterial?U:Rt).get(J.envMap||ke),Qe=J.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,Ne=!!te.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),rt=!!te.morphAttributes.position,Ut=!!te.morphAttributes.normal,jt=!!te.morphAttributes.color;let en=Er;J.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(en=T.toneMapping);const Jn=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,pt=Jn!==void 0?Jn.length:0,Ke=it.get(J),dn=y.state.lights;if($===!0&&(ue===!0||R!==P)){const an=R===P&&J.id===Q;Me.setState(J,R,an)}let Tt=!1;J.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==dn.state.version||Ke.outputColorSpace!==ze||K.isBatchedMesh&&Ke.batching===!1||!K.isBatchedMesh&&Ke.batching===!0||K.isInstancedMesh&&Ke.instancing===!1||!K.isInstancedMesh&&Ke.instancing===!0||K.isSkinnedMesh&&Ke.skinning===!1||!K.isSkinnedMesh&&Ke.skinning===!0||K.isInstancedMesh&&Ke.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Ke.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Ke.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Ke.instancingMorph===!1&&K.morphTexture!==null||Ke.envMap!==Ye||J.fog===!0&&Ke.fog!==Te||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==Me.numPlanes||Ke.numIntersection!==Me.numIntersection)||Ke.vertexAlphas!==Qe||Ke.vertexTangents!==Ne||Ke.morphTargets!==rt||Ke.morphNormals!==Ut||Ke.morphColors!==jt||Ke.toneMapping!==en||Ke.morphTargetsCount!==pt)&&(Tt=!0):(Tt=!0,Ke.__version=J.version);let $t=Ke.currentProgram;Tt===!0&&($t=Ei(J,G,K));let wa=!1,Pr=!1,Eo=!1;const Bt=$t.getUniforms(),Dn=Ke.uniforms;if(Xe.useProgram($t.program)&&(wa=!0,Pr=!0,Eo=!0),J.id!==Q&&(Q=J.id,Pr=!0),wa||P!==R){Bt.setValue(W,"projectionMatrix",R.projectionMatrix),Bt.setValue(W,"viewMatrix",R.matrixWorldInverse);const an=Bt.map.cameraPosition;an!==void 0&&an.setValue(W,me.setFromMatrixPosition(R.matrixWorld)),vt.logarithmicDepthBuffer&&Bt.setValue(W,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Bt.setValue(W,"isOrthographic",R.isOrthographicCamera===!0),P!==R&&(P=R,Pr=!0,Eo=!0)}if(K.isSkinnedMesh){Bt.setOptional(W,K,"bindMatrix"),Bt.setOptional(W,K,"bindMatrixInverse");const an=K.skeleton;an&&(an.boneTexture===null&&an.computeBoneTexture(),Bt.setValue(W,"boneTexture",an.boneTexture,lt))}K.isBatchedMesh&&(Bt.setOptional(W,K,"batchingTexture"),Bt.setValue(W,"batchingTexture",K._matricesTexture,lt));const wi=te.morphAttributes;if((wi.position!==void 0||wi.normal!==void 0||wi.color!==void 0)&&He.update(K,te,$t),(Pr||Ke.receiveShadow!==K.receiveShadow)&&(Ke.receiveShadow=K.receiveShadow,Bt.setValue(W,"receiveShadow",K.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Dn.envMap.value=Ye,Dn.flipEnvMap.value=Ye.isCubeTexture&&Ye.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&G.environment!==null&&(Dn.envMapIntensity.value=G.environmentIntensity),Pr&&(Bt.setValue(W,"toneMappingExposure",T.toneMappingExposure),Ke.needsLights&&_u(Dn,Eo),Te&&J.fog===!0&&ye.refreshFogUniforms(Dn,Te),ye.refreshMaterialUniforms(Dn,J,de,ge,y.state.transmissionRenderTarget[R.id]),Zl.upload(W,Cr(Ke),Dn,lt)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Zl.upload(W,Cr(Ke),Dn,lt),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Bt.setValue(W,"center",K.center),Bt.setValue(W,"modelViewMatrix",K.modelViewMatrix),Bt.setValue(W,"normalMatrix",K.normalMatrix),Bt.setValue(W,"modelMatrix",K.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const an=J.uniformsGroups;for(let wo=0,yu=an.length;wo<yu;wo++){const ds=an[wo];ht.update(ds,$t),ht.bind(ds,$t)}}return $t}function _u(R,G){R.ambientLightColor.needsUpdate=G,R.lightProbe.needsUpdate=G,R.directionalLights.needsUpdate=G,R.directionalLightShadows.needsUpdate=G,R.pointLights.needsUpdate=G,R.pointLightShadows.needsUpdate=G,R.spotLights.needsUpdate=G,R.spotLightShadows.needsUpdate=G,R.rectAreaLights.needsUpdate=G,R.hemisphereLights.needsUpdate=G}function vu(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(R,G,te){it.get(R.texture).__webglTexture=G,it.get(R.depthTexture).__webglTexture=te;const J=it.get(R);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=te===void 0,J.__autoAllocateDepthBuffer||$e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,G){const te=it.get(R);te.__webglFramebuffer=G,te.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(R,G=0,te=0){N=R,V=G,D=te;let J=!0,K=null,Te=!1,ke=!1;if(R){const Ye=it.get(R);Ye.__useDefaultFramebuffer!==void 0?(Xe.bindFramebuffer(W.FRAMEBUFFER,null),J=!1):Ye.__webglFramebuffer===void 0?lt.setupRenderTarget(R):Ye.__hasExternalTextures&&lt.rebindTextures(R,it.get(R.texture).__webglTexture,it.get(R.depthTexture).__webglTexture);const Qe=R.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&(ke=!0);const Ne=it.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Ne[G])?K=Ne[G][te]:K=Ne[G],Te=!0):R.samples>0&&lt.useMultisampledRTT(R)===!1?K=it.get(R).__webglMultisampledFramebuffer:Array.isArray(Ne)?K=Ne[te]:K=Ne,A.copy(R.viewport),q.copy(R.scissor),se=R.scissorTest}else A.copy(Y).multiplyScalar(de).floor(),q.copy(O).multiplyScalar(de).floor(),se=ne;if(Xe.bindFramebuffer(W.FRAMEBUFFER,K)&&J&&Xe.drawBuffers(R,K),Xe.viewport(A),Xe.scissor(q),Xe.setScissorTest(se),Te){const Ye=it.get(R.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ye.__webglTexture,te)}else if(ke){const Ye=it.get(R.texture),Qe=G||0;W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,Ye.__webglTexture,te||0,Qe)}Q=-1},this.readRenderTargetPixels=function(R,G,te,J,K,Te,ke){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=it.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ke!==void 0&&(ze=ze[ke]),ze){Xe.bindFramebuffer(W.FRAMEBUFFER,ze);try{const Ye=R.texture,Qe=Ye.format,Ne=Ye.type;if(!vt.textureFormatReadable(Qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!vt.textureTypeReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=R.width-J&&te>=0&&te<=R.height-K&&W.readPixels(G,te,J,K,Le.convert(Qe),Le.convert(Ne),Te)}finally{const Ye=N!==null?it.get(N).__webglFramebuffer:null;Xe.bindFramebuffer(W.FRAMEBUFFER,Ye)}}},this.copyFramebufferToTexture=function(R,G,te=0){const J=Math.pow(2,-te),K=Math.floor(G.image.width*J),Te=Math.floor(G.image.height*J);lt.setTexture2D(G,0),W.copyTexSubImage2D(W.TEXTURE_2D,te,0,0,R.x,R.y,K,Te),Xe.unbindTexture()},this.copyTextureToTexture=function(R,G,te,J=0){const K=G.image.width,Te=G.image.height,ke=Le.convert(te.format),ze=Le.convert(te.type);lt.setTexture2D(te,0),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,te.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,te.unpackAlignment),G.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,J,R.x,R.y,K,Te,ke,ze,G.image.data):G.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,J,R.x,R.y,G.mipmaps[0].width,G.mipmaps[0].height,ke,G.mipmaps[0].data):W.texSubImage2D(W.TEXTURE_2D,J,R.x,R.y,ke,ze,G.image),J===0&&te.generateMipmaps&&W.generateMipmap(W.TEXTURE_2D),Xe.unbindTexture()},this.copyTextureToTexture3D=function(R,G,te,J,K=0){const Te=R.max.x-R.min.x,ke=R.max.y-R.min.y,ze=R.max.z-R.min.z,Ye=Le.convert(J.format),Qe=Le.convert(J.type);let Ne;if(J.isData3DTexture)lt.setTexture3D(J,0),Ne=W.TEXTURE_3D;else if(J.isDataArrayTexture||J.isCompressedArrayTexture)lt.setTexture2DArray(J,0),Ne=W.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,J.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,J.unpackAlignment);const rt=W.getParameter(W.UNPACK_ROW_LENGTH),Ut=W.getParameter(W.UNPACK_IMAGE_HEIGHT),jt=W.getParameter(W.UNPACK_SKIP_PIXELS),en=W.getParameter(W.UNPACK_SKIP_ROWS),Jn=W.getParameter(W.UNPACK_SKIP_IMAGES),pt=te.isCompressedTexture?te.mipmaps[K]:te.image;W.pixelStorei(W.UNPACK_ROW_LENGTH,pt.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,pt.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,R.min.x),W.pixelStorei(W.UNPACK_SKIP_ROWS,R.min.y),W.pixelStorei(W.UNPACK_SKIP_IMAGES,R.min.z),te.isDataTexture||te.isData3DTexture?W.texSubImage3D(Ne,K,G.x,G.y,G.z,Te,ke,ze,Ye,Qe,pt.data):J.isCompressedArrayTexture?W.compressedTexSubImage3D(Ne,K,G.x,G.y,G.z,Te,ke,ze,Ye,pt.data):W.texSubImage3D(Ne,K,G.x,G.y,G.z,Te,ke,ze,Ye,Qe,pt),W.pixelStorei(W.UNPACK_ROW_LENGTH,rt),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Ut),W.pixelStorei(W.UNPACK_SKIP_PIXELS,jt),W.pixelStorei(W.UNPACK_SKIP_ROWS,en),W.pixelStorei(W.UNPACK_SKIP_IMAGES,Jn),K===0&&J.generateMipmaps&&W.generateMipmap(Ne),Xe.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?lt.setTextureCube(R,0):R.isData3DTexture?lt.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?lt.setTexture2DArray(R,0):lt.setTexture2D(R,0),Xe.unbindTexture()},this.resetState=function(){V=0,D=0,N=null,Xe.reset(),nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===hh?"display-p3":"srgb",t.unpackColorSpace=Mt.workingColorSpace===du?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class jM extends zn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hi,this.environmentIntensity=1,this.environmentRotation=new Hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ou extends Ar{constructor(e=1,t=32,i=16,o=0,a=Math.PI*2,u=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:o,phiLength:a,thetaStart:u,thetaLength:d},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const h=Math.min(u+d,Math.PI);let f=0;const m=[],_=new ee,v=new ee,S=[],w=[],M=[],y=[];for(let x=0;x<=i;x++){const C=[],T=x/i;let L=0;x===0&&u===0?L=.5/t:x===i&&h===Math.PI&&(L=-.5/t);for(let V=0;V<=t;V++){const D=V/t;_.x=-e*Math.cos(o+D*a)*Math.sin(u+T*d),_.y=e*Math.cos(u+T*d),_.z=e*Math.sin(o+D*a)*Math.sin(u+T*d),w.push(_.x,_.y,_.z),v.copy(_).normalize(),M.push(v.x,v.y,v.z),y.push(D+L,1-T),C.push(f++)}m.push(C)}for(let x=0;x<i;x++)for(let C=0;C<t;C++){const T=m[x][C+1],L=m[x][C],V=m[x+1][C],D=m[x+1][C+1];(x!==0||u>0)&&S.push(T,L,D),(x!==i-1||h<Math.PI)&&S.push(L,V,D)}this.setIndex(S),this.setAttribute("position",new Si(w,3)),this.setAttribute("normal",new Si(M,3)),this.setAttribute("uv",new Si(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ou(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:dh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=dh);const $M=()=>{const s=ss.useRef(null);return ss.useEffect(()=>{const e=s.current,t=new jM;t.background=new Et("#0d1117");const i=new Yn(45,e.clientWidth/e.clientHeight,.1,1e3);i.position.z=5;const o=new WM({antialias:!0});o.setSize(e.clientWidth,e.clientHeight),e.appendChild(o.domElement);const a=new ou(.5,32,32),u=new su({color:"#00ffcc"}),d=new ui(a,u);t.add(d);const h=[],f=new ou(.1,16,16),m=new su({color:"#00aaff"});for(let v=0;v<3;v++){const S=new ui(f,m);S.position.x=1.5+v*.2,h.push({mesh:S,angle:v*2}),t.add(S)}const _=()=>{requestAnimationFrame(_),h.forEach((v,S)=>{v.angle+=.02+S*.005,v.mesh.position.x=Math.cos(v.angle)*2,v.mesh.position.y=Math.sin(v.angle)*2}),d.rotation.y+=.01,o.render(t,i)};return _(),()=>{e.removeChild(o.domElement)}},[]),Ve.jsx("div",{ref:s,style:{width:"100%",height:"400px",borderRadius:"12px",overflow:"hidden",boxShadow:"0 0 20px rgba(0, 255, 200, 0.3)"}})},XM=[{number:1,symbol:"H",name:"Hydrogen",group:1,period:1},{number:2,symbol:"He",name:"Helium",group:18,period:1},{number:3,symbol:"Li",name:"Lithium",group:1,period:2},{number:4,symbol:"Be",name:"Beryllium",group:2,period:2},{number:5,symbol:"B",name:"Boron",group:13,period:2},{number:6,symbol:"C",name:"Carbon",group:14,period:2},{number:7,symbol:"N",name:"Nitrogen",group:15,period:2},{number:8,symbol:"O",name:"Oxygen",group:16,period:2},{number:9,symbol:"F",name:"Fluorine",group:17,period:2},{number:10,symbol:"Ne",name:"Neon",group:18,period:2},{number:11,symbol:"Na",name:"Sodium",group:1,period:3},{number:12,symbol:"Mg",name:"Magnesium",group:2,period:3},{number:13,symbol:"Al",name:"Aluminium",group:13,period:3},{number:14,symbol:"Si",name:"Silicon",group:14,period:3},{number:15,symbol:"P",name:"Phosphorus",group:15,period:3},{number:16,symbol:"S",name:"Sulfur",group:16,period:3},{number:17,symbol:"Cl",name:"Chlorine",group:17,period:3},{number:18,symbol:"Ar",name:"Argon",group:18,period:3},{number:19,symbol:"K",name:"Potassium",group:1,period:4},{number:20,symbol:"Ca",name:"Calcium",group:2,period:4},{number:21,symbol:"Sc",name:"Scandium",group:3,period:4},{number:22,symbol:"Ti",name:"Titanium",group:4,period:4},{number:23,symbol:"V",name:"Vanadium",group:5,period:4},{number:24,symbol:"Cr",name:"Chromium",group:6,period:4},{number:25,symbol:"Mn",name:"Manganese",group:7,period:4},{number:26,symbol:"Fe",name:"Iron",group:8,period:4},{number:27,symbol:"Co",name:"Cobalt",group:9,period:4},{number:28,symbol:"Ni",name:"Nickel",group:10,period:4},{number:29,symbol:"Cu",name:"Copper",group:11,period:4},{number:30,symbol:"Zn",name:"Zinc",group:12,period:4},{number:31,symbol:"Ga",name:"Gallium",group:13,period:4},{number:32,symbol:"Ge",name:"Germanium",group:14,period:4},{number:33,symbol:"As",name:"Arsenic",group:15,period:4},{number:34,symbol:"Se",name:"Selenium",group:16,period:4},{number:35,symbol:"Br",name:"Bromine",group:17,period:4},{number:36,symbol:"Kr",name:"Krypton",group:18,period:4},{number:37,symbol:"Rb",name:"Rubidium",group:1,period:5},{number:38,symbol:"Sr",name:"Strontium",group:2,period:5},{number:39,symbol:"Y",name:"Yttrium",group:3,period:5},{number:40,symbol:"Zr",name:"Zirconium",group:4,period:5},{number:41,symbol:"Nb",name:"Niobium",group:5,period:5},{number:42,symbol:"Mo",name:"Molybdenum",group:6,period:5},{number:43,symbol:"Tc",name:"Technetium",group:7,period:5},{number:44,symbol:"Ru",name:"Ruthenium",group:8,period:5},{number:45,symbol:"Rh",name:"Rhodium",group:9,period:5},{number:46,symbol:"Pd",name:"Palladium",group:10,period:5},{number:47,symbol:"Ag",name:"Silver",group:11,period:5},{number:48,symbol:"Cd",name:"Cadmium",group:12,period:5},{number:49,symbol:"In",name:"Indium",group:13,period:5},{number:50,symbol:"Sn",name:"Tin",group:14,period:5},{number:51,symbol:"Sb",name:"Antimony",group:15,period:5},{number:52,symbol:"Te",name:"Tellurium",group:16,period:5},{number:53,symbol:"I",name:"Iodine",group:17,period:5},{number:54,symbol:"Xe",name:"Xenon",group:18,period:5},{number:55,symbol:"Cs",name:"Cesium",group:1,period:6},{number:56,symbol:"Ba",name:"Barium",group:2,period:6},{number:57,symbol:"La",name:"Lanthanum",group:3,period:6},{number:58,symbol:"Ce",name:"Cerium",group:3,period:6},{number:59,symbol:"Pr",name:"Praseodymium",group:3,period:6},{number:60,symbol:"Nd",name:"Neodymium",group:3,period:6},{number:61,symbol:"Pm",name:"Promethium",group:3,period:6},{number:62,symbol:"Sm",name:"Samarium",group:3,period:6},{number:63,symbol:"Eu",name:"Europium",group:3,period:6},{number:64,symbol:"Gd",name:"Gadolinium",group:3,period:6},{number:65,symbol:"Tb",name:"Terbium",group:3,period:6},{number:66,symbol:"Dy",name:"Dysprosium",group:3,period:6},{number:67,symbol:"Ho",name:"Holmium",group:3,period:6},{number:68,symbol:"Er",name:"Erbium",group:3,period:6},{number:69,symbol:"Tm",name:"Thulium",group:3,period:6},{number:70,symbol:"Yb",name:"Ytterbium",group:3,period:6},{number:71,symbol:"Lu",name:"Lutetium",group:3,period:6},{number:72,symbol:"Hf",name:"Hafnium",group:4,period:6},{number:73,symbol:"Ta",name:"Tantalum",group:5,period:6},{number:74,symbol:"W",name:"Tungsten",group:6,period:6},{number:75,symbol:"Re",name:"Rhenium",group:7,period:6},{number:76,symbol:"Os",name:"Osmium",group:8,period:6},{number:77,symbol:"Ir",name:"Iridium",group:9,period:6},{number:78,symbol:"Pt",name:"Platinum",group:10,period:6},{number:79,symbol:"Au",name:"Gold",group:11,period:6},{number:80,symbol:"Hg",name:"Mercury",group:12,period:6},{number:81,symbol:"Tl",name:"Thallium",group:13,period:6},{number:82,symbol:"Pb",name:"Lead",group:14,period:6},{number:83,symbol:"Bi",name:"Bismuth",group:15,period:6},{number:84,symbol:"Po",name:"Polonium",group:16,period:6},{number:85,symbol:"At",name:"Astatine",group:17,period:6},{number:86,symbol:"Rn",name:"Radon",group:18,period:6},{number:87,symbol:"Fr",name:"Francium",group:1,period:7},{number:88,symbol:"Ra",name:"Radium",group:2,period:7},{number:89,symbol:"Ac",name:"Actinium",group:3,period:7},{number:90,symbol:"Th",name:"Thorium",group:3,period:7},{number:91,symbol:"Pa",name:"Protactinium",group:3,period:7},{number:92,symbol:"U",name:"Uranium",group:3,period:7},{number:93,symbol:"Np",name:"Neptunium",group:3,period:7},{number:94,symbol:"Pu",name:"Plutonium",group:3,period:7},{number:95,symbol:"Am",name:"Americium",group:3,period:7},{number:96,symbol:"Cm",name:"Curium",group:3,period:7},{number:97,symbol:"Bk",name:"Berkelium",group:3,period:7},{number:98,symbol:"Cf",name:"Californium",group:3,period:7},{number:99,symbol:"Es",name:"Einsteinium",group:3,period:7},{number:100,symbol:"Fm",name:"Fermium",group:3,period:7},{number:101,symbol:"Md",name:"Mendelevium",group:3,period:7},{number:102,symbol:"No",name:"Nobelium",group:3,period:7},{number:103,symbol:"Lr",name:"Lawrencium",group:3,period:7},{number:104,symbol:"Rf",name:"Rutherfordium",group:4,period:7},{number:105,symbol:"Db",name:"Dubnium",group:5,period:7},{number:106,symbol:"Sg",name:"Seaborgium",group:6,period:7},{number:107,symbol:"Bh",name:"Bohrium",group:7,period:7},{number:108,symbol:"Hs",name:"Hassium",group:8,period:7},{number:109,symbol:"Mt",name:"Meitnerium",group:9,period:7},{number:110,symbol:"Ds",name:"Darmstadtium",group:10,period:7},{number:111,symbol:"Rg",name:"Roentgenium",group:11,period:7},{number:112,symbol:"Cn",name:"Copernicium",group:12,period:7},{number:113,symbol:"Nh",name:"Nihonium",group:13,period:7},{number:114,symbol:"Fl",name:"Flerovium",group:14,period:7},{number:115,symbol:"Mc",name:"Moscovium",group:15,period:7},{number:116,symbol:"Lv",name:"Livermorium",group:16,period:7},{number:117,symbol:"Ts",name:"Tennessine",group:17,period:7},{number:118,symbol:"Og",name:"Oganesson",group:18,period:7}],qM=()=>Ve.jsx("div",{className:"periodic-container",children:XM.map(s=>Ve.jsxs("div",{className:`element-card group-${s.group}`,style:{gridColumn:s.group,gridRow:s.period},children:[Ve.jsx("div",{className:"element-number",children:s.number}),Ve.jsx("div",{className:"element-symbol",children:s.symbol}),Ve.jsx("div",{className:"element-name",children:s.name})]},s.number))}),YM="modulepreload",KM=function(s){return"/atom-builder-full/"+s},yg={},Sa=function(e,t,i){let o=Promise.resolve();if(t&&t.length>0){let f=function(m){return Promise.all(m.map(_=>Promise.resolve(_).then(v=>({status:"fulfilled",value:v}),v=>({status:"rejected",reason:v}))))};var u=f;document.getElementsByTagName("link");const d=document.querySelector("meta[property=csp-nonce]"),h=d?.nonce||d?.getAttribute("nonce");o=f(t.map(m=>{if(m=KM(m),m in yg)return;yg[m]=!0;const _=m.endsWith(".css"),v=_?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${m}"]${v}`))return;const S=document.createElement("link");if(S.rel=_?"stylesheet":YM,_||(S.as="script"),S.crossOrigin="",S.href=m,h&&S.setAttribute("nonce",h),document.head.appendChild(S),_)return new Promise((w,M)=>{S.addEventListener("load",w),S.addEventListener("error",()=>M(new Error(`Unable to preload CSS for ${m}`)))})}))}function a(d){const h=new Event("vite:preloadError",{cancelable:!0});if(h.payload=d,window.dispatchEvent(h),!h.defaultPrevented)throw d}return o.then(d=>{for(const h of d||[])h.status==="rejected"&&a(h.reason);return e().catch(a)})},JM=s=>{let e;return s?e=s:typeof fetch>"u"?e=(...t)=>Sa(async()=>{const{default:i}=await Promise.resolve().then(()=>So);return{default:i}},void 0).then(({default:i})=>i(...t)):e=fetch,(...t)=>e(...t)};class mh extends Error{constructor(e,t="FunctionsError",i){super(e),this.name=t,this.context=i}}class xg extends mh{constructor(e){super("Failed to send a request to the Edge Function","FunctionsFetchError",e)}}class Sg extends mh{constructor(e){super("Relay Error invoking the Edge Function","FunctionsRelayError",e)}}class Eg extends mh{constructor(e){super("Edge Function returned a non-2xx status code","FunctionsHttpError",e)}}var Qd;(function(s){s.Any="any",s.ApNortheast1="ap-northeast-1",s.ApNortheast2="ap-northeast-2",s.ApSouth1="ap-south-1",s.ApSoutheast1="ap-southeast-1",s.ApSoutheast2="ap-southeast-2",s.CaCentral1="ca-central-1",s.EuCentral1="eu-central-1",s.EuWest1="eu-west-1",s.EuWest2="eu-west-2",s.EuWest3="eu-west-3",s.SaEast1="sa-east-1",s.UsEast1="us-east-1",s.UsWest1="us-west-1",s.UsWest2="us-west-2"})(Qd||(Qd={}));var ZM=function(s,e,t,i){function o(a){return a instanceof t?a:new t(function(u){u(a)})}return new(t||(t=Promise))(function(a,u){function d(m){try{f(i.next(m))}catch(_){u(_)}}function h(m){try{f(i.throw(m))}catch(_){u(_)}}function f(m){m.done?a(m.value):o(m.value).then(d,h)}f((i=i.apply(s,e||[])).next())})};class QM{constructor(e,{headers:t={},customFetch:i,region:o=Qd.Any}={}){this.url=e,this.headers=t,this.region=o,this.fetch=JM(i)}setAuth(e){this.headers.Authorization=`Bearer ${e}`}invoke(e,t={}){var i;return ZM(this,void 0,void 0,function*(){try{const{headers:o,method:a,body:u,signal:d}=t;let h={},{region:f}=t;f||(f=this.region);const m=new URL(`${this.url}/${e}`);f&&f!=="any"&&(h["x-region"]=f,m.searchParams.set("forceFunctionRegion",f));let _;u&&(o&&!Object.prototype.hasOwnProperty.call(o,"Content-Type")||!o)&&(typeof Blob<"u"&&u instanceof Blob||u instanceof ArrayBuffer?(h["Content-Type"]="application/octet-stream",_=u):typeof u=="string"?(h["Content-Type"]="text/plain",_=u):typeof FormData<"u"&&u instanceof FormData?_=u:(h["Content-Type"]="application/json",_=JSON.stringify(u)));const v=yield this.fetch(m.toString(),{method:a||"POST",headers:Object.assign(Object.assign(Object.assign({},h),this.headers),o),body:_,signal:d}).catch(y=>{throw y.name==="AbortError"?y:new xg(y)}),S=v.headers.get("x-relay-error");if(S&&S==="true")throw new Sg(v);if(!v.ok)throw new Eg(v);let w=((i=v.headers.get("Content-Type"))!==null&&i!==void 0?i:"text/plain").split(";")[0].trim(),M;return w==="application/json"?M=yield v.json():w==="application/octet-stream"?M=yield v.blob():w==="text/event-stream"?M=v:w==="multipart/form-data"?M=yield v.formData():M=yield v.text(),{data:M,error:null,response:v}}catch(o){return o instanceof Error&&o.name==="AbortError"?{data:null,error:new xg(o)}:{data:null,error:o,response:o instanceof Eg||o instanceof Sg?o.context:void 0}}})}}var on={},Js={},Zs={},Qs={},eo={},to={},eT=function(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")},vo=eT();const tT=vo.fetch,y_=vo.fetch.bind(vo),x_=vo.Headers,nT=vo.Request,iT=vo.Response,So=Object.freeze(Object.defineProperty({__proto__:null,Headers:x_,Request:nT,Response:iT,default:y_,fetch:tT},Symbol.toStringTag,{value:"Module"})),rT=v0(So);var ql={},wg;function S_(){if(wg)return ql;wg=1,Object.defineProperty(ql,"__esModule",{value:!0});class s extends Error{constructor(t){super(t.message),this.name="PostgrestError",this.details=t.details,this.hint=t.hint,this.code=t.code}}return ql.default=s,ql}var Mg;function E_(){if(Mg)return to;Mg=1;var s=to&&to.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(to,"__esModule",{value:!0});const e=s(rT),t=s(S_());class i{constructor(a){var u,d;this.shouldThrowOnError=!1,this.method=a.method,this.url=a.url,this.headers=new Headers(a.headers),this.schema=a.schema,this.body=a.body,this.shouldThrowOnError=(u=a.shouldThrowOnError)!==null&&u!==void 0?u:!1,this.signal=a.signal,this.isMaybeSingle=(d=a.isMaybeSingle)!==null&&d!==void 0?d:!1,a.fetch?this.fetch=a.fetch:typeof fetch>"u"?this.fetch=e.default:this.fetch=fetch}throwOnError(){return this.shouldThrowOnError=!0,this}setHeader(a,u){return this.headers=new Headers(this.headers),this.headers.set(a,u),this}then(a,u){this.schema===void 0||(["GET","HEAD"].includes(this.method)?this.headers.set("Accept-Profile",this.schema):this.headers.set("Content-Profile",this.schema)),this.method!=="GET"&&this.method!=="HEAD"&&this.headers.set("Content-Type","application/json");const d=this.fetch;let h=d(this.url.toString(),{method:this.method,headers:this.headers,body:JSON.stringify(this.body),signal:this.signal}).then(async f=>{var m,_,v,S;let w=null,M=null,y=null,x=f.status,C=f.statusText;if(f.ok){if(this.method!=="HEAD"){const D=await f.text();D===""||(this.headers.get("Accept")==="text/csv"||this.headers.get("Accept")&&(!((m=this.headers.get("Accept"))===null||m===void 0)&&m.includes("application/vnd.pgrst.plan+text"))?M=D:M=JSON.parse(D))}const L=(_=this.headers.get("Prefer"))===null||_===void 0?void 0:_.match(/count=(exact|planned|estimated)/),V=(v=f.headers.get("content-range"))===null||v===void 0?void 0:v.split("/");L&&V&&V.length>1&&(y=parseInt(V[1])),this.isMaybeSingle&&this.method==="GET"&&Array.isArray(M)&&(M.length>1?(w={code:"PGRST116",details:`Results contain ${M.length} rows, application/vnd.pgrst.object+json requires 1 row`,hint:null,message:"JSON object requested, multiple (or no) rows returned"},M=null,y=null,x=406,C="Not Acceptable"):M.length===1?M=M[0]:M=null)}else{const L=await f.text();try{w=JSON.parse(L),Array.isArray(w)&&f.status===404&&(M=[],w=null,x=200,C="OK")}catch{f.status===404&&L===""?(x=204,C="No Content"):w={message:L}}if(w&&this.isMaybeSingle&&(!((S=w?.details)===null||S===void 0)&&S.includes("0 rows"))&&(w=null,x=200,C="OK"),w&&this.shouldThrowOnError)throw new t.default(w)}return{error:w,data:M,count:y,status:x,statusText:C}});return this.shouldThrowOnError||(h=h.catch(f=>{var m,_,v;return{error:{message:`${(m=f?.name)!==null&&m!==void 0?m:"FetchError"}: ${f?.message}`,details:`${(_=f?.stack)!==null&&_!==void 0?_:""}`,hint:"",code:`${(v=f?.code)!==null&&v!==void 0?v:""}`},data:null,count:null,status:0,statusText:""}})),h.then(a,u)}returns(){return this}overrideTypes(){return this}}return to.default=i,to}var Tg;function w_(){if(Tg)return eo;Tg=1;var s=eo&&eo.__importDefault||function(i){return i&&i.__esModule?i:{default:i}};Object.defineProperty(eo,"__esModule",{value:!0});const e=s(E_());class t extends e.default{select(o){let a=!1;const u=(o??"*").split("").map(d=>/\s/.test(d)&&!a?"":(d==='"'&&(a=!a),d)).join("");return this.url.searchParams.set("select",u),this.headers.append("Prefer","return=representation"),this}order(o,{ascending:a=!0,nullsFirst:u,foreignTable:d,referencedTable:h=d}={}){const f=h?`${h}.order`:"order",m=this.url.searchParams.get(f);return this.url.searchParams.set(f,`${m?`${m},`:""}${o}.${a?"asc":"desc"}${u===void 0?"":u?".nullsfirst":".nullslast"}`),this}limit(o,{foreignTable:a,referencedTable:u=a}={}){const d=typeof u>"u"?"limit":`${u}.limit`;return this.url.searchParams.set(d,`${o}`),this}range(o,a,{foreignTable:u,referencedTable:d=u}={}){const h=typeof d>"u"?"offset":`${d}.offset`,f=typeof d>"u"?"limit":`${d}.limit`;return this.url.searchParams.set(h,`${o}`),this.url.searchParams.set(f,`${a-o+1}`),this}abortSignal(o){return this.signal=o,this}single(){return this.headers.set("Accept","application/vnd.pgrst.object+json"),this}maybeSingle(){return this.method==="GET"?this.headers.set("Accept","application/json"):this.headers.set("Accept","application/vnd.pgrst.object+json"),this.isMaybeSingle=!0,this}csv(){return this.headers.set("Accept","text/csv"),this}geojson(){return this.headers.set("Accept","application/geo+json"),this}explain({analyze:o=!1,verbose:a=!1,settings:u=!1,buffers:d=!1,wal:h=!1,format:f="text"}={}){var m;const _=[o?"analyze":null,a?"verbose":null,u?"settings":null,d?"buffers":null,h?"wal":null].filter(Boolean).join("|"),v=(m=this.headers.get("Accept"))!==null&&m!==void 0?m:"application/json";return this.headers.set("Accept",`application/vnd.pgrst.plan+${f}; for="${v}"; options=${_};`),f==="json"?this:this}rollback(){return this.headers.append("Prefer","tx=rollback"),this}returns(){return this}maxAffected(o){return this.headers.append("Prefer","handling=strict"),this.headers.append("Prefer",`max-affected=${o}`),this}}return eo.default=t,eo}var bg;function gh(){if(bg)return Qs;bg=1;var s=Qs&&Qs.__importDefault||function(i){return i&&i.__esModule?i:{default:i}};Object.defineProperty(Qs,"__esModule",{value:!0});const e=s(w_());class t extends e.default{eq(o,a){return this.url.searchParams.append(o,`eq.${a}`),this}neq(o,a){return this.url.searchParams.append(o,`neq.${a}`),this}gt(o,a){return this.url.searchParams.append(o,`gt.${a}`),this}gte(o,a){return this.url.searchParams.append(o,`gte.${a}`),this}lt(o,a){return this.url.searchParams.append(o,`lt.${a}`),this}lte(o,a){return this.url.searchParams.append(o,`lte.${a}`),this}like(o,a){return this.url.searchParams.append(o,`like.${a}`),this}likeAllOf(o,a){return this.url.searchParams.append(o,`like(all).{${a.join(",")}}`),this}likeAnyOf(o,a){return this.url.searchParams.append(o,`like(any).{${a.join(",")}}`),this}ilike(o,a){return this.url.searchParams.append(o,`ilike.${a}`),this}ilikeAllOf(o,a){return this.url.searchParams.append(o,`ilike(all).{${a.join(",")}}`),this}ilikeAnyOf(o,a){return this.url.searchParams.append(o,`ilike(any).{${a.join(",")}}`),this}is(o,a){return this.url.searchParams.append(o,`is.${a}`),this}in(o,a){const u=Array.from(new Set(a)).map(d=>typeof d=="string"&&new RegExp("[,()]").test(d)?`"${d}"`:`${d}`).join(",");return this.url.searchParams.append(o,`in.(${u})`),this}contains(o,a){return typeof a=="string"?this.url.searchParams.append(o,`cs.${a}`):Array.isArray(a)?this.url.searchParams.append(o,`cs.{${a.join(",")}}`):this.url.searchParams.append(o,`cs.${JSON.stringify(a)}`),this}containedBy(o,a){return typeof a=="string"?this.url.searchParams.append(o,`cd.${a}`):Array.isArray(a)?this.url.searchParams.append(o,`cd.{${a.join(",")}}`):this.url.searchParams.append(o,`cd.${JSON.stringify(a)}`),this}rangeGt(o,a){return this.url.searchParams.append(o,`sr.${a}`),this}rangeGte(o,a){return this.url.searchParams.append(o,`nxl.${a}`),this}rangeLt(o,a){return this.url.searchParams.append(o,`sl.${a}`),this}rangeLte(o,a){return this.url.searchParams.append(o,`nxr.${a}`),this}rangeAdjacent(o,a){return this.url.searchParams.append(o,`adj.${a}`),this}overlaps(o,a){return typeof a=="string"?this.url.searchParams.append(o,`ov.${a}`):this.url.searchParams.append(o,`ov.{${a.join(",")}}`),this}textSearch(o,a,{config:u,type:d}={}){let h="";d==="plain"?h="pl":d==="phrase"?h="ph":d==="websearch"&&(h="w");const f=u===void 0?"":`(${u})`;return this.url.searchParams.append(o,`${h}fts${f}.${a}`),this}match(o){return Object.entries(o).forEach(([a,u])=>{this.url.searchParams.append(a,`eq.${u}`)}),this}not(o,a,u){return this.url.searchParams.append(o,`not.${a}.${u}`),this}or(o,{foreignTable:a,referencedTable:u=a}={}){const d=u?`${u}.or`:"or";return this.url.searchParams.append(d,`(${o})`),this}filter(o,a,u){return this.url.searchParams.append(o,`${a}.${u}`),this}}return Qs.default=t,Qs}var Ag;function M_(){if(Ag)return Zs;Ag=1;var s=Zs&&Zs.__importDefault||function(i){return i&&i.__esModule?i:{default:i}};Object.defineProperty(Zs,"__esModule",{value:!0});const e=s(gh());class t{constructor(o,{headers:a={},schema:u,fetch:d}){this.url=o,this.headers=new Headers(a),this.schema=u,this.fetch=d}select(o,{head:a=!1,count:u}={}){const d=a?"HEAD":"GET";let h=!1;const f=(o??"*").split("").map(m=>/\s/.test(m)&&!h?"":(m==='"'&&(h=!h),m)).join("");return this.url.searchParams.set("select",f),u&&this.headers.append("Prefer",`count=${u}`),new e.default({method:d,url:this.url,headers:this.headers,schema:this.schema,fetch:this.fetch})}insert(o,{count:a,defaultToNull:u=!0}={}){var d;const h="POST";if(a&&this.headers.append("Prefer",`count=${a}`),u||this.headers.append("Prefer","missing=default"),Array.isArray(o)){const f=o.reduce((m,_)=>m.concat(Object.keys(_)),[]);if(f.length>0){const m=[...new Set(f)].map(_=>`"${_}"`);this.url.searchParams.set("columns",m.join(","))}}return new e.default({method:h,url:this.url,headers:this.headers,schema:this.schema,body:o,fetch:(d=this.fetch)!==null&&d!==void 0?d:fetch})}upsert(o,{onConflict:a,ignoreDuplicates:u=!1,count:d,defaultToNull:h=!0}={}){var f;const m="POST";if(this.headers.append("Prefer",`resolution=${u?"ignore":"merge"}-duplicates`),a!==void 0&&this.url.searchParams.set("on_conflict",a),d&&this.headers.append("Prefer",`count=${d}`),h||this.headers.append("Prefer","missing=default"),Array.isArray(o)){const _=o.reduce((v,S)=>v.concat(Object.keys(S)),[]);if(_.length>0){const v=[...new Set(_)].map(S=>`"${S}"`);this.url.searchParams.set("columns",v.join(","))}}return new e.default({method:m,url:this.url,headers:this.headers,schema:this.schema,body:o,fetch:(f=this.fetch)!==null&&f!==void 0?f:fetch})}update(o,{count:a}={}){var u;const d="PATCH";return a&&this.headers.append("Prefer",`count=${a}`),new e.default({method:d,url:this.url,headers:this.headers,schema:this.schema,body:o,fetch:(u=this.fetch)!==null&&u!==void 0?u:fetch})}delete({count:o}={}){var a;const u="DELETE";return o&&this.headers.append("Prefer",`count=${o}`),new e.default({method:u,url:this.url,headers:this.headers,schema:this.schema,fetch:(a=this.fetch)!==null&&a!==void 0?a:fetch})}}return Zs.default=t,Zs}var Rg;function sT(){if(Rg)return Js;Rg=1;var s=Js&&Js.__importDefault||function(o){return o&&o.__esModule?o:{default:o}};Object.defineProperty(Js,"__esModule",{value:!0});const e=s(M_()),t=s(gh());class i{constructor(a,{headers:u={},schema:d,fetch:h}={}){this.url=a,this.headers=new Headers(u),this.schemaName=d,this.fetch=h}from(a){const u=new URL(`${this.url}/${a}`);return new e.default(u,{headers:new Headers(this.headers),schema:this.schemaName,fetch:this.fetch})}schema(a){return new i(this.url,{headers:this.headers,schema:a,fetch:this.fetch})}rpc(a,u={},{head:d=!1,get:h=!1,count:f}={}){var m;let _;const v=new URL(`${this.url}/rpc/${a}`);let S;d||h?(_=d?"HEAD":"GET",Object.entries(u).filter(([M,y])=>y!==void 0).map(([M,y])=>[M,Array.isArray(y)?`{${y.join(",")}}`:`${y}`]).forEach(([M,y])=>{v.searchParams.append(M,y)})):(_="POST",S=u);const w=new Headers(this.headers);return f&&w.set("Prefer",`count=${f}`),new t.default({method:_,url:v,headers:w,schema:this.schemaName,body:S,fetch:(m=this.fetch)!==null&&m!==void 0?m:fetch})}}return Js.default=i,Js}var Cg;function oT(){if(Cg)return on;Cg=1;var s=on&&on.__importDefault||function(d){return d&&d.__esModule?d:{default:d}};Object.defineProperty(on,"__esModule",{value:!0}),on.PostgrestError=on.PostgrestBuilder=on.PostgrestTransformBuilder=on.PostgrestFilterBuilder=on.PostgrestQueryBuilder=on.PostgrestClient=void 0;const e=s(sT());on.PostgrestClient=e.default;const t=s(M_());on.PostgrestQueryBuilder=t.default;const i=s(gh());on.PostgrestFilterBuilder=i.default;const o=s(w_());on.PostgrestTransformBuilder=o.default;const a=s(E_());on.PostgrestBuilder=a.default;const u=s(S_());return on.PostgrestError=u.default,on.default={PostgrestClient:e.default,PostgrestQueryBuilder:t.default,PostgrestFilterBuilder:i.default,PostgrestTransformBuilder:o.default,PostgrestBuilder:a.default,PostgrestError:u.default},on}var aT=oT();const lT=_0(aT),{PostgrestClient:uT,PostgrestQueryBuilder:uA,PostgrestFilterBuilder:cA,PostgrestTransformBuilder:dA,PostgrestBuilder:hA,PostgrestError:fA}=lT;class cT{static detectEnvironment(){var e;if(typeof WebSocket<"u")return{type:"native",constructor:WebSocket};if(typeof globalThis<"u"&&typeof globalThis.WebSocket<"u")return{type:"native",constructor:globalThis.WebSocket};if(typeof global<"u"&&typeof global.WebSocket<"u")return{type:"native",constructor:global.WebSocket};if(typeof globalThis<"u"&&typeof globalThis.WebSocketPair<"u"&&typeof globalThis.WebSocket>"u")return{type:"cloudflare",error:"Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",workaround:"Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime."};if(typeof globalThis<"u"&&globalThis.EdgeRuntime||typeof navigator<"u"&&(!((e=navigator.userAgent)===null||e===void 0)&&e.includes("Vercel-Edge")))return{type:"unsupported",error:"Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",workaround:"Use serverless functions or a different deployment target for WebSocket functionality."};if(typeof process<"u"){const t=process.versions;if(t&&t.node){const i=t.node,o=parseInt(i.replace(/^v/,"").split(".")[0]);return o>=22?typeof globalThis.WebSocket<"u"?{type:"native",constructor:globalThis.WebSocket}:{type:"unsupported",error:`Node.js ${o} detected but native WebSocket not found.`,workaround:"Provide a WebSocket implementation via the transport option."}:{type:"unsupported",error:`Node.js ${o} detected without native WebSocket support.`,workaround:`For Node.js < 22, install "ws" package and provide it via the transport option:
import ws from "ws"
new RealtimeClient(url, { transport: ws })`}}}return{type:"unsupported",error:"Unknown JavaScript runtime without WebSocket support.",workaround:"Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation."}}static getWebSocketConstructor(){const e=this.detectEnvironment();if(e.constructor)return e.constructor;let t=e.error||"WebSocket not supported in this environment.";throw e.workaround&&(t+=`

Suggested solution: ${e.workaround}`),new Error(t)}static createWebSocket(e,t){const i=this.getWebSocketConstructor();return new i(e,t)}static isWebSocketSupported(){try{const e=this.detectEnvironment();return e.type==="native"||e.type==="ws"}catch{return!1}}}const dT="2.15.5",hT=`realtime-js/${dT}`,fT="1.0.0",eh=1e4,pT=1e3,mT=100;var da;(function(s){s[s.connecting=0]="connecting",s[s.open=1]="open",s[s.closing=2]="closing",s[s.closed=3]="closed"})(da||(da={}));var Yt;(function(s){s.closed="closed",s.errored="errored",s.joined="joined",s.joining="joining",s.leaving="leaving"})(Yt||(Yt={}));var ai;(function(s){s.close="phx_close",s.error="phx_error",s.join="phx_join",s.reply="phx_reply",s.leave="phx_leave",s.access_token="access_token"})(ai||(ai={}));var th;(function(s){s.websocket="websocket"})(th||(th={}));var ns;(function(s){s.Connecting="connecting",s.Open="open",s.Closing="closing",s.Closed="closed"})(ns||(ns={}));class gT{constructor(){this.HEADER_LENGTH=1}decode(e,t){return e.constructor===ArrayBuffer?t(this._binaryDecode(e)):t(typeof e=="string"?JSON.parse(e):{})}_binaryDecode(e){const t=new DataView(e),i=new TextDecoder;return this._decodeBroadcast(e,t,i)}_decodeBroadcast(e,t,i){const o=t.getUint8(1),a=t.getUint8(2);let u=this.HEADER_LENGTH+2;const d=i.decode(e.slice(u,u+o));u=u+o;const h=i.decode(e.slice(u,u+a));u=u+a;const f=JSON.parse(i.decode(e.slice(u,e.byteLength)));return{ref:null,topic:d,event:h,payload:f}}}class T_{constructor(e,t){this.callback=e,this.timerCalc=t,this.timer=void 0,this.tries=0,this.callback=e,this.timerCalc=t}reset(){this.tries=0,clearTimeout(this.timer),this.timer=void 0}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tries=this.tries+1,this.callback()},this.timerCalc(this.tries+1))}}var At;(function(s){s.abstime="abstime",s.bool="bool",s.date="date",s.daterange="daterange",s.float4="float4",s.float8="float8",s.int2="int2",s.int4="int4",s.int4range="int4range",s.int8="int8",s.int8range="int8range",s.json="json",s.jsonb="jsonb",s.money="money",s.numeric="numeric",s.oid="oid",s.reltime="reltime",s.text="text",s.time="time",s.timestamp="timestamp",s.timestamptz="timestamptz",s.timetz="timetz",s.tsrange="tsrange",s.tstzrange="tstzrange"})(At||(At={}));const Pg=(s,e,t={})=>{var i;const o=(i=t.skipTypes)!==null&&i!==void 0?i:[];return Object.keys(e).reduce((a,u)=>(a[u]=_T(u,s,e,o),a),{})},_T=(s,e,t,i)=>{const o=e.find(d=>d.name===s),a=o?.type,u=t[s];return a&&!i.includes(a)?b_(a,u):nh(u)},b_=(s,e)=>{if(s.charAt(0)==="_"){const t=s.slice(1,s.length);return ST(e,t)}switch(s){case At.bool:return vT(e);case At.float4:case At.float8:case At.int2:case At.int4:case At.int8:case At.numeric:case At.oid:return yT(e);case At.json:case At.jsonb:return xT(e);case At.timestamp:return ET(e);case At.abstime:case At.date:case At.daterange:case At.int4range:case At.int8range:case At.money:case At.reltime:case At.text:case At.time:case At.timestamptz:case At.timetz:case At.tsrange:case At.tstzrange:return nh(e);default:return nh(e)}},nh=s=>s,vT=s=>{switch(s){case"t":return!0;case"f":return!1;default:return s}},yT=s=>{if(typeof s=="string"){const e=parseFloat(s);if(!Number.isNaN(e))return e}return s},xT=s=>{if(typeof s=="string")try{return JSON.parse(s)}catch(e){return console.log(`JSON parse error: ${e}`),s}return s},ST=(s,e)=>{if(typeof s!="string")return s;const t=s.length-1,i=s[t];if(s[0]==="{"&&i==="}"){let a;const u=s.slice(1,t);try{a=JSON.parse("["+u+"]")}catch{a=u?u.split(","):[]}return a.map(d=>b_(e,d))}return s},ET=s=>typeof s=="string"?s.replace(" ","T"):s,A_=s=>{let e=s;return e=e.replace(/^ws/i,"http"),e=e.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i,""),e.replace(/\/+$/,"")+"/api/broadcast"};class Od{constructor(e,t,i={},o=eh){this.channel=e,this.event=t,this.payload=i,this.timeout=o,this.sent=!1,this.timeoutTimer=void 0,this.ref="",this.receivedResp=null,this.recHooks=[],this.refEvent=null}resend(e){this.timeout=e,this._cancelRefEvent(),this.ref="",this.refEvent=null,this.receivedResp=null,this.sent=!1,this.send()}send(){this._hasReceived("timeout")||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload,ref:this.ref,join_ref:this.channel._joinRef()}))}updatePayload(e){this.payload=Object.assign(Object.assign({},this.payload),e)}receive(e,t){var i;return this._hasReceived(e)&&t((i=this.receivedResp)===null||i===void 0?void 0:i.response),this.recHooks.push({status:e,callback:t}),this}startTimeout(){if(this.timeoutTimer)return;this.ref=this.channel.socket._makeRef(),this.refEvent=this.channel._replyEventName(this.ref);const e=t=>{this._cancelRefEvent(),this._cancelTimeout(),this.receivedResp=t,this._matchReceive(t)};this.channel._on(this.refEvent,{},e),this.timeoutTimer=setTimeout(()=>{this.trigger("timeout",{})},this.timeout)}trigger(e,t){this.refEvent&&this.channel._trigger(this.refEvent,{status:e,response:t})}destroy(){this._cancelRefEvent(),this._cancelTimeout()}_cancelRefEvent(){this.refEvent&&this.channel._off(this.refEvent,{})}_cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=void 0}_matchReceive({status:e,response:t}){this.recHooks.filter(i=>i.status===e).forEach(i=>i.callback(t))}_hasReceived(e){return this.receivedResp&&this.receivedResp.status===e}}var Lg;(function(s){s.SYNC="sync",s.JOIN="join",s.LEAVE="leave"})(Lg||(Lg={}));class ha{constructor(e,t){this.channel=e,this.state={},this.pendingDiffs=[],this.joinRef=null,this.enabled=!1,this.caller={onJoin:()=>{},onLeave:()=>{},onSync:()=>{}};const i=t?.events||{state:"presence_state",diff:"presence_diff"};this.channel._on(i.state,{},o=>{const{onJoin:a,onLeave:u,onSync:d}=this.caller;this.joinRef=this.channel._joinRef(),this.state=ha.syncState(this.state,o,a,u),this.pendingDiffs.forEach(h=>{this.state=ha.syncDiff(this.state,h,a,u)}),this.pendingDiffs=[],d()}),this.channel._on(i.diff,{},o=>{const{onJoin:a,onLeave:u,onSync:d}=this.caller;this.inPendingSyncState()?this.pendingDiffs.push(o):(this.state=ha.syncDiff(this.state,o,a,u),d())}),this.onJoin((o,a,u)=>{this.channel._trigger("presence",{event:"join",key:o,currentPresences:a,newPresences:u})}),this.onLeave((o,a,u)=>{this.channel._trigger("presence",{event:"leave",key:o,currentPresences:a,leftPresences:u})}),this.onSync(()=>{this.channel._trigger("presence",{event:"sync"})})}static syncState(e,t,i,o){const a=this.cloneDeep(e),u=this.transformState(t),d={},h={};return this.map(a,(f,m)=>{u[f]||(h[f]=m)}),this.map(u,(f,m)=>{const _=a[f];if(_){const v=m.map(y=>y.presence_ref),S=_.map(y=>y.presence_ref),w=m.filter(y=>S.indexOf(y.presence_ref)<0),M=_.filter(y=>v.indexOf(y.presence_ref)<0);w.length>0&&(d[f]=w),M.length>0&&(h[f]=M)}else d[f]=m}),this.syncDiff(a,{joins:d,leaves:h},i,o)}static syncDiff(e,t,i,o){const{joins:a,leaves:u}={joins:this.transformState(t.joins),leaves:this.transformState(t.leaves)};return i||(i=()=>{}),o||(o=()=>{}),this.map(a,(d,h)=>{var f;const m=(f=e[d])!==null&&f!==void 0?f:[];if(e[d]=this.cloneDeep(h),m.length>0){const _=e[d].map(S=>S.presence_ref),v=m.filter(S=>_.indexOf(S.presence_ref)<0);e[d].unshift(...v)}i(d,m,h)}),this.map(u,(d,h)=>{let f=e[d];if(!f)return;const m=h.map(_=>_.presence_ref);f=f.filter(_=>m.indexOf(_.presence_ref)<0),e[d]=f,o(d,f,h),f.length===0&&delete e[d]}),e}static map(e,t){return Object.getOwnPropertyNames(e).map(i=>t(i,e[i]))}static transformState(e){return e=this.cloneDeep(e),Object.getOwnPropertyNames(e).reduce((t,i)=>{const o=e[i];return"metas"in o?t[i]=o.metas.map(a=>(a.presence_ref=a.phx_ref,delete a.phx_ref,delete a.phx_ref_prev,a)):t[i]=o,t},{})}static cloneDeep(e){return JSON.parse(JSON.stringify(e))}onJoin(e){this.caller.onJoin=e}onLeave(e){this.caller.onLeave=e}onSync(e){this.caller.onSync=e}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel._joinRef()}}var Ig;(function(s){s.ALL="*",s.INSERT="INSERT",s.UPDATE="UPDATE",s.DELETE="DELETE"})(Ig||(Ig={}));var fa;(function(s){s.BROADCAST="broadcast",s.PRESENCE="presence",s.POSTGRES_CHANGES="postgres_changes",s.SYSTEM="system"})(fa||(fa={}));var Fi;(function(s){s.SUBSCRIBED="SUBSCRIBED",s.TIMED_OUT="TIMED_OUT",s.CLOSED="CLOSED",s.CHANNEL_ERROR="CHANNEL_ERROR"})(Fi||(Fi={}));class _h{constructor(e,t={config:{}},i){this.topic=e,this.params=t,this.socket=i,this.bindings={},this.state=Yt.closed,this.joinedOnce=!1,this.pushBuffer=[],this.subTopic=e.replace(/^realtime:/i,""),this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:"",enabled:!1},private:!1},t.config),this.timeout=this.socket.timeout,this.joinPush=new Od(this,ai.join,this.params,this.timeout),this.rejoinTimer=new T_(()=>this._rejoinUntilConnected(),this.socket.reconnectAfterMs),this.joinPush.receive("ok",()=>{this.state=Yt.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach(o=>o.send()),this.pushBuffer=[]}),this._onClose(()=>{this.rejoinTimer.reset(),this.socket.log("channel",`close ${this.topic} ${this._joinRef()}`),this.state=Yt.closed,this.socket._remove(this)}),this._onError(o=>{this._isLeaving()||this._isClosed()||(this.socket.log("channel",`error ${this.topic}`,o),this.state=Yt.errored,this.rejoinTimer.scheduleTimeout())}),this.joinPush.receive("timeout",()=>{this._isJoining()&&(this.socket.log("channel",`timeout ${this.topic}`,this.joinPush.timeout),this.state=Yt.errored,this.rejoinTimer.scheduleTimeout())}),this.joinPush.receive("error",o=>{this._isLeaving()||this._isClosed()||(this.socket.log("channel",`error ${this.topic}`,o),this.state=Yt.errored,this.rejoinTimer.scheduleTimeout())}),this._on(ai.reply,{},(o,a)=>{this._trigger(this._replyEventName(a),o)}),this.presence=new ha(this),this.broadcastEndpointURL=A_(this.socket.endPoint),this.private=this.params.config.private||!1}subscribe(e,t=this.timeout){var i,o,a;if(this.socket.isConnected()||this.socket.connect(),this.state==Yt.closed){const{config:{broadcast:u,presence:d,private:h}}=this.params,f=(o=(i=this.bindings.postgres_changes)===null||i===void 0?void 0:i.map(S=>S.filter))!==null&&o!==void 0?o:[],m=!!this.bindings[fa.PRESENCE]&&this.bindings[fa.PRESENCE].length>0||((a=this.params.config.presence)===null||a===void 0?void 0:a.enabled)===!0,_={},v={broadcast:u,presence:Object.assign(Object.assign({},d),{enabled:m}),postgres_changes:f,private:h};this.socket.accessTokenValue&&(_.access_token=this.socket.accessTokenValue),this._onError(S=>e?.(Fi.CHANNEL_ERROR,S)),this._onClose(()=>e?.(Fi.CLOSED)),this.updateJoinPayload(Object.assign({config:v},_)),this.joinedOnce=!0,this._rejoin(t),this.joinPush.receive("ok",async({postgres_changes:S})=>{var w;if(this.socket.setAuth(),S===void 0){e?.(Fi.SUBSCRIBED);return}else{const M=this.bindings.postgres_changes,y=(w=M?.length)!==null&&w!==void 0?w:0,x=[];for(let C=0;C<y;C++){const T=M[C],{filter:{event:L,schema:V,table:D,filter:N}}=T,Q=S&&S[C];if(Q&&Q.event===L&&Q.schema===V&&Q.table===D&&Q.filter===N)x.push(Object.assign(Object.assign({},T),{id:Q.id}));else{this.unsubscribe(),this.state=Yt.errored,e?.(Fi.CHANNEL_ERROR,new Error("mismatch between server and client bindings for postgres changes"));return}}this.bindings.postgres_changes=x,e&&e(Fi.SUBSCRIBED);return}}).receive("error",S=>{this.state=Yt.errored,e?.(Fi.CHANNEL_ERROR,new Error(JSON.stringify(Object.values(S).join(", ")||"error")))}).receive("timeout",()=>{e?.(Fi.TIMED_OUT)})}return this}presenceState(){return this.presence.state}async track(e,t={}){return await this.send({type:"presence",event:"track",payload:e},t.timeout||this.timeout)}async untrack(e={}){return await this.send({type:"presence",event:"untrack"},e)}on(e,t,i){return this.state===Yt.joined&&e===fa.PRESENCE&&(this.socket.log("channel",`resubscribe to ${this.topic} due to change in presence callbacks on joined channel`),this.unsubscribe().then(()=>this.subscribe())),this._on(e,t,i)}async send(e,t={}){var i,o;if(!this._canPush()&&e.type==="broadcast"){const{event:a,payload:u}=e,h={method:"POST",headers:{Authorization:this.socket.accessTokenValue?`Bearer ${this.socket.accessTokenValue}`:"",apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":"application/json"},body:JSON.stringify({messages:[{topic:this.subTopic,event:a,payload:u,private:this.private}]})};try{const f=await this._fetchWithTimeout(this.broadcastEndpointURL,h,(i=t.timeout)!==null&&i!==void 0?i:this.timeout);return await((o=f.body)===null||o===void 0?void 0:o.cancel()),f.ok?"ok":"error"}catch(f){return f.name==="AbortError"?"timed out":"error"}}else return new Promise(a=>{var u,d,h;const f=this._push(e.type,e,t.timeout||this.timeout);e.type==="broadcast"&&!(!((h=(d=(u=this.params)===null||u===void 0?void 0:u.config)===null||d===void 0?void 0:d.broadcast)===null||h===void 0)&&h.ack)&&a("ok"),f.receive("ok",()=>a("ok")),f.receive("error",()=>a("error")),f.receive("timeout",()=>a("timed out"))})}updateJoinPayload(e){this.joinPush.updatePayload(e)}unsubscribe(e=this.timeout){this.state=Yt.leaving;const t=()=>{this.socket.log("channel",`leave ${this.topic}`),this._trigger(ai.close,"leave",this._joinRef())};this.joinPush.destroy();let i=null;return new Promise(o=>{i=new Od(this,ai.leave,{},e),i.receive("ok",()=>{t(),o("ok")}).receive("timeout",()=>{t(),o("timed out")}).receive("error",()=>{o("error")}),i.send(),this._canPush()||i.trigger("ok",{})}).finally(()=>{i?.destroy()})}teardown(){this.pushBuffer.forEach(e=>e.destroy()),this.pushBuffer=[],this.rejoinTimer.reset(),this.joinPush.destroy(),this.state=Yt.closed,this.bindings={}}async _fetchWithTimeout(e,t,i){const o=new AbortController,a=setTimeout(()=>o.abort(),i),u=await this.socket.fetch(e,Object.assign(Object.assign({},t),{signal:o.signal}));return clearTimeout(a),u}_push(e,t,i=this.timeout){if(!this.joinedOnce)throw`tried to push '${e}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;let o=new Od(this,e,t,i);return this._canPush()?o.send():this._addToPushBuffer(o),o}_addToPushBuffer(e){if(e.startTimeout(),this.pushBuffer.push(e),this.pushBuffer.length>mT){const t=this.pushBuffer.shift();t&&(t.destroy(),this.socket.log("channel",`discarded push due to buffer overflow: ${t.event}`,t.payload))}}_onMessage(e,t,i){return t}_isMember(e){return this.topic===e}_joinRef(){return this.joinPush.ref}_trigger(e,t,i){var o,a;const u=e.toLocaleLowerCase(),{close:d,error:h,leave:f,join:m}=ai;if(i&&[d,h,f,m].indexOf(u)>=0&&i!==this._joinRef())return;let v=this._onMessage(u,t,i);if(t&&!v)throw"channel onMessage callbacks must return the payload, modified or unmodified";["insert","update","delete"].includes(u)?(o=this.bindings.postgres_changes)===null||o===void 0||o.filter(S=>{var w,M,y;return((w=S.filter)===null||w===void 0?void 0:w.event)==="*"||((y=(M=S.filter)===null||M===void 0?void 0:M.event)===null||y===void 0?void 0:y.toLocaleLowerCase())===u}).map(S=>S.callback(v,i)):(a=this.bindings[u])===null||a===void 0||a.filter(S=>{var w,M,y,x,C,T;if(["broadcast","presence","postgres_changes"].includes(u))if("id"in S){const L=S.id,V=(w=S.filter)===null||w===void 0?void 0:w.event;return L&&((M=t.ids)===null||M===void 0?void 0:M.includes(L))&&(V==="*"||V?.toLocaleLowerCase()===((y=t.data)===null||y===void 0?void 0:y.type.toLocaleLowerCase()))}else{const L=(C=(x=S?.filter)===null||x===void 0?void 0:x.event)===null||C===void 0?void 0:C.toLocaleLowerCase();return L==="*"||L===((T=t?.event)===null||T===void 0?void 0:T.toLocaleLowerCase())}else return S.type.toLocaleLowerCase()===u}).map(S=>{if(typeof v=="object"&&"ids"in v){const w=v.data,{schema:M,table:y,commit_timestamp:x,type:C,errors:T}=w;v=Object.assign(Object.assign({},{schema:M,table:y,commit_timestamp:x,eventType:C,new:{},old:{},errors:T}),this._getPayloadRecords(w))}S.callback(v,i)})}_isClosed(){return this.state===Yt.closed}_isJoined(){return this.state===Yt.joined}_isJoining(){return this.state===Yt.joining}_isLeaving(){return this.state===Yt.leaving}_replyEventName(e){return`chan_reply_${e}`}_on(e,t,i){const o=e.toLocaleLowerCase(),a={type:o,filter:t,callback:i};return this.bindings[o]?this.bindings[o].push(a):this.bindings[o]=[a],this}_off(e,t){const i=e.toLocaleLowerCase();return this.bindings[i]&&(this.bindings[i]=this.bindings[i].filter(o=>{var a;return!(((a=o.type)===null||a===void 0?void 0:a.toLocaleLowerCase())===i&&_h.isEqual(o.filter,t))})),this}static isEqual(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const i in e)if(e[i]!==t[i])return!1;return!0}_rejoinUntilConnected(){this.rejoinTimer.scheduleTimeout(),this.socket.isConnected()&&this._rejoin()}_onClose(e){this._on(ai.close,{},e)}_onError(e){this._on(ai.error,{},t=>e(t))}_canPush(){return this.socket.isConnected()&&this._isJoined()}_rejoin(e=this.timeout){this._isLeaving()||(this.socket._leaveOpenTopic(this.topic),this.state=Yt.joining,this.joinPush.resend(e))}_getPayloadRecords(e){const t={new:{},old:{}};return(e.type==="INSERT"||e.type==="UPDATE")&&(t.new=Pg(e.columns,e.record)),(e.type==="UPDATE"||e.type==="DELETE")&&(t.old=Pg(e.columns,e.old_record)),t}}const kd=()=>{},Yl={HEARTBEAT_INTERVAL:25e3,RECONNECT_DELAY:10,HEARTBEAT_TIMEOUT_FALLBACK:100},wT=[1e3,2e3,5e3,1e4],MT=1e4,TT=`
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;class bT{constructor(e,t){var i;if(this.accessTokenValue=null,this.apiKey=null,this.channels=new Array,this.endPoint="",this.httpEndpoint="",this.headers={},this.params={},this.timeout=eh,this.transport=null,this.heartbeatIntervalMs=Yl.HEARTBEAT_INTERVAL,this.heartbeatTimer=void 0,this.pendingHeartbeatRef=null,this.heartbeatCallback=kd,this.ref=0,this.reconnectTimer=null,this.logger=kd,this.conn=null,this.sendBuffer=[],this.serializer=new gT,this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this.accessToken=null,this._connectionState="disconnected",this._wasManualDisconnect=!1,this._authPromise=null,this._resolveFetch=o=>{let a;return o?a=o:typeof fetch>"u"?a=(...u)=>Sa(async()=>{const{default:d}=await Promise.resolve().then(()=>So);return{default:d}},void 0).then(({default:d})=>d(...u)).catch(d=>{throw new Error(`Failed to load @supabase/node-fetch: ${d.message}. This is required for HTTP requests in Node.js environments without native fetch.`)}):a=fetch,(...u)=>a(...u)},!(!((i=t?.params)===null||i===void 0)&&i.apikey))throw new Error("API key is required to connect to Realtime");this.apiKey=t.params.apikey,this.endPoint=`${e}/${th.websocket}`,this.httpEndpoint=A_(e),this._initializeOptions(t),this._setupReconnectionTimer(),this.fetch=this._resolveFetch(t?.fetch)}connect(){if(!(this.isConnecting()||this.isDisconnecting()||this.conn!==null&&this.isConnected())){if(this._setConnectionState("connecting"),this._setAuthSafely("connect"),this.transport)this.conn=new this.transport(this.endpointURL());else try{this.conn=cT.createWebSocket(this.endpointURL())}catch(e){this._setConnectionState("disconnected");const t=e.message;throw t.includes("Node.js")?new Error(`${t}

To use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`):new Error(`WebSocket not available: ${t}`)}this._setupConnectionHandlers()}}endpointURL(){return this._appendParams(this.endPoint,Object.assign({},this.params,{vsn:fT}))}disconnect(e,t){if(!this.isDisconnecting())if(this._setConnectionState("disconnecting",!0),this.conn){const i=setTimeout(()=>{this._setConnectionState("disconnected")},100);this.conn.onclose=()=>{clearTimeout(i),this._setConnectionState("disconnected")},e?this.conn.close(e,t??""):this.conn.close(),this._teardownConnection()}else this._setConnectionState("disconnected")}getChannels(){return this.channels}async removeChannel(e){const t=await e.unsubscribe();return this.channels.length===0&&this.disconnect(),t}async removeAllChannels(){const e=await Promise.all(this.channels.map(t=>t.unsubscribe()));return this.channels=[],this.disconnect(),e}log(e,t,i){this.logger(e,t,i)}connectionState(){switch(this.conn&&this.conn.readyState){case da.connecting:return ns.Connecting;case da.open:return ns.Open;case da.closing:return ns.Closing;default:return ns.Closed}}isConnected(){return this.connectionState()===ns.Open}isConnecting(){return this._connectionState==="connecting"}isDisconnecting(){return this._connectionState==="disconnecting"}channel(e,t={config:{}}){const i=`realtime:${e}`,o=this.getChannels().find(a=>a.topic===i);if(o)return o;{const a=new _h(`realtime:${e}`,t,this);return this.channels.push(a),a}}push(e){const{topic:t,event:i,payload:o,ref:a}=e,u=()=>{this.encode(e,d=>{var h;(h=this.conn)===null||h===void 0||h.send(d)})};this.log("push",`${t} ${i} (${a})`,o),this.isConnected()?u():this.sendBuffer.push(u)}async setAuth(e=null){this._authPromise=this._performAuth(e);try{await this._authPromise}finally{this._authPromise=null}}async sendHeartbeat(){var e;if(!this.isConnected()){try{this.heartbeatCallback("disconnected")}catch(t){this.log("error","error in heartbeat callback",t)}return}if(this.pendingHeartbeatRef){this.pendingHeartbeatRef=null,this.log("transport","heartbeat timeout. Attempting to re-establish connection");try{this.heartbeatCallback("timeout")}catch(t){this.log("error","error in heartbeat callback",t)}this._wasManualDisconnect=!1,(e=this.conn)===null||e===void 0||e.close(pT,"heartbeat timeout"),setTimeout(()=>{var t;this.isConnected()||(t=this.reconnectTimer)===null||t===void 0||t.scheduleTimeout()},Yl.HEARTBEAT_TIMEOUT_FALLBACK);return}this.pendingHeartbeatRef=this._makeRef(),this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:this.pendingHeartbeatRef});try{this.heartbeatCallback("sent")}catch(t){this.log("error","error in heartbeat callback",t)}this._setAuthSafely("heartbeat")}onHeartbeat(e){this.heartbeatCallback=e}flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(e=>e()),this.sendBuffer=[])}_makeRef(){let e=this.ref+1;return e===this.ref?this.ref=0:this.ref=e,this.ref.toString()}_leaveOpenTopic(e){let t=this.channels.find(i=>i.topic===e&&(i._isJoined()||i._isJoining()));t&&(this.log("transport",`leaving duplicate topic "${e}"`),t.unsubscribe())}_remove(e){this.channels=this.channels.filter(t=>t.topic!==e.topic)}_onConnMessage(e){this.decode(e.data,t=>{if(t.topic==="phoenix"&&t.event==="phx_reply")try{this.heartbeatCallback(t.payload.status==="ok"?"ok":"error")}catch(f){this.log("error","error in heartbeat callback",f)}t.ref&&t.ref===this.pendingHeartbeatRef&&(this.pendingHeartbeatRef=null);const{topic:i,event:o,payload:a,ref:u}=t,d=u?`(${u})`:"",h=a.status||"";this.log("receive",`${h} ${i} ${o} ${d}`.trim(),a),this.channels.filter(f=>f._isMember(i)).forEach(f=>f._trigger(o,a,u)),this._triggerStateCallbacks("message",t)})}_clearTimer(e){var t;e==="heartbeat"&&this.heartbeatTimer?(clearInterval(this.heartbeatTimer),this.heartbeatTimer=void 0):e==="reconnect"&&((t=this.reconnectTimer)===null||t===void 0||t.reset())}_clearAllTimers(){this._clearTimer("heartbeat"),this._clearTimer("reconnect")}_setupConnectionHandlers(){this.conn&&("binaryType"in this.conn&&(this.conn.binaryType="arraybuffer"),this.conn.onopen=()=>this._onConnOpen(),this.conn.onerror=e=>this._onConnError(e),this.conn.onmessage=e=>this._onConnMessage(e),this.conn.onclose=e=>this._onConnClose(e))}_teardownConnection(){this.conn&&(this.conn.onopen=null,this.conn.onerror=null,this.conn.onmessage=null,this.conn.onclose=null,this.conn=null),this._clearAllTimers(),this.channels.forEach(e=>e.teardown())}_onConnOpen(){this._setConnectionState("connected"),this.log("transport",`connected to ${this.endpointURL()}`),this.flushSendBuffer(),this._clearTimer("reconnect"),this.worker?this.workerRef||this._startWorkerHeartbeat():this._startHeartbeat(),this._triggerStateCallbacks("open")}_startHeartbeat(){this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.heartbeatTimer=setInterval(()=>this.sendHeartbeat(),this.heartbeatIntervalMs)}_startWorkerHeartbeat(){this.workerUrl?this.log("worker",`starting worker for from ${this.workerUrl}`):this.log("worker","starting default worker");const e=this._workerObjectUrl(this.workerUrl);this.workerRef=new Worker(e),this.workerRef.onerror=t=>{this.log("worker","worker error",t.message),this.workerRef.terminate()},this.workerRef.onmessage=t=>{t.data.event==="keepAlive"&&this.sendHeartbeat()},this.workerRef.postMessage({event:"start",interval:this.heartbeatIntervalMs})}_onConnClose(e){var t;this._setConnectionState("disconnected"),this.log("transport","close",e),this._triggerChanError(),this._clearTimer("heartbeat"),this._wasManualDisconnect||(t=this.reconnectTimer)===null||t===void 0||t.scheduleTimeout(),this._triggerStateCallbacks("close",e)}_onConnError(e){this._setConnectionState("disconnected"),this.log("transport",`${e}`),this._triggerChanError(),this._triggerStateCallbacks("error",e)}_triggerChanError(){this.channels.forEach(e=>e._trigger(ai.error))}_appendParams(e,t){if(Object.keys(t).length===0)return e;const i=e.match(/\?/)?"&":"?",o=new URLSearchParams(t);return`${e}${i}${o}`}_workerObjectUrl(e){let t;if(e)t=e;else{const i=new Blob([TT],{type:"application/javascript"});t=URL.createObjectURL(i)}return t}_setConnectionState(e,t=!1){this._connectionState=e,e==="connecting"?this._wasManualDisconnect=!1:e==="disconnecting"&&(this._wasManualDisconnect=t)}async _performAuth(e=null){let t;e?t=e:this.accessToken?t=await this.accessToken():t=this.accessTokenValue,this.accessTokenValue!=t&&(this.accessTokenValue=t,this.channels.forEach(i=>{const o={access_token:t,version:hT};t&&i.updateJoinPayload(o),i.joinedOnce&&i._isJoined()&&i._push(ai.access_token,{access_token:t})}))}async _waitForAuthIfNeeded(){this._authPromise&&await this._authPromise}_setAuthSafely(e="general"){this.setAuth().catch(t=>{this.log("error",`error setting auth in ${e}`,t)})}_triggerStateCallbacks(e,t){try{this.stateChangeCallbacks[e].forEach(i=>{try{i(t)}catch(o){this.log("error",`error in ${e} callback`,o)}})}catch(i){this.log("error",`error triggering ${e} callbacks`,i)}}_setupReconnectionTimer(){this.reconnectTimer=new T_(async()=>{setTimeout(async()=>{await this._waitForAuthIfNeeded(),this.isConnected()||this.connect()},Yl.RECONNECT_DELAY)},this.reconnectAfterMs)}_initializeOptions(e){var t,i,o,a,u,d,h,f,m;if(this.transport=(t=e?.transport)!==null&&t!==void 0?t:null,this.timeout=(i=e?.timeout)!==null&&i!==void 0?i:eh,this.heartbeatIntervalMs=(o=e?.heartbeatIntervalMs)!==null&&o!==void 0?o:Yl.HEARTBEAT_INTERVAL,this.worker=(a=e?.worker)!==null&&a!==void 0?a:!1,this.accessToken=(u=e?.accessToken)!==null&&u!==void 0?u:null,this.heartbeatCallback=(d=e?.heartbeatCallback)!==null&&d!==void 0?d:kd,e?.params&&(this.params=e.params),e?.logger&&(this.logger=e.logger),(e?.logLevel||e?.log_level)&&(this.logLevel=e.logLevel||e.log_level,this.params=Object.assign(Object.assign({},this.params),{log_level:this.logLevel})),this.reconnectAfterMs=(h=e?.reconnectAfterMs)!==null&&h!==void 0?h:(_=>wT[_-1]||MT),this.encode=(f=e?.encode)!==null&&f!==void 0?f:((_,v)=>v(JSON.stringify(_))),this.decode=(m=e?.decode)!==null&&m!==void 0?m:this.serializer.decode.bind(this.serializer),this.worker){if(typeof window<"u"&&!window.Worker)throw new Error("Web Worker is not supported");this.workerUrl=e?.workerUrl}}}class vh extends Error{constructor(e){super(e),this.__isStorageError=!0,this.name="StorageError"}}function Gt(s){return typeof s=="object"&&s!==null&&"__isStorageError"in s}class AT extends vh{constructor(e,t,i){super(e),this.name="StorageApiError",this.status=t,this.statusCode=i}toJSON(){return{name:this.name,message:this.message,status:this.status,statusCode:this.statusCode}}}class ih extends vh{constructor(e,t){super(e),this.name="StorageUnknownError",this.originalError=t}}var RT=function(s,e,t,i){function o(a){return a instanceof t?a:new t(function(u){u(a)})}return new(t||(t=Promise))(function(a,u){function d(m){try{f(i.next(m))}catch(_){u(_)}}function h(m){try{f(i.throw(m))}catch(_){u(_)}}function f(m){m.done?a(m.value):o(m.value).then(d,h)}f((i=i.apply(s,e||[])).next())})};const R_=s=>{let e;return s?e=s:typeof fetch>"u"?e=(...t)=>Sa(async()=>{const{default:i}=await Promise.resolve().then(()=>So);return{default:i}},void 0).then(({default:i})=>i(...t)):e=fetch,(...t)=>e(...t)},CT=()=>RT(void 0,void 0,void 0,function*(){return typeof Response>"u"?(yield Sa(()=>Promise.resolve().then(()=>So),void 0)).Response:Response}),rh=s=>{if(Array.isArray(s))return s.map(t=>rh(t));if(typeof s=="function"||s!==Object(s))return s;const e={};return Object.entries(s).forEach(([t,i])=>{const o=t.replace(/([-_][a-z])/gi,a=>a.toUpperCase().replace(/[-_]/g,""));e[o]=rh(i)}),e},PT=s=>{if(typeof s!="object"||s===null)return!1;const e=Object.getPrototypeOf(s);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in s)&&!(Symbol.iterator in s)};var as=function(s,e,t,i){function o(a){return a instanceof t?a:new t(function(u){u(a)})}return new(t||(t=Promise))(function(a,u){function d(m){try{f(i.next(m))}catch(_){u(_)}}function h(m){try{f(i.throw(m))}catch(_){u(_)}}function f(m){m.done?a(m.value):o(m.value).then(d,h)}f((i=i.apply(s,e||[])).next())})};const Fd=s=>s.msg||s.message||s.error_description||s.error||JSON.stringify(s),LT=(s,e,t)=>as(void 0,void 0,void 0,function*(){const i=yield CT();s instanceof i&&!t?.noResolveJson?s.json().then(o=>{const a=s.status||500,u=o?.statusCode||a+"";e(new AT(Fd(o),a,u))}).catch(o=>{e(new ih(Fd(o),o))}):e(new ih(Fd(s),s))}),IT=(s,e,t,i)=>{const o={method:s,headers:e?.headers||{}};return s==="GET"||!i?o:(PT(i)?(o.headers=Object.assign({"Content-Type":"application/json"},e?.headers),o.body=JSON.stringify(i)):o.body=i,e?.duplex&&(o.duplex=e.duplex),Object.assign(Object.assign({},o),t))};function Ea(s,e,t,i,o,a){return as(this,void 0,void 0,function*(){return new Promise((u,d)=>{s(t,IT(e,i,o,a)).then(h=>{if(!h.ok)throw h;return i?.noResolveJson?h:h.json()}).then(h=>u(h)).catch(h=>LT(h,d,i))})})}function au(s,e,t,i){return as(this,void 0,void 0,function*(){return Ea(s,"GET",e,t,i)})}function mi(s,e,t,i,o){return as(this,void 0,void 0,function*(){return Ea(s,"POST",e,i,o,t)})}function sh(s,e,t,i,o){return as(this,void 0,void 0,function*(){return Ea(s,"PUT",e,i,o,t)})}function DT(s,e,t,i){return as(this,void 0,void 0,function*(){return Ea(s,"HEAD",e,Object.assign(Object.assign({},t),{noResolveJson:!0}),i)})}function C_(s,e,t,i,o){return as(this,void 0,void 0,function*(){return Ea(s,"DELETE",e,i,o,t)})}var UT=function(s,e,t,i){function o(a){return a instanceof t?a:new t(function(u){u(a)})}return new(t||(t=Promise))(function(a,u){function d(m){try{f(i.next(m))}catch(_){u(_)}}function h(m){try{f(i.throw(m))}catch(_){u(_)}}function f(m){m.done?a(m.value):o(m.value).then(d,h)}f((i=i.apply(s,e||[])).next())})};class NT{constructor(e,t){this.downloadFn=e,this.shouldThrowOnError=t}then(e,t){return this.execute().then(e,t)}execute(){return UT(this,void 0,void 0,function*(){try{return{data:(yield this.downloadFn()).body,error:null}}catch(e){if(this.shouldThrowOnError)throw e;if(Gt(e))return{data:null,error:e};throw e}})}}var OT=function(s,e,t,i){function o(a){return a instanceof t?a:new t(function(u){u(a)})}return new(t||(t=Promise))(function(a,u){function d(m){try{f(i.next(m))}catch(_){u(_)}}function h(m){try{f(i.throw(m))}catch(_){u(_)}}function f(m){m.done?a(m.value):o(m.value).then(d,h)}f((i=i.apply(s,e||[])).next())})};class kT{constructor(e,t){this.downloadFn=e,this.shouldThrowOnError=t}asStream(){return new NT(this.downloadFn,this.shouldThrowOnError)}then(e,t){return this.execute().then(e,t)}execute(){return OT(this,void 0,void 0,function*(){try{return{data:yield(yield this.downloadFn()).blob(),error:null}}catch(e){if(this.shouldThrowOnError)throw e;if(Gt(e))return{data:null,error:e};throw e}})}}var Cn=function(s,e,t,i){function o(a){return a instanceof t?a:new t(function(u){u(a)})}return new(t||(t=Promise))(function(a,u){function d(m){try{f(i.next(m))}catch(_){u(_)}}function h(m){try{f(i.throw(m))}catch(_){u(_)}}function f(m){m.done?a(m.value):o(m.value).then(d,h)}f((i=i.apply(s,e||[])).next())})};const FT={limit:100,offset:0,sortBy:{column:"name",order:"asc"}},Dg={cacheControl:"3600",contentType:"text/plain;charset=UTF-8",upsert:!1};class BT{constructor(e,t={},i,o){this.shouldThrowOnError=!1,this.url=e,this.headers=t,this.bucketId=i,this.fetch=R_(o)}throwOnError(){return this.shouldThrowOnError=!0,this}uploadOrUpdate(e,t,i,o){return Cn(this,void 0,void 0,function*(){try{let a;const u=Object.assign(Object.assign({},Dg),o);let d=Object.assign(Object.assign({},this.headers),e==="POST"&&{"x-upsert":String(u.upsert)});const h=u.metadata;typeof Blob<"u"&&i instanceof Blob?(a=new FormData,a.append("cacheControl",u.cacheControl),h&&a.append("metadata",this.encodeMetadata(h)),a.append("",i)):typeof FormData<"u"&&i instanceof FormData?(a=i,a.append("cacheControl",u.cacheControl),h&&a.append("metadata",this.encodeMetadata(h))):(a=i,d["cache-control"]=`max-age=${u.cacheControl}`,d["content-type"]=u.contentType,h&&(d["x-metadata"]=this.toBase64(this.encodeMetadata(h)))),o?.headers&&(d=Object.assign(Object.assign({},d),o.headers));const f=this._removeEmptyFolders(t),m=this._getFinalPath(f),_=yield(e=="PUT"?sh:mi)(this.fetch,`${this.url}/object/${m}`,a,Object.assign({headers:d},u?.duplex?{duplex:u.duplex}:{}));return{data:{path:f,id:_.Id,fullPath:_.Key},error:null}}catch(a){if(this.shouldThrowOnError)throw a;if(Gt(a))return{data:null,error:a};throw a}})}upload(e,t,i){return Cn(this,void 0,void 0,function*(){return this.uploadOrUpdate("POST",e,t,i)})}uploadToSignedUrl(e,t,i,o){return Cn(this,void 0,void 0,function*(){const a=this._removeEmptyFolders(e),u=this._getFinalPath(a),d=new URL(this.url+`/object/upload/sign/${u}`);d.searchParams.set("token",t);try{let h;const f=Object.assign({upsert:Dg.upsert},o),m=Object.assign(Object.assign({},this.headers),{"x-upsert":String(f.upsert)});typeof Blob<"u"&&i instanceof Blob?(h=new FormData,h.append("cacheControl",f.cacheControl),h.append("",i)):typeof FormData<"u"&&i instanceof FormData?(h=i,h.append("cacheControl",f.cacheControl)):(h=i,m["cache-control"]=`max-age=${f.cacheControl}`,m["content-type"]=f.contentType);const _=yield sh(this.fetch,d.toString(),h,{headers:m});return{data:{path:a,fullPath:_.Key},error:null}}catch(h){if(this.shouldThrowOnError)throw h;if(Gt(h))return{data:null,error:h};throw h}})}createSignedUploadUrl(e,t){return Cn(this,void 0,void 0,function*(){try{let i=this._getFinalPath(e);const o=Object.assign({},this.headers);t?.upsert&&(o["x-upsert"]="true");const a=yield mi(this.fetch,`${this.url}/object/upload/sign/${i}`,{},{headers:o}),u=new URL(this.url+a.url),d=u.searchParams.get("token");if(!d)throw new vh("No token returned by API");return{data:{signedUrl:u.toString(),path:e,token:d},error:null}}catch(i){if(this.shouldThrowOnError)throw i;if(Gt(i))return{data:null,error:i};throw i}})}update(e,t,i){return Cn(this,void 0,void 0,function*(){return this.uploadOrUpdate("PUT",e,t,i)})}move(e,t,i){return Cn(this,void 0,void 0,function*(){try{return{data:yield mi(this.fetch,`${this.url}/object/move`,{bucketId:this.bucketId,sourceKey:e,destinationKey:t,destinationBucket:i?.destinationBucket},{headers:this.headers}),error:null}}catch(o){if(this.shouldThrowOnError)throw o;if(Gt(o))return{data:null,error:o};throw o}})}copy(e,t,i){return Cn(this,void 0,void 0,function*(){try{return{data:{path:(yield mi(this.fetch,`${this.url}/object/copy`,{bucketId:this.bucketId,sourceKey:e,destinationKey:t,destinationBucket:i?.destinationBucket},{headers:this.headers})).Key},error:null}}catch(o){if(this.shouldThrowOnError)throw o;if(Gt(o))return{data:null,error:o};throw o}})}createSignedUrl(e,t,i){return Cn(this,void 0,void 0,function*(){try{let o=this._getFinalPath(e),a=yield mi(this.fetch,`${this.url}/object/sign/${o}`,Object.assign({expiresIn:t},i?.transform?{transform:i.transform}:{}),{headers:this.headers});const u=i?.download?`&download=${i.download===!0?"":i.download}`:"";return a={signedUrl:encodeURI(`${this.url}${a.signedURL}${u}`)},{data:a,error:null}}catch(o){if(this.shouldThrowOnError)throw o;if(Gt(o))return{data:null,error:o};throw o}})}createSignedUrls(e,t,i){return Cn(this,void 0,void 0,function*(){try{const o=yield mi(this.fetch,`${this.url}/object/sign/${this.bucketId}`,{expiresIn:t,paths:e},{headers:this.headers}),a=i?.download?`&download=${i.download===!0?"":i.download}`:"";return{data:o.map(u=>Object.assign(Object.assign({},u),{signedUrl:u.signedURL?encodeURI(`${this.url}${u.signedURL}${a}`):null})),error:null}}catch(o){if(this.shouldThrowOnError)throw o;if(Gt(o))return{data:null,error:o};throw o}})}download(e,t){const o=typeof t?.transform<"u"?"render/image/authenticated":"object",a=this.transformOptsToQueryString(t?.transform||{}),u=a?`?${a}`:"",d=this._getFinalPath(e),h=()=>au(this.fetch,`${this.url}/${o}/${d}${u}`,{headers:this.headers,noResolveJson:!0});return new kT(h,this.shouldThrowOnError)}info(e){return Cn(this,void 0,void 0,function*(){const t=this._getFinalPath(e);try{const i=yield au(this.fetch,`${this.url}/object/info/${t}`,{headers:this.headers});return{data:rh(i),error:null}}catch(i){if(this.shouldThrowOnError)throw i;if(Gt(i))return{data:null,error:i};throw i}})}exists(e){return Cn(this,void 0,void 0,function*(){const t=this._getFinalPath(e);try{return yield DT(this.fetch,`${this.url}/object/${t}`,{headers:this.headers}),{data:!0,error:null}}catch(i){if(this.shouldThrowOnError)throw i;if(Gt(i)&&i instanceof ih){const o=i.originalError;if([400,404].includes(o?.status))return{data:!1,error:i}}throw i}})}getPublicUrl(e,t){const i=this._getFinalPath(e),o=[],a=t?.download?`download=${t.download===!0?"":t.download}`:"";a!==""&&o.push(a);const d=typeof t?.transform<"u"?"render/image":"object",h=this.transformOptsToQueryString(t?.transform||{});h!==""&&o.push(h);let f=o.join("&");return f!==""&&(f=`?${f}`),{data:{publicUrl:encodeURI(`${this.url}/${d}/public/${i}${f}`)}}}remove(e){return Cn(this,void 0,void 0,function*(){try{return{data:yield C_(this.fetch,`${this.url}/object/${this.bucketId}`,{prefixes:e},{headers:this.headers}),error:null}}catch(t){if(this.shouldThrowOnError)throw t;if(Gt(t))return{data:null,error:t};throw t}})}list(e,t,i){return Cn(this,void 0,void 0,function*(){try{const o=Object.assign(Object.assign(Object.assign({},FT),t),{prefix:e||""});return{data:yield mi(this.fetch,`${this.url}/object/list/${this.bucketId}`,o,{headers:this.headers},i),error:null}}catch(o){if(this.shouldThrowOnError)throw o;if(Gt(o))return{data:null,error:o};throw o}})}listV2(e,t){return Cn(this,void 0,void 0,function*(){try{const i=Object.assign({},e);return{data:yield mi(this.fetch,`${this.url}/object/list-v2/${this.bucketId}`,i,{headers:this.headers},t),error:null}}catch(i){if(this.shouldThrowOnError)throw i;if(Gt(i))return{data:null,error:i};throw i}})}encodeMetadata(e){return JSON.stringify(e)}toBase64(e){return typeof Buffer<"u"?Buffer.from(e).toString("base64"):btoa(e)}_getFinalPath(e){return`${this.bucketId}/${e.replace(/^\/+/,"")}`}_removeEmptyFolders(e){return e.replace(/^\/|\/$/g,"").replace(/\/+/g,"/")}transformOptsToQueryString(e){const t=[];return e.width&&t.push(`width=${e.width}`),e.height&&t.push(`height=${e.height}`),e.resize&&t.push(`resize=${e.resize}`),e.format&&t.push(`format=${e.format}`),e.quality&&t.push(`quality=${e.quality}`),t.join("&")}}const zT="2.12.2",HT={"X-Client-Info":`storage-js/${zT}`};var no=function(s,e,t,i){function o(a){return a instanceof t?a:new t(function(u){u(a)})}return new(t||(t=Promise))(function(a,u){function d(m){try{f(i.next(m))}catch(_){u(_)}}function h(m){try{f(i.throw(m))}catch(_){u(_)}}function f(m){m.done?a(m.value):o(m.value).then(d,h)}f((i=i.apply(s,e||[])).next())})};class VT{constructor(e,t={},i,o){this.shouldThrowOnError=!1;const a=new URL(e);o?.useNewHostname&&/supabase\.(co|in|red)$/.test(a.hostname)&&!a.hostname.includes("storage.supabase.")&&(a.hostname=a.hostname.replace("supabase.","storage.supabase.")),this.url=a.href,this.headers=Object.assign(Object.assign({},HT),t),this.fetch=R_(i)}throwOnError(){return this.shouldThrowOnError=!0,this}listBuckets(){return no(this,void 0,void 0,function*(){try{return{data:yield au(this.fetch,`${this.url}/bucket`,{headers:this.headers}),error:null}}catch(e){if(this.shouldThrowOnError)throw e;if(Gt(e))return{data:null,error:e};throw e}})}getBucket(e){return no(this,void 0,void 0,function*(){try{return{data:yield au(this.fetch,`${this.url}/bucket/${e}`,{headers:this.headers}),error:null}}catch(t){if(this.shouldThrowOnError)throw t;if(Gt(t))return{data:null,error:t};throw t}})}createBucket(e,t={public:!1}){return no(this,void 0,void 0,function*(){try{return{data:yield mi(this.fetch,`${this.url}/bucket`,{id:e,name:e,type:t.type,public:t.public,file_size_limit:t.fileSizeLimit,allowed_mime_types:t.allowedMimeTypes},{headers:this.headers}),error:null}}catch(i){if(this.shouldThrowOnError)throw i;if(Gt(i))return{data:null,error:i};throw i}})}updateBucket(e,t){return no(this,void 0,void 0,function*(){try{return{data:yield sh(this.fetch,`${this.url}/bucket/${e}`,{id:e,name:e,public:t.public,file_size_limit:t.fileSizeLimit,allowed_mime_types:t.allowedMimeTypes},{headers:this.headers}),error:null}}catch(i){if(this.shouldThrowOnError)throw i;if(Gt(i))return{data:null,error:i};throw i}})}emptyBucket(e){return no(this,void 0,void 0,function*(){try{return{data:yield mi(this.fetch,`${this.url}/bucket/${e}/empty`,{},{headers:this.headers}),error:null}}catch(t){if(this.shouldThrowOnError)throw t;if(Gt(t))return{data:null,error:t};throw t}})}deleteBucket(e){return no(this,void 0,void 0,function*(){try{return{data:yield C_(this.fetch,`${this.url}/bucket/${e}`,{},{headers:this.headers}),error:null}}catch(t){if(this.shouldThrowOnError)throw t;if(Gt(t))return{data:null,error:t};throw t}})}}class GT extends VT{constructor(e,t={},i,o){super(e,t,i,o)}from(e){return new BT(this.url,this.headers,e,this.fetch)}}const WT="2.58.0";let ca="";typeof Deno<"u"?ca="deno":typeof document<"u"?ca="web":typeof navigator<"u"&&navigator.product==="ReactNative"?ca="react-native":ca="node";const jT={"X-Client-Info":`supabase-js-${ca}/${WT}`},$T={headers:jT},XT={schema:"public"},qT={autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,flowType:"implicit"},YT={};var KT=function(s,e,t,i){function o(a){return a instanceof t?a:new t(function(u){u(a)})}return new(t||(t=Promise))(function(a,u){function d(m){try{f(i.next(m))}catch(_){u(_)}}function h(m){try{f(i.throw(m))}catch(_){u(_)}}function f(m){m.done?a(m.value):o(m.value).then(d,h)}f((i=i.apply(s,e||[])).next())})};const JT=s=>{let e;return s?e=s:typeof fetch>"u"?e=y_:e=fetch,(...t)=>e(...t)},ZT=()=>typeof Headers>"u"?x_:Headers,QT=(s,e,t)=>{const i=JT(t),o=ZT();return(a,u)=>KT(void 0,void 0,void 0,function*(){var d;const h=(d=yield e())!==null&&d!==void 0?d:s;let f=new o(u?.headers);return f.has("apikey")||f.set("apikey",s),f.has("Authorization")||f.set("Authorization",`Bearer ${h}`),i(a,Object.assign(Object.assign({},u),{headers:f}))})};var eb=function(s,e,t,i){function o(a){return a instanceof t?a:new t(function(u){u(a)})}return new(t||(t=Promise))(function(a,u){function d(m){try{f(i.next(m))}catch(_){u(_)}}function h(m){try{f(i.throw(m))}catch(_){u(_)}}function f(m){m.done?a(m.value):o(m.value).then(d,h)}f((i=i.apply(s,e||[])).next())})};function tb(s){return s.endsWith("/")?s:s+"/"}function nb(s,e){var t,i;const{db:o,auth:a,realtime:u,global:d}=s,{db:h,auth:f,realtime:m,global:_}=e,v={db:Object.assign(Object.assign({},h),o),auth:Object.assign(Object.assign({},f),a),realtime:Object.assign(Object.assign({},m),u),storage:{},global:Object.assign(Object.assign(Object.assign({},_),d),{headers:Object.assign(Object.assign({},(t=_?.headers)!==null&&t!==void 0?t:{}),(i=d?.headers)!==null&&i!==void 0?i:{})}),accessToken:()=>eb(this,void 0,void 0,function*(){return""})};return s.accessToken?v.accessToken=s.accessToken:delete v.accessToken,v}function ib(s){const e=s?.trim();if(!e)throw new Error("supabaseUrl is required.");if(!e.match(/^https?:\/\//i))throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");try{return new URL(tb(e))}catch{throw Error("Invalid supabaseUrl: Provided URL is malformed.")}}const P_="2.72.0",ao=30*1e3,oh=3,Bd=oh*ao,rb="http://localhost:9999",sb="supabase.auth.token",ob={"X-Client-Info":`gotrue-js/${P_}`},ah="X-Supabase-Api-Version",L_={"2024-01-01":{timestamp:Date.parse("2024-01-01T00:00:00.0Z"),name:"2024-01-01"}},ab=/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,lb=600*1e3;class yh extends Error{constructor(e,t,i){super(e),this.__isAuthError=!0,this.name="AuthError",this.status=t,this.code=i}}function tt(s){return typeof s=="object"&&s!==null&&"__isAuthError"in s}class ub extends yh{constructor(e,t,i){super(e,t,i),this.name="AuthApiError",this.status=t,this.code=i}}function cb(s){return tt(s)&&s.name==="AuthApiError"}class I_ extends yh{constructor(e,t){super(e),this.name="AuthUnknownError",this.originalError=t}}class Rr extends yh{constructor(e,t,i,o){super(e,i,o),this.name=t,this.status=i}}class _r extends Rr{constructor(){super("Auth session missing!","AuthSessionMissingError",400,void 0)}}function db(s){return tt(s)&&s.name==="AuthSessionMissingError"}class la extends Rr{constructor(){super("Auth session or user missing","AuthInvalidTokenResponseError",500,void 0)}}class Kl extends Rr{constructor(e){super(e,"AuthInvalidCredentialsError",400,void 0)}}class Jl extends Rr{constructor(e,t=null){super(e,"AuthImplicitGrantRedirectError",500,void 0),this.details=null,this.details=t}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}function hb(s){return tt(s)&&s.name==="AuthImplicitGrantRedirectError"}class Ug extends Rr{constructor(e,t=null){super(e,"AuthPKCEGrantCodeExchangeError",500,void 0),this.details=null,this.details=t}toJSON(){return{name:this.name,message:this.message,status:this.status,details:this.details}}}class lh extends Rr{constructor(e,t){super(e,"AuthRetryableFetchError",t,void 0)}}function zd(s){return tt(s)&&s.name==="AuthRetryableFetchError"}class Ng extends Rr{constructor(e,t,i){super(e,"AuthWeakPasswordError",t,"weak_password"),this.reasons=i}}class uh extends Rr{constructor(e){super(e,"AuthInvalidJwtError",400,"invalid_jwt")}}const lu="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""),Og=` 	
\r=`.split(""),fb=(()=>{const s=new Array(128);for(let e=0;e<s.length;e+=1)s[e]=-1;for(let e=0;e<Og.length;e+=1)s[Og[e].charCodeAt(0)]=-2;for(let e=0;e<lu.length;e+=1)s[lu[e].charCodeAt(0)]=e;return s})();function kg(s,e,t){if(s!==null)for(e.queue=e.queue<<8|s,e.queuedBits+=8;e.queuedBits>=6;){const i=e.queue>>e.queuedBits-6&63;t(lu[i]),e.queuedBits-=6}else if(e.queuedBits>0)for(e.queue=e.queue<<6-e.queuedBits,e.queuedBits=6;e.queuedBits>=6;){const i=e.queue>>e.queuedBits-6&63;t(lu[i]),e.queuedBits-=6}}function D_(s,e,t){const i=fb[s];if(i>-1)for(e.queue=e.queue<<6|i,e.queuedBits+=6;e.queuedBits>=8;)t(e.queue>>e.queuedBits-8&255),e.queuedBits-=8;else{if(i===-2)return;throw new Error(`Invalid Base64-URL character "${String.fromCharCode(s)}"`)}}function Fg(s){const e=[],t=u=>{e.push(String.fromCodePoint(u))},i={utf8seq:0,codepoint:0},o={queue:0,queuedBits:0},a=u=>{gb(u,i,t)};for(let u=0;u<s.length;u+=1)D_(s.charCodeAt(u),o,a);return e.join("")}function pb(s,e){if(s<=127){e(s);return}else if(s<=2047){e(192|s>>6),e(128|s&63);return}else if(s<=65535){e(224|s>>12),e(128|s>>6&63),e(128|s&63);return}else if(s<=1114111){e(240|s>>18),e(128|s>>12&63),e(128|s>>6&63),e(128|s&63);return}throw new Error(`Unrecognized Unicode codepoint: ${s.toString(16)}`)}function mb(s,e){for(let t=0;t<s.length;t+=1){let i=s.charCodeAt(t);if(i>55295&&i<=56319){const o=(i-55296)*1024&65535;i=(s.charCodeAt(t+1)-56320&65535|o)+65536,t+=1}pb(i,e)}}function gb(s,e,t){if(e.utf8seq===0){if(s<=127){t(s);return}for(let i=1;i<6;i+=1)if((s>>7-i&1)===0){e.utf8seq=i;break}if(e.utf8seq===2)e.codepoint=s&31;else if(e.utf8seq===3)e.codepoint=s&15;else if(e.utf8seq===4)e.codepoint=s&7;else throw new Error("Invalid UTF-8 sequence");e.utf8seq-=1}else if(e.utf8seq>0){if(s<=127)throw new Error("Invalid UTF-8 sequence");e.codepoint=e.codepoint<<6|s&63,e.utf8seq-=1,e.utf8seq===0&&t(e.codepoint)}}function _b(s){const e=[],t={queue:0,queuedBits:0},i=o=>{e.push(o)};for(let o=0;o<s.length;o+=1)D_(s.charCodeAt(o),t,i);return new Uint8Array(e)}function vb(s){const e=[];return mb(s,t=>e.push(t)),new Uint8Array(e)}function yb(s){const e=[],t={queue:0,queuedBits:0},i=o=>{e.push(o)};return s.forEach(o=>kg(o,t,i)),kg(null,t,i),e.join("")}function xb(s){return Math.round(Date.now()/1e3)+s}function Sb(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(s){const e=Math.random()*16|0;return(s=="x"?e:e&3|8).toString(16)})}const qn=()=>typeof window<"u"&&typeof document<"u",Yr={tested:!1,writable:!1},U_=()=>{if(!qn())return!1;try{if(typeof globalThis.localStorage!="object")return!1}catch{return!1}if(Yr.tested)return Yr.writable;const s=`lswt-${Math.random()}${Math.random()}`;try{globalThis.localStorage.setItem(s,s),globalThis.localStorage.removeItem(s),Yr.tested=!0,Yr.writable=!0}catch{Yr.tested=!0,Yr.writable=!1}return Yr.writable};function Eb(s){const e={},t=new URL(s);if(t.hash&&t.hash[0]==="#")try{new URLSearchParams(t.hash.substring(1)).forEach((o,a)=>{e[a]=o})}catch{}return t.searchParams.forEach((i,o)=>{e[o]=i}),e}const N_=s=>{let e;return s?e=s:typeof fetch>"u"?e=(...t)=>Sa(async()=>{const{default:i}=await Promise.resolve().then(()=>So);return{default:i}},void 0).then(({default:i})=>i(...t)):e=fetch,(...t)=>e(...t)},wb=s=>typeof s=="object"&&s!==null&&"status"in s&&"ok"in s&&"json"in s&&typeof s.json=="function",lo=async(s,e,t)=>{await s.setItem(e,JSON.stringify(t))},Kr=async(s,e)=>{const t=await s.getItem(e);if(!t)return null;try{return JSON.parse(t)}catch{return t}},gr=async(s,e)=>{await s.removeItem(e)};class mu{constructor(){this.promise=new mu.promiseConstructor((e,t)=>{this.resolve=e,this.reject=t})}}mu.promiseConstructor=Promise;function Hd(s){const e=s.split(".");if(e.length!==3)throw new uh("Invalid JWT structure");for(let i=0;i<e.length;i++)if(!ab.test(e[i]))throw new uh("JWT not in base64url format");return{header:JSON.parse(Fg(e[0])),payload:JSON.parse(Fg(e[1])),signature:_b(e[2]),raw:{header:e[0],payload:e[1]}}}async function Mb(s){return await new Promise(e=>{setTimeout(()=>e(null),s)})}function Tb(s,e){return new Promise((i,o)=>{(async()=>{for(let a=0;a<1/0;a++)try{const u=await s(a);if(!e(a,null,u)){i(u);return}}catch(u){if(!e(a,u)){o(u);return}}})()})}function bb(s){return("0"+s.toString(16)).substr(-2)}function Ab(){const e=new Uint32Array(56);if(typeof crypto>"u"){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",i=t.length;let o="";for(let a=0;a<56;a++)o+=t.charAt(Math.floor(Math.random()*i));return o}return crypto.getRandomValues(e),Array.from(e,bb).join("")}async function Rb(s){const t=new TextEncoder().encode(s),i=await crypto.subtle.digest("SHA-256",t),o=new Uint8Array(i);return Array.from(o).map(a=>String.fromCharCode(a)).join("")}async function Cb(s){if(!(typeof crypto<"u"&&typeof crypto.subtle<"u"&&typeof TextEncoder<"u"))return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."),s;const t=await Rb(s);return btoa(t).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function io(s,e,t=!1){const i=Ab();let o=i;t&&(o+="/PASSWORD_RECOVERY"),await lo(s,`${e}-code-verifier`,o);const a=await Cb(i);return[a,i===a?"plain":"s256"]}const Pb=/^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;function Lb(s){const e=s.headers.get(ah);if(!e||!e.match(Pb))return null;try{return new Date(`${e}T00:00:00.0Z`)}catch{return null}}function Ib(s){if(!s)throw new Error("Missing exp claim");const e=Math.floor(Date.now()/1e3);if(s<=e)throw new Error("JWT has expired")}function Db(s){switch(s){case"RS256":return{name:"RSASSA-PKCS1-v1_5",hash:{name:"SHA-256"}};case"ES256":return{name:"ECDSA",namedCurve:"P-256",hash:{name:"SHA-256"}};default:throw new Error("Invalid alg claim")}}const Ub=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;function ro(s){if(!Ub.test(s))throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not")}function Vd(){const s={};return new Proxy(s,{get:(e,t)=>{if(t==="__isUserNotAvailableProxy")return!0;if(typeof t=="symbol"){const i=t.toString();if(i==="Symbol(Symbol.toPrimitive)"||i==="Symbol(Symbol.toStringTag)"||i==="Symbol(util.inspect.custom)")return}throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${t}" property of the session object is not supported. Please use getUser() instead.`)},set:(e,t)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${t}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)},deleteProperty:(e,t)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${t}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)}})}function Bg(s){return JSON.parse(JSON.stringify(s))}var Nb=function(s,e){var t={};for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&e.indexOf(i)<0&&(t[i]=s[i]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(s);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(s,i[o])&&(t[i[o]]=s[i[o]]);return t};const Qr=s=>s.msg||s.message||s.error_description||s.error||JSON.stringify(s),Ob=[502,503,504];async function zg(s){var e;if(!wb(s))throw new lh(Qr(s),0);if(Ob.includes(s.status))throw new lh(Qr(s),s.status);let t;try{t=await s.json()}catch(a){throw new I_(Qr(a),a)}let i;const o=Lb(s);if(o&&o.getTime()>=L_["2024-01-01"].timestamp&&typeof t=="object"&&t&&typeof t.code=="string"?i=t.code:typeof t=="object"&&t&&typeof t.error_code=="string"&&(i=t.error_code),i){if(i==="weak_password")throw new Ng(Qr(t),s.status,((e=t.weak_password)===null||e===void 0?void 0:e.reasons)||[]);if(i==="session_not_found")throw new _r}else if(typeof t=="object"&&t&&typeof t.weak_password=="object"&&t.weak_password&&Array.isArray(t.weak_password.reasons)&&t.weak_password.reasons.length&&t.weak_password.reasons.reduce((a,u)=>a&&typeof u=="string",!0))throw new Ng(Qr(t),s.status,t.weak_password.reasons);throw new ub(Qr(t),s.status||500,i)}const kb=(s,e,t,i)=>{const o={method:s,headers:e?.headers||{}};return s==="GET"?o:(o.headers=Object.assign({"Content-Type":"application/json;charset=UTF-8"},e?.headers),o.body=JSON.stringify(i),Object.assign(Object.assign({},o),t))};async function ct(s,e,t,i){var o;const a=Object.assign({},i?.headers);a[ah]||(a[ah]=L_["2024-01-01"].name),i?.jwt&&(a.Authorization=`Bearer ${i.jwt}`);const u=(o=i?.query)!==null&&o!==void 0?o:{};i?.redirectTo&&(u.redirect_to=i.redirectTo);const d=Object.keys(u).length?"?"+new URLSearchParams(u).toString():"",h=await Fb(s,e,t+d,{headers:a,noResolveJson:i?.noResolveJson},{},i?.body);return i?.xform?i?.xform(h):{data:Object.assign({},h),error:null}}async function Fb(s,e,t,i,o,a){const u=kb(e,i,o,a);let d;try{d=await s(t,Object.assign({},u))}catch(h){throw console.error(h),new lh(Qr(h),0)}if(d.ok||await zg(d),i?.noResolveJson)return d;try{return await d.json()}catch(h){await zg(h)}}function pi(s){var e;let t=null;Vb(s)&&(t=Object.assign({},s),s.expires_at||(t.expires_at=xb(s.expires_in)));const i=(e=s.user)!==null&&e!==void 0?e:s;return{data:{session:t,user:i},error:null}}function Hg(s){const e=pi(s);return!e.error&&s.weak_password&&typeof s.weak_password=="object"&&Array.isArray(s.weak_password.reasons)&&s.weak_password.reasons.length&&s.weak_password.message&&typeof s.weak_password.message=="string"&&s.weak_password.reasons.reduce((t,i)=>t&&typeof i=="string",!0)&&(e.data.weak_password=s.weak_password),e}function yr(s){var e;return{data:{user:(e=s.user)!==null&&e!==void 0?e:s},error:null}}function Bb(s){return{data:s,error:null}}function zb(s){const{action_link:e,email_otp:t,hashed_token:i,redirect_to:o,verification_type:a}=s,u=Nb(s,["action_link","email_otp","hashed_token","redirect_to","verification_type"]),d={action_link:e,email_otp:t,hashed_token:i,redirect_to:o,verification_type:a},h=Object.assign({},u);return{data:{properties:d,user:h},error:null}}function Hb(s){return s}function Vb(s){return s.access_token&&s.refresh_token&&s.expires_in}const Gd=["global","local","others"];var Gb=function(s,e){var t={};for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&e.indexOf(i)<0&&(t[i]=s[i]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(s);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(s,i[o])&&(t[i[o]]=s[i[o]]);return t};class Wb{constructor({url:e="",headers:t={},fetch:i}){this.url=e,this.headers=t,this.fetch=N_(i),this.mfa={listFactors:this._listFactors.bind(this),deleteFactor:this._deleteFactor.bind(this)}}async signOut(e,t=Gd[0]){if(Gd.indexOf(t)<0)throw new Error(`@supabase/auth-js: Parameter scope must be one of ${Gd.join(", ")}`);try{return await ct(this.fetch,"POST",`${this.url}/logout?scope=${t}`,{headers:this.headers,jwt:e,noResolveJson:!0}),{data:null,error:null}}catch(i){if(tt(i))return{data:null,error:i};throw i}}async inviteUserByEmail(e,t={}){try{return await ct(this.fetch,"POST",`${this.url}/invite`,{body:{email:e,data:t.data},headers:this.headers,redirectTo:t.redirectTo,xform:yr})}catch(i){if(tt(i))return{data:{user:null},error:i};throw i}}async generateLink(e){try{const{options:t}=e,i=Gb(e,["options"]),o=Object.assign(Object.assign({},i),t);return"newEmail"in i&&(o.new_email=i?.newEmail,delete o.newEmail),await ct(this.fetch,"POST",`${this.url}/admin/generate_link`,{body:o,headers:this.headers,xform:zb,redirectTo:t?.redirectTo})}catch(t){if(tt(t))return{data:{properties:null,user:null},error:t};throw t}}async createUser(e){try{return await ct(this.fetch,"POST",`${this.url}/admin/users`,{body:e,headers:this.headers,xform:yr})}catch(t){if(tt(t))return{data:{user:null},error:t};throw t}}async listUsers(e){var t,i,o,a,u,d,h;try{const f={nextPage:null,lastPage:0,total:0},m=await ct(this.fetch,"GET",`${this.url}/admin/users`,{headers:this.headers,noResolveJson:!0,query:{page:(i=(t=e?.page)===null||t===void 0?void 0:t.toString())!==null&&i!==void 0?i:"",per_page:(a=(o=e?.perPage)===null||o===void 0?void 0:o.toString())!==null&&a!==void 0?a:""},xform:Hb});if(m.error)throw m.error;const _=await m.json(),v=(u=m.headers.get("x-total-count"))!==null&&u!==void 0?u:0,S=(h=(d=m.headers.get("link"))===null||d===void 0?void 0:d.split(","))!==null&&h!==void 0?h:[];return S.length>0&&(S.forEach(w=>{const M=parseInt(w.split(";")[0].split("=")[1].substring(0,1)),y=JSON.parse(w.split(";")[1].split("=")[1]);f[`${y}Page`]=M}),f.total=parseInt(v)),{data:Object.assign(Object.assign({},_),f),error:null}}catch(f){if(tt(f))return{data:{users:[]},error:f};throw f}}async getUserById(e){ro(e);try{return await ct(this.fetch,"GET",`${this.url}/admin/users/${e}`,{headers:this.headers,xform:yr})}catch(t){if(tt(t))return{data:{user:null},error:t};throw t}}async updateUserById(e,t){ro(e);try{return await ct(this.fetch,"PUT",`${this.url}/admin/users/${e}`,{body:t,headers:this.headers,xform:yr})}catch(i){if(tt(i))return{data:{user:null},error:i};throw i}}async deleteUser(e,t=!1){ro(e);try{return await ct(this.fetch,"DELETE",`${this.url}/admin/users/${e}`,{headers:this.headers,body:{should_soft_delete:t},xform:yr})}catch(i){if(tt(i))return{data:{user:null},error:i};throw i}}async _listFactors(e){ro(e.userId);try{const{data:t,error:i}=await ct(this.fetch,"GET",`${this.url}/admin/users/${e.userId}/factors`,{headers:this.headers,xform:o=>({data:{factors:o},error:null})});return{data:t,error:i}}catch(t){if(tt(t))return{data:null,error:t};throw t}}async _deleteFactor(e){ro(e.userId),ro(e.id);try{return{data:await ct(this.fetch,"DELETE",`${this.url}/admin/users/${e.userId}/factors/${e.id}`,{headers:this.headers}),error:null}}catch(t){if(tt(t))return{data:null,error:t};throw t}}}function Vg(s={}){return{getItem:e=>s[e]||null,setItem:(e,t)=>{s[e]=t},removeItem:e=>{delete s[e]}}}function jb(){if(typeof globalThis!="object")try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch{typeof self<"u"&&(self.globalThis=self)}}const so={debug:!!(globalThis&&U_()&&globalThis.localStorage&&globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug")==="true")};class O_ extends Error{constructor(e){super(e),this.isAcquireTimeout=!0}}class $b extends O_{}async function Xb(s,e,t){so.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquire lock",s,e);const i=new globalThis.AbortController;return e>0&&setTimeout(()=>{i.abort(),so.debug&&console.log("@supabase/gotrue-js: navigatorLock acquire timed out",s)},e),await Promise.resolve().then(()=>globalThis.navigator.locks.request(s,e===0?{mode:"exclusive",ifAvailable:!0}:{mode:"exclusive",signal:i.signal},async o=>{if(o){so.debug&&console.log("@supabase/gotrue-js: navigatorLock: acquired",s,o.name);try{return await t()}finally{so.debug&&console.log("@supabase/gotrue-js: navigatorLock: released",s,o.name)}}else{if(e===0)throw so.debug&&console.log("@supabase/gotrue-js: navigatorLock: not immediately available",s),new $b(`Acquiring an exclusive Navigator LockManager lock "${s}" immediately failed`);if(so.debug)try{const a=await globalThis.navigator.locks.query();console.log("@supabase/gotrue-js: Navigator LockManager state",JSON.stringify(a,null,"  "))}catch(a){console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state",a)}return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"),await t()}}))}function k_(s){if(!/^0x[a-fA-F0-9]{40}$/.test(s))throw new Error(`@supabase/auth-js: Address "${s}" is invalid.`);return s.toLowerCase()}function qb(s){return parseInt(s,16)}function Yb(s){const e=new TextEncoder().encode(s);return"0x"+Array.from(e,i=>i.toString(16).padStart(2,"0")).join("")}function Kb(s){var e;const{chainId:t,domain:i,expirationTime:o,issuedAt:a=new Date,nonce:u,notBefore:d,requestId:h,resources:f,scheme:m,uri:_,version:v}=s;{if(!Number.isInteger(t))throw new Error(`@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${t}`);if(!i)throw new Error('@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.');if(u&&u.length<8)throw new Error(`@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${u}`);if(!_)throw new Error('@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.');if(v!=="1")throw new Error(`@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${v}`);if(!((e=s.statement)===null||e===void 0)&&e.includes(`
`))throw new Error(`@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${s.statement}`)}const S=k_(s.address),w=m?`${m}://${i}`:i,M=s.statement?`${s.statement}
`:"",y=`${w} wants you to sign in with your Ethereum account:
${S}

${M}`;let x=`URI: ${_}
Version: ${v}
Chain ID: ${t}${u?`
Nonce: ${u}`:""}
Issued At: ${a.toISOString()}`;if(o&&(x+=`
Expiration Time: ${o.toISOString()}`),d&&(x+=`
Not Before: ${d.toISOString()}`),h&&(x+=`
Request ID: ${h}`),f){let C=`
Resources:`;for(const T of f){if(!T||typeof T!="string")throw new Error(`@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${T}`);C+=`
- ${T}`}x+=C}return`${y}
${x}`}jb();const Jb={url:rb,storageKey:sb,autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,headers:ob,flowType:"implicit",debug:!1,hasCustomAuthorizationHeader:!1};async function Gg(s,e,t){return await t()}const oo={};class ma{constructor(e){var t,i;this.userStorage=null,this.memoryStorage=null,this.stateChangeEmitters=new Map,this.autoRefreshTicker=null,this.visibilityChangedCallback=null,this.refreshingDeferred=null,this.initializePromise=null,this.detectSessionInUrl=!0,this.hasCustomAuthorizationHeader=!1,this.suppressGetSessionWarning=!1,this.lockAcquired=!1,this.pendingInLock=[],this.broadcastChannel=null,this.logger=console.log,this.instanceID=ma.nextInstanceID,ma.nextInstanceID+=1,this.instanceID>0&&qn()&&console.warn("Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.");const o=Object.assign(Object.assign({},Jb),e);if(this.logDebugMessages=!!o.debug,typeof o.debug=="function"&&(this.logger=o.debug),this.persistSession=o.persistSession,this.storageKey=o.storageKey,this.autoRefreshToken=o.autoRefreshToken,this.admin=new Wb({url:o.url,headers:o.headers,fetch:o.fetch}),this.url=o.url,this.headers=o.headers,this.fetch=N_(o.fetch),this.lock=o.lock||Gg,this.detectSessionInUrl=o.detectSessionInUrl,this.flowType=o.flowType,this.hasCustomAuthorizationHeader=o.hasCustomAuthorizationHeader,o.lock?this.lock=o.lock:qn()&&(!((t=globalThis?.navigator)===null||t===void 0)&&t.locks)?this.lock=Xb:this.lock=Gg,this.jwks||(this.jwks={keys:[]},this.jwks_cached_at=Number.MIN_SAFE_INTEGER),this.mfa={verify:this._verify.bind(this),enroll:this._enroll.bind(this),unenroll:this._unenroll.bind(this),challenge:this._challenge.bind(this),listFactors:this._listFactors.bind(this),challengeAndVerify:this._challengeAndVerify.bind(this),getAuthenticatorAssuranceLevel:this._getAuthenticatorAssuranceLevel.bind(this)},this.persistSession?(o.storage?this.storage=o.storage:U_()?this.storage=globalThis.localStorage:(this.memoryStorage={},this.storage=Vg(this.memoryStorage)),o.userStorage&&(this.userStorage=o.userStorage)):(this.memoryStorage={},this.storage=Vg(this.memoryStorage)),qn()&&globalThis.BroadcastChannel&&this.persistSession&&this.storageKey){try{this.broadcastChannel=new globalThis.BroadcastChannel(this.storageKey)}catch(a){console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available",a)}(i=this.broadcastChannel)===null||i===void 0||i.addEventListener("message",async a=>{this._debug("received broadcast notification from other tab or client",a),await this._notifyAllSubscribers(a.data.event,a.data.session,!1)})}this.initialize()}get jwks(){var e,t;return(t=(e=oo[this.storageKey])===null||e===void 0?void 0:e.jwks)!==null&&t!==void 0?t:{keys:[]}}set jwks(e){oo[this.storageKey]=Object.assign(Object.assign({},oo[this.storageKey]),{jwks:e})}get jwks_cached_at(){var e,t;return(t=(e=oo[this.storageKey])===null||e===void 0?void 0:e.cachedAt)!==null&&t!==void 0?t:Number.MIN_SAFE_INTEGER}set jwks_cached_at(e){oo[this.storageKey]=Object.assign(Object.assign({},oo[this.storageKey]),{cachedAt:e})}_debug(...e){return this.logDebugMessages&&this.logger(`GoTrueClient@${this.instanceID} (${P_}) ${new Date().toISOString()}`,...e),this}async initialize(){return this.initializePromise?await this.initializePromise:(this.initializePromise=(async()=>await this._acquireLock(-1,async()=>await this._initialize()))(),await this.initializePromise)}async _initialize(){var e;try{const t=Eb(window.location.href);let i="none";if(this._isImplicitGrantCallback(t)?i="implicit":await this._isPKCECallback(t)&&(i="pkce"),qn()&&this.detectSessionInUrl&&i!=="none"){const{data:o,error:a}=await this._getSessionFromURL(t,i);if(a){if(this._debug("#_initialize()","error detecting session from URL",a),hb(a)){const h=(e=a.details)===null||e===void 0?void 0:e.code;if(h==="identity_already_exists"||h==="identity_not_found"||h==="single_identity_not_deletable")return{error:a}}return await this._removeSession(),{error:a}}const{session:u,redirectType:d}=o;return this._debug("#_initialize()","detected session in URL",u,"redirect type",d),await this._saveSession(u),setTimeout(async()=>{d==="recovery"?await this._notifyAllSubscribers("PASSWORD_RECOVERY",u):await this._notifyAllSubscribers("SIGNED_IN",u)},0),{error:null}}return await this._recoverAndRefresh(),{error:null}}catch(t){return tt(t)?{error:t}:{error:new I_("Unexpected error during initialization",t)}}finally{await this._handleVisibilityChange(),this._debug("#_initialize()","end")}}async signInAnonymously(e){var t,i,o;try{const a=await ct(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{data:(i=(t=e?.options)===null||t===void 0?void 0:t.data)!==null&&i!==void 0?i:{},gotrue_meta_security:{captcha_token:(o=e?.options)===null||o===void 0?void 0:o.captchaToken}},xform:pi}),{data:u,error:d}=a;if(d||!u)return{data:{user:null,session:null},error:d};const h=u.session,f=u.user;return u.session&&(await this._saveSession(u.session),await this._notifyAllSubscribers("SIGNED_IN",h)),{data:{user:f,session:h},error:null}}catch(a){if(tt(a))return{data:{user:null,session:null},error:a};throw a}}async signUp(e){var t,i,o;try{let a;if("email"in e){const{email:m,password:_,options:v}=e;let S=null,w=null;this.flowType==="pkce"&&([S,w]=await io(this.storage,this.storageKey)),a=await ct(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,redirectTo:v?.emailRedirectTo,body:{email:m,password:_,data:(t=v?.data)!==null&&t!==void 0?t:{},gotrue_meta_security:{captcha_token:v?.captchaToken},code_challenge:S,code_challenge_method:w},xform:pi})}else if("phone"in e){const{phone:m,password:_,options:v}=e;a=await ct(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{phone:m,password:_,data:(i=v?.data)!==null&&i!==void 0?i:{},channel:(o=v?.channel)!==null&&o!==void 0?o:"sms",gotrue_meta_security:{captcha_token:v?.captchaToken}},xform:pi})}else throw new Kl("You must provide either an email or phone number and a password");const{data:u,error:d}=a;if(d||!u)return{data:{user:null,session:null},error:d};const h=u.session,f=u.user;return u.session&&(await this._saveSession(u.session),await this._notifyAllSubscribers("SIGNED_IN",h)),{data:{user:f,session:h},error:null}}catch(a){if(tt(a))return{data:{user:null,session:null},error:a};throw a}}async signInWithPassword(e){try{let t;if("email"in e){const{email:a,password:u,options:d}=e;t=await ct(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{email:a,password:u,gotrue_meta_security:{captcha_token:d?.captchaToken}},xform:Hg})}else if("phone"in e){const{phone:a,password:u,options:d}=e;t=await ct(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{phone:a,password:u,gotrue_meta_security:{captcha_token:d?.captchaToken}},xform:Hg})}else throw new Kl("You must provide either an email or phone number and a password");const{data:i,error:o}=t;return o?{data:{user:null,session:null},error:o}:!i||!i.session||!i.user?{data:{user:null,session:null},error:new la}:(i.session&&(await this._saveSession(i.session),await this._notifyAllSubscribers("SIGNED_IN",i.session)),{data:Object.assign({user:i.user,session:i.session},i.weak_password?{weakPassword:i.weak_password}:null),error:o})}catch(t){if(tt(t))return{data:{user:null,session:null},error:t};throw t}}async signInWithOAuth(e){var t,i,o,a;return await this._handleProviderSignIn(e.provider,{redirectTo:(t=e.options)===null||t===void 0?void 0:t.redirectTo,scopes:(i=e.options)===null||i===void 0?void 0:i.scopes,queryParams:(o=e.options)===null||o===void 0?void 0:o.queryParams,skipBrowserRedirect:(a=e.options)===null||a===void 0?void 0:a.skipBrowserRedirect})}async exchangeCodeForSession(e){return await this.initializePromise,this._acquireLock(-1,async()=>this._exchangeCodeForSession(e))}async signInWithWeb3(e){const{chain:t}=e;switch(t){case"ethereum":return await this.signInWithEthereum(e);case"solana":return await this.signInWithSolana(e);default:throw new Error(`@supabase/auth-js: Unsupported chain "${t}"`)}}async signInWithEthereum(e){var t,i,o,a,u,d,h,f,m,_,v;let S,w;if("message"in e)S=e.message,w=e.signature;else{const{chain:M,wallet:y,statement:x,options:C}=e;let T;if(qn())if(typeof y=="object")T=y;else{const P=window;if("ethereum"in P&&typeof P.ethereum=="object"&&"request"in P.ethereum&&typeof P.ethereum.request=="function")T=P.ethereum;else throw new Error("@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.")}else{if(typeof y!="object"||!C?.url)throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");T=y}const L=new URL((t=C?.url)!==null&&t!==void 0?t:window.location.href),V=await T.request({method:"eth_requestAccounts"}).then(P=>P).catch(()=>{throw new Error("@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid")});if(!V||V.length===0)throw new Error("@supabase/auth-js: No accounts available. Please ensure the wallet is connected.");const D=k_(V[0]);let N=(i=C?.signInWithEthereum)===null||i===void 0?void 0:i.chainId;if(!N){const P=await T.request({method:"eth_chainId"});N=qb(P)}const Q={domain:L.host,address:D,statement:x,uri:L.href,version:"1",chainId:N,nonce:(o=C?.signInWithEthereum)===null||o===void 0?void 0:o.nonce,issuedAt:(u=(a=C?.signInWithEthereum)===null||a===void 0?void 0:a.issuedAt)!==null&&u!==void 0?u:new Date,expirationTime:(d=C?.signInWithEthereum)===null||d===void 0?void 0:d.expirationTime,notBefore:(h=C?.signInWithEthereum)===null||h===void 0?void 0:h.notBefore,requestId:(f=C?.signInWithEthereum)===null||f===void 0?void 0:f.requestId,resources:(m=C?.signInWithEthereum)===null||m===void 0?void 0:m.resources};S=Kb(Q),w=await T.request({method:"personal_sign",params:[Yb(S),D]})}try{const{data:M,error:y}=await ct(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"ethereum",message:S,signature:w},!((_=e.options)===null||_===void 0)&&_.captchaToken?{gotrue_meta_security:{captcha_token:(v=e.options)===null||v===void 0?void 0:v.captchaToken}}:null),xform:pi});if(y)throw y;return!M||!M.session||!M.user?{data:{user:null,session:null},error:new la}:(M.session&&(await this._saveSession(M.session),await this._notifyAllSubscribers("SIGNED_IN",M.session)),{data:Object.assign({},M),error:y})}catch(M){if(tt(M))return{data:{user:null,session:null},error:M};throw M}}async signInWithSolana(e){var t,i,o,a,u,d,h,f,m,_,v,S;let w,M;if("message"in e)w=e.message,M=e.signature;else{const{chain:y,wallet:x,statement:C,options:T}=e;let L;if(qn())if(typeof x=="object")L=x;else{const D=window;if("solana"in D&&typeof D.solana=="object"&&("signIn"in D.solana&&typeof D.solana.signIn=="function"||"signMessage"in D.solana&&typeof D.solana.signMessage=="function"))L=D.solana;else throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.")}else{if(typeof x!="object"||!T?.url)throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");L=x}const V=new URL((t=T?.url)!==null&&t!==void 0?t:window.location.href);if("signIn"in L&&L.signIn){const D=await L.signIn(Object.assign(Object.assign(Object.assign({issuedAt:new Date().toISOString()},T?.signInWithSolana),{version:"1",domain:V.host,uri:V.href}),C?{statement:C}:null));let N;if(Array.isArray(D)&&D[0]&&typeof D[0]=="object")N=D[0];else if(D&&typeof D=="object"&&"signedMessage"in D&&"signature"in D)N=D;else throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");if("signedMessage"in N&&"signature"in N&&(typeof N.signedMessage=="string"||N.signedMessage instanceof Uint8Array)&&N.signature instanceof Uint8Array)w=typeof N.signedMessage=="string"?N.signedMessage:new TextDecoder().decode(N.signedMessage),M=N.signature;else throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields")}else{if(!("signMessage"in L)||typeof L.signMessage!="function"||!("publicKey"in L)||typeof L!="object"||!L.publicKey||!("toBase58"in L.publicKey)||typeof L.publicKey.toBase58!="function")throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");w=[`${V.host} wants you to sign in with your Solana account:`,L.publicKey.toBase58(),...C?["",C,""]:[""],"Version: 1",`URI: ${V.href}`,`Issued At: ${(o=(i=T?.signInWithSolana)===null||i===void 0?void 0:i.issuedAt)!==null&&o!==void 0?o:new Date().toISOString()}`,...!((a=T?.signInWithSolana)===null||a===void 0)&&a.notBefore?[`Not Before: ${T.signInWithSolana.notBefore}`]:[],...!((u=T?.signInWithSolana)===null||u===void 0)&&u.expirationTime?[`Expiration Time: ${T.signInWithSolana.expirationTime}`]:[],...!((d=T?.signInWithSolana)===null||d===void 0)&&d.chainId?[`Chain ID: ${T.signInWithSolana.chainId}`]:[],...!((h=T?.signInWithSolana)===null||h===void 0)&&h.nonce?[`Nonce: ${T.signInWithSolana.nonce}`]:[],...!((f=T?.signInWithSolana)===null||f===void 0)&&f.requestId?[`Request ID: ${T.signInWithSolana.requestId}`]:[],...!((_=(m=T?.signInWithSolana)===null||m===void 0?void 0:m.resources)===null||_===void 0)&&_.length?["Resources",...T.signInWithSolana.resources.map(N=>`- ${N}`)]:[]].join(`
`);const D=await L.signMessage(new TextEncoder().encode(w),"utf8");if(!D||!(D instanceof Uint8Array))throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");M=D}}try{const{data:y,error:x}=await ct(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"solana",message:w,signature:yb(M)},!((v=e.options)===null||v===void 0)&&v.captchaToken?{gotrue_meta_security:{captcha_token:(S=e.options)===null||S===void 0?void 0:S.captchaToken}}:null),xform:pi});if(x)throw x;return!y||!y.session||!y.user?{data:{user:null,session:null},error:new la}:(y.session&&(await this._saveSession(y.session),await this._notifyAllSubscribers("SIGNED_IN",y.session)),{data:Object.assign({},y),error:x})}catch(y){if(tt(y))return{data:{user:null,session:null},error:y};throw y}}async _exchangeCodeForSession(e){const t=await Kr(this.storage,`${this.storageKey}-code-verifier`),[i,o]=(t??"").split("/");try{const{data:a,error:u}=await ct(this.fetch,"POST",`${this.url}/token?grant_type=pkce`,{headers:this.headers,body:{auth_code:e,code_verifier:i},xform:pi});if(await gr(this.storage,`${this.storageKey}-code-verifier`),u)throw u;return!a||!a.session||!a.user?{data:{user:null,session:null,redirectType:null},error:new la}:(a.session&&(await this._saveSession(a.session),await this._notifyAllSubscribers("SIGNED_IN",a.session)),{data:Object.assign(Object.assign({},a),{redirectType:o??null}),error:u})}catch(a){if(tt(a))return{data:{user:null,session:null,redirectType:null},error:a};throw a}}async signInWithIdToken(e){try{const{options:t,provider:i,token:o,access_token:a,nonce:u}=e,d=await ct(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,body:{provider:i,id_token:o,access_token:a,nonce:u,gotrue_meta_security:{captcha_token:t?.captchaToken}},xform:pi}),{data:h,error:f}=d;return f?{data:{user:null,session:null},error:f}:!h||!h.session||!h.user?{data:{user:null,session:null},error:new la}:(h.session&&(await this._saveSession(h.session),await this._notifyAllSubscribers("SIGNED_IN",h.session)),{data:h,error:f})}catch(t){if(tt(t))return{data:{user:null,session:null},error:t};throw t}}async signInWithOtp(e){var t,i,o,a,u;try{if("email"in e){const{email:d,options:h}=e;let f=null,m=null;this.flowType==="pkce"&&([f,m]=await io(this.storage,this.storageKey));const{error:_}=await ct(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{email:d,data:(t=h?.data)!==null&&t!==void 0?t:{},create_user:(i=h?.shouldCreateUser)!==null&&i!==void 0?i:!0,gotrue_meta_security:{captcha_token:h?.captchaToken},code_challenge:f,code_challenge_method:m},redirectTo:h?.emailRedirectTo});return{data:{user:null,session:null},error:_}}if("phone"in e){const{phone:d,options:h}=e,{data:f,error:m}=await ct(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{phone:d,data:(o=h?.data)!==null&&o!==void 0?o:{},create_user:(a=h?.shouldCreateUser)!==null&&a!==void 0?a:!0,gotrue_meta_security:{captcha_token:h?.captchaToken},channel:(u=h?.channel)!==null&&u!==void 0?u:"sms"}});return{data:{user:null,session:null,messageId:f?.message_id},error:m}}throw new Kl("You must provide either an email or phone number.")}catch(d){if(tt(d))return{data:{user:null,session:null},error:d};throw d}}async verifyOtp(e){var t,i;try{let o,a;"options"in e&&(o=(t=e.options)===null||t===void 0?void 0:t.redirectTo,a=(i=e.options)===null||i===void 0?void 0:i.captchaToken);const{data:u,error:d}=await ct(this.fetch,"POST",`${this.url}/verify`,{headers:this.headers,body:Object.assign(Object.assign({},e),{gotrue_meta_security:{captcha_token:a}}),redirectTo:o,xform:pi});if(d)throw d;if(!u)throw new Error("An error occurred on token verification.");const h=u.session,f=u.user;return h?.access_token&&(await this._saveSession(h),await this._notifyAllSubscribers(e.type=="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",h)),{data:{user:f,session:h},error:null}}catch(o){if(tt(o))return{data:{user:null,session:null},error:o};throw o}}async signInWithSSO(e){var t,i,o;try{let a=null,u=null;return this.flowType==="pkce"&&([a,u]=await io(this.storage,this.storageKey)),await ct(this.fetch,"POST",`${this.url}/sso`,{body:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},"providerId"in e?{provider_id:e.providerId}:null),"domain"in e?{domain:e.domain}:null),{redirect_to:(i=(t=e.options)===null||t===void 0?void 0:t.redirectTo)!==null&&i!==void 0?i:void 0}),!((o=e?.options)===null||o===void 0)&&o.captchaToken?{gotrue_meta_security:{captcha_token:e.options.captchaToken}}:null),{skip_http_redirect:!0,code_challenge:a,code_challenge_method:u}),headers:this.headers,xform:Bb})}catch(a){if(tt(a))return{data:null,error:a};throw a}}async reauthenticate(){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._reauthenticate())}async _reauthenticate(){try{return await this._useSession(async e=>{const{data:{session:t},error:i}=e;if(i)throw i;if(!t)throw new _r;const{error:o}=await ct(this.fetch,"GET",`${this.url}/reauthenticate`,{headers:this.headers,jwt:t.access_token});return{data:{user:null,session:null},error:o}})}catch(e){if(tt(e))return{data:{user:null,session:null},error:e};throw e}}async resend(e){try{const t=`${this.url}/resend`;if("email"in e){const{email:i,type:o,options:a}=e,{error:u}=await ct(this.fetch,"POST",t,{headers:this.headers,body:{email:i,type:o,gotrue_meta_security:{captcha_token:a?.captchaToken}},redirectTo:a?.emailRedirectTo});return{data:{user:null,session:null},error:u}}else if("phone"in e){const{phone:i,type:o,options:a}=e,{data:u,error:d}=await ct(this.fetch,"POST",t,{headers:this.headers,body:{phone:i,type:o,gotrue_meta_security:{captcha_token:a?.captchaToken}}});return{data:{user:null,session:null,messageId:u?.message_id},error:d}}throw new Kl("You must provide either an email or phone number and a type")}catch(t){if(tt(t))return{data:{user:null,session:null},error:t};throw t}}async getSession(){return await this.initializePromise,await this._acquireLock(-1,async()=>this._useSession(async t=>t))}async _acquireLock(e,t){this._debug("#_acquireLock","begin",e);try{if(this.lockAcquired){const i=this.pendingInLock.length?this.pendingInLock[this.pendingInLock.length-1]:Promise.resolve(),o=(async()=>(await i,await t()))();return this.pendingInLock.push((async()=>{try{await o}catch{}})()),o}return await this.lock(`lock:${this.storageKey}`,e,async()=>{this._debug("#_acquireLock","lock acquired for storage key",this.storageKey);try{this.lockAcquired=!0;const i=t();for(this.pendingInLock.push((async()=>{try{await i}catch{}})()),await i;this.pendingInLock.length;){const o=[...this.pendingInLock];await Promise.all(o),this.pendingInLock.splice(0,o.length)}return await i}finally{this._debug("#_acquireLock","lock released for storage key",this.storageKey),this.lockAcquired=!1}})}finally{this._debug("#_acquireLock","end")}}async _useSession(e){this._debug("#_useSession","begin");try{const t=await this.__loadSession();return await e(t)}finally{this._debug("#_useSession","end")}}async __loadSession(){this._debug("#__loadSession()","begin"),this.lockAcquired||this._debug("#__loadSession()","used outside of an acquired lock!",new Error().stack);try{let e=null;const t=await Kr(this.storage,this.storageKey);if(this._debug("#getSession()","session from storage",t),t!==null&&(this._isValidSession(t)?e=t:(this._debug("#getSession()","session from storage is not valid"),await this._removeSession())),!e)return{data:{session:null},error:null};const i=e.expires_at?e.expires_at*1e3-Date.now()<Bd:!1;if(this._debug("#__loadSession()",`session has${i?"":" not"} expired`,"expires_at",e.expires_at),!i){if(this.userStorage){const u=await Kr(this.userStorage,this.storageKey+"-user");u?.user?e.user=u.user:e.user=Vd()}if(this.storage.isServer&&e.user){let u=this.suppressGetSessionWarning;e=new Proxy(e,{get:(h,f,m)=>(!u&&f==="user"&&(console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."),u=!0,this.suppressGetSessionWarning=!0),Reflect.get(h,f,m))})}return{data:{session:e},error:null}}const{session:o,error:a}=await this._callRefreshToken(e.refresh_token);return a?{data:{session:null},error:a}:{data:{session:o},error:null}}finally{this._debug("#__loadSession()","end")}}async getUser(e){return e?await this._getUser(e):(await this.initializePromise,await this._acquireLock(-1,async()=>await this._getUser()))}async _getUser(e){try{return e?await ct(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:e,xform:yr}):await this._useSession(async t=>{var i,o,a;const{data:u,error:d}=t;if(d)throw d;return!(!((i=u.session)===null||i===void 0)&&i.access_token)&&!this.hasCustomAuthorizationHeader?{data:{user:null},error:new _r}:await ct(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:(a=(o=u.session)===null||o===void 0?void 0:o.access_token)!==null&&a!==void 0?a:void 0,xform:yr})})}catch(t){if(tt(t))return db(t)&&(await this._removeSession(),await gr(this.storage,`${this.storageKey}-code-verifier`)),{data:{user:null},error:t};throw t}}async updateUser(e,t={}){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._updateUser(e,t))}async _updateUser(e,t={}){try{return await this._useSession(async i=>{const{data:o,error:a}=i;if(a)throw a;if(!o.session)throw new _r;const u=o.session;let d=null,h=null;this.flowType==="pkce"&&e.email!=null&&([d,h]=await io(this.storage,this.storageKey));const{data:f,error:m}=await ct(this.fetch,"PUT",`${this.url}/user`,{headers:this.headers,redirectTo:t?.emailRedirectTo,body:Object.assign(Object.assign({},e),{code_challenge:d,code_challenge_method:h}),jwt:u.access_token,xform:yr});if(m)throw m;return u.user=f.user,await this._saveSession(u),await this._notifyAllSubscribers("USER_UPDATED",u),{data:{user:u.user},error:null}})}catch(i){if(tt(i))return{data:{user:null},error:i};throw i}}async setSession(e){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._setSession(e))}async _setSession(e){try{if(!e.access_token||!e.refresh_token)throw new _r;const t=Date.now()/1e3;let i=t,o=!0,a=null;const{payload:u}=Hd(e.access_token);if(u.exp&&(i=u.exp,o=i<=t),o){const{session:d,error:h}=await this._callRefreshToken(e.refresh_token);if(h)return{data:{user:null,session:null},error:h};if(!d)return{data:{user:null,session:null},error:null};a=d}else{const{data:d,error:h}=await this._getUser(e.access_token);if(h)throw h;a={access_token:e.access_token,refresh_token:e.refresh_token,user:d.user,token_type:"bearer",expires_in:i-t,expires_at:i},await this._saveSession(a),await this._notifyAllSubscribers("SIGNED_IN",a)}return{data:{user:a.user,session:a},error:null}}catch(t){if(tt(t))return{data:{session:null,user:null},error:t};throw t}}async refreshSession(e){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._refreshSession(e))}async _refreshSession(e){try{return await this._useSession(async t=>{var i;if(!e){const{data:u,error:d}=t;if(d)throw d;e=(i=u.session)!==null&&i!==void 0?i:void 0}if(!e?.refresh_token)throw new _r;const{session:o,error:a}=await this._callRefreshToken(e.refresh_token);return a?{data:{user:null,session:null},error:a}:o?{data:{user:o.user,session:o},error:null}:{data:{user:null,session:null},error:null}})}catch(t){if(tt(t))return{data:{user:null,session:null},error:t};throw t}}async _getSessionFromURL(e,t){try{if(!qn())throw new Jl("No browser detected.");if(e.error||e.error_description||e.error_code)throw new Jl(e.error_description||"Error in URL with unspecified error_description",{error:e.error||"unspecified_error",code:e.error_code||"unspecified_code"});switch(t){case"implicit":if(this.flowType==="pkce")throw new Ug("Not a valid PKCE flow url.");break;case"pkce":if(this.flowType==="implicit")throw new Jl("Not a valid implicit grant flow url.");break;default:}if(t==="pkce"){if(this._debug("#_initialize()","begin","is PKCE flow",!0),!e.code)throw new Ug("No code detected.");const{data:C,error:T}=await this._exchangeCodeForSession(e.code);if(T)throw T;const L=new URL(window.location.href);return L.searchParams.delete("code"),window.history.replaceState(window.history.state,"",L.toString()),{data:{session:C.session,redirectType:null},error:null}}const{provider_token:i,provider_refresh_token:o,access_token:a,refresh_token:u,expires_in:d,expires_at:h,token_type:f}=e;if(!a||!d||!u||!f)throw new Jl("No session defined in URL");const m=Math.round(Date.now()/1e3),_=parseInt(d);let v=m+_;h&&(v=parseInt(h));const S=v-m;S*1e3<=ao&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${S}s, should have been closer to ${_}s`);const w=v-_;m-w>=120?console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",w,v,m):m-w<0&&console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",w,v,m);const{data:M,error:y}=await this._getUser(a);if(y)throw y;const x={provider_token:i,provider_refresh_token:o,access_token:a,expires_in:_,expires_at:v,refresh_token:u,token_type:f,user:M.user};return window.location.hash="",this._debug("#_getSessionFromURL()","clearing window.location.hash"),{data:{session:x,redirectType:e.type},error:null}}catch(i){if(tt(i))return{data:{session:null,redirectType:null},error:i};throw i}}_isImplicitGrantCallback(e){return!!(e.access_token||e.error_description)}async _isPKCECallback(e){const t=await Kr(this.storage,`${this.storageKey}-code-verifier`);return!!(e.code&&t)}async signOut(e={scope:"global"}){return await this.initializePromise,await this._acquireLock(-1,async()=>await this._signOut(e))}async _signOut({scope:e}={scope:"global"}){return await this._useSession(async t=>{var i;const{data:o,error:a}=t;if(a)return{error:a};const u=(i=o.session)===null||i===void 0?void 0:i.access_token;if(u){const{error:d}=await this.admin.signOut(u,e);if(d&&!(cb(d)&&(d.status===404||d.status===401||d.status===403)))return{error:d}}return e!=="others"&&(await this._removeSession(),await gr(this.storage,`${this.storageKey}-code-verifier`)),{error:null}})}onAuthStateChange(e){const t=Sb(),i={id:t,callback:e,unsubscribe:()=>{this._debug("#unsubscribe()","state change callback with id removed",t),this.stateChangeEmitters.delete(t)}};return this._debug("#onAuthStateChange()","registered callback with id",t),this.stateChangeEmitters.set(t,i),(async()=>(await this.initializePromise,await this._acquireLock(-1,async()=>{this._emitInitialSession(t)})))(),{data:{subscription:i}}}async _emitInitialSession(e){return await this._useSession(async t=>{var i,o;try{const{data:{session:a},error:u}=t;if(u)throw u;await((i=this.stateChangeEmitters.get(e))===null||i===void 0?void 0:i.callback("INITIAL_SESSION",a)),this._debug("INITIAL_SESSION","callback id",e,"session",a)}catch(a){await((o=this.stateChangeEmitters.get(e))===null||o===void 0?void 0:o.callback("INITIAL_SESSION",null)),this._debug("INITIAL_SESSION","callback id",e,"error",a),console.error(a)}})}async resetPasswordForEmail(e,t={}){let i=null,o=null;this.flowType==="pkce"&&([i,o]=await io(this.storage,this.storageKey,!0));try{return await ct(this.fetch,"POST",`${this.url}/recover`,{body:{email:e,code_challenge:i,code_challenge_method:o,gotrue_meta_security:{captcha_token:t.captchaToken}},headers:this.headers,redirectTo:t.redirectTo})}catch(a){if(tt(a))return{data:null,error:a};throw a}}async getUserIdentities(){var e;try{const{data:t,error:i}=await this.getUser();if(i)throw i;return{data:{identities:(e=t.user.identities)!==null&&e!==void 0?e:[]},error:null}}catch(t){if(tt(t))return{data:null,error:t};throw t}}async linkIdentity(e){var t;try{const{data:i,error:o}=await this._useSession(async a=>{var u,d,h,f,m;const{data:_,error:v}=a;if(v)throw v;const S=await this._getUrlForProvider(`${this.url}/user/identities/authorize`,e.provider,{redirectTo:(u=e.options)===null||u===void 0?void 0:u.redirectTo,scopes:(d=e.options)===null||d===void 0?void 0:d.scopes,queryParams:(h=e.options)===null||h===void 0?void 0:h.queryParams,skipBrowserRedirect:!0});return await ct(this.fetch,"GET",S,{headers:this.headers,jwt:(m=(f=_.session)===null||f===void 0?void 0:f.access_token)!==null&&m!==void 0?m:void 0})});if(o)throw o;return qn()&&!(!((t=e.options)===null||t===void 0)&&t.skipBrowserRedirect)&&window.location.assign(i?.url),{data:{provider:e.provider,url:i?.url},error:null}}catch(i){if(tt(i))return{data:{provider:e.provider,url:null},error:i};throw i}}async unlinkIdentity(e){try{return await this._useSession(async t=>{var i,o;const{data:a,error:u}=t;if(u)throw u;return await ct(this.fetch,"DELETE",`${this.url}/user/identities/${e.identity_id}`,{headers:this.headers,jwt:(o=(i=a.session)===null||i===void 0?void 0:i.access_token)!==null&&o!==void 0?o:void 0})})}catch(t){if(tt(t))return{data:null,error:t};throw t}}async _refreshAccessToken(e){const t=`#_refreshAccessToken(${e.substring(0,5)}...)`;this._debug(t,"begin");try{const i=Date.now();return await Tb(async o=>(o>0&&await Mb(200*Math.pow(2,o-1)),this._debug(t,"refreshing attempt",o),await ct(this.fetch,"POST",`${this.url}/token?grant_type=refresh_token`,{body:{refresh_token:e},headers:this.headers,xform:pi})),(o,a)=>{const u=200*Math.pow(2,o);return a&&zd(a)&&Date.now()+u-i<ao})}catch(i){if(this._debug(t,"error",i),tt(i))return{data:{session:null,user:null},error:i};throw i}finally{this._debug(t,"end")}}_isValidSession(e){return typeof e=="object"&&e!==null&&"access_token"in e&&"refresh_token"in e&&"expires_at"in e}async _handleProviderSignIn(e,t){const i=await this._getUrlForProvider(`${this.url}/authorize`,e,{redirectTo:t.redirectTo,scopes:t.scopes,queryParams:t.queryParams});return this._debug("#_handleProviderSignIn()","provider",e,"options",t,"url",i),qn()&&!t.skipBrowserRedirect&&window.location.assign(i),{data:{provider:e,url:i},error:null}}async _recoverAndRefresh(){var e,t;const i="#_recoverAndRefresh()";this._debug(i,"begin");try{const o=await Kr(this.storage,this.storageKey);if(o&&this.userStorage){let u=await Kr(this.userStorage,this.storageKey+"-user");!this.storage.isServer&&Object.is(this.storage,this.userStorage)&&!u&&(u={user:o.user},await lo(this.userStorage,this.storageKey+"-user",u)),o.user=(e=u?.user)!==null&&e!==void 0?e:Vd()}else if(o&&!o.user&&!o.user){const u=await Kr(this.storage,this.storageKey+"-user");u&&u?.user?(o.user=u.user,await gr(this.storage,this.storageKey+"-user"),await lo(this.storage,this.storageKey,o)):o.user=Vd()}if(this._debug(i,"session from storage",o),!this._isValidSession(o)){this._debug(i,"session is not valid"),o!==null&&await this._removeSession();return}const a=((t=o.expires_at)!==null&&t!==void 0?t:1/0)*1e3-Date.now()<Bd;if(this._debug(i,`session has${a?"":" not"} expired with margin of ${Bd}s`),a){if(this.autoRefreshToken&&o.refresh_token){const{error:u}=await this._callRefreshToken(o.refresh_token);u&&(console.error(u),zd(u)||(this._debug(i,"refresh failed with a non-retryable error, removing the session",u),await this._removeSession()))}}else if(o.user&&o.user.__isUserNotAvailableProxy===!0)try{const{data:u,error:d}=await this._getUser(o.access_token);!d&&u?.user?(o.user=u.user,await this._saveSession(o),await this._notifyAllSubscribers("SIGNED_IN",o)):this._debug(i,"could not get user data, skipping SIGNED_IN notification")}catch(u){console.error("Error getting user data:",u),this._debug(i,"error getting user data, skipping SIGNED_IN notification",u)}else await this._notifyAllSubscribers("SIGNED_IN",o)}catch(o){this._debug(i,"error",o),console.error(o);return}finally{this._debug(i,"end")}}async _callRefreshToken(e){var t,i;if(!e)throw new _r;if(this.refreshingDeferred)return this.refreshingDeferred.promise;const o=`#_callRefreshToken(${e.substring(0,5)}...)`;this._debug(o,"begin");try{this.refreshingDeferred=new mu;const{data:a,error:u}=await this._refreshAccessToken(e);if(u)throw u;if(!a.session)throw new _r;await this._saveSession(a.session),await this._notifyAllSubscribers("TOKEN_REFRESHED",a.session);const d={session:a.session,error:null};return this.refreshingDeferred.resolve(d),d}catch(a){if(this._debug(o,"error",a),tt(a)){const u={session:null,error:a};return zd(a)||await this._removeSession(),(t=this.refreshingDeferred)===null||t===void 0||t.resolve(u),u}throw(i=this.refreshingDeferred)===null||i===void 0||i.reject(a),a}finally{this.refreshingDeferred=null,this._debug(o,"end")}}async _notifyAllSubscribers(e,t,i=!0){const o=`#_notifyAllSubscribers(${e})`;this._debug(o,"begin",t,`broadcast = ${i}`);try{this.broadcastChannel&&i&&this.broadcastChannel.postMessage({event:e,session:t});const a=[],u=Array.from(this.stateChangeEmitters.values()).map(async d=>{try{await d.callback(e,t)}catch(h){a.push(h)}});if(await Promise.all(u),a.length>0){for(let d=0;d<a.length;d+=1)console.error(a[d]);throw a[0]}}finally{this._debug(o,"end")}}async _saveSession(e){this._debug("#_saveSession()",e),this.suppressGetSessionWarning=!0;const t=Object.assign({},e),i=t.user&&t.user.__isUserNotAvailableProxy===!0;if(this.userStorage){!i&&t.user&&await lo(this.userStorage,this.storageKey+"-user",{user:t.user});const o=Object.assign({},t);delete o.user;const a=Bg(o);await lo(this.storage,this.storageKey,a)}else{const o=Bg(t);await lo(this.storage,this.storageKey,o)}}async _removeSession(){this._debug("#_removeSession()"),await gr(this.storage,this.storageKey),await gr(this.storage,this.storageKey+"-code-verifier"),await gr(this.storage,this.storageKey+"-user"),this.userStorage&&await gr(this.userStorage,this.storageKey+"-user"),await this._notifyAllSubscribers("SIGNED_OUT",null)}_removeVisibilityChangedCallback(){this._debug("#_removeVisibilityChangedCallback()");const e=this.visibilityChangedCallback;this.visibilityChangedCallback=null;try{e&&qn()&&window?.removeEventListener&&window.removeEventListener("visibilitychange",e)}catch(t){console.error("removing visibilitychange callback failed",t)}}async _startAutoRefresh(){await this._stopAutoRefresh(),this._debug("#_startAutoRefresh()");const e=setInterval(()=>this._autoRefreshTokenTick(),ao);this.autoRefreshTicker=e,e&&typeof e=="object"&&typeof e.unref=="function"?e.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(e),setTimeout(async()=>{await this.initializePromise,await this._autoRefreshTokenTick()},0)}async _stopAutoRefresh(){this._debug("#_stopAutoRefresh()");const e=this.autoRefreshTicker;this.autoRefreshTicker=null,e&&clearInterval(e)}async startAutoRefresh(){this._removeVisibilityChangedCallback(),await this._startAutoRefresh()}async stopAutoRefresh(){this._removeVisibilityChangedCallback(),await this._stopAutoRefresh()}async _autoRefreshTokenTick(){this._debug("#_autoRefreshTokenTick()","begin");try{await this._acquireLock(0,async()=>{try{const e=Date.now();try{return await this._useSession(async t=>{const{data:{session:i}}=t;if(!i||!i.refresh_token||!i.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const o=Math.floor((i.expires_at*1e3-e)/ao);this._debug("#_autoRefreshTokenTick()",`access token expires in ${o} ticks, a tick lasts ${ao}ms, refresh threshold is ${oh} ticks`),o<=oh&&await this._callRefreshToken(i.refresh_token)})}catch(t){console.error("Auto refresh tick failed with error. This is likely a transient error.",t)}}finally{this._debug("#_autoRefreshTokenTick()","end")}})}catch(e){if(e.isAcquireTimeout||e instanceof O_)this._debug("auto refresh token tick lock not available");else throw e}}async _handleVisibilityChange(){if(this._debug("#_handleVisibilityChange()"),!qn()||!window?.addEventListener)return this.autoRefreshToken&&this.startAutoRefresh(),!1;try{this.visibilityChangedCallback=async()=>await this._onVisibilityChanged(!1),window?.addEventListener("visibilitychange",this.visibilityChangedCallback),await this._onVisibilityChanged(!0)}catch(e){console.error("_handleVisibilityChange",e)}}async _onVisibilityChanged(e){const t=`#_onVisibilityChanged(${e})`;this._debug(t,"visibilityState",document.visibilityState),document.visibilityState==="visible"?(this.autoRefreshToken&&this._startAutoRefresh(),e||(await this.initializePromise,await this._acquireLock(-1,async()=>{if(document.visibilityState!=="visible"){this._debug(t,"acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");return}await this._recoverAndRefresh()}))):document.visibilityState==="hidden"&&this.autoRefreshToken&&this._stopAutoRefresh()}async _getUrlForProvider(e,t,i){const o=[`provider=${encodeURIComponent(t)}`];if(i?.redirectTo&&o.push(`redirect_to=${encodeURIComponent(i.redirectTo)}`),i?.scopes&&o.push(`scopes=${encodeURIComponent(i.scopes)}`),this.flowType==="pkce"){const[a,u]=await io(this.storage,this.storageKey),d=new URLSearchParams({code_challenge:`${encodeURIComponent(a)}`,code_challenge_method:`${encodeURIComponent(u)}`});o.push(d.toString())}if(i?.queryParams){const a=new URLSearchParams(i.queryParams);o.push(a.toString())}return i?.skipBrowserRedirect&&o.push(`skip_http_redirect=${i.skipBrowserRedirect}`),`${e}?${o.join("&")}`}async _unenroll(e){try{return await this._useSession(async t=>{var i;const{data:o,error:a}=t;return a?{data:null,error:a}:await ct(this.fetch,"DELETE",`${this.url}/factors/${e.factorId}`,{headers:this.headers,jwt:(i=o?.session)===null||i===void 0?void 0:i.access_token})})}catch(t){if(tt(t))return{data:null,error:t};throw t}}async _enroll(e){try{return await this._useSession(async t=>{var i,o;const{data:a,error:u}=t;if(u)return{data:null,error:u};const d=Object.assign({friendly_name:e.friendlyName,factor_type:e.factorType},e.factorType==="phone"?{phone:e.phone}:{issuer:e.issuer}),{data:h,error:f}=await ct(this.fetch,"POST",`${this.url}/factors`,{body:d,headers:this.headers,jwt:(i=a?.session)===null||i===void 0?void 0:i.access_token});return f?{data:null,error:f}:(e.factorType==="totp"&&(!((o=h?.totp)===null||o===void 0)&&o.qr_code)&&(h.totp.qr_code=`data:image/svg+xml;utf-8,${h.totp.qr_code}`),{data:h,error:null})})}catch(t){if(tt(t))return{data:null,error:t};throw t}}async _verify(e){return this._acquireLock(-1,async()=>{try{return await this._useSession(async t=>{var i;const{data:o,error:a}=t;if(a)return{data:null,error:a};const{data:u,error:d}=await ct(this.fetch,"POST",`${this.url}/factors/${e.factorId}/verify`,{body:{code:e.code,challenge_id:e.challengeId},headers:this.headers,jwt:(i=o?.session)===null||i===void 0?void 0:i.access_token});return d?{data:null,error:d}:(await this._saveSession(Object.assign({expires_at:Math.round(Date.now()/1e3)+u.expires_in},u)),await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED",u),{data:u,error:d})})}catch(t){if(tt(t))return{data:null,error:t};throw t}})}async _challenge(e){return this._acquireLock(-1,async()=>{try{return await this._useSession(async t=>{var i;const{data:o,error:a}=t;return a?{data:null,error:a}:await ct(this.fetch,"POST",`${this.url}/factors/${e.factorId}/challenge`,{body:{channel:e.channel},headers:this.headers,jwt:(i=o?.session)===null||i===void 0?void 0:i.access_token})})}catch(t){if(tt(t))return{data:null,error:t};throw t}})}async _challengeAndVerify(e){const{data:t,error:i}=await this._challenge({factorId:e.factorId});return i?{data:null,error:i}:await this._verify({factorId:e.factorId,challengeId:t.id,code:e.code})}async _listFactors(){const{data:{user:e},error:t}=await this.getUser();if(t)return{data:null,error:t};const i=e?.factors||[],o=i.filter(u=>u.factor_type==="totp"&&u.status==="verified"),a=i.filter(u=>u.factor_type==="phone"&&u.status==="verified");return{data:{all:i,totp:o,phone:a},error:null}}async _getAuthenticatorAssuranceLevel(){return this._acquireLock(-1,async()=>await this._useSession(async e=>{var t,i;const{data:{session:o},error:a}=e;if(a)return{data:null,error:a};if(!o)return{data:{currentLevel:null,nextLevel:null,currentAuthenticationMethods:[]},error:null};const{payload:u}=Hd(o.access_token);let d=null;u.aal&&(d=u.aal);let h=d;((i=(t=o.user.factors)===null||t===void 0?void 0:t.filter(_=>_.status==="verified"))!==null&&i!==void 0?i:[]).length>0&&(h="aal2");const m=u.amr||[];return{data:{currentLevel:d,nextLevel:h,currentAuthenticationMethods:m},error:null}}))}async fetchJwk(e,t={keys:[]}){let i=t.keys.find(d=>d.kid===e);if(i)return i;const o=Date.now();if(i=this.jwks.keys.find(d=>d.kid===e),i&&this.jwks_cached_at+lb>o)return i;const{data:a,error:u}=await ct(this.fetch,"GET",`${this.url}/.well-known/jwks.json`,{headers:this.headers});if(u)throw u;return!a.keys||a.keys.length===0||(this.jwks=a,this.jwks_cached_at=o,i=a.keys.find(d=>d.kid===e),!i)?null:i}async getClaims(e,t={}){try{let i=e;if(!i){const{data:S,error:w}=await this.getSession();if(w||!S.session)return{data:null,error:w};i=S.session.access_token}const{header:o,payload:a,signature:u,raw:{header:d,payload:h}}=Hd(i);t?.allowExpired||Ib(a.exp);const f=!o.alg||o.alg.startsWith("HS")||!o.kid||!("crypto"in globalThis&&"subtle"in globalThis.crypto)?null:await this.fetchJwk(o.kid,t?.keys?{keys:t.keys}:t?.jwks);if(!f){const{error:S}=await this.getUser(i);if(S)throw S;return{data:{claims:a,header:o,signature:u},error:null}}const m=Db(o.alg),_=await crypto.subtle.importKey("jwk",f,m,!0,["verify"]);if(!await crypto.subtle.verify(m,_,u,vb(`${d}.${h}`)))throw new uh("Invalid JWT signature");return{data:{claims:a,header:o,signature:u},error:null}}catch(i){if(tt(i))return{data:null,error:i};throw i}}}ma.nextInstanceID=0;const Zb=ma;class Qb extends Zb{constructor(e){super(e)}}var eA=function(s,e,t,i){function o(a){return a instanceof t?a:new t(function(u){u(a)})}return new(t||(t=Promise))(function(a,u){function d(m){try{f(i.next(m))}catch(_){u(_)}}function h(m){try{f(i.throw(m))}catch(_){u(_)}}function f(m){m.done?a(m.value):o(m.value).then(d,h)}f((i=i.apply(s,e||[])).next())})};class tA{constructor(e,t,i){var o,a,u;this.supabaseUrl=e,this.supabaseKey=t;const d=ib(e);if(!t)throw new Error("supabaseKey is required.");this.realtimeUrl=new URL("realtime/v1",d),this.realtimeUrl.protocol=this.realtimeUrl.protocol.replace("http","ws"),this.authUrl=new URL("auth/v1",d),this.storageUrl=new URL("storage/v1",d),this.functionsUrl=new URL("functions/v1",d);const h=`sb-${d.hostname.split(".")[0]}-auth-token`,f={db:XT,realtime:YT,auth:Object.assign(Object.assign({},qT),{storageKey:h}),global:$T},m=nb(i??{},f);this.storageKey=(o=m.auth.storageKey)!==null&&o!==void 0?o:"",this.headers=(a=m.global.headers)!==null&&a!==void 0?a:{},m.accessToken?(this.accessToken=m.accessToken,this.auth=new Proxy({},{get:(_,v)=>{throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(v)} is not possible`)}})):this.auth=this._initSupabaseAuthClient((u=m.auth)!==null&&u!==void 0?u:{},this.headers,m.global.fetch),this.fetch=QT(t,this._getAccessToken.bind(this),m.global.fetch),this.realtime=this._initRealtimeClient(Object.assign({headers:this.headers,accessToken:this._getAccessToken.bind(this)},m.realtime)),this.rest=new uT(new URL("rest/v1",d).href,{headers:this.headers,schema:m.db.schema,fetch:this.fetch}),this.storage=new GT(this.storageUrl.href,this.headers,this.fetch,i?.storage),m.accessToken||this._listenForAuthEvents()}get functions(){return new QM(this.functionsUrl.href,{headers:this.headers,customFetch:this.fetch})}from(e){return this.rest.from(e)}schema(e){return this.rest.schema(e)}rpc(e,t={},i={}){return this.rest.rpc(e,t,i)}channel(e,t={config:{}}){return this.realtime.channel(e,t)}getChannels(){return this.realtime.getChannels()}removeChannel(e){return this.realtime.removeChannel(e)}removeAllChannels(){return this.realtime.removeAllChannels()}_getAccessToken(){var e,t;return eA(this,void 0,void 0,function*(){if(this.accessToken)return yield this.accessToken();const{data:i}=yield this.auth.getSession();return(t=(e=i.session)===null||e===void 0?void 0:e.access_token)!==null&&t!==void 0?t:this.supabaseKey})}_initSupabaseAuthClient({autoRefreshToken:e,persistSession:t,detectSessionInUrl:i,storage:o,userStorage:a,storageKey:u,flowType:d,lock:h,debug:f},m,_){const v={Authorization:`Bearer ${this.supabaseKey}`,apikey:`${this.supabaseKey}`};return new Qb({url:this.authUrl.href,headers:Object.assign(Object.assign({},v),m),storageKey:u,autoRefreshToken:e,persistSession:t,detectSessionInUrl:i,storage:o,userStorage:a,flowType:d,lock:h,debug:f,fetch:_,hasCustomAuthorizationHeader:Object.keys(this.headers).some(S=>S.toLowerCase()==="authorization")})}_initRealtimeClient(e){return new bT(this.realtimeUrl.href,Object.assign(Object.assign({},e),{params:Object.assign({apikey:this.supabaseKey},e?.params)}))}_listenForAuthEvents(){return this.auth.onAuthStateChange((t,i)=>{this._handleTokenChanged(t,"CLIENT",i?.access_token)})}_handleTokenChanged(e,t,i){(e==="TOKEN_REFRESHED"||e==="SIGNED_IN")&&this.changedAccessToken!==i?(this.changedAccessToken=i,this.realtime.setAuth(i)):e==="SIGNED_OUT"&&(this.realtime.setAuth(),t=="STORAGE"&&this.auth.signOut(),this.changedAccessToken=void 0)}}const nA=(s,e,t)=>new tA(s,e,t);function iA(){if(typeof window<"u"||typeof process>"u")return!1;const s=process.version;if(s==null)return!1;const e=s.match(/^v(\d+)\./);return e?parseInt(e[1],10)<=18:!1}iA()&&console.warn("⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217");const rA="https://uwgeumzbsppcwsnrkcuv.supabase.co",sA="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV3Z2V1bXpic3BwY3dzbnJrY3V2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg4MjQ1NjYsImV4cCI6MjA3NDQwMDU2Nn0.cov2f65wO4OQawl8OHkmQGUex9nQdYFv4XrDgGgBu5g",Wd=nA(rA,sA);function oA(){const[s,e]=ss.useState([]),[t,i]=ss.useState(null);ss.useEffect(()=>{o()},[]);async function o(){const{data:d,error:h}=await Wd.from("gallery").select("*").order("created_at",{ascending:!1});if(h){console.error(h);return}e(d||[])}async function a(){if(!t)return alert("Choose file");const d=`${Date.now()}-${t.name}`,{error:h}=await Wd.storage.from("public").upload(d,t);if(h){alert("Upload failed"),console.error(h);return}const{error:f}=await Wd.from("gallery").insert([{filename:d}]);if(f){alert("DB insert failed"),console.error(f);return}i(null),o()}function u(d){return`${"https://uwgeumzbsppcwsnrkcuv.supabase.co".replace(/\/$/,"")}/storage/v1/object/public/public/${d}`}return Ve.jsxs("div",{className:"gallery",children:[Ve.jsx("h3",{children:"Public Gallery"}),Ve.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[Ve.jsx("input",{type:"file",onChange:d=>i(d.target.files[0])}),Ve.jsx("button",{onClick:a,children:"Upload"})]}),Ve.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(140px,1fr))",gap:8,marginTop:10},children:s.map(d=>Ve.jsxs("div",{style:{padding:8,background:"rgba(255,255,255,0.02)",borderRadius:8},children:[Ve.jsx("img",{src:u(d.filename),alt:d.filename,style:{width:"100%",height:100,objectFit:"cover",borderRadius:6}}),Ve.jsx("div",{style:{fontSize:12,marginTop:6},children:d.filename})]},d.id))})]})}function aA({element:s,onClose:e}){return s?Ve.jsx("div",{className:"modal-backdrop",onClick:e,children:Ve.jsxs("div",{className:"modal",onClick:t=>t.stopPropagation(),children:[Ve.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[Ve.jsxs("h2",{children:[s.name," — ",s.symbol]}),Ve.jsx("button",{onClick:e,children:"Close"})]}),Ve.jsxs("p",{children:["Atomic number: ",s.n]}),Ve.jsxs("div",{style:{display:"flex",gap:12,marginTop:12},children:[Ve.jsx("div",{style:{flex:"0 0 160px"},children:Ve.jsx("img",{alt:s.name,src:`https://via.placeholder.com/300x200.png?text=${s.symbol}`,style:{width:"100%",borderRadius:8}})}),Ve.jsxs("div",{style:{flex:1},children:[Ve.jsx("p",{children:"Placeholder: expand with atomic mass, electron config, discovery year, etc."}),Ve.jsxs("ul",{children:[Ve.jsxs("li",{children:["Symbol: ",s.symbol]}),Ve.jsxs("li",{children:["Atomic number: ",s.n]})]})]})]})]})}):null}function lA(){const[s,e]=ss.useState(!1),[t,i]=ss.useState(null);return Ve.jsxs("div",{className:"app-shell",children:[s?Ve.jsxs("div",{className:"app-main",children:[Ve.jsx("header",{className:"topbar",children:Ve.jsx("div",{className:"logo",children:"Atom Builder"})}),Ve.jsxs("div",{className:"content",children:[Ve.jsxs("aside",{className:"sidebar",children:[Ve.jsxs("label",{children:["Protons ",Ve.jsx("input",{id:"protons",type:"range",min:"1",max:"118",defaultValue:"1"})]}),Ve.jsxs("label",{children:["Neutrons ",Ve.jsx("input",{id:"neutrons",type:"range",min:"0",max:"200",defaultValue:"0"})]}),Ve.jsxs("label",{children:["Electrons ",Ve.jsx("input",{id:"electrons",type:"range",min:"1",max:"30",defaultValue:"3"})]}),Ve.jsxs("label",{children:["View Mode",Ve.jsxs("select",{id:"view-mode",children:[Ve.jsx("option",{value:"bohr",children:"Bohr"}),Ve.jsx("option",{value:"quantum",children:"Quantum"})]})]})]}),Ve.jsxs("main",{className:"viewer-area",children:[Ve.jsx($M,{}),Ve.jsx(qM,{onSelect:o=>i(o)}),Ve.jsx(oA,{})]})]})]}):Ve.jsxs("main",{className:"landing",children:[Ve.jsx("h1",{children:"Atom Builder"}),Ve.jsx("p",{className:"sub",children:"School of Arthuron — Explore atoms, elements, and molecules in 3D"}),Ve.jsx("button",{className:"cta",onClick:()=>e(!0),children:"Start Exploring"})]}),t&&Ve.jsx(aA,{element:t,onClose:()=>i(null)})]})}A0.createRoot(document.getElementById("root")).render(Ve.jsx(lA,{}));
