import React from "react";
import { useDispatch } from "react-redux";
import {
  //   GetAllBids,
  GetThingById,
  GetThings,
} from "../../apicalls/things";
import { SetLoader } from "../../redux/loadersSlice";
import { message } from "antd";
import Divider from "../../components/Divider";
import { useParams } from "react-router-dom";
import moment from "moment";
// import BidModal from "./BidModal";

function ThingInfo() {
  // const { user } = useSelector((state) => state.users);
  //   const [showAddNewBid, setShowAddNewBid] = React.useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = React.useState(0);
  const [thing, setThing] = React.useState(null);
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const getData = async () => {
    try {
      dispatch(SetLoader(true));
      const response = await GetThingById(id);
      dispatch(SetLoader(false));
      if (response.success) {
        //   const bidsResponse = await GetAllBids({ thing: id });
        //   setThing({
        //     ...response.data,
        //     bids: bidsResponse.data,
        //   });
        setThing(response.data);
      }
    } catch (error) {
      dispatch(SetLoader(false));
      message.error(error.message);
    }
  };

  React.useEffect(() => {
    getData();
  }, []);
  return (
    thing && (
      <div>
        <div className="grid grid-cols-2 gap-5 mt-5">
          {/* images */}
          <div className="flex flex-col gap-5">
            <img
              src={thing.images[selectedImageIndex]}
              alt=""
              className="w-full h-96 object-cover rounded-md"
            />

            <div className="flex gap-5">
              {thing.images.map((image, index) => {
                return (
                  <img
                    className={
                      "w-20 h-20 object-cover rounded-md cursor-pointer " +
                      (selectedImageIndex === index
                        ? "border-2 border-green-700 border-dashed p-2"
                        : "")
                    }
                    onClick={() => setSelectedImageIndex(index)}
                    src={image}
                    alt=""
                  />
                );
              })}
            </div>

            <Divider />

            <div>
              <h1 className="text-gray-600">Added On</h1>
              <span className="text-gray-600">
                {moment(thing.createdAt).format("MMM D , YYYY hh:mm A")}
              </span>
            </div>
          </div>

          {/* details */}
          <div className="flex flex-col gap-3">
            <div>
              <h1 className="text-2xl font-semibold text-orange-900">
                {thing.name}
              </h1>
              <span>{thing.description}</span>
            </div>

            <Divider />
            <div className="flex flex-col">
              <h1 className="text-2xl font-semibold text-orange-900">
                Thing Details
              </h1>
              {/* <div className="flex justify-between mt-2">
                <span>Price</span>
                <span>$ {thing.price}</span>
              </div> */}
              <div className="flex justify-between mt-2">
                <span>Category</span>
                <span className="uppercase">{thing.category}</span>
              </div>
              {/* <div className="flex justify-between mt-2">
                <span>Bill Available</span>
                <span> {thing.billAvailable ? "Yes" : "No"}</span>
              </div>

              <div className="flex justify-between mt-2">
                <span>Box Available</span>
                <span>{thing.boxAvailable ? "Yes" : "No"}</span>
              </div>
              <div className="flex justify-between mt-2">
                <span>Accessories Available</span>
                <span>{thing.accessoriesAvailable ? "Yes" : "No"}</span>
              </div>

              <div className="flex justify-between mt-2">
                <span>Warranty Available</span>
                <span>{thing.warrantyAvailable ? "Yes" : "No"}</span>
              </div> */}
              {/* <div className="flex justify-between mt-2">
                <span>Purchased Year</span>
                <span>
                  {moment().subtract(thing.age, "years").format("YYYY")} (
                  {thing.age} years ago)
                </span>
              </div> */}
            </div>

            <Divider />
            <div className="flex flex-col">
              <h1 className="text-2xl font-semibold text-orange-900">
                Seller Details
              </h1>
              <div className="flex justify-between mt-2">
                <span>Name</span>
                <span> {thing.seller.name}</span>
              </div>
              <div className="flex justify-between mt-2">
                <span>Email</span>
                <span className="uppercase">{thing.seller.email}</span>
              </div>
            </div>

            <Divider />
            {/* <div className="flex flex-col">
              <div className="flex justify-between mb-5">
                <h1 className="text-2xl font-semibold text-orange-900">Bids</h1>
                <Button
                  onClick={() => setShowAddNewBid(!showAddNewBid)}
                  disabled={user._id === thing.seller._id}
                >
                  New Bid
                </Button>
              </div>

              {thing.showBidsOnThingPage &&
                thing.bids.map((bid) => {
                  return (
                    <div className="border border-gray-300 border-solid p-3 rounded mt-5">
                      <div className="flex justify-between text-gray-700">
                        <span>Name</span>
                        <span> {bid.buyer.name}</span>
                      </div>
                      <div className="flex justify-between text-gray-600">
                        <span>Bid Amount</span>
                        <span> $ {bid.bidAmount}</span>
                      </div>
                      <div className="flex justify-between text-gray-600">
                        <span>Bid Place On</span>
                        <span>
                          {" "}
                          {moment(bid.createdAt).format("MMM D , YYYY hh:mm A")}
                        </span>
                      </div>
                    </div>
                  );
                })}
            </div> */}
          </div>
        </div>
        {/* 
        {showAddNewBid && (
          <BidModal
            thing={thing}
            reloadData={getData}
            showBidModal={showAddNewBid}
            setShowBidModal={setShowAddNewBid}
          />
        )} */}
      </div>
    )
  );
}

export default ThingInfo;
