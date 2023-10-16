import{a as V,m as z,u as A,r as g,c as f,o as P,p as q,l as E,b as i,d as w,w as F,e as t,j as u,f as m,g as p,q as k,F as L,h as M,t as n,k as U,i as x,n as S}from"./index-fa2646c2.js";import{_ as G}from"./Master-4e91a4d3.js";import{_ as H}from"./CardProduct-b5326ae8.js";import{_ as J}from"./Loading-72995cd2.js";const K={class:"w-[95%] md:w-[80%] mx-auto mt-5"},O=t("i",{class:"bi bi-arrow-left text-white px-2 py-1 rounded hover:bg-black/70 bg-accent text-xl"},null,-1),Q=[O],W={key:1,class:"w-[95%] mx-auto mt-3 flex justify-center items-center flex-wrap pb-5 sm:pb-0 md:pb-10 sm:pt-6 f-poppins"},X={class:"w-full sm:w-6/12 lg:w-6/12 mx-auto"},Y={class:"w-full sm:w-[270px] md:w-[350px] lg:w-[450px] lg:me-10 mx-auto block"},Z={class:"group relative"},tt=["src"],et=t("i",{class:"bi bi-arrows-angle-expand text-white text-3xl"},null,-1),st=[et],ot={class:"w-full mx-auto flex justify-center sm:justify-start items-center flex-wrap mt-2"},lt=["onClick","src"],at={class:"w-[95%] sm:w-6/12 lg:w-6/12 f-poppins mt-5 sm:mt-0 md:ps-5 lg:ps-0"},it={class:"text-tpri font-semibold text-lg md:text-xl mb-4"},rt={class:"flex items-center mb-2"},ct={class:"text-tsec font-medium text-sm"},nt={class:"text-tpri pb-4 md:w-10/12 border-b border-bpri"},dt={class:"text-tpri text-sm mt-6"},ut=t("i",{class:"bi bi-star me-2 text-xs ms-2 text-accent"},null,-1),mt={class:"text-tpri text-sm"},pt=t("i",{class:"bi bi-box me-2 text-xs ms-2 text-accent"},null,-1),xt={class:"font-semibold"},vt={class:"text-tpri text-lg font-semibold mt-4 ms-2"},_t={class:"flex justify-start items-center mt-4"},bt=t("i",{class:"bi bi-cart-fill me-2 group-hover:text-accent"},null,-1),ht={key:2,class:"bg-bg2 pb-16 pt-10 mt-12"},gt={class:"w-[95%] md:w-10/12 mx-auto f-poppins mb-14"},ft=t("h1",{class:"text-tpri font-semibold text-lg lg:text-[20px] text-center"},"Similar Products",-1),wt={class:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-5 mt-8"},kt={class:"text-end"},yt=t("i",{class:"bi bi-x-lg"},null,-1),Ct=[yt],$t={class:"flex justify-center items-start w-full h-full relative"},jt=["src"],Ft=t("i",{class:"bi bi-chevron-left"},null,-1),St=[Ft],Bt=t("i",{class:"bi bi-chevron-right"},null,-1),Dt=[Bt],At={__name:"Detail",setup(It){const r=V(),v=z(),B=A();let d=v.params.id,_=v.params.cat;const b=g(!0),e=f(()=>r.getters.detail),h=f(()=>r.getters.similars),y=f(()=>r.getters.myFavItems.map(l=>l.id)),D=l=>r.dispatch("toggleFav",l),C=l=>{b.value=!0,r.dispatch("getDetail",l),setTimeout(()=>b.value=!1,350)},$=(l,s)=>{r.dispatch("getSimilar",{id:l,cat:s})},I=l=>{r.dispatch("addToCart",l)};P(()=>{C(d),$(d,_)}),q(()=>{d=v.params.id,_=v.params.cat,C(d),$(d,_)});let a=g(!1),o=g(0);const N=()=>{o.value>0?o.value-=1:o.value=e.value.images.length-1},R=()=>{o.value<e.value.images.length-1?o.value+=1:o.value=0};return(l,s)=>{const T=E("router-link");return i(),w(G,null,{default:F(()=>[t("div",K,[t("button",{onClick:s[0]||(s[0]=c=>u(B).back())},Q)]),b.value?(i(),w(J,{key:0})):m("",!0),e.value?(i(),p("div",W,[t("div",X,[t("div",Y,[t("div",Z,[t("img",{class:"h-[320px] object-cover rounded-md shadow border border-bpri mx-auto",src:e.value.images?e.value.images[u(o)]:e.value.thumbnail,alt:"product"},null,8,tt),t("div",{onClick:s[1]||(s[1]=c=>k(a)?a.value=!0:a=!0),class:"hidden absolute top-0 left-0 w-full h-full bg-slate-800/60 group-hover:flex justify-center items-center cursor-pointer"},st)]),t("div",ot,[(i(!0),p(L,null,M(e.value.images,(c,j)=>(i(),p("div",{key:c,class:""},[t("img",{onClick:Nt=>k(o)?o.value=j:o=j,src:c,class:"w-[65px] h-[67px] sm:w-[78px] sm:h-[80px] object-cover rounded shadow border border-bpri hover:opacity-75 cursor-pointer mb-[2px]",alt:"product image"},null,8,lt)]))),128))])])]),t("div",at,[t("h1",it,n(e.value.title),1),t("div",rt,[t("h1",ct,"Brand : "+n(e.value.brand),1),U(T,{to:`/search?type=cat&data=${e.value.category}`,class:"text-xs text-tsec font-medium ms-4 border border-bpri rounded px-1 hover:bg-black/50 hover:text-white"},{default:F(()=>[x("#"+n(e.value.category),1)]),_:1},8,["to"])]),t("p",nt,n(e.value.description),1),t("h1",dt,[ut,x("Rating : "+n(e.value.rating),1)]),t("h1",mt,[pt,x("Stock : "),t("span",xt,n(e.value.stock),1),x(" items left")]),t("h1",vt,"Price : "+n(e.value.price)+"$",1),t("div",_t,[t("button",{onClick:s[2]||(s[2]=c=>I(e.value)),class:"ms-2 px-4 py-1 rounded-sm bg-accent text-white font-medium hover:bg-black/70 text-sm md:text-base group"},[bt,x("Add to Cart")]),t("button",{title:"Add to Favourite",onClick:s[3]||(s[3]=c=>D(e.value)),class:"ms-8 sm:ms-12 text-tpri pb-[2px] pt-[6px] px-2 rounded border border-bpri hover:border-accent"},[t("i",{class:S([{"bi-heart-fill text-accent":y.value.includes(e.value.id),"bi-heart text-tpri":!y.value.includes(e.value.id)},"bi hover:text-accent"])},null,2)])])])])):m("",!0),h.value.length>0?(i(),p("div",ht,[t("div",gt,[ft,t("div",wt,[h.value?(i(),w(H,{key:0,datas:h.value},null,8,["datas"])):m("",!0)])])])):m("",!0),t("div",{class:S([{block:u(a),hidden:!u(a)},"fixed z-40 top-0 left-0 w-full h-screen bg-zinc-900/90 backdrop-blur-[1px]"])},[t("div",kt,[t("button",{onClick:s[4]||(s[4]=c=>k(a)?a.value=!1:a=!1),class:"text-3xl me-3 mt-3 text-white hover:text-accent"},Ct)]),t("div",$t,[e.value.images?(i(),p("img",{key:0,class:"object-cover h-[90vh] rounded-md",src:e.value.images[u(o)],alt:"image"},null,8,jt)):m("",!0),t("button",{onClick:N,class:"absolute left-0 top-[40%] text-3xl md:text-4xl text-accent hover:bg-accent hover:text-white rounded-full p-1"},St),t("button",{onClick:R,class:"absolute right-0 top-[40%] text-3xl md:text-4xl text-accent hover:bg-accent hover:text-white rounded-full p-1"},Dt)])],2)]),_:1})}}};export{At as default};