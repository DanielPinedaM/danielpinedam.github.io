# Ejecución de Proyecto

* Runtime: Node.js
* Administrador de versiones: fnm
* Manejador de paquetes: pnpm
* Archivo de bloqueo: pnpm-lock.yaml

# Buenas Practicas de TypeScript
* Usar strict type checking

* Prefiere la inferencia de tipos cuando el tipo sea obvio

* Prohibido el tipo `any`; usa `unknown` cuando el tipo sea incierto

# Reglas Obligatorias
* Para maquetar siempre dar prioridad a usar Tailwind, solamente en casos especiales de que exista algo que no se pueda maquetar con Tailwind entonces usar CSS modules

* En caso de que sea necesario usar CSS, entonces usar:
   * CSS usar Media Query Range Syntax
   * CSS Nesting

* Para tema oscuro y claro usar prefijo dark: de Tailwind

* Siempre usar import alias de tsconfig.json con ruta absoluta, está prohibido importar con ruta relativa

* Usar etiquetas HTML semánticas