import ServiceGNB from "@components/service/organisms/ServiceGNB";
import { useObserver } from "mobx-react";
import { useStores } from "@stores/index";
import { useEffect, useRef, useState } from "react";

const ServiceLayout: React.FC = ({ children }) => {
  const { serviceDomainStore } = useStores();

  const handleTestStore: React.EventHandler = async e => {
    serviceDomainStore.increase();
  };

  return useObserver(() => (
    <div>
      <button onClick={handleTestStore}>{serviceDomainStore.number}</button>
      <ServiceGNB />
      {children}
    </div>
  ));
};

export default ServiceLayout;
