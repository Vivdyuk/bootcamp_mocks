!function(){console.log("here");var n=document.querySelector(".users"),t=function(n,t){var e=t?Object.keys(t).reduce((function(n,e){return"".concat(n).concat(e,"=").concat(t[e],"&")}),"?"):"";return fetch("".concat("https://jsonplaceholder.typicode.com/").concat(n).concat(e)).then((function(t){if(console.log(t),!t.ok)throw new Error("Sry cannot find any ".concat(n));return t.json()})).catch((function(n){return console.log(n),n.message}))},e=function(n,t,e){var o=Array.isArray(t)?t.map({users:function(n){return'\n        <li data-id="'.concat(n.id,'"><p style="pointer-events: none">').concat(n.name,"</p></li>\n      ")},posts:function(n){return'\n        <div>\n            <p style="pointer-events: none">'.concat(n.title,'</p>\n            <p style="pointer-events: none">').concat(n.body,"</p>\n        </div>\n      ")}}[e]).join(""):"<p>".concat(t,"</p>");n.insertAdjacentHTML("beforeend",o)};t("users").then((function(t){return e(n,t,"users")})),n.addEventListener("click",(function(n){"LI"===n.target.tagName&&t("posts",{userId:n.target.dataset.id,_limit:3}).then((function(t){e(n.target,t,"posts")}))}))}();
//# sourceMappingURL=pagination.dfb06b71.js.map
