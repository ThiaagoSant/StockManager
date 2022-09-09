import styled from "styled-components";

export const HeaderStyle = styled.header`
  background-color: crimson;
  height: 68px;
  width: 100%;

  nav {
    align-items: center;
    display: flex;
    justify-content: space-between;
    height: inherit;
    padding: 0 2%;

    p {
      color: white;
      font-family:'Poppins', sans-serif;
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
        font-family: 'Poppins', sans-serif;
        font-size: 1.1rem;
      }

      &:hover {
        background-color: white;

        a {
          color: crimson;
        }
      }
    }
  }
`;
