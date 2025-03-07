import React, { useEffect } from "react";
import { SactionContainer } from "../Common/Containers";
import SideBarMembership from "./SideBarMembership";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import avatar from "../../assets/image/avatar.png";
import spaceximg1 from "../../assets/image/spaceximg1.png";
import spaceximg2 from "../../assets/image/spaceximg2.png";
import openaiimg3 from "../../assets/image/openaiimg3.png";
import { Quotations, Ratings, RatingsTotal } from "../Common/Feedbacks";
import { NavLink } from "react-router-dom";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import StarBorder from "@mui/icons-material/StarBorder";
import { OutlinedButtonDark } from "../Common/Buttons";

const SpaceXMembership = () => {
  return (
    <SactionContainer bgColor="#F5F8FF" container={false}>
      <div className="col-md-8  col-sm-12 extraMg  pt-5  mb-5 pb-5 px-4">
        <div className="card card-border-c ">
          <div className="card-body p-0 p-xl-5">
            
            <h3 className="mb-3 px-1 pt-3">
              <strong>SpaceX Membership Club (SPX Token)</strong>
            </h3>
            
            <div className="d-flex align-items-center mb-3 ">
              <p className="text-basic  mb-0 ml-1 Opacity">
                {" "}
                Admin: <strong className="DarkText bold-5">John Doe</strong>{" "}
                <span>&#8226;</span>
              </p>
              <CalendarTodayOutlinedIcon
                sx={{ color: "#888", ml: 1, fontSize: "15px" }}
              />
              <p className="text-basic  mb-0 ml-1 Opacity">
                {" "}
                24/7/2024 <span>&#8226;</span>{" "}
              </p>{" "}
              <GroupsOutlinedIcon
                sx={{ color: "#888", ml: 1, fontSize: "25px" }}
              />
              <p className="text-basic mb-0 ml-1 Opacity"> 222 Members </p>{" "}
            </div>
            
            <img src={spaceximg1} alt="" className=" mt-2" />
            <h5 className="mt-4 text-dark mont-font">
              <strong>Who are SpaceX?</strong>
            </h5>
            <p  className=" LightText" style={{fontSize:"12px"}}>
              SpaceX, founded by Elon Musk in 2002, is a trailblazing aerospace
              manufacturer and space transportation company that has transformed
              the space industry with its cutting-edge technology and ambitious
              missions. Its development of reusable rockets, notably the Falcon
              9, has significantly lowered the cost of accessing space,
              facilitating a wide array of missions including satellite
              deployments, International Space Station resupply, and the
              ambitious goal of interplanetary exploration with the Starship
              project. SpaceX’s vision extends beyond Earth's orbit, aiming to
              make life multiplanetary by establishing a human presence on Mars.
            </p>
            <p  className=" LightText" style={{fontSize:"12px"}}>
              Starlink, a subsidiary project of SpaceX, aims to provide global
              high-speed internet coverage through a constellation of low Earth
              orbit (LEO) satellites. Launched in 2015, Starlink addresses the
              challenge of providing internet access to remote and underserved
              areas around the world. By deploying thousands of small
              satellites, Starlink creates a network that can deliver fast and
              reliable internet services with low latency, which is particularly
              beneficial for regions with poor terrestrial infrastructure. This
              initiative not only enhances global connectivity but also
              generates substantial revenue to support SpaceX’s broader space
              exploration goals.
            </p>
          
          </div>
          <hr />
          <div className="p-0 p-xl-3">
           <h5 className="mt-4 text-dark mont-font">
              <strong>Elon Musk presentation on SPaceX</strong>
            </h5>
            <img src={spaceximg2} alt="" className=" mt-2" />
            <p className="text-basic text-dark mt-3 bold-5">
              Space travel is crucial for advancing scientific knowledge,
              fostering technological innovation, and ensuring the long-term
              survival and expansion of humanity beyond Earth.
            </p>
            <div className="">
              <Quotations
                text={
                  <span className="bold-5" >SpaceX is a once-in-a-lifetime company because it’s fundamentally changing humanity’s destiny.</span>
                }
                
                by={"Chamath Palihapitiya"}
              />
              <Quotations
                text={
                  
                  <span className="bold-5" >I think space is our only hope, and we are on the verge of commercializing it.</span>
                }
                by={"Jeff Bezos"}
              />
            </div>
          
          </div>
        </div>
        <div className="card card-border-c   mt-4">
          <div className="card-body p-0 p-xl-5">
           
            <h5 className="text-dark mont-font">
              <strong>ChatGPT Box Here</strong>
            </h5>
           
            {[
              "Ask ChatGPT a question abut the company?",
              "Suggested questions list here.",
              "Nam libero justo laoreet sit amet.",
              "Tempus imperdiet nulla malesuada",
              "eque sodales ut etiam sit amet nisl",
              "Tristique nulla aliquet enim tortor at auctor",
              "Nam libero justo laoreet sit amet.",
              "Tempus imperdiet nulla malesuada",
            ].map((text, index) => (
              <div className="d-flex mt-3 align-align-items-center" key={index}>
                <div className="col-1 pl-0">
                  <h4 className="text-warning warning-bullet mb-0">{">"}</h4>
                </div>
                <div className="col-11 pl-0">
                  <h6 className="mb-0 h5-sm bold-5 mont-font" >{text}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="card card-border-c mt-3">
          <div className="card-body p-0 p-xl-5">
          
            <h5 className=" text-dark mont-font">
              <strong>Open AI Discussion Channel</strong>
            </h5>
            <img src={openaiimg3} alt="" className=" mt-2" />
          </div>
        </div>
        <div className="card card-border-c mt-3 ">
          <div className="card-body p-0 p-xl-3">
           
            <h5 className=" text-dark mont-font">
              <strong>Learn About Different Aspects Of iVestClub Technologies</strong>
            </h5>
            <div className="">
              <RatingsTotal />
              <div className="mt-3">
                <Ratings
                  heading={"Founders and Board of Directors of OpenAI"}
                  text={[
                    "Durk Kingma, Co-Founder",
                    "Greg Brockman, Co-Founder,",
                    "Ilya Sutskever, Co-Founder",
                    "See More",
                    ".",
                    "Number of employees (December 2022): 660",
                  ]}
                />
                <hr />
                <Ratings
                  heading={"Shareholders / Investors"}
                  text={[
                    "OpenAI has total 34 investors",
                    "9 are institutional investors including Microsoft and 28 others (nb click to expand list etc)",
                    "5 are Angel investors including Peter Thiel and 4 others.",
                  ]}
                />
                <hr />
                <Ratings
                  heading={"Valuations and  Funding rounds"}
                  text={[
                    "OpenAI has total 7 funding rounds",
                    "OpenAI's largest funding round was a Series E round held on Jan 23, 2023 for $10B.",
                    "OpenAI' valuation is $80B as on Feb 20, 2024.",

                    ".",
                    "Create another section here for Competitors",
                  ]}
                />
                <div className="text-center">
                  <NavLink
                    to={"/"}
                    style={{ textDecoration: "underline" }}
                    className="pt-0  mb-3 mt-3"
                  >
                    Load More
                  </NavLink>
                </div>
                <hr />
              </div>
            </div>
          </div>
        </div>
        <div className="card card-border-c mt-3">
          <div className="card-body p-0 p-xl-5">
            
            <div className="feedbackHeading">Ask For Information About iVestClub Technologies</div>
            <p className="text-basic mb-0 mt-3">Rate This Club</p>
            <Rating
              name="text-feedback"
              value={0}
              precision={0.5}
              icon={<StarIcon sx={{ fontSize: 20, color: "gold" }} />}
              emptyIcon={<StarBorder sx={{ fontSize: 20, color: "gold" }} />}
            />
            <p className="mb-0 text-basic  mt-3 ">Your Feed Back</p>
            <textarea
              className="form-control"
              style={{ height: "150px" }}
            ></textarea>
            <div className="my-5">
              <OutlinedButtonDark text={"Submit"} />
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-sm-12 extraMg pt-5 mb-5">
        <SideBarMembership />
      </div>
    </SactionContainer>
  );
};

export default SpaceXMembership;
