var e=Object.defineProperty,l=Object.prototype.hasOwnProperty,t=Object.getOwnPropertySymbols,u=Object.prototype.propertyIsEnumerable,n=(l,t,u)=>t in l?e(l,t,{enumerable:!0,configurable:!0,writable:!0,value:u}):l[t]=u,s=(e,s)=>{for(var i in s||(s={}))l.call(s,i)&&n(e,i,s[i]);if(t)for(var i of t(s))u.call(s,i)&&n(e,i,s[i]);return e};import{c as i}from"./mobile.4f5c2ce5.js";import{a,C as m,A as o,B as r,r as d,o as c,c as p,f,z as v,j as h}from"./index.d870aa4d.js";const{createDemo:b}=i("menu");var y=b({props:{},setup(){const e=a({title:"热门推荐",menuList:[{value:"手机"},{value:"电脑"},{value:"家用电器"},{value:"日用百货"}],menuList2:[{value:"热门推荐",id:111},{value:"手机数码",id:112},{value:"电脑办公",id:113},{value:"美妆护肤",id:114},{value:"个护清洁",id:115},{value:"汽车生活",id:116},{value:"京东超市",id:117},{value:"母婴童装",id:118}]});return s(s({},m(e)),{getChecked:(e,l)=>{alert("选择菜单选项："+l),console.log(11,e,l)},alertText:(e,l)=>{console.log(e,l),"title"==l?alert("菜单标题点击："+e):alert("禁用操作")}})}});const L=v();o("data-v-6262726d");const g={class:"demo full menu-demo"},_=f("h2",null,"基础用法",-1),C=f("h2",null,"多列展示",-1),k=f("h2",null,"禁用操作",-1),j=f("p",{class:"tips"},"`disabled` 属性可对菜单列表进行禁用操作。`autoClose` 属性控制下拉菜单列表是否选择后自动收起，默认自动收起。",-1),x=f("h2",null,"禁止蒙层展示",-1),O=f("p",{class:"tips"},"属性`hasMask`控制是否有蒙层，默认为 `true`展示蒙层 ",-1),M=f("h2",null,"点击事件",-1),w=f("p",{class:"tips"},"标题点击事件`menu-click`，菜单列表选择点击事件`change`",-1),P=f("h2",null,"自定义内容",-1),T={class:"user-style"},z=h("确认提交");r();const I=L(((e,l,t,u,n,s)=>{const i=d("nut-menu-item"),a=d("nut-menu"),m=d("nut-cell"),o=d("nut-button");return c(),p("div",g,[_,f(a,null,{default:L((()=>[f(i,{"menu-list":e.menuList,title:"最新商品"},null,8,["menu-list"]),f(i,{"menu-list":e.menuList,title:e.title},null,8,["menu-list","title"])])),_:1}),C,f(a,null,{default:L((()=>[f(i,{class:"base-style","menu-list":e.menuList2,title:"单列展示","multi-style":"1","max-height":"200"},null,8,["menu-list"]),f(i,{"menu-list":e.menuList2,title:"双列展示","multi-style":"2"},null,8,["menu-list"]),f(i,{"menu-list":e.menuList2,title:"三列展示","multi-style":"3"},null,8,["menu-list"])])),_:1}),k,j,f(a,null,{default:L((()=>[f(i,{"menu-list":e.menuList,title:"最新商品"},null,8,["menu-list"]),f(i,{"menu-list":e.menuList,title:"禁止自动收起","auto-close":!1},null,8,["menu-list"]),f(i,{"menu-list":e.menuList2,title:"筛选",disabled:""},null,8,["menu-list"])])),_:1}),x,O,f(a,{"has-mask":!1},{default:L((()=>[f(i,{"menu-list":e.menuList,title:"最新商品"},null,8,["menu-list"]),f(i,{"menu-list":e.menuList,title:e.title},null,8,["menu-list","title"])])),_:1}),M,w,f(a,null,{default:L((()=>[f(i,{"menu-list":e.menuList,title:"选择菜单列表项","multi-style":"2",onMenuClick:l[1]||(l[1]=l=>e.alertText(l,"title")),onChange:e.getChecked},null,8,["menu-list","onChange"]),f(i,{"menu-list":e.menuList2,title:"选中标题触发",disabled:"",onMenuClick:e.alertText},null,8,["menu-list","onMenuClick"])])),_:1}),P,f(a,null,{default:L((()=>[f(i,{title:"自定义选项"},{default:L((()=>[f("div",T,[f(m,{title:"我是标题",desc:"描述文字"}),f(m,null,{default:L((()=>[f(o,{size:"large",type:"primary"},{default:L((()=>[z])),_:1})])),_:1})])])),_:1})])),_:1})])}));y.render=I,y.__scopeId="data-v-6262726d";export default y;
