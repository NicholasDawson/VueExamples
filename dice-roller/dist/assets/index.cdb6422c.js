import{r as a,o as i,c,a as o,t as d,F as p,b as h,d as _,e as y}from"./vendor.c2e0a3b2.js";const v=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}};v();const b=o("h1",null,"Dice Roller",-1),k=["src"],L={key:0},N=o("tr",null,[o("th",null,"Roll #"),o("th",null,"Value")],-1),O={setup(g){const n={1:"dice/1.png",2:"dice/2.png",3:"dice/3.png",4:"dice/4.png",5:"dice/5.png",6:"dice/6.png"},r=a("dice/rolling1.png"),l=a([]),e=a(!1);function t(){let u=Math.floor(Math.random()*6+1);r.value="dice/rolling.gif",setTimeout(()=>{r.value=n[u],l.value.push(u)},1e3)}function s(){e.value=!e.value}return(u,w)=>(i(),c(p,null,[b,o("img",{src:r.value,onClick:t,id:"dice",class:"center",width:"250"},null,8,k),o("button",{onClick:s,class:"center"},d(e.value?"Hide":"Show")+" Roll History ",1),e.value?(i(),c("table",L,[N,(i(!0),c(p,null,h(l.value,(f,m)=>(i(),c("tr",{key:f},[o("td",null,d(m+1),1),o("td",null,d(f),1)]))),128))])):_("",!0)],64))}};y(O).mount("#app");