import { create } from "zustand";

export default modelStore = create((set) => ({
  isOpen: false,
  setIsOpen: () => set((store) => ({ isOpen: !store.isOpen })),
}));
