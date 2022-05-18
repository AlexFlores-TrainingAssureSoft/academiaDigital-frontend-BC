import React, { useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {api, type} from '../../constants/HttpRequest';
import TraineeList from "./TraineeList";

const TraineeHomeList = () => {
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${api.academiaDigitalUrl}${type.getAllTrainees}`)
    .then( (response) => {
      setData(response.data);    
    })
    .catch(error => {
      console.log("ERROR: ",error);
    })
  },[]);

  const updateList = (data) => {
    setData(data);
  };

  const updateTrainee = (trainee) => {
    navigate('/updateTrainee', {state: trainee});
  }

  return(
    <TraineeList trainees={data} updateList={updateList} updateTrainee={updateTrainee} />
  );
}

export default TraineeHomeList;
