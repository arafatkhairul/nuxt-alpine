import{u as m}from"./x94uYbpZ.js";import{d as v,r as h,I as y,b as s,c as o,M as i,f as p,e as t,F as f,Z as C,p as k,i as g,t as I,l as S}from"./CyPUwZUZ.js";const n=e=>(k("data-v-a5aeccd1"),e=e(),g(),e),b={key:0,class:"copied"},w=n(()=>t("div",{class:"scrim"},null,-1)),x=n(()=>t("div",{class:"content"}," Copied! ",-1)),B=[w,x],T=n(()=>t("div",{class:"header"},[t("div",{class:"controls"},[t("div"),t("div"),t("div")]),t("div",{class:"title"}," Bash ")],-1)),F={class:"window"},N=n(()=>t("span",{class:"sign"},"$",-1)),V={class:"content"},j={key:1,class:"prompt"},q=v({__name:"Terminal",props:{content:{type:[Array,String],required:!0}},setup(e){const a=e,{copy:l}=m(),c=h("init"),d=y(()=>typeof a.content=="string"?[a.content]:a.content),_=u=>{l(d.value.join(`
`)).then(()=>{c.value="copied",setTimeout(()=>{c.value="init"},1e3)}).catch(()=>{console.warn("Couldn't copy to clipboard!")})};return(u,A)=>(s(),o("div",{class:"terminal",onClick:_},[i(c)==="copied"?(s(),o("div",b,B)):p("",!0),T,t("div",F,[(s(!0),o(f,null,C(i(d),r=>(s(),o("span",{key:r,class:"line"},[N,t("span",V,I(r),1)]))),128))]),i(c)!=="copied"?(s(),o("div",j," Click to copy ")):p("",!0)]))}}),L=S(q,[["__scopeId","data-v-a5aeccd1"]]);export{L as default};
