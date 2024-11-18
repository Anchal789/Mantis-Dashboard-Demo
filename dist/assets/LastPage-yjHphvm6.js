import{c as R,g as F,aF as P,aG as S,s as v,e as c,m as $,i as L,r as w,u as z,j as a,n as I,o as N,d as D}from"./index-jcSSskV8.js";function U(e){return R("MuiCircularProgress",e)}F("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const t=44,g=P`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,h=P`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`,E=typeof g!="string"?S`
        animation: ${g} 1.4s linear infinite;
      `:null,A=typeof h!="string"?S`
        animation: ${h} 1.4s ease-in-out infinite;
      `:null,G=e=>{const{classes:r,variant:s,color:o,disableShrink:l}=e,p={root:["root",s,`color${c(o)}`],svg:["svg"],circle:["circle",`circle${c(s)}`,l&&"circleDisableShrink"]};return N(p,U,r)},K=v("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:s}=e;return[r.root,r[s.variant],r[`color${c(s.color)}`]]}})($(({theme:e})=>({display:"inline-block",variants:[{props:{variant:"determinate"},style:{transition:e.transitions.create("transform")}},{props:{variant:"indeterminate"},style:E||{animation:`${g} 1.4s linear infinite`}},...Object.entries(e.palette).filter(L()).map(([r])=>({props:{color:r},style:{color:(e.vars||e).palette[r].main}}))]}))),V=v("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,r)=>r.svg})({display:"block"}),B=v("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,r)=>{const{ownerState:s}=e;return[r.circle,r[`circle${c(s.variant)}`],s.disableShrink&&r.circleDisableShrink]}})($(({theme:e})=>({stroke:"currentColor",variants:[{props:{variant:"determinate"},style:{transition:e.transitions.create("stroke-dashoffset")}},{props:{variant:"indeterminate"},style:{strokeDasharray:"80px, 200px",strokeDashoffset:0}},{props:({ownerState:r})=>r.variant==="indeterminate"&&!r.disableShrink,style:A||{animation:`${h} 1.4s ease-in-out infinite`}}]}))),O=w.forwardRef(function(r,s){const o=z({props:r,name:"MuiCircularProgress"}),{className:l,color:p="primary",disableShrink:M=!1,size:u=40,style:b,thickness:i=3.6,value:d=0,variant:y="indeterminate",...j}=o,n={...o,color:p,disableShrink:M,size:u,thickness:i,value:d,variant:y},m=G(n),f={},x={},k={};if(y==="determinate"){const C=2*Math.PI*((t-i)/2);f.strokeDasharray=C.toFixed(3),k["aria-valuenow"]=Math.round(d),f.strokeDashoffset=`${((100-d)/100*C).toFixed(3)}px`,x.transform="rotate(-90deg)"}return a.jsx(K,{className:I(m.root,l),style:{width:u,height:u,...x,...b},ownerState:n,ref:s,role:"progressbar",...k,...j,children:a.jsx(V,{className:m.svg,ownerState:n,viewBox:`${t/2} ${t/2} ${t} ${t}`,children:a.jsx(B,{className:m.circle,style:f,ownerState:n,cx:t,cy:t,r:(t-i)/2,fill:"none",strokeWidth:i})})})}),T=D(a.jsx("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),W=D(a.jsx("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage");export{O as C,T as F,W as L};
