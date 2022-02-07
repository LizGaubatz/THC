// import {Router} from "@reach/router";
// import './App.css';
// import {
//   BrowserRouter,
//   Switch,
//   Route
// } from "react-router-dom"
// import Home from './views/Admin';

// function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Switch>
//           <Route exact path="/users/getloggedinuser">
//             <Home />
//           </Route>
//           {/* <Route exact path="/pet/new">
//             <New />
//           </Route>
//           <Route exact path="/pet/edit/:id">
//             <Edit />
//           </Route>
//           <Route exact path="/pet/:id">
//             <Detail />
//           </Route> */}
//         </Switch>
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;


import './App.css';
// import Register from './components/Register';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import Nav from './views/Nav';
// import AddPage from './helpers/AddPage';
// import Register from './components/Register';
import Client from './views/Client';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route  path="/login">
            <Login></Login>
          </Route>
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          {/* <Route>
            <Nav path='/nav'></Nav>
          </Route> */}
          </Route>
          <Route path="/">
            <Client></Client>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;