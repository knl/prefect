import{d as k,$ as h,al as w,c as s,aN as x,a0 as N,a as c,w as n,a2 as i,a3 as S,X as V,o as r,u as e,bz as g,e as o,bA as u,b as B,bB as T}from"./index-3e9b5a4f-22e45b7a.js";import{u as A}from"./usePageTitle-9cf51495.js";import"./index-8ec704cb.js";import{r as D}from"./routes-f61735ce.js";import"./meta-26546594.js";const j=k({__name:"ConcurrencyLimit",setup(I){const l=h(),m=w("concurrencyLimitId"),p=S(),y=s(()=>[{label:"Details",hidden:V.xl},{label:"Active Task Runs"}]),_=x(y),b={interval:3e5},d=N(l.concurrencyLimits.getConcurrencyLimit,[m.value],b),t=s(()=>d.response);function L(){p.push(D.concurrencyLimits())}const v=s(()=>t.value?`Concurrency Limit: ${t.value.tag}`:"Concurrency Limit");return A(v),(O,R)=>{const f=i("p-tabs"),C=i("p-layout-well");return r(),c(C,{class:"concurrencyLimit"},{header:n(()=>[e(t)?(r(),c(e(g),{key:0,"concurrency-limit":e(t),onDelete:L},null,8,["concurrency-limit"])):o("",!0)]),well:n(()=>[e(t)?(r(),c(e(u),{key:0,alternate:"","concurrency-limit":e(t)},null,8,["concurrency-limit"])):o("",!0)]),default:n(()=>[B(f,{tabs:e(_)},{details:n(()=>[e(t)?(r(),c(e(u),{key:0,"concurrency-limit":e(t)},null,8,["concurrency-limit"])):o("",!0)]),"active-task-runs":n(()=>{var a;return[(a=e(t))!=null&&a.activeSlots?(r(),c(e(T),{key:0,"active-slots":e(t).activeSlots},null,8,["active-slots"])):o("",!0)]}),_:1},8,["tabs"])]),_:1})}}});export{j as default};