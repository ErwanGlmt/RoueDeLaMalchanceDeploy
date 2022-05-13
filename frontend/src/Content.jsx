import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Animals from "./pages/Animals";
import AnimalList from "./pages/AnimalList";

export default function Content() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Animals/:id" element={<Animals />} />
        <Route path="/AnimalList" element={<AnimalList />} />
      </Routes>
    </div>
  );
}
