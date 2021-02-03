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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
  "/precache-manifest.540fef022a61af9bc5be6e1c00577752.js"
);

workbox.core.setCacheNameDetails({prefix: "master-real-estate"});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "revision": 0,
    "url": "/some-cachefirst-file.txt"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute("https://api.zoopla.co.uk/api/v1/property_listings.json?&page_number=2$&area=london&page_size=100&summarised=true&api_key=nnc2mfhmmbngxyvgpmqy86nz", new workbox.strategies.NetworkFirst({ "networkTimeoutSeconds":5, plugins: [] }), 'GET');
