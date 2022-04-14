import { App } from 'vue'

import { Map, View } from 'ol'
import VectorLayer from 'ol/layer/Vector'

export function initOpenLayers(app: App) {
  app.component('Map', Map).component('View', View).component('VectorLayer', VectorLayer)
}
