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
const authenticLearningFeatures = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        name: "Building Two",
        html: `<div style="background-color:red;">
          red box
          </div>
          <div>
          box2
          </div>
          `
      },
      geometry: {
        type: "Point",
        coordinates: [-2.6035, 51.4584]
      }
    },
    {
      type: "Feature",
      properties: {
        name: "Building One",
        html: "popup text 1"
      },
      geometry: {
        type: "Point",
        coordinates: [-2.603, 51.4594]
      }
    }
  ]
};

function addAuthenticLearningPoints() {
  map.addSource("authentic-learning-points", {
    type: "geojson",
    data: authenticLearningFeatures
  });
  map.addLayer({
    id: "authentic-learning-points",
    type: "symbol",
    source: "authentic-learning-points",
    layout: { "text-field": ["get", "name"] }
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
