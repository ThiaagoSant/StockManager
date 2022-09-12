import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

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
    margin-top: 70px;

    h1 {
      margin: 10px 0;

      font-size: 1.5rem;
      color: crimson;
      font-family: "Poppins", sans-serif;
    }

    label {
      margin: 5px 0;
      width: 100%;
      position: relative;

      strong {
        font-family: "Poppins", sans-serif;
        color: crimson;
        font-size: 14px;
        background-color: white;
        padding: 0 5px;
        position: absolute;
        top: -9px;
        left: 25px;
      }
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
