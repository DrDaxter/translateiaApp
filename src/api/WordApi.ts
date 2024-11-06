import { SaveNewWord, WordBook } from "../interfaces/BookWord.interface"
import Axios from "./AxiosInstance"

const successCode = [200,201]

export const getWordsByBookId = async (bookId: number): Promise<WordBook[]> => {
  const {data, status} = await Axios.get<WordBook[]>(
    '/word-manage/words/'+bookId
  )

  if (!successCode.includes(status)) throw new Error('Something went wrong')

  return data
}

export const saveNewWord = async (wordData: SaveNewWord) => {
  const {status} = await Axios.post(
    '/word-manage/',wordData
  );

  if(!successCode.includes(status)) throw new Error("There was an error while saving a word")

    return true;
}