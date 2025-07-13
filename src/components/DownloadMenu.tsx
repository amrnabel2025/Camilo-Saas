import { ActionControl } from "@/utils/mixpanel";
import AppleIcon from "@mui/icons-material/Apple";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Button, Menu, MenuItem } from "@mui/material";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import { GoogleIconSVG } from "../../public/SVGs";
const DownloadMenu = () => {
  const t = useTranslations("Header");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleDownloadClick = (event: React.MouseEvent<HTMLElement>) => {
    if (anchorEl === event.currentTarget) {
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleStoreClick = (store: string) => {
    ActionControl(`Clicked Download App from ${store}`);
    const storeLinks = {
      GooglePlay: "https://play.google.com/store/games?device=windows",
      AppStore: "https://apps.apple.com/app/id1592200000",
    };
    window.open(storeLinks[store as keyof typeof storeLinks], "_blank");
    handleClose();
  };
  return (
    <>
      <Button
        onClick={handleDownloadClick}
        sx={{
          borderRadius: "8px",
          fontWeight: "bold",
          textTransform: "none",
          pl: { xs: 2, md: 2 },
          display: "flex",
          gap: 1,
          background: { xs: "#164941", md: "white" },
          width: "100%",
          height: { xs: "40px", md: "35px" },
          justifyContent: "space-between",
          color: { xs: "white", md: "#008e77" },
          "&:hover": { backgroundColor: { xs: "#14433b", md: "white" } },
        }}
      >
        {t("download")}
        <KeyboardArrowDownIcon />
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        disableScrollLock
        sx={{
          zIndex: 9999999999,
          mr: 2,
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        slotProps={{
          paper: {
            sx: {
              mt: 2.5,
              width: "215px",
              borderRadius: "8px",
              border: "3px solid #008e77",
            },
          },
        }}
      >
        <MenuItem
          onClick={() => handleStoreClick("GooglePlay")}
          sx={{ gap: 1 }}
        >
          <GoogleIconSVG />
          {t("googlePlay")}
        </MenuItem>
        <MenuItem onClick={() => handleStoreClick("AppStore")} sx={{ gap: 1 }}>
          <AppleIcon sx={{ color: "black" }} />
          {t("appStore")}
        </MenuItem>
      </Menu>
    </>
  );
};

export default DownloadMenu;
