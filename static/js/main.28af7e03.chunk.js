(this["webpackJsonphouse-call"]=this["webpackJsonphouse-call"]||[]).push([[0],{25:function(e,a,t){},26:function(e,a,t){},27:function(e,a,t){},32:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),c=t(14),i=t.n(c),l=(t(25),t(26),t(12)),r=(t(27),t(19)),d=t(20),o=(t(30),t(1));var u=function(){var e=s.a.useState(""),a=Object(l.a)(e,2),t=a[0],n=a[1],c=s.a.useState({}),i=Object(l.a)(c,2),u=i[0],m=i[1];function g(e){var a={"\u0401":"YO","\u0419":"I","\u0426":"TS","\u0423":"U","\u041a":"K","\u0415":"E","\u041d":"N","\u0413":"G","\u0428":"SH","\u0429":"SCH","\u0417":"Z","\u0425":"H","\u042a":"'","\u0451":"yo","\u0439":"i","\u0446":"ts","\u0443":"u","\u043a":"k","\u0435":"e","\u043d":"n","\u0433":"g","\u0448":"sh","\u0449":"sch","\u0437":"z","\u0445":"h","\u044a":"'","\u0424":"F","\u042b":"I","\u0412":"V","\u0410":"a","\u041f":"P","\u0420":"R","\u041e":"O","\u041b":"L","\u0414":"D","\u0416":"ZH","\u042d":"E","\u0444":"f","\u044b":"i","\u0432":"v","\u0430":"a","\u043f":"p","\u0440":"r","\u043e":"o","\u043b":"l","\u0434":"d","\u0436":"zh","\u044d":"e","\u042f":"Ya","\u0427":"CH","\u0421":"S","\u041c":"M","\u0418":"I","\u0422":"T","\u042c":"'","\u0411":"B","\u042e":"YU","\u044f":"ya","\u0447":"ch","\u0441":"s","\u043c":"m","\u0438":"i","\u0442":"t","\u044c":"'","\u0431":"b","\u044e":"yu"};return e.split("").map((function(e){return a[e]||e})).join("")}return Object(o.jsxs)("section",{className:"form",children:[Object(o.jsx)("h2",{className:"form__title",children:"\u0417\u0430\u043f\u0438\u0441\u044c \u043a \u0432\u0440\u0430\u0447\u0443"}),Object(o.jsx)(r.a,{initialValues:{name:"",age:"",date:""},validate:function(e){var a={};return e.name?/^[\u0410-\u042f\u0401A-Z][\u0430-\u044f\u0451a-z]*([-][\u0410-\u042f\u0401A-Z][\u0430-\u044f\u0451a-z]*)?\s[\u0410-\u042f\u0401A-Z][\u0430-\u044f\u0451a-z]*\s[\u0410-\u042f\u0401A-Z][\u0430-\u044f\u0451a-z]*$/i.test(e.name)||(a.name="\u041d\u0435\u0432\u0435\u0440\u043d\u043e \u0432\u0432\u0435\u0434\u0435\u043d\u044b \u0444\u0438\u043e"):a.name="\u042d\u0442\u043e \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435",e.age?(e.age>150||e.age<0)&&(a.age="\u0414\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u044b\u0439 \u0432\u043e\u0437\u0440\u0430\u0441\u0442 \u043e\u0442 0 \u0434\u043e 150"):a.age="\u042d\u0442\u043e \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435",e.date?/^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/.test(e.date)?function(e){var a=new Date((new Date).getFullYear(),(new Date).getMonth()+1,(new Date).getDate()).getTime(),t=e.split(".").reverse(),n=new Date(t[0],t[1],t[2]).getTime();return n-a>12096e5||n-a<0}(e.date)&&(a.date="\u041d\u0435\u043b\u044c\u0437\u044f \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u0434\u0430\u0442\u0443 \u043f\u043e\u0437\u0434\u043d\u0435\u0435 14 \u0434\u043d\u0435\u0439 \u0441 \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e \u0434\u043d\u044f"):a.date="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0430\u0442\u0443 \u0432 \u0432\u0435\u0440\u043d\u043e\u043c \u0444\u043e\u0440\u043c\u0430\u0442\u0435, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 01.01.2000":a.date="\u042d\u0442\u043e \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435",a},onSubmit:function(e){!function(e,a){var t=e.split(" "),s="";u?(t.forEach((function(e){s+=e.substring(0,1).toLocaleUpperCase()})),g(s),n(u.data.country+"/"+u.data.region_iso_code+"/"+g(s).toLocaleUpperCase()+"/GLAT"+(u.data.geo_lat?u.data.geo_lat:"")+"-GLON"+(u.data.geo_lon?u.data.geo_lon:"")+"/"+a)):n("\u041e\u0448\u0438\u0431\u043a\u0430")}(e.name,e.date)},children:function(e){var a=e.values,t=e.errors,n=e.touched,s=e.handleChange,c=e.handleBlur,i=e.handleSubmit,l=e.status;return Object(o.jsxs)("form",{className:"fields",onSubmit:i,children:[Object(o.jsx)("p",{className:"fields__title",children:"\u0424\u0418\u041e"}),Object(o.jsx)("input",{className:"fields__input ".concat(t.name&&n.name&&t.name?"fields__input-error":""),type:"text",name:"name",onChange:s,onBlur:c,value:a.name}),Object(o.jsx)("span",{className:"fields__span-error",children:t.name&&n.name&&t.name}),Object(o.jsx)("p",{className:"fields__title",children:"\u0412\u043e\u0437\u0440\u0430\u0441\u0442"}),Object(o.jsx)("input",{className:"fields__input ".concat(t.age&&n.age&&t.age?"fields__input-error":""),type:"number",name:"age",onChange:s,onBlur:c,value:a.age}),Object(o.jsx)("span",{className:"fields__span-error",children:t.age&&n.age&&t.age}),Object(o.jsx)("p",{className:"fields__title",children:"\u0410\u0434\u0440\u0435\u0441"}),Object(o.jsx)(d.a,{token:"ea73e6140b9125725640d3019f9f777cfd0d12a3",count:"5",hintText:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043d\u0443\u0436\u043d\u044b\u0439 \u0430\u0434\u0440\u0435\u0441",selectOnBlur:"true",value:u,onChange:m,inputProps:{className:"fields__input"}}),Object(o.jsx)("p",{className:"fields__title",children:"\u0414\u0430\u0442\u0430 \u0437\u0430\u043f\u0438\u0441\u0438"}),Object(o.jsx)("input",{className:"fields__input ".concat(t.date&&n.date&&t.date?"fields__input-error":""),type:"text",name:"date",onChange:s,onBlur:c,value:a.date}),Object(o.jsx)("span",{className:"fields__span-error",children:t.date&&n.date&&t.date?t.date&&n.date&&t.date:l||""}),Object(o.jsx)("button",{className:"fields__button  ".concat(t.name&&n.name&&t.name||t.age&&n.age&&t.age||t.date&&n.date&&t.date?"fields__button_inactive":""," ").concat(n.name&&n.age&&n.date?"":"fields__button_inactive"),type:"submit",disabled:"".concat(t.name&&n.name&&t.name||t.age&&n.age&&t.age||t.date&&n.date&&t.date?"disabled":""),children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})}}),Object(o.jsx)("p",{className:"result",children:t})]})};var m=function(){return Object(o.jsx)("div",{className:"page",children:Object(o.jsx)(u,{})})},g=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,33)).then((function(a){var t=a.getCLS,n=a.getFID,s=a.getFCP,c=a.getLCP,i=a.getTTFB;t(e),n(e),s(e),c(e),i(e)}))};i.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(m,{})}),document.getElementById("root")),g()}},[[32,1,2]]]);
//# sourceMappingURL=main.28af7e03.chunk.js.map