import { Definition } from "./WordDefinition";

export interface WordBook {
  word_id:          number;
  word:             string;
  exist_definition: boolean;
  book_id:          number;
}

export interface SaveNewWord extends Omit<WordBook, 'word_id'|'exist_definition'>{}