import { create } from "zustand";

const useCommonComponentsStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state: any) => ({ bears: state.bears + 1 })),
  headerData: undefined,
  setHeaderData: (headerData: any) =>
    set((state: any) => ({ ...state, headerData })),
}));

export default useCommonComponentsStore;
