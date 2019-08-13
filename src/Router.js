import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from './App';
import APIClient from './API/APIClient'

async function componentDidMount()
{
    this.apiClient = new APIClient();
}

function BasicExample() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Join</Link>
                    </li>
                    <li>
                        <Link to="/waiting">Waiting</Link>
                    </li>
                    <li>
                        <Link to="/topics">Topics</Link>
                    </li>
                </ul>

                <hr />

                <Route exact path="/" component={Join} />
                <Route path="/waiting" component={Waiting} />
                <Route path="/topics" component={Topics} />
            </div>
        </Router>
    );
}

function Join() {
    return (
        <div>
            <App/>
        </div>
    );
}

function Waiting() {
    return (
        <div>
            <h2>Waiting</h2>
        </div>
    );
}

function Topics({ match }) {
    return (
        <div>
            <h2>Topics</h2>
            <ul>
                <li>
                    <Link to={`${match.url}/rendering`}>Rendering with React</Link>
                </li>
                <li>
                    <Link to={`${match.url}/components`}>Components</Link>
                </li>
                <li>
                    <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
                </li>
            </ul>

            <Route path={`${match.path}/:topicId`} component={Topic} />
            <Route
                exact
                path={match.path}
                render={() => <h3>Please select a topic.</h3>}
            />
        </div>
    );
}

function Topic({ match }) {
    return (
        <div>
            <h3>{match.params.topicId}</h3>
        </div>
    );
}

export default BasicExample;
