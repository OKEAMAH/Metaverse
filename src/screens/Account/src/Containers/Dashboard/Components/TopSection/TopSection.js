import React from "react";
import "./_topsection.scss";
import globe from "./assets/globe.png";
import leaderboardIcon from "./assets/leaderboardIcon.svg";
import star from "./assets/star.svg";
import { NavLink } from "react-router-dom";
import Countdown from "react-countdown";
import dypIcon from "./assets/dypIcon.svg";
import iDypIcon from "./assets/iDypIcon.svg";
import Slider from "react-slick";

const renderer = ({ days, hours, minutes }) => {
  return (
    <span className="livein-timer" style={{ fontSize: "18px" }}>
      {days}d : {hours}h : {minutes}m
    </span>
  );
};

const TopSection = ({ onOpenLeaderboard, onOpenGlobalLeaderboard }) => {
  let testDay = new Date("2024-05-20T11:00:00.000+02:00");

  var settings = {
    dots: false,
    arrows: false,
    dotsClass: "button__bar",
    infinite: true,
    speed: 1000,
    // autoplay: true,
    // autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };

  const fakearr = [1, 2, 3];

  const dummyPromotions = [
    {
      item_type: "CAWS",
      item_id: 5,
      reward_type: "Stars",
      reward_amount: 25,
      expires: testDay,
      price: 0.532,
    },
    {
      item_type: "CAWS",
      item_id: 7,
      reward_type: "DYP",
      reward_amount: 300,
      expires: testDay,
      price: 0.637,
    },
    {
      item_type: "CAWS",
      item_id: 12,
      reward_type: "iDYP",
      reward_amount: 3500,
      expires: testDay,
      price: 0.122,
    },
  ];

  return (
    <div className="row">
      <div className="col-12 col-lg-4">
        <div className="diagonal-button-wrapper  d-flex align-items-center">
          <div className="first-diagonal-btn purple-container p-2  d-flex align-items-end" onClick={onOpenLeaderboard}>
            <div className="d-flex align-items-end gap-2">
              <img src={leaderboardIcon} width={60} height={60} alt="" />
              <h6 className="mb-0 leaderboard-title-span diagonal-title font-oxanium">
                Chains Leaderboard
              </h6>
            </div>
          </div>
          <div className="second-diagonal-btn purple-container p-2  d-flex justify-content-end" onClick={onOpenGlobalLeaderboard}>
            <div
              className="d-flex  align-items-start gap-2"
              style={{ height: "fit-content" }}
            >
              <h6 className="mb-0 leaderboard-title-span diagonal-title font-oxanium">
                Global Leaderboard
              </h6>
              <img src={star} width={60} height={60} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 col-lg-8 ps-lg-0 mt-3 mt-lg-0">
        <div className="purple-container promotion-container p-3">
          <Slider {...settings}>
            {dummyPromotions.map((item, index) => (
              <div
                key={index}
                className="d-flex flex-column flex-lg-row gap-4 gap-lg-0 align-items-center justify-content-between w-100"
              >
                <div className="d-flex align-items-center gap-2">
                  <img
                    src={`https://mint.dyp.finance/thumbs150/${item.item_id}.png`}
                    className="promotion-img"
                    alt=""
                  />
                  <div className="d-flex flex-column gap-2">
                    <span className="promotion-header">Today's Promotion:</span>
                    <div className="d-flex align-items-center gap-2">
                      <h6 className="promotion-item-title mb-0">
                        {item.item_type} #{item.item_id}
                      </h6>
                      <span className="promotion-item-price">0.532 ETH</span>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-column">
                  <span className="promotion-header">Expires In:</span>

                  <Countdown date={item.expires} renderer={renderer} />
                </div>
                <div className="d-flex flex-column align-items-center align-items-lg-end gap-2">
                  <div className="d-flex align-items-center gap-2">
                    <span className="promotion-header">
                      Buy now and recieve:
                    </span>
                    <div className="d-flex align-items-center gap-1">
                      <img
                        src={
                          item.reward_type === "Stars"
                            ? star
                            : item.reward_type === "DYP"
                            ? dypIcon
                            : iDypIcon
                        }
                        height={15}
                        width={15}
                        alt=""
                      />
                      <span
                        className="promotion-header"
                        style={{ color: "rgba(244, 226, 123, 1)" }}
                      >
                        {item.reward_amount} {item.reward_type}
                      </span>
                    </div>
                  </div>
                  <NavLink
                    to={"/marketplace/caws"}
                    className={`btn purple-btn2 px-4 d-flex gap-2 align-items-center`}
                  >
                    Buy Now
                  </NavLink>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
