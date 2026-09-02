import "./styles/style.css";
import type { Gif } from "./models/gif.interface";


const MEDIA_URL = "https://media.giphy.com/media";

const gifs: Gif[] = [
  {
    id: "cat-01",
    title: "Gato Programando",
    description: "Un gato concentrado frente a un teclado",
    url: `${MEDIA_URL}/JIX9t2j0ZTN9S/giphy.gif`,
    username: "giphy",
    tags: ["cat", "programming", "funny"],
    rating: "g",
  },

  {
    id: "celebration-01",
    title: "Celebración del equipo",
    description: "Un objetivo cumplido",
    url: `${MEDIA_URL}/g9582DNuQppxC/giphy.gif`,
    tags: ["equipo", "éxito", "celebración"],
    rating: "g",
  },

  {
    id: "coding-01",
    title: "Código en progreso",
    description: "Un desarrollador escribiendo código en su computadora",
    url: `${MEDIA_URL}/13HgwGsXF0aiGY/giphy.gif`,
    username: "developer",
    tags: ["código", "desarrollo", "teclado"],
    rating: "pg",
  },
  {
    id: "idea-01",
    title: "Nueva idea",
    description: "Una nueva idea",
    url: `${MEDIA_URL}/l0HlRnAWXxn0MhKLK/giphy.gif`,
    tags: ["idea", "creatividad", "solución"],
    rating: "g",
  },

  {
    id: "funny-01",
    title: "Human Music",
    description: "Straight up noise pollution",
    url: `${MEDIA_URL}/ht6rJVVYrp15TQ9721/giphy.gif`,
    username: "erennren",
    tags: ["meme", "ai slop", "jerry", "arbys"],
    rating: "pg-13",
  },

  {
    id: "funny-02",
    title: "An IQ TOO HIGH?",
    url: `${MEDIA_URL}/XFaeLrHJGjtcmEmzcn/giphy.gif`,
    tags: ["raven iq high"],
    rating: "pg-13",
  }

];

gifs.forEach((gif, index) => {
  console.log(`${index + 1}. ${gif.title}`);
});

const app = document.querySelector<HTMLDivElement>("#app");
if (!app) {
  throw new Error("No se encontro el elemento #app,");
}

app.innerHTML = `
  <main class = "app-shell">
    <header class = "hero">
    <p class = "eyebrow">EC1 - Fundamentos de TypeScript</p>
    <h1> GIFinder</h1>
    <p>Explora y descubre una coleción local de GIFs.</p>
    </header>
  
    <form id = "search-form" class = "search-form">
      <label for = "search-input">
        Buscar por título, autor o etiquetas
      </label>
      <div class = "search-row">
        <input id = "search-input" name = "query"
          type = "search" placeholder = "Ejemplo: gato"
            autocomplete = "off" />
          <button type = "submit">Buscar</button>
      </div>
    </form>
  
    <p id = "search-status" class = "status">
      aria-live="polite"></p>
    <section id = "gif-gallery" class = "gallery"
      aria-label = "Resultados"></section>
  </main>
  `;

const form =
document.querySelector<HTMLFormElement>("#search-form");
const input =
document.querySelector<HTMLInputElement>("#search-input");
const status =
document.querySelector<HTMLParagraphElement>("#search-status");
const gallery =
document.querySelector<HTMLDivElement>("#gif-gallery");

if (!form || !input || !status || !gallery) {
  throw new Error("No se pudo inicialiar la interfaz de busqueda.");
}

function normalizeText(values: string): string {
  return values.trim().toLocaleLowerCase();
}

function matchesQuery(gif: Gif, query: string): boolean {
  const searchableText = [
    gif.title,
    gif.description ?? "",
    gif.username ?? "",
    ...gif.tags,
    ].join(" ")
    return normalizeText(searchableText).includes(query);
}

function searchGifs(collection: Gif[], value: string): Gif[] {
  const query = normalizeText(value);

  if (!query) {
    return [...collection]
  }

  return collection.filter((gif) =>
    matchesQuery(gif, query),
  );
}

function createGifCard(gif: Gif): string {
  const {
    title,
    url,
    description = "Sin descripción",
    username = "Autor no disponible",
    tags,
    rating,
  } = gif;

  return `
    <article class = "gif-card">
      <img src = "${url}" alt = "${title}"
        loading = "lazy" />
      <div class = "gif-card_content">
        <h2>${title}</h2>
        <p>${description}</p>
        <p>${username} - Clasificación
          ${rating.toUpperCase()}</p>
        <p class = "tags">
          ${tags.map((tag) => `#${tag}`).join(" ")}
        </p>
      </div>
    </article>
  `;
}

function renderGifs(collection: Gif[]): void {
  const total = collection.length;
  const label = total === 1 ? "resultado" : "resultados";

  status!.textContent = `${total} ${label}`;
  
  if(total === 0) {
    gallery!.innerHTML = `
      <p class = "empty-state">
        No se encontraron GIFs.
        Prueba con otra palabra.
      </p>   
    `;
    return;
  }

  gallery!.innerHTML = collection
  .map(createGifCard)
  .join("");
}

form.addEventListener("submit", (event: SubmitEvent) => {
  event.preventDefault();
  const results = searchGifs(gifs, input.value);
  renderGifs(results);
});

input.addEventListener("input", () => {
  if(input.value.trim() === "") {
    renderGifs(gifs);
  }
});

const firstSafeGif = gifs.find((gif) => gif.rating === "g");

console.log(
  `Primer GIF clasificación G: ${
    firstSafeGif?.title ?? "Ninguno"
  }`
);
renderGifs(gifs);
