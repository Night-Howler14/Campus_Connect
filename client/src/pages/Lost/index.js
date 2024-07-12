import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GetThings } from "../../apicalls/things";
import { SetLoader } from "../../redux/loadersSlice";
import { message } from "antd";

import { useNavigate } from "react-router-dom";
import Filters from "./Filters";
import Divider from "../../components/Divider";

function Lost() {
  const [showFilters, setShowFilters] = React.useState(true);
  const [things, setThings] = React.useState([]);
  const [filters, setFilters] = React.useState({
    status: "approved",
    category: [],
    // age: [],
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.users);
  const getData = async () => {
    try {
      dispatch(SetLoader(true));
      const response = await GetThings(filters);
      dispatch(SetLoader(false));
      if (response.success) {
        setThings(response.data);
      }
    } catch (error) {
      dispatch(SetLoader(false));
      message.error(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, [filters]);

  return (
    <div className="flex gap-5">
      {showFilters && (
        <Filters
          showFilters={showFilters}
          setShowFilters={setShowFilters}
          filters={filters}
          setFilters={setFilters}
        />
      )}
      <div className="flex flex-col gap-5 w-full">
        <div className="flex gap-5 items-center">
          {!showFilters && (
            <i
              className="ri-equalizer-line text-xl cursor-pointer"
              onClick={() => setShowFilters(!showFilters)}
            ></i>
          )}
          <input
            type="text"
            placeholder="Search Things  here..."
            className="border border-gray-300 rounded border-solid px-2 py-1 h-14 w-full"
          />
        </div>
        <div
          className={`
        grid gap-5 ${showFilters ? "grid-cols-4" : "grid-cols-5"}
      `}
        >
          {things?.map((thing) => {
            return (
              <div
                className="border border-gray-300 rounded border-solid flex flex-col gap-2 pb-2 cursor-pointer"
                key={thing._id}
                onClick={() => navigate(`/thing/${thing._id}`)}
              >
                <img
                  src={thing.images[0]}
                  className="w-full h-52 p-2 rounded-md object-cover"
                  alt=""
                />
                <div className="px-2 flex flex-col">
                  <h1 className="text-lg font-semibold">{thing.name}</h1>
                  {/* <p className="text-sm">
                    {thing.age} {thing.age === 1 ? " year" : " years"} old
                  </p> */}
                  <Divider />
                  <span className="text-xl text-black">
                    {thing.description}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Lost;
