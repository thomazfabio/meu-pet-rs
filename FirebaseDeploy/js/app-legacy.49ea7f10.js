(function(){"use strict";var e={2599:function(e,t,a){a(6992),a(8674),a(9601),a(7727);var r=a(144),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{staticStyle:{"background-color":"#EBEBEB"}},[a("Spinner"),a("v-main",[a("v-card",{staticClass:"mx-auto overflow-auto personal_bg_1",staticStyle:{"border-radius":"0px"},attrs:{height:"100vh"}},[a("v-app-bar",{attrs:{height:"40px",color:"primary",dark:""}},[e.isLogged?a("v-app-bar-nav-icon",{on:{click:function(t){e.drawer=!0}}}):e._e(),a("v-toolbar-title",[e._v("Meu Pet Rio Grande do Sul 1.0")])],1),a("router-view"),a("v-navigation-drawer",{attrs:{absolute:"",temporary:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("v-list",{attrs:{nav:"",dense:""}},[a("v-list-item-group",{attrs:{"active-class":"primary--text text--accent-4"},model:{value:e.group,callback:function(t){e.group=t},expression:"group"}},[a("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:"/"}},[a("v-list-item",{on:{click:function(t){e.drawer=!1}}},[a("v-list-item-icon",[a("v-icon",[e._v("mdi-home")])],1),a("v-list-item-title",[e._v("Home")])],1)],1),a("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:"/account"}},[a("v-list-item",{on:{click:function(t){e.drawer=!1}}},[a("v-list-item-icon",[a("v-icon",[e._v("mdi-account")])],1),a("v-list-item-title",[e._v("Minha conta")])],1)],1),a("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:"/setup"}},[a("v-list-item",{on:{click:function(t){e.drawer=!1}}},[a("v-list-item-icon",[a("v-icon",[e._v("mdi-cog")])],1),a("v-list-item-title",[e._v("Configuração")])],1)],1),a("v-list-item",{on:{click:function(t){return e.logout()}}},[a("v-list-item-icon",[a("v-icon",[e._v("mdi-logout")])],1),a("v-list-item-title",[e._v("Sair")])],1)],1)],1)],1)],1)],1)],1)},s=[],o=a(7906),i=a(6198),l=(a(4444),function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.isVisible?a("div",{staticClass:"text-center",attrs:{id:"spinner"}},[e.isVisible?a("div",{staticClass:"text-center",attrs:{id:"spinner"}},[a("v-progress-circular",{attrs:{size:100,width:5,color:"primary",indeterminate:""}})],1):e._e()]):e._e()}),c=[],u={name:"Spinner",data:function(){return{visible:null}},methods:{setVisible:function(){this.visible=this.$store.getters.isSpinnerVisible}},created:function(){this.setVisible()},computed:{isVisible:function(){return this.$store.getters.isSpinnerVisible}}},d=u,p=a(1001),m=a(3453),f=a.n(m),v=a(624),h=(0,p.Z)(d,l,c,!1,null,null,null),g=h.exports;f()(h,{VProgressCircular:v.Z});var w={name:"App",components:{Spinner:g},data:function(){return{logged:null,drawer:!1,group:null}},methods:{logout:function(){var e=this;return(0,i.Z)((0,o.Z)().mark((function t(){return(0,o.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:localStorage.AuthPersistence=!1,e.$firebase.auth().signOut().then((function(){console.log("Sign-out successful")})).catch((function(e){}));case 2:case"end":return t.stop()}}),t)})))()}},computed:{isLogged:function(){return this.logged=this.$store.getters.currentUser}},mounted:function(){document.title="Meu Pet RS 1.0"}},_=w,b=a(7524),y=a(8320),x=a(5206),S=a(3237),U=a(6428),C=a(6816),Z=a(7620),k=a(3249),V=a(459),E=a(6423),P=a(7877),A=a(6724),I=a(7921),$=(0,p.Z)(_,n,s,!1,null,null,null),N=$.exports;f()($,{VApp:b.Z,VAppBar:y.Z,VAppBarNavIcon:x.Z,VCard:S.Z,VIcon:U.Z,VList:C.Z,VListItem:Z.Z,VListItemGroup:k.Z,VListItemIcon:V.Z,VListItemTitle:E.V9,VMain:P.Z,VNavigationDrawer:A.Z,VToolbarTitle:I.qW});a(8309);var R=a(8345),L=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"elevation-4"},[a("h1",{staticClass:"primary--text"},[e._v("Aqui é onde você poderá construir a sua solução")])])},T=[],M={data:function(){return{userName:"",userEmail:"",userId:""}}},j=M,B=a(9846),O=(0,p.Z)(j,L,T,!1,null,null,null),F=O.exports;f()(O,{VContainer:B.Z});var D=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.isLogged?a("div",[a("cardAccount")],1):e._e()},q=[],z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-card",{staticClass:"pb-10",staticStyle:{margin:"0 auto","margin-top":"15px"},attrs:{width:e.width,elevation:"6",loading:e.loading}},[a("v-card-title",{staticClass:"primary--text"},[e._v("Informações da conta")]),a("v-divider"),a("v-container",{staticClass:"d-flex",staticStyle:{background:"#f5f5f5"}},[a("v-avatar",{staticStyle:{border:"solid 1px #c5c5c5"},attrs:{size:"105"}},[a("img",{attrs:{src:e.avatarURL,alt:""}})]),a("v-btn",{staticStyle:{"margin-top":"75px","margin-left":"65px"},attrs:{absolute:"",small:"",color:"personal_action_2 lighten-2",dark:""},on:{click:function(t){return e.btnUpAvatar()}}},[a("v-icon",[e._v(" mdi-camera ")])],1)],1),a("v-divider"),a("v-simple-table",{scopedSlots:e._u([{key:"default",fn:function(){return[a("tbody",[a("tr",[a("th",{staticClass:"text-left pr-2",attrs:{width:"10%"}},[e._v("Nome:")]),a("td",{staticClass:"text-left pl-0 pr-0"},[e._v(e._s(e.userName))]),a("td",{staticClass:"d-flex justify-end  align-center"},[a("v-btn",{staticStyle:{color:"white"},attrs:{tile:"",small:"",color:"personal_action_2 lighten-2"},on:{click:function(t){return e.btnEditUser({name:"nome",value:""+e.userName})}}},[a("v-icon",{attrs:{small:""}},[e._v(" mdi-pencil ")])],1)],1)]),a("tr",[a("th",{staticClass:"text-left pr-2"},[e._v("Email:")]),a("td",{staticClass:"text-left pl-0 pr-0"},[e._v(e._s(e.userEmail))]),a("td",{staticClass:"d-flex justify-end  align-center"},[a("v-btn",{staticStyle:{color:"white"},attrs:{tile:"",small:"",color:"personal_action_2 lighten-2"},on:{click:function(t){return e.btnEditUser({name:"email",value:null})}}},[a("v-icon",{attrs:{small:""}},[e._v(" mdi-pencil ")])],1)],1)]),a("tr",[a("th",{staticClass:"text-left pr-2"},[e._v("Telefone:")]),a("td",{staticClass:"text-left pl-0 pr-0"},[e._v(e._s(e.userPerfilCellPhone))]),a("td",{staticClass:"d-flex justify-end  align-center"},[a("v-btn",{staticStyle:{color:"white"},attrs:{tile:"",small:"",color:"personal_action_2 lighten-2"},on:{click:function(t){return e.btnEditUser({name:"telefone",value:"+556696112740"})}}},[a("v-icon",{attrs:{small:""}},[e._v(" mdi-pencil ")])],1)],1)])])]},proxy:!0}])}),a("v-divider"),a("v-row",[a("v-btn",{staticClass:"ml-6 mt-10",attrs:{small:"",color:"red",dark:""},on:{click:function(t){return e.deletar()}}},[e._v("Deletar conta")])],1)],1),e.editUser?a("ModalEditUser",{attrs:{dataUser:e.dataEditUser},on:{closeModal:function(t){return e.closeEditModal()},updateUser:e.updateUser}}):e._e(),e.upAvatar?a("ModalImgT",{attrs:{width:e.width,isAvatar:!0,typeImage:"jpeg",nameImage:e.userId,refImage:"avatar"},on:{closeModal:function(t){return e.closeModal()}}}):e._e(),e.deleteAlert?a("ModalAlert",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v(" Tem certeza ? ")]},proxy:!0},{key:"text",fn:function(){return[e._v(" Apos deletar sua conta você será redirecinado para o inicio e não terá mais acesso a nenhuma de suas insformaçoes cadastradas aqui, você concorda? ")]},proxy:!0},{key:"btn1",fn:function(){return[a("v-btn",{attrs:{outlined:"",color:"error",text:""},on:{click:function(t){return e.deleteAccount()}}},[e._v("Confirmar")])]},proxy:!0},{key:"btn2",fn:function(){return[a("v-btn",{attrs:{outlined:"",color:"success",text:""},on:{click:function(t){return e.fechaModalAlert()}}},[e._v("Cancelar")])]},proxy:!0}],null,!1,2662208838)}):e._e()],1)},G=[],W=a(4367),H=(a(9600),a(7042),a(4916),a(3123),a(629)),K=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-dialog",{attrs:{persistent:"",width:e.width},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e.isLoading?a("v-card",{staticClass:"pa-2"},[a("v-card-title",{staticClass:"primary--text"},[e._v(" Carregando Imagem... ")]),a("v-progress-linear",{attrs:{indeterminate:"",color:"yellow darken-2"}})],1):e._e(),e.isLoadSucess?a("v-card",{staticClass:"pa-2"},[a("v-card-title",{staticClass:"green--text"},[e._v(" Sucesso "),a("v-icon",{attrs:{large:"",color:"green darken-2"}},[e._v(" mdi-check")])],1)],1):e._e(),e.isAvatarOn?a("v-card",[a("v-container",{},[a("v-row",{staticClass:"pa-2"},[a("v-btn",{staticStyle:{color:"white"},attrs:{block:"",depressed:"",color:"personal_action_2"}},[a("v-icon",[e._v("mdi-camera")]),e._v(" Camera")],1)],1),a("v-row",{staticClass:"pa-2"},[a("v-btn",{staticStyle:{color:"white"},attrs:{block:"",depressed:"",color:"personal_action_1"},on:{click:function(t){e.showCropper=!0}}},[a("v-icon",[e._v("mdi-upload")]),e._v(" Upload")],1)],1),a("v-row",{staticClass:"pa-2"},[a("v-btn",{staticStyle:{color:"white"},attrs:{block:"",depressed:"",color:"error"},on:{click:function(t){return e.$emit("closeModal")}}},[a("v-icon",[e._v("mdi-cancel")]),e._v(" Cancelar")],1)],1)],1),a("imgCropper",{attrs:{labels:{submit:"OK",cancel:"CANCELAR"},"upload-handler":e.imgUpFirebase},model:{value:e.showCropper,callback:function(t){e.showCropper=t},expression:"showCropper"}})],1):e._e()],1)},J=[],Q=a(3005),Y={components:{imgCropper:Q.Z},name:"ModalUpImage",props:{width:String,refImage:String,nameImage:String,typeImage:String,isAvatar:Boolean},data:function(){return{showCropper:!1,dialog:!0,isAvatarOn:this.isAvatar,isLoading:!1,isLoadSucess:!1,isLoadError:!1}},computed:{getuploadImageStatus:function(){var e=this.$store.getters.uploadImageStatus;return e}},methods:{cancelUpImg:function(){return this.dialog=!1},imgUpFirebase:function(e){var t=this;e.getCroppedCanvas().toBlob(function(){var e=(0,i.Z)((0,o.Z)().mark((function e(a){var r,n;return(0,o.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a;case 2:r=e.sent,n={RefImg:t.refImage,nameImg:t.nameImage,img:r},t.$store.dispatch("upImgFirebase",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),"image/"+this.typeImage)}},watch:{getuploadImageStatus:function(e,t){var a=this;null===e&&console.log(e),"uploading"===e&&(console.log(e),this.isLoading=!0,this.isAvatarOn=!1),"success"===e&&(console.log(e),this.$store.dispatch("setStatusUploadImage",null),this.isLoading=!1,this.isLoadSucess=!0,setTimeout((function(){a.$emit("closeModal")}),1e3)),"error"===e&&(console.log(e),this.$emit("closeModal"))}}},X=Y,ee=a(3150),te=a(7118),ae=a(4246),re=a(7003),ne=a(2877),se=(0,p.Z)(X,K,J,!1,null,null,null),oe=se.exports;f()(se,{VBtn:ee.Z,VCard:S.Z,VCardTitle:te.EB,VContainer:B.Z,VDialog:ae.Z,VIcon:U.Z,VProgressLinear:re.Z,VRow:ne.Z});var ie=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-row",{attrs:{justify:"center"}},[a("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"text-h5"},[e._t("title")],2),a("v-card-text",{staticClass:"text-justify"},[e._t("text")],2),a("v-card-actions",[e._t("btn1"),a("v-spacer"),e._t("btn2")],2)],1)],1)],1)},le=[],ce={name:"ModalCardAccount",data:function(){return{dialog:!0}}},ue=ce,de=a(9762),pe=(0,p.Z)(ue,ie,le,!1,null,null,null),me=pe.exports;f()(pe,{VCard:S.Z,VCardActions:te.h7,VCardText:te.ZB,VCardTitle:te.EB,VDialog:ae.Z,VRow:ne.Z,VSpacer:de.Z});var fe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-row",{attrs:{justify:"center"}},[a("v-dialog",{attrs:{persistent:"","max-width":"600px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-container",[a("v-card-title",{staticClass:"primary--text"},[e._v("Alterar "+e._s(e.dataUser.name))]),"nome"==e.dataUser.name?a("v-card-text",{staticClass:"pb-0"},[a("v-row",[a("v-col",[a("v-text-field",{attrs:{label:"Seu nome*",placeholder:e.dataUser.value.split(" ")[0],outlined:"",dense:"",required:""},model:{value:e.dataEdited.firstName,callback:function(t){e.$set(e.dataEdited,"firstName",t)},expression:"dataEdited.firstName"}}),a("v-text-field",{attrs:{label:"Seu sobrenome*",placeholder:e.dataUser.value.split(" ").slice(1).join(" "),outlined:"",dense:"",required:""},model:{value:e.dataEdited.lastName,callback:function(t){e.$set(e.dataEdited,"lastName",t)},expression:"dataEdited.lastName"}})],1)],1)],1):e._e(),"telefone"==e.dataUser.name?a("v-card-text",{staticClass:"pb-0"},[a("v-row",[a("v-col",[a("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:"+55 (##) 9 ####-####",expression:"'+55 (##) 9 ####-####'"}],attrs:{name:"input-cell-phone",label:"Seu telefone celular*",placeholder:"+55 (00) 9 0000-0000",outlined:"",dense:"",required:""},model:{value:e.dataEdited.cellPhone,callback:function(t){e.$set(e.dataEdited,"cellPhone",t)},expression:"dataEdited.cellPhone"}})],1)],1)],1):e._e(),"email"==e.dataUser.name?a("v-card-text",{staticClass:"pb-0"},[a("v-row",[a("v-col",[a("p",[e._v("O email "),a("strong",[e._v("não pode ser alterado")])])])],1)],1):e._e()],1),a("v-card-actions",{staticClass:"pt-0 pr-5"},[a("v-spacer"),e.isLoadingSuccess?a("v-card-text",[e._v(" atualizando... "),a("v-progress-linear",{attrs:{indeterminate:"",color:"yellow darken-2"}})],1):a("div",[a("v-btn",{attrs:{color:"personal_action_2 darken-1",text:""},on:{click:function(t){return e.$emit("closeModal")}}},[e._v(" Fechar ")]),"email"!=e.dataUser.name?a("v-btn",{attrs:{color:"personal_action_1 darken-1",text:""},on:{click:function(t){return e.$emit("updateUser",e.dataEdited)}}},[e._v(" Salvar ")]):e._e()],1)],1)],1)],1)],1)},ve=[],he=a(2982),ge={directives:{mask:he.mask},data:function(){return{dialog:!0,isLoading:!1,isLoadingSuccess:!1,dataEdited:{firstName:null,lastName:null,cellPhone:null,email:null},rules:[]}},props:{dataUser:Object},computed:{getUpdateUserPerfilStatus:function(){var e=this.$store.getters.updateUserPerfilStatus;return e}},watch:{getUpdateUserPerfilStatus:function(e){var t=this;"success"==e&&(this.isLoading=!1,this.isLoadingSuccess=!0,this.$store.dispatch("setStatusUpdateUserProfile",null),setTimeout((function(){t.$emit("closeModal")}),1e3))}}},we=ge,_e=a(2102),be=a(3105),ye=(0,p.Z)(we,fe,ve,!1,null,null,null),xe=ye.exports;f()(ye,{VBtn:ee.Z,VCard:S.Z,VCardActions:te.h7,VCardText:te.ZB,VCardTitle:te.EB,VCol:_e.Z,VContainer:B.Z,VDialog:ae.Z,VProgressLinear:re.Z,VRow:ne.Z,VSpacer:de.Z,VTextField:be.Z});var Se={components:{ModalAlert:me,ModalImgT:oe,ModalEditUser:xe},name:"cardAccount",data:function(){return{editUser:!1,loading:!1,deleteAlert:!1,upAvatar:!1,avatarURL:""}},methods:{closeEditModal:function(){this.editUser=!1},btnEditUser:function(e){this.$store.dispatch("setEditUser",e),this.editUser=!0},fechaModalAlert:function(){this.deleteAlert=!1},closeModal:function(){this.upAvatar=!1},deletar:function(){this.deleteAlert=!0},btnUpAvatar:function(){this.upAvatar=!0},deleteAccount:function(){this.$store.dispatch("deleteAccount",this.userId),this.fechaModalAlert()},getDataUser:function(){var e=this,t=this.$firebase.database().ref("users/"+this.userId);t.on("value",(function(t){var a=t.val();e.$store.dispatch("addProfileToUser",a)}))},getAvatarUrl:function(){var e=this,t=this.userId,a=t,r=this.$firebase.storage().ref(),n=r.child("avatar/"+a);n.getDownloadURL().then((function(t){return e.avatarURL=t})).catch((function(){var t="avatar-default.png",a=r.child("avatar/"+t);a.getDownloadURL().then((function(t){return e.avatarURL=t}))}))},updateUser:function(e){try{var t=e.firstName,a=e.lastName,r="";if(null!=t&&null!=a&&t.length>0&&a.length>0){var n=t+" "+a;r="users/"+this.userId,this.$store.dispatch("updateUserDataFirebase",{path:r,fullName:n,dataToUp:{firstname:t,lastname:a},typeValue:"userName"})}else if(null!=t&&t.length>0){var s=t+" "+this.userName.split(" ").slice(1).join(" ");r="users/"+this.userId,this.$store.dispatch("updateUserDataFirebase",{path:r,fullName:s,dataToUp:{firstname:t},typeValue:"userName"})}else if(null!=a&&a.length>0){var o=this.userName.split(" ")[0]+" "+a;r="users/"+this.userId,this.$store.dispatch("updateUserDataFirebase",{path:r,fullName:o,dataToUp:{lastname:a},typeValue:"userName"})}else console.log("nada");null!=e.cellPhone&&this.$store.dispatch("updateUserDataFirebase",{typeValue:"cellPhone",userId:this.userId,cellPhone:e.cellPhone})}catch(i){console.log(i)}}},computed:(0,W.Z)((0,W.Z)({},(0,H.rn)({userId:function(e){return e.currentUser.uid},userEmail:function(e){return e.currentUser.email},userName:function(e){return e.currentUser.displayName},primaryAvatarURL:function(e){return e.currentUser.photoURL},dataEditUser:function(e){return e.editUser},userPerfilCellPhone:function(e){return e.currentUserPerfil.cellPhone}})),{},{width:function(){switch(this.$vuetify.breakpoint.name){case"xs":return"100vw";case"sm":return"70vw";case"md":return"60vw";case"lg":return"55vw";case"xl":return"50vw"}}}),created:function(){this.getAvatarUrl(),this.getDataUser()},updated:function(){this.getAvatarUrl()}},Ue=Se,Ce=a(6370),Ze=a(1418),ke=a(3568),Ve=(0,p.Z)(Ue,z,G,!1,null,null,null),Ee=Ve.exports;f()(Ve,{VAvatar:Ce.Z,VBtn:ee.Z,VCard:S.Z,VCardTitle:te.EB,VContainer:B.Z,VDivider:Ze.Z,VIcon:U.Z,VRow:ne.Z,VSimpleTable:ke.Z});var Pe={components:{cardAccount:Ee},data:function(){return{}},computed:{isLogged:function(){return this.logged=this.$store.getters.currentUser}}},Ae=Pe,Ie=(0,p.Z)(Ae,D,q,!1,null,null,null),$e=Ie.exports,Ne=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"d-flex justify-center align-center",staticStyle:{height:"90vh"},attrs:{fluid:""}},[a("v-card",{staticClass:"personal_bg_card elevation-4 pa-2",staticStyle:{margin:"0 auto"},attrs:{width:e.width,rounded:""}},[a("v-row",{attrs:{"no-gutters":"",justify:"center"}},[a("v-col",[a("p",{staticClass:"primary--text text--accent-4 d-flex display-1"},[e._v("Login")]),e.notificationUser?a("v-alert",{attrs:{dense:"",outlined:"",type:"error"}},[e._v(" "+e._s(e.notificationUser)+" ")]):e._e(),a("v-form",{model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-row",[a("v-col",{attrs:{cols:"12",md:"12"}},[a("v-text-field",{attrs:{label:"Email",placeholder:"Seu email cadastrado",outlined:"",dense:"",rules:e.emailRules,required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),a("v-text-field",{attrs:{outlined:"",dense:"",placeholder:"Digite sua senha",rules:e.passRules,"append-icon":e.showEyePass?"mdi-eye":"mdi-eye-off",type:e.showEyePass?"text":"password",label:"Senha",required:""},on:{"click:append":function(t){e.showEyePass=!e.showEyePass}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1)],1),a("v-row",{attrs:{"no-gutters":""}},[a("v-checkbox",{staticClass:"mt-0",attrs:{label:"Manter conectado"},model:{value:e.persist,callback:function(t){e.persist=t},expression:"persist"}})],1),a("v-row",{attrs:{"no-gutters":""}},[a("v-col",[a("v-btn",{staticStyle:{color:"white"},attrs:{large:"",block:"",elevation:"4",depressed:"",color:"personal_action_1"},on:{click:[function(t){return e.login()},function(t){e.logged=!0}]}},[e._v("Login")])],1)],1),a("p",{staticClass:"d-flex justify-center",staticStyle:{margin:"0"}},[e._v("ou")]),a("v-row",[a("v-col",[a("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:"register"}},[a("v-btn",{staticStyle:{color:"white"},attrs:{large:"",block:"",elevation:"4",depressed:"",color:"personal_action_2"}},[e._v("Cadastrar")])],1)],1)],1)],1)],1)],1)],1)],1)},Re=[],Le=(a(7601),a(5306),{name:"Login",data:function(){return{persist:!1,showEyePass:!1,notificationUser:null,valid:!0,password:"",email:"",nameRules:[function(e){return!!e||"Password é requerido"},function(e){return e.length>=6||"Passwords não pode ter menos de 6 caracteres"}],passRules:[function(e){return!!e||"Password é obrigatório"}],emailRules:[function(e){return!!e||"E-mail é requerido"},function(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+(\.[^\s@]+)*$/.test(e)||"E-mail está inválido"}]}},methods:{login:function(){var e=this;return(0,i.Z)((0,o.Z)().mark((function t(){var a,r;return(0,o.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.email,r=e.password,localStorage.AuthPersistence=e.persist,t.next=4,e.$firebase.auth().signInWithEmailAndPassword(a,r).then((function(t){e.$router.replace({name:"home"})})).catch((function(t){t.code;var a=t.message;e.notificationUser=a,console.log(a)}));case 4:case"end":return t.stop()}}),t)})))()}},computed:{width:function(){switch(this.$vuetify.breakpoint.name){case"xs":return"100vw";case"sm":return"70vw";case"md":return"60vw";case"lg":return"30vw";case"xl":return"30vw"}}}}),Te=Le,Me=a(8382),je=a(593),Be=a(6232),Oe=(0,p.Z)(Te,Ne,Re,!1,null,null,null),Fe=Oe.exports;f()(Oe,{VAlert:Me.Z,VBtn:ee.Z,VCard:S.Z,VCheckbox:je.Z,VCol:_e.Z,VContainer:B.Z,VForm:Be.Z,VRow:ne.Z,VTextField:be.Z});var De=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("formNewUser")],1)},qe=[],ze=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"d-flex justify-center align-center",attrs:{fluid:"",width:e.width}},[a("v-card",{staticClass:"personal_bg_card pa-5",staticStyle:{margin:"0 auto"}},[a("v-row",[a("v-col",[a("h1",{staticClass:"d-flex justify-center primary--text"},[e._v("Cadastrar")])])],1),a("v-row",[a("v-col",[a("p",{staticClass:"d-flex justify-center font-weight-bold",staticStyle:{"font-size":"small"}},[e._v(" Preencha os campos abaixo para criar sua conta ")])])],1),a("v-form",{model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[e.detectedRulesErrors.length>0?a("v-alert",{attrs:{dense:"",outlined:"",type:"error"}},[e._v(" Todos os campos devem ser "),a("strong",[e._v("preenchidos corretamente")])]):e._e(),a("v-row",{attrs:{dense:""}},[a("v-col",[a("v-text-field",{attrs:{label:"Nome",placeholder:"Seu primeiro nome",outlined:"",dense:"",rules:e.nameRules},model:{value:e.firstname,callback:function(t){e.firstname=t},expression:"firstname"}})],1)],1),a("v-row",{attrs:{dense:""}},[a("v-col",[a("v-text-field",{attrs:{label:"Sobrenome",placeholder:"Seu sobrenome",outlined:"",dense:"",rules:e.lastNameRules},model:{value:e.lastname,callback:function(t){e.lastname=t},expression:"lastname"}})],1)],1),a("v-row",{attrs:{dense:""}},[a("v-col",[a("v-text-field",{attrs:{label:"E-mail",placeholder:"Seu e-mail",outlined:"",dense:"",rules:e.emailRules},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1)],1),a("v-row",{attrs:{dense:""}},[a("v-col",[a("v-text-field",{attrs:{label:"Senha",placeholder:"Sua senha",outlined:"",dense:"","append-icon":e.showEyePass?"mdi-eye":"mdi-eye-off",type:e.showEyePass?"text":"password",rules:e.passwordRules},on:{"click:append":function(t){e.showEyePass=!e.showEyePass}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1)],1),a("v-row",{attrs:{dense:""}},[a("v-col",[a("v-text-field",{attrs:{label:"Confirmar senha",placeholder:"Confirme sua senha",outlined:"",dense:"","append-icon":e.showEyePassCheck?"mdi-eye":"mdi-eye-off",type:e.showEyePassCheck?"text":"password",rules:e.passwordRules},on:{"click:append":function(t){e.showEyePassCheck=!e.showEyePassCheck}},model:{value:e.passwordCheck,callback:function(t){e.passwordCheck=t},expression:"passwordCheck"}})],1)],1),a("v-row",{attrs:{dense:""}},[a("v-col",[a("v-switch",{attrs:{label:"Você é organização de resgate ou voluntario? "+(e.switch_org_resgate?"Sim":"Não")},model:{value:e.switch_org_resgate,callback:function(t){e.switch_org_resgate=t},expression:"switch_org_resgate"}})],1)],1),e.passwordEquals?e._e():a("v-alert",{attrs:{dense:"",outlined:"",type:"error"}},[e._v(" As senhas devem ser "),a("strong",[e._v("iguais")])]),a("v-row",[a("v-col",[a("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:"register"}},[a("v-btn",{staticClass:"personal_action_1",staticStyle:{color:"white"},attrs:{large:"",block:"",elevation:"4",depressed:""},on:{click:function(t){return e.register()}}},[e._v("Cadastrar")])],1)],1)],1),a("v-row",{attrs:{"align-content":"center",justify:"center"}},[a("p",{staticClass:"pr-2",staticStyle:{margin:"0","font-size":"small"}},[e._v(" Já tem uma conta? ")]),a("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:"login"}},[a("p",{staticStyle:{margin:"0",color:"primary","font-size":"small"}},[e._v(" Entrar ")])])],1),a("v-row",{attrs:{"align-content":"center",justify:"center"}},[a("p",{staticClass:"pr-2",staticStyle:{margin:"0","font-size":"small"}},[e._v("ou")])]),a("v-row",{attrs:{"align-content":"center",justify:"center"}},[a("p",{staticClass:"pr-2",staticStyle:{margin:"0","font-size":"small"}},[e._v(" Vá para a página inicial ")]),a("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:"home"}},[a("p",{staticStyle:{margin:"0",color:"primary","font-size":"small"}},[e._v(" Home ")])])],1)],1)],1)],1)},Ge=[],We=(a(1539),a(4747),a(7210),{name:"formNewUser",data:function(){return{detectedRulesErrors:[],showEyePass:!1,showEyePassCheck:!1,valid:!1,firstname:"",lastname:"",password:"",passwordCheck:"",email:"",switch_org_resgate:!1,nameRules:[function(e){return!!e||"Nome é obrigatório"},function(e){return e.length<=20||"O nome deve ter menos de 20 caracteres"},function(e){return e.length>=3||"O nome deve ter no mínimo 3 caracteres"}],lastNameRules:[function(e){return!!e||"Sobrenome é obrigatório"},function(e){return e.length<=30||"O sobrenome deve ter menos de 30 caracteres"},function(e){return e.length>=2||"O sobrenome deve ter no mínimo 2 caracteres"}],passwordRules:[function(e){return!!e||"Password é obrigatório"},function(e){return e.length>=6||"Password deve conter no mínimo 6 caracteres"}],emailRules:[function(e){return!!e||"E-mail é obrigatório"},function(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+(\.[^\s@]+)*$/.test(e)||"E-mail deve ser válido"}]}},methods:{register:function(){var e=this,t=[];this.nameRules.forEach((function(a){!0!==a(e.firstname)&&t.push(a(e.firstname))})),this.lastNameRules.forEach((function(a){!0!==a(e.lastname)&&t.push(a(e.lastname))})),this.passwordRules.forEach((function(a){!0!==a(e.password)&&t.push(a(e.password))})),this.emailRules.forEach((function(a){!0!==a(e.email)&&t.push(a(e.email))})),this.password===this.passwordCheck&&""!=this.password&&0==t.length?this.registerFire():this.password!==this.passwordCheck&&t.push("As senhas devem ser iguais"),this.detectedRulesErrors=t},registerFire:function(){var e=this;return(0,i.Z)((0,o.Z)().mark((function t(){var a,r,n,s;return(0,o.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:a=e.firstname,r=e.lastname,n=e.password,s=e.email,e.$firebase.auth().createUserWithEmailAndPassword(s,n,a,r).then((function(t){var n=t.user.uid;console.log(t);var o=e.$firebase.storage().ref();o.child("avatar/avatar-default.png").getDownloadURL().then((function(e){console.log(e),t.user.updateProfile({displayName:a+" "+r,photoURL:e})})),e.$firebase.database().ref("users/"+n).set({id:n,firstname:a,lastname:r,email:s,org_resgate:e.switch_org_resgate}).then((function(){e.switch_org_resgate?(e.$firebase.database().ref("dataOrgResgate/"+n).set({id:n,nome:"",responsavel:e.firstname+" "+e.lastname,natureza:"",cnpj:"",telefone:"",email:"",site:"","endereço":{rua:"",numero:"",bairro:"",cidade:"",estado:"",cep:""},descricao:""}),e.$router.replace({name:"home"})):e.$router.replace({name:"home"})})).catch((function(e){console.log(e)}))})).catch((function(e){e.code;var t=e.message;console.log(t)}));case 2:case"end":return t.stop()}}),t)})))()}},computed:{passwordEquals:function(){var e=this.password===this.passwordCheck;return e},width:function(){switch(this.$vuetify.breakpoint.name){case"xs":return"100vw";case"sm":return"70vw";case"md":return"60vw";case"lg":return"30vw";case"xl":return"30vw"}}}}),He=We,Ke=a(1328),Je=(0,p.Z)(He,ze,Ge,!1,null,null,null),Qe=Je.exports;f()(Je,{VAlert:Me.Z,VBtn:ee.Z,VCard:S.Z,VCol:_e.Z,VContainer:B.Z,VForm:Be.Z,VRow:ne.Z,VSwitch:Ke.Z,VTextField:be.Z});var Ye,Xe,et={components:{formNewUser:Qe}},tt=et,at=(0,p.Z)(tt,De,qe,!1,null,null,null),rt=at.exports,nt={},st=(0,p.Z)(nt,Ye,Xe,!1,null,null,null),ot=st.exports,it=a(1902),lt=(a(9085),a(5063),a(6334),it.Z.initializeApp({apiKey:"AIzaSyBM-idQonpcqFWdKmfbGV87Exy8ZnYNi1I",authDomain:"meu-pet-rs.firebaseapp.com",projectId:"meu-pet-rs",storageBucket:"meu-pet-rs.appspot.com",messagingSenderId:"787807385825",appId:"1:787807385825:web:5e792bade238aafa0b9fa0"})),ct="true"==localStorage.AuthPersistence;function ut(e){Object.defineProperty(e.prototype,"$firebase",{get:function(){return lt}})}ct?it.Z.auth().setPersistence(it.Z.auth.Auth.Persistence.LOCAL):it.Z.auth().setPersistence(it.Z.auth.Auth.Persistence.SESSION),r.Z.use(H.ZP);var dt=new H.ZP.Store({state:{currentUser:!1,currentUserPerfil:!1,isSpinnerVisible:!0,uploadImageStatus:null,editUser:!1,updateUserPerfilStatus:null},getters:{currentUser:function(e){return e.currentUser},currentUserPerfil:function(e){return e.currentUserPerfil},isSpinnerVisible:function(e){return e.isSpinnerVisible},uploadImageStatus:function(e){return e.uploadImageStatus},updateUserPerfilStatus:function(e){return e.updateUserPerfilStatus}},mutations:{currentUser:function(e,t){e.currentUser=t},addProfileToUser:function(e,t){e.currentUserPerfil=t},isSpinnerVisible:function(e,t){e.isSpinnerVisible=t},uploadImageStatus:function(e,t){e.uploadImageStatus=t},updateUserPerfilStatus:function(e,t){e.updateUserPerfilStatus=t},editUser:function(e,t){e.editUser=t}},actions:{setEditUser:function(e,t){e.commit("editUser",t)},updateUserDataFirebase:function(e,t){var a=lt.database(),r=lt.auth().currentUser,n=t.userId,s=t.typeValue;if("userName"==s){var o=t.path,i=t.dataToUp;a.ref(o).update(i).then((function(){r.updateProfile({displayName:t.fullName}).then((function(){e.commit("updateUserPerfilStatus","success")}))})).catch((function(e){console.log(e)}))}if("cellPhone"==s){var l=t.cellPhone;a.ref("users/"+n).update({cellPhone:l},(function(t){t?console.log(t):e.commit("updateUserPerfilStatus","success")})).then((function(){})).catch((function(e){console.log(e)}))}},addProfileToUser:function(e,t){e.commit("addProfileToUser",t)},setStatusUploadImage:function(e,t){e.commit("uploadImageStatus",t)},setStatusUpdateUserProfile:function(e,t){e.commit("updateUserPerfilStatus",t)},currentUser:function(e,t){e.commit("currentUser",t)},isSpinnerVisible:function(e,t){e.commit("isSpinnerVisible",t)},upImgFirebase:function(e,t){var a=lt.storage().ref(),r=a.child(t.RefImg+"/"+t.nameImg);r.put(t.img).on("STATE_CHANGED",(function(t){e.commit("uploadImageStatus","uploading");var a=t.bytesTransferred/t.totalBytes*100;console.log("Progresso do upload: ".concat(a,"%"))}),(function(t){e.commit("uploadImageStatus","error"),console.log(t)}),(function(){e.commit("uploadImageStatus","success")}))},deleteAccount:function(e,t){var a=lt.auth().currentUser,r=t;a.delete().then((function(){var t=lt.database();t.ref("users/"+r).remove().then((function(){e.commit("currentUser",!1),console.log("User deleted.")})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))}}});r.Z.use(R.Z);var pt=[{path:"*",redirect:"/login"},{path:"/",name:"home",component:F,meta:{requiresAuth:!0}},{path:"/account",name:"account",component:$e,meta:{requiresAuth:!0}},{path:"/login",name:"login",component:Fe},{path:"/register",name:"register",component:rt},{path:"/meu-pet",name:"meupet",component:ot,meta:{requiresAuth:!1}}],mt=new R.Z({mode:"history",base:"/",routes:pt});mt.beforeEach(function(){var e=(0,i.Z)((0,o.Z)().mark((function e(t,a,r){return(0,o.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,lt.auth().onAuthStateChanged((function(e){e||1!=t.meta.requiresAuth||"login"===t.name?r(dt.dispatch("currentUser",e),dt.dispatch("isSpinnerVisible",!1)):r({name:"login"})}));case 2:case"end":return e.stop()}}),e)})));return function(t,a,r){return e.apply(this,arguments)}}());var ft=mt,vt=a(858);r.Z.use(vt.Z);var ht=new vt.Z({theme:{themes:{light:{personal_bg_1:"#EBEBEB",personal_bg_card:"#F5F5F5",personal_text:"#27187E",personal_primary:"#00796B",personal_action_1:"#09814A",personal_action_2:"#303F4A",personal_action_3:"#696D7D",personal_action_4:"#7B886B",personal_action_5:"#598381",personal_action_6:"#BC5724",primary:"#0D3B66",secondary:"#FF9800",anchor:"#8c9eff"}}}});r.Z.use(ut),r.Z.config.productionTip=!1,new r.Z({router:ft,store:dt,vuetify:ht,render:function(e){return e(N)}}).$mount("#app")}},t={};function a(r){var n=t[r];if(void 0!==n)return n.exports;var s=t[r]={exports:{}};return e[r].call(s.exports,s,s.exports,a),s.exports}a.m=e,function(){var e=[];a.O=function(t,r,n,s){if(!r){var o=1/0;for(u=0;u<e.length;u++){r=e[u][0],n=e[u][1],s=e[u][2];for(var i=!0,l=0;l<r.length;l++)(!1&s||o>=s)&&Object.keys(a.O).every((function(e){return a.O[e](r[l])}))?r.splice(l--,1):(i=!1,s<o&&(o=s));if(i){e.splice(u--,1);var c=n();void 0!==c&&(t=c)}}return t}s=s||0;for(var u=e.length;u>0&&e[u-1][2]>s;u--)e[u]=e[u-1];e[u]=[r,n,s]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,s,o=r[0],i=r[1],l=r[2],c=0;if(o.some((function(t){return 0!==e[t]}))){for(n in i)a.o(i,n)&&(a.m[n]=i[n]);if(l)var u=l(a)}for(t&&t(r);c<o.length;c++)s=o[c],a.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return a.O(u)},r=self["webpackChunkapp_v"]=self["webpackChunkapp_v"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=a.O(void 0,[998],(function(){return a(2599)}));r=a.O(r)})();
//# sourceMappingURL=app-legacy.49ea7f10.js.map