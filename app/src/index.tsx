import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Application from './App';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import * as serviceWorker from './serviceWorker';

// import 'app/node_modules/blueprintjs/core/lib/css/blueprint.css'
// import './nodblueprintjs/core/lib/css/blueprint.css';
// import '@blueprintjs/icons/lib/css/blueprint-icons.css';

const App = async () => {
    const client = await new ApolloClient({
        uri: 'http://localhost:4000'
    });
    return (
        <ApolloProvider client={client}>
            <Application />
        </ApolloProvider>
    )
}

const renderApp = async () => {
    ReactDOM.render(await App(), document.getElementById('root'));
}
renderApp();


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
