import { Tabs } from "antd";
import React from "react";
import Products from "./Products";
import { useSelector } from "react-redux";
import moment from "moment";
import Things from "./Things";
// import Items from "./Items";

function Profile() {
  const { user } = useSelector((state) => state.users);
  return (
    <div>
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="General" key="1">
          <div className="flex flex-col w-1/3">
            <span className="text-a text-xl flex justify-between">
              Name: <span className="text-xl">{user.name} </span>
            </span>
            <span className="text-a text-xl flex justify-between">
              Email: <span className="text-xl">{user.email} </span>
            </span>
            <span className="text-a text-xl flex justify-between">
              Created At :{" "}
              <span className="text-xl">
                {moment(user.createdAt).format("MMM D, YYYY hh:mm A")}
              </span>
            </span>
          </div>
        </Tabs.TabPane>
        <Tabs.TabPane tab="Products ( OLX )" key="2">
          <Products />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Products ( Lost & Found )" key="3">
          <Things />
          {/* items */}
        </Tabs.TabPane>
        {/* <Tabs.TabPane tab="Bids" key="4">
          <h1>Bids</h1>
        </Tabs.TabPane> */}
      </Tabs>
    </div>
  );
}

export default Profile;
