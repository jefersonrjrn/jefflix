import React from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import categoriasRepository from '../../../repositories/categorias';

function EditarCategoria() {
  const { id } = useParams();
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };
  const history = useHistory();
  const { handleChange, values, clearForm } = useForm(valoresIniciais);

  return (
    <PageDefault>
      <h1>
        Editar Categoria:
        {values.nome}
      </h1>

      <form
        onSubmit={function handleSubmit(infosDoEvento) {
          infosDoEvento.preventDefault(); // evita que a pagina recarregue

          categoriasRepository.edit({
            id,
            titulo: values.nome,
            descricao: values.descricao,
            cor: values.cor,
          })
            .then(() => {
              console.log('Editou a categoria com sucesso!');
              history.push('/cadastro/categoria');
            });

          clearForm();
        }}
      >

        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      <Link to="/">
        Ir para Home
      </Link>

    </PageDefault>

  );
}

export default EditarCategoria;
