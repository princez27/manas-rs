import{c as v,r as _,u as A,f as u}from"./links.rndHrQjc.js";import{a as n}from"./addons.CFb2IwD4.js";import{C as b}from"./Caret.iRBf3wcH.js";import{C as y}from"./Index.XNbBlAFo.js";import{x as c,o as g,l as h,m as o,D as r,t as s,d as x,C as L}from"./vue.esm-bundler.CWQFYt9y.js";import{_ as k}from"./_plugin-vue_export-helper.BN1snXvA.js";const C={setup(){return{addonsStore:v(),pluginsStore:_(),rootStore:A()}},emits:["addon-activated"],components:{CoreAlert:b,Cta:y},props:{addonSlug:{type:String,required:!0},featureList:{type:Array,default:()=>[]},postActivationPromises:{type:Array,default:()=>[]},ctaButtonText:String,ctaHeader:String,ctaDescription:String,learnMoreText:String,learnMoreLink:String,alignTop:Boolean,preventGlobalAddonUpdate:Boolean},data(){return{addons:n,strings:{activateError:this.$t.__("An error occurred while activating the addon. Please upload it manually or contact support for more information.",this.$td),permissionWarning:this.$t.__("You currently don't have permission to activate this addon. Please ask a site administrator to activate first.",this.$td)},failed:!1,activationLoading:!1}},methods:{activateAddon(){this.failed=!1,this.activationLoading=!0;const e=n.getAddon(this.addonSlug);this.pluginsStore.installPlugins([{plugin:e.basename}]).then(d=>{if(d.body.failed.length){this.activationLoading=!1,this.failed=!0;return}const t=this.postActivationPromises.map(a=>a());Promise.all(t).then(()=>{this.preventGlobalAddonUpdate||(this.activationLoading=!1,e.hasMinimumVersion=!0,e.isActive=!0,this.addonsStore.updateAddon(e))}).then(()=>{this.$emit("addon-activated",e)})}).catch(()=>{this.activationLoading=!1})}}};function U(e,d,t,a,i,m){var f,S;const l=c("core-alert"),p=c("cta");return g(),h(p,{"cta-button-visible":i.addons.userCanInstallOrActivate(t.addonSlug),"cta-button-visible-warning":i.strings.permissionWarning,"cta-link":`${(S=(f=a.rootStore)==null?void 0:f.aioseo)==null?void 0:S.urls.aio.featureManager}&aioseo-activate=${t.addonSlug}`,"cta-button-action":"","cta-button-loading":i.activationLoading,onCtaButtonClick:m.activateAddon,"same-tab":"","button-text":t.ctaButtonText,"learn-more-link":t.learnMoreLink,"feature-list":t.featureList,"align-top":t.alignTop,"hide-bonus":""},{"header-text":o(()=>[r(s(t.ctaHeader),1)]),description:o(()=>[i.failed?(g(),h(l,{key:0,type:"red"},{default:o(()=>[r(s(i.strings.activateError),1)]),_:1})):x("",!0),r(" "+s(t.ctaDescription),1)]),"learn-more-text":o(()=>[r(s(t.learnMoreText),1)]),_:1},8,["cta-button-visible","cta-button-visible-warning","cta-link","cta-button-loading","onCtaButtonClick","button-text","learn-more-link","feature-list","align-top"])}const M=k(C,[["render",U]]),P={setup(){return{addonsStore:v(),pluginsStore:_(),rootStore:A()}},emits:["addon-activated"],components:{CoreAlert:b,Cta:y},props:{addonSlug:{type:String,required:!0},featureList:{type:Array,default:()=>[]},postActivationPromises:{type:Array,default:()=>[]},addonName:String,installedVersion:String,minimumVersion:String,ctaButtonText:String,ctaHeader:String,ctaDescription:String,learnMoreText:String,learnMoreLink:String,alignTop:Boolean,preventGlobalAddonUpdate:Boolean},data(){return{addons:n,strings:{activateError:this.$t.__("An error occurred while activating the addon. Please upload it manually or contact support for more information.",this.$td),permissionWarning:this.$t.__("You currently don't have permission to activate this addon. Please ask a site administrator to activate first.",this.$td),updateRequired:this.$t.sprintf(this.$t.__("This addon requires an update. %1$s %2$s requires a minimum version of %3$s for the %4$s addon. You currently have %5$s installed.",this.$td),"AIOSEO","Pro",n.getAddon(this.addonSlug).minimumVersion,n.getAddon(this.addonSlug).name,n.getAddon(this.addonSlug).installedVersion)},failed:!1,activationLoading:!1}},methods:{upgradeAddon(){this.failed=!1,this.activationLoading=!0;const e=n.getAddon(this.addonSlug);this.pluginsStore.upgradePlugins([{plugin:e.sku}]).then(d=>{if(d.body.failed.length){this.activationLoading=!1,this.failed=!0;return}const t=this.postActivationPromises.map(a=>a());Promise.all(t).then(()=>{if(this.preventGlobalAddonUpdate)return;const a=d.body.completed[e.sku];this.activationLoading=!1,e.hasMinimumVersion=!0,e.isActive=!0,e.installedVersion=a.installedVersion,this.addonsStore.updateAddon(e)}).then(()=>{this.$emit("addon-activated",e)})}).catch(()=>{this.activationLoading=!1})}}};function B(e,d,t,a,i,m){const l=c("core-alert"),p=c("cta");return g(),h(p,{"cta-button-visible":i.addons.userCanUpdate(t.addonSlug),"cta-button-visible-warning":i.strings.permissionWarning,"cta-link":`${a.rootStore.aioseo.urls.aio.featureManager}&aioseo-activate=${t.addonSlug}`,"cta-button-action":"","cta-button-loading":i.activationLoading,onCtaButtonClick:m.upgradeAddon,"same-tab":"","button-text":t.ctaButtonText,"learn-more-link":t.learnMoreLink,"feature-list":t.featureList,"align-top":t.alignTop,"hide-bonus":""},{"header-text":o(()=>[r(s(t.ctaHeader),1)]),description:o(()=>[L(l,{type:"yellow"},{default:o(()=>[r(s(i.strings.updateRequired),1)]),_:1}),i.failed?(g(),h(l,{key:0,type:"red"},{default:o(()=>[r(s(i.strings.activateError),1)]),_:1})):x("",!0),r(" "+s(t.ctaDescription),1)]),"learn-more-text":o(()=>[r(s(t.learnMoreText),1)]),_:1},8,["cta-button-visible","cta-button-visible-warning","cta-link","cta-button-loading","onCtaButtonClick","button-text","learn-more-link","feature-list","align-top"])}const T=k(P,[["render",B]]),H={computed:{ctaComponent(){return this.shouldShowUpdate?T:M},shouldShowMain(){return!u().isUnlicensed&&n.isActive(this.addonSlug)&&!n.requiresUpgrade(this.addonSlug)&&n.hasMinimumVersion(this.addonSlug)},shouldShowActivate(){return!u().isUnlicensed&&!n.isActive(this.addonSlug)&&n.canActivate(this.addonSlug)&&!n.requiresUpgrade(this.addonSlug)&&(n.hasMinimumVersion(this.addonSlug)||!n.isInstalled(this.addonSlug))},shouldShowUpdate(){return!u().isUnlicensed&&n.isInstalled(this.addonSlug)&&!n.requiresUpgrade(this.addonSlug)&&!n.hasMinimumVersion(this.addonSlug)},shouldShowLite(){return u().isUnlicensed||n.requiresUpgrade(this.addonSlug)}}};export{H as A};
