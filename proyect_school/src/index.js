/* Libraries */
import React from 'react';
import { createRoot } from 'react-dom/client';

/* Components */
import { App } from './App';

/* StyleSheet */
import './index.scss'

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App style={{overflow: "hidden"}}/>);
