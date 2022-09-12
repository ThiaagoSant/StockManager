import React from "react";
import axios from "axios";

import { useRouter } from "next/router";

import { connect } from "react-redux";
import { getAllProducts } from "../../components/store/actions";

import Header from "../../components/Header";
import useForm from "../../hooks/useForm";

import { Main } from "../../styles/Register/style";

import { BASE_URL } from "../../constants/urls";
import Form from "../../components/Form";

const Edit = ({ id }) => {
  const { form, setForm, onChange } = useForm({
    name: "",
    category: "",
    price: "",
    quantity: "",
  });

  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.put(`${BASE_URL}/editProduct/${id}`, form);
      alert("Porduto editado com sucesso");
      router.push("/");
    } catch (err) {
      alert(err.message);
    }
  };

  React.useEffect(() => {
    (async () => {
      const res = await (await axios.get(`${BASE_URL}/products`)).data;
      const [product] = res.filter((product) => product.id === id);

      setForm(product);
    })();
  }, []);

  return (
    <>
      <Header route="/" name={"Voltar"} />

      <Main>
        <Form
          nameBtn={"Editar"}
          title={"Edite"}
          handleSubmit={handleSubmit}
          onChange={onChange}
          form={form}
        />
      </Main>
    </>
  );
};

export default connect((state) => ({ id: state.id }))(Edit);
