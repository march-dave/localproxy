import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios'

axios.post('/api/contacts/', {name: 'lee', tel: '11111', address: 'seoul'}).then((response) => {
    console.log(response.data)
})

// axios.get('/api/contacts', {params: {pageno:1, name: '홍'}}).then( (response) => {
//     console.log(response);
// })

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
