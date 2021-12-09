import React, { useState, useEffect } from "react";
import Repository from "../components/repository";
import Loading from "../components/loading";

export default function ReposList() {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://gh-trending-api.herokuapp.com/repositories");
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
        <Repository data={item} key={item.rank} />
      ))}
    </ul>
  );
}
