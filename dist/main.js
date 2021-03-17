(()=>{"use strict";const e=(e,t={},o="")=>{const c=document.createElement(e);return Object.keys(t).forEach((e=>{c.setAttribute(e,t[e])})),c.textContent=o,c},t=(e=[])=>{for(let t=e.length-2;t>0;t-=1)e[t].appendChild(e[t+1]);e[0].appendChild(e[1])};window.domNodeCreator=e,window.chainAppend=t;const o=(()=>{const e=[];return window.todoList=e,{createTodo:function(t,o,c,d,l=0){const n={};n.id=e.length,n.title=t,n.description=o,n.dueDate=c,n.priority=d,n.projectId=l,e.push(n)},getProjectTodos:t=>e.filter((e=>e.projectId===parseInt(t,10))),getAllTodos:()=>[...e],getTodo:t=>e[t],updateTodo:(t,o,c,d,l,n=0)=>{e[t].title=o,e[t].description=c,e[t].dueDate=d,e[t].priority=l,e[t].projectId=n},deleteTodo:t=>{let o=e.findIndex((e=>e.id===parseInt(t,10)));e.splice(o,1)}}})(),c=(()=>{const e={0:"default"};return{createProject:function(t){const o=Object.keys(e)[Object.keys(e).length-1];e[parseInt(o,10)+1]=t},getProject:t=>e[t],getAllProject:()=>Object.assign(e)}})();window.todoModule=o,window.projectModule=c;const d=t=>{let o=document.getElementById("project");o&&t.removeChild(o),o=e("select",{id:"project",class:"form-control mr-3"});const d=c.getAllProject();Object.keys(d).forEach((t=>{const c=e("option",{value:t},d[t]);o.appendChild(c)})),t.appendChild(o)},l=()=>{const d=document.getElementById("content"),n=e("div",{class:"todo-list"});document.querySelector(".todo-list")&&d.removeChild(document.querySelector(".todo-list"));const r=c.getAllProject();Object.keys(r).forEach((s=>{const a=s,i=o.getProjectTodos(a),p=e("h3",{},r[s]),m=e("ul",{class:"list-group list-group-flush"});i.forEach((d=>{const n=e("li",{class:"list-group-item"}),r=e("span",{},d.title),s=e("p",{},d.description),a=e("span",{},d.priority),i=e("div"),p=e("span",{class:"mx-2"}),u=e("i",{class:"fa fa-pencil-square-o","data-index":d.id,"data-toggle":"modal","data-target":"#myModal",id:"edit-icon"});u.addEventListener("click",(d=>{(d=>{const l=document.querySelector("body");document.querySelector(".container")&&l.removeChild(document.querySelector(".container"));const n=e("div",{class:"container"}),r=e("div",{class:"modal",id:"myModal"}),s=e("div",{class:"modal-dialog"}),a=e("div",{class:"modal-content"}),i=e("div",{class:"modal-header"}),p=e("h4",{class:"modal-title"},"Edit Todo"),m=e("div",{class:"modal-body"});t([l,n,r,s,a]),t([a,i,p]),t([a,m]);const u=e("form",{class:"mb-3"});["title","description","dueDate"].forEach((c=>{const l=e("div",{class:"form-group col-md-7"}),n=e("input",{type:"text",class:"form-control",id:c,placeholder:c,value:o.getTodo(d)[c]});t([u,l,n])})),t([m,u]);const y=e("label",{for:"priority",class:"col-sm-2 col-form-label"},"Priority");u.appendChild(y);const g=e("div",{class:"form-group col-md-4"}),f=e("select",{id:"priority",class:"form-control"});["Not Urgent","Urgent"].forEach((t=>{const o=e("option",{},t);f.appendChild(o)})),t([u,g,f]);const v=e("label",{for:"project",class:"col-sm-2 col-form-label"},"Project");u.appendChild(v);const j=e("div",{class:"form-group col-md-4",id:"project-group"}),h=e("select",{id:"project",class:"form-control mr-3"}),b=c.getAllProject();Object.keys(b).forEach((t=>{const o=e("option",{value:t},b[t]);h.appendChild(o)})),j.appendChild(h),t([u,j]);const E=e("button",{type:"submit",class:"btn btn-success",id:"update-todo","data-index":d,"data-dismiss":"modal"},"Update"),I=e("div",{class:"modal-footer d-flex justify-content-between"}),C=e("button",{type:"button",class:"btn btn-danger","data-dismiss":"modal"},"Close");t([a,I,E]),t([a,I,C])})(d.target.dataset.index);const n=document.querySelector(".modal #title"),r=document.querySelector(".modal #description"),s=document.querySelector(".modal #dueDate"),a=document.querySelector(".modal #priority"),i=document.querySelector(".modal #project");document.getElementById("update-todo").addEventListener("click",(e=>{e.preventDefault(),o.updateTodo(e.target.dataset.index,n.value,r.value,s.value,a.value,parseInt(i.value,10)),l()}))}));const y=e("span"),g=e("i",{class:"fa fa-times","data-index":d.id});g.addEventListener("click",(e=>{o.deleteTodo(e.target.dataset.index),l()})),t([n,r]),t([n,s]),t([n,i,a]),t([n,i,p,u]),t([n,i,y,g]),t([m,n])})),t([d,n,p]),t([d,n,m])}))};(()=>{const o=document.getElementById("content"),c=e("h1",{},"Todo List"),l=e("form",{class:"mb-3"});["Title","Description","Due date"].forEach((o=>{const c=e("div",{class:"form-group col-md-7"}),d=e("input",{type:"text",class:"form-control",id:o,placeholder:o});t([l,c,d])}));const n=e("label",{for:"priority",class:"col-sm-2 col-form-label"},"Priority");l.appendChild(n);const r=e("div",{class:"form-group col-md-4"}),s=e("select",{id:"priority",class:"form-control"});["Not Urgent","Urgent"].forEach((t=>{const o=e("option",{},t);s.appendChild(o)})),t([l,r,s]);const a=e("label",{for:"project",class:"col-sm-2 col-form-label"},"Project");l.appendChild(a);const i=e("div",{class:"form-group col-md-4",id:"project-group"});d(i),t([l,i]);const p=e("button",{type:"submit",class:"btn btn-primary",id:"add-todo"},"Add Todo");l.appendChild(p),t([o,c]),t([o,l])})(),(()=>{const o=document.getElementById("content"),c=e("form",{class:"mb-3"}),d=e("div",{class:"form-group col-md-7"}),l=e("input",{type:"text",class:"form-control",id:"project-name",placeholder:"Project name"});t([c,d,l]);const n=e("button",{type:"submit",class:"btn btn-primary",id:"create-project"},"Create Project");c.appendChild(n),t([o,c])})(),l();const n=document.getElementById("Title"),r=document.getElementById("Description"),s=document.getElementById("Due date"),a=document.getElementById("priority");document.getElementById("add-todo").addEventListener("click",(e=>{const t=document.getElementById("project");e.preventDefault(),((e,t,c,d,l)=>{o.createTodo(e,t,c,d,l)})(n.value,r.value,s.value,a.value,parseInt(t.value,10)),l()}));const i=document.getElementById("project-group"),p=document.getElementById("project-name");document.getElementById("create-project").addEventListener("click",(e=>{e.preventDefault(),c.createProject(p.value),d(i),alert("New project created")}))})();
//# sourceMappingURL=main.js.map