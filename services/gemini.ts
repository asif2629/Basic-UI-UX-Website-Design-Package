
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are a friendly UI/UX Sales Consultant for Webtrix Innovations. 
Your goal is to answer questions about the "Basic UI/UX Website Design Package".

Details of the package:
- Price: ₹15,000 (Regular: ₹20,000)
- Deliverables: 5-7 pages of UI design in Figma.
- Features: Custom homepage, Mobile responsive, Design system, Wireframes, Figma source file, 1 Revision.
- Delivery: 5-7 working days.
- Exclusions: No development, no coding, no hosting.
- Company: Webtrix Innovations.
- Contact: +919209767989 or webtrixinnovations.com.

Be professional, helpful, and concise. Always try to guide the user toward booking the package or contacting via WhatsApp.
`;

export const getAIResponse = async (userMessage: string) => {
  // Always use a named parameter and direct access to process.env.API_KEY
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      // Use gemini-3-flash-preview for basic text tasks
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    // Extract text output using the .text property
    return response.text || "I'm sorry, I couldn't process that. Please contact our human experts via WhatsApp!";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Something went wrong. Please chat with us on WhatsApp for faster assistance!";
  }
};
