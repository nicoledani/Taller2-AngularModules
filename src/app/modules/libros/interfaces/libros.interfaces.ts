/**
 * Interfaz que representa un libro
 * Contiene la informacion basica necesaria para mostrar un libro en la
 * tabla
 */
export interface Libros {
    /**Identificador unico del libro */
    id: number;
    /**Titulo del libro */
    titulo: string;
    /**Nombre del autor del libro */
    autor: string;
    /**Año de publicacion del libro */
    Publicacion: number;
    /**Categoria del libro */
    categoria: CategoriaLibro;
    /**Numero de paginas del libro */
    paginas: number;
}
/**
 * Tipo de categoria de libros
 * 
 * @remarks
 * Este tipo restringe la categoria a los valores predefinidos de:
 * - Novela
 * - Drama
 * - Romance
 * -Suspenso
 * 
 * Se utiliza para mapear badges de colores
 */
export type CategoriaLibro = 'Novela' | 'Drama' | 'Romance' | 'Suspenso';