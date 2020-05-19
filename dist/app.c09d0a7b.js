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
},{}],"json/rank.json":[function(require,module,exports) {
module.exports = {
  "code": 0,
  "subcode": 0,
  "message": "",
  "default": 0,
  "data": {
    "topList": [{
      "id": 4,
      "listenCount": 20000000,
      "picUrl": "http://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_4_300_203705594.jpg",
      "songList": [{
        "singername": "毛不易",
        "songname": "借 (Live)"
      }, {
        "singername": "GAI",
        "songname": "苦行僧 (Live)"
      }, {
        "singername": "红花会PG ONE",
        "songname": "H.M.E (Live)"
      }],
      "topTitle": "巅峰榜·流行指数",
      "type": 0
    }, {
      "id": 26,
      "listenCount": 19500000,
      "picUrl": "http://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_26_300_203691607.jpg",
      "songList": [{
        "singername": "Taylor Swift",
        "songname": "Look What You Made Me Do"
      }, {
        "singername": "校长",
        "songname": "带你去旅行"
      }, {
        "singername": "金志文",
        "songname": "远走高飞 (独唱版)"
      }],
      "topTitle": "巅峰榜·热歌",
      "type": 0
    }, {
      "id": 27,
      "listenCount": 15400000,
      "picUrl": "http://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_27_300_203691607.jpg",
      "songList": [{
        "singername": "Taylor Swift",
        "songname": "Look What You Made Me Do"
      }, {
        "singername": "李荣浩",
        "songname": "歌谣"
      }, {
        "singername": "王嘉尔",
        "songname": "九州天空城"
      }],
      "topTitle": "巅峰榜·新歌",
      "type": 0
    }, {
      "id": 50,
      "listenCount": 11461250,
      "picUrl": "http://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_50_300_203705575.jpg",
      "songList": [{
        "singername": "GAI",
        "songname": "苦行僧 (Live)"
      }, {
        "singername": "红花会PG ONE",
        "songname": "H.M.E (Live)"
      }, {
        "singername": "Tizzy T",
        "songname": "头文字T (Live)"
      }],
      "topTitle": "巅峰榜·中国有嘻哈",
      "type": 0
    }, {
      "id": 51,
      "listenCount": 9900000,
      "picUrl": "http://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_51_300_203705594.jpg",
      "songList": [{
        "singername": "毛不易",
        "songname": "借 (Live)"
      }, {
        "singername": "毛不易",
        "songname": "消愁 (Live)"
      }, {
        "singername": "毛不易",
        "songname": "像我这样的人 (Live)"
      }],
      "topTitle": "巅峰榜·明日之子",
      "type": 0
    }, {
      "id": 25,
      "listenCount": 10000000,
      "picUrl": "http://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_25_300_203702977.jpg",
      "songList": [{
        "singername": "莫安琪",
        "songname": "刀马旦 (Live)"
      }, {
        "singername": "朱婷婷",
        "songname": "父亲写的散文诗 (Live)"
      }, {
        "singername": "叶晓粤",
        "songname": "母系社会 (Live)"
      }],
      "topTitle": "巅峰榜·中国新歌声",
      "type": 0
    }, {
      "id": 28,
      "listenCount": 15498810,
      "picUrl": "http://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_28_300_202658270.jpg",
      "songList": [{
        "singername": "大壮",
        "songname": "我们不一样"
      }, {
        "singername": "罗玉坤",
        "songname": "最美情侣"
      }, {
        "singername": "赵方婧",
        "songname": "尽头"
      }],
      "topTitle": "巅峰榜·网络歌曲",
      "type": 0
    }, {
      "id": 5,
      "listenCount": 8604340,
      "picUrl": "http://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_5_300_203695796.jpg",
      "songList": [{
        "singername": "王嘉尔",
        "songname": "Papillon（巴比龙）"
      }, {
        "singername": "周笔畅",
        "songname": "七分钟好女孩 七分钟坏女孩"
      }, {
        "singername": "校长",
        "songname": "带你去旅行"
      }],
      "topTitle": "巅峰榜·内地",
      "type": 0
    }, {
      "id": 6,
      "listenCount": 5417800,
      "picUrl": "http://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_6_300_203639711.jpg",
      "songList": [{
        "singername": "莫文蔚",
        "songname": "I Do"
      }, {
        "singername": "岑宁儿",
        "songname": "追光者"
      }, {
        "singername": "杨宗纬",
        "songname": "越过山丘"
      }],
      "topTitle": "巅峰榜·港台",
      "type": 0
    }, {
      "id": 3,
      "listenCount": 9300000,
      "picUrl": "http://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_3_300_203691607.jpg",
      "songList": [{
        "singername": "Taylor Swift",
        "songname": "Look What You Made Me Do"
      }, {
        "singername": "Martin Garrix",
        "songname": "Pizza"
      }, {
        "singername": "Justin Bieber/BloodPop®",
        "songname": "Friends"
      }],
      "topTitle": "巅峰榜·欧美",
      "type": 0
    }, {
      "id": 16,
      "listenCount": 7151940,
      "picUrl": "http://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_16_300_203659397.jpg",
      "songList": [{
        "singername": "선미 (宣美)",
        "songname": "가시나 (Gashina)"
      }, {
        "singername": "현아 (泫雅)",
        "songname": "베베 (BABE)"
      }, {
        "singername": "킬라그램 (Killah Gramz)/딘 (DEAN)/지코 (Zico)",
        "songname": "어디 (哪里)"
      }],
      "topTitle": "巅峰榜·韩国",
      "type": 0
    }, {
      "id": 17,
      "listenCount": 1940000,
      "picUrl": "http://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_17_300_203649913.jpg",
      "songList": [{
        "singername": "初音ミク (初音未来)",
        "songname": "神无月 (日文版)"
      }, {
        "singername": "中島美嘉 (なかしま みか)",
        "songname": "电光石火之间"
      }, {
        "singername": "MACO (まこ)",
        "songname": "恋の道 (恋爱的道路)"
      }],
      "topTitle": "巅峰榜·日本",
      "type": 0
    }, {
      "id": 201,
      "listenCount": 416391,
      "picUrl": "http://y.gtimg.cn/music/common/upload/iphone_order_channel/20150127163830.jpg",
      "songList": [{
        "singername": "Taylor Swift",
        "songname": "Look What You Made Me Do"
      }, {
        "singername": "현아",
        "songname": "베베 (BABE)"
      }, {
        "singername": "王嘉尔",
        "songname": "Papillon（巴比龙）"
      }],
      "topTitle": "巅峰榜·MV",
      "type": 0
    }, {
      "id": 32,
      "listenCount": 3106860,
      "picUrl": "http://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_32_300_203705580.jpg",
      "songList": [{
        "singername": "红花会PG ONE",
        "songname": "H.M.E (Live)"
      }, {
        "singername": "GAI",
        "songname": "苦行僧 (Live)"
      }, {
        "singername": "赵雷",
        "songname": "成都"
      }],
      "topTitle": "巅峰榜·音乐人",
      "type": 0
    }, {
      "id": 36,
      "listenCount": 4085540,
      "picUrl": "http://y.gtimg.cn/music/common/upload/iphone_order_channel/toplist_36_300_201816153.jpg",
      "songList": [{
        "singername": "姜真祖",
        "songname": "成都"
      }, {
        "singername": "郑阳亭",
        "songname": "你那么爱他"
      }, {
        "singername": "胡慧",
        "songname": "分手快乐"
      }],
      "topTitle": "巅峰榜·K歌金曲",
      "type": 0
    }]
  }
};
},{}],"scripts/lazyload.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lazyload = lazyload;

function lazyload(imgs) {
  imgs = Array.from(imgs); //1.1-懒加载： IntersectionObserver 较新API,老浏览器可能无法使用

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function (entries) {
      console.log(entries);
      entries.forEach(function (entry) {
        if (entry.intersectionRatio > 0) {
          loadImage(entry.target, function () {
            observer.unobserve(entry.target);
          });
        }
      });
    }, {
      threshold: 0.01
    });
    imgs.forEach(function (img) {
      return observer.observe(img);
    });
  } else {
    // 1.2-懒加载：旧方法，适用性好，但是代码多呀
    var onscroll = throttle(function () {
      if (imgs.length === 0) {
        return window.removeEventListener('scroll', onscroll);
      }

      imgs = imgs.filter(function (img) {
        return img.classList.contains('lazyload');
      });
      imgs.forEach(function (img) {
        return inViewport(img) && loadImage(img);
      });
    }, 300);
    window.addEventListener('scroll', onscroll); //   window.dispatchEvent(new Event('scroll'))
  } // 2 时间戳节流


  function throttle(func, wait) {
    var prev, timer;
    return function fn() {
      var curr = Date.now();
      var diff = curr - prev;

      if (!prev || diff >= wait) {
        func();
        prev = curr;
      }
    };
  }

  function inViewport(img) {
    var _img$getBoundingClien = img.getBoundingClientRect(),
        top = _img$getBoundingClien.top,
        left = _img$getBoundingClien.left,
        right = _img$getBoundingClien.right,
        bottom = _img$getBoundingClien.bottom;

    var vpWidth = document.documentElement.clientWidth;
    var vpHeight = document.documentElement.clientHeight;
    return (top > 0 && top < vpHeight || bottom > 0 && bottom < vpHeight) && (left > 0 && left < vpWidth || right > 0 && right < vpWidth);
  }

  function loadImage(img, callback) {
    var image = new Image();
    image.src = img.dataset.src;

    image.onload = function () {
      img.src = image.src;
      img.classList.remove('lazyload');
      if (typeof callback === 'function') callback();
    };
  }
}
},{}],"scripts/Mysearch.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Search = /*#__PURE__*/function () {
  function Search(el) {
    _classCallCheck(this, Search);

    this.$el = el;
    this.$input = this.$el.querySelector('#search');
    this.$songs = this.$el.querySelector('.song-list');
    this.$input.addEventListener('keyup', this.onKeyUp.bind(this));
    this.keyword = '';
    this.songs = [];
    this.page = 1;
    this.perpage = 20;
    this.nomore = json.data.song.curpage;
    this.onscroll = this.onScroll.bind(this);
    window.addEventListener('scroll', this.onscroll);
  }

  _createClass(Search, [{
    key: "onKeyUp",
    value: function onKeyUp(event) {
      var keyword = event.target.value.trim();
      if (!keyword) return this.reset();
      console.log('this: ', this);
      console.log('event.target: ', event.target);
      if (event.key !== 'Enter') return;
      this.search(keyword);
    }
  }, {
    key: "onScroll",
    value: function onScroll() {
      if (this.nomore) return;

      if (document.documentElementClientHeight + pageYOffSet > document.body.scrollHeight - 50) {
        this.search(this.keyword, this.page + 1);
      }
    }
  }, {
    key: "reset",
    value: function reset() {
      this.page = 1;
      this.keyword = '';
      this.songs = [];
    }
  }, {
    key: "search",
    value: function search(keyword, page) {
      var _this = this;

      this.keyword = keyword;
      fetch("http://localhost:4000/search?keyword=".concat(this.keyword, "&page=").concat(page || this.page)).then(function (res) {
        return res.json();
      }).then(function (json) {
        // this.page = this.data.song.curpage
        return json.data.song.list;
      }).then(function (songs) {
        return _this.append(songs);
      });
    }
  }, {
    key: "append",
    value: function append(songs) {
      var html = songs.map(function (song) {
        return "\n          <li class=\"song-item\">\n            <i class=\"icon icon-music\"></i>\n            <div class=\"song-name ellipsis\">".concat(song.songname, "</div>\n            <div class=\"song-artist ellipsis\">").concat(song.singer.map(function (s) {
          return s.name;
        }).join(' '), "</div>\n          </li>");
      }).join('');
      this.$songs.insertAdjacentHTML('beforeend', html);
    } //todo 搜索无实际内容，都是undefined

  }]);

  return Search;
}();

exports.default = Search;
},{}],"scripts/app.js":[function(require,module,exports) {
"use strict";

var imgs = _interopRequireWildcard(require("./img"));

var _slider = _interopRequireDefault(require("./slider.js"));

var _rec = _interopRequireDefault(require("/json/rec.json"));

var _rank = _interopRequireDefault(require("/json/rank.json"));

var _lazyload = require("/scripts/lazyload.js");

var _Mysearch = _interopRequireDefault(require("./Mysearch.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

(function () {
  // console.log('rankjson: ', rankjson);
  //fetch本地文件容易出现跨域的问题，本地文件尽量使用 import export
  // fetch('/json/rec.json')
  // .then(res => res.json())
  // .then(render)
  // .catch(err => {
  //   console.log('err: ', err)
  // })
  (function render(jsonSource) {
    renderSlider(jsonSource.data.slider);
    renderRadio(jsonSource.data.radioList);
    renderPlaylists(jsonSource.data.songList);
    (0, _lazyload.lazyload)(document.querySelectorAll('.lazyload'));
  })(_rec.default);

  renderTopList(_rank.default.data.topList);
  var search = new _Mysearch.default(document.querySelector('#search-view'));

  function renderSlider(sli) {
    var slides = sli.map(function (slide) {
      return {
        link: slide.linkUrl,
        image: slide.picUrl
      };
    });
    new _slider.default({
      el: document.querySelector('#slider'),
      slides: slides
    });
  }

  function renderRadio(radios) {
    document.querySelector('.radios .list').innerHTML = radios.map(function (radio) {
      return "<div class=\"list-item\">\n        <div class=\"list-media\">\n          <img class=\"lazyload\" data-src=\"".concat(radio.picUrl, "\">\n          <span class=\"icon icon-play\"></span>\n          </div>\n          <div class=\"list-detail\">\n          <h3 class=\"list-title\">").concat(radio.Ftitle, "</h3>\n        </div>\n      </div>");
    }).join('');
  }

  function renderPlaylists(playlists) {
    document.querySelector('.playlists .list').innerHTML = playlists.map(function (playlist) {
      return "<div class=\"list-item\">\n        <div class=\"list-media\">\n          <img class=\"lazyload\" data-src=\"".concat(playlist.picUrl, "\">\n          <span class=\"icon icon-play\"></span>\n          </div>\n          <div class=\"list-detail\">\n          <h3 class=\"list-title\">").concat(playlist.songListDesc, "</h3>\n        </div>\n      </div>");
    }).join('');
  }

  function renderTopList(list) {
    document.querySelector('#rank-view .toplist').innerHTML = list.map(function (item) {
      return "<li class=\"top-item\">\n      <div class=\"top-item-media\">\n        <a href=\"#\">\n          <img class=\"lazyload\" data-src=\"".concat(item.picUrl, "\">\n        </a>\n      </div>\n      <div class=\"top-item-info\">\n        <h3 class=\"top-item-title ellipsis\">").concat(item.topTitle, "</h3>\n        <ul class=\"top-item-list\">\n          ").concat(songlist(item.songList), "\n        </ul>\n      </div>\n    </li>");
    }).join('');
    (0, _lazyload.lazyload)(document.querySelectorAll('#rank-view .toplist .lazyload'));

    function songlist(songs) {
      return songs.map(function (song, i) {
        return "<li class=\"top-item-song\">\n          <i class=\"song-index\">".concat(i + 1, "</i>\n          <span class=\"song-name\">").concat(song.songname, "</span>- ").concat(song.singername, "\n        </li>");
      }).join('');
    }
  }
})();
},{"./img":"scripts/img.js","./slider.js":"scripts/slider.js","/json/rec.json":"json/rec.json","/json/rank.json":"json/rank.json","/scripts/lazyload.js":"scripts/lazyload.js","./Mysearch.js":"scripts/Mysearch.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50533" + '/');

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