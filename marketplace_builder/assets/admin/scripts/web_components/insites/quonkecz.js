/*! Built with http://stenciljs.com */
const{h:t}=window.insites;class e{closeFilter(){this.dropDownState=!1}toggleDropDown(){this.insFilter=document.getElementsByTagName("ins-filter-item"),this.dateFilter=document.getElementsByTagName("ins-filter")[0],this.dateFilter.closeDateFilter(),[...this.insFilter].forEach(t=>{t.closeFilter()}),this.dropDownState=!0}componentDidLoad(){this.closeMenu()}closeMenu(){const t=this;$(window).on("click",function(e){let i=$(e.target).closest(".filter-item__button").length;e.target.matches(".filter-item__button")||i||t.closeFilter()})}filterHandler(t){this.onFilter.emit({name:this.name,option:t}),this.currentFilter=t,this.toggleDropDown()}componentWillLoad(){this.optionsState=this.options,"string"==typeof this.optionsState&&(this.isJSON(this.optionsState)&&(this.optionsState=JSON.parse(this.optionsState)),Array.isArray(this.optionsState)||(this.optionsState=["All"])),this.currentFilter=this.optionsState[0]}isJSON(t){try{JSON.parse(t)}catch(t){return!1}return!0}render(){return t("div",{class:"filter-item"},t("div",{class:"filter-item__button",onClick:()=>this.toggleDropDown()},t("span",{class:"filter-item__button--text"},this.name,": "),t("span",{class:"filter-item__button--option"},this.currentFilter,t("i",{class:"fas icon-keyboard-arrow-down"}))),t("div",{class:this.dropDownState?"filter-item__options active":"filter-item__options"},this.optionsState.map(e=>t("div",{onClick:()=>this.filterHandler(e)},e))))}static get is(){return"ins-filter-item"}static get properties(){return{closeFilter:{method:!0},currentFilter:{state:!0},dateFilter:{state:!0},dropDownState:{state:!0},el:{elementRef:!0},insFilter:{state:!0},name:{type:String,attr:"name"},options:{type:"Any",attr:"options"},optionsState:{state:!0}}}static get events(){return[{name:"onFilter",method:"onFilter",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return"ins-filter-item{display:inline-block;margin-right:15px}ins-filter-item .filter-item{cursor:pointer;position:relative;background-color:#fff}ins-filter-item .filter-item__button{border-radius:4px;background-color:#e4e6ec;padding:7px 7px;color:#2c3148}ins-filter-item .filter-item__button--text{font-weight:600}ins-filter-item .filter-item__button--option{font-weight:400}ins-filter-item .filter-item__button--option .fas{margin-left:8px;margin-left:8px;color:#8c94a4;font-size:6px}ins-filter-item .filter-item__options{font-size:14px;-webkit-box-shadow:0 2px 4px 0 rgba(15,21,38,.14),1px 1px 3px 0 rgba(140,148,164,.2);box-shadow:0 2px 4px 0 rgba(15,21,38,.14),1px 1px 3px 0 rgba(140,148,164,.2);border-radius:4px;padding:7px;display:none;position:absolute;min-width:240px;cursor:pointer;z-index:2;background-color:#fff}ins-filter-item .filter-item__options.active{display:block;top:37px;left:-20px}ins-filter-item .filter-item__options>div{color:#8c94a4;padding:7px 15px;margin:5px 0}ins-filter-item .filter-item__options>div:hover{background-color:#e4e6ec;color:#1a1d2c}"}}export{e as InsFilterItem};