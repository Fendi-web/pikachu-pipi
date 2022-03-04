// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"css.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var string = "<style>\n*{box-sizing:border-box;margin:0;padding:0;}\n*::before,*::after{box-sizing:border-box;}\n* {\n    box-sizing: border-box;\n    margin: 0;\n}\nbody {\n    padding-top: 100px;\n}\n.wrapper {\n    margin: 0 auto;\n    width: 477px;\n    height: 700px;\n    position: relative;\n    padding-top: 90px;\n}\n.head {\n    width: 477px;\n    height: 360px;\n    background-color: #D9453B;\n    border-radius: 200px;\n    transform: rotate(8deg);\n    position: relative;\n    overflow: hidden;\n    box-shadow: -94px -34px 34px -82px rgba(255, 255, 255, .8) inset;\n    position: relative;\n    z-index: 8;\n}\n.head .line {\n    width: 300px;\n    height: 345px;\n    border: 2px solid rgba(221,188,28, .3);\n    border-radius: 0 300px;\n    transform: rotate(42deg);\n    position: absolute;\n    left: 89px;\n    top: 0;\n    z-index: 1;\n}\n.head::before {\n    content: '';\n    display: block;\n    width: 404px;\n    height: 122px;\n    position: absolute;\n    top: 17px;\n    left: 43px;\n    z-index: 5;\n    border-radius: 50%;\n    box-shadow: 0px -29px 0px 0px #D9453B, 0px 1px 0px 0px rgba(159,32,36, .5) inset;\n    transform: rotate(2deg);\n}\n.ring {\n    position: absolute;\n    top: 22px;\n    left: 255px;\n    z-index: 3;\n    transform: rotate(15deg);\n}\n.ring::before {\n    content: '';\n    display: block;\n    width: 16px;\n    height: 16px;\n    position: absolute;\n    left: 43px;\n    top: 18px;\n    z-index: 3;\n    transform: rotate(162deg);\n    border-radius: 50% 50% 73px 29px;\n    box-shadow: 1px 4px 0 0  rgba(237, 186, 0, .9);\n}\n.ring::after {\n    content: '';\n    display: block;\n    width: 16px;\n    height: 16px;\n    position: absolute;\n    left: 16px;\n    top: 22px;\n    z-index: 3;\n    transform: rotate(28deg);\n    border-radius: 30px 35px 50% 50%;\n    box-shadow: 1px -4px 0 0 rgba(237, 186, 0, .9);\n}\n.ring-c {\n    background-color: #fff;\n}\n.ring-w {\n    width: 30px;\n    height: 30px;\n    border-radius: 50% 50% 10px 50%;\n}\n.ring-w1 {\n    width: 40px;\n    height: 45px;\n    border-radius: 50% 50% 10px 10px;\n    position: absolute;\n    top: -16px;\n    left: 17px;\n}\n.ring-w2 {\n    width: 32px;\n    height: 32px;\n    border-radius: 50%;\n    position: absolute;\n    top: -3px;\n    left: 42px;\n}\n.ring2 {\n    transform: rotate(13deg) scale(1.2);\n    z-index: 1;\n    left: 250px;\n    top: 21px;\n}\n.ring2 .ring-c {\n    background-color: rgba(237, 186, 0, .9);\n}\n.ice {\n    width: 150px;\n    height: 50px;\n    background-color: #fff;\n    box-shadow: 0px -3px 10px 0px rgba(207,228,226, .5);\n    transform: rotate(10deg);\n    position: absolute;\n    top: 52px;\n    left: 199px;\n    z-index: 10;\n    border-radius: 50%;\n}\n.ice::before {\n    content: '';\n    width: 150px;\n    height: 31px;\n    background-color: #fff;\n    position: absolute;\n    top: 21px;\n    right: -78px;\n    border-radius: 50%;\n    transform: rotate(21deg);\n    z-index: -1;\n    box-shadow: 16px -2px 9px -9px rgba(207,228,226, .9);\n}\n.ice::after {\n    content: '';\n    width: 114px;\n    height: 34px;\n    background-color: #fff;\n    position: absolute;\n    top: 16px;\n    left: -49px;\n    z-index: -1;\n    border-radius: 50%;\n    transform: rotate(-15deg);\n    box-shadow: -12px -6px 9px -9px rgb(207,228,226, .9);\n}\n.face {\n    width: 230px;\n    height: 230px;\n    border-radius: 230px 0;\n    transform: rotate(49deg);\n    background-color: #fff;\n    position: absolute;\n    left: 65px;\n    top: 94px;\n    z-index: 5;\n}\n.face-c {\n    width: 203px;\n    height: 75px;\n    border-radius: 50px;\n    background-color: #fff;\n    position: absolute;\n    top: 77px;\n    left: -75px;\n    transform: rotate(-62deg);\n}\n.face-c1 {\n    width: 113px;\n    height: 111px;\n    border-radius: 50px;\n    background-color: #fff;\n    position: absolute;\n    top: 52px;\n    left: -26px;\n}\n.face-c2 {\n    width: 98px;\n    height: 86px;\n    border-radius: 50px;\n    background-color: #fff;\n    position: absolute;\n    top: -42px;\n    right: 3px;\n}\n.face-c3 {\n    width: 83px;\n    height: 69px;\n    background-color: #fff;\n    border-radius: 100%;\n    position: absolute;\n    right: -30px;\n    top: -26px;\n}\n.face-c4 {\n    width: 83px;\n    height: 69px;\n    background-color: #fff;\n    border-radius: 100%;\n    position: absolute;\n    left: -8px;\n    bottom: -19px;\n}\n.face-c5 {\n    width: 80px;\n    height: 80px;\n    border-radius: 50%;\n    background-color: #fff;\n    position: absolute;\n    top: -3px;\n    right: 69px;\n}\n.eyes {\n    width: 180px;\n    height: 35px;\n    display: flex;\n    justify-content: space-between;\n    position: absolute;\n    top: 90px;\n    left: 5px;\n    z-index: 3;\n    transform: rotate(-43deg);\n}\n.eye {\n    width: 24px;\n    height: 31px;\n    background-color: #211718;\n    border-radius: 50%;\n    position: relative;\n}\n.eye::before {\n    content: '';\n    display: block;\n    width: 4px;\n    height: 6px;\n    background-color: rgba(255, 255, 255, .8);\n    position: absolute;\n    top: 5px;\n    left: 4px;\n    border-radius: 5px;\n    transform: rotate(30deg);\n}\n.cheeks {\n    width: 259px;\n    height: 30px;\n    display: flex;\n    justify-content: space-between;\n    position: absolute;\n    top: 109px;\n    left: -4px;\n    z-index: 3;\n    transform: rotate(-47deg);\n}\n.cheek {\n    box-shadow: 0px 0px 20px 20px rgba(212,161,178, 1);\n    width: 1px;\n    height: 1px;\n    border-radius: 50%;\n    background-color: rgba(212,161,178, 1);\n}\n.body {\n    width: 226px;\n    height: 191px;\n    background-color: #D9453B;\n    border-radius: 79px 100px 75px 78px;\n    margin-left: 120px;\n    margin-top: -24px;\n    transform: rotate(3deg);\n    position: relative;\n    z-index: 4;\n    -webkit-appearance: none;\n    box-shadow: -67px -34px 50px -74px rgba(255, 255, 255, .8) inset;\n    padding-top: 80px;\n    box-sizing: border-box;\n}\n.body-c {\n    width: 30px;\n    height: 30px;\n    border-radius: 50%;\n    background-color: #fff;\n    position: relative;\n    margin: 0 auto;\n    box-shadow: 0px 0px 30px 36px #fff;\n}\n.text {\n    font-size: 12px;\n    text-align: center;\n    font-weight: bold;\n    font-style: oblique;\n    position: relative;\n    top: -36px;\n}\n.logo {\n    width: 42px;\n    height: 24px;\n    border-radius: 50%;\n    box-shadow: 6px 3px 0 0 #03A750;\n    position: absolute;\n    left: 152px;\n    top: 137px;\n    transform: rotate(24deg);\n    zoom: .7;\n}\n.logo::after {\n    content: '';\n    width: 42px;\n    height: 24px;\n    border-radius: 50%;\n    box-shadow: 6px 3px 0 0 #1281C6;\n    position: absolute;\n    left: -3px;\n    top: 5px;\n    transform: rotate(68deg);\n}\n.logo::before {\n    content: '';\n    width: 42px;\n    height: 24px;\n    border-radius: 50%;\n    box-shadow: 6px 3px 0 0 #ed344e;\n    position: absolute;\n    left: -11px;\n    top: 5px;\n    transform: rotate(129deg);\n}\n.arm-l {\n    width: 100px;\n    height: 60px;\n    background-color: #D9453B;\n    position: absolute;\n    left: 42px;\n    top: 436px;\n    z-index: 5;\n    border-radius: 25px 37px 25px 53px;\n    transform-origin: 100px 30px;\n    transform: rotate(21deg);\n    box-shadow: -5px -17px 38px -20px rgb(255, 255, 255, 80%) inset;\n    animation: 2s ease-in-out 1s infinite lRotate;\n}\n@keyframes lRotate {\n    0% { \n        transform: rotate(21deg);\n    }\n    10% { \n        transform: rotate(30deg);\n    }\n    20% { \n        transform: rotate(14deg);\n        border-radius: 30px 29px 25px 53px;\n    }\n    30% { \n        transform: rotate(28deg);\n    }\n    40%,50%,60%,70%,80%,90%,100% { \n        transform: rotate(21deg);\n    }\n}\n.arm-r {\n    width: 100px;\n    height: 60px;\n    background-color: #D9453B;\n    position: absolute;\n    left: 303px;\n    top: 466px;\n    z-index: 1;\n    border-radius: 25px 37px 36px 53px;\n    transform: rotate(236deg);\n    box-shadow: -30px -42px 30px -36px rgb(255, 255, 255, .7) inset;\n}\n.scarf {\n    width: 245px;\n    height: 27px;\n    background-color: rgba(232,180,0, 1);\n    border-radius: 20px;\n    position: absolute;\n    top: 442px;\n    left: 115px;\n    z-index: 4;\n    transform: rotate(3deg);\n}\n.scarf-c {\n    width: 18px;\n    height: 60px;\n    background: rgba(232,180,0, 1);\n    position: absolute;\n    top: 437px;\n    left: 128px;\n    z-index: 5;\n    transform: rotate(13deg);\n    border-top-left-radius: 5px;\n}\n.scarf-c .line {\n    width: 2px;\n    height: 22px;\n    position: absolute;\n    bottom: 0;\n    left: 2px;\n    background: #D9453B;\n}\n.scarf-c .line:nth-child(2) {\n    left: 6px;\n}\n.scarf-c .line:nth-child(3) {\n    left: 10px;\n}\n.scarf-c .line:nth-child(4) {\n    left: 14px;\n}\n.leg-l {\n    width: 85px;\n    height: 48px;\n    background-color: #D9453B;\n    border-radius: 2px 10px 29px 44px;\n    position: absolute;\n    top: 595px;\n    left: 145px;\n    z-index: 4;\n}\n.leg-r {\n    width: 84px;\n    height: 89px;\n    background-color: #D9453B;\n    border-radius: 50px 10px 41px 31px;\n    position: absolute;\n    top: 561px;\n    left: 242px;\n    z-index: 3;\n    transform: rotate(9deg);\n    box-shadow: -88px 2px 40px -86px rgb(255, 255, 255, .7) inset;\n}\n</style>\n";
exports.default = string;
},{}],"test.js":[function(require,module,exports) {
'use strict';

var _css = require('./css.js');

var _css2 = _interopRequireDefault(_css);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var n = 1;
demo.innerText = _css2.default.substring(0, n);
demo2.innerHTML = _css2.default.substring(0, n);
var time = 100;

var run = function run() {
    n += 1;
    if (n > _css2.default.length) {
        window.clearInterval(id);
        return;
    }
    demo.innerText = _css2.default.substring(0, n);
    demo2.innerHTML = _css2.default.substring(0, n);
    demo.scrollTop = demo.scrollHeight;
};
var play = function play() {
    return setInterval(run, time);
};
var pause = function pause() {
    window.clearInterval(id);
};
var id = play();

btnPause.onclick = function () {
    pause();
};

btnPlay.onclick = function () {
    id = play();
};
btnSlow.onclick = function () {
    pause();
    time = 300;
    id = play();
};
btnNormal.onclick = function () {
    pause();
    time = 100;
    id = play();
};
btnFast.onclick = function () {
    pause();
    time = 10;
    id = play();
};
},{"./css.js":"css.js"}],"C:\\Users\\yana\\AppData\\Local\\Yarn\\Data\\global\\node_modules\\parcel\\src\\builtins\\hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '58703' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();

      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["C:\\Users\\yana\\AppData\\Local\\Yarn\\Data\\global\\node_modules\\parcel\\src\\builtins\\hmr-runtime.js","test.js"], null)
//# sourceMappingURL=/test.00e28634.map