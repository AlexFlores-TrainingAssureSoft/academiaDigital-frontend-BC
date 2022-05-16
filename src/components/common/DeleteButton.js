import { FaTrash } from "react-icons/fa";
import {Button} from '@mui/material';

const DeleteButton = () => {
  return (
    <Button 
      sx={{ m: 1 }}
      variant="contained" 
      size="small" 
      style={{
        backgroundColor: "#652341",
        color: "white"
      }} 
      startIcon={
        <FaTrash color="white"/>
      }
    >
      Delete
    </Button>
  )
}

export default DeleteButton;