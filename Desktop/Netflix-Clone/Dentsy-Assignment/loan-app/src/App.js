import React, { useState } from "react";
import "./App.css";

function App() {
  const [preAssessment, setPreAssessment] = useState(null);
  const [businessDetails, setBusinessDetails] = useState(null);
  const handleCalculate = async () => {
    try {
      const response = await fetch(
        "http://localhost:3001/calculate-pre-assessment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            balanceSheet: [
              {
                year: 2020,
                month: 1,
                profitOrLoss: 15000,
                assetsValue: 200000,
              },
              {
                year: 2020,
                month: 2,
                profitOrLoss: 18000,
                assetsValue: 210000,
              },
              {
                year: 2020,
                month: 3,
                profitOrLoss: 12000,
                assetsValue: 220000,
              },
              {
                year: 2020,
                month: 12,
                profitOrLoss: 250000,
                assetsValue: 1234,
              },
              {
                year: 2020,
                month: 11,
                profitOrLoss: 1150,
                assetsValue: 5789,
              },
              {
                year: 2020,
                month: 10,
                profitOrLoss: 2500,
                assetsValue: 22345,
              },
            ],
            loanAmount: 100000,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setPreAssessment(data.preAssessment);
      setBusinessDetails(data.businessDetails);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Business Loan Application System</h1>
        <button
          style={{
            background: "white",
            height: "40px",
            "font-size": "14px",
            border: "2px black",
          }}
          onClick={handleCalculate}
        >
          Calculate preAssessment
        </button>
        {preAssessment !== null && <p>preAssessment: {preAssessment}</p>}
        {businessDetails !== null && (
          <div>
            <p>Business Name: {businessDetails.name}</p>
            <p>Year Established: {businessDetails.yearEstablished}</p>
            <p>
              Summary of Profit or Loss: {businessDetails.summaryOfProfitLoss}
            </p>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
