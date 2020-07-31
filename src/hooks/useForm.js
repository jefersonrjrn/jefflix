import { useState } from 'react';

function useForm(valoresIniciais) {
  const [values, setValues] = useState(valoresIniciais); // desestruturação

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleChange(infosDoEvento) {
    setValue(
      infosDoEvento.target.getAttribute('name'),
      infosDoEvento.target.value,
    );
  }

  function clearForm() {
    setValue(valoresIniciais);
  }

  return {
    values,
    handleChange,
    clearForm,
  };
}

export default useForm;
