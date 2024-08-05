import React from "react";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";

// Import Components
import Button from "../Button";

import "./_calculator.scss";

const Calculator = () => {
  return (
    <div>
      <Box m={5} />
      <Container maxWidth="xs">
        <div className="wrapper">
          <h1 className="result">01</h1>
          <Button buttonLabel="AC" className="white" />
          <Button buttonLabel="+/-" className="white" />
          <Button buttonLabel="%" className="white" />
          <Button buttonLabel="/" className="red" />
          <Button buttonLabel="7" className="blue" />
          <Button buttonLabel="8" className="blue" />
          <Button buttonLabel="9" className="blue" />
          <Button buttonLabel="X" className="red" />
          <Button buttonLabel="4" className="blue" />
          <Button buttonLabel="5" className="blue" />
          <Button buttonLabel="6" className="blue" />
          <Button buttonLabel="-" className="red" />
          <Button buttonLabel="1" className="blue" />
          <Button buttonLabel="2" className="blue" />
          <Button buttonLabel="3" className="blue" />
          <Button buttonLabel="+" className="red" />
          <Button buttonLabel="0" className="blue" />
          <Button buttonLabel="," className="blue" />
          <Button buttonLabel="," className="hidden" />
          <Button buttonLabel="=" className="white" />
        </div>
      </Container>
    </div>
  );
};

export default Calculator;
