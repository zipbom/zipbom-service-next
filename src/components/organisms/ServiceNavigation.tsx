import Link from "next/link";
import { Input, Menu } from "antd";
import ServiceMenuItem from "../molcules/ServiceMenuItem";

const ServiceNavigation: React.FC = () => {
  return (
    <>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/">
            <a>집봄</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile">
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup">
            <a>회원가입</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Input.Search enterButton style={{ verticalAlign: "middle" }} />
        </Menu.Item>
        <ServiceMenuItem />
      </Menu>
    </>
  );
};

export default ServiceNavigation;
