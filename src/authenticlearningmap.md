---
layout: default
title: Authentic Learning at UoB - Map
---

<script src='https://api.mapbox.com/mapbox-gl-js/v1.7.0/mapbox-gl.js'></script>
<link href='https://api.mapbox.com/mapbox-gl-js/v1.7.0/mapbox-gl.css' rel='stylesheet' />

<div class="card">

#### Authentic Learning at the University of Bristol

<div id='map' style='width: 100%; height: 500px;'></div>
<script>
  mapboxgl.accessToken = 'pk.eyJ1IjoibHVrZXN0b3JyeSIsImEiOiJjazV2bXcycGIxaGw2M29wYmh2emVhd2JsIn0.LcBndAqyKWIRt-PXwLanyQ';
  var map = new mapboxgl.Map({
      center: new mapboxgl.LngLat(-2.6030, 51.4584 ),
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    zoom: 14
  });
</script>

</div>
