import styled from "styled-components";

export const HomeStyle = styled.main`
  align-items: flex-start;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 0 3%;
  width: 100%;

  h1 {
    color: crimson;
    font-family: "Poppins", sans-serif;
    font-size: 1.8rem;
    margin-top: 108px;
  }

  section {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    column-gap: 25px;

    div {
      align-items: flex-start;
      border-radius: 15px;
      box-shadow: 6px 3px 18px -3px #000000;
      display: flex;
      flex-direction: column;
      font-family: "Poppins", sans-serif;
      height: 150px;
      padding: 10px;
      position: relative;
      margin-bottom: 26px;
      max-width: 100%;
      width: 350px;
      color: crimson;

      P {
        margin: 2px;
        font-weight: 500;
      }

      span {
        font-weight: 400;
        color: #000000;
      }

      section {
        display: flex;
        position: absolute;
        bottom: 10px;
        right: 20px;

        button {
          background-color: white;
          border: 1px solid #ccc;
          padding: 10px;
          border-radius: 100%;
          box-shadow: 6px 3px 18px -8px #000000;
          color: grey;
          font-size: 1rem;
          transition: color 0.2s ease-in;

          &:hover {
            color: crimson;
          }
        }
      }
    }
  }
`;

export const FormHome = styled.form`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  width: 100%;

  h3 {
    margin-right: 20px;
    font-size: 1rem;
    color: crimson;
    font-family: "Poppins", sans-serif;
  }

  input,
  select {
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 50px;
    padding: 10px;
    margin-top: 15px;
    margin-left: 10px;
    font-size: 14px;
    outline: 0;
    font-family: "Poppins", sans-serif;
    transition: border 0.12s ease-in;

    &:focus {
      border: 2px solid crimson;
    }
  }
`;
