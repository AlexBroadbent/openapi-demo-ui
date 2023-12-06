import type { City } from "../types/openapi-schema"

export type CityDetails = {
  id: City["id"]
  imageUrl: string
  attractions: string[]
  emoji: string
  lat: number
  lng: number
}

const details: CityDetails[] = [
  {
    id: "barcelona",
    imageUrl:
      // eslint-disable-next-line max-len
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Aerial_view_of_Barcelona%2C_Spain_%2851227309370%29_%28cropped%29.jpg/536px-Aerial_view_of_Barcelona%2C_Spain_%2851227309370%29_%28cropped%29.jpg",
    attractions: ["Sagrada Família", "Torre Glòries", "Arc de Triomf"],
    emoji: "🇪🇸",
    lat: 41.390205,
    lng: 2.154007,
  },
  {
    id: "geneva",
    imageUrl:
      // eslint-disable-next-line max-len
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Geneve_2005_001_Ork.ch.jpg/530px-Geneve_2005_001_Ork.ch.jpg",
    attractions: [
      "The Geneva Water Fountain",
      "St Pierre Cathedral",
      "Palais des Nations",
    ],
    emoji: "🇨🇭",
    lat: 46.204391,
    lng: 6.143158,
  },
  {
    id: "london",
    imageUrl:
      // eslint-disable-next-line max-len
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/London_Skyline_%28125508655%29.jpeg/556px-London_Skyline_%28125508655%29.jpeg",
    attractions: ["The British Museum", "Tower of London", "Buckingham Palace"],
    emoji: "🇬🇧",
    lat: 51.509865,
    lng: -0.118092,
  },
  {
    id: "milan",
    imageUrl:
      // eslint-disable-next-line max-len
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Milan_skyline_skyscrapers_of_Porta_Nuova_business_district_%28cropped%29.jpg/556px-Milan_skyline_skyscrapers_of_Porta_Nuova_business_district_%28cropped%29.jpg",
    attractions: [
      "Duomo di Milano",
      "Galleria Vittorio Emanuele II",
      "Sforzesco Castle",
    ],
    emoji: "🇮🇹",
    lat: 45.464664,
    lng: 9.18854,
  },
  {
    id: "paris",
    imageUrl:
      // eslint-disable-next-line max-len
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/556px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg",
    attractions: [
      "Eiffel Tower",
      "Louvre Museum",
      "Cathédrale Notre-Dame de Paris",
    ],
    emoji: "🇫🇷",
    lat: 48.864716,
    lng: 2.349014,
  },
  {
    id: "thurles",
    imageUrl:
      // eslint-disable-next-line max-len
      "https://upload.wikimedia.org/wikipedia/commons/3/34/Thurles_Market_Square%2C_December_2006.jpg",
    attractions: ["Lár na Páirce Museum", "Holycross Abbey", "Farney Castle"],
    emoji: "🇮🇪",
    lat: 52.680519,
    lng: -7.8145,
  },
]

export const getDetails = (id: City["id"]): CityDetails =>
  details.find((image) => id === image.id)!
