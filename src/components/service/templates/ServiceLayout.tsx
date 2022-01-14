import ServiceNavigation from "@components/service/organisms/ServiceNavigation";
import { Col, Row } from "antd";
import { useState } from "react";
import ServiceUserProfile from "@components/service/organisms/ServiceUserProfile";
import ServiceLoginForm from "@components/service/organisms/ServiceLoginForm";

const ServiceLayout: React.FC = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // fake login check
  return (
    <>
      <ServiceNavigation />
      <Row gutter={20}>
        {/* antd grid layout */}
        <Col xs={24} md={6}>
          {isLoggedIn ? <ServiceUserProfile /> : <ServiceLoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a
            href="https://www.zerocho.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            made by zerocho
          </a>
        </Col>
      </Row>
    </>
  );
};

export default ServiceLayout;
