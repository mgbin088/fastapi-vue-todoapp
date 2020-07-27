export interface NoteType {
  id: number;
  owner_id: number;
  title: string;
  text: string;
  creation_datetime: string;
  completion_datetime?: string;
}
