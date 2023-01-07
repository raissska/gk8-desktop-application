
import { useEffect, useState } from 'react';
import { ITransaction } from '../models';
import { apiKey, baseUrl, PAGE_LIMIT } from "../utils/constants";


export function useTransactions(page: number | null) {

  const [transactions, setTransactions] = useState<ITransaction[] | []>([])
  const [address, setAddress] = useState<null | string>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [hasMore, setHasMore] = useState(true)

  useEffect(() => {
    if (address && address.length > 0) {
      fetchData()
    }
    // eslint-disable-next-line
  }, [page, address])

  async function fetchData() {
    if (address && address?.length > 1) {
      try {
        setError('')
        setLoading(true)
        const response = await fetch(`${baseUrl}&address=${address}&startblock=0&endblock=99999999&page=${page}&offset=${PAGE_LIMIT}&sort=asc&apikey=${apiKey}`);
        const data = await response.json();
        if (data.status === "1") {
          const res = [...transactions].concat(data.result)
          if (data.length + PAGE_LIMIT >= 10000) {
            setHasMore(false)
          }
          setTransactions(res)
          setLoading(false)
        } else {
          setError(data.message)
          setTransactions([])
          setLoading(false)
        }
      } catch (e) {
        console.log(e)
        setLoading(false)
        setError('Failed to fetch')
        setTransactions([])
      }

    }

  }
  const changeAdress = (value: string) => {
    setAddress(value)
    setTransactions([])
  }

  return { transactions, loading, error, changeAdress, hasMore }

}