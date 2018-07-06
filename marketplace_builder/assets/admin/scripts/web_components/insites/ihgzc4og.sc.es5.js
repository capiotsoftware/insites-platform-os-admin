/*! Built with http://stenciljs.com */
insites.loadBundle("ihgzc4og",["exports"],function(t){var e=window.insites.h,n=function(){function t(){this.color="blue"}return t.prototype.btnOnClickHandler=function(){this.onClickInsButton.emit({label:this.label,data:this.data})},t.prototype.render=function(){var t=this;return e("button",{onClick:function(){return t.btnOnClickHandler()},class:"mdc-button "+(this.solid?"mdc-button--unelevated":"")+" "+(this.outlined?"mdc-button--outlined":"")+" "+this.color},this.icon?e("i",{class:"mdc-button__icon "+this.icon}):"",this.label)},Object.defineProperty(t,"is",{get:function(){return"ins-button"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{color:{type:String,attr:"color"},data:{type:String,attr:"data"},icon:{type:String,attr:"icon"},label:{type:String,attr:"label"},outlined:{type:Boolean,attr:"outlined"},size:{type:String,attr:"size"},solid:{type:Boolean,attr:"solid"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"onClickInsButton",method:"onClickInsButton",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return"\@-webkit-keyframes mdc-ripple-fg-radius-in{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1);transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1)}to{-webkit-transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}}\@keyframes mdc-ripple-fg-radius-in{0%{-webkit-animation-timing-function:cubic-bezier(.4,0,.2,1);animation-timing-function:cubic-bezier(.4,0,.2,1);-webkit-transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1);transform:translate(var(--mdc-ripple-fg-translate-start,0)) scale(1)}to{-webkit-transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}}\@-webkit-keyframes mdc-ripple-fg-opacity-in{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity,0)}}\@keyframes mdc-ripple-fg-opacity-in{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity,0)}}\@-webkit-keyframes mdc-ripple-fg-opacity-out{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity,0)}to{opacity:0}}\@keyframes mdc-ripple-fg-opacity-out{0%{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity,0)}to{opacity:0}}.mdc-ripple-surface--test-edge-var-bug[data-ins-button]{--mdc-ripple-surface-test-edge-var:1px solid #000;visibility:hidden}.mdc-ripple-surface--test-edge-var-bug[data-ins-button]:before{border:var(--mdc-ripple-surface-test-edge-var)}.mdc-button[data-ins-button]{font-family:Roboto,sans-serif;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-size:.875rem;line-height:2.25rem;font-weight:500;letter-spacing:.08929em;text-decoration:none;text-transform:uppercase;--mdc-ripple-fg-size:0;--mdc-ripple-left:0;--mdc-ripple-top:0;--mdc-ripple-fg-scale:1;--mdc-ripple-fg-translate-end:0;--mdc-ripple-fg-translate-start:0;-webkit-tap-highlight-color:transparent;will-change:transform,opacity;padding:0 8px;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;position:relative;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-sizing:border-box;box-sizing:border-box;min-width:64px;height:36px;border:none;outline:0;line-height:inherit;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-appearance:none;overflow:hidden;vertical-align:middle;border-radius:2px}.mdc-button[data-ins-button]:after, .mdc-button[data-ins-button]:before{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:\"\"}.mdc-button[data-ins-button]:before{-webkit-transition:opacity 15ms linear;transition:opacity 15ms linear;z-index:1}.mdc-button.mdc-ripple-upgraded[data-ins-button]:before{-webkit-transform:scale(var(--mdc-ripple-fg-scale,1));transform:scale(var(--mdc-ripple-fg-scale,1))}.mdc-button.mdc-ripple-upgraded[data-ins-button]:after{top:0;left:0;-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:center center;transform-origin:center center}.mdc-button.mdc-ripple-upgraded--unbounded[data-ins-button]:after{top:var(--mdc-ripple-top,0);left:var(--mdc-ripple-left,0)}.mdc-button.mdc-ripple-upgraded--foreground-activation[data-ins-button]:after{-webkit-animation:225ms mdc-ripple-fg-radius-in forwards,75ms mdc-ripple-fg-opacity-in forwards;animation:225ms mdc-ripple-fg-radius-in forwards,75ms mdc-ripple-fg-opacity-in forwards}.mdc-button.mdc-ripple-upgraded--foreground-deactivation[data-ins-button]:after{-webkit-animation:.15s mdc-ripple-fg-opacity-out;animation:.15s mdc-ripple-fg-opacity-out;-webkit-transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1));transform:translate(var(--mdc-ripple-fg-translate-end,0)) scale(var(--mdc-ripple-fg-scale,1))}.mdc-button[data-ins-button]:after, .mdc-button[data-ins-button]:before{top:-50%;left:-50%;width:200%;height:200%}.mdc-button.mdc-ripple-upgraded[data-ins-button]:after{width:var(--mdc-ripple-fg-size,100%);height:var(--mdc-ripple-fg-size,100%)}.mdc-button[data-ins-button]::-moz-focus-inner{padding:0;border:0}.mdc-button[data-ins-button]:active{outline:0}.mdc-button[data-ins-button]:hover{cursor:pointer}.mdc-button[data-ins-button]:disabled{color:rgba(0,0,0,.37);cursor:default;pointer-events:none}.mdc-button[data-ins-button]:disabled, .mdc-button[data-ins-button]:not(:disabled){background-color:transparent}.mdc-button[data-ins-button]:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary,#6200ee)}.mdc-button[data-ins-button]:after, .mdc-button[data-ins-button]:before{background-color:#6200ee}\@supports not (-ms-ime-align:auto){.mdc-button[data-ins-button]:after, .mdc-button[data-ins-button]:before{background-color:var(--mdc-theme-primary,#6200ee)}}.mdc-button[data-ins-button]:hover:before{opacity:.04}.mdc-button.mdc-ripple-upgraded--background-focused[data-ins-button]:before, .mdc-button[data-ins-button]:not(.mdc-ripple-upgraded):focus:before{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.12}.mdc-button[data-ins-button]:not(.mdc-ripple-upgraded):after{-webkit-transition:opacity .15s linear;transition:opacity .15s linear}.mdc-button[data-ins-button]:not(.mdc-ripple-upgraded):active:after{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.16}.mdc-button.mdc-ripple-upgraded[data-ins-button]{--mdc-ripple-fg-opacity:.16}.mdc-button[data-ins-button]   .mdc-button__icon[data-ins-button]{margin-left:0;margin-right:8px;display:inline-block;width:18px;height:18px;font-size:18px;vertical-align:top}.mdc-button[data-ins-button]   .mdc-button__icon[dir=rtl][data-ins-button], [dir=rtl][data-ins-button]   .mdc-button[data-ins-button]   .mdc-button__icon[data-ins-button]{margin-left:8px;margin-right:0}.mdc-button[data-ins-button]   svg.mdc-button__icon[data-ins-button]{fill:currentColor}.mdc-button--outlined[data-ins-button]   .mdc-button__icon[data-ins-button], .mdc-button--raised[data-ins-button]   .mdc-button__icon[data-ins-button], .mdc-button--unelevated[data-ins-button]   .mdc-button__icon[data-ins-button]{margin-left:-4px;margin-right:8px}.mdc-button--outlined[data-ins-button]   .mdc-button__icon[dir=rtl][data-ins-button], .mdc-button--raised[data-ins-button]   .mdc-button__icon[dir=rtl][data-ins-button], .mdc-button--unelevated[data-ins-button]   .mdc-button__icon[dir=rtl][data-ins-button], [dir=rtl][data-ins-button]   .mdc-button--outlined[data-ins-button]   .mdc-button__icon[data-ins-button], [dir=rtl][data-ins-button]   .mdc-button--raised[data-ins-button]   .mdc-button__icon[data-ins-button], [dir=rtl][data-ins-button]   .mdc-button--unelevated[data-ins-button]   .mdc-button__icon[data-ins-button]{margin-left:8px;margin-right:-4px}.mdc-button--raised[data-ins-button], .mdc-button--unelevated[data-ins-button]{padding:0 16px}.mdc-button--raised[data-ins-button]:disabled, .mdc-button--unelevated[data-ins-button]:disabled{background-color:rgba(0,0,0,.12);color:rgba(0,0,0,.37)}.mdc-button--raised[data-ins-button]:not(:disabled), .mdc-button--unelevated[data-ins-button]:not(:disabled){background-color:#6200ee}\@supports not (-ms-ime-align:auto){.mdc-button--raised[data-ins-button]:not(:disabled), .mdc-button--unelevated[data-ins-button]:not(:disabled){background-color:var(--mdc-theme-primary,#6200ee)}}.mdc-button--raised[data-ins-button]:not(:disabled), .mdc-button--unelevated[data-ins-button]:not(:disabled){color:#fff;color:var(--mdc-theme-on-primary,#fff)}.mdc-button--raised[data-ins-button]:after, .mdc-button--raised[data-ins-button]:before, .mdc-button--unelevated[data-ins-button]:after, .mdc-button--unelevated[data-ins-button]:before{background-color:#fff}\@supports not (-ms-ime-align:auto){.mdc-button--raised[data-ins-button]:after, .mdc-button--raised[data-ins-button]:before, .mdc-button--unelevated[data-ins-button]:after, .mdc-button--unelevated[data-ins-button]:before{background-color:var(--mdc-theme-on-primary,#fff)}}.mdc-button--raised[data-ins-button]:hover:before, .mdc-button--unelevated[data-ins-button]:hover:before{opacity:.08}.mdc-button--raised.mdc-ripple-upgraded--background-focused[data-ins-button]:before, .mdc-button--raised[data-ins-button]:not(.mdc-ripple-upgraded):focus:before, .mdc-button--unelevated.mdc-ripple-upgraded--background-focused[data-ins-button]:before, .mdc-button--unelevated[data-ins-button]:not(.mdc-ripple-upgraded):focus:before{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.24}.mdc-button--raised[data-ins-button]:not(.mdc-ripple-upgraded):after, .mdc-button--unelevated[data-ins-button]:not(.mdc-ripple-upgraded):after{-webkit-transition:opacity .15s linear;transition:opacity .15s linear}.mdc-button--raised[data-ins-button]:not(.mdc-ripple-upgraded):active:after, .mdc-button--unelevated[data-ins-button]:not(.mdc-ripple-upgraded):active:after{-webkit-transition-duration:75ms;transition-duration:75ms;opacity:.32}.mdc-button--raised.mdc-ripple-upgraded[data-ins-button], .mdc-button--unelevated.mdc-ripple-upgraded[data-ins-button]{--mdc-ripple-fg-opacity:.32}.mdc-button--raised[data-ins-button]{-webkit-box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);-webkit-transition:-webkit-box-shadow .28s cubic-bezier(.4,0,.2,1);transition:-webkit-box-shadow .28s cubic-bezier(.4,0,.2,1);transition:box-shadow .28s cubic-bezier(.4,0,.2,1);transition:box-shadow .28s cubic-bezier(.4,0,.2,1),-webkit-box-shadow .28s cubic-bezier(.4,0,.2,1)}.mdc-button--raised[data-ins-button]:focus, .mdc-button--raised[data-ins-button]:hover{-webkit-box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.mdc-button--raised[data-ins-button]:active{-webkit-box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.mdc-button--raised[data-ins-button]:disabled{-webkit-box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12);box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.mdc-button--outlined[data-ins-button]{border-style:solid;padding:0 14px;border-width:2px;line-height:32px}.mdc-button--outlined[data-ins-button]:disabled{border-color:rgba(0,0,0,.37)}.mdc-button--outlined.mdc-button--dense[data-ins-button]{line-height:27px}.mdc-button--outlined[data-ins-button]:not(:disabled){border-color:#6200ee;border-color:var(--mdc-theme-primary,#6200ee)}.mdc-button--dense[data-ins-button]{height:32px;font-size:.8125rem;line-height:32px}\@font-face{font-family:insites-20-fonticon;src:url(../webfonts/insites-20-fonticon.eot?trsgv5);src:url(../webfonts/insites-20-fonticon.eot?trsgv5#iefix) format('embedded-opentype'),url(../webfonts/insites-20-fonticon.ttf?trsgv5) format('truetype'),url(../webfonts/insites-20-fonticon.woff?trsgv5) format('woff'),url(../webfonts/insites-20-fonticon.svg?trsgv5#insites-20-fonticon) format('svg');font-weight:400;font-style:normal}[class*=\" icon-\"][data-ins-button], [class^=icon-][data-ins-button]{font-family:insites-20-fonticon!important;speak:none;font-style:normal;font-weight:400;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-content_copy[data-ins-button]:before{content:\"\\e14d\"}.icon-code[data-ins-button]:before{content:\"\\e86f\"}.icon-format_bold[data-ins-button]:before{content:\"\\e238\"}.icon-format_italic[data-ins-button]:before{content:\"\\e23f\"}.icon-format_list_bulleted[data-ins-button]:before{content:\"\\e241\"}.icon-link2[data-ins-button]:before{content:\"\\e157\"}.icon-panorama[data-ins-button]:before{content:\"\\e40b\"}.icon-strikethrough_s[data-ins-button]:before{content:\"\\e257\"}.icon-remove[data-ins-button]:before{content:\"\\e15b\"}.icon-paragraph[data-ins-button]:before{content:\"\\e948\"}.icon-completed-outcomes[data-ins-button]:before{content:\"\\e944\"}.icon-disputes[data-ins-button]:before{content:\"\\e945\"}.icon-number-of-checks[data-ins-button]:before{content:\"\\e946\"}.icon-total-sales[data-ins-button]:before{content:\"\\e947\"}.icon-close-1[data-ins-button]:before{content:\"\\e943\"}.icon-utilities[data-ins-button]:before{content:\"\\e900\"}.icon-logout-1[data-ins-button]:before{content:\"\\e901\"}.icon-lock-1[data-ins-button]:before{content:\"\\e902\"}.icon-arrow-left-1[data-ins-button]:before{content:\"\\e903\"}.icon-headset-1[data-ins-button]:before{content:\"\\e904\"}.icon-notification-1[data-ins-button]:before{content:\"\\e905\"}.icon-settings-1[data-ins-button]:before{content:\"\\e906\"}.icon-support-1[data-ins-button]:before{content:\"\\e907\"}.icon-user-1[data-ins-button]:before{content:\"\\e908\"}.icon-globals[data-ins-button]:before{content:\"\\e909\"}.icon-image[data-ins-button]:before{content:\"\\e90a\"}.icon-plugin-store[data-ins-button]:before{content:\"\\e90b\"}.icon-dashboard[data-ins-button]:before{content:\"\\e90c\"}.icon-entries[data-ins-button]:before{content:\"\\e90d\"}.icon-maximize[data-ins-button]:before{content:\"\\e90e\"}.icon-notepad-1[data-ins-button]:before{content:\"\\e90f\"}.icon-briefcase-1[data-ins-button]:before{content:\"\\e910\"}.icon-email-1[data-ins-button]:before{content:\"\\e911\"}.icon-check-2[data-ins-button]:before{content:\"\\e912\"}.icon-phone-1[data-ins-button]:before{content:\"\\e913\"}.icon-analytic-1[data-ins-button]:before{content:\"\\e914\"}.icon-goal-1[data-ins-button]:before{content:\"\\e915\"}.icon-minimize-1[data-ins-button]:before{content:\"\\e916\"}.icon-monitor-1[data-ins-button]:before{content:\"\\e917\"}.icon-search-1[data-ins-button]:before{content:\"\\e918\"}.icon-menu-1[data-ins-button]:before{content:\"\\e919\"}.icon-notepad[data-ins-button]:before{content:\"\\e91a\"}.icon-phone[data-ins-button]:before{content:\"\\e91b\"}.icon-notifications[data-ins-button]:before{content:\"\\e91c\"}.icon-report[data-ins-button]:before{content:\"\\e91d\"}.icon-add[data-ins-button]:before{content:\"\\e91e\"}.icon-arrow-back[data-ins-button]:before{content:\"\\e91f\"}.icon-arrow-down[data-ins-button]:before{content:\"\\e920\"}.icon-arrow-forward[data-ins-button]:before{content:\"\\e921\"}.icon-arrow-up[data-ins-button]:before{content:\"\\e922\"}.icon-attachment[data-ins-button]:before{content:\"\\e923\"}.icon-cancel[data-ins-button]:before{content:\"\\e924\"}.icon-check-circle[data-ins-button]:before{content:\"\\e925\"}.icon-check[data-ins-button]:before{content:\"\\e926\"}.icon-chevron-left[data-ins-button]:before{content:\"\\e927\"}.icon-chevron-right[data-ins-button]:before{content:\"\\e928\"}.icon-clock[data-ins-button]:before{content:\"\\e929\"}.icon-close[data-ins-button]:before{content:\"\\e92a\"}.icon-crop[data-ins-button]:before{content:\"\\e92b\"}.icon-delete[data-ins-button]:before{content:\"\\e92c\"}.icon-edit[data-ins-button]:before{content:\"\\e92d\"}.icon-exit-to-app[data-ins-button]:before{content:\"\\e92e\"}.icon-external-link[data-ins-button]:before{content:\"\\e92f\"}.icon-file-download[data-ins-button]:before{content:\"\\e930\"}.icon-file-upload[data-ins-button]:before{content:\"\\e931\"}.icon-headset[data-ins-button]:before{content:\"\\e932\"}.icon-keyboard-arrow-down[data-ins-button]:before{content:\"\\e933\"}.icon-keyboard-arrow-up[data-ins-button]:before{content:\"\\e934\"}.icon-language[data-ins-button]:before{content:\"\\e935\"}.icon-link[data-ins-button]:before{content:\"\\e936\"}.icon-lock[data-ins-button]:before{content:\"\\e937\"}.icon-mail[data-ins-button]:before{content:\"\\e938\"}.icon-person[data-ins-button]:before{content:\"\\e939\"}.icon-play-circle-fill[data-ins-button]:before{content:\"\\e93a\"}.icon-print[data-ins-button]:before{content:\"\\e93b\"}.icon-retry[data-ins-button]:before{content:\"\\e93c\"}.icon-search[data-ins-button]:before{content:\"\\e93d\"}.icon-settings[data-ins-button]:before{content:\"\\e93e\"}.icon-today[data-ins-button]:before{content:\"\\e93f\"}.icon-view[data-ins-button]:before{content:\"\\e940\"}.icon-warning[data-ins-button]:before{content:\"\\e941\"}.icon-work[data-ins-button]:before{content:\"\\e942\"}[data-ins-button-host]   button[data-ins-button]{letter-spacing:1px;font-family:\"Open Sans\",sans-serif!important;font-weight:600!important;font-size:14px;border-radius:4px!important}[data-ins-button-host]   button.green[data-ins-button], [data-ins-button-host]   button.positive[data-ins-button]{--mdc-theme-primary:#24be8d}[data-ins-button-host]   button.warning[data-ins-button]{--mdc-theme-primary:#ffa639}[data-ins-button-host]   button.negative[data-ins-button]{--mdc-theme-primary:#f27474}[data-ins-button-host]   button.information-1[data-ins-button]{--mdc-theme-primary:#ff3366}[data-ins-button-host]   button.information-2[data-ins-button]{--mdc-theme-primary:#fdd836}[data-ins-button-host]   button.blue[data-ins-button]{--mdc-theme-primary:#1e86e3}[data-ins-button-host]   button.turquoise[data-ins-button]{--mdc-theme-primary:#2bbad9}[data-ins-button-host]   button.grey[data-ins-button]{--mdc-theme-primary:#8C94A4}[data-ins-button-host]   button.mdc-button[data-ins-button]{line-height:16px}[data-ins-button-host]   button.mdc-button--outlined[data-ins-button]{border-width:1px;line-height:16px}"},enumerable:!0,configurable:!0}),t}();t.InsButton=n,Object.defineProperty(t,"__esModule",{value:!0})});