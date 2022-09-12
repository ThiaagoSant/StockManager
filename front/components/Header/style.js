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

  @media screen and (min-width: 912px) and (max-width: 912px) and (min-height: 1368px) {
    height: 110px;
  }

  p {
    color: white;
    font-family: "Poppins", sans-serif;
    font-size: 1.5rem;

    @media screen and (min-width: 912px) and (max-width: 912px) and (min-height: 1368px) {
      font-size: 2.5rem;
    }
  }

  button {
    border: 2px solid white;
    background-color: transparent;
    padding: 10px 20px;
    border-radius: 10px;
    transition: all 0.2s ease-in;

    @media screen and (max-width: 600px) {
      padding: 5px 10px;
    }

    a {
      color: white;
      font-family: "Poppins", sans-serif;
      font-size: 1.1rem;

      @media screen and (min-width: 912px) and (max-width: 912px) and (min-height: 1368px) {
        font-size: 1.8rem;
      }
    }

    &:hover {
      background-color: white;

      a {
        color: crimson;
      }
    }
  }
`;
