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
export const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
  margin: 0 auto;
  width: 90%;
`;
export const SubmitButton = styled.button`
  flex-grow: none;
  border-radius: 10em;

  border: 1px solid transparent;
  padding: 0.6em 3em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: all 0.25s ease;
  color: white;
  max-width: max-content;
  border-color: #646cff;
  &:hover {
    /* background: red; */
    background-color: #646cff;
    border-color: transparent;
  }
  &:focus,
  &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
`;
export const SearchBox = styled.input`
  font-size: 1.2rem;
  padding: 1em;
  border-radius: 10em;
  background-color: #0004;
  width: 100%;
  color: white;
`;
