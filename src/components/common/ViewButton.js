import { Button } from "@mui/material";

const ViewButton = (props) => {
  return (
    <Button
      onClick={props.onClick}
      type={props.type}
      sx={{ m: 1 }}
      variant="contained"
      size={props.size}
      fullWidth={props.fullWidth && true}
      style={{
        backgroundColor: props.color,
        color: "white",
      }}
      startIcon={props.icon && <props.icon color="white" />}
    >
      {props.children}
    </Button>
  );
};

export default ViewButton;
