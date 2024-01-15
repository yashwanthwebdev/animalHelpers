import React, { useRef, useEffect } from "react";
import Typography from "@mui/material/Typography";
import { motion, useInView, useAnimation } from "framer-motion";
import { Stack } from "@mui/material";
import Box from "@mui/material/Box";
import bannerImage from "../../Images/heros/Auravilla.jpeg";

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
          height: "90%",
        }}
      >
        <Stack
          direction="column"
          sx={{
            // gap: "6ch",
            justifyContent: "space-around",

            height: "100%",
          }}
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
            AuraVilla
          </Typography>
          <Stack
            sx={{
              width: "90%",
              justifyContent: {
                xs: "space-between",
                md: "space-around",
              },
              alignItems: {
                xs: "center",
                md: "space-around",
              },
              marginInline: "auto",
              display: "flex",
              gap: {
                xs: "5ch",
                md: "2ch",
              },
              flexDirection: {
                xs: "column",
                md: "row",
              },
            }}
          >
            <Stack
              direction="column"
              sx={{
                justifyContent: "center",
                alignItems: "center",
                width: {
                  xs: "15ch",
                  md: "50ch",
                },
                height: {
                  xs: "20ch",
                  md: "50ch",
                },
              }}
            >
              <img
                src={bannerImage}
                style={{
                  objectFit: "fill",
                  height: "100%",
                  width: "100%",
                  borderRadius: "1.5ch",
                }}
              ></img>
            </Stack>
            <Stack
              direction="column"
              sx={{
                // backgroundColor: "orange",
                justifyContent: "space-around",
                textAlign: "center",
                gap: "2ch",
              }}
            >
              <Typography
                variant="body"
                sx={{
                  letterSpacing: "0.2ch",
                  color: "#36454F",
                }}
              >
                AuraVilla is a cat homestay or boarding service for pet house
                cats, run by an individual independent animal rescuer &
                caregiver. The boarding charges go towards the medical treatment
                (vaccination & sterilization) of street animals.
              </Typography>
              <Typography variant="body" sx={{ color: "blue" }}>
                <a
                  href="https://www.instagram.com/auravilla_cathomestay_chennai/?igsh=eHc2MGhpM2owenhz"
                  target="_blank"
                  style={{
                    color: "#DA70D6",
                  }}
                >
                  Instagram
                </a>
              </Typography>
              <Typography variant="body" sx={{ color: "blue" }}>
                <a
                  href="https://www.facebook.com/AuraVilla2021/"
                  target="_blank"
                  style={{ color: "#DA70D6" }}
                >
                  Facebook
                </a>
              </Typography>
              <Typography
                variant="body"
                sx={{
                  color: "#87CEEB",
                  fontWeight: "800",
                }}
              >
                Please donate how much ever you can to menhir2021@okhdfcbank !
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </motion.div>
    </Stack>
  );
}

export default Sai;
