import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Animals from "./pages/Animals";

export default function Content() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Animals/:id" element={<Animals />} />
      </Routes>
    </div>
  );
}
