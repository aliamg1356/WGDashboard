import{b as a}from"./browser.js";import{L as n}from"./localeText.js";import{_ as c,j as r,a as d,c as i,b as e,d as l}from"./index.js";const p={name:"peerQRCode",components:{LocaleText:n},props:{peerConfigData:String},mounted(){a.toCanvas(document.querySelector("#qrcode"),this.peerConfigData,o=>{o&&console.error(o)})}},_={class:"peerSettingContainer w-100 h-100 position-absolute top-0 start-0"},m={class:"container d-flex h-100 w-100"},h={class:"m-auto modal-dialog-centered dashboardModal justify-content-center"},u={class:"card rounded-3 shadow"},f={class:"card-header bg-transparent d-flex align-items-center gap-2 border-0 p-4 pb-0"},b={class:"mb-0"},v={class:"card-body"},C={id:"qrcode",class:"rounded-3 shadow",ref:"qrcode"};function g(o,t,x,$,w,q){const s=r("LocaleText");return d(),i("div",_,[e("div",m,[e("div",h,[e("div",u,[e("div",f,[e("h4",b,[l(s,{t:"QR Code"})]),e("button",{type:"button",class:"btn-close ms-auto",onClick:t[0]||(t[0]=y=>this.$emit("close"))})]),e("div",v,[e("canvas",C,null,512)])])])])])}const Q=c(p,[["render",g]]);export{Q as default};
