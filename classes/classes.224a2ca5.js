function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},a={},n=t.parcelRequire4c75;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in a){var t=a[e];delete a[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},t.parcelRequire4c75=n),n.register("fExtF",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){if(!t.has(e))throw new TypeError("attempted to "+r+" private field on non-instance");return t.get(e)}})),n.register("iaRLo",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return t.get?t.get.call(e):t.value}})),n.register("7K24o",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}})),n.register("3LGG3",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){if(t.set)t.set.call(e,r);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=r}}}));var o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e,t){var r=i.default(e,t,"get");return l.default(e,r)};var i=s(n("fExtF")),l=s(n("iaRLo"));function s(e){return e&&e.__esModule?e:{default:e}}var u={};Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(e,t,r){f.default(e,t),t.set(e,r)};var d,f=(d=n("7K24o"))&&d.__esModule?d:{default:d};var c={};Object.defineProperty(c,"__esModule",{value:!0}),c.default=function(e,t,r){var a=p.default(e,t,"set");return v.default(e,a,r),r};var p=h(n("fExtF")),v=h(n("3LGG3"));function h(e){return e&&e.__esModule?e:{default:e}}var w={};Object.defineProperty(w,"__esModule",{value:!0}),w.default=function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r;return e};var b=new WeakMap;class _{getPrice(){return e(o)(this,b)}setPrice(t){e(c)(this,b,t)}calculateAmount(t){return t*e(o)(this,b)}getTwoPlusTwo(){return 4}constructor(t,r){e(w)(this,"name",void 0),e(u)(this,b,{writable:!0,value:void 0}),this.name=t,e(c)(this,b,r),_.examples.push(this)}}e(w)(_,"stat",!0),e(w)(_,"examples",[]);var x=new WeakMap;class y extends _{constructor(t,r,a){super(t,r),e(u)(this,x,{writable:!0,value:void 0}),e(c)(this,x,a)}}e(w)(y,"types",["hatchback","sedan","off-road"]);var M=new WeakMap;class g extends _{constructor(t,r,a){super(t,r),e(u)(this,M,{writable:!0,value:void 0}),e(c)(this,M,a)}}e(w)(g,"types",["hatchback","sedan","off-road"]);var k=new WeakMap,m=new WeakMap,O=new WeakMap;class P{constructor(t,r,a){e(u)(this,k,{writable:!0,value:void 0}),e(u)(this,m,{writable:!0,value:void 0}),e(u)(this,O,{writable:!0,value:void 0}),e(c)(this,m,r),e(c)(this,O,a),e(c)(this,k,t),P.examples.push(this)}}e(w)(P,"banks",["1","2","3"]),e(w)(P,"examples",[]);const j=new y("audi",5e4,"hatchback");new g("bmw",1e5,"hatchback"),new y("skoda",3e4,"hatchback"),new _("vehicle","priceless");console.dir(j);P.banks.filter((e=>"11"===e)).length&&new P("2367 4637 2908 4738","1111","11");
//# sourceMappingURL=classes.224a2ca5.js.map
