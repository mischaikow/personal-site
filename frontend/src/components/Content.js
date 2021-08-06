import Homepage from './Homepage.js'
import ContactForm from './ContactForm.js'

const Content = ({ page }) => {
    const contentStyle = {
        backgroundColor: "#f7ebec",
        padding: "1rem",
        margin: "0 auto",
    }

    if (page.page === 'home') {
        return (
            <div style={contentStyle}>
                <Homepage />
            </div>
        )
    } else if (page.page === 'blog') {
        return (
            <div style={contentStyle}>
                <div class="container">
                    <h2>Coming soon!</h2>
                </div>
            </div>
        )
    } else if (page.page === 'contact') {
        return (
            <div style={contentStyle}>
                <ContactForm />
            </div>
        )
    }
}

export default Content;