import { useState } from 'react'
import ServerComm from '../services/BackendComm.js'

const ContactForm = () => {
    const [ message, setMessage ] = useState({
        email: "",
        subject: "",
        message: "",
    })
    
    const sendMessage = (event) => {
        event.preventDefault()
        ServerComm.sendContact(message)
        console.log('message submitted', event.target)
    }

    const handleStateChange = (event) => {
        setMessage((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }));
    }

    return (
        <div>
            <form onSubmit={sendMessage}>
                <div>
                    <label for="emailInput">Your e-mail</label>
                    <input
                        class="u-full-width" type="email"
                        name="email" placeholder="email@email.com"
                        value={message.email} onChange={handleStateChange}
                    />
                </div>
                <div>
                    <label for="subject">Subject</label>
                    <input 
                        class="u-full-width" type="subject"
                        name="subject" placeholder="Subject"
                        value={message.subject} onChange={handleStateChange}
                    />
                </div>
                <div>
                    <label for="message">Message</label>
                    <textarea
                        class="u-full-width"
                        name="message" placeholder="Message"
                        value={message.text} onChange={handleStateChange} >
                    </textarea>
                </div>
                <div>
                    <input class="submit" type="submit" value="Submit" />
                </div>
            </form>
        </div>
    )
}

export default ContactForm;