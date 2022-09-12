import styled from "styled-components";

export const Ul = styled.ul`
  display: flex;
  width: 100%;
  column-gap: 8px;
  justify-content: center;

  li {
    background-color: white;
    border-radius: 200%;
    padding: 5px 13px;
    font-size: 12px;
    color: black;
    font-family: "Poppins", sans-serif;
    cursor: pointer;
    transition: 0.2s ease;

    &:nth-of-type(${({ seletedPage }) => (seletedPage ? seletedPage : 1)}) {
      background-color: crimson;
      color: white;
    }
  }
`;
