import { useNavigate } from "react-router-dom";
import { useDesignerContext } from "./designer-context";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import styles from "./styles";
import Logo from "@assets/icons/StyleGenieLogo.png";
import { ArrowForward, UserIcon } from "@assets/icons";
import { ROUTES } from "@Constants/routes";
import { Spinner, Textarea } from "@material-tailwind/react";
import { useGenerateOutfitsMutation } from "@Containers/Home/apiSlice";

const DesignPrompt = () => {
  const navigate = useNavigate();
  const { setActiveTab } = useDesignerContext();
  const [prompt, setPrompt] = useState();
  const [isPulsing, setIsPulsing] = useState(false);
  const [generateOutfits, { data }] = useGenerateOutfitsMutation();
  const handleTextOnChange = (e) => {
    setPrompt(e.target.value);
  };

  const generateOutfitImages = () => {
    generateOutfits({ prompt });
  };

  useEffect(() => {
    if (isPulsing) {
      setTimeout(() => {
        setIsPulsing(false);
      }, 5000);
    }
  }, [isPulsing]);

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
        <div className="py-3">
          <Textarea
            label="Enter your prompt here..."
            value={prompt}
            onChange={(e) => handleTextOnChange(e)}
          />
        </div>
        <button
          className="bg-blue-2 text-white rounded-lg px-4 py-2"
          onClick={generateOutfitImages}
        >
          Generate designs
        </button>
        {isPulsing && (
          <div className="h-full flex items-center justify-center">
            <Spinner className="h-12 w-12" />
          </div>
        )}
      </div>
    </Box>
  );
};

export default DesignPrompt;
