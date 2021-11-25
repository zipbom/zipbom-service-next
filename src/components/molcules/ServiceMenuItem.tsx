import { Menu } from "antd";
import Link from "next/link";

const ServiceMenuItem: React.FC = () => {
  return (
    <>
      <Menu.Item>
        <Link href="/">
          <a>야야</a>
        </Link>
      </Menu.Item>
    </>
  );
};

export default ServiceMenuItem;
