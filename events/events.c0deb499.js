document.querySelector("form").addEventListener("submit",(function(e){e.preventDefault(),console.dir(e);const{elements:t}=e.target,o=Object.keys(t).reduce(((e,o)=>isNaN(+o)?{...e,[o]:t[o].value}:e),{});console.log(o)}));console.log(length);
//# sourceMappingURL=events.c0deb499.js.map
