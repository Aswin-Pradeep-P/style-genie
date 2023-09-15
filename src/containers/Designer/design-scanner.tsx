import { Box } from "@mui/material";
import styles from "./styles";
import "./styles.css";
import { ArrowForward, UserIcon } from "@assets/icons";
import Logo from "@assets/icons/StyleGenieLogo.png";
import { useDesignerContext } from "./designer-context";
import DressImage from "./dress-img.jpg";
import DressExtracted from "./dress-extracted.png";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@Constants/routes";
import { useEffect, useState } from "react";
import { ColorPicker, NeckList } from "./combination-matrix";

const Typewriter = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setDisplayText((prevText) => {
        if (prevText === text) {
          clearInterval(interval);
          return prevText;
        } else {
          i++;
          return text.slice(0, i);
        }
      });
    }, 100);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <div className="font-semibold text-blue-2">
      <p>{displayText}</p>
    </div>
  );
};

const DesignScanner = () => {
  const navigate = useNavigate();
  const { setActiveTab } = useDesignerContext();
  const [isPulsing, setIsPulsing] = useState(false);

  useEffect(() => {
    setIsPulsing(true);

    setTimeout(() => {
      setIsPulsing(false);
    }, 5000);
  }, []);

  return (
    <Box sx={[styles.root]}>
      <header className="flex w-full items-center justify-between h-[100px] p-5">
        <img src={Logo} alt="StyleGenie" className="h-[50px]" />
        <UserIcon className="bg-green-2 rounded-full text-blue-2" />
      </header>
      <div className="flex flex-col space-y-3 px-[48px] h-full">
        <ArrowForward
          className="border-2 border-blue-2 rounded-full rotate-180 cursor-pointer"
          onClick={() => {
            navigate(ROUTES.DESIGNER_HOME);
            setActiveTab(4);
          }}
        />
        {isPulsing && (
          <img src={DressImage} alt="Dress" className="animate-pulse" />
        )}
        {!isPulsing && (
          <>
            <img src={DressExtracted} alt="Dress" className="h-[300px]" />
            <Typewriter text="Choose the required combinations" />
            <NeckList />
            <ColorPicker />
            <button
              className="bg-blue-2 text-white rounded-lg px-4 py-2"
              onClick={() => navigate(ROUTES.DESIGN_VARIATIONS)}
            >
             Generate variations
            </button>
          </>
        )}
      </div>
    </Box>
  );
};

export default DesignScanner;
