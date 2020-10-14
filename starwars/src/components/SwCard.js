import React from "react";
import styled from "styled-components";

const SwCardDiv = styled.div`
  background-color: #c2b280;
  width: 35%;
  padding: 3%;
  border: 1.5px black solid;
  border-radius: 5px;
  opacity: 0.8;
  margin 1.5% auto;
  display:flex;
  flex-direction:column;
`;

function SwCard(props) {
  console.log(`Card props: ${props}`);
  return (
    <SwCardDiv>
      <h2>{props.character.name}</h2>
      <p>Height: {props.character.height}cm</p>
      <p>Mass: {props.character.mass}kg</p>
      <p>Films: {props.character.films.length}</p>
    </SwCardDiv>
  );
}

export default SwCard;
