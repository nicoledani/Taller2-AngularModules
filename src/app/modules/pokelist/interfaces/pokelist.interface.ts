/**
 * Interfaz que representa un pokemon listo para ser mostrado en la UI.
 *
 * @remarks
 * Esta interfaz es el resultado del proceso de **presentación de datos**
 * realizado por {@link PokelistService}: el `id` y la `image` se derivan
 * del `url` devuelto por la PokéAPI y el `name` es capitalizado.
 *
 * @example
 * ```ts
 * const pokemon: Pokemon = {
 *   id: 1,
 *   name: 'Bulbasaur',
 *   image: 'https://.../sprites/pokemon/1.png'
 * };
 * ```
 */
export interface Pokemon {
    /** Identificador único del pokemon en la PokéAPI */
    id: number;

    /** Nombre del pokemon capitalizado para su visualización */
    name: string;

    /** URL de la imagen (sprite) del pokemon */
    image: string;
}

/**
 * Elemento individual devuelto por el endpoint de listado de la PokéAPI.
 *
 * @remarks
 * Representa la respuesta mínima de cada pokemon en la lista:
 * su nombre y la URL de su registro detallado.
 *
 * @example
 * ```ts
 * const item: PokemonApiItem = {
 *   name: 'bulbasaur',
 *   url: 'https://pokeapi.co/api/v2/pokemon/1/'
 * };
 * ```
 */
export interface PokemonApiItem {
    /** Nombre en minúsculas del pokemon */
    name: string;

    /** URL del detalle del pokemon en la PokéAPI */
    url: string;
}

/**
 * Estructura de respuesta del endpoint `GET /pokemon` de la PokéAPI.
 *
 * @remarks
 * Se utiliza para tipar la respuesta del servicio al consumir el
 * listado de pokemones con {@link HttpClient}.
 *
 * @example
 * ```ts
 * const response: PokeApiResponse = {
 *   count: 1302,
 *   next: 'https://pokeapi.co/api/v2/pokemon?offset=10&limit=10',
 *   previous: null,
 *   results: []
 * };
 * ```
 */
export interface PokeApiResponse {
    /** Total de pokemones disponibles en la PokéAPI */
    count: number;

    /** URL de la siguiente página de resultados (o null si no existe) */
    next: string | null;

    /** URL de la página anterior de resultados (o null si no existe) */
    previous: string | null;

    /** Listado de pokemones de la página consultada */
    results: PokemonApiItem[];
}