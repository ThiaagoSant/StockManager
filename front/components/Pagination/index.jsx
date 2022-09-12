import React, { useState } from "react";
import axios from "axios";

import { BASE_URL } from "../../constants/urls";
import { Ul } from "./style";

function Paginagion({ getAllProducts, dispatch }) {
  const [allNuberPages, setAllNuberPages] = useState([]);
  const [seletedPage, setSeletedPage] = useState(null);

  const allPages = async () => {
    const numPages = await (await axios.get(`${BASE_URL}/products`)).data;

    setAllNuberPages(
      Array.from(
        { length: Math.ceil(numPages.length / 8) },
        (_, index) => ++index
      )
    );
  };
  const renderPagesNumbers = () => {
    const pagesNumbersJSX = allNuberPages.map((num) => {
      return (
        <li
          onClick={() => {
            setSeletedPage(num);
            dispatch(getAllProducts(num));
          }}
          key={num}
        >
          {num}
        </li>
      );
    });

    return pagesNumbersJSX;
  };

  React.useEffect(() => {
    allPages();
  }, []);

  return <Ul seletedPage={seletedPage}>{renderPagesNumbers()}</Ul>;
}

export default Paginagion;
