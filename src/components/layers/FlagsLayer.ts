import { transformCoords } from '@/mapHelpers'
import { Feature } from 'ol'
import { Point } from 'ol/geom'
import VectorLayer from 'ol/layer/Vector'
import VectorSource from 'ol/source/Vector'
import { Circle, Stroke, Style } from 'ol/style'

const features = [
  new Feature({
    geometry: new Point(
      transformCoords([30.670024299010812, 59.89193425676542]),
    ),
  }),
]

export default class FlagsLayer extends VectorLayer<VectorSource> {
  
  constructor() {
    super({
      source: new VectorSource({
        features,
      }),
      style: new Style({
        image: new Circle({
          radius: 10,
          stroke: new Stroke({
            color: 'blue'
          }),
        }),
      }),
    })
  }
}
