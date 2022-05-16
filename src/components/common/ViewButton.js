import { MdPageview } from "react-icons/md";
import {Button} from '@mui/material';

const ViewButton = () => {
  return (
    <Button 
      sx={{ m: 1 }}
      variant="contained" 
      size="small" 
      style={{
        backgroundColor: "#045bc3",
        color: "white"
      }} 
      startIcon={
        <MdPageview color="white" 
        />
      }>
      View
    </Button>
  )
}

export default ViewButton;