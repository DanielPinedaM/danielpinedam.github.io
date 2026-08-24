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

* Todas las constantes usan UPPER_SNAKE_CASE

## Uso **OBLIGATORIO** de `playwright-cli`
* **OBLIGATORIO** usar la skill `.claude\skills\playwright-cli\SKILL.md` para entender el funcionamiento de `playwright-cli`

* **SIEMPRE**, después de realizar cualquier modificación solicitada, usar `playwright-cli` para probar y verificar el resultado, especialmente cualquier cambio de maquetación o funcionalidad.

* Usar `playwright-cli screenshot` para obtener capturas de pantalla y probar cambios de maquetación o funcionalidad.

* **SIEMPRE** usar playwright-cli en modo `--headed` con `pnpm exec playwright-cli open --headed http://localhost:5173`

* Si al probar encuentras bugs, corrígelos y vuelve a probar con `playwright-cli` hasta verificar que la modificación funciona correctamente.