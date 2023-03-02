import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import NavBar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
