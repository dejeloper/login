# Login

Login es un proyecto base para implementar un sistema de autenticación en proyectos futuros. Está diseñado para ser reutilizado fácilmente y servir como punto de partida para otras aplicaciones que utilicen tecnologías similares. El objetivo es evitar comenzar desde cero, proporcionando una base sólida para futuros desarrollos.

## Estado del Proyecto

`En construcción 🚧`

## Tabla de Contenidos

1. [Descripción](#descripción)
2. [Características](#características)
3. [Tecnologías Utilizadas](#tecnologías-utilizadas)
4. [Instalación y Uso](#instalación-y-uso)
5. [Contribuciones](#contribuciones)
6. [Licencia](#licencia)
7. [Autores](#autores)

## Descripción

Este proyecto está enfocado en ofrecer una base de código ya generada que pueda ser fácilmente reutilizada, siempre y cuando se usen las mismas tecnologías. Está pensado inicialmente para uso personal, pero es de libre uso para cualquier persona que desee aprovecharlo.

## Características

- **Autenticación**: Utiliza `next-auth` con `CredentialsProvider` para el login con credenciales.
- **Formulario**: Manejado con `react-hook-form` para un control eficiente de formularios en React.
- **Estilos**: Usa `Tailwind CSS` junto con `shadcn` para estilizar la aplicación de manera rápida y responsiva.
- **Seguridad**: Encriptación de contraseñas usando `bcrypt` para asegurar los datos sensibles.
- **Base de Datos**: Integración con `Prisma` para manejar las consultas de base de datos, desplegado en `Supabase`.
- **Despliegue**: Preparado para ser desplegado en `Vercel`.

## Tecnologías Utilizadas

Este proyecto ha sido desarrollado utilizando las siguientes tecnologías:

- [Next.js](https://nextjs.org/): Framework de React con soporte para renderizado en servidor y generación de páginas estáticas.
- [TypeScript](https://www.typescriptlang.org/): Superconjunto de JavaScript que añade tipado estático, mejorando la robustez del código.
- [TailwindCSS](https://tailwindcss.com/): Framework de CSS para crear interfaces de usuario modernas y responsivas.
- [shadcn](https://ui.shadcn.com/): Conjunto de componentes estilizados para Next.js y TailwindCSS.
- [Prisma](https://www.prisma.io/): ORM para bases de datos, que facilita las consultas y la manipulación de datos.
- [React Hook Form](https://react-hook-form.com/): Librería para gestionar formularios de manera sencilla y eficiente en React.
- [NextAuth.js](https://next-auth.js.org/): Solución de autenticación para Next.js, compatible con diferentes proveedores.
- [Bcrypt](https://www.npmjs.com/package/bcrypt): Herramienta para la encriptación de contraseñas, asegurando la seguridad de los datos.
- [Supabase](https://supabase.io/): Base de datos desplegada en la nube.
- [Vercel](https://vercel.com/): Plataforma para desplegar aplicaciones frontend y backend fácilmente.

## Instalación y Uso

Para instalar y ejecutar el proyecto en tu entorno local, sigue estos pasos:

1. Clona el repositorio en tu máquina local:

   ```bash
   git clone https://github.com/dejeloper/login.git
   cd login
   ```

2. Instala las dependencias utilizando `pnpm`:

   ```bash
   pnpm install
   ```

3. Genera los modelos de Prisma y conecta la base de datos con `Supabase`:

   ```bash
   pnpm prisma generate
   ```

4. Inicia el proyecto en modo desarrollo:

   ```bash
   pnpm run dev
   ```

5. Para hacer un build de producción, asegúrate de ejecutar los comandos de Prisma y despliegue:

   ```bash
   pnpm prisma generate
   pnpm run build
   ```

## Contribuciones

El uso del proyecto es libre, y si alguien desea contribuir, puede hacerlo creando un Pull Request (PR). Sin embargo, dado que este proyecto está pensado principalmente para uso personal, las contribuciones externas serán revisadas, pero no necesariamente integradas.

Pasos para contribuir:

1. Haz un fork del repositorio.
2. Crea una rama nueva (`git checkout -b feature/nueva-funcionalidad`).
3. Realiza los cambios y haz commit (`git commit -m 'Descripción del cambio'`).
4. Haz push de tu rama (`git push origin feature/nueva-funcionalidad`).
5. Abre un Pull Request para que se revise tu contribución.

## Licencia

Este proyecto está licenciado bajo los términos de la **GPL / GNU**, lo que significa que puedes usar, modificar y distribuir el software bajo esta licencia, siempre que mantengas las mismas condiciones de libertad en versiones derivadas.

## Autores

- **Jhonatan Guerrero** - Ingeniero de Software - [dejeloper.com](https://dejeloper.com)

---

¡Gracias por revisar este proyecto! Si te resulta útil o tienes sugerencias, no dudes en contactar o contribuir.
