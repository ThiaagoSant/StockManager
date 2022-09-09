import React from "react";

import Header from "../../components/Header";

import { Main } from "../../styles/Register/style";

const Register = () => {
  return (
    <>
      <Header route="/" name="Voltar" />
      <Main>
        <form>
          <h1>Registre seu produto!</h1>
          <input
            id="name"
            type="text"
            placeholder="Digite o nome do produto"
            name="name"
            required
          />

          <input
            id="category"
            type="text"
            placeholder="Digite a categoria do produto"
            name="category"
            required
          />

          <input
            id="price"
            type="number"
            placeholder="Digite o preço do produto"
            name="price"
            required
          />

          <input
            id="qauntity"
            type="number"
            placeholder="Digite a quantidade do produto"
            name="qauntity"
            required
          />

          <button type="submit">Registrar</button>
        </form>
      </Main>
    </>
  );
};

export default Register;
