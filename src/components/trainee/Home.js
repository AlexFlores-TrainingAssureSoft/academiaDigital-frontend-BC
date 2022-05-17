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

  return(
    <TraineeList trainees={data} />
  );
}

export default Home;
