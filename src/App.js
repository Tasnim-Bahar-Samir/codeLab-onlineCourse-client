import { useContext } from 'react';
import {  Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { authContext } from './Contexts/UserContext';
import { router } from './Routes/Routes';

function App() {
  const {darkMode} = useContext(authContext)
  return (
    <div  data-theme ={darkMode?'dark':'light'} className="App">
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
