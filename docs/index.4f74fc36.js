function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequired11a"];
if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequired11a"] = parcelRequire;
}
const $9dc8aee261f15b9a$var$header = document.querySelector("header");
const $9dc8aee261f15b9a$var$setHeaderHeight = (height)=>{
    if (!$9dc8aee261f15b9a$var$header) return;
    const unit = CSS.supports("height", "100svh") ? "svh" : "vh";
    $9dc8aee261f15b9a$var$header.style.height = `${height}${unit}`;
};
const $9dc8aee261f15b9a$export$af2600c689ab0f7d = (scrollPosition)=>{
    const windowHeight = window.innerHeight;
    const percentOfHeight = Math.max(1 - scrollPosition / windowHeight, 0) * 100;
    const distanceToHeaderBottom = windowHeight - scrollPosition;
    $9dc8aee261f15b9a$var$setHeaderHeight(percentOfHeight);
    if (!$9dc8aee261f15b9a$var$header) return;
    if (percentOfHeight < 100) $9dc8aee261f15b9a$var$header.classList.add("has-scrolled");
    else $9dc8aee261f15b9a$var$header.classList.remove("has-scrolled");
    if (distanceToHeaderBottom <= 64) $9dc8aee261f15b9a$var$header.classList.add("as-nav");
    else $9dc8aee261f15b9a$var$header.classList.remove("as-nav");
};


var $ee6b2c64bd8fb67b$exports = {};
/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing. The function also has a property 'clear' 
 * that is a function which will clear the timer to prevent previously scheduled executions. 
 *
 * @source underscore.js
 * @see http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
 * @param {Function} function to wrap
 * @param {Number} timeout in ms (`100`)
 * @param {Boolean} whether to execute at the beginning (`false`)
 * @api public
 */ function $ee6b2c64bd8fb67b$var$debounce(func, wait, immediate) {
    var timeout, args, context, timestamp, result;
    if (null == wait) wait = 100;
    function later() {
        var last = Date.now() - timestamp;
        if (last < wait && last >= 0) timeout = setTimeout(later, wait - last);
        else {
            timeout = null;
            if (!immediate) {
                result = func.apply(context, args);
                context = args = null;
            }
        }
    }
    var debounced = function() {
        context = this;
        args = arguments;
        timestamp = Date.now();
        var callNow = immediate && !timeout;
        if (!timeout) timeout = setTimeout(later, wait);
        if (callNow) {
            result = func.apply(context, args);
            context = args = null;
        }
        return result;
    };
    debounced.clear = function() {
        if (timeout) {
            clearTimeout(timeout);
            timeout = null;
        }
    };
    debounced.flush = function() {
        if (timeout) {
            result = func.apply(context, args);
            context = args = null;
            clearTimeout(timeout);
            timeout = null;
        }
    };
    return debounced;
}
// Adds compatibility for ES modules
$ee6b2c64bd8fb67b$var$debounce.debounce = $ee6b2c64bd8fb67b$var$debounce;
$ee6b2c64bd8fb67b$exports = $ee6b2c64bd8fb67b$var$debounce;


// Unitless constants that can be fine-tuned until the animation looks "right"
const $eddcf61ad9cab39e$var$EXPLOSION_STRENGTH = 2000;
const $eddcf61ad9cab39e$var$AIR_RESISTANCE = -6;
const $eddcf61ad9cab39e$var$AIR_RESISTANCE_VARIANCE = $eddcf61ad9cab39e$var$AIR_RESISTANCE / 2;
const $eddcf61ad9cab39e$var$GRAVITY = 1000;
const $eddcf61ad9cab39e$var$EXPLOSION_RADIUS = 65;
const $eddcf61ad9cab39e$var$EXPLOSION_CENTER = {
    x: 200,
    y: 150
};
const $eddcf61ad9cab39e$var$CONFETTI_COLORS = [
    "#e75d5d",
    "#eb8a47",
    "#eec42e",
    "#84cda0",
    "#8aaad8",
    "#a98bc7"
];
const $eddcf61ad9cab39e$var$getInitialPosition = (confettiCenter = $eddcf61ad9cab39e$var$EXPLOSION_CENTER)=>{
    const r = $eddcf61ad9cab39e$var$EXPLOSION_RADIUS * Math.sqrt(Math.random());
    const theta = Math.random() * 2 * Math.PI;
    return {
        x: confettiCenter.x + r * Math.cos(theta),
        y: confettiCenter.y + r * Math.sin(theta)
    };
};
/** Explode outward with a random velocity */ const $eddcf61ad9cab39e$var$getInitialVelocity = (particlePosition, confettiCenter = $eddcf61ad9cab39e$var$EXPLOSION_CENTER)=>{
    const fromCenter = {
        x: particlePosition.x - confettiCenter.x,
        y: particlePosition.y - confettiCenter.y + 30
    };
    const magnitude = Math.sqrt(fromCenter.x * fromCenter.x + fromCenter.y * fromCenter.y) || 1; // guards against dividing by 0
    // get the unit vector
    const direction = {
        x: fromCenter.x / magnitude,
        y: fromCenter.y / magnitude
    };
    // choose a random speed
    const speed = Math.random() * $eddcf61ad9cab39e$var$EXPLOSION_STRENGTH;
    return {
        x: direction.x * speed,
        y: direction.y * speed
    };
};
/** Based on two timestamps, determine the length of the frame */ const $eddcf61ad9cab39e$var$calculateFrameLength = (currMS, prevMS = currMS)=>(currMS - prevMS) / 1000;
function $eddcf61ad9cab39e$var$randomFromTo(from, to) {
    return Math.floor(Math.random() * (to - from + 1) + from);
}
class $eddcf61ad9cab39e$export$a72d870e506b5ed2 {
    get width() {
        return this.canvas.width;
    }
    get height() {
        return this.canvas.height;
    }
    get center() {
        return {
            x: this.width / 2,
            y: this.height / 4
        };
    }
    createConfettis() {
        this.particles = [];
        for(let i = 0; i < this.maxParticles; i++)this.particles.push(this.createConfettiParticle(i));
    }
    start() {
        this.isAnimationComplete = false;
        this.elapsedTime = 0;
        this.opacity = 1;
        let prevMS = undefined;
        const run = (currMS)=>{
            if (this.isAnimationComplete) return;
            const deltaT = $eddcf61ad9cab39e$var$calculateFrameLength(currMS, prevMS);
            prevMS = currMS;
            this.animationHandler = requestAnimationFrame(run);
            this.draw();
            this.update(deltaT);
        };
        setTimeout(()=>{
            this.animationHandler = requestAnimationFrame(run);
        }, this.delay);
        this.stopConfettiTimer = setTimeout(()=>{
            this.stopConfetti();
        }, this.delay + 5000);
    }
    createConfettiParticle(index) {
        const position = $eddcf61ad9cab39e$var$getInitialPosition(this.center);
        const velocity = $eddcf61ad9cab39e$var$getInitialVelocity(position, this.center);
        let size = $eddcf61ad9cab39e$var$randomFromTo(10, 30);
        let tilt = Math.floor(Math.random() * 10) - 10;
        let tiltAngleIncrement = Math.random() * 0.07 + 0.05;
        let tiltAngle = 0;
        const color = $eddcf61ad9cab39e$var$CONFETTI_COLORS[index % $eddcf61ad9cab39e$var$CONFETTI_COLORS.length];
        const airResistance = $eddcf61ad9cab39e$var$AIR_RESISTANCE - $eddcf61ad9cab39e$var$AIR_RESISTANCE_VARIANCE * Math.random();
        return {
            airResistance: airResistance,
            instance: this,
            draw () {
                if (!this.instance.context) return;
                this.instance.context.beginPath();
                this.instance.context.lineWidth = this.size / 2;
                this.instance.context.strokeStyle = color;
                this.instance.context.moveTo(this.position.x + this.tilt + this.size / 4, this.position.y);
                this.instance.context.lineTo(this.position.x + this.tilt, this.position.y + this.tilt + this.size / 4);
                this.instance.context.stroke();
            },
            position: position,
            velocity: velocity,
            size: size,
            tilt: tilt,
            tiltAngle: tiltAngle,
            tiltAngleIncrement: tiltAngleIncrement
        };
    }
    draw() {
        var _this_context;
        (_this_context = this.context) === null || _this_context === void 0 ? void 0 : _this_context.clearRect(0, 0, this.width, this.height);
        if (this.context) this.context.globalAlpha = this.opacity;
        for(let i = 0; i < this.maxParticles; i++)this.particles[i].draw();
    }
    update(deltaT) {
        if (this.isAnimationComplete) return;
        let remainingFlakes = 0;
        let particle;
        this.tiltAngle = this.tiltAngle + 0.1;
        this.elapsedTime += deltaT;
        const remainingTime = this.duration - this.elapsedTime;
        // start to fade out in last 2 sec of animation
        if (remainingTime <= 2) {
            // a number between 0 - 1
            const percent = Math.max(remainingTime / 2, 0);
            // use an "ease-in" timing fuction so the fade out accelerates over time
            this.opacity = percent * percent;
        }
        for(let i = 0; i < this.maxParticles; i++){
            particle = this.particles[i];
            this.stepParticle(particle, i, deltaT);
            if (particle.position.y <= this.height) remainingFlakes++;
        }
        if (remainingFlakes === 0) this.stopConfetti();
    }
    stepParticle(particle, particleIndex, deltaT) {
        // Calculate forces acting on the particle:
        // 1. Air resistance is proportional and opposite the velocity
        // 2. Gravity is a constant downward force
        const acceleration = {
            x: particle.velocity.x * particle.airResistance,
            y: particle.velocity.y * particle.airResistance + $eddcf61ad9cab39e$var$GRAVITY
        };
        particle.velocity.x += acceleration.x * deltaT;
        particle.velocity.y += acceleration.y * deltaT;
        particle.position.x += particle.velocity.x * deltaT;
        particle.position.y += particle.velocity.y * deltaT;
        particle.tiltAngle += particle.tiltAngleIncrement;
        particle.tilt = Math.sin(particle.tiltAngle - particleIndex / 3) * 15;
    }
    clearTimers() {
        clearTimeout(this.animationHandler);
        clearTimeout(this.stopConfettiTimer);
    }
    stopConfetti() {
        var _this_context;
        this.isAnimationComplete = true;
        (_this_context = this.context) === null || _this_context === void 0 ? void 0 : _this_context.clearRect(0, 0, this.width, this.height);
    }
    dispose() {
        this.clearTimers();
        this.stopConfetti();
    }
    constructor(canvas, config){
        this.duration = 3;
        this.particles = [];
        this.elapsedTime = 0;
        this.opacity = 1;
        this.tiltAngle = 0;
        this.isAnimationComplete = true;
        this.canvas = canvas;
        this.context = canvas.getContext("2d");
        var _config_maxParticles;
        this.maxParticles = (_config_maxParticles = config === null || config === void 0 ? void 0 : config.maxParticles) !== null && _config_maxParticles !== void 0 ? _config_maxParticles : 100;
        var _config_delay;
        this.delay = (_config_delay = config === null || config === void 0 ? void 0 : config.delay) !== null && _config_delay !== void 0 ? _config_delay : 0;
    }
}
const $eddcf61ad9cab39e$export$67ea982130081db = document.querySelector("canvas.confetti");
const $eddcf61ad9cab39e$export$bbc1dc0dfa214ef7 = $eddcf61ad9cab39e$export$67ea982130081db ? new $eddcf61ad9cab39e$export$a72d870e506b5ed2($eddcf61ad9cab39e$export$67ea982130081db) : undefined;



var $cneTY = parcelRequire("cneTY");
const $e0dbf06590afb71a$var$MIN_WIDTH = 668;
const $e0dbf06590afb71a$var$TAB_HEIGHT = 600;
const $e0dbf06590afb71a$var$HEADER_HEIGHT = 64;
const $e0dbf06590afb71a$var$SELECTED_CLASS_NAME = "selected";
const $e0dbf06590afb71a$var$TABS = {
    // Folded Note
    "1": {
        cleanup: ()=>(0, $cneTY.paperCleanup)()
    },
    // Confetti
    "2": {
        init: ()=>{
            if (0, $eddcf61ad9cab39e$export$67ea982130081db) {
                var _canvas_parentElement, _canvas_parentElement1;
                var _canvas_parentElement_clientWidth;
                (0, $eddcf61ad9cab39e$export$67ea982130081db).width = (_canvas_parentElement_clientWidth = (_canvas_parentElement = (0, $eddcf61ad9cab39e$export$67ea982130081db).parentElement) === null || _canvas_parentElement === void 0 ? void 0 : _canvas_parentElement.clientWidth) !== null && _canvas_parentElement_clientWidth !== void 0 ? _canvas_parentElement_clientWidth : 300;
                var _canvas_parentElement_clientHeight;
                (0, $eddcf61ad9cab39e$export$67ea982130081db).height = (_canvas_parentElement_clientHeight = (_canvas_parentElement1 = (0, $eddcf61ad9cab39e$export$67ea982130081db).parentElement) === null || _canvas_parentElement1 === void 0 ? void 0 : _canvas_parentElement1.clientHeight) !== null && _canvas_parentElement_clientHeight !== void 0 ? _canvas_parentElement_clientHeight : 400;
            }
            (0, $eddcf61ad9cab39e$export$bbc1dc0dfa214ef7) === null || (0, $eddcf61ad9cab39e$export$bbc1dc0dfa214ef7) === void 0 ? void 0 : (0, $eddcf61ad9cab39e$export$bbc1dc0dfa214ef7).createConfettis();
            (0, $eddcf61ad9cab39e$export$bbc1dc0dfa214ef7) === null || (0, $eddcf61ad9cab39e$export$bbc1dc0dfa214ef7) === void 0 ? void 0 : (0, $eddcf61ad9cab39e$export$bbc1dc0dfa214ef7).start();
        },
        cleanup: ()=>{
            return (0, $eddcf61ad9cab39e$export$bbc1dc0dfa214ef7) === null || (0, $eddcf61ad9cab39e$export$bbc1dc0dfa214ef7) === void 0 ? void 0 : (0, $eddcf61ad9cab39e$export$bbc1dc0dfa214ef7).dispose();
        }
    }
};
let $e0dbf06590afb71a$var$tabIndex = -1;
let $e0dbf06590afb71a$var$observer;
const $e0dbf06590afb71a$var$tabs = document.getElementById("css-exploration");
var $e0dbf06590afb71a$var$_tabs_querySelectorAll;
const $e0dbf06590afb71a$var$tabContents = Array.from(($e0dbf06590afb71a$var$_tabs_querySelectorAll = $e0dbf06590afb71a$var$tabs === null || $e0dbf06590afb71a$var$tabs === void 0 ? void 0 : $e0dbf06590afb71a$var$tabs.querySelectorAll(".tab-content")) !== null && $e0dbf06590afb71a$var$_tabs_querySelectorAll !== void 0 ? $e0dbf06590afb71a$var$_tabs_querySelectorAll : []);
$e0dbf06590afb71a$var$tabContents === null || $e0dbf06590afb71a$var$tabContents === void 0 ? void 0 : $e0dbf06590afb71a$var$tabContents.forEach((tab, index)=>{
    var _TABS_String, _TABS_String1;
    tab.init = (_TABS_String = $e0dbf06590afb71a$var$TABS[String(index)]) === null || _TABS_String === void 0 ? void 0 : _TABS_String.init;
    tab.cleanup = (_TABS_String1 = $e0dbf06590afb71a$var$TABS[String(index)]) === null || _TABS_String1 === void 0 ? void 0 : _TABS_String1.cleanup;
});
const $e0dbf06590afb71a$var$getIsMobile = ()=>{
    var _document_documentElement_clientWidth, _window_innerWidth;
    const viewportWidth = Math.max((_document_documentElement_clientWidth = document.documentElement.clientWidth) !== null && _document_documentElement_clientWidth !== void 0 ? _document_documentElement_clientWidth : 0, (_window_innerWidth = window.innerWidth) !== null && _window_innerWidth !== void 0 ? _window_innerWidth : 0);
    return viewportWidth < $e0dbf06590afb71a$var$MIN_WIDTH;
};
const $e0dbf06590afb71a$export$442e6265b57d6c24 = (scrollPosition)=>{
    var // Run init & cleanup
    _TABS_String, _TABS_String_cleanup, _TABS_String1, _TABS_String_init;
    if (!$e0dbf06590afb71a$var$tabs || $e0dbf06590afb71a$var$getIsMobile()) return;
    const tabTitles = Array.from($e0dbf06590afb71a$var$tabs.querySelectorAll(".tab-title"));
    const tabContents = Array.from($e0dbf06590afb71a$var$tabs.querySelectorAll(".tab-content"));
    const previousTabIndex = $e0dbf06590afb71a$var$tabIndex;
    const tabListStart = $e0dbf06590afb71a$var$tabs.offsetTop;
    const scrollDistance = scrollPosition - tabListStart + $e0dbf06590afb71a$var$HEADER_HEIGHT + $e0dbf06590afb71a$var$TAB_HEIGHT / 2;
    $e0dbf06590afb71a$var$tabIndex = Math.floor(scrollDistance / $e0dbf06590afb71a$var$TAB_HEIGHT);
    const selectedTabTitle = tabTitles[$e0dbf06590afb71a$var$tabIndex];
    const selectedTabContent = tabContents[$e0dbf06590afb71a$var$tabIndex];
    // If we can't find the tab, or if it's already selected, do nothing
    if (!selectedTabTitle || selectedTabTitle.classList.contains($e0dbf06590afb71a$var$SELECTED_CLASS_NAME) || $e0dbf06590afb71a$var$tabIndex === previousTabIndex) return;
    // Update the tab & content
    Array.from($e0dbf06590afb71a$var$tabs.children).forEach((tab)=>tab.classList.remove($e0dbf06590afb71a$var$SELECTED_CLASS_NAME));
    selectedTabTitle.classList.add($e0dbf06590afb71a$var$SELECTED_CLASS_NAME);
    selectedTabContent.classList.add($e0dbf06590afb71a$var$SELECTED_CLASS_NAME);
    (_TABS_String = $e0dbf06590afb71a$var$TABS[String(previousTabIndex)]) === null || _TABS_String === void 0 ? void 0 : (_TABS_String_cleanup = _TABS_String.cleanup) === null || _TABS_String_cleanup === void 0 ? void 0 : _TABS_String_cleanup.call(_TABS_String);
    (_TABS_String1 = $e0dbf06590afb71a$var$TABS[String($e0dbf06590afb71a$var$tabIndex)]) === null || _TABS_String1 === void 0 ? void 0 : (_TABS_String_init = _TABS_String1.init) === null || _TABS_String_init === void 0 ? void 0 : _TABS_String_init.call(_TABS_String1);
};
const $e0dbf06590afb71a$var$setupIntersectionObserver = ()=>{
    if ($e0dbf06590afb71a$var$observer || !$e0dbf06590afb71a$var$getIsMobile()) return;
    $e0dbf06590afb71a$var$observer = new IntersectionObserver((entries)=>{
        if (!$e0dbf06590afb71a$var$getIsMobile()) return;
        entries.forEach((entry)=>{
            const tab = entry.target;
            const isTabVisible = tab.classList.contains($e0dbf06590afb71a$var$SELECTED_CLASS_NAME);
            // tab is visible for the first time
            if (entry.isIntersecting && !isTabVisible) {
                var _tab_init;
                tab.classList.add($e0dbf06590afb71a$var$SELECTED_CLASS_NAME);
                (_tab_init = tab.init) === null || _tab_init === void 0 ? void 0 : _tab_init.call(tab);
            } else if (!entry.isIntersecting && isTabVisible) {
                var _tab_cleanup;
                tab.classList.remove($e0dbf06590afb71a$var$SELECTED_CLASS_NAME);
                (_tab_cleanup = tab.cleanup) === null || _tab_cleanup === void 0 ? void 0 : _tab_cleanup.call(tab);
            }
        });
    }, {
        threshold: 0.75
    });
    $e0dbf06590afb71a$var$tabContents === null || $e0dbf06590afb71a$var$tabContents === void 0 ? void 0 : $e0dbf06590afb71a$var$tabContents.forEach((tab)=>{
        $e0dbf06590afb71a$var$observer === null || $e0dbf06590afb71a$var$observer === void 0 ? void 0 : $e0dbf06590afb71a$var$observer.observe(tab);
    });
};
$e0dbf06590afb71a$var$setupIntersectionObserver();
window.addEventListener("resize", (0, (/*@__PURE__*/$parcel$interopDefault($ee6b2c64bd8fb67b$exports)))($e0dbf06590afb71a$var$setupIntersectionObserver, 200));


let $b3274b32e073fecd$var$ticking = false;
const $b3274b32e073fecd$var$handleScroll = ()=>{
    const lastKnownScrollPosition = window.scrollY;
    if (!$b3274b32e073fecd$var$ticking) {
        window.requestAnimationFrame(()=>{
            (0, $9dc8aee261f15b9a$export$af2600c689ab0f7d)(lastKnownScrollPosition);
            (0, $e0dbf06590afb71a$export$442e6265b57d6c24)(lastKnownScrollPosition);
            $b3274b32e073fecd$var$ticking = false;
        });
        $b3274b32e073fecd$var$ticking = true;
    }
};
$b3274b32e073fecd$var$handleScroll();
document.addEventListener("scroll", $b3274b32e073fecd$var$handleScroll);


//# sourceMappingURL=index.4f74fc36.js.map
