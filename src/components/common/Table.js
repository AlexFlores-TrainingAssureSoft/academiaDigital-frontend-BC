import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { IoArrowBack, IoCloseCircleSharp, IoCheckmarkCircle, IoSyncCircle, IoSearchCircleSharp, IoTrash } from "react-icons/io5"
import axios from 'axios';
import { api, type } from '../../constants/HttpRequest';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ViewButton from './ViewButton';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
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
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));


const TraneesDataTable = ({headers, data, updateList, updateTrainee}) => {
  const [currentTrainee, setCurrentTrainee] = useState(null);
  const [isVisibleDetails, setIsVisibleDetails] = useState(false);
  const [isVisibleDelete, setIsVisibleDelete] = useState(false);

  const showModalDetails = () => {
    return(
      currentTrainee && (
        <React.Fragment>
          <Modal open={isVisibleDetails} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Personal Information
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2, ml: 2 }}>
                Full name: {currentTrainee.firstName} {currentTrainee.lastName}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2, ml: 2 }}>
                Email: {currentTrainee.email}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2, ml: 2 }}>
                Address: {currentTrainee.address}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2, ml: 2 }}>
                Mobile: {currentTrainee.mobile}
              </Typography>
              <ViewButton color="#045bc3" icon={IoArrowBack} onClick={() => setIsVisibleDetails(false)}>
                Close
              </ViewButton>
            </Box>
          </Modal>
        </React.Fragment>
      )
    );
  };

  const showModalDelete = () => {
    return (
      <React.Fragment>
        <Modal
          open={isVisibleDelete}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Are you sure you want to delete?
            </Typography>
            <ViewButton 
              color="#045bc3" 
              icon={IoCheckmarkCircle} 
              onClick={() => { 
                axios.delete(`${api.academiaDigitalUrl}${type.deleteTrainee}uuid=${currentTrainee}`)
                .then(() => {
                  const filterList = data.filter((element) => element.guid !== currentTrainee )
                  updateList(filterList);
                })
                .catch(error => console.log("ERROR: ", error)); 
                setIsVisibleDelete(false)
                }}>
              Confirm
            </ViewButton>
            <ViewButton 
              color="#652341" 
              icon={IoCloseCircleSharp} 
              onClick={() => setIsVisibleDelete(false)}>
              Cancel
            </ViewButton>
          </Box>
        </Modal>
      </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      {showModalDetails()}
      {showModalDelete()}
      <Container>
        <h2>Trainees List</h2>
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
                    <ViewButton color="#045bc3" icon={IoSearchCircleSharp} onClick={() => { setCurrentTrainee(element); setIsVisibleDetails(true) }}>View</ViewButton>
                    <ViewButton color="#536766" icon={IoSyncCircle} onClick={() => updateTrainee(element)}>Update</ViewButton>
                    <ViewButton color="#652341" icon={IoTrash} onClick={() => { setCurrentTrainee(element.guid); setIsVisibleDelete(true) }}>Delete</ViewButton> 
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>    
      </Container>  
    </React.Fragment>
  );
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default TraneesDataTable;
