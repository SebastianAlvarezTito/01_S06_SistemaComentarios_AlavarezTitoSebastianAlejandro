export interface Comment {
  id?: number;
  name: string;
  body: string;
  email?: string; // Requerido por la API de JSONPlaceholder
  postId?: number;
  date?: Date; // Para el reto adicional
}