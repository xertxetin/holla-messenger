"use strict";(self.webpackChunkion_holla_messenger=self.webpackChunkion_holla_messenger||[]).push([[801],{801:(D,m,s)=>{s.r(m),s.d(m,{ion_toast:()=>f});var h=s(4553),e=s(3150),b=s(7585),l=s(7053),x=s(6575),u=s(1269),p=s(4086);const w=(t,o)=>{const a=(0,p.c)(),n=(0,p.c)(),i=t.host||t,r=t.querySelector(".toast-wrapper");switch(n.addElement(r),o){case"top":n.fromTo("transform","translateY(-100%)","translateY(calc(10px + var(--ion-safe-area-top, 0px)))");break;case"middle":const g=Math.floor(i.clientHeight/2-r.clientHeight/2);r.style.top=`${g}px`,n.fromTo("opacity",.01,1);break;default:n.fromTo("transform","translateY(100%)","translateY(calc(-10px - var(--ion-safe-area-bottom, 0px)))")}return a.addElement(i).easing("cubic-bezier(.155,1.105,.295,1.12)").duration(400).addAnimation(n)},v=(t,o)=>{const a=(0,p.c)(),n=(0,p.c)(),i=t.host||t,r=t.querySelector(".toast-wrapper");switch(n.addElement(r),o){case"top":n.fromTo("transform","translateY(calc(10px + var(--ion-safe-area-top, 0px)))","translateY(-100%)");break;case"middle":n.fromTo("opacity",.99,0);break;default:n.fromTo("transform","translateY(calc(-10px - var(--ion-safe-area-bottom, 0px)))","translateY(100%)")}return a.addElement(i).easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(n)},y=(t,o)=>{const a=(0,p.c)(),n=(0,p.c)(),i=t.host||t,r=t.querySelector(".toast-wrapper");switch(n.addElement(r),o){case"top":r.style.top="calc(8px + var(--ion-safe-area-top, 0px))",n.fromTo("opacity",.01,1);break;case"middle":const g=Math.floor(i.clientHeight/2-r.clientHeight/2);r.style.top=`${g}px`,n.fromTo("opacity",.01,1);break;default:r.style.bottom="calc(8px + var(--ion-safe-area-bottom, 0px))",n.fromTo("opacity",.01,1)}return a.addElement(i).easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation(n)},k=t=>{const o=(0,p.c)(),a=(0,p.c)(),n=t.host||t,i=t.querySelector(".toast-wrapper");return a.addElement(i).fromTo("opacity",.99,0),o.addElement(n).easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(a)},f=class{constructor(t){(0,e.r)(this,t),this.didPresent=(0,e.e)(this,"ionToastDidPresent",7),this.willPresent=(0,e.e)(this,"ionToastWillPresent",7),this.willDismiss=(0,e.e)(this,"ionToastWillDismiss",7),this.didDismiss=(0,e.e)(this,"ionToastDidDismiss",7),this.presented=!1,this.duration=0,this.keyboardClose=!1,this.position="bottom",this.translucent=!1,this.animated=!0,this.dispatchCancelHandler=o=>{if((0,l.i)(o.detail.role)){const n=this.getButtons().find(i=>"cancel"===i.role);this.callButtonHandler(n)}}}connectedCallback(){(0,l.e)(this.el)}present(){var t=this;return(0,h.Z)(function*(){yield(0,l.d)(t,"toastEnter",w,y,t.position),t.duration>0&&(t.durationTimeout=setTimeout(()=>t.dismiss(void 0,"timeout"),t.duration))})()}dismiss(t,o){return this.durationTimeout&&clearTimeout(this.durationTimeout),(0,l.f)(this,t,o,"toastLeave",v,k,this.position)}onDidDismiss(){return(0,l.g)(this.el,"ionToastDidDismiss")}onWillDismiss(){return(0,l.g)(this.el,"ionToastWillDismiss")}getButtons(){return this.buttons?this.buttons.map(o=>"string"==typeof o?{text:o}:o):[]}buttonClick(t){var o=this;return(0,h.Z)(function*(){const a=t.role;return(0,l.i)(a)||(yield o.callButtonHandler(t))?o.dismiss(void 0,a):Promise.resolve()})()}callButtonHandler(t){return(0,h.Z)(function*(){if(t&&t.handler)try{if(!1===(yield(0,l.s)(t.handler)))return!1}catch(o){console.error(o)}return!0})()}renderButtons(t,o){if(0===t.length)return;const a=(0,b.b)(this);return(0,e.h)("div",{class:{"toast-button-group":!0,[`toast-button-group-${o}`]:!0}},t.map(i=>(0,e.h)("button",{type:"button",class:T(i),tabIndex:0,onClick:()=>this.buttonClick(i),part:"button"},(0,e.h)("div",{class:"toast-button-inner"},i.icon&&(0,e.h)("ion-icon",{icon:i.icon,slot:void 0===i.text?"icon-only":void 0,class:"toast-icon"}),i.text),"md"===a&&(0,e.h)("ion-ripple-effect",{type:void 0!==i.icon&&void 0===i.text?"unbounded":"bounded"}))))}render(){const t=this.getButtons(),o=t.filter(d=>"start"===d.side),a=t.filter(d=>"start"!==d.side),n=(0,b.b)(this),i={"toast-wrapper":!0,[`toast-${this.position}`]:!0};return(0,e.h)(e.H,Object.assign({role:t.length>0?"dialog":"status",tabindex:"-1"},this.htmlAttributes,{style:{zIndex:`${6e4+this.overlayIndex}`},class:(0,u.c)(this.color,Object.assign(Object.assign({[n]:!0},(0,u.g)(this.cssClass)),{"toast-translucent":this.translucent})),onIonToastWillDismiss:this.dispatchCancelHandler}),(0,e.h)("div",{class:i},(0,e.h)("div",{class:"toast-container",part:"container"},this.renderButtons(o,"start"),(0,e.h)("div",{class:"toast-content"},void 0!==this.header&&(0,e.h)("div",{class:"toast-header",part:"header"},this.header),void 0!==this.message&&(0,e.h)("div",{class:"toast-message",part:"message",innerHTML:(0,x.s)(this.message)})),this.renderButtons(a,"end"))))}get el(){return(0,e.i)(this)}},T=t=>Object.assign({"toast-button":!0,"toast-button-icon-only":void 0!==t.icon&&void 0===t.text,[`toast-button-${t.role}`]:void 0!==t.role,"ion-focusable":!0,"ion-activatable":!0},(0,u.g)(t.cssClass));f.style={ios:":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;--white-space:pre-wrap;left:0;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;color:var(--color);font-family:var(--ion-font-family, inherit);contain:strict;z-index:1001;pointer-events:none}:host-context([dir=rtl]){left:unset;right:unset;right:0}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-button-cancel{color:inherit}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);left:var(--start);right:var(--end);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}[dir=rtl] .toast-wrapper,:host-context([dir=rtl]) .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}.toast-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;pointer-events:auto;height:inherit;min-height:inherit;max-height:inherit;contain:content}.toast-content{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-message{-ms-flex:1;flex:1;white-space:var(--white-space)}.toast-button-group{display:-ms-flexbox;display:flex}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}@media (any-hover: hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-50, #f2f2f2);--border-radius:14px;--button-color:var(--ion-color-primary, #3880ff);--color:var(--ion-color-step-850, #262626);--max-width:700px;--start:10px;--end:10px;font-size:14px}.toast-wrapper{margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;z-index:10}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-wrapper{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.toast-translucent) .toast-wrapper{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.toast-wrapper.toast-top{-webkit-transform:translate3d(0,  -100%,  0);transform:translate3d(0,  -100%,  0);top:0}.toast-wrapper.toast-middle{opacity:0.01}.toast-wrapper.toast-bottom{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);bottom:0}.toast-content{padding-left:15px;padding-right:15px;padding-top:15px;padding-bottom:15px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-content{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-header{margin-bottom:2px;font-weight:500}.toast-button{padding-left:15px;padding-right:15px;padding-top:10px;padding-bottom:10px;height:44px;-webkit-transition:background-color, opacity 100ms linear;transition:background-color, opacity 100ms linear;border:0;background-color:transparent;font-family:var(--ion-font-family);font-size:17px;font-weight:500;overflow:hidden}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-button.ion-activated{opacity:0.4}@media (any-hover: hover){.toast-button:hover{opacity:0.6}}",md:":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;--white-space:pre-wrap;left:0;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;color:var(--color);font-family:var(--ion-font-family, inherit);contain:strict;z-index:1001;pointer-events:none}:host-context([dir=rtl]){left:unset;right:unset;right:0}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-button-cancel{color:inherit}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);left:var(--start);right:var(--end);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}[dir=rtl] .toast-wrapper,:host-context([dir=rtl]) .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}.toast-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;pointer-events:auto;height:inherit;min-height:inherit;max-height:inherit;contain:content}.toast-content{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-message{-ms-flex:1;flex:1;white-space:var(--white-space)}.toast-button-group{display:-ms-flexbox;display:flex}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}@media (any-hover: hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-800, #333333);--border-radius:4px;--box-shadow:0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);--button-color:var(--ion-color-primary, #3880ff);--color:var(--ion-color-step-50, #f2f2f2);--max-width:700px;--start:8px;--end:8px;font-size:14px}.toast-wrapper{margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;opacity:0.01;z-index:10}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-wrapper{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.toast-content{padding-left:16px;padding-right:16px;padding-top:14px;padding-bottom:14px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-content{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.toast-header{margin-bottom:2px;font-weight:500;line-height:20px}.toast-message{line-height:20px}.toast-button-group-start{margin-left:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button-group-start{margin-left:unset;-webkit-margin-start:8px;margin-inline-start:8px}}.toast-button-group-end{margin-right:8px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button-group-end{margin-right:unset;-webkit-margin-end:8px;margin-inline-end:8px}}.toast-button{padding-left:15px;padding-right:15px;padding-top:10px;padding-bottom:10px;position:relative;background-color:transparent;font-family:var(--ion-font-family);font-size:14px;font-weight:500;letter-spacing:0.84px;text-transform:uppercase;overflow:hidden}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button{padding-left:unset;padding-right:unset;-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px}}.toast-button-cancel{color:var(--ion-color-step-100, #e6e6e6)}.toast-button-icon-only{border-radius:50%;padding-left:9px;padding-right:9px;padding-top:9px;padding-bottom:9px;width:36px;height:36px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.toast-button-icon-only{padding-left:unset;padding-right:unset;-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px}}@media (any-hover: hover){.toast-button:hover{background-color:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.08)}.toast-button-cancel:hover{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.08)}}"}}}]);