/*! Built with http://stenciljs.com */
const{h:e}=window.insites;class t{componentWillLoad(){this.rawTdEls=document.getElementsByTagName("ins-td-checkbox"),this.checkboxes=[...this.rawTdEls]}checkHandler(e){this.onCheckThCheckbox.emit({checked:e})}toggleThCheck(){this.checkboxState=!this.checkboxState,this.checkHandler(this.checkboxState)}thCheckBoxChangeState(e){this.checkboxState=e}render(){return e("div",{class:"ins-th-checkbox-wrap"},e("label",{class:"container"},this.checkboxState?e("input",{type:"checkbox",onChange:()=>this.toggleThCheck(),checked:!0}):e("input",{type:"checkbox",onChange:()=>this.toggleThCheck()}),e("span",{class:"checkmark"})))}static get is(){return"ins-th-checkbox"}static get encapsulation(){return"shadow"}static get properties(){return{checkboxes:{state:!0},checkboxState:{state:!0},rawTdEls:{state:!0},thCheckBoxChangeState:{method:!0}}}static get events(){return[{name:"onCheckThCheckbox",method:"onCheckThCheckbox",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return"[data-ins-th-checkbox-host]{width:16px;vertical-align:-webkit-baseline-middle;vertical-align:top}[data-ins-th-checkbox-host]   .ins-th-checkbox-wrap[data-ins-th-checkbox]{width:16px;margin:auto;margin-top:2px}[data-ins-th-checkbox-host]   .container[data-ins-th-checkbox]{display:block;position:relative;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}[data-ins-th-checkbox-host]   .container[data-ins-th-checkbox]   input[data-ins-th-checkbox]{position:absolute;width:16px;height:16px;opacity:0;cursor:pointer;margin:0}[data-ins-th-checkbox-host]   .checkmark[data-ins-th-checkbox]{height:16px;display:block;width:16px;background-color:#fff;border:solid 1px #979797;border-radius:2px;-webkit-box-sizing:border-box;box-sizing:border-box}[data-ins-th-checkbox-host]   .container[data-ins-th-checkbox]:hover   input[data-ins-th-checkbox] ~ .checkmark[data-ins-th-checkbox]{border-color:#1e86e3}[data-ins-th-checkbox-host]   .container[data-ins-th-checkbox]   input[data-ins-th-checkbox]:checked ~ .checkmark[data-ins-th-checkbox]{background-color:#1e86e3;border:solid 1px #1e86e3}[data-ins-th-checkbox-host]   .checkmark[data-ins-th-checkbox]:after{content:\"\";position:absolute;display:none}[data-ins-th-checkbox-host]   .container[data-ins-th-checkbox]   input[data-ins-th-checkbox]:checked ~ .checkmark[data-ins-th-checkbox]:after{display:block}[data-ins-th-checkbox-host]   .container[data-ins-th-checkbox]   .checkmark[data-ins-th-checkbox]:after{left:6px;top:2px;width:4px;height:9px;border:solid #fff;border-width:0 1px 1px 0;-webkit-transform:rotate(45deg);transform:rotate(45deg)}[data-ins-th-checkbox-host]{display:table-cell;padding:11px 10px;border-bottom:1px solid #e4e6ec;color:#2c3148}[data-ins-th-checkbox-host]   .text-right[data-ins-th-checkbox]{text-align:right}[data-ins-th-checkbox-host]   .text-left[data-ins-th-checkbox]{text-align:right}[data-ins-th-checkbox-host]   .text-center[data-ins-th-checkbox]{text-align:center}[data-ins-th-checkbox-host]   .text-bold[data-ins-th-checkbox]{font-weight:600}"}}export{t as InsThCheckbox};