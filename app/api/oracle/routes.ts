import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

// Initialize the Gemini SDK with your API Key from .env.local
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function POST(req: Request) {
  try {
    const { moisture, temp, pressure } = await req.json();

    // Select the Gemini 1.5 Flash model for fast industrial reasoning
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
      You are the SugarNxt Yield Oracle, an AI specialized in the IISc-patented H2 reactor.
      Analyze these real-time mill parameters:
      - Bagasse Moisture: ${moisture}%
      - Reactor Temperature: ${temp}°C
      - Steam Pressure: ${pressure} Bar

      Task:
      1. Predict the Hydrogen (H2) yield efficiency.
      2. Provide one specific technical optimization tip to maximize purity.
      3. Mention the potential SIGHT incentive impact.

      Constraint: Keep the response under 60 words, highly professional, and industrial in tone.
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ 
      success: true, 
      insight: text 
    });

  } catch (error) {
    console.error("Gemini Oracle Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch AI insights" },
      { status: 500 }
    );
  }
}