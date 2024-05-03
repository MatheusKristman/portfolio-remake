import { create } from "zustand";

interface IUseMobileMenuStore {
  isMenuOpen: boolean;
  openMenu: () => void;
  closeMenu: () => void;
}

const useMobileMenuStore = create<IUseMobileMenuStore>((set) => ({
  isMenuOpen: false,
  openMenu: () => set({ isMenuOpen: true }),
  closeMenu: () => set({ isMenuOpen: false }),
}));

export default useMobileMenuStore;
