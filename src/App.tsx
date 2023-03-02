import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
