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

<script> 
const exports = {}; 
let authenticLearningFeatures = {% authentic_learning_geojson %};
</script>
<script src='/assets/authenticlearningmap.js'></script>

{% accordion_styles %}

<style>
.mapboxgl-popup {
    max-width: 40rem !important;
    width: 100%;
}
.header, .header.active {
    padding: 0.5rem;
    margin-top: 0;
} 
.contents{
    padding: 0.5rem 1.7rem 0.5rem 1.7rem;
    margin-bottom: 0.2rem;
}
.mapboxgl-popup-close-button {
    height: 1rem;
    background-color: #ffcece;
    padding: 5px;
}
.mapboxgl-popup-content{
    max-height: 60vh;
    padding-bottom: 0;
    overflow-y: scroll;
    border-style: solid;
    border-color: grey;
}
.mapboxgl-popup-content h6 {
    font-size: 160%;
    text-align: center;
    margin: 0;
}
</style>
