import { WordBook } from "../interfaces/BookWord.interface"
import Axios from "./AxiosInstance"

export const getWordsByBookId = async (bookId: number): Promise<WordBook[]> => {
    const {data, status} = await Axios.get<WordBook[]>(
      '/word-manage/words/'+bookId
    )
  
    if (status !== 200) throw new Error('Something went wrong')
  
    return data
  }