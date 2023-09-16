import { create } from "zustand";

const useCommonComponentsStore = create((set) => ({
  headerData: undefined,
  setHeaderData: (headerData: any) =>
    set((state: any) => ({ ...state, headerData })),
}));

export default useCommonComponentsStore;
