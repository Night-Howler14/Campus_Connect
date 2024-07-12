import React from "react";

function Alumini() {
  const cards = [
    {
      id: 1,
      imageUrl:
        "https://media.licdn.com/dms/image/C5103AQEhOjZX8lO0FQ/profile-displayphoto-shrink_800_800/0/1554738620885?e=1717027200&v=beta&t=tNGnT6QO9YH5fTHffryx8JkFSKYZx6pbjYRxYR70sJs",
      title: "Sameer Kumar",
      linkedinId: "in/kushwahasameerkumar/",
    },
    {
      id: 2,
      imageUrl:
        "https://media.licdn.com/dms/image/D5603AQFgvm44tLFqaQ/profile-displayphoto-shrink_800_800/0/1705642572630?e=1717027200&v=beta&t=mfeupGmazc7W_Ji5MC6URn3YmyV4BMymUBiKYLTDz7w",
      title: "Laxita Sodhani",
      linkedinId: "in/priyanka-kumari-05bab71b4/",
    },
    {
      id: 3,
      imageUrl:
        "https://media.licdn.com/dms/image/C4D03AQF9w6_yMYgEOQ/profile-displayphoto-shrink_400_400/0/1622207833697?e=1718236800&v=beta&t=UORjrupkyvA8eSjM8Yvy0d4G_eiE5SVDMUJ6hRWbqAI",
      title: "Harshit Joshi",
      linkedinId: "in/prakriti-rani-76a698270/",
    },
    {
      id: 4,
      imageUrl:
        "https://media.licdn.com/dms/image/D4D03AQEc49sBiyOSag/profile-displayphoto-shrink_800_800/0/1670596387073?e=1717027200&v=beta&t=ngQPytsQFJ6YxWciJ75yKfIk3iDPiUi2LGlw75Y2ouc",
      title: "Ansh Arora",
      linkedinId: "in/anshkarora/",
    },
    {
      id: 1,
      imageUrl:
        "https://media.licdn.com/dms/image/C5103AQEhOjZX8lO0FQ/profile-displayphoto-shrink_800_800/0/1554738620885?e=1717027200&v=beta&t=tNGnT6QO9YH5fTHffryx8JkFSKYZx6pbjYRxYR70sJs",
      title: "Sameer Kumar",
      linkedinId: "in/kushwahasameerkumar/",
    },
    {
      id: 2,
      imageUrl:
        "https://media.licdn.com/dms/image/D5603AQFgvm44tLFqaQ/profile-displayphoto-shrink_800_800/0/1705642572630?e=1717027200&v=beta&t=mfeupGmazc7W_Ji5MC6URn3YmyV4BMymUBiKYLTDz7w",
      title: "Laxita Sodhani",
      linkedinId: "in/priyanka-kumari-05bab71b4/",
    },
    {
      id: 3,
      imageUrl:
        "https://media.licdn.com/dms/image/C4D03AQF9w6_yMYgEOQ/profile-displayphoto-shrink_400_400/0/1622207833697?e=1718236800&v=beta&t=UORjrupkyvA8eSjM8Yvy0d4G_eiE5SVDMUJ6hRWbqAI",
      title: "Harshit Joshi",
      linkedinId: "in/prakriti-rani-76a698270/",
    },
    {
      id: 4,
      imageUrl:
        "https://media.licdn.com/dms/image/D4D03AQEc49sBiyOSag/profile-displayphoto-shrink_800_800/0/1670596387073?e=1717027200&v=beta&t=ngQPytsQFJ6YxWciJ75yKfIk3iDPiUi2LGlw75Y2ouc",
      title: "Ansh Arora",
      linkedinId: "in/anshkarora/",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <style>
        {`
          body {
            background-color: #d4ddb7;
          }
        `}
      </style>
      <div className="text-center">
        <h1 className="text-6xl text-center"> Alumini Networks</h1>
        <p className="text-lg mb-5 mt-[1rem]">
          Alumni Connect offers resources for career advancement and updates on
          alumni achievements and events, fostering a strong sense of community
          and support beyond graduation.
        </p>
        <div className="grid grid-cols-3 gap-x-25 gap-y-10 justify-items-center">
          {cards.map((card) => (
            <div
              key={card.id}
              className="w-80 h-[250px] overflow-hidden shadow-a bg-white rounded"
            >
              <img
                className="w-full h-[200px] object-cover rounded-t"
                src={card.imageUrl}
                alt={card.title}
              />
              <div className="px-6 py-2">
                <div className="flex items-center justify-between mb-2">
                  <div
                    className="font-bold text-xl"
                    style={{ marginTop: "-10px" }}
                  >
                    {card.title}
                  </div>
                  <a
                    href={`https://www.linkedin.com/${card.linkedinId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="ri-linkedin-box-fill"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Alumini;
