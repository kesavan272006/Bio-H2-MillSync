import { BedrockRuntimeClient, InvokeModelCommand } from "@aws-sdk/client-bedrock-runtime";
import { NextResponse } from "next/server";

// Initialize the Bedrock Client with your AWS credentials from .env.local
const client = new BedrockRuntimeClient({
  region: process.env.AWS_REGION || "us-east-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
  },
});

export async function POST(req: Request) {
  try {
    const { logs } = await req.json();

    const prompt = `
      You are the SugarNxt Safety Engine. Analyze the following reactor sensor logs:
      "${logs}"

      Task:
      1. Identify any anomalies (e.g., thermal spikes above 1000°C or pressure drops).
      2. Rate the risk level: LOW, MEDIUM, or CRITICAL.
      3. Provide a brief 1-sentence mitigation step.

      Constraint: Response must be strictly under 40 words and formatted as a safety alert.
    `;

    // Prepare the payload for Amazon Nova Lite
    const input = {
      modelId: process.env.BEDROCK_MODEL_ID || "amazon.nova-lite-v1:0",
      contentType: "application/json",
      accept: "application/json",
      body: JSON.stringify({
        messages: [{ role: "user", content: [{ text: prompt }] }],
        inferenceConfig: { maxNewTokens: 100, temperature: 0.1 }
      }),
    };

    const command = new InvokeModelCommand(input);
    const response = await client.send(command);
    
    // Parse the streaming/buffer response from Bedrock
    const responseBody = JSON.parse(new TextDecoder().decode(response.body));
    const safetyInsight = responseBody.output.message.content[0].text;

    return NextResponse.json({ 
      success: true, 
      insight: safetyInsight 
    });

  } catch (error) {
    console.error("Bedrock Anomaly Error:", error);
    return NextResponse.json(
      { success: false, error: "Safety Engine Offline" },
      { status: 500 }
    );
  }
}