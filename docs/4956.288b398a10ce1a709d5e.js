"use strict";(self.webpackChunkion_holla_messenger=self.webpackChunkion_holla_messenger||[]).push([[4956],{4452:(m,p,e)=>{e.d(p,{T:()=>h});var s=e(8384),c=e(4553);class b extends s.Uw{write(t){var a=this;return(0,c.Z)(function*(){if("undefined"==typeof navigator||!navigator.clipboard)throw a.unavailable("Clipboard API not available in this browser");if(void 0!==t.string)yield a.writeText(t.string);else if(t.url)yield a.writeText(t.url);else{if(!t.image)throw new Error("Nothing to write");if("undefined"==typeof ClipboardItem)throw a.unavailable("Writing images to the clipboard is not supported in this browser");try{const i=yield(yield fetch(t.image)).blob(),r=new ClipboardItem({[i.type]:i});yield navigator.clipboard.write([r])}catch(i){throw new Error("Failed to write image")}}})()}read(){var t=this;return(0,c.Z)(function*(){if("undefined"==typeof navigator||!navigator.clipboard)throw t.unavailable("Clipboard API not available in this browser");if("undefined"==typeof ClipboardItem)return t.readText();try{const a=yield navigator.clipboard.read(),i=a[0].types[0],r=yield a[0].getType(i);return{value:yield t._getBlobData(r,i),type:i}}catch(a){return t.readText()}})()}readText(){var t=this;return(0,c.Z)(function*(){if("undefined"==typeof navigator||!navigator.clipboard||!navigator.clipboard.readText)throw t.unavailable("Reading from clipboard not supported in this browser");return{value:yield navigator.clipboard.readText(),type:"text/plain"}})()}writeText(t){var a=this;return(0,c.Z)(function*(){if("undefined"==typeof navigator||!navigator.clipboard||!navigator.clipboard.writeText)throw a.unavailable("Writting to clipboard not supported in this browser");yield navigator.clipboard.writeText(t)})()}_getBlobData(t,a){return new Promise((i,r)=>{const o=new FileReader;a.includes("image")?o.readAsDataURL(t):o.readAsText(t),o.onloadend=()=>{i(o.result)},o.onerror=v=>{r(v)}})}}const h=(0,s.fo)("Clipboard",{web:()=>new b})},8225:(m,p,e)=>{e.r(p),e.d(p,{FindPeoplePageModule:()=>i});var s=e(8583),c=e(6378),b=e(6185),h=e(3018);const d=[{path:"",component:b.EL}];let t=(()=>{class r{}return r.\u0275fac=function(v){return new(v||r)},r.\u0275mod=h.oAB({type:r}),r.\u0275inj=h.cJS({imports:[[c.Bz.forChild(d)],c.Bz]}),r})();var a=e(4466);let i=(()=>{class r{}return r.\u0275fac=function(v){return new(v||r)},r.\u0275mod=h.oAB({type:r}),r.\u0275inj=h.cJS({imports:[[s.ez,t,a.m]]}),r})()},887:(m,p,e)=>{e.d(p,{f:()=>r});var s=e(4762);const b=(0,e(8384).fo)("App",{web:()=>e.e(6141).then(e.bind(e,6141)).then(o=>new o.AppWeb)});var h=e(4452),d=e(3018),t=e(4490),a=e(4540),i=e(8583);let r=(()=>{class o{constructor(n,l,u,g,f,y){this.toastController=n,this.alertController=l,this.translate=u,this.navCtrl=g,this.modalController=f,this.location=y}createWindow(n){return(0,s.mG)(this,void 0,void 0,function*(){window.open(n,"_blank","nodeIntegration=no")})}EC_exitApp(){return(0,s.mG)(this,void 0,void 0,function*(){b.exitApp()})}ToastShowModal(n,l,u){return(0,s.mG)(this,void 0,void 0,function*(){(yield this.toastController.create({message:n,duration:l,position:u})).present()})}presentAlert(n,l,u,g,f){return(0,s.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({cssClass:l,header:u,subHeader:g,message:n,buttons:[f]})).present()})}copyText(n,l,u){return(0,s.mG)(this,void 0,void 0,function*(){h.T.write({string:n}),this.ToastShowModal(l+" "+u,"1000","bottom")})}xtranslate(n){return this.translate.get(n).subscribe(l=>{this.nval=l}),this.nval}uumakeid(n){for(var l="",u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",g=u.length,f=0;f<n;f++)l+=u.charAt(Math.floor(Math.random()*g));return l}navCtrlNF(n){return this.navCtrl.navigateForward(n)}navCtrlNB(n){return this.navCtrl.navigateBack(n)}navCtrlNR(n){return this.navCtrl.navigateRoot(n)}navCtrlBack(){return this.navCtrl.back()}goBack(){return this.location.back()}}return o.\u0275fac=function(n){return new(n||o)(d.LFG(t.yF),d.LFG(t.Br),d.LFG(a.sK),d.LFG(t.SH),d.LFG(t.IN),d.LFG(i.Ye))},o.\u0275prov=d.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()}}]);