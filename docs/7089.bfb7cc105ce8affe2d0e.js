"use strict";(self.webpackChunkion_holla_messenger=self.webpackChunkion_holla_messenger||[]).push([[7089],{7089:(h,c,r)=>{r.r(c),r.d(c,{startFocusVisible:()=>E});const a="ion-focused",f=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp"],E=()=>{let i=[],o=!0;const s=document,n=e=>{i.forEach(t=>t.classList.remove(a)),e.forEach(t=>t.classList.add(a)),i=e},d=()=>{o=!1,n([])};s.addEventListener("keydown",e=>{o=f.includes(e.key),o||n([])}),s.addEventListener("focusin",e=>{if(o&&e.composedPath){const t=e.composedPath().filter(u=>!!u.classList&&u.classList.contains("ion-focusable"));n(t)}}),s.addEventListener("focusout",()=>{s.activeElement===s.body&&n([])}),s.addEventListener("touchstart",d),s.addEventListener("mousedown",d)}}}]);