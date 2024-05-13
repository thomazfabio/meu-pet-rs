(function(){"use strict";var e={1422:function(e,t,a){var s=a(144),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",{staticStyle:{"background-color":"#EBEBEB"}},[a("Spinner"),a("v-main",[a("v-card",{staticClass:"mx-auto overflow-auto personal_bg_1",staticStyle:{"border-radius":"0px"},attrs:{height:"100vh"}},[a("v-app-bar",{attrs:{height:"40px",color:"primary",dark:""}},[e.isLogged?a("v-app-bar-nav-icon",{on:{click:function(t){e.drawer=!0}}}):e._e(),a("v-toolbar-title",[e._v("Meu Pet Rio Grande do Sul 1.0")])],1),a("router-view"),a("v-navigation-drawer",{attrs:{absolute:"",temporary:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("v-list",{attrs:{nav:"",dense:""}},[a("v-list-item-group",{attrs:{"active-class":"primary--text text--accent-4"},model:{value:e.group,callback:function(t){e.group=t},expression:"group"}},[a("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:"/"}},[a("v-list-item",{on:{click:function(t){e.drawer=!1}}},[a("v-list-item-icon",[a("v-icon",[e._v("mdi-home")])],1),a("v-list-item-title",[e._v("Home")])],1)],1),a("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:"/account"}},[a("v-list-item",{on:{click:function(t){e.drawer=!1}}},[a("v-list-item-icon",[a("v-icon",[e._v("mdi-account")])],1),a("v-list-item-title",[e._v("Minha conta")])],1)],1),a("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:"/setup"}},[a("v-list-item",{on:{click:function(t){e.drawer=!1}}},[a("v-list-item-icon",[a("v-icon",[e._v("mdi-cog")])],1),a("v-list-item-title",[e._v("Configuração")])],1)],1),a("v-list-item",{on:{click:function(t){return e.logout()}}},[a("v-list-item-icon",[a("v-icon",[e._v("mdi-logout")])],1),a("v-list-item-title",[e._v("Sair")])],1)],1)],1)],1)],1)],1)],1)},o=[],i=(a(4444),function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.isVisible?a("div",{staticClass:"text-center",attrs:{id:"spinner"}},[e.isVisible?a("div",{staticClass:"text-center",attrs:{id:"spinner"}},[a("v-progress-circular",{attrs:{size:100,width:5,color:"primary",indeterminate:""}})],1):e._e()]):e._e()}),n=[],l={name:"Spinner",data:()=>({visible:null}),methods:{setVisible(){this.visible=this.$store.getters.isSpinnerVisible}},created(){this.setVisible()},computed:{isVisible:function(){return this.$store.getters.isSpinnerVisible}}},c=l,d=a(1001),u=a(3453),p=a.n(u),m=a(624),v=(0,d.Z)(c,i,n,!1,null,null,null),h=v.exports;p()(v,{VProgressCircular:m.Z});var f={name:"App",components:{Spinner:h},data:()=>({logged:null,drawer:!1,group:null}),methods:{async logout(){localStorage.AuthPersistence=!1,this.$firebase.auth().signOut().then((()=>{console.log("Sign-out successful")})).catch((e=>{}))}},computed:{isLogged:function(){return this.logged=this.$store.getters.currentUser}},mounted(){document.title="Meu Pet RS 1.0"}},g=f,b=a(7524),w=a(8320),_=a(5206),y=a(3237),x=a(6428),C=a(6816),S=a(7620),U=a(3249),k=a(459),V=a(6423),Z=a(7877),E=a(6724),P=a(7921),A=(0,d.Z)(g,r,o,!1,null,null,null),I=A.exports;p()(A,{VApp:b.Z,VAppBar:w.Z,VAppBarNavIcon:_.Z,VCard:y.Z,VIcon:x.Z,VList:C.Z,VListItem:S.Z,VListItemGroup:U.Z,VListItemIcon:k.Z,VListItemTitle:V.V9,VMain:Z.Z,VNavigationDrawer:E.Z,VToolbarTitle:P.qW});var $=a(8345),N=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"elevation-4"},[a("h1",{staticClass:"primary--text"},[e._v("Aqui é onde você poderá construir a sua solução")])])},R=[],L={data:()=>({userName:"",userEmail:"",userId:""})},T=L,B=a(9846),j=(0,d.Z)(T,N,R,!1,null,null,null),F=j.exports;p()(j,{VContainer:B.Z});var M=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.isLogged?a("div",[a("cardAccount")],1):e._e()},D=[],O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-card",{staticClass:"pb-2",staticStyle:{margin:"0 auto","margin-top":"15px"},attrs:{width:e.width,elevation:"6",loading:e.loading}},[a("v-card-title",{staticClass:"primary--text"},[e._v("Informações da conta")]),a("v-divider"),a("v-container",{staticClass:"d-flex",staticStyle:{background:"#f5f5f5"}},[a("v-avatar",{staticStyle:{border:"solid 1px #c5c5c5"},attrs:{size:"105"}},[a("img",{attrs:{src:e.avatarURL,alt:""}})]),a("v-btn",{staticStyle:{"margin-top":"75px","margin-left":"65px"},attrs:{absolute:"",small:"",color:"personal_action_2 lighten-2",dark:""},on:{click:function(t){return e.btnUpAvatar()}}},[a("v-icon",[e._v(" mdi-camera ")])],1)],1),a("v-divider"),a("v-simple-table",{scopedSlots:e._u([{key:"default",fn:function(){return[a("tbody",[a("tr",[a("th",{staticClass:"text-left pr-2",attrs:{width:"10%"}},[e._v("Nome:")]),a("td",{staticClass:"text-left pl-0 pr-0"},[e._v(e._s(e.userName))]),a("td",{staticClass:"d-flex justify-end  align-center"},[a("v-btn",{staticStyle:{color:"white"},attrs:{tile:"",small:"",color:"personal_action_2 lighten-2"},on:{click:function(t){return e.btnEditUser({name:"nome",value:""+e.userName})}}},[a("v-icon",{attrs:{small:""}},[e._v(" mdi-pencil ")])],1)],1)]),a("tr",[a("th",{staticClass:"text-left pr-2"},[e._v("Email:")]),a("td",{staticClass:"text-left pl-0 pr-0"},[e._v(e._s(e.userEmail))]),a("td",{staticClass:"d-flex justify-end  align-center"},[a("v-btn",{staticStyle:{color:"white"},attrs:{tile:"",small:"",color:"personal_action_2 lighten-2"},on:{click:function(t){return e.btnEditUser({name:"email",value:null})}}},[a("v-icon",{attrs:{small:""}},[e._v(" mdi-pencil ")])],1)],1)]),a("tr",[a("th",{staticClass:"text-left pr-2"},[e._v("Telefone:")]),a("td",{staticClass:"text-left pl-0 pr-0"},[e._v(e._s(e.userPerfilCellPhone))]),a("td",{staticClass:"d-flex justify-end  align-center"},[a("v-btn",{staticStyle:{color:"white"},attrs:{tile:"",small:"",color:"personal_action_2 lighten-2"},on:{click:function(t){return e.btnEditUser({name:"telefone",value:"+556696112740"})}}},[a("v-icon",{attrs:{small:""}},[e._v(" mdi-pencil ")])],1)],1)])])]},proxy:!0}])}),a("v-divider"),a("v-card-actions",[a("v-btn",{attrs:{small:"",color:"red",dark:""},on:{click:function(t){return e.deletar()}}},[e._v("Deletar conta")])],1)],1),a("v-card",{staticClass:"pb-2 mt-6",staticStyle:{margin:"0 auto","margin-top":"15px"},attrs:{width:e.width,elevation:"6",loading:e.loading}},[a("v-card-title",{staticClass:"primary--text"},[e._v("Informaçoes da Instituição")]),a("v-divider"),a("FormEndereco"),a("v-card-actions",[a("v-btn",{attrs:{color:"primary",small:""}},[e._v("Salvar")])],1)],1),e.editUser?a("ModalEditUser",{attrs:{dataUser:e.dataEditUser},on:{closeModal:function(t){return e.closeEditModal()},updateUser:e.updateUser}}):e._e(),e.upAvatar?a("ModalImgT",{attrs:{width:e.width,isAvatar:!0,typeImage:"jpeg",nameImage:e.userId,refImage:"avatar"},on:{closeModal:function(t){return e.closeModal()}}}):e._e(),e.deleteAlert?a("ModalAlert",{scopedSlots:e._u([{key:"title",fn:function(){return[e._v(" Tem certeza ? ")]},proxy:!0},{key:"text",fn:function(){return[e._v(" Apos deletar sua conta você será redirecinado para o inicio e não terá mais acesso a nenhuma de suas insformaçoes cadastradas aqui, você concorda? ")]},proxy:!0},{key:"btn1",fn:function(){return[a("v-btn",{attrs:{outlined:"",color:"error",text:""},on:{click:function(t){return e.deleteAccount()}}},[e._v("Confirmar")])]},proxy:!0},{key:"btn2",fn:function(){return[a("v-btn",{attrs:{outlined:"",color:"success",text:""},on:{click:function(t){return e.fechaModalAlert()}}},[e._v("Cancelar")])]},proxy:!0}],null,!1,2662208838)}):e._e()],1)},q=[],z=a(629),G=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-dialog",{attrs:{persistent:"",width:e.width},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e.isLoading?a("v-card",{staticClass:"pa-2"},[a("v-card-title",{staticClass:"primary--text"},[e._v(" Carregando Imagem... ")]),a("v-progress-linear",{attrs:{indeterminate:"",color:"yellow darken-2"}})],1):e._e(),e.isLoadSucess?a("v-card",{staticClass:"pa-2"},[a("v-card-title",{staticClass:"green--text"},[e._v(" Sucesso "),a("v-icon",{attrs:{large:"",color:"green darken-2"}},[e._v(" mdi-check")])],1)],1):e._e(),e.isAvatarOn?a("v-card",[a("v-container",{},[a("v-row",{staticClass:"pa-2"},[a("v-btn",{staticStyle:{color:"white"},attrs:{block:"",depressed:"",color:"personal_action_2"}},[a("v-icon",[e._v("mdi-camera")]),e._v(" Camera")],1)],1),a("v-row",{staticClass:"pa-2"},[a("v-btn",{staticStyle:{color:"white"},attrs:{block:"",depressed:"",color:"personal_action_1"},on:{click:function(t){e.showCropper=!0}}},[a("v-icon",[e._v("mdi-upload")]),e._v(" Upload")],1)],1),a("v-row",{staticClass:"pa-2"},[a("v-btn",{staticStyle:{color:"white"},attrs:{block:"",depressed:"",color:"error"},on:{click:function(t){return e.$emit("closeModal")}}},[a("v-icon",[e._v("mdi-cancel")]),e._v(" Cancelar")],1)],1)],1),a("imgCropper",{attrs:{labels:{submit:"OK",cancel:"CANCELAR"},"upload-handler":e.imgUpFirebase},model:{value:e.showCropper,callback:function(t){e.showCropper=t},expression:"showCropper"}})],1):e._e()],1)},W=[],H=a(3005),K={components:{imgCropper:H.Z},name:"ModalUpImage",props:{width:String,refImage:String,nameImage:String,typeImage:String,isAvatar:Boolean},data(){return{showCropper:!1,dialog:!0,isAvatarOn:this.isAvatar,isLoading:!1,isLoadSucess:!1,isLoadError:!1}},computed:{getuploadImageStatus:function(){let e=this.$store.getters.uploadImageStatus;return e}},methods:{cancelUpImg:function(){return this.dialog=!1},imgUpFirebase:function(e){e.getCroppedCanvas().toBlob((async e=>{let t=await e,a={RefImg:this.refImage,nameImg:this.nameImage,img:t};this.$store.dispatch("upImgFirebase",a)}),"image/"+this.typeImage)}},watch:{getuploadImageStatus:function(e,t){null===e&&console.log(e),"uploading"===e&&(console.log(e),this.isLoading=!0,this.isAvatarOn=!1),"success"===e&&(console.log(e),this.$store.dispatch("setStatusUploadImage",null),this.isLoading=!1,this.isLoadSucess=!0,setTimeout((()=>{this.$emit("closeModal")}),1e3)),"error"===e&&(console.log(e),this.$emit("closeModal"))}}},J=K,Q=a(3150),Y=a(7118),X=a(4246),ee=a(7003),te=a(2877),ae=(0,d.Z)(J,G,W,!1,null,null,null),se=ae.exports;p()(ae,{VBtn:Q.Z,VCard:y.Z,VCardTitle:Y.EB,VContainer:B.Z,VDialog:X.Z,VIcon:x.Z,VProgressLinear:ee.Z,VRow:te.Z});var re=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-row",{attrs:{justify:"center"}},[a("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"text-h5"},[e._t("title")],2),a("v-card-text",{staticClass:"text-justify"},[e._t("text")],2),a("v-card-actions",[e._t("btn1"),a("v-spacer"),e._t("btn2")],2)],1)],1)],1)},oe=[],ie={name:"ModalCardAccount",data(){return{dialog:!0}}},ne=ie,le=a(9762),ce=(0,d.Z)(ne,re,oe,!1,null,null,null),de=ce.exports;p()(ce,{VCard:y.Z,VCardActions:Y.h7,VCardText:Y.ZB,VCardTitle:Y.EB,VDialog:X.Z,VRow:te.Z,VSpacer:le.Z});var ue=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-row",{attrs:{justify:"center"}},[a("v-dialog",{attrs:{persistent:"","max-width":"600px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-container",[a("v-card-title",{staticClass:"primary--text"},[e._v("Alterar "+e._s(e.dataUser.name))]),"nome"==e.dataUser.name?a("v-card-text",{staticClass:"pb-0"},[a("v-row",[a("v-col",[a("v-text-field",{attrs:{label:"Seu nome*",placeholder:e.dataUser.value.split(" ")[0],outlined:"",dense:"",required:""},model:{value:e.dataEdited.firstName,callback:function(t){e.$set(e.dataEdited,"firstName",t)},expression:"dataEdited.firstName"}}),a("v-text-field",{attrs:{label:"Seu sobrenome*",placeholder:e.dataUser.value.split(" ").slice(1).join(" "),outlined:"",dense:"",required:""},model:{value:e.dataEdited.lastName,callback:function(t){e.$set(e.dataEdited,"lastName",t)},expression:"dataEdited.lastName"}})],1)],1)],1):e._e(),"telefone"==e.dataUser.name?a("v-card-text",{staticClass:"pb-0"},[a("v-row",[a("v-col",[a("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:"+55 (##) 9 ####-####",expression:"'+55 (##) 9 ####-####'"}],attrs:{name:"input-cell-phone",label:"Seu telefone celular*",placeholder:"+55 (00) 9 0000-0000",outlined:"",dense:"",required:""},model:{value:e.dataEdited.cellPhone,callback:function(t){e.$set(e.dataEdited,"cellPhone",t)},expression:"dataEdited.cellPhone"}})],1)],1)],1):e._e(),"email"==e.dataUser.name?a("v-card-text",{staticClass:"pb-0"},[a("v-row",[a("v-col",[a("p",[e._v("O email "),a("strong",[e._v("não pode ser alterado")])])])],1)],1):e._e()],1),a("v-card-actions",{staticClass:"pt-0 pr-5"},[a("v-spacer"),e.isLoadingSuccess?a("v-card-text",[e._v(" atualizando... "),a("v-progress-linear",{attrs:{indeterminate:"",color:"yellow darken-2"}})],1):a("div",[a("v-btn",{attrs:{color:"personal_action_2 darken-1",text:""},on:{click:function(t){return e.$emit("closeModal")}}},[e._v(" Fechar ")]),"email"!=e.dataUser.name?a("v-btn",{attrs:{color:"personal_action_1 darken-1",text:""},on:{click:function(t){return e.$emit("updateUser",e.dataEdited)}}},[e._v(" Salvar ")]):e._e()],1)],1)],1)],1)],1)},pe=[],me=a(2982),ve={directives:{mask:me.mask},data:()=>({dialog:!0,isLoading:!1,isLoadingSuccess:!1,dataEdited:{firstName:null,lastName:null,cellPhone:null,email:null},rules:[]}),props:{dataUser:Object},computed:{getUpdateUserPerfilStatus:function(){let e=this.$store.getters.updateUserPerfilStatus;return e}},watch:{getUpdateUserPerfilStatus:function(e){"success"==e&&(this.isLoading=!1,this.isLoadingSuccess=!0,this.$store.dispatch("setStatusUpdateUserProfile",null),setTimeout((()=>{this.$emit("closeModal")}),1e3))}}},he=ve,fe=a(2102),ge=a(3105),be=(0,d.Z)(he,ue,pe,!1,null,null,null),we=be.exports;p()(be,{VBtn:Q.Z,VCard:y.Z,VCardActions:Y.h7,VCardText:Y.ZB,VCardTitle:Y.EB,VCol:fe.Z,VContainer:B.Z,VDialog:X.Z,VProgressLinear:ee.Z,VRow:te.Z,VSpacer:le.Z,VTextField:ge.Z});var _e=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-form",[a("v-container",[a("v-row",[a("v-col",{staticClass:"pb-0 pt-0",attrs:{cols:"12",md:"5"}},[a("ValidaCep")],1),a("v-col",{staticClass:"pb-0 pt-0",attrs:{cols:"12",md:"5"}},[a("v-text-field",{attrs:{label:"Logradouro",outlined:"",dense:""}})],1),a("v-col",{staticClass:"pb-0 pt-0",attrs:{cols:"12",md:"2"}},[a("v-text-field",{attrs:{label:"Numero",outlined:"",dense:""}})],1),a("v-col",{staticClass:"pb-0 pt-0",attrs:{cols:"12",md:"3"}},[a("v-text-field",{attrs:{label:"Complemento",outlined:"",dense:""}})],1),a("v-col",{staticClass:"pb-0 pt-0",attrs:{cols:"12",md:"3"}},[a("v-text-field",{attrs:{label:"Bairro",outlined:"",dense:""}})],1),a("v-col",{staticClass:"pb-0 pt-0",attrs:{cols:"12",md:"3"}},[a("v-text-field",{attrs:{label:"Cidade",outlined:"",dense:""}})],1),a("v-col",{staticClass:"pb-0 pt-0",attrs:{cols:"12",md:"3"}},[a("v-text-field",{attrs:{label:"Estado",outlined:"",dense:""}})],1)],1)],1)],1)},ye=[],xe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{},[a("v-row",[a("v-text-field",{staticClass:"input-cep pt-0 pb-0",attrs:{label:"Digite o CEP",outlined:"",dense:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onClick.apply(null,arguments)}},model:{value:e.cepDigitado,callback:function(t){e.cepDigitado=t},expression:"cepDigitado"}}),a("v-btn",{staticClass:"btn-buscar pt-0 pb-0",attrs:{color:"purple",dark:"",outilined:"",elevation:"4"},on:{click:e.onClick}},[e._v("Buscar "),a("v-icon",{attrs:{right:"",dark:""}},[e._v(" mdi-cloud-download ")])],1)],1)],1)},Ce=[],Se=a(5121),Ue={name:"ValidaCep",data:()=>({loaded:!1,loading:!1,cepDigitado:"78550258"}),methods:{onClick(){this.loading=!0;const e=this.cepDigitado.replace(/\D/g,"");Se.Z.get("https://viacep.com.br/ws/"+e+"/json/").then((e=>{console.log(e.data),this.loaded=e.data,this.loading=!1})).catch((e=>{console.log(e),this.loaded={erro:!0},this.loading=!1}))}}},ke=Ue,Ve=(0,d.Z)(ke,xe,Ce,!1,null,"254b99ae",null),Ze=Ve.exports;p()(Ve,{VBtn:Q.Z,VContainer:B.Z,VIcon:x.Z,VRow:te.Z,VTextField:ge.Z});var Ee={components:{ValidaCep:Ze},name:"FormEndereco",data:()=>({})},Pe=Ee,Ae=a(6232),Ie=(0,d.Z)(Pe,_e,ye,!1,null,null,null),$e=Ie.exports;p()(Ie,{VCol:fe.Z,VContainer:B.Z,VForm:Ae.Z,VRow:te.Z,VTextField:ge.Z});var Ne={components:{ModalAlert:de,ModalImgT:se,ModalEditUser:we,FormEndereco:$e},name:"cardAccount",data:()=>({editUser:!1,loading:!1,deleteAlert:!1,upAvatar:!1,avatarURL:""}),methods:{closeEditModal:function(){this.editUser=!1},btnEditUser:function(e){this.$store.dispatch("setEditUser",e),this.editUser=!0},fechaModalAlert:function(){this.deleteAlert=!1},closeModal:function(){this.upAvatar=!1},deletar:function(){this.deleteAlert=!0},btnUpAvatar:function(){this.upAvatar=!0},deleteAccount:function(){this.$store.dispatch("deleteAccount",this.userId),this.fechaModalAlert()},getDataUser(){const e=this.$firebase.database().ref("users/"+this.userId);e.on("value",(e=>{const t=e.val();this.$store.dispatch("addProfileToUser",t)}))},getAvatarUrl(){var e=this.userId,t=e,a=this.$firebase.storage().ref(),s=a.child("avatar/"+t);s.getDownloadURL().then((e=>this.avatarURL=e)).catch((()=>{var e="avatar-default.png",t=a.child("avatar/"+e);t.getDownloadURL().then((e=>this.avatarURL=e))}))},updateUser(e){try{let t=e.firstName,a=e.lastName,s="";if(null!=t&&null!=a&&t.length>0&&a.length>0){let e=t+" "+a;s="users/"+this.userId,this.$store.dispatch("updateUserDataFirebase",{path:s,fullName:e,dataToUp:{firstname:t,lastname:a},typeValue:"userName"})}else if(null!=t&&t.length>0){let e=t+" "+this.userName.split(" ").slice(1).join(" ");s="users/"+this.userId,this.$store.dispatch("updateUserDataFirebase",{path:s,fullName:e,dataToUp:{firstname:t},typeValue:"userName"})}else if(null!=a&&a.length>0){let e=this.userName.split(" ")[0]+" "+a;s="users/"+this.userId,this.$store.dispatch("updateUserDataFirebase",{path:s,fullName:e,dataToUp:{lastname:a},typeValue:"userName"})}else console.log("nada");null!=e.cellPhone&&this.$store.dispatch("updateUserDataFirebase",{typeValue:"cellPhone",userId:this.userId,cellPhone:e.cellPhone})}catch(t){console.log(t)}}},computed:{...(0,z.rn)({userId:e=>e.currentUser.uid,userEmail:e=>e.currentUser.email,userName:e=>e.currentUser.displayName,primaryAvatarURL:e=>e.currentUser.photoURL,dataEditUser:e=>e.editUser,userPerfilCellPhone:e=>e.currentUserPerfil.cellPhone}),width(){switch(this.$vuetify.breakpoint.name){case"xs":return"100vw";case"sm":return"70vw";case"md":return"60vw";case"lg":return"55vw";case"xl":return"50vw"}}},created(){this.getAvatarUrl(),this.getDataUser()},updated(){this.getAvatarUrl()}},Re=Ne,Le=a(6370),Te=a(1418),Be=a(3568),je=(0,d.Z)(Re,O,q,!1,null,null,null),Fe=je.exports;p()(je,{VAvatar:Le.Z,VBtn:Q.Z,VCard:y.Z,VCardActions:Y.h7,VCardTitle:Y.EB,VContainer:B.Z,VDivider:Te.Z,VIcon:x.Z,VSimpleTable:Be.Z});var Me={components:{cardAccount:Fe},data:()=>({}),computed:{isLogged:function(){return this.logged=this.$store.getters.currentUser}}},De=Me,Oe=(0,d.Z)(De,M,D,!1,null,null,null),qe=Oe.exports,ze=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"d-flex justify-center align-center",staticStyle:{height:"90vh"},attrs:{fluid:""}},[a("v-card",{staticClass:"personal_bg_card elevation-4 pa-2",staticStyle:{margin:"0 auto"},attrs:{width:e.width,rounded:""}},[a("v-row",{attrs:{"no-gutters":"",justify:"center"}},[a("v-col",[a("p",{staticClass:"primary--text text--accent-4 d-flex display-1"},[e._v("Login")]),e.notificationUser?a("v-alert",{attrs:{dense:"",outlined:"",type:"error"}},[e._v(" "+e._s(e.notificationUser)+" ")]):e._e(),a("v-form",{model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-row",[a("v-col",{attrs:{cols:"12",md:"12"}},[a("v-text-field",{attrs:{label:"Email",placeholder:"Seu email cadastrado",outlined:"",dense:"",rules:e.emailRules,required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),a("v-text-field",{attrs:{outlined:"",dense:"",placeholder:"Digite sua senha",rules:e.passRules,"append-icon":e.showEyePass?"mdi-eye":"mdi-eye-off",type:e.showEyePass?"text":"password",label:"Senha",required:""},on:{"click:append":function(t){e.showEyePass=!e.showEyePass}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1)],1),a("v-row",{attrs:{"no-gutters":""}},[a("v-checkbox",{staticClass:"mt-0",attrs:{label:"Manter conectado"},model:{value:e.persist,callback:function(t){e.persist=t},expression:"persist"}})],1),a("v-row",{attrs:{"no-gutters":""}},[a("v-col",[a("v-btn",{staticStyle:{color:"white"},attrs:{large:"",block:"",elevation:"4",depressed:"",color:"personal_action_1"},on:{click:[function(t){return e.login()},function(t){e.logged=!0}]}},[e._v("Login")])],1)],1),a("p",{staticClass:"d-flex justify-center",staticStyle:{margin:"0"}},[e._v("ou")]),a("v-row",[a("v-col",[a("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:"register"}},[a("v-btn",{staticStyle:{color:"white"},attrs:{large:"",block:"",elevation:"4",depressed:"",color:"personal_action_2"}},[e._v("Cadastrar")])],1)],1)],1)],1)],1)],1)],1)],1)},Ge=[],We={name:"Login",data:()=>({persist:!1,showEyePass:!1,notificationUser:null,valid:!0,password:"",email:"",nameRules:[e=>!!e||"Password é requerido",e=>e.length>=6||"Passwords não pode ter menos de 6 caracteres"],passRules:[e=>!!e||"Password é obrigatório"],emailRules:[e=>!!e||"E-mail é requerido",e=>/^[^\s@]+@[^\s@]+\.[^\s@]+(\.[^\s@]+)*$/.test(e)||"E-mail está inválido"]}),methods:{async login(){const{email:e,password:t}=this;localStorage.AuthPersistence=this.persist,await this.$firebase.auth().signInWithEmailAndPassword(e,t).then((e=>{this.$router.replace({name:"home"})})).catch((e=>{e.code;var t=e.message;this.notificationUser=t,console.log(t)}))}},computed:{width(){switch(this.$vuetify.breakpoint.name){case"xs":return"100vw";case"sm":return"70vw";case"md":return"60vw";case"lg":return"30vw";case"xl":return"30vw"}}}},He=We,Ke=a(3401),Je=a(3702),Qe=(0,d.Z)(He,ze,Ge,!1,null,null,null),Ye=Qe.exports;p()(Qe,{VAlert:Ke.Z,VBtn:Q.Z,VCard:y.Z,VCheckbox:Je.Z,VCol:fe.Z,VContainer:B.Z,VForm:Ae.Z,VRow:te.Z,VTextField:ge.Z});var Xe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("formNewUser")],1)},et=[],tt=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{staticClass:"d-flex justify-center align-center",attrs:{fluid:"",width:e.width}},[a("v-card",{staticClass:"personal_bg_card pa-5",staticStyle:{margin:"0 auto"}},[a("v-row",[a("v-col",[a("h1",{staticClass:"d-flex justify-center primary--text"},[e._v("Cadastrar")])])],1),a("v-row",[a("v-col",[a("p",{staticClass:"d-flex justify-center font-weight-bold",staticStyle:{"font-size":"small"}},[e._v(" Preencha os campos abaixo para criar sua conta ")])])],1),a("v-form",{model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[e.detectedRulesErrors.length>0?a("v-alert",{attrs:{dense:"",outlined:"",type:"error"}},[e._v(" Todos os campos devem ser "),a("strong",[e._v("preenchidos corretamente")])]):e._e(),a("v-row",{attrs:{dense:""}},[a("v-col",[a("v-text-field",{attrs:{label:"Nome",placeholder:"Seu primeiro nome",outlined:"",dense:"",rules:e.nameRules},model:{value:e.firstname,callback:function(t){e.firstname=t},expression:"firstname"}})],1)],1),a("v-row",{attrs:{dense:""}},[a("v-col",[a("v-text-field",{attrs:{label:"Sobrenome",placeholder:"Seu sobrenome",outlined:"",dense:"",rules:e.lastNameRules},model:{value:e.lastname,callback:function(t){e.lastname=t},expression:"lastname"}})],1)],1),a("v-row",{attrs:{dense:""}},[a("v-col",[a("v-text-field",{attrs:{label:"E-mail",placeholder:"Seu e-mail",outlined:"",dense:"",rules:e.emailRules},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1)],1),a("v-row",{attrs:{dense:""}},[a("v-col",[a("v-text-field",{attrs:{label:"Senha",placeholder:"Sua senha",outlined:"",dense:"","append-icon":e.showEyePass?"mdi-eye":"mdi-eye-off",type:e.showEyePass?"text":"password",rules:e.passwordRules},on:{"click:append":function(t){e.showEyePass=!e.showEyePass}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1)],1),a("v-row",{attrs:{dense:""}},[a("v-col",[a("v-text-field",{attrs:{label:"Confirmar senha",placeholder:"Confirme sua senha",outlined:"",dense:"","append-icon":e.showEyePassCheck?"mdi-eye":"mdi-eye-off",type:e.showEyePassCheck?"text":"password",rules:e.passwordRules},on:{"click:append":function(t){e.showEyePassCheck=!e.showEyePassCheck}},model:{value:e.passwordCheck,callback:function(t){e.passwordCheck=t},expression:"passwordCheck"}})],1)],1),a("v-row",{attrs:{dense:""}},[a("v-col",[a("v-switch",{attrs:{label:"Você é organização de resgate ou voluntario? "+(e.switch_org_resgate?"Sim":"Não")},model:{value:e.switch_org_resgate,callback:function(t){e.switch_org_resgate=t},expression:"switch_org_resgate"}})],1)],1),e.passwordEquals?e._e():a("v-alert",{attrs:{dense:"",outlined:"",type:"error"}},[e._v(" As senhas devem ser "),a("strong",[e._v("iguais")])]),a("v-row",[a("v-col",[a("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:"register"}},[a("v-btn",{staticClass:"personal_action_1",staticStyle:{color:"white"},attrs:{large:"",block:"",elevation:"4",depressed:""},on:{click:function(t){return e.register()}}},[e._v("Cadastrar")])],1)],1)],1),a("v-row",{attrs:{"align-content":"center",justify:"center"}},[a("p",{staticClass:"pr-2",staticStyle:{margin:"0","font-size":"small"}},[e._v(" Já tem uma conta? ")]),a("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:"login"}},[a("p",{staticStyle:{margin:"0",color:"primary","font-size":"small"}},[e._v(" Entrar ")])])],1),a("v-row",{attrs:{"align-content":"center",justify:"center"}},[a("p",{staticClass:"pr-2",staticStyle:{margin:"0","font-size":"small"}},[e._v("ou")])]),a("v-row",{attrs:{"align-content":"center",justify:"center"}},[a("p",{staticClass:"pr-2",staticStyle:{margin:"0","font-size":"small"}},[e._v(" Vá para a página inicial ")]),a("router-link",{staticStyle:{"text-decoration":"none"},attrs:{to:"home"}},[a("p",{staticStyle:{margin:"0",color:"primary","font-size":"small"}},[e._v(" Home ")])])],1)],1)],1)],1)},at=[],st=(a(7210),{name:"formNewUser",data:()=>({detectedRulesErrors:[],showEyePass:!1,showEyePassCheck:!1,valid:!1,firstname:"",lastname:"",password:"",passwordCheck:"",email:"",switch_org_resgate:!1,nameRules:[e=>!!e||"Nome é obrigatório",e=>e.length<=20||"O nome deve ter menos de 20 caracteres",e=>e.length>=3||"O nome deve ter no mínimo 3 caracteres"],lastNameRules:[e=>!!e||"Sobrenome é obrigatório",e=>e.length<=30||"O sobrenome deve ter menos de 30 caracteres",e=>e.length>=2||"O sobrenome deve ter no mínimo 2 caracteres"],passwordRules:[e=>!!e||"Password é obrigatório",e=>e.length>=6||"Password deve conter no mínimo 6 caracteres"],emailRules:[e=>!!e||"E-mail é obrigatório",e=>/^[^\s@]+@[^\s@]+\.[^\s@]+(\.[^\s@]+)*$/.test(e)||"E-mail deve ser válido"]}),methods:{register(){let e=[];this.nameRules.forEach((t=>{!0!==t(this.firstname)&&e.push(t(this.firstname))})),this.lastNameRules.forEach((t=>{!0!==t(this.lastname)&&e.push(t(this.lastname))})),this.passwordRules.forEach((t=>{!0!==t(this.password)&&e.push(t(this.password))})),this.emailRules.forEach((t=>{!0!==t(this.email)&&e.push(t(this.email))})),this.password===this.passwordCheck&&""!=this.password&&0==e.length?this.registerFire():this.password!==this.passwordCheck&&e.push("As senhas devem ser iguais"),this.detectedRulesErrors=e},async registerFire(){const{firstname:e,lastname:t,password:a,email:s}=this;this.$firebase.auth().createUserWithEmailAndPassword(s,a,e,t).then((a=>{var r=a.user.uid;console.log(a);const o=this.$firebase.storage().ref();o.child("avatar/avatar-default.png").getDownloadURL().then((s=>{console.log(s),a.user.updateProfile({displayName:e+" "+t,photoURL:s})})),this.$firebase.database().ref("users/"+r).set({id:r,firstname:e,lastname:t,email:s,org_resgate:this.switch_org_resgate}).then((()=>{this.switch_org_resgate?(this.$firebase.database().ref("dataOrgResgate/"+r).set({id:r,nome:"",responsavel:this.firstname+" "+this.lastname,natureza:"",cnpj:"",telefone:"",email:"",site:"","endereço":{rua:"",numero:"",bairro:"",cidade:"",estado:"",cep:""},descricao:""}),this.$router.replace({name:"home"})):this.$router.replace({name:"home"})})).catch((e=>{console.log(e)}))})).catch((e=>{e.code;var t=e.message;console.log(t)}))}},computed:{passwordEquals(){let e=this.password===this.passwordCheck;return e},width(){switch(this.$vuetify.breakpoint.name){case"xs":return"100vw";case"sm":return"70vw";case"md":return"60vw";case"lg":return"30vw";case"xl":return"30vw"}}}}),rt=st,ot=a(1328),it=(0,d.Z)(rt,tt,at,!1,null,null,null),nt=it.exports;p()(it,{VAlert:Ke.Z,VBtn:Q.Z,VCard:y.Z,VCol:fe.Z,VContainer:B.Z,VForm:Ae.Z,VRow:te.Z,VSwitch:ot.Z,VTextField:ge.Z});var lt,ct,dt={components:{formNewUser:nt}},ut=dt,pt=(0,d.Z)(ut,Xe,et,!1,null,null,null),mt=pt.exports,vt={},ht=(0,d.Z)(vt,lt,ct,!1,null,null,null),ft=ht.exports,gt=a(1902);a(9085),a(5063),a(6334);const bt=gt.Z.initializeApp({apiKey:"AIzaSyBM-idQonpcqFWdKmfbGV87Exy8ZnYNi1I",authDomain:"meu-pet-rs.firebaseapp.com",projectId:"meu-pet-rs",storageBucket:"meu-pet-rs.appspot.com",messagingSenderId:"787807385825",appId:"1:787807385825:web:5e792bade238aafa0b9fa0"}),wt="true"==localStorage.AuthPersistence;function _t(e){Object.defineProperty(e.prototype,"$firebase",{get(){return bt}})}wt?gt.Z.auth().setPersistence(gt.Z.auth.Auth.Persistence.LOCAL):gt.Z.auth().setPersistence(gt.Z.auth.Auth.Persistence.SESSION),s.Z.use(z.ZP);var yt=new z.ZP.Store({state:{currentUser:!1,currentUserPerfil:!1,isSpinnerVisible:!0,uploadImageStatus:null,editUser:!1,updateUserPerfilStatus:null},getters:{currentUser(e){return e.currentUser},currentUserPerfil(e){return e.currentUserPerfil},isSpinnerVisible(e){return e.isSpinnerVisible},uploadImageStatus(e){return e.uploadImageStatus},updateUserPerfilStatus(e){return e.updateUserPerfilStatus}},mutations:{currentUser(e,t){e.currentUser=t},addProfileToUser(e,t){e.currentUserPerfil=t},isSpinnerVisible(e,t){e.isSpinnerVisible=t},uploadImageStatus(e,t){e.uploadImageStatus=t},updateUserPerfilStatus(e,t){e.updateUserPerfilStatus=t},editUser(e,t){e.editUser=t}},actions:{setEditUser(e,t){e.commit("editUser",t)},updateUserDataFirebase(e,t){const a=bt.database(),s=bt.auth().currentUser,r=t.userId,o=t.typeValue;if("userName"==o){let r=t.path,o=t.dataToUp;a.ref(r).update(o).then((()=>{s.updateProfile({displayName:t.fullName}).then((()=>{e.commit("updateUserPerfilStatus","success")}))})).catch((e=>{console.log(e)}))}if("cellPhone"==o){let s=t.cellPhone;a.ref("users/"+r).update({cellPhone:s},(t=>{t?console.log(t):e.commit("updateUserPerfilStatus","success")})).then((()=>{})).catch((e=>{console.log(e)}))}},addProfileToUser(e,t){e.commit("addProfileToUser",t)},setStatusUploadImage(e,t){e.commit("uploadImageStatus",t)},setStatusUpdateUserProfile(e,t){e.commit("updateUserPerfilStatus",t)},currentUser(e,t){e.commit("currentUser",t)},isSpinnerVisible(e,t){e.commit("isSpinnerVisible",t)},upImgFirebase(e,t){var a=bt.storage().ref(),s=a.child(t.RefImg+"/"+t.nameImg);s.put(t.img).on("STATE_CHANGED",(t=>{e.commit("uploadImageStatus","uploading");const a=t.bytesTransferred/t.totalBytes*100;console.log(`Progresso do upload: ${a}%`)}),(t=>{e.commit("uploadImageStatus","error"),console.log(t)}),(()=>{e.commit("uploadImageStatus","success")}))},deleteAccount(e,t){const a=bt.auth().currentUser,s=t;a.delete().then((function(){const t=bt.database();t.ref("users/"+s).remove().then((()=>{e.commit("currentUser",!1),console.log("User deleted.")})).catch((e=>{console.log(e)}))})).catch((function(e){console.log(e)}))}}});s.Z.use($.Z);const xt=[{path:"*",redirect:"/login"},{path:"/",name:"home",component:F,meta:{requiresAuth:!1}},{path:"/account",name:"account",component:qe,meta:{requiresAuth:!0}},{path:"/login",name:"login",component:Ye},{path:"/register",name:"register",component:mt},{path:"/meu-pet",name:"meupet",component:ft,meta:{requiresAuth:!1}}],Ct=new $.Z({mode:"history",base:"/",routes:xt});Ct.beforeEach((async(e,t,a)=>{await bt.auth().onAuthStateChanged((t=>{t||1!=e.meta.requiresAuth||"login"===e.name?a(yt.dispatch("currentUser",t),yt.dispatch("isSpinnerVisible",!1)):a({name:"login"})}))}));var St=Ct,Ut=a(1910);s.Z.use(Ut.Z);var kt=new Ut.Z({theme:{themes:{light:{personal_bg_1:"#EBEBEB",personal_bg_card:"#F5F5F5",personal_text:"#27187E",personal_primary:"#00796B",personal_action_1:"#09814A",personal_action_2:"#303F4A",personal_action_3:"#696D7D",personal_action_4:"#7B886B",personal_action_5:"#598381",personal_action_6:"#BC5724",primary:"#0D3B66",secondary:"#FF9800",anchor:"#8c9eff"}}}});s.Z.use(_t),s.Z.config.productionTip=!1,new s.Z({router:St,store:yt,vuetify:kt,render:e=>e(I)}).$mount("#app")}},t={};function a(s){var r=t[s];if(void 0!==r)return r.exports;var o=t[s]={exports:{}};return e[s].call(o.exports,o,o.exports,a),o.exports}a.m=e,function(){var e=[];a.O=function(t,s,r,o){if(!s){var i=1/0;for(d=0;d<e.length;d++){s=e[d][0],r=e[d][1],o=e[d][2];for(var n=!0,l=0;l<s.length;l++)(!1&o||i>=o)&&Object.keys(a.O).every((function(e){return a.O[e](s[l])}))?s.splice(l--,1):(n=!1,o<i&&(i=o));if(n){e.splice(d--,1);var c=r();void 0!==c&&(t=c)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[s,r,o]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var s in t)a.o(t,s)&&!a.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,s){var r,o,i=s[0],n=s[1],l=s[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(r in n)a.o(n,r)&&(a.m[r]=n[r]);if(l)var d=l(a)}for(t&&t(s);c<i.length;c++)o=i[c],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(d)},s=self["webpackChunkapp_v"]=self["webpackChunkapp_v"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=a.O(void 0,[998],(function(){return a(1422)}));s=a.O(s)})();
//# sourceMappingURL=app.b2191447.js.map