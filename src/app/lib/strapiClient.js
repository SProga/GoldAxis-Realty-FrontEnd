import { strapi } from "@strapi/client";

const baseURL = process.env.NEXT_PUBLIC_CMS_URL_API;
const token = process.env.STRAPI_API_TOKEN;

console.log("tokenAKA", typeof token);

// simple safety check
if (!baseURL) {
  console.warn("⚠️ Missing NEXT_PUBLIC_CMS_URL_API in .env");
}

if (!token) {
  console.warn("⚠️ Missing STRAPI_API_TOKEN in .env");
}

export const client = strapi({
  baseURL, // e.g. "https://mycms.com/api"
  auth: token,
});
