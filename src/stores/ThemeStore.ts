import { observable } from "mobx";
import theme from "../theme";

interface ThemeData {
  [key: string]: number | string;
}

interface ThemeList {
  [key: string]: ThemeData;
}

export interface Theme {
  themeName: string;
  theme: ThemeData;
  themeList: ThemeList;
  setTheme: (name: string) => void;
}

const ThemeStore = observable<Theme>({
  themeName: "light",
  theme: theme.light,
  themeList: theme,

  setTheme(name: string) {
    if (name && this.themeList[name]) {
      this.themeName = name;
      this.theme = this.themeList[name];
    }
  },
});

export default ThemeStore;
