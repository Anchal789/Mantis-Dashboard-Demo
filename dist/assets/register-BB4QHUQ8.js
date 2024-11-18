import{r as j,j as e,aa as l,a_ as m,U as F,I as S,W as B,ac as I,p as x,ak as y,b1 as g,b2 as k,$ as A}from"./index-CwwcE1Lu.js";import{F as W,c as q,a as u,E as C,b as R,A as D}from"./EyeInvisibleOutlined-B5W3koPc.js";import{G as i}from"./Grid2-m8KYljwf.js";import{I as p,F as o}from"./InputLabel-BfHgiDVh.js";const L=s=>new RegExp(/[0-9]/).test(s),N=s=>new RegExp(/[a-z]/).test(s)&&new RegExp(/[A-Z]/).test(s),$=s=>new RegExp(/[!#@$%^&*)(+=._-]/).test(s),M=s=>s<2?{label:"Poor",color:"error.main"}:s<3?{label:"Weak",color:"warning.main"}:s<4?{label:"Normal",color:"warning.dark"}:s<5?{label:"Good",color:"success.main"}:s<6?{label:"Strong",color:"success.dark"}:{label:"Poor",color:"error.main"},G=s=>{let r=0;return s.length>5&&(r+=1),s.length>7&&(r+=1),L(s)&&(r+=1),$(s)&&(r+=1),N(s)&&(r+=1),r};function O(){const[s,r]=j.useState(),[h,b]=j.useState(!1),v=()=>{b(!h)},P=n=>{n.preventDefault()},f=n=>{const t=G(n);r(M(t))};return j.useEffect(()=>{f("")},[]),e.jsx(e.Fragment,{children:e.jsx(W,{initialValues:{firstname:"",lastname:"",email:"",company:"",password:"",submit:null},validationSchema:q().shape({firstname:u().max(255).required("First Name is required"),lastname:u().max(255).required("Last Name is required"),email:u().email("Must be a valid email").max(255).required("Email is required"),password:u().max(255).required("Password is required")}),children:({errors:n,handleBlur:t,handleChange:c,handleSubmit:z,isSubmitting:E,touched:a,values:d})=>e.jsx("form",{noValidate:!0,onSubmit:z,children:e.jsxs(i,{container:!0,spacing:3,children:[e.jsxs(i,{size:{xs:12,md:6},children:[e.jsxs(l,{spacing:1,children:[e.jsx(p,{htmlFor:"firstname-signup",children:"First Name*"}),e.jsx(m,{id:"firstname-login",type:"firstname",value:d.firstname,name:"firstname",onBlur:t,onChange:c,placeholder:"John",fullWidth:!0,error:!!(a.firstname&&n.firstname)})]}),a.firstname&&n.firstname&&e.jsx(o,{error:!0,id:"helper-text-firstname-signup",children:n.firstname})]}),e.jsxs(i,{size:{xs:12,md:6},children:[e.jsxs(l,{spacing:1,children:[e.jsx(p,{htmlFor:"lastname-signup",children:"Last Name*"}),e.jsx(m,{fullWidth:!0,error:!!(a.lastname&&n.lastname),id:"lastname-signup",type:"lastname",value:d.lastname,name:"lastname",onBlur:t,onChange:c,placeholder:"Doe",inputProps:{}})]}),a.lastname&&n.lastname&&e.jsx(o,{error:!0,id:"helper-text-lastname-signup",children:n.lastname})]}),e.jsxs(i,{size:12,children:[e.jsxs(l,{spacing:1,children:[e.jsx(p,{htmlFor:"company-signup",children:"Company"}),e.jsx(m,{fullWidth:!0,error:!!(a.company&&n.company),id:"company-signup",value:d.company,name:"company",onBlur:t,onChange:c,placeholder:"Demo Inc.",inputProps:{}})]}),a.company&&n.company&&e.jsx(o,{error:!0,id:"helper-text-company-signup",children:n.company})]}),e.jsxs(i,{size:12,children:[e.jsxs(l,{spacing:1,children:[e.jsx(p,{htmlFor:"email-signup",children:"Email Address*"}),e.jsx(m,{fullWidth:!0,error:!!(a.email&&n.email),id:"email-login",type:"email",value:d.email,name:"email",onBlur:t,onChange:c,placeholder:"demo@company.com",inputProps:{}})]}),a.email&&n.email&&e.jsx(o,{error:!0,id:"helper-text-email-signup",children:n.email})]}),e.jsxs(i,{size:12,children:[e.jsxs(l,{spacing:1,children:[e.jsx(p,{htmlFor:"password-signup",children:"Password"}),e.jsx(m,{fullWidth:!0,error:!!(a.password&&n.password),id:"password-signup",type:h?"text":"password",value:d.password,name:"password",onBlur:t,onChange:w=>{c(w),f(w.target.value)},endAdornment:e.jsx(F,{position:"end",children:e.jsx(S,{"aria-label":"toggle password visibility",onClick:v,onMouseDown:P,edge:"end",color:"secondary",children:h?e.jsx(C,{}):e.jsx(R,{})})}),placeholder:"******",inputProps:{}})]}),a.password&&n.password&&e.jsx(o,{error:!0,id:"helper-text-password-signup",children:n.password}),e.jsx(B,{fullWidth:!0,sx:{mt:2},children:e.jsxs(i,{container:!0,spacing:2,alignItems:"center",children:[e.jsx(i,{children:e.jsx(I,{sx:{bgcolor:s==null?void 0:s.color,width:85,height:8,borderRadius:"7px"}})}),e.jsx(i,{children:e.jsx(x,{variant:"subtitle1",fontSize:"0.75rem",children:s==null?void 0:s.label})})]})})]}),e.jsx(i,{size:12,children:e.jsxs(x,{variant:"body2",children:["By Signing up, you agree to our  ",e.jsx(y,{variant:"subtitle2",component:g,to:"#",children:"Terms of Service"}),"  and  ",e.jsx(y,{variant:"subtitle2",component:g,to:"#",children:"Privacy Policy"})]})}),n.submit&&e.jsx(i,{size:12,children:e.jsx(o,{error:!0,children:n.submit})}),e.jsx(i,{size:12,children:e.jsx(k,{children:e.jsx(A,{disableElevation:!0,disabled:E,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"primary",children:"Create Account"})})})]})})})})}function J(){return e.jsx(D,{children:e.jsxs(i,{container:!0,spacing:3,children:[e.jsx(i,{size:12,children:e.jsxs(l,{direction:"row",justifyContent:"space-between",alignItems:"baseline",sx:{mb:{xs:-.5,sm:.5}},children:[e.jsx(x,{variant:"h3",children:"Sign up"}),e.jsx(x,{component:g,to:"/login",variant:"body1",sx:{textDecoration:"none"},color:"primary",children:"Already have an account?"})]})}),e.jsx(i,{size:12,children:e.jsx(O,{})})]})})}export{J as default};
