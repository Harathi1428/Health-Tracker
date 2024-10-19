import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './View.css';

const View = () => {
    const [workouts, setWorkouts] = useState([]);
    const userId = localStorage.getItem('userId');
    console.log("vid",userId);
    // useEffect(() => {
    //     console.log("Initial Workouts:", workouts);
    //     const fetchData = async () => {
    //         try {
    //             const resp = await axios.get('http://localhost:3001/workouts');
    //             setWorkouts(resp.data);
    //         } catch (err) {
    //             console.error(err); 
    //         }
    //     };
    //     fetchData();
    // }, []);
    
    useEffect(() => {
        console.log("useEffect", userId);
        if (userId) {
            axios.get(`hhttps://health-tracker-2.onrender.com/workouts/${userId}`)
                .then(response => {
                    console.log(response.data,userId);
                    setWorkouts(response.data);
                })
                .catch(err => {
                    console.log("Error fetching workouts:", err);
                });
        }
    }, [userId]);
    
    return (
        <div className="workout-list">
           <div className='hh'><h1>Workouts</h1></div>
            <div className='wk'>
            {workouts.length > 0 ? (
                workouts.map((workout, index) => (
                    <div key={index} className="workout-card">
                        <h3>Workout on {new Date(workout.selectedDate).toLocaleDateString()}</h3>
                        <p>Steps: {workout.Steps}</p>
                        <p>Calories Burned: {workout.Calories}</p>
                        <p>Distance Covered: {workout.Distance}</p>
                        <p>Weight: {workout.Weight}</p>
                    </div>
                ))
            ) : (
                <p>No workouts loaded..!</p>
            )}
            </div>
        </div>
    );
};

export default View;

