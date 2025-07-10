# 🌊 Oceans Stack Test

Aplicación web para la gestión de productos y órdenes en un restaurante.

> ⚠️ **Nota:** Las variables de entorno con información sensible serán proporcionadas por correo electrónico.

---

## 📦 Ejecución del Proyecto con Docker

> **Requisitos previos:** Tener instalados [Docker](https://www.docker.com/) y [Docker Desktop](https://www.docker.com/products/docker-desktop/), incluyendo soporte para Docker Compose.

### Pasos:

1. Clona este repositorio:
   ```bash
   git clone <url-del-repositorio>
2. Dentro de la carpeta del backend, copia el archivo .env.template y renómbralo a .env.
3. Inicia Docker Desktop.
4. Desde la raíz del proyecto, ejecuta el siguiente comando: `docker compose up --build -d`
5. Verifica en Docker Desktop que los contenedores estén corriendo.
6. Accede a la aplicación desde tu navegador en: `http://localhost:8080`

# 💻 Ejecución del Proyecto de Forma Local

Requisitos previos: Tener instalado Node.js versión 18 o superior (se recomienda versión 20+ para compatibilidad con Vite).

### Pasos:

1. Clona este repositorio con el comando: `git clone <url-del-repositorio>`
2. Copia los archivos .env.template del frontend y backend, y renómbralos como .env.
3. En la carpeta del frontend:
        `cd frontend
        yarn install
        yarn dev`
4. En la carpeta del backend (en otra terminal):
        `cd backend
        npm install
        npm run dev`
5. Abre tu navegador en:

# 🛠 Tecnologías Utilizadas

## Frontend

• ⚛️ React Hooks
• 🧰 Redux Toolkit + React Redux
• 🎨 Material UI
• ⚡ Vite
• 🟦 TypeScript
• 🌐 Axios
• 📋 React Hook Form
• 🛡️ Yup

## Bacekend

• 🟩 Node.j
• 🚂 Expres
• 🍃 MongoD
• 🟦 TypeScript

## Despliegue

• 🐳 Docker
• 🧩 Docker Compose

## 📁 Estructura del Proyecto (opcional)

Oceans-stacks-Test
├── backend
│   ├── src
│   ├── .env.template
│   └── ...
├── frontend
│   ├── src
│   ├── .env.template
│   └── ...
├── docker-compose.yml
└── README.md

## 👨‍💻 Autor
Cristian Andrés Tobar
Desarrollador Full Stack



