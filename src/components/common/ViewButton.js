//import { MdPageview } from "react-icons/md";
import {Button} from '@mui/material';

const ViewButton = (props) => {
  return (
    <Button 
      onClick={props.onClick}
      sx={{ m: 1 }}
      variant="contained" 
      size="small" 
      style={{
        backgroundColor: props.color,
        color: "white"
      }} 
      startIcon={
        <props.icon color="white"/>
      }>
      {props.children}
    </Button>
  )
}

export default ViewButton;