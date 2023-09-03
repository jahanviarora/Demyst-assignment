const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const PORT = 3001;
const app = express();

app.use(cors());
app.use(bodyParser.json());

const sheet = [
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
  {
    year: 2020,
    month: 9,
    profitOrLoss: -187000,
    assetsValue: 223452,
  },
];

// Function to calculate preAssessment value based on rules
function calculatePreAssessment(balanceSheet, loanAmount) {
  const twelveMonthsProfit = balanceSheet
    .slice(0, 12)
    .reduce((total, entry) => total + entry.profitOrLoss, 0);

  const averageAssetValue =
    balanceSheet.reduce((total, entry) => total + entry.assetsValue, 0) /
    balanceSheet.length;

  if (twelveMonthsProfit > 0) {
    return {
      preAssessment: 60,
      businessDetails: {
        name: "Your Business Name",
        yearEstablished: 2000,
        summaryOfProfitLoss: twelveMonthsProfit,
      },
    };
  } else if (averageAssetValue > loanAmount) {
    return {
      preAssessment: 100,
      businessDetails: {
        name: "Your Business Name",
        yearEstablished: 2000,
        summaryOfProfitLoss: twelveMonthsProfit,
      },
    };
  } else {
    return {
      preAssessment: 20,
      businessDetails: {
        name: "Your Business Name",
        yearEstablished: 2000,
        summaryOfProfitLoss: twelveMonthsProfit,
      },
    };
  }
}

app.post("/calculate-pre-assessment", (req, res) => {
  const { balanceSheet, loanAmount } = req.body;
  const preAssessmentResult = calculatePreAssessment(balanceSheet, loanAmount);
  res.json(preAssessmentResult);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
