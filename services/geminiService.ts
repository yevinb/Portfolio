import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { RESUME_CONTEXT } from '../constants';

class GeminiService {
  private ai: GoogleGenAI | null = null;
  private chat: Chat | null = null;

  constructor() {
    const apiKey = process.env.API_KEY;
    if (apiKey) {
      this.ai = new GoogleGenAI({ apiKey });
    } else {
      console.warn("API_KEY is missing in process.env");
    }
  }

  public initializeChat(): boolean {
    if (!this.ai) return false;

    try {
      this.chat = this.ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: RESUME_CONTEXT,
        },
      });
      return true;
    } catch (error) {
      console.error("Failed to initialize chat:", error);
      return false;
    }
  }

  public async sendMessage(message: string): Promise<string> {
    if (!this.chat) {
      const initialized = this.initializeChat();
      if (!initialized) {
        throw new Error("Chat system could not be initialized. Missing API Key?");
      }
    }

    try {
      const response: GenerateContentResponse = await this.chat!.sendMessage({ message });
      return response.text || "I'm sorry, I couldn't generate a response.";
    } catch (error) {
      console.error("Error sending message to Gemini:", error);
      throw error;
    }
  }
}

export const geminiService = new GeminiService();
