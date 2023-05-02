import { create } from "zustand";

export default useStore = create((set) => ({
  user: {},
  setUser: (data) => set(() => ({ user: data })),
}));
