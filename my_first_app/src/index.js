import React from "react";
import { createRoot } from 'react-dom/client';

import { App } from './FirstApp'

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);