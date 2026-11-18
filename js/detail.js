const $=s=>document.querySelector(s),$$=s=>document.querySelectorAll(s),reduce=matchMedia("(prefers-reduced-motion: reduce)").matches;
const burger=$("#burger"),links=$("#links");
burger.onclick=()=>burger.setAttribute("aria-expanded",links.classList.toggle("open"));
$$("#links a").forEach(a=>a.addEventListener("click",()=>{links.classList.remove("open");burger.setAttribute("aria-expanded",false)}));
const bar=$(".progress");
function onScroll(){const h=document.documentElement.scrollHeight-innerHeight;bar.style.transform=`scaleX(${h>0?scrollY/h:0})`;$("#nav").classList.toggle("on",scrollY>40)}
addEventListener("scroll",onScroll,{passive:true});onScroll();
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.12});
$$(".rv").forEach(e=>io.observe(e));
const hb=$("#hbg");
if(!reduce&&hb)$(".dh").addEventListener("mousemove",e=>{hb.style.setProperty("--mx",((e.clientX/innerWidth-.5)*-14)+"px");hb.style.setProperty("--my",((e.clientY/innerHeight-.5)*-8)+"px")});
$("#yr").textContent=new Date().getFullYear();
