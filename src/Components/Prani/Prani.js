import React, { useRef, useEffect } from "react";
import Typography from "@mui/material/Typography";
import { motion, useInView, useAnimation } from "framer-motion";
import { Stack } from "@mui/material";
import Box from "@mui/material/Box";
import bannerImage from "../../Images/heros/prani2.jpg";
import qrCode from "../../Images/heros/praniQRCode.PNG";

function Sai() {
  const mainControls = useAnimation();
  const mainRef = useRef(null);
  const isInView = useInView(mainRef, { once: false });

  const textRef = useRef(null);
  const handleCopyClick = () => {
    // Select the text
    const textToCopy = textRef.current.innerText;
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(textRef.current);
    selection.removeAllRanges();
    selection.addRange(range);

    // Execute the copy command
    document.execCommand("copy");

    // Clear the selection
    selection.removeAllRanges();

    // Optionally, you can provide user feedback (e.g., show a notification)
    console.log("Text copied to clipboard:", textToCopy);
  };

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
            PRANI
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
                  xs: "20ch",
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
                They are an NGO run by two women who rescue injured animals and
                sterilize.
              </Typography>

              <Typography variant="body" sx={{ color: "blue" }}>
                <a
                  href="https://www.instagram.com/prani_animaltrust/?igsh=MWZ6bWluZWxmMmh5MQ%3D%3D"
                  target="_blank"
                  style={{ color: "#DA70D6" }}
                >
                  Instagram
                </a>
              </Typography>
              <Typography
                variant="body"
                sx={{
                  // color: "#45b3e0",
                  color: "#197195",
                  fontWeight: "600",
                }}
              >
                Please donate how much ever you can to
                <Typography
                  variant="body"
                  ref={textRef}
                  // onClick={handleCopyClick}
                  onMouseDown={handleCopyClick}
                  paragraph={true}
                  sx={{
                    color: "#87CEEB",
                    // color: "green",
                    fontWeight: "800",
                    textDecoration: "underline",
                  }}
                >
                  prani.62725560@hdfcbank
                </Typography>
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
