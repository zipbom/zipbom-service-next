/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import ChatIcon from "../../../assets/chat.svg";
import HeartIcon from "../../../assets/heart.svg";
import DocumentIcon from "../../../assets/document.svg";
import PinIcon from "../../../assets/pin.svg";
import PersonIcon from "../../../assets/person.svg";
import SettingIcon from "../../../assets/setting.svg";

const SideMenuItem: React.FC = () => {
  const menuList = [
    {
      icon: <ChatIcon />,
      name: "채팅",
      onClick: () => console.log("채팅"),
    },
    {
      icon: <HeartIcon />,
      name: "찜 리스트",
      onClick: () => console.log("찜 리스트"),
    },
    {
      icon: <PinIcon />,
      name: "최근 본 방",
      onClick: () => console.log("최근 본 방"),
    },
    {
      icon: <DocumentIcon />,
      name: "MY 매물",
      onClick: () => console.log("MY 매물"),
    },
    {
      icon: <PersonIcon />,
      name: "고객센터",
      onClick: () => console.log("고객센터"),
    },
    {
      icon: <SettingIcon />,
      name: "설정",
      onClick: () => console.log("설정"),
    },
  ];
  return (
    <div>
      {menuList.map(menu => (
        <div
          css={css`
            height: 2.5rem;
            &:hover {
              cursor: pointer;
            }
          `}
          onClick={menu.onClick}
        >
          {menu.icon}
          <span
            css={css`
              font-size: 1rem;
              font-weight: 700;
              margin-left: 0.5rem;
            `}
          >
            {menu.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default SideMenuItem;
