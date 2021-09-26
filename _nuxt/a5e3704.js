(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{622:function(t,e,r){"use strict";r.r(e);r(7),r(4),r(10),r(5),r(11);var n=r(1),o=r(17),c=(r(68),r(16),r(26),r(32),r(59),r(25),r(6),r(30));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={layout:"default",components:{TournamentCard:function(){return r.e(10).then(r.bind(null,628))}},data:function(){return{tournaments:[],filter:{},intitalFilter:{value:null,text:"Не выбрано"},tournamentsLoader:!0,hideIndex:""}},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.resetSnack(),e.next=3,t.fetchData();case 3:t.openLoginOnRegConfirm();case 4:case"end":return e.stop()}}),e)})))()},computed:m(m({},Object(c.c)({getGames:"main/getGames",getPlatforms:"main/getPlatforms",tournamentStatus:"tournaments/status"})),{},{games:function(){var t=[];return this.getGames.map((function(e){return t.push({value:e.id,text:e.title})})),[this.intitalFilter].concat(t)},platforms:function(){var t=[];return this.getPlatforms.map((function(e){return t.push({value:e[0],text:e[1]})})),[this.intitalFilter].concat(t)}}),methods:m(m({},Object(c.b)({resetState:"currentUser/resetState",resetSnack:"snack/resetState",toggleAuthDialog:"main/toggleAuthDialog"})),{},{singOutHandler:function(){this.resetState(),this.$cookies.removeAll(),this.$router.go()},fetchData:function(){var t=arguments,e=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.length>0&&void 0!==t[0]?t[0]:{page:1},r.prev=1,e.tournamentsLoader=!0,r.next=5,e.$api.tournaments.index(n);case 5:if(200!==(o=r.sent).status){r.next=10;break}e.tournaments=o.data.results,r.next=12;break;case 10:throw o.data.code&&"token_not_valid"===o.data.code&&e.singOutHandler(),new Error("Something went wrong");case 12:r.next=17;break;case 14:r.prev=14,r.t0=r.catch(1),console.log("Get tournaments ERROR: ",r.t0.response);case 17:return r.prev=17,e.tournamentsLoader=!1,r.finish(17);case 20:case"end":return r.stop()}}),r,null,[[1,14,17,20]])})))()},setFilter:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"game__platform";t?this.filter[e]=t:delete this.filter[e];var r=m({page:1},this.filter);this.fetchData(r)},removeTournament:function(t){var e=this.tournaments.filter((function(e){return+t.id!=+e.id}));this.tournaments=e},openLoginOnRegConfirm:function(){if(this.$route.query)for(var t in this.$route.query)"reg_confirmed"!==t&&"reset_password_confirmed"!==t||this.toggleAuthDialog(!0)}}),watch:{tournamentStatus:{handler:function(){this.$router.go("/")}},hideIndex:{handler:function(t){this.fetchData()}}}},d=r(42),h=r(39),v=r.n(h),O=r(530),w=r(539),_=r(225),y=r(529),j=r(521),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"6",sm:"4",md:"3"}},[n("v-select",{attrs:{items:t.games,label:"Выбор игры",solo:"",rounded:""},on:{change:function(e){return t.setFilter(e,"game__id")}}})],1),t._v(" "),n("v-col",{attrs:{cols:"6",sm:"4",md:"3"}},[n("v-select",{attrs:{items:t.platforms,label:"Выбор платформы",solo:"",rounded:""},on:{change:function(e){return t.setFilter(e)}}})],1)],1),t._v(" "),t.tournamentsLoader?n("v-progress-circular",{staticClass:"d-flex ma-auto d-flex",attrs:{size:50,width:4,color:"primary",indeterminate:""}}):t._e(),t._v(" "),!t.tournamentsLoader&&t.tournaments.length?n("v-row",{attrs:{justify:"center",align:"center"}},t._l(t.tournaments,(function(e,r){return n("TournamentCard",{key:r,attrs:{loopIndex:r,tournament:e},on:{"update:hideItem":function(e){t.hideIndex=e}}})})),1):t._e(),t._v(" "),t.tournamentsLoader||t.tournaments.length?t._e():n("v-row",{attrs:{justify:"center",align:"center"}},[n("div",{staticClass:"empty-page",attrs:{to:"/"}},[n("img",{staticClass:"header-logo-head",attrs:{src:r(248),alt:"cyberfight"}}),t._v(" "),n("img",{staticClass:"header-logo-str",attrs:{src:r(249),alt:"cyberfight"}}),t._v(" "),n("h1",[t._v("Упс... Турниров нет")])])])],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VCol:O.a,VContainer:w.a,VProgressCircular:_.a,VRow:y.a,VSelect:j.a})}}]);