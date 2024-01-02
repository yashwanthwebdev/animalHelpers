import React, { useRef, useEffect } from "react";
import Typography from "@mui/material/Typography";
import { motion, useInView, useAnimation } from "framer-motion";
import { Stack } from "@mui/material";
import Box from "@mui/material/Box";

// import bannerImage from "../../Images/heros/prani.png";
import bannerImage from "../../Images/heros/prani2.jpg";
import qrCode from "../../Images/heros/praniQRCode.PNG";

function Sai() {
  const mainControls = useAnimation();
  const mainRef = useRef(null);
  const isInView = useInView(mainRef, { once: false });

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView]);
  return (
    <Stack
      direction="column"
      style={{
        height: "100vh",
        scrollSnapAlign: "start",
        scrollSnapStop: "always",
        backgroundSize: "cover",
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "red",
        fontFamily: "'Oswald', sans-serif",
      }}
    >
      <motion.div
        ref={mainRef}
        initial={{
          scale: 0.5,
          opacity: 0,
          color: "white",
        }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            scale: [0.5, 1],

            opacity: [0, 1],
            color: "black",
          },
        }}
        animate={mainControls}
        transition={{
          duration: 1.5,
          ease: "anticipate",
        }}
        style={{
          // backgroundColor: "purple",
          width: "100%",
        }}
      >
        <Stack
          direction="column"
          sx={{ gap: "6ch", justifyContent: "space-between" }}
        >
          <Typography
            variant="h2"
            sx={{
              fontFamily: "'Oswald', sans-serif",
              letterSpacing: "0.2ch",
              textAlign: "center",
              fontSize: {
                xs: "1.5rem",
                md: "3rem",
              },
            }}
          >
            PRANI
          </Typography>
          <Stack
            sx={{
              width: "90%",
              // backgroundColor: "yellow",
              justifyContent: "space-around",
              margin: "auto",
              display: "flex",
              gap: "2ch",
              flexDirection: {
                xs: "column",
                md: "row",
              },
            }}
          >
            <Stack
              direction="column"
              sx={{ justifyContent: "center", alignItems: "center" }}
            >
              <img
                src={bannerImage}
                style={{
                  objectFit: "fill",
                  maxWidth: "50ch",
                  maxHeight: "50ch",
                }}
              ></img>
            </Stack>
            <Stack
              direction="column"
              sx={{
                // backgroundColor: "orange",
                justifyContent: "space-around",
                textAlign: "center",
              }}
            >
              <Typography
                variant="body"
                sx={{
                  letterSpacing: "0.2ch",
                }}
              >
                They are an NGO run by two women who rescue injured animals and
                sterilize.
              </Typography>
              <Typography variant="body" sx={{ color: "blue" }}>
                <a
                  href="https://www.instagram.com/prani_animaltrust/?igsh=MWZ6bWluZWxmMmh5MQ%3D%3D"
                  target="_blank"
                  style={{ color: "blue" }}
                >
                  Instagram
                </a>
              </Typography>
              <Typography variant="body">
                Please donate to prani.62725560@hdfcbank if you can!
              </Typography>
              <img
                src={qrCode}
                style={{
                  objectFit: "fill",
                  width: "10ch",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              ></img>
            </Stack>
          </Stack>
        </Stack>
      </motion.div>
    </Stack>
  );
}

export default Sai;
