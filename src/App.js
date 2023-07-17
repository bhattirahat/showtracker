
import {BrowserRouter,Route,Routes} from 'react-router-dom'
//pages and components
import Home from './pages/Home';
import Navbar from './components/nav';
import AddSeries from './pages/AddSeries';


function App() {
  return (
    <div className="App">
    
     <BrowserRouter>
     <Navbar/>
     <div className='pages'>
      <Routes>
        <Route 
          path = "/"
          element = {<Home/>}>
        </Route>
        <Route
        path = "/add-serie"
        element = {<AddSeries/>}>  
        </Route>
      </Routes>
     </div>
     </BrowserRouter>
    </div>
  );
}

export default App;
