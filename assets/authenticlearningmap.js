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
map.on("click", (e) => console.log(e.lngLat.toArray().join(',')));

async function addAuthenticLearningPoints() {
  console.log("GeoJson: ", authenticLearningFeatures);

  map.addSource("authentic-learning-points", {
    type: "geojson",
    data: authenticLearningFeatures
  });
  map.addLayer({
    id: "authentic-learning-text",
    type: "symbol",
    source: "authentic-learning-points",
    layout: {
      "text-field": ["get", "name"]
    }
  });
  map.on("click", "authentic-learning-text", function(e) {
    var coordinates = e.features[0].geometry.coordinates.slice();
    new mapboxgl.Popup()
      .setLngLat(coordinates)
      .setHTML(e.features[0].properties.html)
      .addTo(map);
  });
  map.on("mouseenter", "authentic-learning-text", function() {
    map.getCanvas().style.cursor = "pointer";
  });
  map.on("mouseleave", "authentic-learning-text", function() {
    map.getCanvas().style.cursor = "";
  });

  map.addLayer(
    {
      id: "authentic-learning-heatmap",
      type: "heatmap",
      source: "authentic-learning-points",
      paint: {
        // Increase the heatmap weight based on size property
        "heatmap-weight": [
          "interpolate",
          ["linear"],
          ["get", "size"],
          0,
          0,
          15,
          1
        ]
        // "heatmap-color": [
        //   "interpolate",
        //   ["linear"],
        //   ["heatmap-density"],
        //   0,
        //   "rgba(176,28,46,0)",
        //   0.2,
        //   "rgb(162,10,28)",
        //   0.7,
        //   "rgba(176,28,46,200)",
        //   1,
        //   "rgb(162,10,28)"
        // ]
      }
    },
    "waterway-label"
  );
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
          14.5,
          0,
          15.5,
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
