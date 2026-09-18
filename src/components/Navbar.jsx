function Navbar({ setPage }) {
  return (
    <nav>
      <h2>SupplyShield AI 🤖</h2>

      <div>
        <button onClick={() => setPage("home")}>Dashboard</button>
        <button onClick={() => setPage("suppliers")}>Suppliers</button>
        <button onClick={() => setPage("inventory")}>Inventory</button>
        <button onClick={() => setPage("risk")}>Risk Analysis</button>
        <button onClick={() => setPage("whatif")}>What-If</button>
      </div>
    </nav>
  );
}

export default Navbar;