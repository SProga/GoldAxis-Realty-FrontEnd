import { create } from "zustand";
import { createAppSlice } from "../slices/appSlice";
import { createPropertiesSlice } from "../slices/propertiesSlice";

export const useAppStore = create((set, get) => ({
  ...createAppSlice(set, get),
  ...createPropertiesSlice(set, get),
}));
