import React from "react";

const useFetch = () => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [data, setData] = React.useState(null);

  const request = React.useCallback(async (url, options) => {
    let response = null;
    let json = null;

    try {
      setError(false);
      setLoading(true);

      response = await fetch(url, options);

      if (!response.ok) throw new Error();

      json = await response.json();

      setData(json);

      return json;

    } catch (err) {
      setError(err);
      setData(null);

    } finally {
      setLoading(false);

    }

    return null;

  }, []);

  return {
    loading,
    error,
    data,
    request
  };
};

export default useFetch;
