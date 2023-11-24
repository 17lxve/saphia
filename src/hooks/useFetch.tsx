import { useState, useEffect } from "react";

function useFetch(
  url: string,
  options: { body: object; headers: HeadersInit; method: string } = {
    body: {},
    headers: {},
    method: "GET",
  },
) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url, {
      method: options.method,
      body: JSON.stringify(options.body),
      headers: options.headers,
    })
      .then((res) => {
        // console.log(JSON.stringify(options.body.token))
        if (!res.ok) {
          throw Error(`Could not fetch the data from resource ${url}`);
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { data, isPending, error };
}

export default useFetch;
