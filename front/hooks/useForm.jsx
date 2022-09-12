import React from "react";

const useForm = (initialState) => {
  const [form, setForm] = React.useState(initialState);
  const [event, setEvent] = React.useState({});

  const onChange = (e) => {
    const { name, value } = e.target;

    setForm((form) => ({
      ...form,
      [name]: name === "price" || name === "quantity" ? +value : value,
    }));
    setEvent(e);
  };

  const cleanFields = () => {
    setForm(initialState);
  };

  return {
    form,
    setForm,
    onChange,
    event,
    cleanFields,
  };
};

export default useForm;
