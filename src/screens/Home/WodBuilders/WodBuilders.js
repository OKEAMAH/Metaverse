import React from "react";
import "./_wodbuilders.scss";
import { useState } from "react";
import useWindowSize from "../../../hooks/useWindowSize";
const WodBuilders = () => {
  const [slice, setSlice] = useState(2);
  const windowSize = useWindowSize();
  const builders = [
    {
      name: "Avalanche",
      icon: "avaxIcon",
      banner: "avalancheBanner",
      link: "https://twitter.com/ArtOnAvax/status/1666852593480658944",
    },
    {
      name: "Chainlink",
      icon: "chainlinkIcon",
      banner: "chainlinkBanner",
      link: "https://twitter.com/smartcontract/status/1639280913870893056?s=46&t=nb0doR-1o7k9PQ3EaZE8aw",
    },
    {
      name: "Conflux",
      icon: "confluxIcon",
      banner: "confluxBanner",
      link: "https://twitter.com/Conflux_Network/status/1677017988497563660",
    },
    {
      name: "BNB Chain",
      icon: "bnbIcon",
      banner: "bnbChainBanner",
      link: "https://twitter.com/BNBCHAIN/status/1705265706747548051?t=7iSDimripaRiwq6A_Z6ViQ&s=19",
    },
    {
      name: "CoinGecko",
      icon: "coingeckoIcon",
      banner: "coingeckoBanner",
      link: "https://twitter.com/coingecko/status/1702286607846682909",
    },
    {
      name: "Coin98",
      icon: "coin98Icon",
      banner: "coin98Banner",
      link: "https://twitter.com/coin98_wallet/status/1628742662047272961",
    },
    {
      name: "Gate.io",
      icon: "gateIcon",
      banner: "gateBanner",
      link: "https://twitter.com/gate_io/status/1628384476496527361?s=20",
    },
    {
      name: "MEXC Global",
      icon: "mexcIcon",
      banner: "mexcBanner",
      link: "https://twitter.com/MEXC_Official/status/1651888989098455043",
    },
    {
      name: "KuCoin",
      icon: "kucoinIcon",
      banner: "kucoinBanner",
    },
    {
      name: "Easy2Stake",
      icon: "easy2stakeIcon",
      banner: "easy2stakeBanner",
    },
  ];

  return (
    <>
      <div
        className="px-3 px-lg-5 d-flex flex-column justify-content-center align-items-center  "
        id="wodbuilders"
      >
        <div className="d-flex  justify-content-center align-items-center mb-4 gap-2">
          <h2 className="font-organetto builders-title explorer-grid-title px-0">
            <mark className="font-organetto explore-tag pe-2">Pioneers</mark>
            shaping the World of Dypians{" "}
          </h2>
        </div>
        <div className="wod-builders-grid">
          {builders
            .slice(0, windowSize.width > 786 ? 8 : slice)
            .map((item, index) => (
              <a
              href={item.link}
              target="_blank"
                key={index}
                className="builder-item p-3 d-flex flex-column gap-2"
              >
                <img
                  src={require(`./assets/${item.banner}.png`)}
                  className="w-100"
                  alt=""
                />
                <div className="d-flex align-items-center gap-2">
                  <img src={require(`./assets/${item.icon}.svg`)} alt="" />
                  <span className="builder-title mb-0">{item.name}</span>
                </div>
              </a>
            ))}
        </div>
        {windowSize.width < 786 && (
          <div className="d-flex justify-content-center mt-3">
            <div
              className="linear-border"
              onClick={() => (slice === 2 ? setSlice(8) : setSlice(2))}
            >
              <button className="btn filled-btn px-5">
                {slice === 2 ? "View More" : "View Less"}
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="w-100 px-3 px-lg-5 mx-0 build-business-wrapper py-4">
        <div className="d-flex flex-column gap-2">
          <h6 className="builder-title mb-0" style={{ fontWeight: "800" }}>
            Building In World of Dypians
          </h6>
          <div className="row mx-0 w-100 gap-4 gap-lg-0 d-flex flex-column flex-lg-row flex-md-column align-items-center justify-content-between">
          <div className="builder-item p-3 col-lg-7 d-flex flex-column gap-3 gap-lg-0 justify-content-between">
            <div className="builders-first-half"></div>
            <div className="builders-second-half">
              {builders.map((item, index) => (
                <div key={index} className="d-flex align-items-center gap-2">
                  <img src={require(`./assets/${item.icon}.svg`)} alt="" />
                  <span
                    className="builder-title mb-0"
                    style={{ fontWeight: "400" }}
                  >
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="d-flex flex-column flex-lg-row gap-2 col-lg-5">
            <div className="build-business-title-wrapper">
              <h6 className="mb-0 font-organetto">
                Bring your business to World of Dypians
              </h6>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <a
                href="https://docs.google.com/forms/d/1s565QWMoCvkKwAWzkXzVPdixN_fLFlnEstya_k7caqs/viewform?edit_requested=true"
                target="_blank"
                className="linear-border"
              >
                <button className="btn filled-btn px-5">Apply</button>
              </a>
            </div>
          </div></div>
        </div>
      </div>
    </>
  );
};

export default WodBuilders;