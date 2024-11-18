import{c as x,g as f,r as l,s as d,at as q,au as J,e as m,P,m as L,u as b,a5 as Q,av as Z,j as p,n as u,o as v,W as _,p as oo,L as to}from"./index-jcSSskV8.js";function eo(t){return x("MuiDialog",t)}const M=f("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),I=l.createContext({}),so=d(q,{name:"MuiDialog",slot:"Backdrop",overrides:(t,o)=>o.backdrop})({zIndex:-1}),ao=t=>{const{classes:o,scroll:e,maxWidth:s,fullWidth:r,fullScreen:i}=t,n={root:["root"],container:["container",`scroll${m(e)}`],paper:["paper",`paperScroll${m(e)}`,`paperWidth${m(String(s))}`,r&&"paperFullWidth",i&&"paperFullScreen"]};return v(n,eo,o)},ro=d(J,{name:"MuiDialog",slot:"Root",overridesResolver:(t,o)=>o.root})({"@media print":{position:"absolute !important"}}),io=d("div",{name:"MuiDialog",slot:"Container",overridesResolver:(t,o)=>{const{ownerState:e}=t;return[o.container,o[`scroll${m(e.scroll)}`]]}})({height:"100%","@media print":{height:"auto"},outline:0,variants:[{props:{scroll:"paper"},style:{display:"flex",justifyContent:"center",alignItems:"center"}},{props:{scroll:"body"},style:{overflowY:"auto",overflowX:"hidden",textAlign:"center","&::after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}}}]}),no=d(P,{name:"MuiDialog",slot:"Paper",overridesResolver:(t,o)=>{const{ownerState:e}=t;return[o.paper,o[`scrollPaper${m(e.scroll)}`],o[`paperWidth${m(String(e.maxWidth))}`],e.fullWidth&&o.paperFullWidth,e.fullScreen&&o.paperFullScreen]}})(L(({theme:t})=>({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"},variants:[{props:{scroll:"paper"},style:{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"}},{props:{scroll:"body"},style:{display:"inline-block",verticalAlign:"middle",textAlign:"initial"}},{props:({ownerState:o})=>!o.maxWidth,style:{maxWidth:"calc(100% - 64px)"}},{props:{maxWidth:"xs"},style:{maxWidth:t.breakpoints.unit==="px"?Math.max(t.breakpoints.values.xs,444):`max(${t.breakpoints.values.xs}${t.breakpoints.unit}, 444px)`,[`&.${M.paperScrollBody}`]:{[t.breakpoints.down(Math.max(t.breakpoints.values.xs,444)+32*2)]:{maxWidth:"calc(100% - 64px)"}}}},...Object.keys(t.breakpoints.values).filter(o=>o!=="xs").map(o=>({props:{maxWidth:o},style:{maxWidth:`${t.breakpoints.values[o]}${t.breakpoints.unit}`,[`&.${M.paperScrollBody}`]:{[t.breakpoints.down(t.breakpoints.values[o]+32*2)]:{maxWidth:"calc(100% - 64px)"}}}})),{props:({ownerState:o})=>o.fullWidth,style:{width:"calc(100% - 64px)"}},{props:({ownerState:o})=>o.fullScreen,style:{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${M.paperScrollBody}`]:{margin:0,maxWidth:"100%"}}}]}))),ko=l.forwardRef(function(o,e){const s=b({props:o,name:"MuiDialog"}),r=Q(),i={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{"aria-describedby":n,"aria-labelledby":a,"aria-modal":c=!0,BackdropComponent:h,BackdropProps:j,children:B,className:N,disableEscapeKeyDown:w=!1,fullScreen:U=!1,fullWidth:F=!1,maxWidth:G="sm",onBackdropClick:W,onClick:R,onClose:D,open:A,PaperComponent:Y=P,PaperProps:$={},scroll:E="paper",TransitionComponent:X=_,transitionDuration:T=i,TransitionProps:z,...H}=s,y={...s,disableEscapeKeyDown:w,fullScreen:U,fullWidth:F,maxWidth:G,scroll:E},C=ao(y),S=l.useRef(),O=g=>{S.current=g.target===g.currentTarget},K=g=>{R&&R(g),S.current&&(S.current=null,W&&W(g),D&&D(g,"backdropClick"))},k=Z(a),V=l.useMemo(()=>({titleId:k}),[k]);return p.jsx(ro,{className:u(C.root,N),closeAfterTransition:!0,components:{Backdrop:so},componentsProps:{backdrop:{transitionDuration:T,as:h,...j}},disableEscapeKeyDown:w,onClose:D,open:A,ref:e,onClick:K,ownerState:y,...H,children:p.jsx(X,{appear:!0,in:A,timeout:T,role:"presentation",...z,children:p.jsx(io,{className:u(C.container),onMouseDown:O,ownerState:y,children:p.jsx(no,{as:Y,elevation:24,role:"dialog","aria-describedby":n,"aria-labelledby":k,"aria-modal":c,...$,className:u(C.paper,$.className),ownerState:y,children:p.jsx(I.Provider,{value:V,children:B})})})})})});function lo(t){return x("MuiDialogActions",t)}f("MuiDialogActions",["root","spacing"]);const co=t=>{const{classes:o,disableSpacing:e}=t;return v({root:["root",!e&&"spacing"]},lo,o)},po=d("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:e}=t;return[o.root,!e.disableSpacing&&o.spacing]}})({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto",variants:[{props:({ownerState:t})=>!t.disableSpacing,style:{"& > :not(style) ~ :not(style)":{marginLeft:8}}}]}),Mo=l.forwardRef(function(o,e){const s=b({props:o,name:"MuiDialogActions"}),{className:r,disableSpacing:i=!1,...n}=s,a={...s,disableSpacing:i},c=co(a);return p.jsx(po,{className:u(c.root,r),ownerState:a,ref:e,...n})});function uo(t){return x("MuiDialogContent",t)}f("MuiDialogContent",["root","dividers"]);function go(t){return x("MuiDialogTitle",t)}const mo=f("MuiDialogTitle",["root"]),xo=t=>{const{classes:o,dividers:e}=t;return v({root:["root",e&&"dividers"]},uo,o)},fo=d("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:e}=t;return[o.root,e.dividers&&o.dividers]}})(L(({theme:t})=>({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px",variants:[{props:({ownerState:o})=>o.dividers,style:{padding:"16px 24px",borderTop:`1px solid ${(t.vars||t).palette.divider}`,borderBottom:`1px solid ${(t.vars||t).palette.divider}`}},{props:({ownerState:o})=>!o.dividers,style:{[`.${mo.root} + &`]:{paddingTop:0}}}]}))),wo=l.forwardRef(function(o,e){const s=b({props:o,name:"MuiDialogContent"}),{className:r,dividers:i=!1,...n}=s,a={...s,dividers:i},c=xo(a);return p.jsx(fo,{className:u(c.root,r),ownerState:a,ref:e,...n})}),bo=t=>{const{classes:o}=t;return v({root:["root"]},go,o)},vo=d(oo,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(t,o)=>o.root})({padding:"16px 24px",flex:"0 0 auto"}),Wo=l.forwardRef(function(o,e){const s=b({props:o,name:"MuiDialogTitle"}),{className:r,id:i,...n}=s,a=s,c=bo(a),{titleId:h=i}=l.useContext(I);return p.jsx(vo,{component:"h2",className:u(c.root,r),ownerState:a,ref:e,variant:"h6",id:i??h,...n})});function yo(t){return x("MuiListItemSecondaryAction",t)}f("MuiListItemSecondaryAction",["root","disableGutters"]);const ho=t=>{const{disableGutters:o,classes:e}=t;return v({root:["root",o&&"disableGutters"]},yo,e)},Do=d("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:e}=t;return[o.root,e.disableGutters&&o.disableGutters]}})({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)",variants:[{props:({ownerState:t})=>t.disableGutters,style:{right:0}}]}),Co=l.forwardRef(function(o,e){const s=b({props:o,name:"MuiListItemSecondaryAction"}),{className:r,...i}=s,n=l.useContext(to),a={...s,disableGutters:n.disableGutters},c=ho(a);return p.jsx(Do,{className:u(c.root,r),ownerState:a,ref:e,...i})});Co.muiName="ListItemSecondaryAction";export{Mo as D,Co as L,ko as a,wo as b,Wo as c,M as d};
