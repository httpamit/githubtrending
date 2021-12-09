import React, { useState, useEffect } from "react";
import Developer from "../components/developer";
import Loading from "../components/loading";
export default function DevsList() {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("/developers");
        const data = await response.json();
        setLoading(false);
        setData(data);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  if (isLoading) return <Loading />;
  return (
    <ul className="list-group list-group-flush">
      {data.map((item) => (
        <Developer data={item} key={item.rank} />
      ))}
    </ul>
  );
}
