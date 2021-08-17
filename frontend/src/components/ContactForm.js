import { useState } from 'react'
import ServerComm from '../services/BackendComm.js'
import Notification from '../services/Notification.js'

const ContactForm = ({ userAlert, setUserAlert }) => {
    const [ message, setMessage ] = useState({
        email: "",
        subject: "",
        text: "",
    })
    
    const sendMessage = (event) => {
        event.preventDefault()
        ServerComm
            .sendContact(message)
            .then(response => {
                setUserAlert(response)
                setTimeout(() => {
                    setUserAlert(null)
                }, 2000)
            })
            .then(
                setMessage({
                    email: "",
                    subject: "",
                    text: "",
                })
            )
    }

    const handleStateChange = (event) => {
        setMessage((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value,
        }));
    }

    return (
        <div>
            <Notification message={userAlert} />
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
                        name="text" placeholder="Message"
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