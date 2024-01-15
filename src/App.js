import style from "./App.module.css";
import { Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./Components/Home/Home";
import Button from "@mui/material/Button";
import { Stack, Typography } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import abstract_mobile from "./Images/portfolio/abstract_mobile.jpg";
import hanging_flowers_mobile from "./Images/portfolio/hanging_flowers_mobile.jpg";
import intro_mobile_1 from "./Images/portfolio/intro_mobile_1.jpg";
import plants_1 from "./Images/portfolio/plants_1.jpg";
import { SwipeDown } from "@mui/icons-material";
import SwipeVerticalIcon from "@mui/icons-material/SwipeVertical";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import PanToolAltIcon from "@mui/icons-material/PanToolAlt";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";

function App() {
  const [backgroundColor, setBackgroundColor] = useState(
    "rgba(123, 32, 146, 0.8)"
  );
  const [navBarBackgroundColor, setNavBarBackgroundColor] = useState(
    // "linear-gradient(to right, rgba(250, 0, 0, 0.6),white, rgba(250, 0, 0, 0.6))"
    // "linear-gradient(to right, rgba(250, 0, 0, 0.6), rgba(255,255,255,0.4) , rgba(250, 0, 0, 0.6))"
    "linear-gradient(to right, rgba(250, 0, 0, 0.9), rgba(255,0,0,0.3) , rgba(250, 0, 0, 0.9))"
  );
  const [navBarColor, setNavBarColor] = useState("rgba(89, 1, 89, 0.87)");
  const [theme, setTheme] = useState("light");

  var colorIndex = 0;
  useEffect(() => {
    console.log("new theme is ", backgroundColor);
  }, [backgroundColor]);

  return (
    <Stack
      className={style.container}
      style={{
        height: "100vh",
        scrollSnapAlign: "start",
        scrollSnapStop: "always",
        backgroundSize: "cover",
        position: "relative",
      }}
    >
      {/* <Stack
        direction="row"
        justifyContent="end"
        style={{
          position: "fixed",
          justifyContent: "end",
          placeSelf: "end",
        }}
      ></Stack> */}
      <Home theme={theme} />
      <Tooltip title="Swipe up" sx={{ cursor: "default" }}>
        <IconButton>
          <KeyboardDoubleArrowUpIcon
            sx={{ position: "fixed", right: "2%", top: "10%", color: "teal" }}
          />
        </IconButton>
      </Tooltip>
      <Tooltip title="Swipe up" sx={{ cursor: "default" }}>
        <IconButton>
          <KeyboardDoubleArrowDownIcon
            sx={{
              position: "fixed",
              right: "2%",
              bottom: "10%",
              color: "teal",
            }}
          />
        </IconButton>
      </Tooltip>
    </Stack>
  );
}

export default App;
