import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '../Button';
import categoriasRepository from '../../repositories/categorias';

const useStyles = makeStyles({
  tableContainer: {
    margin: 15,
  },
  table: {
    minWidth: 650,
    background: 'black',
    border: 'solid red',
  },
  headCells: {
    color: 'white',
    fontSize: 27,
  },
  cells: {
    color: 'white',
    fontSize: 15,
  },
});

export default function SimpleTable() {
  const classes = useStyles();
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://jefflix1.herokuapp.com/categorias';

    fetch(URL)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });
  }, []);

  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.headCells}>Categoria</TableCell>
            <TableCell align="left" className={classes.headCells}>Descrição</TableCell>
            <TableCell align="center" className={classes.headCells}>Editar</TableCell>
            <TableCell align="center" className={classes.headCells}>Remover</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categorias.map((categoria) => (
            <TableRow key={categoria.id}>
              <TableCell className={classes.cells}>{categoria.titulo}</TableCell>
              <TableCell align="left" component="th" scope="row" className={classes.cells}>{categoria.descricao}</TableCell>
              <TableCell align="center" component="th" scope="row" className={classes.cells}>
                <Button>Editar</Button>
              </TableCell>
              <TableCell align="center" component="th" scope="row" className={classes.cells}>
                <Button onClick={() => {
                  categoriasRepository.remove(categoria.id);

                  categoriasRepository
                    .getAll()
                    .then((categoriasFromServer) => {
                      setCategorias(categoriasFromServer);
                    });
                }}
                >
                  Excluir
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
