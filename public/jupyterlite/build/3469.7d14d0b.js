"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[3469],{13469:(e,t,i)=>{i.r(t),i.d(t,{MathJaxTypesetter:()=>n});var a=i(26169);class n{constructor(e){this._initPromise=new a.PromiseDelegate,this._initialized=!1,this._url=e.url,this._config=e.config}typeset(e){this._initialized||this._init(),this._initPromise.promise.then((()=>{MathJax.Hub.Queue(["Typeset",MathJax.Hub,e]);try{MathJax.Hub.Queue(["Require",MathJax.Ajax,"[MathJax]/extensions/TeX/AMSmath.js"],(()=>{MathJax.InputJax.TeX.resetEquationNumbers()}))}catch(e){console.error("Error queueing resetEquationNumbers:",e)}}))}_init(){const e=document.getElementsByTagName("head")[0],t=document.createElement("script");t.type="text/javascript",t.src=`${this._url}?config=${this._config}&amp;delayStartupUntil=configured`,t.charset="utf-8",e.appendChild(t),t.addEventListener("load",(()=>{this._onLoad()})),this._initialized=!0}_onLoad(){MathJax.Hub.Config({tex2jax:{inlineMath:[["$","$"],["\\(","\\)"]],displayMath:[["$$","$$"],["\\[","\\]"]],processEscapes:!0,processEnvironments:!0},displayAlign:"center",CommonHTML:{linebreaks:{automatic:!0}},"HTML-CSS":{availableFonts:[],imageFont:null,preferredFont:null,webFont:"STIX-Web",styles:{".MathJax_Display":{margin:0}},linebreaks:{automatic:!0}},skipStartupTypeset:!0,messageStyle:"none"}),MathJax.Hub.Register.StartupHook("End Config",(()=>{var e,t,i,a,n,s;null===(i=null===(t=null===(e=MathJax.Hub)||void 0===e?void 0:e.config)||void 0===t?void 0:t.MathEvents)||void 0===i||delete i.styles[".MathJax_Hover_Arrow:hover span"],null===(s=null===(n=null===(a=MathJax.Hub)||void 0===a?void 0:a.config)||void 0===n?void 0:n.MathMenu)||void 0===s||delete s.styles[".MathJax_MenuClose:hover span"]})),MathJax.Hub.Configured(),this._initPromise.resolve(void 0)}}}}]);
//# sourceMappingURL=3469.7d14d0b.js.map