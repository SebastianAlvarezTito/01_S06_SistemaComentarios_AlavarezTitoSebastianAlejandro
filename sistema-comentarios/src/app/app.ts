import { Component } from '@angular/core';
import { ComentariosComponent } from './components/comentarios/comentarios'; // <--- QUITAR EL .ts AQUÍ

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ComentariosComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent { }