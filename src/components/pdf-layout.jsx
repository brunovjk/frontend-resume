import React, { useEffect, useRef, useState } from "react";
import { Grid, Paper } from "@mui/material";
import Header from "./header";
import Tasks from "./tasks";
import Resume from "./resume";

const PdfLayout = () => {
  // Define the width and height of a standard PDF page in pixels
  const pdfPageWidth = 8.5 * 96; // 8.5 inches * 96 pixels per inch (standard DPI)
  const pdfPageHeight = 11 * 96; // 11 inches * 96 pixels per inch (standard DPI)

  // Create a ref for the header element
  const headerRef = useRef(null);

  // State to store the dynamically calculated header height
  const [headerHeight, setHeaderHeight] = useState(0);

  // Calculate and set the header height once the component is mounted
  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.clientHeight);
    }
  }, []);

  // Calculate the height of the tasks and resume sections
  const contentHeight = pdfPageHeight - headerHeight;

  return (
    <Paper
      square
      variant="outlined"
      style={{
        width: `${pdfPageWidth}px`,
        height: `${pdfPageHeight}px`,
        margin: "20px",
      }}
    >
      <Grid container sx={{ height: "100%" }}>
        <Grid item xs={12} ref={headerRef}>
          <Header />
        </Grid>
        <Grid item xs={8} style={{ height: `${contentHeight}px` }}>
          <Tasks />
        </Grid>
        <Grid item xs={4} style={{ height: `${contentHeight}px` }}>
          <Resume />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default PdfLayout;
