const tg=a=>a.map(t=>`<span class="tag">${t}</span>`).join("");
document.getElementById("sg").innerHTML=Object.entries(SK).map(([k,[i,l]])=>`<div class="card sk rv"><h3><span>${i}</span>${k}</h3>${tg(l)}</div>`).join("");
document.getElementById("pg").innerHTML=P.map((p,i)=>`<article class="card pc rv" tabindex="0" role="button" data-i="${i}"><span class="eb">Project 0${i+1}</span><h3>${p.t}</h3><p>${p.d}</p><div>${tg(p.s)}</div><div class="row"><button class="btn pri sm" data-i="${i}">View Project</button><a class="btn sm" href="${GH}" target="_blank" rel="noopener">GitHub</a></div></article>`).join("");
const md=document.getElementById("md"),mb=document.getElementById("mb2");
function open_(i){const p=P[i];mb.innerHTML=`<h2 style="padding-right:30px">${p.t}</h2><h4>Overview</h4><p>${p.o}</p><h4>Architecture</h4>${p.a.map(r=>`<div class="arch">${r.map(x=>`<span>${x}</span>`).join("<i>→</i>")}</div>`).join("")}<h4>Technologies</h4>${tg(p.s)}<h4>Deployment Process</h4><p>${p.dp}</p><h4>Challenges</h4><p>${p.c}</p><h4>Solution</h4><p>${p.so}</p><h4>Results</h4><p>${p.r}</p><div class="row"><a class="btn pri sm" href="${GH}" target="_blank" rel="noopener">GitHub Repository</a></div>`;md.classList.add("o")}
document.getElementById("pg").addEventListener("click",e=>{if(e.target.closest("a"))return;const c=e.target.closest(".pc");if(c)open_(+c.dataset.i)});
document.getElementById("pg").addEventListener("keydown",e=>{if(e.key==="Enter"&&e.target.classList.contains("pc"))open_(+e.target.dataset.i)});
const cl=()=>md.classList.remove("o");document.getElementById("x").onclick=cl;md.onclick=e=>{if(e.target===md)cl()};addEventListener("keydown",e=>{if(e.key==="Escape")cl()});
const lk=document.getElementById("lk"),mbt=document.getElementById("mb");
mbt.onclick=()=>{const o=lk.classList.toggle("o");mbt.setAttribute("aria-expanded",o)};lk.onclick=e=>{if(e.target.tagName==="A")lk.classList.remove("o")};
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("on");io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll(".rv").forEach(el=>io.observe(el));
const L=[["$ whoami","raja"],["raja@cloud-engineer:~$ cat about.txt","Name:      Raja Krisna\nRole:      Cloud Engineer\nOS:        Linux\nContainer: Docker\nCloud:     AWS\nFocus:     DevOps & Infrastructure"],["raja@cloud-engineer:~$ docker ps --format '{{.Names}}'","nginx\npostgres\nredis\nprometheus\ngrafana"]];
const tb=document.getElementById("tb");
async function run(){const z=ms=>new Promise(r=>setTimeout(r,ms));let out="";for(const [c,o] of L){let s="";for(const ch of c){s+=ch;tb.innerHTML=out+`<span class="pr">${s}</span><span class="cur"></span>`;await z(28)}await z(250);out+=`<span class="pr">${c}</span>\n${o}\n\n`;tb.innerHTML=out+'<span class="cur"></span>';await z(500)}tb.innerHTML=out+'<span class="pr">raja@cloud-engineer:~$</span> <span class="cur"></span>'}
if(matchMedia("(prefers-reduced-motion:reduce)").matches){tb.textContent=L.map(l=>l[0]+"\n"+l[1]).join("\n\n")}else run();
document.getElementById("cf").addEventListener("submit",e=>{e.preventDefault();/* TODO: connect to your API, e.g. fetch('/api/contact',{method:'POST',body:new FormData(e.target)}) */document.getElementById("fs").textContent="Form is frontend-only for now. Connect it to your backend/API.";});
