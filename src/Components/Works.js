import Nav from './Nav.js';
// import axios from 'axios';
import DateSelector from './DateSelector.js';
import './Works.css';
function Works(){

    return(
        <div className="works">
            <Nav/>
            <div className='dates'>
            <DateSelector />
            </div>
        </div>
    );
}
export default Works;