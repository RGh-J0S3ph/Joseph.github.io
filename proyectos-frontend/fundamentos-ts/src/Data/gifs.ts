import type { Gif } from "../models/gif.interface";


const MEDIA_URL = "https://media.giphy.com/media";

export const gifs: Gif[] = [
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