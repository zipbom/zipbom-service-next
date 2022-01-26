import ServiceGNB from "@components/service/organisms/ServiceGNB";
import { useObserver } from "mobx-react";
import useStores from "@stores/index";

const ServiceLayout: React.FC = ({ children }) => {
  const { serviceStore } = useStores();

  return useObserver(() => (
    <>
      {serviceStore.number}
      <ServiceGNB />
      {children}
    </>
  ));
};

export default ServiceLayout;
