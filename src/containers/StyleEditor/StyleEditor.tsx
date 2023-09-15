import { ChevronLeft, ChevronRight } from "@assets/icons";
import { useEffect, useState } from "react";

import Header from "@Components/Header/Header";
import { useLocation, useNavigate } from "react-router-dom";
import { useGetCustomizeMutation } from "@Containers/Home/apiSlice";

const StyleEditor = () => {
  const [
    getCustomization,
    { data: customizedData, isLoading: isCustomizationLoading },
  ] = useGetCustomizeMutation();
  const { state } = useLocation();
  const [currentImgSrc, setCurrentImgSrc] = useState();
  const navigate = useNavigate();
  enum NeckTypes {
    VNECK = "v-neck",
    UNECK = "u-neck",
    TURTLENECK = "turtleneck",
  }
  const editorTools = [
    {
      type: "neckline",
      label: "NeckLine",
      options: [
        {
          label: "V neck",
          imgLabel: "VNeck.jpg",
          type: NeckTypes.VNECK,
        },
        {
          label: "Round Neck",
          imgLabel: "RoundNeck.jpg",
          type: NeckTypes.UNECK,
        },
        {
          label: "Turtle Neck",
          imgLabel: "TurtleNeck.jpg",
          type: NeckTypes.TURTLENECK,
        },
      ],
    },
    {
      type: "sleeve",
      label: "Sleeve",
      options: [
        {
          label: "Full Sleeve",
          imgLabel: "FullSleeve.jpg",
          type: NeckTypes.VNECK,
        },
        {
          label: "Cap Sleeve",
          imgLabel: "Capsleeve.jpg",
          type: NeckTypes.VNECK,
        },
        {
          label: "Sleeveless",
          imgLabel: "Sleeveless.jpg",
          type: NeckTypes.VNECK,
        },
      ],
    },
    {
      type: "length",
      label: "Length",

      options: [
        {
          label: "Above Knee",
          imgLabel: "AboveKneeLength.jpg",
          type: NeckTypes.VNECK,
        },
        {
          label: "Knee Length",
          imgLabel: "KneeLength.jpg",
          type: NeckTypes.VNECK,
        },
        {
          label: "Below Knee",
          imgLabel: "BelowKneeLength.jpg",
          type: NeckTypes.VNECK,
        },
      ],
    },
    {
      type: "fit",
      label: "Fit",

      options: [
        {
          label: "Loose",
          imgLabel: "Capsleeve.jpg",
          type: NeckTypes.VNECK,
        },
        {
          label: "Regular",
          imgLabel: "Capsleeve.jpg",
          type: NeckTypes.VNECK,
        },
        {
          label: "Tight",
          imgLabel: "DeepV.jpg",
          type: NeckTypes.VNECK,
        },
      ],
    },
  ];
  const [editorToolIndex, setEditorToolIndex] = useState(0);

  const handlePrev = () => {
    setEditorToolIndex(editorToolIndex - 1);
  };
  const handleNext = () => {
    setEditorToolIndex(editorToolIndex + 1);
  };

  const navigateToAIEnhancements = () => {
    navigate("/ai-enhancer");
  };

  const handleCustomization = (type: NeckTypes) => {
    getCustomization({
      id: "6503e8fde40d7addb33a5c80",
      neckline: type,
    });
  };

  useEffect(() => {
    if (customizedData) setCurrentImgSrc(customizedData.image_url);
  }, [customizedData]);

  useEffect(() => {
    if (state.outfit_imgSrc) setCurrentImgSrc(state.outfit_imgSrc);
  }, [state.outfit_imgSrc]);

  return (
    <>
      <Header />
      <div className=" bg-white flex flex-col    items-center pb-4 px-4 ">
        <div className="text-xl mt-4 mb-2 italic ">Elevate Your Elegance</div>
        <div className=" flex justify-between items-center bg-[#1F363D] rounded-md text-center text-lg font-semibold text-white border p-3 w-full ">
          <button
            onClick={handlePrev}
            disabled={editorToolIndex <= 0 || isCustomizationLoading}
          >
            <ChevronLeft />
          </button>
          {editorTools[editorToolIndex].label}
          <button
            onClick={handleNext}
            disabled={
              editorToolIndex >= editorTools.length - 1 ||
              isCustomizationLoading
            }
          >
            <ChevronRight />
          </button>
        </div>
        {isCustomizationLoading ? (
          <div className=" flex flex-col items-center border-[#40798C] border- justify-center h-[350px] mb-2 w-full bg-white ">
            <div className="text-[#40798C] font-semibold mb-12">
              Hold Tight, Style's Brewing: AI at Work!!
            </div>
            <div className="dot-spin"></div>
          </div>
        ) : (
          <img
            src={currentImgSrc || "/assets/images/ModalImage.svg"}
            alt="outfit"
            className="w-full ml-3 my-6  h-[350px]  object-cover "
          />
        )}

        <div className="flex  w-full justify-center gap-4 mb-10">
          {editorTools[editorToolIndex].options.map((option, i) => (
            <div key={i}>
              <button
                className="border border-[#40798C]  rounded-md"
                onClick={() =>
                  handleCustomization(
                    option?.type ? option?.type : NeckTypes.VNECK
                  )
                }
              >
                <img
                  src={`/assets/icons/${option.imgLabel}`}
                  alt="styles"
                  className="w-20 h-[88px] object-fill"
                />
              </button>
              <div className="text-center font-semibold text-sm text-[#40798C] mt-1">
                {option.label}
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between w-full mt-6 max-w-[450px] fixed bottom-0  bg-white p-4 border-t  ">
          <button
            className="py-3 px-10 bg-[#1F363D] text-white rounded-md"
            onClick={navigateToAIEnhancements}
          >
            AI Enhancer
          </button>
          <button className="py-3 px-12 bg-[#1F363D] text-white rounded-md">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default StyleEditor;
