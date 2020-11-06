(this.webpackJsonpkanban=this.webpackJsonpkanban||[]).push([[0],{19:function(e,t,a){e.exports=a(28)},24:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(4),o=a.n(l),i=(a(24),a(14)),r=a(15),c=a(9),m=a(10),u=a(12),d=a(11),k=function(e){return s.a.createElement("div",{className:"header"},s.a.createElement("input",{type:"text",spellCheck:"false",className:"txt-title",placeholder:"Enter Title"}),s.a.createElement("div",{className:"menu"},s.a.createElement("span",null),s.a.createElement("button",{className:"btn-addColumn",onClick:e.onClickAddCol},"+"),s.a.createElement("span",{className:"switch-container"},s.a.createElement("input",{type:"checkbox",className:"chk-darkMode",onClick:e.onClickDarkMode}),s.a.createElement("label",{htmlFor:"",className:"switch-on-text"},"Light"),s.a.createElement("label",{htmlFor:"",className:"switch-off-text"},"Dark"))))},T=a(30),p=s.a.memo((function(e){var t=e.task.id;return s.a.createElement("div",null,s.a.createElement(T.a,{spellCheck:"false",className:"txtarea-task",defaultValue:e.task.text,onChange:function(a){e.changedTaskText(t,a.target.value)}}),s.a.createElement("div",null,e.isFirstCol?null:s.a.createElement("button",{className:"btn-prevArrow",onClick:function(){e.moveTaskToPrevCol(e.task)}},s.a.createElement("span",{className:"material-icons"})),s.a.createElement("button",{className:"btn-completeTask",onClick:function(){e.completeTask(t)}},s.a.createElement("span",{className:"material-icons"},"\ue5ca")),s.a.createElement("button",{id:"btn-deleteTask"+e.task.id,className:"btn-deleteTask",onClick:function(){e.deleteTask(t)}},s.a.createElement("span",{className:"material-icons"},"\ue872")),e.isLastCol?null:s.a.createElement("button",{className:"btn-nextArrow",onClick:function(){e.moveTaskToNextCol(e.task)}},s.a.createElement("span",{className:"material-icons"})),e.completed_time?s.a.createElement("p",{className:"p-completedTime"},"Completed: "+e.task.completed_time):null))})),f=a(29),C=a(31),h=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).changedTaskText=function(e,t){n.props.editTaskText(n.state.id,e,t)},n.completeTask=function(e){n.props.addCompletedTimeToTask(n.state.id,e)},n.deleteTask=function(e){n.props.deleteTask(n.state.id,e)},n.moveTaskToNextCol=function(e){n.props.moveTaskToNextCol(n.state.id,e)},n.moveTaskToPrevCol=function(e){n.props.moveTaskToPrevCol(n.state.id,e)},n.state={id:n.props.col_id},n.newTaskTextRef=s.a.createRef(),n}return Object(m.a)(a,[{key:"onClickAddTask",value:function(){var e=this.newTaskTextRef.current.value;""!==e&&(this.props.addTask(this.state.id,e),this.newTaskTextRef.current.value="")}},{key:"render",value:function(){var e,t=this;return e=this.props.tasks?this.props.tasks.map((function(e){return s.a.createElement(f.a,{key:e.id,in:!0,timeout:500,classNames:"task-animation",appear:!0},s.a.createElement("li",null,s.a.createElement(p,{task:e,isFirstCol:t.props.isFirstCol,isLastCol:t.props.isLastCol,completed_time:e.completed_time,changedTaskText:t.changedTaskText,deleteTask:t.deleteTask,completeTask:t.completeTask,moveTaskToPrevCol:t.moveTaskToPrevCol,moveTaskToNextCol:t.moveTaskToNextCol})))})):null,s.a.createElement("div",{className:"column"},s.a.createElement("input",{type:"text",className:"txt-columnName",placeholder:"Enter Column Name"}),s.a.createElement("button",{className:"btn-deleteColumn",onClick:this.props.onClickDeleteCol},s.a.createElement("span",{className:"material-icons"},"\ue872")),s.a.createElement(T.a,{rowsMin:1,spellCheck:"false",placeholder:"Enter New Task",className:"txtarea-newTask",defaultValue:"",ref:this.newTaskTextRef}),s.a.createElement("button",{className:"btn-addTask",onClick:this.onClickAddTask.bind(this)},"Post Task"),s.a.createElement("ul",null,s.a.createElement(C.a,null,e)))}}]),a}(s.a.Component),v=s.a.memo(h),E=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this)).addCompletedTimeToTask=function(e,t){var a=n.getColumnById(e),s=new Date,l=a.tasks.find((function(e){return e.id===t}));l.completed_time=s.toLocaleString();var o=a.tasks.map((function(e){return e.id===t?l:e}));n.setState({columnListArr:n.state.columnListArr.map((function(e){return e.id===o.id?o:e}))})},n.addTask=function(e,t,a){var s=n.getColumnById(e);0===s.tasks.length?s.tasks=null!==a?[{id:0,text:t,completed_time:a}]:[{id:0,text:t,completed_time:""}]:a?s.tasks.push({id:n.createNewTaskId(s.tasks),text:t,completed_time:a}):s.tasks.push({id:n.createNewTaskId(s.tasks),text:t}),n.setState({columnListArr:n.state.columnListArr.map((function(e){return e.id===s.id?s:e}))})},n.deleteTask=function(e,t){var a=n.getColumnById(e),s=a.tasks.filter((function(e){return e.id!==t}));a.tasks=s,n.setState({columnListArr:n.state.columnListArr.map((function(t){return t.id===e?a:t}))})},n.editTaskText=function(e,t,a){var s=n.state.columnListArr;s.forEach((function(n){n.id===e&&n.tasks.forEach((function(e){e.id===t&&(e.text=a)}))})),n.setState({columnListArr:s})},n.moveTaskToNextCol=function(e,t){n.deleteTask(e,t.id);var a=n.getColumnIndex_in_columnListArr(e),s=n.state.columnListArr[++a];"completed_time"in t?n.addTask(s.id,t.text,t.completed_time):n.addTask(s.id,t.text)},n.moveTaskToPrevCol=function(e,t){n.deleteTask(e,t.id);var a=n.getColumnIndex_in_columnListArr(e),s=n.state.columnListArr[--a];"completed_time"in t?n.addTask(s.id,t.text,t.completed_time):n.addTask(s.id,t.text)},n.state={columnListArr:[]},n}return Object(m.a)(a,[{key:"createNewTaskId",value:function(e){var t=e[e.length-1].id;return++t}},{key:"getColumnById",value:function(e){return this.state.columnListArr.find((function(t){return t.id===e}))}},{key:"getColumnIndex_in_columnListArr",value:function(e){return this.state.columnListArr.findIndex((function(t){return t.id===e}))}},{key:"addColOnClickHandler",value:function(){var e,t=this.state.columnListArr;e=0===t.length?{id:0,tasks:[]}:{id:t[t.length-1].id+1,tasks:[]},this.setState({columnListArr:[].concat(Object(r.a)(this.state.columnListArr),[e])})}},{key:"darkModeOnClickHandler",value:function(){this.props.changeTheme()}},{key:"deleteColOnClickHandler",value:function(e){this.setState({columnListArr:this.state.columnListArr.filter((function(t){return t.id!==e}))})}},{key:"render",value:function(){var e,t=this,a=-1,n=0===(e=this.state.columnListArr.map((function(e){return a++,s.a.createElement(f.a,{key:e.id,in:!0,timeout:500,classNames:"column-animation",appear:!0},s.a.createElement(v,{col_id:e.id,tasks:e.tasks,addCompletedTimeToTask:t.addCompletedTimeToTask,addTask:t.addTask,deleteTask:t.deleteTask,editTaskText:t.editTaskText,isFirstCol:0===a,isLastCol:a===t.state.columnListArr.length-1,moveTaskToNextCol:t.moveTaskToNextCol,moveTaskToPrevCol:t.moveTaskToPrevCol,onClickDeleteCol:function(){return t.deleteColOnClickHandler(e.id)}}))}))).length?s.a.createElement(f.a,{in:!0,timeout:{enter:500,exit:0},classNames:"heading-noContent-animation",appear:!0},s.a.createElement("h1",{className:"heading-noContent"},"Oops! No Board Columns",s.a.createElement("br",null),"Click the plus button above to create a column")):null;return s.a.createElement("div",null,s.a.createElement(k,{onClickAddCol:function(){return t.addColOnClickHandler()},onClickDarkMode:function(){return t.darkModeOnClickHandler()}}),s.a.createElement(C.a,null,n,e))}}]),a}(s.a.Component);a(27);var x=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){window.onbeforeunload=function(e){e.returnValue=""}}),[]),s.a.createElement("div",{className:a?"app-darkMode":"app"},s.a.createElement(E,{changeTheme:function(){l(!a)}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.ad71076c.chunk.js.map