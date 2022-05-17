import React, { useEffect, useState} from "react";
import axios from 'axios';
import TraineeList from "./TraineeList";

const TraineeHomeList = () => {

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

  const updateList = (data) => {
    setData(data);
  }

  return(
    <TraineeList trainees={data} updateList={updateList}/>
  );
}

export default TraineeHomeList;