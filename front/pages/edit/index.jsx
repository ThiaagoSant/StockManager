import React from "react";
import axios from "axios";

import { useRouter } from "next/router";

import { connect } from "react-redux";
import { getAllProducts } from "../../components/store/actions";

import Header from "../../components/Header";
import useForm from "../../hooks/useForm";

import { Main } from "../../styles/Register/style";

import { BASE_URL } from "../../constants/urls";

const Edit = ({ products, id, dispatch }) => {
  const [allProducts, setAllProducts] = React.useState([]);

  const { form, setForm, onChange, cleanFields } = useForm({
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
      const response = await (await products).data;
      setAllProducts(response);
    })();
  }, [products]);

  React.useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  React.useEffect(() => {
    const [product] = allProducts.filter((product) => product.id === id);
    setForm(product);
  }, [allProducts]);

  return (
    <>
      <Header route="/" />

      <Main>
        <form onSubmit={handleSubmit}>
          <h1>Edite seu produto!</h1>

          <label htmlFor="name">
            <strong>Nome</strong>
            <input
              id="name"
              type="text"
              placeholder="Digite o nome do produto"
              name="name"
              value={form?.name}
              onChange={onChange}
              required
            />
          </label>

          <label htmlFor="category">
            <strong>Categoria</strong>
            <input
              id="category"
              type="text"
              placeholder="Digite a categoria do produto"
              value={form?.category}
              name="category"
              onChange={onChange}
              required
            />
          </label>

          <label htmlFor="price">
            <strong>Preço</strong>
            <input
              id="price"
              type="number"
              placeholder="Digite o preço do produto"
              value={form?.price}
              name="price"
              onChange={onChange}
              required
            />
          </label>

          <label htmlFor="quantity">
            <strong>Quantidade</strong>
            <input
              id="quantity"
              type="number"
              placeholder="Digite a quantidade do produto"
              value={form?.quantity}
              name="quantity"
              onChange={onChange}
              required
            />
          </label>

          <button type="submit">Editar</button>
        </form>
      </Main>
    </>
  );
};

export default connect((state) => ({ id: state.id, products: state.products }))(
  Edit
);
