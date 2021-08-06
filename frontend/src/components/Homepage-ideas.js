import '../css/Homepage.css'
import linkedinImg from '../icons/LI-In-Bug.png'
import githubImg from '../icons/GitHub-Mark-64px.png'
import downloadImg from '../icons/download-icon-614x460.png'

const Homepage = () => {

    return (
        <>
            <h1>Chris Mischaikow</h1>
            <h4>Aspiring software developer with a background in data science and economics, entrepreneurial experience and 8 years of practice programming in professional environments.</h4>
            <div id="navcontainer">
            <ul id="navlist">
                <li>
                    <a href="https://linkedin.com/in/mischaikow/" title="LinkedIn"><img class="icon-linkedin" src={linkedinImg} />LinkedIn</a>
                </li>
                <li>
                    <a href="https://github.com/mischaikow/" title="GitHub"><img class='icon-github' src={githubImg} />Github</a>
                </li>
                <li>
                    <a href="https://github.com/mischaikow/" title="Resume"><img class='icon-download' src={downloadImg} />Resume</a>
                </li>
            </ul>
            </div>
        </>
    )
}

export default Homepage;