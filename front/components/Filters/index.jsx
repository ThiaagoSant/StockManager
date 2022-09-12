import React from "react";

import { FormHome } from "../../styles/Home";

function Filters({ onChange }) {
  return (
    <>
      
      <FormHome>
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
    </>
  );
}

export default Filters;
