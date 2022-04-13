<template>
  <div ref="mapContainer" class="base-map" />
</template>

<script setup lang="ts">
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import { transform } from 'ol/proj';
import OSM from 'ol/source/OSM';
import { onMounted, ref } from 'vue';

const mapContainer = ref<HTMLElement>()

onMounted(() => {
  const map = new Map({
    target: mapContainer.value,
    layers: [
      new TileLayer({
        source: new OSM()
      })
    ],
    view: new View({
      center: transform([30.313997419749427, 59.94440673743624], 'EPSG:4326', 'EPSG:3857'),
      zoom: 12,
      showFullExtent: true,
      enableRotation: false,
    }),
    controls: [],
  })
})


</script>

<style lang="scss">
.basemap {
  height: 100%;
  width: 100%;
  min-width: 100vh;
  min-height: 80vh;
}
</style>