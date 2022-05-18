<<<<<<< HEAD
import TraineeForm from "./TraineeForm";
import axios from "axios";

const CreateUpdateTrainee = () => {
  const saveTrainee = (trainee) => {
    axios.post(
      `https://academia-digital-api-ms.azurewebsites.net/api/v1/PostNewTrainee?firstName=${trainee.firstName}&lastName=${trainee.lastName}&email=${trainee.email}&address=${trainee.address}&mobile=${trainee.mobile}&headTrainer=${trainee.headTrainer}&group=${trainee.group}&feedback=${trainee.feedback}`
    );
    //.then(() => {
    //  console.log('Guardando Trainee', trainee.email)
    //})
    //.catch(error => console.log('error', error))
  };
  return <TraineeForm saveTrainee={saveTrainee} />;
};
=======
import axios from 'axios';
import { api, type } from '../../constants/HttpRequest';
import TraineeForm from "./TraineeForm"

const CreateUpdateTrainee = (props) => {
  const newTrainee = {
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    mobile: '',
    headTrainer: '',
    group: '',
    feedback: '',
    guid: ''
  };

  const saveTrainee = ({ firstName, lastName, email, address, mobile, headTrainer, group, feedback, guid }) => {
    !guid ? axios.post(`${api.academiaDigitalUrl}${type.postTrainee}
    &firstName=${firstName}&lastName=${lastName}&email=${email}&address=${address}&mobile=${mobile}
    &headTrainer=${headTrainer}&group=${group}&feedback=${feedback}`)
    .then(() => console.info('Success'))
    .catch(error => console.warn('error', error)) :
    axios.post(`${api.academiaDigitalUrl}${type.putTrainee}
    guid=${guid}&firstName=${firstName}&lastName=${lastName}&email=${email}&address=${address}
    &mobile=${mobile}&headTrainer=${headTrainer}&group=${group}&feedback=${feedback}`)
    .then(() => console.info('Update Success'))
    .catch(error => console.log('error', error))
  }

  const trainee = props.trainee ? props.trainee : newTrainee;
  return (
    <TraineeForm saveTrainee={saveTrainee} trainee={trainee} />
  );
}
>>>>>>> origin

export default CreateUpdateTrainee;
