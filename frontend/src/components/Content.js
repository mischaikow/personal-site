import { useState, useEffect } from "react"
import { Switch, Route } from "react-router-dom"
import Homepage from './Homepage.js'
import Blog from './Blog.js'
import ContactForm from './ContactForm.js'
import NotFound from './NotFound.js'

const Content = () => {
    const [ userAlert, setUserAlert ] = useState('')

    const contentStyle = {
        backgroundColor: "#f7ebec",
        padding: "1rem",
        margin: "0 auto",
    }

    useEffect(() => {
        setUserAlert(null)
    }, [])

    return (
        <div style={contentStyle}>
            <Switch>
                <Route path="/blog" component={Blog} />
                <Route
                    path="/contact"
                    render={(props) => (
                        <ContactForm {...props} userAlert={userAlert} setUserAlert={setUserAlert} />
                    )}
                />
                <Route exact path={["/", "/home"]} component={Homepage} />
                <Route component={NotFound} />
            </Switch>
        </div>
    );
}

export default Content;