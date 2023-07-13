import { create } from "zustand";

export interface IThemeState {
  theme: TTheme;
  setTheme: (theme: TTheme) => void;
}

export type TTheme = "light" | "dark";

const useThemeStore = create<IThemeState>((set) => ({
  theme: "light",
  setTheme: (theme: TTheme) => set({ theme }),
}));

export default useThemeStore;
