(function(t){function e(e){for(var o,i,l=e[0],n=e[1],u=e[2],p=0,d=[];p<l.length;p++)i=l[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);c&&c(e);while(d.length)d.shift()();return r.push.apply(r,u||[]),s()}function s(){for(var t,e=0;e<r.length;e++){for(var s=r[e],o=!0,l=1;l<s.length;l++){var n=s[l];0!==a[n]&&(o=!1)}o&&(r.splice(e--,1),t=i(i.s=s[0]))}return t}var o={},a={app:0},r=[];function i(e){if(o[e])return o[e].exports;var s=o[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=o,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(s,o,function(e){return t[e]}.bind(null,o));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],n=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var c=n;r.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0310":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("e260"),s("e6cf"),s("a79d");var o=s("2b0e"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[t.error?s("div",{attrs:{id:"error"}},[t._v("You are using this site offline...")]):t._e(),s("div",{staticClass:"home"},[s("router-link",{attrs:{to:"/"}}),s("router-view")],1)])},r=[],i=s("8c4f");o["default"].use(i["a"]);var l={beforeMount(){this.checkOnline()},data(){return{error:!1}},methods:{checkOnline(){addEventListener("offline",()=>{console.log("%c User is OFFLINE ","color:black; font-size:20px"),this.error=!0}),addEventListener("online",()=>{console.log("%c User is ONLINE ","color:blue; font-size:20px"),this.error=!1})}}},n=l,u=(s("5c0b"),s("2877")),c=Object(u["a"])(n,a,r,!1,null,null,null),p=c.exports,d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("router-link",{attrs:{to:"/"}},[t._v("Start")]),s("router-view"),s("h6",[t._v("You are viewing: "+t._s(t.routerPath))]),s("Houses",{attrs:{results:this.result}})],1)},h=[],f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",[s("h1",[t._v("All "+t._s(t.results)+" Listings")]),t._l(t.zooplaData,(function(e){return s("div",{key:e.id,staticClass:"house-card"},[s("h1",{staticClass:"house-city"},[t._v(t._s(e.postTown))]),s("p",{staticClass:"house-short-adress"},[t._v(t._s(e.shortAdress))]),s("div",{staticClass:"houseImg"},[s("img",{attrs:{src:e.imagesBig,alt:""}})]),s("h2",{staticClass:"house-price"},[t._v(t._s(e.pricing))]),s("h3",{staticClass:"house-adress-full"},[t._v(t._s(e.fullAdress))]),s("h4",{staticClass:"house-description"},[t._v(t._s(e.shortDesc))])])})),s("b-pagination",{attrs:{align:"f  ill","total-rows":t.rows,size:"lg"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],2)])},g=[],m=s("2f62");o["default"].use(m["a"]);var b=new m["a"].Store({state:{totalListing:Number,allZooplaData:[{pricing:[],imagesBig:[],shortAdress:[],shortDesc:[],fullAdress:[],postTown:[],roundedResults:null,results:null}]},mutations:{allListings(t,e){console.log("Total Listing is:",e.listing);for(let s=1;s<e.listing;s++)this.state.allZooplaData.push(JSON.parse(JSON.stringify(this.state.allZooplaData[0])));for(let s=0;s<e.listing;s++)this.state.allZooplaData[s].pricing.push("£"+e.price[s]),this.state.allZooplaData[s].imagesBig.push(e.images[s]),this.state.allZooplaData[s].shortAdress.push(e.adress[s]),this.state.allZooplaData[s].shortDesc.push(e.desc[s]),this.state.allZooplaData[s].fullAdress.push(e.fullAdress[s]),this.state.allZooplaData[s].postTown.push(e.postTown[s]);this.state.allZooplaData.roundedResults=1e3*Math.round(e.results/1e3),this.state.allZooplaData.results=e.results,this.state.totalListing=e.listing}},actions:{},modules:{}});function v(t){let e,o=[],a=[],r=[],i=[],l=[],n=[],u="2";const c=s("bc3a");t!==Number&&console.log("Curent Page:",t),//! THIS IS ALL ZOOPLA API DATA FEEDING VUEX
c({method:"get",url:`https://api.zoopla.co.uk/api/v1/property_listings.json?&page_number=${u}&area=london&page_size=100&summarised=true&api_key=nnc2mfhmmbngxyvgpmqy86nz`,responseType:"application/json"}).then((function(t){console.log(t);for(let e=0;e<t.data.listing.length;e++)o.push(t.data.listing[e].price),a.push(t.data.listing[e].image_645_430_url),r.push(t.data.listing[e].street_name),i.push(t.data.listing[e].short_description),l.push(t.data.listing[e].post_town),n.push(t.data.listing[e].displayable_address);e=t.data.result_count,console.log(i,o,r,a,e),b.commit("allListings",{listing:t.data.listing.length,price:o,images:a,adress:r,desc:i,fullAdress:n,postTown:l,results:e})})).catch(t=>{console.error("Error from Zoopla API:",t)})}var _={created(){this.copyZooplaObj()},data(){return{zooplaData:[{pricing:this.$store.state.allZooplaData[0].pricing[0],imagesBig:this.$store.state.allZooplaData[0].imagesBig[0],shortAdress:this.$store.state.allZooplaData[0].shortAdress[0],shortDesc:this.$store.state.allZooplaData[0].shortDesc[0],fullAdress:this.$store.state.allZooplaData[0].fullAdress[0],postTown:this.$store.state.allZooplaData[0].postTown[0]}],rows:100,currentPage:1}},props:{results:{type:Number}},methods:{log(t){console.log(t)},copyZooplaObj(){for(let t=1;t<this.$store.state.totalListing;t++)this.zooplaData.push(JSON.parse(JSON.stringify({pricing:this.$store.state.allZooplaData[t].pricing[0],imagesBig:this.$store.state.allZooplaData[t].imagesBig[0],shortAdress:this.$store.state.allZooplaData[t].shortAdress[0],shortDesc:this.$store.state.allZooplaData[t].shortDesc[0],fullAdress:this.$store.state.allZooplaData[t].fullAdress[0],postTown:this.$store.state.allZooplaData[t].postTown[0]})))},zooplaPageNumber(){v(this.currentPage)}},watch:{currentPage(){this.zooplaPageNumber()}}},w=_,y=(s("f5e5"),Object(u["a"])(w,f,g,!1,null,"7e0fc4f6",null)),x=y.exports,D={name:"Home",components:{Houses:x},data(){return{result:this.$store.state.allZooplaData.results,routerPath:this.$router.currentRoute.path}},props:{id:{type:String}}},S=D,$=Object(u["a"])(S,d,h,!1,null,null,null),Z=$.exports,k=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"start-wrapper"},[s("div",{staticClass:"welcome-container"},[s("div",{staticClass:"wrapper"},[s("h1",[t._v("Welcome to Houses UK")]),s("p",[t._v("Select an option below to find your new home")]),s("div",{staticClass:"all-listings-container"},[s("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",value:"View all houses currently available on the market",expression:"\n            'View all houses currently available on the market'\n          ",modifiers:{hover:!0,top:!0}}],attrs:{variant:"primary",size:"lg"},on:{click:function(e){return t.$router.push("allListings")}}},[t._v("Browse All Homes")]),s("div",{attrs:{id:"listings-total"}},[t._v(t._s(t.startListingCount)+"+ listings")])],1),s("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.top",value:"Narrow down your search by e.g. adress, post code, city",expression:"\n          'Narrow down your search by e.g. adress, post code, city'\n        ",modifiers:{hover:!0,top:!0}}],attrs:{variant:"primary",size:"lg"},on:{click:function(e){return t.$router.push("search")}}},[t._v("Area Search")]),t._m(0)],1)]),s("div",{staticClass:"carousel-container"},[s("b-carousel",{staticClass:"carousel-style",staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{background:"#ababab",controls:!1,fade:!0,id:"carousel-1",indicators:!1,interval:4e3,"img-width":"1024","img-height":"480","no-hover-pause":!0},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},[s("b-carousel-slide",{attrs:{"img-src":"https://i.ibb.co/bmZTwjH/photo-1519227355453-8f982e425321-ixlib-rb-1-2.jpg"}}),s("b-carousel-slide",{attrs:{"img-src":"https://i.ibb.co/KbQhwqY/photo-1459535653751-d571815e906b-ixlib-rb-1-2.jpg"}}),s("b-carousel-slide",{attrs:{"img-src":"https://i.ibb.co/7tf8SZJ/photo-1582268611958-ebfd161ef9cf-ixid-MXwx-Mj-A3f-DB8-MHxwa-G90by1w-YWdlf-Hx8f-GVuf-DB8f-Hw-ixlib-rb.jpg"}})],1)],1)])},O=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"powered"},[s("u",[t._v("Powered by zoopla API")])])}],j={mounted(){this.launchToVueX()},data(){return{slide:0,sliding:!0,zooplaData:{resultCount:Number}}},methods:{onSlideStart(){this.sliding=!0},onSlideEnd(){this.sliding=!1},launchToVueX(){v()}},computed:{startListingCount(){return this.$store.state.allZooplaData.roundedResults}}},P=j,z=(s("6e53"),Object(u["a"])(P,k,O,!1,null,"4e0963fb",null)),A=z.exports,C=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("router-link",{attrs:{to:"/"}},[t._v("Start")]),s("router-view"),s("h6",[t._v("You are viewing: "+t._s(t.routerPath))]),s("Search",{on:{"log-me":t.logger}})],1)},T=[],E=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{attrs:{id:"nav"}}),s("b-container",[s("div",{attrs:{role:"group"}},[s("label",{attrs:{for:"input-live"}},[t._v("Town:")]),s("b-form-input",{attrs:{id:"input-live",state:t.nameState,"aria-describedby":"input-live-help input-live-feedback",placeholder:"London",trim:"",size:"lg  "},on:{keydown:function(e){return t.$emit("log-me",{town:["EMITT WORKING",t.town]})}},model:{value:t.town,callback:function(e){t.town=e},expression:"town"}}),t.town?s("b-form-invalid-feedback",{attrs:{id:"input-live-feedback"}},[t._v(" Enter at least 3 letters ")]):t._e(),s("b-form-text",{attrs:{id:"input-live-help"}},[t._v("This field is required.")])],1),s("label",{attrs:{for:"adress-input"}},[t._v("Enter an adress")]),s("b-form-input",{attrs:{id:"adress-input",size:"lg",placeholder:"94 Highfield Road"},model:{value:t.adress,callback:function(e){t.adress=e},expression:"adress"}}),s("label",{attrs:{for:"postcode-input"}},[t._v("Postcode")]),s("b-form-input",{attrs:{id:"postcode-input",size:"lg",placeholder:"SW1W0NY",maxlength:"7",formatter:t.formatter},model:{value:t.postcode,callback:function(e){t.postcode=e},expression:"postcode"}}),t.postcode.length>0?s("div",[t._v("Characters left:"+t._s(t.postcodeLimit))]):t._e(),s("label",{attrs:{for:"max-price-input"}},[t._v("Maximum Price Range In £")]),s("b-form-input",{attrs:{id:"max-price-input",size:"lg",placeholder:"Enter a maxium price"},model:{value:t.priceMax,callback:function(e){t.priceMax=e},expression:"priceMax"}}),s("b-button",{attrs:{variant:"warning",size:"lg"},on:{click:t.onSubmitZooplaData}},[t._v(t._s(t.submitForm))])],1)],1)},L=[];s("25f0");const N=s("bc3a");var M={data(){return{types:["text","number","search","url","date"],adress:"",town:"",text:"",postcode:"",postcodeLimit:7,priceMax:"",submitForm:"Enter required field"}},computed:{nameState(){return this.town.length>2}},methods:{formatter(t){return t.toUpperCase()},onSubmitZooplaData(){N({method:"get",url:`https://api.zoopla.co.uk/api/v1/property_listings.json?api_key=nnc2mfhmmbngxyvgpmqy86nz&page_size=100&summarised=true&area=${this.town}&postcode=${this.postcode}&street=${this.adress}&maximum_price=${this.priceMax}`,responseType:"application/json"}).then((function(t){console.log("From on click function",t.data)}))}},watch:{postcode:function(){let t=this.postcode.toString().length;this.postcodeLimit=7-t},town(){this.town.length>=3?this.submitForm="Search Houses":this.town.length<3&&(this.submitForm="Enter required field")}}},H=M,B=Object(u["a"])(H,E,L,!1,null,null,null),I=B.exports,R={name:"Home",components:{Search:I},methods:{logger(t){console.log(t)}},data(){return{routerPath:this.$router.currentRoute.path}}},F=R,J=Object(u["a"])(F,C,T,!1,null,null,null),q=J.exports;o["default"].use(i["a"]);const Y=[{path:"/",name:"Home",component:A},{path:"/allListings",name:"AllListings",component:Z,props:!0},{path:"/search",name:"Search",component:q}],V=new i["a"]({mode:"hash",base:"/",routes:Y});var W=V,U=s("5f5b"),G=s("b1e0");s("f9e3"),s("2dd8"),s("fb98");o["default"].config.productionTip=!1,o["default"].use(U["a"]),o["default"].use(G["a"]),new o["default"]({router:W,store:b,render:t=>t(p)}).$mount("#app")},"5c0b":function(t,e,s){"use strict";s("9c0c")},"6e53":function(t,e,s){"use strict";s("0310")},7687:function(t,e,s){},"9c0c":function(t,e,s){},f5e5:function(t,e,s){"use strict";s("7687")},fb98:function(t,e,s){}});
//# sourceMappingURL=app.c2e78bd1.js.map