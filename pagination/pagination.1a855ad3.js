console.log("here");const e=document.querySelector(".users"),t=(e,t)=>{const n=t?Object.keys(t).reduce(((e,n)=>`${e}${n}=${t[n]}&`),"?"):"";return fetch(`https://jsonplaceholder.typicode.com/${e}${n}`).then((t=>{if(console.log(t),!t.ok)throw new Error(`Sry cannot find any ${e}`);return t.json()})).catch((e=>(console.log(e),e.message)))},n=(e,t,n)=>{const s=Array.isArray(t)?t.map({users:e=>`\n        <li data-id="${e.id}"><p style="pointer-events: none">${e.name}</p></li>\n      `,posts:e=>`\n        <div>\n            <p style="pointer-events: none">${e.title}</p>\n            <p style="pointer-events: none">${e.body}</p>\n        </div>\n      `}[n]).join(""):`<p>${t}</p>`;e.insertAdjacentHTML("beforeend",s)};t("users").then((t=>n(e,t,"users"))),e.addEventListener("click",(e=>{"LI"===e.target.tagName&&t("posts",{userId:e.target.dataset.id,_limit:3}).then((t=>{n(e.target,t,"posts")}))}));
//# sourceMappingURL=pagination.1a855ad3.js.map
