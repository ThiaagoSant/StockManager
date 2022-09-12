import React, { useState } from "react";
import useForm from "../hooks/useForm";

import Header from "../components/Header";

import Link from "next/link";

import { connect } from "react-redux";
import { toggleId } from "../components/store/actions";
import { getAllProducts } from "../components/store/actions";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencil } from "@fortawesome/free-solid-svg-icons";
import { HomeStyle, FormHome } from "../styles/Home";

function Home({ products, dispatch }) {
  const [allProducts, setAllProducts] = useState([]);
  const { form, onChange } = useForm({});

  React.useEffect(() => {
    (async () => {
      const response = await (await products).data;
      setAllProducts(response);
    })();
  }, [products]);

  React.useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  const renderProducts = () => {
    let copyProducts = [...allProducts];

    if (form.name) {
      copyProducts = copyProducts.filter(({ name }) =>
        name.toLowerCase().includes(form.name)
      );
    }

    if (form.category) {
      copyProducts = copyProducts.filter(({ category }) =>
        category.toLowerCase().includes(form.category)
      );
    }

    if (form.max) {
      copyProducts = copyProducts.filter(({ price }) => +price <= +form.max);
    }

    if (form.min) {
      copyProducts = copyProducts.filter(({ price }) => +price >= +form.min);
    }

    if (form.order === "menor") {
      copyProducts = copyProducts.sort((a, b) => a.price - b.price);
    }
    if (form.order === "maior") {
      copyProducts = copyProducts.sort((a, b) => a.price - b.price).reverse();
    }

    const productsJSX = copyProducts?.map(
      ({ id, name, category, price, quantity }) => {
        return (
          <div key={id}>
            <p>
              Nome: <span>{name}</span>
            </p>
            <p>
              Categoria: <span>{category}</span>
            </p>
            <p>
              Preço:{" "}
              <span>
                {price.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
            </p>

            <p>
              Quantidade: <span>{quantity}</span>
            </p>

            <section>
              <Link href={"edit"}>
                <button onClick={() => dispatch(toggleId(id))}>
                  <FontAwesomeIcon icon={faPencil} />
                </button>
              </Link>
              <button>
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </section>
          </div>
        );
      }
    );

    return productsJSX;
  };

  return (
    <div>
      <Header route="/register" name="Registrar Produto" />

      <HomeStyle>
        <h1>Seus produtos!</h1>

        <FormHome>
          <h3>Meus Filtros:</h3>
          <section>
            <label htmlFor="name">
              <input
                onChange={onChange}
                name="name"
                type="text"
                placeholder="Nome  Ex: Oreo"
              />
            </label>

            <label htmlFor="category">
              <input
                onChange={onChange}
                name="category"
                type="text"
                placeholder="Categoria Ex: Biscoito"
              />
            </label>

            <label htmlFor="max">
              <input
                onChange={onChange}
                name="max"
                type="number"
                placeholder="Por Valor Maximo"
              />
            </label>

            <label htmlFor="min">
              <input
                onChange={onChange}
                name="min"
                type="number"
                placeholder="Por Valor Minimo"
              />
            </label>

            <select name="order" onChange={onChange}>
              <option value={"semOrder"}>Sem Ordenação</option>
              <option value="maior">Maior Valor</option>
              <option value="menor">Menor Valor</option>
            </select>
          </section>
        </FormHome>

        <section>{renderProducts()}</section>
      </HomeStyle>
    </div>
  );
}

export default connect((state) => ({ products: state.products }))(Home);
