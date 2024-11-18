import{aa as re,r as _,K as Q,a0 as We,ac as Ue,j as m,a3 as Ve,ad as Ge,a1 as He,T as Ne,ae as fe,af as Ze}from"./index-Bgxa-Fin.js";import{C as qe}from"./ComponentSkeleton-InmW5DjV.js";import{b as ze,c as Xe,a as Je,T as De,d as Qe}from"./TableRow-DG6jNjUR.js";import{a as ae}from"./TableCell-Bhy6SEUu.js";import"./Skeleton-DG2ubknM.js";import"./Grid2-i_w57e6D.js";function Ce(e,r){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(e);n<t.length;n++)r.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(a[t[n]]=e[t[n]]);return a}var oe;(function(e){e.event="event",e.props="prop"})(oe||(oe={}));function z(){}function Ye(e){var r,a=void 0;return function(){for(var t=[],n=arguments.length;n--;)t[n]=arguments[n];return r&&t.length===r.length&&t.every(function(i,l){return i===r[l]})||(r=t,a=e.apply(void 0,t)),a}}function ue(e){return!!(e||"").match(/\d/)}function te(e){return e==null}function er(e){return typeof e=="number"&&isNaN(e)}function Ie(e){return te(e)||er(e)||typeof e=="number"&&!isFinite(e)}function Te(e){return e.replace(/[-[\]/{}()*+?.\\^$|]/g,"\\$&")}function rr(e){switch(e){case"lakh":return/(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;case"wan":return/(\d)(?=(\d{4})+(?!\d))/g;case"thousand":default:return/(\d)(?=(\d{3})+(?!\d))/g}}function ar(e,r,a){var t=rr(a),n=e.search(/[1-9]/);return n=n===-1?e.length:n,e.substring(0,n)+e.substring(n,e.length).replace(t,"$1"+r)}function tr(e){var r=_.useRef(e);r.current=e;var a=_.useRef(function(){for(var t=[],n=arguments.length;n--;)t[n]=arguments[n];return r.current.apply(r,t)});return a.current}function he(e,r){r===void 0&&(r=!0);var a=e[0]==="-",t=a&&r;e=e.replace("-","");var n=e.split("."),i=n[0],l=n[1]||"";return{beforeDecimal:i,afterDecimal:l,hasNegation:a,addNegation:t}}function nr(e){if(!e)return e;var r=e[0]==="-";r&&(e=e.substring(1,e.length));var a=e.split("."),t=a[0].replace(/^0+/,"")||"0",n=a[1]||"";return(r?"-":"")+t+(n?"."+n:"")}function je(e,r,a){for(var t="",n=a?"0":"",i=0;i<=r-1;i++)t+=e[i]||n;return t}function pe(e,r){return Array(r+1).join(e)}function Re(e){var r=e+"",a=r[0]==="-"?"-":"";a&&(r=r.substring(1));var t=r.split(/[eE]/g),n=t[0],i=t[1];if(i=Number(i),!i)return a+n;n=n.replace(".","");var l=1+i,h=n.length;return l<0?n="0."+pe("0",Math.abs(l))+n:l>=h?n=n+pe("0",l-h):n=(n.substring(0,l)||"0")+"."+n.substring(l),a+n}function be(e,r,a){if(["","-"].indexOf(e)!==-1)return e;var t=(e.indexOf(".")!==-1||a)&&r,n=he(e),i=n.beforeDecimal,l=n.afterDecimal,h=n.hasNegation,y=parseFloat("0."+(l||"0")),w=l.length<=r?"0."+l:y.toFixed(r),p=w.split("."),g=i;i&&Number(p[0])&&(g=i.split("").reverse().reduce(function(I,T,v){return I.length>v?(Number(I[0])+Number(T)).toString()+I.substring(1,I.length):T+I},p[0]));var x=je(p[1]||"",r,a),b=h?"-":"",s=t?".":"";return""+b+g+s+x}function J(e,r){if(e.value=e.value,e!==null){if(e.createTextRange){var a=e.createTextRange();return a.move("character",r),a.select(),!0}return e.selectionStart||e.selectionStart===0?(e.focus(),e.setSelectionRange(r,r),!0):(e.focus(),!1)}}var Ee=Ye(function(e,r){for(var a=0,t=0,n=e.length,i=r.length;e[a]===r[a]&&a<n;)a++;for(;e[n-1-t]===r[i-1-t]&&i-t>a&&n-t>a;)t++;return{from:{start:a,end:n-t},to:{start:a,end:i-t}}}),ir=function(e,r){var a=Math.min(e.selectionStart,r);return{from:{start:a,end:e.selectionEnd},to:{start:a,end:r}}};function or(e,r,a){return Math.min(Math.max(e,r),a)}function me(e){return Math.max(e.selectionStart,e.selectionEnd)}function ur(){return typeof navigator<"u"&&!(navigator.platform&&/iPhone|iPod/.test(navigator.platform))}function lr(e){return{from:{start:0,end:0},to:{start:0,end:e.length},lastValue:""}}function fr(e){var r=e.currentValue,a=e.formattedValue,t=e.currentValueIndex,n=e.formattedValueIndex;return r[t]===a[n]}function sr(e,r,a,t,n,i,l){l===void 0&&(l=fr);var h=n.findIndex(function(K){return K}),y=e.slice(0,h);!r&&!a.startsWith(y)&&(r=y,a=y+a,t=t+y.length);for(var w=a.length,p=e.length,g={},x=new Array(w),b=0;b<w;b++){x[b]=-1;for(var s=0,I=p;s<I;s++){var T=l({currentValue:a,lastValue:r,formattedValue:e,currentValueIndex:b,formattedValueIndex:s});if(T&&g[s]!==!0){x[b]=s,g[s]=!0;break}}}for(var v=t;v<w&&(x[v]===-1||!i(a[v]));)v++;var O=v===w||x[v]===-1?p:x[v];for(v=t-1;v>0&&x[v]===-1;)v--;var B=v===-1||x[v]===-1?0:x[v]+1;return B>O?O:t-B<O-t?B:O}function Se(e,r,a,t){var n=e.length;if(r=or(r,0,n),t==="left"){for(;r>=0&&!a[r];)r--;r===-1&&(r=a.indexOf(!0))}else{for(;r<=n&&!a[r];)r++;r>n&&(r=a.lastIndexOf(!0))}return r===-1&&(r=n),r}function cr(e){for(var r=Array.from({length:e.length+1}).map(function(){return!0}),a=0,t=r.length;a<t;a++)r[a]=!!(ue(e[a])||ue(e[a-1]));return r}function Ae(e,r,a,t,n,i){i===void 0&&(i=z);var l=tr(function(s,I){var T,v;return Ie(s)?(v="",T=""):typeof s=="number"||I?(v=typeof s=="number"?Re(s):s,T=t(v)):(v=n(s,void 0),T=t(v)),{formattedValue:T,numAsString:v}}),h=_.useState(function(){return l(te(e)?r:e,a)}),y=h[0],w=h[1],p=function(s,I){s.formattedValue!==y.formattedValue&&w({formattedValue:s.formattedValue,numAsString:s.value}),i(s,I)},g=e,x=a;te(e)&&(g=y.numAsString,x=!0);var b=l(g,x);return _.useMemo(function(){w(b)},[b.formattedValue]),[y,p]}function dr(e){return e.replace(/[^0-9]/g,"")}function vr(e){return e}function gr(e){var r=e.type;r===void 0&&(r="text");var a=e.displayType;a===void 0&&(a="input");var t=e.customInput,n=e.renderText,i=e.getInputRef,l=e.format;l===void 0&&(l=vr);var h=e.removeFormatting;h===void 0&&(h=dr);var y=e.defaultValue,w=e.valueIsNumericString,p=e.onValueChange,g=e.isAllowed,x=e.onChange;x===void 0&&(x=z);var b=e.onKeyDown;b===void 0&&(b=z);var s=e.onMouseUp;s===void 0&&(s=z);var I=e.onFocus;I===void 0&&(I=z);var T=e.onBlur;T===void 0&&(T=z);var v=e.value,O=e.getCaretBoundary;O===void 0&&(O=cr);var B=e.isValidInputCharacter;B===void 0&&(B=ue);var K=e.isCharacterSame,F=Ce(e,["type","displayType","customInput","renderText","getInputRef","format","removeFormatting","defaultValue","valueIsNumericString","onValueChange","isAllowed","onChange","onKeyDown","onMouseUp","onFocus","onBlur","value","getCaretBoundary","isValidInputCharacter","isCharacterSame"]),X=Ae(v,y,!!w,l,h,p),$=X[0],V=$.formattedValue,P=$.numAsString,U=X[1],L=_.useRef(),G=_.useRef({formattedValue:V,numAsString:P}),H=function(o,u){G.current={formattedValue:o.formattedValue,numAsString:o.value},U(o,u)},Y=_.useState(!1),ne=Y[0],d=Y[1],f=_.useRef(null),N=_.useRef({setCaretTimeout:null,focusTimeout:null});_.useEffect(function(){return d(!0),function(){clearTimeout(N.current.setCaretTimeout),clearTimeout(N.current.focusTimeout)}},[]);var R=l,E=function(o,u){var c=parseFloat(u);return{formattedValue:o,value:u,floatValue:isNaN(c)?void 0:c}},j=function(o,u,c){o.selectionStart===0&&o.selectionEnd===o.value.length||(J(o,u),N.current.setCaretTimeout=setTimeout(function(){o.value===c&&o.selectionStart!==u&&J(o,u)},0))},A=function(o,u,c){return Se(o,u,O(o),c)},ee=function(o,u,c){var D=O(u),k=sr(u,V,o,c,D,B,K);return k=Se(u,k,D),k},ce=function(o){var u=o.formattedValue;u===void 0&&(u="");var c=o.input,D=o.source,k=o.event,C=o.numAsString,S;if(c){var W=o.inputValue||c.value,Z=me(c);c.value=u,S=ee(W,u,Z),S!==void 0&&j(c,S,u)}u!==V&&H(E(u,C),{event:k,source:D})};_.useEffect(function(){var o=G.current,u=o.formattedValue,c=o.numAsString;(V!==u||P!==c)&&H(E(V,P),{event:void 0,source:oe.props})},[V,P]);var ie=f.current?me(f.current):void 0,le=typeof window<"u"?_.useLayoutEffect:_.useEffect;le(function(){var o=f.current;if(V!==G.current.formattedValue&&o){var u=ee(G.current.formattedValue,V,ie);o.value=V,j(o,u,V)}},[V]);var de=function(o,u,c){var D=u.target,k=L.current?ir(L.current,D.selectionEnd):Ee(V,o),C=Object.assign(Object.assign({},k),{lastValue:V}),S=h(o,C),W=R(S);if(S=h(W,void 0),g&&!g(E(W,S))){var Z=u.target,q=me(Z),ge=ee(o,V,q);return Z.value=V,j(Z,ge,V),!1}return ce({formattedValue:W,numAsString:S,inputValue:o,event:u,source:c,input:u.target}),!0},ve=function(o,u){u===void 0&&(u=0);var c=o.selectionStart,D=o.selectionEnd;L.current={selectionStart:c,selectionEnd:D+u}},_e=function(o){var u=o.target,c=u.value,D=de(c,o,oe.event);D&&x(o),L.current=void 0},Fe=function(o){var u=o.target,c=o.key,D=u.selectionStart,k=u.selectionEnd,C=u.value;C===void 0&&(C="");var S;c==="ArrowLeft"||c==="Backspace"?S=Math.max(D-1,0):c==="ArrowRight"?S=Math.min(D+1,C.length):c==="Delete"&&(S=D);var W=0;c==="Delete"&&D===k&&(W=1);var Z=c==="ArrowLeft"||c==="ArrowRight";if(S===void 0||D!==k&&!Z){b(o),ve(u,W);return}var q=S;if(Z){var ge=c==="ArrowLeft"?"left":"right";q=A(C,S,ge),q!==S&&o.preventDefault()}else c==="Delete"&&!B(C[S])?q=A(C,S,"right"):c==="Backspace"&&!B(C[S])&&(q=A(C,S,"left"));q!==S&&j(u,q,C),b(o),ve(u,W)},Pe=function(o){var u=o.target,c=function(){var D=u.selectionStart,k=u.selectionEnd,C=u.value;if(C===void 0&&(C=""),D===k){var S=A(C,D);S!==D&&j(u,S,C)}};c(),requestAnimationFrame(function(){c()}),s(o),ve(u)},Le=function(o){o.persist&&o.persist();var u=o.target,c=o.currentTarget;f.current=u,N.current.focusTimeout=setTimeout(function(){var D=u.selectionStart,k=u.selectionEnd,C=u.value;C===void 0&&(C="");var S=A(C,D);S!==D&&!(D===0&&k===C.length)&&j(u,S,C),I(Object.assign(Object.assign({},o),{currentTarget:c}))},0)},Me=function(o){f.current=null,clearTimeout(N.current.focusTimeout),clearTimeout(N.current.setCaretTimeout),T(o)},Ke=ne&&ur()?"numeric":void 0,xe=Object.assign({inputMode:Ke},F,{type:r,value:V,onChange:_e,onKeyDown:Fe,onMouseUp:Pe,onFocus:Le,onBlur:Me});if(a==="text")return n?re.createElement(re.Fragment,null,n(V,F)||null):re.createElement("span",Object.assign({},F,{ref:i}),V);if(t){var $e=t;return re.createElement($e,Object.assign({},xe,{ref:i}))}return re.createElement("input",Object.assign({},xe,{ref:i}))}function ye(e,r){var a=r.decimalScale,t=r.fixedDecimalScale,n=r.prefix;n===void 0&&(n="");var i=r.suffix;i===void 0&&(i="");var l=r.allowNegative,h=r.thousandsGroupStyle;if(h===void 0&&(h="thousand"),e===""||e==="-")return e;var y=se(r),w=y.thousandSeparator,p=y.decimalSeparator,g=a!==0&&e.indexOf(".")!==-1||a&&t,x=he(e,l),b=x.beforeDecimal,s=x.afterDecimal,I=x.addNegation;return a!==void 0&&(s=je(s,a,!!t)),w&&(b=ar(b,w,h)),n&&(b=n+b),i&&(s=s+i),I&&(b="-"+b),e=b+(g&&p||"")+s,e}function se(e){var r=e.decimalSeparator;r===void 0&&(r=".");var a=e.thousandSeparator,t=e.allowedDecimalSeparators;return a===!0&&(a=","),t||(t=[r,"."]),{decimalSeparator:r,thousandSeparator:a,allowedDecimalSeparators:t}}function mr(e,r){e===void 0&&(e="");var a=new RegExp("(-)"),t=new RegExp("(-)(.)*(-)"),n=a.test(e),i=t.test(e);return e=e.replace(/-/g,""),n&&!i&&r&&(e="-"+e),e}function hr(e,r){return new RegExp("(^-)|[0-9]|"+Te(e),"g")}function xr(e,r,a){return e===""?!0:!(r!=null&&r.match(/\d/))&&!(a!=null&&a.match(/\d/))&&typeof e=="string"&&!isNaN(Number(e))}function pr(e,r,a){var t;r===void 0&&(r=lr(e));var n=a.allowNegative,i=a.prefix;i===void 0&&(i="");var l=a.suffix;l===void 0&&(l="");var h=a.decimalScale,y=r.from,w=r.to,p=w.start,g=w.end,x=se(a),b=x.allowedDecimalSeparators,s=x.decimalSeparator,I=e[g]===s;if(ue(e)&&(e===i||e===l)&&r.lastValue==="")return e;if(g-p===1&&b.indexOf(e[p])!==-1){var T=h===0?"":s;e=e.substring(0,p)+T+e.substring(p+1,e.length)}var v=function(f,N,R){var E=!1,j=!1;i.startsWith("-")?E=!1:f.startsWith("--")?(E=!1,j=!0):l.startsWith("-")&&f.length===l.length?E=!1:f[0]==="-"&&(E=!0);var A=E?1:0;return j&&(A=2),A&&(f=f.substring(A),N-=A,R-=A),{value:f,start:N,end:R,hasNegation:E}},O=v(e,p,g),B=O.hasNegation;t=O,e=t.value,p=t.start,g=t.end;var K=v(r.lastValue,y.start,y.end),F=K.start,X=K.end,$=K.value,V=e.substring(p,g);e.length&&$.length&&(F>$.length-l.length||X<i.length)&&!(V&&l.startsWith(V))&&(e=$);var P=0;e.startsWith(i)?P+=i.length:p<i.length&&(P=p),e=e.substring(P),g-=P;var U=e.length,L=e.length-l.length;e.endsWith(l)?U=L:(g>L||g>e.length-l.length)&&(U=g),e=e.substring(0,U),e=mr(B?"-"+e:e,n),e=(e.match(hr(s))||[]).join("");var G=e.indexOf(s);e=e.replace(new RegExp(Te(s),"g"),function(f,N){return N===G?".":""});var H=he(e,n),Y=H.beforeDecimal,ne=H.afterDecimal,d=H.addNegation;return w.end-w.start<y.end-y.start&&Y===""&&I&&!parseFloat(ne)&&(e=d?"-":""),e}function br(e,r){var a=r.prefix;a===void 0&&(a="");var t=r.suffix;t===void 0&&(t="");var n=Array.from({length:e.length+1}).map(function(){return!0}),i=e[0]==="-";n.fill(!1,0,a.length+(i?1:0));var l=e.length;return n.fill(!1,l-t.length+1,l+1),n}function Sr(e){var r=se(e),a=r.thousandSeparator,t=r.decimalSeparator,n=e.prefix;n===void 0&&(n="");var i=e.allowNegative;if(i===void 0&&(i=!0),a===t)throw new Error(`
        Decimal separator can't be same as thousand separator.
        thousandSeparator: `+a+` (thousandSeparator = {true} is same as thousandSeparator = ",")
        decimalSeparator: `+t+` (default value for decimalSeparator is .)
     `);return n.startsWith("-")&&i&&(console.error(`
      Prefix can't start with '-' when allowNegative is true.
      prefix: `+n+`
      allowNegative: `+i+`
    `),i=!1),Object.assign(Object.assign({},e),{allowNegative:i})}function yr(e){e=Sr(e),e.decimalSeparator,e.allowedDecimalSeparators,e.thousandsGroupStyle;var r=e.suffix,a=e.allowNegative,t=e.allowLeadingZeros,n=e.onKeyDown;n===void 0&&(n=z);var i=e.onBlur;i===void 0&&(i=z);var l=e.thousandSeparator,h=e.decimalScale,y=e.fixedDecimalScale,w=e.prefix;w===void 0&&(w="");var p=e.defaultValue,g=e.value,x=e.valueIsNumericString,b=e.onValueChange,s=Ce(e,["decimalSeparator","allowedDecimalSeparators","thousandsGroupStyle","suffix","allowNegative","allowLeadingZeros","onKeyDown","onBlur","thousandSeparator","decimalScale","fixedDecimalScale","prefix","defaultValue","value","valueIsNumericString","onValueChange"]),I=se(e),T=I.decimalSeparator,v=I.allowedDecimalSeparators,O=function(d){return ye(d,e)},B=function(d,f){return pr(d,f,e)},K=te(g)?p:g,F=x??xr(K,w,r);te(g)?te(p)||(F=F||typeof p=="number"):F=F||typeof g=="number";var X=function(d){return Ie(d)?d:(typeof d=="number"&&(d=Re(d)),F&&typeof h=="number"?be(d,h,!!y):d)},$=Ae(X(g),X(p),!!F,O,B,b),V=$[0],P=V.numAsString,U=V.formattedValue,L=$[1],G=function(d){var f=d.target,N=d.key,R=f.selectionStart,E=f.selectionEnd,j=f.value;if(j===void 0&&(j=""),(N==="Backspace"||N==="Delete")&&E<w.length){d.preventDefault();return}if(R!==E){n(d);return}N==="Backspace"&&j[0]==="-"&&R===w.length+1&&a&&J(f,1),h&&y&&(N==="Backspace"&&j[R-1]===T?(J(f,R-1),d.preventDefault()):N==="Delete"&&j[R]===T&&d.preventDefault()),v!=null&&v.includes(N)&&j[R]===T&&J(f,R+1);var A=l===!0?",":l;N==="Backspace"&&j[R-1]===A&&J(f,R-1),N==="Delete"&&j[R]===A&&J(f,R+1),n(d)},H=function(d){var f=P;if(f.match(/\d/g)||(f=""),t||(f=nr(f)),y&&h&&(f=be(f,h,y)),f!==P){var N=ye(f,e);L({formattedValue:N,value:f,floatValue:parseFloat(f)},{event:d,source:oe.event})}i(d)},Y=function(d){return d===T?!0:ue(d)},ne=function(d){var f=d.currentValue,N=d.lastValue,R=d.formattedValue,E=d.currentValueIndex,j=d.formattedValueIndex,A=f[E],ee=R[j],ce=Ee(N,f),ie=ce.to,le=function(de){return B(de).indexOf(".")+w.length};return g===0&&y&&h&&f[ie.start]===T&&le(f)<E&&le(R)>j?!1:E>=ie.start&&E<ie.end&&v&&v.includes(A)&&ee===T?!0:A===ee};return Object.assign(Object.assign({},s),{value:U,valueIsNumericString:!1,isValidInputCharacter:Y,isCharacterSame:ne,onValueChange:L,format:O,removeFormatting:B,getCaretBoundary:function(d){return br(d,e)},onKeyDown:G,onBlur:H})}function wr(e){var r=yr(e);return re.createElement(gr,Object.assign({},r))}function Oe({color:e,size:r,variant:a,sx:t}){const n=We(),i=Ue(n,e||"primary"),{main:l}=i;return m.jsx(Ve,{sx:{width:r||8,height:r||8,borderRadius:"50%",bgcolor:a==="outlined"?"":l,...a==="outlined"&&{border:`1px solid ${l}`},...t}})}Oe.propTypes={color:Q.any,size:Q.number,variant:Q.string,sx:Q.any};function M(e,r,a,t,n){return{tracking_no:e,name:r,fat:a,carbs:t,protein:n}}const Vr=[M(84564564,"Camera Lens",40,2,40570),M(98764564,"Laptop",300,0,180139),M(98756325,"Mobile",355,1,90989),M(98652366,"Handset",50,1,10239),M(13286564,"Computer Accessories",100,1,83348),M(86739658,"TV",99,0,410780),M(13256498,"Keyboard",125,2,70999),M(98753263,"Mouse",89,2,10570),M(98753275,"Desktop",185,1,98063),M(98753291,"Chair",100,0,14001)];function we(e,r,a){return r[a]<e[a]?-1:r[a]>e[a]?1:0}function Nr(e,r){return e==="desc"?(a,t)=>we(a,t,r):(a,t)=>-we(a,t,r)}function Dr(e,r){const a=e.map((t,n)=>[t,n]);return a.sort((t,n)=>{const i=r(t[0],n[0]);return i!==0?i:t[1]-n[1]}),a.map(t=>t[0])}const Cr=[{id:"tracking_no",align:"left",disablePadding:!1,label:"Tracking No."},{id:"name",align:"left",disablePadding:!0,label:"Product Name"},{id:"fat",align:"right",disablePadding:!1,label:"Total Order"},{id:"carbs",align:"left",disablePadding:!1,label:"Status"},{id:"protein",align:"right",disablePadding:!1,label:"Total Amount"}];function Be({order:e,orderBy:r}){return m.jsx(Qe,{children:m.jsx(De,{children:Cr.map(a=>m.jsx(ae,{align:a.align,padding:a.disablePadding?"none":"normal",sortDirection:r===a.id?e:!1,children:a.label},a.id))})})}function ke({status:e}){let r,a;switch(e){case 0:r="warning",a="Pending";break;case 1:r="success",a="Approved";break;case 2:r="error",a="Rejected";break;default:r="primary",a="None"}return m.jsxs(He,{direction:"row",spacing:1,alignItems:"center",children:[m.jsx(Oe,{color:r}),m.jsx(Ne,{children:a})]})}function Ir(){const e="asc",r="tracking_no";return m.jsx(Ve,{children:m.jsx(ze,{sx:{width:"100%",overflowX:"auto",position:"relative",display:"block",maxWidth:"100%","& td, & th":{whiteSpace:"nowrap"}},children:m.jsxs(Xe,{"aria-labelledby":"tableTitle",children:[m.jsx(Be,{order:e,orderBy:r}),m.jsx(Je,{children:Dr(Vr,Nr(e,r)).map((a,t)=>{const n=`enhanced-table-checkbox-${t}`;return m.jsxs(De,{hover:!0,role:"checkbox",sx:{"&:last-child td, &:last-child th":{border:0}},tabIndex:-1,children:[m.jsx(ae,{component:"th",id:n,scope:"row",children:m.jsxs(Ge,{color:"secondary",children:[" ",a.tracking_no]})}),m.jsx(ae,{children:a.name}),m.jsx(ae,{align:"right",children:a.fat}),m.jsx(ae,{children:m.jsx(ke,{status:a.carbs})}),m.jsx(ae,{align:"right",children:m.jsx(wr,{value:a.protein,displayType:"text",thousandSeparator:!0,prefix:"$"})})]},a.tracking_no)})})]})})})}Be.propTypes={order:Q.any,orderBy:Q.string};ke.propTypes={status:Q.number};function Br(){return m.jsx(qe,{children:m.jsxs(fe,{item:!0,xs:12,md:7,lg:8,children:[m.jsxs(fe,{container:!0,alignItems:"center",justifyContent:"space-between",children:[m.jsx(fe,{item:!0,children:m.jsx(Ne,{variant:"h5",children:"Listing Page"})}),m.jsx(fe,{item:!0})]}),m.jsx(Ze,{sx:{mt:2},content:!1,children:m.jsx(Ir,{})})]})})}export{Br as default};
