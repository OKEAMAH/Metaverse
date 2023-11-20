import React, { useState, useEffect } from "react";
import coin98 from "./assets/coin98.svg";
import coingecko from "./assets/coingecko.svg";
import gate from "./assets/gate.svg";
import baseLogo from "./assets/baseLogo.svg";
import dypius from "./assets/dypIcon.svg";
import cyanArrow from "./assets/cyanArrow.svg";
import conflux from "./assets/conflux.svg";
import cyanDate from "./assets/cyanDate.svg";
import cyanDollar from "./assets/cyanDollar.svg";
import cyanExplore from "./assets/cyanExplore.svg";
import Countdown from "react-countdown";
import getFormattedNumber from "../../Utils.js/hooks/get-formatted-number";

const renderer = ({ days, hours, minutes }) => {
  return (
    <>
      <div className="d-flex align-items-center gap-1">
        <div className="d-flex flex-column align-items-center">
          <h6 className="profile-time-number mb-0">
            {days < 10 ? "0" + days : days}
          </h6>
          <span className="profile-time-desc mb-0">Days</span>
        </div>
        <h6 className="profile-time-number mb-0">:</h6>
        <div className="d-flex flex-column align-items-center">
          <h6 className="profile-time-number mb-0">
            {hours < 10 ? "0" + hours : hours}
          </h6>
          <span className="profile-time-desc mb-0">Hours</span>
        </div>
        <h6 className="profile-time-number mb-0">:</h6>
        <div className="d-flex flex-column align-items-center">
          <h6 className="profile-time-number mb-0">
            {minutes < 10 ? "0" + minutes : minutes}
          </h6>
          <span className="profile-time-desc mb-0">Minutes</span>
        </div>
      </div>
    </>
  );
};
const ActiveProfileEvent = ({ onOpenEvent, event, userEarnedUsd }) => {
  return (
    <div
      className="profile-event-item d-flex flex-column position-relative"
      onClick={onOpenEvent}
      style={{ transform: "translateX(0px)" }}
    >
      <div className="profile-event-top d-flex align-items-center justify-content-between p-2">
        <div className="d-flex align-items-center gap-2">
          <img
            src={
              event.title === "CoinGecko"
                ? coingecko
                : event.title === "Conflux"
                ? conflux
                : event.title === "Base"
                ? baseLogo
                : event.title === "Dypius"
                ? dypius
                : gate
            }
            height={16}
            width={16}
            alt=""
          />
          <div className="d-flex flex-column">
            <h6 className="profile-event-title d-flex align-items-center gap-1 mb-0">
              {event.title}
              <div
                className="profile-event-tag position-relative d-flex align-items-center justify-content-center px-1"
                style={{ top: 0, right: 0 }}
              >
                {event.status === "Live" && (
                  <div
                    class="pulsatingDot"
                    style={{ width: 7, height: 7, marginRight: 5 }}
                  ></div>
                )}
                <span
                  className="profile-event-tag-text mb-0"
                  style={{ color: "#B71061" }}
                >
                  {event.status}
                </span>
              </div>
            </h6>
            <span className="profile-event-rewards mb-0">
              {event.totalRewards}
            </span>
          </div>
        </div>
        <Countdown renderer={renderer} date={event.eventDuration} />
      </div>
      <div className="profile-event-bottom p-2 d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center gap-1">
          <img src={cyanExplore} height={15} width={15} alt="" />
          <span className="mb-0 event-bottom-text">Explore & Mine</span>
        </div>
        <div className="d-flex align-items-center gap-1">
          {event.title === "Dypius" ? (
            <img src={dypius} height={15} width={15} alt="" />
          ) : (
            <img src={cyanDollar} height={15} width={15} alt="" />
          )}
          <span className="mb-0 event-bottom-text">
            {event.title === "Dypius" ? (
              "0 DYP"
            ) : (
              <>${getFormattedNumber(userEarnedUsd, 2)}</>
            )}
          </span>
        </div>
        <div className="d-flex align-items-center gap-1">
          <img src={cyanDate} height={15} width={15} alt="" />
          <span className="mb-0 event-bottom-text">{event.date}</span>
        </div>
        <img src={cyanArrow} height={15} width={15} alt="" />
      </div>
    </div>
  );
};

export default ActiveProfileEvent;
