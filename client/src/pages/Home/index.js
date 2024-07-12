import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Home() {
  // Sample data for demonstration
  const cards = [
    {
      id: 1,
      imageUrl: "/Images/lost.png",
      title: "Lost and Found",
      link: "/Lost",
    },
    {
      id: 2,
      imageUrl: "/Images/olx.png",
      title: "College Marketplace",
      link: "/Market",
    },
    {
      id: 3,
      imageUrl: "/Images/market.png",
      title: "Study Material",
      link: "/Study",
    },
    {
      id: 4,
      imageUrl: "/Images/alumini.png",
      title: "Alumni Connect",
      link: "/alumini",
    },
    {
      id: 5,
      imageUrl: "/Images/emergency.jpg",
      title: "Emergency Contact",
      link: "/emergency",
    },
    {
      id: 6,
      imageUrl: "/Images/Feedback.png",
      title: "Feedback",
      link: "/feedback",
    },
  ];

  const navigate = useNavigate();
  return (
    <div className="m-10 ml-[100px]">
      <style>
        {`
          body {
            background-color: #d4ddb7;
          }
        `}
      </style>
      <div className="flex mt-[-3rem] mb-[1rem] ml-[1rem] py-2 justify-end">
        <i
          className="ri-information-line mr-2 cursor-pointer"
          onClick={() => navigate("/about")}
        ></i>
        <span
          className="font-bold cursor-pointer my-[1px]"
          onClick={() => navigate("/about")}
        >
          About Us
        </span>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className="w-[300px] overflow-hidden shadow-lg bg-white rounded-[2%]"
          >
            <img
              className="w-[300px] h-[150px] object-cover rounded"
              src={card.imageUrl}
              alt={card.title}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-center ">
                {card.title}
              </div>
              <Link to={card.link}>
                <button className="bg-b hover:bg-d text-white font-bold py-2 px-4 w-full rounded-full">
                  Click Here
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
