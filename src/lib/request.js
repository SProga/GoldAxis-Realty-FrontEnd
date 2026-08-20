import qs from "qs";

const isProduction = process.env.NODE_ENV === "production";

export default async function request(route, query = {}, options = {}) {
  const base = process.env.NEXT_PUBLIC_CMS_URL_API;

  if (!base) {
    console.error("❌ Missing NEXT_PUBLIC_CMS_URL_API");
    return null;
  }

  // Force Strapi API path
  const endpoint = route.startsWith("/api/") ? route : `/api/${route}`;

  const url = new URL(endpoint, base);
  url.search = qs.stringify(query, { encodeValuesOnly: true });

  try {
    const headers = {
      "Content-Type": "application/json",
    };

    // Only attach token if it actually exists
    if (process.env.API_KEY) {
      headers.Authorization = `Bearer ${process.env.API_KEY}`;
    }

    const res = await fetch(url.href, {
      method: "GET",
      headers,
      ...(isProduction
        ? { next: { revalidate: 600 } } // 10 minutes
        : { next: { revalidate: 5 } }), // 5 secs in dev
    });

    if (!res.ok) {
      console.error(
        isProduction ? null : `❌ Strapi Error ${res.status} ${res.statusText}`,
      );
      console.error("❌ URL:", url.href);
      return null;
    }

    const json = await res.json();
    const data = json?.data;
    const meta = json?.meta;

    // No usable data
    if (!data || (Array.isArray(data) && data.length === 0)) {
      return null;
    }

    // Handle array responses
    if (Array.isArray(data)) {
      if (options?.meta) {
        return {
          data,
          meta,
        };
      }

      if (options?.single) {
        return data[0] ?? null;
      }

      return data;
    }

    // Handle single object response
    return {
      ...data,
      ...(options?.meta && { meta }),
    };
  } catch (err) {
    console.error("❌ Request failed:", isProduction ? null : err);
    return null;
  }
}
