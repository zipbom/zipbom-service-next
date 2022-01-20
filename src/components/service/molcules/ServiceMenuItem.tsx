import { BellOutlined, SearchOutlined, MenuOutlined } from "@ant-design/icons";
import { Menu, Radio } from "antd";
import Link from "next/link";
import { useObserver } from "mobx-react";

const ServiceMenuItem: React.FC = () => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("radio checked", e.target.value);
  };

  return useObserver(() => (
    <>
      <Menu.Item>
        <BellOutlined />
        <span>집봄</span>
        <SearchOutlined />
        <MenuOutlined />
        <Radio.Group onChange={onChange}>
          <Radio value="light">라이트 테마</Radio>
          <Radio value="dark">다크 테마</Radio>
        </Radio.Group>
      </Menu.Item>
    </>
  ));
};

export default ServiceMenuItem;
