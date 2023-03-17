import React from 'react'

function StudentProfile(props) {
  return (
    <div>
    <h1> Hello {props.profile.fullName} </h1>
    <h2>Your Booked Classes</h2>
    {props.profile.classes.map((singleClass) => {
        return (
            <div key={singleClass._id}>
            <h5>{singleClass.className}</h5>
            <p>{singleClass.description}</p>
             <p><b>Duration:</b> {singleClass.duration} min</p>
            <p><b>Date:</b> {singleClass.date}</p>
                <p><b>Attendees:</b> {singleClass.attendees.length}</p>
        
        
            <a href="/">View details</a>
          </div>
        )
        
    }

    )}
</div>
  )
}

export default StudentProfile