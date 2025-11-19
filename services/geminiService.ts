
import { GoogleGenAI } from "@google/genai";
import type { Product } from "../types";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  // In a real app, you'd handle this more gracefully.
  // For this context, we assume the key is present.
  console.warn("API_KEY environment variable not set. Gemini features will not work.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

export const generateProductDescription = async (product: Product): Promise<string> => {
  if (!API_KEY) {
    return "Error: Gemini API key not configured.";
  }

  const prompt = `
    Generate a short, exciting, and market-friendly product description for the following item. 
    Do not repeat the product name or brand. Focus on the benefits and feeling of using the product.
    Keep it to 2-3 sentences.

    Product Name: ${product.name}
    Brand: ${product.brand}
    Key Specs: ${Object.entries(product.specs).map(([key, value]) => `${key}: ${value}`).join(', ')}
    Price: $${product.price}
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    return response.text;
  } catch (error) {
    console.error("Error generating product description:", error);
    return "Could not generate a description at this time. Please try again later.";
  }
};
   