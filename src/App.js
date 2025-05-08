import Home from "./components/Home/Home";
import Message from "./components/Message/Message";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

const basename = process.env.NODE_ENV === "production" ? "/portfolio-react" : "";

function App() {
  return (
    <Router basename={basename}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/message" element={<Message />} />
      </Routes>
    </Router>
  );
}

export default App;
