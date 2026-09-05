import type { Gif } from "../models/gif.interface";



function createGifCard(gif: Gif): string {
  const {
    id,
    title,
    url,
    description = "Sin descripción",
    username = "Autor no disponible",
    tags,
    rating,
  } = gif;

  return `
    <article class="gif-card">
      <img
        src="${url}"
        alt="${title}"
        aria-label="${description}"
        loading="lazy"
      />
      <div class="gif-card__content">
        <h2>${title}</h2>
        <p>
          ${username} - Clasificación
          ${rating.toUpperCase()}
        </p>
        <p class="tags">
          ${tags.map((tag) => `#${tag}`).join(' ')}
        </p>
        <button
          type="button"
          data-gif-id="${id}"
        >
          Ver detalle
        </button>
      </div>
    </article>
 `;
}

export function renderGallery(collection: Gif[], container: HTMLElement,):
  void {
  container.innerHTML = collection.map(createGifCard).join('');
}
