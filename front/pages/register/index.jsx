import React from "react";
import axios from "axios";

import Header from "../../components/Header";
import useForm from "../../hooks/useForm";

import { BASE_URL } from "../../constants/urls";

import { Main } from "../../styles/Register/style";

const Register = () => {
  const { form, onChange, cleanFields } = useForm({
    name: "",
    category: "",
    price: "",
    quantity: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post(`${BASE_URL}/createProduct`, form);
      alert("Produto registrado com sucesso");
    } catch (err) {
      alert(err);
    }

    cleanFields();
  };

  return (
    <div>
      <Header route="/" name="Voltar" />
      <Main>
        <form onSubmit={handleSubmit}>
          <h1>Registre seu produto!</h1>
          <input
            id="name"
            type="text"
            placeholder="Digite o nome do produto"
            name="name"
            value={form.name}
            onChange={onChange}
            required
          />

          <input
            id="category"
            type="text"
            placeholder="Digite a categoria do produto"
            value={form.category}
            name="category"
            onChange={onChange}
            required
          />

          <input
            id="price"
            type="number"
            placeholder="Digite o preço do produto"
            value={form.price}
            name="price"
            onChange={onChange}
            required
          />

          <input
            id="quantity"
            type="number"
            placeholder="Digite a quantidade do produto"
            value={form.quantity}
            name="quantity"
            onChange={onChange}
            required
          />

          <button type="submit">Registrar</button>
        </form>
      </Main>
    </div>
  );
};

export default Register;
