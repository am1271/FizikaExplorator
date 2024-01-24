import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./pages/Home";
import { Calculators } from "./pages/Calculators";
import { Lessons } from "./pages/Lessons";
import { Quiz } from "./pages/Quiz";
import { Navbar } from "./components/Navbar";
import "./App.css";
import { Footer } from "./components/Footer";
import LessonPage from "./components/LessonPage";

function App() {
  return (
    <BrowserRouter>
      <div className="flex-container">
        <div className="d-flex flex-column min-vh-100">
          <Navbar />
          <Container className="flex-grow-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/lessons" element={<Lessons />} />
              <Route path="/lessons/:id" element={<LessonPage />} />
              <Route path="/calculators" element={<Calculators />} />
              <Route path="/quiz" element={<Quiz />} />
            </Routes>
          </Container>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
