export interface SpData {
  name: string;
  bio: string;
  sessions: [];
}
export interface SeData {
  name: string;
  id: string;
}

export interface SessionData {
  id: string;
  title: string;
  description: string;
  room: string;
  day: string;
  track: string;
  speakers: [];
}

export interface SpeakerData {
  id: string;
  name: string;
}
export interface SessionDataTypes {
  id: number;
  title: string;
  description: string;
  startsAt: string;
  endsAt: string;
  room: string;
  day: string;
  format: string;
  track: string;
  level: string;
  speakers: [];
}
