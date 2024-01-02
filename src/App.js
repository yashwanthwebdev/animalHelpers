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
      }}
    >
      <Stack
        direction="row"
        justifyContent="end"
        style={{
          position: "fixed",
          justifyContent: "end",
          placeSelf: "end",
        }}
      ></Stack>
      <Home theme={theme} />
    </Stack>
  );
}

export default App;
