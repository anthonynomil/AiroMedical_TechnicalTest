import { create } from "zustand";
import getTheme from "utils/theme.utils";

export interface IThemeState {
  theme: TTheme;
  setTheme: (theme: TTheme) => void;
}

export type TTheme = "light" | "dark";

const useThemeStore = create<IThemeState>((set) => ({
  theme: getTheme(),
  setTheme: (theme: TTheme) => set({ theme }),
}));

export default useThemeStore;
