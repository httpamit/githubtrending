import React from "react";
import { useQuery } from "react-query";
import Developer from "../components/developer";
import Loading from "../components/loading";

export default function DevsList() {
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch("/developers").then((res) => res.json())
  );

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
