# Ejecución de Proyecto

* Runtime: Node.js
* Administrador de versiones: fnm
* Manejador de paquetes: pnpm
* Archivo de bloqueo: pnpm-lock.yaml

# Buenas Practicas de TypeScript
* Usar strict type checking

* Preferir la inferencia de tipos cuando el tipo sea obvio

* Prohibido el tipo `any`; usa `unknown` cuando el tipo sea incierto

* Preferir `interface` para definir tipos de objeto literal y arrays de objetos

* Usar `Record` para objetos literales dinámicos

* Usar `type` para tipos primitivos, literales o uniones

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

# Ante ambigüedad, detener y preguntar (nunca asumir)
Si en cualquier momento de la ejecución —mientras lees, editas, creas o modificas código— te encuentras con una ambigüedad, error, limitación, contradicción, solapamiento de ideas, un caso no contemplado en las reglas, un conflicto entre reglas, o cualquier duda técnica que pueda cambiar el resultado, tienes PROHIBIDO asumir una solución por tu cuenta y continuar.

En su lugar, debes usar AskUserQuestion:
1. DETENER la ejecución en ese punto exacto (no continuar generando código hasta recibir respuesta).
2. Explicar brevemente en qué consiste la ambigüedad o el error, y por qué no puedes resolverlo por tu cuenta con la información disponible.
3. Presentarme el problema en forma de PREGUNTA EXPLÍCITA, con:
   - Dos o más opciones concretas para resolverlo.
   - Una de esas opciones marcada claramente como "recomendada", junto con el motivo de la recomendación.
   - Una opción adicional de tipo abierta/libre, que me permita escribir mi propia respuesta si ninguna de las opciones propuestas se ajusta a lo que necesito.
4. Esperar mi respuesta antes de continuar con cualquier código relacionado a esa duda.

Ninguna instrucción de las reglas anteriores autoriza a rellenar vacíos, inventar comportamiento, deducir o tomar decisiones de diseño no especificadas explícitamente sin antes preguntar.