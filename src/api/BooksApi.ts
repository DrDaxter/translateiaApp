import {Books} from '../interfaces/Books.interface'
import Axios from './AxiosInstance'

export const getBooks = async (): Promise<Books[]> => {
  const {data, status} = await Axios.get<Books[]>(
    '/book-manage/'
  )

  if (status !== 200) throw new Error('Something went wrong')

  return data
}
