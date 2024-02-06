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
        <Tabs.TabPane tab="Bookings" key="1">
          <Bookings />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Cinemas" key="2">
          <CinemasList />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}

export default Profile;
