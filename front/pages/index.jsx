import React from "react";
import axios from "axios";

import { BASE_URL } from "../constants/urls";

import Header from "../components/Header";

import { HomeStyle } from "../styles/Home";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencil } from "@fortawesome/free-solid-svg-icons";

export async function getStaticProps() {
  const products = await (await axios.get(`${BASE_URL}/products`)).data;

  return {
    props: { products },
  };
}

export default function Home({ products }) {
  const renderProducts = () => {
    const productsJSX = products.map(({ name, category, price, quantity }) => {
      return (
        <div>
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
            <button>
              <FontAwesomeIcon icon={faPencil} />
            </button>
            <button>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </section>
        </div>
      );
    });

    return productsJSX;
  };

  return (
    <>
      <Header route="/register" name="Registrar Produto" />

      <HomeStyle>
        <h1>Seus produtos!</h1>

        <section>{renderProducts()}</section>
      </HomeStyle>
    </>
  );
}
