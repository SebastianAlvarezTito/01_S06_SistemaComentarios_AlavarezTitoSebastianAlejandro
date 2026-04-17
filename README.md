# 01_S06_SistemaComentarios_AlavarezTitoSebastianAlejandro

# 💬 API Comment System - Angular REST Integration

Este proyecto es una aplicación desarrollada en **Angular 21** que demuestra la integración de un frontend moderno con una **API REST** externa (JSONPlaceholder). Se enfoca en la gestión de peticiones asíncronas y el manejo de estados de interfaz.

## 👤 Información del Desarrollador
* **Nombre:** Sebastian Alejandro Alvarez Tito
* **Institución:** Valle Grande
* **Ciclo:** Tercer Semestre
* **Curso:** Análisis de Sistemas Empresariales (ASE)

---

## 🚀 Funcionalidades Implementadas

### 1. Consumo de API (GET)
* Conexión exitosa con el endpoint `/comments`.
* Implementación de un **Service** especializado utilizando `HttpClient`.
* Renderizado dinámico de los primeros 10 comentarios para optimización de carga.

### 2. Registro de Datos (POST)
* Formulario reactivo vinculado mediante `[(ngModel)]`.
* Simulación de envío de datos al servidor mediante el método POST.
* **UX Enhancements:** Limpieza automática de campos y mensajes de confirmación temporizados tras el éxito de la operación.

### 3. Retos Adicionales (Extras)
* **Contador en tiempo real:** Visualización del total de comentarios presentes en el arreglo local.
* **Simulación de Timestamp:** Cada comentario nuevo incorpora la fecha y hora exacta del sistema utilizando el Pipe `date:'dd/MM/yyyy HH:mm:ss'`.

---

## 🛠️ Stack Tecnológico

* **Angular 21:** Uso de *Standalone Components* y nuevas estrategias de detección de cambios.
* **TypeScript:** Tipado estricto para el modelo de datos `Comment`.
* **RxJS:** Manejo de flujos de datos asíncronos mediante `Observables` y `.subscribe()`.
* **CSS Moderno:** Diseño "Dark Mode" con enfoque tecnológico y responsivo.

---

## ⚙️ Instalación y Configuración

1. Clonar el repositorio.
2. Ejecutar `npm install` para instalar dependencias (incluyendo `zone.js`).
3. Iniciar el servidor con `ng serve`.
4. Acceder a `http://localhost:4200`.

---
⭐ *Proyecto académico enfocado en el desarrollo de aplicaciones web empresariales.*