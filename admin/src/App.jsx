import { Route, Routes } from "react-router";
import "./App.css";
import Logo from "./components/Logo";
import Profile from "./components/Profile";
import Sidebar from "./components/Sidebar";
import Main from "./pages/Main";
import Add from "./pages/Add";
import List from "./pages/List";
import Orders from "./pages/Orders";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="px-10">
      <div className="grid_layout">
        <Logo />
        <Profile />
        <Sidebar />

        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="/add" element={<Add />} />
            <Route path="/list" element={<List />} />
            <Route path="/order" element={<Orders />} />
          </Route>
        </Routes>
        <Toaster />
      </div>
    </div>
  );
}

export default App;
