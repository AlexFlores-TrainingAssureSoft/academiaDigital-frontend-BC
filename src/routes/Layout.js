import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TraineeScreen from '../screens/trainee/TraineeListScreen';
import TraineeCreateScreen from '../screens/trainee/TraineeCreateScreen';
import TraineeDeatilScreen from '../screens/trainee/TraineeDetailScreen';
import NavBar from '../components/common/NavBar';
import HomeIni from '../components/common/Home';

const Layout = () => {
  return(
    <Router>
      <NavBar/>
      <div>
        <Routes>
          {/* <Route exact path="/" element={ <TraineeScreen /> } /> */}
          <Route exact path="/" element={ <HomeIni /> } />
          <Route exact path="/createTrainee" element={ <TraineeCreateScreen /> } />
          <Route exact path="/detailTrainee" element={ <TraineeDeatilScreen /> } />
        </Routes>
      </div>
    </Router>
  );
}

export default Layout;