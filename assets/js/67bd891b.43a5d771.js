"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[4885],{3905:(t,e,r)=>{r.d(e,{Zo:()=>m,kt:()=>h});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},o=Object.keys(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var p=a.createContext({}),s=function(t){var e=a.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},m=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,p=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),u=s(r),h=n,b=u["".concat(p,".").concat(h)]||u[h]||c[h]||o;return r?a.createElement(b,l(l({ref:e},m),{},{components:r})):a.createElement(b,l({ref:e},m))}));function h(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:n,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},48020:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const o={title:"\u4f7f\u7528 HertzBeat \u5bf9\u7269\u8054\u7f51\u6570\u636e\u5e93 IoTDB \u8fdb\u884c\u76d1\u63a7\u5b9e\u8df5",author:"tom",author_title:"tom",author_url:"https://github.com/tomsun28",author_image_url:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4",tags:["opensource","practice"]},l=void 0,i={permalink:"/blog/2023/01/05/monitor-iotdb",editUrl:"https://github.com/dromara/hertzbeat/edit/master/home/blog/2023-01-05-monitor-iotdb.md",source:"@site/blog/2023-01-05-monitor-iotdb.md",title:"\u4f7f\u7528 HertzBeat \u5bf9\u7269\u8054\u7f51\u6570\u636e\u5e93 IoTDB \u8fdb\u884c\u76d1\u63a7\u5b9e\u8df5",description:"\u4f7f\u7528 HertzBeat \u5bf9\u7269\u8054\u7f51\u6570\u636e\u5e93 IoTDB \u8fdb\u884c\u76d1\u63a7\u5b9e\u8df5\uff0c5\u5206\u949f\u641e\u5b9a\uff01",date:"2023-01-05T00:00:00.000Z",formattedDate:"2023\u5e741\u67085\u65e5",tags:[{label:"opensource",permalink:"/blog/tags/opensource"},{label:"practice",permalink:"/blog/tags/practice"}],readingTime:6.625,hasTruncateMarker:!1,authors:[{name:"tom",title:"tom",url:"https://github.com/tomsun28",imageURL:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4"}],frontMatter:{title:"\u4f7f\u7528 HertzBeat \u5bf9\u7269\u8054\u7f51\u6570\u636e\u5e93 IoTDB \u8fdb\u884c\u76d1\u63a7\u5b9e\u8df5",author:"tom",author_title:"tom",author_url:"https://github.com/tomsun28",author_image_url:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4",tags:["opensource","practice"]},prevItem:{title:"\u4f7f\u7528 HertzBeat \u5bf9 API \u7f51\u5173 Apache ShenYu \u7684\u76d1\u63a7\u5b9e\u8df5",permalink:"/blog/2023/01/08/monitor-shenyu"},nextItem:{title:"HertzBeat v1.2.3 \u53d1\u5e03\uff01\u652f\u6301Prometheus,ShenYu,IotDb",permalink:"/blog/2022/12/28/hertzbeat-v1.2.3"}},p={authorsImageUrls:[void 0]},s=[{value:"\u4f7f\u7528 HertzBeat \u5bf9\u7269\u8054\u7f51\u6570\u636e\u5e93 IoTDB \u8fdb\u884c\u76d1\u63a7\u5b9e\u8df5\uff0c5\u5206\u949f\u641e\u5b9a\uff01",id:"\u4f7f\u7528-hertzbeat-\u5bf9\u7269\u8054\u7f51\u6570\u636e\u5e93-iotdb-\u8fdb\u884c\u76d1\u63a7\u5b9e\u8df55\u5206\u949f\u641e\u5b9a",level:2},{value:"IoTDB \u4ecb\u7ecd",id:"iotdb-\u4ecb\u7ecd",level:3},{value:"HertzBeat \u4ecb\u7ecd",id:"hertzbeat-\u4ecb\u7ecd",level:3},{value:"\u5728 HertzBeat 5\u5206\u949f\u641e\u5b9a\u76d1\u63a7 IoTDB",id:"\u5728-hertzbeat-5\u5206\u949f\u641e\u5b9a\u76d1\u63a7-iotdb",level:3},{value:"\u64cd\u4f5c\u524d\u63d0\uff0c\u60a8\u5df2\u62e5\u6709 IoTDB \u73af\u5883\u548c HertzBeat \u73af\u5883\u3002",id:"\u64cd\u4f5c\u524d\u63d0\u60a8\u5df2\u62e5\u6709-iotdb-\u73af\u5883\u548c-hertzbeat-\u73af\u5883",level:4},{value:"\u4e00. \u5728 IoTDB \u7aef\u5f00\u542f<code>metrics</code>\u529f\u80fd\uff0c\u5b83\u5c06\u63d0\u4f9b prometheus metrics \u5f62\u5f0f\u7684\u63a5\u53e3\u6570\u636e\u3002",id:"\u4e00-\u5728-iotdb-\u7aef\u5f00\u542fmetrics\u529f\u80fd\u5b83\u5c06\u63d0\u4f9b-prometheus-metrics-\u5f62\u5f0f\u7684\u63a5\u53e3\u6570\u636e",level:4},{value:"\u4e8c. \u5728 HertzBeat \u76d1\u63a7\u9875\u9762\u6dfb\u52a0 IoTDB \u76d1\u63a7",id:"\u4e8c-\u5728-hertzbeat-\u76d1\u63a7\u9875\u9762\u6dfb\u52a0-iotdb-\u76d1\u63a7",level:4},{value:"\u4e09. \u5728 HertzBeat \u7cfb\u7edf\u6dfb\u52a0 IoTDB \u6307\u6807\u9608\u503c\u544a\u8b66",id:"\u4e09-\u5728-hertzbeat-\u7cfb\u7edf\u6dfb\u52a0-iotdb-\u6307\u6807\u9608\u503c\u544a\u8b66",level:4},{value:"\u5b8c\u6bd5\uff0c\u73b0\u5728\u5750\u7b49\u544a\u8b66\u6d88\u606f\u8fc7\u6765\u4e86\u3002\u53ee\u53ee\u53ee\u53ee",id:"\u5b8c\u6bd5\u73b0\u5728\u5750\u7b49\u544a\u8b66\u6d88\u606f\u8fc7\u6765\u4e86\u53ee\u53ee\u53ee\u53ee",level:3},{value:"\u5c0f\u7ed3",id:"\u5c0f\u7ed3",level:2}],m={toc:s};function c(t){let{components:e,...o}=t;return(0,n.kt)("wrapper",(0,a.Z)({},m,o,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u4f7f\u7528-hertzbeat-\u5bf9\u7269\u8054\u7f51\u6570\u636e\u5e93-iotdb-\u8fdb\u884c\u76d1\u63a7\u5b9e\u8df55\u5206\u949f\u641e\u5b9a"},"\u4f7f\u7528 HertzBeat \u5bf9\u7269\u8054\u7f51\u6570\u636e\u5e93 IoTDB \u8fdb\u884c\u76d1\u63a7\u5b9e\u8df5\uff0c5\u5206\u949f\u641e\u5b9a\uff01"),(0,n.kt)("h3",{id:"iotdb-\u4ecb\u7ecd"},"IoTDB \u4ecb\u7ecd"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Apache IoTDB (Internet of Things Database) \u662f\u4e00\u6b3e\u65f6\u5e8f\u6570\u636e\u5e93\u7ba1\u7406\u7cfb\u7edf\uff0c\u53ef\u4ee5\u4e3a\u7528\u6237\u63d0\u4f9b\u6570\u636e\u6536\u96c6\u3001\u5b58\u50a8\u548c\u5206\u6790\u7b49\u670d\u52a1\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","IoTDB\u7531\u4e8e\u5176\u8f7b\u91cf\u7ea7\u67b6\u6784\u3001\u9ad8\u6027\u80fd\u548c\u9ad8\u53ef\u7528\u7684\u7279\u6027\uff0c\u4ee5\u53ca\u4e0e Hadoop \u548c Spark \u751f\u6001\u7684\u65e0\u7f1d\u96c6\u6210\uff0c\u6ee1\u8db3\u4e86\u5de5\u4e1a IoT \u9886\u57df\u4e2d\u6d77\u91cf\u6570\u636e\u5b58\u50a8\u3001\u9ad8\u541e\u5410\u91cf\u6570\u636e\u5199\u5165\u548c\u590d\u6742\u6570\u636e\u67e5\u8be2\u5206\u6790\u7684\u9700\u6c42\u3002   ")),(0,n.kt)("h3",{id:"hertzbeat-\u4ecb\u7ecd"},"HertzBeat \u4ecb\u7ecd"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"HertzBeat \u662f\u4e00\u6b3e\u5f00\u6e90\uff0c\u6613\u7528\u53cb\u597d\u7684\u5b9e\u65f6\u76d1\u63a7\u7cfb\u7edf\uff0c\u65e0\u9700Agent\uff0c\u62e5\u6709\u5f3a\u5927\u81ea\u5b9a\u4e49\u76d1\u63a7\u80fd\u529b\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","\u652f\u6301\u5bf9\u5e94\u7528\u670d\u52a1\uff0c\u6570\u636e\u5e93\uff0c\u64cd\u4f5c\u7cfb\u7edf\uff0c\u4e2d\u95f4\u4ef6\uff0c\u4e91\u539f\u751f\u7b49\u76d1\u63a7\uff0c\u9608\u503c\u544a\u8b66\uff0c\u544a\u8b66\u901a\u77e5(\u90ae\u4ef6\u5fae\u4fe1\u9489\u9489\u98de\u4e66)\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","HertzBeat \u7684\u5f3a\u5927\u81ea\u5b9a\u4e49\uff0c\u591a\u7c7b\u578b\u652f\u6301\uff0c\u6613\u6269\u5c55\uff0c\u4f4e\u8026\u5408\uff0c\u5e0c\u671b\u80fd\u5e2e\u52a9\u5f00\u53d1\u8005\u548c\u4e2d\u5c0f\u56e2\u961f\u5feb\u901f\u642d\u5efa\u81ea\u6709\u76d1\u63a7\u7cfb\u7edf\u3002")),(0,n.kt)("h3",{id:"\u5728-hertzbeat-5\u5206\u949f\u641e\u5b9a\u76d1\u63a7-iotdb"},"\u5728 HertzBeat 5\u5206\u949f\u641e\u5b9a\u76d1\u63a7 IoTDB"),(0,n.kt)("h4",{id:"\u64cd\u4f5c\u524d\u63d0\u60a8\u5df2\u62e5\u6709-iotdb-\u73af\u5883\u548c-hertzbeat-\u73af\u5883"},"\u64cd\u4f5c\u524d\u63d0\uff0c\u60a8\u5df2\u62e5\u6709 IoTDB \u73af\u5883\u548c HertzBeat \u73af\u5883\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"IoTDB ",(0,n.kt)("a",{parentName:"li",href:"https://iotdb.apache.org/UserGuide/V0.13.x/QuickStart/QuickStart.html"},"\u90e8\u7f72\u5b89\u88c5\u6587\u6863"),"  "),(0,n.kt)("li",{parentName:"ul"},"HertzBeat ",(0,n.kt)("a",{parentName:"li",href:"https://hertzbeat.com/docs/start/docker-deploy"},"\u90e8\u7f72\u5b89\u88c5\u6587\u6863"),"  ")),(0,n.kt)("h4",{id:"\u4e00-\u5728-iotdb-\u7aef\u5f00\u542fmetrics\u529f\u80fd\u5b83\u5c06\u63d0\u4f9b-prometheus-metrics-\u5f62\u5f0f\u7684\u63a5\u53e3\u6570\u636e"},"\u4e00. \u5728 IoTDB \u7aef\u5f00\u542f",(0,n.kt)("inlineCode",{parentName:"h4"},"metrics"),"\u529f\u80fd\uff0c\u5b83\u5c06\u63d0\u4f9b prometheus metrics \u5f62\u5f0f\u7684\u63a5\u53e3\u6570\u636e\u3002"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"metric \u91c7\u96c6\u9ed8\u8ba4\u662f\u5173\u95ed\u7684\uff0c\u9700\u8981\u5148\u5230 ",(0,n.kt)("inlineCode",{parentName:"li"},"conf/iotdb-metric.yml")," \u4e2d\u4fee\u6539\u53c2\u6570\u6253\u5f00\u540e\u91cd\u542f server  ")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"# \u662f\u5426\u542f\u52a8\u76d1\u63a7\u6a21\u5757\uff0c\u9ed8\u8ba4\u4e3afalse\nenableMetric: true\n\n# \u6570\u636e\u63d0\u4f9b\u65b9\u5f0f\uff0c\u5bf9\u5916\u90e8\u901a\u8fc7jmx\u548cprometheus\u534f\u8bae\u63d0\u4f9bmetrics\u7684\u6570\u636e, \u53ef\u9009\u53c2\u6570\uff1a[JMX, PROMETHEUS, IOTDB],IOTDB\u662f\u9ed8\u8ba4\u5173\u95ed\u7684\u3002\nmetricReporterList:\n  - JMX\n  - PROMETHEUS\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"\u91cd\u542f IoTDB, \u6253\u5f00\u6d4f\u89c8\u5668\u6216\u8005\u7528curl \u8bbf\u95ee http://ip:9091/metrics, \u5c31\u80fd\u770b\u5230metric\u6570\u636e\u4e86\u3002 ")),(0,n.kt)("h4",{id:"\u4e8c-\u5728-hertzbeat-\u76d1\u63a7\u9875\u9762\u6dfb\u52a0-iotdb-\u76d1\u63a7"},"\u4e8c. \u5728 HertzBeat \u76d1\u63a7\u9875\u9762\u6dfb\u52a0 IoTDB \u76d1\u63a7"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u70b9\u51fb\u65b0\u589eIoTDB\u76d1\u63a7  ")),(0,n.kt)("p",null,"\u8def\u5f84\uff1a\u83dc\u5355 -> \u6570\u636e\u5e93\u76d1\u63a7 -> IoTDB\u76d1\u63a7 -> \u65b0\u589eIoTDB\u76d1\u63a7  "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"hertzbeat",src:r(93557).Z,width:"4064",height:"2166"}),"   "),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"\u914d\u7f6e\u76d1\u63a7IoTDB\u6240\u9700\u53c2\u6570   ")),(0,n.kt)("p",null,"\u5728\u76d1\u63a7\u9875\u9762\u586b\u5199 IoTDB ",(0,n.kt)("strong",{parentName:"p"},"\u670d\u52a1IP"),"\uff0c",(0,n.kt)("strong",{parentName:"p"},"\u76d1\u63a7\u7aef\u53e3"),"(\u9ed8\u8ba49091)\uff0c\u6700\u540e\u70b9\u51fb\u786e\u5b9a\u6dfb\u52a0\u5373\u53ef\u3002",(0,n.kt)("br",{parentName:"p"}),"\n","\u5176\u4ed6\u53c2\u6570\u5982",(0,n.kt)("strong",{parentName:"p"},"\u91c7\u96c6\u95f4\u9694"),"\uff0c",(0,n.kt)("strong",{parentName:"p"},"\u8d85\u65f6\u65f6\u95f4"),"\u7b49\u53ef\u4ee5\u53c2\u8003",(0,n.kt)("a",{parentName:"p",href:"https://hertzbeat.com/docs/help/iotdb/"},"\u5e2e\u52a9\u6587\u6863")," ",(0,n.kt)("a",{parentName:"p",href:"https://hertzbeat.com/docs/help/iotdb/"},"https://hertzbeat.com/docs/help/iotdb/"),"   "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"hertzbeat",src:r(4300).Z,width:"4064",height:"2166"}),"    "),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"\u5b8c\u6210\u2705,\u73b0\u5728\u6211\u4eec\u5df2\u7ecf\u6dfb\u52a0\u597d\u5bf9 IoTDB \u7684\u76d1\u63a7\u4e86\uff0c\u67e5\u770b\u76d1\u63a7\u5217\u8868\u5373\u53ef\u770b\u5230\u6211\u4eec\u7684\u6dfb\u52a0\u9879\u3002  ")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"hertzbeat",src:r(58573).Z,width:"4064",height:"2166"}),"  "),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"\u70b9\u51fb\u76d1\u63a7\u5217\u8868\u9879\u7684",(0,n.kt)("strong",{parentName:"li"},"\u64cd\u4f5c"),"->",(0,n.kt)("strong",{parentName:"li"},"\u76d1\u63a7\u8be6\u60c5\u56fe\u6807")," \u5373\u53ef\u6d4f\u89c8 IoTDB\u7684\u5b9e\u65f6\u76d1\u63a7\u6307\u6807\u6570\u636e\u3002  ")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"hertzbeat",src:r(30603).Z,width:"4064",height:"2166"}),"  "),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},"\u70b9\u51fb",(0,n.kt)("strong",{parentName:"li"},"\u76d1\u63a7\u5386\u53f2\u8be6\u60c5TAB")," \u5373\u53ef\u6d4f\u89c8 IoTDB\u7684\u5386\u53f2\u76d1\u63a7\u6307\u6807\u6570\u636e\u56fe\u8868\ud83d\udcc8\u3002  ")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"hertzbeat",src:r(82303).Z,width:"4064",height:"2166"}),"    "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u5b8c\u6210DONE\uff01\u901a\u8fc7\u4e0a\u9762\u51e0\u6b65\uff0c\u603b\u7ed3\u8d77\u6765\u5176\u5b9e\u4e5f\u5c31\u662f\u4e24\u6b65"),"  "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u4e00\u6b65\u5f00\u542f IoTDB \u7aef",(0,n.kt)("inlineCode",{parentName:"strong"},"metrics"),"\u529f\u80fd"),"   "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u53e6\u4e00\u6b65\u5728 HertzBeat \u76d1\u63a7\u9875\u9762\u914d\u7f6eIP\u7aef\u53e3\u6dfb\u52a0\u76d1\u63a7\u5373\u53ef"),"         ")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u8fd9\u6837\u6211\u4eec\u5c31\u5b8c\u6210\u4e86\u5bf9 IoTDB \u7684\u76d1\u63a7\uff0c\u6211\u4eec\u53ef\u4ee5\u968f\u65f6\u67e5\u770b\u76d1\u63a7\u8be6\u60c5\u6307\u6807\u4fe1\u606f\u6765\u89c2\u6d4b\u5176\u670d\u52a1\u72b6\u6001\uff0c\u4f46\u4eba\u4e0d\u53ef\u80fd\u662f\u4e00\u76f4\u53bb\u770b\uff0c\u603b\u6709\u8981\u4f11\u606f\u7684\u65f6\u5019\uff0c\u76d1\u63a7\u5f80\u5f80\u4f34\u968f\u7740\u544a\u8b66\uff0c\u5f53\u76d1\u63a7\u6307\u6807\u53d1\u751f\u5f02\u5e38\uff0c\u76d1\u63a7\u7cfb\u7edf\u9700\u8981\u80fd\u53ca\u65f6\u901a\u77e5\u5230\u8d1f\u8d23\u4eba"),"  "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u63a5\u4e0b\u6765\u6211\u4eec\u5c31\u6765\u4e00\u6b65\u4e00\u6b65\u6559\u60a8\u914d\u7f6e HertzBeat \u7cfb\u7edf\u91cc\u7684\u9608\u503c\u544a\u8b66\u901a\u77e5"),"     "),(0,n.kt)("h4",{id:"\u4e09-\u5728-hertzbeat-\u7cfb\u7edf\u6dfb\u52a0-iotdb-\u6307\u6807\u9608\u503c\u544a\u8b66"},"\u4e09. \u5728 HertzBeat \u7cfb\u7edf\u6dfb\u52a0 IoTDB \u6307\u6807\u9608\u503c\u544a\u8b66"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u5bf9\u67d0\u4e2a\u91cd\u8981\u6307\u6807\u914d\u7f6e\u9608\u503c\u544a\u8b66  ")),(0,n.kt)("p",null,"\u8def\u5f84\uff1a\u83dc\u5355 -> \u544a\u8b66\u9608\u503c -> \u65b0\u589e\u9608\u503c  "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u9009\u62e9\u914d\u7f6e\u7684\u6307\u6807\u5bf9\u8c61\uff0cIotDB\u76d1\u63a7\u6709\u975e\u5e38\u591a\u7684\u6307\u6807\uff0c\u5176\u4e2d\u6709\u4e2a\u6307\u6807\u5173\u7cfb\u5230\u8282\u70b9\u7684\u72b6\u6001 ",(0,n.kt)("inlineCode",{parentName:"li"},"cluster_node_status")," -> ",(0,n.kt)("inlineCode",{parentName:"li"},"status")," (\u8282\u70b9\u72b6\u6001\uff0c1=online 2=offline)\u3002   "),(0,n.kt)("li",{parentName:"ul"},"\u8fd9\u91cc\u6211\u4eec\u5c31\u914d\u7f6e\u5f53\u6b64\u6307\u6807 ",(0,n.kt)("inlineCode",{parentName:"li"},"status==2")," \u65f6\u53d1\u51fa\u544a\u8b66\uff0c\u544a\u8b66\u7ea7\u522b\u4e3a",(0,n.kt)("strong",{parentName:"li"},"\u7d27\u6025\u544a\u8b66"),"\uff0c\u4e00\u6b21\u5373\u89e6\u53d1\uff0c\u5177\u4f53\u5982\u4e0b\u56fe\u3002  ")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"hertzbeat",src:r(95408).Z,width:"4064",height:"2166"}),"    "),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"\u65b0\u589e\u6d88\u606f\u901a\u77e5\u63a5\u6536\u4eba  ")),(0,n.kt)("p",null,"\u8def\u5f84\uff1a\u83dc\u5355 -> \u544a\u8b66\u901a\u77e5 -> \u544a\u8b66\u63a5\u6536\u4eba -> \u65b0\u589e\u63a5\u6536\u4eba  "),(0,n.kt)("p",null,"\u6d88\u606f\u901a\u77e5\u65b9\u5f0f\u652f\u6301 ",(0,n.kt)("strong",{parentName:"p"},"\u90ae\u4ef6\uff0c\u9489\u9489\uff0c\u4f01\u4e1a\u5fae\u4fe1\uff0c\u98de\u4e66\uff0cWebHook\uff0c\u77ed\u4fe1"),"\u7b49\uff0c\u6211\u4eec\u8fd9\u91cc\u4ee5\u5e38\u7528\u7684\u9489\u9489\u4e3a\u4f8b\u3002  "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u53c2\u7167\u6b64",(0,n.kt)("a",{parentName:"li",href:"https://hertzbeat.com/docs/help/alert_dingtalk"},"\u5e2e\u52a9\u6587\u6863")," ",(0,n.kt)("a",{parentName:"li",href:"https://hertzbeat.com/docs/help/alert_dingtalk"},"https://hertzbeat.com/docs/help/alert_dingtalk")," \u5728\u9489\u9489\u7aef\u914d\u7f6e\u673a\u5668\u4eba\uff0c\u8bbe\u7f6e\u5b89\u5168\u81ea\u5b9a\u4e49\u5173\u952e\u8bcd",(0,n.kt)("inlineCode",{parentName:"li"},"HertzBeat"),"\uff0c\u83b7\u53d6\u5bf9\u5e94",(0,n.kt)("inlineCode",{parentName:"li"},"access_token"),"\u503c\u3002 "),(0,n.kt)("li",{parentName:"ul"},"\u5728 HertzBeat \u914d\u7f6e\u63a5\u6536\u4eba\u53c2\u6570\u5982\u4e0b\u3002  ")),(0,n.kt)("p",null,"\u3010\u544a\u8b66\u901a\u77e5\u3011->\u3010\u65b0\u589e\u63a5\u6536\u4eba\u3011 ->\u3010\u9009\u62e9\u9489\u9489\u673a\u5668\u4eba\u901a\u77e5\u65b9\u5f0f\u3011->\u3010\u8bbe\u7f6e\u9489\u9489\u673a\u5668\u4ebaACCESS_TOKEN\u3011-> \u3010\u786e\u5b9a\u3011"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"hertzbeat",src:r(41711).Z,width:"3436",height:"890"}),"    "),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"\u914d\u7f6e\u5173\u8054\u7684\u544a\u8b66\u901a\u77e5\u7b56\u7565\u26a0\ufe0f \u3010\u65b0\u589e\u901a\u77e5\u7b56\u7565\u3011-> \u3010\u5c06\u521a\u8bbe\u7f6e\u7684\u63a5\u6536\u4eba\u5173\u8054\u3011-> \u3010\u786e\u5b9a\u3011 ")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"hertzbeat",src:r(60315).Z,width:"3436",height:"1088"}),"    "),(0,n.kt)("h3",{id:"\u5b8c\u6bd5\u73b0\u5728\u5750\u7b49\u544a\u8b66\u6d88\u606f\u8fc7\u6765\u4e86\u53ee\u53ee\u53ee\u53ee"},"\u5b8c\u6bd5\uff0c\u73b0\u5728\u5750\u7b49\u544a\u8b66\u6d88\u606f\u8fc7\u6765\u4e86\u3002\u53ee\u53ee\u53ee\u53ee"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"[HertzBeat\u544a\u8b66\u901a\u77e5]\n\u544a\u8b66\u76ee\u6807\u5bf9\u8c61 : iotdb.cluster_node_status.status\n\u6240\u5c5e\u76d1\u63a7ID : 205540620349696\n\u6240\u5c5e\u76d1\u63a7\u540d\u79f0 : IOTDB_localhost\n\u544a\u8b66\u7ea7\u522b : \u7d27\u6025\u544a\u8b66\n\u544a\u8b66\u89e6\u53d1\u65f6\u95f4 : 2023-01-05 22:17:06\n\u5185\u5bb9\u8be6\u60c5 : \u76d1\u63a7\u5230 IOTDB \u8282\u70b9 127.0.0.1 \u72b6\u6001 OFFLINE, \u8bf7\u53ca\u65f6\u5904\u7406\u3002\n")),(0,n.kt)("h2",{id:"\u5c0f\u7ed3"},"\u5c0f\u7ed3"),(0,n.kt)("p",null,"\u8fd9\u7bc7\u5b9e\u8df5\u6587\u7ae0\u5e26\u6211\u4eec\u4f53\u9a8c\u4e86\u5982\u4f55\u4f7f\u7528 HertzBeat \u76d1\u63a7 IoTDB \u6570\u636e\u5e93\u6307\u6807\u6570\u636e\uff0c\u53ef\u4ee5\u53d1\u73b0\u5c06 \u76d1\u63a7-\u544a\u8b66-\u901a\u77e5 \u96c6\u4e00\u4f53\u7684 HertzBeat \u5728\u64cd\u4f5c\u4e0e\u4f7f\u7528\u65b9\u9762\u66f4\u52a0\u7684\u4fbf\u6377\uff0c\u5728\u9875\u9762\u4e0a\u7b80\u5355\u70b9\u4e00\u70b9\u5c31\u80fd\u628a IoTDB \u7eb3\u5165\u76d1\u63a7\uff0c\u518d\u4e5f\u4e0d\u9700\u8981\u90e8\u7f72\u591a\u4e2a\u7ec4\u4ef6\uff0c\u5199\u591a\u4e2a\u6709\u95e8\u69db\u7684YML\u914d\u7f6e\u6587\u4ef6\u4e86\u3002  "),(0,n.kt)("p",null,"IoTDB Github: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/iotdb"},"https://github.com/apache/iotdb"),(0,n.kt)("br",{parentName:"p"}),"\n","HertzBeat Github: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/dromara/hertzbeat"},"https://github.com/dromara/hertzbeat")," "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u6b22\u8fce\u4e86\u89e3\u4f7f\u7528Star\u652f\u6301\u54e6\uff01")),(0,n.kt)("p",null,"\u53ea\u9700\u8981\u4e00\u6761docker\u547d\u4ee4\u5373\u53ef\u5b89\u88c5\u4f53\u9a8cheartbeat \uff1a",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("inlineCode",{parentName:"p"},"docker run -d -p 1157:1157 --name hertzbeat tancloud/hertzbeat")),(0,n.kt)("p",null,"\u6ce8\u610f\u26a0\ufe0fHertzBeat v1.2.3 \u7248\u672c\u652f\u6301 IoTDB v0.12 v0.13, \u7531\u4e8e\u5176v1.0\u521a\u53d1\u5e03, \u6682\u672a\u5bf9\u6b64\u7248\u672c\u5168\u90e8\u6307\u6807\u517c\u5bb9\u3002"))}c.isMDXComponent=!0},41711:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/alert-notice-1-3bad6e06e2c870849bc656a2092d59ac.png"},60315:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/alert-notice-2-8025b90624873463fe0a3f75bd7efafa.png"},93557:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/monitor-iotdb-1-518ff666fb4994d0961f999e4185600f.png"},4300:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/monitor-iotdb-2-243561382bbdf6fec6bd9133bdc510a3.png"},58573:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/monitor-iotdb-3-83c02b3121bbcac706c039c964eb3086.png"},30603:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/monitor-iotdb-4-20ca3228c2ff616977e1b266617fc33e.png"},82303:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/monitor-iotdb-5-eedef9c331cdd660090a0d078c851a83.png"},95408:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/monitor-iotdb-6-8050c598b8bac37904e0f0b63d309f95.png"}}]);