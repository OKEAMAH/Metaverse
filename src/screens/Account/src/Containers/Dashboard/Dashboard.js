/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { ethers } from "ethers";
import { dashboardBackground } from "../../Themes/Images";
import { GENERATE_NONCE, GET_PLAYER, VERIFY_WALLET } from "./Dashboard.schema";
import { useAuth } from "../../Utils.js/Auth/AuthDetails";

import { getWalletTokens } from "../../web3/tmp";
import { CircularProgress, Grid } from "@mui/material";
import { Cart, LoginWrapper, ErrorAlert, Button } from "../../Components";
import LandCart from "../../Components/Cart/LandCart";
import EmptyCard from "../../Components/Cart/EmptyCard";
import classes from "./Dashboard.module.css";
import ProfileCard from "../../Components/ProfileCard/ProfileCard";

import LeaderBoard from "../../Components/LeaderBoard/LeaderBoard";
import WalletBalance from "../../Components/WalletBalance/WalletBalance";

import useWindowSize from "../../Utils.js/hooks/useWindowSize";
import ChecklistModal from "../../Components/ChecklistModal/ChecklistModal";
import ChecklistLandNftModal from "../../Components/ChecklistModal/ChecklistLandNftModal";
import EmptyGenesisCard from "../../Components/EmptyGenesisCard/EmptyGenesisCard";
import Web3 from "web3";
import { ERC20_ABI } from "../../web3/abis";
import _ from "lodash";
import WalletModal from "../../Components/WalletModal/WalletModal";

import MobileNav from "../../../../../components/MobileNav/MobileNav";
import MarketSidebar from "../../../../../components/MarketSidebar/MarketSidebar";

import getListedNFTS from "../../../../../actions/Marketplace";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

function Dashboard({
  account,
  isConnected,
  chainId,
  coinbase,
  handleConnect,
  myCawsWodStakes,
  landStaked,
  ethTokenData,
  dypTokenData,
  onSigninClick,
  onLogoutClick,
}) {
  const { email, logout } = useAuth();

  const override = {
    display: "block",
    margin: "auto",
    borderColor: "#554fd8",
  };

  const {
    data,
    refetch: refetchPlayer,
    loading: loadingPlayer,
  } = useQuery(GET_PLAYER, {
    fetchPolicy: "network-only",
  });

  const [tokensState, setTokensState] = useState({});
  const [showChecklistModal, setshowChecklistModal] = useState(false);
  const [showChecklistLandNftModal, setshowChecklistLandNftModal] =
    useState(false);
  const firstSlider = useRef();

  const [dypBalance, setDypBalance] = useState();
  const [dypBalancebnb, setDypBalanceBnb] = useState();
  const [dypBalanceavax, setDypBalanceAvax] = useState();
  const [idypBalance, setiDypBalance] = useState();
  const [idypBalancebnb, setiDypBalanceBnb] = useState();
  const [idypBalanceavax, setiDypBalanceAvax] = useState();
  const [loadingRecentListings, setLoadingRecentListings] = useState(false);
  const [showNfts, setShowNfts] = useState(false);
  const [showWalletModal, setshowWalletModal] = useState(false);
  const [stakes, setStakes] = useState([]);
  const [landstakes, setLandStakes] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const [MyNFTSCaws, setMyNFTSCaws] = useState([]);
  const [MyNFTSCawsOld, setMyNFTSCawsOld] = useState([]);
  const [myCawsWodStakesAll, setMyCawsWodStakes] = useState([]);
  const [myWodWodStakesAll, setmyWodWodStakesAll] = useState([]);

  const [MyNFTSTimepiece, setMyNFTSTimepiece] = useState([]);
  const [MyNFTSLand, setMyNFTSLand] = useState([]);
  const [listedNFTS, setListedNFTS] = useState([]);
  const [myBoughtNfts, setmyBoughtNfts] = useState([]);
  const [latest20BoughtNFTS, setLatest20BoughtNFTS] = useState([]);

  const [availableTime, setAvailableTime] = useState();
  const [syncStatus, setsyncStatus] = useState("initial");

  const navigate = useNavigate();
  const location = useLocation();

  const onOpenNfts = () => {
    setShowNfts(!showNfts);
  };

  const [generateNonce, { loading: loadingGenerateNonce, data: dataNonce }] =
    useMutation(GENERATE_NONCE);
  const [verifyWallet, { loading: loadingVerify, data: dataVerify }] =
    useMutation(VERIFY_WALLET);
  //land only stakes
  const getStakesIdsWod = async () => {
    const address = coinbase;
    let stakenft_cawsWod = [];
    const infura_web3 = window.infuraWeb3;
    let staking_contract = new infura_web3.eth.Contract(
      window.LANDSTAKING_ABI,
      window.config.landnftstake_address
    );

    let myStakes = await staking_contract.methods
      .depositsOf(address)
      .call()
      .then((result) => {
        for (let i = 0; i < result.length; i++)
          stakenft_cawsWod.push(parseInt(result[i]));
        return stakenft_cawsWod;
      });

    return myStakes;
  };

  const getmyWodStakes = async () => {
    let myStakes = await getStakesIdsWod();
    if (myStakes && myStakes.length > 0) {
      let stakes = myStakes.map((stake) => window.getNft(stake));

      stakes = await Promise.all(stakes);

      stakes.reverse();
      setLandStakes(stakes);
    } else setLandStakes([]);
  };

  const getCawsStakesIdsCawsWod = async () => {
    const address = coinbase;
    let stakenft_cawsWod = [];
    const infura_web3 = window.infuraWeb3;
    let staking_contract = new infura_web3.eth.Contract(
      window.WOD_CAWS_ABI,
      window.config.wod_caws_address
    );

    let myStakes = await staking_contract.methods
      .depositsOf(address)
      .call()
      .then((result) => {
        for (let i = 0; i < result.length; i++)
          stakenft_cawsWod.push(parseInt(result[i]));
        return stakenft_cawsWod;
      });

    return myStakes;
  };

  const getWodStakesIdsCawsWod = async () => {
    const address = coinbase;
    let stakenft_cawsWod = [];
    const infura_web3 = window.infuraWeb3;
    let staking_contract = new infura_web3.eth.Contract(
      window.WOD_CAWS_ABI,
      window.config.wod_caws_address
    );

    let myStakes = await staking_contract.methods
      .depositsOfWoD(address)
      .call()
      .then((result) => {
        for (let i = 0; i < result.length; i++)
          stakenft_cawsWod.push(parseInt(result[i]));
        return stakenft_cawsWod;
      });

    return myStakes;
  };

  const getmyCawsWodStakes = async () => {
    let myCawsStakes = await getCawsStakesIdsCawsWod();

    let myWodStakes = await getWodStakesIdsCawsWod();

    if (myCawsStakes && myCawsStakes.length > 0) {
      let stakes = myCawsStakes.map((stake) => window.getNft(stake));
      let landstakes = myWodStakes.map((stake) => window.getLandNft(stake));

      stakes = await Promise.all(stakes);
      landstakes = await Promise.all(landstakes);

      stakes.reverse();
      landstakes.reverse();

      setMyCawsWodStakes(stakes);
      setmyWodWodStakesAll(landstakes);
    } else {
      setMyCawsWodStakes([]);
      setmyWodWodStakesAll([]);
    }
  };

  const getTokens = async () => {
    try {
      const res = await getWalletTokens(data?.getPlayer?.wallet?.publicAddress);
      setTokensState(res);
    } catch (error) {
      console.log("🚀 ~ file: Dashboard.js:30 ~ getTokens ~ error", error);
    }
  };

  // const connectWallet = async () => {
  //   try {
  //     await generateNonce({
  //       variables: {
  //         publicAddress: account,
  //       },
  //     });
  //   } catch (error) {
  //     console.log("🚀 ~ file: Dashboard.js:30 ~ getTokens ~ error", error);
  //   }
  // };

  async function connectWallet() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      try {
        await window.ethereum?.enable();
        console.log("Connected!");
        if (window.ethereum.isCoin98) {
          window.WALLET_TYPE = "coin98";
        }
        if (window.ethereum.isMetaMask) {
          window.WALLET_TYPE = "metamask";
        }
        let coinbase_address;
        await window.ethereum
          .request({
            method: "eth_requestAccounts",
          })
          .then((data) => {
            coinbase_address = data[0];
          });
        // window.coinbase_address = coinbase_address.pop();

        return true;
      } catch (e) {
        console.error(e);
        console.log("🚀 ~ file: Dashboard.js:30 ~ getTokens ~ error", e);
        throw new Error("User denied wallet connection!");
      }
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
      console.log("connected to old web3");
      // onConnect();
      return true;
    } else {
      throw new Error("No web3 detected!");
    }
  }

  const signWalletPublicAddress = async () => {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner(account);
      const signature = await signer.signMessage(
        `Signing one-time nonce: ${dataNonce?.generateWalletNonce?.nonce}`
      );
      verifyWallet({
        variables: {
          publicAddress: account,
          signature: signature,
        },
      }).then(() => {
        setsyncStatus("success");

        setTimeout(() => {
          setsyncStatus("initial");
        }, 5000);
      });
    } catch (error) {
      setsyncStatus("error");
      setTimeout(() => {
        setsyncStatus("initial");
      }, 3000);

      console.log("🚀 ~ file: Dashboard.js:30 ~ getTokens ~ error", error);
    }
  };

  const handleSync = async () => {
    setsyncStatus("loading");
    try {
      await generateNonce({
        variables: {
          publicAddress: account,
        },
      });
    } catch (error) {
      setsyncStatus("error");
      setTimeout(() => {
        setsyncStatus("initial");
      }, 3000);
      console.log("🚀 ~ file: Dashboard.js:30 ~ getTokens ~ error", error);
    }
  };

  const getMyNFTS = async (coinbase, type) => {
    return await window.getMyNFTs(coinbase, type);
  };

  //todo
  const fetchAllMyNfts = async () => {
    if (data?.getPlayer?.wallet?.publicAddress || account) {
      getMyNFTS(
        data?.getPlayer?.wallet && email
          ? data?.getPlayer?.wallet?.publicAddress
          : account,
        "caws"
      ).then((NFTS) => setMyNFTSCaws(NFTS));

      getMyNFTS(
        data?.getPlayer?.wallet && email
          ? data?.getPlayer?.wallet?.publicAddress
          : account,
        "cawsold"
      ).then((NFTS) => {
        if (NFTS) {
          setMyNFTSCawsOld(NFTS);
        }
      });

      getMyNFTS(
        data?.getPlayer?.wallet && email
          ? data?.getPlayer?.wallet?.publicAddress
          : account,
        "timepiece"
      ).then((NFTS) => setMyNFTSTimepiece(NFTS));

      getMyNFTS(
        data?.getPlayer?.wallet && email
          ? data?.getPlayer?.wallet?.publicAddress
          : account,
        "land"
      ).then((NFTS) => setMyNFTSLand(NFTS));
    }
  };

  const getOtherNfts = async () => {
    let finalboughtItems1 = [];

    const listedNFTS = await getListedNFTS(
      0,
      "",
      "buyer",
      data?.getPlayer?.wallet && email
        ? data?.getPlayer?.wallet?.publicAddress
        : account,
      ""
    );
    listedNFTS &&
      listedNFTS.length > 0 &&
      listedNFTS.map((nft) => {
        if (nft.nftAddress === window.config.nft_caws_address) {
          nft.type = "caws";
          nft.chain = 1;
          finalboughtItems1.push(nft);
        } else if (nft.nftAddress === window.config.nft_cawsold_address) {
          nft.type = "cawsold";
          nft.chain = 1;
          finalboughtItems1.push(nft);
        } else if (nft.nftAddress === window.config.nft_land_address) {
          nft.type = "land";
          nft.chain = 1;
          finalboughtItems1.push(nft);
        } else if (nft.nftAddress === window.config.nft_timepiece_address) {
          nft.type = "timepiece";
          nft.chain = 1;
          finalboughtItems1.push(nft);
        }
      });
    setmyBoughtNfts(finalboughtItems1);
    setListedNFTS(finalboughtItems1);
  };

  const windowSize = useWindowSize();

  let buttonProps = {
    title: "Connect Wallet",
    onPress: connectWallet,
    loading: loadingVerify || loadingGenerateNonce,
  };

  const renderItems = () => {
    if (
      (tokensState?.items && tokensState?.items?.length === 0) ||
      _.isEmpty(tokensState)
    ) {
      return (
        <>
          {windowSize.width < 701 ? (
            <>
              <div className="nftGridItem">
                <EmptyCard />
              </div>
            </>
          ) : (
            <>
              {" "}
              <div className="nftGridItem">
                <EmptyCard />
              </div>
              <div className="nftGridItem">
                <EmptyCard />
              </div>
            </>
          )}
        </>
      );
    }
    if (tokensState?.items && tokensState?.items?.length > 0) {
      return tokensState.items
        .slice(0, windowSize.width < 701 ? 1 : 2)
        .map((item, index) => (
          <Grid key={index} item xs={3} md={2.4} className="nftGridItem">
            <Cart {...item} stakes={stakes} />
          </Grid>
        ));
    }
  };

  const renderGenesisItems = () => {
    if (
      (tokensState?.landItems && tokensState?.landItems?.length === 0) ||
      _.isEmpty(tokensState)
    ) {
      return (
        <>
          {windowSize.width < 701 ? (
            <>
              <div className="nftGridItem">
                <EmptyGenesisCard />
              </div>
            </>
          ) : (
            <>
              {" "}
              <div className="nftGridItem">
                <EmptyGenesisCard />
              </div>
              <div className="nftGridItem">
                <EmptyGenesisCard />
              </div>
            </>
          )}
        </>
      );
    }
    if (tokensState?.landItems && tokensState?.landItems?.length > 0) {
      return tokensState.landItems
        .slice(0, windowSize.width < 701 ? 1 : 2)
        .map((item, index) => (
          <Grid key={index} item xs={3} md={2.4} className="nftGridItem">
            <LandCart {...item} stakes={landstakes} />
          </Grid>
        ));
    }
  };

  const getDypBalance = async () => {
    const web3eth = new Web3(
      "https://mainnet.infura.io/v3/94608dc6ddba490697ec4f9b723b586e"
    );

    const web3bsc = new Web3("https://bsc-dataseed.binance.org/");

    const web3avax = new Web3("https://api.avax.network/ext/bc/C/rpc");

    if (account !== undefined) {
      const token_address = "0x961c8c0b1aad0c0b10a51fef6a867e3091bcef17";
      const token_addressIDYP = "0xbd100d061e120b2c67a24453cf6368e63f1be056";

      const contract1 = new web3eth.eth.Contract(ERC20_ABI, token_address);
      const contract2 = new web3bsc.eth.Contract(ERC20_ABI, token_address);
      const contract3 = new web3avax.eth.Contract(ERC20_ABI, token_address);

      const contract1_idyp = new web3eth.eth.Contract(
        ERC20_ABI,
        token_addressIDYP
      );
      const contract2_idyp = new web3bsc.eth.Contract(
        ERC20_ABI,
        token_addressIDYP
      );
      const contract3_idyp = new web3avax.eth.Contract(
        ERC20_ABI,
        token_addressIDYP
      );
      const bal1 = await contract1.methods
        .balanceOf(
          data?.getPlayer?.wallet && email
            ? data?.getPlayer?.wallet?.publicAddress
            : account
        )
        .call()
        .then((data) => {
          return web3eth.utils.fromWei(data, "ether");
        });
      setDypBalance(bal1);

      const bal2 = await contract2.methods
        .balanceOf(
          data?.getPlayer?.wallet && email
            ? data?.getPlayer?.wallet?.publicAddress
            : account
        )
        .call()
        .then((data) => {
          return web3bsc.utils.fromWei(data, "ether");
        });
      setDypBalanceBnb(bal2);

      const bal3 = await contract3.methods
        .balanceOf(
          data?.getPlayer?.wallet && email
            ? data?.getPlayer?.wallet?.publicAddress
            : account
        )
        .call()
        .then((data) => {
          return web3avax.utils.fromWei(data, "ether");
        });
      setDypBalanceAvax(bal3);

      const bal1_idyp = await contract1_idyp.methods
        .balanceOf(
          data?.getPlayer?.wallet && email
            ? data?.getPlayer?.wallet?.publicAddress
            : account
        )
        .call()
        .then((data) => {
          return web3eth.utils.fromWei(data, "ether");
        });
      setiDypBalance(bal1_idyp);

      const bal2_idyp = await contract2_idyp.methods
        .balanceOf(
          data?.getPlayer?.wallet && email
            ? data?.getPlayer?.wallet?.publicAddress
            : account
        )
        .call()
        .then((data) => {
          return web3bsc.utils.fromWei(data, "ether");
        });
      setiDypBalanceBnb(bal2_idyp);

      const bal3_idyp = await contract3_idyp.methods
        .balanceOf(
          data?.getPlayer?.wallet && email
            ? data?.getPlayer?.wallet?.publicAddress
            : account
        )
        .call()
        .then((data) => {
          return web3avax.utils.fromWei(data, "ether");
        });
      setiDypBalanceAvax(bal3_idyp);
    }
  };

  async function fetchUserFavorites(userId) {
    if (userId !== undefined && userId !== null) {
      try {
        const response = await fetch(
          `https://api.worldofdypians.com/user-favorites/${userId}`
        );
        if (!response.ok) {
          throw new Error("Error fetching user favorites");
        }
        const data = await response.json();
        // console.log(data.favorites);

        setFavorites(data.favorites);
        return data.favorites;
      } catch (error) {
        console.error("Error fetching user favorites:", error);
        throw error;
      }
    }
  }

  const getLatest20BoughtNFTS = async () => {
    let boughtItems = [];
    let finalboughtItems = [];

    const URL =
      "https://api.studio.thegraph.com/query/46190/marketplace-dypius/v0.0.1";

    const itemBoughtQuery = `
        {
            itemBoughts(first: 20, orderBy: blockTimestamp, orderDirection: desc) {
            nftAddress
            tokenId
            payment_priceType
            price
            buyer
            blockNumber
            blockTimestamp
        }
        }
        `;

    await axios
      .post(URL, { query: itemBoughtQuery })
      .then(async (result) => {
        boughtItems = await result.data.data.itemBoughts;
      })
      .catch((error) => {
        console.log(error);
      });

    // console.log("boughtItems", boughtItems);

    boughtItems &&
      boughtItems.map((nft) => {
        if (nft.nftAddress === window.config.nft_caws_address) {
          nft.type = "caws";
          nft.chain = 1;
          finalboughtItems.push(nft);
        } else if (nft.nftAddress === window.config.nft_cawsold_address) {
          nft.type = "cawsold";
          nft.chain = 1;
          finalboughtItems.push(nft);
        } else if (nft.nftAddress === window.config.nft_land_address) {
          nft.type = "land";
          nft.chain = 1;
          finalboughtItems.push(nft);
        } else if (nft.nftAddress === window.config.nft_timepiece_address) {
          nft.type = "timepiece";
          nft.chain = 1;
          finalboughtItems.push(nft);
        }
      });
    return finalboughtItems;
  };

  useEffect(() => {
    if (dataVerify?.verifyWallet) {
      refetchPlayer();
    }
  }, [dataVerify]);

  useEffect(() => {
    if (dataNonce?.generateWalletNonce) {
      signWalletPublicAddress();
    }
  }, [dataNonce]);

  useEffect(() => {
    if (
      coinbase &&
      data?.getPlayer?.wallet?.publicAddress &&
      email &&
      coinbase.toLowerCase() ===
        data?.getPlayer?.wallet?.publicAddress.toLowerCase()
    ) {
      setsyncStatus("initial");
    }
    fetchAllMyNfts();
    // getTokens();
    // getStakes();
    // getLandStakes();
    if (coinbase) {
      getmyCawsWodStakes();
      getmyWodStakes();
    }
  }, [email, data?.getPlayer?.wallet?.publicAddress, coinbase, chainId]);

  useEffect(() => {
    getOtherNfts();
    getLatest20BoughtNFTS().then((NFTS) => setLatest20BoughtNFTS(NFTS));
    getDypBalance();
    fetchUserFavorites(
      data?.getPlayer?.wallet && email
        ? data?.getPlayer?.wallet?.publicAddress
        : account
    );
  }, [account, email, data?.getPlayer?.wallet]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!isConnected && !coinbase && location.pathname === "/account") {
      navigate("/");
    }
  }, [isConnected, coinbase]);

  return (
    <div
      className="container-fluid d-flex justify-content-end p-0"
      style={{ minHeight: "72vh", maxWidth: "2400px", overflow: "hidden" }}
    >
      {windowSize.width < 992 ? <MobileNav /> : <MarketSidebar />}
      <div className="container-nft d-flex align-items-start px-3 px-lg-5 position-relative">
        <div className="container-lg mx-0">
          <LoginWrapper
            style={{
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
              justifyContent: "normal",
              alignItems: "normal",
              flexDirection: "column",
              gap: "30px",
              height: "auto",
              minHeight: "100%",
            }}
            img={dashboardBackground}
          >
            {loadingPlayer ? (
              <>
                <CircularProgress
                  size={80}
                  style={{ alignSelf: "center", margin: "auto" }}
                />
              </>
            ) : (
              <div className="container-fluid px-0 px-lg-3">
                <div className={""}>
                  <div
                    className={
                      "d-flex flex-column gap-4 justify-content-center align-items-center"
                    }
                    style={{
                      marginTop: 80,
                    }}
                  >
                    <div
                      className={`col-12 d-flex flex-column gap-3  mt-5 mt-lg-0 ${classes.containerPlayer}`}
                    >
                      <ProfileCard
                        email={email}
                        username={data?.getPlayer?.displayName}
                        address={data?.getPlayer?.wallet?.publicAddress}
                        userId={data?.getPlayer?.playerId}
                        balance={dypBalancebnb}
                        availableTime={availableTime}
                        isVerified={data?.getPlayer?.wallet}
                        coinbase={account}
                        handleShowWalletPopup={() => {
                          setshowWalletModal(true);
                        }}
                        onSigninClick={onSigninClick}
                        onLogoutClick={logout}
                        onSyncClick={handleSync}
                        syncStatus={syncStatus}
                      />
                      <WalletBalance
                        ethTokenData={ethTokenData}
                        dypTokenData={dypTokenData}
                        onOpenNfts={onOpenNfts}
                        listedNFTS={listedNFTS}
                        myBoughtNfts={myBoughtNfts}
                        address={data?.getPlayer?.wallet?.publicAddress}
                        coinbase={account}
                        isVerified={data?.getPlayer?.wallet}
                        favoritesArray={favorites}
                        dypBalance={dypBalance}
                        dypBalancebnb={dypBalancebnb}
                        dypBalanceavax={dypBalanceavax}
                        idypBalance={idypBalance}
                        idypBalancebnb={idypBalancebnb}
                        idypBalanceavax={idypBalanceavax}
                        showNfts={showNfts}
                        handleShowWalletPopup={() => {
                          setshowWalletModal(true);
                        }}
                        email={email}
                        userId={data?.getPlayer?.playerId}
                        username={data?.getPlayer?.displayName}
                        myCawsCollected={MyNFTSCaws}
                        myCawsOldCollected={MyNFTSCawsOld}
                        myLandCollected={MyNFTSLand}
                        myTimepieceCollected={MyNFTSTimepiece}
                        landStaked={landstakes}
                        myCawsWodStakes={myCawsWodStakesAll}
                        myWodWodStakes={myWodWodStakesAll}
                        latestBoughtNFTS={latest20BoughtNFTS}
                      />
                    </div>

                    {/* <div className="d-flex flex-column align-items-center w-100">
                <div className="d-flex flex-column gap-2 w-100 mb-4">
                  <h2
                    className={`font-organetto d-flex flex-column flex-xl-row gap-1 align-items-center m-0 bundleTitle`}
                  >
                    Premium
                    <mark className={`font-organetto bundletag`}>events</mark>
                  </h2>
              
                </div>
                <div className="d-flex align-items-start align-items-lg-center gap-2 gap-lg-2 w-100 justify-content-start">
                  <div className="d-flex flex-column align-items-center gap-2">
                    <div
                      className={`premium-package dyp-package ${
                        selectedPackage === "dyp" && "selected-premium"
                      } p-3 gap-3 d-flex flex-column align-items-center justify-content-center`}
                      onClick={() => setSelectedPackage("dyp")}
                    >
                      <img
                        src={dypius}
                        width={40}
                        height={40}
                        alt="premium package icon"
                        className="premium-package-icon"
                      />
                    </div>
                    <h6
                      className="bundleTitle mb-0 fw-normal text-center"
                      style={{ fontSize: "14px", fontFamily: "Poppins" }}
                    >
                      Golden Pass
                    </h6>
                  </div>
                  <div className="d-flex flex-column align-items-center gap-2">
                    <div
                      className={`premium-package ${classes.idypicon} ${
                        selectedPackage === "idyp" && "selected-premium"
                      } p-3 gap-3 d-flex flex-column align-items-center justify-content-center`}
                      onClick={() => setSelectedPackage("idyp")}
                    ></div>
                    <h6
                      className="bundleTitle mb-0 fw-normal text-center"
                      style={{ fontSize: "14px", fontFamily: "Poppins" }}
                    >
                      Puzzle Madness
                    </h6>
                  </div>
                  <div className="d-flex flex-column align-items-center gap-2">
                    <div
                      className={`premium-package dragon-package ${
                        selectedPackage === "dragon" && "selected-premium"
                      } p-3 gap-3 d-flex flex-column align-items-center justify-content-center`}
                      onClick={() => setSelectedPackage("dragon")}
                    >
                      <img
                        src={dragonIcon}
                        width={40}
                        height={40}
                        alt="premium package icon"
                        className="premium-package-icon"
                      />
                    </div>
                    <h6
                      className="bundleTitle mb-0 fw-normal text-center"
                      style={{ fontSize: "14px", fontFamily: "Poppins" }}
                    >
                      Dragon Ruins
                    </h6>
                  </div>

                  <div className="d-flex flex-column align-items-center gap-2">
                    <div
                      className={`premium-package criticalhit-package ${
                        selectedPackage === "criticalHit" && "selected-premium"
                      } p-3 gap-3 d-flex flex-column align-items-center justify-content-center`}
                      onClick={() => setSelectedPackage("criticalHit")}
                    >
                      <img
                        src={dypius}
                        width={40}
                        height={40}
                        alt="premium package icon"
                        className="premium-package-icon"
                      />
                    </div>
                    <h6
                      className="bundleTitle mb-0 fw-normal text-center"
                      style={{ fontSize: "14px", fontFamily: "Poppins" }}
                    >
                      Critical Hit
                    </h6>
                  </div>
                </div>
                <BundleCard
                  coinbase={account}
                  wallet={data?.getPlayer?.wallet?.publicAddress}
                  chainId={chainId}
                  username={data?.getPlayer?.displayName}
                  email={email}
                  getDypBalance={getDypBalance}
                  getiDypBalance={getDypBalance}
                  packageData={
                    selectedPackage === "dragon"
                      ? dragonData
                      : selectedPackage === "dyp"
                      ? dypPackageData
                      : selectedPackage === "criticalHit"
                      ? criticalHitPackageData
                      : iDypPackageData
                  }
                  handleSetAvailableTime={(value) => {
                    setAvailableTime(value);
                  }}
                  availableTime={availableTime}
                />
              </div> */}

                    <LeaderBoard
                      username={data?.getPlayer?.displayName}
                      userId={data?.getPlayer?.playerId}
                      dypBalancebnb={dypBalancebnb}
                      address={data?.getPlayer?.wallet?.publicAddress}
                      availableTime={availableTime}
                    />
                  </div>
                  {/* <div className="d-flex flex-column flex-xxl-row gap-3 justify-content-between">
              <div className={"home-main-wrapper nftBigWrapper"}>
                <h2
                  className={`font-organetto d-flex gap-1 align-items-center m-0 bundleTitle`}
                >
                  Caws
                  <mark className={`font-organetto bundletag`}>Nft</mark>
                </h2>
                <div className="nftcontainer d-flex m-0 flex-column flex-xxl-row flex-lg-row flex-md-row align-items-center position-relative">
                  <div className="ethwrapper position-absolute d-none d-lg-flex">
                    <span className="ethText">
                      <img src={ethereum} alt="" className="ethlogo" /> Ethereum
                    </span>
                  </div>
                  <div className="d-flex gap-5 align-items-end flex-column flex-xxl-row flex-lg-row flex-md-row contentwrapper">
                    {renderItems()}
                    {tokensState?.items?.length > 0 ? (
                      <div
                        className={"linear-border nftGridItem"}
                        style={{ width: "fit-content" }}
                      >
                        <button
                          className={"btn filled-btn px-5"}
                          onClick={() => {
                            setshowChecklistModal(true);
                          }}
                        >
                          View all
                        </button>
                      </div>
                    ) : (
                      <div
                        className={"linear-border nftGridItem"}
                        style={{ width: "fit-content" }}
                      >
                        <a
                          href="https://opensea.io/collection/catsandwatchessocietycaws"
                          target="_blank"
                          rel="noreferrer"
                          className={"btn filled-btn px-5"}
                        >
                          Buy CAWS
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div
                className={
                  "home-main-wrapper d-flex justify-content-end nftBigWrapper"
                }
              >
                <h2
                  className={`font-organetto -flex flex-column flex-xxl-row flex-lg-row flex-md-row flex-sm-row gap-1 align-items-center m-0 bundleTitle`}
                >
                  Genesis Land
                  <mark className={`font-organetto bundletag`}>Nft</mark>
                </h2>
                <div className="nftcontainer d-flex m-0 flex-column flex-xxl-row flex-lg-row flex-md-row align-items-center position-relative">
                  <div className="ethwrapper position-absolute d-none d-lg-flex">
                    <span className="ethText">
                      <img src={ethereum} alt="" className="ethlogo" /> Ethereum
                    </span>
                  </div>
                  <div className="d-flex gap-5 align-items-end flex-column flex-xxl-row flex-lg-row flex-md-row contentwrapper">
                    {renderGenesisItems()}

               
                    {tokensState?.landItems?.length > 0 ? (
                      <div
                        className={"linear-border nftGridItem"}
                        style={{ width: "fit-content" }}
                      >
                        <button
                          className={"btn filled-btn px-5"}
                          onClick={() => {
                            setshowChecklistLandNftModal(true);
                          }}
                        >
                          View all
                        </button>
                      </div>
                    ) : (
                      <div
                        className={"linear-border nftGridItem"}
                        style={{ width: "fit-content" }}
                      >
                        <a
                          href="https://opensea.io/collection/worldofdypians"
                          target="_blank"
                          rel="noreferrer"
                          className={"btn filled-btn px-5"}
                        >
                          Buy WoD Land
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div> */}
                </div>
              </div>
            )}
            {showChecklistModal === true && (
              <ChecklistModal
                show={showChecklistModal}
                handleClose={() => {
                  setshowChecklistModal(false);
                }}
                cawsitem={tokensState?.items?.length > 0 && tokensState.items}
                stakes={stakes}
              />
            )}

            {showWalletModal === true && (
              <WalletModal
                show={showWalletModal}
                handleClose={() => {
                  setshowWalletModal(false);
                }}
                handleConnection={connectWallet}
              />
            )}

            {showChecklistLandNftModal === true && (
              <ChecklistLandNftModal
                show={showChecklistLandNftModal}
                handleClose={() => {
                  setshowChecklistLandNftModal(false);
                }}
                cawsitem={
                  tokensState?.landItems?.length > 0 && tokensState.landItems
                }
                stakes={landstakes}
              />
            )}
            {/* <ErrorAlert error={connectedState?.error} /> */}
          </LoginWrapper>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
