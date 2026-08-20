export const createPropertiesSlice = (set, get) => ({
  featuredProperties: [],
  allProperties: [],
  setFeaturedProperties: (properties) => {
    const featuredProperties =
      (Array.isArray(properties) &&
        properties.filter((property) => property.featured)) ||
      [];
    set({ featuredProperties });
    set({ allProperties: properties });
  },
  getFeaturedProperties: () => {
    return featuredProperties;
  },
  getAllProperties: () => {
    return allProperties;
  },
});
