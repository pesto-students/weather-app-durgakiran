import { useEffect, useState } from 'react';

export default function useAsync(fn, params) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState();

  if (typeof fn !== 'function') {
    throw new TypeError(`fn should be a function, given ${fn}`);
  }

  if (!Array.isArray(params)) {
    throw new TypeError(`params should be array of values, given ${params}`);
  }

  useEffect(() => {
    setLoading(true);
    fn(...params).then((res) => {
      setResult(res);
      setLoading(false);
      setError();
    }).catch((e) => {
      setResult();
      setLoading(false);
      setError(e || 'something bad happened');
    });
  }, []);

  return { loading, error, result };
}
