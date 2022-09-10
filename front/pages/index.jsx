import React, { useState } from "react";

import Header from "../components/Header";

import { HomeStyle } from "../styles/Home";

import Link from "next/link";

import { connect } from "react-redux";
import { toggleId } from "../components/store/actions";
import { getAllProducts } from "../components/store/actions";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencil } from "@fortawesome/free-solid-svg-icons";

function Home({ products, dispatch }) {
  const [allProducts, setAllProducts] = useState([]);

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
    const productsJSX = allProducts?.map(
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
    <>
      <Header route="/register" name="Registrar Produto" />

      <HomeStyle>
        <h1>Seus produtos!</h1>

        <section>{renderProducts()}</section>
      </HomeStyle>
    </>
  );
}

export default connect((state) => ({ products: state.products }))(Home);
