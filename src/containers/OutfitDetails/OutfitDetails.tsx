import { AppBar, Footer } from "@Components/index";
import styles from "@Layouts/styles";
import { Box } from "@mui/material";

const OutfitDetails = () => {
  const outfitDetails = {
    name: "Denim Crop Top",
    details: "Casual Washed Women Dark Blue Top",
    cost: 800,
    rating: "4+",
  };

  return (
    <div>
      {/* <AppBar /> */}
      <div>
        <div className="w-full ">
          <div className=" ">
            {/* <div className="w-full h-96 bg-[#70a9a1]" /> */}
            <img
              src="/assets/images/ModalImage.svg"
              alt="outfit"
              className="top-[60px] w-full  h-[390px]  object-cover "
            />
          </div>
          <div className="mt- flex justify-between gap-4 h-full min-h-screen bg-white w-full px-7 py-4  text-start">
            <div className=" ">
              <div className="text-[#40798C]  font-bold text-xl">
                {outfitDetails.name}
              </div>
              <div className="text-[#70a9a1] text-sm font-semibold mt-2">
                {outfitDetails.details}
              </div>
            </div>
            <div className="text-[#70a9a1] text-lg font-semibold mt-2">
              Rs {outfitDetails.cost}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutfitDetails;
