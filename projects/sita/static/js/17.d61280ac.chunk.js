(this["webpackJsonpatko-mvp-frontend"]=this["webpackJsonpatko-mvp-frontend"]||[]).push([[17],{3897:function(e,t,a){},3898:function(e,t,a){},3899:function(e,t,a){},3998:function(e,t,a){"use strict";a.r(t);var n=a(8),i=(a(140),a(63)),r=a.n(i),c=a(0),l=a.n(c),s=(a(159),a(93)),o=a.n(s),u=(a(38),a(21)),m=a.n(u),d=a(1),p=a.n(d),b=a(2),v=a(6),f=(a(149),a(69)),y=a.n(f),g=(a(3897),a(57)),E=a(28),O=a(10),h=a(25),N=a(11),j=(a(443),a(142)),x=a(324),C=a(22),S=a(13),w=y.a.Text,k=(y.a.Link,y.a.Title);var D=Object(E.b)((function(e){var t=e.Suppliers,a=e.Products;return t.basicDetails,{transportInfo:a.TransportProduct.transportInfo}}),(function(e){return{createNewInterCitySameDay:Object(O.b)(x.b,e),getCityListNoParams:Object(O.b)(j.b,e)}}))((function(e){e.values;var t,a,i,r=Object(g.i)().id,s=Object(g.g)(),u=e.setShowModal,d=(e.supplierTypes,e.servicesOffered,Object(c.useState)({city:""})),b=Object(n.a)(d,2),f=(b[0],b[1],Object(c.useState)(["div1"])),y=Object(n.a)(f,2),E=(y[0],y[1],Object(c.useState)([])),O=Object(n.a)(E,2),j=O[0],x=O[1],D=Object(N.d)(Object(v.a)(p.a.mark((function t(){var a,n,i=arguments;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=i.length>0&&void 0!==i[0]?i[0]:"",t.next=3,e.getCityListNoParams(a);case 3:n=t.sent,x(null===n||void 0===n?void 0:n.content);case 5:case"end":return t.stop()}}),t)}))),300);Object(c.useEffect)((function(){D()}),[]);var R=[];return e.routeList.forEach((function(e){e.routeCities.forEach((function(e){R.find((function(t){return t.code==e.city.code}))||R.push(e.city)}))})),l.a.createElement(o.a,{visible:!0,keyboard:!1,footer:null,width:"518px",destroyOnClose:!0,className:"add-supplier-modal",closeIcon:"new"===r?l.a.createElement("img",{onClick:function(){return s.push("/resources/suppliers")},alt:"close",src:"/img/black-cancel-circle.svg"}):l.a.createElement("img",{onClick:function(){return e.setActiveRouteDetail({}),void u(!1)},alt:"close",src:"/img/black-cancel-circle.svg"})},l.a.createElement("div",{className:"supplier-modal","data-test":"supplier-modal",id:"new-transport-modal"},l.a.createElement(k,{level:3},"Add Route"),l.a.createElement(S.e,{enableReinitialize:!0,validationSchema:h.f().shape({city:h.a().of(h.f({city:h.g().required("City is required")})).min(2,"Please select minimum two cities").required("City is required")}),initialValues:{city:e.activeRouteDetail.routeCities?null===e||void 0===e||null===(t=e.activeRouteDetail)||void 0===t?void 0:t.routeCities.map((function(e){return{city:e.city.code}})):[{city:null===e||void 0===e||null===(a=e.transportInfo)||void 0===a||null===(i=a.city)||void 0===i?void 0:i.code}]},onSubmit:e.onSubmit,render:function(t){var a=t.values,n=t.isSubmitting;return l.a.createElement(S.d,null,l.a.createElement(S.a,{name:"city",render:function(e){return l.a.createElement(w,{type:"danger"},"string"==typeof e?e:"")}}),l.a.createElement(S.c,{name:"city",render:function(t){return l.a.createElement("div",null,l.a.createElement("div",{className:"tag-line bold"},"Starting from ",e.transportInfo.city.name),a&&a.city.map((function(n,i){var r;return l.a.createElement("div",{key:i,className:"flex items-center"},l.a.createElement("div",{style:{width:"100%"},className:"mt-4 mb-0"},l.a.createElement("div",{className:"flex items-center"},l.a.createElement("div",{style:{width:"100%"}},l.a.createElement(S.b,{disabled:0==i,style:{width:"100%"},component:C.d,name:"city.".concat(i,".city"),label:0==i?"Starting City":"Select City",value:a.city[i].city,getPopupContainer:function(){return document.getElementById("new-transport-modal")},optionValueKey:"code",showSearch:!0,selectOptions:Object(N.n)(Object(N.n)(j,R,"code"),[null===e||void 0===e||null===(r=e.transportInfo)||void 0===r?void 0:r.city],"code"),filterOption:!1,onSearch:function(e){D(e)},onDropdownVisibleChange:function(e){return!e&&D("")}})),i>0&&a.city.length>2&&l.a.createElement("img",{style:{marginLeft:"18px",marginTop:"-14px"},className:"cursor-pointer",src:"/img/trash-blue.svg",onClick:function(){t.remove(i)}}))))})),l.a.createElement("div",{style:{cursor:"pointer"},onClick:function(){return t.push({city:""})},className:"add-route"},l.a.createElement("img",{src:"/img/add-blue.svg",className:"cursor-pointer"}),l.a.createElement("span",{style:{paddingLeft:"7px"}},"ADD MORE CITIES")),l.a.createElement("div",{className:"flex flex-start"},l.a.createElement(m.a,{style:{marginTop:"34px"},loading:n,type:"primary",htmlType:"submit",className:"capitalize"},n?"Creating...":"Save Route")))}}))}})))})),R=a(160),I=a(3863),T="interCitySameDayList";var L=Object(E.b)((function(e){return{routeList:e.Products.TransportProduct.routes.routeCities.data}}),(function(e){return{getNewInterCitySameDayList:Object(O.b)(x.g,e),createNewInterCitySameDay:Object(O.b)(x.b,e),updateInterCitySameDayRoute:Object(O.b)(x.i,e),deleteInterCitySingleDayRoute:Object(O.b)(x.e,e)}}))((function(e){y.a.Text,y.a.Link;var t,a=y.a.Title,i=(e.values,Object(N.q)().get("stage")),r=Object(g.i)().id,s=Object(c.useState)(!0),u=Object(n.a)(s,2),d=(u[0],u[1],Object(c.useState)(!1)),f=Object(n.a)(d,2),E=f[0],O=f[1],h=Object(c.useState)(""),j=Object(n.a)(h,2),x=j[0],C=j[1],S=Object(c.useState)({city:""}),w=Object(n.a)(S,2),k=w[0],L=(w[1],Object(c.useState)(!1)),A=Object(n.a)(L,2),M=A[0],P=A[1],q=Object(c.useState)(!1),V=Object(n.a)(q,2),z=V[0],_=V[1];Object(c.useEffect)((function(){}),[e.routeList.length]),Object(c.useEffect)((function(){E||(C(""),P(!1))}),[E]),Object(c.useEffect)((function(){z||C("")}),[z]);var W=function(){var t=Object(v.a)(p.a.mark((function t(a,n){var c,l;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.setSubmitting,(c=Object(b.a)({},a)).transportRouteCities=c.city,delete c.city,!x||M){t.next=9;break}return t.next=7,e.updateInterCitySameDayRoute(r,x.id,"",c);case 7:t.next=13;break;case 9:return t.next=11,e.createNewInterCitySameDay(r,c);case 11:l=t.sent,l.data;case 13:return t.next=15,e.getNewInterCitySameDayList(r,i,T);case 15:O(!1);case 16:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),B=function(){var e=Object(v.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:O(!0),C(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(){var t=Object(v.a)(p.a.mark((function t(){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.deleteInterCitySingleDayRoute(r,x.id);case 2:return t.next=4,e.getNewInterCitySameDayList(r,i,T);case 4:_(!1);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return l.a.createElement("div",{className:"view-routes-same-day"},l.a.createElement(R.a,{loadingKey:T},e.routeList.length?l.a.createElement("div",{className:"listing-area"},l.a.createElement("p",{className:"bold",style:{color:"#333333"}},"Available Routes"),e.readOnly?null:l.a.createElement("div",{onClick:function(){return O(!0)},className:"mt-10 button-dashed"},l.a.createElement("img",{className:"mr-10",src:"/img/plus.svg"}),l.a.createElement("p",{onClick:function(){return O(!0)}},"Add NEW ROUTE")),null===(t=e.routeList)||void 0===t?void 0:t.map((function(t,a){var n;return l.a.createElement("div",{className:"list-contacts mt-10"},l.a.createElement("div",null,l.a.createElement("div",{className:"list-contacts-flex list mb-10"},l.a.createElement("div",{className:"medium flex",style:{overflow:"hidden",flexWrap:"wrap"}},null===(n=t.routeCities)||void 0===n?void 0:n.map((function(e,a){var n;return l.a.createElement(l.a.Fragment,null,a%5==0&&l.a.createElement("br",null),l.a.createElement("p",{style:{padding:"0 3px"},className:"medium 1"},"".concat(null===e||void 0===e||null===(n=e.city)||void 0===n?void 0:n.name," ").concat(a!==t.routeCities.length-1?"|  ":"")))}))),e.readOnly?null:l.a.createElement("div",{className:"flex justify-end items-center"},l.a.createElement(I.a,{onClick:function(){B(t),P(!0)},style:{color:"#3362fa",fontSize:"17px"},className:"cursor-pointer mr-10"}),l.a.createElement("img",{onClick:function(){return B(t)},src:"/img/edit-blue.svg",className:"cursor-pointer"}),l.a.createElement("img",{onClick:function(){return function(e){_(!0),C(e)}(t)},src:"/img/trash-blue.svg",className:"cursor-pointer ml-10"})))))})),l.a.createElement("button",{style:{marginTop:"57px",minHeight:"unset",padding:"11px 20px",border:"0 !important"},className:"ant-btn-primary no-border",onClick:function(){return e.onNext()}},!e.readOnly&&"Save & "," Continue")):l.a.createElement("div",{className:"flex flex-col justify-center items-center"},l.a.createElement("img",{style:{marginTop:"122px"},src:"/img/no-routes.png"}),l.a.createElement("div",{style:{color:"#575b60"},className:"text-16 mt-20"},"No Routes Available"),l.a.createElement("div",{style:{color:"#abadaf",paddingTop:"4px",maxWidth:"285px",margin:"0 auto"},className:"text-center"},"You\u2019ll be able to see available routes here once you start adding them."),e.readOnly?null:l.a.createElement("button",{onClick:function(){return C(""),void O(!0)},style:{marginTop:"38px",minHeight:"unset",padding:"11px 20px",border:"0 !important"},className:"ant-btn-primary no-border"},"Add New Route"))),E&&l.a.createElement(D,{activeRouteDetail:x,onSubmit:W,routeList:e.routeList,setShowModal:O,currentLocationValues:k,setActiveRouteDetail:C}),l.a.createElement(o.a,{visible:z,keyboard:!1,footer:null,width:"518px",destroyOnClose:!0,className:"add-supplier-modal",onOk:F,onCancel:function(){_(!1)},closeIcon:"new"===r?l.a.createElement("img",{alt:"close",src:"/img/black-cancel-circle.svg"}):l.a.createElement("img",{onClick:function(){return O(!1)},alt:"close",src:"/img/black-cancel-circle.svg"})},l.a.createElement("div",{className:"supplier-modal"},l.a.createElement(a,{level:4},"Are you sure you want to delete this route?"),e.readOnly?null:l.a.createElement(m.a,{onClick:function(){return F()},style:{marginTop:"34px"},type:"primary",htmlType:"submit",className:"capitalize"},"Delete"))))})),A=(a(3898),a(18)),M=(a(118),a(54)),P=a.n(M),q=a(19),V=(a(14),a(89)),z=(a(3899),a(395),y.a.Text),_=(y.a.Link,y.a.Title),W=[{name:"ARRIVAL",value:"arrival"},{name:"DEPARTURE",value:"departure"},{name:"HALF DAY",value:"half-day"},{name:"FULL DAY",value:"full-day"}];var B=Object(E.b)((function(e){var t=e.Suppliers,a=e.Products;return t.basicDetails,{transportInfo:a.TransportProduct.transportInfo}}),(function(e){return{createNewSupplier:Object(O.b)(V.e,e),getCityListNoParams:Object(O.b)(j.b,e),getPublishedSuppliersListByType:Object(O.b)(V.h,e)}}))((function(e){var t,a,i,r,s,u,d=e.currentLocationValues,f=Object(g.i)().id,y=Object(g.g)(),E=Object(c.useState)(["div1"]),O=Object(n.a)(E,2),j=(O[0],O[1],e.setShowModal),x=(e.supplierTypes,e.servicesOffered,Object(c.useState)([])),w=Object(n.a)(x,2),k=w[0],D=w[1],R=Object(c.useState)({city:"",numberOfNights:""}),I=Object(n.a)(R,2),T=(I[0],I[1]),L=(h.f().shape({name:h.g().min(2,"Too Short!").max(100,"Too Long!").required("Company name is required"),type:h.g().required("Select supplier type"),services:h.a().of(h.g()).min(1,"Select atleast one service")}),Object(N.d)(Object(v.a)(p.a.mark((function t(){var a,n,i=arguments;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=i.length>0&&void 0!==i[0]?i[0]:"",t.next=3,e.getCityListNoParams(a);case 3:n=t.sent,D(null===n||void 0===n?void 0:n.content);case 5:case"end":return t.stop()}}),t)}))),300));Object(c.useEffect)((function(){T(Object(b.a)({},d)),L()}),[]);var M=[];return e.routeList.forEach((function(e){e.routeCities.forEach((function(e){M.find((function(t){return t.code==e.city.code}))||M.push(e.city)}))})),l.a.createElement(o.a,{visible:!0,keyboard:!1,footer:null,width:"821px",destroyOnClose:!0,className:"add-supplier-modal",closeIcon:"new"===f?l.a.createElement("img",{onClick:function(){return y.push("/resources/suppliers")},alt:"close",src:"/img/black-cancel-circle.svg"}):l.a.createElement("img",{onClick:function(){return e.setActiveRouteDetail({}),void j(!1)},alt:"close",src:"/img/black-cancel-circle.svg"})},l.a.createElement("div",{className:"add-new-multi-route-modal supplier-modal","data-test":"supplier-modal",id:"new-transport-modal"},l.a.createElement(_,{level:3},"Add Route"),l.a.createElement(S.e,(u={validationSchema:h.f().shape({city:h.a().min(2,"Please select minimum two cities").of(h.f({city:h.g().required("City is required"),numberOfNights:h.e().typeError("Number of nights is required").required("Number of nights is required")})).required("City is required")}),enableReinitialize:!0,validateOnChange:!0,validateOnBlur:!1,initialValues:{extraServices:(null===(t=e.activeRouteDetail)||void 0===t?void 0:t.extraServices)||[],city:e.activeRouteDetail.routeCities?e.activeRouteDetail.routeCities:[""]}},Object(A.a)(u,"initialValues",{extraServices:(null===(a=e.activeRouteDetail)||void 0===a?void 0:a.extraServices)||[],city:e.activeRouteDetail.routeCities?null===e||void 0===e||null===(i=e.activeRouteDetail)||void 0===i?void 0:i.routeCities.map((function(e){return{city:e.city.code,numberOfNights:e.numberOfNights}})):[{city:null===e||void 0===e||null===(r=e.transportInfo)||void 0===r||null===(s=r.city)||void 0===s?void 0:s.code,numberOfNights:"0"}]}),Object(A.a)(u,"onSubmit",e.onSubmit),Object(A.a)(u,"render",(function(t){var a=t.values,n=t.isSubmitting,i=t.setFieldValue;return l.a.createElement(S.d,null,l.a.createElement(S.a,{name:"city",render:function(e){return l.a.createElement(z,{type:"danger"},"string"==typeof e?e:"")}}),l.a.createElement(S.c,{name:"city",render:function(t){return l.a.createElement("div",null,l.a.createElement("div",{className:"tag-line bold"},"Starting from ",e.transportInfo.city.name),a&&a.city.map((function(n,i){var r;return l.a.createElement("div",{style:{width:"100%"},className:"mt-0 mb-0",key:i},l.a.createElement("div",{className:"flex items-start"},l.a.createElement("div",{style:{width:"65%"}},0==i&&l.a.createElement("div",{className:"tag-line bold"},"No of nights"),l.a.createElement(S.b,{style:{width:"100%"},component:C.d,disabled:0==i,name:"city.".concat(i,".city"),label:0==i?"Starting City":"Select City",value:a.city[i].city,getPopupContainer:function(){return document.getElementById("new-transport-modal")},optionValueKey:"code",showSearch:!0,selectOptions:Object(N.n)(Object(N.n)(k,M,"code"),[null===e||void 0===e||null===(r=e.transportInfo)||void 0===r?void 0:r.city],"code"),filterOption:!1,onSearch:function(e){L(e)},onDropdownVisibleChange:function(e){return!e&&L("")}})),l.a.createElement("div",{style:{marginLeft:"20px"},className:"night-input-wrap"},0==i&&l.a.createElement("div",{className:"tag-line bold"},"No of nights"),l.a.createElement(S.b,{className:"nights-input",label:"",type:"name",component:C.b,name:"city.".concat(i,".numberOfNights"),value:a.city[i].numberOfNights,validate:function(e){var t;return e<0?"This field cannot be negative":(null===(t=a.city)||void 0===t?void 0:t.find((function(e){return(null===e||void 0===e?void 0:e.numberOfNights)>0})))?"":"Sum of all nights cannot be zero"},hasFeedback:!0})),l.a.createElement("img",{onClick:function(){return i>0&&a.city.length>2&&t.remove(i)},style:{marginLeft:"18px",marginTop:"0px",marginBottom:"31px",visibility:i>0&&a.city.length>2?"visible":"hidden"},className:"cursor-pointer mt-14",src:"/img/trash-blue.svg"})))})),l.a.createElement("div",{style:{cursor:"pointer"},onClick:function(){return t.push({city:"",numberOfNights:"0"})},className:"add-route"},l.a.createElement("img",{src:"/img/add-blue.svg",className:"cursor-pointer"}),l.a.createElement("span",{style:{paddingLeft:"7px"}},"ADD MORE CITIES")),l.a.createElement("div",{className:"tag-line bold mt-20"},"Extra services in the starting city"),l.a.createElement("div",{className:"mt-4 form-grid grid-4"},W.map((function(e){return l.a.createElement(P.a,{checked:a.extraServices.find((function(t){return t==e.value})),value:e.value,onChange:function(e){var t=e.target.checked;i("extraServices",t?[].concat(Object(q.a)(a.extraServices),[e.target.value]):a.extraServices.filter((function(t){return t!=e.target.value})))}},e.name)}))),l.a.createElement("div",{className:"flex flex-start"},l.a.createElement(m.a,{style:{marginTop:"34px"},loading:n,type:"primary",htmlType:"submit",className:"capitalize"},n?"Creating...":"Save Route")))}}))})),u))))})),F=a(74);var H=Object(E.b)((function(e){return{multiRouteList:e.Products.TransportProduct.routes.multiRouteCities.data}}),(function(e){return{getInterCityMultiDayList:Object(O.b)(x.f,e),createNewInterCityMultiDay:Object(O.b)(x.a,e),deleteInterCityMultiDayRoute:Object(O.b)(x.d,e),updateInterCityMultiDayRoute:Object(O.b)(x.h,e)}}))((function(e){y.a.Text,y.a.Link;var t,a=y.a.Title,i=(e.values,Object(g.i)().id),r=Object(N.q)().get("stage"),s=Object(c.useState)(!1),u=Object(n.a)(s,2),d=u[0],f=u[1];Object(c.useEffect)((function(){}),[e.multiRouteList.length]);var E=function(){var t=Object(v.a)(p.a.mark((function t(a,n){var c,l;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.setSubmitting,(c=Object(b.a)({},a)).transportRouteCities=c.city,delete c.city,0!=F.Object.keys(M).length&&!d){t.next=11;break}return t.next=7,e.createNewInterCityMultiDay(i,c);case 7:l=t.sent,l.data,t.next=20;break;case 11:return t.prev=11,t.next=14,e.updateInterCityMultiDayRoute(i,M.id,"",c);case 14:t.sent,t.next=20;break;case 17:t.prev=17,t.t0=t.catch(11),F.console.log(t.t0);case 20:return t.next=22,e.getInterCityMultiDayList(i,r,"interCityMultiDayRoutes");case 22:S(!1);case 23:case"end":return t.stop()}}),t,null,[[11,17]])})));return function(e,a){return t.apply(this,arguments)}}(),O=Object(c.useState)(!0),h=Object(n.a)(O,2),j=(h[0],h[1],Object(c.useState)(!1)),x=Object(n.a)(j,2),C=x[0],S=x[1],w=Object(c.useState)(!1),k=Object(n.a)(w,2),D=k[0],T=k[1],L=Object(c.useState)({}),A=Object(n.a)(L,2),M=A[0],P=A[1],q=Object(c.useState)({city:"",nights:"1"}),V=Object(n.a)(q,2),z=V[0];V[1];Object(c.useEffect)((function(){C||(P(""),f(!1))}),[C]),Object(c.useEffect)((function(){D||P("")}),[D]);var _=function(){var t=Object(v.a)(p.a.mark((function t(){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.deleteInterCityMultiDayRoute(i,M.id);case 2:return t.next=4,e.getInterCityMultiDayList(i,r,"interCityMultiDayRoutes");case 4:T(!1);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),W=function(){var e=Object(v.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:S(!0),P(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return l.a.createElement("div",{className:"view-routes-multi-day"},e.multiRouteList.length?l.a.createElement("div",{className:"listing-area"},l.a.createElement("p",{className:"bold",style:{color:"#333333"}},"Available Routes"),e.readOnly?null:l.a.createElement("div",{onClick:function(){return S(!0)},className:"mt-10 button-dashed"},l.a.createElement("img",{className:"mr-10",src:"/img/plus.svg"}),l.a.createElement("p",{onClick:function(){return S(!0)}},"Add NEW ROUTE")),l.a.createElement(R.a,{loadingKey:"interCityMultiDayRoutes"},null===(t=e.multiRouteList)||void 0===t?void 0:t.map((function(t,a){var n;return l.a.createElement("div",{className:"list-contacts mt-10"},l.a.createElement("div",null,l.a.createElement("div",{className:"list-contacts-flex list mb-10"},l.a.createElement("div",{className:"medium flex",style:{overflow:"hidden",flexWrap:"wrap"}},null===(n=t.routeCities)||void 0===n?void 0:n.map((function(e,a){var n;return l.a.createElement("p",{style:{padding:"0 3px"},className:"medium 1"},"".concat(null===e||void 0===e||null===(n=e.city)||void 0===n?void 0:n.name," ").concat(e.numberOfNights?e.numberOfNights+"N":""," ").concat(a!==t.routeCities.length-1?"|  ":""))}))),e.readOnly?null:l.a.createElement("div",{className:"flex justify-end items-center"},l.a.createElement(I.a,{onClick:function(){W(t),f(!0)},style:{color:"#3362fa",fontSize:"17px"},className:"cursor-pointer mr-10"}),l.a.createElement("img",{onClick:function(){return W(t)},src:"/img/edit-blue.svg",className:"cursor-pointer"}),l.a.createElement("img",{onClick:function(){return function(e){T(!0),P(e)}(t)},src:"/img/trash-blue.svg",className:"cursor-pointer ml-10"})))))}))),l.a.createElement("button",{style:{marginTop:"57px",minHeight:"unset",padding:"11px 20px",border:"0 !important"},className:"ant-btn-primary no-border",onClick:function(){return e.onNext()}},!e.readOnly&&"Save & "," Continue")):l.a.createElement("div",{className:"flex flex-col justify-center items-center"},l.a.createElement("img",{style:{marginTop:"122px"},src:"/img/no-routes.png"}),l.a.createElement("div",{style:{color:"#575b60"},className:"text-16 mt-20"},"No Routes Available"),l.a.createElement("div",{style:{color:"#abadaf",paddingTop:"4px",maxWidth:"285px",margin:"0 auto"},className:"text-center"},"You\u2019ll be able to see available routes here once you start adding them."),e.readOnly?null:l.a.createElement("button",{onClick:function(){return P(""),void S(!0)},style:{marginTop:"38px",minHeight:"unset",padding:"11px 20px",border:"0 !important"},className:"ant-btn-primary no-border"},"Add New Route")),C&&l.a.createElement(B,{setShowModal:S,currentLocationValues:z,onSubmit:E,activeRouteDetail:M,setActiveRouteDetail:P,routeList:e.multiRouteList}),l.a.createElement(o.a,{visible:D,keyboard:!1,footer:null,width:"518px",destroyOnClose:!0,className:"add-supplier-modal",onOk:_,onCancel:function(){T(!1)},closeIcon:"new"===i?l.a.createElement("img",{alt:"close",src:"/img/black-cancel-circle.svg"}):l.a.createElement("img",{onClick:function(){return S(!1)},alt:"close",src:"/img/black-cancel-circle.svg"})},l.a.createElement("div",{className:"supplier-modal"},l.a.createElement(a,{level:4},"Are you sure you want to delete this route?"),e.readOnly?null:l.a.createElement(m.a,{onClick:function(){return _()},style:{marginTop:"34px"},type:"primary",htmlType:"submit",className:"capitalize"},"Delete"))))})),K=a(287),U=r.a.TabPane,Y=Object(E.b)((function(e){var t=e.Products.TransportProduct;return{isSameDayRoutesSaved:t.routes.routeCities.isDataSaved,isMultiDayRoutesSaved:t.routes.multiRouteCities.isDataSaved,transportInfo:t.transportInfo}}),(function(e){return{getInterCityMultiDayList:Object(O.b)(x.f,e),getNewInterCitySameDayList:Object(O.b)(x.g,e)}}))((function(e){var t,a,i=Object(g.i)().id,s=Object(g.g)(),o=Object(N.q)().get("stage"),u=Object(c.useState)("inter_city_same"),m=Object(n.a)(u,2),d=m[0],p=m[1];return Object(c.useEffect)((function(){}),[i]),l.a.createElement("div",{className:"view-transport-routes justify-center items-center"},l.a.createElement(r.a,{className:"tabs-no-bottom-border",activeKey:d,onTabClick:function(e){return p(e)},centered:!0}," ",l.a.createElement(U,{tab:l.a.createElement("div",{className:"flex justify-between items-center"},l.a.createElement("p",null,"Inter City Same Day Travel")," ",l.a.createElement(K.a,{isDataSaved:e.isSameDayRoutesSaved})),key:"inter_city_same"},l.a.createElement(L,{businessCode:e.businessCode,changeSubtab:p,readOnly:Object(N.m)(null===(t=e.transportInfo)||void 0===t?void 0:t.status),onNext:function(){return p("inter_city_multi")}})),l.a.createElement(U,{tab:l.a.createElement("div",{className:"flex justify-between items-center"},l.a.createElement("p",null,"Inter City Multi Day Travel")," ",l.a.createElement(K.a,{isDataSaved:e.isMultiDayRoutesSaved})),key:"inter_city_multi"},l.a.createElement(H,{readOnly:Object(N.m)(null===(a=e.transportInfo)||void 0===a?void 0:a.status),businessCode:e.businessCode,changeSubtab:p,onNext:function(){s.push("/resources/transports/".concat(i,"?stage=").concat(o,"&tab=contracts-pricing"))}}))))}));t.default=Y}}]);