import React from 'react';
import {render} from 'react-dom';
import Media from './src/playlist/components/media'
//console.log('Hola mundo!');
const app = document.getElementById('app')
//const holamundo = <h1>hola mundo!</h1>

//ReactDOM.render(que voy a renderizar, donde lo hare)
//ReactDOM.render(<Media />, app)
render(<Media />, app)