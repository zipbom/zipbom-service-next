import ServiceGNB from "@components/service/organisms/ServiceGNB";

const ServiceLayout: React.FC = ({ children }) => {
  return (
    <>
      <ServiceGNB />
      {children}
    </>
  );
};

export default ServiceLayout;
