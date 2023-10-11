import React from "react";
import NewReleasesList from "./components/NewReleasesList";

export default async function AppPage() {
  return (
    <div>
      <h1>My Music App</h1>
      <NewReleasesList />
    </div>
  );
}
