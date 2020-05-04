// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
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
      localRequire.cache = {};

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

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
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
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"images/xiha.jpg":[function(require,module,exports) {
module.exports = "/xiha.60489e2a.jpg";
},{}],"images/xgs.jpg":[function(require,module,exports) {
module.exports = "/xgs.12ae5c89.jpg";
},{}],"images/ljj.jpg":[function(require,module,exports) {
module.exports = "/ljj.10a180df.jpg";
},{}],"images/xl.jpg":[function(require,module,exports) {
module.exports = "/xl.0cda7505.jpg";
},{}],"images/joey.jpg":[function(require,module,exports) {
module.exports = "/joey.5d6c78ba.jpg";
},{}],"scripts/img.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "img1", {
  enumerable: true,
  get: function () {
    return _xiha.default;
  }
});
Object.defineProperty(exports, "img2", {
  enumerable: true,
  get: function () {
    return _xgs.default;
  }
});
Object.defineProperty(exports, "img3", {
  enumerable: true,
  get: function () {
    return _ljj.default;
  }
});
Object.defineProperty(exports, "img4", {
  enumerable: true,
  get: function () {
    return _xl.default;
  }
});
Object.defineProperty(exports, "img5", {
  enumerable: true,
  get: function () {
    return _joey.default;
  }
});

var _xiha = _interopRequireDefault(require("/images/xiha.jpg"));

var _xgs = _interopRequireDefault(require("/images/xgs.jpg"));

var _ljj = _interopRequireDefault(require("/images/ljj.jpg"));

var _xl = _interopRequireDefault(require("/images/xl.jpg"));

var _joey = _interopRequireDefault(require("/images/joey.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"/images/xiha.jpg":"images/xiha.jpg","/images/xgs.jpg":"images/xgs.jpg","/images/ljj.jpg":"images/ljj.jpg","/images/xl.jpg":"images/xl.jpg","/images/joey.jpg":"images/joey.jpg"}],"scripts/slider.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Slider = /*#__PURE__*/function () {
  function Slider() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Slider);

    this.$el = options.el;
    this.slides = options.slides;
    this.interval = options.interval || 3000;
    this.index = 0;
    this.render();
    this.start();
  }

  _createClass(Slider, [{
    key: "render",
    value: function render() {
      this.$el.innerHTML = "<div class=\"qq-slider-wrap\"></div>";
      this.$wrap = this.$el.firstElementChild;
      this.$wrap.style.width = "".concat(this.slides.length * 100, "%");
      this.$wrap.innerHTML = this.slides.map(function (slide) {
        return "<div class=\"qq-slider-item\">\n          <a href=\"".concat(slide.link, "\">\n            <img src=\"").concat(slide.image, "\">\n          </a>\n      </div>");
      }).join('');
    }
  }, {
    key: "start",
    value: function start() {
      setInterval(this.next.bind(this), this.interval);
    }
  }, {
    key: "next",
    value: function next() {
      this.index += 1;

      if (this.index === this.slides.length) {
        this.$wrap.style.transform = "translate(0)";
        this.index = 0;
        return;
      }

      var x = "-".concat(this.index * 100 / this.slides.length, "%");
      this.$wrap.style.transform = "translate(".concat(x, ")");
    }
  }]);

  return Slider;
}();

exports.default = Slider;
},{}],"json/rec.json":[function(require,module,exports) {
module.exports = {
  "code": 0,
  "data": {
    "slider": [{
      "linkUrl": "http://y.qq.com/w/album.html?albummid=003wZwce0qD7oC",
      "picUrl": "http://y.gtimg.cn/music/photo_new/T003R720x288M000000LQe970vEsO9.jpg",
      "id": 11781
    }, {
      "linkUrl": "http://y.qq.com/w/album.html?albummid=000128Gr4RsuUt",
      "picUrl": "http://y.gtimg.cn/music/photo_new/T003R720x288M000003KJFhQ1bHUe3.jpg",
      "id": 11784
    }, {
      "linkUrl": "https://y.qq.com/m/digitalbum/gold/index.html?_video=true&id=2218592&g_f=shoujijiaodian",
      "picUrl": "http://y.gtimg.cn/music/photo_new/T003R720x288M000002s45e03cSE9g.jpg",
      "id": 11767
    }, {
      "linkUrl": "http://y.qq.com/w/album.html?albummid=003wqRXy01mDkU",
      "picUrl": "http://y.gtimg.cn/music/photo_new/T003R720x288M00000460Dbk0AT72C.jpg",
      "id": 11759
    }, {
      "linkUrl": "https://y.qq.com/msa/cdreview/0_4147.html",
      "picUrl": "http://y.gtimg.cn/music/photo_new/T003R720x288M000001Pewzz3ExqBS.jpg",
      "id": 11504
    }],
    "radioList": [{
      "picUrl": "http://y.gtimg.cn/music/photo/radio/track_radio_307_13_1.jpg",
      "Ftitle": "一人一首招牌歌",
      "radioid": 307
    }, {
      "picUrl": "http://y.gtimg.cn/music/photo/radio/track_radio_199_13_1.jpg",
      "Ftitle": "热歌",
      "radioid": 199
    }],
    "songList": [{
      "songListDesc": "催泪大杀器！盘点演唱会经典万人大合唱",
      "picUrl": "http://p.qpic.cn/music_cover/1Fr9IFMhWDPeUzWKVEjn3QTL2eX2QziaJmaL0ZAmsvtW71ic9IDUoYzg/300?n=1",
      "id": "2646688496",
      "accessnum": 4248898,
      "songListAuthor": "Harry"
    }, {
      "songListDesc": "纳尼？这些华语歌手竟然会唱日语歌！",
      "picUrl": "http://p.qpic.cn/music_cover/z8wAFqicQ1qhImeiajkrgiaR4hYM3pzsUULFnicXshFXdw9uGkm261Ex9g/300?n=1",
      "id": "1144416825",
      "accessnum": 603233,
      "songListAuthor": "风吹草地"
    }, {
      "songListDesc": "精选内地十大民谣歌手代表作",
      "picUrl": "http://p.qpic.cn/music_cover/hVUsfUFG2DV466URqw7PT7X66OknPIhic2mKDgicawN4qThIR7yhYY1w/300?n=1",
      "id": "2043041547",
      "accessnum": 698829,
      "songListAuthor": "１'s   ヽ"
    }, {
      "songListDesc": "2016Billboard嘻哈榜精选",
      "picUrl": "http://p.qpic.cn/music_cover/tkduvk4dwqBxwzZhsNe0nwkwyiaLHVkxtla7REsX0yNkhibOH3Bdb2og/300?n=1",
      "id": "2040362185",
      "accessnum": 1151148,
      "songListAuthor": "　"
    }, {
      "songListDesc": "浮光掠影：ACG纯音乐赏析合辑",
      "picUrl": "http://p.qpic.cn/music_cover/XMPAjfs5uwGZdWII3osvAvCRyNWx8Pqy5Yice41OCZlBhLtk0p0icNvg/300?n=1",
      "id": "1723063372",
      "accessnum": 851172,
      "songListAuthor": "肥喵"
    }, {
      "songListDesc": "trip-hop单曲大推荐",
      "picUrl": "http://y.gtimg.cn/music/photo_new/T005R600x600M000002CJKAY1LKpcz.jpg?n=1",
      "id": "3482605622",
      "accessnum": 356499,
      "songListAuthor": "哑忍"
    }]
  }
};
},{}],"scripts/app.js":[function(require,module,exports) {
"use strict";

var imgs = _interopRequireWildcard(require("./img"));

var _slider = _interopRequireDefault(require("./slider.js"));

var _rec = _interopRequireDefault(require("/json/rec.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

(function () {
  console.log('json: ', _rec.default); //fetch本地文件容易出现跨域的问题，本地文件尽量使用 import export
  // fetch('/json/rec.json')
  // .then(res => res.json())
  // .then(render)
  // .catch(err => {
  //   console.log('err: ', err)
  // })

  (function renderSlider(json) {
    var slides = json.data.slider.map(function (slide) {
      return {
        link: slide.linkUrl,
        image: slide.picUrl
      };
    });
    new _slider.default({
      el: document.querySelector('#slider'),
      slides: slides
    });
  })(_rec.default);
})();
},{"./img":"scripts/img.js","./slider.js":"scripts/slider.js","/json/rec.json":"json/rec.json"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56227" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
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
  overlay.id = OVERLAY_ID; // html encode message and stack trace

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

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
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
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","scripts/app.js"], null)
//# sourceMappingURL=/app.c09d0a7b.js.map