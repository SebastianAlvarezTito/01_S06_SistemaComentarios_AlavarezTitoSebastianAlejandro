import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Comment } from '../../models/comment';

@Component({
  selector: 'app-comentarios',
  standalone: true,
  // CommonModule es necesario para que funcione el Pipe de fecha (date)
  imports: [CommonModule, FormsModule],
  templateUrl: './comentarios.html',
  styleUrl: './comentarios.css'
})
export class ComentariosComponent implements OnInit {
  comments: Comment[] = [];
  newName: string = '';
  newBody: string = '';
  statusMessage: string = '';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadComments();
  }

  loadComments() {
    // Consumimos la API (GET) y tomamos los primeros 10 para la vista inicial
    this.apiService.getComments().subscribe({
      next: (data) => {
        // Mapeamos los datos de la API para que tengan una fecha base si no la traen
        this.comments = data.slice(0, 10).map(c => ({
          ...c,
          date: new Date() // Fecha simulada para los comentarios cargados
        }));
      },
      error: (err) => {
        console.error('Error al cargar comentarios:', err);
        this.statusMessage = '❌ No se pudieron cargar los comentarios';
      }
    });
  }

  enviarComentario() {
    if (this.newName.trim() && this.newBody.trim()) {
      const newComment: Comment = {
        name: this.newName,
        body: this.newBody,
        email: 'sebastian@vallegrande.edu.pe' // Requerido por la estructura de la API
      };

      // Realizamos la petición POST a la API
      this.apiService.postComment(newComment).subscribe({
        next: (res) => {
          this.statusMessage = '✅ ¡Comentario registrado exitosamente!';
          
          // Agregamos el comentario al inicio de la lista localmente con fecha y hora actual
          this.comments.unshift({ 
            ...res, 
            date: new Date() // Esto captura día, mes, año, hora, min y seg
          });

          this.limpiarFormulario();
          
          // El mensaje desaparece después de 3 segundos
          setTimeout(() => this.statusMessage = '', 3000);
        },
        error: (err) => {
          console.error('Error al postear:', err);
          this.statusMessage = '❌ Error al conectar con el servidor';
        }
      });
    } else {
      this.statusMessage = '⚠️ Por favor, completa todos los campos';
      setTimeout(() => this.statusMessage = '', 2000);
    }
  }

  limpiarFormulario() {
    this.newName = '';
    this.newBody = '';
  }
}