import React from "react";
import { Paper } from "@mui/material";

const Header = () => {
  return (
    <Paper
      square
      variant="outlined"
      style={{
        background: "#333",
        color: "#fff",
        textAlign: "center",
        padding: "1rem 1rem 2rem 1rem",
        height: "100%",
      }}
    >
      <h1>Bruno Rocha - Frontend Developer</h1>
      <p>Commenced: Nov 2021 | Last Updated: 09/22/2023</p>
      <h3>
        With expertise in JavaScript, React/Next.js, and a Range of Frontend
        Technologies, <br /> I create Engaging Web Experiences.
      </h3>

      <a
        href="https://brunovjk.com/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ fontSize: "2rem" }}
      >
        brunovjk.com
      </a>
    </Paper>
  );
};

export default Header;
