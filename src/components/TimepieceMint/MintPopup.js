import React from "react";
import avaxMobileBg from "./assets/avaxMobileBg.png";
import coin98MobileBg from "./assets/coin98MobileBg.png";
import baseMobileBg from "./assets/baseMobileBg.png";
import confluxMobileBg from "./assets/confluxMobileBg.png";
import skaleTreasureHunt from './assets/skaleTreasureHunt.png'
import closePopup from "../LandPopup/closePopup.svg";
import { Link, NavLink } from "react-router-dom";
import whiteExplore from "../../screens/Account/src/Components/WalletBalance/assets/whiteExplore.svg";

const MintPopup = ({ active, onClose, data }) => {
  return (
    <div
      className={`mint-popup ${
        active && "popup-active"
      } p-4 d-flex flex-column align-items-center justify-content-center`}
    >
      <div
        className="w-100 d-flex align-items-center justify-content-end"
        style={{ height: 1 }}
      >
        <img
          src={closePopup}
          width={20}
          height={20}
          alt=""
          style={{ cursor: "pointer" }}
          onClick={onClose}
        />
      </div>

      {data.title === "CoinGecko" ? (
        <>
          <div className="d-flex align-items-center justify-content-center">
            <div className="pulsatingDot"></div>
            <h6 className="mint-popup-title  mb-0" style={{ color: "#18FFFF" }}>
              Live CoinGecko Beta Pass NFT
            </h6>
          </div>
          <h6 className="mint-popup-title">Candy Rewards</h6>
        </>
      ) : data.title === "SKALE" ? (
        <>
         <div className="d-flex align-items-center gap-2 mt-3 mt-lg-0 mb-4 mb-lg-0">
         <div className="d-flex flex-column align-items-center">
         <div className="d-flex align-items-center justify-content-center">
            <div className="pulsatingDot"></div>
            <h6 className="mint-popup-title  mb-0" style={{ color: "#18FFFF" }}>
            200,000 WOD Tokens
            </h6>
          </div>
          <h6 className="mint-popup-title m-0">$75,000 Premium Subscriptions</h6>
         </div>
        </div>
        </>
      ) : data.title === "DogeCoin" ? (
        <>
          <div className="d-flex align-items-center justify-content-center">
            <div className="pulsatingDot"></div>
            <h6 className="mint-popup-title  mb-0" style={{ color: "#18FFFF" }}>
              Live Giveaway
            </h6>
          </div>
          <h6 className="mint-popup-title">DogeCoin Beta Pass</h6>
        </>
      ): data.title === "MULTIVERSX" ? (
        <>
          <div className="d-flex align-items-center justify-content-center">
            <div className="pulsatingDot"></div>
            <h6 className="mint-popup-title  mb-0" style={{ color: "#18FFFF" }}>
            350,000 WOD Tokens
            </h6>
          </div>
          <h6 className="mint-popup-title">BNB Chain Game Expedition</h6>
        </>
      ) : data.title === "CoinMarketCap" ? (
        <>
          <div className="d-flex align-items-center justify-content-center">
            <div className="pulsatingDot"></div>
            <h6 className="mint-popup-title  mb-0" style={{ color: "#18FFFF" }}>
              Live Giveaway
            </h6>
          </div>
          <h6 className="mint-popup-title">CoinMarketCap Beta Pass</h6>
        </>
      ) : data.title === "Daily Bonus" ? (
        <>
          <div className="d-flex align-items-center justify-content-center">
            {/* <div className="pulsatingDot"></div> */}
            <h6 className="mint-popup-title  mb-0" style={{ color: "#18FFFF" }}>
              {data.title}
            </h6>
          </div>
          <h6 className="mint-popup-title">{data.subTitle}</h6>
        </>
      ) : data.title === "Treasure Hunt" ? (
        <>
          <div className="d-flex align-items-center justify-content-center">
            <div className="pulsatingDot"></div>
            <h6 className="mint-popup-title  mb-0" style={{ color: "#18FFFF" }}>
            150,000 WOD Tokens & 500 Premium Subscriptions
            </h6>
          </div>
          <h6 className="mint-popup-title">Dypius Treasure Hunt</h6>
        </>
      ) : (
        <div className="d-flex align-items-center gap-2 mb-4 mb-lg-0">
          <div className="d-flex align-items-center justify-content-center">
            <div className="pulsatingDot"></div>
            <h6 className="mint-popup-title  mb-0" style={{ color: "#18FFFF" }}>
              Live
            </h6>
          </div>
          <h6 className="mint-popup-title m-0"> NFT Giveaway</h6>
        </div>
      )}

      <img
        src={data.img}
        className={`mint-popup-img mt-5 ${
          data.title === "Daily Bonus" && "bottom-auto-bg"
        } `}
        style={{
          maxWidth: "100%",
          height: data.title === "Daily Bonus" ? 370 : "",
        }}
        alt=""
      />
      {data.title === "Daily Bonus" && (
        <div className="col-12 mb-3 row mx-0 gap-lg-0 gap-2 align-items-center justify-content-center px-2 py-1">
          <div className="col-lg-4 available-mint-bg d-flex flex-column bottom-auto-bg">
            <span className="uppertext">December 1, 2023</span>
            <span className="bottomtext">Launch Date</span>
          </div>
          <div className="col-lg-4 available-mint-bg d-flex flex-column bottom-auto-bg">
            <span className="uppertext">BNB and opBNB</span>
            <span className="bottomtext">Available Chains</span>
          </div>
          <div className="col-lg-4 available-mint-bg d-flex flex-column bottom-auto-bg">
            <span className="uppertext">6</span>
            <span className="bottomtext">Available Prizes</span>
          </div>
        </div>
      )}
      {data.title === "Treasure Hunt" ? (
        <div className="available-mint-bg d-flex align-items-center justify-content-center px-2 py-1">
          {data.title === "Treasure Hunt" && (
            <span className="popup-available-mint">
              Explore the downtown area and use your <img src={whiteExplore} className="white-explore" alt=""/> to generate rewards!
            </span>
          )}
        </div>
      ) : data.title === "DogeCoin" ? (
        <div className="available-mint-bg d-flex align-items-center justify-content-center px-2 py-1">
          {data.title === "DogeCoin" && (
            <span className="popup-available-mint">
              Get access to the game and a unique event filled with surprises
              and rewards!
            </span>
          )}
        </div>
      ) : data.title === "MULTIVERSX" ? (
        <div className="available-mint-bg d-flex align-items-center justify-content-center px-2 py-1">
          {data.title === "MULTIVERSX" && (
            <span className="popup-available-mint">
             Participate in the BNB Chain Airdrop Alliance Program and complete the tasks to receive WOD tokens airdrop.
            </span>
          )}
        </div>
      ): data.title === "CoinMarketCap" ? (
        <div className="available-mint-bg d-flex align-items-center justify-content-center px-2 py-1">
          {data.title === "CoinMarketCap" && (
            <span className="popup-available-mint">
              Get access to the game and a unique event filled with surprises
              and rewards!
            </span>
          )}
        </div>
      ) : data.title === "SKALE" ? (
        <div className="available-mint-bg d-flex align-items-center justify-content-center px-2 py-1">
        {data.title === "SKALE" && (
          // <span className="popup-available-mint">
          //   Explore the downtown area and use your <img src={whiteExplore} className="white-explore" alt=""/> to generate rewards!
          // </span>
          <span className="popup-available-mint">
      Participate in the BNB Chain Airdrop Alliance Program and complete the tasks to receive WOD tokens airdrop.
        </span>
        )}
      </div>
      )  : null}
      {
        data.title === "Treasure Hunt" ? (
          <Link
            onClick={onClose}
            to={"/marketplace/events/treasure-hunt"}
            state={{ event: data.state }}
            className="linear-border"
          >
            <button className="btn filled-btn px-4">More</button>
          </Link>
        ) : data.title === "DogeCoin" ? (
          <Link
            onClick={onClose}
            to={"/marketplace/beta-pass/doge"}
            state={{ event: data.state }}
            className="linear-border"
          >
            <button className="btn filled-btn px-4">More</button>
          </Link>
        ) : data.title === "MULTIVERSX" ? (
          <Link
            onClick={onClose}
            to={"https://dappbay.bnbchain.org/campaign/bnb-chain-airdrop-alliance-program/105-bnb-chain-game-expedition"}
            state={{ event: data.state }}
            className="linear-border"
          >
            <button className="btn filled-btn px-4">More</button>
          </Link>
        ) : data.title === "SKALE" ? (
          <a
            onClick={onClose}
            href="https://dappbay.bnbchain.org/campaign/bnb-chain-airdrop-alliance-program/104-dypians-discovery-quest"
            target="_blank"
            className="linear-border"
          >
            <button className="btn filled-btn px-4">More</button>
          </a>
        ) : data.title === "CoinMarketCap" ? (
          <Link
            onClick={onClose}
            to={"/marketplace/beta-pass/coinmarketcap"}
            state={{ event: data.state }}
            className="linear-border"
          >
            <button className="btn filled-btn px-4">More</button>
          </Link>
        ) : (
          <Link
            onClick={onClose}
            to={`/marketplace/events/upcoming`}
            state={{ event: data.state }}
            className="linear-border"
          >
            <button className="btn filled-btn px-4">Explore</button>
          </Link>
        )
        // (
        // <Link
        //   onClick={onClose}
        //   to={`/marketplace/beta-pass/${data.state}`}
        //   state={{ event: data.state }}
        //   className="linear-border"
        // >
        //   <button className="btn filled-btn px-4">More</button>
        // </Link>
        // )
      }
    </div>
  );
};

export default MintPopup;
