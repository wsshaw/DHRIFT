"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[989,2973,4665],{80989:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var r,i=n(67504),o=n(2814),a=n(84853),d=n(59674),s=n(20040),c=n(94665),l=n(15786),u=n(63050),g=n(4265);!function(e){e.open="settingeditor:open",e.openJSON="settingeditor:open-json",e.revert="settingeditor:revert",e.save="settingeditor:save"}(r||(r={}));const m={id:"@jupyterlab/settingeditor-extension:form-ui",requires:[l.ISettingRegistry,u.IStateDB,g.ITranslator,d.IFormComponentRegistry,i.ILabStatus],optional:[i.ILayoutRestorer,o.ICommandPalette,c.g],autoStart:!0,provides:c.O,activate:function(e,t,i,a,s,c,l,u,g){const p=a.load("jupyterlab"),{commands:v,shell:y}=e,S="setting-editor",b=new o.WidgetTracker({namespace:S});return l&&l.restore(b,{command:r.open,args:e=>({}),name:e=>S}),v.addCommand(r.open,{execute:async e=>{var l;"ui"===e.settingEditorType?v.execute(r.open,{query:null!==(l=e.query)&&void 0!==l?l:""}):"json"===e.settingEditorType?v.execute(r.openJSON):t.load(m.id).then((l=>{var u;"json"===l.get("settingEditorType").composite?v.execute(r.openJSON):(async e=>{if(b.currentWidget&&!b.currentWidget.isDisposed)return b.currentWidget.isAttached||y.add(b.currentWidget),void y.activateById(b.currentWidget.id);const l=m.id,{SettingsEditor:u}=await n.e(4957).then(n.t.bind(n,24957,23)),I=new o.MainAreaWidget({content:new u({editorRegistry:s,key:l,registry:t,state:i,commands:v,toSkip:["@jupyterlab/application-extension:context-menu","@jupyterlab/mainmenu-extension:plugin"],translator:a,status:c,query:e.query})});g&&(I.toolbar.addItem("spacer",o.Toolbar.createSpacerItem()),I.toolbar.addItem("open-json-editor",new o.CommandToolbarButton({commands:v,id:r.openJSON,icon:d.launchIcon,label:p.__("JSON Settings Editor")}))),I.id=S,I.title.icon=d.settingsIcon,I.title.label=p.__("Settings"),I.title.closable=!0,b.add(I),y.add(I)})({query:null!==(u=e.query)&&void 0!==u?u:""})}))},label:e=>e.label?e.label:p.__("Advanced Settings Editor")}),u&&u.addItem({category:p.__("Settings"),command:r.open,args:{settingEditorType:"ui"}}),b}},p={id:"@jupyterlab/settingeditor-extension:plugin",requires:[l.ISettingRegistry,a.IEditorServices,u.IStateDB,s.IRenderMimeRegistry,i.ILabStatus,g.ITranslator],optional:[i.ILayoutRestorer,o.ICommandPalette],autoStart:!0,provides:c.g,activate:function(e,t,i,a,s,c,l,u,g){const p=l.load("jupyterlab"),{commands:v,shell:y}=e,S="json-setting-editor",b=i.factoryService.newInlineEditor,I=new o.WidgetTracker({namespace:S});return u&&u.restore(I,{command:r.openJSON,args:e=>({}),name:e=>S}),v.addCommand(r.openJSON,{execute:async()=>{if(I.currentWidget&&!I.currentWidget.isDisposed)return I.currentWidget.isAttached||y.add(I.currentWidget),void y.activateById(I.currentWidget.id);const i=m.id,u=e.restored,{JsonSettingEditor:g}=await n.e(4957).then(n.t.bind(n,24957,23)),_=new g({commands:{registry:v,revert:r.revert,save:r.save},editorFactory:b,key:i,registry:t,rendermime:s,state:a,translator:l,when:u});let E=null;_.commandsChanged.connect(((e,t)=>{t.forEach((e=>{v.notifyCommandChanged(e)})),_.canSaveRaw?E||(E=c.setDirty()):E&&(E.dispose(),E=null),_.disposed.connect((()=>{E&&E.dispose()}))}));const T=new o.MainAreaWidget({content:_});T.id=S,T.title.icon=d.settingsIcon,T.title.label=p.__("Advanced Settings Editor"),T.title.closable=!0,I.add(T),y.add(T)},label:p.__("Advanced JSON Settings Editor")}),g&&g.addItem({category:p.__("Settings"),command:r.openJSON}),v.addCommand(r.revert,{execute:()=>{var e;null===(e=I.currentWidget)||void 0===e||e.content.revert()},icon:d.undoIcon,label:p.__("Revert User Settings"),isEnabled:()=>{var e,t;return null!==(t=null===(e=I.currentWidget)||void 0===e?void 0:e.content.canRevertRaw)&&void 0!==t&&t}}),v.addCommand(r.save,{execute:()=>{var e;return null===(e=I.currentWidget)||void 0===e?void 0:e.content.save()},icon:d.saveIcon,label:p.__("Save User Settings"),isEnabled:()=>{var e,t;return null!==(t=null===(e=I.currentWidget)||void 0===e?void 0:e.content.canSaveRaw)&&void 0!==t&&t}}),I}},v=[m,p]},94665:(e,t,n)=>{n.d(t,{O:()=>i,g:()=>o});var r=n(26169);const i=new r.Token("@jupyterlab/settingeditor:ISettingEditorTracker"),o=new r.Token("@jupyterlab/settingeditor:IJSONSettingEditorTracker")}}]);
//# sourceMappingURL=989.bcca86a.js.map