import React from 'react';
import {BrowserRouter , Route , Routes} from "react-router-dom";
import ShowContact from './component/ShowContact';
import './App.css'
function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
       <Route>
          <Route path="/" element={<ShowContact />} />
       </Route>
     </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
