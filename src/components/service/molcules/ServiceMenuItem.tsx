import ThemeStore from "@stores/ThemeStore";
import { BellOutlined, SearchOutlined, MenuOutlined } from "@ant-design/icons";
import { Menu, Radio } from "antd";
import Link from "next/link";

const ServiceMenuItem: React.FC = () => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("radio checked", e.target.value);
    // setValue(e.target.value);
    ThemeStore.setTheme(e.target.value);
  };
  return (
    <>
      <Menu.Item>
        <BellOutlined />
        <span>집봄</span>
        <SearchOutlined />
        <MenuOutlined />
        <Radio.Group onChange={onChange} value={ThemeStore.themeName}>
          <Radio value="light">라이트 테마</Radio>
          <Radio value="dark">다크 테마</Radio>
        </Radio.Group>
      </Menu.Item>
    </>
  );
};

export default ServiceMenuItem;
