(this["webpackJsonpcrypto-godz-app"]=this["webpackJsonpcrypto-godz-app"]||[]).push([[0],{69:function(e,t,n){e.exports={adsTest:"main_adsTest__hjY-r"}},73:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(22),s=n.n(c),i=n(81),o=n(3),l=n(7),u=n(4),d=n(60),j=n(23),b=n(2),x=function(e,t){return e+t},O=n(52),h=n.n(O),m=n(13),f=h.a.mark(w);function w(e){var t,n,r,a,c,s,i,o,l,u;return h.a.wrap((function(d){for(;;)switch(d.prev=d.next){case 0:t=e.sets,n=e.getElemMaxIdx,r=e.transformElement,a=e.maxCounterSum,c=t.length,s=Object(m.a)(Array(c).keys()).map((function(){return 0})),i=function(e){return e.map((function(e,n){return r(t[n],e)}))},o=0;case 5:if(!(o<c)){d.next=32;break}l=0;case 7:if(!(l<n(t[o]))){d.next=29;break}if(s[o]++,!(s.reduce(x)<=a)){d.next=13;break}return d.next=12,i(s);case 12:return d.abrupt("continue",26);case 13:if(0!==o){d.next=16;break}return s[o]--,d.abrupt("break",29);case 16:if(-1!==(u=s.findIndex((function(e){return e>0})))){d.next=19;break}throw new Error("No index to zero");case 19:if(!(s[u]>0)){d.next=25;break}return s[u]--,d.next=23,i(s);case 23:d.next=19;break;case 25:return d.abrupt("break",29);case 26:l++,d.next=7;break;case 29:o++,d.next=5;break;case 32:case"end":return d.stop()}}),f)}var p,v=[{level:1,powerReq:150,rewards:4.89,winRatePct:88},{level:2,powerReq:300,rewards:9.78,winRatePct:86},{level:3,powerReq:450,rewards:14.67,winRatePct:84},{level:4,powerReq:600,rewards:20.18,winRatePct:82},{level:5,powerReq:750,rewards:25.68,winRatePct:80},{level:6,powerReq:900,rewards:31.79,winRatePct:78},{level:7,powerReq:1050,rewards:37.9,winRatePct:76},{level:8,powerReq:1200,rewards:44.02,winRatePct:74},{level:9,powerReq:1350,rewards:50.13,winRatePct:72},{level:10,powerReq:1500,rewards:56.86,winRatePct:70},{level:11,powerReq:1650,rewards:70.31,winRatePct:65},{level:12,powerReq:1800,rewards:78.87,winRatePct:63},{level:13,powerReq:1950,rewards:88.04,winRatePct:61},{level:14,powerReq:2100,rewards:97.21,winRatePct:59},{level:15,powerReq:2250,rewards:109.44,winRatePct:57},{level:16,powerReq:2400,rewards:117.99,winRatePct:55},{level:17,powerReq:2550,rewards:129.61,winRatePct:53},{level:18,powerReq:2700,rewards:141.23,winRatePct:51},{level:19,powerReq:2850,rewards:153.46,winRatePct:49},{level:20,powerReq:3e3,rewards:166.29,winRatePct:47},{level:21,powerReq:3150,rewards:217.65,winRatePct:43},{level:22,powerReq:3300,rewards:237.22,winRatePct:43},{level:23,powerReq:3450,rewards:258,winRatePct:43},{level:24,powerReq:3600,rewards:280.01,winRatePct:43},{level:25,powerReq:3750,rewards:303.25,winRatePct:43},{level:26,powerReq:3900,rewards:328.31,winRatePct:40},{level:27,powerReq:4050,rewards:354.6,winRatePct:40},{level:28,powerReq:4200,rewards:382.73,winRatePct:40},{level:29,powerReq:4350,rewards:412.07,winRatePct:40},{level:30,powerReq:4500,rewards:443.87,winRatePct:40}],g=function(e){var t=v.filter((function(t){return e>=t.powerReq}));return t.length?t.map((function(t){var n=t.powerReq>=2550?(e-t.powerReq)/50:0,r=Math.min(t.winRatePct+n,90);return{chosenReward:t,expectedRewardUsd:t.rewards*r/100,winRatePct:r}})).reduce((function(e,t){return e.expectedRewardUsd>t.expectedRewardUsd?e:t})):null},z=function(e){var t=e.once,n=e.daily,r=e.sentzCount;return(t.badge+t.sentz)/(n.expectedReward-n.vitalExpense*r)},y=function(e){var t=e.combo,n=e.reward,r=e.days,a=e.vitalCostUsd,c=e.godzPrice,s=t.sentz.map((function(e){var t=e.item;return t.count*t.priceGodz*c})).reduce(x),i=t.badge.map((function(e){var t=e.item;return t.count*t.priceGodz*c})).reduce(x),o=a*r*t.sentz.map((function(e){return e.item.count})).reduce(x),l=s+i+o;return{totalReturnUsd:n.expectedRewardUsd*r-l,reward:n,expenseUsd:{sentz:s,badge:i,vital:o,total:l},picked:{sentz:t.sentz.map((function(e){return e.item})).filter((function(e){return e.count>0})),badge:t.badge.map((function(e){return e.item})).filter((function(e){return e.count>0}))},breakEvenDays:z({once:{sentz:s,badge:i},daily:{vitalExpense:a,expectedReward:n.expectedRewardUsd},sentzCount:t.sentz.map((function(e){return e.item.count})).reduce(x)})}};!function(e){e.LANG="NEXT_LOCALE",e.MARKET_OPTIMIZER="MARKET_OPT"}(p||(p={}));var R,k,P,C=n(54),N=function(e){return e?new C.a(e):new C.a},E=function(e,t,n){N(n).set(e,t,{path:"/"})},S=n(9);!function(e){e.CHT="cht",e.EN="EN"}(P||(P={}));var U,A=(R={},Object(S.a)(R,P.CHT,"\u7e41\u9ad4\u4e2d\u6587 - CHT"),Object(S.a)(R,P.EN,"English - EN"),R),T=P.CHT,q=(k={},Object(S.a)(k,P.CHT,P.CHT),Object(S.a)(k,P.EN,P.EN),Object(S.a)(k,"zh",P.CHT),Object(S.a)(k,"es",P.EN),U={},Object(S.a)(U,P.CHT,{lang:{inUse:"\u4f7f\u7528\u4e2d"},asset:{sentz:{title:"\u64c1\u6709 Sentz",willPower:"\u6230\u529b",vital:"\u751f\u547d (\u5929)"},badge:"\u52f3\u7ae0\u53ef\u651c\u5e36\u4eba\u6578",godz:{title:"GODZ",price:"\u532f\u7387 (USD)",owned:"\u64c1\u6709"}},market:{listed:{count:"\u5e02\u5834\u4f9b\u61c9\u91cf",generic:{priceGodz:"\u55ae\u50f9 (GODZ)"},sentz:{willPower:"\u6230\u529b",title:"\u5e02\u5834 Sentz \u4f9b\u8ca8"},badge:{carryCount:"\u651c\u5e36\u4eba\u6578",title:"\u5e02\u5834\u52f3\u7ae0\u4f9b\u8ca8"}},param:{title:"\u53c3\u6578",vitalCostUsd:"\u6bcf\u65e5\u6bcf Sentz Vital \u6210\u672c (USD)",days:"\u6642\u9577 (\u65e5)"},calculate:"\u8a08\u7b97",solution:{error:{noSolution:"\u6c92\u6709\u53ef\u7528\u7d50\u679c\u3002"},buy:{sentz:"\u8cfc\u5165 Sentz",badge:"\u8cfc\u5165 Badge",count:"\u8cfc\u5165\u6578\u91cf"},stats:{return:"{{days}} \u65e5\u5167\u7e3d\u5831\u916c",day:"\u65e5",cost:{total:"\u7e3d\u521d\u59cb\u6210\u672c",sentz:"Sentz \u6210\u672c",badge:"\u52f3\u7ae0\u6210\u672c",vital:"Vital \u6210\u672c"},fight:{totalPower:"\u7e3d\u6230\u529b",level:"\u95dc\u5361\u7b49\u7d1a",actualWinRatePct:"\u5be6\u969b\u52dd\u7387",expectedRewardUsd:"\u5831\u916c\u671f\u671b\u503c",breakEvenDays:"\u56de\u672c\u5468\u671f"}}}},misc:{showCollapse:"\u5c55\u958b / \u647a\u758a"},alert:{donate:"\u6b61\u8fce\u6350\u6b3e\u81f3 0xAD8e42dE98A2A8041be61A51D1a611Be662c5dB0 (BSC/ETH)\uff01",dataSaved:"\u6240\u6709\u8f38\u5165\u7684\u8cc7\u8a0a\u90fd\u6703\u5b58\u5230\u700f\u89bd\u5668\u7684\u5132\u5b58\u7a7a\u9593\u3002\u9019\u4e9b\u8cc7\u6599\u4e26 *\u4e0d\u6703* \u4e0a\u50b3\u5230\u4efb\u4f55\u5730\u65b9\u3002"}}),Object(S.a)(U,P.EN,{lang:{inUse:"In use"},asset:{sentz:{title:"Owned Sentz",willPower:"Will Power",vital:"Vital (Days)"},badge:"Total Badge Carry Count",godz:{title:"GODZ",price:"Price (USD)",owned:"Owned"}},market:{listed:{count:"Supply",generic:{priceGodz:"Price (GODZ)"},sentz:{willPower:"Will Power",title:"Market Sentz Supply"},badge:{carryCount:"Carry Count",title:"Market Badge Supply"}},param:{title:"Parameters",vitalCostUsd:"Vital cost per Sentz for each day (USD)",days:"Duration (Days)"},calculate:"Calculate",solution:{error:{noSolution:"No solution found."},buy:{sentz:"Sentz to buy",badge:"Badge to buy",count:"Amount"},stats:{return:"Total return in {{days}} days",day:"Day",cost:{total:"Total initial expense",sentz:"Expense on Sentz",badge:"Expense on Badge",vital:"Expense on Vital"},fight:{totalPower:"Total Will Power",level:"Fight Level",actualWinRatePct:"Actual Win Rate",expectedRewardUsd:"Expected Reward",breakEvenDays:"Break Even Period"}}}},misc:{showCollapse:"Show / Collapse"},alert:{donate:"Feel free to donate to 0xAD8e42dE98A2A8041be61A51D1a611Be662c5dB0 (BSC/ETH)!",dataSaved:"All inputs will be automatically saved locally. These data are NOT uploaded to anywhere."}}),U),I=function(e){console.warn(e)},G=function(){return e=p.LANG,N(t).get(e);var e,t},D=function(){var e,t,n=G();return n?e=n:(e=T,E(p.LANG,e)),{t:(t=q[e],function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e(t),a=function(e,t){var a=n[t];if(!a){var c="Placeholder of key [".concat(t,'] does not exist in string: "').concat(r,'"');return I(c),e}return a.toString()};return r.replace(/{{(\w+)}}/g,a)}),lang:e}},F=n(83),L=(n(69),n(0)),M=function(e){var t=e.children,n=e.className,r="".concat(n||"mb-3"," ").concat("");return Object(L.jsx)("div",{className:r,children:t})},B=function(e){var t=e.slot,n=e.testId;return Object(L.jsx)(M,{children:Object(L.jsx)(F.a,{client:"ca-pub-1535004092052078",slot:t,style:{display:"block"},format:"horizontal",responsive:"true","data-testid":n})})},H=function(){return Object(L.jsx)(B,{slot:"8699617138"})},_=n(12),W=n(82),Z=n(62),$=function(e){var t=e.value,n=e.onChange,r=e.step;return Object(L.jsx)(Z.a,{type:"number",value:Number(t).toString(),onChange:function(e){return n(+e.target.value)},step:r})},V=function(e){var t=e.account,n=e.setAccount,r=D().t;return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(l.a,{children:Object(L.jsx)(o.a,{children:Object(L.jsx)("h5",{children:r((function(e){return e.asset.godz.title}))})})}),Object(L.jsxs)(l.a,{className:"gx-2",children:[Object(L.jsx)(o.a,{md:6,children:Object(L.jsxs)(W.a,{className:"mb-3",children:[Object(L.jsx)(W.a.Text,{children:r((function(e){return e.asset.godz.price}))}),Object(L.jsx)($,{value:t.godz.price,onChange:function(e){return n(Object(b.a)(Object(b.a)({},t),{},{godz:Object(b.a)(Object(b.a)({},t.godz),{},{price:e})}))},step:.1})]})}),Object(L.jsx)(o.a,{md:6,children:Object(L.jsxs)(W.a,{className:"mb-3",children:[Object(L.jsx)(W.a.Text,{children:r((function(e){return e.asset.godz.owned}))}),Object(L.jsx)($,{value:t.godz.owned,onChange:function(e){return n(Object(b.a)(Object(b.a)({},t),{},{godz:Object(b.a)(Object(b.a)({},t.godz),{},{owned:e})}))}})]})})]})]})},J=n(46),K=function(){return Object(L.jsx)("i",{className:"bi bi-plus-lg"})},X=function(){return Object(L.jsx)("i",{className:"bi bi-x-lg"})},Y=function(){return Object(L.jsx)("i",{className:"bi bi-caret-up-fill"})},Q=function(){return Object(L.jsx)("i",{className:"bi bi-caret-down-fill"})},ee=function(e){var t=e.onAdded,n=e.atTop;return Object(L.jsx)(l.a,{className:n?"mb-2":"mt-2",children:Object(L.jsx)(o.a,{children:Object(L.jsx)(_.a,{className:"d-inline float-end",variant:"outline-success",onClick:t,size:"sm",children:Object(L.jsx)(K,{})})})})},te=n(56),ne=function(e,t,n){return e[t]=e.splice(n,1,e[t])[0],e},re=function(e){var t=e.minLength,n=e.setArray,r=e.counterState,a=e.elemIdx,c=e.array,s=e.vertical,i=Object(u.a)(r,2),o=i[0],l=i[1];return Object(L.jsxs)(te.a,{vertical:s,size:"sm",children:[Object(L.jsx)(_.a,{className:"float-right ml-2",variant:"outline-danger",onClick:function(e){return function(){n(c.filter((function(t,n){return n!==e}))),l(o.filter((function(t){return t!==o[e]})))}}(a),disabled:c.length<=t,children:Object(L.jsx)(X,{})}),Object(L.jsx)(_.a,{className:"float-right ml-2",variant:"outline-warning",onClick:function(e){return function(){n(ne(c,e-1,e)),l(ne(o,e-1,e))}}(a),disabled:0===a,children:Object(L.jsx)(Y,{})}),Object(L.jsx)(_.a,{className:"float-right ml-2",variant:"outline-warning",onClick:function(e){return function(){n(ne(c,e,e+1)),l(ne(o,e,e+1))}}(a),disabled:c.length-1===a,children:Object(L.jsx)(Q,{})})]})},ae=function(e){var t=e.payload,n=e.getArray,r=e.renderEntries,c=e.counterState,s=e.reversed,i=void 0!==s&&s,d=n(t);if(!c){var j=Object(m.a)(Array(d.length).keys());i&&j.reverse(),c=a.a.useState(j)}var x=c,O=Object(u.a)(x,1)[0];return Object(L.jsx)(L.Fragment,{children:d.map((function(t,n){return Object(L.jsx)(a.a.Fragment,{children:Object(L.jsxs)(l.a,{className:"".concat(0===n?"":"mt-2"," gx-2"),children:[Object(L.jsx)(o.a,{children:r(t,n)}),Object(L.jsx)(o.a,{xs:"auto",children:Object(L.jsx)(re,Object(b.a)({array:d,elemIdx:n},e))})]})},O[n])}))})},ce=function(e){var t=e.payload,n=e.minLength,r=e.getArray,c=e.setArray,s=e.getUpdatedElement,i=e.generateNewElement,o=e.renderEntries,l=e.addToTop,d=void 0!==l&&l,j=Object(m.a)(Array(r(t).length).keys());d&&j.reverse();var b=a.a.useState(j),x=Object(u.a)(b,2),O=x[0],h=x[1],f=function(){d?(c([i()].concat(Object(m.a)(r(t)))),h([O.length?O[0]+1:0].concat(Object(m.a)(O)))):(c([].concat(Object(m.a)(r(t)),[i()])),h([].concat(Object(m.a)(O),[O.length?O[O.length-1]+1:0])))};return Object(L.jsxs)(L.Fragment,{children:[d&&Object(L.jsx)(ee,{onAdded:f,atTop:!0}),Object(L.jsx)(ae,{payload:t,minLength:n,getArray:r,setArray:c,renderEntries:function(e,n){return o(e,(a=n,function(e){return function(n){c(r(t).map((function(t,r){return a!==r?t:s(t,e,n)})))}}),n);var a},reversed:d,counterState:b}),!d&&Object(L.jsx)(ee,{onAdded:f,atTop:!1})]})},se=function(e){var t=e.onChange,n=e.ownedSentz,r=D().t;return Object(L.jsxs)(l.a,{className:"gx-2",children:[Object(L.jsxs)(o.a,{xs:6,children:[r((function(e){return e.asset.sentz.willPower})),Object(L.jsx)($,{value:n.willPower,onChange:function(e){return t("willPower")(e)}})]}),Object(L.jsxs)(o.a,{xs:6,children:[r((function(e){return e.asset.sentz.vital})),Object(L.jsx)($,{value:n.vitalDays,onChange:function(e){return t("vitalDays")(e)}})]})]})},ie=function(e){var t=e.account,n=e.setAccount,r=D().t,c=a.a.useState(!1),s=Object(u.a)(c,2),i=s[0],d=s[1];return Object(L.jsxs)("div",{className:"p-2 rounded bg-black-20 mb-2",children:[Object(L.jsxs)(l.a,{className:"align-items-center",children:[Object(L.jsx)(o.a,{className:"text-center",children:Object(L.jsx)("h4",{className:"mb-0",children:r((function(e){return e.asset.sentz.title}))})}),Object(L.jsx)(o.a,{xs:"auto",children:Object(L.jsx)(_.a,{onClick:function(){return d(!i)},variant:"outline-light",children:r((function(e){return e.misc.showCollapse}))})})]}),Object(L.jsx)(l.a,{children:Object(L.jsx)(o.a,{children:Object(L.jsx)(J.a,{in:i,children:Object(L.jsx)("div",{className:"mt-2",children:Object(L.jsx)(ce,{payload:t,minLength:0,getArray:function(e){return e.assets.sentz},setArray:function(e){return n(Object(b.a)(Object(b.a)({},t),{},{assets:Object(b.a)(Object(b.a)({},t.assets),{},{sentz:e})}))},getUpdatedElement:function(e,t,n){return Object(b.a)(Object(b.a)({},e),{},Object(S.a)({},t,n))},generateNewElement:function(){return{willPower:0,vitalDays:0}},renderEntries:function(e,t){return Object(L.jsx)(se,{ownedSentz:e,onChange:t})}})})})})})]})},oe=function(e){var t=e.account,n=e.setAccount;return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(V,{account:t,setAccount:n}),Object(L.jsx)(ie,{account:t,setAccount:n})]})},le=function(e){var t=e.listedItems,n=e.setListedItems,r=e.generateNewElem,c=e.renderEntries,s=e.title,i=D().t,d=a.a.useState(!1),j=Object(u.a)(d,2),x=j[0],O=j[1];return Object(L.jsxs)("div",{className:"p-2 rounded bg-black-20 mb-2",children:[Object(L.jsxs)(l.a,{className:"align-items-center",children:[Object(L.jsx)(o.a,{className:"text-center",children:Object(L.jsx)("h4",{className:"mb-0",children:s})}),Object(L.jsx)(o.a,{xs:"auto",children:Object(L.jsx)(_.a,{onClick:function(){return O(!x)},variant:"outline-light",children:i((function(e){return e.misc.showCollapse}))})})]}),Object(L.jsx)(l.a,{children:Object(L.jsx)(o.a,{children:Object(L.jsx)(J.a,{in:x,children:Object(L.jsx)("div",{className:"mt-2",children:Object(L.jsx)(ce,{payload:t,minLength:0,getArray:function(e){return e},setArray:function(e){return n(e)},getUpdatedElement:function(e,t,n){return Object(b.a)(Object(b.a)({},e),{},Object(S.a)({},t,n))},generateNewElement:r,renderEntries:c})})})})})]})},ue=function(e){var t=e.onChange,n=e.item,r=D().t;return Object(L.jsxs)(l.a,{className:"gx-2",children:[Object(L.jsxs)(o.a,{md:3,children:[r((function(e){return e.market.listed.badge.carryCount})),Object(L.jsx)($,{value:n.sentzCarryCount,onChange:function(e){return t("sentzCarryCount")(e)}})]}),Object(L.jsxs)(o.a,{md:5,children:[r((function(e){return e.market.listed.generic.priceGodz})),Object(L.jsx)($,{value:n.priceGodz,onChange:function(e){return t("priceGodz")(e)},step:.1})]}),Object(L.jsxs)(o.a,{md:4,children:[r((function(e){return e.market.listed.count})),Object(L.jsx)($,{value:n.count,onChange:function(e){return t("count")(e)}})]})]})},de=function(e){var t=e.listedItems,n=e.setListedItems,r=D().t;return Object(L.jsx)(le,{listedItems:t,setListedItems:n,generateNewElem:function(){return{sentzCarryCount:0,priceGodz:0,count:0}},renderEntries:function(e,t){return Object(L.jsx)(ue,{onChange:t,item:e})},title:r((function(e){return e.market.listed.badge.title}))})},je=function(e){var t=e.onChange,n=e.item,r=D().t;return Object(L.jsxs)(l.a,{className:"gx-2",children:[Object(L.jsxs)(o.a,{md:3,children:[r((function(e){return e.market.listed.sentz.willPower})),Object(L.jsx)($,{value:n.willPower,onChange:function(e){return t("willPower")(e)}})]}),Object(L.jsxs)(o.a,{md:5,children:[r((function(e){return e.market.listed.generic.priceGodz})),Object(L.jsx)($,{value:n.priceGodz,onChange:function(e){return t("priceGodz")(e)},step:.1})]}),Object(L.jsxs)(o.a,{md:4,children:[r((function(e){return e.market.listed.count})),Object(L.jsx)($,{value:n.count,onChange:function(e){return t("count")(e)}})]})]})},be=function(e){var t=e.listedItems,n=e.setListedItems,r=D().t;return Object(L.jsx)(le,{listedItems:t,setListedItems:n,generateNewElem:function(){return{willPower:0,priceGodz:0,count:0}},renderEntries:function(e,t){return Object(L.jsx)(je,{onChange:t,item:e})},title:r((function(e){return e.market.listed.sentz.title}))})},xe=function(e){var t=e.params,n=e.setParams,r=D().t;return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(l.a,{children:Object(L.jsx)(o.a,{children:Object(L.jsx)("h5",{children:r((function(e){return e.market.param.title}))})})}),Object(L.jsxs)(l.a,{className:"gx-2",children:[Object(L.jsx)(o.a,{md:8,children:Object(L.jsxs)(W.a,{className:"mb-3",children:[Object(L.jsx)(W.a.Text,{children:r((function(e){return e.market.param.vitalCostUsd}))}),Object(L.jsx)($,{value:t.vitalCostUsd,onChange:function(e){return n(Object(b.a)(Object(b.a)({},t),{},{vitalCostUsd:e}))},step:.001})]})}),Object(L.jsx)(o.a,{md:4,children:Object(L.jsxs)(W.a,{className:"mb-3",children:[Object(L.jsx)(W.a.Text,{children:r((function(e){return e.market.param.days}))}),Object(L.jsx)($,{value:t.days,onChange:function(e){return n(Object(b.a)(Object(b.a)({},t),{},{days:e}))}})]})})]})]})},Oe=function(e){var t=e.optimizeParams,n=e.setOptimizeParams,r=e.onPerformCalc,a=D().t;return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(oe,{account:t.account,setAccount:function(e){return n(Object(b.a)(Object(b.a)({},t),{},{account:e}))}}),Object(L.jsx)(xe,{params:t,setParams:n}),Object(L.jsx)(be,{listedItems:t.market.sentz,setListedItems:function(e){return n(Object(b.a)(Object(b.a)({},t),{},{market:Object(b.a)(Object(b.a)({},t.market),{},{sentz:e})}))}}),Object(L.jsx)(de,{listedItems:t.market.badge,setListedItems:function(e){return n(Object(b.a)(Object(b.a)({},t),{},{market:Object(b.a)(Object(b.a)({},t.market),{},{badge:e})}))}}),Object(L.jsxs)(l.a,{children:[Object(L.jsx)(o.a,{}),Object(L.jsx)(o.a,{xs:"auto",children:Object(L.jsx)(_.a,{onClick:r,variant:"outline-light",children:a((function(e){return e.market.calculate}))})})]})]})},he=n(53),me=function(e){var t=e.solution,n=D().t,r=t.picked,a=r.sentz,c=r.badge;return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(l.a,{children:Object(L.jsx)(o.a,{children:Object(L.jsx)("h5",{children:n((function(e){return e.market.solution.buy.sentz}))})})}),Object(L.jsxs)(he.a,{striped:!0,hover:!0,variant:"dark",children:[Object(L.jsx)("thead",{children:Object(L.jsxs)("tr",{children:[Object(L.jsx)("th",{children:n((function(e){return e.market.listed.sentz.willPower}))}),Object(L.jsx)("th",{children:n((function(e){return e.market.listed.generic.priceGodz}))}),Object(L.jsx)("th",{children:n((function(e){return e.market.solution.buy.count}))})]})}),Object(L.jsx)("tbody",{children:a.map((function(e,t){var n=e.willPower,r=e.priceGodz,a=e.count;return Object(L.jsxs)("tr",{children:[Object(L.jsx)("td",{children:n}),Object(L.jsx)("td",{children:r}),Object(L.jsx)("td",{children:a})]},t)}))})]}),Object(L.jsx)(l.a,{children:Object(L.jsx)(o.a,{children:Object(L.jsx)("h5",{children:n((function(e){return e.market.solution.buy.badge}))})})}),Object(L.jsxs)(he.a,{striped:!0,hover:!0,variant:"dark",children:[Object(L.jsx)("thead",{children:Object(L.jsxs)("tr",{children:[Object(L.jsx)("th",{children:n((function(e){return e.market.listed.badge.carryCount}))}),Object(L.jsx)("th",{children:n((function(e){return e.market.listed.generic.priceGodz}))}),Object(L.jsx)("th",{children:n((function(e){return e.market.solution.buy.count}))})]})}),Object(L.jsx)("tbody",{children:c.map((function(e,t){var n=e.sentzCarryCount,r=e.priceGodz,a=e.count;return Object(L.jsxs)("tr",{children:[Object(L.jsx)("td",{children:n}),Object(L.jsx)("td",{children:r}),Object(L.jsx)("td",{children:a})]},t)}))})]})]})},fe=function(e){var t=e.solution,n=e.params,r=D().t,a=n.days,c=t.picked.sentz.map((function(e){return e.count*e.willPower})).reduce(x);return Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(l.a,{children:Object(L.jsxs)(o.a,{children:[r((function(e){return e.market.solution.stats.return}),{days:a}),":\xa0",Object(L.jsxs)("span",{className:"h3",style:{color:"#00fffc"},children:["USD $",t.totalReturnUsd.toFixed(2)]}),"\xa0(USD ",Object(L.jsxs)("span",{className:"h4",children:["$",(t.totalReturnUsd/a).toFixed(2)]}),"\xa0/ ",r((function(e){return e.market.solution.stats.day})),")"]})}),Object(L.jsx)("hr",{}),Object(L.jsx)(l.a,{children:Object(L.jsxs)(o.a,{children:[r((function(e){return e.market.solution.stats.cost.total})),":\xa0",Object(L.jsxs)("span",{className:"h4",children:["USD $",t.expenseUsd.total.toFixed(2)]})]})}),Object(L.jsxs)(l.a,{children:[Object(L.jsx)(o.a,{xs:1}),Object(L.jsx)(o.a,{xs:4,children:r((function(e){return e.market.solution.stats.cost.sentz}))}),Object(L.jsxs)(o.a,{children:["USD $",t.expenseUsd.sentz.toFixed(2)]})]}),Object(L.jsxs)(l.a,{children:[Object(L.jsx)(o.a,{xs:1}),Object(L.jsx)(o.a,{xs:4,children:r((function(e){return e.market.solution.stats.cost.badge}))}),Object(L.jsxs)(o.a,{children:["USD $",t.expenseUsd.badge.toFixed(2)]})]}),Object(L.jsxs)(l.a,{children:[Object(L.jsx)(o.a,{xs:1}),Object(L.jsx)(o.a,{xs:4,children:r((function(e){return e.market.solution.stats.cost.vital}))}),Object(L.jsxs)(o.a,{children:["USD $",t.expenseUsd.vital.toFixed(2)]})]}),Object(L.jsx)("hr",{}),Object(L.jsx)(l.a,{children:Object(L.jsxs)(o.a,{children:[r((function(e){return e.market.solution.stats.fight.totalPower})),"\xa0",Object(L.jsx)("span",{className:"h4",children:c})]})}),Object(L.jsx)(l.a,{children:Object(L.jsxs)(o.a,{children:[r((function(e){return e.market.solution.stats.fight.level})),"\xa0",Object(L.jsx)("span",{className:"h4",children:t.reward.chosenReward.level})," (",t.reward.chosenReward.powerReq,"+)"]})}),Object(L.jsx)(l.a,{children:Object(L.jsxs)(o.a,{children:[r((function(e){return e.market.solution.stats.fight.actualWinRatePct})),"\xa0",t.reward.winRatePct.toFixed(2),"\xa0%"]})}),Object(L.jsx)(l.a,{children:Object(L.jsxs)(o.a,{children:[r((function(e){return e.market.solution.stats.fight.expectedRewardUsd})),"\xa0",Object(L.jsxs)("span",{className:"h4",children:["USD $",t.reward.expectedRewardUsd.toFixed(2)]})]})}),Object(L.jsx)(l.a,{children:Object(L.jsxs)(o.a,{children:[r((function(e){return e.market.solution.stats.fight.breakEvenDays})),"\xa0",Object(L.jsx)("span",{className:"h4",children:t.breakEvenDays.toFixed(2)}),"\xa0",r((function(e){return e.market.solution.stats.day}))]})})]})},we=function(e){var t=e.solution,n=e.params,r=D().t;return null===t?Object(L.jsx)(d.a,{variant:"danger",children:r((function(e){return e.market.solution.error.noSolution}))}):t?Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(fe,{solution:t,params:n}),Object(L.jsx)("hr",{}),Object(L.jsx)(me,{solution:t,params:n})]}):Object(L.jsx)(L.Fragment,{})},pe=function(){var e=D().t,t=a.a.useState(),n=Object(u.a)(t,2),r=n[0],c=n[1],s=a.a.useState(),i=Object(u.a)(s,2),o=i[0],l=i[1],O=a.a.useRef(null);return a.a.useEffect((function(){var e;null===O||void 0===O||null===(e=O.current)||void 0===e||e.scrollIntoView({behavior:"smooth",block:"start",inline:"start"})}),[o]),a.a.useEffect((function(){r&&localStorage.setItem(p.MARKET_OPTIMIZER,JSON.stringify(r))}),[r]),a.a.useEffect((function(){var e=localStorage.getItem(p.MARKET_OPTIMIZER);c(e?JSON.parse(e):{account:{godz:{owned:100,price:6.2},assets:{sentz:[],badge:0}},market:{sentz:[{willPower:60,priceGodz:1.5,count:10}],badge:[{sentzCarryCount:1,priceGodz:1.5,count:10}]},vitalCostUsd:.733,days:30})}),[]),r?Object(L.jsxs)(L.Fragment,{children:[Object(L.jsx)(d.a,{children:e((function(e){return e.alert.donate}))}),Object(L.jsx)(d.a,{variant:"secondary",children:e((function(e){return e.alert.dataSaved}))}),Object(L.jsx)(H,{}),Object(L.jsx)(Oe,{optimizeParams:r,setOptimizeParams:c,onPerformCalc:function(){return l(function(e){var t,n=e.account,r=e.market,a=e.vitalCostUsd,c=e.days,s=[],i=r.sentz,o=r.badge,l=n.godz,u=n.assets,d=u.sentz,O=u.badge,h=i.map((function(e){return{item:e,wpPerGodz:e.willPower/e.priceGodz}})).sort((function(e,t){var n=e.wpPerGodz;return t.wpPerGodz-n})),m=o.map((function(e){return{item:e,sentzPerGodz:e.sentzCarryCount/e.priceGodz}})).sort((function(e,t){var n=e.sentzPerGodz;return t.sentzPerGodz-n})),f=w({sets:h,getElemMaxIdx:function(e){return e.item.count},transformElement:function(e,t){return Object(b.a)(Object(b.a)({},e),{},{item:Object(b.a)(Object(b.a)({},e.item),{},{count:t})})},maxCounterSum:50}),p=Object(j.a)(v);try{for(p.s();!(t=p.n()).done;){var z,R=t.value,k=Object(j.a)(f);try{for(k.s();!(z=k.n()).done;){var P=z.value;if(P.length){var C=P.map((function(e){var t=e.item;return t.count*t.willPower})).reduce(x);if(d.length&&(C+=d.map((function(e){return e.willPower})).reduce(x)),!(C<R.powerReq)){var N=g(C);if(!N)return null;var E,S=P.map((function(e){return e.item.count})).reduce(x),U=void 0,A=Object(j.a)(w({sets:m,getElemMaxIdx:function(e){return e.item.count},transformElement:function(e,t){return Object(b.a)(Object(b.a)({},e),{},{item:Object(b.a)(Object(b.a)({},e.item),{},{count:t})})},maxCounterSum:10}));try{for(A.s();!(E=A.n()).done;){var T=E.value;if(!(T.map((function(e){var t=e.item;return t.sentzCarryCount*t.count})).reduce(x)+O<S)){U=T;break}}}catch(D){A.e(D)}finally{A.f()}if(U){var q=y({combo:{sentz:P,badge:U},reward:N,days:c,vitalCostUsd:a,godzPrice:l.price});s.push(q)}}}}}catch(D){k.e(D)}finally{k.f()}}}catch(D){p.e(D)}finally{p.f()}var I=l.owned*l.price,G=s.filter((function(e){return e.expenseUsd.total<=I}));return G.length?G.reduce((function(e,t){return e.totalReturnUsd>t.totalReturnUsd?e:t})):null}(r))}}),Object(L.jsx)("hr",{ref:O}),Object(L.jsx)(H,{}),Object(L.jsx)(we,{solution:o,params:r}),Object(L.jsx)(H,{})]}):Object(L.jsx)(L.Fragment,{children:"Loading..."})},ve=n(11),ge=n(61),ze=function(){var e=D(),t=e.t,n=e.lang,r=A[n],a=function(e){return function(){E(p.LANG,e),location.reload()}};return Object(L.jsxs)(ve.a,{title:r,children:[Object(L.jsx)(ve.a.Toggle,{variant:"outline-light",children:r}),Object(L.jsxs)(ve.a.Menu,{variant:"dark",children:[Object(L.jsx)(ve.a.Header,{children:t((function(e){return e.lang.inUse}))}),Object(L.jsx)(ve.a.Item,{disabled:!0,children:r}),Object(L.jsx)(ge.a.Divider,{}),Object.values(P).map((function(e){return Object(L.jsx)(ve.a.Item,{onClick:a(e),className:n===e?"active":"",children:A[e]},e)}))]})]})},ye=function(){return Object(L.jsx)(i.a,{children:Object(L.jsx)(l.a,{children:Object(L.jsxs)(o.a,{md:{span:8,offset:2},className:"p-2",children:[Object(L.jsx)(l.a,{className:"mb-2",children:Object(L.jsx)(o.a,{children:Object(L.jsx)(ze,{})})}),Object(L.jsx)(l.a,{children:Object(L.jsx)(o.a,{children:Object(L.jsx)(pe,{})})})]})})})},Re=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,84)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),c(e),s(e)}))};n(73);s.a.render(Object(L.jsx)(a.a.StrictMode,{children:Object(L.jsx)(ye,{})}),document.getElementById("root")),Re(console.log)}},[[74,1,2]]]);
//# sourceMappingURL=main.9d876220.chunk.js.map