import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Suppliers from "./pages/Suppliers";
import Inventory from "./pages/Inventory";
import RiskAnalysis from "./pages/RiskAnalysis";
import WhatIf from "./pages/WhatIf";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div>
      <Navbar setPage={setPage} />

      {page === "home" && <Home />}
      {page === "suppliers" && <Suppliers />}
      {page === "inventory" && <Inventory />}
      {page === "risk" && <RiskAnalysis />}
      {page === "whatif" && <WhatIf />}
    </div>
  );
}

export default App;