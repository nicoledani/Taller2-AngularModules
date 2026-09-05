/**
 * URL base de la Studio Ghibli API.
 *
 * @remarks
 * Se utiliza para consultar el catálogo de películas a través del endpoint
 * `GET /films`, el cual devuelve un arreglo de películas con su información
 * e imágenes de póster. No requiere autenticación ni API key.
 *
 * @type {string}
 *
 * @example
 * ```ts
 * // Petición generada:
 * // GET https://ghibliapi.vercel.app/films
 * ```
 */
export const MOVIE_API_URL: string = 'https://ghibliapi.vercel.app/films';