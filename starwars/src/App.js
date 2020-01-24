import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import SwCardSection from "./components/SwCardSection";
import styled from "styled-components";
import ReactDOM, { render } from "react-dom";

const AppH1 = styled.h1`
  font-size: 3rem;
`;

const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
  margin: 3% auto;
`;

const SwButton = styled.div`
background-color: darkgray;
  width: 10%;
  padding: 2%;
  border: 1.5px black solid;
  border-radius: 5px;
  opacity: 0.8;
  margin 3% auto;
`;

const App = () => {
  const [api, setApi] = useState("https://swapi.co/api/people/");
  const [swData, setSwData] = useState();

  const prevPage = () => {
    if (swData.previous == null) {
      console.log(swData.previous);
    } else {
      setApi(swData.previous);
      console.log(api);
      axios.get(api).then(response => {
        console.log(response);
        setSwData(response.data);
      });
    }
  };

  const nextPage = () => {
    if (swData.next == null) {
      console.log(swData.next);
    } else {
      setApi(swData.next);
      console.log(api);
      axios.get(api).then(response => {
        console.log(response);
        setSwData(response.data);
      });
    }
  };

  useEffect(() => {
    axios
      .get(api)
      .then(response => {
        // console.log(response);
        setSwData(response.data);
      })
      .catch(error => {
        console.log(`An error has occured: ${error}`);
      });
  }, []);

  return (
    <div className="App">
      <AppH1 className="Header">React Wars</AppH1>
      <SwCardSection swData={swData} />
      <ButtonDiv>
        <SwButton onClick={prevPage}>Prev</SwButton>
        <SwButton onClick={nextPage}>Next</SwButton>
      </ButtonDiv>
    </div>
  );
};

export default App;
