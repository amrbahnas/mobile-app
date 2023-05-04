import { create } from "zustand";

export default useStore = create((set) => ({
  login: false,
  user: {},
  setUser: (data) => set(() => ({ user: data })),
  setLogin: (data) => set(() => ({ login: data })),
}));
