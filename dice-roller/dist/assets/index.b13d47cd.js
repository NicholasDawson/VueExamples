import{r as i,o as a,c as u,a as l,n as v,t as d,F as f,b as y,d as w,e as k}from"./vendor.c7b8cb1d.js";const b=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}};b();const L=l("h1",null,"Dice Roller",-1),N=l("p",null,"A simple dice rolling app with hand drawn graphics.",-1),A=l("p",null,"By: Nick Dawson",-1),D=["src"],O={key:0},B=l("tr",null,[l("th",null,"Roll #"),l("th",null,"Value")],-1),C={setup(g){const r={1:"dice/1.png",2:"dice/2.png",3:"dice/3.png",4:"dice/4.png",5:"dice/5.png",6:"dice/6.png"},s=i("dice/rolling1.png"),o=i(!1),e=i([]),t=i(0),n=i(!1);function h(){if(o.value)return;o.value=!0;let c=Math.floor(Math.random()*6+1);s.value="dice/rolling.gif",setTimeout(()=>{s.value=r[c],e.value.push(c),t.value+=c,o.value=!1},1e3)}function m(){n.value=!n.value}return(c,F)=>(a(),u(f,null,[L,N,A,l("img",{src:s.value,onClick:h,id:"dice",class:v([[o.value?"c-not-allowed":"c-pointer"],"center"]),width:"250"},null,10,D),l("button",{onClick:m,class:"center"},d(n.value?"Hide":"Show")+" Roll History ",1),n.value?(a(),u("table",O,[B,(a(!0),u(f,null,y(e.value,(p,_)=>(a(),u("tr",{key:p},[l("td",null,d(_+1),1),l("td",null,d(p),1)]))),128)),l("tr",null,[l("td",null,"Average: "+d((t.value/e.value.length).toFixed(2)),1)])])):w("",!0)],64))}};k(C).mount("#app");
