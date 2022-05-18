import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TraineeScreen from '../screens/trainee/TraineeListScreen';
import TraineeCreateScreen from '../screens/trainee/TraineeCreateScreen';
import TraineeUpdateScreen from '../screens/trainee/TraineeUpdateScreen';
import NavBar from '../components/common/NavBar';
import Home from '../components/common/Home';

const Layout = () => {
  return (
    <Router>
      <NavBar />
      <div>
        <Routes>
          <Route exact path="/" element={ <Home /> } />
          <Route exact path="/listTrainee" element={ <TraineeScreen /> } />
          <Route exact path="/createTrainee" element={ <TraineeCreateScreen /> } />
          <Route exact path="/updateTrainee" element={ <TraineeUpdateScreen /> } />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default Layout;
