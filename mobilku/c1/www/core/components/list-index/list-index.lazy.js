(function framework7ComponentLoader(e,t){void 0===t&&(t=!0);var n=e.$,s=e.utils,i=(e.getDevice,e.getSupport),l=e.Class,a=(e.Modal,e.ConstructorMethods),o=(e.ModalMethods,e.$jsx,s.extend),r=s.deleteProps;class d extends l{constructor(e,t){void 0===t&&(t={}),super(t,[e]);const s=this,l={el:null,listEl:null,indexes:"auto",iosItemHeight:14,mdItemHeight:14,auroraItemHeight:14,scrollList:!0,label:!1,renderItem:(e,t)=>`\n            <li>${e}</li>\n          `.trim(),renderSkipPlaceholder:()=>'<li class="list-index-skip-placeholder"></li>',on:{}};let a,r,d,c;if(s.useModulesParams(l),s.params=o(l,t),!s.params.el)return s;if(a=n(s.params.el),a[0].f7ListIndex)return a[0].f7ListIndex;if(c=a.find("ul"),0===c.length&&(c=n("<ul></ul>"),a.append(c)),s.params.listEl&&(r=n(s.params.listEl)),"auto"===s.params.indexes&&!r)return s;function p(){const e={index:s};s.calcSize(),e!==s.height&&s.render()}function h(e){const t=n(e.target).closest("li");if(!t.length)return;let i=t.index();if(s.skipRate>0){const e=i/(t.siblings("li").length-1);i=Math.round((s.indexes.length-1)*e)}const l=s.indexes[i];s.$el.trigger("listindex:click",{content:l,index:i}),s.emit("local::click listIndexClick",s,l,i),s.$el.trigger("listindex:select",{content:l,index:i}),s.emit("local::select listIndexSelect",s,l,i),s.$listEl&&s.params.scrollList&&s.scrollListToIndex(l,i)}r?d=r.parents(".page-content").eq(0):(d=a.siblings(".page-content").eq(0),0===d.length&&(d=a.parents(".page").eq(0).find(".page-content").eq(0))),a[0].f7ListIndex=s,o(s,{app:e,$el:a,el:a&&a[0],$ul:c,ul:c&&c[0],$listEl:r,listEl:r&&r[0],$pageContentEl:d,pageContentEl:d&&d[0],indexes:t.indexes,height:0,skipRate:0}),s.useModules();const u={};let f,g,x,m,I,v=null;function $(e){const t=c.children();t.length&&(x=t[0].getBoundingClientRect().top,m=t[t.length-1].getBoundingClientRect().top+t[0].offsetHeight,u.x="touchstart"===e.type?e.targetTouches[0].pageX:e.pageX,u.y="touchstart"===e.type?e.targetTouches[0].pageY:e.pageY,f=!0,g=!1,v=null)}function L(e){if(!f)return;!g&&s.params.label&&(I=n('<span class="list-index-label"></span>'),a.append(I)),g=!0;const t="touchmove"===e.type?e.targetTouches[0].pageY:e.pageY;e.preventDefault();let i=(t-x)/(m-x);i=Math.min(Math.max(i,0),1);const l=Math.round((s.indexes.length-1)*i),o=s.indexes[l],r=m-x,d=(s.height-r)/2+(1-i)*r;l!==v&&(s.params.label&&I.html(o).transform(`translateY(-${d}px)`),s.$listEl&&s.params.scrollList&&s.scrollListToIndex(o,l)),v=l,s.$el.trigger("listindex:select"),s.emit("local::select listIndexSelect",s,o,l)}function E(){f&&(f=!1,g=!1,s.params.label&&(I&&I.remove(),I=void 0))}const b=!!i().passiveListener&&{passive:!0};return s.attachEvents=function(){a.parents(".tab").on("tab:show",p),a.parents(".page").on("page:reinit",p),a.parents(".panel").on("panel:open",p),a.parents(".sheet-modal, .actions-modal, .popup, .popover, .login-screen, .dialog, .toast").on("modal:open",p),e.on("resize",p),a.on("click",h),a.on(e.touchEvents.start,$,b),e.on("touchmove:active",L),e.on("touchend:passive",E)},s.detachEvents=function(){a.parents(".tab").off("tab:show",p),a.parents(".page").off("page:reinit",p),a.parents(".panel").off("panel:open",p),a.parents(".sheet-modal, .actions-modal, .popup, .popover, .login-screen, .dialog, .toast").off("modal:open",p),e.off("resize",p),a.off("click",h),a.off(e.touchEvents.start,$,b),e.off("touchmove:active",L),e.off("touchend:passive",E)},s.init(),s}scrollListToIndex(e,t){const s=this,{$listEl:i,$pageContentEl:l,app:a}=s;if(!i||!l||0===l.length)return s;let o;if(i.find(".list-group-title, .item-divider").each((t=>{if(o)return;const s=n(t);s.text()===e&&(o=s)})),!o||0===o.length)return s;const r=o.parent().offset().top;let d=parseInt(l.css("padding-top"),10);const c=l[0].scrollTop,p=o.offset().top;if(l.parents(".page-with-navbar-large").length){const e=a.navbar.getElByPage(l.parents(".page-with-navbar-large").eq(0)),t=n(e).find(".title-large");t.length&&(d-=t[0].offsetHeight||0)}return r<=d?l.scrollTop(r+c-d):l.scrollTop(p+c-d),s}renderSkipPlaceholder(){return this.params.renderSkipPlaceholder.call(this)}renderItem(e,t){return this.params.renderItem.call(this,e,t)}render(){const e=this,{$ul:t,indexes:n,skipRate:s}=e;let i;const l=n.map(((t,n)=>{if(n%s!=0&&s>0)return i=!0,"";let l=e.renderItem(t,n);return i&&(l=e.renderSkipPlaceholder()+l),i=!1,l})).join("");return t.html(l),e}calcSize(){const e=this,{app:t,params:n,el:s,indexes:i}=e,l=s.offsetHeight,a=n[`${t.theme}ItemHeight`],o=Math.floor(l/a),r=i.length;let d=0;return r>o&&(d=Math.ceil((2*r-1)/o)),e.height=l,e.skipRate=d,e}calcIndexes(){const e=this;return"auto"===e.params.indexes?(e.indexes=[],e.$listEl.find(".list-group-title, .item-divider").each((t=>{const s=n(t).text();e.indexes.indexOf(s)<0&&e.indexes.push(s)}))):e.indexes=e.params.indexes,e}update(){const e=this;return e.calcIndexes(),e.calcSize(),e.render(),e}init(){const e=this;e.calcIndexes(),e.calcSize(),e.render(),e.attachEvents()}destroy(){let e=this;e.$el.trigger("listindex:beforedestroy",e),e.emit("local::beforeDestroy listIndexBeforeDestroy"),e.detachEvents(),e.$el[0]&&(e.$el[0].f7ListIndex=null,delete e.$el[0].f7ListIndex),r(e),e=null}}var c={name:"listIndex",static:{ListIndex:d},create(){this.listIndex=a({defaultSelector:".list-index",constructor:d,app:this,domProp:"f7ListIndex"})},on:{tabMounted(e){const t=this;n(e).find(".list-index-init").each((e=>{const s=o(n(e).dataset(),{el:e});t.listIndex.create(s)}))},tabBeforeRemove(e){n(e).find(".list-index-init").each((e=>{e.f7ListIndex&&e.f7ListIndex.destroy()}))},pageInit(e){const t=this;e.$el.find(".list-index-init").each((e=>{const s=o(n(e).dataset(),{el:e});t.listIndex.create(s)}))},pageBeforeRemove(e){e.$el.find(".list-index-init").each((e=>{e.f7ListIndex&&e.f7ListIndex.destroy()}))}},vnode:{"list-index-init":{insert(e){const t=e.elm,s=o(n(t).dataset(),{el:t});this.listIndex.create(s)},destroy(e){const t=e.elm;t.f7ListIndex&&t.f7ListIndex.destroy()}}}};if(t){if(e.prototype.modules&&e.prototype.modules[c.name])return;e.use(c),e.instance&&(e.instance.useModuleParams(c,e.instance.params),e.instance.useModule(c))}return c}(Framework7, typeof Framework7AutoInstallComponent === 'undefined' ? undefined : Framework7AutoInstallComponent))
