import React from "react";
import axios from "axios";

import Link from "next/link";

import { toggleId } from "../store/actions";

import { BASE_URL } from "../../constants/urls";

import { getAllProducts } from "../../components/store/actions";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencil } from "@fortawesome/free-solid-svg-icons";

const ProductsCard = ({ products, dispatch }) => {
  const { id, name, category, price, quantity } = products;

  const deleteProduct = async (id) => {
    await axios.delete(`${BASE_URL}/deleteProduct/${id}`);
    dispatch(getAllProducts());
  };

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
        <Link href={"edit"}>
          <button onClick={() => dispatch(toggleId(id))}>
            <FontAwesomeIcon icon={faPencil} />
          </button>
        </Link>
        <button onClick={() => deleteProduct(id)}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </section>
    </div>
  );
};

export default ProductsCard;
