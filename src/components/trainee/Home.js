import React, { useEffect, useState} from "react";
import axios from 'axios';
import TraineeList from "./TraineeList";

const Home = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://academia-digital-api-ms.azurewebsites.net/api/v1/GetAll')
    .then( (response) => {
      setData(response.data);    
    })
    .catch(error => {
      console.log("ERROR: ",error);
    })
  },[]);

  const filter = (list) => {
    setData(list)
  }

  return(
    <TraineeList trainees={data} filter={filter}/>
  );
}

export default Home;