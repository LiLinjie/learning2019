(function () {
  var videoWrap = document.querySelector('.m-video-player-wrap') || document.querySelector('.player-box') || document.querySelector('.site_player') || document.querySelector('.video-area');
  console.log('videoWrap', videoWrap);
  if (videoWrap) {
    setInterval(function () {
      var video = document.querySelector('video');
      if (video) {
        var injectDom = '<div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; z-index: 1000" id="injectDom">' +
          '<img src="http://img-shop.kkkd.com/2019/connect.png" style="width: 100%"/></div>'
        videoWrap.innerHTML = injectDom;
        document.querySelector('#injectDom').addEventListener('click', function () {
          var url = window.location.href;
          window.ReactNativeWebView.postMessage(JSON.stringify({
            url: url
          }));
        })
      }
    }, 500)
  }
}());
