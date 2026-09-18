function Inventory() {
  return (
    <div className="inventory-page">
      <h1>Inventory 📦</h1>
      <p>Monitor stock levels and demand</p>

      <div className="inventory-list">

        <div className="inventory-card">
          <h2>Laptop</h2>
          <p>Current Stock: 120</p>
          <p>Daily Demand: 20</p>
          <p>Status: ✅ Available</p>
        </div>

        <div className="inventory-card">
          <h2>Keyboard</h2>
          <p>Current Stock: 45</p>
          <p>Daily Demand: 15</p>
          <p>Status: ⚠️ Low Stock</p>
        </div>

        <div className="inventory-card">
          <h2>Mouse</h2>
          <p>Current Stock: 200</p>
          <p>Daily Demand: 25</p>
          <p>Status: ✅ Available</p>
        </div>

      </div>
    </div>
  );
}

export default Inventory;