import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './Component/Home/Home';


const App = () => {
  return (
    <div>
     <BrowserRouter>
      <Route path ='/' exact><Home/></Route>
     </BrowserRouter>
    </div>
  )
}

export default App
