

const ContactForm = () => {


    return (
        <div>
            <form>
                <div>
                    <label for="emailInput">Your e-mail</label>
                    <input class="u-full-width" type="email" placeholder="email@email.com" id="emailInput" />
                </div>
                <div>
                    <label for="subject">Subject</label>
                    <input class="u-full-width" type="subject" placeholder="Subject" id="subject" />
                </div>
                <div>
                    <label for="message">Message</label>
                    <textarea class="u-full-width" placeholder="Message" id="message"></textarea>
                </div>
                <div>
                    <input class="submit" type="submit" value="Submit" />
                </div>
            </form>
        </div>
    )
}

export default ContactForm;