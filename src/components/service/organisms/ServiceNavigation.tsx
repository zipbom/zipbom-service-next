import Link from "next/link";
import { Input, Menu } from "antd";
import ServiceMenuItem from "@components/service/molcules/ServiceMenuItem";
import ThemeStore from "@stores/ThemeStore";
import { Observer } from "mobx-react";
import { TestComponent } from "zipbom-react-core";

const ServiceNavigation: React.FC = () => {
  return (
    <>
      {/* <Observer> */}
      <Menu
        mode="horizontal"
        style={{ background: ThemeStore.theme.mainColor }}
      >
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
      <TestComponent />
      {/* </Observer> */}
    </>
  );
};

export default ServiceNavigation;
