---
name: deploy-gh-pages
description: Desplegar el sitio compilado en GitHub Pages publicando la carpeta docs de la rama main con gh-pages. Commitea automaticamente los cambios pendientes con la skill git-commit, deja el working directory y el staging area limpios, prohibe crear ramas nuevas y verifica el resultado en https://danielpinedam.github.io/
when_to_use: Usar cuando se solicite publicar, desplegar o actualizar el sitio en produccion. Triggers - "desplegar", "despliega", "deploy", "publicar el sitio", "publica en GitHub Pages", "subir a produccion", "actualizar la pagina publicada", "actualizar el portafolio en linea", "gh-pages".
disable-model-invocation: true
allowed-tools: Bash(git status:*) Bash(git branch:*) Bash(git rev-parse:*) Bash(git symbolic-ref:*) Bash(git fetch:*) Bash(git pull:*) Bash(git push:*) Bash(git add:*) Bash(git commit:*) Bash(git diff:*) Bash(git log:*) Bash(git ls-tree:*) Bash(git rev-list:*) Bash(pnpm run deploy:*) Bash(pnpm exec playwright-cli:*)
---

# Desplegar en GitHub Pages

Publica el sitio compilado en <https://danielpinedam.github.io/>.

## Reglas Obligatorias

* El despliegue es **totalmente automático**. Está PROHIBIDO detener el flujo para pedir que se commitee, se suba o se confirme algo: la skill commitea, sube, despliega y verifica por su cuenta de principio a fin.

* Está **PROHIBIDO crear una nueva rama**. El despliegue se hace **siempre sobre `main`**, en la carpeta **`/docs`**.

* Está **PROHIBIDO** usar la rama `gh-pages` y está **PROHIBIDO** usar GitHub Actions.

* Si el working directory o el staging area tienen cambios pendientes, **commitearlos automáticamente invocando la skill `git-commit`**, que es la única que decide el `<emoji>` y el `<type>` correctos de cada cambio y que separa los cambios en un commit por feature. Está PROHIBIDO redactar esos mensajes de commit por fuera de la skill `git-commit`.

* El working directory y el staging area deben quedar **limpios** al terminar el despliegue.

* **El commit de despliegue SIEMPRE es el último commit.** Cada vez que se pida desplegar, el commit del build —`📦 build(deploy)`, el commit que publica el sitio— debe quedar **siempre** como el commit más reciente de `main`, sin ningún commit después de él. Por eso el orden del flujo es innegociable: primero se commitea todo lo pendiente (paso 2), después se sube al remoto (paso 3) y solo al final se despliega (paso 4).

* Está **PROHIBIDO crear cualquier commit después del commit de despliegue**. Si al terminar el despliegue quedan cambios nuevos por commitear, se commitean y se vuelve a desplegar, de modo que el commit del build vuelva a quedar de último.

* El commit que genera el despliegue usa **siempre** el tipo `build` y el emoji `📦`, tomados de la tabla de la skill `git-commit`.

* Está **PROHIBIDO modificar código** durante el despliegue. Esta skill commitea, publica, sincroniza y verifica; no edita archivos. La única excepción es corregir un bug detectado en la verificación del paso 7.

## Orden de los Commits al Desplegar

El commit de despliegue es el que publica el sitio, así que tiene que ser lo último que entra a `main`. Cualquier commit posterior deja publicado un sitio que ya no corresponde al código de la rama.

Orden CORRECTO al terminar el despliegue (`git log --oneline`):

```
📦 build(deploy): publicar el sitio compilado en GitHub Pages   <- SIEMPRE el ultimo
💄 style(projects): ...                                         <- cambios pendientes, commiteados antes
✨ feat(contact): ...                                           <- cambios pendientes, commiteados antes
```

Orden INCORRECTO, prohibido dejar el repositorio así:

```
💄 style(projects): ...                                          <- commit despues del deploy: PROHIBIDO
📦 build(deploy): publicar el sitio compilado en GitHub Pages
```

Si se llega a esta situación, volver a desplegar para que el commit del build quede otra vez de último.

## Flujo de Trabajo

Antes de desplegar, copiar este checklist y marcarlo a medida que se avanza:

```
- [ ] 1. Verificar que la rama activa es main.
- [ ] 2. Commitear los cambios pendientes invocando la skill `git-commit`.
- [ ] 3. Sincronizar con origin/main y subir los commits locales.
- [ ] 4. Desplegar con `pnpm run deploy`.
- [ ] 5. Traer el commit de despliegue con `git pull --ff-only`.
- [ ] 6. Verificar que el arbol quedo limpio y que el ultimo commit es el del build.
- [ ] 7. Verificar el sitio publicado con `pnpm exec playwright-cli open --headed https://danielpinedam.github.io/`
- [ ] 8. Reportar el resultado.
```

### 1. Verificar la rama activa

```bash
git rev-parse --abbrev-ref HEAD
```

Debe devolver `main`. Si devuelve cualquier otra rama, **ABORTAR** e informar que el despliegue solo se hace desde `main`. Está prohibido crear la rama, cambiar de rama o hacer merge por iniciativa propia.

Esta es la única condición que detiene el despliegue.

### 2. Commitear los cambios pendientes

```bash
git status --short
```

* Si la salida está **vacía**, saltar al paso 3.

* Si la salida **NO** está vacía, invocar la skill `git-commit` y dejar que ella haga todo el trabajo: revisar el diff, identificar cuántas features distintas hay, mover al staging area solo los archivos de cada una y crear un commit por feature con su `<emoji>` y su `<type>` correctos. No preguntar, no pedir autorización, no redactar los mensajes por fuera de esa skill.

Al terminar, confirmar que el árbol quedó limpio:

```bash
git status --short
```

Si todavía quedan archivos pendientes, informarlo: son archivos que la skill `git-commit` no pudo clasificar y necesitan revisión antes de continuar.

### 3. Sincronizar con `origin/main` y subir los commits locales

```bash
git fetch origin
git pull --ff-only
git push
```

El `push` es **obligatorio antes de desplegar**. `gh-pages` no publica el working directory: clona `origin` y trabaja sobre lo que hay en el remoto. Si los commits del paso 2 no se suben antes, `gh-pages` construye su commit sobre una base más vieja, `origin/main` y `main` local divergen y el `git pull` del paso 5 falla.

Subir primero también es lo que garantiza que el commit `📦 build(deploy)` quede como **último commit** de la rama.

Si el `pull` no puede avanzar en fast-forward, **ABORTAR** e informar que `main` local y `origin/main` divergieron. Está prohibido resolver la divergencia con `merge`, `rebase` o `reset` sin autorización explícita.

### 4. Desplegar

```bash
pnpm run deploy
```

Usar siempre `pnpm run deploy`, nunca `pnpm deploy`: `deploy` también es un subcomando propio de pnpm para workspaces y `run` evita la ambigüedad.

El script hace dos cosas:

1. `pnpm build` compila el proyecto en `dist/`.

2. `gh-pages` clona el repositorio, copia `dist/` dentro de `docs/` en la rama `main`, commitea y hace push a `origin`.

El despliegue termina bien cuando la salida imprime `Published`.

El commit lo crea `gh-pages` con el mensaje definido en el script `deploy` de `package.json`:

```
📦 build(deploy): publicar el sitio compilado en GitHub Pages
```

`gh-pages` solo borra y reescribe la carpeta `docs/`. El resto de `main` (`src/`, `index.html`, `public/`, configuración) no se toca. Verificarlo si hay dudas:

```bash
git ls-tree origin/main --name-only
```

### 5. Traer el commit de despliegue

`gh-pages` hace push directo a `origin/main` desde un clon temporal, así que la rama local queda un commit por detrás:

```bash
git pull --ff-only
```

### 6. Verificar el estado final del repositorio

```bash
git status
git log --oneline -1
```

* `git status` debe reportar `nothing to commit, working tree clean`. La carpeta `dist/` no aparece porque está en `.gitignore`; la carpeta `docs/` sí queda versionada y llega ya commiteada desde el paso anterior.

* `git log --oneline -1` debe mostrar el commit `📦 build(deploy): publicar el sitio compilado en GitHub Pages`. Si el último commit es otro, el orden se rompió: informarlo.

### 7. Verificar el sitio publicado

Usar `playwright-cli` en modo `--headed`, según la skill `playwright-cli`:

```bash
pnpm exec playwright-cli open --headed https://danielpinedam.github.io/
```

Comprobaciones mínimas:

```bash
# Confirmar que se sirven los assets de ESTE build y que React monto la app.
# Los hashes deben coincidir con los que imprimio `pnpm build`.
pnpm exec playwright-cli --raw eval "JSON.stringify({scripts:[...document.querySelectorAll('script[src]')].map(s=>s.src), css:[...document.querySelectorAll('link[rel=stylesheet]')].map(l=>l.href), root:!!document.querySelector('#root')?.children.length})"

# La consola debe reportar 0 errores y 0 warnings.
pnpm exec playwright-cli console

# Ninguna peticion debe devolver 404. Los 206 de los videos de fondo son normales.
pnpm exec playwright-cli --raw requests --static

# Captura de pantalla para revisar la maquetacion.
pnpm exec playwright-cli screenshot --filename=deploy.png
```

Para revisar secciones que están más abajo, desplazar con `mousewheel`, no con `window.scrollTo`: el scroll suave global cancela el desplazamiento programático y `window.scrollY` se queda en `0`.

```bash
pnpm exec playwright-cli mousemove 500 400
pnpm exec playwright-cli mousewheel 0 2500
```

Al terminar, cerrar el navegador y sacar las capturas generadas fuera del repositorio, para que el working directory siga limpio:

```bash
pnpm exec playwright-cli close
```

Si la verificación encuentra bugs, corregirlos, volver al paso 2 y repetir el flujo hasta que el sitio funcione correctamente.

### 8. Reportar

Informar:

* Los commits creados en el paso 2, con su `<emoji> <type>(<scope>): <mensaje>` y su `body`.

* El hash y el mensaje del commit de despliegue, demostrando que es el último de la rama.

* El resultado de `git status` demostrando que el árbol quedó limpio.

* El resultado de la verificación con `playwright-cli`: assets servidos, errores de consola y peticiones fallidas.

## Configuración del Despliegue

Piezas que hacen funcionar el despliegue. Está **PROHIBIDO** modificarlas sin autorización explícita.

| Archivo / ajuste | Valor | Motivo |
| --- | --- | --- |
| `vite.config.ts` | `base: '/'` | El repositorio es un *user site* servido en la raíz del dominio, sin subruta. |
| `package.json` | script `deploy` | Compila y publica `dist` en `main` dentro de `docs`, con el mensaje `📦 build(deploy)`. |
| `public/.nojekyll` | archivo vacío | Se copia al build y llega a `docs/.nojekyll`; evita que Jekyll procese la salida. Se publica gracias al flag `--dotfiles`. |
| `.gitignore` | `dist`, `dist-ssr` | El build local no se versiona; lo versionado es `docs/`. |
| GitHub → Settings → Pages | Source: `Deploy from a branch`, Branch: `main`, Folder: `/docs` | Es la única carpeta distinta de la raíz que GitHub Pages acepta sin GitHub Actions. |

El flag `--nojekyll` de `gh-pages` NO sirve aquí: escribe el archivo en la raíz de la rama y no dentro de `docs/`, que es donde GitHub Pages lo lee. Por eso el `.nojekyll` vive en `public/`.

## Errores Comunes

| Síntoma | Causa | Solución |
| --- | --- | --- |
| `git pull --ff-only` falla | `main` local y `origin/main` divergieron | Informar y esperar autorización. Prohibido hacer `reset` o `rebase` por iniciativa propia. |
| El commit del build no queda de último | No se hizo `git push` antes de desplegar | Ejecutar el paso 3 completo antes del paso 4. |
| `fatal: A branch named 'gh-pages' already exists` | Caché corrupta de `gh-pages` | Borrar `node_modules/.cache/gh-pages` o ejecutar `node_modules/gh-pages/bin/gh-pages-clean`. |
| El sitio muestra 404 en los assets | `base` mal configurado en Vite | Debe ser `base: '/'`. Informar antes de modificar. |
| El sitio sirve una versión vieja | GitHub Pages tarda en propagar, o Pages no apunta a `main` / `docs` | Esperar y recargar. Si persiste, revisar Settings → Pages. |
| Los hashes servidos no coinciden con el build | La compilación no llegó a `docs/` | Revisar la salida de `pnpm run deploy`; debe terminar en `Published`. |

## Recursos Relacionados

* Convención de mensajes de commit: skill `git-commit`.

* Automatización del navegador para la verificación: skill `playwright-cli`.
