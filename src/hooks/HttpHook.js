import { useState, useEffect } from "react";
import axios from "axios";

export const useHttp = (url, dependencies) => {
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedData, setFetchedData] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(url)
      .then((data) => {
        setFetchedData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, dependencies); // could be [] to run once

  return [isLoading, fetchedData];
};
