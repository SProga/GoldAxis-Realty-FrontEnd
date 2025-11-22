export const createPropertiesSlice = (set, get) => ({
  featuredProperties: [],
  all: [],
  setFeaturedProperties: (properties) => {
    const featuredProperties =
      (Array.isArray(properties) &&
        properties.filter((property) => property.featured)) ||
      [];
    set({ featuredProperties });
  },
  getFeaturedProperties: () => {
    return featuredProperties;
  },
});
