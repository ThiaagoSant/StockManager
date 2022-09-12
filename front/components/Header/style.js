import styled from "styled-components";

export const HeaderStyle = styled.header`
  background-color: crimson;
  display: flex;
  height: 68px;
  padding: 0 3%;
  width: 100%;
  position: fixed;
  z-index: 1;
  align-items: center;
  justify-content: space-between;
  

  p {
    color: white;
    font-family: "Poppins", sans-serif;
    font-size: 1.5rem;
  }

  button {
    border: 2px solid white;
    background-color: transparent;
    padding: 10px 20px;
    border-radius: 10px;
    transition: all 0.2s ease-in;

    a {
      color: white;
      font-family: "Poppins", sans-serif;
      font-size: 1.1rem;
    }

    &:hover {
      background-color: white;

      a {
        color: crimson;
      }
    }
  }
`;
