import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import CardList from './containers/card-list';
import 'tachyons';

ReactDOM.render(<CardList />, document.getElementById('root'));
registerServiceWorker();
