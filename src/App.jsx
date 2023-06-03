import Topbar from "./components/Topbar/Topbar"
import Home from "./pages/Home/Home";
import Write from "./pages/write/Write"
import Register from "./pages/register/Register"
import Login from "./pages/login/Login"
import Single from "./pages/single/Single"
import Settings from "./pages/settings/Settings"
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";

function App() {
  const currentUser = true;
  return (
   <Topbar/>
  );
}
export default App;
