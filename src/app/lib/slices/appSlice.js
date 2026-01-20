export const createAppSlice = (set, get) => ({
  initialized: false,
  navigation: [],
  properties: [],
  homeData: [],
  setInitialized: () => set({ initialized: true }),
  setGlobals: ({ navigation, properties, homeData, parishData }) => {
    set({ navigation, properties, homeData, parishData });
    get().setInitialized();
    const setFeaturedProperties = get().setFeaturedProperties;
    setFeaturedProperties(properties.data);
  },
});
