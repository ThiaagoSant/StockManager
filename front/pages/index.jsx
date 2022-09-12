import React, { useState } from "react";

import useForm from "../hooks/useForm";
import Header from "../components/Header";
import Filters from "../components/Filters";
import ProductsCard from "../components/ProductsCard";

import { HomeStyle } from "../styles/Home";

import { connect } from "react-redux";
import { getAllProducts } from "../components/store/actions";
import Paginagion from "../components/Pagination";

function Home({ products, dispatch }) {
  const [allProducts, setAllProducts] = useState([]);
  const { form, onChange, event } = useForm({});

  const renderProducts = () => {
    let copyProducts = [...allProducts];

    const currentTarget = event?.target?.name;
    const isTyping = event?.target?.value;

    const isNameOrCategory =
      isTyping && (currentTarget === "name" || currentTarget === "category");
    const isMaxOrMin =
      isTyping && (currentTarget === "max" || currentTarget === "min");

    const isOrder = isTyping !== "semOrder" && currentTarget === "order";

    if (isNameOrCategory) {
      copyProducts = copyProducts.filter((product) => {
        const item = product[currentTarget];
        return item.toLowerCase().includes(form[currentTarget]);
      });
    }

    if (isMaxOrMin) {
      copyProducts = copyProducts.filter(({ price }) => {
        return +price <= +form[currentTarget];
      });
    }

    if (isOrder) {
      copyProducts = copyProducts.sort((a, b) =>
        isTyping === "menor" ? a.price - b.price : a.price + b.price
      );
    }

    const productsJSX = copyProducts?.map((products) => (
      <ProductsCard key={products.id} dispatch={dispatch} products={products} />
    ));

    return productsJSX;
  };

  React.useEffect(() => {
    (async () => {
      const response = await (await products)?.data;
      setAllProducts(response);
    })();
  }, [products]);

  React.useEffect(() => {
    dispatch(getAllProducts(1));
  }, []);

  return (
    <div>
      <Header route="/register" name="Registrar Produto" />

      <HomeStyle>
        <h1>Seus produtos!</h1>

        <Filters onChange={onChange} />

        <section>
          {allProducts?.length ? renderProducts() : "Sem produtos"}
        </section>
      </HomeStyle>

      <Paginagion dispatch={dispatch} getAllProducts={getAllProducts} />
    </div>
  );
}

export default connect((state) => ({ products: state.products }))(Home);
