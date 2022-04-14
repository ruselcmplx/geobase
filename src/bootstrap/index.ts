import { createApp } from 'vue'
import App from '../App.vue'
import { initOpenLayers } from './openLayers'

const app = createApp(App)

// initOpenLayers(app)

app.mount('#app')
