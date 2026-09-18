function Home() {
  return (
    <div>
      <main className="dashboard">
        <h1>SupplyShield AI 🤖</h1>
        <p>AI Supply Chain Risk Intelligence Agent</p>

        <div className="cards">
          <div className="card">
            <h3>Suppliers</h3>
            <h2>12</h2>
          </div>

          <div className="card">
            <h3>Inventory</h3>
            <h2>85%</h2>
          </div>

          <div className="card">
            <h3>Active Risks</h3>
            <h2>3</h2>
          </div>

          <div className="card">
            <h3>High Risk</h3>
            <h2>1</h2>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;