# Stack Tec VitaSalud

Infografia interactiva desarrollada con codigo para presentar el stack tecnologico, herramientas, arquitectura, API, base de datos y evolucion UX/UI del proyecto **VitaSalud**.

Este repositorio no es la aplicacion clinica principal. Es una experiencia web preparada para explicar, de forma visual y navegable, como se construyo VitaSalud desde el punto de vista full-stack.

## Objetivo

El proyecto transforma una infografia tradicional en una presentacion tecnica interactiva. Permite recorrer:

- Stack frontend, backend, persistencia y herramientas.
- Arquitectura general del proyecto.
- Documentacion de API REST y uso de Swagger UI.
- Integracion de API externa para departamentos y ciudades de Colombia.
- Evolucion del modelo de base de datos.
- Proceso UX/UI desde los mockups iniciales de Ether Health hasta VitaSalud.
- Roles y aportes del equipo.

## Caracteristicas

- Interfaz responsive para escritorio y dispositivos moviles.
- Animaciones con Framer Motion.
- Efecto maquina de escribir en las secciones de Miguel Angel y Valeria.
- Carruseles con vista ampliable para evidencias visuales.
- Preview embebido del PDF final de VitaSalud.
- Favicon y branding propio de Stack Tec VitaSalud.
- Tarjetas con efecto liquid glass.
- Logos de tecnologias y herramientas mediante Simple Icons con fallback visual.
- Diagrama inicial de base de datos con relaciones explicadas.

## Stack tecnologico

### Frontend

- React 19
- TypeScript
- TanStack Router / TanStack Start
- Vite
- Tailwind CSS 4
- Radix UI
- Framer Motion
- Lucide React

### Formularios y validacion

- React Hook Form
- Zod
- @hookform/resolvers

### Herramientas y entorno

- VS Code
- Figma
- DBeaver
- MySQL Workbench
- Swagger UI
- npm

## Estructura principal

```txt
src/
  assets/
    valeria/              # Capturas del diseno base UX/UI
    VitaSalud.pdf         # Documento final usado como vista previa
    db-final-reference.png
  components/
    landing/              # Secciones de la infografia interactiva
    ui/                   # Componentes base reutilizables
  routes/
    __root.tsx            # Configuracion global, metadata y favicon
    index.tsx             # Pagina principal
  styles.css              # Tailwind, tema, animaciones y utilidades visuales
```

## Instalacion

Requisitos:

- Node.js 18 o superior
- npm

Instalar dependencias:

```bash
npm install
```

Ejecutar en desarrollo:

```bash
npm run dev
```

Por defecto Vite mostrara la URL local disponible. Para usar el mismo puerto de exposicion:

```bash
npm run dev -- --host 127.0.0.1 --port 8080
```

Abrir:

```txt
http://localhost:8080/
```

## Scripts disponibles

```bash
npm run dev       # Servidor de desarrollo
npm run build     # Build de produccion
npm run preview   # Preview del build
npm run lint      # Revision con ESLint
npm run format    # Formato con Prettier
```

## Creditos del proyecto VitaSalud

- **Rafael Arenas / RafArenasDev**: desarrollo full-stack, integracion frontend/backend, documentacion tecnica e implementacion de la infografia interactiva.
- **Miguel Angel Herrera Oyola**: analisis y diseno de la base de datos desde el dominio clinico.
- **Valeria Martinez Castaneda**: propuesta UX/UI inicial en Figma y direccion visual base.

## Autor

© 2026 **RafArenasDev** · Stack Tec VitaSalud · Fundacion Universitaria del Area Andina · Desarrollo Web
