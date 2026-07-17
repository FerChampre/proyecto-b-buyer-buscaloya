[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/7Ga9TYp-)
# buyer

Aplicación **Buyer** del [Proyecto IAW 2026](https://iaw-2026.github.io/proyecto/) — comisión `BuscaloYa`.

Esta app corresponde al rol del **Buyer** en los proyectos de tipo **B (Delivery)**.

---
# Buscaloya

Buscaloya es una plataforma web de delivery y e-commerce que conecta a los usuarios con las mejores tiendas de su ciudad. La aplicación permite explorar comercios, gestionar un carrito de compras en tiempo real, interactuar con mapas para localizar direcciones exactas y realizar un seguimiento preciso del ciclo de vida de los pedidos.

## Demo / Deploy

El proyecto se encuentra desplegado y listo para probar en el siguiente enlace:
🔗 **[Link al Deploy del Proyecto](https://proyecto-b-buyer-buscaloya.vercel.app)**

---

## Credenciales de Acceso

Para facilitar la corrección y evaluación de las diferentes funcionalidades según el rol del usuario, se pueden utilizar los siguientes accesos:

### 1. Usuario Final (Cliente)
*Este usuario permite buscar tiendas, cargar productos al carrito, gestionar direcciones personales y simular una compra.*
* **Usuario:** `buyer1@buscaloya.com`
* **Contraseña:** `buyer_IAW_2026`

*Este usuario contiene una compra ya realizada con un paquete por cada estado posible para visualizar cada uno.*
* **Usuario:** `buyer2@buscaloya.com`
* **Contraseña:** `buyer_IAW_2026`

### 2. Administrador de la Plataforma
*Este usuario habilita el acceso exclusivo al Panel Admin (`/admin/users`) para la gestión integral de usuarios, pudiendo editar datos del usuario seleccionado y sus direcciones.*
* **Usuario:** `admin@iaw.com`
* **Contraseña:** `admin_IAW_2026`

---

## 💻 Stack Tecnológico
* **Frontend:** Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS v4.
* **Backend:** Server Actions (Next.js), Zod para validación de esquemas y datos.
* **Base de Datos:** PostgreSQL en entorno Serverless utilizando Neon.
* **Eventos en Tiempo Real:** PostgreSQL `LISTEN/NOTIFY` combinado con Server-Sent Events (SSE).
* **Autenticación:** Clerk.
* **Mapas:** Mapbox GL y MapLibre GL.

---

## 🚀 Características Principales

* **Arquitectura en Tiempo Real Avanzada (SSE):** El seguimiento del estado de los pedidos no utiliza *polling* tradicional, sino que está conectado a un flujo de Server-Sent Events (SSE) originado por un trigger nativo de PostgreSQL (`LISTEN/NOTIFY`). Esto garantiza actualizaciones de la interfaz en milisegundos sin sobrecargar el servidor.
* **Autenticación Segura y RBAC:** Control de accesos y flujos de usuarios integrado con Clerk, garantizando que ciertas rutas (`/admin/users`) queden estrictamente reservadas para usuarios con el rol `system_admin`.
* **Navegación Dinámica por Roles:** Layout inteligente que adapta los menús y vistas (`Tiendas`, `Mi Compra`, `Mi Perfil` o `Panel Admin`) según la autenticación del tipo de usuario logueado.
* **Seguridad y Validación Server-Side:** La aplicación protege contra vulnerabilidades web clásicas. Utiliza `Zod` para validar fuertemente toda entrada de usuario (evitando datos corruptos en el registro/edición), previene inyección SQL gracias al driver de Neon y valida exhaustivamente la propiedad de las compras a nivel de Base de Datos para evitar ataques IDOR.
* **Manejo de Errores Resiliente:** Integración nativa de `Error Boundaries` de Next.js (`error.tsx`, `global-error.tsx`, y `not-found.tsx`). La plataforma previene la caída total de la aplicación ante excepciones críticas y ofrece al usuario flujos de recuperación ("Retry") manteniendo un diseño estético coherente con la marca.
* **Prevención de Spam (Rate Limiting):** Arquitectura híbrida lista para producción utilizando `@upstash/ratelimit` y Redis. Protege los Endpoints críticos (Server Actions) contra abusos y bots en el entorno *Serverless* de Vercel utilizando el algoritmo *Sliding Window*.
* **UX/UI Premium y Rendimiento:** La interfaz está construida enfocándose en el "Efecto Wow" comercial. Utiliza un panel de control "Dashboard" inmersivo, *Glassmorphism*, e implementa esqueletos de carga animados (`loading.tsx` y Suspense) garantizando una experiencia sin bloqueos (FCP rápido).
* **Gestión de Direcciones Interactiva:** Integración asíncrona con Mapbox y `next/dynamic` para la selección y autocompletado geográfico de ubicaciones mediante mapas sin afectar el rendimiento principal de Next.js.
* **Live Tracking con MapLibre GL:** Cuando el pedido pasa al estado `OUT_FOR_DELIVERY` (En camino), se renderiza un mapa dinámico con telemetría que permite al usuario visualizar en tiempo real la ruta del repartidor desde la tienda hasta su domicilio.
* **Consumo de APIs Externas:** Integración dinámica con el servicio de *WeatherAPI.com* para procesar el clima actual de la ciudad y modificar la interfaz, alertando a los clientes sobre posibles demoras logísticas por clima adverso.
* **Conectividad de Microservicios:** Se desarrolló el consumo e integración de datos real en vivo con las APIs externas de las otras aplicaciones del ecosistema B2C (Seller, Delivery, Payments).  
---

Enunciado completo: <https://iaw-2026.github.io/proyecto/>
