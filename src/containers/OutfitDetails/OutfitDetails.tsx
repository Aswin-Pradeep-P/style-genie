import Header from "@Components/Header/Header";
import { Loader } from "@Components/index";
import { useGetOutfitDetailsMutation } from "@Containers/Home/apiSlice";

import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const OutfitDetails = () => {
  const { state } = useLocation();
  const outfitDetails = {
    name: "Denim Crop Top",
    details: "Casual Washed Women Dark Blue Top",
    cost: 800,
    rating: "4+",
  };
  const [getOutfitDetails, { data: outfitData, isLoading }] =
    useGetOutfitDetailsMutation();
  const navigate = useNavigate();
  const navigateToStyleEnhancement = () => {
    navigate("/style-editor", {
      state: {
        outfit_imgSrc: outfitData?.out[0]?.image_url,
        outfitId: outfitData?.out[0]?._id.$oid,
      },
    });
  };

  useEffect(() => {
    getOutfitDetails({ id: state?.outfitId });
  }, []);

  if (isLoading) return <Loader />;

  return (
    <div>
      <Header />
      <div>
        <div className="w-full ">
          <div className=" ">
            {/* <div className="w-full h-96 bg-[#70a9a1]" /> */}
            <img
              src={
                outfitData?.out[0]?.image_url || "/assets/images/ModalImage.png"
              }
              alt="outfit"
              className="top-[60px] w-full  h-[450px]  object-cover "
            />
          </div>
          <div className=" h-full  bg-white w-full px-7 py-16  text-start">
            <div className="flex justify-between gap-4">
              <div className=" ">
                <div className="text-[#40798C]  font-bold text-xl">
                  {outfitData?.out?.[0]?.name}
                </div>
                <div className="text-[#70a9a1] text-sm font-semibold mt-2">
                  {outfitData?.out?.[0]?.description}
                </div>
              </div>
              <div className="text-[#70a9a1] text-lg font-semibold mt-2">
                Rs {outfitDetails.cost}
              </div>
            </div>

            <div className="text-[#70a9a1] text-lg font-semibold mt-2">
              Designer:Sara Mehta
            </div>
          </div>
        </div>
        <div className="flex justify-between w-full mt-6 max-w-[450px] fixed bottom-0 bg-white p-4 border-t  ">
          <button
            className="py-3 px-4 bg-[#1F363D] text-white rounded-md"
            onClick={navigateToStyleEnhancement}
          >
            Style Enhancer
          </button>
          <button className="   py-3 px-12  bg-[#1F363D] text-white rounded-md">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default OutfitDetails;
