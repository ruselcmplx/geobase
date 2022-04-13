<template>
  <div ref="mapContainer" class="base-map" />
</template>

<script setup lang="ts">
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { onMounted, ref } from 'vue';

/** Хелперы */
import { transformCoords } from '../mapHelpers';

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
      center: transformCoords([30.313997419749427, 59.94440673743624]),
      zoom: 12,
      showFullExtent: true,
      enableRotation: false,
    }),
    controls: [],
  })
})


</script>

<style lang="scss">
.base-map {
  min-height: 100%;
  min-width: 100%;
}
</style>