import React from "react";
import style from "./Home.module.css";
import { useOutletContext } from "react-router-dom";
import { Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import { motion } from "framer-motion";

import Sai from "../Sai/Sai";
import Prani from "../Prani/Prani";
import Auravilla from "../Auravilla/Auravilla";

function Home(props) {
  return (
    <Stack style={{ width: "100%" }}>
      <Sai />
      <Prani />
      <Auravilla />
    </Stack>
  );
}

export default Home;
