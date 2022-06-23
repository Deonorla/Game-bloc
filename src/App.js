import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Dashboard from "./Pages/Dashbard";
import Details from "./Pages/Details";
import Hooks from "./Pages/Hooks";
function App() {
  return (
   <Router>
     <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/details" element={<Details/>} />
        <Route path="/hooks" element={<Hooks />}/>

      </Routes>
     </div>
   </Router>
  );
}

export default App;
