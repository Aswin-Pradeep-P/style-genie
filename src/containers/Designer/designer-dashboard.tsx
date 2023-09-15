// @ts-nocheck
import { Box } from "@mui/material";
import styles from "./styles";
import "./styles.css";
import { DesignerContextProvider } from "./designer-context";
import { Navbar } from "./navbar";
import {
  DesignsIcon,
  HomeIcon,
  MagicIcon,
  MaterialsIcon,
  OrdersIcon,
} from "@assets/icons";
import { useState } from "react";

const DesignerDashboard = () => {
  const navbarItems = [
    {
      id: 0,
      title: "Home",
      icon: <HomeIcon />,
    },
    {
      id: 1,
      title: "Designs",
      icon: <DesignsIcon />,
    },
    {
      id: 2,
      title: "Materials",
      icon: <MaterialsIcon />,
    },
    {
      id: 3,
      title: "Orders",
      icon: <OrdersIcon />,
    },
    {
      id: 4,
      title: "AI Magic",
      icon: <MagicIcon />,
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <DesignerContextProvider>
      <Box sx={[styles.root]}>
        <div className="h-full flex flex-col space-y-5 p-[48px] bg-white">
          {navbarItems.find((item) => item.id === activeTab)?.title}
        </div>
        <Navbar navbarItems={navbarItems} setActiveTab={setActiveTab} />
      </Box>
    </DesignerContextProvider>
  );
};

export default DesignerDashboard;
