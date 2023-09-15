import React, { useEffect, useRef, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Backdrop, Box, Fade, Modal } from "@mui/material";

import { ROUTES } from "@Constants/routes";
import { CloseIcon } from "@assets/icons";
import Home from "@Containers/Home";
import Login from "@Containers/Login";
import NotFound from "@Containers/Not-Found";
import FAQPage from "@Containers/FAQPage";
import CategoryPage from "@Containers/Category";
import ProfilePage from "@Containers/Profile";
import ExplorePage from "@Containers/Explore";
import DesignerSignup from "@Containers/Designer/designer-signup";

import { ProtectedRoute } from "./ProtectedRoute";
import styles from "./styles";
import ImageCapture from "@Containers/ImageCatpure";
import Measurement from "@Containers/Measurement";
import DesignerHome from "@Containers/Designer/designer-home";
import OutfitDetails from "@Containers/OutfitDetails/OutfitDetails";
import StyleEditor from "@Containers/StyleEditor/StyleEditor";

export const Layout = () => {
  const appBarRef = useRef(null);
  const [height, setHeight] = useState<string>("0");

  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const value =
      (appBarRef?.current && appBarRef?.current["clientHeight"]) ?? 0;

    setHeight(`${value}px`);
  });

  const handleClose = () => setOpen(false);

  return (
    <div style={styles.root}>
      <div
        style={{ position: "relative", paddingTop: height }}
        className="h-full"
      >
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path={ROUTES.LOGIN} element={<Login />} />
          <Route path={ROUTES.CATEGORY} element={<CategoryPage />} />
          <Route path={ROUTES.PROFILE} element={<ProfilePage />} />
          <Route path={ROUTES.EXPLORE} element={<ExplorePage />} />
          <Route path={ROUTES.EXPLORE_CATEGORY} element={<ExplorePage />} />
          <Route path={ROUTES.EXPLORE_SEARCH} element={<ExplorePage />} />
          <Route path={ROUTES.FAQS} element={<ProtectedRoute Component={FAQPage} />} />
          <Route
            path={ROUTES.FAQS}
            element={<ProtectedRoute Component={FAQPage} />}
          />
          <Route path={ROUTES.ALL} element={<NotFound />} />
          <Route path={ROUTES.DESIGNER_SIGNUP} element={<DesignerSignup />} />
          <Route path={ROUTES.DESIGNER_HOME} element={<DesignerHome />} />
          <Route path={ROUTES.CAPTURE_IMAGE} element={<ImageCapture />} />
          <Route path={ROUTES.MEASUREMENT} element={<Measurement />} />
          <Route path={ROUTES.OUTFIT_DETAILS} element={<OutfitDetails />} />
          <Route path={ROUTES.STYLE_EDITOR} element={<StyleEditor />} />
        </Routes>
      </div>
      <Modal
        style={styles.modalContainer}
        open={open}
        closeAfterTransition
        onClose={handleClose}
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            sx: { left: "unset", right: "unset", width: "450px" },
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={styles.modalStyleContainer}>
            <CloseIcon style={styles.modalClose} onClick={handleClose} />
            <Box sx={styles.modalStyle}>
              <div>TODO</div>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
