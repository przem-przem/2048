// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"g9TDx":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "0bcb44a518dbc454";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"1SICI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "body", ()=>body
);
parcelHelpers.export(exports, "nav", ()=>nav
);
parcelHelpers.export(exports, "main", ()=>main
);
parcelHelpers.export(exports, "title", ()=>title
);
parcelHelpers.export(exports, "gameBoard", ()=>gameBoard
);
parcelHelpers.export(exports, "rangeInput", ()=>rangeInput
);
parcelHelpers.export(exports, "bubble", ()=>bubble
);
parcelHelpers.export(exports, "openSettingsButton", ()=>openSettingsButton
);
parcelHelpers.export(exports, "tapToStart", ()=>tapToStart
);
parcelHelpers.export(exports, "settingsBoard", ()=>settingsBoard
);
parcelHelpers.export(exports, "starterBoard", ()=>starterBoard
);
parcelHelpers.export(exports, "maxtile", ()=>maxtile
);
parcelHelpers.export(exports, "navData", ()=>navData
);
parcelHelpers.export(exports, "tile", ()=>tile
);
parcelHelpers.export(exports, "endGameBoard", ()=>endGameBoard
);
parcelHelpers.export(exports, "endGameTitle", ()=>endGameTitle
);
parcelHelpers.export(exports, "endgameScore", ()=>endgameScore
);
parcelHelpers.export(exports, "endgameButton", ()=>endgameButton
);
parcelHelpers.export(exports, "hiddenClass", ()=>hiddenClass
);
parcelHelpers.export(exports, "backgroundDM", ()=>backgroundDM
);
parcelHelpers.export(exports, "textDM", ()=>textDM
);
parcelHelpers.export(exports, "elevation1DM", ()=>elevation1DM
);
parcelHelpers.export(exports, "elevation2DM", ()=>elevation2DM
);
parcelHelpers.export(exports, "grid", ()=>grid
);
parcelHelpers.export(exports, "gridSize", ()=>gridSize
);
parcelHelpers.export(exports, "cellSize", ()=>cellSize
);
parcelHelpers.export(exports, "baseNumber", ()=>baseNumber
);
parcelHelpers.export(exports, "maxCellFactor", ()=>maxCellFactor
);
parcelHelpers.export(exports, "setupInput", ()=>setupInput
);
parcelHelpers.export(exports, "touches", ()=>touches
);
var _grid = require("./Grid");
var _gridDefault = parcelHelpers.interopDefault(_grid);
var _cell = require("./Cell");
var _cellDefault = parcelHelpers.interopDefault(_cell);
var _tile = require("./Tile");
var _tileDefault = parcelHelpers.interopDefault(_tile);
var _inputHandler = require("./InputHandler");
var _settings = require("./Settings");
var _darkmode = require("./Darkmode");
const body = document.getElementById("body");
const nav = document.getElementById("nav");
const darktheme = document.querySelector("#darktheme");
const main = document.getElementById("main");
const title = document.getElementById("title");
const gameBoard = document.getElementById("game-board");
const radioGridButtons = Array.from(document.querySelectorAll('input[name="gridSize"]'));
const baseNumberInput = Array.from(document.querySelectorAll('input[name="baseNumber"]'));
const darkModeToggle = document.getElementById("darkmode");
const rangeInput = document.getElementById('rangeInput');
const bubble = document.getElementById('rangeBubble');
const openSettingsButton = document.getElementById('openSettings');
const closeSettingsButton = document.getElementById('closeSettings');
const tapToStart = document.getElementById('tapToStart');
const settingsBoard = document.getElementById('settings-board');
const starterBoard = document.getElementById('starter-board');
const score = document.getElementById("score");
const maxtile = document.getElementById("maxtile");
const navData = document.getElementById("nav__data");
const tile = document.getElementById("tile");
const endGameBoard = document.getElementById("endgame__board");
const endGameTitle = document.getElementById("endgame__title");
const endgameScore = document.getElementById("endgame__score");
const endgameButton = document.getElementById("endgame__button");
const hiddenClass = "hidden";
const backgroundDM = "background--dark-mode";
const textDM = "text--dark-mode";
const elevation1DM = "elevation1--dark-mode";
const elevation2DM = "elevation2--dark-mode";
let grid = '';
let gridSize = 4;
let cellSize;
if (window.screen.width > 1024) cellSize = 15;
else cellSize = 18;
let baseNumber = 2;
let maxCellFactor = 1;
/* Open settings board */ openSettingsButton.addEventListener("click", function() {
    _settings.toggleSettingBoard();
    _settings.setRangeBubble();
});
/* Close settings board */ closeSettingsButton.addEventListener("click", _settings.toggleSettingBoard);
/* Start the game when clicking */ tapToStart.addEventListener("click", function() {
    grid = _inputHandler.gamestart();
    setupInput();
    mobileSetupInput();
});
/* Starts the game when pressing Space button */ window.addEventListener("keyup", (e)=>{
    if (e.code == "Space" || e.code == "Enter") {
        _inputHandler.gamestart();
        setupInput();
        mobileSetupInput();
    }
});
/* Update value and move slider thumb */ rangeInput.addEventListener("input", ()=>{
    bubble.innerHTML = rangeInput.value;
    const calcPositionX1 = rangeInput.offsetWidth / 10 * rangeInput.value - rangeInput.offsetWidth / 10 + 4;
    bubble.style.left = `${calcPositionX1}px`;
    baseNumber = parseInt(rangeInput.value);
    title.innerHTML = 1024 * baseNumber * maxCellFactor;
});
/* Handle grid size input */ for (let radio of radioGridButtons)radio.addEventListener("click", (e)=>{
    gridSize = radio.value;
    if (radio.value == 3) {
        gridSize = 3;
        if (window.screen.width > 1024) cellSize = 18;
        else cellSize = 24;
        maxCellFactor = 0.125;
        title.innerHTML = 1024 * baseNumber * maxCellFactor;
    } else if (radio.value == 4) {
        gridSize = 4;
        if (window.screen.width > 1024) cellSize = 15;
        else cellSize = 18;
        maxCellFactor = 1;
        title.innerHTML = 1024 * baseNumber * maxCellFactor;
    } else if (radio.value == 5) {
        gridSize = 5;
        if (window.screen.width > 1024) cellSize = 11;
        else cellSize = 14;
        maxCellFactor = 1;
        title.innerHTML = 1024 * baseNumber * maxCellFactor;
    }
});
darkModeToggle.addEventListener("click", _darkmode.toggleDarkMode);
const setupInput = ()=>{
    window.addEventListener("keydown", _inputHandler.handlerInput, {
        once: true
    });
};
var touches = [
    [],
    []
];
const mobileSetupInput = ()=>{
    /* Push XY coordinates of touchstart event */ window.addEventListener("touchstart", function(ev) {
        touches[0][0] = ev.changedTouches[0].screenX;
        touches[1][0] = ev.changedTouches[0].screenY;
    });
    /* Push XY coordinates of touchend event, determine direction and invoke handlerInput function */ window.addEventListener("touchend", function(ev) {
        touches[0][1] = ev.changedTouches[0].screenX;
        touches[1][1] = ev.changedTouches[0].screenY;
        const direction = _inputHandler.determineTouchDirection(touches);
        _inputHandler.handlerInput(direction);
    });
};

},{"./Grid":"irQ6N","./Cell":"6LzwN","./Tile":"kElux","./InputHandler":"2qFKw","./Settings":"8wGYB","./Darkmode":"j5nYQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"irQ6N":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _cell = require("./Cell");
var _cellDefault = parcelHelpers.interopDefault(_cell);
var _main = require("./main");
const cellGap = 2;
class Grid {
    #cells;
    constructor(gridElement, gridSize){
        gridElement.style.setProperty("--grid-size", gridSize);
        gridElement.style.setProperty("--cell-size", `${_main.cellSize}vmin`);
        gridElement.style.setProperty("--cell-gap", `${cellGap}vmin`);
        /* Creates the array of cell divs and maps into array of Cell objects */ this.#cells = createCellElement(gridElement, gridSize).map((el, index)=>{
            return new _cellDefault.default(el, index % gridSize, Math.floor(index / gridSize));
        });
    }
    get cellsByColumn() {
        return this.#cells.reduce((cellGrid, cell)=>{
            cellGrid[cell.x] = cellGrid[cell.x] || [];
            cellGrid[cell.x][cell.y] = cell;
            return cellGrid;
        }, []);
    }
    get cellsByRow() {
        return this.#cells.reduce((cellGrid, cell)=>{
            cellGrid[cell.y] = cellGrid[cell.y] || [];
            cellGrid[cell.y][cell.x] = cell;
            return cellGrid;
        }, []);
    }
    get cells() {
        return this.#cells;
    }
    get #emptyCells() {
        return this.#cells.filter((cell)=>cell.tile == null
        );
    }
    randomEmptyCell() {
        const randomIndex = Math.floor(Math.random() * this.#emptyCells.length);
        return this.#emptyCells[randomIndex];
    }
}
exports.default = Grid;
const createCellElement = (gridElement, gridSize)=>{
    const cells = [];
    for(let i = 0; i < gridSize * gridSize; i++){
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.setAttribute("id", "cell");
        cells.push(cell);
        gridElement.append(cell);
    }
    return cells;
};

},{"./Cell":"6LzwN","./main":"1SICI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6LzwN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SCORE", ()=>SCORE
);
var _endgameHandler = require("./EndgameHandler");
var _main = require("./main");
var _inputHandler = require("./InputHandler");
let SCORE = 0;
const scoreElement = document.getElementById("score");
class Cell {
    #cellElement;
    #x;
    #y;
    #tile;
    #mergeTile;
    constructor(cellElement, x, y){
        this.#cellElement = cellElement;
        this.#x = x;
        this.#y = y;
    }
    get x() {
        return this.#x;
    }
    get y() {
        return this.#y;
    }
    get tile() {
        return this.#tile;
    }
    get mergeTile() {
        return this.#mergeTile;
    }
    set mergeTile(value) {
        this.#mergeTile = value;
        if (value == null) return;
        this.#mergeTile.x = this.#x;
        this.#mergeTile.y = this.#y;
    }
    set tile(value) {
        this.#tile = value;
        if (value == null) return;
        this.#tile.x = this.#x;
        this.#tile.y = this.#y;
    }
    canAccept(tile) {
        return this.tile == null || this.mergeTile == null && this.tile.value === tile.value;
    }
    mergeTiles(maxTileValue) {
        if (this.mergeTile == null || this.tile == null) return;
        this.tile.value = this.tile.value + this.mergeTile.value;
        let newMaxTileValue = Math.max(maxTileValue, this.tile.value);
        _main.maxtile.innerHTML = `Max tile: ${newMaxTileValue}`;
        if (typeof this.tile.value == "number") updateScore(this.tile.value);
        if (this.tile.value == 1024 * _main.baseNumber * _main.maxCellFactor) _endgameHandler.endGame(true);
        this.mergeTile.remove();
        this.mergeTile = null;
        return newMaxTileValue;
    }
}
exports.default = Cell;
const updateScore = (value)=>{
    SCORE = SCORE + value;
    scoreElement.innerHTML = `Score:  ${SCORE}`;
};
const updateMaxtile = ()=>{
};

},{"./EndgameHandler":"9H4G8","./main":"1SICI","./InputHandler":"2qFKw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9H4G8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "endGame", ()=>endGame
);
parcelHelpers.export(exports, "endGameScoreUpdate", ()=>endGameScoreUpdate
);
var _main = require("./main");
var _cell = require("./Cell");
const endGame = (outcome)=>{
    if (outcome) _main.endGameTitle.innerHTML = "You win :)";
    else _main.endGameTitle.innerHTML = "You lose :(";
    _main.endGameBoard.classList.remove(_main.hiddenClass);
    _main.endgameScore.innerHTML = `Your score:  ${_cell.SCORE}`;
};
const endGameScoreUpdate = ()=>{
    _main.endgameScore.innerHTML = `Your score:  ${_cell.SCORE}`;
};

},{"./main":"1SICI","./Cell":"6LzwN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"2qFKw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "gamestart", ()=>gamestart
);
parcelHelpers.export(exports, "determineTouchDirection", ()=>determineTouchDirection
);
parcelHelpers.export(exports, "handlerInput", ()=>handlerInput
);
var _main = require("./main");
var _gridJs = require("./Grid.js");
var _gridJsDefault = parcelHelpers.interopDefault(_gridJs);
var _tileJs = require("./Tile.js");
var _tileJsDefault = parcelHelpers.interopDefault(_tileJs);
var _endgameHandlerJs = require("./EndgameHandler.js");
var _cellJs = require("./Cell.js");
let MAX_TILE = 0;
let grid;
const gamestart = ()=>{
    _main.openSettingsButton.classList.toggle(_main.hiddenClass);
    _main.starterBoard.classList.toggle(_main.hiddenClass);
    _main.main.classList.toggle(_main.hiddenClass);
    _main.navData.classList.toggle(_main.hiddenClass);
    grid = new _gridJsDefault.default(_main.gameBoard, _main.gridSize);
    let newTile = new _tileJsDefault.default(_main.gameBoard);
    MAX_TILE = newTile.value;
    grid.randomEmptyCell().tile = newTile;
    newTile = new _tileJsDefault.default(_main.gameBoard);
    MAX_TILE = Math.max(MAX_TILE, newTile.value);
    grid.randomEmptyCell().tile = newTile;
    _main.maxtile.innerHTML = `Max tile: ${MAX_TILE}`;
    return grid;
};
const determineTouchDirection = ()=>{
    /* Distance in X direction */ const distanceX = _main.touches[0][1] - _main.touches[0][0];
    /* Distance in Y direction */ const distanceY = _main.touches[1][1] - _main.touches[1][0];
    /* if Y distance is bigger than X distance, then vertical direction */ if (Math.abs(distanceX) > Math.abs(distanceY)) {
        if (distanceX > 0) return "ArrowRight";
        else return "ArrowLeft";
    } else {
        if (distanceY > 0) return "ArrowDown";
        else return "ArrowUp";
    }
};
const handlerInput = async (e)=>{
    let direction;
    if (typeof e == "object") direction = e.key;
    else if (typeof e == "string") direction = e;
    switch(direction){
        case "ArrowUp":
            if (!canMoveUp()) {
                _main.setupInput();
                return;
            }
            await moveUp();
            break;
        case "ArrowDown":
            if (!canMoveDown()) {
                _main.setupInput();
                return;
            }
            await moveDown();
            break;
        case "ArrowLeft":
            if (!canMoveLeft()) {
                _main.setupInput();
                return;
            }
            await moveLeft();
            break;
        case "ArrowRight":
            if (!canMoveRight()) {
                _main.setupInput();
                return;
            }
            await moveRight();
            break;
        default:
            _main.setupInput();
            return;
    }
    grid.cells.forEach((cell)=>{
        let newMax = cell.mergeTiles(MAX_TILE);
        if (typeof newMax == "number") MAX_TILE = newMax;
    });
    if (!_main.endGameBoard.classList.contains(_main.hiddenClass)) {
        _endgameHandlerJs.endGameScoreUpdate();
        return;
    }
    const newTile = new _tileJsDefault.default(_main.gameBoard);
    MAX_TILE = Math.max(MAX_TILE, newTile.value);
    _main.maxtile.innerHTML = `Max tile: ${MAX_TILE}`;
    grid.randomEmptyCell().tile = newTile;
    _main.touches[0].length = 0;
    _main.touches[1].length = 1;
    if (!canMoveUp() && !canMoveDown() && !canMoveLeft() && !canMoveRight()) newTile.waitForTransition(true).then(()=>{
        _endgameHandlerJs.endGame(false);
    });
    else _main.setupInput();
};
const moveUp = ()=>{
    slideTiles(grid.cellsByColumn);
};
const moveLeft = ()=>{
    slideTiles(grid.cellsByRow);
};
const moveDown = ()=>{
    slideTiles(grid.cellsByColumn.map((column)=>[
            ...column
        ].reverse()
    ));
};
const moveRight = ()=>{
    slideTiles(grid.cellsByRow.map((row)=>[
            ...row
        ].reverse()
    ));
};
const slideTiles = (cells)=>{
    return Promise.all(cells.flatMap((group)=>{
        const promises = [];
        for(let i = 1; i < group.length; i++){
            const cell = group[i];
            if (cell.tile == null) continue;
            let lastValidCell;
            for(let j = i - 1; j >= 0; j--){
                const moveToCell = group[j];
                if (!moveToCell.canAccept(cell.tile)) break;
                lastValidCell = moveToCell;
            }
            if (lastValidCell != null) {
                promises.push(cell.tile.waitForTransition());
                if (lastValidCell.tile != null) lastValidCell.mergeTile = cell.tile;
                else lastValidCell.tile = cell.tile;
                cell.tile = null;
            }
        }
        return promises;
    }));
};
const canMoveUp = ()=>{
    return canMove(grid.cellsByColumn);
};
const canMoveDown = ()=>{
    return canMove(grid.cellsByColumn.map((column)=>[
            ...column
        ].reverse()
    ));
};
const canMoveLeft = ()=>{
    return canMove(grid.cellsByRow);
};
const canMoveRight = ()=>{
    return canMove(grid.cellsByRow.map((row)=>[
            ...row
        ].reverse()
    ));
};
const canMove = (cells)=>{
    return cells.some((group)=>{
        return group.some((cell, index)=>{
            if (index == 0) return false;
            if (cell.tile == null) return false;
            const moveToCell = group[index - 1];
            return moveToCell.canAccept(cell.tile);
        });
    });
};

},{"./main":"1SICI","./Grid.js":"irQ6N","./Tile.js":"kElux","./EndgameHandler.js":"9H4G8","./Cell.js":"6LzwN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kElux":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _main = require("./main");
const tileColors = [
    '#a7d0cd',
    '#b8c0b8',
    '#bfb2a7',
    '#c1a49a',
    '#bf988f',
    '#b98c86',
    '#b18180',
    '#a7787c',
    '#9a6f7a',
    '#8c6779',
    '#7b6079'
];
class Tile {
    #tileElement;
    #x;
    #y;
    #value;
    constructor(tileContainer, value = Math.random() > 0.5 ? _main.baseNumber : _main.baseNumber * 2){
        this.#tileElement = document.createElement("div");
        this.#tileElement.classList.add("tile");
        this.#tileElement.setAttribute("id", "tile");
        tileContainer.append(this.#tileElement);
        this.value = value;
    }
    set x(position) {
        this.#x = position;
        this.#tileElement.style.setProperty("--x", position);
    }
    set y(position) {
        this.#y = position;
        this.#tileElement.style.setProperty("--y", position);
    }
    get value() {
        return this.#value;
    }
    set value(v) {
        this.#value = v;
        this.#tileElement.textContent = v;
        const power = Math.log2(v);
        let index = Math.floor(power);
        if (_main.baseNumber == 2 || _main.baseNumber == 3) index = index - 1;
        else if (_main.baseNumber >= 3 && _main.baseNumber <= 7) index = index - 2;
        else if (_main.baseNumber >= 8) index = index - 3;
        this.#tileElement.style.setProperty("background-color", tileColors[index]);
        if (index >= 8) this.#tileElement.style.setProperty("color", "#F5F5F5");
        if (_main.gridSize == 3) {
            this.#tileElement.style.setProperty("border-radius", "8vmin");
            this.#tileElement.style.setProperty("font-size", "6vmin");
        } else if (_main.gridSize == 4) {
            this.#tileElement.style.setProperty("border-radius", "6vmin");
            this.#tileElement.style.setProperty("font-size", "5vmin");
        } else if (_main.gridSize == 5) {
            this.#tileElement.style.setProperty("border-radius", "5vmin");
            this.#tileElement.style.setProperty("font-size", "4vmin");
        }
    }
    remove() {
        this.#tileElement.remove();
    }
    waitForTransition(animation = false) {
        return new Promise((resolve)=>{
            this.#tileElement.addEventListener(animation ? "animationend" : "transitionend", resolve, {
                once: true
            });
        });
    }
}
exports.default = Tile;

},{"./main":"1SICI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8wGYB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setRangeBubble", ()=>setRangeBubble
);
parcelHelpers.export(exports, "toggleSettingBoard", ()=>toggleSettingBoard
);
var _main = require("./main");
const setRangeBubble = ()=>{
    _main.bubble.innerHTML = _main.rangeInput.value;
    const calcPositionX = _main.rangeInput.offsetWidth / 10 * _main.rangeInput.value - _main.rangeInput.offsetWidth / 10 + 4;
    _main.bubble.style.left = `${calcPositionX}px`;
};
const toggleSettingBoard = ()=>{
    _main.settingsBoard.classList.toggle(_main.hiddenClass);
    _main.tapToStart.classList.toggle(_main.hiddenClass);
    _main.openSettingsButton.classList.toggle(_main.hiddenClass);
};

},{"./main":"1SICI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j5nYQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "toggleDarkMode", ()=>toggleDarkMode
);
var _main = require("./main");
const toggleDarkMode = ()=>{
    _main.body.classList.toggle(_main.backgroundDM);
    _main.nav.classList.toggle(_main.textDM);
    _main.gameBoard.classList.toggle(_main.elevation1DM);
    _main.starterBoard.classList.toggle(_main.textDM);
    _main.settingsBoard.classList.toggle(_main.elevation1DM);
    _main.settingsBoard.classList.toggle(_main.textDM);
    _main.openSettingsButton.classList.toggle(_main.textDM);
    _main.endGameBoard.classList.toggle(_main.elevation2DM);
    _main.endGameBoard.classList.toggle(_main.textDM);
    _main.endgameButton.classList.toggle(_main.elevation2DM);
    _main.endgameButton.classList.toggle(_main.textDM);
};

},{"./main":"1SICI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["g9TDx","1SICI"], "1SICI", "parcelRequire7b01")

//# sourceMappingURL=index.18dbc454.js.map
