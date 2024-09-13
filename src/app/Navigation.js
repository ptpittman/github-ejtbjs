"use client";
import { Box, Button } from "@mui/material";
import { useState } from "react";
import { Slide } from "@mui/material";

const Navigation = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Slide
        direction="up"
        in={open}
        easing={{
          enter: "cubic-bezier(0,1.5,1,1.5)",
          exit: "cubic-bezier(0,1.5,1,1.5)",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100vh",
            backgroundColor: "red",
            color: "black",
          }}
        >
          This is the nav menu
        </Box>
      </Slide>
      <Button
        sx={{
          textDecoration: "underline",
          fontSize: { xs: "105%", lg: "110%" },
          width: { xs: "100%", md: "280px" },
        }}
        onClick={() => setOpen(!open)}
      >
        {open ? "Close the Menu" : "Look at the Menu"}
      </Button>
    </>
  );
};
export default Navigation;
