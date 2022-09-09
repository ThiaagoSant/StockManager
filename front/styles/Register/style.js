import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 68px);

  form {
    align-items: center;
    border: 4px solid crimson;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    padding: 30px;
    row-gap: 15px;
    max-width: 440px;
    width: 100%;

    h1 {
      margin: 10px 0;

      font-size: 1.5rem;
      color: crimson;
      font-family: "Poppins", sans-serif;
    }

    input {
      text-align: center;
      border: 1px solid #ccc;
      border-radius: 50px;
      padding: 10px;
      font-size: 20px;
      width: 100%;
      outline: 0;
      font-family: "Poppins", sans-serif;
      transition: border 0.12s ease-in;

      &:focus {
        border: 2px solid crimson;
      }
    }

    label {
      display: flex;
      flex-direction: column;
    }

    button {
      border: 2px solid crimson;
      border-radius: 10px;
      background-color: crimson;
      color: white;
      font-family: "Poppins", sans-serif;
      padding: 10px 20px;
      font-size: 1rem;

      transition: all 0.2s ease-in;

      &:hover {
        background-color: transparent;
        color: crimson;
      }
    }
  }
`;
