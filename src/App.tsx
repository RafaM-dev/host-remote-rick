import { Route, Routes } from "react-router";
import Home from "./features/home/Home";
import Layout from "./shared/components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<Layout />}>
        <Route path="/episodes" element={<div>Episodes Component</div>} />
      </Route>
    </Routes>
  );
}

export default App;
