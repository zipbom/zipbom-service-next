import { observable } from "mobx";
import ServiceRepository from "@repositories/ServiceRepository";

const ServiceStore = observable({
  async createServiceSomthing() {
    try {
      const res = await ServiceRepository.createSomething();
      return res;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
});

export default ServiceStore;
