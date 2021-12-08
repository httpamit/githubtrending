import React from "react";
import { useQuery } from "react-query";
import Developer from "../components/developer";
import Loading from "../components/loading";
import axios from "axios";
export default function DevsList() {
  async function fetchDeves() {
    const { data } = await axios.get("/developers");
    return data;
  }

  const { isLoading, error, data } = useQuery("repoData", fetchDeves);

  if (isLoading) return <Loading />;

  if (error) return "An error has occurred: " + error.message;
  console.log(data);
  return (
    <ul className="list-group list-group-flush">
      {data.map((item) => (
        <Developer data={item} key={item.rank} />
      ))}
    </ul>
  );
}
