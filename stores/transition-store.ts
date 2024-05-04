import { create } from "zustand";

interface IUseTransitionStore {
  isTransition: boolean;
  activateTransition: () => void;
  deactivateTransition: () => void;
}

const useTransitionStore = create<IUseTransitionStore>((set) => ({
  isTransition: false,
  activateTransition: () => set({ isTransition: true }),
  deactivateTransition: () => set({ isTransition: false }),
}));

export default useTransitionStore;
