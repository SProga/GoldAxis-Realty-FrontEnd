export const createAppSlice = (set, get) => ({
  initialized: false,
  navigation: [],
  properties: [],
  homeData: [],
  setInitialized: () => set({ initialized: true }),
  setGlobals: ({ navigation, properties, homeData }) => {
    set({ navigation, properties, homeData });
    get().setInitialized();
    const setFeaturedProperties = get().setFeaturedProperties;
    setFeaturedProperties(properties.data);
  },
});
