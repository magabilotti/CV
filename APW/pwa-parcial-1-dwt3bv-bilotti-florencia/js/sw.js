// Declaro variables para el nombre del caché y array con recursos para almacenar en el precache
const cacheName = 'pwa-cache-files';
const assets = ['',
                'index.html',
                'personajes.html',
                'favorito.html',
                'css/main.css',
                'js/main.js',
                'js/favorito.js',
                'manifest.json',
                'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css',
                'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js'
                ];

// Instalación
self.addEventListener('install', (e) => {
  // Saltamos la espera de forma automática
  self.skipWaiting();
  console.log('Service Worker Instalado', e);

  // Hacemos el precaching, guardando en caché los recursos para la carga inicial del index
  e.waitUntil(
    // cache.open > si existe, lo abre y no lo crea; si no, lo crea
    caches.open(cacheName)
      .then(cache => {
        cache.addAll(assets);
      })
  );
});

// Activación
self.addEventListener('activate', (e) => {
  console.log('Service Worker Activo', e);
});

// Capturamos las peticiones de la interfaz
self.addEventListener('fetch', (e) => {
  console.log('Request', e);
  e.respondWith(
    caches.match(e.request) // Buscamos el recurso si está en el caché del Service Worker
      .then(response => {
        if (response) { // Si el recurso se encuentra en caché
          return response; // Devolvemos el recurso desde el caché
        }
//si llego a este punto, es porque no lo encontro n chache, entonces implementamos nuestra estrategia de Cache Dinamico

//paso 1: Clonamos la petición 
let requestToCache = e.request.clone();

//paso 2:hago la peticion al servidor
        return fetch(requestToCache) // Si no se encuentra en caché, lo buscamos en el servidor
        .then(res=>{
          if(!res|| (res.status !=200 &&res.destination1!='image')){//|| res.status !=200
              //significa que no obtnemos recursos
              //construccion una respuesta para el usuario
              console.log("respuesta error para el usuario",res);
              return res;
          }
          //si llegamos hasta aca, obtenemos recursos 
          //paso 3: clonamos la recurso
          let responseTocache = res.clone();
          //paso 4: guardamos el recurso en cache
          caches.open(cacheName)
            .then(cache=>{
              cache.put(requestToCache,responseTocache);
            })
            return res;
        })
        .catch(error =>{
          //console.log("respuesta error para el usuario");
          //return new Response("la app esta offline y no podemos ir a buscar el recurso al servidor")
          return fetch('error.html')
          .then(res=>{
            return res;
          })
        })
      })
  );
});