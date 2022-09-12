import React from "react";
import axios from "axios";

import Header from "../../components/Header";
import useForm from "../../hooks/useForm";

import { BASE_URL } from "../../constants/urls";

import { Main } from "../../styles/Register/style";
import Form from "../../components/Form";

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
    <>
      <Header route="/" name="Voltar" />

      <Main>
        <Form
          nameBtn={"Registrar"}
          title={"Registre"}
          handleSubmit={handleSubmit}
          onChange={onChange}
          form={form}
        />
      </Main>
    </>
  );
};

export default Register;
