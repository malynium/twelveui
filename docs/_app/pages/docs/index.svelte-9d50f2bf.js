import{S as we,i as pe,s as ve,C as Ae,e as h,t as A,c as _,a as d,h as N,d as n,b as u,g,I as o,j as ge,k as C,m as L,V as ke,G as x,W as Ee,z as Ne,N as ae,J as De,L as Ie,M as Se,w as Te,x as Ce,y as Le,q as ze,o as He,B as Me}from"../../chunks/vendor-b25cc763.js";/* empty css                                                       */function ye(a){let t,r=(a[0]?a[9]:a[8])+"",v;return{c(){t=h("span"),v=A(r),this.h()},l(i){t=_(i,"SPAN",{"aria-hidden":!0,class:!0});var b=d(t);v=N(b,r),b.forEach(n),this.h()},h(){u(t,"aria-hidden","true"),u(t,"class",a[7])},m(i,b){g(i,t,b),o(t,v)},p(i,b){b&769&&r!==(r=(i[0]?i[9]:i[8])+"")&&ge(v,r),b&128&&u(t,"class",i[7])},d(i){i&&n(t)}}}function Pe(a){let t,r,v,i,b,w,m,D,z,E,k,I,y,M=[{type:"checkbox"},{role:"switch"},{id:a[22]},a[13],{class:"cursor-pointer h-full w-full absolute top-0 left-0 opacity-[.0001]"}],S={};for(let e=0;e<M.length;e+=1)S=Ae(S,M[e]);let c=(a[9]||a[8])&&ye(a);return{c(){t=h("label"),r=A(a[5]),v=C(),i=h("input"),b=C(),w=h("span"),m=h("span"),E=C(),c&&c.c(),this.h()},l(e){t=_(e,"LABEL",{class:!0,for:!0});var f=d(t);r=N(f,a[5]),v=L(f),i=_(f,"INPUT",{type:!0,role:!0,id:!0,class:!0}),b=L(f),w=_(f,"SPAN",{"aria-hidden":!0,class:!0});var P=d(w);m=_(P,"SPAN",{class:!0});var H=d(m);H.forEach(n),P.forEach(n),E=L(f),c&&c.l(f),f.forEach(n),this.h()},h(){ke(i,S),u(m,"class",D=""+(a[17]+" "+a[16]+" "+a[21]+" "+a[20]+" "+a[10]+" "+(a[0]?`${a[19]} ${a[12]}`:`translate-x-0 ${a[11]}`)+" rounded-full absolute")),u(w,"aria-hidden","true"),u(w,"class",z=""+(a[15]+" "+a[14]+" "+a[2]+" "+(a[0]?`${a[4]}`:`${a[3]}`)+" flex relative box-content border-2 border-gray-600 rounded-full outline-none "+a[1])),u(t,"class",k="twelveui-switch-ring block relative "+a[6]),u(t,"for",a[22])},m(e,f){g(e,t,f),o(t,r),o(t,v),o(t,i),i.autofocus&&i.focus(),a[26](i),o(t,b),o(t,w),o(w,m),o(t,E),c&&c.m(t,null),I||(y=[x(i,"keyup",a[24]),x(i,"click",a[23]),x(t,"keyup",Ee(a[24])),x(t,"click",Ee(a[23]))],I=!0)},p(e,[f]){f&32&&ge(r,e[5]),ke(i,S=Ne(M,[{type:"checkbox"},{role:"switch"},{id:e[22]},f&8192&&e[13],{class:"cursor-pointer h-full w-full absolute top-0 left-0 opacity-[.0001]"}])),f&728065&&D!==(D=""+(e[17]+" "+e[16]+" "+e[21]+" "+e[20]+" "+e[10]+" "+(e[0]?`${e[19]} ${e[12]}`:`translate-x-0 ${e[11]}`)+" rounded-full absolute"))&&u(m,"class",D),f&49183&&z!==(z=""+(e[15]+" "+e[14]+" "+e[2]+" "+(e[0]?`${e[4]}`:`${e[3]}`)+" flex relative box-content border-2 border-gray-600 rounded-full outline-none "+e[1]))&&u(w,"class",z),e[9]||e[8]?c?c.p(e,f):(c=ye(e),c.c(),c.m(t,null)):c&&(c.d(1),c=null),f&64&&k!==(k="twelveui-switch-ring block relative "+e[6])&&u(t,"class",k)},i:ae,o:ae,d(e){e&&n(t),a[26](null),c&&c.d(),I=!1,De(y)}}}const We=/ /ig;function Ue(a,t,r){const v=Ie();let i=[],b="h-6",w="w-12",m="h-5",D="w-5",z="left-0.5",E="top-0.5",k,I="translate-x-6",{class:y=""}=t,{bg_class:M="",bg_off_class:S="",bg_on_class:c="",label:e,label_class:f="",size:P="md",state_class:H="",state_off:j=void 0,state_on:B=void 0,switcher_class:O="!!twelveui-bg-black",switcher_off_class:X="",switcher_on_class:R="",value:W=!1}=t,T=e.replace(We,"_").toLowerCase();const U=()=>{let l=k.getAttribute("aria-checked")==="true";r(0,W=!l),k.setAttribute("aria-checked",W.toString()),v("click")},F=l=>{(l.key==="Enter"||l.target.nodeName==="LABEL"&&l.key===" ")&&U()};switch(P){case"sm":I="translate-x-4",b="h-4",w="w-8",m="h-3",D="w-3";break;case"lg":I="translate-x-8",b="h-8",w="w-16",m="h-7",D="w-7";break}i["aria-checked"]=W;function Q(l){Se[l?"unshift":"push"](()=>{k=l,r(18,k)})}return a.$$set=l=>{"class"in l&&r(1,y=l.class),"bg_class"in l&&r(2,M=l.bg_class),"bg_off_class"in l&&r(3,S=l.bg_off_class),"bg_on_class"in l&&r(4,c=l.bg_on_class),"label"in l&&r(5,e=l.label),"label_class"in l&&r(6,f=l.label_class),"size"in l&&r(25,P=l.size),"state_class"in l&&r(7,H=l.state_class),"state_off"in l&&r(8,j=l.state_off),"state_on"in l&&r(9,B=l.state_on),"switcher_class"in l&&r(10,O=l.switcher_class),"switcher_off_class"in l&&r(11,X=l.switcher_off_class),"switcher_on_class"in l&&r(12,R=l.switcher_on_class),"value"in l&&r(0,W=l.value)},[W,y,M,S,c,e,f,H,j,B,O,X,R,i,b,w,m,D,k,I,z,E,T,U,F,P,Q]}class je extends we{constructor(t){super();pe(this,t,Ue,Pe,ve,{class:1,bg_class:2,bg_off_class:3,bg_on_class:4,label:5,label_class:6,size:25,state_class:7,state_off:8,state_on:9,switcher_class:10,switcher_off_class:11,switcher_on_class:12,value:0})}}function Be(a){let t,r,v,i,b,w,m,D,z,E,k,I,y,M,S,c,e,f,P,H,j,B,O,X,R,W,T,U,F,Q,l,G,J,$,K,ee,se,q,Y;return q=new je({props:{label:"Cookies",label_class:"w-[230px] box-content inline-flex space-x-3 items-center p-1 m-6 rounded-md outline-none text-gray-800 hover:m-[22px] hover:cursor-pointer hover:border-2 hover:bg-blue-200 hover:border-blue-500 focus:m-[22px] focus:border-2 focus:bg-blue-200 focus:border-blue-500",state_class:"text-sm text-gray-700",switcher_on_class:"bg-pink-600"}}),{c(){t=h("h2"),r=A("Installation"),v=C(),i=h("pre"),b=A("# npm install twelveui"),w=C(),m=h("h2"),D=A("Usage Example"),z=C(),E=h("pre"),k=A(`<script>
import { NavMenu, MenuIcon } from 'twelveui'  
<\/script>`),I=C(),y=h("h2"),M=A("Components"),S=C(),c=h("section"),e=h("h3"),f=A("Disclosure"),P=C(),H=h("dl"),j=h("dt"),B=h("a"),O=A("NavMenu"),X=h("dd"),R=A('A series of links, which are aligned horizontally by default. When you provide "mobile" classes, the menu collapses and is shown/hidden by icons. The default "closed" icon is a three-line hamburger. The default "opened" icon is an X.'),W=C(),T=h("section"),U=h("h3"),F=A("Input"),Q=C(),l=h("dl"),G=h("dt"),J=h("a"),$=A("Switch"),K=h("dd"),ee=A("A pill shaped button, which switches between 'on' and 'off' states."),se=C(),Te(q.$$.fragment),this.h()},l(s){t=_(s,"H2",{class:!0});var p=d(t);r=N(p,"Installation"),p.forEach(n),v=L(s),i=_(s,"PRE",{class:!0});var ne=d(i);b=N(ne,"# npm install twelveui"),ne.forEach(n),w=L(s),m=_(s,"H2",{class:!0});var ie=d(m);D=N(ie,"Usage Example"),ie.forEach(n),z=L(s),E=_(s,"PRE",{class:!0});var oe=d(E);k=N(oe,`<script>
import { NavMenu, MenuIcon } from 'twelveui'  
<\/script>`),oe.forEach(n),I=L(s),y=_(s,"H2",{class:!0});var re=d(y);M=N(re,"Components"),re.forEach(n),S=L(s),c=_(s,"SECTION",{});var Z=d(c);e=_(Z,"H3",{class:!0});var ce=d(e);f=N(ce,"Disclosure"),ce.forEach(n),P=L(Z),H=_(Z,"DL",{});var le=d(H);j=_(le,"DT",{class:!0});var fe=d(j);B=_(fe,"A",{href:!0});var ue=d(B);O=N(ue,"NavMenu"),ue.forEach(n),fe.forEach(n),X=_(le,"DD",{class:!0});var he=d(X);R=N(he,'A series of links, which are aligned horizontally by default. When you provide "mobile" classes, the menu collapses and is shown/hidden by icons. The default "closed" icon is a three-line hamburger. The default "opened" icon is an X.'),he.forEach(n),le.forEach(n),Z.forEach(n),W=L(s),T=_(s,"SECTION",{});var V=d(T);U=_(V,"H3",{class:!0});var _e=d(U);F=N(_e,"Input"),_e.forEach(n),Q=L(V),l=_(V,"DL",{});var te=d(l);G=_(te,"DT",{class:!0});var de=d(G);J=_(de,"A",{href:!0});var be=d(J);$=N(be,"Switch"),be.forEach(n),de.forEach(n),K=_(te,"DD",{class:!0});var me=d(K);ee=N(me,"A pill shaped button, which switches between 'on' and 'off' states."),me.forEach(n),te.forEach(n),se=L(V),Ce(q.$$.fragment,V),V.forEach(n),this.h()},h(){u(t,"class","mb-2 h3"),u(i,"class","block p-4 bg-gray-700 text-white rounded-xl"),u(m,"class","mb-2 h3"),u(E,"class","block p-4 bg-gray-700 text-white rounded-xl overflow-auto"),u(y,"class","h3"),u(e,"class","p font-thin tracking-wider uppercase mt-5 text-gray-500"),u(B,"href","docs/components/navmenu"),u(j,"class","p mt-2 text-blue-600"),u(X,"class","ml-4"),u(U,"class","p font-thin tracking-wider uppercase mt-5 text-gray-500"),u(J,"href","docs/components/switch"),u(G,"class","p mt-2 text-blue-600"),u(K,"class","ml-4")},m(s,p){g(s,t,p),o(t,r),g(s,v,p),g(s,i,p),o(i,b),g(s,w,p),g(s,m,p),o(m,D),g(s,z,p),g(s,E,p),o(E,k),g(s,I,p),g(s,y,p),o(y,M),g(s,S,p),g(s,c,p),o(c,e),o(e,f),o(c,P),o(c,H),o(H,j),o(j,B),o(B,O),o(H,X),o(X,R),g(s,W,p),g(s,T,p),o(T,U),o(U,F),o(T,Q),o(T,l),o(l,G),o(G,J),o(J,$),o(l,K),o(K,ee),o(T,se),Le(q,T,null),Y=!0},p:ae,i(s){Y||(ze(q.$$.fragment,s),Y=!0)},o(s){He(q.$$.fragment,s),Y=!1},d(s){s&&n(t),s&&n(v),s&&n(i),s&&n(w),s&&n(m),s&&n(z),s&&n(E),s&&n(I),s&&n(y),s&&n(S),s&&n(c),s&&n(W),s&&n(T),Me(q)}}}function Xe(a){return[]}class Re extends we{constructor(t){super();pe(this,t,Xe,Be,ve,{})}}export{Re as default};
