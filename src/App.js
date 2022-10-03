import { BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import Dashboard from "./Pages/Dashbard";
import Details from "./Pages/Details";
import Chat from "./Components/Chat";
import Header from "./Components/Header";
import Chathome from './Components/Chathome';
import Home from './Pages/Home';
import "./App.css";

function App() {
  return (
   <Router>
      <>
      <Header/>
      </>
     <div className="app">
      <Dashboard />
      <Routes>
        <Route path="/" element={<Home/>} />
       
        <Route path="/chatbox" element={<Chat />}/>

      </Routes>

      <Chathome/>
     </div>
   </Router>
  );
}

export default App;



// simple login, logout and get greeting function

// import 'regenerator-runtime/runtime';
// import React from 'react';
//
// import './assets/global.css';
//
// import { EducationalText, SignInPrompt, SignOutButton } from './ui-components';
//
//
// export default function App({ isSignedIn, helloNEAR, wallet }) {
//     const [valueFromBlockchain, setValueFromBlockchain] = React.useState();
//
//     const [uiPleaseWait, setUiPleaseWait] = React.useState(true);
//
//     // Get blockchian state once on component load
//     React.useEffect(() => {
//         helloNEAR.getGreeting()
//             .then(setValueFromBlockchain)
//             .catch(alert)
//             .finally(() => {
//                 setUiPleaseWait(false);
//             });
//     }, []);
//
//     /// If user not signed-in with wallet - show prompt
//     if (!isSignedIn) {
//         // Sign-in flow will reload the page later
//         return <SignInPrompt greeting={valueFromBlockchain} onClick={() => wallet.signIn()}/>;
//     }
//
//     function changeGreeting(e) {
//         e.preventDefault();
//         setUiPleaseWait(true);
//         const { greetingInput } = e.target.elements;
//         helloNEAR.setGreeting(greetingInput.value)
//             .then(async () => {return helloNEAR.getGreeting();})
//             .then(setValueFromBlockchain)
//             .finally(() => {
//                 setUiPleaseWait(false);
//             });
//     }
//
//     return (
//         <>
//             <SignOutButton accountId={wallet.accountId} onClick={() => wallet.signOut()}/>
//             <main className={uiPleaseWait ? 'please-wait' : ''}>
//                 <h1>
//                     The contract says: <span className="greeting">{valueFromBlockchain}</span>
//                 </h1>
//                 <form onSubmit={changeGreeting} className="change">
//                     <label>Change greeting:</label>
//                     <div>
//                         <input
//                             autoComplete="off"
//                             defaultValue={valueFromBlockchain}
//                             id="greetingInput"
//                         />
//                         <button>
//                             <span>Save</span>
//                             <div className="loader"></div>
//                         </button>
//                     </div>
//                 </form>
//                 <EducationalText/>
//             </main>
//         </>
//     );
// }
