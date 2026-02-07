import { strapi } from "@strapi/client";

// Read Astro/Vite env values; defaults keep local dev working
const baseURL = import.meta.env.STRAPI_HOST || "http://localhost:1337";
const token = import.meta.env.STRAPI_TOKEN || "";

export const client = strapi({ baseURL, auth: token });