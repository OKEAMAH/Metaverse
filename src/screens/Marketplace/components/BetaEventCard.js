import React from "react";
import liveDot from "../assets/liveDot.svg";
import eventsArrow from "../assets/eventsArrow.svg";
import whitePickaxe from "../assets/whitePickAxe.svg";
import whiteCalendar from "../assets/whiteCalendar.svg";
import getFormattedNumber from "../../Caws/functions/get-formatted-number";
// import betaMyEarnings from '../assets/betaMyEarnings.png'

const BetaEventCard = ({ data, onOpenPopup,userEarnUsd }) => {
  return (
    <div
      className={` ${
        data.title === "Avalanche"
          ? "upcoming-mint-wrapper-avax"
          : data.title === "CoinGecko"
          ? "upcoming-mint-wrapper-coingecko"
          : data.title === "Conflux (CFX)"
          ? "upcoming-mint-wrapper-conflux"
          : data.title === "Base"
          ? "upcoming-mint-wrapper-base"
          : data.title === "Gate.io (GT)"
          ? "upcoming-mint-wrapper-gate"
          : "upcoming-mint-wrapper-coin98"
      } upcoming-mint-wrapper upcoming-mint-wrapper2 flex-column flex-lg-row d-flex align-items-center justify-content-between px-0`}
      onClick={onOpenPopup}
      style={{ cursor: "pointer" }}
    >
      <div className="d-flex col-12 col-lg-5 align-items-start align-items-lg-center  p-3 gap-3">
        <img src={data.logo} width={36} height={36} alt="" />
        <div className="d-flex flex-column justify-content-between gap-2 gap-lg-0">
          <div className="d-flex flex-column">
            <div className="d-flex align-items-center gap-2">
              <h6 className="events-page-title mb-0">{data.title}</h6>
              <div
                className={`position-relative ${
                  data.eventStatus === "Live"
                    ? "events-page-status-tag-live"
                    : data.eventStatus === "Expired"
                    ? "events-page-status-tag-expired"
                    : "events-page-status-tag-upcoming"
                } px-2 d-flex align-items-center justify-content-center gap-0`}
                style={{top: 0}}
              >
                {data.eventStatus === "Live" && (
                  <div
                    class="pulsatingDot"
                    style={{ width: 7, height: 7, marginRight: 5 }}
                  ></div>
                )}
                <span>{data.eventStatus}</span>
              </div>
            </div>
            <h6 className="events-page-rewards">{data.totalRewards}</h6>
          </div>
          <span
            className="events-page-details d-none d-lg-flex align-items-center gap-2"
            onClick={onOpenPopup}
          >
            Details
            <img src={eventsArrow} alt="" />
          </span>
        </div>
      </div>

      <div className="d-flex align-items-center gap-3">
        <div className="d-flex col-6 col-lg-3 flex-column align-items-start align-items-lg-center">
          <div className="mybetaearnings">
            <h6 className="event-my-earnings3 mb-3">${getFormattedNumber(userEarnUsd, 2)}</h6>
          </div>
        </div>
        <div className="d-flex flex-column d-flex d-lg-none gap-3">
          <div className="d-flex align-items-center gap-2">
            <img src={whitePickaxe} alt="" />
            <span className="white-events-text mb-0">{data.eventType}</span>
          </div>
          <div className="d-flex align-items-center gap-2">
            <img src={whiteCalendar} alt="" />
            <span className="white-events-text mb-0">{data.eventDate}</span>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column d-none d-lg-flex gap-3 pick-and-calendar">
        <div className="d-flex align-items-center gap-2">
          <img src={whitePickaxe} alt="" />
          <span className="white-events-text mb-0">{data.eventType}</span>
        </div>
        <div className="d-flex align-items-center gap-2">
          <img src={whiteCalendar} alt="" />
          <span className="white-events-text mb-0">{data.eventDate}</span>
        </div>
      </div>
      <span
        className="events-page-details d-flex d-lg-none my-3 align-items-center gap-2"
        onClick={onOpenPopup}
      >
        Details
        <img src={eventsArrow} alt="" />
      </span>
      <img
        src={data.backgroundImage}
        alt=""
        className="upcoming-mint-img d-none d-lg-flex"
      />
    </div>
  );
};

export default BetaEventCard;
