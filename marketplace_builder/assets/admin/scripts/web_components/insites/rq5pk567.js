/*! Built with http://stenciljs.com */
const{h:t}=window.insites;class i{constructor(){this.alignment=""}clickEventHandler(t){this.clickable&&this.onClickInsTd.emit(t)}componentWillLoad(){(this.imgLink||this.initial)&&(this.hasImg=!0)}render(){return t("div",{class:"ins-td"},this.hasImg?t("div",{class:"ins-td__image"},this.imgLink?t("img",{src:this.imgLink}):t("span",null,this.initial)):"",t("div",{class:`${this.hasImg?"p-l-45":""}`},t("div",{class:`${this.alignment} ${this.ellipsis?"text-ellipsis":""}`},t("span",{class:`${this.clickable?"clickable":""} ${this.bold?"text-bold":""} ins-label`,onClick:t=>this.clickEventHandler(t)},this.label)),t("slot",null)))}static get is(){return"ins-td"}static get properties(){return{alignment:{type:String,attr:"alignment"},bold:{type:Boolean,attr:"bold"},clickable:{type:Boolean,attr:"clickable"},ellipsis:{type:Boolean,attr:"ellipsis"},hasImg:{state:!0},imgLink:{type:String,attr:"img-link"},initial:{type:String,attr:"initial"},label:{type:String,attr:"label"}}}static get events(){return[{name:"onClickInsTd",method:"onClickInsTd",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return"ins-td{display:table-cell;padding:10px 10px;border-bottom:1px solid #e4e6ec;color:#2c3148;position:relative}ins-td .text-ellipsis{overflow:hidden;text-overflow:ellipsis}ins-td .ins-label.clickable{color:#1e86e3}ins-td .ins-label.clickable:hover{cursor:pointer;font-weight:600}ins-td .p-l-45{padding-left:45px}ins-td .ins-td__image{background:#fff;border:1px solid #e4e6ec;border-radius:50%;width:30px;height:30px;display:inline-block;text-align:center;margin-right:14px;position:absolute;top:calc(50% - 16px)}ins-td .ins-td__image span{color:#8c94a4;font-size:12px;text-transform:uppercase;vertical-align:-webkit-baseline-middle}ins-td .ins-td__image img{border-radius:50%}:host{display:table-cell;padding:11px 10px;border-bottom:1px solid #e4e6ec;color:#2c3148}:host .text-right{text-align:right}:host .text-left{text-align:right}:host .text-center{text-align:center}:host .text-bold{font-weight:600}"}}export{i as InsTd};