import { useState, useCallback } from "react";

const useHTTP = (requestConfig, transformData) => {
  const [isloading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [returnedData, setReturnedData] = useState();
  const sendRequest = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error("Request Failed.");
      }
      setIsLoading(false);
      if (!transformData) return;
      setReturnedData(transformData(data));
    } catch (err) {
      setError(err.message);
    }
  }, [requestConfig, transformData]);
  return { sendRequest, isloading, error, returnedData };
};

export default useHTTP;
