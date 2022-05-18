import { useLocation } from 'react-router-dom';
import CreateUpdateTrainee from "../../components/trainee/TraineeCreateUpdate";

const TraineeCreateUpdate = (props) => {
  const trainee = useLocation().state;
  return <CreateUpdateTrainee trainee={trainee}/>
}

export default TraineeCreateUpdate;