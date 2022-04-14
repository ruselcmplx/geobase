/**
 * Библиотека вспомогательных функций для работы с картой
 */

import { Coordinate } from 'ol/coordinate'
import { ProjectionLike, transform } from 'ol/proj'

/**
 * Функция преобразования координат
 *
 * @param coordinate - Исходные координаты
 * @param source - Исходный формат (По-умолчанию EPSG:4326)
 * @param destination - Целевой формат (Карта работает по-умолчанию в EPSG:3857)
 * @returns Преобразованные координаты
 */
function transformCoords(
  coordinate: Coordinate,
  source: ProjectionLike = 'EPSG:4326',
  destination: ProjectionLike = 'EPSG:3857',
) {
  return transform(coordinate, source, destination)
}

export { transformCoords }
