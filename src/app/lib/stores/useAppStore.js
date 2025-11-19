import { create } from "zustand";
import { createAppSlice } from "../slices/appSlice";

export const useAppStore = create((set, get) => ({
  ...createAppSlice(set, get),
}));
