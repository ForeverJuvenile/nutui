var e=Object.defineProperty,a=Object.prototype.hasOwnProperty,t=Object.getOwnPropertySymbols,s=Object.prototype.propertyIsEnumerable,l=(a,t,s)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):a[t]=s,i=(e,i)=>{for(var o in i||(i={}))a.call(i,o)&&l(e,o,i[o]);if(t)for(var o of t(i))s.call(i,o)&&l(e,o,i[o]);return e};import{c as o}from"./mobile.9957df61.js";import{a as c,C as n,A as r,B as p,r as g,o as d,c as m,f as u,F as f,h as b,t as h,z as y}from"./index.d870aa4d.js";const{createDemo:v}=o("swiper");var j=v({props:{},setup(){const e=c({page:2,page2:0,page3:0,page4:0,current:1,list:["https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/128047/5/6706/178631/5f068cefE53bff564/4dd870d8932daecf.jpg","https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/159602/22/7999/126515/6035f371E6f95bfee/559cb1ee48c962c9.jpg","https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/166846/13/7534/136440/60338b5cEd491d8b3/9e5527429136ab86.jpg","https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/145433/27/14059/141680/5facf066Ec402354c/530d5a316aed55fc.jpg"]});return i(i({},n(e)),{change:a=>{e.current=a+1}})}});const _=y();r("data-v-4df479d4");const w={class:"demo"},x=u("h2",null,"基本用法",-1),O={class:"demo-box"},E=u("h2",null,"自定义大小",-1),k={class:"demo-box"},C=u("h2",null,"自定义指示器",-1),P={class:"demo-box"},I={class:"page"},z=u("h2",null,"垂直方向",-1),A={class:"demo-box"};p();const B=_(((e,a,t,s,l,i)=>{const o=g("nut-swiper-item"),c=g("nut-swiper");return d(),m("div",w,[x,u("view",O,[u(c,{"init-page":e.page,"pagination-visible":!0,"pagination-color":"#426543"},{default:_((()=>[(d(!0),m(f,null,b(e.list,(e=>(d(),m(o,{key:e},{default:_((()=>[u("img",{src:e,alt:""},null,8,["src"])])),_:2},1024)))),128))])),_:1},8,["init-page"])]),E,u("view",k,[u(c,{"init-page":e.page2,loop:!1,width:"300"},{default:_((()=>[(d(!0),m(f,null,b(e.list,(e=>(d(),m(o,{key:e},{default:_((()=>[u("img",{src:e,alt:""},null,8,["src"])])),_:2},1024)))),128))])),_:1},8,["init-page"])]),C,u("view",P,[u(c,{"init-page":e.page3,loop:!0,onChange:e.change},{page:_((()=>[u("div",I,h(e.current)+"/4 ",1)])),default:_((()=>[(d(!0),m(f,null,b(e.list,(e=>(d(),m(o,{key:e},{default:_((()=>[u("img",{src:e,alt:""},null,8,["src"])])),_:2},1024)))),128))])),_:1},8,["init-page","onChange"])]),z,u("view",A,[u(c,{"init-page":e.page4,loop:!0,"auto-play":"3000",direction:"vertical",height:"150","pagination-visible":!0,style:{height:"150px"}},{default:_((()=>[(d(!0),m(f,null,b(e.list,(e=>(d(),m(o,{key:e},{default:_((()=>[u("img",{src:e,alt:""},null,8,["src"])])),_:2},1024)))),128))])),_:1},8,["init-page"])])])}));j.render=B,j.__scopeId="data-v-4df479d4";export default j;
