import styled from "styled-components";

export const CardView = styled.div`
  display: inline-block;
  background-color: #0004;
  color: white;
  border-radius: 0.75em;
  transition: all 0.5s ease;
  transform: scaleX(1);
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.5);
  /* padding: 0.25em; */
`;
export const GradientText = styled.h2`
  background: linear-gradient(45deg, red, blue);
  color: transparent;
  text-align: center;
  text-shadow: none;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
export const GridContainer = styled.div`
  display: flex;
  gap: 1em;
  flex-wrap: wrap;
  justify-content: center;
`;
