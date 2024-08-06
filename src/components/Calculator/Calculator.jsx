import React, { useState } from "react";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";

// Import Components
import Button from "../Button";

import "./_calculator.scss";

const Calculator = () => {
  const [num, setNum] = useState(0);
  const [oldNum, setOldNum] = useState(0);
  const [operator, setOperator] = useState(0);

  function inputNum(valor) {
    let input = valor.target.value;
    if (num === 0) {
      setNum(input);
    } else {
      setNum(num + input);
    }
  }

  function clear() {
    setNum(0);
  }

  function porcentage() {
    setNum(num / 100);
  }

  function changeSign() {
    if (num > 0) {
      setNum(-num);
    } else {
      setNum(Math.abs(num));
    }
  }

  function operatorHandler(e) {
    let operatorInput = e.target.value;
    setOperator(operatorInput);
    setOldNum(num);
    setNum(0);
  }

  function calculate() {
    if (operator === "/") {
      setNum(parseFloat(oldNum) / parseFloat(num));
    } else if (operator === "X") {
      setNum(parseFloat(oldNum) * parseFloat(num));
    } else if (operator === "-") {
      setNum(parseFloat(oldNum) - parseFloat(num));
    } else if (operator === "+") {
      setNum(parseFloat(oldNum) + parseFloat(num));
    }
  }

  return (
    <div>
      <Box m={5} />
      <Container maxWidth="xs">
        <div className="wrapper">
          <h1 className="result">{num}</h1>
          <Button buttonLabel="AC" className="white" onClick={clear} />
          <Button buttonLabel="+/-" onClick={changeSign} className="white" />
          <Button buttonLabel="%" className="white" onClick={porcentage} />
          <Button
            buttonLabel="/"
            className="red"
            onClick={operatorHandler}
            value={"/"}
          />
          <Button
            buttonLabel="7"
            className="blue"
            onClick={inputNum}
            value={7}
          />
          <Button
            buttonLabel="8"
            className="blue"
            onClick={inputNum}
            value={8}
          />
          <Button
            buttonLabel="9"
            className="blue"
            onClick={inputNum}
            value={9}
          />
          <Button
            buttonLabel="X"
            className="red"
            onClick={operatorHandler}
            value={"X"}
          />
          <Button
            buttonLabel="4"
            className="blue"
            onClick={inputNum}
            value={4}
          />
          <Button
            buttonLabel="5"
            className="blue"
            onClick={inputNum}
            value={5}
          />
          <Button
            buttonLabel="6"
            className="blue"
            onClick={inputNum}
            value={6}
          />
          <Button
            buttonLabel="-"
            className="red"
            onClick={operatorHandler}
            value={"-"}
          />
          <Button
            buttonLabel="1"
            className="blue"
            onClick={inputNum}
            value={1}
          />
          <Button
            buttonLabel="2"
            className="blue"
            onClick={inputNum}
            value={2}
          />
          <Button
            buttonLabel="3"
            className="blue"
            onClick={inputNum}
            value={3}
          />
          <Button
            buttonLabel="+"
            className="red"
            onClick={operatorHandler}
            value={"+"}
          />
          <Button
            buttonLabel="0"
            className="blue"
            onClick={inputNum}
            value={0}
          />
          <Button
            buttonLabel="."
            className="blue"
            onClick={inputNum}
            value={"."}
          />
          <Button buttonLabel="," className="hidden" />
          <Button buttonLabel="=" onClick={calculate} className="red" />
        </div>
      </Container>
    </div>
  );
};

export default Calculator;
