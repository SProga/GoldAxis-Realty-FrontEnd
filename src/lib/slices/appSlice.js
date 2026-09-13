export const createAppSlice = (set, get) => ({
  initialized: false,
  navigation: [],
  properties: [],
  homeData: [],
  siteSettings: null,
  setInitialized: () => set({ initialized: true }),
  setGlobals: ({ navigation, properties, homeData, parishData, siteSettings }) => {
    set({ navigation, properties, homeData, parishData, siteSettings });
    get().setInitialized();
    const setFeaturedProperties = get().setFeaturedProperties;
    setFeaturedProperties(properties);
  },
});
