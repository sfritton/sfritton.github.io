(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{B3q3:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("zLVn"),a=n("q1tI"),i=n.n(a),l=n("eqM9"),o=n.n(l),c=Object(a.forwardRef)((function(e,t){var n=e.children,a=Object(r.a)(e,["children"]);return i.a.createElement("button",Object.assign({ref:t,type:"button"},a,{className:o.a.button}),n)}))},RKwE:function(e,t,n){e.exports={controls:"landscape-module--controls--2ouir"}},ZIQu:function(e,t,n){e.exports={biomeList:"legend-module--biomeList--FhW6c",endcap:"legend-module--endcap--1UM4E",labels:"legend-module--labels--FlKeS",gradientLegend:"legend-module--gradientLegend--EuXXE",gradientChunk:"legend-module--gradientChunk--2odrr"}},eqM9:function(e,t,n){e.exports={button:"button-module--button--1AP7e"}},iD54:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),i=n("VXBa"),l=n("u7b8"),o=n("dI71"),c=n("mCOQ"),u=["#005000","#005000","#aab432","#d2e66e"],s=["#0000ff","#ffffff","#ff0000"],f=["#960000","#960000","#fa9600","#ffffff","#009600","#00ffff","#00ffff"],p=["elevation","temperature","precipitation","biome"],d=function e(t,n,r){if(0===r.length)return t.color("#000000");if(1===r.length)return t.color(r[0]);if(2===r.length){var a=t.red(r[1])-t.red(r[0]),i=t.green(r[1])-t.green(r[0]),l=t.blue(r[1])-t.blue(r[0]);return t.color(t.red(r[0])+a*n,t.green(r[0])+i*n,t.blue(r[0])+l*n)}for(var o=0;o<r.length-1;o++){var c=1/(r.length-1)*(o+1),u=1/(r.length-1)*o;if(n<c)return e(t,(n-u)/(c-u),r.slice(o,o+2))}return t.color(r[r.length-1])},h=function(e,t,n,r){for(var a=0;a<t;a++){var i=1/t*(a+1);if(n<i)return d(e,i,r)}return e.color(r[r.length-1])},m=(n("E9XD"),n("zRY8")),v=function(){function e(e,t,n,r){this.p5=e,this.seed=t,this.frequency=n,this.amplitude=r}return e.prototype.getValueAt=function(e,t){return this.amplitude*this.p5.noise((this.seed.x+t)*this.frequency,(this.seed.y+e)*this.frequency)},e}(),b=function(){function e(e,t,n,r){this.p5=e,this.waves=[];for(var a=0;a<r;a++){var i=Math.pow(2,a),l={x:t.x+Object(m.a)(i-1,i),y:t.y+Object(m.a)(i-1,i)};this.waves.push(new v(this.p5,l,n/i,i))}}return e.prototype.getValueAt=function(e,t){var n=this.waves.reduce((function(n,r){return{result:n.result+r.getValueAt(e,t),max:n.max+r.amplitude}}),{result:0,max:0}),r=n.result,a=n.max;return a>0?this.p5.norm(r,0,a):0},e}(),g=function(){function e(e,t){this.title=e,this.color=t}return e.prototype.toString=function(){return this.title},e}(),w=new g("Water","#6485dc"),y=new g("Tundra","#cdccf1"),E=new g("Mountain","#6d65b2"),j=new g("Snowy","#d4ffff"),k=new g("Rocky","#556973"),O=new g("Temperate","#126341"),L=new g("Marsh","#a8dd75"),M=new g("Desert","#e3b365"),T=new g("Prairie","#48a32f"),x=new g("Rainforest","#e33d00"),q=[w,y,E,j,k,O,L,M,T,x],A=function(){function e(e){this.p5=e,this.rows=Math.floor(this.p5.height/10),this.columns=Math.floor(this.p5.width/10);var t=new b(this.p5,this.randomSeed(400),.7,4),n=new b(this.p5,this.randomSeed(800),.02,2),r=new b(this.p5,this.randomSeed(800),.07,2);this.tiles=new Array(this.rows);for(var a=0;a<this.rows;a++){this.tiles[a]=new Array(this.columns);for(var i=0;i<this.columns;i++){var l=t.getValueAt(a,i);this.tiles[a][i]={elevation:l,precipitation:n.getValueAt(a,i),temperature:this.p5.norm(r.getValueAt(a,i)-.75*(l-.5),-.375,1.375)}}}}var t=e.prototype;return t.render=function(e){var t=this;this.p5.noStroke(),this.tiles.forEach((function(n,r){return n.forEach((function(n,a){t.setTileFill(e,n),t.p5.rect(10*a,10*r,10,10)}))}))},t.setTileFill=function(e,t){var n,r;if(t.elevation<.4)this.p5.fill("#6485dc");else switch(e){case"elevation":this.p5.fill(h(this.p5,15,t.elevation,u));break;case"temperature":this.p5.fill(h(this.p5,15,t.temperature,s));break;case"precipitation":this.p5.fill(h(this.p5,15,t.precipitation,f));break;case"biome":var a=(n=t.temperature,r=t.precipitation,n<.45?r<.45?y:r<.55?E:j:n<.55?r<.45?k:r<.55?O:L:r<.45?M:r<.55?T:x);this.p5.fill(a.color)}},t.randomSeed=function(e){return void 0===e&&(e=1),{x:Object(m.a)(0,this.columns)*e,y:Object(m.a)(0,this.rows)*e}},e}(),R=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).mapType="elevation",t}Object(o.a)(t,e);var n=t.prototype;return n.setup=function(){e.prototype.setup.call(this),this.createWorld(),this.render()},n.createWorld=function(){this.tileGrid=new A(this.p5)},n.render=function(){this.tileGrid.render(this.mapType)},n.updateMapType=function(e){this.mapType=e,this.render()},t}(c.a),S=function(e,t){return function(n){var r,a,i=new R(n);n.setup=function(){i.setup()},null===(r=e.current)||void 0===r||r.addEventListener("click",(function(e){e.preventDefault(),i.createWorld(),i.render()})),null===(a=t.current)||void 0===a||a.addEventListener("change",(function(e){var t;e.preventDefault();var n=null===(t=e.target)||void 0===t?void 0:t.value;i.updateMapType(n)}))}},V=n("ucHa"),N=n("B3q3"),C=n("RKwE"),I=n.n(C),D=n("ZIQu"),G=n.n(D),W={elevation:u,precipitation:f,temperature:s,biome:[]},z=function(e){var t=e.mapType;if("biome"===t)return a.a.createElement("div",null,a.a.createElement("b",null,"Biomes"),a.a.createElement("ul",{className:G.a.biomeList},q.map((function(e){var t=e.title,n=e.color;return a.a.createElement("li",{key:t,style:{"--biome-color":n}},t)}))));var n=W[t];return a.a.createElement("div",null,a.a.createElement("div",{className:G.a.labels},a.a.createElement("div",null,"Low"),a.a.createElement("div",null,"High")),a.a.createElement("div",{className:G.a.gradientLegend},n.map((function(e,t){return 0===t?null:a.a.createElement("div",{key:e+"-"+t,className:G.a.gradientChunk,style:{"--start-color":n[t-1],"--end-color":e}})}))))};t.default=function(){var e=Object(r.useState)("elevation"),t=e[0],n=e[1],o=Object(r.useRef)(null),c=Object(r.useRef)(null);return console.log(t),a.a.createElement(i.a,{title:"Landscape Generator"},a.a.createElement("h1",null,"Landscape Generator"),a.a.createElement(l.a,{sketch:S(o,c)}),a.a.createElement(z,{mapType:t}),a.a.createElement("div",{className:I.a.controls},a.a.createElement("div",null,a.a.createElement(V.a,{label:"Map Type",ref:c,onChange:function(e){n(e.target.value)}},p.map((function(e){return a.a.createElement("option",{key:e,value:e},e)})))),a.a.createElement(N.a,{ref:o},"Generate a new landscape")))}},igCo:function(e,t,n){e.exports={select:"select-module--select--3j8Sy",label:"select-module--label--2swTM"}},ucHa:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("zLVn"),a=n("q1tI"),i=n.n(a),l=n("igCo"),o=n.n(l),c=Object(a.forwardRef)((function(e,t){var n=e.children,a=e.label,l=Object(r.a)(e,["children","label"]);return i.a.createElement("label",{className:o.a.select},i.a.createElement("span",{className:o.a.label},a),i.a.createElement("select",Object.assign({ref:t},l),n))}))},zRY8:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(e,t){return(t-e)*Math.random()+e}}}]);
//# sourceMappingURL=component---src-pages-projects-simulations-landscape-index-tsx-68a41de239dc2e2a1100.js.map