/*! Built with http://stenciljs.com */
const{h:t}=window.insites;class e{routeInstanceSubItemHandler(){this.routeInstanceSubItem.emit({instance:this.instance,link:this.link})}render(){return t("div",{class:"ins-instance-sub-item"},t("a",{href:this.link,onClick:()=>this.routeInstanceSubItemHandler()},t("span",{class:"instance-sub-item-label"},this.instance)))}static get is(){return"ins-instances-sub-item"}static get encapsulation(){return"shadow"}static get properties(){return{instance:{type:String,attr:"instance"},link:{type:String,attr:"link"}}}static get events(){return[{name:"routeInstanceSubItem",method:"routeInstanceSubItem",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return"[data-ins-instances-sub-item-host]   .ins-instance-sub-item[data-ins-instances-sub-item]:hover{background-color:#e4e6ec}[data-ins-instances-sub-item-host]   a[data-ins-instances-sub-item]{display:block;width:100%;padding:15px 20px 15px 57px;-webkit-box-sizing:border-box;box-sizing:border-box;text-decoration:none;color:#8c94a4;font-size:16px;position:relative}"}}export{e as InsInstancesSubItem};