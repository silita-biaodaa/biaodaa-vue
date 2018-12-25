export default {
  getCode(code) {
    var locations = location + ""
    console.log(locations,44)
    // if (locations.indexOf('/?#/') > 0) {//处理在支付页面授权时，获取code失败
    // 	locations = locations.replace('/?#/', '/#/')
    // }
    if (locations.indexOf("?") == -1) {
      return "";
    }
    var params = locations.split("?");
    var queryArr = params[1].split("&");
    var queryMap = {};
    for (var index in queryArr) {
      var k = queryArr[index].split("=")[0];
      var v = queryArr[index].split("=")[1];
      queryMap[k] = v;
    }

    return queryMap[code];
  }, 

  weixinauth() {
    var realLocation = window.location
    // console.log(realLocation,11111)
    // realLocation = realLocation == 'http://auction.yjwh.shop/#/' ? "http://auction.yjwh.shop/#/home" : realLocation
    var real = encodeURIComponent(realLocation),
      wxUrl = encodeURIComponent('http://imis.biaodaa.com' + real)
    window.location.href =
      "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxe147d2d39076d54c&redirect_uri=" +
      wxUrl +
      "&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect";
  },
}