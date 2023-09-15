import { Box } from "@mui/material";
import styles from "./styles";
import "./styles.css";
import { ArrowForward, UserIcon } from "@assets/icons";
import Logo from "@assets/icons/StyleGenieLogo.png";
import { useDesignerContext } from "./designer-context";
import {
  Carousel,
  Radio,
  Card,
  Input,
  Spinner,
} from "@material-tailwind/react";
import RoundedDarkGreen from "./rounded-dark-green.png";
import TurtleDarkGreen from "./turtle-dark-green.png";
import VneckDarkGreen from "./vneck-dark-green.png";
import RoundedGreen from "./rounded-green.png";
import TurtleGreen from "./turtle-green.png";
import VneckGreen from "./vneck-green.png";
import RoundedRed from "./rounded-red.png";
import TurtleRed from "./turtle-red.png";
import VneckRed from "./vneck-red.png";
import RoundedPurple from "./rounded-purple.png";
import TurtlePurple from "./turtle-purple.png";
import VneckPurple from "./vneck-purple.png";
import { ROUTES } from "@Constants/routes";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export function DesignVariations() {
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
          <div className="h-full flex items-center justify-center">
            <Spinner className="h-12 w-12" />
          </div>
        )}
        {!isPulsing && (
          <>
            <Carousel className="rounded-xl h-[411px] overflow-hidden">
              <div className="relative inline-block">
                <span className="absolute top-2 left-2 bg-white px-3 p-1 rounded-full font-bold">
                  1
                </span>
                <img
                  src={RoundedDarkGreen}
                  alt="hey1"
                  className="h-[411px] w-full object-cover"
                />
              </div>
              <div className="relative inline-block">
                <span className="absolute top-2 left-2 bg-white px-3 p-1 rounded-full font-bold">
                  2
                </span>
                <img
                  src={TurtleDarkGreen}
                  alt="hey2"
                  className="h-[411px] w-full object-cover"
                />
              </div>
              <div className="relative inline-block">
                <span className="absolute top-2 left-2 bg-white px-3 p-1 rounded-full font-bold">
                  3
                </span>
                <img
                  src={VneckDarkGreen}
                  alt="hey3"
                  className="h-[411px] w-full object-cover"
                />
              </div>
              <div className="relative inline-block">
                <span className="absolute top-2 left-2 bg-white px-3 p-1 rounded-full font-bold">
                  4
                </span>
                <img
                  src={RoundedGreen}
                  alt="hey4"
                  className="h-[411px] w-full object-cover"
                />
              </div>
              <div className="relative inline-block">
                <span className="absolute top-2 left-2 bg-white px-3 p-1 rounded-full font-bold">
                  5
                </span>
                <img
                  src={TurtleGreen}
                  alt="hey5"
                  className="h-[411px] w-full object-cover"
                />
              </div>
              <div className="relative inline-block">
                <span className="absolute top-2 left-2 bg-white px-3 p-1 rounded-full font-bold">
                  6
                </span>
                <img
                  src={VneckGreen}
                  alt="hey6"
                  className="h-[411px] w-full object-cover"
                />
              </div>
              <div className="relative inline-block">
                <span className="absolute top-2 left-2 bg-white px-3 p-1 rounded-full font-bold">
                  7
                </span>
                <img
                  src={RoundedRed}
                  alt="hey7"
                  className="h-[411px] w-full object-cover"
                />
              </div>
              <div className="relative inline-block">
                <span className="absolute top-2 left-2 bg-white px-3 p-1 rounded-full font-bold">
                  8
                </span>
                <img
                  src={TurtleRed}
                  alt="hey8"
                  className="h-[411px] w-full object-cover"
                />
              </div>
              <div className="relative inline-block">
                <span className="absolute top-2 left-2 bg-white px-3 p-1 rounded-full font-bold">
                  9
                </span>
                <img
                  src={VneckRed}
                  alt="hey9"
                  className="h-[411px] w-full object-cover"
                />
              </div>
              <div className="relative inline-block">
                <span className="absolute top-2 left-2 bg-white px-3 p-1 rounded-full font-bold">
                  10
                </span>
                <img
                  src={RoundedPurple}
                  alt="hey10"
                  className="h-[411px] w-full object-cover"
                />
              </div>
              <div className="relative inline-block">
                <span className="absolute top-2 left-2 bg-white px-3 p-1 rounded-full font-bold">
                  11
                </span>
                <img
                  src={TurtlePurple}
                  alt="hey11"
                  className="h-[411px] w-full object-cover"
                />
              </div>
              <div className="relative inline-block">
                <span className="absolute top-2 left-2 bg-white px-3 p-1 rounded-full font-bold">
                  12
                </span>
                <img
                  src={VneckPurple}
                  alt="hey12"
                  className="h-[411px] w-full object-cover"
                />
              </div>
            </Carousel>
            <Card className="pt-3">
              <div className="py-2 px-[2px]">
                <div className="text-sm text-blue-2 px-5 py-1">
                  Select primary design from variations
                </div>
                <div className="flex gap-1 text-sm">
                  <Radio name="type" label="1" ripple={true} />
                  <Radio name="type" label="2" ripple={false} />
                  <Radio name="type" label="3" ripple={false} />
                  <Radio name="type" label="4" ripple={false} />
                  <Radio name="type" label="5" ripple={false} />
                  <Radio name="type" label="6" ripple={false} />
                </div>
                <div className="flex gap-1 text-sm">
                  <Radio name="type" label="7" ripple={false} />
                  <Radio name="type" label="8" ripple={false} />
                  <Radio name="type" label="9" ripple={false} />
                  <Radio name="type" label="10" ripple={false} />
                  <Radio name="type" label="11" ripple={false} />
                  <Radio name="type" label="12" ripple={false} />
                </div>
              </div>
            </Card>
            <Card className="pt-3 h-[120px]">
              <div className="text-sm text-blue-2 px-5 py-1">
                Please enter the cost of design
              </div>
              <div className="p-5">
                <Input label="Input the cost" />
              </div>
            </Card>
            <button
              className="bg-blue-2 text-white rounded-lg px-4 py-2"
              onClick={() => {
                navigate(ROUTES.DESIGNER_HOME);
                setActiveTab(1);
              }}
            >
              Launch your design
            </button>
          </>
        )}
      </div>
    </Box>
  );
}
