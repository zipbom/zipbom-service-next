import ServiceNavigation from "@components/organisms/ServiceNavigation";

const ServiceLayout: React.FC = ({ children }) => {
  return (
    <>
      <ServiceNavigation />
      {children}
    </>
  );
};

export default ServiceLayout;
