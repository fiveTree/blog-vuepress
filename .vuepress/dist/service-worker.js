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
    "revision": "c2610bbff613061520a4c046ff457bba"
  },
  {
    "url": "about-me/index.html",
    "revision": "1b63cbc9a9fe5b7dbb2b097e5e248919"
  },
  {
    "url": "assets/css/0.styles.08fa36bf.css",
    "revision": "d11c19f89937e6ff1fdea80be1e138ed"
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
    "url": "assets/js/app.8c9013b6.js",
    "revision": "c8765f8292b2cea339ea063c1c537bbe"
  },
  {
    "url": "git/branch.html",
    "revision": "81fb270ff972d2abb7edde7931baf5b2"
  },
  {
    "url": "git/command.html",
    "revision": "2c0a934a2706003d134dd6ab69111f7e"
  },
  {
    "url": "git/install.html",
    "revision": "4fd7127d6bcacd33ed69ae4fd0f7c353"
  },
  {
    "url": "git/introduction.html",
    "revision": "5fbe567b67e0354493cfb40862c1b95b"
  },
  {
    "url": "git/resolveConflict.html",
    "revision": "be32707b98828ee7673a3372f0c954a7"
  },
  {
    "url": "git/teamwork.html",
    "revision": "f84ac33140803366b289e5f3df43a67a"
  },
  {
    "url": "img/logo.png",
    "revision": "fda8745ad4a10bf78989fce2a3efa41e"
  },
  {
    "url": "index.html",
    "revision": "3c1ba0f8be996634c5e318e2f0b89f61"
  },
  {
    "url": "js/index.html",
    "revision": "dace0fd28ae52bfd6a9688d54a86f22c"
  },
  {
    "url": "js/js.html",
    "revision": "816c12a515e3e6d966a1dedd73f42460"
  },
  {
    "url": "js/js1.html",
    "revision": "2dc16e27ed54e27ed0add27f2d51a1bb"
  },
  {
    "url": "js/themeConfig.js",
    "revision": "55cc042736a2b4f5a1c0fb54f4f342b3"
  },
  {
    "url": "node/index.html",
    "revision": "07b9f57a7eca4072a3ffe68d8ae493e6"
  },
  {
    "url": "node/js.html",
    "revision": "e258758e88dc7a3a85d31894aba789fc"
  },
  {
    "url": "node/js1.html",
    "revision": "f1f2dc2545fbf7dc122b83d06ec997f6"
  },
  {
    "url": "zh/index.html",
    "revision": "c5620438231749f3bbc80de3e3a7d4e7"
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
