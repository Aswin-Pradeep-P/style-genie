import { useEffect, useState } from "react";

import { Textarea } from "@material-tailwind/react";
import { useGenerateOutfitsMutation } from "@Containers/Home/apiSlice";
import Header from "@Components/Header/Header";
import DownloadIcon from "@mui/icons-material/Download";

const DesignPrompt = () => {
  const [prompt, setPrompt] = useState();
  const [isPulsing, setIsPulsing] = useState(false);
  const [
    generateOutfits,
    { data: generatedOutfits, isLoading: isGenerateOutfitLoading },
  ] = useGenerateOutfitsMutation();
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
    <div>
      <Header isDesigner />
      <div className="flex flex-col min-h-screen space-y-3 px-[48px] h-full bg-white">
        <div className="text-blue-2 font-bold text-center text-lg mt-2 ita">
          Outline your demands, welcome inventive sparks.
        </div>
        <div className="py-3">
          <Textarea
            label="Enter your prompt here..."
            value={prompt}
            onChange={(e) => handleTextOnChange(e)}
            className="text-[18px] leading-5 font-normal"
          />
        </div>
        <button
          className="bg-blue-2 text-white rounded-lg px-4 py-2 mb-6"
          onClick={generateOutfitImages}
        >
          Generate designs
        </button>
        {isGenerateOutfitLoading && (
          <div className="flex w-full h-full justify-center items-center  absolute top-0 right-2">
            <div className="dot-spin" />
          </div>
        )}
        {generatedOutfits?.images &&
          generatedOutfits?.images?.map((outfit, index) => (
            <div key={index} className="relative">
              <button>
                <DownloadIcon className="absolute top-12 text-white w-5 right-2 bg-black bg-opacity-90 border border-white z-20" />
              </button>
              <img
                src={outfit?.image_url}
                alt="outfit"
                className="h-80 object-contain"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default DesignPrompt;
