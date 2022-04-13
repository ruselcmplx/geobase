import { App } from 'vue'

import { Map, View } from 'ol'

export function initOpenLayers(app: App) {
  app.component('Map', Map).component('View', View).component('TileLayer')
}
