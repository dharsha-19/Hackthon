function Suppliers() {
  return (
    <div className="suppliers-page">
      <h1>Supplier Management 🚚</h1>
      <p>Monitor supplier status and performance</p>

      <div className="supplier-list">

        <div className="supplier-card">
          <h2>Supplier A</h2>
          <p>Location: Chennai</p>
          <p>Capacity: 80%</p>
          <p>Delivery Time: 2 Days</p>
          <p>Status: ✅ Active</p>
        </div>

        <div className="supplier-card">
          <h2>Supplier B</h2>
          <p>Location: Coimbatore</p>
          <p>Capacity: 65%</p>
          <p>Delivery Time: 3 Days</p>
          <p>Status: ⚠️ At Risk</p>
        </div>

        <div className="supplier-card">
          <h2>Supplier C</h2>
          <p>Location: Madurai</p>
          <p>Capacity: 90%</p>
          <p>Delivery Time: 1 Day</p>
          <p>Status: ✅ Active</p>
        </div>

      </div>
    </div>
  );
}

export default Suppliers;