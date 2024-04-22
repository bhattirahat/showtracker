
import {BrowserRouter,Route,Routes} from 'react-router-dom'
//pages and components
import Home from './pages/Home';
import Navbar from './components/nav';
import AddSeries from './pages/AddSeries';
import CompletedSeries from './pages/Completed';
import AiringNow from './pages/AiringNow';
import AiringSoon from './pages/AiringSoon'

function App() {
  return (
    <div className="App">
    
     <BrowserRouter>
     <Navbar/>
     <div className='pages'>
      <Routes> 
        {/* rahat is teaching gitHub */}
          <Route 
            path = "/" 
            element = {<Home/>}>
          </Route>
          <Route
            path = "/add-serie"
            element = {<AddSeries/>}>  
          </Route>
          <Route
            path = "/complete"
            element = {<CompletedSeries/>}>
          </Route>
          <Route
            path = "/pause"
            element = {null}>  {/* TODO CREATE COMPONENT */}
          </Route>

          <Route
            path= "/airing-now"
            element = {<AiringNow/>}>
          </Route>
          <Route
            path= "/airing-soon"
            element = {<AiringSoon/>}>
          </Route>

          <Route
            path = "/watching"
            element = {null}> {/* TODO CREATE COMPONENT */}
          </Route>
          <Route
            path = "/dropped"
            element = {null}> {/* TODO CREATE COMPONENT */}
          </Route>
          <Route
            path = "/rewatching"
            element = {null}> {/* TODO CREATE COMPONENT */}
          </Route>
          <Route
            path = "/plantowatch"
            element = {null}> {/* TODO CREATE COMPONENT */}
          </Route>
          <Route
            path = "/announced"
            element = {null}> {/* TODO CREATE COMPONENT */}
          </Route>
          
      </Routes>
     </div>
     </BrowserRouter>
    </div>
  );
}

export default App;
