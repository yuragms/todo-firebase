import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { About } from "./pages/About.jsx";
import { Navbar } from "./components/Navbar.jsx";
import { Alert } from "./components/Alert";
import { AlertState } from "./context/alert/alertState";
import { FirebaseState } from "./context/firebase/FirebaseState";

function App() {
  return (
    <FirebaseState>
      <AlertState>
        <BrowserRouter>
          <Navbar />
          <div className="container pt-4">
            <Alert />
            <Routes>
              <Route path="/todo-firebase" element={<Home />} />
              <Route path="/todo-firebase/about" element={<About />} />
            </Routes>
          </div>
        </BrowserRouter>
      </AlertState>
    </FirebaseState>
  );
}

export default App;
