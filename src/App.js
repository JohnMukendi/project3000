import logo from "./logo.svg";
import "./App.css";
import SignUp from "./SignUp";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import NotFound from "./components/404";
import Home from "./pages/Home";
import Content from "./pages/Content";
import NameContextProvider from "./contexts/NameContext";

function App() {
  const signedIn = false;

  return (
    <NameContextProvider>
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <nav>
              <Link to="/">Home </Link>
              <Link to="/signup">SignUp</Link>
              <Link to="/content">Content </Link>
            </nav>
          </header>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp name="John" />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/content"
            element={signedIn ? <Content /> : <SignUp />}
          />
        </Routes>
      </BrowserRouter>
    </NameContextProvider>
  );
}



export default App;
