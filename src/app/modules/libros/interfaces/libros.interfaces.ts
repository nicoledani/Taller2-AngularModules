export interface Libros {
    id: number;
    titulo: string;
    autor: string;
    añoPublicacion: number;
    categoria: CategoriaLibro;
    paginas: number;
}
export type CategoriaLibro = 'Novela' | 'Drama' | 'Romance' | 'Suspenso';