import ServiceGNB from "@components/service/organisms/ServiceGNB";
import { useObserver } from "mobx-react";
import { useStores } from "@stores/index";

const ServiceLayout: React.FC = ({ children }) => {
  const { serviceDomainStore } = useStores();

  const handleTestStore: React.EventHandler = async e => {
    serviceDomainStore.increase();
  };

  return useObserver(() => (
    <>
      <button onClick={handleTestStore}>{serviceDomainStore.number}</button>
      <ServiceGNB />
      {children}
    </>
  ));
};

export default ServiceLayout;
