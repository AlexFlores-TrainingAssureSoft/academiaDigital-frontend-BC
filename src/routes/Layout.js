import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TraineeScreen from '../screens/trainee/TraineeListScreen';
import TraineeCreateScreen from '../screens/trainee/TraineeCreateScreen';
import TraineeDeatilScreen from '../screens/trainee/TraineeDetailScreen';

const Layout = () => {
  return(
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={ <TraineeScreen /> } />
          <Route exact path="/createTrainee" element={ <TraineeCreateScreen /> } />
          <Route exact path="/detailTrainee" element={ <TraineeDeatilScreen /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default Layout;