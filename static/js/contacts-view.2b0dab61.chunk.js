"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[779],{8712:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var a=n(5861),r=n(8152),s=n(7757),c=n.n(s),i=n(2791),o=n(513),l=n(5302),u=n(4808),d=n(1552),m="Loader_loader__+lRPl",h=n(184),x=function(){return(0,h.jsx)("div",{className:m,children:(0,h.jsx)(d.iT,{ariaLabel:"loading-indicator",height:18,width:18,strokeWidth:5,color:" #2196f3",secondaryColor:"#fff"})})},f=function(){return(0,h.jsx)("div",{className:m,children:(0,h.jsx)(d.iT,{ariaLabel:"loading-indicator",height:40,width:40,strokeWidth:5,color:" #fff",secondaryColor:"#2196f3"})})};var p=function(){var e=l.useCreateContactMutation(),t=(0,r.Z)(e,2),n=t[0],s=t[1].isLoading,u=l.useFetchContactsQuery().data,d=(0,i.useState)(""),m=(0,r.Z)(d,2),x=m[0],p=m[1],_=(0,i.useState)(""),b=(0,r.Z)(_,2),j=b[0],v=b[1],C=function(e){var t=e.currentTarget,n=t.name,a=t.value;switch(n){case"name":p(a);break;case"number":v(a)}},N=function(){var e=(0,a.Z)(c().mark((function e(t){var a,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a={name:x,number:j},t.preventDefault(),r=a.name.toLocaleLowerCase(),!u.find((function(e){return e.name.toLocaleLowerCase()===r}))){e.next=5;break}return e.abrupt("return",alert("".concat(a.name," is already in contacts")));case 5:return e.next=7,n(a);case 7:g();case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){p(""),v("")};return(0,h.jsxs)("form",{onSubmit:N,children:[(0,h.jsxs)("label",{className:o.Z.label,children:[(0,h.jsx)("span",{children:"Name"}),(0,h.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:x,onChange:C,className:o.Z.input})]}),(0,h.jsxs)("label",{className:o.Z.label,children:[(0,h.jsx)("span",{children:"Number"}),(0,h.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:j,onChange:C,className:o.Z.input})]}),(0,h.jsx)("div",{className:o.Z.buttonDiv,children:(0,h.jsx)("button",{type:"submit",className:o.Z.button,children:s?(0,h.jsx)(f,{}):(0,h.jsx)("div",{children:" Add contact"})})})]})},_="Filter_label__vEd1E",b="Filter_input__N7T3z",j=n(5048),v=function(){var e=(0,j.I0)(),t=(0,j.v9)(u.getFilter);return(0,h.jsxs)("label",{className:_,children:[(0,h.jsx)("span",{children:"Find contacts by name"}),(0,h.jsx)("input",{type:"text",value:t,onChange:function(t){e(u.filterItems(t.currentTarget.value))},className:b})]})},C="ContactList_contacts__jDmyV",N="ContactsItem_contact__3h39i",g="ContactsItem_name__woMRI",w="ContactsItem_number__hMcY4",y="ContactsItem_button__uPo7U",L=function(e){var t=e.contact,n=l.useDeleteContactMutation(),a=(0,r.Z)(n,2),s=a[0],c=a[1].isLoading;return(0,h.jsxs)("li",{className:N,children:[(0,h.jsxs)("p",{className:g,children:[t.name," :"]}),(0,h.jsx)("p",{className:w,children:t.number}),(0,h.jsx)("button",{className:y,type:"button",onClick:function(){return s(t.id)},disabled:c,children:c?(0,h.jsx)(x,{}):(0,h.jsx)("span",{children:"Delete"})})]})},Z=function(){var e=l.useFetchContactsQuery(),t=e.data,n=e.isLoading,a=(0,j.v9)(u.getFilter),r=function(){var e=a.toLocaleLowerCase();return t&&t.filter((function(t){return t.name.toLocaleLowerCase().includes(e)}))}();return(0,h.jsxs)("div",{children:[n&&(0,h.jsx)(f,{}),t&&(0,h.jsx)("ol",{className:C,children:r.map((function(e){return(0,h.jsx)(L,{contact:e},e.id)}))})]})},k=function(){return(0,h.jsxs)("div",{children:[(0,h.jsx)("h1",{children:"Phonebook"}),(0,h.jsx)(p,{}),(0,h.jsx)("h2",{children:"Contacts"}),(0,h.jsx)(v,{}),(0,h.jsx)(Z,{})]})}},513:function(e,t){t.Z={label:"Form_label__8nx+5",button:"Form_button__8NOIT",buttonDiv:"Form_buttonDiv__Hu9Rs",input:"Form_input__FTtTw"}}}]);
//# sourceMappingURL=contacts-view.2b0dab61.chunk.js.map