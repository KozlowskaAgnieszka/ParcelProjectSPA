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
})({"j9r0q":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "ba60c367739bf03c";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
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
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"ebWYT":[function(require,module,exports) {
var _mainScss = require("../styles/main.scss");
var _footerScss = require("../styles/footer.scss");
var _buttonsScss = require("../styles/buttons.scss");
var _home = require("./views/Home/Home");
var _header = require("./navigation/Header/Header");
const main = document.querySelector("main");
main.before((0, _header.Header)());
document.body.addEventListener("navigate", (event)=>{
    const Component = event.detail;
    main.innerHTML = "";
    main.append(Component());
});
localStorage.setItem("dates", JSON.stringify({
    totalDays: 0
}));
localStorage.setItem("cart", JSON.stringify({}));
main.append((0, _home.Home)());

},{"../styles/main.scss":"bo7w8","../styles/footer.scss":"bsbIO","../styles/buttons.scss":"337Pj","./views/Home/Home":"aRd5g","./navigation/Header/Header":"iyWr4"}],"bo7w8":[function() {},{}],"bsbIO":[function() {},{}],"337Pj":[function() {},{}],"aRd5g":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Home", ()=>Home);
var _homeScss = require("./styles/home.scss");
var _logWindow = require("./LogIn/LogWindow");
var _showLogWindowBtn = require("./buttons/ShowLogWindowBtn");
var _bookOnlineBtn = require("./buttons/BookOnlineBtn");
var _datePicker = require("../../commons/datePicker/datePicker");
function Home() {
    // Set class for Home's header & main
    const header = document.querySelector(".header_nav");
    header.setAttribute("class", "header_nav home_header");
    const main = document.querySelector("main");
    main.setAttribute("class", "home");
    // Hero image
    const section = document.createElement("section");
    section.setAttribute("class", "home_hero");
    const Content = document.createElement("div");
    Content.setAttribute("class", "home_hero_content");
    // Logo section
    const Logo = document.createElement("section");
    const src = new URL(require("477ab17bc0152c4d"));
    Logo.innerHTML = `
  <img src="${src} alt="Lotus logo" class="home_hero_content_lotus"/>
  <h1 class="home_hero_content_text">Lotus<br>SPA</h1>
  `;
    // Book online section
    const bookOnline = document.createElement("section");
    bookOnline.innerHTML = `<input type="text" placeholder="Choose your dates..." id="callendar" class="home_callendar">
    <section class="home_buttons"></section>
    `;
    bookOnline.lastElementChild.append((0, _bookOnlineBtn.BookOnlineBtn)(), (0, _showLogWindowBtn.ShowLogWindowBtn)());
    Content.append(Logo, bookOnline);
    section.append(Content, (0, _logWindow.LogWindow)());
    (0, _datePicker.DatePicker)(bookOnline);
    return section;
}

},{"./styles/home.scss":"S5Djr","./LogIn/LogWindow":"kRrni","./buttons/ShowLogWindowBtn":"ctCCa","./buttons/BookOnlineBtn":"lU2io","../../commons/datePicker/datePicker":"1xHzm","477ab17bc0152c4d":"iRqXa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"S5Djr":[function() {},{}],"kRrni":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LogWindow", ()=>LogWindow);
var _logUserScss = require("../styles/log-user.scss");
var _logWindowBtn = require("../buttons/LogWindowBtn");
var _closeLogWindow = require("./closeLogWindow");
var _userManager = require("../../../../data-managers/user-manager");
function LogWindow() {
    const logSection = document.createElement("section");
    logSection.setAttribute("id", "log");
    logSection.innerHTML = `
  <div id="log_backdrop"></div>
  <div class="log_window" id="add-window">
    <div class='log_window_content'>
    <label for="login">email:</label>
    <input type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" id="login" name="login" required>
    <label for="password">password:</label>
    <input type="password" id="password" name="password">
    </div>
    <div class="log_window_button"></div>
    <div class="log_window_create-account-btn">
      <p>Create account</p>
    </div>
    <div id="log-message"></div>
  </div>
  `;
    const logBackdrop = logSection.firstElementChild;
    const logWindow = logSection.lastElementChild;
    const logInBtn = logSection.lastElementChild.children[1];
    const createAccountBtn = logSection.lastElementChild.children[2].firstElementChild;
    createAccountBtn.addEventListener("click", (0, _userManager.userManager).createUser);
    logBackdrop.addEventListener("click", (0, _closeLogWindow.logSectionClickHandler));
    logInBtn.append((0, _logWindowBtn.LogWindowBtn)());
    const logInput = logWindow.querySelector("#login");
    logInput.addEventListener("keydown", (event)=>{
        loginOnEnter(event);
    });
    const passwordInput = logWindow.querySelector("#password");
    passwordInput.addEventListener("keydown", (event)=>{
        loginOnEnter(event);
    });
    const loginOnEnter = (event)=>{
        if (passwordInput.value !== "" && logInput.value !== "" && event.which === 13) (0, _userManager.userManager).logUser();
    };
    return logSection;
}

},{"../styles/log-user.scss":"2qvMb","../buttons/LogWindowBtn":"6lJE3","./closeLogWindow":"8iVVZ","../../../../data-managers/user-manager":"f64Gd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2qvMb":[function() {},{}],"6lJE3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LogWindowBtn", ()=>LogWindowBtn);
var _userManager = require("../../../../data-managers/user-manager");
function LogWindowBtn() {
    const button = document.createElement("button");
    const buttonAttributes = {
        type: "button",
        id: "log-window-btn"
    };
    for(const property in buttonAttributes)button.setAttribute(property, buttonAttributes[property]);
    const text = "Log in";
    button.innerText = text;
    button.addEventListener("click", (0, _userManager.userManager).logUser);
    return button;
}

},{"../../../../data-managers/user-manager":"f64Gd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f64Gd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "userManager", ()=>userManager);
var _closeLogWindow = require("../js/views/Home/LogIn/closeLogWindow");
const userManager = {
    logUser () {
        const userName = document.getElementById("login");
        const userPassword = document.getElementById("password");
        fetch("http://localhost:3000/users").then((response)=>response.json()).then((users)=>{
            const user = Object.values(users);
            const logoutButton = document.querySelector("#logout-btn");
            const msg = document.querySelector("#log-message");
            let message = "";
            const usersLogins = user.map((userLogin)=>userLogin.name);
            if (!usersLogins.includes(userName.value)) {
                message = "No such user";
                msg.innerHTML = `<p>${message}</p>`;
                msg.classList.add("visible");
                return;
            }
            for (const usr of user){
                if (usr.name === userName.value && usr.password === userPassword.value) {
                    message = "You have successfully logged in.";
                    msg.innerHTML = `<p>${message}</p>`;
                    msg.classList.add("visible");
                    logoutButton.classList.add("visible");
                    const loggedUser = localStorage.getItem(users);
                    let content;
                    if (loggedUser === null) content = {
                        userName: usr.name
                    };
                    else {
                        content = JSON.parse(loggedUser);
                        content.userName = usr.name;
                    }
                    localStorage.setItem("users", JSON.stringify(content));
                    const loginButton = document.querySelector("#show-log-window-btn");
                    loginButton.classList.add("hide");
                    setTimeout((0, _closeLogWindow.logSectionClickHandler), 1000);
                    return;
                } else if (usr.name === userName.value && usr.password !== userPassword.value) {
                    message = "Invalid login or password.";
                    msg.innerHTML = `<p>${message}</p>`;
                    msg.classList.add("visible");
                    return;
                }
            }
        });
    },
    createUser () {
        fetch("http://localhost:3000/users").then((response)=>response.json()).then((users)=>{
            const userName = document.getElementById("login");
            const userPassword = document.getElementById("password");
            const msg = document.querySelector("#log-message");
            let message = "";
            const user = Object.values(users);
            const usersLogins = user.map((userLogin)=>userLogin.name);
            if (!usersLogins.includes(userName.value) && userName.value !== "" && userPassword.value !== "") {
                fetch("http://localhost:3000/users", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        id: userName.value,
                        name: userName.value,
                        password: userPassword.value
                    })
                }).then((response)=>response.json()).then(()=>{
                    const createAccountBtn = document.querySelector(".log_window_create-account-btn");
                    createAccountBtn.parentNode.removeChild(createAccountBtn);
                    message = "New user was created. You can now log in.";
                    msg.innerHTML = `<p>${message}</p>`;
                    msg.classList.add("visible");
                });
                return;
            }
        });
    },
    logoutUser () {
        localStorage.removeItem("users");
        const logoutButton = document.querySelector("#logout-btn");
        logoutButton.classList.remove("visible");
        const loginButton = document.querySelector("#show-log-window-btn");
        loginButton.classList.remove("hide");
    }
};

},{"../js/views/Home/LogIn/closeLogWindow":"8iVVZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8iVVZ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "logSectionClickHandler", ()=>logSectionClickHandler);
function logSectionClickHandler() {
    const logWindow = document.querySelector("#add-window");
    logWindow.setAttribute("class", "log_window");
    const userName = document.getElementById("login");
    const userPassword = document.getElementById("password");
    const msg = document.querySelector("#log-message");
    userName.value = "";
    userPassword.value = "";
    msg.classList.remove("visible");
    const logBackdrop = document.querySelector("#log_backdrop");
    logBackdrop.classList.remove("visible");
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
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

},{}],"ctCCa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ShowLogWindowBtn", ()=>ShowLogWindowBtn);
function ShowLogWindowBtn() {
    const button = document.createElement("button");
    const buttonAttributes = {
        type: "button",
        id: "show-log-window-btn"
    };
    for(const property in buttonAttributes)button.setAttribute(property, buttonAttributes[property]);
    if (localStorage.getItem("users")) button.classList.add("hide");
    const text = "Log in";
    button.innerText = text;
    const toggleLogSection = ()=>{
        const logSection = document.querySelector("#log_backdrop");
        logSection.classList.toggle("visible");
    };
    const showLogWindow = ()=>{
        const logWindow = document.getElementById("add-window");
        logWindow.classList.toggle("visible");
        toggleLogSection();
    };
    button.addEventListener("click", showLogWindow);
    return button;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lU2io":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BookOnlineBtn", ()=>BookOnlineBtn);
var _roomList = require("../../RoomList/RoomList");
function BookOnlineBtn() {
    const button = document.createElement("button");
    const buttonAttributes = {
        type: "button",
        id: "book-btn"
    };
    for(const property in buttonAttributes)button.setAttribute(property, buttonAttributes[property]);
    const text = "Book online";
    button.innerText = text;
    button.addEventListener("click", ()=>{
        const navigationEvent = new CustomEvent("navigate", {
            detail: (0, _roomList.RoomList)
        });
        document.body.dispatchEvent(navigationEvent);
    });
    return button;
}

},{"../../RoomList/RoomList":"7ezq4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7ezq4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RoomList", ()=>RoomList);
var _roomListScss = require("./styles/room-list.scss");
var _roomDetails = require("../RoomDetails/RoomDetails");
var _readMoreBtn = require("./buttons/ReadMoreBtn");
var _stayDate = require("../../commons/stayDate/stayDate");
var _addToCartBtn = require("../../commons/addToCartBtn/addToCartBtn");
var _imageHandler = require("../../commons/imageHandler");
function RoomList() {
    const header = document.querySelector(".header_nav");
    header.setAttribute("class", "header_nav");
    const main = document.querySelector("main");
    main.setAttribute("class", "rooms");
    const section = document.createElement("section");
    // Header
    const h1 = document.createElement("h1");
    h1.innerText = "Rooms";
    // Rooms listing
    const roomsList = document.createElement("ul");
    roomsList.setAttribute("class", "rooms_list");
    fetch("http://localhost:3000/rooms").then((response)=>response.json()).then((rooms)=>{
        const list = rooms.map((room)=>{
            const roomItem = document.createElement("li");
            roomItem.setAttribute("class", "rooms_roomItem");
            const src = (0, _imageHandler.ImageHandler)(room.photo);
            const roomPhoto = document.createElement("div");
            roomPhoto.setAttribute("class", "rooms_roomItem_photo");
            roomPhoto.innerHTML = `
        <img src="${src} alt="${room.name}"/>
        `;
            const roomName = document.createElement("h2");
            roomName.setAttribute("class", "rooms_roomItem_name");
            roomName.innerHTML = ` ${room.name}`;
            const roomFooter = document.createElement("div");
            roomFooter.setAttribute("class", "rooms_roomItem_footer");
            roomFooter.innerHTML = `
          <p class="rooms_list_footer_price">
            Price: <span>${room.price.toFixed(2)}&nbsp;$</span>
          </p>`;
            const buttons = document.createElement("div");
            buttons.setAttribute("class", "rooms_roomItem_footer_buttons");
            const goToRoomDetails = ()=>(0, _roomDetails.RoomDetails)(room.id);
            buttons.append((0, _readMoreBtn.ReadMoreBtn)(goToRoomDetails), (0, _addToCartBtn.AddToCartBtn)(room));
            roomFooter.append(buttons);
            roomItem.append(roomPhoto, roomName, roomFooter);
            return roomItem;
        });
        roomsList.append(...list);
    });
    section.append(h1, (0, _stayDate.StayDate)(), roomsList);
    return section;
}

},{"./styles/room-list.scss":"3IIhH","../RoomDetails/RoomDetails":"huUrE","./buttons/ReadMoreBtn":"68wBN","../../commons/stayDate/stayDate":"1F66s","../../commons/addToCartBtn/addToCartBtn":"67gtA","../../commons/imageHandler":"53Pqd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3IIhH":[function() {},{}],"huUrE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RoomDetails", ()=>RoomDetails);
var _roomDetailsScss = require("./styles/room-details.scss");
var _backBtn = require("./buttons/BackBtn");
var _stayDate = require("../../commons/stayDate/stayDate");
var _addToCartBtn = require("../../commons/addToCartBtn/addToCartBtn");
var _imageHandler = require("../../commons/imageHandler");
function RoomDetails(roomId) {
    const header = document.querySelector(".header_nav");
    header.setAttribute("class", "header_nav");
    const main = document.querySelector("main");
    main.setAttribute("class", "room");
    const section = document.createElement("section");
    section.setAttribute("class", "room_section");
    fetch(`http://localhost:3000/rooms/${roomId}`).then((response)=>response.json()).then((room)=>{
        const roomPhoto = document.createElement("div");
        roomPhoto.setAttribute("class", "room_photo");
        const src = (0, _imageHandler.ImageHandler)(room.photo);
        roomPhoto.innerHTML = `<img src="${src} alt="${room.name}"/>`;
        const roomDescription = document.createElement("div");
        roomDescription.setAttribute("class", "room_description");
        roomDescription.innerHTML = `
        <h1>${room.name}</h1>
        <ul class="room_description_details">
          <li>Price: <span>${room.price.toFixed(2)} $</span></li>
          <li>Guests: <span>${room.guests}</span></li>
          <li>Beds: <span>${room.beds}</span></li>
        </ul>
        <p class="room_description_text">${room.description}</p>
        <div class="room_description_buttons"></div>
      `;
        roomDescription.lastElementChild.append((0, _backBtn.BackBtn)(), (0, _stayDate.StayDate)(), (0, _addToCartBtn.AddToCartBtn)(room));
        section.append(roomPhoto, roomDescription);
    });
    return section;
}

},{"./styles/room-details.scss":"3op6v","./buttons/BackBtn":"lq3p1","../../commons/stayDate/stayDate":"1F66s","../../commons/addToCartBtn/addToCartBtn":"67gtA","../../commons/imageHandler":"53Pqd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3op6v":[function() {},{}],"lq3p1":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BackBtn", ()=>BackBtn);
var _roomList = require("../../RoomList/RoomList");
function BackBtn() {
    const backIcon = document.createElement("img");
    backIcon.src = new URL(require("fe9fe5b24a975e94"));
    const iconAttributes = {
        alt: "Back icon",
        id: "back-icon"
    };
    for(const property in iconAttributes)backIcon.setAttribute(property, iconAttributes[property]);
    backIcon.addEventListener("click", ()=>{
        const navigationEvent = new CustomEvent("navigate", {
            detail: (0, _roomList.RoomList)
        });
        document.body.dispatchEvent(navigationEvent);
    });
    return backIcon;
}

},{"../../RoomList/RoomList":"7ezq4","fe9fe5b24a975e94":"bT2JC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bT2JC":[function(require,module,exports) {
module.exports = require("ca34d9dcdcca0e96").getBundleURL("g05j8") + "back.dc076f5d.svg" + "?" + Date.now();

},{"ca34d9dcdcca0e96":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"1F66s":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "StayDate", ()=>StayDate);
var _stayDateScss = require("./styles/stayDate.scss");
var _datePicker = require("../datePicker/datePicker");
function StayDate() {
    const stayDate = document.createElement("div");
    stayDate.setAttribute("class", "stay");
    stayDate.innerHTML = `
<label for="callendar" class="subpages-callendar_label">Your stay:</label>
<input 
    type="text" 
    placeholder="Choose your dates..." 
    id="callendar"
    class = "subpages-callendar" 
  >`;
    (0, _datePicker.DatePicker)(stayDate);
    return stayDate;
}

},{"./styles/stayDate.scss":"8xpCd","../datePicker/datePicker":"1xHzm","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8xpCd":[function() {},{}],"1xHzm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DatePicker", ()=>DatePicker);
var _datepickerScss = require("./styles/datepicker.scss");
var _litepicker = require("litepicker");
var _litepickerDefault = parcelHelpers.interopDefault(_litepicker);
var _dateManager = require("../../../data-managers/date-manager");
function DatePicker(target) {
    const picker = new (0, _litepickerDefault.default)({
        element: target.querySelector("#callendar"),
        autoApply: true,
        allowRepick: true,
        autoRefresh: true,
        position: "top",
        resetButton: false,
        singleMode: false,
        format: "DD MMM YY",
        maxDays: 365,
        minDate: Date.now(),
        minDays: 2,
        showTooltip: true,
        numberOfColumns: 2,
        numberOfMonths: 2,
        setup: (picker)=>{
            picker.on("selected", (date1, date2)=>{
                (0, _dateManager.dateManager).addDate(date1, date2);
            });
        }
    });
    const arriveDate = (0, _dateManager.dateManager).getDates();
    const [startDate, endDate] = arriveDate;
    if (startDate && endDate !== "Invalid Date") picker.setDateRange(startDate, endDate);
    return picker;
}

},{"./styles/datepicker.scss":"f5WJq","litepicker":"2Ci7x","../../../data-managers/date-manager":"2J54M","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f5WJq":[function() {},{}],"2Ci7x":[function(require,module,exports) {
/*!
 * 
 * litepicker.umd.js
 * Litepicker v2.0.12 (https://github.com/wakirin/Litepicker)
 * Package: litepicker (https://www.npmjs.com/package/litepicker)
 * License: MIT (https://github.com/wakirin/Litepicker/blob/master/LICENCE.md)
 * Copyright 2019-2021 Rinat G.
 *     
 * Hash: 504eef9c08cb42543660
 * 
 */ !function(t, e) {
    module.exports = e();
}(window, function() {
    return function(t) {
        var e = {};
        function i(n) {
            if (e[n]) return e[n].exports;
            var o = e[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return t[n].call(o.exports, o, o.exports, i), o.l = !0, o.exports;
        }
        return i.m = t, i.c = e, i.d = function(t, e, n) {
            i.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: n
            });
        }, i.r = function(t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            });
        }, i.t = function(t, e) {
            if (1 & e && (t = i(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var n = Object.create(null);
            if (i.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t) for(var o in t)i.d(n, o, (function(e) {
                return t[e];
            }).bind(null, o));
            return n;
        }, i.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t.default;
            } : function() {
                return t;
            };
            return i.d(e, "a", e), e;
        }, i.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
        }, i.p = "", i(i.s = 4);
    }([
        function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = function() {
                function t(e, i, n) {
                    void 0 === e && (e = null), void 0 === i && (i = null), void 0 === n && (n = "en-US"), this.dateInstance = "object" == typeof i && null !== i ? i.parse(e instanceof t ? e.clone().toJSDate() : e) : "string" == typeof i ? t.parseDateTime(e, i, n) : e ? t.parseDateTime(e) : t.parseDateTime(new Date), this.lang = n;
                }
                return t.parseDateTime = function(e, i, n) {
                    if (void 0 === i && (i = "YYYY-MM-DD"), void 0 === n && (n = "en-US"), !e) return new Date(NaN);
                    if (e instanceof Date) return new Date(e);
                    if (e instanceof t) return e.clone().toJSDate();
                    if (/^-?\d{10,}$/.test(e)) return t.getDateZeroTime(new Date(Number(e)));
                    if ("string" == typeof e) {
                        for(var o = [], s = null; null != (s = t.regex.exec(i));)"\\" !== s[1] && o.push(s);
                        if (o.length) {
                            var r = {
                                year: null,
                                month: null,
                                shortMonth: null,
                                longMonth: null,
                                day: null,
                                value: ""
                            };
                            o[0].index > 0 && (r.value += ".*?");
                            for(var a = 0, l = Object.entries(o); a < l.length; a++){
                                var c = l[a], h = c[0], p = c[1], d = Number(h), u = t.formatPatterns(p[0], n), m = u.group, f = u.pattern;
                                r[m] = d + 1, r.value += f, r.value += ".*?";
                            }
                            var g = new RegExp("^" + r.value + "$");
                            if (g.test(e)) {
                                var v = g.exec(e), y = Number(v[r.year]), b = null;
                                r.month ? b = Number(v[r.month]) - 1 : r.shortMonth ? b = t.shortMonths(n).indexOf(v[r.shortMonth]) : r.longMonth && (b = t.longMonths(n).indexOf(v[r.longMonth]));
                                var k = Number(v[r.day]) || 1;
                                return new Date(y, b, k, 0, 0, 0, 0);
                            }
                        }
                    }
                    return t.getDateZeroTime(new Date(e));
                }, t.convertArray = function(e, i) {
                    return e.map(function(e) {
                        return e instanceof Array ? e.map(function(e) {
                            return new t(e, i);
                        }) : new t(e, i);
                    });
                }, t.getDateZeroTime = function(t) {
                    return new Date(t.getFullYear(), t.getMonth(), t.getDate(), 0, 0, 0, 0);
                }, t.shortMonths = function(e) {
                    return t.MONTH_JS.map(function(t) {
                        return new Date(2019, t).toLocaleString(e, {
                            month: "short"
                        });
                    });
                }, t.longMonths = function(e) {
                    return t.MONTH_JS.map(function(t) {
                        return new Date(2019, t).toLocaleString(e, {
                            month: "long"
                        });
                    });
                }, t.formatPatterns = function(e, i) {
                    switch(e){
                        case "YY":
                        case "YYYY":
                            return {
                                group: "year",
                                pattern: "(\\d{" + e.length + "})"
                            };
                        case "M":
                            return {
                                group: "month",
                                pattern: "(\\d{1,2})"
                            };
                        case "MM":
                            return {
                                group: "month",
                                pattern: "(\\d{2})"
                            };
                        case "MMM":
                            return {
                                group: "shortMonth",
                                pattern: "(" + t.shortMonths(i).join("|") + ")"
                            };
                        case "MMMM":
                            return {
                                group: "longMonth",
                                pattern: "(" + t.longMonths(i).join("|") + ")"
                            };
                        case "D":
                            return {
                                group: "day",
                                pattern: "(\\d{1,2})"
                            };
                        case "DD":
                            return {
                                group: "day",
                                pattern: "(\\d{2})"
                            };
                    }
                }, t.prototype.toJSDate = function() {
                    return this.dateInstance;
                }, t.prototype.toLocaleString = function(t, e) {
                    return this.dateInstance.toLocaleString(t, e);
                }, t.prototype.toDateString = function() {
                    return this.dateInstance.toDateString();
                }, t.prototype.getSeconds = function() {
                    return this.dateInstance.getSeconds();
                }, t.prototype.getDay = function() {
                    return this.dateInstance.getDay();
                }, t.prototype.getTime = function() {
                    return this.dateInstance.getTime();
                }, t.prototype.getDate = function() {
                    return this.dateInstance.getDate();
                }, t.prototype.getMonth = function() {
                    return this.dateInstance.getMonth();
                }, t.prototype.getFullYear = function() {
                    return this.dateInstance.getFullYear();
                }, t.prototype.setMonth = function(t) {
                    return this.dateInstance.setMonth(t);
                }, t.prototype.setHours = function(t, e, i, n) {
                    void 0 === t && (t = 0), void 0 === e && (e = 0), void 0 === i && (i = 0), void 0 === n && (n = 0), this.dateInstance.setHours(t, e, i, n);
                }, t.prototype.setSeconds = function(t) {
                    return this.dateInstance.setSeconds(t);
                }, t.prototype.setDate = function(t) {
                    return this.dateInstance.setDate(t);
                }, t.prototype.setFullYear = function(t) {
                    return this.dateInstance.setFullYear(t);
                }, t.prototype.getWeek = function(t) {
                    var e = new Date(this.timestamp()), i = (this.getDay() + (7 - t)) % 7;
                    e.setDate(e.getDate() - i);
                    var n = e.getTime();
                    return e.setMonth(0, 1), e.getDay() !== t && e.setMonth(0, 1 + (4 - e.getDay() + 7) % 7), 1 + Math.ceil((n - e.getTime()) / 6048e5);
                }, t.prototype.clone = function() {
                    return new t(this.toJSDate());
                }, t.prototype.isBetween = function(t, e, i) {
                    switch(void 0 === i && (i = "()"), i){
                        default:
                        case "()":
                            return this.timestamp() > t.getTime() && this.timestamp() < e.getTime();
                        case "[)":
                            return this.timestamp() >= t.getTime() && this.timestamp() < e.getTime();
                        case "(]":
                            return this.timestamp() > t.getTime() && this.timestamp() <= e.getTime();
                        case "[]":
                            return this.timestamp() >= t.getTime() && this.timestamp() <= e.getTime();
                    }
                }, t.prototype.isBefore = function(t, e) {
                    switch(void 0 === e && (e = "seconds"), e){
                        case "second":
                        case "seconds":
                            return t.getTime() > this.getTime();
                        case "day":
                        case "days":
                            return new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() > new Date(this.getFullYear(), this.getMonth(), this.getDate()).getTime();
                        case "month":
                        case "months":
                            return new Date(t.getFullYear(), t.getMonth(), 1).getTime() > new Date(this.getFullYear(), this.getMonth(), 1).getTime();
                        case "year":
                        case "years":
                            return t.getFullYear() > this.getFullYear();
                    }
                    throw new Error("isBefore: Invalid unit!");
                }, t.prototype.isSameOrBefore = function(t, e) {
                    switch(void 0 === e && (e = "seconds"), e){
                        case "second":
                        case "seconds":
                            return t.getTime() >= this.getTime();
                        case "day":
                        case "days":
                            return new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() >= new Date(this.getFullYear(), this.getMonth(), this.getDate()).getTime();
                        case "month":
                        case "months":
                            return new Date(t.getFullYear(), t.getMonth(), 1).getTime() >= new Date(this.getFullYear(), this.getMonth(), 1).getTime();
                    }
                    throw new Error("isSameOrBefore: Invalid unit!");
                }, t.prototype.isAfter = function(t, e) {
                    switch(void 0 === e && (e = "seconds"), e){
                        case "second":
                        case "seconds":
                            return this.getTime() > t.getTime();
                        case "day":
                        case "days":
                            return new Date(this.getFullYear(), this.getMonth(), this.getDate()).getTime() > new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime();
                        case "month":
                        case "months":
                            return new Date(this.getFullYear(), this.getMonth(), 1).getTime() > new Date(t.getFullYear(), t.getMonth(), 1).getTime();
                        case "year":
                        case "years":
                            return this.getFullYear() > t.getFullYear();
                    }
                    throw new Error("isAfter: Invalid unit!");
                }, t.prototype.isSameOrAfter = function(t, e) {
                    switch(void 0 === e && (e = "seconds"), e){
                        case "second":
                        case "seconds":
                            return this.getTime() >= t.getTime();
                        case "day":
                        case "days":
                            return new Date(this.getFullYear(), this.getMonth(), this.getDate()).getTime() >= new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime();
                        case "month":
                        case "months":
                            return new Date(this.getFullYear(), this.getMonth(), 1).getTime() >= new Date(t.getFullYear(), t.getMonth(), 1).getTime();
                    }
                    throw new Error("isSameOrAfter: Invalid unit!");
                }, t.prototype.isSame = function(t, e) {
                    switch(void 0 === e && (e = "seconds"), e){
                        case "second":
                        case "seconds":
                            return this.getTime() === t.getTime();
                        case "day":
                        case "days":
                            return new Date(this.getFullYear(), this.getMonth(), this.getDate()).getTime() === new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime();
                        case "month":
                        case "months":
                            return new Date(this.getFullYear(), this.getMonth(), 1).getTime() === new Date(t.getFullYear(), t.getMonth(), 1).getTime();
                    }
                    throw new Error("isSame: Invalid unit!");
                }, t.prototype.add = function(t, e) {
                    switch(void 0 === e && (e = "seconds"), e){
                        case "second":
                        case "seconds":
                            this.setSeconds(this.getSeconds() + t);
                            break;
                        case "day":
                        case "days":
                            this.setDate(this.getDate() + t);
                            break;
                        case "month":
                        case "months":
                            this.setMonth(this.getMonth() + t);
                    }
                    return this;
                }, t.prototype.subtract = function(t, e) {
                    switch(void 0 === e && (e = "seconds"), e){
                        case "second":
                        case "seconds":
                            this.setSeconds(this.getSeconds() - t);
                            break;
                        case "day":
                        case "days":
                            this.setDate(this.getDate() - t);
                            break;
                        case "month":
                        case "months":
                            this.setMonth(this.getMonth() - t);
                    }
                    return this;
                }, t.prototype.diff = function(t, e) {
                    void 0 === e && (e = "seconds");
                    switch(e){
                        default:
                        case "second":
                        case "seconds":
                            return this.getTime() - t.getTime();
                        case "day":
                        case "days":
                            return Math.round((this.timestamp() - t.getTime()) / 864e5);
                        case "month":
                        case "months":
                    }
                }, t.prototype.format = function(e, i) {
                    if (void 0 === i && (i = "en-US"), "object" == typeof e) return e.output(this.clone().toJSDate());
                    for(var n = "", o = [], s = null; null != (s = t.regex.exec(e));)"\\" !== s[1] && o.push(s);
                    if (o.length) {
                        o[0].index > 0 && (n += e.substring(0, o[0].index));
                        for(var r = 0, a = Object.entries(o); r < a.length; r++){
                            var l = a[r], c = l[0], h = l[1], p = Number(c);
                            n += this.formatTokens(h[0], i), o[p + 1] && (n += e.substring(h.index + h[0].length, o[p + 1].index)), p === o.length - 1 && (n += e.substring(h.index + h[0].length));
                        }
                    }
                    return n.replace(/\\/g, "");
                }, t.prototype.timestamp = function() {
                    return new Date(this.getFullYear(), this.getMonth(), this.getDate(), 0, 0, 0, 0).getTime();
                }, t.prototype.formatTokens = function(e, i) {
                    switch(e){
                        case "YY":
                            return String(this.getFullYear()).slice(-2);
                        case "YYYY":
                            return String(this.getFullYear());
                        case "M":
                            return String(this.getMonth() + 1);
                        case "MM":
                            return ("0" + (this.getMonth() + 1)).slice(-2);
                        case "MMM":
                            return t.shortMonths(i)[this.getMonth()];
                        case "MMMM":
                            return t.longMonths(i)[this.getMonth()];
                        case "D":
                            return String(this.getDate());
                        case "DD":
                            return ("0" + this.getDate()).slice(-2);
                        default:
                            return "";
                    }
                }, t.regex = /(\\)?(Y{2,4}|M{1,4}|D{1,2}|d{1,4})/g, t.MONTH_JS = [
                    0,
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9,
                    10,
                    11
                ], t;
            }();
            e.DateTime = n;
        },
        function(t, e, i) {
            "use strict";
            var n, o = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || ({
                    __proto__: []
                }) instanceof Array && function(t, e) {
                    t.__proto__ = e;
                } || function(t, e) {
                    for(var i in e)e.hasOwnProperty(i) && (t[i] = e[i]);
                })(t, e);
            }, function(t, e) {
                function i() {
                    this.constructor = t;
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i);
            }), s = this && this.__spreadArrays || function() {
                for(var t = 0, e = 0, i = arguments.length; e < i; e++)t += arguments[e].length;
                var n = Array(t), o = 0;
                for(e = 0; e < i; e++)for(var s = arguments[e], r = 0, a = s.length; r < a; r++, o++)n[o] = s[r];
                return n;
            };
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = i(5), a = i(0), l = i(3), c = i(2), h = function(t) {
                function e(e) {
                    var i = t.call(this, e) || this;
                    return i.preventClick = !1, i.bindEvents(), i;
                }
                return o(e, t), e.prototype.scrollToDate = function(t) {
                    if (this.options.scrollToDate) {
                        var e = this.options.startDate instanceof a.DateTime ? this.options.startDate.clone() : null, i = this.options.endDate instanceof a.DateTime ? this.options.endDate.clone() : null;
                        !this.options.startDate || t && t !== this.options.element ? t && this.options.endDate && t === this.options.elementEnd && (i.setDate(1), this.options.numberOfMonths > 1 && i.isAfter(e) && i.setMonth(i.getMonth() - (this.options.numberOfMonths - 1)), this.calendars[0] = i.clone()) : (e.setDate(1), this.calendars[0] = e.clone());
                    }
                }, e.prototype.bindEvents = function() {
                    document.addEventListener("click", this.onClick.bind(this), !0), this.ui = document.createElement("div"), this.ui.className = l.litepicker, this.ui.style.display = "none", this.ui.addEventListener("mouseenter", this.onMouseEnter.bind(this), !0), this.ui.addEventListener("mouseleave", this.onMouseLeave.bind(this), !1), this.options.autoRefresh ? (this.options.element instanceof HTMLElement && this.options.element.addEventListener("keyup", this.onInput.bind(this), !0), this.options.elementEnd instanceof HTMLElement && this.options.elementEnd.addEventListener("keyup", this.onInput.bind(this), !0)) : (this.options.element instanceof HTMLElement && this.options.element.addEventListener("change", this.onInput.bind(this), !0), this.options.elementEnd instanceof HTMLElement && this.options.elementEnd.addEventListener("change", this.onInput.bind(this), !0)), this.options.parentEl ? this.options.parentEl instanceof HTMLElement ? this.options.parentEl.appendChild(this.ui) : document.querySelector(this.options.parentEl).appendChild(this.ui) : this.options.inlineMode ? this.options.element instanceof HTMLInputElement ? this.options.element.parentNode.appendChild(this.ui) : this.options.element.appendChild(this.ui) : document.body.appendChild(this.ui), this.updateInput(), this.init(), "function" == typeof this.options.setup && this.options.setup.call(this, this), this.render(), this.options.inlineMode && this.show();
                }, e.prototype.updateInput = function() {
                    if (this.options.element instanceof HTMLInputElement) {
                        var t = this.options.startDate, e = this.options.endDate;
                        if (this.options.singleMode && t) this.options.element.value = t.format(this.options.format, this.options.lang);
                        else if (!this.options.singleMode && t && e) {
                            var i = t.format(this.options.format, this.options.lang), n = e.format(this.options.format, this.options.lang);
                            this.options.elementEnd instanceof HTMLInputElement ? (this.options.element.value = i, this.options.elementEnd.value = n) : this.options.element.value = "" + i + this.options.delimiter + n;
                        }
                        t || e || (this.options.element.value = "", this.options.elementEnd instanceof HTMLInputElement && (this.options.elementEnd.value = ""));
                    }
                }, e.prototype.isSamePicker = function(t) {
                    return t.closest("." + l.litepicker) === this.ui;
                }, e.prototype.shouldShown = function(t) {
                    return !t.disabled && (t === this.options.element || this.options.elementEnd && t === this.options.elementEnd);
                }, e.prototype.shouldResetDatePicked = function() {
                    return this.options.singleMode || 2 === this.datePicked.length;
                }, e.prototype.shouldSwapDatePicked = function() {
                    return 2 === this.datePicked.length && this.datePicked[0].getTime() > this.datePicked[1].getTime();
                }, e.prototype.shouldCheckLockDays = function() {
                    return this.options.disallowLockDaysInRange && 2 === this.datePicked.length;
                }, e.prototype.onClick = function(t) {
                    var e = t.target;
                    if (t.target.shadowRoot && (e = t.composedPath()[0]), e && this.ui) {
                        if (this.shouldShown(e)) this.show(e);
                        else if (e.closest("." + l.litepicker) || !this.isShowning()) {
                            if (this.isSamePicker(e)) {
                                if (this.emit("before:click", e), this.preventClick) this.preventClick = !1;
                                else {
                                    if (e.classList.contains(l.dayItem)) {
                                        if (t.preventDefault(), e.classList.contains(l.isLocked)) return;
                                        if (this.shouldResetDatePicked() && (this.datePicked.length = 0), this.datePicked[this.datePicked.length] = new a.DateTime(e.dataset.time), this.shouldSwapDatePicked()) {
                                            var i = this.datePicked[1].clone();
                                            this.datePicked[1] = this.datePicked[0].clone(), this.datePicked[0] = i.clone();
                                        }
                                        if (this.shouldCheckLockDays()) c.rangeIsLocked(this.datePicked, this.options) && (this.emit("error:range", this.datePicked), this.datePicked.length = 0);
                                        return this.render(), this.emit.apply(this, s([
                                            "preselect"
                                        ], s(this.datePicked).map(function(t) {
                                            return t.clone();
                                        }))), void (this.options.autoApply && (this.options.singleMode && this.datePicked.length ? (this.setDate(this.datePicked[0]), this.hide()) : this.options.singleMode || 2 !== this.datePicked.length || (this.setDateRange(this.datePicked[0], this.datePicked[1]), this.hide())));
                                    }
                                    if (e.classList.contains(l.buttonPreviousMonth)) {
                                        t.preventDefault();
                                        var n = 0, o = this.options.switchingMonths || this.options.numberOfMonths;
                                        if (this.options.splitView) {
                                            var r = e.closest("." + l.monthItem);
                                            n = c.findNestedMonthItem(r), o = 1;
                                        }
                                        return this.calendars[n].setMonth(this.calendars[n].getMonth() - o), this.gotoDate(this.calendars[n], n), void this.emit("change:month", this.calendars[n], n);
                                    }
                                    if (e.classList.contains(l.buttonNextMonth)) {
                                        t.preventDefault();
                                        n = 0, o = this.options.switchingMonths || this.options.numberOfMonths;
                                        if (this.options.splitView) {
                                            r = e.closest("." + l.monthItem);
                                            n = c.findNestedMonthItem(r), o = 1;
                                        }
                                        return this.calendars[n].setMonth(this.calendars[n].getMonth() + o), this.gotoDate(this.calendars[n], n), void this.emit("change:month", this.calendars[n], n);
                                    }
                                    e.classList.contains(l.buttonCancel) && (t.preventDefault(), this.hide(), this.emit("button:cancel")), e.classList.contains(l.buttonApply) && (t.preventDefault(), this.options.singleMode && this.datePicked.length ? this.setDate(this.datePicked[0]) : this.options.singleMode || 2 !== this.datePicked.length || this.setDateRange(this.datePicked[0], this.datePicked[1]), this.hide(), this.emit("button:apply", this.options.startDate, this.options.endDate));
                                }
                            }
                        } else this.hide();
                    }
                }, e.prototype.showTooltip = function(t, e) {
                    var i = this.ui.querySelector("." + l.containerTooltip);
                    i.style.visibility = "visible", i.innerHTML = e;
                    var n = this.ui.getBoundingClientRect(), o = i.getBoundingClientRect(), s = t.getBoundingClientRect(), r = s.top, a = s.left;
                    if (this.options.inlineMode && this.options.parentEl) {
                        var c = this.ui.parentNode.getBoundingClientRect();
                        r -= c.top, a -= c.left;
                    } else r -= n.top, a -= n.left;
                    r -= o.height, a -= o.width / 2, a += s.width / 2, i.style.top = r + "px", i.style.left = a + "px", this.emit("tooltip", i, t);
                }, e.prototype.hideTooltip = function() {
                    this.ui.querySelector("." + l.containerTooltip).style.visibility = "hidden";
                }, e.prototype.shouldAllowMouseEnter = function(t) {
                    return !this.options.singleMode && !t.classList.contains(l.isLocked);
                }, e.prototype.shouldAllowRepick = function() {
                    return this.options.elementEnd && this.options.allowRepick && this.options.startDate && this.options.endDate;
                }, e.prototype.isDayItem = function(t) {
                    return t.classList.contains(l.dayItem);
                }, e.prototype.onMouseEnter = function(t) {
                    var e = this, i = t.target;
                    if (this.isDayItem(i) && this.shouldAllowMouseEnter(i)) {
                        if (this.shouldAllowRepick() && (this.triggerElement === this.options.element ? this.datePicked[0] = this.options.endDate.clone() : this.triggerElement === this.options.elementEnd && (this.datePicked[0] = this.options.startDate.clone())), 1 !== this.datePicked.length) return;
                        var n = this.ui.querySelector("." + l.dayItem + '[data-time="' + this.datePicked[0].getTime() + '"]'), o = this.datePicked[0].clone(), s = new a.DateTime(i.dataset.time), r = !1;
                        if (o.getTime() > s.getTime()) {
                            var c = o.clone();
                            o = s.clone(), s = c.clone(), r = !0;
                        }
                        if (Array.prototype.slice.call(this.ui.querySelectorAll("." + l.dayItem)).forEach(function(t) {
                            var i = new a.DateTime(t.dataset.time), n = e.renderDay(i);
                            i.isBetween(o, s) && n.classList.add(l.isInRange), t.className = n.className;
                        }), i.classList.add(l.isEndDate), r ? (n && n.classList.add(l.isFlipped), i.classList.add(l.isFlipped)) : (n && n.classList.remove(l.isFlipped), i.classList.remove(l.isFlipped)), this.options.showTooltip) {
                            var h = s.diff(o, "day") + 1;
                            if ("function" == typeof this.options.tooltipNumber && (h = this.options.tooltipNumber.call(this, h)), h > 0) {
                                var p = this.pluralSelector(h), d = h + " " + (this.options.tooltipText[p] ? this.options.tooltipText[p] : "[" + p + "]");
                                this.showTooltip(i, d);
                                var u = window.navigator.userAgent, m = /(iphone|ipad)/i.test(u), f = /OS 1([0-2])/i.test(u);
                                m && f && i.dispatchEvent(new Event("click"));
                            } else this.hideTooltip();
                        }
                    }
                }, e.prototype.onMouseLeave = function(t) {
                    t.target;
                    this.options.allowRepick && (!this.options.allowRepick || this.options.startDate || this.options.endDate) && (this.datePicked.length = 0, this.render());
                }, e.prototype.onInput = function(t) {
                    var e = this.parseInput(), i = e[0], n = e[1], o = this.options.format;
                    if (this.options.elementEnd ? i instanceof a.DateTime && n instanceof a.DateTime && i.format(o) === this.options.element.value && n.format(o) === this.options.elementEnd.value : this.options.singleMode ? i instanceof a.DateTime && i.format(o) === this.options.element.value : i instanceof a.DateTime && n instanceof a.DateTime && "" + i.format(o) + this.options.delimiter + n.format(o) === this.options.element.value) {
                        if (n && i.getTime() > n.getTime()) {
                            var s = i.clone();
                            i = n.clone(), n = s.clone();
                        }
                        this.options.startDate = new a.DateTime(i, this.options.format, this.options.lang), n && (this.options.endDate = new a.DateTime(n, this.options.format, this.options.lang)), this.updateInput(), this.render();
                        var r = i.clone(), l = 0;
                        (this.options.elementEnd ? i.format(o) === t.target.value : t.target.value.startsWith(i.format(o))) || (r = n.clone(), l = this.options.numberOfMonths - 1), this.emit("selected", this.getStartDate(), this.getEndDate()), this.gotoDate(r, l);
                    }
                }, e;
            }(r.Calendar);
            e.Litepicker = h;
        },
        function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.findNestedMonthItem = function(t) {
                for(var e = t.parentNode.childNodes, i = 0; i < e.length; i += 1){
                    if (e.item(i) === t) return i;
                }
                return 0;
            }, e.dateIsLocked = function(t, e, i) {
                var n = !1;
                return e.lockDays.length && (n = e.lockDays.filter(function(i) {
                    return i instanceof Array ? t.isBetween(i[0], i[1], e.lockDaysInclusivity) : i.isSame(t, "day");
                }).length), n || "function" != typeof e.lockDaysFilter || (n = e.lockDaysFilter.call(this, t.clone(), null, i)), n;
            }, e.rangeIsLocked = function(t, e) {
                var i = !1;
                return e.lockDays.length && (i = e.lockDays.filter(function(i) {
                    if (i instanceof Array) {
                        var n = t[0].toDateString() === i[0].toDateString() && t[1].toDateString() === i[1].toDateString();
                        return i[0].isBetween(t[0], t[1], e.lockDaysInclusivity) || i[1].isBetween(t[0], t[1], e.lockDaysInclusivity) || n;
                    }
                    return i.isBetween(t[0], t[1], e.lockDaysInclusivity);
                }).length), i || "function" != typeof e.lockDaysFilter || (i = e.lockDaysFilter.call(this, t[0].clone(), t[1].clone(), t)), i;
            };
        },
        function(t, e, i) {
            var n = i(8);
            "string" == typeof n && (n = [
                [
                    t.i,
                    n,
                    ""
                ]
            ]);
            var o = {
                insert: function(t) {
                    var e = document.querySelector("head"), i = window._lastElementInsertedByStyleLoader;
                    window.disableLitepickerStyles || (i ? i.nextSibling ? e.insertBefore(t, i.nextSibling) : e.appendChild(t) : e.insertBefore(t, e.firstChild), window._lastElementInsertedByStyleLoader = t);
                },
                singleton: !1
            };
            i(10)(n, o);
            n.locals && (t.exports = n.locals);
        },
        function(t, e, i) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = i(1);
            e.Litepicker = n.Litepicker, i(11), window.Litepicker = n.Litepicker, e.default = n.Litepicker;
        },
        function(t, e, i) {
            "use strict";
            var n, o = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || ({
                    __proto__: []
                }) instanceof Array && function(t, e) {
                    t.__proto__ = e;
                } || function(t, e) {
                    for(var i in e)e.hasOwnProperty(i) && (t[i] = e[i]);
                })(t, e);
            }, function(t, e) {
                function i() {
                    this.constructor = t;
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i);
            });
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var s = i(6), r = i(0), a = i(3), l = i(2), c = function(t) {
                function e(e) {
                    return t.call(this, e) || this;
                }
                return o(e, t), e.prototype.render = function() {
                    var t = this;
                    this.emit("before:render", this.ui);
                    var e = document.createElement("div");
                    e.className = a.containerMain;
                    var i = document.createElement("div");
                    i.className = a.containerMonths, a["columns" + this.options.numberOfColumns] && (i.classList.remove(a.columns2, a.columns3, a.columns4), i.classList.add(a["columns" + this.options.numberOfColumns])), this.options.splitView && i.classList.add(a.splitView), this.options.showWeekNumbers && i.classList.add(a.showWeekNumbers);
                    for(var n = this.calendars[0].clone(), o = n.getMonth(), s = n.getMonth() + this.options.numberOfMonths, r = 0, l = o; l < s; l += 1){
                        var c = n.clone();
                        c.setDate(1), c.setHours(0, 0, 0, 0), this.options.splitView ? c = this.calendars[r].clone() : c.setMonth(l), i.appendChild(this.renderMonth(c, r)), r += 1;
                    }
                    if (this.ui.innerHTML = "", e.appendChild(i), this.options.resetButton) {
                        var h = void 0;
                        "function" == typeof this.options.resetButton ? h = this.options.resetButton.call(this) : ((h = document.createElement("button")).type = "button", h.className = a.resetButton, h.innerHTML = this.options.buttonText.reset), h.addEventListener("click", function(e) {
                            e.preventDefault(), t.clearSelection();
                        }), e.querySelector("." + a.monthItem + ":last-child").querySelector("." + a.monthItemHeader).appendChild(h);
                    }
                    this.ui.appendChild(e), this.options.autoApply && !this.options.footerHTML || this.ui.appendChild(this.renderFooter()), this.options.showTooltip && this.ui.appendChild(this.renderTooltip()), this.ui.dataset.plugins = (this.options.plugins || []).join("|"), this.emit("render", this.ui);
                }, e.prototype.renderMonth = function(t, e) {
                    var i = this, n = t.clone(), o = 32 - new Date(n.getFullYear(), n.getMonth(), 32).getDate(), s = document.createElement("div");
                    s.className = a.monthItem;
                    var c = document.createElement("div");
                    c.className = a.monthItemHeader;
                    var h = document.createElement("div");
                    if (this.options.dropdowns.months) {
                        var p = document.createElement("select");
                        p.className = a.monthItemName;
                        for(var d = 0; d < 12; d += 1){
                            var u = document.createElement("option"), m = new r.DateTime(new Date(t.getFullYear(), d, 2, 0, 0, 0)), f = new r.DateTime(new Date(t.getFullYear(), d, 1, 0, 0, 0));
                            u.value = String(d), u.text = m.toLocaleString(this.options.lang, {
                                month: "long"
                            }), u.disabled = this.options.minDate && f.isBefore(new r.DateTime(this.options.minDate), "month") || this.options.maxDate && f.isAfter(new r.DateTime(this.options.maxDate), "month"), u.selected = f.getMonth() === t.getMonth(), p.appendChild(u);
                        }
                        p.addEventListener("change", function(t) {
                            var e = t.target, n = 0;
                            if (i.options.splitView) {
                                var o = e.closest("." + a.monthItem);
                                n = l.findNestedMonthItem(o);
                            }
                            i.calendars[n].setMonth(Number(e.value)), i.render(), i.emit("change:month", i.calendars[n], n, t);
                        }), h.appendChild(p);
                    } else (m = document.createElement("strong")).className = a.monthItemName, m.innerHTML = t.toLocaleString(this.options.lang, {
                        month: "long"
                    }), h.appendChild(m);
                    if (this.options.dropdowns.years) {
                        var g = document.createElement("select");
                        g.className = a.monthItemYear;
                        var v = this.options.dropdowns.minYear, y = this.options.dropdowns.maxYear ? this.options.dropdowns.maxYear : (new Date).getFullYear();
                        if (t.getFullYear() > y) (u = document.createElement("option")).value = String(t.getFullYear()), u.text = String(t.getFullYear()), u.selected = !0, u.disabled = !0, g.appendChild(u);
                        for(d = y; d >= v; d -= 1){
                            var u = document.createElement("option"), b = new r.DateTime(new Date(d, 0, 1, 0, 0, 0));
                            u.value = String(d), u.text = String(d), u.disabled = this.options.minDate && b.isBefore(new r.DateTime(this.options.minDate), "year") || this.options.maxDate && b.isAfter(new r.DateTime(this.options.maxDate), "year"), u.selected = t.getFullYear() === d, g.appendChild(u);
                        }
                        if (t.getFullYear() < v) (u = document.createElement("option")).value = String(t.getFullYear()), u.text = String(t.getFullYear()), u.selected = !0, u.disabled = !0, g.appendChild(u);
                        if ("asc" === this.options.dropdowns.years) {
                            var k = Array.prototype.slice.call(g.childNodes).reverse();
                            g.innerHTML = "", k.forEach(function(t) {
                                t.innerHTML = t.value, g.appendChild(t);
                            });
                        }
                        g.addEventListener("change", function(t) {
                            var e = t.target, n = 0;
                            if (i.options.splitView) {
                                var o = e.closest("." + a.monthItem);
                                n = l.findNestedMonthItem(o);
                            }
                            i.calendars[n].setFullYear(Number(e.value)), i.render(), i.emit("change:year", i.calendars[n], n, t);
                        }), h.appendChild(g);
                    } else {
                        var w = document.createElement("span");
                        w.className = a.monthItemYear, w.innerHTML = String(t.getFullYear()), h.appendChild(w);
                    }
                    var D = document.createElement("button");
                    D.type = "button", D.className = a.buttonPreviousMonth, D.innerHTML = this.options.buttonText.previousMonth;
                    var x = document.createElement("button");
                    x.type = "button", x.className = a.buttonNextMonth, x.innerHTML = this.options.buttonText.nextMonth, c.appendChild(D), c.appendChild(h), c.appendChild(x), this.options.minDate && n.isSameOrBefore(new r.DateTime(this.options.minDate), "month") && s.classList.add(a.noPreviousMonth), this.options.maxDate && n.isSameOrAfter(new r.DateTime(this.options.maxDate), "month") && s.classList.add(a.noNextMonth);
                    var M = document.createElement("div");
                    M.className = a.monthItemWeekdaysRow, this.options.showWeekNumbers && (M.innerHTML = "<div>W</div>");
                    for(var _ = 1; _ <= 7; _ += 1){
                        var T = 3 + this.options.firstDay + _, L = document.createElement("div");
                        L.innerHTML = this.weekdayName(T), L.title = this.weekdayName(T, "long"), M.appendChild(L);
                    }
                    var E = document.createElement("div");
                    E.className = a.containerDays;
                    var S = this.calcSkipDays(n);
                    this.options.showWeekNumbers && S && E.appendChild(this.renderWeekNumber(n));
                    for(var I = 0; I < S; I += 1){
                        var P = document.createElement("div");
                        E.appendChild(P);
                    }
                    for(I = 1; I <= o; I += 1)n.setDate(I), this.options.showWeekNumbers && n.getDay() === this.options.firstDay && E.appendChild(this.renderWeekNumber(n)), E.appendChild(this.renderDay(n));
                    return s.appendChild(c), s.appendChild(M), s.appendChild(E), this.emit("render:month", s, t), s;
                }, e.prototype.renderDay = function(t) {
                    t.setHours();
                    var e = document.createElement("div");
                    if (e.className = a.dayItem, e.innerHTML = String(t.getDate()), e.dataset.time = String(t.getTime()), t.toDateString() === (new Date).toDateString() && e.classList.add(a.isToday), this.datePicked.length) this.datePicked[0].toDateString() === t.toDateString() && (e.classList.add(a.isStartDate), this.options.singleMode && e.classList.add(a.isEndDate)), 2 === this.datePicked.length && this.datePicked[1].toDateString() === t.toDateString() && e.classList.add(a.isEndDate), 2 === this.datePicked.length && t.isBetween(this.datePicked[0], this.datePicked[1]) && e.classList.add(a.isInRange);
                    else if (this.options.startDate) {
                        var i = this.options.startDate, n = this.options.endDate;
                        i.toDateString() === t.toDateString() && (e.classList.add(a.isStartDate), this.options.singleMode && e.classList.add(a.isEndDate)), n && n.toDateString() === t.toDateString() && e.classList.add(a.isEndDate), i && n && t.isBetween(i, n) && e.classList.add(a.isInRange);
                    }
                    if (this.options.minDate && t.isBefore(new r.DateTime(this.options.minDate)) && e.classList.add(a.isLocked), this.options.maxDate && t.isAfter(new r.DateTime(this.options.maxDate)) && e.classList.add(a.isLocked), this.options.minDays > 1 && 1 === this.datePicked.length) {
                        var o = this.options.minDays - 1, s = this.datePicked[0].clone().subtract(o, "day"), c = this.datePicked[0].clone().add(o, "day");
                        t.isBetween(s, this.datePicked[0], "(]") && e.classList.add(a.isLocked), t.isBetween(this.datePicked[0], c, "[)") && e.classList.add(a.isLocked);
                    }
                    if (this.options.maxDays && 1 === this.datePicked.length) {
                        var h = this.options.maxDays;
                        s = this.datePicked[0].clone().subtract(h, "day"), c = this.datePicked[0].clone().add(h, "day");
                        t.isSameOrBefore(s) && e.classList.add(a.isLocked), t.isSameOrAfter(c) && e.classList.add(a.isLocked);
                    }
                    (this.options.selectForward && 1 === this.datePicked.length && t.isBefore(this.datePicked[0]) && e.classList.add(a.isLocked), this.options.selectBackward && 1 === this.datePicked.length && t.isAfter(this.datePicked[0]) && e.classList.add(a.isLocked), l.dateIsLocked(t, this.options, this.datePicked) && e.classList.add(a.isLocked), this.options.highlightedDays.length) && this.options.highlightedDays.filter(function(e) {
                        return e instanceof Array ? t.isBetween(e[0], e[1], "[]") : e.isSame(t, "day");
                    }).length && e.classList.add(a.isHighlighted);
                    return e.tabIndex = e.classList.contains("is-locked") ? -1 : 0, this.emit("render:day", e, t), e;
                }, e.prototype.renderFooter = function() {
                    var t = document.createElement("div");
                    if (t.className = a.containerFooter, this.options.footerHTML ? t.innerHTML = this.options.footerHTML : t.innerHTML = '\n      <span class="' + a.previewDateRange + '"></span>\n      <button type="button" class="' + a.buttonCancel + '">' + this.options.buttonText.cancel + '</button>\n      <button type="button" class="' + a.buttonApply + '">' + this.options.buttonText.apply + "</button>\n      ", this.options.singleMode) {
                        if (1 === this.datePicked.length) {
                            var e = this.datePicked[0].format(this.options.format, this.options.lang);
                            t.querySelector("." + a.previewDateRange).innerHTML = e;
                        }
                    } else if (1 === this.datePicked.length && t.querySelector("." + a.buttonApply).setAttribute("disabled", ""), 2 === this.datePicked.length) {
                        e = this.datePicked[0].format(this.options.format, this.options.lang);
                        var i = this.datePicked[1].format(this.options.format, this.options.lang);
                        t.querySelector("." + a.previewDateRange).innerHTML = "" + e + this.options.delimiter + i;
                    }
                    return this.emit("render:footer", t), t;
                }, e.prototype.renderWeekNumber = function(t) {
                    var e = document.createElement("div"), i = t.getWeek(this.options.firstDay);
                    return e.className = a.weekNumber, e.innerHTML = 53 === i && 0 === t.getMonth() ? "53 / 1" : i, e;
                }, e.prototype.renderTooltip = function() {
                    var t = document.createElement("div");
                    return t.className = a.containerTooltip, t;
                }, e.prototype.weekdayName = function(t, e) {
                    return void 0 === e && (e = "short"), new Date(1970, 0, t, 12, 0, 0, 0).toLocaleString(this.options.lang, {
                        weekday: e
                    });
                }, e.prototype.calcSkipDays = function(t) {
                    var e = t.getDay() - this.options.firstDay;
                    return e < 0 && (e += 7), e;
                }, e;
            }(s.LPCore);
            e.Calendar = c;
        },
        function(t, e, i) {
            "use strict";
            var n, o = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || ({
                    __proto__: []
                }) instanceof Array && function(t, e) {
                    t.__proto__ = e;
                } || function(t, e) {
                    for(var i in e)e.hasOwnProperty(i) && (t[i] = e[i]);
                })(t, e);
            }, function(t, e) {
                function i() {
                    this.constructor = t;
                }
                n(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i);
            }), s = this && this.__assign || function() {
                return (s = Object.assign || function(t) {
                    for(var e, i = 1, n = arguments.length; i < n; i++)for(var o in e = arguments[i])Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t;
                }).apply(this, arguments);
            };
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = i(7), a = i(0), l = i(1), c = function(t) {
                function e(e) {
                    var i = t.call(this) || this;
                    i.datePicked = [], i.calendars = [], i.options = {
                        element: null,
                        elementEnd: null,
                        parentEl: null,
                        firstDay: 1,
                        format: "YYYY-MM-DD",
                        lang: "en-US",
                        delimiter: " - ",
                        numberOfMonths: 1,
                        numberOfColumns: 1,
                        startDate: null,
                        endDate: null,
                        zIndex: 9999,
                        position: "auto",
                        selectForward: !1,
                        selectBackward: !1,
                        splitView: !1,
                        inlineMode: !1,
                        singleMode: !0,
                        autoApply: !0,
                        allowRepick: !1,
                        showWeekNumbers: !1,
                        showTooltip: !0,
                        scrollToDate: !0,
                        mobileFriendly: !0,
                        resetButton: !1,
                        autoRefresh: !1,
                        lockDaysFormat: "YYYY-MM-DD",
                        lockDays: [],
                        disallowLockDaysInRange: !1,
                        lockDaysInclusivity: "[]",
                        highlightedDaysFormat: "YYYY-MM-DD",
                        highlightedDays: [],
                        dropdowns: {
                            minYear: 1990,
                            maxYear: null,
                            months: !1,
                            years: !1
                        },
                        buttonText: {
                            apply: "Apply",
                            cancel: "Cancel",
                            previousMonth: '<svg width="11" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M7.919 0l2.748 2.667L5.333 8l5.334 5.333L7.919 16 0 8z" fill-rule="nonzero"/></svg>',
                            nextMonth: '<svg width="11" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M2.748 16L0 13.333 5.333 8 0 2.667 2.748 0l7.919 8z" fill-rule="nonzero"/></svg>',
                            reset: '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">\n        <path d="M0 0h24v24H0z" fill="none"/>\n        <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/>\n      </svg>'
                        },
                        tooltipText: {
                            one: "day",
                            other: "days"
                        }
                    }, i.options = s(s({}, i.options), e.element.dataset), Object.keys(i.options).forEach(function(t) {
                        "true" !== i.options[t] && "false" !== i.options[t] || (i.options[t] = "true" === i.options[t]);
                    });
                    var n = s(s({}, i.options.dropdowns), e.dropdowns), o = s(s({}, i.options.buttonText), e.buttonText), r = s(s({}, i.options.tooltipText), e.tooltipText);
                    i.options = s(s({}, i.options), e), i.options.dropdowns = s({}, n), i.options.buttonText = s({}, o), i.options.tooltipText = s({}, r), i.options.elementEnd || (i.options.allowRepick = !1), i.options.lockDays.length && (i.options.lockDays = a.DateTime.convertArray(i.options.lockDays, i.options.lockDaysFormat)), i.options.highlightedDays.length && (i.options.highlightedDays = a.DateTime.convertArray(i.options.highlightedDays, i.options.highlightedDaysFormat));
                    var l = i.parseInput(), c = l[0], h = l[1];
                    i.options.startDate && (i.options.singleMode || i.options.endDate) && (c = new a.DateTime(i.options.startDate, i.options.format, i.options.lang)), c && i.options.endDate && (h = new a.DateTime(i.options.endDate, i.options.format, i.options.lang)), c instanceof a.DateTime && !isNaN(c.getTime()) && (i.options.startDate = c), i.options.startDate && h instanceof a.DateTime && !isNaN(h.getTime()) && (i.options.endDate = h), !i.options.singleMode || i.options.startDate instanceof a.DateTime || (i.options.startDate = null), i.options.singleMode || i.options.startDate instanceof a.DateTime && i.options.endDate instanceof a.DateTime || (i.options.startDate = null, i.options.endDate = null);
                    for(var p = 0; p < i.options.numberOfMonths; p += 1){
                        var d = i.options.startDate instanceof a.DateTime ? i.options.startDate.clone() : new a.DateTime;
                        if (!i.options.startDate && (0 === p || i.options.splitView)) {
                            var u = i.options.maxDate ? new a.DateTime(i.options.maxDate) : null, m = i.options.minDate ? new a.DateTime(i.options.minDate) : null, f = i.options.numberOfMonths - 1;
                            m && u && d.isAfter(u) ? (d = m.clone()).setDate(1) : !m && u && d.isAfter(u) && ((d = u.clone()).setDate(1), d.setMonth(d.getMonth() - f));
                        }
                        d.setDate(1), d.setMonth(d.getMonth() + p), i.calendars[p] = d;
                    }
                    if (i.options.showTooltip) {
                        if (i.options.tooltipPluralSelector) i.pluralSelector = i.options.tooltipPluralSelector;
                        else try {
                            var g = new Intl.PluralRules(i.options.lang);
                            i.pluralSelector = g.select.bind(g);
                        } catch (t) {
                            i.pluralSelector = function(t) {
                                return 0 === Math.abs(t) ? "one" : "other";
                            };
                        }
                    }
                    return i;
                }
                return o(e, t), e.add = function(t, e) {
                    l.Litepicker.prototype[t] = e;
                }, e.prototype.DateTime = function(t, e) {
                    return t ? new a.DateTime(t, e) : new a.DateTime;
                }, e.prototype.init = function() {
                    var t = this;
                    this.options.plugins && this.options.plugins.length && this.options.plugins.forEach(function(e) {
                        l.Litepicker.prototype.hasOwnProperty(e) ? l.Litepicker.prototype[e].init.call(t, t) : console.warn("Litepicker: plugin \xab" + e + "\xbb not found.");
                    });
                }, e.prototype.parseInput = function() {
                    var t = this.options.delimiter, e = new RegExp("" + t), i = this.options.element instanceof HTMLInputElement ? this.options.element.value.split(t) : [];
                    if (this.options.elementEnd) {
                        if (this.options.element instanceof HTMLInputElement && this.options.element.value.length && this.options.elementEnd instanceof HTMLInputElement && this.options.elementEnd.value.length) return [
                            new a.DateTime(this.options.element.value, this.options.format),
                            new a.DateTime(this.options.elementEnd.value, this.options.format)
                        ];
                    } else if (this.options.singleMode) {
                        if (this.options.element instanceof HTMLInputElement && this.options.element.value.length) return [
                            new a.DateTime(this.options.element.value, this.options.format)
                        ];
                    } else if (this.options.element instanceof HTMLInputElement && e.test(this.options.element.value) && i.length && i.length % 2 == 0) {
                        var n = i.slice(0, i.length / 2).join(t), o = i.slice(i.length / 2).join(t);
                        return [
                            new a.DateTime(n, this.options.format),
                            new a.DateTime(o, this.options.format)
                        ];
                    }
                    return [];
                }, e.prototype.isShowning = function() {
                    return this.ui && "none" !== this.ui.style.display;
                }, e.prototype.findPosition = function(t) {
                    var e = t.getBoundingClientRect(), i = this.ui.getBoundingClientRect(), n = this.options.position.split(" "), o = window.scrollX || window.pageXOffset, s = window.scrollY || window.pageYOffset, r = 0, a = 0;
                    if ("auto" !== n[0] && /top|bottom/.test(n[0])) r = e[n[0]] + s, "top" === n[0] && (r -= i.height);
                    else {
                        r = e.bottom + s;
                        var l = e.bottom + i.height > window.innerHeight, c = e.top + s - i.height >= i.height;
                        l && c && (r = e.top + s - i.height);
                    }
                    if (/left|right/.test(n[0]) || n[1] && "auto" !== n[1] && /left|right/.test(n[1])) a = /left|right/.test(n[0]) ? e[n[0]] + o : e[n[1]] + o, "right" !== n[0] && "right" !== n[1] || (a -= i.width);
                    else {
                        a = e.left + o;
                        l = e.left + i.width > window.innerWidth;
                        var h = e.right + o - i.width >= 0;
                        l && h && (a = e.right + o - i.width);
                    }
                    return {
                        left: a,
                        top: r
                    };
                }, e;
            }(r.EventEmitter);
            e.LPCore = c;
        },
        function(t, e, i) {
            "use strict";
            var n, o = "object" == typeof Reflect ? Reflect : null, s = o && "function" == typeof o.apply ? o.apply : function(t, e, i) {
                return Function.prototype.apply.call(t, e, i);
            };
            n = o && "function" == typeof o.ownKeys ? o.ownKeys : Object.getOwnPropertySymbols ? function(t) {
                return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
            } : function(t) {
                return Object.getOwnPropertyNames(t);
            };
            var r = Number.isNaN || function(t) {
                return t != t;
            };
            function a() {
                a.init.call(this);
            }
            t.exports = a, a.EventEmitter = a, a.prototype._events = void 0, a.prototype._eventsCount = 0, a.prototype._maxListeners = void 0;
            var l = 10;
            function c(t) {
                return void 0 === t._maxListeners ? a.defaultMaxListeners : t._maxListeners;
            }
            function h(t, e, i, n) {
                var o, s, r, a;
                if ("function" != typeof i) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof i);
                if (void 0 === (s = t._events) ? (s = t._events = Object.create(null), t._eventsCount = 0) : (void 0 !== s.newListener && (t.emit("newListener", e, i.listener ? i.listener : i), s = t._events), r = s[e]), void 0 === r) r = s[e] = i, ++t._eventsCount;
                else if ("function" == typeof r ? r = s[e] = n ? [
                    i,
                    r
                ] : [
                    r,
                    i
                ] : n ? r.unshift(i) : r.push(i), (o = c(t)) > 0 && r.length > o && !r.warned) {
                    r.warned = !0;
                    var l = new Error("Possible EventEmitter memory leak detected. " + r.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                    l.name = "MaxListenersExceededWarning", l.emitter = t, l.type = e, l.count = r.length, a = l, console && console.warn && console.warn(a);
                }
                return t;
            }
            function p() {
                for(var t = [], e = 0; e < arguments.length; e++)t.push(arguments[e]);
                this.fired || (this.target.removeListener(this.type, this.wrapFn), this.fired = !0, s(this.listener, this.target, t));
            }
            function d(t, e, i) {
                var n = {
                    fired: !1,
                    wrapFn: void 0,
                    target: t,
                    type: e,
                    listener: i
                }, o = p.bind(n);
                return o.listener = i, n.wrapFn = o, o;
            }
            function u(t, e, i) {
                var n = t._events;
                if (void 0 === n) return [];
                var o = n[e];
                return void 0 === o ? [] : "function" == typeof o ? i ? [
                    o.listener || o
                ] : [
                    o
                ] : i ? function(t) {
                    for(var e = new Array(t.length), i = 0; i < e.length; ++i)e[i] = t[i].listener || t[i];
                    return e;
                }(o) : f(o, o.length);
            }
            function m(t) {
                var e = this._events;
                if (void 0 !== e) {
                    var i = e[t];
                    if ("function" == typeof i) return 1;
                    if (void 0 !== i) return i.length;
                }
                return 0;
            }
            function f(t, e) {
                for(var i = new Array(e), n = 0; n < e; ++n)i[n] = t[n];
                return i;
            }
            Object.defineProperty(a, "defaultMaxListeners", {
                enumerable: !0,
                get: function() {
                    return l;
                },
                set: function(t) {
                    if ("number" != typeof t || t < 0 || r(t)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
                    l = t;
                }
            }), a.init = function() {
                void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
            }, a.prototype.setMaxListeners = function(t) {
                if ("number" != typeof t || t < 0 || r(t)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
                return this._maxListeners = t, this;
            }, a.prototype.getMaxListeners = function() {
                return c(this);
            }, a.prototype.emit = function(t) {
                for(var e = [], i = 1; i < arguments.length; i++)e.push(arguments[i]);
                var n = "error" === t, o = this._events;
                if (void 0 !== o) n = n && void 0 === o.error;
                else if (!n) return !1;
                if (n) {
                    var r;
                    if (e.length > 0 && (r = e[0]), r instanceof Error) throw r;
                    var a = new Error("Unhandled error." + (r ? " (" + r.message + ")" : ""));
                    throw a.context = r, a;
                }
                var l = o[t];
                if (void 0 === l) return !1;
                if ("function" == typeof l) s(l, this, e);
                else {
                    var c = l.length, h = f(l, c);
                    for(i = 0; i < c; ++i)s(h[i], this, e);
                }
                return !0;
            }, a.prototype.addListener = function(t, e) {
                return h(this, t, e, !1);
            }, a.prototype.on = a.prototype.addListener, a.prototype.prependListener = function(t, e) {
                return h(this, t, e, !0);
            }, a.prototype.once = function(t, e) {
                if ("function" != typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
                return this.on(t, d(this, t, e)), this;
            }, a.prototype.prependOnceListener = function(t, e) {
                if ("function" != typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
                return this.prependListener(t, d(this, t, e)), this;
            }, a.prototype.removeListener = function(t, e) {
                var i, n, o, s, r;
                if ("function" != typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e);
                if (void 0 === (n = this._events)) return this;
                if (void 0 === (i = n[t])) return this;
                if (i === e || i.listener === e) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete n[t], n.removeListener && this.emit("removeListener", t, i.listener || e));
                else if ("function" != typeof i) {
                    for(o = -1, s = i.length - 1; s >= 0; s--)if (i[s] === e || i[s].listener === e) {
                        r = i[s].listener, o = s;
                        break;
                    }
                    if (o < 0) return this;
                    0 === o ? i.shift() : function(t, e) {
                        for(; e + 1 < t.length; e++)t[e] = t[e + 1];
                        t.pop();
                    }(i, o), 1 === i.length && (n[t] = i[0]), void 0 !== n.removeListener && this.emit("removeListener", t, r || e);
                }
                return this;
            }, a.prototype.off = a.prototype.removeListener, a.prototype.removeAllListeners = function(t) {
                var e, i, n;
                if (void 0 === (i = this._events)) return this;
                if (void 0 === i.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== i[t] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete i[t]), this;
                if (0 === arguments.length) {
                    var o, s = Object.keys(i);
                    for(n = 0; n < s.length; ++n)"removeListener" !== (o = s[n]) && this.removeAllListeners(o);
                    return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this;
                }
                if ("function" == typeof (e = i[t])) this.removeListener(t, e);
                else if (void 0 !== e) for(n = e.length - 1; n >= 0; n--)this.removeListener(t, e[n]);
                return this;
            }, a.prototype.listeners = function(t) {
                return u(this, t, !0);
            }, a.prototype.rawListeners = function(t) {
                return u(this, t, !1);
            }, a.listenerCount = function(t, e) {
                return "function" == typeof t.listenerCount ? t.listenerCount(e) : m.call(t, e);
            }, a.prototype.listenerCount = m, a.prototype.eventNames = function() {
                return this._eventsCount > 0 ? n(this._events) : [];
            };
        },
        function(t, e, i) {
            (e = i(9)(!1)).push([
                t.i,
                ':root{--litepicker-container-months-color-bg: #fff;--litepicker-container-months-box-shadow-color: #ddd;--litepicker-footer-color-bg: #fafafa;--litepicker-footer-box-shadow-color: #ddd;--litepicker-tooltip-color-bg: #fff;--litepicker-month-header-color: #333;--litepicker-button-prev-month-color: #9e9e9e;--litepicker-button-next-month-color: #9e9e9e;--litepicker-button-prev-month-color-hover: #2196f3;--litepicker-button-next-month-color-hover: #2196f3;--litepicker-month-width: calc(var(--litepicker-day-width) * 7);--litepicker-month-weekday-color: #9e9e9e;--litepicker-month-week-number-color: #9e9e9e;--litepicker-day-width: 38px;--litepicker-day-color: #333;--litepicker-day-color-hover: #2196f3;--litepicker-is-today-color: #f44336;--litepicker-is-in-range-color: #bbdefb;--litepicker-is-locked-color: #9e9e9e;--litepicker-is-start-color: #fff;--litepicker-is-start-color-bg: #2196f3;--litepicker-is-end-color: #fff;--litepicker-is-end-color-bg: #2196f3;--litepicker-button-cancel-color: #fff;--litepicker-button-cancel-color-bg: #9e9e9e;--litepicker-button-apply-color: #fff;--litepicker-button-apply-color-bg: #2196f3;--litepicker-button-reset-color: #909090;--litepicker-button-reset-color-hover: #2196f3;--litepicker-highlighted-day-color: #333;--litepicker-highlighted-day-color-bg: #ffeb3b}.show-week-numbers{--litepicker-month-width: calc(var(--litepicker-day-width) * 8)}.litepicker{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;font-size:0.8em;display:none}.litepicker button{border:none;background:none}.litepicker .container__main{display:-webkit-box;display:-ms-flexbox;display:flex}.litepicker .container__months{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;background-color:var(--litepicker-container-months-color-bg);border-radius:5px;-webkit-box-shadow:0 0 5px var(--litepicker-container-months-box-shadow-color);box-shadow:0 0 5px var(--litepicker-container-months-box-shadow-color);width:calc(var(--litepicker-month-width) + 10px);-webkit-box-sizing:content-box;box-sizing:content-box}.litepicker .container__months.columns-2{width:calc((var(--litepicker-month-width) * 2) + 20px)}.litepicker .container__months.columns-3{width:calc((var(--litepicker-month-width) * 3) + 30px)}.litepicker .container__months.columns-4{width:calc((var(--litepicker-month-width) * 4) + 40px)}.litepicker .container__months.split-view .month-item-header .button-previous-month,.litepicker .container__months.split-view .month-item-header .button-next-month{visibility:visible}.litepicker .container__months .month-item{padding:5px;width:var(--litepicker-month-width);-webkit-box-sizing:content-box;box-sizing:content-box}.litepicker .container__months .month-item-header{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;font-weight:500;padding:10px 5px;text-align:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:var(--litepicker-month-header-color)}.litepicker .container__months .month-item-header div{-webkit-box-flex:1;-ms-flex:1;flex:1}.litepicker .container__months .month-item-header div>.month-item-name{margin-right:5px}.litepicker .container__months .month-item-header div>.month-item-year{padding:0}.litepicker .container__months .month-item-header .reset-button{color:var(--litepicker-button-reset-color)}.litepicker .container__months .month-item-header .reset-button>svg{fill:var(--litepicker-button-reset-color)}.litepicker .container__months .month-item-header .reset-button *{pointer-events:none}.litepicker .container__months .month-item-header .reset-button:hover{color:var(--litepicker-button-reset-color-hover)}.litepicker .container__months .month-item-header .reset-button:hover>svg{fill:var(--litepicker-button-reset-color-hover)}.litepicker .container__months .month-item-header .button-previous-month,.litepicker .container__months .month-item-header .button-next-month{visibility:hidden;text-decoration:none;padding:3px 5px;border-radius:3px;-webkit-transition:color 0.3s, border 0.3s;transition:color 0.3s, border 0.3s;cursor:default}.litepicker .container__months .month-item-header .button-previous-month *,.litepicker .container__months .month-item-header .button-next-month *{pointer-events:none}.litepicker .container__months .month-item-header .button-previous-month{color:var(--litepicker-button-prev-month-color)}.litepicker .container__months .month-item-header .button-previous-month>svg,.litepicker .container__months .month-item-header .button-previous-month>img{fill:var(--litepicker-button-prev-month-color)}.litepicker .container__months .month-item-header .button-previous-month:hover{color:var(--litepicker-button-prev-month-color-hover)}.litepicker .container__months .month-item-header .button-previous-month:hover>svg{fill:var(--litepicker-button-prev-month-color-hover)}.litepicker .container__months .month-item-header .button-next-month{color:var(--litepicker-button-next-month-color)}.litepicker .container__months .month-item-header .button-next-month>svg,.litepicker .container__months .month-item-header .button-next-month>img{fill:var(--litepicker-button-next-month-color)}.litepicker .container__months .month-item-header .button-next-month:hover{color:var(--litepicker-button-next-month-color-hover)}.litepicker .container__months .month-item-header .button-next-month:hover>svg{fill:var(--litepicker-button-next-month-color-hover)}.litepicker .container__months .month-item-weekdays-row{display:-webkit-box;display:-ms-flexbox;display:flex;justify-self:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;color:var(--litepicker-month-weekday-color)}.litepicker .container__months .month-item-weekdays-row>div{padding:5px 0;font-size:85%;-webkit-box-flex:1;-ms-flex:1;flex:1;width:var(--litepicker-day-width);text-align:center}.litepicker .container__months .month-item:first-child .button-previous-month{visibility:visible}.litepicker .container__months .month-item:last-child .button-next-month{visibility:visible}.litepicker .container__months .month-item.no-previous-month .button-previous-month{visibility:hidden}.litepicker .container__months .month-item.no-next-month .button-next-month{visibility:hidden}.litepicker .container__days{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;justify-self:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;text-align:center;-webkit-box-sizing:content-box;box-sizing:content-box}.litepicker .container__days>div,.litepicker .container__days>a{padding:5px 0;width:var(--litepicker-day-width)}.litepicker .container__days .day-item{color:var(--litepicker-day-color);text-align:center;text-decoration:none;border-radius:3px;-webkit-transition:color 0.3s, border 0.3s;transition:color 0.3s, border 0.3s;cursor:default}.litepicker .container__days .day-item:hover{color:var(--litepicker-day-color-hover);-webkit-box-shadow:inset 0 0 0 1px var(--litepicker-day-color-hover);box-shadow:inset 0 0 0 1px var(--litepicker-day-color-hover)}.litepicker .container__days .day-item.is-today{color:var(--litepicker-is-today-color)}.litepicker .container__days .day-item.is-locked{color:var(--litepicker-is-locked-color)}.litepicker .container__days .day-item.is-locked:hover{color:var(--litepicker-is-locked-color);-webkit-box-shadow:none;box-shadow:none;cursor:default}.litepicker .container__days .day-item.is-in-range{background-color:var(--litepicker-is-in-range-color);border-radius:0}.litepicker .container__days .day-item.is-start-date{color:var(--litepicker-is-start-color);background-color:var(--litepicker-is-start-color-bg);border-top-left-radius:5px;border-bottom-left-radius:5px;border-top-right-radius:0;border-bottom-right-radius:0}.litepicker .container__days .day-item.is-start-date.is-flipped{border-top-left-radius:0;border-bottom-left-radius:0;border-top-right-radius:5px;border-bottom-right-radius:5px}.litepicker .container__days .day-item.is-end-date{color:var(--litepicker-is-end-color);background-color:var(--litepicker-is-end-color-bg);border-top-left-radius:0;border-bottom-left-radius:0;border-top-right-radius:5px;border-bottom-right-radius:5px}.litepicker .container__days .day-item.is-end-date.is-flipped{border-top-left-radius:5px;border-bottom-left-radius:5px;border-top-right-radius:0;border-bottom-right-radius:0}.litepicker .container__days .day-item.is-start-date.is-end-date{border-top-left-radius:5px;border-bottom-left-radius:5px;border-top-right-radius:5px;border-bottom-right-radius:5px}.litepicker .container__days .day-item.is-highlighted{color:var(--litepicker-highlighted-day-color);background-color:var(--litepicker-highlighted-day-color-bg)}.litepicker .container__days .week-number{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;color:var(--litepicker-month-week-number-color);font-size:85%}.litepicker .container__footer{text-align:right;padding:10px 5px;margin:0 5px;background-color:var(--litepicker-footer-color-bg);-webkit-box-shadow:inset 0px 3px 3px 0px var(--litepicker-footer-box-shadow-color);box-shadow:inset 0px 3px 3px 0px var(--litepicker-footer-box-shadow-color);border-bottom-left-radius:5px;border-bottom-right-radius:5px}.litepicker .container__footer .preview-date-range{margin-right:10px;font-size:90%}.litepicker .container__footer .button-cancel{background-color:var(--litepicker-button-cancel-color-bg);color:var(--litepicker-button-cancel-color);border:0;padding:3px 7px 4px;border-radius:3px}.litepicker .container__footer .button-cancel *{pointer-events:none}.litepicker .container__footer .button-apply{background-color:var(--litepicker-button-apply-color-bg);color:var(--litepicker-button-apply-color);border:0;padding:3px 7px 4px;border-radius:3px;margin-left:10px;margin-right:10px}.litepicker .container__footer .button-apply:disabled{opacity:0.7}.litepicker .container__footer .button-apply *{pointer-events:none}.litepicker .container__tooltip{position:absolute;margin-top:-4px;padding:4px 8px;border-radius:4px;background-color:var(--litepicker-tooltip-color-bg);-webkit-box-shadow:0 1px 3px rgba(0,0,0,0.25);box-shadow:0 1px 3px rgba(0,0,0,0.25);white-space:nowrap;font-size:11px;pointer-events:none;visibility:hidden}.litepicker .container__tooltip:before{position:absolute;bottom:-5px;left:calc(50% - 5px);border-top:5px solid rgba(0,0,0,0.12);border-right:5px solid transparent;border-left:5px solid transparent;content:""}.litepicker .container__tooltip:after{position:absolute;bottom:-4px;left:calc(50% - 4px);border-top:4px solid var(--litepicker-tooltip-color-bg);border-right:4px solid transparent;border-left:4px solid transparent;content:""}\n',
                ""
            ]), e.locals = {
                showWeekNumbers: "show-week-numbers",
                litepicker: "litepicker",
                containerMain: "container__main",
                containerMonths: "container__months",
                columns2: "columns-2",
                columns3: "columns-3",
                columns4: "columns-4",
                splitView: "split-view",
                monthItemHeader: "month-item-header",
                buttonPreviousMonth: "button-previous-month",
                buttonNextMonth: "button-next-month",
                monthItem: "month-item",
                monthItemName: "month-item-name",
                monthItemYear: "month-item-year",
                resetButton: "reset-button",
                monthItemWeekdaysRow: "month-item-weekdays-row",
                noPreviousMonth: "no-previous-month",
                noNextMonth: "no-next-month",
                containerDays: "container__days",
                dayItem: "day-item",
                isToday: "is-today",
                isLocked: "is-locked",
                isInRange: "is-in-range",
                isStartDate: "is-start-date",
                isFlipped: "is-flipped",
                isEndDate: "is-end-date",
                isHighlighted: "is-highlighted",
                weekNumber: "week-number",
                containerFooter: "container__footer",
                previewDateRange: "preview-date-range",
                buttonCancel: "button-cancel",
                buttonApply: "button-apply",
                containerTooltip: "container__tooltip"
            }, t.exports = e;
        },
        function(t, e, i) {
            "use strict";
            t.exports = function(t) {
                var e = [];
                return e.toString = function() {
                    return this.map(function(e) {
                        var i = function(t, e) {
                            var i = t[1] || "", n = t[3];
                            if (!n) return i;
                            if (e && "function" == typeof btoa) {
                                var o = (r = n, a = btoa(unescape(encodeURIComponent(JSON.stringify(r)))), l = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a), "/*# ".concat(l, " */")), s = n.sources.map(function(t) {
                                    return "/*# sourceURL=".concat(n.sourceRoot || "").concat(t, " */");
                                });
                                return [
                                    i
                                ].concat(s).concat([
                                    o
                                ]).join("\n");
                            }
                            var r, a, l;
                            return [
                                i
                            ].join("\n");
                        }(e, t);
                        return e[2] ? "@media ".concat(e[2], " {").concat(i, "}") : i;
                    }).join("");
                }, e.i = function(t, i, n) {
                    "string" == typeof t && (t = [
                        [
                            null,
                            t,
                            ""
                        ]
                    ]);
                    var o = {};
                    if (n) for(var s = 0; s < this.length; s++){
                        var r = this[s][0];
                        null != r && (o[r] = !0);
                    }
                    for(var a = 0; a < t.length; a++){
                        var l = [].concat(t[a]);
                        n && o[l[0]] || (i && (l[2] ? l[2] = "".concat(i, " and ").concat(l[2]) : l[2] = i), e.push(l));
                    }
                }, e;
            };
        },
        function(t, e, i) {
            "use strict";
            var n, o = {}, s = function() {
                return void 0 === n && (n = Boolean(window && document && document.all && !window.atob)), n;
            }, r = function() {
                var t = {};
                return function(e) {
                    if (void 0 === t[e]) {
                        var i = document.querySelector(e);
                        if (window.HTMLIFrameElement && i instanceof window.HTMLIFrameElement) try {
                            i = i.contentDocument.head;
                        } catch (t) {
                            i = null;
                        }
                        t[e] = i;
                    }
                    return t[e];
                };
            }();
            function a(t, e) {
                for(var i = [], n = {}, o = 0; o < t.length; o++){
                    var s = t[o], r = e.base ? s[0] + e.base : s[0], a = {
                        css: s[1],
                        media: s[2],
                        sourceMap: s[3]
                    };
                    n[r] ? n[r].parts.push(a) : i.push(n[r] = {
                        id: r,
                        parts: [
                            a
                        ]
                    });
                }
                return i;
            }
            function l(t, e) {
                for(var i = 0; i < t.length; i++){
                    var n = t[i], s = o[n.id], r = 0;
                    if (s) {
                        for(s.refs++; r < s.parts.length; r++)s.parts[r](n.parts[r]);
                        for(; r < n.parts.length; r++)s.parts.push(g(n.parts[r], e));
                    } else {
                        for(var a = []; r < n.parts.length; r++)a.push(g(n.parts[r], e));
                        o[n.id] = {
                            id: n.id,
                            refs: 1,
                            parts: a
                        };
                    }
                }
            }
            function c(t) {
                var e = document.createElement("style");
                if (void 0 === t.attributes.nonce) {
                    var n = i.nc;
                    n && (t.attributes.nonce = n);
                }
                if (Object.keys(t.attributes).forEach(function(i) {
                    e.setAttribute(i, t.attributes[i]);
                }), "function" == typeof t.insert) t.insert(e);
                else {
                    var o = r(t.insert || "head");
                    if (!o) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                    o.appendChild(e);
                }
                return e;
            }
            var h, p = (h = [], function(t, e) {
                return h[t] = e, h.filter(Boolean).join("\n");
            });
            function d(t, e, i, n) {
                var o = i ? "" : n.css;
                if (t.styleSheet) t.styleSheet.cssText = p(e, o);
                else {
                    var s = document.createTextNode(o), r = t.childNodes;
                    r[e] && t.removeChild(r[e]), r.length ? t.insertBefore(s, r[e]) : t.appendChild(s);
                }
            }
            function u(t, e, i) {
                var n = i.css, o = i.media, s = i.sourceMap;
                if (o && t.setAttribute("media", o), s && btoa && (n += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(s)))), " */")), t.styleSheet) t.styleSheet.cssText = n;
                else {
                    for(; t.firstChild;)t.removeChild(t.firstChild);
                    t.appendChild(document.createTextNode(n));
                }
            }
            var m = null, f = 0;
            function g(t, e) {
                var i, n, o;
                if (e.singleton) {
                    var s = f++;
                    i = m || (m = c(e)), n = d.bind(null, i, s, !1), o = d.bind(null, i, s, !0);
                } else i = c(e), n = u.bind(null, i, e), o = function() {
                    !function(t) {
                        if (null === t.parentNode) return !1;
                        t.parentNode.removeChild(t);
                    }(i);
                };
                return n(t), function(e) {
                    if (e) {
                        if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
                        n(t = e);
                    } else o();
                };
            }
            t.exports = function(t, e) {
                (e = e || {}).attributes = "object" == typeof e.attributes ? e.attributes : {}, e.singleton || "boolean" == typeof e.singleton || (e.singleton = s());
                var i = a(t, e);
                return l(i, e), function(t) {
                    for(var n = [], s = 0; s < i.length; s++){
                        var r = i[s], c = o[r.id];
                        c && (c.refs--, n.push(c));
                    }
                    t && l(a(t, e), e);
                    for(var h = 0; h < n.length; h++){
                        var p = n[h];
                        if (0 === p.refs) {
                            for(var d = 0; d < p.parts.length; d++)p.parts[d]();
                            delete o[p.id];
                        }
                    }
                };
            };
        },
        function(t, e, i) {
            "use strict";
            var n = this && this.__assign || function() {
                return (n = Object.assign || function(t) {
                    for(var e, i = 1, n = arguments.length; i < n; i++)for(var o in e = arguments[i])Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t;
                }).apply(this, arguments);
            };
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = i(0), s = i(1), r = i(2);
            s.Litepicker.prototype.show = function(t) {
                void 0 === t && (t = null), this.emit("before:show", t);
                var e = t || this.options.element;
                if (this.triggerElement = e, !this.isShowning()) {
                    if (this.options.inlineMode) return this.ui.style.position = "relative", this.ui.style.display = "inline-block", this.ui.style.top = null, this.ui.style.left = null, this.ui.style.bottom = null, void (this.ui.style.right = null);
                    this.scrollToDate(t), this.render(), this.ui.style.position = "absolute", this.ui.style.display = "block", this.ui.style.zIndex = this.options.zIndex;
                    var i = this.findPosition(e);
                    this.ui.style.top = i.top + "px", this.ui.style.left = i.left + "px", this.ui.style.right = null, this.ui.style.bottom = null, this.emit("show", t);
                }
            }, s.Litepicker.prototype.hide = function() {
                this.isShowning() && (this.datePicked.length = 0, this.updateInput(), this.options.inlineMode ? this.render() : (this.ui.style.display = "none", this.emit("hide")));
            }, s.Litepicker.prototype.getDate = function() {
                return this.getStartDate();
            }, s.Litepicker.prototype.getStartDate = function() {
                return this.options.startDate ? this.options.startDate.clone() : null;
            }, s.Litepicker.prototype.getEndDate = function() {
                return this.options.endDate ? this.options.endDate.clone() : null;
            }, s.Litepicker.prototype.setDate = function(t, e) {
                void 0 === e && (e = !1);
                var i = new o.DateTime(t, this.options.format, this.options.lang);
                r.dateIsLocked(i, this.options, [
                    i
                ]) && !e ? this.emit("error:date", i) : (this.setStartDate(t), this.options.inlineMode && this.render(), this.emit("selected", this.getDate()));
            }, s.Litepicker.prototype.setStartDate = function(t) {
                t && (this.options.startDate = new o.DateTime(t, this.options.format, this.options.lang), this.updateInput());
            }, s.Litepicker.prototype.setEndDate = function(t) {
                t && (this.options.endDate = new o.DateTime(t, this.options.format, this.options.lang), this.options.startDate.getTime() > this.options.endDate.getTime() && (this.options.endDate = this.options.startDate.clone(), this.options.startDate = new o.DateTime(t, this.options.format, this.options.lang)), this.updateInput());
            }, s.Litepicker.prototype.setDateRange = function(t, e, i) {
                void 0 === i && (i = !1), this.triggerElement = void 0;
                var n = new o.DateTime(t, this.options.format, this.options.lang), s = new o.DateTime(e, this.options.format, this.options.lang);
                (this.options.disallowLockDaysInRange ? r.rangeIsLocked([
                    n,
                    s
                ], this.options) : r.dateIsLocked(n, this.options, [
                    n,
                    s
                ]) || r.dateIsLocked(s, this.options, [
                    n,
                    s
                ])) && !i ? this.emit("error:range", [
                    n,
                    s
                ]) : (this.setStartDate(n), this.setEndDate(s), this.options.inlineMode && this.render(), this.updateInput(), this.emit("selected", this.getStartDate(), this.getEndDate()));
            }, s.Litepicker.prototype.gotoDate = function(t, e) {
                void 0 === e && (e = 0);
                var i = new o.DateTime(t);
                i.setDate(1), this.calendars[e] = i.clone(), this.render();
            }, s.Litepicker.prototype.setLockDays = function(t) {
                this.options.lockDays = o.DateTime.convertArray(t, this.options.lockDaysFormat), this.render();
            }, s.Litepicker.prototype.setHighlightedDays = function(t) {
                this.options.highlightedDays = o.DateTime.convertArray(t, this.options.highlightedDaysFormat), this.render();
            }, s.Litepicker.prototype.setOptions = function(t) {
                delete t.element, delete t.elementEnd, delete t.parentEl, t.startDate && (t.startDate = new o.DateTime(t.startDate, this.options.format, this.options.lang)), t.endDate && (t.endDate = new o.DateTime(t.endDate, this.options.format, this.options.lang));
                var e = n(n({}, this.options.dropdowns), t.dropdowns), i = n(n({}, this.options.buttonText), t.buttonText), s = n(n({}, this.options.tooltipText), t.tooltipText);
                this.options = n(n({}, this.options), t), this.options.dropdowns = n({}, e), this.options.buttonText = n({}, i), this.options.tooltipText = n({}, s), !this.options.singleMode || this.options.startDate instanceof o.DateTime || (this.options.startDate = null, this.options.endDate = null), this.options.singleMode || this.options.startDate instanceof o.DateTime && this.options.endDate instanceof o.DateTime || (this.options.startDate = null, this.options.endDate = null);
                for(var r = 0; r < this.options.numberOfMonths; r += 1){
                    var a = this.options.startDate ? this.options.startDate.clone() : new o.DateTime;
                    a.setDate(1), a.setMonth(a.getMonth() + r), this.calendars[r] = a;
                }
                this.options.lockDays.length && (this.options.lockDays = o.DateTime.convertArray(this.options.lockDays, this.options.lockDaysFormat)), this.options.highlightedDays.length && (this.options.highlightedDays = o.DateTime.convertArray(this.options.highlightedDays, this.options.highlightedDaysFormat)), this.render(), this.options.inlineMode && this.show(), this.updateInput();
            }, s.Litepicker.prototype.clearSelection = function() {
                this.options.startDate = null, this.options.endDate = null, this.datePicked.length = 0, this.updateInput(), this.isShowning() && this.render(), this.emit("clear:selection");
            }, s.Litepicker.prototype.destroy = function() {
                this.ui && this.ui.parentNode && (this.ui.parentNode.removeChild(this.ui), this.ui = null), this.emit("destroy");
            };
        }
    ]);
});

},{}],"2J54M":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "dateManager", ()=>dateManager);
const key = "dates";
const dateManager = {
    addDate (startDate, endDate) {
        const startDateInsatce = startDate.dateInstance;
        const endDateInsatce = endDate.dateInstance;
        const totalDays = (endDate.dateInstance - startDate.dateInstance) / 86400000;
        const options = {
            year: "numeric",
            month: "short",
            day: "numeric"
        };
        const startDateString = startDateInsatce.toLocaleDateString("en-EN", options);
        const endDateString = endDateInsatce.toLocaleDateString("en-EN", options);
        const dates = localStorage.getItem(key);
        let content;
        if (dates === null) content = {
            startDate: startDateString,
            endDate: endDateString,
            totalDays: totalDays
        };
        else {
            content = JSON.parse(dates);
            content.startDate = startDateString;
            content.endDate = endDateString;
            content.totalDays = totalDays;
        }
        localStorage.setItem(key, JSON.stringify(content));
    },
    getDates () {
        const dates = localStorage.getItem(key);
        if (dates === null) return [];
        else {
            const content = JSON.parse(dates);
            const stay = {
                startDate: content.startDate,
                endDate: content.endDate
            };
            const stayValues = Object.values(stay);
            return stayValues;
        }
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"67gtA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AddToCartBtn", ()=>AddToCartBtn);
var _addToCartBtnScss = require("./styles/addToCartBtn.scss");
var _cartManager = require("../../../data-managers/cart-manager");
function AddToCartBtn(item) {
    const addToCartButton = document.createElement("button");
    addToCartButton.innerText = "Add to cart";
    addToCartButton.classList.add("add-to-cart-btn");
    addToCartButton.addEventListener("click", ()=>{
        (0, _cartManager.cartManager).addItem(item);
        const cartCounter = document.querySelector("#cart_counter");
        cartCounter.innerHTML = `<p> ${(0, _cartManager.cartManager).getTotalItems()}</p>`;
    });
    return addToCartButton;
}

},{"./styles/addToCartBtn.scss":"8FVvi","../../../data-managers/cart-manager":"dUMDs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8FVvi":[function() {},{}],"dUMDs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cartManager", ()=>cartManager);
var _total = require("../js/views/Cart/Total");
const key = "cart";
const cartManager = {
    addItem (item) {
        const cart = localStorage.getItem(key);
        let content;
        if (cart === null) content = {
            [item.name]: {
                price: item.price,
                quantity: 1,
                type: item.type
            }
        };
        else {
            content = JSON.parse(cart);
            if (item.name in content && item.type === "treatment") content[item.name].quantity += 1;
            else {
                const newItem = {
                    [item.name]: {
                        price: item.price,
                        quantity: 1,
                        type: item.type
                    }
                };
                Object.assign(content, newItem);
            }
        }
        localStorage.setItem(key, JSON.stringify(content));
    },
    getRoomItems () {
        const cart = localStorage.getItem(key);
        const numberOfDays = JSON.parse(localStorage.getItem("dates"));
        if (cart === null) return;
        else {
            const content = JSON.parse(cart);
            return Object.entries(content).filter((entry)=>{
                const [roomName, roomDetails] = entry;
                if (roomDetails.type === "room") {
                    roomDetails.price = roomDetails.price * numberOfDays.totalDays;
                    return {};
                }
            });
        }
    },
    getTreatmentItems () {
        const cart = localStorage.getItem(key);
        if (cart === null || cart === {}) return;
        else {
            const content = JSON.parse(cart);
            return Object.entries(content).filter((entry)=>{
                const [treatmentName, treatmentDetails] = entry;
                if (treatmentDetails.type === "treatment") {
                    treatmentDetails.price = treatmentDetails.price * treatmentDetails.quantity;
                    return {};
                }
            });
        }
    },
    removeItem (item) {
        const cart = localStorage.getItem(key);
        const [itemName, itemDetails] = item;
        const content = JSON.parse(cart);
        if (cart !== null && Object.hasOwn(content, itemName)) {
            if (itemDetails.type === "room") delete content[itemName];
            else if (content[itemName].quantity > 1) content[itemName].quantity -= 1;
            else delete content[itemName];
        }
        localStorage.setItem(key, JSON.stringify(content));
        (0, _total.Total).updateTotalPrice();
    },
    getTotalPrice () {
        const cart = localStorage.getItem(key);
        const numberOfDays = JSON.parse(localStorage.getItem("dates"));
        if (cart === null) return "0.00";
        else {
            const content = JSON.parse(cart);
            return Object.values(content).reduce((totalPrice, item)=>{
                if (item.type === "room") return totalPrice + item.price * numberOfDays.totalDays;
                else return totalPrice + item.price * item.quantity;
            }, 0).toFixed(2);
        }
    },
    getTotalItems () {
        const cart = localStorage.getItem(key);
        if (cart === null) return "0";
        else {
            const content = JSON.parse(cart);
            return Object.values(content).reduce((totalItems, item)=>{
                return totalItems + item.quantity;
            }, 0);
        }
    }
};

},{"../js/views/Cart/Total":"1duRu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1duRu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Total", ()=>Total);
var _numberWithSpaces = require("../../commons/numberWithSpaces");
var _cartManager = require("../../../data-managers/cart-manager");
const Total = {
    total () {
        const total = document.createElement("div");
        total.setAttribute("class", "cart_total");
        const totalPrice = (0, _cartManager.cartManager).getTotalPrice();
        if (totalPrice === "0.00") return total;
        else {
            total.innerHTML = `
        <p>
         Total: <strong>${(0, _numberWithSpaces.numberWithSpaces)((0, _cartManager.cartManager).getTotalPrice())} $</strong>
        </p>
      `;
            return total;
        }
    },
    updateTotalPrice () {
        const total = document.querySelector(".cart_total");
        const totalPrice = (0, _cartManager.cartManager).getTotalPrice();
        if (totalPrice === "0.00") {
            total.parentNode.removeChild(total);
            return;
        } else total.innerHTML = `
    <p>
      Total: <strong>${(0, _numberWithSpaces.numberWithSpaces)(totalPrice)} $</strong>
    </p>`;
    }
};

},{"../../commons/numberWithSpaces":"6ROaV","../../../data-managers/cart-manager":"dUMDs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6ROaV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "numberWithSpaces", ()=>numberWithSpaces);
function numberWithSpaces(num) {
    let parts = num.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"53Pqd":[function(require,module,exports) {
// bypass of dynamic photo input
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ImageHandler", ()=>ImageHandler);
function ImageHandler(photoId) {
    let src;
    switch(photoId){
        case "photo1":
            src = new URL(require("4b29008d95ca68ca"));
            break;
        case "photo2":
            src = new URL(require("cdd12fd8fe9af760"));
            break;
        case "photo3":
            src = new URL(require("cc8880348f63d138"));
            break;
        case "photo4":
            src = new URL(require("2341ad2c0fdbb6e9"));
            break;
        case "photo5":
            src = new URL(require("f1c21368fb85d557"));
            break;
        case "photo6":
            src = new URL(require("bc11b131db7f837a"));
            break;
    }
    return src;
}

},{"4b29008d95ca68ca":"aLJtg","cdd12fd8fe9af760":"fKmCj","cc8880348f63d138":"6SSah","2341ad2c0fdbb6e9":"lx8zt","f1c21368fb85d557":"icuNi","bc11b131db7f837a":"iBjsy","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aLJtg":[function(require,module,exports) {
module.exports = require("c80f406af48ecab4").getBundleURL("g05j8") + "room-1.e05887c5.jpg" + "?" + Date.now();

},{"c80f406af48ecab4":"lgJ39"}],"fKmCj":[function(require,module,exports) {
module.exports = require("92fcc1812846d4ee").getBundleURL("g05j8") + "room-2.bfd82b50.jpg" + "?" + Date.now();

},{"92fcc1812846d4ee":"lgJ39"}],"6SSah":[function(require,module,exports) {
module.exports = require("7f4890608c0f5715").getBundleURL("g05j8") + "room-3.33290f23.jpg" + "?" + Date.now();

},{"7f4890608c0f5715":"lgJ39"}],"lx8zt":[function(require,module,exports) {
module.exports = require("d94fb6012ef278ae").getBundleURL("g05j8") + "room-4.cddb0d90.jpg" + "?" + Date.now();

},{"d94fb6012ef278ae":"lgJ39"}],"icuNi":[function(require,module,exports) {
module.exports = require("dfbc674f05962c08").getBundleURL("g05j8") + "room-5.70338a17.jpg" + "?" + Date.now();

},{"dfbc674f05962c08":"lgJ39"}],"iBjsy":[function(require,module,exports) {
module.exports = require("ef1e8885e82f92e4").getBundleURL("g05j8") + "room-6.37daf2a8.jpg" + "?" + Date.now();

},{"ef1e8885e82f92e4":"lgJ39"}],"68wBN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ReadMoreBtn", ()=>ReadMoreBtn);
function ReadMoreBtn(componentFn) {
    const button = document.createElement("button");
    button.className = "read-more-btn";
    const buttonAttributes = {
        type: "button",
        id: "read-more-btn"
    };
    for(const property in buttonAttributes)button.setAttribute(property, buttonAttributes[property]);
    const text = "Read more...";
    button.innerText = text;
    button.addEventListener("click", ()=>{
        const navigationEvent = new CustomEvent("navigate", {
            detail: componentFn
        });
        document.body.dispatchEvent(navigationEvent);
    });
    return button;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iRqXa":[function(require,module,exports) {
module.exports = require("99c8d0ed5148c5").getBundleURL("g05j8") + "lotus.80316f2b.png" + "?" + Date.now();

},{"99c8d0ed5148c5":"lgJ39"}],"iyWr4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Header", ()=>Header);
var _headerScss = require("./styles/header.scss");
var _roomList = require("../../views/RoomList/RoomList");
var _treatmentList = require("../../views/TreatmentList/TreatmentList");
var _navLinksBtn = require("./buttons/NavLinksBtn");
var _cartBtn = require("./buttons/CartBtn");
var _homeBtn = require("./buttons/HomeBtn");
var _mobileNavLinksBtn = require("./buttons/MobileNavLinksBtn");
var _logOutBtn = require("./buttons/LogOutBtn");
var _hamburgerMenu = require("./HamburgerMenu");
var _cartManager = require("../../../data-managers/cart-manager");
const navItems = [
    {
        name: "Rooms",
        component: (0, _roomList.RoomList)
    },
    {
        name: "Treatments",
        component: (0, _treatmentList.TreatmentList)
    }
];
function Header() {
    // main container
    const header = document.createElement("header");
    header.setAttribute("class", "header");
    const nav = document.createElement("nav");
    nav.setAttribute("class", "header_nav");
    // left navigation (home & site-links)
    const navLeft = document.createElement("nav");
    navLeft.setAttribute("class", "header_nav_left");
    navLeft.innerHTML = `
    <div class="header_nav_left_home"></div>
    <ul class="header_nav_left_links"></ul>
  `;
    const home = navLeft.firstElementChild;
    const links = navLeft.lastElementChild;
    const navLinks = navItems.map((navItem)=>(0, _navLinksBtn.NavLinksBtn)(navItem.name, navItem.component));
    // logo
    const logo = document.createElement("div");
    logo.setAttribute("class", "header_nav_logo");
    const src = new URL(require("c7ab3bf09b99ec4d"));
    logo.innerHTML = `
  <img src="${src}" alt="Lotus logo" class="header_nav_logo_lotus"/>
  <p class="header_nav_logo_text">Lotus SPA</p>
  `;
    // right navigation (cart)
    const navRight = document.createElement("div");
    navRight.setAttribute("class", "header_nav_right");
    navRight.innerHTML = `
  <div id=cart_counter>
    <p>
      ${(0, _cartManager.cartManager).getTotalItems()}
    </p>
  </div>`;
    // Mobile navigation menu
    const hamburgerMenu = document.createElement("div");
    hamburgerMenu.setAttribute("id", "header_mobilenav");
    hamburgerMenu.innerHTML = `
  <div id="header_mobilenav_menu">
    <ul id="header_mobilenav_menu_links"></ul>
  </div>
  `;
    const linksMobile = hamburgerMenu.firstElementChild.firstElementChild;
    const navLinksMobile = navItems.map((navItem)=>(0, _navLinksBtn.NavLinksBtn)(navItem.name, navItem.component));
    navRight.append((0, _logOutBtn.LogoutBtn)(), (0, _cartBtn.CartBtn)());
    links.append(...navLinks);
    home.prepend((0, _homeBtn.HomeBtn)());
    linksMobile.append((0, _mobileNavLinksBtn.MobileNavLinksBtn)(), ...navLinksMobile);
    hamburgerMenu.append((0, _hamburgerMenu.HamburgerMenu)());
    navLeft.append(hamburgerMenu);
    nav.append(navLeft, logo, navRight);
    header.append(nav);
    return header;
}

},{"./styles/header.scss":"2lEov","../../views/RoomList/RoomList":"7ezq4","../../views/TreatmentList/TreatmentList":"e6f5l","./buttons/NavLinksBtn":"4u29q","./buttons/CartBtn":"fieVJ","./buttons/HomeBtn":"9krCK","./buttons/MobileNavLinksBtn":"8WKV6","./buttons/LogOutBtn":"b1CXc","./HamburgerMenu":"spMSE","../../../data-managers/cart-manager":"dUMDs","c7ab3bf09b99ec4d":"iRqXa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2lEov":[function() {},{}],"e6f5l":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TreatmentList", ()=>TreatmentList);
var _treatmentListScss = require("./styles/treatment-list.scss");
var _showTreatmentDetailsBtn = require("./ShowTreatmentDetailsBtn");
var _addToCartBtn = require("../../commons/addToCartBtn/addToCartBtn");
function TreatmentList() {
    const header = document.querySelector(".header_nav");
    header.setAttribute("class", "header_nav");
    const main = document.querySelector("main");
    main.setAttribute("class", "treatments");
    const section = document.createElement("section");
    section.setAttribute("class", "treatments_section");
    section.innerHTML = `<h1>Treatments</h1>`;
    const treatmentsList = document.createElement("ul");
    treatmentsList.setAttribute("class", "treatments_list");
    fetch("http://localhost:3000/treatments").then((response)=>response.json()).then((treatments)=>{
        const list = treatments.map((treatment)=>{
            const treatmentItem = document.createElement("li");
            treatmentItem.setAttribute("class", "treatments_treatmentItem");
            const treatmentHeader = document.createElement("div");
            treatmentHeader.setAttribute("class", "treatments_treatmentItem_header");
            treatmentHeader.innerHTML = `
        <h2 class="treatments_treatmentItem_header_name">${treatment.name}
        </h2>`;
            // Show Treatments details handler
            treatmentHeader.addEventListener("click", ()=>treatmentBody.toggleAttribute("hidden"));
            // Treatment details
            const treatmentBody = document.createElement("div");
            const treatmentBodyAttributes = {
                hidden: "",
                class: "treatments_treatmentItem_body"
            };
            for(const property in treatmentBodyAttributes)treatmentBody.setAttribute(property, treatmentBodyAttributes[property]);
            treatmentBody.innerHTML = `
          <div class="treatments_treatmentItem_description">
            <p>${treatment.description}</p>
          </div>
          <div class="treatments_treatmentItem_footer">
            <ul class="treatments_treatmentItem_footer_details">
              <li>Area: <span>${treatment.area}</span></li>
              <li>Duration: <span>${treatment.time} min</span></li>
              <li>Price: <span>${treatment.price.toFixed(2)} $</span></li>
            </ul>
          </div>`;
            const treatmentDetails = treatmentBody.lastChild.firstElementChild;
            treatmentDetails.append((0, _addToCartBtn.AddToCartBtn)(treatment));
            treatmentHeader.append((0, _showTreatmentDetailsBtn.ShowTreatmentDetailsBtn)());
            treatmentItem.append(treatmentHeader, treatmentBody);
            return treatmentItem;
        });
        treatmentsList.append(...list);
        section.append(treatmentsList);
    });
    return section;
}

},{"./styles/treatment-list.scss":"eKcac","./ShowTreatmentDetailsBtn":"dFN7L","../../commons/addToCartBtn/addToCartBtn":"67gtA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eKcac":[function() {},{}],"dFN7L":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ShowTreatmentDetailsBtn", ()=>ShowTreatmentDetailsBtn);
function ShowTreatmentDetailsBtn() {
    const expandIcon = document.createElement("img");
    expandIcon.src = new URL(require("fedf7be313c5ff7d"));
    const iconAttributes = {
        alt: "Expand icon",
        class: "expand-icon"
    };
    for(const property in iconAttributes)expandIcon.setAttribute(property, iconAttributes[property]);
    return expandIcon;
}

},{"fedf7be313c5ff7d":"g5Hzm","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g5Hzm":[function(require,module,exports) {
module.exports = require("d0a85a7be3942fad").getBundleURL("g05j8") + "expand.f9a3e9b8.svg" + "?" + Date.now();

},{"d0a85a7be3942fad":"lgJ39"}],"4u29q":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NavLinksBtn", ()=>NavLinksBtn);
function NavLinksBtn(link, component) {
    const li = document.createElement("li");
    li.setAttribute("class", "header_nav_left_links_li");
    li.innerText = link;
    li.addEventListener("click", ()=>{
        const navigationEvent = new CustomEvent("navigate", {
            detail: component
        });
        document.body.dispatchEvent(navigationEvent);
        const navMobile = document.querySelector("#header_mobilenav_menu");
        navMobile.classList.remove("visible");
    });
    return li;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fieVJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CartBtn", ()=>CartBtn);
var _cart = require("../../../views/Cart/Cart");
var _cartHover = require("../../../views/Cart/CartHover");
function CartBtn() {
    const cartIcon = document.createElement("img");
    cartIcon.src = new URL(require("e64963d0c44a7dd2"));
    const iconAttributes = {
        alt: "Shopping-cart icon",
        id: "cart-btn"
    };
    for(const property in iconAttributes)cartIcon.setAttribute(property, iconAttributes[property]);
    cartIcon.addEventListener("click", ()=>{
        const cartEvent = new CustomEvent("navigate", {
            detail: (0, _cart.Cart)
        });
        document.body.dispatchEvent(cartEvent);
    });
    cartIcon.addEventListener("mouseover", ()=>{
        const nav = document.querySelector(".header_nav");
        nav.appendChild((0, _cartHover.CartHover)());
    });
    cartIcon.addEventListener("mouseleave", ()=>{
        const nav = document.querySelector(".header_nav");
        const cartHover = document.querySelector("#cart_hover_section");
        nav.removeChild(cartHover);
    });
    return cartIcon;
}

},{"../../../views/Cart/Cart":"cm0eb","../../../views/Cart/CartHover":"xWYa0","e64963d0c44a7dd2":"8obiQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cm0eb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Cart", ()=>Cart);
var _cartScss = require("./styles/cart.scss");
var _roomList = require("../RoomList/RoomList");
var _roomsListing = require("./RoomsListing");
var _treatmentsListing = require("./TreatmentsListing");
var _listingCheck = require("./ListingCheck");
var _total = require("./Total");
function Cart() {
    const header = document.querySelector(".header_nav");
    header.setAttribute("class", "header_nav cart_header");
    const main = document.querySelector("main");
    main.setAttribute("class", "cart");
    // Cart section
    const section = document.createElement("section");
    section.setAttribute("class", "cart_section");
    section.innerHTML = `<h1>Cart</h1>`;
    // Dates
    const stayDate = document.createElement("div");
    stayDate.setAttribute("class", "cart_stay");
    const dates = JSON.parse(localStorage.getItem("dates"));
    if (dates.startDate === undefined) stayDate.innerHTML = `
    <div id="dates" ><span>Chose your stay dates</span></div>
  `;
    else stayDate.innerHTML = `
    <div id="dates" >Your stay: <span >${dates.startDate} - ${dates.endDate}<span></div>
  `;
    stayDate.addEventListener("click", ()=>{
        const navigationEvent = new CustomEvent("navigate", {
            detail: (0, _roomList.RoomList)
        });
        document.body.dispatchEvent(navigationEvent);
    });
    // List of rooms in cart
    const roomsHeader = document.createElement("h2");
    roomsHeader.innerHTML = "Rooms";
    const roomsList = document.querySelector(".cart_rooms_list");
    const RoomsListingHolder = (0, _roomsListing.RoomsListing)();
    // List of treatments in cart
    const treatmentsHeader = document.createElement("h2");
    treatmentsHeader.innerHTML = "Treatments";
    const treatmentList = document.querySelector(".cart_treatments_list");
    const TreatmentListingHolder = (0, _treatmentsListing.TreatmentListing)();
    section.append(stayDate, roomsHeader, RoomsListingHolder, treatmentsHeader, TreatmentListingHolder, (0, _total.Total).total());
    (0, _listingCheck.ListingCheck)(RoomsListingHolder, roomsList);
    (0, _listingCheck.ListingCheck)(TreatmentListingHolder, treatmentList);
    return section;
}

},{"./styles/cart.scss":"hqCkB","../RoomList/RoomList":"7ezq4","./RoomsListing":"1tYpc","./TreatmentsListing":"7jHIe","./ListingCheck":"8qXj9","./Total":"1duRu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hqCkB":[function() {},{}],"1tYpc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RoomsListing", ()=>RoomsListing);
var _listings = require("./Listings");
var _numberWithSpaces = require("../../commons/numberWithSpaces");
var _cartManager = require("../../../data-managers/cart-manager");
function RoomsListing() {
    const roomsList = document.createElement("ul");
    roomsList.setAttribute("class", "cart_list cart_rooms_list cart_hover_rooms_list");
    const rlist = (0, _cartManager.cartManager).getRoomItems().map((itemContent)=>{
        const numberOfDays = JSON.parse(localStorage.getItem("dates"));
        const [roomName, roomDetails] = itemContent;
        const itemContainerText = `
      <div class="cart_list_item_container_details">
        <div class="room-name"><strong>${roomName}</strong></div>
        <div class="number-of-days">No. of days:&nbsp<span>${numberOfDays.totalDays}</span></div>
        <div class="room-price">Price: <span>${(0, _numberWithSpaces.numberWithSpaces)(roomDetails.price.toFixed(2))}&nbsp$</span></div>
      </div>`;
        return (0, _listings.Listing)(itemContent, itemContainerText);
    });
    roomsList.append(...rlist);
    return roomsList;
}

},{"./Listings":"87Q39","../../commons/numberWithSpaces":"6ROaV","../../../data-managers/cart-manager":"dUMDs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"87Q39":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Listing", ()=>Listing);
var _deleteBtn = require("./buttons/DeleteBtn");
function Listing(itemContent, itemContainerText) {
    const cartItem = document.createElement("li");
    cartItem.setAttribute("class", "cart_list_item");
    const itemContainer = document.createElement("div");
    itemContainer.setAttribute("class", "cart_list_item_container");
    itemContainer.innerHTML = itemContainerText;
    itemContainer.append((0, _deleteBtn.DeleteBtn).deleteBtn(itemContent));
    cartItem.append(itemContainer);
    return cartItem;
}

},{"./buttons/DeleteBtn":"8vmPc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8vmPc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DeleteBtn", ()=>DeleteBtn);
var _roomsListing = require("../RoomsListing");
var _treatmentsListing = require("../TreatmentsListing");
var _listingCheck = require("../ListingCheck");
var _cartManager = require("../../../../data-managers/cart-manager");
var _numberWithSpaces = require("../../../commons/numberWithSpaces");
const DeleteBtn = {
    deleteBtn (itemContent) {
        const removeItem = document.createElement("div");
        removeItem.setAttribute("class", "cart_list_container_delete");
        const deleteIcon = document.createElement("img");
        deleteIcon.src = new URL(require("2ae5760da9dd13ed"));
        const iconAttributes = {
            alt: "Delete icon",
            id: "delete-btn"
        };
        for(const property in iconAttributes)deleteIcon.setAttribute(property, iconAttributes[property]);
        deleteIcon.addEventListener("click", ()=>{
            const cart = JSON.parse(localStorage.getItem("cart"));
            const [itemName, itemDetails] = itemContent;
            (0, _cartManager.cartManager).removeItem(itemContent);
            const cartCounter = document.querySelector("#cart_counter");
            cartCounter.innerHTML = `<p> ${(0, _cartManager.cartManager).getTotalItems()}</p>`;
            if (itemDetails.quantity === 1) {
                const cartItem = removeItem.parentNode.parentNode;
                cartItem.remove();
                const roomsList = document.querySelector(".cart_rooms_list");
                const RoomsListingHolder = (0, _roomsListing.RoomsListing)();
                (0, _listingCheck.ListingCheck)(RoomsListingHolder, roomsList);
                const treatmentList = document.querySelector(".cart_treatments_list");
                const TreatmentListingHolder = (0, _treatmentsListing.TreatmentListing)();
                (0, _listingCheck.ListingCheck)(TreatmentListingHolder, treatmentList);
            } else {
                itemDetails.quantity--;
                itemDetails.price = cart[itemName].price * itemDetails.quantity;
                const itemContainer = removeItem.parentNode;
                removeItem.parentNode.innerHTML = `
        <div class="cart_list_item_container_details">
        <div><strong>${itemName}</strong></div>
        <div>Treatments no. <span>${itemDetails.quantity}</span></div>
        <div>Price: <span>${(0, _numberWithSpaces.numberWithSpaces)(itemDetails.price.toFixed(2))} $</span></div>
        </div>`;
                removeItem.append(deleteIcon);
                itemContainer.append(removeItem);
            }
        });
        removeItem.append(deleteIcon);
        return removeItem;
    }
};

},{"../RoomsListing":"1tYpc","../TreatmentsListing":"7jHIe","../ListingCheck":"8qXj9","../../../../data-managers/cart-manager":"dUMDs","../../../commons/numberWithSpaces":"6ROaV","2ae5760da9dd13ed":"8SJP1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7jHIe":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TreatmentListing", ()=>TreatmentListing);
var _listings = require("./Listings");
var _cartManager = require("../../../data-managers/cart-manager");
var _numberWithSpaces = require("../../commons/numberWithSpaces");
function TreatmentListing() {
    const treatmentList = document.createElement("ul");
    treatmentList.setAttribute("class", "cart_list cart_treatments_list");
    const tlist = (0, _cartManager.cartManager).getTreatmentItems().map((itemContent)=>{
        const [treatmentName, treatmentDetails] = itemContent;
        let itemContainerText = `
      <div class="cart_list_item_container_details">
        <div><strong>${treatmentName}</strong></div>
        <div>Treatments no.&nbsp<span>${treatmentDetails.quantity}</span></div>
        <div>Price: <span>${(0, _numberWithSpaces.numberWithSpaces)(treatmentDetails.price.toFixed(2))}&nbsp$</span></div>
      </div>`;
        return (0, _listings.Listing)(itemContent, itemContainerText);
    });
    treatmentList.append(...tlist);
    return treatmentList;
}

},{"./Listings":"87Q39","../../../data-managers/cart-manager":"dUMDs","../../commons/numberWithSpaces":"6ROaV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8qXj9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ListingCheck", ()=>ListingCheck);
function ListingCheck(ListingHolder, itemList) {
    if (!itemList.hasChildNodes()) {
        itemList.innerHTML = `<li class="list-checker">Nothing selected yet...</li>`;
        ListingHolder.replaceWith(itemList);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8SJP1":[function(require,module,exports) {
module.exports = require("11bfa3a2829ef18f").getBundleURL("g05j8") + "delete.cd08c762.svg" + "?" + Date.now();

},{"11bfa3a2829ef18f":"lgJ39"}],"xWYa0":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CartHover", ()=>CartHover);
var _cartHoverScss = require("./styles/cart-hover.scss");
var _roomsListing = require("./RoomsListing");
var _treatmentsListing = require("./TreatmentsListing");
var _numberWithSpaces = require("../../commons/numberWithSpaces");
var _cartManager = require("../../../data-managers/cart-manager");
function CartHover() {
    // Cart section
    const section = document.createElement("section");
    section.setAttribute("id", "cart_hover_section");
    section.innerHTML = `<h2>Cart</h2>`;
    // Dates
    const stayDate = document.createElement("div");
    const dates = JSON.parse(localStorage.getItem("dates"));
    if (dates.startDate === undefined) stayDate.innerHTML = `<div id="dates_hover" >No dates selected...</div>`;
    else stayDate.innerHTML = `
    <div id="dates_hover" >
      Your stay: 
      <span >${dates.startDate} - ${dates.endDate}<span>
    </div>
  `;
    // List of rooms in cart
    const roomsHeader = document.createElement("h3");
    roomsHeader.innerHTML = "Rooms";
    const RoomsListingHolder = (0, _roomsListing.RoomsListing)();
    // List of treatments in cart
    const treatmentsHeader = document.createElement("h3");
    treatmentsHeader.innerHTML = "Treatments";
    const TreatmentListingHolder = (0, _treatmentsListing.TreatmentListing)();
    const total = document.createElement("div");
    total.setAttribute("id", "cart_hover_section_total");
    const totalPrice = (0, _cartManager.cartManager).getTotalPrice();
    if (totalPrice === "0.00") total.innerHTML = `
        <p id="empty-cart">
         Cart is empty
        </p>
      `;
    else total.innerHTML = `
        <p>
         Total: <strong>${(0, _numberWithSpaces.numberWithSpaces)((0, _cartManager.cartManager).getTotalPrice())} $</strong>
        </p>
      `;
    section.append(stayDate, roomsHeader, RoomsListingHolder, treatmentsHeader, TreatmentListingHolder, total);
    if (totalPrice === "0.00") {
        section.removeChild(roomsHeader);
        section.removeChild(treatmentsHeader);
    }
    return section;
}

},{"./styles/cart-hover.scss":"2PUow","./RoomsListing":"1tYpc","./TreatmentsListing":"7jHIe","../../commons/numberWithSpaces":"6ROaV","../../../data-managers/cart-manager":"dUMDs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2PUow":[function() {},{}],"8obiQ":[function(require,module,exports) {
module.exports = require("988d873a79f6346").getBundleURL("g05j8") + "shopping-cart.04a2d682.svg" + "?" + Date.now();

},{"988d873a79f6346":"lgJ39"}],"9krCK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HomeBtn", ()=>HomeBtn);
var _home = require("../../../views/Home/Home");
function HomeBtn() {
    const homeIcon = document.createElement("img");
    homeIcon.src = new URL(require("a700ea1c6c6b9b29"));
    const iconAttributes = {
        alt: "Home icon",
        id: "home-btn"
    };
    for(const property in iconAttributes)homeIcon.setAttribute(property, iconAttributes[property]);
    homeIcon.addEventListener("click", ()=>{
        const homeEvent = new CustomEvent("navigate", {
            detail: (0, _home.Home)
        });
        document.body.dispatchEvent(homeEvent);
    });
    return homeIcon;
}

},{"../../../views/Home/Home":"aRd5g","a700ea1c6c6b9b29":"4VxbR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4VxbR":[function(require,module,exports) {
module.exports = require("58de666e970e7532").getBundleURL("g05j8") + "home.263eb2fc.svg" + "?" + Date.now();

},{"58de666e970e7532":"lgJ39"}],"8WKV6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MobileNavLinksBtn", ()=>MobileNavLinksBtn);
var _home = require("../../../views/Home/Home");
function MobileNavLinksBtn() {
    const li = document.createElement("li");
    li.setAttribute("id", "header_mobilenav_menu_home");
    li.innerText = "Home";
    li.addEventListener("click", ()=>{
        const navigationEvent = new CustomEvent("navigate", {
            detail: (0, _home.Home)
        });
        document.body.dispatchEvent(navigationEvent);
        const navMobile = document.querySelector("#header_mobilenav_menu");
        navMobile.classList.remove("visible");
    });
    return li;
}

},{"../../../views/Home/Home":"aRd5g","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b1CXc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LogoutBtn", ()=>LogoutBtn);
var _userManager = require("../../../../data-managers/user-manager");
function LogoutBtn() {
    const button = document.createElement("button");
    const buttonAttributes = {
        type: "button",
        id: "logout-btn"
    };
    for(const property in buttonAttributes)button.setAttribute(property, buttonAttributes[property]);
    if (localStorage.getItem("users")) button.classList.remove("hide");
    const text = "Log out";
    button.innerText = text;
    button.addEventListener("click", (0, _userManager.userManager).logoutUser);
    return button;
}

},{"../../../../data-managers/user-manager":"f64Gd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"spMSE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HamburgerMenu", ()=>HamburgerMenu);
function HamburgerMenu() {
    const menuIcon = document.createElement("img");
    menuIcon.src = new URL(require("106ca2c597d815eb"));
    const iconAttributes = {
        alt: "Menu icon",
        id: "menu-btn"
    };
    for(const property in iconAttributes)menuIcon.setAttribute(property, iconAttributes[property]);
    menuIcon.addEventListener("click", ()=>{
        const navMobile = document.querySelector("#header_mobilenav_menu");
        navMobile.classList.toggle("visible");
    });
    return menuIcon;
}

},{"106ca2c597d815eb":"e0jJd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e0jJd":[function(require,module,exports) {
module.exports = require("fedbad098d417c0d").getBundleURL("g05j8") + "menu.06e2b87e.svg" + "?" + Date.now();

},{"fedbad098d417c0d":"lgJ39"}]},["j9r0q","ebWYT"], "ebWYT", "parcelRequire5d14")

//# sourceMappingURL=index.739bf03c.js.map
