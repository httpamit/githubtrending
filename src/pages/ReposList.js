import React from "react";
import { useQuery } from "react-query";
import Repository from "../components/repository";
import Loading from "../components/loading";
import axios from "axios";

export default function ReposList() {
  async function fetchRepos() {
    const { data } = await axios.get(
      "https://gh-trending-api.herokuapp.com/repositories"
    );
    return data;
  }

  const { isLoading, error, data } = useQuery("repoData", fetchRepos);

  if (isLoading) return <Loading />;
  console.log(data);
  if (error) return "An error has occurred: " + error.message;

  return (
    <ul className="list-group list-group-flush">
      {data.map((item) => (
        <Repository data={item} key={item.rank} />
      ))}
    </ul>
  );
}
