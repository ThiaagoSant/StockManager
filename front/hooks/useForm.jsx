import React from "react";

const useForm = (initialState) => {
  const [form, setForm] = React.useState(initialState);

  const onChange = (e) => {
    const { name, value } = e.target;

    setForm((form) => ({
      ...form,
      [name]: name === "price" || name === "quantity" ? +value : value,
    }));

  };

  const cleanFields = () => {
    setForm(initialState);
  };

  return {
    form,
    setForm,
    onChange,
    cleanFields,
  };
};

export default useForm;
