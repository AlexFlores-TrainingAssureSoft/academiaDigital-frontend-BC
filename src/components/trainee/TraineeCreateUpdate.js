import TraineeForm from "./TraineeForm"
import axios from 'axios';

const CreateUpdateTrainee = () => {
  const saveTrainee = (trainee) => {
    axios.post(`https://academia-digital-api-ms.azurewebsites.net/api/v1/PostNewTrainee?firstName=${trainee.firstName}&lastName=${trainee.lastName}&email=${trainee.email}&address=${trainee.address}&mobile=${trainee.mobile}&headTrainer=${trainee.headTrainer}&group=${trainee.group}&feedback=${trainee.feedback}`)
  .then(() => {
    console.log('Guardando Trainee', trainee.email)
  })
  .catch(error => console.log('error', error))
  }
  return (
    <TraineeForm saveTrainee={saveTrainee}/>
  )
}

export default CreateUpdateTrainee;
