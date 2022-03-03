/* eslint-disable react/jsx-key */
import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import LineSvg from "../public/assets/svg/line1.svg";
import Instagram from "../public/icon/Instagram.svg";
import LinkedIn from "../public/icon/LinkedIn.svg";
import Twitter from "../public/icon/Twitter.svg";
import Link from "../public/icon/link.svg";
import data from "./../api/data.json";
import { motion } from "framer-motion";

export default function Home() {
  const [list, setlist] = useState(data);
  const [error, setError] = useState("");
  const [limit, setLimit] = useState(12);

  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   setInterval(() => {
  //     setLoading(false);
  //   }, 1500);
  // });
  const [filter, setFiler] = useState("all");
  useEffect(() => {
    switch (filter) {
      case "all":
        return setlist(data);
      case "dark":
        return setlist(data.filter((item) => item.theme === "dark"));
      case "light":
        return setlist(data.filter((item) => item.theme === "light"));
      case "developer":
        return setlist(data.filter((item) => item.tags.includes("Developer")));
      case "designer":
        return setlist(data.filter((item) => item.tags.includes("Designer")));
      default:
        return setlist(data);
    }
  }, [filter]);
  // const filterPortfolio = () => {

  // };

  const onLoadMore = () => {
    setLimit(limit + 12);
    console.log("on load more", limit);
  };

  useEffect(() => {}, []);

  return (
    <div>
      <Head>
        <title>pfolio-site</title>
        <meta
          name="description"
          content="portfolio site inspiration for design and developer"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <motion.div
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // transition={{ delay: 2, duration: 0.1 }}
      >
        <main id="main" className=" bg-[#FAFBFC] scroll-smooth ">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="px-6 md:12 lg:28 xl:px-32 py-4 md:py-6 lg:py-8"
          >
            <div className="flex flex-row items-center justify-between mx-auto">
              <div>
                <h1 className="font-heading text-2xl text-transparent bg-clip-text primary-gradient opacity-65 ">
                  pfolio
                </h1>
              </div>
              <div>
                <h1 className="text-[#E7E7E7] hidden lg:block font-heading px-4 text-sm lg:text-xl">
                  For Designers. Coders. Nerds. Geeks. Creators and Everyone
                  Else
                </h1>
              </div>
              <div className="bg-[#100F10] text-white font-avenir font-normal rounded-4xl px-9 py-2">
                Submit
              </div>
            </div>
          </motion.div>

          {/* Hero Section  */}
          <div id="hero" className="pt-8 bg-[#FAFBFC]">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-4xl md:text-5xl lg:text-7xl font-heading text-black text-center leading-tight lg:leading-snug"
            >
              Get Portfolio <br />
              Inspirations
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="flex items-center mx-auto w-60 lg:w-96 pl-8 lg:pl-20 h-2"
            >
              <Image src={LineSvg} alt="" className="h-full w-full" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="pt-12 mx-auto w-11/12 sm:w-10/12 md:w-6/12 lg:w-5/12"
            >
              <p className="text-[#615F5F] text-lg  font-normal font-body text-center">
                Take inspirations and ideas from top designer’s & developer
                portfolios to create one for your own.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
              className="pt-8"
            >
              <div className=" flex justify-center items-center ">
                <div className="relative ">
                  <div className="absolute "></div>{" "}
                  <input
                    type="text"
                    className={`h-16 lg:h-20 w-80 lg:w-[536px] pl-4 lg:pl-9 bg-white pr-8 rounded-2xl font-roman text-black placeholder-black text-lg shadow-2xl focus:shadow-xl transform transition duration-150 delay-100 focus:border-2 ${
                      error ? "border-red-400" : "border-green-200"
                    }  focus:outline-none`}
                    placeholder="Enter Your Email..."
                    id="email"
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                  />
                  <div className="absolute top-2 right-2">
                    {" "}
                    <button
                      // onClick={addToWaitlist}
                      className="h-12 lg:h-16  w-full px-4 lg:px-10  lg:py-4 text-white font-roman  text-lg rounded-2xl primary-gradient"
                    >
                      Subscribe
                    </button>{" "}
                  </div>
                </div>
              </div>
              <div className="pt-4 mx-auto pb-24  w-11/12 md:8/12 lg:w-5/12">
                <p className="text-[#3F3E3E] text-lg   font-bold font-body text-center">
                  Subscribe to get portfolio inspirations!!
                </p>
              </div>
            </motion.div>
          </div>

          {/* bg-[#100F10] */}
          {/* Portfolio Section */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
            id="portfolio"
            className="w-full mx-auto h-full bg-[#100F10] pb-40  "
          >
            <div className="text-center text-3xl text-[#FF5964] font-heading py-8">
              Portfolio Gallery
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 3 }}
              className="flex flex-row flex-wrap items-center justify-center w-8/12 wrap mx-auto gap-2 lg:gap-4 "
            >
              <div
                onClick={() => setFiler("all")}
                className={`${
                  filter === "all" ? "primary-gradient" : "bg-[#1E1E1E]"
                } text-xs md:text-sm cursor-pointer  px-6 py-1  lg:text-base  lg:px-6 lg:py-2 text-center text-white rounded-3xl`}
              >
                All
              </div>
              <div
                onClick={() => setFiler("dark")}
                className={`${
                  filter === "dark" ? "primary-gradient" : "bg-[#1E1E1E]"
                } text-xs md:text-sm cursor-pointer  px-6 py-1  lg:text-base  lg:px-6 lg:py-2 text-center text-white rounded-3xl`}
              >
                Dark theme
              </div>{" "}
              <div
                onClick={() => setFiler("light")}
                className={`${
                  filter === "light" ? "primary-gradient" : "bg-[#1E1E1E]"
                } text-xs md:text-sm  cursor-pointer px-6 py-1  lg:text-base  lg:px-6 lg:py-2 text-center text-white rounded-3xl`}
              >
                Light theme
              </div>{" "}
              <div
                onClick={() => setFiler("designer")}
                className={`${
                  filter === "designer" ? "primary-gradient" : "bg-[#1E1E1E]"
                } text-xs md:text-sm  cursor-pointer px-6 py-1  lg:text-base  lg:px-6 lg:py-2 text-center text-white rounded-3xl`}
              >
                Designer
              </div>{" "}
              <div
                onClick={() => setFiler("developer")}
                className={`${
                  filter === "developer" ? "primary-gradient" : "bg-[#1E1E1E]"
                } text-xs md:text-sm  cursor-pointer px-6 py-1  lg:text-base  lg:px-6 lg:py-2 text-center text-white rounded-3xl`}
              >
                Developer
              </div>{" "}
            </motion.div>
            <div className="  mx-auto grid px-16 pt-16 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {list.slice(0, limit).map((item, index) => (
                // eslint-disable-next-line react/jsx-key
                <motion.div
                  whileHover={{
                    y: [0, -12],
                    duration: 1,
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.1 }}
                  className=" flex flex-col  rounded-lg border-4 border-white bg-white"
                >
                  <motion.div className="h-[400px] relative">
                    <Image
                      src={item.url}
                      key={index}
                      alt="portfolio image"
                      layout="fill"
                      objectFit="cover"
                      placeholder="blur"
                      loading="eager"
                      priority={true}
                      blurDataURL="https://www.gaithersburgdental.com/wp-content/uploads/2016/10/orionthemes-placeholder-image.png"
                      objectPosition="top"
                      // width="500px"
                      className="cursor-pointer"
                    />{" "}
                  </motion.div>
                  <div className="flex flex-row justify-between py-4 px-2 ">
                    <div className="flex flex-row flex-wrap  gap-2">
                      <div className="bg-[#1E1E1E] text-xs   px-6 py-3    text-center text-white rounded-3xl">
                        {item.theme}
                      </div>
                      {
                        // eslint-disable-next-line react/jsx-key
                        item.tags.map((tag, index) => (
                          <div className="bg-[#1E1E1E] text-xs   px-4 py-3    text-center text-white rounded-3xl">
                            {tag}
                          </div>
                        ))
                      }
                      {/* <div className="bg-[#1E1E1E] text-xs   px-4 py-3    text-center text-white rounded-3xl">
                Developer
              </div>
              <div className="bg-[#1E1E1E] text-xs   px-4 py-3    text-center text-white rounded-3xl">
                Designer
              </div> */}
                    </div>
                    <div className="py-1 px-4">
                      <div className="relative h-8 w-8">
                        <Image
                          src={Link}
                          alt=""
                          onClick={() => window.open(`${item.Name}`, "_blank")}
                          className="h-full w-full cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="py-12 mx-auto pb-8 flex items-center justify-center">
              {limit < 105 && (
                <motion.div
                  whileHover={{
                    y: [0, -10, 0],
                    duration: 1,
                  }}
                  onClick={onLoadMore}
                  className="px-6 md:px-8 lg:px-12 py-2 md:py-3 lg:py-4 cursor-pointer text-white text-sm  md:text-base primary-gradient rounded-2xl"
                >
                  Load More
                </motion.div>
              )}
            </div>
          </motion.div>
          <div id="footer" className="w-full h-screen bg-white   s ">
            <div className="pt-40">
              <div className="text-4xl md:text-5xl lg:text-7xl font-heading text-black text-center leading-tight lg:leading-snug">
                Design Portfolios <br /> from
                <span
                  onClick={() =>
                    window.open("https://www.pfolio.me/", "_blank")
                  }
                  className="text-transparent bg-clip-text cursor-pointer  duration-100 primary-gradient opacity-65"
                >
                  {" "}
                  pfolio.me
                </span>
              </div>
              <div className="flex items-center mx-auto w-60 lg:w-96 pl-8 lg:pl-20 h-2">
                <Image src={LineSvg} alt="" className="h-full w-full" />
              </div>
              {/* <h1 className="text-7xl text-[#100F10] font-heading  leading-tight text-center">
        Design Portfolios <br />
        from{" "}
        <span className="text-transparent bg-clip-text cursor-pointer  duration-100 primary-gradient opacity-65">
          pfolio.me
        </span>
      </h1>
      <div className="flex items-center mx-auto w-96 pl-32  h-2">
        <Image src={LineSvg} alt="" className="h-full w-full" />
      </div> */}
            </div>
            <div className="pt-20">
              <div className=" flex justify-center items-center ">
                <div className="relative ">
                  <div className="absolute "></div>{" "}
                  <input
                    type="text"
                    className={`h-20 w-80 lg:w-[536px] pl-4 lg:pl-9 pr-8 rounded-2xl font-roman text-black placeholder-black text-lg shadow-lg border-2 ${
                      error ? "border-red-400" : "border-primary-1"
                    }  focus:outline-none`}
                    placeholder="Enter Your Email..."
                    id="email"
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                  />
                  <div className="absolute top-2 right-2">
                    {" "}
                    <button
                      // onClick={addToWaitlist}
                      className="h-16  w-full px-2 lg:px-10  py-4 text-black font-roman  text-lg rounded-2xl primary-gradient"
                    >
                      Subscribe
                    </button>{" "}
                  </div>
                </div>
              </div>
              <div className="pt-4 mx-auto  w-5/12">
                <p className="text-[#3F3E3E] text-lg pb-8  font-bold font-body text-center">
                  Subscribe to get portfolio inspirations!!
                </p>
              </div>
            </div>
          </div>
          <div className="w-screen bg-[#1E1E1E] h-20 flex items-center justify-center">
            <div className="flex items-center justify-center mx-auto gap-3">
              <div className="relative h-8 w-8">
                <Image
                  src={LinkedIn}
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/company/pfolio-me/",
                      "_blank"
                    )
                  }
                  alt=""
                  className="h-full w-full"
                />
              </div>
              <div className="relative h-8 w-8">
                <Image
                  src={Twitter}
                  alt=""
                  onClick={() =>
                    window.open("https://twitter.com/pfolio_me", "_blank")
                  }
                  className="h-full w-full"
                />
              </div>{" "}
              <div className="relative h-8 w-8">
                <Image
                  src={Instagram}
                  alt=""
                  onClick={() =>
                    window.open(
                      "https://www.instagram.com/pfolio_design/",
                      "_blank"
                    )
                  }
                  className="h-full w-full"
                />
              </div>
            </div>
          </div>
        </main>
      </motion.div>
    </div>
  );
}

// {
//   "Name": "http://www.elisefu.com/",
//   "url": "s3://firstletter-multimedia/screencapture-elisefu-2022-02-28-04_08_00 (1).png",
//   "Tags": "Designer",
//   "theme": "light",
//   "Include": "yes"
// },
