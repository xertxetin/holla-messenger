"use strict";(self.webpackChunkion_holla_messenger=self.webpackChunkion_holla_messenger||[]).push([[902],{4452:(m,h,e)=>{e.d(h,{T:()=>g});var s=e(8384),c=e(4553);class b extends s.Uw{write(t){var o=this;return(0,c.Z)(function*(){if("undefined"==typeof navigator||!navigator.clipboard)throw o.unavailable("Clipboard API not available in this browser");if(void 0!==t.string)yield o.writeText(t.string);else if(t.url)yield o.writeText(t.url);else{if(!t.image)throw new Error("Nothing to write");if("undefined"==typeof ClipboardItem)throw o.unavailable("Writing images to the clipboard is not supported in this browser");try{const i=yield(yield fetch(t.image)).blob(),a=new ClipboardItem({[i.type]:i});yield navigator.clipboard.write([a])}catch(i){throw new Error("Failed to write image")}}})()}read(){var t=this;return(0,c.Z)(function*(){if("undefined"==typeof navigator||!navigator.clipboard)throw t.unavailable("Clipboard API not available in this browser");if("undefined"==typeof ClipboardItem)return t.readText();try{const o=yield navigator.clipboard.read(),i=o[0].types[0],a=yield o[0].getType(i);return{value:yield t._getBlobData(a,i),type:i}}catch(o){return t.readText()}})()}readText(){var t=this;return(0,c.Z)(function*(){if("undefined"==typeof navigator||!navigator.clipboard||!navigator.clipboard.readText)throw t.unavailable("Reading from clipboard not supported in this browser");return{value:yield navigator.clipboard.readText(),type:"text/plain"}})()}writeText(t){var o=this;return(0,c.Z)(function*(){if("undefined"==typeof navigator||!navigator.clipboard||!navigator.clipboard.writeText)throw o.unavailable("Writting to clipboard not supported in this browser");yield navigator.clipboard.writeText(t)})()}_getBlobData(t,o){return new Promise((i,a)=>{const n=new FileReader;o.includes("image")?n.readAsDataURL(t):n.readAsText(t),n.onloadend=()=>{i(n.result)},n.onerror=v=>{a(v)}})}}const g=(0,s.fo)("Clipboard",{web:()=>new b})},1029:(m,h,e)=>{e.r(h),e.d(h,{LanguagePageModule:()=>i});var s=e(8583),c=e(6378),b=e(6316),g=e(3018);const d=[{path:"",component:b.T}];let t=(()=>{class a{}return a.\u0275fac=function(v){return new(v||a)},a.\u0275mod=g.oAB({type:a}),a.\u0275inj=g.cJS({imports:[[c.Bz.forChild(d)],c.Bz]}),a})();var o=e(4466);let i=(()=>{class a{}return a.\u0275fac=function(v){return new(v||a)},a.\u0275mod=g.oAB({type:a}),a.\u0275inj=g.cJS({imports:[[s.ez,t,o.m]]}),a})()},887:(m,h,e)=>{e.d(h,{f:()=>a});var s=e(4762);const b=(0,e(8384).fo)("App",{web:()=>e.e(6141).then(e.bind(e,6141)).then(n=>new n.AppWeb)});var g=e(4452),d=e(3018),t=e(4490),o=e(4540),i=e(8583);let a=(()=>{class n{constructor(r,l,u,f,p,y){this.toastController=r,this.alertController=l,this.translate=u,this.navCtrl=f,this.modalController=p,this.location=y}createWindow(r){return(0,s.mG)(this,void 0,void 0,function*(){window.open(r,"_blank","nodeIntegration=no")})}EC_exitApp(){return(0,s.mG)(this,void 0,void 0,function*(){b.exitApp()})}ToastShowModal(r,l,u){return(0,s.mG)(this,void 0,void 0,function*(){(yield this.toastController.create({message:r,duration:l,position:u})).present()})}presentAlert(r,l,u,f,p){return(0,s.mG)(this,void 0,void 0,function*(){yield(yield this.alertController.create({cssClass:l,header:u,subHeader:f,message:r,buttons:[p]})).present()})}copyText(r,l,u){return(0,s.mG)(this,void 0,void 0,function*(){g.T.write({string:r}),this.ToastShowModal(l+" "+u,"1000","bottom")})}xtranslate(r){return this.translate.get(r).subscribe(l=>{this.nval=l}),this.nval}uumakeid(r){for(var l="",u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",f=u.length,p=0;p<r;p++)l+=u.charAt(Math.floor(Math.random()*f));return l}navCtrlNF(r){return this.navCtrl.navigateForward(r)}navCtrlNB(r){return this.navCtrl.navigateBack(r)}navCtrlNR(r){return this.navCtrl.navigateRoot(r)}navCtrlBack(){return this.navCtrl.back()}goBack(){return this.location.back()}}return n.\u0275fac=function(r){return new(r||n)(d.LFG(t.yF),d.LFG(t.Br),d.LFG(o.sK),d.LFG(t.SH),d.LFG(t.IN),d.LFG(i.Ye))},n.\u0275prov=d.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()}}]);