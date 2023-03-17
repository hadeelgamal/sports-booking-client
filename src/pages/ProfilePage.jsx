import React from 'react'
import axios from "axios";
import { useState, useEffect } from "react";
import InstructorProfile from "../components/InstructorProfile";
import StudentProfile from "../components/StudentProfile";

function ProfilePage() {
    const [profile, setProfile] = useState()

const getProfile = () =>{
    const storedToken = localStorage.getItem('authToken');
    axios
        .get(`${process.env.REACT_APP_API_URL}/auth/profile`, {headers: {Authorization: `Bearer ${storedToken}`}})
        .then((response)=>{
            console.log("response from profile: ", response.data);
            setProfile(response.data);
        })
        .catch((error) => console.log(error));

};

useEffect(() =>{
    getProfile();
}, []);

    return (
        
        <div>
            {profile && profile.role === "Instructor" ? <InstructorProfile profile={profile}/> : <StudentProfile profile={profile}/> } 
        </div>
      )
}


export default ProfilePage