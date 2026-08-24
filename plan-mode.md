# Objetivo
Migrar mi portafolio de HTML, CSS y JavaScript a Vite, React, TypeScript, CSS Nesting y Tailwind 4

# Descripcion
- Programar en ingles

- Los archivos de HTML, CSS y JavaScript son un portafolio landing page que se despliega en GitHub Pagés en está URL https://danielpinedam.github.io/ y estan en esta ruta C:\Users\User\Documents\danielpinedam.github.io\html-css-js

- revisar las capturas de pantalla que estan dentro de C:\Users\User\Documents\danielpinedam.github.io\docs\readme_md\img
   - las imagenes que contienen la palabra "desktop" corresponden a la vista en computador
   - las imagenes que contienen la palabra "mobile" corresponden a la vista en celular
   - en las imagenes esta el inspector abierto y puedes ver los breakpoiints en la parte superior de la imagen

- El proyecto de Vite, React, TypeScript, CSS Nesting y Tailwind 4 es nuevo y esta en esta ruta C:\Users\User\Documents\danielpinedam.github.io\src

- Tailwind 4 se configura en archivo .css. En tailwind 4 quedó obsoleto el archivo tailwind.config.js

- La configuracion de Tailwind 4 esta en los archivos .css que estan dentro de la carpeta C:\Users\User\Documents\danielpinedam.github.io\src\css\tailwind

- La maquetación de React tiene que ser lo más similar posible a HTML, CSS y JavaScript

- Un componente por cada sección. Las secciones son las siguientes:
   -Botón contáctame y yo soy ingeniero de sistemas, yo soy desarrollador frontend y móvil
   -Perfil profesional y botón hoja de vida
   -experiencia
   -conocimientos
   -proyectos
   -contactame

-footer: hecho con ❤️ y ver código portafolio

- menu animado

- Usar una constante y un .map() para iterar cada uno de las siguientes secciones (componentes):
   -experiencia
   -conocimientos
   -proyectos
   -menu

- Todas las constantes están tipadas con Record de TypeScript

- Usar @theme de tailwind en archivo .css para definir la paleta de colores en la ruta C:\Users\User\Documents\danielpinedam.github.io\src\css\tailwind\theme.css


- OBLIGATORIO, donde sea necesario, usar
  /* celular */
  --breakpoint-xsm: 30rem; /* @media (min-width: 480px) { ... } */
 de tailwind para hacer responsive design en celular

- La maquetación tiene que ser responsive

- Crear un div wrapper global que sea el contenedor padre de toda la página web y agregarle este código de tailwind:

<div className='mx-auto max-w-[1920px]'>

- En el header agregar un nuevo botón para que en on click cambiar entre dark y light theme, el botón tiene

-instalar nexth themes https://www.npmjs.com/package/next-themes

-el boton para cambiar entre tema oscuro y claro tiene un icono de luna que cambia de color dependiendo del tema seleccionado

-usar el prefijo dark: de Tailwind para hacer que funcione tema oscuro y claro

* Existe configuracion para tema claro y oscuro en:
   * C:\Users\User\Documents\danielpinedam.github.io\src\css\tailwind\preflight.css buscar el comentario "Tema oscuro y claro"
   * C:\Users\User\Documents\danielpinedam.github.io\src\css\tailwind\index.css buscar el codigo @custom-variant dark (&:where(.dark, .dark *));

-agregar el siguiente código del theme provider para configurar Next themes 

import { ThemeProvider } from 'next-themes'

<ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} enableColorScheme={true} disableTransitionOnChange>


- Usar dvh y dvw de tailwind y CSS cuando sea necesario, prohibido usar vh y vw

- Usar esta skill para rediseñar mi portafolio
https://github.com/ericzakariasson/scandinavian-design

* las imagenes (assets) las copias de C:\Users\User\Documents\danielpinedam.github.io\html-css-js al proyecto de vite y react, NO las muevas ni elimines

* En la constante que itera los conociminetos incluir node js con la imagen C:\Users\User\Documents\danielpinedam.github.io\html-css-js\assets\image\logo\conocimientos\node_js.png

* La configuracion del Favicon entre  C:\Users\User\Documents\danielpinedam.github.io\html-css-js\index_2.html y react tienen que ser equivalentes

* La estructura de los assets de html-css-js y react tiene que ser lo mas similar posible 

* Los componentes tienen que estar en C:\Users\User\Documents\danielpinedam.github.io\src\components

* Las constantes usan UPPER_SNAKE_CASE

# Ante ambigüedad, detener y preguntar (nunca asumir)
Si en cualquier momento de la ejecución —mientras lees, editas, creas o modificas 
código— te encuentras con una ambigüedad, error, limitación, contradicción, 
solapamiento de ideas, un caso no contemplado en las reglas, 
un conflicto entre reglas, o cualquier duda técnica que pueda cambiar el resultado, 
tienes PROHIBIDO asumir una solución por tu cuenta y continuar.

En su lugar, debes usar AskUserQuestion:
1. DETENER la ejecución en ese punto exacto (no continuar generando código hasta 
   recibir respuesta).
2. Explicar brevemente en qué consiste la ambigüedad o el error, y por qué no 
   puedes resolverlo por tu cuenta con la información disponible.
3. Presentarme el problema en forma de PREGUNTA EXPLÍCITA, con:
   - Dos o más opciones concretas para resolverlo.
   - Una de esas opciones marcada claramente como "recomendada", junto con el 
     motivo de la recomendación.
   - Una opción adicional de tipo abierta/libre, que me permita escribir mi 
     propia respuesta si ninguna de las opciones propuestas se ajusta a lo que 
     necesito.
4. Esperar mi respuesta antes de continuar con cualquier código relacionado a 
   esa duda.

Ninguna instrucción de las reglas anteriores autoriza a rellenar vacíos, 
inventar comportamiento, deducir o tomar decisiones de diseño 
no especificadas explícitamente sin antes preguntar.