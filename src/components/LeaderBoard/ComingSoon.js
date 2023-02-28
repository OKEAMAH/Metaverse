import React from "react";
import getFormattedNumber from "../../screens/Caws/functions/get-formatted-number";
import "./_leaderboard.scss";
import playerAvatar from "./assets/userAvatar2.png";

const ComingSoon = ({ optionText }) => {
  const placeholderplayerData = [
    {
      position: "-1",
      displayName: "---",
      reward: "---",
      premium: false,
      statValue: "7,000",
    },
    {
      position: "-1",
      displayName: "---",
      reward: "---",
      premium: false,
      statValue: "5,000",
    },
    {
      position: "-1",
      displayName: "---",
      reward: "---",
      premium: false,
      statValue: "3,000",
    },
    {
      position: "-1",
      displayName: "---",
      reward: "---",
      statValue: "2,000",
      premium: false,
    },

    {
      position: "-1",
      displayName: "---",
      reward: "---",
      premium: false,
      statValue: "1,500",
    },
    {
      position: "-1",
      displayName: "---",
      reward: "---",
      premium: false,
      statValue: "1,000",
    },
    {
      position: "-1",
      displayName: "---",
      reward: "---",
      premium: false,
      statValue: "1,000",
    },
    {
      position: "-1",
      displayName: "---",
      reward: "---",
      premium: false,
      statValue: "500",
    },
    {
      position: "-1",
      displayName: "---",
      reward: "---",
      premium: false,
      statValue: "500",
    },
    {
      position: "-1",
      displayName: "---",
      reward: "---",
      premium: false,
      statValue: "500",
    },
  ];

  const monthlyplayerData = [
    {
      position: "-1",
      displayName: "---",
      reward: "---",
      premium: false,
      statValue: "1,000",
    },
    {
      position: "-1",
      displayName: "---",
      reward: "---",
      premium: false,
      statValue: "500",
    },
    {
      position: "-1",
      displayName: "---",
      reward: "---",
      premium: false,
      statValue: "300",
    },
    {
      position: "-1",
      displayName: "---",
      reward: "---",
      statValue: "100",
      premium: false,
    },

    {
      position: "-1",
      displayName: "---",
      reward: "---",
      premium: false,
      statValue: "50",
    },
    {
      position: "-1",
      displayName: "---",
      reward: "---",
      premium: false,
      statValue: "50",
    },
    {
      position: "-1",
      displayName: "---",
      reward: "---",
      premium: false,
      statValue: "50",
    },
    {
      position: "-1",
      displayName: "---",
      reward: "---",
      premium: false,
      statValue: "50",
    },
    {
      position: "-1",
      displayName: "---",
      reward: "---",
      premium: false,
      statValue: "50",
    },
    {
      position: "-1",
      displayName: "---",
      reward: "---",
      premium: false,
      statValue: "50",
    },
  ];

  return (
    <div
      className="d-flex flex-column position-relative"
      style={{ pointerEvents: "none", userSelect: "none" }}
    >
      <table className="playerTable comingsoon">
        <tr className="playerRow">
          <th className="playerHeader">Rank</th>
          <th className="playerHeader">Player</th>
          <th className="playerHeader">Gem Hits</th>
          <th className="playerHeader">Reward</th>
        </tr>
        {placeholderplayerData &&
          optionText === "genesis" &&
          placeholderplayerData.length > 0 &&
          placeholderplayerData.map((item, index) => {
            return (
              <tr key={index} className={`playerInnerRow`}>
                <td className="playerData col-2">
                  #{Number(item.position) + 1}
                </td>
                <td className="playerName col-5">
                  <div className="position-relative">
                    <img src={playerAvatar} alt="" className="playerAvatar" />{" "}
                    {item.displayName}
                  </div>
                </td>
                <td className="playerScore col-3">
                  {getFormattedNumber(item.reward, 0)}
                </td>
                <td className="playerReward col-2">$ {item.statValue}</td>
              </tr>
            );
          })}

        {monthlyplayerData &&
          optionText === "monthly" &&
          monthlyplayerData.length > 0 &&
          monthlyplayerData.map((item, index) => {
            return (
              <tr key={index} className={`playerInnerRow`}>
                <td className="playerData col-2">
                  #{Number(item.position) + 1}
                </td>
                <td className="playerName col-5">
                  <div className="position-relative">
                    <img src={playerAvatar} alt="" className="playerAvatar" />{" "}
                    {item.displayName}
                  </div>
                </td>
                <td className="playerScore col-3">
                  {getFormattedNumber(item.reward, 0)}
                </td>
                <td className="playerReward col-2">$ {item.statValue}</td>
              </tr>
            );
          })}
      </table>
      <span className="font-organetto watermark">Coming Soon</span>
    </div>
  );
};

export default ComingSoon;
