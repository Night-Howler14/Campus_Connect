import React from "react";
import Divider from "../../components/Divider";
// import myLogo from "./logo (2).png";
// import ptImage from "../../../public/Images/pt.jpg";
// import prImage from "/Images/pr.jpeg";
// import rrImage from "/Images/rr.jpg";

function App() {
  const emailAddresses =
    "pratush.gupta21b@iiitg.ac.in, prerna.singh21b@iiitg.ac.in, roshan.raj21b@iiitg.ac.in";

  return (
    <div className="bg-a bg-cover bg-center">
      <header className="items-left justify-left text-white relative">
        <div className="flex content-container">
          <div className="flex flex-col paragraph p-20 flex-1">
            <h1 className="text-5xl font-bold text-black mt-30 mb-18 ml-90">
              About Us
              <Divider />
            </h1>
            <span className="text-lg text-black ml-90 flex w-[40rem] leading-7">
              <br />
              Share your services or product offerings here. Present them as
              simple headers that can lead out to their pages where you can
              expound on them further. You can also use this space for other
              purposes where the information is best presented as mere teasers
              to other individualized pages.
              <br /> Share your services or product offerings here. Present them
              as simple headers that can lead out to their pages where you can
              expound on them further. You can also use this space for other
              purposes where the information is best presented as mere teasers
              to other individualized pages.
              <br /> Share your services or product offerings here. Present them
              as simple headers that can lead out to their pages
              {/* </span> */}
            </span>

            {/* text-xl w-40 h-[2rem] rounded flex items-center justify-center text-white mt-[3rem] ml-90 bg-b hover:bg-c */}
            <a
              className="text-xl w-40 h-[2rem] rounded flex items-center justify-center text-white mt-[3rem] ml-90 bg-b hover:bg-c"
              href={`mailto:${emailAddresses}`}
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Mail Us
            </a>
          </div>
          <div className="flex flex-col sections-container flex-1 items-end pr-20">
            {/* Section 1 */}
            <div className="flex section  mr-70 mb-10 w-500 p-1 bg-c rounded-lg">
              <div className="w-[10rem] rounded-full mr-4 ml-5 mt-4 mb-2 bg-cover">
                <img
                  src="/Images/pt.jpg"
                  className="w-[10rem] rounded-full"
                  alt="Pratush Gupta"
                ></img>
              </div>
              <div className="flex flex-col justify-center">
                <a
                  className="text-black no-underline"
                  href="https://www.linkedin.com/in/pratush-gupta-a03785223/"
                >
                  <h2 className="text-2xl mb-0.5">Pratush Gupta (2101153)</h2>
                </a>
                <p className="text-base mb-2 text-black">
                  Boost your product and service's credibility by adding
                  testimonials from your clients.
                  <br />
                  <span className="font-bold">Phone No. - </span> +91 75790
                  88312
                  <br />
                  <span className="font-bold">Email Id - </span>{" "}
                  pratush.gupta21b@iiitg.ac.in
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="flex section mr-70 mb-10 w-500 p-1 bg-c rounded-lg">
              <div className="w-[10rem] rounded-full mr-4 ml-5 mt-4 mb-2 bg-cover">
                <img
                  src="/Images/pr.jpeg"
                  className="w-[10rem] rounded-full"
                  alt="Prerna Singh"
                ></img>
              </div>
              <div className="flex flex-col justify-center">
                <a
                  className="text-black no-underline"
                  href="https://www.linkedin.com/in/pratush-gupta-a03785223/"
                >
                  <h2 className="text-2xl mb-0.5">Prerna Singh (2101155)</h2>
                </a>
                <p className="text-base mb-2 text-black">
                  Boost your product and service's credibility by adding
                  testimonials from your clients.
                  <br />
                  <span className="font-bold">Phone No. - </span> +91 62024
                  776112
                  <br />
                  <span className="font-bold">Email Id - </span>{" "}
                  prerna.singh21b@iiitg.ac.in
                </p>
              </div>
            </div>
            {/* Section 3 */}
            <div className="flex section  mr-70 mb-10 w-500 p-1 bg-c rounded-lg">
              <div className="w-[10rem] rounded-full mr-4 ml-5 mt-4 mb-2 bg-cover">
                <img
                  src="/Images/rr.jpg"
                  className="w-[10rem] rounded-full"
                  alt="Roshan Raj"
                ></img>
              </div>
              <div className="flex flex-col justify-center">
                <a
                  className="text-black no-underline"
                  href="https://www.linkedin.com/in/pratush-gupta-a03785223/"
                >
                  <h2 className="text-2xl mb-0.5">Roshan Raj (2101175)</h2>
                </a>
                <p className="text-base mb-2 text-black">
                  Boost your product and service's credibility by adding
                  testimonials from your clients.
                  <br />
                  <span className="font-bold">Phone No. - </span> +91 97715
                  29248
                  <br />
                  <span className="font-bold">Email Id - </span>{" "}
                  roshan.raj21b@iiitg.ac.in
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
