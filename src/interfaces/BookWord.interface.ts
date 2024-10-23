import { Definition } from "./WordDefinition";

export interface WordBook {
  word_id:          number;
  word:             string;
  exist_definition: boolean;
  book_id:          number;
  //definition:       Definition;
}
