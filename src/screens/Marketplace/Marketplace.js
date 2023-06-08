import React, { useEffect, useState } from "react";
import "./_marketplace.scss";
import { HashLoader } from "react-spinners";
import wodLogo from "./assets/wodLogo.png";
import cawsLogo from "./assets/cawsLogo.png";
import ItemCard from "../../components/ItemCard/ItemCard";
import { NavLink } from "react-router-dom";
import ethIcon from "./assets/ethIcon.svg";
import bnbIcon from "./assets/bnbIcon.svg";
import dypIcon from "./assets/dypIcon.svg";
import CountUp from "react-countup";
import MarketSidebar from "../../components/MarketSidebar/MarketSidebar";
import dypius from "../Account/src/Images/userProfile/dypius.svg";
import dragonIcon from "../Account/src/Images/userProfile/dragonIcon.svg";
import classes from "../Account/src/Containers/Dashboard/Dashboard.module.css";
import useWindowSize from "../../hooks/useWindowSize";
import MobileNav from "../../components/MobileNav/MobileNav";
import Slider from "react-slick";
import topEth from "./assets/topEth.svg";
import { abbreviateNumber } from "js-abbreviation-number";

const Marketplace = ({
  listedNFTS,
  isConnected,
  handleConnect,
  totalListed,
  totalBoughtNFTSinETH,
  totalBoughtNFTSinDYP,
  latest20RecentListedNFTS,
  totalBoughtNFTSCount,
  topSales,
  recentSales,
}) => {
  const override = {
    display: "block",
    margin: "auto",
    borderColor: "#554fd8",
  };

  const [activeSlide, setActiveSlide] = useState(0);
  const [activeSlide2, setActiveSlide2] = useState(0);

  const [loading, setLoading] = useState(false);
  const [activeLink, setActiveLink] = useState("collections");
  const windowSize = useWindowSize();

  var settings = {
    dots: true,
    arrows: true,
    dotsClass: "button__bar",
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    beforeChange: (current, next) => setActiveSlide(next),
    afterChange: (current) => setActiveSlide2(current),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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

  useEffect(() => {
    if (listedNFTS && listedNFTS.length === 0) {
      setLoading(true);
    }
    if (listedNFTS && listedNFTS.length > 0) {
      setLoading(false);
    }
  }, [listedNFTS]);

  return (
    <div
      className="container-fluid mt-5 mt-lg-0 d-flex flex-column-reverse flex-lg-row justify-content-center justify-content-lg-end p-0"
      style={{ minHeight: "72vh", maxWidth: "2400px" }}
    >
      {windowSize.width < 786 ? <MobileNav /> : <MarketSidebar />}
      <div className="container-nft px-3 px-lg-5 position-relative">
        <div className="row justify-content-between align-items-center marketplace-banner my-5">
          <div className="col-12 col-lg-5">
            <h6 className="market-banner-title">
              Unlock the Extraordinary! Explore the World of Dypians
            </h6>
            <h6
              className="market-banner-title"
              style={{ color: "#8C56FF", lineHeight: "80%" }}
            >
              Game Shop!
            </h6>
            <div className="my-4">
              <span className="market-banner-desc my-4">
                Discover the power of NFTs for a unique digital experience.
              </span>
            </div>
          </div>
          <div className="col-12 col-lg-5">
            <img
              src={require("./assets/marketMain.webp")}
              alt=""
              className="market-main w-100"
            />
          </div>
        </div>
        <div className="main-wrapper py-4 w-100">
          {/* <h6 className="nft-wrapper-title font-raleway">Overall status</h6>
          <div className="nft-outer-wrapper d-flex flex-column flex-lg-row gap-3 gap-lg-0 align-items-center justify-content-around p-5">
            <div className="d-flex flex-column align-items-center gap-2">
              <CountUp
                className="stats-amount font-raleway"
                duration={5}
                start={65260200}
                end={65268200}
                decimal=","
              />
              <span className="stats-details font-raleway">
                Total Transactions Ethereum & BNB chain
              </span>
            </div>
            <div className="d-flex flex-column align-items-center gap-2">
              <div className="d-flex align-items-center gap-2">
                <CountUp
                  className="stats-amount font-raleway"
                  duration={5}
                  start={(25 / 100) * abbreviateNumber(totalBoughtNFTSinETH)}
                  end={abbreviateNumber(totalBoughtNFTSinETH)}
                  decimal=","
                />
                {abbreviateNumber(totalBoughtNFTSinETH)}
                <span className="stats-amount font-raleway">ETH</span>
              </div>
              <span className="stats-details font-raleway">Total Volume</span>
            </div>
            <div className="d-flex flex-column align-items-center gap-2">
              <CountUp
                className="stats-amount font-raleway"
                duration={5}
                start={(25 / 100) * totalBoughtNFTSCount}
                end={totalBoughtNFTSCount}
                decimal=","
              />

              <span className="stats-details font-raleway">NFT's Sold</span>
            </div>
          </div> */}
          <div className="row align-items-center">
            <div className="col-12 col-lg-4">
              <div className="stats-container-1 d-flex flex-column align-items-center justify-content-center gap-3">
                <h6 className="stats-value">{abbreviateNumber(65268200)}</h6>
                <span className="stats-desc">Total on-chain transactions</span>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="stats-container-2 d-flex flex-column align-items-center justify-content-center gap-3">
                <h6 className="stats-value">
                  {abbreviateNumber(totalBoughtNFTSinETH)}
                </h6>
                <span className="stats-desc">Total Volume (ETH)</span>
              </div>
            </div>
            <div className="col-12 col-lg-4">
              <div className="stats-container-3 d-flex flex-column align-items-center justify-content-center gap-3">
                <h6 className="stats-value">
                  {abbreviateNumber(totalBoughtNFTSCount)}
                </h6>
                <span className="stats-desc">Sold NFTs</span>
              </div>
            </div>
          </div>
          <h6 className="nft-wrapper-title font-raleway my-4">Active Events</h6>
          <div className="nft-outer-wrapper row d-flex align-items-center justify-content-around p-5 position-relative">
            <NavLink
              to="/marketplace/events"
              state={{ package: "dragon" }}
              className="d-flex flex-column align-items-center gap-2 col-6 col-lg-3 position-relative"
              style={{ textDecoration: "none" }}
            >
              <div className="position-relative package-blur">
                <div className="first-box-blur  d-flex align-items-end justify-content-center">
                  <span className="blur-package-title">Dragon Ruins</span>
                </div>
                <div className="second-box-blur"></div>
                <img
                  src={require("../Account/src/Components/BundleCard/assets/dragonPackageIcon.webp")}
                  alt=""
                  className="blur-img"
                />
              </div>
            </NavLink>
            <NavLink
              to="/marketplace/events"
              state={{ package: "idyp" }}
              className="d-flex flex-column align-items-center gap-2 col-6 col-lg-3 position-relative"
              style={{ textDecoration: "none" }}
            >
              <div className="position-relative package-blur">
                <div className="first-box-blur  d-flex align-items-end justify-content-center">
                  <span className="blur-package-title">Puzzle Madness</span>
                </div>
                <div className="second-box-blur"></div>
                <img
                  src={require("./assets/puzzleMadness.png")}
                  alt=""
                  className="blur-img"
                />
              </div>
            </NavLink>
            <NavLink
              to="/marketplace/events"
              state={{ package: "dyp" }}
              className="d-flex flex-column align-items-center gap-2 col-6 col-lg-3 position-relative"
              style={{ textDecoration: "none" }}
            >
              <div className="position-relative package-blur">
                <div className="first-box-blur  d-flex align-items-end justify-content-center">
                  <span className="blur-package-title">Golden Pass</span>
                </div>
                <div className="second-box-blur"></div>
                <img
                  src={require("./assets/goldenPass.png")}
                  alt=""
                  className="blur-img"
                />
              </div>
            </NavLink>
            <NavLink
              to="/marketplace/events"
              state={{ package: "criticalHit" }}
              className="d-flex flex-column align-items-center gap-2 col-6 col-lg-3 position-relative"
              style={{ textDecoration: "none" }}
            >
              <div className="position-relative package-blur">
                <div className="first-box-blur d-flex align-items-end justify-content-center">
                  <span className="blur-package-title">Critical Hit</span>
                </div>
                <div className="second-box-blur"></div>
                <img
                  src={require("./assets/criticalHit.webp")}
                  alt=""
                  className="blur-img"
                />
              </div>
            </NavLink>
          </div>
          <div className="row mx-1 d-flex my-4 align-items-center nft-outer-wrapper p-5 gap-4 my-4">
            <div className="d-flex align-items-center justify-content-between w-100 position-relative">
              <h6 className="nft-wrapper-title font-raleway mb-0">
                Recent Listings
              </h6>
              <div className="d-flex align-items-center gap-4">
                <h6 className="filter-title filter-selected">All</h6>
                <h6 className="filter-title">CAWS</h6>
                <h6 className="filter-title">WoD</h6>
                <h6 className="filter-title">TimePiece</h6>
              </div>
            </div>
            {windowSize.width > 1600 ? (
              <div
                className={
                  loading === false
                    ? "row align-items-center position-relative"
                    : "loader-wrapper"
                }
                style={{ rowGap: "40px" }}
              >
                {listedNFTS && listedNFTS.length > 0 ? (
                  listedNFTS.map((nft, index) => (
                    <div className="col-12 col-lg-4">
                      <div className="top-sales-card d-flex p-3 align-items-center gap-3 position-relative">
                        <div className="position-absolute top-sales-rank">
                          <span>{index + 1}</span>
                        </div>
                        {/* <span className="sales-number">{index + 1}</span> */}
                        <img
                          src={`https://mint.dyp.finance/thumbs/${nft.tokenId}.png`}
                          width={80}
                          height={80}
                          style={{ borderRadius: "8px" }}
                          alt=""
                        />
                        <div className="d-flex flex-column gap-2">
                          <h6 className="nft-name-wrapper mb-0 py-1 px-2">
                            CAWS #{nft.tokenId}
                          </h6>
                          <div className="d-flex align-items-center gap-1">
                            <img src={topEth} width={20} height={20} alt="" />
                            <span className="top-eth">
                              {" "}
                              {nft.price}{" "}
                              {nft.payment_priceType === 0 ? "ETH" : "DYP"}
                            </span>
                          </div>
                        </div>
                        <span className="position-absolute top-sale-time">
                          a few seconds ago
                        </span>
                      </div>
                    </div>
                  ))
                ) : (
                  <HashLoader
                    color={"#554fd8"}
                    loading={loading}
                    cssOverride={override}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                  />
                )}
              </div>
            ) : loading === false ? (
              <div className="slider-container">
                <Slider {...settings}>
                  {listedNFTS &&
                    listedNFTS.length > 0 &&
                    listedNFTS.map((nft) => (
                      <ItemCard
                        key={nft.id}
                        nft={nft}
                        isConnected={isConnected}
                        showConnectWallet={handleConnect}
                        isCaws={
                          nft.nftAddress === window.config.nft_caws_address ||
                          nft.nftAddress === window.config.nft_cawsold_address
                        }
                        isTimepiece={
                          nft.nftAddress === window.config.nft_timepiece_address
                        }
                        isWod={
                          nft.nftAddress === window.config.nft_land_address
                        }
                      ></ItemCard>
                    ))}
                </Slider>
              </div>
            ) : (
              <HashLoader
                color={"#554fd8"}
                loading={loading}
                cssOverride={override}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            )}
          </div>

          <div className="d-flex row mx-1 flex-column align-items-start nft-outer-wrapper p-5 gap-4 my-4">
            <div className="d-flex align-items-center justify-content-between w-100 position-relative">
              <h6 className="nft-wrapper-title font-raleway mb-0">
                Recent Listings
              </h6>
              <div className="d-flex align-items-center gap-4">
                <h6 className="filter-title filter-selected">All</h6>
                <h6 className="filter-title">CAWS</h6>
                <h6 className="filter-title">WoD</h6>
                <h6 className="filter-title">TimePiece</h6>
              </div>
            </div>
            {windowSize.width > 1600 ? (
              <div
                className={
                  loading === false ? "item-cards-wrapper" : "loader-wrapper"
                }
              >
                {latest20RecentListedNFTS &&
                latest20RecentListedNFTS.length > 0 ? (
                  latest20RecentListedNFTS.map((nft) => (
                    <ItemCard
                      key={nft.id}
                      nft={nft}
                      isConnected={isConnected}
                      showConnectWallet={handleConnect}
                      isCaws={
                        nft.nftAddress === window.config.nft_caws_address ||
                        nft.nftAddress === window.config.nft_cawsold_address
                      }
                      isTimepiece={
                        nft.nftAddress === window.config.nft_timepiece_address
                      }
                      isWod={nft.nftAddress === window.config.nft_land_address}
                    ></ItemCard>
                  ))
                ) : (
                  <HashLoader
                    color={"#554fd8"}
                    loading={loading}
                    cssOverride={override}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                  />
                )}
              </div>
            ) : loading === false ? (
              <div className="slider-container">
                <Slider {...settings}>
                  {latest20RecentListedNFTS &&
                    latest20RecentListedNFTS.length > 0 &&
                    latest20RecentListedNFTS.map((nft) => (
                      <ItemCard
                        key={nft.id}
                        nft={nft}
                        isConnected={isConnected}
                        showConnectWallet={handleConnect}
                        isCaws={
                          nft.nftAddress === window.config.nft_caws_address ||
                          nft.nftAddress === window.config.nft_cawsold_address
                        }
                        isTimepiece={
                          nft.nftAddress === window.config.nft_timepiece_address
                        }
                        isWod={
                          nft.nftAddress === window.config.nft_land_address
                        }
                      ></ItemCard>
                    ))}
                </Slider>
              </div>
            ) : (
              <div className="loader-wrapper">
                <HashLoader
                  color={"#554fd8"}
                  loading={loading}
                  cssOverride={override}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              </div>
            )}
          </div>
          <div className="d-flex row mx-1 flex-column align-items-start nft-outer-wrapper p-5 gap-4 my-4">
            <div className="d-flex align-items-center justify-content-between w-100 position-relative">
              <h6 className="nft-wrapper-title font-raleway mb-0">
                Recent Listings
              </h6>
              <div className="d-flex align-items-center gap-4">
                <h6 className="filter-title filter-selected">All</h6>
                <h6 className="filter-title">CAWS</h6>
                <h6 className="filter-title">WoD</h6>
                <h6 className="filter-title">TimePiece</h6>
              </div>
            </div>
            {windowSize.width > 1600 ? (
              <div
                className={
                  loading === false ? "item-cards-wrapper" : "loader-wrapper"
                }
              >
                {recentSales && recentSales.length > 0 ? (
                  recentSales.map((nft) => (
                    <ItemCard
                      key={nft.id}
                      nft={nft}
                      isConnected={isConnected}
                      showConnectWallet={handleConnect}
                      isCaws={
                        nft.nftAddress === window.config.nft_caws_address ||
                        nft.nftAddress === window.config.nft_cawsold_address
                      }
                      isTimepiece={
                        nft.nftAddress === window.config.nft_timepiece_address
                      }
                      isWod={nft.nftAddress === window.config.nft_land_address}
                    ></ItemCard>
                  ))
                ) : (
                  <HashLoader
                    color={"#554fd8"}
                    loading={loading}
                    cssOverride={override}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                  />
                )}
              </div>
            ) : loading === false ? (
              <div className="slider-container">
                <Slider {...settings}>
                  {recentSales &&
                    recentSales.length > 0 &&
                    recentSales.map((nft) => (
                      <ItemCard
                        key={nft.id}
                        nft={nft}
                        isConnected={isConnected}
                        showConnectWallet={handleConnect}
                        isCaws={
                          nft.nftAddress === window.config.nft_caws_address ||
                          nft.nftAddress === window.config.nft_cawsold_address
                        }
                        isTimepiece={
                          nft.nftAddress === window.config.nft_timepiece_address
                        }
                        isWod={
                          nft.nftAddress === window.config.nft_land_address
                        }
                      ></ItemCard>
                    ))}
                </Slider>
              </div>
            ) : (
              <div className="loader-wrapper">
                <HashLoader
                  color={"#554fd8"}
                  loading={loading}
                  cssOverride={override}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              </div>
            )}
          </div>
          {/* <div className="d-flex w-100 align-items-center justify-content-end">
            <NavLink to="cats-and-watches-society">
              <button className="btn home-hero-btn px-4 py-2">View All</button>
            </NavLink>
          </div> */}

          {/* <div className="mx-0 row my-3">
          <div className="col-12 col-lg-4">
            <NavLink to="/timepiece" style={{color: 'inherit', textDecoration: 'none'}}>
              <CollectionCard
                title={"CAWS Timepiece"}
                collectionName={"timepiece"}
              />
            </NavLink>
          </div>
          <div className="col-12 col-lg-4">
            <NavLink to="/world-of-dypians" style={{color: 'inherit', textDecoration: 'none'}}>
              <CollectionCard
                title={"World of Dypians"}
                collectionName={"wod"}
              />
            </NavLink>
          </div>
          <div className="col-12 col-lg-4">
            <NavLink to="/cats-and-watches-society" style={{color: 'inherit', textDecoration: 'none'}}>
              <CollectionCard
                title={"Cats and Watches Society"}
                collectionName={"caws"}
              />
            </NavLink>
          </div>
        </div> */}
          {/* <div className={loading === false ? "item-cards-wrapper" : ""}>
          {listedNFTS && listedNFTS.length > 0 ? (
            listedNFTS.map((nft) => (
              <ItemCard key={nft.id} nft={nft} isConnected={isConnected} showConnectWallet={handleConnect}></ItemCard>
            ))
          ) : (
            <BounceLoader
              color={"#554fd8"}
              loading={loading}
              cssOverride={override}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          )}
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
