/*! Built with http://stenciljs.com */
insites.loadBundle("nfltioia",["exports"],function(e){var n=window.insites.h,t=function(){function e(){}return e.prototype.onSelectHandler=function(){this.onSelect.emit({name:this.name,value:this.value})},e.prototype.render=function(){var e=this;return n("div",{class:"v-radio"},n("label",{class:"container"},this.value,this.checked?n("input",{type:"radio",onClick:function(){return e.onSelectHandler()},checked:!0,name:this.name,value:this.value}):n("input",{type:"radio",onClick:function(){return e.onSelectHandler()},name:this.name,value:this.value}),n("span",{class:"checkmark"})))},Object.defineProperty(e,"is",{get:function(){return"ins-radio"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{checked:{type:Boolean,attr:"checked"},name:{type:"Any",attr:"name"},value:{type:"Any",attr:"value"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"onSelect",method:"onSelect",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"ins-radio{display:block}ins-radio .v-radio{display:inline-block}ins-radio .v-radio .container{display:block;position:relative;padding-left:35px;margin-bottom:12px;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ins-radio .v-radio .container input{position:absolute;opacity:0;cursor:pointer}ins-radio .v-radio .checkmark{position:absolute;top:3px;left:0;height:18px;width:18px;border-radius:50%;border:1px solid #afb3bd}ins-radio .v-radio .container input:checked~.checkmark{border:solid 2px #1f86e3}ins-radio .v-radio .checkmark:after{content:\"\";position:absolute;display:none}ins-radio .v-radio .container input:checked~.checkmark:after{display:block}ins-radio .v-radio .container .checkmark:after{top:3px;left:3px;width:8px;height:8px;border-radius:50%;background:#1f86e3}"},enumerable:!0,configurable:!0}),e}();e.InsRadio=t,Object.defineProperty(e,"__esModule",{value:!0})});