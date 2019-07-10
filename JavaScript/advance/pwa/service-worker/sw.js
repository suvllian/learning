self.addEventListener('install', function(event) {
  console.log("SW installed");
}); 

self.addEventListener('activate', function(event) {
  console.log("SW activated");
});

self.addEventListener('fetch', function (event) {
  const { request = {} } = event || {}
  const { url = '' } = request
  console.log("Caught a fetch!", event, request);

  if (url.includes('gettest')) {
    event.respondWith(new Response("Hello world!"))
  }
})