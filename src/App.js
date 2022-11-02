import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPages";
import FeedbackPage from "./pages/FeedbackPage";
import AboutIcon from "./components/AboutIcon";
import { FeedbackProvider } from "./context/FeedbackContext";

const App = () => {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<FeedbackPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <AboutIcon />
      </Router>
    </FeedbackProvider>
  );
};

export default App;
