# Presentación Climate Week Medellín 2026

Versión preparada para **GitHub Pages** y para incrustarse por URL en **Google Sites**.

## Publicación en GitHub Pages
Sube a la raíz del repositorio:

- `index.html`
- `.nojekyll`
- `favicon.svg`
- `favicon-32.png`
- `apple-touch-icon.png`
- carpeta `img/` completa

En GitHub: **Settings → Pages → Deploy from a branch → main / root**.

## Incrustación en Google Sites
En Google Sites: **Insertar → Incorporar → URL** y pega la URL pública de GitHub Pages.

La versión incluye una capa responsive específica para iframe:

- toma la altura real del bloque de Google Sites;
- evita alturas mínimas que provoquen recortes;
- permite scroll interno solo cuando una diapositiva lo necesita;
- adapta tarjetas, videos, imágenes y controles a escritorio, tablet y móvil;
- oculta el botón de pantalla completa dentro del iframe;
- abre los enlaces externos en una pestaña nueva;
- incluye favicon de hoja en SVG y PNG.

Recomendación visual: en Google Sites asigna al bloque embebido una altura amplia (aprox. 650–800 px en escritorio) para que la mayoría de diapositivas se vean sin scroll. El código sigue funcionando si el bloque es más bajo.

## Actualización QR · diapositivas 7 y 9
Los QR originales están integrados como imágenes independientes en las diapositivas 7 y 9 (`img/qr-diapositiva-07.png`, `img/qr-diapositiva-09.png`). Se mantienen controles, enlaces y simuladores de la presentación HTML de 21 diapositivas.


## Actualización 8 octubre 2026 — Curso ConnectAmericas
- Se añadió nueva diapositiva n.º 21 de 22, antes del cierre original (ahora n.º 22).
- Curso oficial para PYMES con enlace directo de inscripción y captura proporcionada.
- Se mantienen los QR de las diapositivas 7 y 9, navegación y estilos adaptativos.


## Integración de GSV Ingeniería (2026-10-08)

La presentación tiene 44 diapositivas. Las 22 láminas de «PPT SOLAR GSV.pptx» se incorporaron completas, en su orden original, inmediatamente después de la diapositiva 10 («Energía solar: convertir el gasto en una inversión sostenible»). Se conservaron las fotografías, tablas, gráficos, números y textos del PowerPoint sin retocar. Cada lámina se visualiza como una imagen fiel dentro del reproductor interactivo de Climate Week, y el PPTX original se incluye para consulta y edición. Las capturas no son elementos editables individualmente en HTML. Los QR de las antiguas diapositivas 7 y 9 permanecen disponibles.

## Ajuste de orden
La diapositiva «Una alianza para convertir la educación en acción climática» se encuentra inmediatamente después de las 22 láminas de GSV Ingeniería, en la posición 33 de 44. El resto de la presentación mantiene su orden relativo.


## Actualización: versión de 35 diapositivas
Se eliminaron las antiguas diapositivas 34 a 42 (ambas incluidas) de la versión de 44 diapositivas. La diapositiva Alianza 17 permanece como la número 33 y las dos últimas pasan a ser 34 y 35. Se conservó la presentación completa GSV Ingeniería (11 a 32). El contador, menú y navegación obtienen automáticamente su total del DOM.

## Nueva diapositiva 2 (YouTube)
Se agregó una diapositiva entre la portada y el título original. Contiene un iframe de YouTube con enlace alternativo. Requiere internet y depende de la configuración de inserción del video en YouTube. Total: 36 diapositivas.
