console.log("here");const e=document.querySelector(".users"),n=(e,n)=>{const t=n?Object.keys(n).reduce(((e,t)=>`${e}${t}=${n[t]}&`),"?"):"";return fetch(`https://jsonplaceholder.typicode.com/${e}${t}`).then((n=>{if(console.log(n),!n.ok)throw new Error(`Sry cannot find any ${e}`);return n.json()})).catch((e=>(console.log(e),e.message)))};n("users").then((n=>{console.log(n);const t=Array.isArray(n)?n.map((e=>`\n        <li data-id="${e.id}"><p style="pointer-events: none">${e.name}</p></li>\n      `)).join(""):`<p>${n}</p>`;e.insertAdjacentHTML("beforeend",t)})),e.addEventListener("click",(e=>{"LI"===e.target.tagName&&(console.dir(e.target),console.dir(e.target.dataset.id),n("posts",{userId:e.target.dataset.id,_limit:3}).then((n=>{((e,n)=>{console.log(n);const t=Array.isArray(n)?n.map((e=>`\n        <div>\n            <p style="pointer-events: none">${e.title}</p>\n            <p style="pointer-events: none">${e.body}</p>\n        </div>\n      `)).join(""):`<p>${n}</p>`;e.insertAdjacentHTML("beforeend",t)})(e.target,n)})))}));
//# sourceMappingURL=pagination.750619ef.js.map