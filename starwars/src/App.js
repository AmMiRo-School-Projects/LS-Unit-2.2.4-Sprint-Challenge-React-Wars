import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import SwCardSection from "./components/SwCardSection";
import styled from "styled-components";

const AppH1 = styled.h1`
  font-size: 3rem;
`;

const App = () => {
  const [api, setApi] = useState("https://swapi.co/api/people/");
  const [swData, setSwData] = useState();

  useEffect(() => {
    axios
      .get(api)
      .then(response => {
        console.log(response);
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
    </div>
  );
};

export default App;
