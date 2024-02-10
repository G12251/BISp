import React from "react";
import { Tabs } from "antd";
import { useSelector, useDispatch } from "react-redux";
import PageTitle from "../../components/PageTitle";
import CinemasList from "./CinemasList";
import Bookings from "./Bookings";
function Profile() {
  return (
    <div>
      <PageTitle title="Profile" />

      <Tabs defaultActiveKey="1">
        <items tab="Bookings" key="1">
          <Bookings />
        </items>
        <items tab="Cinemas" key="2">
          <CinemasList />
        </items>
      </Tabs>
    </div>
  );
}

export default Profile;
