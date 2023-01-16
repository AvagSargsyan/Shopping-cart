import { useEffect, useState } from "react";

export default function useFetch(url) {

  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    (
      async function () {
        try {
          setLoading(true)
          const response = await fetch(url)
          const fetchedData = await response.json();
          console.log(fetchedData);
          setData(fetchedData)
        } catch (err) {
          setError(err)
        } finally {
          setLoading(false)
        }
      }
    )()
  }, [url])

  return { data, loading, error }

}