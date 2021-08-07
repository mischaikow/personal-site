import { Switch, Route } from "react-router-dom"
import Homepage from './Homepage.js'
import Blog from './Blog.js'
import ContactForm from './ContactForm.js'
import NotFound from './NotFound.js'

const Content = ({ page }) => {
    const contentStyle = {
        backgroundColor: "#f7ebec",
        padding: "1rem",
        margin: "0 auto",
    }

    return (
        <div style={contentStyle}>
            <Switch>
                <Route path="/blog" component={Blog} />
                <Route path="/contact" component={ContactForm} />
                <Route exact path={["/", "/home"]} component={Homepage} />
                <Route component={NotFound} />
            </Switch>
        </div>
    );
}

export default Content;