import { Button, Table, message } from "antd";
import React, { useEffect } from "react";
import ThingsForm from "./ThingsForm";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { SetLoader } from "../../../redux/loadersSlice";
import { DeleteThing, GetThings } from "../../../apicalls/things";

function Things() {
  const [selectedThing, setSelectedThing] = React.useState(null);
  const [things, setThings] = React.useState([]);
  const [showThingForm, setShowThingForm] = React.useState(false);
  const { user } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const getData = async () => {
    try {
      dispatch(SetLoader(true));
      const response = await GetThings({
        seller: user._id,
      });
      dispatch(SetLoader(false));
      if (response.success) {
        setThings(response.data);
      }
    } catch (error) {
      dispatch(SetLoader(false));
      message.error(error.message);
    }
  };

  const deleteThing = async (id) => {
    try {
      dispatch(SetLoader(true));
      const response = await DeleteThing(id);
      dispatch(SetLoader(false));
      if (response.success) {
        message.success(response.message);
        getData();
      } else {
        message.error(response.message);
      }
    } catch (error) {
      dispatch(SetLoader(false));
      message.error(error.message);
    }
  };

  const columns = [
    {
      title: "Thing",
      dataIndex: "image",
      render: (text, record) => {
        return (
          <img
            src={record?.images?.length > 0 ? record.images[0] : ""}
            alt=""
            className="w-20 h-20 object-cover rounded-md"
          />
        );
      },
    },
    {
      title: "Name",
      dataIndex: "name",
    },

    // {
    //   title: "Price",
    //   dataIndex: "price",
    // },
    {
      title: "Category",
      dataIndex: "category",
    },
    // {
    //   title: "Age",
    //   dataIndex: "age",
    // },
    {
      title: "Status",
      dataIndex: "status",
    },
    {
      title: "Added On",
      dataIndex: "createdAt",
      render: (text, record) =>
        moment(record.createdAt).format("DD-MM-YYYY hh:mm A"),
    },
    {
      title: "Action",
      dataIndex: "action",
      render: (text, record) => {
        return (
          <div className="flex gap-5">
            <i
              className="ri-delete-bin-6-line"
              onClick={() => {
                deleteThing(record._id);
              }}
            ></i>
            <i
              className="ri-pencil-line"
              onClick={() => {
                setSelectedThing(record);
                setShowThingForm(true);
              }}
            ></i>
          </div>
        );
      },
    },
  ];

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="flex justify-end mb-2">
        <Button
          type="default"
          onClick={() => {
            setSelectedThing(null);
            setShowThingForm(true);
          }}
        >
          Add Thing
        </Button>
      </div>
      <Table columns={columns} dataSource={things} />
      {showThingForm && (
        <ThingsForm
          showThingForm={showThingForm}
          setShowThingForm={setShowThingForm}
          selectedThing={selectedThing}
          getData={getData}
        />
      )}
    </div>
  );
}

export default Things;
