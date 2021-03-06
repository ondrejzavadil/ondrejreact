import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Clock from './Clock';
import ConditionalRedner from './ConditionalRedner';
import LoginControl from './LoginControl';
import Lists from './Lists';
import NameForm from './NameForm';
import EssayForm from './EssayForm';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<EssayForm />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();