---
layout: default
title: Authentic Learning at UoB - Map
description: An interactive heat-map of the University of Bristol, showing areas and details of which departments and courses offer Authentic-Learning based teaching.
no-margin: true
---

#### Authentic Learning at the University of Bristol

<div id='map' style='width: 100%; height: 100vh;'></div>

<script src='https://api.mapbox.com/mapbox-gl-js/v1.7.0/mapbox-gl.js'></script>
<link href='https://api.mapbox.com/mapbox-gl-js/v1.7.0/mapbox-gl.css' rel='stylesheet' />

<script> const exports = {}; </script>
<script src='https://unpkg.com/nested-accordion@1.2.4/dist/generateHtml.js'></script>
<script src='/assets/authenticlearningmap.js'></script>

<style>
.mapboxgl-popup {
    max-width: 40rem !important;
    width: 100%;
}
.mapboxgl-popup-close-button {
    height: 1rem;
    padding-right: 1rem;
}
.mapboxgl-popup-content{
    max-height: 60vh;
    padding-bottom: 0;
    overflow-y: scroll;
    border-style: solid;
    border-color: grey;
}
.mapboxgl-popup-content h6 {
    font-size: 150%;
    text-align: center;
    margin: 0;
}
</style>

{% accordion_styles %}
