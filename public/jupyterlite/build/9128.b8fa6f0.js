"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[9128,5016],{9128:(t,e,s)=>{s.r(e),s.d(e,{AttachmentsModel:()=>h,AttachmentsResolver:()=>r});var a=s(92877),i=s(20040),n=s(70942);class h{constructor(t={}){if(this._map=new a.ObservableMap,this._isDisposed=!1,this._stateChanged=new n.Signal(this),this._changed=new n.Signal(this),this._modelDB=null,this._serialized=null,this._changeGuard=!1,this.contentFactory=t.contentFactory||h.defaultContentFactory,t.values)for(const e of Object.keys(t.values))void 0!==t.values[e]&&this.set(e,t.values[e]);this._map.changed.connect(this._onMapChanged,this),t.modelDB&&(this._modelDB=t.modelDB,this._serialized=this._modelDB.createValue("attachments"),this._serialized.get()?this.fromJSON(this._serialized.get()):this._serialized.set(this.toJSON()),this._serialized.changed.connect(this._onSerializedChanged,this))}get stateChanged(){return this._stateChanged}get changed(){return this._changed}get keys(){return this._map.keys()}get length(){return this._map.keys().length}get isDisposed(){return this._isDisposed}dispose(){this.isDisposed||(this._isDisposed=!0,this._map.dispose(),n.Signal.clearData(this))}has(t){return this._map.has(t)}get(t){return this._map.get(t)}set(t,e){const s=this._createItem({value:e});this._map.set(t,s)}remove(t){this._map.delete(t)}clear(){this._map.values().forEach((t=>{t.dispose()})),this._map.clear()}fromJSON(t){this.clear(),Object.keys(t).forEach((e=>{void 0!==t[e]&&this.set(e,t[e])}))}toJSON(){const t={};for(const e of this._map.keys())t[e]=this._map.get(e).toJSON();return t}_createItem(t){const e=this.contentFactory.createAttachmentModel(t);return e.changed.connect(this._onGenericChange,this),e}_onMapChanged(t,e){this._serialized&&!this._changeGuard&&(this._changeGuard=!0,this._serialized.set(this.toJSON()),this._changeGuard=!1),this._changed.emit(e),this._stateChanged.emit(void 0)}_onSerializedChanged(t,e){this._changeGuard||(this._changeGuard=!0,this.fromJSON(e.newValue),this._changeGuard=!1)}_onGenericChange(){this._stateChanged.emit(void 0)}}!function(t){class e{createAttachmentModel(t){return new i.AttachmentModel(t)}}t.ContentFactory=e,t.defaultContentFactory=new e}(h||(h={}));class r{constructor(t){this._parent=t.parent||null,this._model=t.model}async resolveUrl(t){return this._parent&&!t.startsWith("attachment:")?this._parent.resolveUrl(t):t}async getDownloadUrl(t){if(this._parent&&!t.startsWith("attachment:"))return this._parent.getDownloadUrl(t);const e=t.slice("attachment:".length),s=this._model.get(e);if(void 0===s)return t;const{data:a}=s,n=Object.keys(a)[0];if(void 0===n||-1===i.imageRendererFactory.mimeTypes.indexOf(n))throw new Error(`Cannot render unknown image mime type "${n}".`);return`data:${n};base64,${a[n]}`}isLocal(t){var e,s,a;return!(this._parent&&!t.startsWith("attachment:"))||null===(a=null===(s=(e=this._parent).isLocal)||void 0===s?void 0:s.call(e,t))||void 0===a||a}}}}]);
//# sourceMappingURL=9128.b8fa6f0.js.map