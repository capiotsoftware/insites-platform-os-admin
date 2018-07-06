/*! Built with http://stenciljs.com */
const{h:e}=window.insites;class t{toggleDropDown(){this.dropDownState=!this.dropDownState}routePageHandler(){this.toggleDropDown(),this.routePage.emit({link:this.profileLink,app:"true",label:"My Profile"})}render(){return e("div",{class:this.dropDownState?"ins-header-user-wrap active":"ins-header-user-wrap"},e("button",{class:"btn-nav ins-huw-toggle"},this.name,e("i",{class:"toggle-icon icon-keyboard-arrow-up"}),e("i",{class:"toggle-icon icon-keyboard-arrow-down"})),e("div",{class:"ins-header-user-options"},e("ins-card",{steady:!0},e("ul",null,e("li",null,e("a",{href:"#",onClick:()=>this.routePageHandler()},e("i",{class:"icon-person"})," My Profile")),e("li",null,e("a",{href:this.logoutLink},e("i",{class:"icon-exit-to-app"})," Logout")))))," ")}static get is(){return"ins-header-user"}static get properties(){return{dropDownState:{state:!0},logoutLink:{type:String,attr:"logout-link"},name:{type:String,attr:"name"},profileLink:{type:String,attr:"profile-link"}}}static get events(){return[{name:"routePage",method:"routePage",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return".ins-header-user-wrap{display:inline-block;padding:0 20px;position:relative;text-align:left}.ins-header-user-wrap .ins-card-wrap{padding:0}.ins-header-user-wrap .icon-keyboard-arrow-up{display:none}.ins-header-user-wrap .btn-nav.ins-huw-toggle{margin:0;padding:10px;font-size:14px;color:#fff;border:none;background:0 0;position:relative;padding-right:30px;outline:0;cursor:pointer;font-family:'Open Sans',sans-serif;opacity:.5;display:block;height:56px}.ins-header-user-wrap .btn-nav.ins-huw-toggle .toggle-icon{font-size:6px;position:absolute;top:calc(50% - 3px);right:10px}.ins-header-user-wrap .ins-header-user-options{width:130%;min-width:174px;position:absolute;right:4px;top:56px;-webkit-box-sizing:border-box;box-sizing:border-box;padding:10px;display:none;z-index:9999}.ins-header-user-wrap .ins-header-user-options ul{padding:0;margin:10px 0;list-style:none}.ins-header-user-wrap .ins-header-user-options ul li{padding:10px 20px}.ins-header-user-wrap .ins-header-user-options ul li a{text-decoration:none;color:#8c94a4}.ins-header-user-wrap .ins-header-user-options ul li a [class^=icon-]{margin-right:15px}.ins-header-user-wrap .ins-header-user-options ul li:hover{background-color:#e4e6ec}.ins-header-user-wrap .ins-header-user-options:hover{display:block}.ins-header-user-wrap.active .btn-nav.ins-huw-toggle{opacity:1}.ins-header-user-wrap:hover .btn-nav.ins-huw-toggle{opacity:1}.ins-header-user-wrap:hover .icon-keyboard-arrow-down{display:none}.ins-header-user-wrap:hover .icon-keyboard-arrow-up{display:block}.ins-header-user-wrap:hover .ins-header-user-options{display:block}"}}export{t as InsHeaderUser};