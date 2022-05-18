import { Formik } from 'formik';
import { Input, TextField  } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import ViewButton from '../common/ViewButton';

const TraineeForm = ({saveTrainee, trainee}) => {
  const navigate = useNavigate();

  const { firstName, lastName, email, address, mobile, headTrainer, group, feedback, guid } = trainee;

  return(
    <Formik
    initialValues = {{ firstName, lastName, email, address, mobile, headTrainer, group, feedback, guid }} //aqui va los valores iniciales que llegarian por parametro
    //validationSchema = {TraineeSchema}
    enableReinitialize= {true}
    onSubmit= {(values, actions) => {
      actions.resetForm();
      saveTrainee(values);
      navigate('/listTrainee');
    }}
    >
      {(props) => (  
        <form className="m-3" onSubmit={props.handleSubmit} 
          style={{ width: "100%",   marginTop: 50}}>
          <h2 style={{textAlign: "center"}}>REGISTER OF TRAINEES</h2>
          <div style={{display: "flex", alignItems: "center", justifyContent:"center" }}>
            <TextField
              className="form-control"
              id="firstName"
              type="text"
              name="firstName"
              onChange={props.handleChange}
              value={props.values.firstName}
              onBlur={props.handleBlur("firstName")}
              label="First name"
              focused
              style={{ width: "40%", margin:10}}
              placeholder="Enter firs name"
            />
            <TextField
              className="form-control"
              id="lastName"
              type="text"
              name="lastName"
              onChange={props.handleChange}
              value={props.values.lastName}
              onBlur={props.handleBlur("lastName")}
              label="Last name"
              focused
              style={{ width: "40%", margin:10 }}
              placeholder="Enter last name"
            />
          </div>
          <div style={{display: "flex", alignItems: "center", justifyContent:"center" }}>
            <TextField
              className="form-control"
              id="email"
              type="text"
              name="email"
              onChange={props.handleChange}
              value={props.values.email}
              onBlur={props.handleBlur("email")}
              label="Email"
              focused
              style={{ width: "40%", margin:10 }}
              placeholder="Enter email"
            />
            <TextField
              className="form-control"
              id="address"
              type="text"
              name="address"
              onChange={props.handleChange}
              value={props.values.address}
              onBlur={props.handleBlur("address")}
              label="Address"
              focused
              style={{ width: "40%", margin:10 }}
              placeholder="Enter address"
            />
          </div>
          <div style={{display: "flex", alignItems: "center", justifyContent:"center" }}>
            <TextField
              className="form-control"
              id="mobile"
              type="text"
              name="mobile"
              onChange={props.handleChange}
              value={props.values.mobile}
              onBlur={props.handleBlur("mobile")}
              label="Mobile"
              focused
              style={{ width: "40%", margin:10 }}
              placeholder="Enter phone number"
            />
            <TextField
              className="form-control"
              id="headTrainer"
              type="text"
              name="headTrainer"
              onChange={props.handleChange}
              value={props.values.headTrainer}
              onBlur={props.handleBlur("headTrainer")}
              label="Head Trainer"
              focused
              style={{ width: "40%", margin:10 }}
              placeholder="Enter head trainer"
            />
          </div>
          <div style={{display: "flex", alignItems: "center", justifyContent:"center" }}>
            <TextField 
              className="form-control"
              id="group"
              type="text"
              name="group"
              onChange={props.handleChange}
              value={props.values.group}
              onBlur={props.handleBlur("group")}
              focused
              style={{ width: "40%", margin:10 }}
              label="Team"
              placeholder="Enter team"
            />
            <TextField 
              className="form-control"
              id="feedback"
              type="text"
              name="feedback"
              onChange={props.handleChange}
              value={props.values.feedback}
              onBlur={props.handleBlur("feedback")}
              focused
              style={{ width: "40%", margin:10 }}
              label="Feedback"
              placeholder="Enter feedback"
              multiline={true}
            />
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent:"center", marginInline: "8%" }}>
            <ViewButton type="submit" color="#045bc3" fullWidth={true} >Save</ViewButton>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default TraineeForm;
