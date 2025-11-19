export const createAppSlice = (set) => ({
  initialized: false,
  navigation: [],
  properties: [],
  homeData: [],
  setInitialized: () => set({ initialized: true }),
  setGlobals: ({ navigation, properties, homeData }) =>
    set({ navigation, properties, homeData }),
});
