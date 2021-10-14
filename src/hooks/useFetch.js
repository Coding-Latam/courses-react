import React, { useEffect, useState } from "react";
import { API } from "../utils";

export const useFetch = (type) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${API}/${type}`);
      const data = await response.json();
      setData(data);
    };

    fetchData();
  }, [type]);

  return data;
};
