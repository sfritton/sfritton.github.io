(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"5/t2":function(t,i,s){"use strict";s.d(i,"a",(function(){return o}));var e=s("dI71"),o=function(t){function i(i,s){var e;return(e=t.call(this,i)||this).verbose=!1,e.startMS=0,e.currMS=0,e.prevMS=0,e.frames=0,e.verbose=null!=s&&s,e}Object(e.a)(i,t);var s=i.prototype;return s.setup=function(){t.prototype.setup.call(this),this.currMS=this.p5.millis(),this.startMS=this.currMS,this.prevMS=this.currMS},s.calculateTime=function(){if(this.frames++,this.prevMS=this.currMS,this.currMS=this.p5.millis(),this.verbose){var t=Math.floor(this.frames/(this.currMS-this.startMS)*1e3);console.log("Running at "+t+" FPS")}return(this.currMS-this.prevMS)/1e3},i}(s("mCOQ").a)},q4th:function(t,i,s){"use strict";s.r(i);var e=s("q1tI"),o=s.n(e),n=s("VXBa"),h=s("u7b8"),r=s("dI71"),c=s("5/t2"),p=function(t){function i(){for(var i,s=arguments.length,e=new Array(s),o=0;o<s;o++)e[o]=arguments[o];return(i=t.call.apply(t,[this].concat(e))||this).position={x:0,y:0},i.velocity={x:0,y:0},i}Object(r.a)(i,t);var s=i.prototype;return s.setup=function(){t.prototype.setup.call(this),this.position={x:this.p5.width/2,y:this.p5.height/2}},s.simulateFrame=function(){var t=this.calculateTime();this.bounce(),this.updatePosition(t),this.handleUserInput(t)},s.render=function(){this.p5.noStroke(),this.p5.background("#008060"),this.p5.fill("#65ffda"),this.p5.ellipse(this.position.x,this.position.y,40,40)},s.bounce=function(){this.position.y+20>=this.p5.height&&this.velocity.y>=0&&(this.position.y=this.p5.height-20,this.velocity.x*=.98,this.velocity.y*=-.8),this.position.y-20<=0&&this.velocity.y<=0&&(this.position.y=20,this.velocity.x*=.98,this.velocity.y*=-.8),this.position.x+20>=this.p5.width&&this.velocity.x>=0&&(this.position.x=this.p5.width-20,this.velocity.x*=-.8,this.velocity.y*=.98),this.position.x-20<=0&&this.velocity.x<=0&&(this.position.x=20,this.velocity.x*=-.8,this.velocity.y*=.98)},s.updatePosition=function(t){this.velocity.y+=800*t,this.position.x+=this.velocity.x*t,this.position.y+=this.velocity.y*t},s.handleUserInput=function(t){this.p5.cursor(this.p5.HAND),this.isMousePressed()&&(this.p5.cursor(this.p5.MOVE),this.position.x=this.p5.mouseX,this.position.y=this.p5.mouseY,this.velocity.x=(this.p5.mouseX-this.p5.pmouseX)/t,this.velocity.y=(this.p5.mouseY-this.p5.pmouseY)/t)},i}(c.a),u=function(t){var i=new p(t);t.setup=function(){i.setup()},t.draw=function(){i.simulateFrame(),i.render()}};i.default=function(){return o.a.createElement(n.a,{title:"Bouncing Ball"},o.a.createElement("h1",null,"Bouncing Ball"),o.a.createElement(h.a,{sketch:u}),o.a.createElement("div",null,"A simple physics simulation. Try throwing the ball by clicking and dragging it."),o.a.createElement("div",{style:{marginTop:"var(--space-md)"}},o.a.createElement("b",null,"Note:")," This doesn't work the best on touchscreens."))}}}]);
//# sourceMappingURL=component---src-pages-projects-simulations-bouncing-ball-tsx-332ca02ee64170506522.js.map