import { create } from "zustand";

const usePagesDataStore = create((set) => ({
  homeData: undefined,
  setHomeData: (homeData: any) => set((state: any) => ({ ...state, homeData })),
}));

export default usePagesDataStore;
