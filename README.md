# 🚀 Proyecto Web Full Stack

Aplicación web desarrollada con:

- ⚛️ React (Frontend)
- 🟢 Node.js + Express (Backend)
- 🐬 MySQL (Base de datos)

---

## 📁 Estructura del proyecto

```
/mi-proyecto
│
├── client      # Frontend (React)
├── server      # Backend (Express)
├── database    # Scripts SQL
└── README.md
```

---

## ⚙️ Instalación

### 1. Clonar el repositorio

```
git clone https://github.com/tu-usuario/mi-proyecto.git
cd mi-proyecto
```

---

### 2. Cambiar a la rama de desarrollo

```
git checkout develop
```

Si no existe en local:

```
git checkout -b develop origin/develop
```

---

### 3. Instalar dependencias

#### Frontend

```
cd client
npm install
```

#### Backend

```
cd ../server
npm install
```

---

## 🔐 Variables de entorno

Crear un archivo `.env` en `/server`:

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=mi_proyecto
PORT=3000
```

---

## ▶️ Ejecución del proyecto

### Backend

```
cd server
npm run dev
```

### Frontend

```
cd client
npm run dev
```

---

## 🔀 Flujo de trabajo (Git)

### ⚠️ IMPORTANTE: Nunca trabajar en `main`

---

### 1. Actualizar proyecto

```
git checkout develop
git pull
```

---

### 2. Crear nueva rama

```
git checkout -b feature/nombre-funcionalidad
```

Ejemplo:

```
git checkout -b feature/login
```

---

### 3. Subir cambios

```
git add .
git commit -m "Descripción clara del cambio"
git push origin feature/nombre-funcionalidad
```

---

### 4. Crear Pull Request

- Ir a GitHub
- Crear PR de `feature/...` → `develop`

---

## 📌 Buenas prácticas

- No subir `node_modules`
- No subir `.env`
- Hacer commits pequeños y claros
- Hacer `git pull` antes de empezar a trabajar
- Usar nombres de ramas descriptivos

---

## 🧪 API (ejemplo)

```
GET /api/test
```

Respuesta:

```
{
  "mensaje": "API funcionando"
}
```

---

## 👥 Equipo

- Desarrollador 1
- Desarrollador 2

---

## 📄 Licencia

Proyecto de uso educativo / personal
