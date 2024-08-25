import { WordBook } from "./BookWord.interface";

export interface Books {
  book_id: number,
  book_name: string,
  state: boolean,
  word: WordBook
}
