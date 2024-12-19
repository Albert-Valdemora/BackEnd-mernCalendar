# Calendar App

Este es un proyecto de calendario desarrollado con el stack MERN (MongoDB, Express, React, Node.js). La aplicación permite a los usuarios registrarse, iniciar sesión, y gestionar eventos en un calendario. Los eventos pueden ser creados con título, descripción, fecha y hora de inicio y finalización. Además, los usuarios pueden modificar o eliminar eventos existentes.

## Características

- **Registro e inicio de sesión**: Los usuarios pueden registrarse e iniciar sesión en la aplicación.
- **Gestión de eventos**: Los usuarios pueden crear, modificar y eliminar eventos con fecha y hora.
- **Calendario interactivo**: Visualiza los eventos en un calendario grande.
- **Modificaciones de eventos**: Los eventos pueden ser editados o eliminados.
- **Tecnologías utilizadas**: React en el frontend y Node.js con Express en el backend.

## Despliegue

El proyecto está desplegado en **Railway**.

## Tecnologías utilizadas

### Frontend
El frontend fue desarrollado con React.js, utilizando las siguientes tecnologías y librerías:
- `react`: Biblioteca principal de React.
- `react-big-calendar`: Biblioteca para renderizar el calendario interactivo.
- `react-datetime-picker`: Componente para seleccionar fechas y horas.
- `react-redux` y `redux-thunk`: Para el manejo del estado global y acciones asíncronas.
- `sweetalert2`: Para mostrar alertas personalizadas.
- `react-router-dom`: Para la gestión de rutas en la aplicación.
- `moment`: Para trabajar con fechas y horas.
- `react-modal`: Para mostrar modales de manera eficiente.

### Backend
El backend fue desarrollado con Node.js y Express.js, utilizando las siguientes dependencias:
- `express`: Framework para crear el servidor.
- `mongoose`: Biblioteca para interactuar con MongoDB.
- `jsonwebtoken`: Para generar y verificar tokens JWT para la autenticación.
- `bcryptjs`: Para encriptar contraseñas de usuarios.
- `dotenv`: Para manejar variables de entorno.
- `cors`: Para habilitar la comunicación entre el frontend y backend.


## Instalación


1. Clona este repositorio en tu máquina local.
    ```bash
     git clone https://github.com/Albert-Valdemora/BackEnd-mernCalendar.git
    ```
2. Navega al directorio del proyecto.
    ```bash
    cd BackEnd-mernCalendar
    ```
3. Instala las dependencias necesarias.
    ```bash
    npm install
    ```
4. Inicia el servidor de desarrollo.
    ```bash
    npm start
    ```

## Contacto

- Creador: **Albert Daniel Valdemora Suarez**
-  **Correo Electrónico**: albertvaldemorat@gmail.com

¡Gracias por usar Calendar App!
