import ServiceNavigation from "@components/service/organisms/ServiceNavigation";

const ServiceLayout: React.FC = ({ children }) => {
  return (
    <>
      <ServiceNavigation />
      {children}
    </>
  );
};

export default ServiceLayout;
