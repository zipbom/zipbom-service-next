import ThemeStore from "./ThemeStore";

const rootStore = {
  ThemeStore,
};

const useStore = () => {
  return rootStore;
};

export { rootStore, useStore };
