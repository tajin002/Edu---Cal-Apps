import logo from './logo.svg';
import './App.css';
import {RouterProvider } from 'react-router-dom/dist';
import { router } from './Routes/Routes';

function App() {
  return (
    <div>
      <RouterProvider  router={router}/>
    </div>
  );
}

export default App;
