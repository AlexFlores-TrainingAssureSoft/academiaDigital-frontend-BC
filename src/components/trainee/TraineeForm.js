import { Formik } from "formik";
import { Input, Button } from "@mui/material";
import ViewButton from "../common/ViewButton";

const TraineeForm = ({ saveTrainee }) => {
  return (
    <Formik
      initialValues={{ firstName: "", lastName: "", email: "", address: "", mobile: "", headTrainer: "", group: "" }} //aqui va los valores iniciales que llegarian por parametro
      //validationSchema = {ProductSchema}
      enableReinitialize={true}
      onSubmit={(values, actions) => {
        //console.log('values ', values);
        actions.resetForm();
        saveTrainee(values);
        //navigate('/');
      }}
    >
      {(props) => (
        <form className="m-3" onSubmit={props.handleSubmit} style={{ marginTop: "10%", marginLeft: "40%" }}>
          <label className="form-label">Nombre</label>
          <br></br>
          <Input
            className="form-control"
            id="firstName"
            type="text"
            name="firstName"
            onChange={props.handleChange}
            value={props.values.firstName}
            onBlur={props.handleBlur("firstName")}
          />
          <br></br>
          <br></br>

          <label className="form-label">Apellido</label>
          <br></br>
          <Input
            className="form-control"
            id="lastName"
            type="text"
            name="lastName"
            onChange={props.handleChange}
            value={props.values.lastName}
            onBlur={props.handleBlur("lastName")}
          />
          <br></br>
          <br></br>

          <label className="form-label">Email</label>
          <br></br>
          <Input
            className="form-control"
            id="email"
            type="text"
            name="email"
            onChange={props.handleChange}
            value={props.values.email}
            onBlur={props.handleBlur("email")}
          />
          <br></br>
          <br></br>

          <label className="form-label">Direccion</label>
          <br></br>
          <Input
            className="form-control"
            id="address"
            type="text"
            name="address"
            onChange={props.handleChange}
            value={props.values.address}
            onBlur={props.handleBlur("address")}
          />
          <br></br>
          <br></br>

          <label className="form-label">Celular</label>
          <br></br>
          <Input
            className="form-control"
            id="mobile"
            type="text"
            name="mobile"
            onChange={props.handleChange}
            value={props.values.mobile}
            onBlur={props.handleBlur("mobile")}
          />
          <br></br>
          <br></br>

          <label className="form-label">Head trainer</label>
          <br></br>
          <Input
            className="form-control"
            id="headTrainer"
            type="text"
            name="headTrainer"
            onChange={props.handleChange}
            value={props.values.headTrainer}
            onBlur={props.handleBlur("headTrainer")}
          />
          <br></br>
          <br></br>

          <label className="form-label">Grupo</label>
          <br></br>
          <Input
            className="form-control"
            id="group"
            type="text"
            name="group"
            onChange={props.handleChange}
            value={props.values.group}
            onBlur={props.handleBlur("group")}
          />
          <br></br>
          <br></br>

          <ViewButton color="#0c1c4c"> Guardar </ViewButton>
        </form>
      )}
    </Formik>
  );
};

export default TraineeForm;
