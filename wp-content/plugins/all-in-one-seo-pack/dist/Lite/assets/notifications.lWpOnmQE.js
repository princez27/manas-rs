import"./js/vue2.RHmKp0B5.js";import{c as s,t as a,G as r,d as c,o as l,X as p}from"./js/vue.esm-bundler.CWQFYt9y.js";import{l as u}from"./js/links.rndHrQjc.js";import{_ as f}from"./js/_plugin-vue_export-helper.BN1snXvA.js";import{t as m}from"./js/translations.Buvln_cw.js";import"./js/default-i18n.Bd0Z306Z.js";import"./js/helpers.BYd0a-KO.js";const d={data(){return{interval:null,display:!1,strings:{newNotifications:this.$t.__("You have new notifications!",this.$td)}}},methods:{showNotificationsPopup(){if(this.interval&&window.aioseoNotifications&&parseInt(window.aioseoNotifications.newNotifications)){this.display=!0;const o=document.querySelector("#wp-admin-bar-aioseo-main");o&&o.classList.add("new-notifications")}},hideNotificationsPopup(){this.interval=null,setTimeout(()=>{this.display=!1;const o=document.querySelector("#wp-admin-bar-aioseo-main");o&&o.classList.remove("new-notifications")},500)}},created(){this.interval=setInterval(this.showNotificationsPopup,500),this.showNotificationsPopup(),setTimeout(()=>{this.interval=null,this.display=!1},5e3)}};function w(o,i,y,N,e,t){return e.display?(l(),s("div",{key:0,onClick:i[0]||(i[0]=r((...n)=>t.hideNotificationsPopup&&t.hideNotificationsPopup(...n),["stop"])),onMouseover:i[1]||(i[1]=(...n)=>t.hideNotificationsPopup&&t.hideNotificationsPopup(...n)),class:"aioseo-menu-new-notifications"},a(e.strings.newNotifications),33)):c("",!0)}const h=f(d,[["render",w]]),_=document.querySelector("#aioseo-menu-new-notifications");if(_){const o=p({...h,name:"Standalone/Notifications"});u(o),o.config.globalProperties.$t=m,o.config.globalProperties.$td="all-in-one-seo-pack",o.config.globalProperties.$tdPro="aioseo-pro",o.mount("#aioseo-menu-new-notifications")}
