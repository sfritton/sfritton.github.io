(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"5/t2":function(t,e,i){"use strict";i.d(e,"a",(function(){return r}));var n=i("dI71"),r=function(t){function e(e,i){var n;return(n=t.call(this,e)||this).verbose=!1,n.startMS=0,n.currMS=0,n.prevMS=0,n.frames=0,n.verbose=null!=i&&i,n}Object(n.a)(e,t);var i=e.prototype;return i.setup=function(){t.prototype.setup.call(this),this.currMS=this.p5.millis(),this.startMS=this.currMS,this.prevMS=this.currMS},i.calculateTime=function(){if(this.frames++,this.prevMS=this.currMS,this.currMS=this.p5.millis(),this.verbose){var t=Math.floor(this.frames/(this.currMS-this.startMS)*1e3);console.log("Running at "+t+" FPS")}return(this.currMS-this.prevMS)/1e3},e}(i("mCOQ").a)},Pz6p:function(t,e,i){"use strict";i.r(e);var n=i("q1tI"),r=i.n(n),s=i("VXBa"),o=i("u7b8"),a=i("dI71"),c=i("5/t2"),u=new(function(){function t(){this.pixelsPerMeter=0,this.screenHeight=0,this.screenWidth=0}var e=t.prototype;return e.init=function(t,e,i){void 0===i&&(i=e),this.pixelsPerMeter=t,this.screenHeight=e,this.screenWidth=i},e.transformCoordinates=function(t){var e=t.x,i=t.y;return{x:e*this.pixelsPerMeter+this.screenWidth/2,y:-i*this.pixelsPerMeter+this.screenHeight/2}},e.transformScalar=function(t){return t*this.pixelsPerMeter},t}()),l=function(){function t(t,e,i,n,r,s){this.netForces={x:0,y:0},this.p5=t,this.mass=e,this.radius=i,this.position=n,this.velocity=r,this.customColor=s}var e=t.prototype;return e.clearForces=function(){this.netForces={x:0,y:0}},e.addForce=function(t){this.netForces={x:this.netForces.x+t.x,y:this.netForces.y+t.y}},e.updatePosition=function(t){var e=this.netForces.x/this.mass,i=this.netForces.y/this.mass;this.velocity.x+=e*t,this.velocity.y+=i*t,this.position.x+=this.velocity.x*t,this.position.y+=this.velocity.y*t},e.manageCollisions=function(t){var e=this;t.forEach((function(t){if(t!==e){var i=e.position.x-t.position.x,n=e.position.y-t.position.y,r=Math.sqrt(i*i+n*n);r>=e.radius+t.radius||(e.position={x:t.position.x+i/r*e.radius+t.radius,y:t.position.y+n/r*e.radius+t.radius},e.velocity={x:e.velocity.x,y:e.velocity.y})}}))},e.render=function(){this.setColor();var t=Math.max(5,u.transformScalar(2*this.radius)),e=u.transformCoordinates(this.position);this.p5.strokeWeight(t),this.p5.point(e.x,e.y)},e.setColor=function(){if(this.customColor)this.p5.stroke(this.customColor);else{var t=Math.min(this.mass,500)/500*255;this.p5.stroke(t,200,255-t)}},t}(),h=function(t){function e(e,i,n,r){return t.call(this,e,i,n,r,{x:0,y:0})||this}return Object(a.a)(e,t),e.prototype.updatePosition=function(t){},e}(l),p=function(){function t(t,e){this.name=t,this.planetGenerator=e}return t.prototype.generatePlanets=function(t){return this.planetGenerator(t)},t}(),f=[new p("Our Solar System",(function(t){return[new h(t,3330,1.1,{x:0,y:0}),new l(t,5e-4,.1,{x:0,y:-2},{x:8.5,y:0},"#d7955f"),new l(t,.008,.1,{x:0,y:3.5},{x:-7.5,y:0},"#ef9d5c"),new l(t,.01,.1,{x:0,y:-5},{x:7.75,y:0},"#5dacdb"),new l(t,.001,.1,{x:0,y:6.5},{x:-8,y:0},"#bd3206"),new l(t,3.17,.6,{x:0,y:-9},{x:8,y:0},"#E4D0B1"),new l(t,.95,.5,{x:0,y:12},{x:-8,y:0},"#c4cf9f"),new l(t,.15,.3,{x:0,y:-14},{x:8,y:0},"#b1e5e8"),new l(t,.17,.3,{x:0,y:16},{x:-8,y:0},"#4793BF")]})),new p("Binary Solar System",(function(t){return[new l(t,3330,1.1,{x:-5,y:0},{x:0,y:5},"#ff8822"),new l(t,3330,1.5,{x:5,y:0},{x:0,y:-5}),new l(t,.01,.3,{x:0,y:8},{x:-10,y:0},"#ef9d5c"),new l(t,.01,.1,{x:0,y:-10},{x:11,y:0},"#d7955f"),new l(t,.01,.1,{x:0,y:12},{x:-11,y:0},"#5dacdb"),new l(t,.01,.5,{x:0,y:-16},{x:11,y:0},"#c4cf9f")]})),new p("Star, Planet, & Moon",(function(t){return[new h(t,5e3,1.1,{x:0,y:0}),new l(t,1e3,.6,{x:0,y:-16},{x:8,y:0},"#5dacdb"),new l(t,1,.1,{x:0,y:-18},{x:4,y:0},"#d6d6d6")]}))],y=function(t){function e(){for(var e,i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))||this).planets=[],e.simulationTitle="",e}Object(a.a)(e,t);var i=e.prototype;return i.setup=function(){t.prototype.setup.call(this),u.init(this.p5.height/35,this.p5.height,this.p5.width),this.loadScenario(f[0].name)},i.loadScenario=function(t){var e=f.find((function(e){return e.name===t}));e&&(this.scenario=e,this.planets=this.scenario.generatePlanets(this.p5),this.simulationTitle=this.scenario.name,this.p5.background(0))},i.simulateFrame=function(){this.calculateForces(),this.updatePositions()},i.render=function(){this.p5.background(0,5),this.planets.forEach((function(t){return t.render()})),this.renderSimulationTitle()},i.renderSimulationTitle=function(){this.p5.textSize(16),this.p5.textFont("monospace"),this.p5.fill(255),this.p5.stroke(0),this.p5.text(this.simulationTitle,15,25)},i.calculateForces=function(){this.planets.forEach((function(t){return t.clearForces()}));for(var t=0;t<this.planets.length;t++)for(var e=this.planets[t],i=t+1;i<this.planets.length;i++){var n=this.planets[i],r=this.calculateGravity(e,n);e.addForce(r),n.addForce({x:-r.x,y:-r.y})}},i.calculateGravity=function(t,e){var i=e.position.x-t.position.x,n=e.position.y-t.position.y,r=Math.sqrt(i*i+n*n);if(0===r)return{x:0,y:0};var s=.02*t.mass*e.mass/(r*r);return{x:i*s,y:n*s}},i.updatePositions=function(){var t=this.calculateTime();this.planets.forEach((function(e){return e.updatePosition(t)}))},e}(c.a),d=function(t){return function(e){var i,n=new y(e);e.setup=function(){n.setup()},e.draw=function(){n.simulateFrame(),n.render()},null===(i=t.current)||void 0===i||i.addEventListener("change",(function(t){var e;t.preventDefault();var i=null===(e=t.target)||void 0===e?void 0:e.value;n.loadScenario(i)}))}},x=i("zLVn"),m=i("igCo"),v=i.n(m),w=Object(n.forwardRef)((function(t,e){var i=t.children,n=t.label,s=Object(x.a)(t,["children","label"]);return r.a.createElement("label",{className:v.a.select},r.a.createElement("span",{className:v.a.label},n),r.a.createElement("select",Object.assign({ref:e},s),i))}));e.default=function(){var t=Object(n.useRef)(null);return r.a.createElement(s.a,{title:"Gravity Simulation"},r.a.createElement("h1",null,"Gravity Simulation"),r.a.createElement(o.a,{sketch:d(t)}),r.a.createElement(w,{label:"Scenarios",ref:t},f.map((function(t){var e=t.name;return r.a.createElement("option",{key:e,value:e},e)}))))}},igCo:function(t,e,i){t.exports={select:"select-module--select--3j8Sy",label:"select-module--label--2swTM"}}}]);
//# sourceMappingURL=component---src-pages-projects-simulations-gravity-tsx-2cd950b675e63fd6ee92.js.map