import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const SiderBar: React.FC = ({
  onClose = () => {
    console.log("closed");
  },
  visible: boolean,
}) => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const toggleDrawer = open => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerVisible(open);
  };

  return (
    <>
      <MenuIcon onClick={toggleDrawer(true)} />
      <SwipeableDrawer
        anchor="right"
        open={drawerVisible}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        drawerdrawerdrawerdrawer
      </SwipeableDrawer>
    </>
  );
};

export default SiderBar;
