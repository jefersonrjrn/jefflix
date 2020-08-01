import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  tableContainer: {
    margin: 15,
  },
  table: {
    minWidth: 650,
    background: 'black',
    border: 'solid red',
  },
  cells: {
    color: 'white',
  },
});

function createData(name, calories, fat, carbs, protein) {
  return {
    name, calories, fat, carbs, protein,
  };
}

const rows = [
  createData('League of Legends', 159, 6.0, 24, 4.0),
  createData('CS:GO', 237, 9.0, 37, 4.3),
  createData('Música', 262, 16.0, 24, 6.0),
  createData('Filmes', 305, 3.7, 67, 4.3),
  createData('Games', 356, 16.0, 49, 3.9),
  createData('Nerdcast Stories', 356, 16.0, 49, 3.9),
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.cells}>Categoria</TableCell>
            <TableCell align="right" className={classes.cells}>Descrição</TableCell>
            <TableCell align="right" className={classes.cells}>Editar</TableCell>
            <TableCell align="right" className={classes.cells}>Remover</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row" className={classes.cells}>
                {row.name}
              </TableCell>
              <TableCell align="right" className={classes.cells}>{row.calories}</TableCell>
              <TableCell align="right" className={classes.cells}>{row.fat}</TableCell>
              <TableCell align="right" className={classes.cells}>{row.carbs}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
