//Fri Jan 03 2025 10:29:42 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(() => {
  const _0x2c3a05 = "https://ipv4.ip.mir6.com/api/api_json.php?ip=myip&token=%5Btoken+redacted%5D";
  async function _0x255892() {
    const _0xc4a312 = document.getElementById("output-ipv4");
    try {
      const _0x4f6f3d = await fetch(_0x2c3a05),
        _0x3ac798 = await _0x4f6f3d.json();
      if (_0x3ac798.success) {
        const _0x3d7f83 = "\n- IP 鍦板潃锛�" + _0x3ac798.data.ip + "\n- 国家：" + _0x3ac798.data.country + " (" + _0x3ac798.data.countryCode + ")\n- 省份：" + _0x3ac798.data.province + "\n- ISP：" + _0x3ac798.data.isp + "\n- 网络类型：" + _0x3ac798.data.net + "\n                ";
        _0xc4a312.innerHTML = "<pre>" + _0x3d7f83 + "</pre>";
      } else _0xc4a312.innerHTML = "<strong>查询失败：</strong> " + _0x3ac798.message;
    } catch (_0x222fb4) {
      _0xc4a312.innerHTML = "<strong>错误：</strong> 无法获取数据，请稍后重试。";
    }
  }
  _0x255892();
})();