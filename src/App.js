import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Dashboard from "./Pages/Dashbard";
import Details from "./Pages/Details";
import Chat from "./Components/Chat";

function App() {
  return (
   <Router>
     <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/details/:id" element={<Details/>} />
        <Route path="/chatbox" element={<Chat />}/>

      </Routes>
     </div>
   </Router>
  );
}

export default App;
