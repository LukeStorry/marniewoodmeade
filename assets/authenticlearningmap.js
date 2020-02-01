mapboxgl.accessToken =
  "pk.eyJ1IjoibHVrZXN0b3JyeSIsImEiOiJjazV2bXcycGIxaGw2M29wYmh2emVhd2JsIn0.LcBndAqyKWIRt-PXwLanyQ";

var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [-2.603, 51.4584],
  zoom: 15,
  pitch: 45
});

map.on("load", removePoiLabels);
map.on("load", addAuthenticLearningPoints);
map.on("load", add3dBuildingLayer);

// TODO map the real data to this object
const mapDataToGeoFeatures = data => ({
  type: "FeatureCollection",
  features: data.map(location => ({
    type: "Feature",
    properties: {
      name: location.title,
      html: `<div style="margin:2rem 1rem -1rem 1rem">
            ${generateHtml(location.children)}
            </div>`
    },
    geometry: {
      type: "Point",
      coordinates: location.text.split(",").map(parseFloat)
    }
  }))
});

async function addAuthenticLearningPoints() {
  let authenticLearningFeatures = await fetch(
    "/assets/authenticlearningdata.json"
  )
    .then(r => r.text())
    .then(JSON.parse)
    .then(mapDataToGeoFeatures);

  map.addSource("authentic-learning-points", {
    type: "geojson",
    data: authenticLearningFeatures
  });
  map.addLayer({
    id: "authentic-learning-points",
    type: "symbol",
    source: "authentic-learning-points",
    layout: {
      "text-field": ["get", "name"]
      // "icon-image": "college-15",
      // "icon-allow-overlap": true
    }
  });

  map.on("click", "authentic-learning-points", function(e) {
    var coordinates = e.features[0].geometry.coordinates.slice();
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
      coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }
    new mapboxgl.Popup()
      .setLngLat(coordinates)
      .setHTML(e.features[0].properties.html)
      .addTo(map);
  });
  map.on("mouseenter", "authentic-learning-points", function() {
    map.getCanvas().style.cursor = "pointer";
  });
  map.on("mouseleave", "authentic-learning-points", function() {
    map.getCanvas().style.cursor = "";
  });
}

function removePoiLabels() {
  map.style.stylesheet.layers.forEach(layer => {
    if (layer.id === "poi-label") {
      map.removeLayer(layer.id);
    }
  });
}

function add3dBuildingLayer() {
  map.addLayer(
    {
      id: "3d-buildings",
      source: "composite",
      "source-layer": "building",
      filter: ["==", "extrude", "true"],
      type: "fill-extrusion",
      minzoom: 14,
      paint: {
        "fill-extrusion-color": "#eee",
        "fill-extrusion-opacity": 0.8,
        "fill-extrusion-height": [
          "interpolate",
          ["linear"],
          ["zoom"],
          14,
          0,
          15,
          ["get", "height"]
        ]
      }
    },
    // Insert the layer beneath any symbol layer.
    map
      .getStyle()
      .layers.find(
        layer => layer.type === "symbol" && layer.layout["text-field"]
      ).id
  );
}
