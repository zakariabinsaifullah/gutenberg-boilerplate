(()=>{"use strict";var e,t={741:()=>{const e=window.wp.blocks,t=JSON.parse('{"apiVersion":2,"name":"boilerplate/bootstrap","version":"0.1.0","title":"Bootstrap Block","category":"boilerplate","icon":"smiley","description":"Example block written with ESNext standard and JSX support build step required.","supports":{"html":false,"anchor":true},"attributes":{"content":{"type":"string","default":"Hello World!"},"color":{"type":"string","default":"#00ff00"}},"textdomain":"boilerplate","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}'),o=window.wp.element,l=window.wp.i18n,r=window.wp.blockEditor,n=window.wp.components,{__}=wp.i18n,a=[{name:__("Black","boilerplate"),color:"#000000"},{name:__("White","boilerplate"),color:"#ffffff"},{name:__("Red","boilerplate"),color:"#ff0000"},{name:__("Green","boilerplate"),color:"#00ff00"},{name:__("Blue","boilerplate"),color:"#0000ff"},{name:__("Yellow","boilerplate"),color:"#ffff00"}],{Fragment:i}=wp.element;(0,e.registerBlockType)(t,{edit:function(e){let{attributes:t,setAttributes:s}=e;const{content:c,color:p}=t;return(0,o.createElement)(i,null,(0,o.createElement)(r.InspectorControls,null,(0,o.createElement)(n.PanelBody,{title:(0,l.__)("Settings","boilerplate"),initialOpen:!0},(0,o.createElement)("p",{className:"custom__editor__label"},(0,l.__)("Text Color","boilerplate")),(0,o.createElement)(n.ColorPalette,{colors:a,value:p,onChange:e=>s({color:e})}))),(0,o.createElement)("div",(0,r.useBlockProps)(),(0,o.createElement)(r.RichText,{tagName:"h4",value:c,onChange:e=>s({content:e}),style:{color:p}})))},save:function(e){let{attributes:t}=e;const{content:l,color:n}=t;return(0,o.createElement)("div",r.useBlockProps.save(),(0,o.createElement)(r.RichText.Content,{tagName:"h4",value:l,style:{color:n}}))}})}},o={};function l(e){var r=o[e];if(void 0!==r)return r.exports;var n=o[e]={exports:{}};return t[e](n,n.exports,l),n.exports}l.m=t,e=[],l.O=(t,o,r,n)=>{if(!o){var a=1/0;for(p=0;p<e.length;p++){o=e[p][0],r=e[p][1],n=e[p][2];for(var i=!0,s=0;s<o.length;s++)(!1&n||a>=n)&&Object.keys(l.O).every((e=>l.O[e](o[s])))?o.splice(s--,1):(i=!1,n<a&&(a=n));if(i){e.splice(p--,1);var c=r();void 0!==c&&(t=c)}}return t}n=n||0;for(var p=e.length;p>0&&e[p-1][2]>n;p--)e[p]=e[p-1];e[p]=[o,r,n]},l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={34:0,784:0};l.O.j=t=>0===e[t];var t=(t,o)=>{var r,n,a=o[0],i=o[1],s=o[2],c=0;if(a.some((t=>0!==e[t]))){for(r in i)l.o(i,r)&&(l.m[r]=i[r]);if(s)var p=s(l)}for(t&&t(o);c<a.length;c++)n=a[c],l.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return l.O(p)},o=self.webpackChunkboilerplate=self.webpackChunkboilerplate||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var r=l.O(void 0,[784],(()=>l(741)));r=l.O(r)})();