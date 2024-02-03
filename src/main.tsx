import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import ThemeCustomization from './theme/index.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ThemeCustomization>
      <App />
    </ThemeCustomization>
  </BrowserRouter>
);
