"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[208],{9208:function(e,s,o){o.r(s),o.d(s,{default:function(){return S}});var i=o(885),n=o(2791),t="profileInfo_profile_info__oKieG",r="profileInfo_status__Errcv",l="profileInfo_profile_status__pNXC6",a="profileInfo_status_text__-OqRV",c="profileInfo_img_name__1KIne",u="profileInfo_customFileUpload__vHech",d="profileInfo_wrap_img__3XHP-",f="profileInfo_descWrap__ehAGq",p="profileInfo_myInfo__LwywI",x="profileInfo_wrapContacts__cpn6X",h=o(2353),j=o(1209),_=o(184),m=function(e){var s=(0,n.useState)(!1),o=(0,i.Z)(s,2),t=o[0],r=o[1],c=(0,n.useState)(e.status),u=(0,i.Z)(c,2),d=u[0],f=u[1];(0,n.useEffect)((function(){f(e.status)}),[e.status]);return(0,_.jsx)("div",{className:l,children:t?(0,_.jsxs)("div",{children:[(0,_.jsx)("p",{children:"Edite status: "}),(0,_.jsx)("input",{onBlur:function(){r(!1),e.updateStatus(d)},onChange:function(e){var s=e.currentTarget.value;f(s)},value:d,autoFocus:!0}),(0,_.jsx)("button",{children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0441\u0442\u0430\u0442\u0443\u0441"})]}):(0,_.jsxs)("div",{children:[(0,_.jsx)("p",{children:"Status: "}),(0,_.jsx)("span",{className:a,children:e.status||"No status"}),(0,_.jsx)("button",{onClick:function(){r(!0)},children:"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c \u0441\u0442\u0430\u0442\u0443\u0441"})]})})},v="btnProfile_btnChangeInfo__Z2U3e",b=function(e){var s=e.contactTitle,o=e.contactValue;return(0,_.jsx)("li",{children:(0,_.jsxs)("b",{children:[s,": ",o||"not yet"]})})},g=function(e){var s,o,i,n,t,r=null===(s=e.profile)||void 0===s?void 0:s.lookingForAJobDescription,l=null===(o=e.profile)||void 0===o?void 0:o.lookingForAJob,a=null!==(i=e.profile)&&void 0!==i&&i.contacts?e.profile.contacts:"";return(0,_.jsxs)("div",{className:f,children:[(0,_.jsxs)("div",{className:p,children:[(0,_.jsxs)("span",{children:[(0,_.jsx)("b",{children:"Name"}),": ",null===(n=e.profile)||void 0===n?void 0:n.fullName]}),(0,_.jsxs)("span",{children:[(0,_.jsx)("b",{children:"About Me"}),": ",null===(t=e.profile)||void 0===t?void 0:t.aboutMe]}),(0,_.jsxs)("span",{children:[(0,_.jsx)("b",{children:"Looking for a Job description"}),": ",r]}),(0,_.jsxs)("span",{children:[(0,_.jsx)("b",{children:"Looking for a Job"}),": ",l?"Yes":"No"]})]}),e.isOwner&&(0,_.jsx)("span",{children:(0,_.jsx)("button",{className:v,onClick:function(){e.setEditeMode(!0)},children:"change information"})}),(0,_.jsx)("div",{className:x,children:(0,_.jsx)("ul",{children:Object.keys(a).map((function(s){var o;return(0,_.jsx)(b,{contactTitle:s,contactValue:null===(o=e.profile)||void 0===o?void 0:o.contacts[s]},s)}))})})]})},N=o(1413),k=o(5705),F="profileDataForm_formBlock__saXxI",I="profileDataForm_wrapCheckBox__G6v1s",w="profileDataForm_wrapBtn__Htpug",P=function(e){var s=(0,k.TA)({initialValues:{fullName:"",lookingForAJob:!1,lookingForAJobDescription:"",aboutMe:""},onSubmit:function(o){e.saveProfile(o),s.resetForm(),e.setEditeMode(!1)},validate:function(){}});return(0,_.jsxs)("form",{onSubmit:s.handleSubmit,className:F,children:[(0,_.jsx)("span",{children:"Name: "})," ",(0,_.jsx)("input",(0,N.Z)({},s.getFieldProps("fullName"))),(0,_.jsx)("br",{}),(0,_.jsx)("span",{children:"About Me: "})," ",(0,_.jsx)("input",(0,N.Z)({},s.getFieldProps("aboutMe"))),(0,_.jsx)("br",{}),(0,_.jsx)("span",{children:"looking for a Job Description: "})," ",(0,_.jsx)("input",(0,N.Z)({},s.getFieldProps("lookingForAJobDescription"))),(0,_.jsx)("br",{}),(0,_.jsxs)("span",{className:I,children:[(0,_.jsx)("span",{children:"Looking for a JOB: "})," ",(0,_.jsx)("input",(0,N.Z)({type:"checkbox"},s.getFieldProps("lookingForAJob")))]}),(0,_.jsx)("br",{}),(0,_.jsx)("span",{className:w,children:(0,_.jsx)("button",{className:v,type:"submit",children:"Save info"})})]})},S=function(e){var s,o=(0,n.useState)(!1),l=(0,i.Z)(o,2),a=l[0],f=l[1];if(!e.profile)return(0,_.jsx)(h.Z,{});var p=function(s){var o=s.currentTarget.files;o&&o.length&&e.savePhoto(o[0])};return(0,_.jsxs)("div",{className:t,children:[(0,_.jsx)("div",{className:r,children:(0,_.jsx)(m,{status:e.status,updateStatus:e.updateStatus})}),(0,_.jsxs)("div",{className:c,children:[(0,_.jsx)("div",{className:d,children:(0,_.jsx)("img",{src:null!==(s=e.profile)&&void 0!==s&&s.photos.small?e.profile.photos.small:j,alt:"Photo User Profile"})}),(0,_.jsxs)("span",{children:[(0,_.jsx)("label",{htmlFor:"file-upload",className:u}),e.isOwner&&(0,_.jsx)("input",{id:"file-upload",type:"file",onChange:p})]})]}),a?(0,_.jsx)(P,{saveProfile:e.saveProfile,setEditeMode:f}):(0,_.jsx)(g,{profile:e.profile,onPhotoSelected:p,isOwner:e.isOwner,setEditeMode:f})]})}},1209:function(e,s,o){e.exports=o.p+"static/media/user-icon.788c31c447526c407983.jpg"}}]);
//# sourceMappingURL=208.1e6a00cd.chunk.js.map