import { Box } from "@mui/material";
import styles from "./styles";
import "./styles.css";
import FirstStepForm from "./first-step-form";
import { useState } from "react";
import SecondStepForm from "./second-step-form";
import ThirdStepForm from "./third-step-form";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@Constants/routes";

const DesignerSignup = () => {
  const [step, setStep] = useState<number>(1);
  const navigate = useNavigate();

  return (
    <Box sx={[styles.root]}>
      <div className="h-full flex flex-col space-y-5 p-[48px] bg-green-3">
        {step === 1 && <FirstStepForm onNextClick={() => setStep(2)} />}
        {step === 2 && (
          <SecondStepForm
            onPreviousClick={() => setStep(1)}
            onNextClick={() => setStep(3)}
          />
        )}
        {step === 3 && (
          <ThirdStepForm
            onPreviousClick={() => setStep(2)}
            onNextClick={() => navigate(ROUTES.DESIGNER_HOME)}
          />
        )}
      </div>
    </Box>
  );
};

export default DesignerSignup;
