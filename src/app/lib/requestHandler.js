/**
 * General wrapper for all Strapi requests.
 * Automatically handles:
 * - try/catch
 * - Strapi JSON error response
 * - network errors
 * - logs both client + server errors
 *
 * @param {Function} callback  A function that performs the actual Strapi call.
 * @returns {Object} { data, error }
 */
export async function requestHandler(callback) {
  try {
    const res = await callback();

    // Check if Strapi returned an error object
    if (res?.error) {
      console.error("❌ Strapi API Error:", res.error);
      return { data: null, error: res.error };
    }

    return { data: res.data ?? res, error: null };
  } catch (err) {
    console.error("❌ Network/Unexpected Error:", err);

    return {
      data: null,
      error: {
        message: err?.message || "Unknown error",
        details: err,
      },
    };
  }
}
