import Nav from './Nav.js'
import './Contact.css';
function Contact(){
    return(
        <div className="contact1">
            <Nav/>
            <div className='contact'>
            <div class="contact-container">
        <h1>Contact Us</h1>
        <form>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required/>
            
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required/>
            
            <label for="subject">Subject:</label>
            <input type="text" id="subject" name="subject" required/>
            
            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
            
            <button type="submit">Submit</button>
        </form>
    </div>
    <div className='vec'>
        <img src="./images/work.jpg" alt="imag"/>
        </div>
        </div>
    </div>
    );
}
export default Contact;