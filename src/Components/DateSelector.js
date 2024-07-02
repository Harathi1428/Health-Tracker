
import React,{useState} from 'react';
import axios from 'axios';
// import {  useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'
import './DateSelector.css';


const DateSelector = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [Steps,setSteps]=useState('')
    const [Calories,setCalories]=useState('')
    const [Distance,setDistance]=useState('')
    const [Weight,setWeight]=useState('')
    const [state,setState]=useState('show');
    // const navigate=useNavigate()
    const handleDateChange = (event) => {
      setSelectedDate(event.target.value);
    };
    const handleClose = () => {
      setState('show');
      // setDateValue('');
    };


const handleSubmit = (event) => {
  const userId=localStorage.getItem('userId');
  event.preventDefault();
  alert(`Form submitted with date: ${selectedDate}`);
  axios.post('http://localhost:3001/worker',{Steps,Calories,Distance,Weight,selectedDate,userId})
  .then(result=>{console.log(result)
      setSteps('')
      setCalories('')
      setDistance('')
      setWeight('')
      // setDateValue('');
    //  navigate('/Works')
  })
  .catch(err=>{console.log("NEW ERROR",err)
})
};
  
    return (
      <div className="main">
        {state ==='show'?
      <div className="date">
          <h4>Select Date to add workout:</h4>
          <input type="date" value={selectedDate} onChange={handleDateChange} />
          {
          selectedDate ? (
              <button onClick={()=>setState(false)}>Add Workout</button>
          ) : (
            <button onClick={() => alert('Please select a date first.')}>Add Workout</button>
          )}
          <Link to="/workouts" ><button>View Workouts</button></Link>
      </div>:
    <form onSubmit={handleSubmit}>
      <div className='main2'>
      <h4>Workout on {selectedDate}</h4><br></br>
      <div className='f1'>
         <h4> Steps:</h4>
          <input type="text" value={Steps} onChange={(e)=>{setSteps(e.target.value)}} required />
      </div>
      <div className='f1'>
          <h4>Calories Burned:</h4>
          <input type="text" value={Calories} onChange={(e)=>{setCalories(e.target.value)}} required />
      </div>
      <div className='f1'>
          <h4>Distance Covered:</h4>
          <input type="text" value={Distance} onChange={(e)=>{setDistance(e.target.value)}} required />
      </div>
      <div className='f1'>
          <h4>weight:</h4>
          <input type="text" value={Weight} onChange={(e)=>{setWeight(e.target.value)}} required />
      </div>
      <div className='btns'>
      <button type="submit">Add</button>
      <button type="button" onClick={handleClose}>Close</button></div>
      </div>
    </form>}
  </div>
    );
  };
  
  export default DateSelector;