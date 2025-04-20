import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import SubscriptionPage from "./pages/SubscriptionPage";
import Nav from "./components/NavBar/Nav";
import Movies from "./pages/Movies";
import Support from "./pages/Support";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <>
        <Nav />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/subscription" element={<SubscriptionPage />} />
          <Route path="/movies" element={<Movies />}/>
          <Route path="/support" element={<Support/>}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
