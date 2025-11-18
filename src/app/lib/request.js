import qs from "qs";

const isProduction = process.env.NODE_ENV === "production";

export default async function request(route, query = {}) {
  const baseUrl = process.env.NEXT_PUBLIC_CMS_URL_API;

  if (!baseUrl) {
    console.error("Missing env NEXT_PUBLIC_CMS_URL_API");
    return {
      error: "Missing base URL",
      errcode: -2,
      errmesg: "CMS base URL is not configured",
    };
  }

  const url = new URL(route, `${baseUrl}/`);

  try {
    // ❗ encodeValuesOnly should be an option, not part of the query object
    url.search = qs.stringify(query, {
      encodeValuesOnly: true, // prettify URL
    });

    const fetchOptions = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
        "Content-Type": "application/json",
      },
      // ❗ don't spread a boolean; spread an object or {}
      ...(isProduction ? { next: { revalidate: 60 } } : {}),
    };

    const res = await fetch(url.href, fetchOptions);
    const response = await res.json();

    // Optionally throw on HTTP-level error
    if (!res.ok) {
      throw new Error(
        response?.error?.message || `Request failed with status ${res.status}`
      );
    }

    const data = response?.data;

    if (Array.isArray(data)) {
      // 0+ items
      return data.map((item) => ({
        id: item.id,
        ...item.attributes,
      }));
    }

    if (data && typeof data === "object") {
      // single object
      return { id: data.id, ...data.attributes };
    }

    // Fallback if Strapi returns something unexpected
    return data ?? null;
  } catch (e) {
    console.error("CMS request error:", e);
    return {
      error: e.message || "Unknown error",
      errcode: -1,
      errmesg: "Oops! something went wrong",
    };
  }
}
