import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Payment from "./Payment";
import Completion from "./Completion";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Payment />} />
          <Route path="/completion" element={<Completion />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
