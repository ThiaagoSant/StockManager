import styled from "styled-components";

export const HomeStyle = styled.main`
  align-items: flex-start;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: calc(100vh - 68px);
  width: 100%;
  padding: 0 3%;

  h1 {
    color: crimson;
    font-family: "Poppins", sans-serif;
    font-size: 1.7rem;
    margin-bottom: 26px;
  }

  section {
    display: flex;
    flex-wrap: wrap;
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
      width: 300px;
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
