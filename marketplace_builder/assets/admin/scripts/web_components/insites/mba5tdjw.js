/*! Built with http://stenciljs.com */
const{h:t}=window.insites;class e{clearSortData(){this.order=""}sortHandler(t,e){this.onSort.emit({sortKeyword:t,order:e})}componentWillLoad(){this.sortState(!0)}componentDidLoad(){this.order=this.sorted}sortState(t){"ascending"==this.order?this.order="descending":this.order="ascending",t||this.sortHandler(this.sortKeyword,this.order)}render(){return this.order?t("div",{onClick:()=>this.sortState(!1),class:`sorted ${this.alignment?this.alignment:""}`},t("div",{class:"ins-th-label extra-bold"},this.label,t("span",{class:`icon-arrow-${"ascending"===this.order?"up":"down"}`}))):t("div",{onClick:()=>this.sortState(!1),class:`${this.alignment?this.alignment:""} ${this.bold?"text-bold":""}`},this.label)}static get is(){return"ins-th"}static get encapsulation(){return"shadow"}static get properties(){return{alignment:{type:String,attr:"alignment"},bold:{type:Boolean,attr:"bold"},clearSortData:{method:!0},data:{type:"Any",attr:"data"},label:{type:String,attr:"label"},order:{state:!0},rawThEls:{state:!0},sorted:{type:String,attr:"sorted"},sortKeyword:{type:String,attr:"sort-keyword"}}}static get events(){return[{name:"onSort",method:"onSort",bubbles:!0,cancelable:!0,composed:!0}]}static get style(){return":host{color:#2c3148;cursor:pointer;vertical-align:middle}:host .sorted{font-weight:600}:host .extra-bold{font-weight:700}:host .ins-th-label{display:inline-block}:host .icon-arrow-down,:host .icon-arrow-up{color:#1e86e3;font-size:9px;margin-left:4px}:host{display:table-cell;padding:11px 10px;border-bottom:1px solid #e4e6ec;color:#2c3148}:host .text-right{text-align:right}:host .text-left{text-align:right}:host .text-center{text-align:center}:host .text-bold{font-weight:600}\@font-face{font-family:insites-20-fonticon;src:url(../webfonts/insites-20-fonticon.eot?trsgv5);src:url(../webfonts/insites-20-fonticon.eot?trsgv5#iefix) format('embedded-opentype'),url(../webfonts/insites-20-fonticon.ttf?trsgv5) format('truetype'),url(../webfonts/insites-20-fonticon.woff?trsgv5) format('woff'),url(../webfonts/insites-20-fonticon.svg?trsgv5#insites-20-fonticon) format('svg');font-weight:400;font-style:normal}[class*=\" icon-\"],[class^=icon-]{font-family:insites-20-fonticon!important;speak:none;font-style:normal;font-weight:400;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-content_copy:before{content:\"\\e14d\"}.icon-code:before{content:\"\\e86f\"}.icon-format_bold:before{content:\"\\e238\"}.icon-format_italic:before{content:\"\\e23f\"}.icon-format_list_bulleted:before{content:\"\\e241\"}.icon-link2:before{content:\"\\e157\"}.icon-panorama:before{content:\"\\e40b\"}.icon-strikethrough_s:before{content:\"\\e257\"}.icon-remove:before{content:\"\\e15b\"}.icon-paragraph:before{content:\"\\e948\"}.icon-completed-outcomes:before{content:\"\\e944\"}.icon-disputes:before{content:\"\\e945\"}.icon-number-of-checks:before{content:\"\\e946\"}.icon-total-sales:before{content:\"\\e947\"}.icon-close-1:before{content:\"\\e943\"}.icon-utilities:before{content:\"\\e900\"}.icon-logout-1:before{content:\"\\e901\"}.icon-lock-1:before{content:\"\\e902\"}.icon-arrow-left-1:before{content:\"\\e903\"}.icon-headset-1:before{content:\"\\e904\"}.icon-notification-1:before{content:\"\\e905\"}.icon-settings-1:before{content:\"\\e906\"}.icon-support-1:before{content:\"\\e907\"}.icon-user-1:before{content:\"\\e908\"}.icon-globals:before{content:\"\\e909\"}.icon-image:before{content:\"\\e90a\"}.icon-plugin-store:before{content:\"\\e90b\"}.icon-dashboard:before{content:\"\\e90c\"}.icon-entries:before{content:\"\\e90d\"}.icon-maximize:before{content:\"\\e90e\"}.icon-notepad-1:before{content:\"\\e90f\"}.icon-briefcase-1:before{content:\"\\e910\"}.icon-email-1:before{content:\"\\e911\"}.icon-check-2:before{content:\"\\e912\"}.icon-phone-1:before{content:\"\\e913\"}.icon-analytic-1:before{content:\"\\e914\"}.icon-goal-1:before{content:\"\\e915\"}.icon-minimize-1:before{content:\"\\e916\"}.icon-monitor-1:before{content:\"\\e917\"}.icon-search-1:before{content:\"\\e918\"}.icon-menu-1:before{content:\"\\e919\"}.icon-notepad:before{content:\"\\e91a\"}.icon-phone:before{content:\"\\e91b\"}.icon-notifications:before{content:\"\\e91c\"}.icon-report:before{content:\"\\e91d\"}.icon-add:before{content:\"\\e91e\"}.icon-arrow-back:before{content:\"\\e91f\"}.icon-arrow-down:before{content:\"\\e920\"}.icon-arrow-forward:before{content:\"\\e921\"}.icon-arrow-up:before{content:\"\\e922\"}.icon-attachment:before{content:\"\\e923\"}.icon-cancel:before{content:\"\\e924\"}.icon-check-circle:before{content:\"\\e925\"}.icon-check:before{content:\"\\e926\"}.icon-chevron-left:before{content:\"\\e927\"}.icon-chevron-right:before{content:\"\\e928\"}.icon-clock:before{content:\"\\e929\"}.icon-close:before{content:\"\\e92a\"}.icon-crop:before{content:\"\\e92b\"}.icon-delete:before{content:\"\\e92c\"}.icon-edit:before{content:\"\\e92d\"}.icon-exit-to-app:before{content:\"\\e92e\"}.icon-external-link:before{content:\"\\e92f\"}.icon-file-download:before{content:\"\\e930\"}.icon-file-upload:before{content:\"\\e931\"}.icon-headset:before{content:\"\\e932\"}.icon-keyboard-arrow-down:before{content:\"\\e933\"}.icon-keyboard-arrow-up:before{content:\"\\e934\"}.icon-language:before{content:\"\\e935\"}.icon-link:before{content:\"\\e936\"}.icon-lock:before{content:\"\\e937\"}.icon-mail:before{content:\"\\e938\"}.icon-person:before{content:\"\\e939\"}.icon-play-circle-fill:before{content:\"\\e93a\"}.icon-print:before{content:\"\\e93b\"}.icon-retry:before{content:\"\\e93c\"}.icon-search:before{content:\"\\e93d\"}.icon-settings:before{content:\"\\e93e\"}.icon-today:before{content:\"\\e93f\"}.icon-view:before{content:\"\\e940\"}.icon-warning:before{content:\"\\e941\"}.icon-work:before{content:\"\\e942\"}"}}export{e as InsTh};