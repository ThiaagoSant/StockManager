import React from "react";

const Form = ({ handleSubmit, onChange, form, title, nameBtn }) => {
  return (
    <form onSubmit={handleSubmit}>
      <h1>{title} seu produto!</h1>
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

      <button type="submit">{nameBtn}</button>
    </form>
  );
};

export default Form;
