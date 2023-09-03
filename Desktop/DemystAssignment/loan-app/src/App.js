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
                year: 2023,
                month: 1,
                profitOrLoss: 15000,
                assetsValue: 200000,
              },
              {
                year: 2023,
                month: 2,
                profitOrLoss: 18000,
                assetsValue: 210000,
              },
              {
                year: 2023,
                month: 3,
                profitOrLoss: 12000,
                assetsValue: 220000,
              },
              {
                year: 2023,
                month: 4,
                profitOrLoss: 6000,
                assetsValue: 210000,
              },
              {
                year: 2023,
                month: 5,
                profitOrLoss: 12100,
                assetsValue: 233420,
              },
              {
                year: 2023,
                month: 6,
                profitOrLoss: 16700,
                assetsValue: 19000,
              },
              {
                year: 2023,
                month: 7,
                profitOrLoss: 22000,
                assetsValue: 300000,
              },
              {
                year: 2023,
                month: 8,
                profitOrLoss: 18000,
                assetsValue: 210000,
              },
              {
                year: 2023,
                month: 9,
                profitOrLoss: 12000,
                assetsValue: 220000,
              },
              {
                year: 2023,
                month: 10,
                profitOrLoss: 18000,
                assetsValue: 210000,
              },
              {
                year: 2023,
                month: 11,
                profitOrLoss: 34000,
                assetsValue: 620000,
              },
              {
                year: 2023,
                month: 12,
                profitOrLoss: 58000,
                assetsValue: 450000,
              },
            ],
            loanAmount: 100000, // Adjust the loan amount as needed
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
        <button onClick={handleCalculate}>Calculate preAssessment</button>
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
