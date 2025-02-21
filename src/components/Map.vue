<script setup lang="ts">
import { View } from "ol";
import { getCenter } from "ol/extent";
import ImageLayer from "ol/layer/Image";
import TileLayer from "ol/layer/Tile";
import Map from "ol/Map";
import "ol/ol.css";
import { Projection } from "ol/proj";
import { OSM } from "ol/source";
import Static from "ol/source/ImageStatic";
import { onMounted, ref, useTemplateRef } from "vue";

const mapRef = useTemplateRef("map");

const position = ref("");

const projection = "EPSG:3857";
const gpsProjection = "EPSG:4326";

const extent = [0, 0, 1024, 968];
const customProjection = new Projection({
  code: "xkcd-image",
  units: "pixels",
  extent: extent,
});

const osmLayer = new TileLayer({ source: new OSM() });
const imageLayer = new ImageLayer({
  source: new Static({
    attributions: '© <a href="https://xkcd.com/license.html">xkcd</a>',
    url: "https://imgs.xkcd.com/comics/online_communities.png",
    projection: customProjection,
    imageExtent: extent,
  }),
});

onMounted(() => {
  if (!mapRef.value) return;
  const map = new Map({
    target: mapRef.value,
    layers: [imageLayer],
    view: new View({
      center: getCenter(extent), // transform([37.588041, 55.773249], gpsProjection, projection),
      zoom: 2,
      projection: customProjection,
    }),
  });

  map.on("pointermove", (e) => {
    position.value = e.coordinate.toString();
  });
});
</script>

<template>
  <div class="Map">
    <div ref="map" class="map"></div>
    <div class="position">{{ position }}</div>
  </div>
</template>

<style lang="scss">
.Map {
  position: relative;
  width: 100%;
  height: 100%;

  .map {
    width: 100%;
    height: 100%;
  }

  .position {
    position: absolute;
    top: 30px;
    left: 40px;
  }
}
</style>
