/*! Built with http://stenciljs.com */
const{h:e}=window.insites;class t{oninputHandler(e){let t=e.which||e.keyCode;this.oninput.emit({value:e.target.value,keyCode:t})}render(){return this.label?e("div",{class:"ins-input-wrap"},e("div",{class:"ins-sw-in"},e("label",null,this.label),e("input",{type:"text",placeholder:this.placeholder,value:this.value,onKeyUp:e=>this.oninputHandler(e),class:"ins-form-field"}))):e("div",{class:"ins-input-wrap"},e("div",{class:"ins-sw-in"},e("input",{type:"text",placeholder:this.placeholder,value:this.value,onKeyUp:e=>this.oninputHandler(e),class:"ins-form-field"})))}static get is(){return"ins-input"}static get properties(){return{label:{type:String,attr:"label"},placeholder:{type:String,attr:"placeholder"},value:{type:String,attr:"value"}}}static get events(){return[{name:"oninput",method:"oninput",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return".ins-sw-in{position:relative}.ins-sw-in input{-webkit-box-shadow:none;box-shadow:none;font-family:'Open Sans',sans-serif;font-size:14px;font-weight:400;border:1px solid #e4e6ec;border-radius:4px;margin-bottom:20px;padding:.5rem;padding-right:30px}.ins-sw-in input:active,.ins-sw-in input:focus{border-color:#1e86e3;-webkit-box-shadow:none;box-shadow:none}.ins-sw-in input:active+.icon-search,.ins-sw-in input:focus+.icon-search{color:#1e86e3}.ins-sw-in label{font-size:12px;font-weight:600;color:#2c3148;font-family:\"Open Sans\";margin-bottom:2px}"}}export{t as InsInput};