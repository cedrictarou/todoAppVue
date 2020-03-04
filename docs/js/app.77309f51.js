(function(t){function e(e){for(var n,s,l=e[0],d=e[1],u=e[2],c=0,p=[];c<l.length;c++)s=l[c],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(n in d)Object.prototype.hasOwnProperty.call(d,n)&&(t[n]=d[n]);i&&i(e);while(p.length)p.shift()();return a.push.apply(a,u||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],n=!0,l=1;l<o.length;l++){var d=o[l];0!==r[d]&&(n=!1)}n&&(a.splice(e--,1),t=s(s.s=o[0]))}return t}var n={},r={app:0},a=[];function s(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=t,s.c=n,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(o,n,function(e){return t[e]}.bind(null,n));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var i=d;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-container",{staticClass:"mt-5"},[o("app-header",{attrs:{todoCount:t.todos.length,maxTodos:t.maxTodos}}),o("app-new-todo",{staticClass:"mt-2",on:{todoAdded:t.newTodo}}),o("app-todo-grid",{staticClass:"mt-2",attrs:{todos:t.todos},on:{todoDeleted:t.deletedTodo}}),o("b-col",{staticClass:"text-center mt-2",attrs:{sm:"12"}},[o("b-alert",{attrs:{show:""}},[t._v("Info: Click on a todo to Delete it!")])],1)],1)},a=[],s=(o("a434"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("b-row",t._l(t.todos,(function(e,n){return o("app-todo",{key:e.id,nativeOn:{click:function(e){return t.deleteTodo(n)}}},[t._v(t._s(e))])})),1)],1)}),l=[],d=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-col",{attrs:{sm:"6",md:"4",lg:"3"}},[o("b-card",[o("b-card-text",[t._t("default")],2)],1)],1)},u=[],i=o("2877"),c={},p=Object(i["a"])(c,d,u,!1,null,null,null),f=p.exports,m={props:["todos"],components:{appTodo:f},methods:{deleteTodo:function(t){this.$emit("todoDeleted",t)}}},h=m,b=Object(i["a"])(h,s,l,!1,null,null,null),v=b.exports,x=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("label",[t._v("Todo:")]),o("b-form-textarea",{attrs:{id:"textarea",placeholder:"Enter something to do...",rows:"2","max-rows":"3"},model:{value:t.todo,callback:function(e){t.todo=e},expression:"todo"}}),o("b-btn",{staticClass:"mt-2",attrs:{variant:"outline-primary"},on:{click:t.createNew}},[t._v("Add Todo")])],1)},_=[],g={data:function(){return{todo:""}},methods:{createNew:function(){this.$emit("todoAdded",this.todo),this.todo=""}}},w=g,T=Object(i["a"])(w,x,_,!1,null,null,null),y=T.exports,O=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("b-progress",{attrs:{height:"2rem",max:t.maxTodos,"show-progress":"",animated:""}},[o("b-progress-bar",{attrs:{value:t.todoCount,label:(t.todoCount/t.maxTodos*100).toFixed(0)+"%"}})],1)],1)},j=[],C={props:["todoCount","maxTodos"],data:function(){return{value:"",max:100}}},k=C,P=Object(i["a"])(k,O,j,!1,null,null,null),$=P.exports,E={data:function(){return{todos:["just a todo to see something"],maxTodos:10}},methods:{newTodo:function(t){if(this.todos.length>=this.maxTodos)return alert("Please delete todos frist");this.todos.push(t)},deletedTodo:function(t){this.todos.splice(t,1)}},components:{appTodoGrid:v,appNewTodo:y,appHeader:$}},S=E,M=Object(i["a"])(S,r,a,!1,null,null,null),A=M.exports,D=o("5f5b"),N=o("b1e0");o("f9e3"),o("2dd8");n["default"].use(D["a"]),n["default"].use(N["a"]),n["default"].config.productionTip=!1,new n["default"]({render:function(t){return t(A)}}).$mount("#app")}});
//# sourceMappingURL=app.77309f51.js.map