import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ViewButton from './ViewButton';
import DeleteButton from './DeleteButton';
import Container from '@mui/material/Container';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#0c1c4c",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function CustomizedTables({headers, data}) {
  return (
    <Container>
    <TableContainer component={Paper} >
      <Table sx={{ minWidth: 400 }} aria-label="customized table" >
        <TableHead>
          <TableRow >
            {headers.map( (elelement, i) => {
              return(
                <StyledTableCell align="left" key={i}>{elelement}</StyledTableCell>
              )
            } )}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((element,i) => (
            <StyledTableRow key={i}>
              <StyledTableCell component="th" scope="row">
                {element.firstName}
              </StyledTableCell>
              <StyledTableCell align="left">
                {element.lastName}
              </StyledTableCell>
              <StyledTableCell align="left">
                {element.email}
              </StyledTableCell>
              <StyledTableCell align="left">
                {element.address}
              </StyledTableCell>
              <StyledTableCell align="left">
                {element.mobile}
              </StyledTableCell>
              <StyledTableCell align="left">
              <ViewButton />
              <DeleteButton />
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
  );
}
