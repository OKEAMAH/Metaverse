import React from "react";
import useWindowSize from "../../hooks/useWindowSize";
import MobileNav from "../../components/MobileNav/MobileNav";
import MarketSidebar from "../../components/MarketSidebar/MarketSidebar";
import { useState } from "react";
import { useEffect } from "react";
import TimepieceChecklistModal from "../Timepiece/TimepieceChecklistModal";
import addActive from "../../assets/landAssets/addActive.svg";
import addInactive from "../../assets/landAssets/addInactive.svg";
import subtractActive from "../../assets/landAssets/subtractActive.svg";
import subtractInactive from "../../assets/landAssets/subtractInactive.svg";
import blackWallet from "../../assets/wallet-black.svg";
import whitewallet from "../../assets/wallet-white.svg";
import dummyBadge from "../../assets/landAssets/dummyBadge.png";
import mintEthIcon from "../../assets/landAssets/mintEthIcon.svg";
import { shortAddress } from "../../screens/Caws/functions/shortAddress";
import marketMintBanner from "./assets/marketMintBanner.png";

const MarketMint = ({
  showWalletConnect,
  handleMint,
  checkTotalcaws,
  coinbase,
  isConnected,
  totalCreated,
  mintStatus,
  mintloading,
  chainId,
  nftName,
  textColor,
  cawsArray,
  calculateCaws,
  timepieceMetadata,
}) => {
  const windowSize = useWindowSize();
  const [viewCollection, setViewCollection] = useState(false);
  const [nftCount, setNftCount] = useState(1);
  const [nftStatus, setNftStatus] = useState("*50 NFT limit");
  const [status, setStatus] = useState("Connect your wallet.");
  const [showBadge, setshowBadge] = useState(false);
  const [ethToUSD, setethToUSD] = useState(0);
  const [activeButton, setactiveButton] = useState(false);
  const [mouseOver, setMouseOver] = useState(false);
  const [grandPrice, setGrandPrice] = useState(0);
  const [discountprice, setdiscountprice] = useState(0);
  const [countdownFinished, setCountdownFinished] = useState(true);
  const [latestMintId, setlatestMintId] = useState(0);
  const [activeTab, setActiveTab] = useState("live");

  const handleViewCollection = () => {
    setViewCollection(true);
  };

  const handleCreate = () => {
    handleMint({
      numberOfTokens: parseInt(nftCount),
    });
  };

  const addNft = () => {
    if (nftCount === null) {
      setNftCount(1);
    } else if (nftCount < cawsArray.length) {
      setNftCount(nftCount + 1);
    }
  };

  // console.log(totalCaws)
  const subtractNft = () => {
    if (nftCount === null) {
      setNftCount(1);
    } else if (nftCount > 1) {
      setNftCount(nftCount - 1);
    }
  };

  const getTimepieceLatestMint = async () => {
    const result = await window.caws_timepiece.getTimepieceLatestMint();
    setlatestMintId(result - 1);
  };

  const benefits = [
    {
      title: "Exclusive Access",
      icon: "draft",
    },
    {
      title: "Enhanced Interactions",
      icon: "user",
    },
    {
      title: "Special Rewards",
      icon: "star",
    },
    {
      title: "Expanded Functionality",
      icon: "expand",
    },
  ];

  useEffect(() => {
    if (coinbase && chainId === 1) {
      if (cawsArray.length === 0) {
        setNftStatus("*You are not holding any CAWS NFT.");
      } else if (cawsArray.length > 0) {
        if (cawsArray.length < nftCount && cawsArray.length > 0) {
          setNftStatus("*You don't have enough CAWS NFTs.");
          setTimeout(() => {
            setNftCount(cawsArray.length);
            setNftStatus("*50 NFT limit.");
          }, 3000);
        } else if (nftCount > 50 && cawsArray.length === 50) {
          setNftStatus("*Exceeded mint limit of 10 NFTs.");
          setTimeout(() => {
            setNftCount(cawsArray.length);
            setNftStatus("*50 NFT limit.");
          }, 3000);
        } else if (cawsArray.length > 0 && cawsArray.length >= nftCount) {
          setNftStatus("*50 NFT limit.");
        }
      }
    }
  }, [nftCount, coinbase, cawsArray.length]);

  useEffect(() => {
    if (isConnected) {
      if (chainId !== undefined) {
        if (chainId !== 1) {
          setactiveButton(false);
          setStatus("Switch to Ethereum Chain to continue minting.");
        }
        if (chainId === 1) {
          setactiveButton(true);
          setStatus("");
        }
      }
    }
    getTimepieceLatestMint();
  }, [isConnected, chainId, coinbase]);

  useEffect(() => {
    if (isConnected) {
      calculateCaws({
        numberOfTokens: parseInt(nftCount),
      });
    }
  }, [nftCount, isConnected, coinbase, chainId, cawsArray.length]);

  useEffect(() => {
    if (coinbase && isConnected && chainId === 1) {
      if (totalCreated > 0) {
        setshowBadge(true);
      }
    }
  }, [coinbase, chainId, isConnected, totalCreated]);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Timepiece Mint";
  }, []);

  return (
    <>
      <div
        className="container-fluid d-flex justify-content-end mt-5 mt-lg-0 p-0"
        style={{ minHeight: "72vh", maxWidth: '2400px' }}

      >
        {windowSize.width < 992 ? <MobileNav /> : <MarketSidebar />}
        <div
          className="container-nft d-flex align-items-start flex-column gap-2 px-3 px-lg-5 my-4 position-relative"
          style={{ minHeight: "72vh", backgroundSize: "cover" }}
        >
          <div className="container-lg mx-0 px-0">
            <div className="row justify-content-center align-items-center w-100 mx-0 px-3 py-3 p-lg-0 gap-5 gap-lg-0">
              {/* <div className="row align-items-center mb-5">
        <div className="col-12 col-lg-7">
          <div className="d-flex flex-column gap-2">
          <h6 className="market-mint-title d-flex
           gap-2 flex-lg-row align-items-center">
          NFT{" "}
          <span
            className="market-mint-title"
            style={{ color: "#8c56ff" }}
          >
            Minting
          </span>
        </h6>
          <p className="market-mint-desc">
          Mint your CAWS Timepiece NFT for free using your original CAWS NFT and unlock exclusive metaverse benefits.
          </p>
        </div>          
        </div>
        <div className="col-12 col-lg-5 d-flex justify-content-center justify-content-lg-end">
          <img src={marketMintBanner} alt="" className="w-75" />
        </div>
        </div> */}

              <h6 className="nft-page-title font-raleway mt-3 mb-4 mb-lg-4 mt-lg-4">
                NFT <span style={{ color: "#8c56ff" }}> Minting</span>
              </h6>
            <div className="d-flex flex-column">
            <div className="d-flex w-100 align-items-center justify-content-center gap-4">
                <h6
                  className={`new-stake-tab ${
                    activeTab === "live" && "stake-tab-active"
                  } px-3 py-2`}
                  onClick={() => setActiveTab("live")}
                >
                  Live
                </h6>
                <h6
                  className={`new-stake-tab ${
                    activeTab === "upcoming" && "stake-tab-active"
                  } px-3 py-2`}
                  onClick={() => setActiveTab("upcoming")}
                >
                  Upcoming
                </h6>
                <h6
                  className={`new-stake-tab ${
                    activeTab === "past" && "stake-tab-active"
                  } px-3 py-2`}
                  onClick={() => setActiveTab("past")}
                >
                  Past
                </h6>
              </div>
              <span className="w-100 new-stake-divider mt-3 mb-5"></span>
            </div>

              {activeTab === "live" && (
                <>
                  <div className="col-12 col-md-12 col-xxl-3 ps-2 ps-lg-0 staking-height-2">
                    <div className="d-flex flex-column gap-3 justify-content-between staking-height-2">
                      <div className="d-flex flex-column position-relative">
                        {showBadge && totalCreated > 0 && (
                          <div className="totalcreated">
                            <span>{totalCreated}</span>
                          </div>
                        )}
                        <div
                          className={`genesis-wrapper ${
                            totalCreated > 0
                              ? "genesis-land"
                              : "genesis-land-empty"
                          } d-flex justify-content-center align-items-center p-3 position-relative`}
                          style={{ height: 312 }}
                        >
                          <img
                            src={dummyBadge}
                            className="genesis-badge"
                            style={{ visibility: "hidden" }}
                            alt="badge"
                          />
                        </div>
                        <div
                          className="genesis-desc position-relative"
                          style={{ bottom: "5px" }}
                        >
                          <h6 className="font-organetto land-desc w-75">
                            CAWS TIMEPIECE
                          </h6>
                        </div>
                      </div>
                      <div
                        className={
                          isConnected === false ||
                          activeButton === false ||
                          totalCreated === 0
                            ? "linear-border-disabled"
                            : "linear-border"
                        }
                      >
                        <button
                          className={`btn ${
                            isConnected === false ||
                            activeButton === false ||
                            totalCreated === 0
                              ? "outline-btn-disabled"
                              : "outline-btn"
                          } px-5 w-100`}
                          disabled={
                            isConnected === false ||
                            activeButton === false ||
                            totalCreated === 0
                          }
                          onClick={handleViewCollection}
                        >
                          View collection
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    className="col-12 col-md-12 col-xxl-5 mt-0 px-0"
                    style={{ overflowX: "hidden" }}
                  >
                    <div
                      className="p-4 mint-wrappernew market-mint-bg w-100 m-0 d-flex flex-column gap-5 justify-content-start staking-height"
                      style={{ minHeight: "463px" }}
                    >
                      {/* <img
            src={require("../../components/TimepieceMint/assets/timepiecehero.webp")}
            alt=""
            className="minthero d-none d-xl-flex d-lg-flex"
          /> */}
                      <h6 className="marketmintnewtitle position-relative">
                        Mint your Timepiece <br />
                        NFT
                        <span className="marketmintnewtitle-marked mx-2">
                          now!
                        </span>
                      </h6>
                      <div className="d-flex flex-column gap-4 p-3 pt-xxl-0 pt-lg-0 col-12 col-md-9 col-lg-7  justify-content-between align-items-start position-relative">
                        <div className="mint-benefits-grid">
                          {benefits.map((item) => (
                            <div className="d-flex align-items-center gap-2">
                              <img
                                src={require(`../../components/TimepieceMint/assets/${item.icon}.png`)}
                                alt=""
                                style={{
                                  scale: item.icon === "expand" ? "0.8" : "1",
                                }}
                              />
                              <span className="mint-benefits-title">
                                {item.title}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-12 col-xxl-4 mt-0">
                    <div className="p-3 mint-wrappernew d-flex flex-column justify-content-between staking-height gap-2">
                      <div className="row flex-column flex-xxl-row flex-xl-row flex-lg-row flex-md-row flex-sm-row gap-1 align-items-center justify-content-between">
                        <div className="d-flex justify-content-between gap-2 position-relative flex-column flex-xxl-row flex-lg-row flex-md-row">
                          <span className="land-name">
                            Available NFTs to mint:{" "}
                            <span
                              className="addr-text"
                              style={{ color: "rgb(123, 216, 176)" }}
                            >
                              {cawsArray.length}
                            </span>
                          </span>
                        </div>
                      </div>

                      <div className="d-flex mt-0 flex-column flex-lg-row align-items-start gap-2 justify-content-center justify-content-xxl-between justify-content-lg-between justify-content-md-between">
                        <div className="d-flex flex-column gap-2 col-12 col-lg-6">
                          <span className="land-name">Name</span>
                          <div
                            className="borderText borderText2"
                            style={{ width: "100%" }}
                          >
                            <h6
                              className="land-placeholder mb-0"
                              style={{ marginLeft: 11 }}
                            >
                              {nftName === "" ? "" : `Caws Timepiece`}
                            </h6>
                          </div>
                        </div>
                        <div className="d-flex flex-column gap-2 col-12 col-lg-6">
                          <span className="land-name">Latest Mint</span>
                          <h6
                            className="land-placeholder borderText"
                            style={{
                              fontSize: "12px",
                              paddingLeft: 14,
                              lineHeight: "40px",
                            }}
                          >
                            # {latestMintId}
                          </h6>
                        </div>
                      </div>
                      <hr className="mint-divider m-0" />
                      <div className="d-flex align-items-center justify-content-between position-relative gap-3">
                        <div className="input-container position-relative col-8 col-lg-6">
                          <input
                            type="number"
                            placeholder="Nr. of CAWS Timepiece NFT to create"
                            max={cawsArray.length}
                            min={1}
                            className="land-input w-100"
                            value={parseInt(nftCount)}
                            onChange={(e) =>
                              setNftCount(parseInt(e.target.value))
                            }
                          />
                        </div>

                        <div className="d-flex align-items-center gap-3">
                          <img
                            src={
                              nftCount > 1 &&
                              isConnected === true &&
                              activeButton === true &&
                              status === ""
                                ? subtractActive
                                : subtractInactive
                            }
                            alt="subtract"
                            onClick={subtractNft}
                            style={{
                              cursor:
                                isConnected === true && activeButton === true
                                  ? "pointer"
                                  : "default",
                              pointerEvents:
                                isConnected === true &&
                                activeButton === true &&
                                status === ""
                                  ? "auto"
                                  : "none",
                            }}
                          />
                          <img
                            src={
                              nftCount < cawsArray.length &&
                              nftCount >= 1 &&
                              isConnected === true &&
                              activeButton === true &&
                              status === ""
                                ? addActive
                                : addInactive
                            }
                            alt="add"
                            onClick={addNft}
                            style={{
                              cursor:
                                isConnected === true && activeButton === true
                                  ? "pointer"
                                  : "default",
                              pointerEvents:
                                isConnected === true &&
                                activeButton === true &&
                                status === ""
                                  ? "auto"
                                  : "none",
                            }}
                          />
                        </div>
                      </div>
                      <span
                        className="limit-span position-relative"
                        style={{
                          color: nftStatus.includes("Exceeded")
                            ? "#D87B7B"
                            : "#FFFFFF",
                          bottom: "auto",
                        }}
                      >
                        {nftStatus}
                      </span>
                      <hr className="mint-divider m-0" />
                      {/* {cawsArray.length > 0 && nftCount > 0 && (
            <span className="land-name">
              Number of CAWS NFTs left after minting:{" "}
              <span
                className="addr-text"
                style={{ color: "rgb(123, 216, 176)" }}
              >
                {cawsArray.length - nftCount}
              </span>
            </span>
          )}  */}
                      {mintStatus.length > 0 && (
                        <span
                          style={{ color: textColor }}
                          className={
                            mintStatus.includes("Success")
                              ? "mint-span-success"
                              : "mint-span"
                          }
                        >
                          {mintStatus}
                        </span>
                      )}
                      <div className="d-flex flex-column flex-lg-row gap-3 align-items-center justify-content-between">
                        <div className="d-flex flex-column flex-lg-row align-items-center align-items-lg-center justify-content-xxl-end justify-content-lg-end justify-content-center w-100">
                          <div className="d-flex flex-column flex-lg-row gap-3 align-items-center justify-content-center">
                            <div
                              className={
                                (isConnected === true &&
                                  chainId !== 1 &&
                                  cawsArray.length === 0) ||
                                (status !== "Connect your wallet." &&
                                  status !== "") ||
                                mintloading === "error" ||
                                (isConnected === true &&
                                  chainId === 1 &&
                                  cawsArray.length === 0)
                                  ? "linear-border-disabled"
                                  : "linear-border"
                              }
                            >
                              <button
                                className={`btn ${
                                  mintloading === "error"
                                    ? "filled-error-btn"
                                    : (isConnected === true &&
                                        chainId !== 1 &&
                                        cawsArray.length === 0) ||
                                      (status !== "Connect your wallet." &&
                                        status !== "") ||
                                      (isConnected === true &&
                                        chainId === 1 &&
                                        cawsArray.length === 0)
                                    ? "outline-btn-disabled"
                                    : "filled-btn"
                                }  px-4 w-100`}
                                onClick={() => {
                                  isConnected === true && chainId === 1
                                    ? handleCreate()
                                    : showWalletConnect();
                                }}
                                disabled={
                                  mintloading === "error" ||
                                  mintloading === "success" ||
                                  (isConnected === true && chainId !== 1) ||
                                  (status !== "Connect your wallet." &&
                                    status !== "") ||
                                  (isConnected === true &&
                                    chainId === 1 &&
                                    cawsArray.length === 0)
                                    ? true
                                    : false
                                }
                                onMouseEnter={() => {
                                  setMouseOver(true);
                                }}
                                onMouseLeave={() => {
                                  setMouseOver(false);
                                }}
                              >
                                {(isConnected === false || chainId !== 1) && (
                                  <img
                                    src={
                                      mouseOver === false
                                        ? blackWallet
                                        : whitewallet
                                    }
                                    alt=""
                                    style={{ width: "23px", height: "23px" }}
                                  />
                                )}{" "}
                                {mintloading === "initial" &&
                                isConnected === true &&
                                chainId === 1 ? (
                                  "Mint"
                                ) : mintloading === "mint" &&
                                  isConnected === true &&
                                  chainId === 1 ? (
                                  <>
                                    <div
                                      className="spinner-border "
                                      role="status"
                                    ></div>
                                  </>
                                ) : mintloading === "error" &&
                                  isConnected === true &&
                                  chainId === 1 ? (
                                  "Failed"
                                ) : mintloading === "success" &&
                                  isConnected === true &&
                                  activeButton ===
                                    (isConnected === true && chainId === 1) ? (
                                  "Success"
                                ) : isConnected === true && chainId !== 1 ? (
                                  " Switch Chain"
                                ) : (
                                  "Connect wallet"
                                )}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {activeTab === "upcoming" && (
                <div className="new-stake-info-wrapper flex-column flex-lg-row gap-3 gap-lg-0 p-5 d-flex align-items-center justify-content-center">
                  <div className="d-flex flex-column align-items-center gap-2">
                    <h6 className="upcoming-stake">Mints are coming...</h6>
                    <span className="upcoming-stake-desc">
                      Check back soon!
                    </span>
                  </div>
                </div>
              )}
              {activeTab === "past" && (
                <div className="row w-100 align-items-center gap-4 gap-lg-0">
                  <div className="col-12 col-lg-6">
                    <div className="past-land-mint p-4">
                      <div className="sold-out-tag px-3 py-1">
                        <span className="sold-out-span">Sold Out</span>
                      </div>
                      <div className="d-flex flex-column justify-content-between past-content-wrapper ">
                        <h6 className="past-mint-title">Genesis Land</h6>
                        <div className="d-flex flex-column align-items-center">
                          <h6 className="past-land-mint-amount">1,000</h6>
                          <span className="past-caws-mint-desc">
                          Minted World of Dypians Genesis Land NFTs
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="past-caws-mint p-4">
                      <div className="sold-out-tag px-3 py-1">
                        <span className="sold-out-span">Sold Out</span>
                      </div>
                      <div className="d-flex flex-column justify-content-between past-content-wrapper ">
                        <h6 className="past-mint-title">
                          Cats and Watches Society
                        </h6>
                        <div className="d-flex flex-column align-items-center">
                          <h6 className="past-caws-mint-amount">10,000</h6>
                          <span className="past-caws-mint-desc">
                            Minted Cats and Watches Society (CAWS) NFTs
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {viewCollection === true && (
        <TimepieceChecklistModal
          coinbase={coinbase}
          isConnected={isConnected}
          onClose={() => {
            setViewCollection(false);
          }}
          nftItem={timepieceMetadata}
          open={viewCollection}
        />
      )}
    </>
  );
};

export default MarketMint;
