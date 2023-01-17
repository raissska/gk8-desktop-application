
import { useCallback, useEffect, useState } from 'react';
import { ITransaction } from '../models';
import { apiKey, baseUrl, PAGE_LIMIT } from "../utils/constants";


export function useTransactions(page: number | null) {

  const [transactions, setTransactions] = useState<ITransaction[] | []>([])
  const [address, setAddress] = useState<null | string>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [hasMore, setHasMore] = useState(true)

  const fetchData = useCallback(async () => {
    if (address && address?.length > 1) {
      try {
        setError('')
        setLoading(true)
        const response = await fetch(`${baseUrl}&address=${address}&startblock=0&endblock=99999999&page=${page}&offset=${PAGE_LIMIT}&sort=asc&apikey=${apiKey}`);
        const data = await response.json();
        if (data.status === "1") {
          const res = [...transactions].concat(data.result)
          if (res.length + PAGE_LIMIT >= 150) {
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

    // eslint-disable-next-line
  },[address,page])

  useEffect(() => {
      fetchData()
  }, [fetchData])

  
  const changeAdress = (value: string) => {
    setAddress(value)
    setTransactions([])
  }

  return { transactions, loading, error, changeAdress, hasMore }

}