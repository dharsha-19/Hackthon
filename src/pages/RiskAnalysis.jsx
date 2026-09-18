function RiskAnalysis() {
  return (
    <div className="risk-page">
      <h1>AI Risk Analysis ⚠️</h1>
      <p>Identify and understand supply chain risks</p>

      <div className="risk-card">
        <h2>Supplier A Unavailability</h2>

        <p>
          <strong>Risk Level:</strong> 🔴 HIGH
        </p>

        <p>
          <strong>Duration:</strong> 7 Days
        </p>

        <p>
          <strong>Affected Products:</strong> 4
        </p>

        <p>
          <strong>Affected Orders:</strong> 126
        </p>

        <h3>AI Recommendation 🤖</h3>

        <p>
          Switch orders to Supplier B to reduce the expected supply disruption.
        </p>

        <h3>Reason</h3>

        <p>
          Supplier B has available capacity and can support the affected demand.
        </p>
      </div>
    </div>
  );
}

export default RiskAnalysis;