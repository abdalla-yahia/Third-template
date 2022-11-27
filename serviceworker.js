const staticAbdallaYahia = "";
const assets =
    [
    "/",
    "/index.html",
    "/css/Elzero.css",
    "/css/style.css",
    "/css/all.min.css",
    "/css/normalize.css",
    "/js/app.js",
    "/imgs/avatar-01.png.webp",
    "/imgs/avatar-02.png.webp",
    "/imgs/avatar-03.png.webp",
    "/imgs/avatar-04.png.webp",
    "/imgs/avatar-05.png.webp",
    "/imgs/avatar-06.png.webp",
    "/imgs/cat-01.jpg.webp",
    "/imgs/cat-02.jpg.webp",
    "/imgs/cat-03.jpg.webp",
    "/imgs/cat-04.jpg.webp",
    "/imgs/cat-05.jpg.webp",
    "/imgs/cat-06.jpg.webp",
    "/imgs/cat-07.jpg.webp",
    "/imgs/cat-08.jpg.webp",
    "/imgs/discount-background1.jpg.webp",
    "/imgs/discount-background2.jpg.webp",
    "/imgs/discount.png.webp",
    "/imgs/discount2.png.webp",
    "/imgs/dots.png.webp",
    "/imgs/events.png.webp",
    "/imgs/favicon.png.webp",
    "/imgs/features-01.jpg.webp",
    "/imgs/features-02.jpg.webp",
    "/imgs/features-03.jpg.webp",
    "/imgs/gallery-01.png.webp",
    "/imgs/gallery-02.png.webp",
    "/imgs/gallery-03.png.webp",
    "/imgs/gallery-04.png.webp",
    "/imgs/gallery-05.png.webp",
    "/imgs/gallery-06.png.webp",
    "/imgs/hosting-advanced.png.webp",
    "/imgs/hosting-basic.png.webp",
    "/imgs/hosting-professional.png.webp",
    "/imgs/landing-image.png.webp",
    "/imgs/landing.jpg.webp",
    "/imgs/megamenu.png.webp",
    "/imgs/skills.png.webp",
    "/imgs/stats.jpg.webp",
    "/imgs/team-01.jpg.webp",
    "/imgs/team-02.jpg.webp",
    "/imgs/team-03.jpg.webp",
    "/imgs/team-04.jpg.webp",
    "/imgs/team-05.jpg.webp",
    "/imgs/team-06.jpg.webp",
    "/imgs/team-07.jpg.webp",
    "/imgs/team-08.jpg.webp",
    "/imgs/video-preview.jpg.webp",
    "/imgs/videos-01.jpg.webp",
    "/imgs/work-steps-1.png.webp",
    "/imgs/work-steps-2.png.webp",
    "/imgs/work-steps-3.png.webp",
    "/imgs/work-steps.png.webp",
    "/images/icons/icon-192x192.png",

    "/images/icons/icon-384x384.png",
    "/images/icons/icon-512x512.png",
    "/webfonts/fa-brands-400.eot",
    "/webfonts/fa-brands-400.svg",
    "/webfonts/fa-brands-400.ttf",
    "/webfonts/fa-brands-400.woff",
    "/webfonts/fa-brands-400.woff2",
    "/webfonts/fa-regular-400.eot",
    "/webfonts/fa-regular-400.svg",
    "/webfonts/fa-regular-400.ttf",
    "/webfonts/fa-regular-400.woff",
    "/webfonts/fa-regular-400.woff2",
    "/webfonts/fa-solid-900.eot",
    "/webfonts/fa-solid-900.svg",
    "/webfonts/fa-solid-900.ttf",
    "/webfonts/fa-solid-900.woff",
    "/webfonts/fa-solid-900.woff2",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticAbdallaYahia).then(cache => {cache.addAll(assets)})
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})


        // {
        //     "src": "/images/icons/icon-256x256.png",
        //     "sizes": "256x256",
        //     "type": "image/png"
        // },