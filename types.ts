export interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
}

export interface ChatState {
  messages: Message[];
  isLoading: boolean;
  error: string | null;
  isConnected: boolean;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  icon: 'shield' | 'web' | 'platform';
}

export interface Skill {
  name: string;
  level: number;
  icon: 'code' | 'layers' | 'atom' | 'server' | 'bot' | 'lock';
}