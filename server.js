const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { GoogleGenAI } = require("@google/genai");

const app = express();

app.use(cors());
app.use(express.json());

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

app.post("/api/analyze-risk", async (req, res) => {
  try {
    const { supplier, inventory, demand } = req.body;

    const prompt = `
You are an AI Supply Chain Risk Intelligence Agent.

Analyze:
Supplier: ${supplier}
Inventory: ${inventory}
Daily Demand: ${demand}

Give:
1. Risk Level
2. Reason
3. Expected Impact
4. Recommended Action

Keep the answer short and practical.
`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    res.json({
      result: response.text,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "AI analysis failed",
    });
  }
});

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
