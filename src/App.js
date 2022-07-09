import Newproduct from "./pages/Newproduct";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { Route, Routes } from "react-router-dom";
import Container from "./components/layout/Container";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/addproduct" element={<Newproduct />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
