/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _vue = __webpack_require__(1);

	var _vue2 = _interopRequireDefault(_vue);

	var _vueTouchfeedback = __webpack_require__(3);

	var _vueTouchfeedback2 = _interopRequireDefault(_vueTouchfeedback);

	var _App = __webpack_require__(4);

	var _App2 = _interopRequireDefault(_App);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_vue2.default.use(_vueTouchfeedback2.default);

	new _vue2.default({
	  render: function render(h) {
	    return h(_App2.default);
	  }
	}).$mount('#app');

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};function _toString(val){return val==null?'':(typeof val==='undefined'?'undefined':_typeof(val))==='object'?JSON.stringify(val,null,2):String(val);}function toNumber(val){var n=parseFloat(val,10);return n||n===0?n:val;}function makeMap(str,expectsLowerCase){var map=Object.create(null);var list=str.split(',');for(var i=0;i<list.length;i++){map[list[i]]=true;}return expectsLowerCase?function(val){return map[val.toLowerCase()];}:function(val){return map[val];};}var isBuiltInTag=makeMap('slot,component',true);function remove$1(arr,item){if(arr.length){var index=arr.indexOf(item);if(index>-1){return arr.splice(index,1);}}}var hasOwnProperty=Object.prototype.hasOwnProperty;function hasOwn(obj,key){return hasOwnProperty.call(obj,key);}function isPrimitive(value){return typeof value==='string'||typeof value==='number';}function cached(fn){var cache=Object.create(null);return function cachedFn(str){var hit=cache[str];return hit||(cache[str]=fn(str));};}var camelizeRE=/-(\w)/g;var camelize=cached(function(str){return str.replace(camelizeRE,function(_,c){return c?c.toUpperCase():'';});});var capitalize=cached(function(str){return str.charAt(0).toUpperCase()+str.slice(1);});var hyphenateRE=/([^-])([A-Z])/g;var hyphenate=cached(function(str){return str.replace(hyphenateRE,'$1-$2').replace(hyphenateRE,'$1-$2').toLowerCase();});function bind$1(fn,ctx){function boundFn(a){var l=arguments.length;return l?l>1?fn.apply(ctx,arguments):fn.call(ctx,a):fn.call(ctx);}boundFn._length=fn.length;return boundFn;}function toArray(list,start){start=start||0;var i=list.length-start;var ret=new Array(i);while(i--){ret[i]=list[i+start];}return ret;}function extend(to,_from){for(var key in _from){to[key]=_from[key];}return to;}function isObject(obj){return obj!==null&&(typeof obj==='undefined'?'undefined':_typeof(obj))==='object';}var toString=Object.prototype.toString;var OBJECT_STRING='[object Object]';function isPlainObject(obj){return toString.call(obj)===OBJECT_STRING;}function toObject(arr){var res={};for(var i=0;i<arr.length;i++){if(arr[i]){extend(res,arr[i]);}}return res;}function noop(){}var no=function no(){return false;};function genStaticKeys(modules){return modules.reduce(function(keys,m){return keys.concat(m.staticKeys||[]);},[]).join(',');}function looseEqual(a,b){return a==b||(isObject(a)&&isObject(b)?JSON.stringify(a)===JSON.stringify(b):false);}function looseIndexOf(arr,val){for(var i=0;i<arr.length;i++){if(looseEqual(arr[i],val)){return i;}}return-1;}var config={optionMergeStrategies:Object.create(null),silent:false,devtools:process.env.NODE_ENV!=='production',errorHandler:null,ignoredElements:null,keyCodes:Object.create(null),isReservedTag:no,isUnknownElement:no,getTagNamespace:noop,mustUseProp:no,_assetTypes:['component','directive','filter'],_lifecycleHooks:['beforeCreate','created','beforeMount','mounted','beforeUpdate','updated','beforeDestroy','destroyed','activated','deactivated'],_maxUpdateCount:100,_isServer:process.env.VUE_ENV==='server'};function isReserved(str){var c=(str+'').charCodeAt(0);return c===0x24||c===0x5F;}function def(obj,key,val,enumerable){Object.defineProperty(obj,key,{value:val,enumerable:!!enumerable,writable:true,configurable:true});}var bailRE=/[^\w\.\$]/;function parsePath(path){if(bailRE.test(path)){return;}else{var segments=path.split('.');return function(obj){for(var i=0;i<segments.length;i++){if(!obj){return;}obj=obj[segments[i]];}return obj;};}}var hasProto='__proto__'in{};var inBrowser=typeof window!=='undefined'&&Object.prototype.toString.call(window)!=='[object Object]';var UA=inBrowser&&window.navigator.userAgent.toLowerCase();var isIE=UA&&/msie|trident/.test(UA);var isIE9=UA&&UA.indexOf('msie 9.0')>0;var isEdge=UA&&UA.indexOf('edge/')>0;var isAndroid=UA&&UA.indexOf('android')>0;var isIOS=UA&&/iphone|ipad|ipod|ios/.test(UA);var devtools=inBrowser&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function isNative(Ctor){return /native code/.test(Ctor.toString());}var nextTick=function(){var callbacks=[];var pending=false;var timerFunc;function nextTickHandler(){pending=false;var copies=callbacks.slice(0);callbacks.length=0;for(var i=0;i<copies.length;i++){copies[i]();}}if(typeof Promise!=='undefined'&&isNative(Promise)){var p=Promise.resolve();timerFunc=function timerFunc(){p.then(nextTickHandler);if(isIOS){setTimeout(noop);}};}else if(typeof MutationObserver!=='undefined'&&(isNative(MutationObserver)||MutationObserver.toString()==='[object MutationObserverConstructor]')){var counter=1;var observer=new MutationObserver(nextTickHandler);var textNode=document.createTextNode(String(counter));observer.observe(textNode,{characterData:true});timerFunc=function timerFunc(){counter=(counter+1)%2;textNode.data=String(counter);};}else{timerFunc=setTimeout;}return function queueNextTick(cb,ctx){var func=ctx?function(){cb.call(ctx);}:cb;callbacks.push(func);if(!pending){pending=true;timerFunc(nextTickHandler,0);}};}();var _Set;if(typeof Set!=='undefined'&&isNative(Set)){_Set=Set;}else{_Set=function(){function Set(){this.set=Object.create(null);}Set.prototype.has=function has(key){return this.set[key]!==undefined;};Set.prototype.add=function add(key){this.set[key]=1;};Set.prototype.clear=function clear(){this.set=Object.create(null);};return Set;}();}var hasProxy;var proxyHandlers;var initProxy;if(process.env.NODE_ENV!=='production'){var allowedGlobals=makeMap('Infinity,undefined,NaN,isFinite,isNaN,'+'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,'+'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,'+'require');hasProxy=typeof Proxy!=='undefined'&&Proxy.toString().match(/native code/);proxyHandlers={has:function has(target,key){var has=key in target;var isAllowed=allowedGlobals(key)||key.charAt(0)==='_';if(!has&&!isAllowed){warn("Property or method \""+key+"\" is not defined on the instance but "+"referenced during render. Make sure to declare reactive data "+"properties in the data option.",target);}return has||!isAllowed;}};initProxy=function initProxy(vm){if(hasProxy){vm._renderProxy=new Proxy(vm,proxyHandlers);}else{vm._renderProxy=vm;}};}var uid$2=0;var Dep=function Dep(){this.id=uid$2++;this.subs=[];};Dep.prototype.addSub=function addSub(sub){this.subs.push(sub);};Dep.prototype.removeSub=function removeSub(sub){remove$1(this.subs,sub);};Dep.prototype.depend=function depend(){if(Dep.target){Dep.target.addDep(this);}};Dep.prototype.notify=function notify(){var subs=this.subs.slice();for(var i=0,l=subs.length;i<l;i++){subs[i].update();}};Dep.target=null;var targetStack=[];function pushTarget(_target){if(Dep.target){targetStack.push(Dep.target);}Dep.target=_target;}function popTarget(){Dep.target=targetStack.pop();}var queue=[];var has$1={};var circular={};var waiting=false;var flushing=false;var index=0;function resetSchedulerState(){queue.length=0;has$1={};if(process.env.NODE_ENV!=='production'){circular={};}waiting=flushing=false;}function flushSchedulerQueue(){flushing=true;queue.sort(function(a,b){return a.id-b.id;});for(index=0;index<queue.length;index++){var watcher=queue[index];var id=watcher.id;has$1[id]=null;watcher.run();if(process.env.NODE_ENV!=='production'&&has$1[id]!=null){circular[id]=(circular[id]||0)+1;if(circular[id]>config._maxUpdateCount){warn('You may have an infinite update loop '+(watcher.user?"in watcher with expression \""+watcher.expression+"\"":"in a component render function."),watcher.vm);break;}}}if(devtools&&config.devtools){devtools.emit('flush');}resetSchedulerState();}function queueWatcher(watcher){var id=watcher.id;if(has$1[id]==null){has$1[id]=true;if(!flushing){queue.push(watcher);}else{var i=queue.length-1;while(i>=0&&queue[i].id>watcher.id){i--;}queue.splice(Math.max(i,index)+1,0,watcher);}if(!waiting){waiting=true;nextTick(flushSchedulerQueue);}}}var uid$1=0;var Watcher=function Watcher(vm,expOrFn,cb,options){if(options===void 0)options={};this.vm=vm;vm._watchers.push(this);this.deep=!!options.deep;this.user=!!options.user;this.lazy=!!options.lazy;this.sync=!!options.sync;this.expression=expOrFn.toString();this.cb=cb;this.id=++uid$1;this.active=true;this.dirty=this.lazy;this.deps=[];this.newDeps=[];this.depIds=new _Set();this.newDepIds=new _Set();if(typeof expOrFn==='function'){this.getter=expOrFn;}else{this.getter=parsePath(expOrFn);if(!this.getter){this.getter=function(){};process.env.NODE_ENV!=='production'&&warn("Failed watching path: \""+expOrFn+"\" "+'Watcher only accepts simple dot-delimited paths. '+'For full control, use a function instead.',vm);}}this.value=this.lazy?undefined:this.get();};Watcher.prototype.get=function get(){pushTarget(this);var value=this.getter.call(this.vm,this.vm);if(this.deep){traverse(value);}popTarget();this.cleanupDeps();return value;};Watcher.prototype.addDep=function addDep(dep){var id=dep.id;if(!this.newDepIds.has(id)){this.newDepIds.add(id);this.newDeps.push(dep);if(!this.depIds.has(id)){dep.addSub(this);}}};Watcher.prototype.cleanupDeps=function cleanupDeps(){var this$1=this;var i=this.deps.length;while(i--){var dep=this$1.deps[i];if(!this$1.newDepIds.has(dep.id)){dep.removeSub(this$1);}}var tmp=this.depIds;this.depIds=this.newDepIds;this.newDepIds=tmp;this.newDepIds.clear();tmp=this.deps;this.deps=this.newDeps;this.newDeps=tmp;this.newDeps.length=0;};Watcher.prototype.update=function update(){if(this.lazy){this.dirty=true;}else if(this.sync){this.run();}else{queueWatcher(this);}};Watcher.prototype.run=function run(){if(this.active){var value=this.get();if(value!==this.value||isObject(value)||this.deep){var oldValue=this.value;this.value=value;if(this.user){try{this.cb.call(this.vm,value,oldValue);}catch(e){process.env.NODE_ENV!=='production'&&warn("Error in watcher \""+this.expression+"\"",this.vm);if(config.errorHandler){config.errorHandler.call(null,e,this.vm);}else{throw e;}}}else{this.cb.call(this.vm,value,oldValue);}}}};Watcher.prototype.evaluate=function evaluate(){this.value=this.get();this.dirty=false;};Watcher.prototype.depend=function depend(){var this$1=this;var i=this.deps.length;while(i--){this$1.deps[i].depend();}};Watcher.prototype.teardown=function teardown(){var this$1=this;if(this.active){if(!this.vm._isBeingDestroyed&&!this.vm._vForRemoving){remove$1(this.vm._watchers,this);}var i=this.deps.length;while(i--){this$1.deps[i].removeSub(this$1);}this.active=false;}};var seenObjects=new _Set();function traverse(val,seen){var i,keys;if(!seen){seen=seenObjects;seen.clear();}var isA=Array.isArray(val);var isO=isObject(val);if((isA||isO)&&Object.isExtensible(val)){if(val.__ob__){var depId=val.__ob__.dep.id;if(seen.has(depId)){return;}else{seen.add(depId);}}if(isA){i=val.length;while(i--){traverse(val[i],seen);}}else if(isO){keys=Object.keys(val);i=keys.length;while(i--){traverse(val[keys[i]],seen);}}}}var arrayProto=Array.prototype;var arrayMethods=Object.create(arrayProto);['push','pop','shift','unshift','splice','sort','reverse'].forEach(function(method){var original=arrayProto[method];def(arrayMethods,method,function mutator(){var arguments$1=arguments;var i=arguments.length;var args=new Array(i);while(i--){args[i]=arguments$1[i];}var result=original.apply(this,args);var ob=this.__ob__;var inserted;switch(method){case'push':inserted=args;break;case'unshift':inserted=args;break;case'splice':inserted=args.slice(2);break;}if(inserted){ob.observeArray(inserted);}ob.dep.notify();return result;});});var arrayKeys=Object.getOwnPropertyNames(arrayMethods);var observerState={shouldConvert:true,isSettingProps:false};var Observer=function Observer(value){this.value=value;this.dep=new Dep();this.vmCount=0;def(value,'__ob__',this);if(Array.isArray(value)){var augment=hasProto?protoAugment:copyAugment;augment(value,arrayMethods,arrayKeys);this.observeArray(value);}else{this.walk(value);}};Observer.prototype.walk=function walk(obj){var keys=Object.keys(obj);for(var i=0;i<keys.length;i++){defineReactive$$1(obj,keys[i],obj[keys[i]]);}};Observer.prototype.observeArray=function observeArray(items){for(var i=0,l=items.length;i<l;i++){observe(items[i]);}};function protoAugment(target,src){target.__proto__=src;}function copyAugment(target,src,keys){for(var i=0,l=keys.length;i<l;i++){var key=keys[i];def(target,key,src[key]);}}function observe(value){if(!isObject(value)){return;}var ob;if(hasOwn(value,'__ob__')&&value.__ob__ instanceof Observer){ob=value.__ob__;}else if(observerState.shouldConvert&&!config._isServer&&(Array.isArray(value)||isPlainObject(value))&&Object.isExtensible(value)&&!value._isVue){ob=new Observer(value);}return ob;}function defineReactive$$1(obj,key,val,customSetter){var dep=new Dep();var property=Object.getOwnPropertyDescriptor(obj,key);if(property&&property.configurable===false){return;}var getter=property&&property.get;var setter=property&&property.set;var childOb=observe(val);Object.defineProperty(obj,key,{enumerable:true,configurable:true,get:function reactiveGetter(){var value=getter?getter.call(obj):val;if(Dep.target){dep.depend();if(childOb){childOb.dep.depend();}if(Array.isArray(value)){for(var e=void 0,i=0,l=value.length;i<l;i++){e=value[i];e&&e.__ob__&&e.__ob__.dep.depend();}}}return value;},set:function reactiveSetter(newVal){var value=getter?getter.call(obj):val;if(newVal===value){return;}if(process.env.NODE_ENV!=='production'&&customSetter){customSetter();}if(setter){setter.call(obj,newVal);}else{val=newVal;}childOb=observe(newVal);dep.notify();}});}function set(obj,key,val){if(Array.isArray(obj)){obj.splice(key,1,val);return val;}if(hasOwn(obj,key)){obj[key]=val;return;}var ob=obj.__ob__;if(obj._isVue||ob&&ob.vmCount){process.env.NODE_ENV!=='production'&&warn('Avoid adding reactive properties to a Vue instance or its root $data '+'at runtime - declare it upfront in the data option.');return;}if(!ob){obj[key]=val;return;}defineReactive$$1(ob.value,key,val);ob.dep.notify();return val;}function del(obj,key){var ob=obj.__ob__;if(obj._isVue||ob&&ob.vmCount){process.env.NODE_ENV!=='production'&&warn('Avoid deleting properties on a Vue instance or its root $data '+'- just set it to null.');return;}if(!hasOwn(obj,key)){return;}delete obj[key];if(!ob){return;}ob.dep.notify();}function initState(vm){vm._watchers=[];initProps(vm);initData(vm);initComputed(vm);initMethods(vm);initWatch(vm);}function initProps(vm){var props=vm.$options.props;if(props){var propsData=vm.$options.propsData||{};var keys=vm.$options._propKeys=Object.keys(props);var isRoot=!vm.$parent;observerState.shouldConvert=isRoot;var loop=function loop(i){var key=keys[i];if(process.env.NODE_ENV!=='production'){defineReactive$$1(vm,key,validateProp(key,props,propsData,vm),function(){if(vm.$parent&&!observerState.isSettingProps){warn("Avoid mutating a prop directly since the value will be "+"overwritten whenever the parent component re-renders. "+"Instead, use a data or computed property based on the prop's "+"value. Prop being mutated: \""+key+"\"",vm);}});}else{defineReactive$$1(vm,key,validateProp(key,props,propsData,vm));}};for(var i=0;i<keys.length;i++){loop(i);}observerState.shouldConvert=true;}}function initData(vm){var data=vm.$options.data;data=vm._data=typeof data==='function'?data.call(vm):data||{};if(!isPlainObject(data)){data={};process.env.NODE_ENV!=='production'&&warn('data functions should return an object.',vm);}var keys=Object.keys(data);var props=vm.$options.props;var i=keys.length;while(i--){if(props&&hasOwn(props,keys[i])){process.env.NODE_ENV!=='production'&&warn("The data property \""+keys[i]+"\" is already declared as a prop. "+"Use prop default value instead.",vm);}else{proxy(vm,keys[i]);}}observe(data);data.__ob__&&data.__ob__.vmCount++;}var computedSharedDefinition={enumerable:true,configurable:true,get:noop,set:noop};function initComputed(vm){var computed=vm.$options.computed;if(computed){for(var key in computed){var userDef=computed[key];if(typeof userDef==='function'){computedSharedDefinition.get=makeComputedGetter(userDef,vm);computedSharedDefinition.set=noop;}else{computedSharedDefinition.get=userDef.get?userDef.cache!==false?makeComputedGetter(userDef.get,vm):bind$1(userDef.get,vm):noop;computedSharedDefinition.set=userDef.set?bind$1(userDef.set,vm):noop;}Object.defineProperty(vm,key,computedSharedDefinition);}}}function makeComputedGetter(getter,owner){var watcher=new Watcher(owner,getter,noop,{lazy:true});return function computedGetter(){if(watcher.dirty){watcher.evaluate();}if(Dep.target){watcher.depend();}return watcher.value;};}function initMethods(vm){var methods=vm.$options.methods;if(methods){for(var key in methods){if(methods[key]!=null){vm[key]=bind$1(methods[key],vm);}else if(process.env.NODE_ENV!=='production'){warn("Method \""+key+"\" is undefined in options.",vm);}}}}function initWatch(vm){var watch=vm.$options.watch;if(watch){for(var key in watch){var handler=watch[key];if(Array.isArray(handler)){for(var i=0;i<handler.length;i++){createWatcher(vm,key,handler[i]);}}else{createWatcher(vm,key,handler);}}}}function createWatcher(vm,key,handler){var options;if(isPlainObject(handler)){options=handler;handler=handler.handler;}if(typeof handler==='string'){handler=vm[handler];}vm.$watch(key,handler,options);}function stateMixin(Vue){var dataDef={};dataDef.get=function(){return this._data;};if(process.env.NODE_ENV!=='production'){dataDef.set=function(newData){warn('Avoid replacing instance root $data. '+'Use nested data properties instead.',this);};}Object.defineProperty(Vue.prototype,'$data',dataDef);Vue.prototype.$set=set;Vue.prototype.$delete=del;Vue.prototype.$watch=function(expOrFn,cb,options){var vm=this;options=options||{};options.user=true;var watcher=new Watcher(vm,expOrFn,cb,options);if(options.immediate){cb.call(vm,watcher.value);}return function unwatchFn(){watcher.teardown();};};}function proxy(vm,key){if(!isReserved(key)){Object.defineProperty(vm,key,{configurable:true,enumerable:true,get:function proxyGetter(){return vm._data[key];},set:function proxySetter(val){vm._data[key]=val;}});}}var VNode=function VNode(tag,data,children,text,elm,ns,context,componentOptions){this.tag=tag;this.data=data;this.children=children;this.text=text;this.elm=elm;this.ns=ns;this.context=context;this.key=data&&data.key;this.componentOptions=componentOptions;this.child=undefined;this.parent=undefined;this.raw=false;this.isStatic=false;this.isRootInsert=true;this.isComment=false;this.isCloned=false;};var emptyVNode=function emptyVNode(){var node=new VNode();node.text='';node.isComment=true;return node;};function cloneVNode(vnode){var cloned=new VNode(vnode.tag,vnode.data,vnode.children,vnode.text,vnode.elm,vnode.ns,vnode.context,vnode.componentOptions);cloned.isStatic=vnode.isStatic;cloned.key=vnode.key;cloned.isCloned=true;return cloned;}function cloneVNodes(vnodes){var res=new Array(vnodes.length);for(var i=0;i<vnodes.length;i++){res[i]=cloneVNode(vnodes[i]);}return res;}function normalizeChildren(children,ns,nestedIndex){if(isPrimitive(children)){return[createTextVNode(children)];}if(Array.isArray(children)){var res=[];for(var i=0,l=children.length;i<l;i++){var c=children[i];var last=res[res.length-1];if(Array.isArray(c)){res.push.apply(res,normalizeChildren(c,ns,i));}else if(isPrimitive(c)){if(last&&last.text){last.text+=String(c);}else if(c!==''){res.push(createTextVNode(c));}}else if(c instanceof VNode){if(c.text&&last&&last.text){last.text+=c.text;}else{if(ns){applyNS(c,ns);}if(c.tag&&c.key==null&&nestedIndex!=null){c.key="__vlist_"+nestedIndex+"_"+i+"__";}res.push(c);}}}return res;}}function createTextVNode(val){return new VNode(undefined,undefined,undefined,String(val));}function applyNS(vnode,ns){if(vnode.tag&&!vnode.ns){vnode.ns=ns;if(vnode.children){for(var i=0,l=vnode.children.length;i<l;i++){applyNS(vnode.children[i],ns);}}}}function getFirstComponentChild(children){return children&&children.filter(function(c){return c&&c.componentOptions;})[0];}function mergeVNodeHook(def$$1,key,hook){var oldHook=def$$1[key];if(oldHook){var injectedHash=def$$1.__injected||(def$$1.__injected={});if(!injectedHash[key]){injectedHash[key]=true;def$$1[key]=function(){oldHook.apply(this,arguments);hook.apply(this,arguments);};}}else{def$$1[key]=hook;}}function updateListeners(on,oldOn,add,remove$$1){var name,cur,old,fn,event,capture;for(name in on){cur=on[name];old=oldOn[name];if(!cur){process.env.NODE_ENV!=='production'&&warn("Handler for event \""+name+"\" is undefined.");}else if(!old){capture=name.charAt(0)==='!';event=capture?name.slice(1):name;if(Array.isArray(cur)){add(event,cur.invoker=arrInvoker(cur),capture);}else{if(!cur.invoker){fn=cur;cur=on[name]={};cur.fn=fn;cur.invoker=fnInvoker(cur);}add(event,cur.invoker,capture);}}else if(cur!==old){if(Array.isArray(old)){old.length=cur.length;for(var i=0;i<old.length;i++){old[i]=cur[i];}on[name]=old;}else{old.fn=cur;on[name]=old;}}}for(name in oldOn){if(!on[name]){event=name.charAt(0)==='!'?name.slice(1):name;remove$$1(event,oldOn[name].invoker);}}}function arrInvoker(arr){return function(ev){var arguments$1=arguments;var single=arguments.length===1;for(var i=0;i<arr.length;i++){single?arr[i](ev):arr[i].apply(null,arguments$1);}};}function fnInvoker(o){return function(ev){var single=arguments.length===1;single?o.fn(ev):o.fn.apply(null,arguments);};}var activeInstance=null;function initLifecycle(vm){var options=vm.$options;var parent=options.parent;if(parent&&!options.abstract){while(parent.$options.abstract&&parent.$parent){parent=parent.$parent;}parent.$children.push(vm);}vm.$parent=parent;vm.$root=parent?parent.$root:vm;vm.$children=[];vm.$refs={};vm._watcher=null;vm._inactive=false;vm._isMounted=false;vm._isDestroyed=false;vm._isBeingDestroyed=false;}function lifecycleMixin(Vue){Vue.prototype._mount=function(el,hydrating){var vm=this;vm.$el=el;if(!vm.$options.render){vm.$options.render=emptyVNode;if(process.env.NODE_ENV!=='production'){if(vm.$options.template){warn('You are using the runtime-only build of Vue where the template '+'option is not available. Either pre-compile the templates into '+'render functions, or use the compiler-included build.',vm);}else{warn('Failed to mount component: template or render function not defined.',vm);}}}callHook(vm,'beforeMount');vm._watcher=new Watcher(vm,function(){vm._update(vm._render(),hydrating);},noop);hydrating=false;if(vm.$root===vm){vm._isMounted=true;callHook(vm,'mounted');}return vm;};Vue.prototype._update=function(vnode,hydrating){var vm=this;if(vm._isMounted){callHook(vm,'beforeUpdate');}var prevEl=vm.$el;var prevActiveInstance=activeInstance;activeInstance=vm;var prevVnode=vm._vnode;vm._vnode=vnode;if(!prevVnode){vm.$el=vm.__patch__(vm.$el,vnode,hydrating);}else{vm.$el=vm.__patch__(prevVnode,vnode);}activeInstance=prevActiveInstance;if(prevEl){prevEl.__vue__=null;}if(vm.$el){vm.$el.__vue__=vm;}if(vm.$vnode&&vm.$parent&&vm.$vnode===vm.$parent._vnode){vm.$parent.$el=vm.$el;}if(vm._isMounted){callHook(vm,'updated');}};Vue.prototype._updateFromParent=function(propsData,listeners,parentVnode,renderChildren){var vm=this;var hasChildren=!!(vm.$options._renderChildren||renderChildren);vm.$options._parentVnode=parentVnode;vm.$options._renderChildren=renderChildren;if(propsData&&vm.$options.props){observerState.shouldConvert=false;if(process.env.NODE_ENV!=='production'){observerState.isSettingProps=true;}var propKeys=vm.$options._propKeys||[];for(var i=0;i<propKeys.length;i++){var key=propKeys[i];vm[key]=validateProp(key,vm.$options.props,propsData,vm);}observerState.shouldConvert=true;if(process.env.NODE_ENV!=='production'){observerState.isSettingProps=false;}}if(listeners){var oldListeners=vm.$options._parentListeners;vm.$options._parentListeners=listeners;vm._updateListeners(listeners,oldListeners);}if(hasChildren){vm.$slots=resolveSlots(renderChildren,vm._renderContext);vm.$forceUpdate();}};Vue.prototype.$forceUpdate=function(){var vm=this;if(vm._watcher){vm._watcher.update();}};Vue.prototype.$destroy=function(){var vm=this;if(vm._isBeingDestroyed){return;}callHook(vm,'beforeDestroy');vm._isBeingDestroyed=true;var parent=vm.$parent;if(parent&&!parent._isBeingDestroyed&&!vm.$options.abstract){remove$1(parent.$children,vm);}if(vm._watcher){vm._watcher.teardown();}var i=vm._watchers.length;while(i--){vm._watchers[i].teardown();}if(vm._data.__ob__){vm._data.__ob__.vmCount--;}vm._isDestroyed=true;callHook(vm,'destroyed');vm.$off();if(vm.$el){vm.$el.__vue__=null;}};}function callHook(vm,hook){var handlers=vm.$options[hook];if(handlers){for(var i=0,j=handlers.length;i<j;i++){handlers[i].call(vm);}}vm.$emit('hook:'+hook);}var hooks={init:init,prepatch:prepatch,insert:insert,destroy:destroy$1};var hooksToMerge=Object.keys(hooks);function createComponent(Ctor,data,context,children,tag){if(!Ctor){return;}if(isObject(Ctor)){Ctor=Vue$2.extend(Ctor);}if(typeof Ctor!=='function'){if(process.env.NODE_ENV!=='production'){warn("Invalid Component definition: "+String(Ctor),context);}return;}if(!Ctor.cid){if(Ctor.resolved){Ctor=Ctor.resolved;}else{Ctor=resolveAsyncComponent(Ctor,function(){context.$forceUpdate();});if(!Ctor){return;}}}data=data||{};var propsData=extractProps(data,Ctor);if(Ctor.options.functional){return createFunctionalComponent(Ctor,propsData,data,context,children);}var listeners=data.on;data.on=data.nativeOn;if(Ctor.options.abstract){data={};}mergeHooks(data);var name=Ctor.options.name||tag;var vnode=new VNode("vue-component-"+Ctor.cid+(name?"-"+name:''),data,undefined,undefined,undefined,undefined,context,{Ctor:Ctor,propsData:propsData,listeners:listeners,tag:tag,children:children});return vnode;}function createFunctionalComponent(Ctor,propsData,data,context,children){var props={};var propOptions=Ctor.options.props;if(propOptions){for(var key in propOptions){props[key]=validateProp(key,propOptions,propsData);}}return Ctor.options.render.call(null,bind$1(createElement,{_self:Object.create(context)}),{props:props,data:data,parent:context,children:normalizeChildren(children),slots:function slots(){return resolveSlots(children,context);}});}function createComponentInstanceForVnode(vnode,parent){var vnodeComponentOptions=vnode.componentOptions;var options={_isComponent:true,parent:parent,propsData:vnodeComponentOptions.propsData,_componentTag:vnodeComponentOptions.tag,_parentVnode:vnode,_parentListeners:vnodeComponentOptions.listeners,_renderChildren:vnodeComponentOptions.children};var inlineTemplate=vnode.data.inlineTemplate;if(inlineTemplate){options.render=inlineTemplate.render;options.staticRenderFns=inlineTemplate.staticRenderFns;}return new vnodeComponentOptions.Ctor(options);}function init(vnode,hydrating){if(!vnode.child||vnode.child._isDestroyed){var child=vnode.child=createComponentInstanceForVnode(vnode,activeInstance);child.$mount(hydrating?vnode.elm:undefined,hydrating);}}function prepatch(oldVnode,vnode){var options=vnode.componentOptions;var child=vnode.child=oldVnode.child;child._updateFromParent(options.propsData,options.listeners,vnode,options.children);}function insert(vnode){if(!vnode.child._isMounted){vnode.child._isMounted=true;callHook(vnode.child,'mounted');}if(vnode.data.keepAlive){vnode.child._inactive=false;callHook(vnode.child,'activated');}}function destroy$1(vnode){if(!vnode.child._isDestroyed){if(!vnode.data.keepAlive){vnode.child.$destroy();}else{vnode.child._inactive=true;callHook(vnode.child,'deactivated');}}}function resolveAsyncComponent(factory,cb){if(factory.requested){factory.pendingCallbacks.push(cb);}else{factory.requested=true;var cbs=factory.pendingCallbacks=[cb];var sync=true;var resolve=function resolve(res){if(isObject(res)){res=Vue$2.extend(res);}factory.resolved=res;if(!sync){for(var i=0,l=cbs.length;i<l;i++){cbs[i](res);}}};var reject=function reject(reason){process.env.NODE_ENV!=='production'&&warn("Failed to resolve async component: "+String(factory)+(reason?"\nReason: "+reason:''));};var res=factory(resolve,reject);if(res&&typeof res.then==='function'&&!factory.resolved){res.then(resolve,reject);}sync=false;return factory.resolved;}}function extractProps(data,Ctor){var propOptions=Ctor.options.props;if(!propOptions){return;}var res={};var attrs=data.attrs;var props=data.props;var domProps=data.domProps;if(attrs||props||domProps){for(var key in propOptions){var altKey=hyphenate(key);checkProp(res,props,key,altKey,true)||checkProp(res,attrs,key,altKey)||checkProp(res,domProps,key,altKey);}}return res;}function checkProp(res,hash,key,altKey,preserve){if(hash){if(hasOwn(hash,key)){res[key]=hash[key];if(!preserve){delete hash[key];}return true;}else if(hasOwn(hash,altKey)){res[key]=hash[altKey];if(!preserve){delete hash[altKey];}return true;}}return false;}function mergeHooks(data){if(!data.hook){data.hook={};}for(var i=0;i<hooksToMerge.length;i++){var key=hooksToMerge[i];var fromParent=data.hook[key];var ours=hooks[key];data.hook[key]=fromParent?mergeHook$1(ours,fromParent):ours;}}function mergeHook$1(a,b){return function(_,__){a(_,__);b(_,__);};}function createElement(tag,data,children){if(data&&(Array.isArray(data)||(typeof data==='undefined'?'undefined':_typeof(data))!=='object')){children=data;data=undefined;}return _createElement(this._self,tag,data,children);}function _createElement(context,tag,data,children){if(data&&data.__ob__){process.env.NODE_ENV!=='production'&&warn("Avoid using observed data object as vnode data: "+JSON.stringify(data)+"\n"+'Always create fresh vnode data objects in each render!',context);return;}if(!tag){return emptyVNode();}if(typeof tag==='string'){var Ctor;var ns=config.getTagNamespace(tag);if(config.isReservedTag(tag)){return new VNode(tag,data,normalizeChildren(children,ns),undefined,undefined,ns,context);}else if(Ctor=resolveAsset(context.$options,'components',tag)){return createComponent(Ctor,data,context,children,tag);}else{return new VNode(tag,data,normalizeChildren(children,ns),undefined,undefined,ns,context);}}else{return createComponent(tag,data,context,children);}}function initRender(vm){vm.$vnode=null;vm._vnode=null;vm._staticTrees=null;vm._renderContext=vm.$options._parentVnode&&vm.$options._parentVnode.context;vm.$slots=resolveSlots(vm.$options._renderChildren,vm._renderContext);vm.$createElement=bind$1(createElement,vm);if(vm.$options.el){vm.$mount(vm.$options.el);}}function renderMixin(Vue){Vue.prototype.$nextTick=function(fn){nextTick(fn,this);};Vue.prototype._render=function(){var vm=this;var ref=vm.$options;var render=ref.render;var staticRenderFns=ref.staticRenderFns;var _parentVnode=ref._parentVnode;if(vm._isMounted){for(var key in vm.$slots){vm.$slots[key]=cloneVNodes(vm.$slots[key]);}}if(staticRenderFns&&!vm._staticTrees){vm._staticTrees=[];}vm.$vnode=_parentVnode;var vnode;try{vnode=render.call(vm._renderProxy,vm.$createElement);}catch(e){if(process.env.NODE_ENV!=='production'){warn("Error when rendering "+formatComponentName(vm)+":");}if(config.errorHandler){config.errorHandler.call(null,e,vm);}else{if(config._isServer){throw e;}else{setTimeout(function(){throw e;},0);}}vnode=vm._vnode;}if(!(vnode instanceof VNode)){if(process.env.NODE_ENV!=='production'&&Array.isArray(vnode)){warn('Multiple root nodes returned from render function. Render function '+'should return a single root node.',vm);}vnode=emptyVNode();}vnode.parent=_parentVnode;return vnode;};Vue.prototype._h=createElement;Vue.prototype._s=_toString;Vue.prototype._n=toNumber;Vue.prototype._e=emptyVNode;Vue.prototype._q=looseEqual;Vue.prototype._i=looseIndexOf;Vue.prototype._m=function renderStatic(index,isInFor){var tree=this._staticTrees[index];if(tree&&!isInFor){return Array.isArray(tree)?cloneVNodes(tree):cloneVNode(tree);}tree=this._staticTrees[index]=this.$options.staticRenderFns[index].call(this._renderProxy);if(Array.isArray(tree)){for(var i=0;i<tree.length;i++){tree[i].isStatic=true;tree[i].key="__static__"+index+"_"+i;}}else{tree.isStatic=true;tree.key="__static__"+index;}return tree;};var identity=function identity(_){return _;};Vue.prototype._f=function resolveFilter(id){return resolveAsset(this.$options,'filters',id,true)||identity;};Vue.prototype._l=function renderList(val,render){var ret,i,l,keys,key;if(Array.isArray(val)){ret=new Array(val.length);for(i=0,l=val.length;i<l;i++){ret[i]=render(val[i],i);}}else if(typeof val==='number'){ret=new Array(val);for(i=0;i<val;i++){ret[i]=render(i+1,i);}}else if(isObject(val)){keys=Object.keys(val);ret=new Array(keys.length);for(i=0,l=keys.length;i<l;i++){key=keys[i];ret[i]=render(val[key],key,i);}}return ret;};Vue.prototype._t=function(name,fallback){var slotNodes=this.$slots[name];if(slotNodes&&process.env.NODE_ENV!=='production'){slotNodes._rendered&&warn("Duplicate presence of slot \""+name+"\" found in the same render tree "+"- this will likely cause render errors.",this);slotNodes._rendered=true;}return slotNodes||fallback;};Vue.prototype._b=function bindProps(data,value,asProp){if(value){if(!isObject(value)){process.env.NODE_ENV!=='production'&&warn('v-bind without argument expects an Object or Array value',this);}else{if(Array.isArray(value)){value=toObject(value);}for(var key in value){if(key==='class'||key==='style'){data[key]=value[key];}else{var hash=asProp||config.mustUseProp(key)?data.domProps||(data.domProps={}):data.attrs||(data.attrs={});hash[key]=value[key];}}}}return data;};Vue.prototype._k=function getKeyCodes(key){return config.keyCodes[key];};}function resolveSlots(renderChildren,context){var slots={};if(!renderChildren){return slots;}var children=normalizeChildren(renderChildren)||[];var defaultSlot=[];var name,child;for(var i=0,l=children.length;i<l;i++){child=children[i];if(child.context===context&&child.data&&(name=child.data.slot)){var slot=slots[name]||(slots[name]=[]);if(child.tag==='template'){slot.push.apply(slot,child.children);}else{slot.push(child);}}else{defaultSlot.push(child);}}if(defaultSlot.length&&!(defaultSlot.length===1&&(defaultSlot[0].text===' '||defaultSlot[0].isComment))){slots.default=defaultSlot;}return slots;}function initEvents(vm){vm._events=Object.create(null);var listeners=vm.$options._parentListeners;var on=bind$1(vm.$on,vm);var off=bind$1(vm.$off,vm);vm._updateListeners=function(listeners,oldListeners){updateListeners(listeners,oldListeners||{},on,off);};if(listeners){vm._updateListeners(listeners);}}function eventsMixin(Vue){Vue.prototype.$on=function(event,fn){var vm=this;(vm._events[event]||(vm._events[event]=[])).push(fn);return vm;};Vue.prototype.$once=function(event,fn){var vm=this;function on(){vm.$off(event,on);fn.apply(vm,arguments);}on.fn=fn;vm.$on(event,on);return vm;};Vue.prototype.$off=function(event,fn){var vm=this;if(!arguments.length){vm._events=Object.create(null);return vm;}var cbs=vm._events[event];if(!cbs){return vm;}if(arguments.length===1){vm._events[event]=null;return vm;}var cb;var i=cbs.length;while(i--){cb=cbs[i];if(cb===fn||cb.fn===fn){cbs.splice(i,1);break;}}return vm;};Vue.prototype.$emit=function(event){var vm=this;var cbs=vm._events[event];if(cbs){cbs=cbs.length>1?toArray(cbs):cbs;var args=toArray(arguments,1);for(var i=0,l=cbs.length;i<l;i++){cbs[i].apply(vm,args);}}return vm;};}var uid=0;function initMixin(Vue){Vue.prototype._init=function(options){var vm=this;vm._uid=uid++;vm._isVue=true;if(options&&options._isComponent){initInternalComponent(vm,options);}else{vm.$options=mergeOptions(resolveConstructorOptions(vm),options||{},vm);}if(process.env.NODE_ENV!=='production'){initProxy(vm);}else{vm._renderProxy=vm;}vm._self=vm;initLifecycle(vm);initEvents(vm);callHook(vm,'beforeCreate');initState(vm);callHook(vm,'created');initRender(vm);};function initInternalComponent(vm,options){var opts=vm.$options=Object.create(resolveConstructorOptions(vm));opts.parent=options.parent;opts.propsData=options.propsData;opts._parentVnode=options._parentVnode;opts._parentListeners=options._parentListeners;opts._renderChildren=options._renderChildren;opts._componentTag=options._componentTag;if(options.render){opts.render=options.render;opts.staticRenderFns=options.staticRenderFns;}}function resolveConstructorOptions(vm){var Ctor=vm.constructor;var options=Ctor.options;if(Ctor.super){var superOptions=Ctor.super.options;var cachedSuperOptions=Ctor.superOptions;if(superOptions!==cachedSuperOptions){Ctor.superOptions=superOptions;options=Ctor.options=mergeOptions(superOptions,Ctor.extendOptions);if(options.name){options.components[options.name]=Ctor;}}}return options;}}function Vue$2(options){if(process.env.NODE_ENV!=='production'&&!(this instanceof Vue$2)){warn('Vue is a constructor and should be called with the `new` keyword');}this._init(options);}initMixin(Vue$2);stateMixin(Vue$2);eventsMixin(Vue$2);lifecycleMixin(Vue$2);renderMixin(Vue$2);var warn=noop;var formatComponentName;if(process.env.NODE_ENV!=='production'){var hasConsole=typeof console!=='undefined';warn=function warn(msg,vm){if(hasConsole&&!config.silent){console.error("[Vue warn]: "+msg+" "+(vm?formatLocation(formatComponentName(vm)):''));}};formatComponentName=function formatComponentName(vm){if(vm.$root===vm){return'root instance';}var name=vm._isVue?vm.$options.name||vm.$options._componentTag:vm.name;return name?"component <"+name+">":"anonymous component";};var formatLocation=function formatLocation(str){if(str==='anonymous component'){str+=" - use the \"name\" option for better debugging messages.";}return"(found in "+str+")";};}var strats=config.optionMergeStrategies;if(process.env.NODE_ENV!=='production'){strats.el=strats.propsData=function(parent,child,vm,key){if(!vm){warn("option \""+key+"\" can only be used during instance "+'creation with the `new` keyword.');}return defaultStrat(parent,child);};strats.name=function(parent,child,vm){if(vm&&child){warn('options "name" can only be used as a component definition option, '+'not during instance creation.');}return defaultStrat(parent,child);};}function mergeData(to,from){var key,toVal,fromVal;for(key in from){toVal=to[key];fromVal=from[key];if(!hasOwn(to,key)){set(to,key,fromVal);}else if(isObject(toVal)&&isObject(fromVal)){mergeData(toVal,fromVal);}}return to;}strats.data=function(parentVal,childVal,vm){if(!vm){if(!childVal){return parentVal;}if(typeof childVal!=='function'){process.env.NODE_ENV!=='production'&&warn('The "data" option should be a function '+'that returns a per-instance value in component '+'definitions.',vm);return parentVal;}if(!parentVal){return childVal;}return function mergedDataFn(){return mergeData(childVal.call(this),parentVal.call(this));};}else if(parentVal||childVal){return function mergedInstanceDataFn(){var instanceData=typeof childVal==='function'?childVal.call(vm):childVal;var defaultData=typeof parentVal==='function'?parentVal.call(vm):undefined;if(instanceData){return mergeData(instanceData,defaultData);}else{return defaultData;}};}};function mergeHook(parentVal,childVal){return childVal?parentVal?parentVal.concat(childVal):Array.isArray(childVal)?childVal:[childVal]:parentVal;}config._lifecycleHooks.forEach(function(hook){strats[hook]=mergeHook;});function mergeAssets(parentVal,childVal){var res=Object.create(parentVal||null);return childVal?extend(res,childVal):res;}config._assetTypes.forEach(function(type){strats[type+'s']=mergeAssets;});strats.watch=function(parentVal,childVal){if(!childVal){return parentVal;}if(!parentVal){return childVal;}var ret={};extend(ret,parentVal);for(var key in childVal){var parent=ret[key];var child=childVal[key];if(parent&&!Array.isArray(parent)){parent=[parent];}ret[key]=parent?parent.concat(child):[child];}return ret;};strats.props=strats.methods=strats.computed=function(parentVal,childVal){if(!childVal){return parentVal;}if(!parentVal){return childVal;}var ret=Object.create(null);extend(ret,parentVal);extend(ret,childVal);return ret;};var defaultStrat=function defaultStrat(parentVal,childVal){return childVal===undefined?parentVal:childVal;};function normalizeComponents(options){if(options.components){var components=options.components;var def;for(var key in components){var lower=key.toLowerCase();if(isBuiltInTag(lower)||config.isReservedTag(lower)){process.env.NODE_ENV!=='production'&&warn('Do not use built-in or reserved HTML elements as component '+'id: '+key);continue;}def=components[key];if(isPlainObject(def)){components[key]=Vue$2.extend(def);}}}}function normalizeProps(options){var props=options.props;if(!props){return;}var res={};var i,val,name;if(Array.isArray(props)){i=props.length;while(i--){val=props[i];if(typeof val==='string'){name=camelize(val);res[name]={type:null};}else if(process.env.NODE_ENV!=='production'){warn('props must be strings when using array syntax.');}}}else if(isPlainObject(props)){for(var key in props){val=props[key];name=camelize(key);res[name]=isPlainObject(val)?val:{type:val};}}options.props=res;}function normalizeDirectives(options){var dirs=options.directives;if(dirs){for(var key in dirs){var def=dirs[key];if(typeof def==='function'){dirs[key]={bind:def,update:def};}}}}function mergeOptions(parent,child,vm){normalizeComponents(child);normalizeProps(child);normalizeDirectives(child);var extendsFrom=child.extends;if(extendsFrom){parent=typeof extendsFrom==='function'?mergeOptions(parent,extendsFrom.options,vm):mergeOptions(parent,extendsFrom,vm);}if(child.mixins){for(var i=0,l=child.mixins.length;i<l;i++){var mixin=child.mixins[i];if(mixin.prototype instanceof Vue$2){mixin=mixin.options;}parent=mergeOptions(parent,mixin,vm);}}var options={};var key;for(key in parent){mergeField(key);}for(key in child){if(!hasOwn(parent,key)){mergeField(key);}}function mergeField(key){var strat=strats[key]||defaultStrat;options[key]=strat(parent[key],child[key],vm,key);}return options;}function resolveAsset(options,type,id,warnMissing){if(typeof id!=='string'){return;}var assets=options[type];var res=assets[id]||assets[camelize(id)]||assets[capitalize(camelize(id))];if(process.env.NODE_ENV!=='production'&&warnMissing&&!res){warn('Failed to resolve '+type.slice(0,-1)+': '+id,options);}return res;}function validateProp(key,propOptions,propsData,vm){var prop=propOptions[key];var absent=!hasOwn(propsData,key);var value=propsData[key];if(getType(prop.type)==='Boolean'){if(absent&&!hasOwn(prop,'default')){value=false;}else if(value===''||value===hyphenate(key)){value=true;}}if(value===undefined){value=getPropDefaultValue(vm,prop,key);var prevShouldConvert=observerState.shouldConvert;observerState.shouldConvert=true;observe(value);observerState.shouldConvert=prevShouldConvert;}if(process.env.NODE_ENV!=='production'){assertProp(prop,key,value,vm,absent);}return value;}function getPropDefaultValue(vm,prop,name){if(!hasOwn(prop,'default')){return undefined;}var def=prop.default;if(isObject(def)){process.env.NODE_ENV!=='production'&&warn('Invalid default value for prop "'+name+'": '+'Props with type Object/Array must use a factory function '+'to return the default value.',vm);}return typeof def==='function'&&prop.type!==Function?def.call(vm):def;}function assertProp(prop,name,value,vm,absent){if(prop.required&&absent){warn('Missing required prop: "'+name+'"',vm);return;}if(value==null&&!prop.required){return;}var type=prop.type;var valid=!type||type===true;var expectedTypes=[];if(type){if(!Array.isArray(type)){type=[type];}for(var i=0;i<type.length&&!valid;i++){var assertedType=assertType(value,type[i]);expectedTypes.push(assertedType.expectedType);valid=assertedType.valid;}}if(!valid){warn('Invalid prop: type check failed for prop "'+name+'".'+' Expected '+expectedTypes.map(capitalize).join(', ')+', got '+Object.prototype.toString.call(value).slice(8,-1)+'.',vm);return;}var validator=prop.validator;if(validator){if(!validator(value)){warn('Invalid prop: custom validator check failed for prop "'+name+'".',vm);}}}function assertType(value,type){var valid;var expectedType=getType(type);if(expectedType==='String'){valid=(typeof value==='undefined'?'undefined':_typeof(value))===(expectedType='string');}else if(expectedType==='Number'){valid=(typeof value==='undefined'?'undefined':_typeof(value))===(expectedType='number');}else if(expectedType==='Boolean'){valid=(typeof value==='undefined'?'undefined':_typeof(value))===(expectedType='boolean');}else if(expectedType==='Function'){valid=(typeof value==='undefined'?'undefined':_typeof(value))===(expectedType='function');}else if(expectedType==='Object'){valid=isPlainObject(value);}else if(expectedType==='Array'){valid=Array.isArray(value);}else{valid=value instanceof type;}return{valid:valid,expectedType:expectedType};}function getType(fn){var match=fn&&fn.toString().match(/^\s*function (\w+)/);return match&&match[1];}var util=Object.freeze({defineReactive:defineReactive$$1,_toString:_toString,toNumber:toNumber,makeMap:makeMap,isBuiltInTag:isBuiltInTag,remove:remove$1,hasOwn:hasOwn,isPrimitive:isPrimitive,cached:cached,camelize:camelize,capitalize:capitalize,hyphenate:hyphenate,bind:bind$1,toArray:toArray,extend:extend,isObject:isObject,isPlainObject:isPlainObject,toObject:toObject,noop:noop,no:no,genStaticKeys:genStaticKeys,looseEqual:looseEqual,looseIndexOf:looseIndexOf,isReserved:isReserved,def:def,parsePath:parsePath,hasProto:hasProto,inBrowser:inBrowser,UA:UA,isIE:isIE,isIE9:isIE9,isEdge:isEdge,isAndroid:isAndroid,isIOS:isIOS,devtools:devtools,nextTick:nextTick,get _Set(){return _Set;},mergeOptions:mergeOptions,resolveAsset:resolveAsset,get warn(){return warn;},get formatComponentName(){return formatComponentName;},validateProp:validateProp});function initUse(Vue){Vue.use=function(plugin){if(plugin.installed){return;}var args=toArray(arguments,1);args.unshift(this);if(typeof plugin.install==='function'){plugin.install.apply(plugin,args);}else{plugin.apply(null,args);}plugin.installed=true;return this;};}function initMixin$1(Vue){Vue.mixin=function(mixin){Vue.options=mergeOptions(Vue.options,mixin);};}function initExtend(Vue){Vue.cid=0;var cid=1;Vue.extend=function(extendOptions){extendOptions=extendOptions||{};var Super=this;var isFirstExtend=Super.cid===0;if(isFirstExtend&&extendOptions._Ctor){return extendOptions._Ctor;}var name=extendOptions.name||Super.options.name;if(process.env.NODE_ENV!=='production'){if(!/^[a-zA-Z][\w-]*$/.test(name)){warn('Invalid component name: "'+name+'". Component names '+'can only contain alphanumeric characaters and the hyphen.');name=null;}}var Sub=function VueComponent(options){this._init(options);};Sub.prototype=Object.create(Super.prototype);Sub.prototype.constructor=Sub;Sub.cid=cid++;Sub.options=mergeOptions(Super.options,extendOptions);Sub['super']=Super;Sub.extend=Super.extend;config._assetTypes.forEach(function(type){Sub[type]=Super[type];});if(name){Sub.options.components[name]=Sub;}Sub.superOptions=Super.options;Sub.extendOptions=extendOptions;if(isFirstExtend){extendOptions._Ctor=Sub;}return Sub;};}function initAssetRegisters(Vue){config._assetTypes.forEach(function(type){Vue[type]=function(id,definition){if(!definition){return this.options[type+'s'][id];}else{if(process.env.NODE_ENV!=='production'){if(type==='component'&&config.isReservedTag(id)){warn('Do not use built-in or reserved HTML elements as component '+'id: '+id);}}if(type==='component'&&isPlainObject(definition)){definition.name=definition.name||id;definition=Vue.extend(definition);}if(type==='directive'&&typeof definition==='function'){definition={bind:definition,update:definition};}this.options[type+'s'][id]=definition;return definition;}};});}var KeepAlive={name:'keep-alive',abstract:true,created:function created(){this.cache=Object.create(null);},render:function render(){var vnode=getFirstComponentChild(this.$slots.default);if(vnode&&vnode.componentOptions){var opts=vnode.componentOptions;var key=vnode.key==null?opts.Ctor.cid+'::'+opts.tag:vnode.key;if(this.cache[key]){vnode.child=this.cache[key].child;}else{this.cache[key]=vnode;}vnode.data.keepAlive=true;}return vnode;},destroyed:function destroyed(){var this$1=this;for(var key in this.cache){var vnode=this$1.cache[key];callHook(vnode.child,'deactivated');vnode.child.$destroy();}}};var builtInComponents={KeepAlive:KeepAlive};function initGlobalAPI(Vue){var configDef={};configDef.get=function(){return config;};if(process.env.NODE_ENV!=='production'){configDef.set=function(){warn('Do not replace the Vue.config object, set individual fields instead.');};}Object.defineProperty(Vue,'config',configDef);Vue.util=util;Vue.set=set;Vue.delete=del;Vue.nextTick=nextTick;Vue.options=Object.create(null);config._assetTypes.forEach(function(type){Vue.options[type+'s']=Object.create(null);});extend(Vue.options.components,builtInComponents);initUse(Vue);initMixin$1(Vue);initExtend(Vue);initAssetRegisters(Vue);}initGlobalAPI(Vue$2);Object.defineProperty(Vue$2.prototype,'$isServer',{get:function get(){return config._isServer;}});Vue$2.version='2.0.1';var mustUseProp=makeMap('value,selected,checked,muted');var isEnumeratedAttr=makeMap('contenteditable,draggable,spellcheck');var isBooleanAttr=makeMap('allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,'+'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,'+'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,'+'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,'+'required,reversed,scoped,seamless,selected,sortable,translate,'+'truespeed,typemustmatch,visible');var isAttr=makeMap('accept,accept-charset,accesskey,action,align,alt,async,autocomplete,'+'autofocus,autoplay,autosave,bgcolor,border,buffered,challenge,charset,'+'checked,cite,class,code,codebase,color,cols,colspan,content,http-equiv,'+'name,contenteditable,contextmenu,controls,coords,data,datetime,default,'+'defer,dir,dirname,disabled,download,draggable,dropzone,enctype,method,for,'+'form,formaction,headers,<th>,height,hidden,high,href,hreflang,http-equiv,'+'icon,id,ismap,itemprop,keytype,kind,label,lang,language,list,loop,low,'+'manifest,max,maxlength,media,method,GET,POST,min,multiple,email,file,'+'muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,'+'preload,radiogroup,readonly,rel,required,reversed,rows,rowspan,sandbox,'+'scope,scoped,seamless,selected,shape,size,type,text,password,sizes,span,'+'spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,'+'target,title,type,usemap,value,width,wrap');var xlinkNS='http://www.w3.org/1999/xlink';var isXlink=function isXlink(name){return name.charAt(5)===':'&&name.slice(0,5)==='xlink';};var getXlinkProp=function getXlinkProp(name){return isXlink(name)?name.slice(6,name.length):'';};var isFalsyAttrValue=function isFalsyAttrValue(val){return val==null||val===false;};function genClassForVnode(vnode){var data=vnode.data;var parentNode=vnode;var childNode=vnode;while(childNode.child){childNode=childNode.child._vnode;if(childNode.data){data=mergeClassData(childNode.data,data);}}while(parentNode=parentNode.parent){if(parentNode.data){data=mergeClassData(data,parentNode.data);}}return genClassFromData(data);}function mergeClassData(child,parent){return{staticClass:concat(child.staticClass,parent.staticClass),class:child.class?[child.class,parent.class]:parent.class};}function genClassFromData(data){var dynamicClass=data.class;var staticClass=data.staticClass;if(staticClass||dynamicClass){return concat(staticClass,stringifyClass(dynamicClass));}return'';}function concat(a,b){return a?b?a+' '+b:a:b||'';}function stringifyClass(value){var res='';if(!value){return res;}if(typeof value==='string'){return value;}if(Array.isArray(value)){var stringified;for(var i=0,l=value.length;i<l;i++){if(value[i]){if(stringified=stringifyClass(value[i])){res+=stringified+' ';}}}return res.slice(0,-1);}if(isObject(value)){for(var key in value){if(value[key]){res+=key+' ';}}return res.slice(0,-1);}return res;}var namespaceMap={svg:'http://www.w3.org/2000/svg',math:'http://www.w3.org/1998/Math/MathML'};var isHTMLTag=makeMap('html,body,base,head,link,meta,style,title,'+'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,'+'div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,'+'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,'+'s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,'+'embed,object,param,source,canvas,script,noscript,del,ins,'+'caption,col,colgroup,table,thead,tbody,td,th,tr,'+'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,'+'output,progress,select,textarea,'+'details,dialog,menu,menuitem,summary,'+'content,element,shadow,template');var isUnaryTag=makeMap('area,base,br,col,embed,frame,hr,img,input,isindex,keygen,'+'link,meta,param,source,track,wbr',true);var canBeLeftOpenTag=makeMap('colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source',true);var isNonPhrasingTag=makeMap('address,article,aside,base,blockquote,body,caption,col,colgroup,dd,'+'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,'+'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,'+'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,'+'title,tr,track',true);var isSVG=makeMap('svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font,'+'font-face,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,'+'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',true);var isReservedTag=function isReservedTag(tag){return isHTMLTag(tag)||isSVG(tag);};function getTagNamespace(tag){if(isSVG(tag)){return'svg';}if(tag==='math'){return'math';}}var unknownElementCache=Object.create(null);function isUnknownElement(tag){if(!inBrowser){return true;}if(isReservedTag(tag)){return false;}tag=tag.toLowerCase();if(unknownElementCache[tag]!=null){return unknownElementCache[tag];}var el=document.createElement(tag);if(tag.indexOf('-')>-1){return unknownElementCache[tag]=el.constructor===window.HTMLUnknownElement||el.constructor===window.HTMLElement;}else{return unknownElementCache[tag]=/HTMLUnknownElement/.test(el.toString());}}function query(el){if(typeof el==='string'){var selector=el;el=document.querySelector(el);if(!el){process.env.NODE_ENV!=='production'&&warn('Cannot find element: '+selector);return document.createElement('div');}}return el;}function createElement$1(tagName){return document.createElement(tagName);}function createElementNS(namespace,tagName){return document.createElementNS(namespaceMap[namespace],tagName);}function createTextNode(text){return document.createTextNode(text);}function createComment(text){return document.createComment(text);}function insertBefore(parentNode,newNode,referenceNode){parentNode.insertBefore(newNode,referenceNode);}function removeChild(node,child){node.removeChild(child);}function appendChild(node,child){node.appendChild(child);}function parentNode(node){return node.parentNode;}function nextSibling(node){return node.nextSibling;}function tagName(node){return node.tagName;}function setTextContent(node,text){node.textContent=text;}function childNodes(node){return node.childNodes;}function setAttribute(node,key,val){node.setAttribute(key,val);}var nodeOps=Object.freeze({createElement:createElement$1,createElementNS:createElementNS,createTextNode:createTextNode,createComment:createComment,insertBefore:insertBefore,removeChild:removeChild,appendChild:appendChild,parentNode:parentNode,nextSibling:nextSibling,tagName:tagName,setTextContent:setTextContent,childNodes:childNodes,setAttribute:setAttribute});var ref={create:function create(_,vnode){registerRef(vnode);},update:function update(oldVnode,vnode){if(oldVnode.data.ref!==vnode.data.ref){registerRef(oldVnode,true);registerRef(vnode);}},destroy:function destroy(vnode){registerRef(vnode,true);}};function registerRef(vnode,isRemoval){var key=vnode.data.ref;if(!key){return;}var vm=vnode.context;var ref=vnode.child||vnode.elm;var refs=vm.$refs;if(isRemoval){if(Array.isArray(refs[key])){remove$1(refs[key],ref);}else if(refs[key]===ref){refs[key]=undefined;}}else{if(vnode.data.refInFor){if(Array.isArray(refs[key])){refs[key].push(ref);}else{refs[key]=[ref];}}else{refs[key]=ref;}}}var emptyData={};var emptyNode=new VNode('',emptyData,[]);var hooks$1=['create','update','postpatch','remove','destroy'];function isUndef(s){return s==null;}function isDef(s){return s!=null;}function sameVnode(vnode1,vnode2){return vnode1.key===vnode2.key&&vnode1.tag===vnode2.tag&&vnode1.isComment===vnode2.isComment&&!vnode1.data===!vnode2.data;}function createKeyToOldIdx(children,beginIdx,endIdx){var i,key;var map={};for(i=beginIdx;i<=endIdx;++i){key=children[i].key;if(isDef(key)){map[key]=i;}}return map;}function createPatchFunction(backend){var i,j;var cbs={};var modules=backend.modules;var nodeOps=backend.nodeOps;for(i=0;i<hooks$1.length;++i){cbs[hooks$1[i]]=[];for(j=0;j<modules.length;++j){if(modules[j][hooks$1[i]]!==undefined){cbs[hooks$1[i]].push(modules[j][hooks$1[i]]);}}}function emptyNodeAt(elm){return new VNode(nodeOps.tagName(elm).toLowerCase(),{},[],undefined,elm);}function createRmCb(childElm,listeners){function remove$$1(){if(--remove$$1.listeners===0){removeElement(childElm);}}remove$$1.listeners=listeners;return remove$$1;}function removeElement(el){var parent=nodeOps.parentNode(el);nodeOps.removeChild(parent,el);}function createElm(vnode,insertedVnodeQueue,nested){var i;var data=vnode.data;vnode.isRootInsert=!nested;if(isDef(data)){if(isDef(i=data.hook)&&isDef(i=i.init)){i(vnode);}if(isDef(i=vnode.child)){initComponent(vnode,insertedVnodeQueue);return vnode.elm;}}var children=vnode.children;var tag=vnode.tag;if(isDef(tag)){if(process.env.NODE_ENV!=='production'){if(!vnode.ns&&!(config.ignoredElements&&config.ignoredElements.indexOf(tag)>-1)&&config.isUnknownElement(tag)){warn('Unknown custom element: <'+tag+'> - did you '+'register the component correctly? For recursive components, '+'make sure to provide the "name" option.',vnode.context);}}vnode.elm=vnode.ns?nodeOps.createElementNS(vnode.ns,tag):nodeOps.createElement(tag);setScope(vnode);createChildren(vnode,children,insertedVnodeQueue);if(isDef(data)){invokeCreateHooks(vnode,insertedVnodeQueue);}}else if(vnode.isComment){vnode.elm=nodeOps.createComment(vnode.text);}else{vnode.elm=nodeOps.createTextNode(vnode.text);}return vnode.elm;}function createChildren(vnode,children,insertedVnodeQueue){if(Array.isArray(children)){for(var i=0;i<children.length;++i){nodeOps.appendChild(vnode.elm,createElm(children[i],insertedVnodeQueue,true));}}else if(isPrimitive(vnode.text)){nodeOps.appendChild(vnode.elm,nodeOps.createTextNode(vnode.text));}}function isPatchable(vnode){while(vnode.child){vnode=vnode.child._vnode;}return isDef(vnode.tag);}function invokeCreateHooks(vnode,insertedVnodeQueue){for(var i$1=0;i$1<cbs.create.length;++i$1){cbs.create[i$1](emptyNode,vnode);}i=vnode.data.hook;if(isDef(i)){if(i.create){i.create(emptyNode,vnode);}if(i.insert){insertedVnodeQueue.push(vnode);}}}function initComponent(vnode,insertedVnodeQueue){if(vnode.data.pendingInsert){insertedVnodeQueue.push.apply(insertedVnodeQueue,vnode.data.pendingInsert);}vnode.elm=vnode.child.$el;if(isPatchable(vnode)){invokeCreateHooks(vnode,insertedVnodeQueue);setScope(vnode);}else{registerRef(vnode);insertedVnodeQueue.push(vnode);}}function setScope(vnode){var i;if(isDef(i=vnode.context)&&isDef(i=i.$options._scopeId)){nodeOps.setAttribute(vnode.elm,i,'');}if(isDef(i=activeInstance)&&i!==vnode.context&&isDef(i=i.$options._scopeId)){nodeOps.setAttribute(vnode.elm,i,'');}}function addVnodes(parentElm,before,vnodes,startIdx,endIdx,insertedVnodeQueue){for(;startIdx<=endIdx;++startIdx){nodeOps.insertBefore(parentElm,createElm(vnodes[startIdx],insertedVnodeQueue),before);}}function invokeDestroyHook(vnode){var i,j;var data=vnode.data;if(isDef(data)){if(isDef(i=data.hook)&&isDef(i=i.destroy)){i(vnode);}for(i=0;i<cbs.destroy.length;++i){cbs.destroy[i](vnode);}}if(isDef(i=vnode.child)&&!data.keepAlive){invokeDestroyHook(i._vnode);}if(isDef(i=vnode.children)){for(j=0;j<vnode.children.length;++j){invokeDestroyHook(vnode.children[j]);}}}function removeVnodes(parentElm,vnodes,startIdx,endIdx){for(;startIdx<=endIdx;++startIdx){var ch=vnodes[startIdx];if(isDef(ch)){if(isDef(ch.tag)){removeAndInvokeRemoveHook(ch);invokeDestroyHook(ch);}else{nodeOps.removeChild(parentElm,ch.elm);}}}}function removeAndInvokeRemoveHook(vnode,rm){if(rm||isDef(vnode.data)){var listeners=cbs.remove.length+1;if(!rm){rm=createRmCb(vnode.elm,listeners);}else{rm.listeners+=listeners;}if(isDef(i=vnode.child)&&isDef(i=i._vnode)&&isDef(i.data)){removeAndInvokeRemoveHook(i,rm);}for(i=0;i<cbs.remove.length;++i){cbs.remove[i](vnode,rm);}if(isDef(i=vnode.data.hook)&&isDef(i=i.remove)){i(vnode,rm);}else{rm();}}else{removeElement(vnode.elm);}}function updateChildren(parentElm,oldCh,newCh,insertedVnodeQueue,removeOnly){var oldStartIdx=0;var newStartIdx=0;var oldEndIdx=oldCh.length-1;var oldStartVnode=oldCh[0];var oldEndVnode=oldCh[oldEndIdx];var newEndIdx=newCh.length-1;var newStartVnode=newCh[0];var newEndVnode=newCh[newEndIdx];var oldKeyToIdx,idxInOld,elmToMove,before;var canMove=!removeOnly;while(oldStartIdx<=oldEndIdx&&newStartIdx<=newEndIdx){if(isUndef(oldStartVnode)){oldStartVnode=oldCh[++oldStartIdx];}else if(isUndef(oldEndVnode)){oldEndVnode=oldCh[--oldEndIdx];}else if(sameVnode(oldStartVnode,newStartVnode)){patchVnode(oldStartVnode,newStartVnode,insertedVnodeQueue);oldStartVnode=oldCh[++oldStartIdx];newStartVnode=newCh[++newStartIdx];}else if(sameVnode(oldEndVnode,newEndVnode)){patchVnode(oldEndVnode,newEndVnode,insertedVnodeQueue);oldEndVnode=oldCh[--oldEndIdx];newEndVnode=newCh[--newEndIdx];}else if(sameVnode(oldStartVnode,newEndVnode)){patchVnode(oldStartVnode,newEndVnode,insertedVnodeQueue);canMove&&nodeOps.insertBefore(parentElm,oldStartVnode.elm,nodeOps.nextSibling(oldEndVnode.elm));oldStartVnode=oldCh[++oldStartIdx];newEndVnode=newCh[--newEndIdx];}else if(sameVnode(oldEndVnode,newStartVnode)){patchVnode(oldEndVnode,newStartVnode,insertedVnodeQueue);canMove&&nodeOps.insertBefore(parentElm,oldEndVnode.elm,oldStartVnode.elm);oldEndVnode=oldCh[--oldEndIdx];newStartVnode=newCh[++newStartIdx];}else{if(isUndef(oldKeyToIdx)){oldKeyToIdx=createKeyToOldIdx(oldCh,oldStartIdx,oldEndIdx);}idxInOld=isDef(newStartVnode.key)?oldKeyToIdx[newStartVnode.key]:null;if(isUndef(idxInOld)){nodeOps.insertBefore(parentElm,createElm(newStartVnode,insertedVnodeQueue),oldStartVnode.elm);newStartVnode=newCh[++newStartIdx];}else{elmToMove=oldCh[idxInOld];if(process.env.NODE_ENV!=='production'&&!elmToMove){warn('It seems there are duplicate keys that is causing an update error. '+'Make sure each v-for item has a unique key.');}if(elmToMove.tag!==newStartVnode.tag){nodeOps.insertBefore(parentElm,createElm(newStartVnode,insertedVnodeQueue),oldStartVnode.elm);newStartVnode=newCh[++newStartIdx];}else{patchVnode(elmToMove,newStartVnode,insertedVnodeQueue);oldCh[idxInOld]=undefined;canMove&&nodeOps.insertBefore(parentElm,newStartVnode.elm,oldStartVnode.elm);newStartVnode=newCh[++newStartIdx];}}}}if(oldStartIdx>oldEndIdx){before=isUndef(newCh[newEndIdx+1])?null:newCh[newEndIdx+1].elm;addVnodes(parentElm,before,newCh,newStartIdx,newEndIdx,insertedVnodeQueue);}else if(newStartIdx>newEndIdx){removeVnodes(parentElm,oldCh,oldStartIdx,oldEndIdx);}}function patchVnode(oldVnode,vnode,insertedVnodeQueue,removeOnly){if(oldVnode===vnode){return;}if(vnode.isStatic&&oldVnode.isStatic&&vnode.key===oldVnode.key&&vnode.isCloned){vnode.elm=oldVnode.elm;return;}var i,hook;var hasData=isDef(i=vnode.data);if(hasData&&isDef(hook=i.hook)&&isDef(i=hook.prepatch)){i(oldVnode,vnode);}var elm=vnode.elm=oldVnode.elm;var oldCh=oldVnode.children;var ch=vnode.children;if(hasData&&isPatchable(vnode)){for(i=0;i<cbs.update.length;++i){cbs.update[i](oldVnode,vnode);}if(isDef(hook)&&isDef(i=hook.update)){i(oldVnode,vnode);}}if(isUndef(vnode.text)){if(isDef(oldCh)&&isDef(ch)){if(oldCh!==ch){updateChildren(elm,oldCh,ch,insertedVnodeQueue,removeOnly);}}else if(isDef(ch)){if(isDef(oldVnode.text)){nodeOps.setTextContent(elm,'');}addVnodes(elm,null,ch,0,ch.length-1,insertedVnodeQueue);}else if(isDef(oldCh)){removeVnodes(elm,oldCh,0,oldCh.length-1);}else if(isDef(oldVnode.text)){nodeOps.setTextContent(elm,'');}}else if(oldVnode.text!==vnode.text){nodeOps.setTextContent(elm,vnode.text);}if(hasData){for(i=0;i<cbs.postpatch.length;++i){cbs.postpatch[i](oldVnode,vnode);}if(isDef(hook)&&isDef(i=hook.postpatch)){i(oldVnode,vnode);}}}function invokeInsertHook(vnode,queue,initial){if(initial&&vnode.parent){vnode.parent.data.pendingInsert=queue;}else{for(var i=0;i<queue.length;++i){queue[i].data.hook.insert(queue[i]);}}}var bailed=false;function hydrate(elm,vnode,insertedVnodeQueue){if(process.env.NODE_ENV!=='production'){if(!assertNodeMatch(elm,vnode)){return false;}}vnode.elm=elm;var tag=vnode.tag;var data=vnode.data;var children=vnode.children;if(isDef(data)){if(isDef(i=data.hook)&&isDef(i=i.init)){i(vnode,true);}if(isDef(i=vnode.child)){initComponent(vnode,insertedVnodeQueue);return true;}}if(isDef(tag)){if(isDef(children)){var childNodes=nodeOps.childNodes(elm);if(!childNodes.length){createChildren(vnode,children,insertedVnodeQueue);}else{var childrenMatch=true;if(childNodes.length!==children.length){childrenMatch=false;}else{for(var i$1=0;i$1<children.length;i$1++){if(!hydrate(childNodes[i$1],children[i$1],insertedVnodeQueue)){childrenMatch=false;break;}}}if(!childrenMatch){if(process.env.NODE_ENV!=='production'&&typeof console!=='undefined'&&!bailed){bailed=true;console.warn('Parent: ',elm);console.warn('Mismatching childNodes vs. VNodes: ',childNodes,children);}return false;}}}if(isDef(data)){invokeCreateHooks(vnode,insertedVnodeQueue);}}return true;}function assertNodeMatch(node,vnode){if(vnode.tag){return vnode.tag.indexOf('vue-component')===0||vnode.tag===nodeOps.tagName(node).toLowerCase();}else{return _toString(vnode.text)===node.data;}}return function patch(oldVnode,vnode,hydrating,removeOnly){var elm,parent;var isInitialPatch=false;var insertedVnodeQueue=[];if(!oldVnode){isInitialPatch=true;createElm(vnode,insertedVnodeQueue);}else{var isRealElement=isDef(oldVnode.nodeType);if(!isRealElement&&sameVnode(oldVnode,vnode)){patchVnode(oldVnode,vnode,insertedVnodeQueue,removeOnly);}else{if(isRealElement){if(oldVnode.nodeType===1&&oldVnode.hasAttribute('server-rendered')){oldVnode.removeAttribute('server-rendered');hydrating=true;}if(hydrating){if(hydrate(oldVnode,vnode,insertedVnodeQueue)){invokeInsertHook(vnode,insertedVnodeQueue,true);return oldVnode;}else if(process.env.NODE_ENV!=='production'){warn('The client-side rendered virtual DOM tree is not matching '+'server-rendered content. This is likely caused by incorrect '+'HTML markup, for example nesting block-level elements inside '+'<p>, or missing <tbody>. Bailing hydration and performing '+'full client-side render.');}}oldVnode=emptyNodeAt(oldVnode);}elm=oldVnode.elm;parent=nodeOps.parentNode(elm);createElm(vnode,insertedVnodeQueue);if(vnode.parent){vnode.parent.elm=vnode.elm;if(isPatchable(vnode)){for(var i=0;i<cbs.create.length;++i){cbs.create[i](emptyNode,vnode.parent);}}}if(parent!==null){nodeOps.insertBefore(parent,vnode.elm,nodeOps.nextSibling(elm));removeVnodes(parent,[oldVnode],0,0);}else if(isDef(oldVnode.tag)){invokeDestroyHook(oldVnode);}}}invokeInsertHook(vnode,insertedVnodeQueue,isInitialPatch);return vnode.elm;};}var directives={create:function bindDirectives(oldVnode,vnode){var hasInsert=false;forEachDirective(oldVnode,vnode,function(def,dir){callHook$1(def,dir,'bind',vnode,oldVnode);if(def.inserted){hasInsert=true;}});if(hasInsert){mergeVNodeHook(vnode.data.hook||(vnode.data.hook={}),'insert',function(){applyDirectives(oldVnode,vnode,'inserted');});}},update:function updateDirectives(oldVnode,vnode){applyDirectives(oldVnode,vnode,'update');if(oldVnode.data.directives&&!vnode.data.directives){applyDirectives(oldVnode,oldVnode,'unbind');}},postpatch:function postupdateDirectives(oldVnode,vnode){applyDirectives(oldVnode,vnode,'componentUpdated');},destroy:function unbindDirectives(vnode){applyDirectives(vnode,vnode,'unbind');}};var emptyModifiers=Object.create(null);function forEachDirective(oldVnode,vnode,fn){var dirs=vnode.data.directives;if(dirs){for(var i=0;i<dirs.length;i++){var dir=dirs[i];var def=resolveAsset(vnode.context.$options,'directives',dir.name,true);if(def){var oldDirs=oldVnode&&oldVnode.data.directives;if(oldDirs){dir.oldValue=oldDirs[i].value;}if(!dir.modifiers){dir.modifiers=emptyModifiers;}fn(def,dir);}}}}function applyDirectives(oldVnode,vnode,hook){forEachDirective(oldVnode,vnode,function(def,dir){callHook$1(def,dir,hook,vnode,oldVnode);});}function callHook$1(def,dir,hook,vnode,oldVnode){var fn=def&&def[hook];if(fn){fn(vnode.elm,dir,vnode,oldVnode);}}var baseModules=[ref,directives];function updateAttrs(oldVnode,vnode){if(!oldVnode.data.attrs&&!vnode.data.attrs){return;}var key,cur,old;var elm=vnode.elm;var oldAttrs=oldVnode.data.attrs||{};var attrs=vnode.data.attrs||{};if(attrs.__ob__){attrs=vnode.data.attrs=extend({},attrs);}for(key in attrs){cur=attrs[key];old=oldAttrs[key];if(old!==cur){setAttr(elm,key,cur);}}for(key in oldAttrs){if(attrs[key]==null){if(isXlink(key)){elm.removeAttributeNS(xlinkNS,getXlinkProp(key));}else if(!isEnumeratedAttr(key)){elm.removeAttribute(key);}}}}function setAttr(el,key,value){if(isBooleanAttr(key)){if(isFalsyAttrValue(value)){el.removeAttribute(key);}else{el.setAttribute(key,key);}}else if(isEnumeratedAttr(key)){el.setAttribute(key,isFalsyAttrValue(value)||value==='false'?'false':'true');}else if(isXlink(key)){if(isFalsyAttrValue(value)){el.removeAttributeNS(xlinkNS,getXlinkProp(key));}else{el.setAttributeNS(xlinkNS,key,value);}}else{if(isFalsyAttrValue(value)){el.removeAttribute(key);}else{el.setAttribute(key,value);}}}var attrs={create:updateAttrs,update:updateAttrs};function updateClass(oldVnode,vnode){var el=vnode.elm;var data=vnode.data;var oldData=oldVnode.data;if(!data.staticClass&&!data.class&&(!oldData||!oldData.staticClass&&!oldData.class)){return;}var cls=genClassForVnode(vnode);var transitionClass=el._transitionClasses;if(transitionClass){cls=concat(cls,stringifyClass(transitionClass));}if(cls!==el._prevClass){el.setAttribute('class',cls);el._prevClass=cls;}}var klass={create:updateClass,update:updateClass};function updateDOMListeners(oldVnode,vnode){if(!oldVnode.data.on&&!vnode.data.on){return;}var on=vnode.data.on||{};var oldOn=oldVnode.data.on||{};var add=vnode.elm._v_add||(vnode.elm._v_add=function(event,handler,capture){vnode.elm.addEventListener(event,handler,capture);});var remove=vnode.elm._v_remove||(vnode.elm._v_remove=function(event,handler){vnode.elm.removeEventListener(event,handler);});updateListeners(on,oldOn,add,remove);}var events={create:updateDOMListeners,update:updateDOMListeners};function updateDOMProps(oldVnode,vnode){if(!oldVnode.data.domProps&&!vnode.data.domProps){return;}var key,cur;var elm=vnode.elm;var oldProps=oldVnode.data.domProps||{};var props=vnode.data.domProps||{};if(props.__ob__){props=vnode.data.domProps=extend({},props);}for(key in oldProps){if(props[key]==null){elm[key]=undefined;}}for(key in props){if((key==='textContent'||key==='innerHTML')&&vnode.children){vnode.children.length=0;}cur=props[key];if(key==='value'){elm._value=cur;var strCur=cur==null?'':String(cur);if(elm.value!==strCur){elm.value=strCur;}}else{elm[key]=cur;}}}var domProps={create:updateDOMProps,update:updateDOMProps};var prefixes=['Webkit','Moz','ms'];var testEl;var normalize=cached(function(prop){testEl=testEl||document.createElement('div');prop=camelize(prop);if(prop!=='filter'&&prop in testEl.style){return prop;}var upper=prop.charAt(0).toUpperCase()+prop.slice(1);for(var i=0;i<prefixes.length;i++){var prefixed=prefixes[i]+upper;if(prefixed in testEl.style){return prefixed;}}});function updateStyle(oldVnode,vnode){if((!oldVnode.data||!oldVnode.data.style)&&!vnode.data.style){return;}var cur,name;var el=vnode.elm;var oldStyle=oldVnode.data.style||{};var style=vnode.data.style||{};if(typeof style==='string'){el.style.cssText=style;return;}var needClone=style.__ob__;if(Array.isArray(style)){style=vnode.data.style=toObject(style);}if(needClone){style=vnode.data.style=extend({},style);}for(name in oldStyle){if(!style[name]){el.style[normalize(name)]='';}}for(name in style){cur=style[name];if(cur!==oldStyle[name]){el.style[normalize(name)]=cur==null?'':cur;}}}var style={create:updateStyle,update:updateStyle};function addClass(el,cls){if(el.classList){if(cls.indexOf(' ')>-1){cls.split(/\s+/).forEach(function(c){return el.classList.add(c);});}else{el.classList.add(cls);}}else{var cur=' '+el.getAttribute('class')+' ';if(cur.indexOf(' '+cls+' ')<0){el.setAttribute('class',(cur+cls).trim());}}}function removeClass(el,cls){if(el.classList){if(cls.indexOf(' ')>-1){cls.split(/\s+/).forEach(function(c){return el.classList.remove(c);});}else{el.classList.remove(cls);}}else{var cur=' '+el.getAttribute('class')+' ';var tar=' '+cls+' ';while(cur.indexOf(tar)>=0){cur=cur.replace(tar,' ');}el.setAttribute('class',cur.trim());}}var hasTransition=inBrowser&&!isIE9;var TRANSITION='transition';var ANIMATION='animation';var transitionProp='transition';var transitionEndEvent='transitionend';var animationProp='animation';var animationEndEvent='animationend';if(hasTransition){if(window.ontransitionend===undefined&&window.onwebkittransitionend!==undefined){transitionProp='WebkitTransition';transitionEndEvent='webkitTransitionEnd';}if(window.onanimationend===undefined&&window.onwebkitanimationend!==undefined){animationProp='WebkitAnimation';animationEndEvent='webkitAnimationEnd';}}var raf=inBrowser&&window.requestAnimationFrame||setTimeout;function nextFrame(fn){raf(function(){raf(fn);});}function addTransitionClass(el,cls){(el._transitionClasses||(el._transitionClasses=[])).push(cls);addClass(el,cls);}function removeTransitionClass(el,cls){if(el._transitionClasses){remove$1(el._transitionClasses,cls);}removeClass(el,cls);}function whenTransitionEnds(el,expectedType,cb){var ref=getTransitionInfo(el,expectedType);var type=ref.type;var timeout=ref.timeout;var propCount=ref.propCount;if(!type){return cb();}var event=type===TRANSITION?transitionEndEvent:animationEndEvent;var ended=0;var end=function end(){el.removeEventListener(event,onEnd);cb();};var onEnd=function onEnd(e){if(e.target===el){if(++ended>=propCount){end();}}};setTimeout(function(){if(ended<propCount){end();}},timeout+1);el.addEventListener(event,onEnd);}var transformRE=/\b(transform|all)(,|$)/;function getTransitionInfo(el,expectedType){var styles=window.getComputedStyle(el);var transitioneDelays=styles[transitionProp+'Delay'].split(', ');var transitionDurations=styles[transitionProp+'Duration'].split(', ');var transitionTimeout=getTimeout(transitioneDelays,transitionDurations);var animationDelays=styles[animationProp+'Delay'].split(', ');var animationDurations=styles[animationProp+'Duration'].split(', ');var animationTimeout=getTimeout(animationDelays,animationDurations);var type;var timeout=0;var propCount=0;if(expectedType===TRANSITION){if(transitionTimeout>0){type=TRANSITION;timeout=transitionTimeout;propCount=transitionDurations.length;}}else if(expectedType===ANIMATION){if(animationTimeout>0){type=ANIMATION;timeout=animationTimeout;propCount=animationDurations.length;}}else{timeout=Math.max(transitionTimeout,animationTimeout);type=timeout>0?transitionTimeout>animationTimeout?TRANSITION:ANIMATION:null;propCount=type?type===TRANSITION?transitionDurations.length:animationDurations.length:0;}var hasTransform=type===TRANSITION&&transformRE.test(styles[transitionProp+'Property']);return{type:type,timeout:timeout,propCount:propCount,hasTransform:hasTransform};}function getTimeout(delays,durations){return Math.max.apply(null,durations.map(function(d,i){return toMs(d)+toMs(delays[i]);}));}function toMs(s){return Number(s.slice(0,-1))*1000;}function enter(vnode){var el=vnode.elm;if(el._leaveCb){el._leaveCb.cancelled=true;el._leaveCb();}var data=resolveTransition(vnode.data.transition);if(!data){return;}if(el._enterCb||el.nodeType!==1){return;}var css=data.css;var type=data.type;var enterClass=data.enterClass;var enterActiveClass=data.enterActiveClass;var appearClass=data.appearClass;var appearActiveClass=data.appearActiveClass;var beforeEnter=data.beforeEnter;var enter=data.enter;var afterEnter=data.afterEnter;var enterCancelled=data.enterCancelled;var beforeAppear=data.beforeAppear;var appear=data.appear;var afterAppear=data.afterAppear;var appearCancelled=data.appearCancelled;var transitionNode=activeInstance.$vnode;var context=transitionNode&&transitionNode.parent?transitionNode.parent.context:activeInstance;var isAppear=!context._isMounted||!vnode.isRootInsert;if(isAppear&&!appear&&appear!==''){return;}var startClass=isAppear?appearClass:enterClass;var activeClass=isAppear?appearActiveClass:enterActiveClass;var beforeEnterHook=isAppear?beforeAppear||beforeEnter:beforeEnter;var enterHook=isAppear?typeof appear==='function'?appear:enter:enter;var afterEnterHook=isAppear?afterAppear||afterEnter:afterEnter;var enterCancelledHook=isAppear?appearCancelled||enterCancelled:enterCancelled;var expectsCSS=css!==false&&!isIE9;var userWantsControl=enterHook&&(enterHook._length||enterHook.length)>1;var cb=el._enterCb=once(function(){if(expectsCSS){removeTransitionClass(el,activeClass);}if(cb.cancelled){if(expectsCSS){removeTransitionClass(el,startClass);}enterCancelledHook&&enterCancelledHook(el);}else{afterEnterHook&&afterEnterHook(el);}el._enterCb=null;});if(!vnode.data.show){mergeVNodeHook(vnode.data.hook||(vnode.data.hook={}),'insert',function(){var parent=el.parentNode;var pendingNode=parent&&parent._pending&&parent._pending[vnode.key];if(pendingNode&&pendingNode.tag===vnode.tag&&pendingNode.elm._leaveCb){pendingNode.elm._leaveCb();}enterHook&&enterHook(el,cb);});}beforeEnterHook&&beforeEnterHook(el);if(expectsCSS){addTransitionClass(el,startClass);addTransitionClass(el,activeClass);nextFrame(function(){removeTransitionClass(el,startClass);if(!cb.cancelled&&!userWantsControl){whenTransitionEnds(el,type,cb);}});}if(vnode.data.show){enterHook&&enterHook(el,cb);}if(!expectsCSS&&!userWantsControl){cb();}}function leave(vnode,rm){var el=vnode.elm;if(el._enterCb){el._enterCb.cancelled=true;el._enterCb();}var data=resolveTransition(vnode.data.transition);if(!data){return rm();}if(el._leaveCb||el.nodeType!==1){return;}var css=data.css;var type=data.type;var leaveClass=data.leaveClass;var leaveActiveClass=data.leaveActiveClass;var beforeLeave=data.beforeLeave;var leave=data.leave;var afterLeave=data.afterLeave;var leaveCancelled=data.leaveCancelled;var delayLeave=data.delayLeave;var expectsCSS=css!==false&&!isIE9;var userWantsControl=leave&&(leave._length||leave.length)>1;var cb=el._leaveCb=once(function(){if(el.parentNode&&el.parentNode._pending){el.parentNode._pending[vnode.key]=null;}if(expectsCSS){removeTransitionClass(el,leaveActiveClass);}if(cb.cancelled){if(expectsCSS){removeTransitionClass(el,leaveClass);}leaveCancelled&&leaveCancelled(el);}else{rm();afterLeave&&afterLeave(el);}el._leaveCb=null;});if(delayLeave){delayLeave(performLeave);}else{performLeave();}function performLeave(){if(cb.cancelled){return;}if(!vnode.data.show){(el.parentNode._pending||(el.parentNode._pending={}))[vnode.key]=vnode;}beforeLeave&&beforeLeave(el);if(expectsCSS){addTransitionClass(el,leaveClass);addTransitionClass(el,leaveActiveClass);nextFrame(function(){removeTransitionClass(el,leaveClass);if(!cb.cancelled&&!userWantsControl){whenTransitionEnds(el,type,cb);}});}leave&&leave(el,cb);if(!expectsCSS&&!userWantsControl){cb();}}}function resolveTransition(def$$1){if(!def$$1){return;}if((typeof def$$1==='undefined'?'undefined':_typeof(def$$1))==='object'){var res={};if(def$$1.css!==false){extend(res,autoCssTransition(def$$1.name||'v'));}extend(res,def$$1);return res;}else if(typeof def$$1==='string'){return autoCssTransition(def$$1);}}var autoCssTransition=cached(function(name){return{enterClass:name+"-enter",leaveClass:name+"-leave",appearClass:name+"-enter",enterActiveClass:name+"-enter-active",leaveActiveClass:name+"-leave-active",appearActiveClass:name+"-enter-active"};});function once(fn){var called=false;return function(){if(!called){called=true;fn();}};}var transition=inBrowser?{create:function create(_,vnode){if(!vnode.data.show){enter(vnode);}},remove:function remove(vnode,rm){if(!vnode.data.show){leave(vnode,rm);}else{rm();}}}:{};var platformModules=[attrs,klass,events,domProps,style,transition];var modules=platformModules.concat(baseModules);var patch$1=createPatchFunction({nodeOps:nodeOps,modules:modules});var modelableTagRE=/^input|select|textarea|vue-component-[0-9]+(-[0-9a-zA-Z_\-]*)?$/;if(isIE9){document.addEventListener('selectionchange',function(){var el=document.activeElement;if(el&&el.vmodel){trigger(el,'input');}});}var model={bind:function bind(el,binding,vnode){if(process.env.NODE_ENV!=='production'){if(!modelableTagRE.test(vnode.tag)){warn("v-model is not supported on element type: <"+vnode.tag+">. "+'If you are working with contenteditable, it\'s recommended to '+'wrap a library dedicated for that purpose inside a custom component.',vnode.context);}}if(vnode.tag==='select'){setSelected(el,binding,vnode.context);if(isIE||isEdge){var cb=function cb(){setSelected(el,binding,vnode.context);};nextTick(cb);setTimeout(cb,0);}}else if(vnode.tag==='textarea'||el.type==='text'){if(!isAndroid){el.addEventListener('compositionstart',onCompositionStart);el.addEventListener('compositionend',onCompositionEnd);}if(isIE9){el.vmodel=true;}}},componentUpdated:function componentUpdated(el,binding,vnode){if(vnode.tag==='select'){setSelected(el,binding,vnode.context);var needReset=el.multiple?binding.value.some(function(v){return hasNoMatchingOption(v,el.options);}):hasNoMatchingOption(binding.value,el.options);if(needReset){trigger(el,'change');}}}};function setSelected(el,binding,vm){var value=binding.value;var isMultiple=el.multiple;if(isMultiple&&!Array.isArray(value)){process.env.NODE_ENV!=='production'&&warn("<select multiple v-model=\""+binding.expression+"\"> "+"expects an Array value for its binding, but got "+Object.prototype.toString.call(value).slice(8,-1),vm);return;}var selected,option;for(var i=0,l=el.options.length;i<l;i++){option=el.options[i];if(isMultiple){selected=looseIndexOf(value,getValue(option))>-1;if(option.selected!==selected){option.selected=selected;}}else{if(looseEqual(getValue(option),value)){if(el.selectedIndex!==i){el.selectedIndex=i;}return;}}}if(!isMultiple){el.selectedIndex=-1;}}function hasNoMatchingOption(value,options){for(var i=0,l=options.length;i<l;i++){if(looseEqual(getValue(options[i]),value)){return false;}}return true;}function getValue(option){return'_value'in option?option._value:option.value;}function onCompositionStart(e){e.target.composing=true;}function onCompositionEnd(e){e.target.composing=false;trigger(e.target,'input');}function trigger(el,type){var e=document.createEvent('HTMLEvents');e.initEvent(type,true,true);el.dispatchEvent(e);}function locateNode(vnode){return vnode.child&&(!vnode.data||!vnode.data.transition)?locateNode(vnode.child._vnode):vnode;}var show={bind:function bind(el,ref,vnode){var value=ref.value;vnode=locateNode(vnode);var transition=vnode.data&&vnode.data.transition;if(value&&transition&&!isIE9){enter(vnode);}var originalDisplay=el.style.display==='none'?'':el.style.display;el.style.display=value?originalDisplay:'none';el.__vOriginalDisplay=originalDisplay;},update:function update(el,ref,vnode){var value=ref.value;var oldValue=ref.oldValue;if(value===oldValue){return;}vnode=locateNode(vnode);var transition=vnode.data&&vnode.data.transition;if(transition&&!isIE9){if(value){enter(vnode);el.style.display=el.__vOriginalDisplay;}else{leave(vnode,function(){el.style.display='none';});}}else{el.style.display=value?el.__vOriginalDisplay:'none';}}};var platformDirectives={model:model,show:show};var transitionProps={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String};function getRealChild(vnode){var compOptions=vnode&&vnode.componentOptions;if(compOptions&&compOptions.Ctor.options.abstract){return getRealChild(getFirstComponentChild(compOptions.children));}else{return vnode;}}function extractTransitionData(comp){var data={};var options=comp.$options;for(var key in options.propsData){data[key]=comp[key];}var listeners=options._parentListeners;for(var key$1 in listeners){data[camelize(key$1)]=listeners[key$1].fn;}return data;}function placeholder(h,rawChild){return /\d-keep-alive$/.test(rawChild.tag)?h('keep-alive'):null;}function hasParentTransition(vnode){while(vnode=vnode.parent){if(vnode.data.transition){return true;}}}var Transition={name:'transition',props:transitionProps,abstract:true,render:function render(h){var this$1=this;var children=this.$slots.default;if(!children){return;}children=children.filter(function(c){return c.tag;});if(!children.length){return;}if(process.env.NODE_ENV!=='production'&&children.length>1){warn('<transition> can only be used on a single element. Use '+'<transition-group> for lists.',this.$parent);}var mode=this.mode;if(process.env.NODE_ENV!=='production'&&mode&&mode!=='in-out'&&mode!=='out-in'){warn('invalid <transition> mode: '+mode,this.$parent);}var rawChild=children[0];if(hasParentTransition(this.$vnode)){return rawChild;}var child=getRealChild(rawChild);if(!child){return rawChild;}if(this._leaving){return placeholder(h,rawChild);}child.key=child.key==null||child.isStatic?"__v"+(child.tag+this._uid)+"__":child.key;var data=(child.data||(child.data={})).transition=extractTransitionData(this);var oldRawChild=this._vnode;var oldChild=getRealChild(oldRawChild);if(child.data.directives&&child.data.directives.some(function(d){return d.name==='show';})){child.data.show=true;}if(oldChild&&oldChild.data&&oldChild.key!==child.key){var oldData=oldChild.data.transition=extend({},data);if(mode==='out-in'){this._leaving=true;mergeVNodeHook(oldData,'afterLeave',function(){this$1._leaving=false;this$1.$forceUpdate();});return placeholder(h,rawChild);}else if(mode==='in-out'){var delayedLeave;var performLeave=function performLeave(){delayedLeave();};mergeVNodeHook(data,'afterEnter',performLeave);mergeVNodeHook(data,'enterCancelled',performLeave);mergeVNodeHook(oldData,'delayLeave',function(leave){delayedLeave=leave;});}}return rawChild;}};var props=extend({tag:String,moveClass:String},transitionProps);delete props.mode;var TransitionGroup={props:props,render:function render(h){var tag=this.tag||this.$vnode.data.tag||'span';var map=Object.create(null);var prevChildren=this.prevChildren=this.children;var rawChildren=this.$slots.default||[];var children=this.children=[];var transitionData=extractTransitionData(this);for(var i=0;i<rawChildren.length;i++){var c=rawChildren[i];if(c.tag){if(c.key!=null&&String(c.key).indexOf('__vlist')!==0){children.push(c);map[c.key]=c;(c.data||(c.data={})).transition=transitionData;}else if(process.env.NODE_ENV!=='production'){var opts=c.componentOptions;var name=opts?opts.Ctor.options.name||opts.tag:c.tag;warn("<transition-group> children must be keyed: <"+name+">");}}}if(prevChildren){var kept=[];var removed=[];for(var i$1=0;i$1<prevChildren.length;i$1++){var c$1=prevChildren[i$1];c$1.data.transition=transitionData;c$1.data.pos=c$1.elm.getBoundingClientRect();if(map[c$1.key]){kept.push(c$1);}else{removed.push(c$1);}}this.kept=h(tag,null,kept);this.removed=removed;}return h(tag,null,children);},beforeUpdate:function beforeUpdate(){this.__patch__(this._vnode,this.kept,false,true);this._vnode=this.kept;},updated:function updated(){var children=this.prevChildren;var moveClass=this.moveClass||this.name+'-move';if(!children.length||!this.hasMove(children[0].elm,moveClass)){return;}children.forEach(callPendingCbs);children.forEach(recordPosition);children.forEach(applyTranslation);var f=document.body.offsetHeight;children.forEach(function(c){if(c.data.moved){var el=c.elm;var s=el.style;addTransitionClass(el,moveClass);s.transform=s.WebkitTransform=s.transitionDuration='';el.addEventListener(transitionEndEvent,el._moveCb=function cb(e){if(!e||/transform$/.test(e.propertyName)){el.removeEventListener(transitionEndEvent,cb);el._moveCb=null;removeTransitionClass(el,moveClass);}});}});},methods:{hasMove:function hasMove(el,moveClass){if(!hasTransition){return false;}if(this._hasMove!=null){return this._hasMove;}addTransitionClass(el,moveClass);var info=getTransitionInfo(el);removeTransitionClass(el,moveClass);return this._hasMove=info.hasTransform;}}};function callPendingCbs(c){if(c.elm._moveCb){c.elm._moveCb();}if(c.elm._enterCb){c.elm._enterCb();}}function recordPosition(c){c.data.newPos=c.elm.getBoundingClientRect();}function applyTranslation(c){var oldPos=c.data.pos;var newPos=c.data.newPos;var dx=oldPos.left-newPos.left;var dy=oldPos.top-newPos.top;if(dx||dy){c.data.moved=true;var s=c.elm.style;s.transform=s.WebkitTransform="translate("+dx+"px,"+dy+"px)";s.transitionDuration='0s';}}var platformComponents={Transition:Transition,TransitionGroup:TransitionGroup};Vue$2.config.isUnknownElement=isUnknownElement;Vue$2.config.isReservedTag=isReservedTag;Vue$2.config.getTagNamespace=getTagNamespace;Vue$2.config.mustUseProp=mustUseProp;extend(Vue$2.options.directives,platformDirectives);extend(Vue$2.options.components,platformComponents);Vue$2.prototype.__patch__=config._isServer?noop:patch$1;Vue$2.prototype.$mount=function(el,hydrating){el=el&&!config._isServer?query(el):undefined;return this._mount(el,hydrating);};setTimeout(function(){if(config.devtools){if(devtools){devtools.emit('init',Vue$2);}else if(process.env.NODE_ENV!=='production'&&inBrowser&&/Chrome\/\d+/.test(window.navigator.userAgent)){console.log('Download the Vue Devtools for a better development experience:\n'+'https://github.com/vuejs/vue-devtools');}}},0);module.exports=Vue$2;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	var process = module.exports = {};

	var cachedSetTimeout;
	var cachedClearTimeout;

	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout() {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	})();
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        return setTimeout(fun, 0);
	    }

	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        return cachedSetTimeout(fun, 0);
	    } catch (e) {
	        try {
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch (e) {
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        return clearTimeout(marker);
	    }

	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        return cachedClearTimeout(marker);
	    } catch (e) {
	        try {
	            return cachedClearTimeout.call(null, marker);
	        } catch (e) {
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;

	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}

	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;

	    var len = queue.length;
	    while (len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}

	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};

	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = '';
	process.versions = {};

	function noop() {}

	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;

	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};

	process.cwd = function () {
	    return '/';
	};
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function () {
	    return 0;
	};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;'use strict';

	var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
	  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	} : function (obj) {
	  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
	};

	;(function () {

	  var vueTouchFeedback = {};

	  var STATE_HOVER = 'is-touch';
	  var STATE_CLICK = 'is-click';

	  var CONFIG = {
	    isIE: window.navigator.userAgent.toLowerCase().indexOf('msie') !== -1,
	    isTouch: typeof document.ontouchstart !== 'undefined',
	    isPointer: typeof window.navigator.pointerEnabled !== 'undefined',
	    isMSPoniter: typeof window.navigator.msPointerEnabled !== 'undefined',
	    touch: {
	      enter: 'touchstart',
	      leave: 'touchend',
	      start: 'touchstart',
	      move: 'touchmove',
	      end: 'touchend'
	    },
	    pointer: {
	      enter: 'pointerenter',
	      leave: 'pointerleave',
	      start: 'pointerdown',
	      move: 'pointermove',
	      end: 'pointerup'
	    },
	    msPointer: {
	      enter: 'MSPointerOver',
	      leave: 'MSPointerOut',
	      start: 'MSPointerDown',
	      move: 'MSPointerMove',
	      end: 'MSPointerUp'
	    },
	    mouse: {
	      enter: 'mouseenter',
	      leave: 'mouseleave',
	      start: 'mousedown',
	      move: 'mousemove',
	      end: 'mouseup'
	    }
	  };

	  var POINTER_EVENT = {
	    enter: CONFIG.isTouch ? CONFIG.touch.enter : CONFIG.isPointer ? CONFIG.pointer.enter : CONFIG.isMSPointer ? CONFIG.msPointer.enter : CONFIG.mouse.enter,
	    leave: CONFIG.isTouch ? CONFIG.touch.leave : CONFIG.isPointer ? CONFIG.pointer.leave : CONFIG.isMSPointer ? CONFIG.msPointer.leave : CONFIG.mouse.leave,
	    start: CONFIG.isTouch ? CONFIG.touch.start : CONFIG.isPointer ? CONFIG.pointer.start : CONFIG.isMSPointer ? CONFIG.msPointer.start : CONFIG.mouse.start,
	    move: CONFIG.isTouch ? CONFIG.touch.move : CONFIG.isPointer ? CONFIG.pointer.move : CONFIG.isMSPointer ? CONFIG.msPointer.move : CONFIG.mouse.move,
	    end: CONFIG.isTouch ? CONFIG.touch.end : CONFIG.isPointer ? CONFIG.pointer.end : CONFIG.isMSPointer ? CONFIG.msPointer.end : CONFIG.mouse.end
	  };

	  var TOUCH_EVENT = {
	    TAP: false,

	    touchAddClass: function touchAddClass(el) {
	      return function (ev) {
	        return el.classList.add(STATE_HOVER);
	      };
	    },
	    tapedTouchStart: function tapedTouchStart(el) {
	      var _this = this;

	      return function (ev) {
	        return _this.TAP = true;
	      };
	    },
	    tapedTouchMove: function tapedTouchMove(el) {
	      var _this2 = this;

	      return function (ev) {
	        if (_this2.TAP) _this2.TAP = false;
	      };
	    },
	    tapedTouchEnd: function tapedTouchEnd(el) {
	      var _this3 = this;

	      return function (ev) {
	        if (!_this3.TAP) {
	          return;
	        }
	        el.classList.add(STATE_CLICK);
	        setTimeout(function () {
	          el.classList.remove(STATE_CLICK);
	        }, 100);
	      };
	    },
	    tapedTouchEndAnimation: function tapedTouchEndAnimation(el) {
	      var _this4 = this;

	      return function (ev) {
	        if (!_this4.TAP) {
	          return;
	        }
	        el.classList.add(STATE_CLICK);
	      };
	    },
	    removeHover: function removeHover(el) {
	      return function (ev) {
	        return el.classList.remove(STATE_HOVER);
	      };
	    },
	    removeClick: function removeClick(el) {
	      return function (ev) {
	        return el.classList.remove(STATE_CLICK);
	      };
	    },
	    removeAll: function removeAll(el) {
	      return function (ev) {
	        if (el.classList.contains(STATE_HOVER)) {
	          el.classList.remove(STATE_HOVER);
	        }
	        if (el.classList.contains(STATE_CLICK)) {
	          el.classList.remove(STATE_CLICK);
	        }
	      };
	    }
	  };

	  vueTouchFeedback.install = function (Vue) {
	    Vue.directive('touchfeedback', {
	      bind: function bind(el, binding) {
	        if (binding.arg && binding.arg !== 'animation') {
	          console.warn('[vue-touchfeedback] arg name error');
	        }

	        if (binding.arg === 'animation') {
	          if (binding.modifiers.hover) {
	            el.addEventListener(POINTER_EVENT.enter, TOUCH_EVENT.touchAddClass(el), false);
	            el.addEventListener('webkitAnimationEnd', TOUCH_EVENT.removeHover(el), false);
	            el.addEventListener('MSAnimationEnd', TOUCH_EVENT.removeHover(el), false);
	            el.addEventListener('oanimationend', TOUCH_EVENT.removeHover(el), false);
	            el.addEventListener('animationend', TOUCH_EVENT.removeHover(el), false);
	          }
	          if (binding.modifiers.click) {
	            el.addEventListener(POINTER_EVENT.start, TOUCH_EVENT.tapedTouchStart(el), false);
	            el.addEventListener(POINTER_EVENT.move, TOUCH_EVENT.tapedTouchMove(el), false);
	            el.addEventListener(POINTER_EVENT.end, TOUCH_EVENT.tapedTouchEndAnimation(el), false);
	            el.addEventListener('webkitAnimationEnd', TOUCH_EVENT.removeClick(el), false);
	            el.addEventListener('MSAnimationEnd', TOUCH_EVENT.removeClick(el), false);
	            el.addEventListener('oanimationend', TOUCH_EVENT.removeClick(el), false);
	            el.addEventListener('animationend', TOUCH_EVENT.removeClick(el), false);
	          }
	        } else {
	          el.addEventListener(POINTER_EVENT.enter, TOUCH_EVENT.touchAddClass(el), false);
	          el.addEventListener(POINTER_EVENT.leave, TOUCH_EVENT.removeHover(el), false);

	          el.addEventListener(POINTER_EVENT.start, TOUCH_EVENT.tapedTouchStart(el), false);
	          el.addEventListener(POINTER_EVENT.move, TOUCH_EVENT.tapedTouchMove(el), false);
	          el.addEventListener(POINTER_EVENT.end, TOUCH_EVENT.tapedTouchEnd(el), false);
	        }
	      },
	      unbind: function unbind(el, binding) {
	        if (binding.arg === 'animation') {
	          if (binding.modifiers.hover) {
	            el.removeEventListener(POINTER_EVENT.enter, TOUCH_EVENT.touchAddClass(el), false);
	            el.removeEventListener('webkitAnimationEnd', TOUCH_EVENT.removeHover(el), false);
	            el.removeEventListener('MSAnimationEnd', TOUCH_EVENT.removeHover(el), false);
	            el.removeEventListener('oanimationend', TOUCH_EVENT.removeHover(el), false);
	            el.removeEventListener('animationend', TOUCH_EVENT.removeHover(el), false);
	          }
	          if (binding.modifiers.click) {
	            el.removeEventListener(POINTER_EVENT.start, TOUCH_EVENT.tapedTouchStart(el), false);
	            el.removeEventListener(POINTER_EVENT.move, TOUCH_EVENT.tapedTouchMove(el), false);
	            el.removeEventListener(POINTER_EVENT.end, TOUCH_EVENT.tapedTouchEndAnimation(el), false);
	            el.removeEventListener('webkitAnimationEnd', TOUCH_EVENT.removeClick(el), false);
	            el.removeEventListener('MSAnimationEnd', TOUCH_EVENT.removeClick(el), false);
	            el.removeEventListener('oanimationend', TOUCH_EVENT.removeClick(el), false);
	            el.removeEventListener('animationend', TOUCH_EVENT.removeClick(el), false);
	          }
	        } else {
	          el.removeEventListener(POINTER_EVENT.enter, TOUCH_EVENT.touchAddClass(el), false);
	          el.removeEventListener(POINTER_EVENT.leave, TOUCH_EVENT.removeHover(el), false);

	          el.removeEventListener(POINTER_EVENT.start, TOUCH_EVENT.tapedTouchStart(el), false);
	          el.removeEventListener(POINTER_EVENT.move, TOUCH_EVENT.tapedTouchMove(el), false);
	          el.removeEventListener(POINTER_EVENT.end, TOUCH_EVENT.tapedTouchEnd(el), false);
	        }
	      }
	    });
	  };

	  if (( false ? 'undefined' : _typeof(exports)) == 'object') {
	    module.exports = vueTouchFeedback;
	  } else if (true) {
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	      return vueTouchFeedback;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (window.Vue) {
	    window.VueTouchFeedback = vueTouchFeedback;
	    Vue.use(vueTouchFeedback);
	  }
	})();

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__

	/* script */
	__vue_exports__ = __webpack_require__(5)

	/* template */
	var __vue_template__ = __webpack_require__(6)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-1", __vue_options__)
	  } else {
	    hotAPI.reload("data-v-1", __vue_options__)
	  }
	})()}
	if (__vue_options__.functional) {console.error("[vue-loader] App.vue: functional components are not supported and should be defined in plain js files using render functions.")}

	module.exports = __vue_exports__


/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'app',

	  data: function data() {
	    return {};
	  }
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports={render:function (){with(this) {
	  return _h('div', {
	    staticClass: "app"
	  }, [_h('section', [_m(0), " ", _h('div', {
	    directives: [{
	      name: "touchfeedback"
	    }],
	    staticClass: "Box"
	  }), " ", _m(1)]), " ", _h('section', [_m(2), " ", _h('div', {
	    directives: [{
	      name: "touchfeedback",
	      arg: "animation",
	      modifiers: {
	        "hover": true,
	        "click": true
	      }
	    }],
	    staticClass: "Box DemoAnimation"
	  }), " ", _m(3)]), " ", _h('section', [_m(4), " ", _h('div', {
	    directives: [{
	      name: "touchfeedback",
	      arg: "animation",
	      modifiers: {
	        "hover": true
	      }
	    }],
	    staticClass: "Box DemoAnimation"
	  }), " ", _m(5)]), " ", _h('section', [_m(6), " ", _h('div', {
	    directives: [{
	      name: "touchfeedback",
	      arg: "animation",
	      modifiers: {
	        "click": true
	      }
	    }],
	    staticClass: "Box DemoAnimation"
	  }), " ", _m(7)])])
	}},staticRenderFns: [function (){with(this) {
	  return _h('h1', ["hover & click"])
	}},function (){with(this) {
	  return _h('pre', ["<div class=\"Box\" ", _h('b', ["v-touchfeedback"]), "></div>"])
	}},function (){with(this) {
	  return _h('h1', ["hover animation & click animation"])
	}},function (){with(this) {
	  return _h('pre', ["<div class=\"Box\" ", _h('b', ["v-touchfeedback:animation.hover.click"]), "></div>"])
	}},function (){with(this) {
	  return _h('h1', ["hover animation"])
	}},function (){with(this) {
	  return _h('pre', ["<div class=\"Box\" ", _h('b', ["v-touchfeedback:animation.hover"]), "></div>"])
	}},function (){with(this) {
	  return _h('h1', ["click animation"])
	}},function (){with(this) {
	  return _h('pre', ["<div class=\"Box\" ", _h('b', ["v-touchfeedback:animation.click"]), "></div>"])
	}}]}
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-1", module.exports)
	  }
	}

/***/ }
/******/ ]);