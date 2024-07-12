import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

function Emergency() {
  const cards = [
    {
      id: 1,
      title: "GNRC Hospital",
      phone: "+91 1234567891",
      image:
        "https://www.chandigarhhelp.com/wp-content/uploads/2021/08/Hospitals-in-Zirakpur.jpg",
    },
    {
      id: 2,
      title: "Hostel Ambulance",
      phone: "+91 1234567891",
      image:
        "https://m.media-amazon.com/images/I/716ps6oqgsL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 3,
      title: "Girls Hostel Warden",
      phone: "+91 1234567891",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIf8y9ccTGs56Tlui9C8bjzpt6pXUj5lKJDSugb1z_RQ&s",
    },
    {
      id: 4,
      title: "Boys Hostel Warden",
      phone: "+91 1234567891",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQooQzxiaZDTthXUWtIx7OpUUwAuzjAofCQCR96TUvrkQ&s",
    },
    {
      id: 5,
      title: "Mirza police Station",
      phone: "+91 1234567891",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAHC4lPYE_zvRsCqUlQJ5LmtD4jnNOBxKg0fKkapRpXA&s",
    },
    {
      id: 6,
      title: "Medical Shop",
      phone: "+91 1234567891",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1bjh1f6nHc_h5VqUNWxftq3jV9x0ph8nSYFDOIyQbDw&s",
    },
    {
      id: 7,
      title: "Stationary Shop",
      phone: "+91 1234567891",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4R4lkyeGa46tkhF9FmUEzCFLcD3TJSIs8uX4_cWsWBA&s",
    },
    {
      id: 8,
      title: "Doctor",
      phone: "+91 1234567891",
      image:
        "https://img.freepik.com/free-photo/beautiful-young-female-doctor-looking-camera-office_1301-7807.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1712016000&semt=sph",
    },
  ];

  return (
    <div className="bg-c min-h-screen flex flex-col font-dm-sans">
      <style>
        {`
          body {
            background-color: #d4ddb7;
          }
        `}
      </style>
      <h1 className="text-6xl text-center"> Emergency Contact</h1>
      <p className="text-lg mb-5 mt-[1rem]">
        An emergency contact is a trusted individual designated to be notified
        in case of urgent situations, serving as a point of contact for crucial
        information and decisions during emergencies. They play a vital role in
        facilitating communication and assistance when the individual is unable
        to do so themselves.
      </p>
      <div className="p-8 mt-7rem">
        <div className="grid grid-cols-2 gap-20 ml-[130px] ">
          {cards.map((card) => (
            <div
              key={card.id}
              className="w-[500px] h-[120px] flex items-center overflow-hidden shadow-a bg-d rounded-full"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-[120px] h-[110px] object-cover rounded-full ml-1"
              />
              <div className="flex flex-col items-center justify-center ml-[30px]">
                <div className="font-bold text-[25px] mb-2">{card.title}</div>
                <div className="flex items-center">
                  <FaPhoneAlt
                    className="text-primary text-2xl mr-2"
                    style={{ color: "#3F4726" }}
                  />
                  <p className="text-primary text-[29px] text-b">
                    {card.phone}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Emergency;
