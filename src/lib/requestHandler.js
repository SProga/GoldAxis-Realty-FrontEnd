/**
 * General wrapper for Strapi client requests.
 *
 * Handles:
 * - Strapi collection responses
 * - Strapi single document responses
 * - Plain arrays / objects
 * - Optional single result
 * - Optional metadata
 * - Empty responses
 * - Strapi / network errors
 *
 * @param {Function} callback Function that performs the Strapi request.
 * @param {Object} options Response options.
 * @param {Boolean} options.single Return first item from an array.
 * @param {Boolean} options.meta Include Strapi metadata.
 *
 * @returns {Array|Object|null}
 */
export async function requestHandler(callback, options = {}) {
  try {
    const res = await callback();

    if (!res) return null;

    if (res?.error) {
      console.error("❌ Strapi API Error:", res.error);
      return null;
    }

    const has_data =
      typeof res === "object" &&
      !Array.isArray(res) &&
      Object.prototype.hasOwnProperty.call(res, "data");

    const data = has_data ? res.data : res;
    const meta = has_data ? res.meta : null;

    if (data == null || (Array.isArray(data) && data.length === 0)) return null;

    if (Array.isArray(data)) {
      const result = options.single ? (data[0] ?? null) : data;

      return options.meta ? { data: result, meta } : result;
    }

    return options.meta ? { data, meta } : data;
  } catch (err) {
    console.error("❌ Network/Unexpected Error:", err);
    return null;
  }
}
