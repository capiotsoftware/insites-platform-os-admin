/*! Built with http://stenciljs.com */
const{h:e}=window.insites;class t{componentWillLoad(){this.rawTdEls=document.getElementsByTagName("ins-td-checkbox"),this.checkboxes=[...this.rawTdEls]}checkHandler(e){this.onCheckThCheckbox.emit({checked:e})}toggleThCheck(){this.checkboxState=!this.checkboxState,this.checkHandler(this.checkboxState)}thCheckBoxChangeState(e){this.checkboxState=e}render(){return e("div",{class:"ins-th-checkbox-wrap"},e("label",{class:"container"},this.checkboxState?e("input",{type:"checkbox",onChange:()=>this.toggleThCheck(),checked:!0}):e("input",{type:"checkbox",onChange:()=>this.toggleThCheck()}),e("span",{class:"checkmark"})))}static get is(){return"ins-th-checkbox"}static get encapsulation(){return"shadow"}static get properties(){return{checkboxes:{state:!0},checkboxState:{state:!0},rawTdEls:{state:!0},thCheckBoxChangeState:{method:!0}}}static get events(){return[{name:"onCheckThCheckbox",method:"onCheckThCheckbox",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return":host{width:16px;vertical-align:-webkit-baseline-middle;vertical-align:top}:host .ins-th-checkbox-wrap{width:16px;margin:auto;margin-top:2px}:host .container{display:block;position:relative;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host .container input{position:absolute;width:16px;height:16px;opacity:0;cursor:pointer;margin:0}:host .checkmark{height:16px;display:block;width:16px;background-color:#fff;border:solid 1px #979797;border-radius:2px;-webkit-box-sizing:border-box;box-sizing:border-box}:host .container:hover input~.checkmark{border-color:#1e86e3}:host .container input:checked~.checkmark{background-color:#1e86e3;border:solid 1px #1e86e3}:host .checkmark:after{content:\"\";position:absolute;display:none}:host .container input:checked~.checkmark:after{display:block}:host .container .checkmark:after{left:6px;top:2px;width:4px;height:9px;border:solid #fff;border-width:0 1px 1px 0;-webkit-transform:rotate(45deg);transform:rotate(45deg)}:host{display:table-cell;padding:11px 10px;border-bottom:1px solid #e4e6ec;color:#2c3148}:host .text-right{text-align:right}:host .text-left{text-align:right}:host .text-center{text-align:center}:host .text-bold{font-weight:600}"}}export{t as InsThCheckbox};