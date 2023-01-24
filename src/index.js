import React from 'react';

import App from './routes/App';

// ESTO YA NO FUNCIONA
// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// );

//AHORA ES ASI
import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App tab="home" />);