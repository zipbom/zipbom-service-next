import ServiceNavigation from "@components/main/organisms/ServiceNavigation";

const ServiceLayout: React.FC = ({ children }) => {
  return (
    <>
      <ServiceNavigation />
      {children}
    </>
  );
};

export default ServiceLayout;
