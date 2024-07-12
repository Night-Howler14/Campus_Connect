import React, { useEffect } from "react";
import { Tabs } from "antd";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Products from "./Products";
import Users from "./User";
import Things from "./Things";

function Admin() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.users);
  useEffect(() => {
    if (user.role !== "admin") {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <Tabs>
        <Tabs.TabPane tab="Products (OLX)" key="1">
          <Products />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Products (Lost & Found)" key="2">
          <Things />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Users" key="3">
          <Users />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}

export default Admin;
