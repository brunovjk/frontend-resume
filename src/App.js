import React from "react";
import { Button, Container } from "@mui/material";
import PdfLayout from "./components/pdf-layout";

function App() {
  const handleDownloadPDF = () => {
    // You can implement the PDF generation and download logic here
    // Once you have the PDF ready, trigger the download
    // Example: window.open('path_to_generated_pdf.pdf', '_blank');
  };

  return (
    <Container
      disableGutters
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      {/* Render the PdfLayout component */}
      <PdfLayout />
      <Button
        variant="contained"
        color="primary"
        style={{ margin: "20px" }}
        onClick={handleDownloadPDF}
      >
        Download PDF
      </Button>
    </Container>
  );
}

export default App;
