
import { render } from 'react-dom';
import React from 'react'
import App from './App';

render(<React.StrictMode><App /></React.StrictMode>, document.getElementById('root'))

if (import.meta.hot) {

  import.meta.hot.accept();
}