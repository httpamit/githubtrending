import React from "react";
import { useQuery } from "react-query";
import Repository from "../components/repository";
import Loading from "../components/loading";

export default function ReposList() {
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch("/repositories").then((res) => res.json())
  );

  if (isLoading) return <Loading />;

  if (error) return "An error has occurred: " + error.message;

  return (
    <ul className="list-group list-group-flush">
      {data.map((item) => (
        <Repository data={item} key={item.rank} />
      ))}
    </ul>
  );
}
