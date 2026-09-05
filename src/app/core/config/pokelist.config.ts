/**
 * URL base de la API pública de PokéAPI.
 *
 * @remarks
 * Se utiliza para consultar el listado de pokemones a través del endpoint
 * `GET /pokemon`, el cual acepta los parámetros `limit` y `offset`.
 *
 * @type {string}
 *
 * @example
 * ```ts
 * // Petición generada:
 * // GET https://pokeapi.co/api/v2/pokemon?limit=10
 * ```
 */
export const POKEMON_API_URL: string = 'https://pokeapi.co/api/v2/pokemon';

/**
 * Cantidad de pokemones a solicitar en cada petición.
 *
 * @remarks
 * Se envía como parámetro `limit` a la PokéAPI para limitar el tamaño
 * del listado y evitar descargas innecesarias.
 *
 * @type {number}
 */
export const POKEMON_LIMIT: number = 100;

/**
 * URL base del CDN oficial de sprites de PokéAPI.
 *
 * @remarks
 * Se utiliza para construir la URL de la imagen de cada pokemon a partir
 * de su id, siguiendo el patrón `{base}/{id}.png`.
 *
 * @type {string}
 *
 * @example
 * ```ts
 * // Imagen generada:
 * // https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
 * ```
 */
export const POKEMON_IMAGE_BASE_URL: string =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
