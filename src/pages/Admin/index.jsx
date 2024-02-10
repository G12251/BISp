import React from "react";
import PageTitle from "../../components/PageTitle";
import { Tabs } from "antd";
import MoviesList from "./MoviesList";
import CinemasList from "./CinemasList";

function Admin() {
  return (
    <div>
      <PageTitle title="Admin" />

      <Tabs defaultActiveKey="1">
        <items tab="Movies" key="1">
            <MoviesList />
        </items>

        <items tab="Cinemas" key="2">
            <CinemasList />
        </items>
      </Tabs>
    </div>
  );
}

export default Admin;
