import { Formik , ErrorMessage } from 'formik';
import {Input, Button} from '@mui/material'
const TraineeForm = (trainee, functionparaguardar) => {
  return(
    <Formik
    initialValues = {{}} //aqui va los valores iniciales que llegarian por parametro
    //validationSchema = {ProductSchema}
    enableReinitialize= {true}
    onSubmit= {(values, actions) => {
      actions.resetForm();
      //saveProduct(values);
      //navigate('/');
    }}
    >
      {(props) => (
        <form className="m-3" onSubmit={props.handleSubmit} >
          <label className="form-label">Nombre del Producto</label>
          <Input
            className="form-control"
            id="firstName"
            type="text"
            name="firstName"
            onChange={props.handleChange}
            value={props.values.firstName}
            onBlur={props.handleBlur('firstName')}
          />
          <br></br>
          <Button type="submit" variant="contained" size="small" color="success" > Guardar </Button>
        </form>
      )}
    </Formik>
  )
}

export default TraineeForm;