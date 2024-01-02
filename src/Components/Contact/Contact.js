import React, { useRef, useEffect } from "react";
import style from "./Contact.module.css";
import { AiOutlineMail } from "react-icons/ai";
import { useOutletContext } from "react-router-dom";
import { motion, useAnimation, useInView } from "framer-motion";
import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import feather from "../../Images/portfolio/feather.jpg";
import rose from "../../Images/portfolio/rose_mobile.jpg";
import intro_mobile_1 from "../../Images/portfolio/intro_mobile_3.jpg";

function Contact(props) {
  // const [theme] = useOutletContext();
  const theme = props.theme;
  const contactRef = useRef(null);
  const isInView = useInView(contactRef, { once: false });
  const mainControls = useAnimation();

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
      sx={{
        display: "flex",
        backgroundImage: {
          xs: `url(${intro_mobile_1})`,
          md: `url(${feather})`,
        },
        justifyContent: "space-around",
      }}
      style={{
        height: "100vh",
        scrollSnapAlign: "end",
        scrollSnapStop: "always",
        backgroundSize: "cover",
      }}
    >
      <motion.div
        initial={{
          scale: 0.5,
          opacity: 0,
          color: "white",
        }}
        variants={{
          hidden: { opacity: 0, color: "white" },
          visible: {
            scale: [0.5, 1],
            opacity: [0, 1],
            color: "black",
          },
        }}
        animate={mainControls}
        transition={{
          // delay: 0.5,
          duration: 1.5,
          ease: "anticipate",
        }}
        style={{
          color: "black",
          fontFamily: "monospace",
          textAlign: "center",
          fontWeight: "800",
          placeSelf: "center",
          marginTop: "auto",
          marginBottom: "auto",
          // fontFamily: "'Charmonman', cursive",
          fontFamily: "'Oswald', sans-serif",
        }}
      >
        <Typography
          variant="h5"
          style={{
            color: "black",
            fontFamily: "monospace",
            textAlign: "center",
            fontWeight: "800",
            placeSelf: "center",
            marginTop: "auto",
            marginBottom: "auto",
            fontFamily: "'Oswald', sans-serif",
          }}
          sx={{
            letterSpacing: {
              xs: "0.7ch",
              lg: "1.3ch",
            },
            paddingInline: {
              xs: "3ch",
              lg: "0ch",
            },
          }}
        >
          LET'S EMBARK ON A DIGITAL JOURNEY TOGETHER!
          {/* where innovation meets
        pixel-perfect precision. */}
        </Typography>
      </motion.div>
      <Stack style={{ height: "50%" }}>
        <motion.div
          ref={contactRef}
          initial={{
            opacity: 0,
          }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: [0, 1],
            },
          }}
          animate={mainControls}
          transition={{
            delay: 1,
            duration: 2,
            ease: "easeInOut",
          }}
          style={{
            backdropFilter: "blur(10px)",
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: "auto",
            width: "100%",
          }}
        >
          <Stack
            className={style.container}
            style={{
              placeContent: "center",
            }}
            direction="column"
          >
            <Stack
              className={`${style.mailId} ${style.introParagraphs}`}
              direction="row"
              gap={2}
              style={{ margin: "auto", alignItems: "center" }}
            >
              <AiOutlineMail
                className={style.mailIcon}
                style={{
                  // color: "teal",
                  color: "black",
                  fontWeight: "600",
                }}
              />{" "}
              <Typography
                variant="body2"
                style={{
                  fontFamily: "monospace",
                  // color: "teal",
                  // color: theme == "light" ? "black" : "white",
                  // fontWeight: "600",
                  fontFamily: "'Bebas Neue', sans-serif",
                  color: "teal",
                }}
                sx={{
                  letterSpacing: {
                    xs: "0ch",
                    lg: "0.5ch",
                  },
                  fontSize: {
                    xs: "0.9rem",
                    lg: "1.1rem",
                  },
                }}
              >
                yashwanthsrinivaswebdev@gmail.com
              </Typography>
            </Stack>
          </Stack>
        </motion.div>
      </Stack>
    </Stack>
  );
}

export default Contact;
