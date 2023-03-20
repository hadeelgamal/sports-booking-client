import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import React from 'react'

function CreateClassPage() {
    const [className, setClassName] = useState("")
    const [duration, setDuration] = useState("")
    const [date, setDate] = useState()
    const [timeOfDay, setTimeOfDay] = useState("")
    const [description, setDescription] = useState("")
    const [location, setLocation] = useState("")
    const [price, setPrice] = useState("")
    const [neededEquipment, setNeededEquipment] = useState("")

    const [errorMessage, setErrorMessage] = useState(undefined);
    const navigate = useNavigate();

    const handleClassName = (e) => setClassName(e.target.value);
    const handleDuration = (e) => setDuration(e.target.value);
    const handleDate = (e) => setDate(e.target.value);
    const handleTimeOfDay = (e) => setTimeOfDay(e.target.value);
    const handleDescription = (e) => setDescription(e.target.value);
    const handleLocation = (e) => setLocation(e.target.value);
    const handlePrice = (e) => setPrice(e.target.value);
    const handleNeededEquipment = (e) => setNeededEquipment(e.target.value);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const requestBody = {className, duration, date, timeOfDay, description, location, price, neededEquipment}
        const storedToken = localStorage.getItem('authToken');

        axios
        .post(`${process.env.REACT_APP_API_URL}/classes/create-class`, requestBody, {headers: {Authorization: `Bearer ${storedToken}`}})
        .then((response) => {
          navigate("/profile");
        })
        .catch((error) => {
          const errorDescription = error.response.data.message;
          setErrorMessage(errorDescription);
        });
    };
   
    

    
  return (
    <div>CreateClassPage</div>
  )
}

export default CreateClassPage