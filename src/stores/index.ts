import React from "react";
import ServiceStore from "./ServiceStore";

class RootStore {
  serviceStore;

  constructor() {
    this.serviceStore = new ServiceStore(this);
  }
}

const StoresContext = React.createContext(new RootStore());

export default StoresContext;
