import React from "react";
import styled from "styled-components";
import SwCard from "./SwCard";

const CardSectionDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space around;
  align-items: center;
`;

function SwCardSection(props) {
  console.log(`Card Section props: ${props}`);
  if (!props.swData) {
    return <h1>Loading...</h1>;
  }
  return (
    <CardSectionDiv>
      {props.swData.results.map(obj => (
        <SwCard key={obj.name} character={obj} />
      ))}
    </CardSectionDiv>
  );
}

export default SwCardSection;
