// src/store/userStore.js
import { create } from "zustand";

const useStore = create((set) => ({
  user: null,
  role: null,
  setUser: (user, role) => set({ user, role }),
  clearUser: () => set({ user: null, role: null }),
}));

export default useStore;
