import { Box } from "@mui/material";
import styles from "./styles";
import "./styles.css";
import { DesignerContextProvider } from "./designer-context";
import { Navbar } from "./navbar";
import { useState } from "react";
import { navbarItems } from "./constants";
import { UserIcon } from "@assets/icons";
import Logo from "@assets/icons/StyleGenieLogo.png";
import { Dashboard, Designs, Orders } from "./dashboard";

const DesignerHome = () => {
  const [activeTab, setActiveTab] = useState(0);

  const [dashboardActiveTab, setDashboardActiveTab] = useState(0);

  return (
    <DesignerContextProvider>
      <Box sx={[styles.root]}>
        <header className="flex w-full items-center justify-between h-[100px] p-5">
          <img src={Logo} alt="StyleGenie" className="h-[50px]" />
          <UserIcon className="bg-green-2 rounded-full text-blue-2" />
        </header>
        <div className="grid grid-cols-4 items-center px-[48px] text-sm text-blue-1 text-underline divide-x divide-blue-2">
          <button onClick={() => setDashboardActiveTab(0)}>Overview</button>
          <button onClick={() => setDashboardActiveTab(1)}>Traffic</button>
          <button onClick={() => setDashboardActiveTab(2)}>Orders</button>
          <button onClick={() => setDashboardActiveTab(3)}>Deliveries</button>
        </div>
        <div className="flex flex-col space-y-5 px-[48px] h-[640px]">
          {/* {navbarItems.find((item) => item.id === activeTab)?.title} */}
          {activeTab === 0 && <Dashboard activeTab={dashboardActiveTab} />}
          {activeTab === 1 && <Designs />}
          {activeTab === 2 && <div>Materials</div>}
          {activeTab === 3 && <Orders />}
        </div>
        <Navbar navbarItems={navbarItems} setActiveTab={setActiveTab} />
      </Box>
    </DesignerContextProvider>
  );
};

export default DesignerHome;
