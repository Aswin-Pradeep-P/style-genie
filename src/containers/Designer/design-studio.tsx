import { DesignStudioIcon, StarIcon } from "@assets/icons";
import { Card } from "./card";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@Constants/routes";

export const DesignStudio = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center">
      <Card title="Your Design Studio" />
      <DesignStudioIcon className="floating mb-8" />
      <div className="flex flex-col items-center space-y-4">
        <button
          className="bg-blue-2 text-white rounded-lg px-4 py-2"
          onClick={() => navigate(ROUTES.DESIGN_PREVIEW)}
        >
          Upload your design
        </button>
        <button
          className="flex space-x-2 bg-white text-blue-2 border border-blue-2 rounded-lg px-4 py-2"
          onClick={() => navigate(ROUTES.DESIGN_PROMPT)}
        >
          <StarIcon />
          <div>Get AI inspired designs</div>
        </button>
      </div>
    </div>
  );
};
