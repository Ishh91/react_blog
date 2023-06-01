import Topbar from "./components/Topbar/Topbar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Home from "./pages/Home/Home";
import { BrowserRouter as Routes, Route, Router } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
function App() {
  const currentUser = true;
  return (
   <Router>
    <Topbar/>
    <Routes>
      <Route index element={<Home/>}/>

      
    </Routes>
   </Router>
  );
}
export default App;
