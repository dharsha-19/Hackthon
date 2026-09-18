function WhatIf() {
  return (
    <div className="whatif-page">
      <h1>What-If Simulator 🔮</h1>
      <p>Simulate supply chain disruption scenarios</p>

      <div className="scenario-box">
        <h2>Supplier A Unavailability</h2>

        <p>What if Supplier A is unavailable for 7 days?</p>

        <button>Run Scenario</button>
      </div>

      <div className="scenario-result">
        <h2>Simulation Result</h2>

        <p>⚠️ Risk Level: HIGH</p>
        <p>📦 Affected Products: 4</p>
        <p>📋 Affected Orders: 126</p>
        <p>⏳ Expected Stockout: 3 Days</p>

        <h3>AI Recommendation 🤖</h3>

        <p>
          Switch orders to Supplier B to reduce the expected disruption.
        </p>

        <h3>Why?</h3>

        <p>
          Supplier B has available capacity and can support the affected demand.
        </p>
      </div>
    </div>
  );
}

export default WhatIf;