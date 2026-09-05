/**
 * Interfaz que representa una película lista para ser mostrada en la UI.
 *
 * @remarks
 * Esta interfaz es el resultado del proceso de **presentación de datos**
 * realizado por {@link MovielistService}: los campos provienen de la
 * respuesta cruda de la Studio Ghibli API, adaptados a la vista.
 *
 * @example
 * ```ts
 * const movie: Movie = {
 *   id: '2baf70d1-42bb-4437-b551-e5fed5a87abe',
 *   title: 'Castle in the Sky',
 *   image: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/npOnzAbLh6VOIu3naU5QaEcTepo.jpg',
 *   releaseDate: '1986'
 * };
 * ```
 */
export interface Movie {
    /** Identificador único de la película en la Studio Ghibli API */
    id: string;

    /** Título de la película */
    title: string;

    /** URL de la imagen (póster) de la película */
    image: string;

    /** Año de estreno de la película */
    releaseDate: string;
}

/**
 * Respuesta cruda de una película devuelta por la Studio Ghibli API.
 *
 * @remarks
 * Representa el shape completo de cada elemento del arreglo que devuelve
 * el endpoint `GET /films`. Se utiliza para tipar la respuesta consumida
 * a través de {@link HttpClient}.
 *
 * @example
 * ```ts
 * const film: GhibliFilm = {
 *   id: '2baf70d1-42bb-4437-b551-e5fed5a87abe',
 *   title: 'Castle in the Sky',
 *   image: 'https://...jpg',
 *   director: 'Hayao Miyazaki',
 *   release_date: '1986',
 *   running_time: '124'
 * };
 * ```
 */
export interface GhibliFilm {
    /** Identificador único de la película */
    id: string;

    /** Título de la película */
    title: string;

    /** Título original de la película */
    original_title: string;

    /** Romanización del título original */
    original_title_romanised: string;

    /** URL de la imagen (póster) de la película */
    image: string;

    /** URL del banner de la película */
    movie_banner: string;

    /** Descripción de la película */
    description: string;

    /** Director de la película */
    director: string;

    /** Productor de la película */
    producer: string;

    /** Año de estreno de la película */
    release_date: string;

    /** Duración de la película en minutos */
    running_time: string;

    /** Puntaje en Rotten Tomatoes */
    rt_score: string;

    /** URLs de los personajes asociados */
    people: string[];

    /** URLs de las especies asociadas */
    species: string[];

    /** URLs de las locaciones asociadas */
    locations: string[];

    /** URLs de los vehículos asociados */
    vehicles: string[];

    /** URL del detalle de la película en la API */
    url: string;
}