import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persist, createJSONStorage } from "zustand/middleware";
export default useStore = create(
  persist(
    (set) => ({
      login: false,
      user: {},
      setUser: (data) => set(() => ({ user: data })),
      setLogin: (data) => set(() => ({ login: data })),
    }),
    {
      name: "user-info",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
