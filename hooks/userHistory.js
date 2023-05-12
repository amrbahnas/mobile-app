import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persist, createJSONStorage } from "zustand/middleware";
export default historyStore = create(
  persist(
    (set) => ({
      trainingHistory: {},
      setTrainingHistory: (data) => set(() => ({ trainingHistory: data })),
    }),
    {
      name: "training-history",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
