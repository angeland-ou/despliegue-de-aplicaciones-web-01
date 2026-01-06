# QuickPlan - Agenda Web de Eventos del Centro

**QuickPlan** es una aplicación web desarrollada en **React** con **Vite** que permite consultar, organizar y marcar como favoritos los eventos del centro educativo. 

---

## 🚀 Características principales

- **Lista de eventos**: Ver todos los eventos en tarjetas con información clave: título, categoría, fecha y lugar.  
- **Detalle del evento**: Visualizar la información completa de cada evento con un botón para añadir a favoritos.  
- **Favoritos**: Guardar eventos favoritos y gestionarlos fácilmente desde la lista principal.  
- **Buscador y filtros**: Buscar por título, lugar o descripción y filtrar por categoría.  
- **Contador dinámico**: Indica “Mostrando X de Y eventos” según la búsqueda y los filtros aplicados.  
- **Gestión de estados y errores**: Mensajes de carga y error si los datos no se pueden leer.

---

## 📂 Estructura del proyecto

- `src/components/`: Componentes React reutilizables (header, footer, card)  
- `src/pages/`: Páginas principales (Lista de eventos, Detalle de evento, Favoritos, Contacto, No Encontrado)  
- `src/data/eventos.json`: Archivo local con los eventos 
- `src/App.jsx`: Componente principal y rutas
- `src/main.jsx`: Punto de entrada de la app

---

## 🛠️ Tecnologías utilizadas

- **React**: Construcción de interfaz por componentes y gestión de estado con `useState` y `useEffect`.  
- **Vite**: Configuración rápida y build optimizado.  
- **CSS / Bootstrap**: Estilos de la aplicación.

---

## 🚀 Pasos para ejecutar el proyecto

Clonar el repositorio:
git clone https://github.com/angeland-ou/despliegue-de-aplicaciones-web-01

Instalar dependencias:
npm install

Iniciar el servidor de desarrollo:
npm run dev

Abrir la aplicación en el navegador (generalmente en http://localhost:5173/)

---

## 📝 Uso

- **Lista de eventos**: Explora todos los eventos disponibles en tarjetas.  
- **Buscar y filtrar**: Utiliza el buscador y el filtro por categoría para encontrar eventos específicos.  
- **Ver detalle**: Haz clic en “Ver evento” para conocer la información completa del evento.  
- **Añadir a favoritos**: Pulsa el botón correspondiente; si el evento ya está en favoritos, el botón se desactiva y muestra “Ya en favoritos”.  
- **Gestionar favoritos**: Visualiza todos tus eventos favoritos y quítalos si lo deseas.  

---

## 💡 Notas

- Los datos se cargan desde `eventos.json` usando `useEffect` para simular la carga asíncrona.  
- Si el archivo JSON no se puede cargar o está vacío, se muestra un mensaje de error.  
- No requiere backend: toda la información se maneja de forma local.
