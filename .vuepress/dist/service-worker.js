/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "31e9a431ab2f7e7a2c21339d5519c70b"
  },
  {
    "url": "about-me/index.html",
    "revision": "ad62985571e853f71b0ac54c39ca82cb"
  },
  {
    "url": "assets/css/0.styles.046b4f29.css",
    "revision": "682afdfb63f2a08c448552f1afdeb947"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.3886c34d.js",
    "revision": "eb1cedbdf59d1b51dcfa5d63cffe26b7"
  },
  {
    "url": "assets/js/11.17963d25.js",
    "revision": "bc01d47255dcbef4cd0b83bedcad2c1d"
  },
  {
    "url": "assets/js/12.aeb2d86b.js",
    "revision": "7f5049a9a1a81708e4bf7a46ad106d3a"
  },
  {
    "url": "assets/js/13.8bcf5818.js",
    "revision": "1667fcafa7d0f6408ca14da9737d23f8"
  },
  {
    "url": "assets/js/14.9b4eed0f.js",
    "revision": "bcdb0d59734361c082e7c2bf1de3b216"
  },
  {
    "url": "assets/js/15.eb2175b6.js",
    "revision": "ee73528c3f50b8c3a2ee407beb4f21dc"
  },
  {
    "url": "assets/js/16.07855c81.js",
    "revision": "9832c372d20f8d69158257281342124b"
  },
  {
    "url": "assets/js/17.82feff9f.js",
    "revision": "c97a07b0fc517e25861ad6656efdd136"
  },
  {
    "url": "assets/js/18.cd0e305c.js",
    "revision": "5ee4a53a287fd281d107b108ecc03edb"
  },
  {
    "url": "assets/js/2.cc318784.js",
    "revision": "ab723a6981d04927fe207b5a60e083a8"
  },
  {
    "url": "assets/js/3.c7960a37.js",
    "revision": "3920006c689fddae3ec7a3050751d79d"
  },
  {
    "url": "assets/js/4.2eb58728.js",
    "revision": "e1e53ad39192725594fcd6c3022e4c3c"
  },
  {
    "url": "assets/js/5.b2139297.js",
    "revision": "95b8ef15a8b96437d9200e3d02bda47b"
  },
  {
    "url": "assets/js/6.f1d6eec4.js",
    "revision": "3fb7121388b097d41c5a4b58873bbad0"
  },
  {
    "url": "assets/js/7.22155590.js",
    "revision": "aecbc1172390d61f5c58443925406da6"
  },
  {
    "url": "assets/js/8.5dc29e39.js",
    "revision": "b34dbf1ec6191d9fa77a136b2de3e3a9"
  },
  {
    "url": "assets/js/9.9144997d.js",
    "revision": "41dae985a4c34a90293e53168e742d7c"
  },
  {
    "url": "assets/js/app.5e6d4c4d.js",
    "revision": "1f09358b8d329deffd6dddbbf0b5764a"
  },
  {
    "url": "git/branch.html",
    "revision": "3239d352d6085f2965c4d2455a554c00"
  },
  {
    "url": "git/command.html",
    "revision": "a617216a33ff20d0b0c88f3e7429b762"
  },
  {
    "url": "git/install.html",
    "revision": "8ac3259faebf03796bebb58315cc6faa"
  },
  {
    "url": "git/introduction.html",
    "revision": "e0c5c358de9a11b2ac247024576fbb15"
  },
  {
    "url": "git/resolveConflict.html",
    "revision": "c7ee58751b9a0f5eefde7b53a278466f"
  },
  {
    "url": "git/teamwork.html",
    "revision": "ccb1afaabbc72fdc1672e8dcd8770cc1"
  },
  {
    "url": "img/logo.png",
    "revision": "fda8745ad4a10bf78989fce2a3efa41e"
  },
  {
    "url": "index.html",
    "revision": "3d9eae4cfeca0bccc54c2c0147bb6902"
  },
  {
    "url": "js/index.html",
    "revision": "67d8735dc3173bfe6c8237e01715e8cb"
  },
  {
    "url": "js/js.html",
    "revision": "231f26c159ed79ea39aa558ed27538fe"
  },
  {
    "url": "js/js1.html",
    "revision": "fcc2ae40c9eeb943dd4fdcc9a2a9ea0a"
  },
  {
    "url": "js/themeConfig.js",
    "revision": "55cc042736a2b4f5a1c0fb54f4f342b3"
  },
  {
    "url": "node/index.html",
    "revision": "b308984e30894517aa19415235a09ddc"
  },
  {
    "url": "node/js.html",
    "revision": "b9e01544b7c36c43fc2de7c0359a3f75"
  },
  {
    "url": "node/js1.html",
    "revision": "38697e112ad31c08e33ac81ab8853885"
  },
  {
    "url": "zh/index.html",
    "revision": "4c1bb9d29996fb6d538fc26bf9557dbe"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
