(a=>{let[b,c,d,e,f,g,h,i,j]=a.g;delete a.g;let k=Symbol(),l=Symbol(),m=Symbol(),n=Symbol(),o=Symbol(),p=Symbol(),q=[],r=(a,b,c)=>a[b]=s(b,c),s=(a,b)=>Object.defineProperty(b,"name",{value:a}),t=(a,b)=>{let e={getContext:{value(a,b){return this[k]||(this[k]=(a.includes("webgl")?o:n)(this,a,b)),this[k]}}},l=r(b,"CanvasGradient",class extends a{addColorStop(...a){d(this,["addColorStop"],a,2)}}),m=r(b,"CanvasPattern",class extends a{setTransform(...a){d(this,["setTransform"],a,2)}}),n=(a,b,e)=>{let f=a[h],k=g(),m={[h]:f,[i]:k,[j]:[]},n=d(a,["getContext"],[b,e],1,k),o="getContextAttributes,getImageData,getLineDash,getTransform,isPointInPath,isPointInStroke,measureText".split(","),p={get:(a,b)=>"string"==typeof b&&b in n?"function"==typeof n[b]?(...a)=>{var c;if(b.startsWith("create")){let e=g();return d(m,[b],a,2,e),"createImageData"===b||"createPattern"===b?(c=`${b}()`,console.warn(`${c} not implemented`),{setTransform:()=>{}}):new l(f,e)}let h=o.includes(b)?1:2;return d(m,[b],a,h)}:n[b]:a[b],set:(a,b,d)=>("string"==typeof b&&b in n?(n[b]!==d&&"function"!=typeof d&&c(m,[b],d),n[b]=d):a[b]=d,!0)};return new Proxy(n,p)},o=(a,b,e)=>{let f=a[h],k=g(),l={[h]:f,[i]:k,[j]:[]},m=d(a,["getContext"],[b,e],1,k),n={get:(a,b)=>"string"==typeof b?"function"!=typeof m[b]?m[b]:(...a)=>d(l,[b],a,q(b)):a[b],set:(a,b,d)=>("string"==typeof b&&b in m?(m[b]!==d&&"function"!=typeof d&&c(l,[b],d),m[b]=d):a[b]=d,!0)};return new Proxy(m,n)},p="checkFramebufferStatus,makeXRCompatible".split(","),q=a=>a.startsWith("create")||a.startsWith("get")||a.startsWith("is")||p.includes(a)?1:2;r(b,"CanvasGradient",l),r(b,"CanvasPattern",m),f(b.HTMLCanvasElement,e)},u=(a,j,k,t)=>{var u,w;t.Audio=s("HTMLAudioElement",class{constructor(a){let b=k.k("audio",g());return b.src=a,b}});let x=class extends a{get enabled(){return b(this,["enabled"])}set enabled(a){c(this,["enabled"],a)}get id(){return b(this,["id"])}get kind(){return b(this,["kind"])}get label(){return b(this,["label"])}get language(){return b(this,["language"])}get sourceBuffer(){return new A(this)}},y=class{constructor(a){let c="audioTracks",e=a[h],f=a[i];return new Proxy({addEventListener(...b){d(a,[c,"addEventListener"],b,3)},getTrackById:(...b)=>d(a,[c,"getTrackById"],b),get length(){return b(a,[c,"length"])},removeEventListener(...b){d(a,[c,"removeEventListener"],b,3)}},{get:(a,b)=>"number"==typeof b?new x(e,f,[c,b]):a[b]})}},z=r(t,"SourceBufferList",class extends Array{constructor(a){super(),this[l]=a}addEventListener(...a){d(this[l],["sourceBuffers","addEventListener"],a,3)}removeEventListener(...a){d(this[l],["sourceBuffers","removeEventListener"],a,3)}}),A=r(t,"SourceBuffer",(w=class extends j{constructor(a){super(a[h],a[i],["sourceBuffers"]),this[u]=[],this[l]=a}abort(){let a=C(this);d(this,[a,"appendWindowStart"],q,1)}addEventListener(...a){let b=C(this);d(this,[b,"addEventListener"],a,3)}appendBuffer(a){this[o].push(["appendBuffer",[a],a]),D(this)}get appendWindowStart(){let a=C(this);return b(this,[a,"appendWindowStart"])}set appendWindowStart(a){let b=C(this);c(this,[b,"appendWindowStart"],a)}get appendWindowEnd(){let a=C(this);return b(this,[a,"appendWindowEnd"])}set appendWindowEnd(a){let b=C(this);c(this,[b,"appendWindowEnd"],a)}get buffered(){let a=this[l],b=C(this);return new B(a[h],a[i],["sourceBuffers",b,"buffered"])}changeType(a){let b=C(this);d(this,[b,"changeType"],[a],2)}get mode(){let a=C(this);return b(this,[a,"mode"])}set mode(a){let b=C(this);c(this,[b,"mode"],a)}remove(a,b){this[o].push(["remove",[a,b]]),D(this)}removeEventListener(...a){let b=C(this);d(this,[b,"removeEventListener"],a,3)}get timestampOffset(){let a=C(this);return b(this,[a,"timestampOffset"])}set timestampOffset(a){let b=C(this);c(this,[b,"timestampOffset"],a)}get updating(){let a=C(this);return b(this,[a,"updating"])}},u=o,w)),B=r(t,"TimeRanges",class extends a{start(...a){return d(this,["start"],a)}end(...a){return d(this,["end"],a)}get length(){return b(this,["length"])}}),C=a=>a?a[l][n].indexOf(a):-1,D=a=>{if(a[o].length){if(!a.updating){let b=a[o].shift();if(b){let c=C(a);d(a,[c,b[0]],b[1],3,void 0,b[2])}}setTimeout(()=>D(a),50)}},E={buffered:{get(){return this[p]||(this[p]=new B(this[h],this[i],["buffered"]),setTimeout(()=>{this[p]=void 0},5e3)),this[p]}},readyState:{get(){return 4===this[m]?4:("number"!=typeof this[m]&&(this[m]=b(this,["readyState"]),setTimeout(()=>{this[m]=void 0},1e3)),this[m])}}};r(t,"MediaSource",class extends j{constructor(){super(k.V),this[n]=new z(this),e(this,"MediaSource",q)}get activeSourceBuffers(){return[]}addSourceBuffer(a){let b=new A(this);return this[n].push(b),d(this,["addSourceBuffer"],[a]),b}clearLiveSeekableRange(){d(this,["clearLiveSeekableRange"],q,2)}get duration(){return b(this,["duration"])}set duration(a){c(this,["duration"],a)}endOfStream(a){d(this,["endOfStream"],[a],3)}get readyState(){return b(this,["readyState"])}removeSourceBuffer(a){let b=C(a);b> -1&&(this[n].splice(b,1),d(this,["removeSourceBuffer"],[b],1))}setLiveSeekableRange(a,b){d(this,["setLiveSeekableRange"],[a,b],2)}get sourceBuffers(){return this[n]}static isTypeSupported(a){if(!v.has(a)){let b=d(t,["MediaSource","isTypeSupported"],[a]);v.set(a,b)}return v.get(a)}});let F=t.URL=s("URL",class extends URL{});"audioTracks"in t.HTMLMediaElement.prototype&&(r(t,"AudioTrackList",y),r(t,"AudioTrack",x),E.audioTracks={get(){return new y(this)}}),f(t.HTMLMediaElement,E),F.createObjectURL=a=>d(t,["URL","createObjectURL"],[a]),F.revokeObjectURL=a=>d(t,["URL","revokeObjectURL"],[a])},v=new Map;a.f=(a,b,c,d,e)=>{e.map(a=>{delete d[a]}),t(a,d),u(a,b,c,d)}})(self)